import { _decorator, Color, Component, EventTouch, Input, input, instantiate, Label, Node, Prefab, ProgressBar, Sprite, SpriteFrame, Tween, tween, UITransform, v2, v3, Vec2, Vec3 } from 'cc';
import { WeaponCfg } from '../../Model/WeaponModel';
import { GameEvent } from '../Event/GameEvent';
import { EventListener } from '../../Frame/EventListener';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import BaseComponent from '../../Frame/BaseComponent';
import { WeaponData } from '../Data/WeaponData';
import { SynItem } from '../Battle/SynItem';
import { GridData, GridObj } from '../Data/GridData';
import { Constants } from '../../Constants';
import { AudioManager } from '../../Frame/AudioManager';
import { OpenPopupManager } from '../../Frame/OpenPopupManager';
const { ccclass, property } = _decorator;

@ccclass('WeaponItem')
export class WeaponItem extends BaseComponent {
    @property(Label)
    level: Label = null;
    @property(Sprite)
    icon: Sprite = null;
    @property(Sprite)
    bar: Sprite = null;
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    private _touchStatus: number = 0;//当前触摸状态
    private _weaponKey: string = '';//唯一值
    private _weaponCfg: WeaponCfg = null;
    private _point: Node = null;
    private _pointGridObj: Array<GridObj> = [];//占用点位置
    private _isShake: boolean = false;//是否抖动
    private _placeStatus: boolean = true; //true:放置  false:卸下
    private _isTouch: boolean = false;//是否被点击

    get point() {
        return this._point;
    }

    get weaponCfg() {
        return this._weaponCfg;
    }

    get weaponKey() {
        return this._weaponKey;
    }

    set placeStatus(value: boolean) {
        this._placeStatus = value;
    }

    init(weaponCfg: WeaponCfg, weaponKey: string, placeStatus: boolean) {
        this._pointGridObj = [];
        this._placeStatus = placeStatus;
        this._weaponKey = weaponKey;
        this._weaponCfg = weaponCfg;
        this._isShake = false;
        this._point = this.node.getChildByName('point');
        this.level.string = `Lv${weaponCfg.Level}`;
        this.progressBar.progress = 0;
        this.initWeaponSize();
        this.setPointPosArr();
        this.setWeaponIcon();
        this.setNodeAngel();
    }

    /* 初始武器格子尺寸 */
    initWeaponSize() {
        let typeArr = this._weaponCfg.Type.split('_');
        let rowLen = Number(typeArr[1]);
        let colLen = Number(typeArr[0]);
        let size = GridData.instance.getGridSizeByRowCol(rowLen, colLen);
        let scale = GridData.instance.iconScale;
        this.node.getComponent(UITransform).setContentSize(size);
        this.point.setPosition(-size.width / 2, size.height / 2);
        this.icon.node.setScale(scale, scale, scale);
    }

    /* 设置点坐标 */
    setPointPosArr() {
        this._pointGridObj = [];
        let point = this._weaponCfg.Points;
        for (let i = 0; i < point.length; i++) {
            const item = point[i];
            for (let j = 0; j < item.length; j++) {
                const element = item[j];
                if (element) {
                    let gridObj = new GridObj();
                    gridObj.row = i;
                    gridObj.col = j;
                    this._pointGridObj.push(gridObj);
                }
            }

        }
    }

    /* 设置武器图标 */
    setWeaponIcon() {
        let path = Constants.weaponIconPath + this.weaponCfg.Res + '/spriteFrame';
        ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
            this.icon.spriteFrame = data;
            this.bar.spriteFrame = data;
            let size = this.icon.getComponent(UITransform).contentSize;
            this.bar.node.setPosition(v3(0, -size.height / 2, 0));
        })
    }

    /* 设置重组后武器的位置 */
    setBuildWeaponPos(key: string, pos: Vec3) {
        if (this._weaponKey == key) {
            this.node.setPosition(pos);
        }
    }

    setIconYellow() {
        this.icon.getComponent(Sprite).color = new Color().fromHEX('dbc464');
    }

    setIconDefault() {
        this.icon.getComponent(Sprite).color = new Color().fromHEX('ffffff');
    }

    onSetIconStatus(id: string, status: boolean) {
        if (this.weaponKey == id) {
            if (status) {
                this.setIconYellow();
            }
            else {
                this.setIconDefault();
            }
        }
    }

    setNodeAngel() {
        let angle = this._placeStatus ? 0 : 10;
        this.node.angle = angle;
    }

    /* 更新技能进度条 */
    onUpdateProgressBar(value: number, id: string) {
        if (this.weaponKey == id) {
            this.progressBar.progress = value;
        }
    }

    onSetStatusInit() {
        this.setIconDefault();
        this._isShake = false;
        Tween.stopAllByTarget(this.icon.node);
    }

    onSetIconShake(id: string) {
        if (this.weaponKey == id) {
            //抖动
            if (!this._isShake) {
                this._isShake = true;
                let posX = 5;
                let time = 0.1;
                this.icon.node.setPosition(0, 0, 0);
                tween(this.icon.node).by(time, { position: v3(-posX, 0, 0) }).by(time, { position: v3(posX, 0, 0) }).by(time, { position: v3(posX, 0, 0) }).by(time, { position: v3(-posX, 0, 0) })
                    .union().repeatForever().start();
            }
        }
    }

    /* 武器弹窗 */
    onPenWeaponPopup() {
        if (this._touchStatus == TouchStatus.START) {
            let path = Constants.itemPath + this.weaponCfg.Res;
            //TODO显示弹窗
        }
    }

    /* 武器卸下 */
    onWeaponRemove(id: string) {
        if (this.weaponKey == id) {
            //添加到待上阵武器列表
            EventListener.emit(GameEvent.ADD_REMOVE_WEAPON_LIST, this.node);
            this.placeStatus = false;
            this.setNodeAngel();
        }
    }

    /* 武器预卸下 */
    onWeapoPreRemove() {
        if (this._touchStatus == TouchStatus.START) {
            // console.log('武器预卸下');
            //武器预卸下
            EventListener.emit(GameEvent.ADD_PRE_WEAPON_LIST, this.node);
            this.placeStatus = true;
            this.setNodeAngel();
        }
    }

    /* 放置完成 */
    onPlaceFinish() {
        if (this._touchStatus == TouchStatus.MOVE) {
            //放置完成
            // console.log('放置完成');
            EventListener.emit(GameEvent.WEAPON_PlACE, this);
        }
    }


    /**
     * 合成升级
     * 1.合成后格子相同 直接合成
     * 2.合成后格子不相同则直接卸下
     * @param weaponKey 武器的唯一key
     * @param isInner 内合成或者外合成
     */
    onWeaponUpgrade(weaponKey: string, isInner: boolean) {
        if (this._weaponKey == weaponKey) {
            let level = this._weaponCfg.Level + 1;
            let group = this._weaponCfg.weaponGroupNum;
            this._weaponCfg = WeaponData.instance.getWeaponCfgByLevel(level, group);
            this.level.string = `Lv${this._weaponCfg.Level}`;
            GridData.instance.updateGridItemData(weaponKey, this._weaponCfg.Id);
            //播放合成特效
            this.setSynEffect();
            //设置资源
            this.setWeaponIcon();
        }
    }

    /* 设置合成特效 */
    setSynEffect() {
        let path = Constants.synPath;
        ResourcesUtil.getPrefab(path).then((synPrefab: Prefab) => {
            AudioManager.instance.playSound(4);
            let synItem = instantiate(synPrefab);
            synItem.parent = this.node;
            synItem.getComponent(SynItem).init();
        })
    }

    /* 关闭多触碰 */
    /* 触摸点击 */
    onTouchStart(wpos: Vec2) {
        //是否触摸到武器(只能选中一个)
        let touchPos = this.point.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
        if (GridData.instance.checkPointinGrid(v2(touchPos.x, touchPos.y), this._pointGridObj) && !WeaponData.instance.isSelect && !GridData.instance.gridEditMode) {
            this._isTouch = true;
            WeaponData.instance.isSelect = true;
            this._touchStatus = TouchStatus.START;
        }
    }

    onTouchMove(wpos: Vec2) {
        if (this._isTouch) {
            this.onWeapoPreRemove();
            this._touchStatus = TouchStatus.MOVE;
            let pos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this.node.setPosition(pos);
            EventListener.emit(GameEvent.WEAPON_MOVE, this);
        }
    }

    onTouchEnd(wpos: Vec2) {
        if (this._isTouch) {
            if (this._touchStatus == TouchStatus.START) {
                //弹出详情
                OpenPopupManager.instance.showWeaponDetailPopup(this.weaponCfg);
            }
            this._isTouch = false;
            WeaponData.instance.isSelect = false;
            this.onPenWeaponPopup();
            this.onPlaceFinish();
            this._touchStatus = TouchStatus.END;
        }
    }

    onTouchCancle(wpos: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            WeaponData.instance.isSelect = false;
            this._touchStatus = TouchStatus.CANCEL;
            //添加到待上阵武器列表
            EventListener.emit(GameEvent.ADD_REMOVE_WEAPON_LIST, this.node);
            //设置战斗按钮状态
            EventListener.emit(GameEvent.SET_BATTLE_BTN_STATUS);
        }
    }

    protected onEnable(): void {
        EventListener.on(GameEvent.GAME_TOUCH_START, this.onTouchStart, this);
        EventListener.on(GameEvent.GAME_TOUCH_MOVE, this.onTouchMove, this);
        EventListener.on(GameEvent.GAME_TOUCH_END, this.onTouchEnd, this);
        EventListener.on(GameEvent.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        EventListener.on(GameEvent.WEAPON_REMOVE, this.onWeaponRemove, this);
        EventListener.on(GameEvent.WEAPON_ICON_STATUS, this.onSetIconStatus, this);
        EventListener.on(GameEvent.WEAPON_ICON_STATUS_INIT, this.onSetStatusInit, this);
        EventListener.on(GameEvent.WEAPON_SHAKE, this.onSetIconShake, this);
        EventListener.on(GameEvent.WEAPON_UPGRADE, this.onWeaponUpgrade, this);
        // EventListener.on(GameEvent.WEAPON_PROGRESS_BAR, this.onUpdateProgressBar, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.GAME_TOUCH_START, this.onTouchStart, this);
        EventListener.off(GameEvent.GAME_TOUCH_MOVE, this.onTouchMove, this);
        EventListener.off(GameEvent.GAME_TOUCH_END, this.onTouchEnd, this);
        EventListener.off(GameEvent.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        EventListener.off(GameEvent.WEAPON_REMOVE, this.onWeaponRemove, this);
        EventListener.off(GameEvent.WEAPON_ICON_STATUS, this.onSetIconStatus, this);
        EventListener.off(GameEvent.WEAPON_ICON_STATUS_INIT, this.onSetStatusInit, this);
        EventListener.off(GameEvent.WEAPON_SHAKE, this.onSetIconShake, this);
        EventListener.off(GameEvent.WEAPON_UPGRADE, this.onWeaponUpgrade, this);
        // EventListener.off(GameEvent.WEAPON_PROGRESS_BAR, this.onUpdateProgressBar, this);
    }
}


export enum TouchStatus {
    DEFAULT,
    START,
    MOVE,
    END,
    CANCEL
}


