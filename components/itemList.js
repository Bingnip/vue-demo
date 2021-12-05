;(function() {
    const template = "<tr><td>{{emp.id}}</td><td>{{emp.name}}</td><td>{{emp.salary}}</td></tr>";

    window.itemList = {
        template,
        props: {
            emp: {  // 父子组件数据传递，第三种方式： 指定属性名/数据类型/是否必须
                type: Object,
                required: true
            }
        }
    }
})()