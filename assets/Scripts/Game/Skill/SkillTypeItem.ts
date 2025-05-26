import { _decorator, Component, Node, Vec3, Sprite, SpriteFrame, UITransform } from 'cc';
import BaseComponent from '../../Frame/BaseComponent';
import { SkillCfg } from '../../Model/SkillModel';
import { ReleaseSkillObj, SkillBulletObj, SkillData } from '../Data/SkillData';
import { MonsterData } from '../Data/MonsterData';
import { HeroData } from '../Data/HeroData';
import { GameDefine } from '../../GameDefine';
import { WeaponCfg } from '../../Model/WeaponModel';
import { Constants } from '../../Constants';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
const { ccclass, property } = _decorator;

@ccclass('SkillTypeItem')
export class SkillTypeItem extends BaseComponent {
    @property(Sprite)
    quality: Sprite = null;
    @property(Sprite)
    skilIcon: Sprite = null;
    private _skillCfg: SkillCfg = null;
    private _cd: number = 0; //技能cd
    private _initRelease: boolean = true;//技能释放
    private _weaponKey: string = '';

    public get range() {
        return this._skillCfg.Range;
    }

    init(weaponKey: string, weaponCfg: WeaponCfg) {
        this._weaponKey = weaponKey;
        this._skillCfg = SkillData.instance.getSkillCfgById(weaponCfg.SkillId);
        this._cd = this._skillCfg.Cd;
        this.setSkillTypeInfo(this._skillCfg);
    }

    setSkillTypeInfo(skillCfg: SkillCfg) {
        let path = Constants.weaponIconPath + skillCfg.Res + '/spriteFrame';
        let qualityPath = Constants.qualityPath + skillCfg.Quality + '/spriteFrame';
        ResourcesUtil.geSpriteFrame(qualityPath).then((data: SpriteFrame) => {
            this.quality.spriteFrame = data;
        })
        ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
            this.skilIcon.spriteFrame = data;
            let contentSize = this.skilIcon.getComponent(UITransform).contentSize;
            let scale = Math.min(80 / contentSize.width, 80 / contentSize.height);
            this.skilIcon.node.setScale(scale, scale);
            this._initRelease = true;
        })
    }

    initSkillCd() {
        this._cd = this._skillCfg.Cd;
        this._initRelease = true;
    }

    setSkillProgressBar(cd: number) {
        let progress = cd / this._skillCfg.Cd;
        this.node.getChildByName('bar').getComponent(Sprite).fillRange = progress;
    }


    /* 创建队列技能 */
    createQueueSkill() {
        let releaseSkillObj = new ReleaseSkillObj();
        releaseSkillObj.skillCfg = this._skillCfg;
        releaseSkillObj.callback = this.initSkillCd.bind(this);
        releaseSkillObj.skillKey = this._weaponKey;
        HeroData.instance.addQueueSkill(releaseSkillObj);
    }

    protected childUpdate(dt: number): void {
        if (GameDefine.gameStart) {
            let skillPos = HeroData.instance.heroPoint;
            if (this._initRelease) {
                this._cd -= dt;
                this.setSkillProgressBar(this._cd);
                /* 检测技能范围内的怪物 */
                if (this._cd < 0) {
                    //释放技能
                    if (MonsterData.instance.checkSkillNearMonster(skillPos, this._skillCfg.Range)) {
                        this._initRelease = false;
                        this.createQueueSkill();
                    }
                    else {
                        this._cd = this._skillCfg.Cd;
                    }
                }
                MonsterData.instance.setNearMonster(this._weaponKey, skillPos, this._skillCfg.Range);
            }
        }
    }
}


