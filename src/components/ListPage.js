import React, { Component, Fragment } from 'react'
import { graphql, QueryRenderer, fetchQuery,createFragmentContainer } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { number } from 'prop-types';
import PageGrid from './PageGrid';

class ListPage extends Component {
  static propTypes = {
    pageList: number,
  }

  state= {
    data: []
  }

  query = graphql`
  query ListPageQuery {
      ...PageGrid_query  @relay(mask: false)
    }
  `;

  // componentDidMount() {
  //   fetchQuery(environment, this.query)
  //   .then(data => {
  //     this.setState({data: data})
  //   });
  // } 

  render() {

    return (
      <Fragment>  
      <Header/> 
      <div className="list">
      <QueryRenderer
        environment={environment}
        query={this.query}
        render={({error, props}) =>{
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (<PageGrid query={props.allPosts}/>
            );
          }
          return <div>Loading</div>;
        } }
      />
      </div>
      </Fragment>
    )
  }
}

export default ListPage;