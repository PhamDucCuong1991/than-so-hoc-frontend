import Vue from 'vue'
import VueRouter from 'vue-router';
import ExportPDFDialog from "@/components/ExportPDFDialog";
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/home',
            component: HelloWorld
        },
        {
            path: '/pdf-preview',
            component: ExportPDFDialog
        }
    ],
});

export default router;