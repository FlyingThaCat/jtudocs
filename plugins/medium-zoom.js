// THX FOR @CHEFKISSINC https://github.com/NootInc/NootInc.github.io/blob/master/plugins/medium-zoom.ts

import zoom from 'medium-zoom';

const initZoom = () => {
    zoom('img.zoom:not(.medium-zoom-image)', {
        background: '#000',
    })
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.mixin({
        mounted() {
            initZoom()
        },
        updated() {
            initZoom()
        },
    })
})