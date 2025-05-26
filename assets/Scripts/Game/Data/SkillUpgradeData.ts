import { CfgMgr } from "../../Frame/CfgMgr";
import { BattleLevelCfg } from "../../Model/BattleLevelModel";
import { SkillUpgradeCfg } from "../../Model/SkillUpgradeMode";

export class SkillUpgradeData {
    private _BattleLevelData: Map<number, BattleLevelCfg> = new Map(); //战斗经验配置
    private _unlockUpgradeOptionsPoolData: Map<number, SelectObj> = new Map();//解锁技能池数据 (权重大于0的计算)
    init() {
        let battleLevelArr = CfgMgr.getCfgDataArray<BattleLevelCfg>(new BattleLevelCfg());
        for (let i = 0; i < battleLevelArr.length; i++) {
            const element = battleLevelArr[i];
            this._BattleLevelData.set(element.Level, element);
        }

        let skillUpgradeData = CfgMgr.getCfgDataArray<SkillUpgradeCfg>(new SkillUpgradeCfg());
        for (let i = 0; i < skillUpgradeData.length; i++) {
            const element = skillUpgradeData[i];
            if (element.options_num) {
                let selectObj = new SelectObj();
                selectObj.id = element.Id;
                selectObj.premise = element.premise;
                selectObj.options_num = element.options_num;
                this._unlockUpgradeOptionsPoolData.set(element.Id, selectObj);
            }
        }
    }

    getSkillUpgradeCfgById(id: number) {
        return CfgMgr.getDataById<SkillUpgradeCfg>(new SkillUpgradeCfg(), id);
    }

    /**
     * 获取等级经验数据
     * @param level 
     */
    getBattleLevelByLevel(level: number) {
        let maxExp = 100;
        if (this._BattleLevelData.has(level)) {
            maxExp = this._BattleLevelData.get(level).Exp;
        }
        return maxExp;
    }


    /* 获取解锁数据 */
    getUnlockUpgradeOptionsData() {
        return Array.from(this._unlockUpgradeOptionsPoolData.values());
    }


    /**
* 根据权重获取数据
*/
    getSelectObjByWeight(temList: Array<SelectObj>, list: Array<SelectObj>) {
        let start = 0;
        let end = 0;
        let index = 0;
        let sum = 0;
        let newList: Array<SelectObj> = [];
        for (let i = 0; i < temList.length; i++) {
            let element = temList[i];
            //options_num权重大于0的计算
            if (element.options_num) {
                let hasStatus: boolean = false;
                for (let j = 0; j < list.length; j++) {
                    const element1 = list[j];
                    if (element.id == element1.id) {
                        hasStatus = true;
                        break;
                    }
                }
                if (!hasStatus) {
                    let element = temList[i];
                    sum += element.options_num;
                    newList.push(element);
                }
            }
        }
        if (newList.length) {
            let random = Math.random() * sum;
            newList.some((item, idx) => {
                end = start + item.options_num;
                if (random >= start && random < end) {
                    index = idx;
                    return true;
                }
                start = end;
            })
            return newList[index];
        }
        return null;
    }

    /* 通过权重获取技能列表 */
    getSelectSkillListByWeight() {
        let list: Array<SelectObj> = [];
        for (let i = 0; i < 3; i++) {
            let element = this.getSelectObjByWeight(this.getUnlockUpgradeOptionsData(), list);
            if (element) {
                list.push(element);
            }
        }
        return list;
    }

    clear() {
        this._BattleLevelData.clear();
    }

    private static _instance: SkillUpgradeData = null;
    public static get instance(): SkillUpgradeData {
        if (!this._instance) {
            this._instance = new SkillUpgradeData();
        }
        return this._instance;
    }
}

export class SelectObj {
    id: number;//配置id
    premise: Array<number>;//前置技能
    options_num: number;//数量
}


