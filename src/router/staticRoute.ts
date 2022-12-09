export default [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: () => import('../views/home.vue')
}, {
    path: '/product',
    redirect: '/product/wrightin',
    component: () => import('../views/routerView.vue'),
    children: [{
        path: "wrightinTwo",
        component: () => import('../views/product/wrightinTwo.vue')
    }, {
        path: "wrightin",
        component: () => import('../views/product/wrightin.vue')
    }, {
        path: "kegel",
        component: () => import('../views/product/kegel.vue')
    }, {
        path: "wireless",
        component: () => import('../views/product/wireless.vue')
    }, {
        path: "rule",
        component: () => import('../views/product/rule.vue')
    }]
}, {
    path: '/app',
    component: () => import('../views/app.vue')
}, {
    path: '/technology',
    component: () => import('../views/technology.vue')
}, {
    path: '/about',
    redirect: '/about/info',
    component: () => import('../views/routerView.vue'),
    children: [{
        path: "info",
        component: () => import('../views/about/info.vue')
    }, {
        path: "contact",
        component: () => import('../views/about/contact.vue')
    }, {
        path: "join",
        component: () => import('../views/about/join.vue')
    }]
}, {
    path: '/apps', //各种用户协议(临时存放)
    redirect: '/apps/lanTingUserAgreement',
    component: () => import('../views/routerView.vue'),
    children: [{
        path: "lanTingUserAgreement",
        component: () => import('../views/apps/lanTingUserAgreement.vue')
    }, {
        path: "rsdAgreement",
        component: () => import('../views/apps/rsdAgreement.vue')
    }]
}]
