// import header, footer, apps
import { router } from './routes.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
]

const router = new VueRouter({ routes })

const options = {
    el: '#app',
    router: router,
    template: `
        <section>
            <app-header />
            <router-view />
            <footer><p> &copy; Coffeerights 2021</p></footer>
        </section>
    `,
    components: {
        appHeader
    }
}

const app = new Vue(options)

