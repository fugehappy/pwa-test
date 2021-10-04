import { gql } from '@apollo/client'

export const GET_BANNER = gql`
    query getBanner {
        homepageBanners {
            mobile {
                items {
                    background_color
                    id
                    image_url
                    url
                    title
                    type
                    content
                }
                slider_id
                slider_options
            }
            pc {
                items {
                    background_color
                    id
                    image_url
                    url
                    title
                    type
                    content
                }
                slider_id
                slider_options
            }
            pc_sub {
                items {
                    id
                    title
                    type
                    url
                    image_url
                    newweb
                    background_color
                }
                slider_options
            }
        }
    }
`

export default {
    getBannerQuery: GET_BANNER
}
