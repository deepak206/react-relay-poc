import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../config/Environment'

const mutation = graphql`
  mutation CreatePostMutation($title: String!, $text: String!) {
    createPost(title: $title,text: $text) {
      id
    }
  }
`;

export default function CreatePostMutation(title, text, callback) {
  const variables = {
    title,
    text,
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback()
      },
      onError: err => console.error(err),        
    },
  )
}