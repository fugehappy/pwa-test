import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { shape, string, object } from 'prop-types'

import { useHomePageCategory } from '@talons/HomePageCategory/useHomePageCategory'
import { useStyle } from '@magento/venia-ui/lib/classify'
import homePageCategoryCss from './homePageCategoryItems.css'
import resourceUrl from '@magento/peregrine/lib/util/makeUrl'
import SliderGallery from '@components/SliderGallery'

const CategoryItems = (props) => {
    const classes = useStyle(homePageCategoryCss, props.classes)
    const { categoryItem } = props
    const { code } = categoryItem

    const { homePageCategorys } = useHomePageCategory({ code })

    const categories =
        homePageCategorys &&
        homePageCategorys.homepageFloorCategories.length > 0
            ? homePageCategorys.homepageFloorCategories[0]
            : null
    const categoryUrl = categories
        ? resourceUrl(
              `/${categories.categories.url_path}${
                  categories.categories.url_suffix || ''
              }`
          )
        : null
    const header = (
        <div className={classes.titleContent}>
            <Link className={classes.shopAll} to={categoryUrl}>
                <FormattedMessage id="Shopall" defaultMessage="Shop All" />
            </Link>
            <span>{categories ? categories.categories.name : null}</span>
        </div>
    )
    const content = (
        <>
            <ul className={classes.subCat}>
                {categories && categories.sub_categories.length > 0
                    ? categories.sub_categories.map((item) => {
                          return (
                              <li key={item.id}>
                                  <Link
                                      className={classes.subCata}
                                      to={item.url + '.html'}
                                  >
                                      {item.name}
                                  </Link>
                              </li>
                          )
                      })
                    : null}
            </ul>
            <div className={classes.sliderProducts}>
                {categories ? (
                    <SliderGallery
                        items={categories.categories.products.items}
                    />
                ) : null}
            </div>
        </>
    )
    // const content = weeklyDate.weeklySpecial.products && weeklyDate.weeklySpecial.products.items ? (
    //     <Gallery items={weeklyDate.weeklySpecial.products.items} />
    // ) : null

    return (
        <>
            <div className={code} id={code}>
                {header}
                {content}
            </div>
        </>
    )
}
export default CategoryItems

CategoryItems.propTypes = {
    classes: shape({
        shopAll: string
    }),
    categoryItem: object,
    code: string
}
