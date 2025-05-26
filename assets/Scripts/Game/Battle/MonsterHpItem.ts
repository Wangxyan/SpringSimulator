import { _decorator, Component, Label, Node, ProgressBar, tween, UIOpacity, UITransform } from 'cc';
import { MonsterBase } from '../Monster/MonsterBase';
import BaseComponent from '../../Frame/BaseComponent';
import { PoolManager } from '../../Frame/PoolManager';
import { GameDefine } from '../../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('MonsterHpItem')
export class MonsterHpItem extends BaseComponent {
    @property(Node)
    barAnim: Node = null;
    @property(Node)
    bar: Node = null;
    private _com: MonsterBase = null;

    init(com: MonsterBase) {
        this.barAnim.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
        this.getComponent(ProgressBar).progress = 1;
        this.getComponent(UIOpacity).opacity = 0;
        this._com = com;
    }

    setMonsterHp(curHp: number, maxHp: number) {
        if (curHp <= 0) { curHp = 0 };
        this.unschedule(this.setMonsterHide);
        this.getComponent(UIOpacity).opacity = 255;
        this.getComponent(ProgressBar).progress = curHp / maxHp;
        let curWidth = this.bar.getComponent(UITransform).width;
        let endWidth = this.barAnim.getComponent(UITransform).width;
        let offsetX = endWidth - curWidth;
        this.scheduleOnce(this.setMonsterHide, 0.5);
        tween(this.barAnim.getComponent(UITransform)).by(0.2, { width: -offsetX }).call((() => {
            if (curHp <= 0) {
                this.clear();
            }
        })).start();
    }

    setMonsterHide() {
        this.getComponent(UIOpacity).opacity = 0;
    }

    setMonsterHpPos() {
        let curPos = this._com.getColliderPos();
        let height = this._com.node.getComponent(UITransform).height;
        this.node.setPosition(curPos.x, curPos.y + height * 2 / 3, 0);
    }

    clear() {
        PoolManager.instance.putNode(this.node);
    }

    protected childUpdate(dt: number): void {
        if (GameDefine.gameStart) {
            if (this._com) {
                this.setMonsterHpPos();
            }
        }
    }
}


