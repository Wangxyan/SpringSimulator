import { _decorator, color, Component, instantiate, math, Node, Prefab, sp, tween, Vec3, AnimationComponent, Sprite } from 'cc';
import BaseComponent from '../../Frame/BaseComponent';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { GridData } from '../Data/GridData';
import { SkillTypeItem } from '../Skill/SkillTypeItem';
import { HeroAnim, HeroData } from '../Data/HeroData';
import { WeaponData } from '../Data/WeaponData';
import { SkillBulletObj, SkillData } from '../Data/SkillData';
import { MonsterData } from '../Data/MonsterData';
import { AudioManager } from '../../Frame/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('HeroBase')
export class HeroBase extends BaseComponent {
    @property(sp.Skeleton)
    heroSpine: sp.Skeleton = null;
    @property(Node)
    skillTypeList: Node = null;
    @property(Prefab)
    skillTypePrefab: Prefab = null;
    private _firePos: Vec3 = new Vec3(0, 70, 0);
    public isCollider: boolean;//是否碰撞
    public heroKey: string = '';//英雄唯一标识
    public releaseSkillStatus: boolean = true;//释放技能状态
    initBorn() {
        EventListener.emit(GameEvent.SHOW_HERO_HP, this.node.getPosition());
        this.heroKey = HeroData.instance.heroKey;
        this.heroSpine.setAnimation(0, HeroAnim.IDLE, true);
        this.insertRectCircleObj();
    }

    /* 获取技能释放点 */
    getFirePos() {
        let pos = this.node.getPosition();
        let firePos = new Vec3(pos.x + this._firePos.x, pos.y + this._firePos.y, 0);
        return firePos;
    }

    /**
    * 更新间隔伤害时间
    */
    updateSkillDamageInterval() {

    }

    /**
   * 添加圆形区域检测对象
   * @param dt 
   */
    insertRectCircleObj() {
        EventListener.emit(GameEvent.INSERT_HERO_CIRCLE_OBJ, this.heroKey, this);
    }


    /* 受伤 */
    onAttacked(atk: number) {
        this.playHit();
        HeroData.instance.curHp = atk;
        EventListener.emit(GameEvent.UPDATE_HERO_HP);
    }


    _showHitTotalTime: number = 0.15
    playHit() {
        //占用alpha通道
        let comObj = this.heroSpine;
        comObj.color = color(255, 255, 255, 1)
        let tmpColor: math.Color = color(255, 255, 255, 50)
        tween(comObj).to(this._showHitTotalTime, {}, {
            onUpdate(target: any, ratio) {
                tmpColor = color(255, 255, 255, 50 * ratio)
                target.color = tmpColor;
            },
        }).call(() => {
            tmpColor = color(255, 255, 255, 255);
            comObj.color = tmpColor
        }).start()

    }

    /* 释放技能 */
    releaseSkill() {
        if (this.releaseSkillStatus) {
            let releaseSkillObj = HeroData.instance.getQueueSkill();
            if (releaseSkillObj) {
                this.releaseSkillStatus = false;
                AudioManager.instance.playSound(5);
                this.unschedule(this.initHeroAnim);
                this.heroSpine.setAnimation(0, HeroAnim.ATK, false);
                this.scheduleOnce(() => {
                    let skillBulletObj = new SkillBulletObj();
                    skillBulletObj.skillKey = releaseSkillObj.skillKey;
                    skillBulletObj.skillCfg = SkillData.instance.getUpgradeSkillBySkillId(releaseSkillObj.skillCfg);
                    skillBulletObj.pos = this.getFirePos();
                    skillBulletObj.targetPos = new Vec3(0, -200, 0);
                    let interval = 0.1;
                    let releaseTimes = skillBulletObj.skillCfg.Salvo;
                    let targetCount = 1;
                    //释放次数
                    for (let i = 0; i < releaseTimes; i++) {
                        let targetPosArr = MonsterData.instance.getNearMonster(skillBulletObj.skillKey);
                        if (targetPosArr.length) {
                            //子弹个数
                            let bulletCount = skillBulletObj.skillCfg.BulletCount;
                            for (let j = 0; j < bulletCount; j++) {
                                //目标数量
                                for (let n = 0; n < targetCount; n++) {
                                    let intervalAngle = skillBulletObj.skillCfg.IntervalAngle;
                                    let angle = SkillData.instance.getSkillDirAngle(j, intervalAngle);
                                    if (n < targetPosArr.length) {
                                        EventListener.emit(GameEvent.CREATE_SKILL_EFFECT, skillBulletObj, targetPosArr[n], angle, interval * i);
                                    }
                                }
                            }
                        }
                    }

                    this.releaseSkillStatus = true;
                    releaseSkillObj.callback && releaseSkillObj.callback();
                    this.scheduleOnce(this.initHeroAnim, 1)
                }, releaseSkillObj.animTime)
            }
        }
    }

    initHeroAnim() {
        this.heroSpine.addAnimation(0, HeroAnim.IDLE, true);
    }


    protected onEnable(): void {
        EventListener.on(GameEvent.HERO_HURT, this.onAttacked, this);

    }

    protected onDisable(): void {
        EventListener.off(GameEvent.HERO_HURT, this.onAttacked, this);
    }

    protected childUpdate(dt: number): void {

    }
}


