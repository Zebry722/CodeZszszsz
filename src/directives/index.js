// 全局的自定义指令


export const imagerror = {
    // 指令对象  会在当前的 dom 元素插入到节点之后执行
    inserted(dom, options) {
        // options 是指令中的变量的解释 其中有一个属性叫做 value
        // dom 表示当前指令作用的dom对象 此时就是图片
        dom.onerror = function () {
            dom.src = options.value
        }
    }
}