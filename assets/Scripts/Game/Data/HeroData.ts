import { Rect, Vec2, Vec3 } from "cc";
import { MonsterBase } from "../Monster/MonsterBase";
import { ReleaseSkillObj, SkillBulletObj } from "./SkillData";
export class HeroData {
    private _heroPoint: Vec3 = new Vec3(0, -620, 0);
    private _heroR: number = 450;//检测范围
    private _rangeW = 200;
    private _rangeH = 500;
    private _heroKey = '1001';
    private _ReleaseSkillQueue: Array<ReleaseSkillObj> = [];
    private _curHp: number = 0;
    private _maxHp: number = 300;


    get heroPoint() {
        return this._heroPoint;
    }

    get heroKey() {
        return this._heroKey;
    }

    get heroR() {
        return this._heroR;
    }

    get maxHp() {
        return this._maxHp;
    }


    get curHp() {
        return this._curHp;
    }

    set curHp(value: number) {
        this._curHp -= value;
        if (this._curHp <= 0) {
            this._curHp = 0;
        }
    }

    init() {
        this._curHp = 500;
        this._maxHp = 500;
    }

    /* 检测位置是否在英雄范围内 */
    checkInHeroRange(pos: Vec2, com: MonsterBase) {
        let dis = Vec2.distance(pos, new Vec2(this._heroPoint.x, this._heroPoint.y));
        if (dis < 100) {
            return false
        }
        else if ((pos.y - this.heroPoint.y) < 300) {
            let vector = new Vec3();
            let dir = Vec3.subtract(vector, this._heroPoint.clone(), new Vec3(pos.x, pos.y, 0));
            com.dir = dir.normalize();
        }
        return true;
    }

    /* 添加队列技能 */
    addQueueSkill(releaseSkillObj: ReleaseSkillObj) {
        this._ReleaseSkillQueue.push(releaseSkillObj);
    }

    /* 获得队列技能 */
    getQueueSkill() {
        return this._ReleaseSkillQueue.shift();
    }

    clear() {
        this._ReleaseSkillQueue = [];
    }

    private static _instance: HeroData = null;
    public static get instance(): HeroData {
        if (!this._instance) {
            this._instance = new HeroData();
        }
        return this._instance;
    }
}

export enum HeroAnim {
    IDLE = 'Idle',
    ATK = 'Skill',
    DIE = 'die',
}


