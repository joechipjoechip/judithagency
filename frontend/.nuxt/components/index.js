export { default as Cards } from '../../components/cards.vue'
export { default as CarouselText } from '../../components/carousel-text.vue'
export { default as CarouselWrapper } from '../../components/carousel-wrapper.vue'
export { default as CaseViewer } from '../../components/case-viewer.vue'
export { default as CasesListing } from '../../components/cases-listing.vue'
export { default as Folio } from '../../components/folio.vue'
export { default as Losange } from '../../components/losange.vue'
export { default as Manifesto } from '../../components/manifesto.vue'
export { default as NavDesktop } from '../../components/nav-desktop.vue'
export { default as NavMobile } from '../../components/nav-mobile.vue'
export { default as Navigation } from '../../components/navigation.vue'
export { default as SquaredText } from '../../components/squared-text.vue'
export { default as TeamListing } from '../../components/team-listing.vue'
export { default as MicroArtistBandeau } from '../../components/micro/artist-bandeau.vue'
export { default as MicroMediaHandler } from '../../components/micro/media-handler.vue'
export { default as MicroTitle } from '../../components/micro/title.vue'
export { default as MicroWorkWrapperDesktop } from '../../components/micro/work-wrapper-desktop.vue'
export { default as MicroWorkWrapperMobile } from '../../components/micro/work-wrapper-mobile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
