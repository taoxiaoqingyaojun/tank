/**
 * Created by Administrator on 2015/8/3.
 */
    var aMailServices=angular.module('AMail',[]);
    function emailRouteConfig($routeProvider)
    {
        $routeProvider.when('/',{
            controller:ListController,templateUrl:'list.html'
        }).when('/view',{
            controller:DetailController,templateUrl:'chart.html'
        }).otherwise({
            redirectTo:'/'
        });
    }
   aMailServices.config(emailRouteConfig);
messages=[{id:0,sender:'姚俊',subject:'fdsaf',date:'fdsafdsa',recipients:['fdsafdsa','姚俊'],message:'fdsafdsa'},
    {id:1,sender:'贺智远',subject:'fdsaf',date:'fdsafdsa',recipients:['fdsafdsa','贺智远'],message:'fdsafdsa'},
    {id:2,sender:'龚伟奇',subject:'fdsaf',date:'fdsafdsa',recipients:['fdsafdsa','龚伟奇'],message:'fdsafdsa'},
    {id:3,sender:'王宇凯',subject:'fdsaf',date:'fdsafdsa',recipients:['fdsafdsa','贺智远'],message:'fdsafdsa'},
    {id:4,sender:'丁情',subject:'fdsaf',date:'fdsafdsa',recipients:['fdsafdsa','丁情'],message:'fdsafdsa'}];
function ListController($scope)
{
    $scope.messages=messages;
}
function DetailController($scope,$routeParams)
{
   // $scope.message=messages[$routeParams.id];

    console.log("我进来了");
    $(function () {
        $(document).ready(function () {
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });

            $('#container').highcharts({
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function () {
                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.random();
                                series.addPoint([x, y], true, true);
                            }, 500);
                        }
                    }
                },
                title: {
                    text: 'Live random data'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 3);//���е����ִ������3С����������λ��Ч����
                    },
                    enabled:true

                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Random data',
                    data: (function () {
                        // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;

                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    }())
                }]
            });
        });
    });
}
