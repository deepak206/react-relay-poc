import React from 'react';
import Page from './Page';

const PageGrid = ({ query }) => {
    console.log('Inside query renderer',query);
    return (
    <table>
        <tr>
            <th>User Id</th>              
            <th>User Title</th>
            <th>User Text</th>
        </tr>
        {query.map((node, key)=>(
            <Page page={node} key={key}/>
        ))}
    </table>
)};

export default PageGrid;