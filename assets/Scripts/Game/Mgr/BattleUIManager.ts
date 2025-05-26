import { _decorator, Component, instantiate, log, Node, Prefab, v2, v3, Vec3 } from 'cc';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { PoolManager } from '../../Frame/PoolManager';
import { DamageItem } from '../Battle/DamageItem';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { BlastItem } from '../Battle/BlastItem';
import { HeroHpItem } from '../Battle/HeroHpItem';
import { MonsterHpItem } from '../Battle/MonsterHpItem';
import { MonsterBase } from '../Monster/MonsterBase';
import { Constants } from '../../Constants';
import { Shadow } from '../Battle/Shadow';
const { ccclass, property } = _decorator;

@ccclass('BattleUIManager')
export class BattleUIManager extends Component {
    @property(Node)
    battleUIParent: Node = null;
    @property(Node)
    battleUIDownParent: Node = null;

    private _battlerUIPrefabData: Map<string, Prefab> = new Map();//预制体数据
    private _battleUiNode: Map<string, Node> = new Map();

    protected onEnable(): void {
        EventListener.on(GameEvent.CREATE_DAMAGER_NUM, this.onCreateDamageNum, this);
        EventListener.on(GameEvent.SHOW_MONSTER_DIE_EFFECT, this.onCreateDieEffect, this);
        EventListener.on(GameEvent.SHOW_HERO_HP, this.onCreateHeroHp, this);
        EventListener.on(GameEvent.SHOW_MONSTER_HP, this.onCreateMonsterHp, this);
        EventListener.on(GameEvent.SHOW_MONSTER_SHADOW, this.onCreateMonsterShadow, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.CREATE_DAMAGER_NUM, this.onCreateDamageNum, this);
        EventListener.off(GameEvent.SHOW_MONSTER_DIE_EFFECT, this.onCreateDieEffect, this);
        EventListener.off(GameEvent.SHOW_HERO_HP, this.onCreateHeroHp, this);
        EventListener.off(GameEvent.SHOW_MONSTER_HP, this.onCreateMonsterHp, this);
        EventListener.off(GameEvent.SHOW_MONSTER_SHADOW, this.onCreateMonsterShadow, this);
    }

    /**
     * 伤害数字
     * @param pos 位置
     * @param attack 伤害值
     * @param type 伤害类型
     */
    onCreateDamageNum(pos: Vec3, attack: number, type: number, fontSize?: number) {
        let key = 'damageNum';
        let damageItem: Node = null;
        let damagePrefab: Prefab = null;
        if (this._battlerUIPrefabData.has(key)) {
            damagePrefab = this._battlerUIPrefabData.get(key);
            damageItem = PoolManager.instance.getNodeItem(damagePrefab);
            this.battleUIParent.addChild(damageItem);
            damageItem.setPosition(pos);
            damageItem.getComponent(DamageItem).init(attack, type);
        }
        else {
            //动态加载
            let path = Constants.battlePath + key;
            ResourcesUtil.getPrefab(path).then((damagePrefab: Prefab) => {
                this._battlerUIPrefabData.set(key, damagePrefab);
                damageItem = PoolManager.instance.getNodeItem(damagePrefab);
                this.battleUIParent.addChild(damageItem);
                damageItem.setPosition(pos);
                damageItem.getComponent(DamageItem).init(attack, type);
            })
        }
    }

    /**
     * 怪物死亡特效
     * @param pos 
     */
    onCreateDieEffect(pos: Vec3) {
        let key = 'blastItem';
        let blastItem: Node = null;
        let blastPrefab: Prefab = null;
        let parent = this.battleUIDownParent.getChildByName('Die');
        if (this._battlerUIPrefabData.has(key)) {
            blastPrefab = this._battlerUIPrefabData.get(key);
            blastItem = PoolManager.instance.getNodeItem(blastPrefab);
            parent.addChild(blastItem);
            blastItem.setPosition(pos);
            blastItem.getComponent(BlastItem).init();
        }
        else {
            //动态加载
            let path = Constants.battlePath + key;
            ResourcesUtil.getPrefab(path).then((damagePrefab: Prefab) => {
                this._battlerUIPrefabData.set(key, damagePrefab);
                blastItem = PoolManager.instance.getNodeItem(damagePrefab);
                parent.addChild(blastItem);
                blastItem.setPosition(pos);
                blastItem.getComponent(BlastItem).init();
            })
        }
    }

    /* 创建英雄血条 */
    onCreateHeroHp(pos: Vec3) {
        let key = 'heroHpItem';
        let heroHpItem: Node = null;
        let heroHpPrefab: Prefab = null;
        let parent = this.battleUIParent;
        let newPos = new Vec3(pos.x, pos.y - 30, 0);
        if (this._battlerUIPrefabData.has(key)) {
            heroHpPrefab = this._battlerUIPrefabData.get(key);
            heroHpItem = PoolManager.instance.getNodeItem(heroHpPrefab);
            parent.addChild(heroHpItem);
            heroHpItem.setPosition(newPos);
            heroHpItem.getComponent(HeroHpItem).init();
        }
        else {
            //动态加载
            let path = Constants.battlePath + key;
            ResourcesUtil.getPrefab(path).then((heroHpPrefab: Prefab) => {
                this._battlerUIPrefabData.set(key, heroHpPrefab);
                heroHpItem = PoolManager.instance.getNodeItem(heroHpPrefab);
                parent.addChild(heroHpItem);
                heroHpItem.setPosition(newPos);
                heroHpItem.getComponent(HeroHpItem).init();
            })
        }
    }

    /* 创建怪物血条 */
    onCreateMonsterHp(com: MonsterBase) {
        let key = 'monsterHpItem';
        let monsterHpItem: Node = null;
        let monsterHpPrefab: Prefab = null;
        let parent = this.battleUIParent;
        if (this._battlerUIPrefabData.has(key)) {
            monsterHpPrefab = this._battlerUIPrefabData.get(key);
            monsterHpItem = PoolManager.instance.getNodeItem(monsterHpPrefab);
            parent.addChild(monsterHpItem);
            monsterHpItem.getComponent(MonsterHpItem).init(com);
            com.monsterHpItem = monsterHpItem.getComponent(MonsterHpItem);
        }
        else {
            //动态加载
            let path = Constants.battlePath + key;
            ResourcesUtil.getPrefab(path).then((monsterHpPrefab: Prefab) => {
                this._battlerUIPrefabData.set(key, monsterHpPrefab);
                monsterHpItem = PoolManager.instance.getNodeItem(monsterHpPrefab);
                parent.addChild(monsterHpItem);
                monsterHpItem.getComponent(MonsterHpItem).init(com);
                com.monsterHpItem = monsterHpItem.getComponent(MonsterHpItem);
            })
        }
    }


    /* 创建怪物阴影 */
    onCreateMonsterShadow(com: MonsterBase) {
        let key = 'shadown';
        let monsterShadownItem: Node = null;
        let monsterShadownPrefab: Prefab = null;
        let parent = this.battleUIDownParent.getChildByName('Shadow');
        if (this._battlerUIPrefabData.has(key)) {
            monsterShadownPrefab = this._battlerUIPrefabData.get(key);
            monsterShadownItem = PoolManager.instance.getNodeItem(monsterShadownPrefab);
            parent.addChild(monsterShadownItem);
            monsterShadownItem.getComponent(Shadow).init(com);
            com.monsterShadow = monsterShadownItem.getComponent(Shadow);
        }
        else {
            //动态加载
            let path = Constants.battlePath + key;
            ResourcesUtil.getPrefab(path).then((monsterShadownPrefab: Prefab) => {
                this._battlerUIPrefabData.set(key, monsterShadownPrefab);
                monsterShadownItem = PoolManager.instance.getNodeItem(monsterShadownPrefab);
                parent.addChild(monsterShadownItem);
                monsterShadownItem.getComponent(Shadow).init(com);
                com.monsterShadow = monsterShadownItem.getComponent(Shadow);
            })
        }
    }

    clear() {
        this._battlerUIPrefabData.clear();
        this._battleUiNode.clear();
        this.battleUIParent.removeAllChildren();
        this.battleUIDownParent.getChildByName('Die').removeAllChildren();
        this.battleUIDownParent.getChildByName('Shadow').removeAllChildren();
    }
}



