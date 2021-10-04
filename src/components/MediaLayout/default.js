/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { useMediaQuery } from 'react-responsive'

const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })

    return isNotMobile ? children : null
}

export default Default
