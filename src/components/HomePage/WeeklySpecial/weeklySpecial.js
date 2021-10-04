import React from 'react'
import { shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useStyle } from '@magento/venia-ui/lib/classify'
import resourceUrl from '@magento/peregrine/lib/util/makeUrl'
import Gallery from '@components/Gallery'
import CmsBlock from '@components/CmsBlock'
import { useWeekly } from '@talons/HomePage/useWeeklySpecial'
import weeklySpecialCss from './weeklySpecial.css'

const WeeklySpecial = (props) => {
    const classes = useStyle(weeklySpecialCss, props.classes)
    const talonProps = useWeekly()
    const { weeklyDate } = talonProps

    const content =
        weeklyDate &&
        weeklyDate.weeklySpecial.products &&
        weeklyDate.weeklySpecial.products.items ? (
            <Gallery items={weeklyDate.weeklySpecial.products.items} />
        ) : null
    const weeklyUrl = weeklyDate
        ? resourceUrl(
              `/${weeklyDate.weeklySpecial.url_path}${
                  weeklyDate.weeklySpecial.url_suffix || ''
              }`
          )
        : null
    return (
        <>
            <div className={classes.weeklySpecial}>
                <div className={classes.weeklyTitle}>
                    <div className={classes.title}>
                        <FormattedMessage
                            id="weeklyspecial.title"
                            defaultMessage="Weekly Specials"
                        />
                    </div>
                    <div className={classes.date}>
                        <p>09/03 - 09/09</p>
                        <p className={classes.button}>
                            <Link className={classes.link} to={weeklyUrl}>
                                <FormattedMessage
                                    id="weeklyspecial.viewMore"
                                    defaultMessage="View More"
                                />
                            </Link>
                        </p>
                    </div>
                </div>
                {content}
                <div className={classes.control}>
                    <Link className={classes.link} to={weeklyUrl}>
                        <CmsBlock identifiers={'weekly-special-bottom'} />
                        {/* <?php echo $this->getLayout()->createBlock('Magento\Cms\Block\Block')->setBlockId('weekly-special-bottom')->toHtml();?> */}
                    </Link>
                </div>
            </div>
        </>
    )
}
export default WeeklySpecial

WeeklySpecial.propTypes = {
    classes: shape({
        weeklySpecial: string,
        root: string
    })
}
