/**
 * @flow
 * @relayHash 4a1aa52cbacc76b86b0a86ec9e4138b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListPageQueryVariables = {||};
export type ListPageQueryResponse = {|
  +allPosts: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +text: string,
  |}>
|};
export type ListPageQuery = {|
  variables: ListPageQueryVariables,
  response: ListPageQueryResponse,
|};
*/


/*
query ListPageQuery {
  allPosts {
    id
    title
    text
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allPosts",
    "storageKey": null,
    "args": null,
    "concreteType": "Post",
    "plural": true,
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ListPageQuery",
    "id": null,
    "text": "query ListPageQuery {\n  allPosts {\n    id\n    title\n    text\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c22dd12ae506abd3e126ceb0b708c7cd';
module.exports = node;
