import React, { Component, Fragment } from 'react'
import { graphql, QueryRenderer, fetchQuery,createFragmentContainer } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { number } from 'prop-types';


class ListPage extends Component {
  static propTypes = {
    pageList: number,
  }

  
  query = graphql`
  query ListPageQuery {
      allPosts {
        id
        title
        text
      }
    }
  `;

  componentDidMount() {
    fetchQuery(environment, this.query)
    .then(data => {
     // this.props.dispatch(pageReducer(data.allPosts)) 
    });
  } 

  render() {
    const { pageList } = this.props;
    return (
      <Fragment>  
      <Header/> 
      <div className="list">
        <table>
          <tr>
              <th>User Id</th>              
              <th>User Title</th>
              <th>User Text</th>
          </tr>
          {pageList.length && pageList.map((node)=>(
            <tr>
              <td>{node.id}</td>
              <td>{node.title}</td>
              <td>{node.text} </td>
            </tr>
          ))}
        </table>
      </div>
      </Fragment>
    )
  }
}


export default createFragmentContainer(ListPage, {
  allPosts: graphql`
    fragment ListPage_allPosts on Post {
        id
        title
        text
    }
  `,
});