(function (root, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // node环境，则使用Commonjs模块导出
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        // AMD模块规范
        define([], factory);
    } else {
        // 没有模块环境则挂载到全局
        root.myUmd = factory();
    }
})(this, () => {
    return (() => {
        let obj = {
            name:"kfg",
            age:123
        };
        obj.add = function (a, b) {
            return a + b;
        };
        return obj;
    })();
});
