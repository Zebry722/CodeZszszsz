<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 头部 -->
        <tree-tools :tree-node="company" :is-root="true"></tree-tools>
        <!-- 头部 -->
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="false"
        >
          <!-- 传入插槽内容有多少节点就循环多少次 -->
          <!-- 树形结构  作用域插槽slot-scope="{ node, data }" 接收传递给插槽的数据 data 每个数据节点的对象-->
          <tree-tools slot-scope="{ data }" :tree-node="data"></tree-tools>
          <!-- 树形结构 -->
        </el-tree>
      </el-card>
    </div>
  </div>
</template>
  
  <script>
import TreeTools from "./components/tree-tools";
export default {
  components: {
    TreeTools,
  },

  data() {
    return {
      departs: [
        {
          name: "总裁办",
          manager: "曹操",
          children: [
            {
              name: "董事会",
              manager: "曹丕",
            },
          ],
        },
        {
          name: "行政部",
          manager: "刘备",
        },
        {
          name: "人事部",
          manager: "孙权",
        },
      ],
      company: { name: "后台管理系统", manager: "负责人" },
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
};
</script>
  
<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
  