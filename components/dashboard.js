; (function () {
    const template = `<div>
            <div v-for="(hobby, index) in hobbies" :key="index">
                <div>{{hobby}}</div>
                <div><a href="#" @click="deleteHobby">删除</a></div>   
            </div>
        </div>`;

    window.dashboard = {
        template,
        //父子组件数据传递，第一种方式：指定传递属性名，注意是 数组形式
        props: ['hobbies'],

        methods: {
            deleteHobby(index) {
                // 自定义函数
                this.$emit('delete_hobby', index);
            }
        }
    }
})()