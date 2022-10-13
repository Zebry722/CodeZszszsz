import router from "./router";
import store from '@/store';   // 引入 store 实例 和组件中的 this.$store 一样
import nProgress from 'nprogress'   // 引入进度条
import 'nprogress/nprogress.css'  // 引入进度条样式



// 前置守卫
// next 是前置守卫必须执行的钩子函数
// next() 放行    next(false)  跳转终止   next(地址跳转到某个地址)

const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
    nProgress.start()  // 开启进度条
    if (store.getters.token) {
        // 如果有 token
        if (to.path === '/login') {
            next('/')
        } else {
            if (!store.getters.userId) {
                await store.dispatch('user/getUserInfo')
            }
            next()
        }
    } else {
        //  如果没有 token 情况下
        if (whiteList.indexOf(to.path) > -1) {
            // 如果大于-1要去的地址在-1
            next()
        } else {
            next('/login')
        }
    }
    nProgress.done()   // 手动强制关闭进度条
})

// 后置守卫
router.afterEach(() => {
    nProgress.done()  // 关闭进度条
})
