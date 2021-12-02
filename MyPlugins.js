(function () {
    const MyPlugins = {};

    MyPlugins.install = function (Vue, options) {
        // 添加全局方法
        Vue.myGlobalMethod = function () {
            console.log('调用全局方法成功');
        }

        // 添加实例方法, 这是原型继承到Vue中，所以必须实例化调用
        Vue.prototype.$myMethod = function (value) {
            console.log('调用实例方法成功:' + value);
        }

        // 添加全局指令
        Vue.directive('my-directive', {
            inserted: function (el, binding) {
                console.log(binding);
                el.innerHTML = "插件指令" + binding.value;
            }
        })
    }

    // 添加到window对象中
    window.MyPlugins = MyPlugins;
})()