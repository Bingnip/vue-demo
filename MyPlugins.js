(function () {
    const MyPlugins = {};

    MyPlugins.install = function (Vue, options) {
        Vue.myGlobalMethod = function () {
            alert('全局')
        }
    }
})()