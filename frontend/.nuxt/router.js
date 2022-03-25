import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a3730e74 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _42f71422 = () => interopDefault(import('../pages/fetchTest.vue' /* webpackChunkName: "pages/fetchTest" */))
const _45f090aa = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _a8d0f4d4 = () => interopDefault(import('../pages/work-with-us.vue' /* webpackChunkName: "pages/work-with-us" */))
const _551956d5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a3730e74,
    name: "cases"
  }, {
    path: "/fetchTest",
    component: _42f71422,
    name: "fetchTest"
  }, {
    path: "/team",
    component: _45f090aa,
    name: "team"
  }, {
    path: "/work-with-us",
    component: _a8d0f4d4,
    name: "work-with-us"
  }, {
    path: "/",
    component: _551956d5,
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
