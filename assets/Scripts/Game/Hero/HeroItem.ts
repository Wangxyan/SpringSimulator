import { _decorator, Component, Node } from 'cc';
import { GameDefine } from '../../GameDefine';
import { HeroBase } from './HeroBase';
const { ccclass, property } = _decorator;

@ccclass('HeroItem')
export class HeroItem extends HeroBase {
    init() {
        this.initBorn();
    }

    protected childUpdate(dt: number): void {
        if (GameDefine.gameStart) {
            this.releaseSkill();
        }
    }
}


