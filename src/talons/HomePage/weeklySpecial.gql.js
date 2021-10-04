/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import { gql } from '@apollo/client'
import { ItemsFragment } from '../Fragment/productItems.gql'

export const GET_WEEKLYSPECIAL = gql`
    query weeklySpecial {
        weeklySpecial {
            name
            id
            url_path
            url_suffix
            products(pageSize: 16, sort: { position: DESC }) {
                ...ItemsFragment
            }
        }
    }
    ${ItemsFragment}
`
export default {
    getWeeklySpecialQuery: GET_WEEKLYSPECIAL
}
