import { _decorator, Component, instantiate, Node, Prefab, Sprite, SpriteFrame, Vec3 } from 'cc';
import { GameEvent } from '../Event/GameEvent';
import { EventListener } from '../../Frame/EventListener';
import { SkillBulletObj, SkillData } from '../Data/SkillData';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { PoolManager } from '../../Frame/PoolManager';
import { Constants } from '../../Constants';
import { SkillUpgradeData } from '../Data/SkillUpgradeData';
const { ccclass, property } = _decorator;

@ccclass('SkillManager')
export class SkillManager extends Component {
    @property(Node)
    skillParentUp: Node = null;

    private _skillPrefabItemMap: Map<number | string, Node> = new Map(); //技能预制体

    init() {
        SkillUpgradeData.instance.init();
    }

    protected onEnable(): void {
        EventListener.on(GameEvent.CREATE_SKILL_EFFECT, this.onCreateSkillEffect, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.CREATE_SKILL_EFFECT, this.onCreateSkillEffect, this);
    }

    onCreateSkillEffect(skillBulletObj: SkillBulletObj, targetPos: Vec3, angle: number, deltaTime = 0) {
        this.scheduleOnce(() => {
            let skillItem: Node = null;
            let skillId = skillBulletObj.skillCfg.Id;
            let skillCom = null;
            if (this._skillPrefabItemMap.has(skillId)) {
                skillItem = PoolManager.instance.getNodeItemById(this._skillPrefabItemMap.get(skillId), skillId.toString());
                this.skillParentUp.addChild(skillItem);
                skillItem.setPosition(skillBulletObj.pos);
                skillCom = skillItem.components[1];
                skillCom.init(skillBulletObj, targetPos, angle);
            }
            else {
                //动态加载
                let path = Constants.battSkillPath;
                ResourcesUtil.getPrefab(path).then((skillPrefab: Prefab) => {
                    //加载资源
                    let itemPath = Constants.weaponIconPath + skillBulletObj.skillCfg.Bullet + '/spriteFrame';
                    ResourcesUtil.getSpriteFrame(itemPath).then((data: SpriteFrame) => {
                        skillItem = instantiate(skillPrefab);
                        let iconSprite = skillItem.getChildByName('icon').getComponent(Sprite);
                        iconSprite.spriteFrame = data;
                        iconSprite.node.angle = skillBulletObj.skillCfg.Angle;
                        iconSprite.node.setScale(skillBulletObj.skillCfg.Scale, skillBulletObj.skillCfg.Scale);
                        this.skillParentUp.addChild(skillItem);
                        skillItem.setPosition(skillBulletObj.pos);
                        skillCom = skillItem.components[1];
                        skillCom.init(skillBulletObj, targetPos, angle);
                        this._skillPrefabItemMap.set(skillId, skillItem);
                    })
                })
            }
        }, deltaTime)
    }

    clear() {
        SkillData.instance.clear();
        SkillUpgradeData.instance.clear();
    }

}


