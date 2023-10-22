import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router';
import App from "@/App";
import ExportPDFDialog from "@/components/ExportPDFDialog";
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/pdf-preview',
            component: ExportPDFDialog
        },
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

export default router