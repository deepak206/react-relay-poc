import {createFragmentContainer, graphql} from 'react-relay'
import Page from '../components/Page';

export default createFragmentContainer(Page, {
    page: graphql`
    fragment Page_page on Post {
        id,
        title
        text
    }
`
})
