; (function () {
    const template = `<div>
            // 接收要用slot标签，name就是父组件定义的
            <slot name="dashboard"></slot>
            <div>
                <dashboard :hobbies='hobbies' @delete_hobby='deleteHobby'></dashboard></div>
            <div>
            <h1>Home List</h1>
            <div>
                <home-list :empList='empList' :deleteEmp='deleteEmp'></home-list>
            </div>
        </div>
        </div>`;

    window.appHome = {
        template,
        data() {
            return {
                hobbies: ['看书', '吃饭', '篮球', '足球'],
                empList: [
                    { id: 1, name: '小梦1', salary: 80001 }, 
                    { id: 2, name: '小梦2', salary: 80002 }, 
                    { id: 3, name: '小梦3', salary: 80003 }, 
                    { id: 4, name: '小梦4', salary: 80004 }
                ]
            }
        },
        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1);
            }, 
            deleteHobby(index) {
                this.hobbies.splice(index, 1);
            }
        },
        components: {
            dashboard,
            homeList
        }
    }
})()