import mergeOperations from '@magento/peregrine/lib/util/shallowMerge'
import DEFAULT_OPERATIONS from './config.gql'
import { useQuery } from '@apollo/client'

export const useConfig = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations)
    const { getConfig } = operations

    const { data } = useQuery(getConfig, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    })

    const config = data
    return {
        config
    }
}
