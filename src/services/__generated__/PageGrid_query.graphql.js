/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PageGrid_query$ref: FragmentReference;
declare export opaque type PageGrid_query$fragmentType: PageGrid_query$ref;
export type PageGrid_query = {|
  +allPosts: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +text: string,
  |}>,
  +$refType: PageGrid_query$ref,
|};
export type PageGrid_query$data = PageGrid_query;
export type PageGrid_query$key = {
  +$data?: PageGrid_query$data,
  +$fragmentRefs: PageGrid_query$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PageGrid_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2b7f71ba4be95a70eded29f5db95b627';
module.exports = node;
