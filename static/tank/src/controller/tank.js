/**
 * Created by Administrator on 2015/8/2.
 */
define(function(require){


   var jquery=require('./../tool/jQuery-2.1.4.min');
    var Tank=require('./../service/tankService');
    var tool=require('./../tool/tool');
    var showMessage=require('./../service/test');
    var EnemyTank=require('./../service/enemyTank');
    var bomb=require('./../service/bombService');


 var enemyTank,enemyTank1,enemyTank2;

    //定义坦克的对象
    var tank=new Tank(tool.$$('tank'),3);

    /*现在我来开始创建敌人的坦克*/
    enemyTank=new EnemyTank(50,50,50,0,tank);
    enemyTank1=new EnemyTank(100,50,50,0,tank);
    enemyTank2=new EnemyTank(150,50,50,0,tank);

 var enemyTanks=[enemyTank,enemyTank1,enemyTank2];

    tank.keyDown(enemyTanks);


    /**
     * @explain 调用坦克的移动
     * @param e
     */






});

