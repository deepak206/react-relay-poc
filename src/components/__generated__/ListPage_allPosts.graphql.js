/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPage_allPosts$ref: FragmentReference;
declare export opaque type ListPage_allPosts$fragmentType: ListPage_allPosts$ref;
export type ListPage_allPosts = {|
  +id: string,
  +title: string,
  +text: string,
  +$refType: ListPage_allPosts$ref,
|};
export type ListPage_allPosts$data = ListPage_allPosts;
export type ListPage_allPosts$key = {
  +$data?: ListPage_allPosts$data,
  +$fragmentRefs: ListPage_allPosts$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListPage_allPosts",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '484198e7b8eef9e0c7471b7e198766df';
module.exports = node;
