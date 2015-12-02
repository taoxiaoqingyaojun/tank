/**
 * Created by Administrator on 2015/8/5.
 */
var app=angular.module('myApp',[]);
app.factory('socket',function($rootScope){
    var socket=io.connect("http");
    return{
        on:function(eventName,callback){
            socket.on(eventName,function(){
                var args=arguments;
                $rootScope.$apply(function(){
                    callback.apply(socket,args);
                });
            });
        },
        emit:function(eventName,data,callback)
        {
            socket.emit(eventName,data,function(){
                var args=arguments;
                $rootScope.$apply(function(){
                    if(callback)
                    {
                        callback.apply(socket,args);
                    }
                });
            });
        }
    }
});


