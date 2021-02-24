import siteHeader from './site-cmps/header.cmp.js'
import siteFooter from './site-cmps/footer.cmp.js'

import { router } from './routes.js'

const options = {
    el: '#app',
    router: router,
    template: `
        <section>
            <siteHeader />
            <router-view />
            <siteFooter></siteFooter>
        </section>
    `,
    components: {
        siteHeader,
        siteFooter
    }
}

const app = new Vue(options)

