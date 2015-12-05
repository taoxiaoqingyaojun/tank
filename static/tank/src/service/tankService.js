/**
 * Created by Administrator on 2015/8/2.
 */
define(function(require,exports,module){

    var tool=require('./../tool/tool');
    var tankAttribute=require('./../service/bombService');
    var jquery=require('./../tool/jQuery-2.1.4.min');


    function Tank(obj,speed)
    {
        var that=this;
        //坦克的横坐标
        this.x=parseInt(obj.style.left);
        //坦克的纵坐标
        this.y=parseInt(obj.style.top);
        //坦克的方向
        this.directions=0;  //0表示坦克朝上，1表示坦克朝下，2表示坦克朝左，3表示坦克朝右
        //坦克移动的速度
        this.speed=speed;
        /*创建坦克子弹的速度*/
        this.bulletSpeed=10;
        /*可以发射的子弹数量*/
        this.bulletCount=2;

        this.position=0;
        /*坦克所对应的节点*/
        this.tankNode=obj;

        /*创建对象来装入坦克的子弹*/
        var bulletBox=[];
        this.move=function(e){

            switch (e.keyCode)
            {
                //向上面的方向
                case 38:
                    obj.style.backgroundPositionY='152px';
                    if(this.y>0)
                    this.y-=this.speed;
                    this.directions=0;
                    break;
                //方向向下面的方向
                case 40:
                    obj.style.backgroundPositionY='76px';
                    if(this.y<540)
                    this.y+=this.speed;
                    this.directions=1;
                    break;
                //放向向左边边的方向
                case 37:
                    obj.style.backgroundPositionY='38px';
                    if(this.x>0)
                    this.x-=this.speed;
                    this.directions=2;
                    break;
                //方向向右边的方向
                case 39:
                    obj.style.backgroundPositionY='114px';
                    if(this.x<780)
                    this.x+=this.speed;
                    this.directions=3;
                    break;
            }

            obj.style.left=this.x+'px';
            obj.style.top=this.y+'px';

        };

        /*发射子弹*/
        this.keyDown=function(enemyTanks){
            if(that!=null)//判断该对象是不是为空，如果为空则不执行
            {
                $(document).ready(function(){

                    $(document).keydown(function(){

                        if(event.keyCode==32)
                        {

                            if(that.bulletCount>0)
                            {
                                /*创建一个子弹*/
                                var bullet=new tankAttribute.MyBullet(that,enemyTanks);
                                bullet.createBullet();
                            }

                        }
                        that.move(event);
                    });

                });

            }
        };

        /*this.bullet=function(){

            var bullet=document.createElement('div');
            bullet.style.backgroundImage="url('../static/tank/imgs/bullet.png')";
            bullet.style.position="absolute";
            bullet.style.width='8px';
            bullet.style.height='6px';

            bullet.style.backgroundRepeat='no';
            tool.$$('tankPanel').appendChild(bullet);

            switch(this.direction)
            {

                //如果坦克的方向朝上
                case 0:
                    bullet.style.left=this.x+17+'px';
                    bullet.style.top=this.y+'px';
                    $(document).ready(function(){
                        $(bullet).animate({top:'0px'},3000,function(){
                            tool.$$('tankPanel').removeChild(bullet);
                        });
                    })
                    break;
                 //如果坦克方向朝下
                case 1:
                    bullet.style.left=this.x+17+'px';
                    bullet.style.top=this.y+40+'px';
                    $(document).ready(function(){
                        $(bullet).animate({top:'580px'},3000,function(){
                            tool.$$('tankPanel').removeChild(bullet);
                        });
                    })
                    break;
                //如果坦克向左
                case 2:
                    bullet.style.left=this.x+'px';
                    bullet.style.top=this.y+17+'px';
                   $(document).ready(function(){
                       $(bullet).animate({left:'0px'},3000,function(){
                           tool.$$('tankPanel').removeChild(bullet);
                       });
                   })
                    break;

                //如果坦克向右
                case 3:
                    bullet.style.left=this.x+40+'px';
                    bullet.style.top=this.y+17+'px';
                  $(document).ready(function(){
                      $(bullet).animate({left:'820px'},3000,function(){
                          tool.$$('tankPanel').removeChild(bullet);
                      });
                  })

            }


        }*/

    }
    //给外部提供接口
    module.exports=Tank;
});