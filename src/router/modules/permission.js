// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/permission',
    name: 'permission',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /permission 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/permission'),
        meta: {
            title: '权限管理',
            icon: 'lock'
        }
    }]
}