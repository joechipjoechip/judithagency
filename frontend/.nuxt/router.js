import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _037e116f = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _277d9218 = () => interopDefault(import('../pages/fetchTest.vue' /* webpackChunkName: "pages/fetchTest" */))
const _fb02823e = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _be68e666 = () => interopDefault(import('../pages/work-with-us.vue' /* webpackChunkName: "pages/work-with-us" */))
const _ab5e2104 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _037e116f,
    name: "cases"
  }, {
    path: "/fetchTest",
    component: _277d9218,
    name: "fetchTest"
  }, {
    path: "/team",
    component: _fb02823e,
    name: "team"
  }, {
    path: "/work-with-us",
    component: _be68e666,
    name: "work-with-us"
  }, {
    path: "/",
    component: _ab5e2104,
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
