import { _decorator, Component, director, Node } from 'cc';
import { MonsterBase } from './MonsterBase';
import { MonsterCfg } from '../../Model/MonsterModel';
import { MonsterObj } from '../Data/MonsterData';
import { GameDefine } from '../../GameDefine';
const { ccclass, property } = _decorator;

@ccclass('MonsterItem')
export class MonsterItem extends MonsterBase {
    init(monsterCfg: MonsterCfg, monsterObj: MonsterObj) {
        this.monsterCfg = monsterCfg;
        this.monsterObj = monsterObj;
        this.initStatus = false;
        this.isDie = false;
        this.setMonsterBorn();
    }

    childUpdate(dt: number): void {
        if (GameDefine.gameStart && this.initStatus) {
            let frames = director.getTotalFrames();
            this.monsterMoveFrame(dt);
            this.moveRepulseEffectFrame(dt);
        }
    }
}


