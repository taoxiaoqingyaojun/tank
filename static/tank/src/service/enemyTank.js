/**
 * Created by Administrator on 2015/11/22.
 */
/*创建敌人的坦克*/

define(function(require,exports,module) {

    var tool=require('./../tool/tool');
    var tankAttribute=require('./../service/bombService')

    function EnemyTank(x,y,speed,directions,myTank) {
        var that=this;
        /*坦克的坐标*/
        this.x = x;
        this.y = y;
        /*坦克的速度*/
        this.speed=speed;
        this.directions=directions;
        this.bulletCount=2;
        /*创建坦克子弹的速度*/
        this.bulletSpeed=10;

        /*定义自身的节点*/
        this.enemyTank;
        this.enemyTank = document.createElement('div');

        /*创建坦克的函数*/
        this.createTank = function () {
            this.enemyTank.style.width = '40px';
            this.enemyTank.style.height = '38px';
            this.enemyTank.style.position='absolute';
            this.enemyTank.style.left =this.x+'px';
            this.enemyTank.style.top =this.y+'px';

            this.enemyTank.style.backgroundImage="url('../static/tank/imgs/tank.png')";
            this.enemyTank.style.backgroundPositionY = '76px';
            tool.$$('tankPanel').appendChild(this.enemyTank);

            this.enemyMove();

        }

        /*现在来创建坦克的移动*/
        this.enemyMove=function()
        {
            /*现在我们来改变坦克的方向*/
            var directionInterval=setInterval(function(){

                that.directions=Math.floor(Math.random()*4);

            },5000);
            /*现在我们来开始发射子弹*/
            this.createBullet();
            /*现在我们来随机的开始移动*/
            var interval=setInterval(function(){

                switch (that.directions)
                {
                    /*向上面的方向*/
                    case 0:
                        that.enemyTank.style.backgroundPositionY='152px';
                        if(that.y>0)
                            that.y-=2;
                        break;
                    //方向向下面的方向
                    case 1:
                        that.enemyTank.style.backgroundPositionY='76px';
                        if(that.y<540)
                            that.y+=2;
                        break;
                    //放向向左边边的方向
                    case 2:
                        that.enemyTank.style.backgroundPositionY='38px';
                        if(that.x>0)
                            that.x-=2;
                        break;
                    //方向向右边的方向
                    case 3:
                        that.enemyTank.style.backgroundPositionY='114px';
                        if(that.x<780)
                            that.x+=2;
                        break;

                }

                that.enemyTank.style.left=that.x+'px';
                that.enemyTank.style.top=that.y+'px';
            },that.speed);
        }

        /*坦克子弹的创建*/
        this.createBullet=function(){

            /*现在我们来开始创建子弹*/
            var interval=setInterval(function(){
               if(that.bulletCount>0)
               {
                   new tankAttribute.EnemyBullet(that,myTank).createBullet();
                   console.log("现在我开始创建子弹了");
               }
            },1000);
        }
        /*开始真正的创建坦克*/
        this.createTank();
        /*敌人的坦克已经绑定了自己的坦克，现在只需要关注与自己坦克的子弹问题*/
    }

    //给外部提供接口
    module.exports=EnemyTank;
});
