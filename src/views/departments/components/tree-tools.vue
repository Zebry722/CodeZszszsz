<template>
  <!-- 树形结构  作用域插槽slot-scope="{ node, data }" 接收传递给插槽的数据 data 每个数据节点的对象-->
  <el-row
    type="flex"
    justify="space-between"
    align="middle"
    style="height: 40px; width: 100%"
  >
    <!-- 左侧 -->
    <el-col
      ><span>{{ treeNode.name }}</span></el-col
    >
    <!-- 右侧 -->
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单 -->
          <el-dropdown>
            <span>编辑<i class="el-icon-caret-bottom"></i></span>
            <el-dropdown-menu slot="dropdown">
              <!-- 下拉选项 -->
              <el-dropdown-item> 添加部门 </el-dropdown-item>
              <el-dropdown-item v-if="!isRoot"> 编辑部门 </el-dropdown-item>
              <el-dropdown-item v-if="!isRoot"> 删除部门 </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <!-- 树形结构 -->
</template>

<script>
export default {
  props: {
    // 定义传入的属性
    treeNode: {
      required: true,
      type: Object,
    },
    isRoot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>