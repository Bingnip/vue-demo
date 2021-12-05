; (function () {
    const template = '<div><div v-for="(hobby, index) in hobbies" :key="index"><div>{{hobby}}</div></div></div>';

    window.dashboard = {
        template,
        //父子组件数据传递，第一种方式：指定传递属性名，注意是 数组形式
        props: ['hobbies']
    }
})()