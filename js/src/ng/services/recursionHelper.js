define([], function()
{
    var services = angular.module("RecursionHelper",[]).factory("RecursionHelper",["$compile",function(n){return{compile:function(e,o){angular.isFunction(o)&&(o={post:o});var r,p=e.contents().remove();return{pre:o&&o.pre?o.pre:null,post:function(e,t){r||(r=n(p)),r(e,function(n){t.append(n)}),o&&o.post&&o.post.apply(null,arguments)}}}}}]);

    return services;
});