import React from 'react'
import { shape, string } from 'prop-types'
import { Anchor, BackTop } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Menu as MenuIcon } from 'react-feather'

import { useHomePageFloors } from '@talons/HomePageCategory/useHomePageFloors'
import { useStyle } from '@magento/venia-ui/lib/classify'
import homePageCategoryCss from './homePageCategory.css'

import Icon from '@components/Icon'

const CategoryItems = React.lazy(() => import('./homePageCategoryItems'))

const HomePageCategory = (props) => {
    const classes = useStyle(homePageCategoryCss, props.classes)
    const { homePageFloors } = useHomePageFloors()

    const { Link } = Anchor

    const itemsContent = homePageFloors
        ? homePageFloors.homepageFloors.map((item) => {
              return <CategoryItems categoryItem={item} key={item.id} />
          })
        : null
    // const content = weeklyDate.weeklySpecial.products && weeklyDate.weeklySpecial.products.items ? (
    //     <Gallery items={weeklyDate.weeklySpecial.products.items} />
    // ) : null

    const handleAnnchor = (e) => {
        e.preventDefault()
    }

    const escalator = (
        <div className={classes.escalatorwidth}>
            <div className={classes.floatEscalator}>
                <div className={classes.escalatorTitle}>
                    <span className={classes.label}>
                        <FormattedMessage id="categories" />
                    </span>
                    <span className={classes.img}>
                        <Icon src={MenuIcon} />
                    </span>
                </div>
                <ul>
                    <Anchor
                        affix={false}
                        targetOffset={60}
                        onClick={handleAnnchor}
                    >
                        {homePageFloors
                            ? homePageFloors.homepageFloors.map((item) => {
                                  return (
                                      <li
                                          className={classes.floorsItem}
                                          key={item.id}
                                      >
                                          <Link
                                              title={item.name}
                                              href={'#' + item.code}
                                          />
                                          <span className={classes.icon}>
                                              <img
                                                  className={classes.checked}
                                                  src={item.icon_checked}
                                                  alt="null"
                                              />
                                              <img
                                                  className={classes.unchecked}
                                                  src={item.icon_unchecked}
                                                  alt="null"
                                              />
                                          </span>
                                      </li>
                                  )
                              })
                            : null}
                    </Anchor>
                </ul>
                <div className={classes.escalatorTitle}>
                    <BackTop className="backTop">
                        <span className="text">
                            <FormattedMessage
                                id="backtoTop"
                                defaultMessage="Back to Top"
                            />
                        </span>
                    </BackTop>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            <div className={classes.homePageCategory}>
                {itemsContent}
                {escalator}
            </div>
            <h1 className={classes.addNewText}>
                <FormattedMessage
                    id="homeBottom.h1.text"
                    defaultMessage={
                        'Shop at Your Favourite Asian Grocery Store Online'
                    }
                />
            </h1>
        </div>
    )
}
export default HomePageCategory

HomePageCategory.propTypes = {
    classes: shape({
        homePageCategory: string,
        escalatorwidth: string
    })
}
