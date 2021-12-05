;(function() {
    const template = `<tr>
        <td>{{emp.id}}</td><td>{{emp.name}}</td><td>{{emp.salary}}</td>
        <td><a href='#' @click='deleteItem'>删除</a></td>
        </tr>`;

    window.itemList = {
        template,
        props: {
            emp: {  // 父子组件数据传递，第三种方式： 指定属性名/数据类型/是否必须
                type: Object,
                required: true
            },
            deleteEmp: Function,
            index: Number
        },
        methods: {
            deleteItem () {
                if (window.confirm(`确定删除${this.emp.name}吗？`)) {
                    this.deleteEmp(this.index);
                }
            }
        }
    }
})()