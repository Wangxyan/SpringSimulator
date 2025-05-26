import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import { Constants } from '../../Constants';
import { PopupManager } from '../../Frame/PopupManager';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { SkillData } from '../../Game/Data/SkillData';
import { GameDefine } from '../../GameDefine';
import { WeaponCfg } from '../../Model/WeaponModel';
const { ccclass, property } = _decorator;

@ccclass('WeaponDetailPopup')
export class WeaponDetailPopup extends Component {
    @property(Sprite)
    icon: Sprite = null;
    @property(Label)
    iconName: Label = null;
    @property(Label)
    level: Label = null;
    @property(Label)
    description: Label = null;  // Add this property
    show(weaponCfg: WeaponCfg) {
        GameDefine.gameTouch = false;
        this.setWeaponInfo(weaponCfg);
    }

    setWeaponInfo(weaponCfg: WeaponCfg) {
        let skillId = weaponCfg.SkillId;
        let skillCfg = SkillData.instance.getSkillCfgById(skillId);
        let path = Constants.weaponIconPath + weaponCfg.Res + '/spriteFrame';
        this.iconName.string = weaponCfg.Name;
        this.level.string = `Lv.${weaponCfg.Level}`;
        this.description.string = weaponCfg.Description;
        ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
            this.icon.spriteFrame = data;
        })
    }

    onCloseBtn() {
        GameDefine.gameTouch = true;
        PopupManager.instance.hide(Constants.PopupUI.WeaponDetailPopup);
    }
}


