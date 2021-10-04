/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { useMediaQuery } from 'react-responsive'

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })

    return isTablet ? children : null
}

export default Tablet
