import { _decorator, Component, director, Node, Vec3, Collider2D, IPhysics2DContact, Contact2DType } from 'cc';
import { SkillBulletBase } from './SkillBulletBase';
import { SkillBulletObj } from '../Data/SkillData';
import { GameDefine } from '../../GameDefine';
import { MonsterBase } from '../Monster/MonsterBase';
const { ccclass, property } = _decorator;

@ccclass('SkillBulletItem')
export class SkillBulletItem extends SkillBulletBase {
    init(skillBulletObj: SkillBulletObj, targetPos: Vec3, angle: number) {
        this.initStatus = false;
        this.skillBulletObj = skillBulletObj;
        this.initSkillBullet(targetPos, angle);
    }

    start() {
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        otherCollider.node.getComponent(MonsterBase).onAttacked(this.skillBulletObj.skillCfg.Damage);
        this.clear();
    }


    childUpdate(dt: number): void {
        if (GameDefine.gameStart && this.initStatus) {
            let frames = director.getTotalFrames();
            this.updateSkillBulletScreen(dt);
            this.setBulletMove(dt);
        }
    }
}


