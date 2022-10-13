// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/departments',
    name: 'departments',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /departments 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/departments'),
        meta: {
            title: '组织架构',
            icon: 'tree'
        }
    }]
}