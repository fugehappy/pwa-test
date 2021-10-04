/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    return isDesktop ? children : null
}

export default Desktop
