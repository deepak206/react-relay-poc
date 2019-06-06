import React from 'react';

const Page = ({ page }) => {
    console.log('Inside query page',page);
    return (
    <tr>
        <td>{page.id}</td>
        <td>{page.title}</td>
        <td>{page.text} </td>
    </tr>
)};

export default Page;