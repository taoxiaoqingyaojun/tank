/**
 * Created by Administrator on 2015/8/2.
 */
define(function(require, exports, module){

    function $$(id)
    {
        return document.getElementById(id);
    }

    /**
     * @explain 通过对象的id获取该原型对象
     * @type {$$}
     */
    module.exports.$$=$$;

});
