import { _decorator, Component, Node, screen, Size, view, UITransform, tween, v3, EventTouch, Input, director, Button, Sprite, instantiate, Prefab, Vec3, Tween } from 'cc';
import { Constants } from '../Constants';
import { AudioManager } from '../Frame/AudioManager';
import { EventListener } from '../Frame/EventListener';
import GameController from '../Frame/GameController';
import { OpenPopupManager } from '../Frame/OpenPopupManager';
import { PopupManager } from '../Frame/PopupManager';
import { ResourcesUtil } from '../Frame/ResourcesUtil';
import { GridData } from '../Game/Data/GridData';
import { GameEvent } from '../Game/Event/GameEvent';
import { BattleUIManager } from '../Game/Mgr/BattleUIManager';
import { BgManager } from '../Game/Mgr/BgManager';
import { BoxManager } from '../Game/Mgr/BoxManager';
import { GridManager } from '../Game/Mgr/GridManager';
import { GridMapManager } from '../Game/Mgr/GridMapManager';
import { HeroManager } from '../Game/Mgr/HeroManager';
import { MonsterManager } from '../Game/Mgr/MonsterManager';
import { SkillManager } from '../Game/Mgr/SkillManager';
import { WeaponManager } from '../Game/Mgr/WeaponManager';
import { GameDefine } from '../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    gameCtrl: Node = null;
    @property(Node)
    battleMap: Node = null;
    @property(Node)
    removeWeaponList: Node = null;
    @property(Node)
    openBox: Node = null;
    @property(BgManager)
    bgManager: BgManager = null;
    @property(GridMapManager)
    gridMapManager: GridMapManager = null;
    @property(GridManager)
    gridManager: GridManager = null;
    @property(WeaponManager)
    weaponManager: WeaponManager = null;
    @property(HeroManager)
    heroManager: HeroManager = null;
    @property(BoxManager)
    boxManager: BoxManager = null;
    @property(MonsterManager)
    monsterManager: MonsterManager = null;
    @property(BattleUIManager)
    battleUIManager: BattleUIManager = null;
    @property(SkillManager)
    skillManager: SkillManager = null;

    private _battleMapUpPosY = 1200;
    private _battleMapDownPosy = 200;

    onLoad() {
        AudioManager.instance.playMusic(2, true);
        GameDefine.gameTouch = false;
        OpenPopupManager.instance.showGamePopup();
        this.init();
    }

    init() {
        this.gridManager.init();
        this.bgManager.init();
        this.gridMapManager.init();
        this.weaponManager.init();
        this.heroManager.init();
        this.monsterManager.init();
        this.skillManager.init();
        this.onTapBtn();
    }
    /* 触碰开始 */
    onTapBtn() {
        GameDefine.gameTouch = true;
        this.setTweenAnim(this.removeWeaponList, 0.3);
    }

    /* 设置动画 */
    setTweenAnim(main: Node, duration: number) {
        main.active = true;
        main.setScale(0.5, 0.5);
        tween(main)
            .to(duration, { scale: v3(1, 1, 1) }, { easing: 'backOut' })
            .call(() => {
                // 弹窗已完全展示
            })
            .start();
    }


    /**游戏开始 */
    onGameStart() {
        GameDefine.gameTouch = false;
        GameDefine.gameStart = true;
        GameDefine.gameOver = false;
    }

    /**游戏结束 */
    onGameOver() {
        GameDefine.gameTouch = false;
        GameDefine.gameStart = false;
        GameDefine.gameOver = true;
        Tween.stopAll();
        this.clear();
        PopupManager.instance.hideAll();
        GameController.resume();
        director.loadScene('Game');
    }

    /* 战斗 */
    onBattleBtn() {
        tween(this.battleMap).to(0.5, { position: new Vec3(0, this._battleMapDownPosy, 0) }, { easing: 'sineInOut' }).call(() => {
            //显示英雄
            this.heroManager.showHideHero(true);
            //初始化技能
            EventListener.emit(GameEvent.INIT_HERO_SKILL);
            //设置当前刷怪事件
            this.monsterManager.setCurChapterEvent();
            this.weaponManager.showHideRemoveList(false);
            //游戏开始
            this.onGameStart();
        }).start();
    }


    /* 重新调整背包 */
    onResertSelectBg() {
        tween(this.battleMap).to(0.5, { position: v3(0, this._battleMapUpPosY, 0) }, { easing: 'sineInOut' }).call(() => {
            EventListener.emit(GameEvent.SHOW_HIDE_SKILL_LIST, false);
            this.heroManager.showHideHero(false);
            GameDefine.gameStart = false;
            EventListener.emit(GameEvent.WEAPON_REMOVE_REFRESH);
            this.weaponManager.showHideRemoveList(true);
            this.setTweenAnim(this.removeWeaponList, 0.3);
            GameDefine.gameTouch = true;
        }).start();
    }

    /* 触摸点击 */
    onTouchStart(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            EventListener.emit(GameEvent.GAME_TOUCH_START, wpos);
        }
    }

    /* 触摸移动 */
    onTouchMove(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            EventListener.emit(GameEvent.GAME_TOUCH_MOVE, wpos);
        }
    }

    /* 触摸结束 */
    onTouchEnd(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            EventListener.emit(GameEvent.GAME_TOUCH_END, wpos);
        }
    }

    /* 触摸取消 */
    onTouchCancle(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            EventListener.emit(GameEvent.GAME_TOUCH_CANCLE, wpos);
        }
    }

    protected onEnable(): void {
        this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.gameCtrl.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        EventListener.on(GameEvent.GAME_OVER, this.onGameOver, this);
        EventListener.on(GameEvent.GAME_TAP_BTN, this.onTapBtn, this);
        EventListener.on(GameEvent.RESERT_SELECT_BAG, this.onResertSelectBg, this);
        EventListener.on(GameEvent.GAME_BATTLE_START, this.onBattleBtn, this);
    }

    protected onDisable(): void {
        this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.gameCtrl.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        EventListener.off(GameEvent.GAME_OVER, this.onGameOver, this);
        EventListener.off(GameEvent.GAME_TAP_BTN, this.onTapBtn, this);
        EventListener.off(GameEvent.RESERT_SELECT_BAG, this.onResertSelectBg, this);
        EventListener.off(GameEvent.GAME_BATTLE_START, this.onBattleBtn, this);
    }

    clear() {
        // 数据清理整理
        this.bgManager.clear();
        this.heroManager.clear();
        this.gridManager.clear();
        this.weaponManager.clear();
        this.monsterManager.clear();
        this.boxManager.clear();
        this.battleUIManager.clear();
        this.skillManager.clear();
    }
}


