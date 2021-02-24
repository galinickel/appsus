

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

const router = new VueRouter({ routes })