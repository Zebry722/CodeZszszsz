// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/attendances',
    name: 'attendances',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /attendances 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/attendances'),
        meta: {
            title: '考勤',
            icon: 'skill'
        }
    }]
}