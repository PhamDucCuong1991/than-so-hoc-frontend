import Vue from 'vue'
import VueRouter from 'vue-router';
import App from "@/App";
import ExportPDFDialog from "@/components/ExportPDFDialog";
import HelloWorld from "@/components/HelloWorld";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: HelloWorld,
            children: [
                {
                    path: '/home',
                    component: HelloWorld
                },
                {
                    path: '/pdf-preview',
                    component: ExportPDFDialog
                }
            ]
        }
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');

export default router;