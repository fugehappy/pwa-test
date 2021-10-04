import mergeOperations from '@magento/peregrine/lib/util/shallowMerge'
import DEFAULT_OPERATIONS from './weeklySpecial.gql'
import { useQuery } from '@apollo/client'

export const useWeekly = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations)
    const { getWeeklySpecialQuery } = operations

    const { data } = useQuery(getWeeklySpecialQuery, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    })
    const weeklyDate = data
    return {
        weeklyDate
    }
}
