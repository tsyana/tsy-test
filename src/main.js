import CssBootstrap from 'admin-lte/bootstrap/css/bootstrap.min.css'
import CssAdminLte from 'admin-lte/dist/css/AdminLTE.min.css'
import CssAdminLteSkin from 'admin-lte/dist/css/skins/skin-blue.min.css'
import CssPace from 'admin-lte/bootstrap/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({ linkActiveClass: 'active' });
router.map({
    '/index': {
        name: 'index',
        component: Hello
    },
    '/page1': {
        name: 'page1',
        component: require("./page/page1/Index"),
        subRoutes: {
            '/page1-child1': {
                name: 'page1-child1',
                component: function(resolve) { require(['./page/page1/Son.vue'], resolve) }
            }
        }
    },
    '/page2': {
        name: 'page2',
        component: require("./page/page2/Index"),
    }
})
router.redirect({ //定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*': "/index" //重定向任意未匹配路径到/index
});
router.start(App, '#app');
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
