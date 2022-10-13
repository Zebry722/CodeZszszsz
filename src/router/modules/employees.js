// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/employees',
    name: 'employees',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /employees 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/employees'),
        meta: {
            title: '员工管理',
            icon: 'people'
        }
    }]
}