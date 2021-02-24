import homePage from './site-pages/home-page.cmp.js'
import aboutPage from './site-pages/about-page.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
    }
    // , //// nested??
    // {
    //     path: '/email/:emailId',
    //     component: emailDetails
    // }

    // BOOKS

    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }
]

export const router = new VueRouter({ routes }) //FIXME: maybe add 'history' mode before final upload