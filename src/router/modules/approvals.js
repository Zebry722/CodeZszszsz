// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/approvals',
    name: 'approvals',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /approvals 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/approvals'),
        meta: {
            title: '审批',
            icon: 'tree-table'
        }
    }]
}