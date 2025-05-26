
import { _decorator, bezier, BoxCollider2D, CircleCollider2D, Component, director, find, log, misc, Node, Rect, sp, Sprite, tween, v2, v3, Vec2, Vec3 } from 'cc';
import { PoolManager } from '../../Frame/PoolManager';
import { Debug } from '../../Frame/Debug';
import BaseComponent from '../../Frame/BaseComponent';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { Util } from '../../Frame/Util';
import { MonsterBase } from '../Monster/MonsterBase';
import { AtkObj, SkillBulletObj, SkillData } from '../Data/SkillData';
import { HeroData } from '../Data/HeroData';
import { GameDefine } from '../../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('SkillBulletBase')
export class SkillBulletBase extends BaseComponent {
    @property(Node)
    icon: Node = null;
    public skillBulletObj: SkillBulletObj = null;
    public initStatus: boolean = false;
    public bulletId: number = 101;//子弹id
    public during: number = 10;//持续时间
    public damageR: number = 30;//默认伤害范围
    public damageInterval: number;//伤害间隔
    public damageTimes: number;//伤害次数
    public isCollider: boolean;//是否碰撞 （伤害间隔控制）
    public LoopCount: number = 0;//动画播放次数
    public moveSpeed: number = 1500;//子弹速度
    public initSpeed: number = 1500;//初始速度
    public isEasing: boolean = false;//是否子弹加速
    public scale: number = 1;//缩放大小
    private _dir = new Vec3();//方向向量
    public curPos: Vec3 = new Vec3();//技能当前坐标
    public targetPos: Vec3 = new Vec3();//目标点坐标
    public quadBoundBox: BoxCollider2D | CircleCollider2D = null;//四叉树检测包围盒
    public boundBox: BoxCollider2D | CircleCollider2D = null;//技能检测区域
    public _skillBulletKey: string = '';
    public type: number = 0;//技能类型

    private _minY = 5;
    private _maxY = 300;
    private _minX = 0;
    private _maxX = 0;
    private _playTime = 1;//飞行时间
    public get atkObj() {
        let atkObj = new AtkObj();
        atkObj.atk = Math.floor(Util.getRandomInt(5, 15));
        return atkObj;
    }

    /* 初始化技能子弹 */
    initSkillBullet(targetPos: Vec3, angel = 0) {
        this.type = this.skillBulletObj.skillCfg.Type;
        let nodePos = this.node.getPosition();
        let vector = new Vec3();
        this.targetPos = targetPos.clone();
        Vec3.subtract(vector, targetPos, nodePos);
        //根据偏移角度计算新向量
        let curAngel = Util.vector_to_angle(v2(vector.x, vector.y));
        let v = Util.angle_to_vector(curAngel + angel);
        vector.set(v.x, v.y);
        this._dir = vector.normalize();
        this.isEasing = false;
        this.curPos = this.node.getPosition();
        this.scale = 1;
        this.setSkillSize();
        this.during = 10;
        this.moveSpeed = this.getSkillMoveSpeedByType();
        this.initSpeed = this.moveSpeed;
        this.damageTimes = 1;
        this.damageInterval = 0;
        this.isCollider = true;
        this.LoopCount = 0;
        this._skillBulletKey = 'skillBullet' + this.bulletId + Math.random().toString().substring(2, 6) + Math.random().toString().substring(2, 12);
        this.setSkillBulletAnim();
        this.initStatus = true;
    }

    /* 设置技能大小 */
    setSkillSize() {
        this.node.setScale(v3(this.scale, this.scale, this.scale));
    }

    /* 设置技能动画 */
    setSkillBulletAnim() {

    }

    /**
     * 加速运动
     * @param time 
     * @param isAcc 
     */
    easingSpeed(time: number, isAcc: boolean = true) {
        if (this.isEasing) {
            class BintTweenObj {
                t: number;
            }
            let speedTweenObj = new BintTweenObj();
            speedTweenObj.t = 0;
            tween(speedTweenObj).to(time, { t: 1 }, {
                onUpdate: (target, t) => {
                    const p0 = v2(0, 0);
                    const p1 = v2(0, 0.4);
                    const p2 = v2(0.2, 1);
                    const p3 = v2(1, 1);
                    const x = p0.x * (1 - t) * (1 - t) * (1 - t) + 3 * p1.x * t * (1 - t) * (1 - t) + 3 * p2.x * t * t * (1 - t) + p3.x * t * t * t;
                    const y = p0.y * (1 - t) * (1 - t) * (1 - t) + 3 * p1.y * t * (1 - t) * (1 - t) + 3 * p2.y * t * t * (1 - t) + p3.y * t * t * t;
                    //调试
                    this.moveSpeed = this.initSpeed + 500 * y;
                }
            }).start();
        }
    }

    /**
     * 设置子弹移动
     * @param dt 
     * @param isAngle  是否有旋转角度 
     * @returns 
     */
    setBulletMove(dt: number) {
        if (this.skillBulletObj.skillCfg.Speed > 0) {
            let nodePos = this.node.getPosition();
            let dir = v3(this._dir.x, this._dir.y, 0);
            let dis = dir.multiply(v3(this.moveSpeed * dt, this.moveSpeed * dt, 0));
            let temPos = nodePos.add(dis);
            this.node.setPosition(temPos);
            this.curPos = temPos;
            //调角度
            this.setBulletAngle(this.skillBulletObj.skillCfg.Type);
        }
    }

    setBulletAngle(type: number) {
        switch (type) {
            case 1:
                //直线运动
                let r = new Vec2(this._dir.x, this._dir.y).signAngle(new Vec2(0, 1));
                let angle = misc.radiansToDegrees(r);
                this.node.angle = -angle;
                break;
            case 2:
                //直线运动旋转
                this.node.angle = this.node.angle - 20;
                break;
        }
    }


    /* 设置子弹抛物线 */
    playBulletTween(targetPos: Vec3) {
        this.node.eulerAngles = new Vec3(0, 0, 0);
        var bullet = this.node;
        var startPos = bullet.position;
        var startAngle = bullet.eulerAngles;
        var bulletTween = tween(startPos);
        // let time = Vec3.distance(startPos, targetPos) / this.skillBulletObj.skillCfg.Speed;
        // this._playTime = time > 0.2 ? time : 0.2;
        this._minY = startPos.y + (targetPos.y - startPos.y) / 2 + 100;
        this._maxY = startPos.y + (targetPos.y - startPos.y) / 2 + 100;
        this._maxX = startPos.x + (targetPos.x - startPos.x) / 2 + 100;
        this._minX = startPos.x + (targetPos.x - startPos.x) / 2 + 100;
        const mixY = this._minY;
        const maxY = this._maxY;
        const mixX = this._minX;
        const maxX = this._maxX;
        var progressX = function (start, end, current, t) {
            current = bezier(start, mixX, maxX, end, t);
            return current;
        };
        var progressY = function (start, end, current, t) {
            current = bezier(start, mixY, maxY, end, t);
            return current;
        };

        bulletTween.parallel(
            tween().to(this._playTime, { x: targetPos.x }, {
                progress: progressX, easing: "smooth", onUpdate: () => {
                    bullet.setPosition(startPos);
                    this.curPos = startPos;
                }
            }),
            tween().to(this._playTime, { y: targetPos.y }, {
                progress: progressY, easing: "smooth", onUpdate: () => {
                    bullet.setPosition(startPos);
                    this.curPos = startPos;
                }
            }),
        ).call(() => {

        }).start();
        tween(startAngle).to(this._playTime, { z: -1440 }, {
            onUpdate: () => {
                bullet.eulerAngles = startAngle;
            }
        }).start();
    }


    /**
     * 更新技能是否出屏幕
     * @param dt 
     * @returns 
     */
    updateSkillBulletScreen(dt: number) {
        //出屏幕移除
        let rect = new Rect(-GameDefine.viewWidth / 2, -GameDefine.viewHeight / 2, GameDefine.viewWidth, GameDefine.viewHeight);
        let pos = this.curPos
        if (!rect.contains(v2(pos.x, pos.y))) {
            this.clear();
            return;
        }
        //持续时间到清除
        this.duringTriggleClearByType(dt);
    }

    /* 更新技能伤害间隔 */
    updateSkillDamageInterval(dt: number) {
        if (this.skillBulletObj.skillCfg.Damage_interval) {
            this.damageInterval -= dt;
            this.isCollider = false;
            if (this.damageInterval <= 0) {
                this.isCollider = true;
                this.damageInterval = this.skillBulletObj.skillCfg.Damage_interval;
            }
        }
    }

    /**
    * 添加方形区域检测对象
    * @param dt 
    */
    insertRectCircleObj() {
        if (this.initStatus) {
            //通过类型判定是否加入检测对象
            switch (this.type) {
                case 10:
                    break;
                default:
                    EventListener.emit(GameEvent.INSERT_QUARD_TREE_RECT_CIRCLE, this._skillBulletKey, this, this.quadBoundBox, 1);
                    break;
            }
        }
    }

    onAttacked() {

    }


    /**
     * 直接触发链接技能
     */
    triggleSkillBySkillId() {

    }

    /* 碰撞触发技能 */
    colliderTriggleSkill(triggerCount: number, damageTimes: number) {

    }

    /**
     * 检测碰撞次数
     * @param count 碰撞次数
     * @param com 
     *  1=碰撞之后首次触发
        2=技能结束后触发
        3=碰撞触发
        4=闪电链击中触发
        5=范围伤害碰撞后
        6=技能释放或命中多少次触发
        7=由城墙释放
        8=持续技能触发，和持续技能一起释放一起结束
        9=怪物死亡后触发
        11=持续技能碰撞后触发
     */
    checkColliderCount(count: number, com: MonsterBase) {
        //伤害次数为0则为持续释放
        if (count == 1) {
            //震动
            // EventListener.emit(GameEvent.SCREEN_VIBRATOR, 3, this.skillBulletObj.skillCfg.shake);
            //击退
            if (com.node.parent) {
                // com.setMonsterHurtMoveEffect(this.skillBulletObj.skillCfg.move, this.skillBulletObj.skillCfg.intensity, this._dir.clone(), this.getColliderPos());
            }
        }
        if (this.damageTimes) {
            //碰撞结束触发新技能效果
            this.colliderTriggleSkill(count, this.damageTimes);
            if (count >= this.damageTimes) {
                //伤害次数达到移除
                this.damageTimeClearByType();
            }
        }
        else {
            //伤害次数为0根据类型判断是否首次碰撞触发技能
            this.colliderTriggleClearByType(count, this.damageTimes);
        }
    }

    /**
     * 根据类型判断是否首次碰撞触发技能
     */
    colliderTriggleClearByType(count: number, damageTimes: number) {

    }

    /* 根据类型 持续时间了清除 */
    duringTriggleClearByType(dt: number) {
        this.during -= dt;
        if (this.during <= 0) {
            this.clear();
        }
    }

    /* 根据类型 伤害次数达到了清除 */
    damageTimeClearByType() {
        //TODO 通过类型
        this.clear();
    }



    /**
     * 通过技能类型获取移动速度
     */
    getSkillMoveSpeedByType() {
        let speed = 0;
        switch (this.type) {
            case 99:
                speed = 0;
                break;
            default:
                speed = this.skillBulletObj.skillCfg.Speed;
                break;
        }
        return speed;
    }

    protected onEnable(): void {

    }

    protected onDisable(): void {

    }

    clear() {
        this.initStatus = false;
        this.boundBox = null;
        this.quadBoundBox = null;
        //技能释放回调
        this.skillBulletObj.callback && this.skillBulletObj.callback();
        EventListener.emit(GameEvent.DELETE_QUARD_TREE_OBJ, this._skillBulletKey);
        PoolManager.instance.putNode(this.node);
    }

    childUpdate(deltaTime: number) {

    }
}




