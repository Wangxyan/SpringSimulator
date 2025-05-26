import { _decorator, AnimationClip, AnimationComponent, Asset, Component, director, instantiate, log, Node, Prefab, Skeleton, sp, v3, Vec2, Vec3, SpriteFrame, Sprite } from 'cc';
import { PoolManager } from '../../Frame/PoolManager';
import { MonsterItem } from '../Monster/MonsterItem';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { EventListener } from '../../Frame/EventListener';
import { MonsterEvent } from '../Monster/Event/MonsterEvent';
import BaseComponent from '../../Frame/BaseComponent';
import { GameEvent } from '../Event/GameEvent';
import { BrushMonsterType, ChapterEventCfg, MonsterType } from '../../Model/ChapterEventModel';
import { MonsterAmin, MonsterCfg } from '../../Model/MonsterModel';
import { Debug } from '../../Frame/Debug';
import { MonsterData, MonsterEventObj, MonsterObj } from '../Data/MonsterData';
import { Constants } from '../../Constants';
import { GameDefine } from '../../GameDefine';
import { OpenPopupManager } from '../../Frame/OpenPopupManager';
const { ccclass, property } = _decorator;

@ccclass('MonsterManager')
export class MonsterManager extends BaseComponent {
    @property(Node)
    monsterParent: Node = null;
    private _monsterPrefabMap: Map<number, Node> = new Map(); //怪物
    private _gameTime: number = 0;//游戏时间
    private _brushMonsterEventArr: Array<MonsterEventObj> = [];//当前刷怪事件数据
    private _queeuMonsterArr: Array<MonsterObj> = []; //队列怪物
    private _curChapterEvent: ChapterEventCfg = null;//当前刷怪事件
    private _curTotalNum: number = 0; //当前事件总刷怪数量
    private _curKillNum: number = 0;//当前击杀怪物数量

    private _screenMonsterCount: number = 0;//屏幕上存在的怪物
    private _schduleTime: number = 1;

    init() {
        this._schduleTime = 1;
        MonsterData.instance.init();
    }

    /* 设置当前刷怪事件 */
    setCurChapterEvent() {
        if (MonsterData.instance.brushMonsterEventData.length) {
            this._curChapterEvent = MonsterData.instance.brushMonsterEventData.shift();
            MonsterData.instance.wave = this._curChapterEvent.Wave;
            // Debug.log('当前刷怪事件', this._curChapterEvent);
            this.setBrushMonsterEvent();
        }
    }

    /**
     * 设置刷怪事件组
     */
    setBrushMonsterEvent() {
        this._curTotalNum = 0;
        this._curKillNum = 0;
        let eType = this._curChapterEvent.eType
        let eventArr = this._curChapterEvent.Event.split(',');
        // if (eType == BrushMonsterType.BOSS) {
        //     //boss事件(随机boss事件)
        //     eventArr = [this.getBossEventByWeight(eventArr)];
        // }
        //刷怪事件
        for (let i = 0; i < eventArr.length; i++) {
            const eventStrArr = eventArr[i].split('|');
            let monsterId = Number(eventStrArr[0]);
            let totalNum = Number(eventStrArr[1]);
            let startTime = Number(eventStrArr[2]);
            let endTime = Number(eventStrArr[3]);
            let diffTime = (endTime - startTime);
            let secNum = Math.floor(totalNum / diffTime);
            let diffNum = totalNum - diffTime * secNum;
            let monsterEventObj = new MonsterEventObj();
            monsterEventObj.HpUp = this._curChapterEvent.HpUp;
            monsterEventObj.monsterId = monsterId;
            monsterEventObj.startTime = startTime;
            monsterEventObj.secNum = secNum;
            monsterEventObj.diffNum = diffNum;
            monsterEventObj.curNum = 0;
            monsterEventObj.totalNum = totalNum;
            this._brushMonsterEventArr.push(monsterEventObj);
            this._curTotalNum += totalNum;
        }
    }

    /* 通过权重获取boss事件 */
    getBossEventByWeight(eventArr: Array<string>) {
        let start = 0;
        let end = 0;
        let sum = 0;
        let weightArr = [];
        for (let i = 0; i < eventArr.length; i++) {
            const element = eventArr[i];
            let eventStrArr = element.split('|');
            let weight = Number(eventStrArr[4]);
            weightArr.push(weight);
            sum += weight;
        }
        let random = Math.floor(Math.random() * sum);
        let index = 0;
        weightArr.some((item, idx) => {
            end = start + item;
            if (random >= start && random < end) {
                index = idx;
                return true;
            }
            start = end;
        })
        return eventArr[index];
    }

    /**
     * 创建怪物
     */
    onCreateMonster(createrNum: number) {
        for (let i = 0; i < createrNum; i++) {
            if (this._queeuMonsterArr.length) {
                let monsterObj = this._queeuMonsterArr.shift();
                let monsterId = monsterObj.id;
                let monsterItem: Node = null;
                let pos = new Vec3();
                let monsterCfg = MonsterData.instance.getMonsterCfgById(monsterId);
                if (this._monsterPrefabMap.has(monsterId)) {
                    pos = monsterCfg.mType != MonsterType.BOSS ? MonsterData.instance.getScreenUpRandPos() : MonsterData.instance.getBossBrushPoint();
                    monsterItem = PoolManager.instance.getNodeItemById(this._monsterPrefabMap.get(monsterId), monsterId.toString());
                    this.monsterParent.addChild(monsterItem);
                    monsterItem.setPosition(pos);
                    monsterItem.getComponent(MonsterItem).init(monsterCfg, monsterObj);
                }
                else {
                    //动态加载
                    let path = Constants.monsterPath;
                    ResourcesUtil.getPrefab(path).then((monsterPrefab: Prefab) => {
                        //加载资源
                        this.loadMonsterRes(monsterObj, monsterCfg, monsterPrefab);
                    })
                }
            }
        }
        // Debug.log('地图上怪物数量', this.monsterParent.children.length);
    }

    /**
     * 加载怪物资源 动画资源
     * @param monsterObj 
     * @param monsterCfg 
     * @param monsterPrefab 
     */
    loadMonsterRes(monsterObj: MonsterObj, monsterCfg: MonsterCfg, monsterPrefab: Prefab) {
        //加载骨骼资源
        // let spinePath = Constants.monsterSpinePath + monsterCfg.Icon;
        // ResourcesUtil.getSkeletonData(spinePath).then((data: sp.SkeletonData) => {
        //     let pos = MonsterData.instance.getBossBrushPoint();
        //     let monsterItem = instantiate(monsterPrefab);
        //     let spine = monsterItem.getChildByName('spine').getComponent(sp.Skeleton);
        //     this.monsterParent.addChild(monsterItem);
        //     monsterItem.setPosition(pos);
        //     spine.skeletonData = data;
        //     monsterItem.getComponent(MonsterItem).init(monsterCfg, monsterObj);
        //     this._monsterPrefabMap.set(monsterCfg.Id, monsterItem);
        // })
        //加载图片资源
        let monsterItem = instantiate(monsterPrefab);
        let iconPath = Constants.monsterIconPath + monsterCfg.Icon + '/spriteFrame';
        ResourcesUtil.geSpriteFrame(iconPath).then((data: SpriteFrame) => {
            let iconSprite = monsterItem.getChildByName('icon').getComponent(Sprite);
            iconSprite.spriteFrame = data;
        })
        //加载动画资源
        let animPath = Constants.monsterAnimPath;
        ResourcesUtil.loadDir(animPath).then((asert: Array<AnimationClip>) => {
            if (asert.length) {
                let pos = monsterCfg.mType != MonsterType.BOSS ? MonsterData.instance.getScreenUpRandPos() : MonsterData.instance.getBossBrushPoint();
                let animationCom = monsterItem.getChildByName('icon').getComponent(AnimationComponent);
                this.monsterParent.addChild(monsterItem);
                monsterItem.setPosition(pos);
                for (let i = 0; i < asert.length; i++) {
                    let clip = asert[i];
                    animationCom.addClip(asert[i]);
                    if (clip.name == MonsterAmin.Move) {
                        animationCom.defaultClip = clip;
                    }
                }
                monsterItem.getComponent(MonsterItem).init(monsterCfg, monsterObj);
                this._monsterPrefabMap.set(monsterCfg.Id, monsterItem);
            }
        })
    }

    /**
     * 怪物死亡
     * @param pos 
     */
    onMonsterDie(pos: Vec3) {
        this._curKillNum++;
        //更新进度
        EventListener.emit(GameEvent.UPDATE_MONSTER_PROGRESS, MonsterData.instance.killNum, 10);
        //检测当前怪物是否已经清除
        if (!this.monsterParent.children.length) {
            MonsterData.instance.clearNearMonster();
            //TODO检测是否战斗结束
            if (this._curChapterEvent.Wave >= MonsterData.instance.MaxWave) {
                //无刷怪事件 游戏胜利
                GameDefine.gameOver = true;
                GameDefine.gameStart = false;
                OpenPopupManager.instance.showGameOverPopup(1);
            }
            else {

                let wave = this._curChapterEvent.Wave + 1;
                //检测是否有宝箱
                if (this._curChapterEvent.Box) {
                    //有宝箱
                    this.scheduleOnce(() => {
                        EventListener.emit(GameEvent.GAME_BATTLE, wave);
                        EventListener.emit(GameEvent.CREATE_DROP_BOX, pos);

                    }, 1)
                }
                else {
                    //进入下一时间轴
                    this.setCurChapterEvent();
                    EventListener.emit(GameEvent.GAME_BATTLE, this._curChapterEvent.Wave);
                }
            }
        }
    }


    /* 触发刷怪事件 */
    triggleBrushMonsterEvent(dt: number) {
        this._gameTime += dt;
        this._schduleTime -= dt;
        if (this._schduleTime <= 0) {
            for (let i = 0, len = this._brushMonsterEventArr.length; i < len; i++) {
                const event = this._brushMonsterEventArr[i];
                if (event.curNum < event.totalNum) {
                    if (this._gameTime >= event.startTime) {
                        this._schduleTime = 1;
                        //加入队列怪物
                        let num = event.secNum;
                        if (event.diffNum) {
                            event.diffNum--;
                            num += 1;
                        }
                        for (let n = 0; n < num; n++) {
                            let monsterObj = new MonsterObj();
                            monsterObj.id = event.monsterId;
                            monsterObj.HpUp = event.HpUp;
                            this._queeuMonsterArr.push(monsterObj);
                        }
                        event.curNum += num;
                    }
                }
                else {
                    //清除刷怪事件
                    this._brushMonsterEventArr.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
    }


    /* 添加技能最近怪物 */
    onAddNearMonster(skillKey: string, range: number) {

    }

    protected onEnable(): void {
        EventListener.on(MonsterEvent.CREATE_MONSTER, this.onCreateMonster, this);
        EventListener.on(MonsterEvent.MONSTER_DIE, this.onMonsterDie, this);
        EventListener.on(MonsterEvent.ADD_NEAR_MONSTER, this.onAddNearMonster, this);
    }

    protected onDisable(): void {
        EventListener.off(MonsterEvent.CREATE_MONSTER, this.onCreateMonster, this);
        EventListener.off(MonsterEvent.MONSTER_DIE, this.onMonsterDie, this);
        EventListener.off(MonsterEvent.ADD_NEAR_MONSTER, this.onAddNearMonster, this);
    }

    setMonsterSort() {
        let monsterItems = this.monsterParent.children;
        monsterItems.sort((x, y) => {
            return Math.round(y.position.y) - Math.round(x.position.y);
        })
        for (let i = 0; i < monsterItems.length; i++) {
            monsterItems[i].setSiblingIndex(i);
        }
    }

    clear() {
        this._monsterPrefabMap.clear();
        MonsterData.instance.clear();
        this._gameTime = 0;
        this._schduleTime = 1
        this._brushMonsterEventArr = [];
        this._queeuMonsterArr = [];
        this._curChapterEvent = null;
        this.monsterParent.destroyAllChildren();
    }

    childUpdate(dt: number) {
        if (GameDefine.gameStart) {
            this.triggleBrushMonsterEvent(dt);
            this.setMonsterSort();
            if (this._queeuMonsterArr.length) {
                let createNum = this._queeuMonsterArr.length > 60 ? Math.ceil(this._queeuMonsterArr.length / 60) : 1;
                this.onCreateMonster(createNum);
            }
        }
    }
}


