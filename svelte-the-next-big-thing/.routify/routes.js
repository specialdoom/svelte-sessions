
/**
 * @roxi/routify 2.18.8
 * File generated Sun Dec 04 2022 11:10:32 GMT+0200 (Eastern European Standard Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-12-04T09:10:32.839Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "C:/Users/blede/Documents/code/considering-svelte/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/blede/Documents/code/considering-svelte/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "settings.svelte",
      "filepath": "/settings.svelte",
      "name": "settings",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/blede/Documents/code/considering-svelte/src/pages/settings.svelte",
      "importPath": "../src/pages/settings.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/settings",
      "id": "_settings",
      "component": () => import('../src/pages/settings.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "todos.svelte",
      "filepath": "/todos.svelte",
      "name": "todos",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/blede/Documents/code/considering-svelte/src/pages/todos.svelte",
      "importPath": "../src/pages/todos.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/todos",
      "id": "_todos",
      "component": () => import('../src/pages/todos.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

