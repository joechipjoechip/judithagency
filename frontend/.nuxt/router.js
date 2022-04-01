import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cf11719 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _217c9a7c = () => interopDefault(import('../pages/fetchTest.vue' /* webpackChunkName: "pages/fetchTest" */))
const _6d1f5bf7 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _bd3e983a = () => interopDefault(import('../pages/work-with-us.vue' /* webpackChunkName: "pages/work-with-us" */))
const _13c3f528 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cases",
    component: _6cf11719,
    name: "cases"
  }, {
    path: "/fetchTest",
    component: _217c9a7c,
    name: "fetchTest"
  }, {
    path: "/team",
    component: _6d1f5bf7,
    name: "team"
  }, {
    path: "/work-with-us",
    component: _bd3e983a,
    name: "work-with-us"
  }, {
    path: "/",
    component: _13c3f528,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
