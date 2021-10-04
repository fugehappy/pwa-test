/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import classnames from 'classnames'
import { elementType, number, string, bool } from 'prop-types'
import { Loader } from 'react-feather'

/**
 * This is a icon component
 *
 * @typedef Icon
 * @kind functional component
 *
 * @param {props} props Icon component props
 *
 * @returns {Element} A Icon component
 */
const Icon = ({ size, classes, src: Component, loading, ...restProps }) => {
    return (
        <span
            className={classnames(classes, { 'icon--loading': loading })}
            {...restProps}
        >
            {loading ? <Loader size={size} /> : <Component size={size} />}
        </span>
    )
}

/**
 * Props for {Icon}
 *
 * @typedef props
 *
 * @property {Number} size The number of icon size
 * @property {String} classes The string of className for icon
 * @property {ElementType} src The element for react feature icons
 * @property {Boolean} loading Set the loading status of icon
 */
Icon.propTypes = {
    size: number,
    classes: string,
    src: elementType.isRequired,
    loading: bool
}

Icon.defaultProps = {
    size: 24,
    classes: '',
    loading: false
}

export default Icon
