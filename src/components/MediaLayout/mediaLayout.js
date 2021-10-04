/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { useEffect, useState } from 'react'
import { string } from 'prop-types'

import Default from './default'
import Desktop from './desktop'
import Mobile from './mobile'
import Tablet from './tablet'

const LayoutMap = new Map([
    ['default', Default],
    ['desktop', Desktop],
    ['mobile', Mobile],
    ['tablet', Tablet]
])

const MediaLayout = ({ children, type }) => {
    const Component = LayoutMap.get(type)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') setIsClient(true)
    }, [])

    return isClient ? <Component>{children}</Component> : null
}

MediaLayout.propTypes = {
    type: string
}

MediaLayout.defaultProps = {
    type: 'default'
}

export default MediaLayout
