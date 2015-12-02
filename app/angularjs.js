/**
 * Created by Administrator on 2015/8/19.
 */
angular.module('myApp',[]).
    directive('myList',function(){

        return{
            restrict:'ECAM',
            template:'<div>fdsafdsa</div>',
           // templateUrl:'yaojun.html',
            replace:true,
            compile:function(tElement,tAttrs,transclude){

                tElement.append(angular.element('<div><ul><li ng-repeat="yaojun in yaojuns">{{yaojun.name}}</li></ul></div>'));
                console.log("开始进行编译阶段");
                return{

                    pre:function preLink(scope,tElement,tAttrs,controller){

                        console.log("我进到pre来了");

                    },

                    post:function postLink(scope,iElement,iAttrs,controller){

                        console.log("我也进来了");
                                scope.yaojuns[0].name='click after';
                        setInterval(function($scope){
                        scope.$apply(function(){
                                scope.yaojuns[1].name=new Date();
                            }
                        );
                        },1000);

                        iElement.on('click',function(){
                            window.alert("w我进来饿了");
                        });

                    }

                }


            }
        }

    }).
    controller('myController',['$scope',function($scope){

                console.log("我进到控制器里面来了");
        $scope.yaojuns=[{
            name:'fdsa',
            job:'fdsa'
        },{
            name:'姚俊',
            job:'df'
        },{
            name:'姚俊',
            job:'rew'
        },{
            name:'yaojun',
            job:'df'
        }]

    }]);
