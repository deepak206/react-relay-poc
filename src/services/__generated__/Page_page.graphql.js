/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Page_page$ref: FragmentReference;
declare export opaque type Page_page$fragmentType: Page_page$ref;
export type Page_page = {|
  +id: string,
  +title: string,
  +text: string,
  +$refType: Page_page$ref,
|};
export type Page_page$data = Page_page;
export type Page_page$key = {
  +$data?: Page_page$data,
  +$fragmentRefs: Page_page$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Page_page",
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
(node/*: any*/).hash = '00123d4b61e8fc854e643bc77f1c90ac';
module.exports = node;
