import { Vec3 } from "cc";
import { CfgMgr } from "../../Frame/CfgMgr";
import { Util } from "../../Frame/Util";
import { SkillCfg } from "../../Model/SkillModel";
import { SkillTargetCfg } from "../../Model/SkillTargetModel";
import { SkillUpgradeCfg } from "../../Model/SkillUpgradeMode";
import { MonsterBase } from "../Monster/MonsterBase";
import { MonsterData } from "./MonsterData";

export class SkillData {
    private _battleSkillUpgradeData: Map<number, SkillUpgradeObj> = new Map();//战斗内外的技能升级提升(针对技能的提升)  key=>skillId

    getSkillCfgById(id: number) {
        return CfgMgr.getDataById<SkillCfg>(new SkillCfg(), id);
    }


    /**
   * 提升技能属性
   * @param skillId 
   * @param skillUpgradeCfg 
   */
    upgradeSkillObjAtt(skillUpgradeCfg: SkillUpgradeCfg) {
        //aim_skill   0:针对所有

        let aim_skill = skillUpgradeCfg.aim_skill;
        if (aim_skill) {
            for (let i = 0; i < aim_skill.length; i++) {
                const skillId = aim_skill[i];
                let skillUpgradeObj = this._battleSkillUpgradeData.has(skillId) ? this._battleSkillUpgradeData.get(skillId) : new SkillUpgradeObj();
                skillUpgradeObj.skillId = skillId;
                skillUpgradeObj.Hp += skillUpgradeCfg.hp_up;
                skillUpgradeObj.Exp += skillUpgradeCfg.exp_up;
                skillUpgradeObj.Gold += skillUpgradeCfg.gold_up;
                skillUpgradeObj.CdPer += skillUpgradeCfg.cd_shorten;
                skillUpgradeObj.DamageRange += skillUpgradeCfg.damageRange_up;
                skillUpgradeObj.DamageNum += skillUpgradeCfg.damageNum_up;
                skillUpgradeObj.Damage += skillUpgradeCfg.damage_up;
                skillUpgradeObj.Range += skillUpgradeCfg.range_up;
                skillUpgradeObj.Speed += skillUpgradeCfg.speed_up;
                skillUpgradeObj.Salvo += skillUpgradeCfg.salvo_up;
                skillUpgradeObj.BulletCount += skillUpgradeCfg.intensity_up;
                if (!this._battleSkillUpgradeData.has(skillId)) {
                    this._battleSkillUpgradeData.set(skillId, skillUpgradeObj);
                }
            }
        }
    }



    /* 获取升级技能 */
    getUpgradeSkillBySkillId(skillCfg: SkillCfg) {
        let skillCfgTem: SkillCfg = Util.clone(skillCfg);
        if (this._battleSkillUpgradeData.has(skillCfgTem.Id)) {
            let upgradeObj = this._battleSkillUpgradeData.get(skillCfgTem.Id);
            for (const key in upgradeObj) {
                if (Object.prototype.hasOwnProperty.call(upgradeObj, key)) {
                    const element = upgradeObj[key];
                    if (skillCfgTem.hasOwnProperty(key)) {
                        skillCfgTem[key] += element;
                    }
                }
            }
        }
        //TODO  加上针对所有技能id 0
        return skillCfgTem;
    }

    /**
  * 获取技能目标id
  * @param targetIdArr 
  */
    getSkillTargetId(targetIdArr: Array<number>, index: number) {
        if (targetIdArr.length) {
            return index < targetIdArr.length ? targetIdArr[index] : targetIdArr[targetIdArr.length - 1];
        }
        return 0
    }

    /**
     * 获取每次释放的子弹数量
     */
    getSkillBulletCount(targetId: number) {
        if (targetId) {
            let targetCfg = CfgMgr.getDataById<SkillTargetCfg>(new SkillTargetCfg(), targetId);
            if (targetCfg.random) {
                let randomArr = targetCfg.random.split(':');
                return Number(randomArr[1]);
            }
            return 1;
        }
        return 1;
    }

    /**
     * 获取偏移角度
     * @param index 子弹索引
     * @param intervalAngle 间隔角度
     */
    getSkillDirAngle(index: number, intervalAngle: number) {
        let angle = 0;
        if (index) {
            if (index % 2 == 0) {
                angle = index / 2 * intervalAngle;
            }
            else {
                angle = -Math.ceil(index / 2) * intervalAngle;
            }
        }
        return angle;
    }

    /**
     * 获取技能攻击目标坐标
     * @param targetId 
     */
    getSkillAtkTargetPos(targetId: number, curPos: Vec3, skillKey: string) {
        let posArr = [];
        if (targetId) {
            let targetCfg = CfgMgr.getDataById<SkillTargetCfg>(new SkillTargetCfg(), targetId);
            let targetType = targetCfg.type;
            let random = targetCfg.random;
            let randomArr = random.split(':');
            let poolCount = Number(randomArr[0]);
            let targetCount = Number(randomArr[1]);
            if (targetType.length) {
                switch (targetType[0]) {
                    case 1:
                        //英雄最近
                        posArr = this.getHeroNearTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    case 2:
                        //英雄最近
                        posArr = this.getHeroNearTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    case 3:
                        //最大血量
                        posArr = this.getMonsterHpTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    case 4:
                        //最小血量
                        posArr = this.getMonsterHpTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    case 7:
                        //屏幕内随机
                        posArr = this.getScreenTargetPos(poolCount, targetCount, skillKey);
                        break;
                    case 8:
                        //离自身最近
                        posArr = this.getSelfTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    case 9:
                        //离自身最远
                        posArr = this.getSelfTargetPos(true, poolCount, targetCount, skillKey, curPos);
                        break;
                    default:
                        posArr = this.getScreenTargetPos(poolCount, targetCount, skillKey);
                        break;
                }
            }
            //为空则随机
            posArr = posArr.length ? posArr : this.getRandPos(curPos, targetCount);
        }
        else {
            posArr = [curPos];
        }
        return posArr;
    }

    /**
     * 获取英雄近远目标
     * @param status   ture:最近  false：最远
     * @param randomStr 随机参数
     */
    getHeroNearTargetPos(status: boolean, poolCount: number, targetCount: number, heroKey: string, curPos?: Vec3) {
        let posArr = [];
        let monsterNodeMap = MonsterData.instance.getNearMonsterTarget(heroKey);
        let data = [];
        let checkArr = [];
        if (monsterNodeMap.size) {
            monsterNodeMap.forEach((item: MonsterBase) => {
                //垂直距离
                let len = item.getColliderPos().x;
                data.push({ monsterBase: item, distance: len })
            })
            data.sort((a, b) => {
                return status ? a.distance - b.distance : b.distance - a.distance;
            })
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);
            if (checkArr.length) {
                for (let i = 0; i < targetCount; i++) {
                    let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                    let e = checkArr[index];
                    posArr.push(e.monsterBase.getColliderPos());
                }
            }
        }
        return posArr;
    }

    /**
     * 获取血量高低目标
     * @param status ture:高  false：低
     * @param randomStr 随机参数
     */
    getMonsterHpTargetPos(status: boolean, poolCount: number, targetCount: number, heroKey: string, curPos: Vec3) {
        let posArr = [];
        let monsterNodeMap = MonsterData.instance.getNearMonsterTarget(heroKey);
        let data = [];
        let checkArr = [];
        if (monsterNodeMap.size) {
            monsterNodeMap.forEach((item: MonsterBase) => {
                let curhp = item.curHp;
                data.push({ monsterBase: item, hp: curhp })
            })
            data.sort((a, b) => {
                return !status ? a.hp - b.hp : b.hp - a.hp;
            })
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);
            if (checkArr.length) {
                for (let i = 0; i < targetCount; i++) {
                    let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                    let e = checkArr[index];
                    posArr.push(e.monsterBase.getColliderPos());
                }
            }
        }
        return posArr;
    }

    /**
     * 获取屏幕内随机目标
     * @param randomStr 
     */
    getScreenTargetPos(poolCount: number, targetCount: number, heroKey: string) {
        let posArr = [];
        let monsterNodeMap = MonsterData.instance.getNearMonsterTarget(heroKey);
        if (monsterNodeMap.size) {
            let data = Array.from(monsterNodeMap.values());
            for (let i = 0; i < targetCount; i++) {
                let index = Math.floor(Math.random() * data.length);
                posArr.push(data[index].getColliderPos());
            }

        }
        return posArr
    }

    /**
     * 获取自身近远目标
     * @param status ture:近  false：远
     * @param randomStr  随机参数
     */
    getSelfTargetPos(status: boolean, poolCount: number, targetCount: number, heroKey: string, curPos: Vec3) {
        let posArr = [];
        let monsterNodeMap = MonsterData.instance.getNearMonsterTarget(heroKey);
        let data = [];
        let checkArr = [];
        if (monsterNodeMap.size) {
            monsterNodeMap.forEach((item: MonsterBase) => {
                //垂直距离
                let len = Vec3.distance(item.getColliderPos(), curPos);
                if (len > 50) {
                    data.push({ monsterBase: item, distance: len })
                }
            })
            data.sort((a, b) => {
                return status ? a.distance - b.distance : b.distance - a.distance;
            })
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);
            if (checkArr.length) {
                for (let i = 0; i < targetCount; i++) {
                    let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                    let e = checkArr[index];
                    posArr.push(e.monsterBase.getColliderPos());
                }
            }
        }
        return posArr;
    }

    getRandPos(curPos: Vec3, targetCount: number) {
        let posArr = [];
        for (let i = 0; i < targetCount; i++) {
            let targetPos = new Vec3();
            targetPos.x = 0;
            targetPos.y = (Math.random() - 0.5) * 2 * 200;
            posArr.push(targetPos);
        }
        return posArr;
    }

    /**
     * 检测碰撞触发技能 skillGroupType
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
     * @param trigger 
     */
    checkColliderTriggleSkill(trigger: number, count: number, damageTimes: number) {
        let check = false;
        switch (trigger) {
            case 1:
                //碰撞之后首次触发
                check = count == 1 ? true : false;
                break;
            case 2:
                //技能结束后触发
                check = count == damageTimes ? true : false;
                break;
            case 3:
                //碰撞触发
                check = true;
                break;
            default:
                check = false;
                break;

        }
        return check;
    }


    clear() {
        this._battleSkillUpgradeData.clear();
    }

    private static _instance: SkillData = null;
    public static get instance(): SkillData {
        if (!this._instance) {
            this._instance = new SkillData();
        }
        return this._instance;
    }

}

/* 技能子弹对象 */
export class SkillBulletObj {
    skillKey: string;//技能唯一值
    skillCfg: SkillCfg;//技能配置
    layer: number = 1;//1:怪物上层 0：怪物下层
    pos: Vec3;//技能初始位置
    callback?: Function; //技能释放完回调
    targetPos?: Vec3;//技能目标位置
    param?: string;//技能参数
    scale?: number = 1;//技能大小
}

export class ReleaseSkillObj {
    skillKey: string;//技能唯一值
    skillCfg: SkillCfg;//技能配置
    animTime: number = 0.2;
    releaseTimes: number = 1;//释放次数
    bulletCount: number = 1;//子弹数量
    callback?: Function
}

export class AtkObj {
    atk: number = 0;//攻击力
    type: number = 0;//攻击类型 0:默认  1:暴击
}

/* 技能提升对象  */
export class SkillUpgradeObj {
    skillId: number = 0;//技能id
    Hp: number = 0;
    Exp: number = 0;
    Gold: number = 0;
    CdPer: number = 0;//技能cd百分比
    DamageRange: number = 0;//伤害范围
    DamageNum: number = 0;//伤害次数
    Damage: number = 0;//伤害
    Range: number = 0;//攻击范围
    Speed: number = 0;//移动速度
    Salvo: number = 0;//发射次数
    BulletCount: number = 0;//子弹个数

}
