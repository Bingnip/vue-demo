;(function() {
    const template = '<div>' +
    '<table> <thead> <tr><th>ID</th> <th>姓名</th> <th>工资</th> </tr> </thead> ' + 
    '<tbody><item-list v-for="(emp, index) in empList" :key="emp.id" :emp="emp"></item-list></tbody>' +
    ' </table></div>';

    window.homeList = {
        template,
        props: {
            // 父子组件数据传递，第二种方式： 指定传递属性名和数据类型，注意是 对象形式
            empList: Array
        },
        components: {
            itemList
        }
    }
})()