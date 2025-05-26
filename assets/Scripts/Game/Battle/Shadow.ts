import { _decorator, Component, Node } from 'cc';
import { MonsterBase } from '../Monster/MonsterBase';
import BaseComponent from '../../Frame/BaseComponent';
import { PoolManager } from '../../Frame/PoolManager';
import { GameDefine } from '../../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('Shadow')
export class Shadow extends BaseComponent {
    private _com: MonsterBase = null;
    init(com: MonsterBase) {
        this._com = com;
        let scale = com.monsterCfg.shadeScale;
        this.node.setScale(scale, scale, scale);
    }

    setMonsterShadownPos() {
        let curPos = this._com.node.getPosition();
        this.node.setPosition(curPos.x, curPos.y + this._com.monsterCfg.shadeOffsetY, 0);
    }

    clear() {
        PoolManager.instance.putNode(this.node);
    }

    protected childUpdate(dt: number): void {
        if (GameDefine.gameStart) {
            if (this._com) {
                this.setMonsterShadownPos();
            }
        }
    }
}


