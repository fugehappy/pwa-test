/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd'
import MediaLayout from '@components/MediaLayout'
import { useBanner } from '@talons/HomePage'
import defaultClasses from './style.less'

const Banner = () => {
    const talonProps = useBanner()
    const { bannerDate } = talonProps

    const slickHomeBannerRef = useRef()
    // const sliderPagerRef = useRef()

    const [sliderCurIndex, setSliderCurIndex] = useState(0)
    const [sliderPagerDistance, setSliderPagerDistance] = useState(null)
    const [sliderBgColor, setSliderBgColor] = useState(null)

    const handleSlickGoTo = useCallback((sliderCur) => {
        const { currentSlide } = slickHomeBannerRef.current.innerSlider.state
        if (currentSlide >= 0) {
            slickHomeBannerRef.current.goTo(sliderCur, true)
        }
    }, [])

    const pcBanner =
        bannerDate &&
        bannerDate.homepageBanners &&
        bannerDate.homepageBanners.pc.items
            ? bannerDate.homepageBanners.pc.items.map((pcItems) => {
                  return (
                      <div key={pcItems.id}>
                          <Link to={pcItems.url}>
                              <img
                                  alt={pcItems.title}
                                  title={pcItems.title}
                                  src={pcItems.image_url}
                              />
                          </Link>
                      </div>
                  )
              })
            : null

    const pcBannerPager =
        bannerDate && bannerDate.homepageBanners.pc.items
            ? bannerDate.homepageBanners.pc.items.map((pcItems, index) => {
                  return (
                      <li
                          className={`pager-item${
                              sliderCurIndex == index ? ' active' : ''
                          }`}
                          key={pcItems.id}
                      >
                          <button
                              onClick={() => {
                                  handleSlickGoTo(index)
                              }}
                          >
                              {pcItems.title}
                          </button>
                      </li>
                  )
              })
            : null

    const sliderMiniBanner =
        bannerDate && bannerDate.homepageBanners.pc_sub.items
            ? bannerDate.homepageBanners.pc_sub.items.map((minItems) => {
                  return (
                      <div key={minItems.id}>
                          <Link to={minItems.url}>
                              <img
                                  alt={minItems.title}
                                  title={minItems.title}
                                  src={minItems.image_url}
                              />
                          </Link>
                      </div>
                  )
              })
            : null

    let moveStep = 0
    let option = {
        items: [],
        baseline: 0,
        currentLastIndex: 4,
        moveIndex: 0,
        moveStep: 0,
        optionsMaxIndex: 0
    }

    const calcSilder = (currentIndex) => {
        let { baseline, currentLastIndex, moveIndex } = option

        if (
            currentIndex !== baseline &&
            currentIndex >= 3 &&
            (baseline === 0 || (baseline > 0 && currentIndex > baseline)) &&
            currentLastIndex + 1 <= option.optionsMaxIndex
        ) {
            // left
            moveIndex += 1
            currentLastIndex += 1
            baseline = currentLastIndex - 2
            moveStep = moveIndex
        } else if (
            currentIndex !== baseline &&
            baseline > 0 &&
            currentIndex < baseline
        ) {
            moveIndex -= 1
            currentLastIndex -= 1
            baseline = currentLastIndex - 2
            moveStep = moveIndex

            if (moveIndex <= 0) {
                moveIndex = 0
                baseline = 0
            }
        }

        option = Object.assign(option, {
            baseline,
            currentLastIndex,
            moveIndex,
            moveStep
        })

        return option.moveStep
    }

    const handleBgColor = (item) => {
        const bgColor = item['background_color'] || null

        if (bgColor) {
            setSliderBgColor({
                backgroundColor: `${bgColor}`
            })
        }
    }

    const sliderSettings = {
        autoplay: false,
        speed: 800,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        draggable: false,
        dots: false,
        beforeChange: (oldIndex, curIndex) => {
            const sliderItems = bannerDate.homepageBanners.pc.items

            if (!option.optionsMaxIndex) {
                option = Object.assign(option, {
                    optionsMaxIndex: sliderItems.length - 1
                })
            }

            if (sliderItems.length > 5) {
                // move
                const index = calcSilder(curIndex)
                if (index !== -1) {
                    // const styles = `transform: translate3d(${-index * 141}px, 0, 0); transition: all 0.25s ease 0s;`
                    // sliderPagerRef.current.style = styles

                    const styles = {
                        transform: `translate3d(${-index * 141}px, 0, 0)`,
                        transition: 'all 0.25s ease 0s'
                    }

                    setSliderPagerDistance(styles)
                }
            }

            setSliderCurIndex(curIndex)
            handleBgColor(sliderItems[curIndex])
        },
        onInit: () => {
            const sliderItems = bannerDate.homepageBanners.pc.items
            handleBgColor(sliderItems[0])
        }
    }

    const minSliderSettings = {
        speed: 800,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        draggable: false
    }

    return (
        <>
            <div className="tnt-home-slider" style={sliderBgColor}>
                <MediaLayout>
                    <div className="tnt-carousel">
                        <Carousel ref={slickHomeBannerRef} {...sliderSettings}>
                            {pcBanner}
                        </Carousel>
                        <div className={defaultClasses.navigation}></div>
                        <div className="pager">
                            <div className="pager-wrapper">
                                <ul style={sliderPagerDistance}>
                                    {pcBannerPager}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {bannerDate &&
                        bannerDate.homepageBanners.pc_sub.items.length > 0 && (
                            <div className="tnt-aside-slider">
                                <div className="aside-slider">
                                    <Carousel {...minSliderSettings}>
                                        {sliderMiniBanner}
                                    </Carousel>
                                </div>
                            </div>
                        )}
                </MediaLayout>
            </div>
        </>
    )
}

export default Banner
