import { _decorator, AnimationComponent, Component, instantiate, Node, Prefab, tween, UITransform, v3, Vec3, sp } from 'cc';
import BaseComponent from '../../Frame/BaseComponent';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { GameDefine } from '../../GameDefine';
import { Constants } from '../../Constants';
import { HeroAnim } from '../Data/HeroData';
import { CoinObj } from '../Data/WeaponData';
import { Util } from '../../Frame/Util';
const { ccclass, property } = _decorator;

@ccclass('BoxManager')
export class BoxManager extends BaseComponent {
    @property(Node)
    boxParent: Node = null;
    private _pickBox: boolean = false;


    protected onEnable(): void {
        EventListener.on(GameEvent.CREATE_DROP_BOX, this.onCreateDropBox, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.CREATE_DROP_BOX, this.onCreateDropBox, this);
    }

    /* 创建掉落宝箱 */
    onCreateDropBox(pos: Vec3) {
        //英雄移动动画
        let path = Constants.battlePath + 'boxItem';
        this.boxParent.setPosition(0, 0);
        ResourcesUtil.getPrefab(path).then((itemPrefab: Prefab) => {
            let boxItem = instantiate(itemPrefab);
            boxItem.parent = this.boxParent;
            boxItem.setPosition(pos);
            let boxSpine = boxItem.getChildByName('box').getComponent(sp.Skeleton);
            let wpos = boxItem.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            this.scheduleOnce(() => {
                this.showFlyGoldAnim(wpos);
            }, 0.5)
            boxSpine.setCompleteListener(() => {
                boxItem.destroy();
                EventListener.emit(GameEvent.RESERT_SELECT_BAG);
            })
        })
    }

    /* 转换飞的金币动画 */
    showFlyGoldAnim(wpos: Vec3) {
        let coinObj = new CoinObj();
        coinObj.wpos = wpos;
        coinObj.num = Util.getRandomInt(5, 10);
        EventListener.emit(GameEvent.WEAPON_CHANGE_COIN, coinObj);
    }

    clear() {
        this._pickBox = false;
    }
}


