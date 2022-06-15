import Vue from "vue";
import VueRouter from "vue-router";


const Main =()=>import("views/Main")
const Home =()=>import("views/home/index.vue")
const user =()=> import("views/User/index")


Vue.use(VueRouter)

const routes=[
    {
        path:'/main',
        component:Main,
        children:[
            {
                path:'/home',
                component:Home
            },
            {
                path:'/user',
                component:user
            },

        ]
    }


]

// 2.创建路由对象
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router