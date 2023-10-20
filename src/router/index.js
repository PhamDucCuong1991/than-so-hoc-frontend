import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
let arrRoute = [];
arrRoute = arrRoute.concat(

)

export const constantRoutes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: '',
        children: arrRoute
    },
    {
        path: '*',
        component: () => import('@/views/error-page/NotFound.vue'),
    },
    {
        path: '/pdf-preview',
        component: () => import('@/components/FinanceVer2/ByClass/PDFOneCam.vue')
    },

]

//change hash to history
const router = new VueRouter({
    mode: 'history',
    routes: constantRoutes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});
router.beforeEach((to, from, next) => {

    //url công khai có thể truy cập không cần xác thực
    const publicPages = ['/login',"/test"];
    //url yêu cầu xác thực
    const authRequired = !publicPages.includes(to.path);
    //check xem có token hay không, không có trả về null
    const loggedIn = localStorage.getItem('user');

    // truy cập page yêu cầu xác thực và không được công khai thì chuyển về page login
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
