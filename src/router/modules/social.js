// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/social',
    name: 'social',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /social 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/social'),
        meta: {
            title: '社保',
            icon: 'table'
        }
    }]
}