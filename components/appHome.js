; (function () {
    const template = "<div><h1>Dashboard</h1><div></div></div>";

    window.appHome = {
        template,
        data() {
            return {
                hobbies: ['看书', '吃饭', '篮球', '足球'],
                empList: [
                    { id: 1, name: '小梦1', salary: 80001 }, { id: 2, name: '小梦2', salary: 80002 }, { id: 3, name: '小梦3', salary: 80003 }, { id: 4, name: '小梦4', salary: 80004 }
                ]
            }
        },
        components: [
            homeList,
            dashboard
        ]
    }
})()