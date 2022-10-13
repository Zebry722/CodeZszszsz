<script>
export default {
  name: "MenuItem",
  functional: true, // 表示这个组件为函数式组件  函数式组件：没有 data 状态，没有响应式数据，只有接收 props 属性，没有 this ,它就是一个函数
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  //  render 函数可以返回一个结构体  请看 vnodes.push
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      if (icon.includes("el-icon")) {
        vnodes.push(<i class={[icon, "sub-el-icon"]} />);
      } else {
        vnodes.push(<svg-icon icon-class={icon} />);
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
