// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/salarys',
    name: 'salarys',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /salarys 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/salarys'),
        meta: {
            title: '工资',
            icon: 'money'
        }
    }]
}