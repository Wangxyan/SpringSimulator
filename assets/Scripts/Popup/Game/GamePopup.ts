import { _decorator, Component, Node, UITransform, Label, instantiate, Prefab, tween, v3, ProgressBar, view, Button, Sprite, Layout } from 'cc';
import { Constants } from '../../Constants';
import { Debug } from '../../Frame/Debug';
import { EventListener } from '../../Frame/EventListener';
import { OpenPopupManager } from '../../Frame/OpenPopupManager';
import { PopupManager } from '../../Frame/PopupManager';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { Util } from '../../Frame/Util';
import { GridData } from '../../Game/Data/GridData';
import { MonsterData } from '../../Game/Data/MonsterData';
import { SkillUpgradeData } from '../../Game/Data/SkillUpgradeData';
import { CoinObj, WeaponData } from '../../Game/Data/WeaponData';
import { GameEvent } from '../../Game/Event/GameEvent';
import { SkillTypeItem } from '../../Game/Skill/SkillTypeItem';
import { GameDefine } from '../../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('GamePopup')
export class GamePopup extends Component {
    @property(ProgressBar)
    expProgerssBar: ProgressBar = null;
    @property(Label)
    expLevel: Label = null;
    @property(Label)
    kill: Label = null;
    @property(Label)
    gold: Label = null;
    @property(Label)
    wave: Label = null;
    @property(Node)
    buttonList: Node = null;
    @property(Node)
    placeList: Node = null;
    @property(Node)
    skillTypeList: Node = null;

    public weaponSkill: Array<number> = [];//携带的武器id
    private _totalGold: number = 0;

    private _maxExp: number = 100;//当前最大经验值
    private _curExp: number = 0;//当前经验值
    private _level: number = 0;//当期前等级

    show() {
        this._totalGold = 0;
        this._curExp = 0;
        this._level = 0;
        this._maxExp = SkillUpgradeData.instance.getBattleLevelByLevel(this._level + 1);
        this.weaponSkill = [];
        this.gold.string = `${this._totalGold}`;
        let scale = Util.adapterScale();
        this.buttonList.setScale(scale, scale);
        this.expProgerssBar.node.active = false;
        this.expProgerssBar.progress = 0;
        this.expProgerssBar.node.setScale(scale, scale);
        this.onSetWaveInfo(1);
        this.updateLevelInfo();
        this.clearSkill();
        this.buttonList.active = true;
        this.expProgerssBar.node.active = false;
    }

    /* 金币动画 */
    onGameCoin(coinObj: CoinObj) {
        let targetPos = this.gold.node.getPosition();
        let count = coinObj.num;
        let wpos = coinObj.wpos;
        let path = Constants.battlePath + 'goldItem';
        let startPos = this.gold.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
        ResourcesUtil.getPrefab(path).then((itemPrefab: Prefab) => {
            for (let i = 0; i < count; i++) {
                let item = instantiate(itemPrefab);
                let posX = (Math.random() - 0.5) * 2 * 100 + startPos.x;
                let posY = (Math.random() - 0.5) * 2 * 50 + startPos.y;
                item.parent = this.gold.node.parent;
                item.setPosition(startPos);
                tween(item).to(0.2, { position: v3(posX, posY, 0) }, { easing: 'sineIn' }).delay(0.2).to(0.5, { position: targetPos }, { easing: 'sineInOut' }).call(() => {
                    this._totalGold++;
                    this.gold.string = `${this._totalGold}`;
                    item.destroy();
                }).start();
            }
        })
    }

    /* 设置战斗波次信息 */
    onSetWaveInfo(wave: number) {
        this.wave.string = `第${wave}/${MonsterData.instance.MaxWave}波`;
    }

    /* 更新怪物进度 */
    onUpdateMonsterProgress(num: number, exp: number) {
        this.kill.string = `杀敌数：${num}`;
        this._curExp += exp;
        this._maxExp = SkillUpgradeData.instance.getBattleLevelByLevel(this._level + 1);
        if (this._curExp >= this._maxExp) {
            //升级
            this._level++;
            this._curExp = this._curExp - this._maxExp;
            this.updateLevelInfo();
        }
        this.updateLevelInfo();
    }

    /**
     * 更新玩家经验信息
   */
    updateLevelInfo() {
        this.expLevel.string = `${this._level}`;
        this.expProgerssBar.progress = this._curExp / this._maxExp;
    }

    /* 设置战斗按钮状态 */
    setBattleBtnStatus() {
        let weaponIdArr = GridData.instance.getGridItemDataKeys();
        let battleBtn = this.buttonList.children[1];
        if (weaponIdArr.length) {
            battleBtn.getComponent(Button).interactable = true;
            battleBtn.getComponent(Sprite).grayscale = false;
        }
        else {
            battleBtn.getComponent(Button).interactable = false;
            battleBtn.getComponent(Sprite).grayscale = true;
        }
    }

    /* 刷新 */
    onRerollBtn() {
        EventListener.emit(GameEvent.WEAPON_REMOVE_REFRESH);
    }

    /* 战斗 */
    onBattleBtn() {
        this.buttonList.active = false;
        this.expProgerssBar.node.active = true;
        EventListener.emit(GameEvent.GAME_BATTLE_START);
    }

    onPlaceFinishBtn() {
        EventListener.emit(GameEvent.PLACE_GRID_FINISH);
        this.placeList.active = false;
    }

    onShowHidePlaceList(status: boolean) {
        this.buttonList.active = !status;
        this.placeList.active = status;
    }

    onShowHideSkillList(status: boolean) {
        this.skillTypeList.active = status;
        this.buttonList.active = !status;
        this.expProgerssBar.node.active = status;
    }


    clearSkill() {
        for (let i = 0; i < this.skillTypeList.children.length; i++) {
            const element = this.skillTypeList.children[i];
            if (element.active) {
                element.destroy();
            }
        }
    }

    initHeroSkill() {
        //清除技能
        this.clearSkill();
        let visibleSize = view.getVisibleSize();
        this.skillTypeList.active = true;
        this.skillTypeList.getComponent(UITransform).width = visibleSize.width;
        let skillTypeItem0 = this.skillTypeList.children[0];
        let cMaxCount = 8; //行数
        let rMaxCount = 2; //列数
        let space = 10;
        let maxWidth = 100;
        this.weaponSkill = [];
        let weaponData = Array.from(GridData.instance.getGridItemMapData().values());
        let skillCount = weaponData.length;
        let limtCount = skillCount > cMaxCount ? cMaxCount : skillCount;
        let width = Math.floor((visibleSize.width - (limtCount + 1) * space) / limtCount) > maxWidth ? maxWidth : Math.floor((visibleSize.width - (limtCount + 1) * space) / limtCount);
        let scale = width < maxWidth ? width / maxWidth : 1;
        skillTypeItem0.setScale(scale, scale);
        let startPosX = limtCount % 2 == 0 ? -(space / 2 + (limtCount / 2 - 1) * space + limtCount / 2 * width - width / 2) : -Math.floor(limtCount / 2) * (space + width);
        let startPosY = skillCount > cMaxCount ? 50 : 0;
        for (let i = 0; i < weaponData.length; i++) {
            const weaponObj = weaponData[i];
            let wid = weaponObj.wid;
            let key = weaponObj.id;
            let weaponCfg = WeaponData.instance.getWeaponCfgById(wid);
            let skillId = weaponCfg.SkillId;
            let skillKey = 'skillTypeItem' + weaponObj.id;
            let skillTypeItem = null;
            let posX = i >= cMaxCount ? startPosX + (i % cMaxCount) * (width + space) : startPosX + i * (width + space);
            let posY = i >= cMaxCount ? startPosY - width - space : startPosY;
            skillTypeItem = instantiate(skillTypeItem0);
            skillTypeItem.parent = this.skillTypeList;
            skillTypeItem.active = true;
            skillTypeItem.setPosition(posX, posY);
            skillTypeItem.name = skillKey;
            skillTypeItem.getComponent(SkillTypeItem).init(key, weaponCfg);
            this.weaponSkill.push(wid);
        }
    }

    onPauseBtn() {
        OpenPopupManager.instance.showPausePopup();
    }

    onEnable() {
        EventListener.on(GameEvent.WEAPON_CHANGE_COIN, this.onGameCoin, this);
        EventListener.on(GameEvent.GAME_BATTLE, this.onSetWaveInfo, this);
        EventListener.on(GameEvent.UPDATE_MONSTER_PROGRESS, this.onUpdateMonsterProgress, this);
        EventListener.on(GameEvent.SET_BATTLE_BTN_STATUS, this.setBattleBtnStatus, this);
        EventListener.on(GameEvent.INIT_HERO_SKILL, this.initHeroSkill, this);
        EventListener.on(GameEvent.SHOW_HIDE_SKILL_LIST, this.onShowHideSkillList, this);
        EventListener.on(GameEvent.SHOW_HIDE_PLACE_LIST, this.onShowHidePlaceList, this);
    }

    onDisable() {
        EventListener.off(GameEvent.WEAPON_CHANGE_COIN, this.onGameCoin, this);
        EventListener.off(GameEvent.GAME_BATTLE, this.onSetWaveInfo, this);
        EventListener.off(GameEvent.UPDATE_MONSTER_PROGRESS, this.onUpdateMonsterProgress, this);
        EventListener.off(GameEvent.SET_BATTLE_BTN_STATUS, this.setBattleBtnStatus, this);
        EventListener.off(GameEvent.INIT_HERO_SKILL, this.initHeroSkill, this);
        EventListener.off(GameEvent.SHOW_HIDE_SKILL_LIST, this.onShowHideSkillList, this);
        EventListener.off(GameEvent.SHOW_HIDE_PLACE_LIST, this.onShowHidePlaceList, this);

    }

    onTapBtn() {
        EventListener.emit(GameEvent.GAME_TAP_BTN);
    }
}


