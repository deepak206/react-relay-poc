import {createFragmentContainer, graphql} from 'react-relay'
import PageGrid from '../components/PageGrid';

export default createFragmentContainer(PageGrid, {
    query: graphql`
    fragment PageGrid_query on Query {
        allPosts {
            ...Page_page @relay(mask: false)
          }
}    
`});
