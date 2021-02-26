import siteHeader from './site-cmps/header.cmp.js'
import siteFooter from './site-cmps/footer.cmp.js'

import { router } from './routes.js'

const options = {
    el: '#app',
    router,
    template: `
        <section>
            <site-header />
            <transition name="fade">
            <router-view />
            <site-footer/>
            </transition>
        </section>
    `,
    components: {
        siteHeader,
        siteFooter
    }
}

const app = new Vue(options)

