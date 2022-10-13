// 员工路由规则
import Layout from '@/layout'


export default {
    // 路由规则
    path: '/setting',
    name: 'setting',
    component: Layout,
    children: [{
        path: '',  // 为空表示 /setting 不但有布局 还有下面的员工@/views/employees主页
        component: () => import('@/views/setting'),
        meta: {
            title: '公司设置',
            icon: 'setting'
        }
    }]
}