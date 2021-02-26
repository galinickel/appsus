import homePage from './site-pages/home-page.cmp.js'
import aboutPage from './site-pages/about-page.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'

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
        component: emailApp,
        children: [
            // {
            //     path: '/all',
            //     component: emailList
            // },
            {
                path: ':folder/',
                component: emailList
            },
            {
                path: ':folder/:emailId',
                component: emailDetails
            }
        ]
    },

    // BOOKS

    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }
]

export const router = new VueRouter({ routes })
