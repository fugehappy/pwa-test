/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { Link } from 'react-router-dom'
import { useConfig } from '@talons/HomePage'
import MediaLayout from '@components/MediaLayout'

const Eflyer = () => {
    const talonProps = useConfig()
    const { config } = talonProps

    return (
        <>
            {config && config.homepageConfig.homepage_eflyer_image.pc && (
                <MediaLayout>
                    <Link href="/store-flyer">
                        <img
                            src={
                                config.homepageConfig.homepage_eflyer_image
                                    .pc || ''
                            }
                            alt="eflyer"
                        />
                    </Link>
                </MediaLayout>
            )}

            {config && config.homepageConfig.homepage_eflyer_image.mb && (
                <MediaLayout type="mobile">
                    <Link href="/store-flyer">
                        <img
                            src={
                                config.homepageConfig.homepage_eflyer_image
                                    .mb || ''
                            }
                            alt="eflyer"
                        />
                    </Link>
                </MediaLayout>
            )}
        </>
    )
}

export default Eflyer
