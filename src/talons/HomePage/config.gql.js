/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { gql } from '@apollo/client'

export const GET_HOMEPAGE_CONFIG = gql`
    query {
        homepageConfig {
            homepage_background_image_mb
            homepage_background_image_pc
            homepage_eflyer_image {
                pc
                mb
            }
        }
    }
`
export default {
    getConfig: GET_HOMEPAGE_CONFIG
}
