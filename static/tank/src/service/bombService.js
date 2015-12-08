/**
 * Created by Administrator on 2015/8/2.
 */
/**
 * @author 姚俊
 * @constructor 坦克的子弹类
 *
 */
define(function(require,exports,module){

    var tool=require('./../tool/tool');

function EnemyBullet(tank,myTank)
{
    var that=this;
    //子弹的坐标
    this.x=parseInt(tank.x);
    this.y=parseInt(tank.y);
    this.bullet=document.createElement('div');
    this.createBullet=function(){
        this.bullet.style.backgroundImage="url('../static/tank/imgs/bullet.png')";
        this.bullet.style.position="absolute";
        this.bullet.style.width='8px';
        this.bullet.style.height='6px';
        this.bullet.style.backgroundRepeat='no';

        tool.$$('tankPanel').appendChild(this.bullet);

            switch (tank.directions)
            {
                //向上面的方向
                case 0:
                    that.bullet.style.left=that.x+17+'px';
                    that.bullet.style.top=that.y+'px';
                    tank.bulletCount--;
                    console.log("我正在开始向上方创建子弹");

                    var interval=setInterval(function(){
                        that.y-=2;
                        that.bullet.style.top=that.y+'px';

                        if(that.y<0)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            tank.bulletCount++;
                        }

                        if(tool.$$('tank') && Math.abs(myTank.x-that.x)<19 && Math.abs(myTank.y-that.y)<19)
                        {
                            console.log("我已经碰到我的坦克了");
                                new Bomb(that.y,that.x).createBomb();
                                tool.$$('tankPanel').removeChild(myTank.tankNode);
                        }
                    },tank.bulletSpeed);
                    break;
                //方向向下面的方向
                case 1:
                    that.bullet.style.left=that.x+17+'px';
                    that.bullet.style.top=that.y+40+'px';
                    tank.bulletCount--;
                    console.log("我正在开始向下方创建子弹");

                    var interval=setInterval(function(){

                        that.y+=2;
                        that.bullet.style.top=that.y+40+'px';

                        if(that.y>540)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            tank.bulletCount++;
                        }

                        if(tool.$$('tank') && Math.abs(myTank.x-that.x)<19 && Math.abs(myTank.y-that.y)<19)
                        {
                            console.log("我已经碰到我的坦克了");
                            new Bomb(that.y,that.x).createBomb();
                            tool.$$('tankPanel').removeChild(myTank.tankNode);
                        }
                    },tank.bulletSpeed);
                    break;
                //放向向左边边的方向
                case 2:
                    that.bullet.style.left=that.x+'px';
                    that.bullet.style.top=that.y+17+'px';
                    tank.bulletCount--;
                    console.log("我正在开始向左边创建子弹");

                    var interval=setInterval(function(){

                        that.x-=2;
                        that.bullet.style.left=that.x+'px';

                        if(that.x<0)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            tank.bulletCount++;
                        }

                        if(tool.$$('tank') && Math.abs(myTank.x-that.x)<19 && Math.abs(myTank.y-that.y)<19)
                        {
                            console.log("我已经碰到我的坦克了");
                            new Bomb(that.y,that.x).createBomb();
                            tool.$$('tankPanel').removeChild(myTank.tankNode);
                        }
                    },tank.bulletSpeed);
                    break;
                //方向向右边的方向
                case 3:
                    that.bullet.style.left=that.x+40+'px';
                    that.bullet.style.top=that.y+17+'px';
                    tank.bulletCount--;
                    console.log("我正在开始向右创建子弹");

                    var interval=setInterval(function(){

                        that.x+=2;
                        that.bullet.style.left=that.x+40+'px';

                        if(that.x>780)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            tank.bulletCount++;
                        }

                        if(tool.$$('tank') && Math.abs(myTank.x-that.x)<19 && Math.abs(myTank.y-that.y)<19)
                        {
                            console.log("我已经碰到我的坦克了");
                            new Bomb(that.y,that.x).createBomb();
                            tool.$$('tankPanel').removeChild(myTank.tankNode);
                        }
                    },tank.bulletSpeed);
                    break;
            }
    };
}

    /*创建我的坦克的子弹*/
    function MyBullet(myTank,enemyTanks)
    {
        var that=this;

        //子弹的坐标
        this.x=parseInt(myTank.x);
        this.y=parseInt(myTank.y);
        this.bullet=document.createElement('div');
        this.createBullet=function(){

            this.bullet.style.backgroundImage="url('../static/tank/imgs/bullet.png')";
            this.bullet.style.position="absolute";
            this.bullet.style.width='8px';
            this.bullet.style.height='6px';
            this.bullet.style.backgroundRepeat='no';

            tool.$$('tankPanel').appendChild(this.bullet);

            switch (myTank.directions)
            {
                //向上面的方向
                case 0:

                    that.bullet.style.left=that.x+17+'px';
                    that.bullet.style.top=that.y+'px';
                    myTank.bulletCount--;
                    console.log("我正在开始向上方创建子弹");

                    var interval=setInterval(function(){
                        that.y-=2;
                        that.bullet.style.top=that.y+'px';
                        if(that.y<0)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            myTank.bulletCount++;
                        }

                        for(var i=0;i<enemyTanks.length;i++)
                        {
                            if(enemyTanks[i].enemyTank && Math.abs(enemyTanks[i].x-that.x)<19 && Math.abs(enemyTanks[i].y-that.y)<19)
                            {
                                console.log("我已经碰到我的坦克了");
                                new Bomb(that.y,that.x).createBomb();
                                tool.$$('tankPanel').removeChild(enemyTanks[i].enemyTank);
                                enemyTanks[i].enemyTank=null;
                                enemyTanks[i]=null;
                            }
                        }
                    },myTank.bulletSpeed);
                    break;
                //方向向下面的方向
                case 1:
                    that.bullet.style.left=that.x+17+'px';
                    that.bullet.style.top=that.y+40+'px';
                    myTank.bulletCount--;
                    console.log("我正在开始向下方创建子弹");

                    var interval=setInterval(function(){

                        that.y+=2;
                        that.bullet.style.top=that.y+40+'px';

                        if(that.y>540)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            myTank.bulletCount++;
                        }

                        for(var i=0;i<enemyTanks.length;i++)
                        {
                            if(enemyTanks[i].enemyTank && Math.abs(enemyTanks[i].x-that.x)<19 && Math.abs(enemyTanks[i].y-that.y)<19)
                            {
                                console.log("我已经碰到我的坦克了");
                                new Bomb(that.y,that.x).createBomb();
                                tool.$$('tankPanel').removeChild(enemyTanks[i].enemyTank);
                                enemyTanks[i].enemyTank=null;
                                enemyTanks[i]=null;
                            }
                        }
                    },myTank.bulletSpeed);
                    break;
                //放向向左边边的方向
                case 2:
                    that.bullet.style.left=that.x+'px';
                    that.bullet.style.top=that.y+17+'px';
                    myTank.bulletCount--;
                    console.log("我正在开始向左边创建子弹");

                    var interval=setInterval(function(){

                        that.x-=2;
                        that.bullet.style.left=that.x+'px';

                        if(that.x<0)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            myTank.bulletCount++;
                        }
                        for(var i=0;i<enemyTanks.length;i++)
                        {
                            if(enemyTanks[i].enemyTank && Math.abs(enemyTanks[i].x-that.x)<19 && Math.abs(enemyTanks[i].y-that.y)<19)
                            {
                                console.log("我已经碰到我的坦克了");
                                new Bomb(that.y,that.x).createBomb();
                                tool.$$('tankPanel').removeChild(enemyTanks[i].enemyTank);
                                enemyTanks[i].enemyTank=null;
                                enemyTanks[i]=null;
                            }
                        }
                    },myTank.bulletSpeed);
                    break;
                //方向向右边的方向
                case 3:
                    that.bullet.style.left=that.x+40+'px';
                    that.bullet.style.top=that.y+17+'px';
                    myTank.bulletCount--;
                    console.log("我正在开始向右创建子弹");

                    var interval=setInterval(function(){

                        that.x+=2;
                        that.bullet.style.left=that.x+40+'px';

                        if(that.x>780)
                        {
                            clearInterval(interval);
                            tool.$$('tankPanel').removeChild(that.bullet);
                            myTank.bulletCount++;
                        }

                        for(var i=0;i<enemyTanks.length;i++)
                        {
                            if(enemyTanks[i].enemyTank && Math.abs(enemyTanks[i].x-that.x)<19 && Math.abs(enemyTanks[i].y-that.y)<19)
                            {
                                console.log("我已经碰到我的坦克了");
                                new Bomb(that.y,that.x).createBomb();
                                tool.$$('tankPanel').removeChild(enemyTanks[i].enemyTank);
                                enemyTanks[i].enemyTank=null;
                                enemyTanks[i]=null;
                            }
                        }
                    },myTank.bulletSpeed);
                    break;
            }
        };
    }

function Bomb(x,y)
{
    that=this;
    //爆炸的横坐标
    this.x=x;
    //爆炸的纵坐标
    this.y=y;
    //炸弹爆炸的调用的函数
    //开始创建一个炸弹
    this.createBomb=function()
    {
        var backgourndPosition=57;
        var bomb=document.createElement('div');
        bomb.style.backgroundImage="url('../static/tank/imgs/bombing.png')";
        bomb.style.width='56px';
        bomb.style.height='57px';
        bomb.style.position='absolute';
        bomb.style.backgroundPositionY=backgourndPosition+'px';
        bomb.style.top=that.x+'px';
        bomb.style.left=that.y+'px';
        tool.$$('tankPanel').appendChild(bomb);
        var interval=setInterval(function(){
            bomb.style.backgroundPositionY=backgourndPosition+'px';
            backgourndPosition+=57;

            if(parseInt(backgourndPosition)>456)
            {
                clearInterval(interval);
                tool.$$('tankPanel').removeChild(bomb);
            }
        },150);
    }
}

    //给外部提供接口
    module.exports.EnemyBullet=EnemyBullet;
    module.exports.Bomb=Bomb;
    module.exports.MyBullet=MyBullet;

});
