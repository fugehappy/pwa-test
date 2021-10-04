import mergeOperations from '@magento/peregrine/lib/util/shallowMerge'
import DEFAULT_OPERATIONS from './banner.gql'
import { useQuery } from '@apollo/client'

export const useBanner = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations)
    const { getBannerQuery } = operations

    const { data } = useQuery(getBannerQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    })

    const bannerDate = data
    return {
        bannerDate
    }
}
