/**
 * Created by Administrator on 2015/8/4.
 */
function CartController($scope)
{
    $scope.bill={};
    $scope.items=[{title:'Paint pots',quantity:8,price:3.95}
    ,{title:'水果',quantity:10,price:10},{title:'蔬菜',quantity:20,price:30}];
    $scope.totalCart=function(){
        var total=0;
        for(var i=0;i<$scope.items.length;i++)
        {
            total+=$scope.items[i].quantity*$scope.items[i].price;
        }
        return total;
    };

    $scope.subtotal=function(){
        return $scope.totalCart()-$scope.bill.discount;
    };
    function calculateDiscount(newValue,oldValue,scope)
    {
        $scope.bill.discount=newValue>100?10:0;
    }

    function showMessage()
    {
        window.alert("现在我已经做出了改变");
    }

    $scope.$watch($scope.totalCart,calculateDiscount);
   // $scope.$watch('items',showMessage,true);//这个函数可以对所有的items的属性发生改变的话，都可以调用这个函数
}
