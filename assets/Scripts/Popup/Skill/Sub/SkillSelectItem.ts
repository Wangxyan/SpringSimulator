import { _decorator, Component, Node, Sprite, RichText, SpriteFrame } from 'cc';
import { Constants } from '../../../Constants';
import { ResourcesUtil } from '../../../Frame/ResourcesUtil';
import { SpriteEx } from '../../../Frame/SpriteEx';
import { SkillData } from '../../../Game/Data/SkillData';
import { SelectObj, SkillUpgradeData } from '../../../Game/Data/SkillUpgradeData';
import { SkillUpgradeCfg } from '../../../Model/SkillUpgradeMode';
const { ccclass, property } = _decorator;

@ccclass('SkillSelectItem')
export class SkillSelectItem extends Component {
    @property(SpriteEx)
    frame: SpriteEx = null;
    @property(SpriteEx)
    quality: SpriteEx = null;
    @property(Sprite)
    icon: Sprite = null;
    @property(RichText)
    desc: RichText = null;


    private _callBack: Function = null;
    private _skillUpgradeCfg: SkillUpgradeCfg = null;
    private _selectObj: SelectObj = null;

    init(selectObj: SelectObj, callback: Function) {
        let skillUpgradeCfg = SkillUpgradeData.instance.getSkillUpgradeCfgById(selectObj.id);
        this._selectObj = selectObj;
        this._callBack = callback;
        this._skillUpgradeCfg = skillUpgradeCfg;
        this.frame.index = skillUpgradeCfg.quality;
        this.quality.index = skillUpgradeCfg.quality;
        this.desc.string = skillUpgradeCfg.desc;
        let qualityPath = Constants.skillSelectIconPath + skillUpgradeCfg.icon + '/spriteFrame';
        ResourcesUtil.geSpriteFrame(qualityPath).then((data: SpriteFrame) => {
            this.icon.spriteFrame = data;
        })
    }

    setUpgradeSkill() {
        let type = this._skillUpgradeCfg.type;
        switch (type) {
            case 0:
                SkillData.instance.upgradeSkillObjAtt(this._skillUpgradeCfg);
                break;
            case 1:
                //银币
                break;
            case 2:
                //敌人移动速度
                break;
            case 3:
                //经验
                break;
            case 4:
                //生命
                break;

        }
    }

    onTouchBtn() {
        this._callBack && this._callBack();
        this._selectObj.options_num--;
        this.setUpgradeSkill();
    }
}


