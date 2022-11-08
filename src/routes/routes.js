export default [{
        path: '/',
        name: 'Home',
        component: () =>
            import ("@/views/home-page.vue")
    },
    {
        path: '/about',
        name: 'about-page',
        component: () =>
            import ("@/views/about-page.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ("@/views/login-page.vue")
    },
    {
        path: '/',
        name: 'Dashboard',
        component: () =>
            import ("@/views/dashboard-page.vue")
    },
    {
        path: '/reports',
        name: 'Reports',
        component: () =>
            import ("@/views/reports-page.vue")
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () =>
            import ("@/views/settings-page.vue")
    }
]