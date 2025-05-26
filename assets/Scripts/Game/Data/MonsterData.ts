import { Intersection2D, Rect, Vec2, Vec3, isValid, log, v2, v3, view } from "cc";
import { MonsterBase } from "../Monster/MonsterBase";
import { ChapterEventCfg } from "../../Model/ChapterEventModel";
import { CfgMgr } from "../../Frame/CfgMgr";
import { Util } from "../../Frame/Util";
import { MonsterCfg } from "../../Model/MonsterModel";
import { GameDefine } from "../../GameDefine";

export class MonsterData {
    private _nearMonsterData: Map<string, Map<string, MonsterBase>> = new Map(); //多技能对应最近怪物  key=>角色id + | + pid  value=>怪物脚本
    private _monsterNodeMap: Map<string, MonsterBase> = new Map();//怪物节点
    private _maxCheckCont: number = 3;//最大检测数量
    private _brushMonsterPoint: Map<number, Rect> = new Map();//刷怪点数据
    private _killNum: number = 0;//杀死怪物数量
    private _killBossNum: number = 0;//杀死boss的数量
    private _brushMonsterEventData: Array<ChapterEventCfg> = [];//刷怪事件数据
    private _wave: number = 0;//刷怪波次
    private _MaxWave: number = 10;//最大波次

    public set wave(value: number) {
        this._wave = value;
    }

    public get wave() {
        return this._wave;
    }

    public set MaxWave(value: number) {
        this._MaxWave = value;
    }

    public get MaxWave() {
        return this._MaxWave;
    }

    public get killBossNum() {
        return this._killBossNum;
    }

    public set killBossNum(value: number) {
        this._killBossNum += value;
    }

    public get killNum() {
        return this._killNum;
    }

    public set killNum(value: number) {
        this._killNum += value;
    }

    public get brushMonsterEventData() {
        return this._brushMonsterEventData;
    }

    init() {
        this._brushMonsterEventData = Util.clone(CfgMgr.getCfgDataArray<ChapterEventCfg>(new ChapterEventCfg()));
        this.MaxWave = this._brushMonsterEventData[this._brushMonsterEventData.length - 1].Wave;
    }

    /**
     * 设置最近的怪物
     */
    setNearMonster(skillKey: string, skillPos: Vec3, range: number) {
        let monsterComMap = new Map();
        if (this._nearMonsterData.has(skillKey)) {
            monsterComMap = this._nearMonsterData.get(skillKey);
            if (monsterComMap.size < this._maxCheckCont) {
                //添加范围怪物
                this.addSkillRangeMonster(skillPos, range, monsterComMap);
            }
        }
        else {
            //添加范围怪物
            this._nearMonsterData.set(skillKey, monsterComMap);
            this.addSkillRangeMonster(skillPos, range, monsterComMap);

        }
    }

    /* 添加范围怪物 */
    addSkillRangeMonster(skillPos: Vec3, range: number, monsterComMap) {
        let monsterBaseArr = Array.from(this._monsterNodeMap.values());
        for (let i = 0; i < monsterBaseArr.length; i++) {
            const element = monsterBaseArr[i];
            let monsterPos = element.curPos;
            let monsteKey = element.monsterKey;
            let len = Vec3.distance(skillPos, monsterPos);
            if (len <= range && monsterComMap.size < this._maxCheckCont) {
                monsterComMap.set(monsteKey, element);
            }

        }
    }

    /* 获取技能最近的怪物 */
    getNearMonster(skillKey: string) {
        let targetArr = [];
        if (this._nearMonsterData.has(skillKey)) {
            let monsterBaseArr = Array.from(this._nearMonsterData.get(skillKey).values());
            for (let i = 0; i < monsterBaseArr.length; i++) {
                const element = monsterBaseArr[i];
                if (element) {
                    targetArr.push(element.curPos);
                }

            }
        }
        return targetArr;
    }

    /**
     * 删除最近怪物
     * @param roleId 
     */
    deleteNearMonster(monsterKey: string) {
        this._nearMonsterData.forEach((item, key) => {
            if (item.has(monsterKey)) {
                item.delete(monsterKey);
            }
        })
    }

    /* 清楚最近的怪物 */
    clearNearMonster() {
        this._nearMonsterData.clear();
    }

    /**
     * 获得最近怪物
     * @param skillKey 
     */
    getNearMonsterTarget(skillKey: string) {
        let monsterCom = new Map();
        if (this._nearMonsterData.has(skillKey)) {
            monsterCom = this._nearMonsterData.get(skillKey);
        }
        return monsterCom
    }

    /**
     * 检测是否有最近怪物
     * @param skillKey 
     */
    checkNearMonster(skillKey: string) {
        if (this._nearMonsterData.has(skillKey)) {
            let monsterComMap = this._nearMonsterData.get(skillKey);
            return monsterComMap.size ? true : false;
        }
        return false;
    }

    /**
      * 添加怪物节点
      */
    addMonsterNodeByKey(monsterCom: MonsterBase) {
        if (monsterCom) {
            this._monsterNodeMap.set(monsterCom.monsterKey, monsterCom);
        }
    }

    /**
     * 移除怪物节点
     */
    deleteMonsterNodeByKey(monsterKey: string) {
        this._monsterNodeMap.delete(monsterKey);
    }



    /**
     * 检测技能范围内是否有怪物
     * @param skillPos 
     * @param range 
     */
    checkSkillNearMonster(skillPos: Vec3, range: number) {
        let check = false;
        if (this._monsterNodeMap.size) {
            let monsterBaseArr = Array.from(this._monsterNodeMap.values());
            for (let i = 0; i < monsterBaseArr.length; i++) {
                const element = monsterBaseArr[i];
                if (element && element.initStatus) {
                    let monsterPos = element.curPos;
                    let len = Vec3.distance(skillPos, monsterPos);
                    if (len <= range) {
                        check = true;
                        break;
                    }
                }

            }
        }
        return check;
    }


    /**
     * 设置刷怪点数据
     * @param pid 
     * @param pos 
     */
    setBrushMonsterPoint(pid: number, rect: Rect) {
        this._brushMonsterPoint.set(pid, rect);
    }

    /**
     * 设置boss刷怪点数据
     * @param pid 
     * @param pos 
     */
    setBossBrushPoint(pid: number, pos: Vec3) {

    }

    /**
     * 获取指定刷怪随机点
     * @param Offset 
     */
    getAppointMonsterPoint(Offset: Vec2 = new Vec2(0, 100)) {
        let len = this._brushMonsterPoint.size;
        let pid = Math.floor(Math.random() * len);
        let rect = this._brushMonsterPoint.get(pid);
        //获取区域内随机坐标点
        let pos = Util.getRectRandPos(rect);
        pos.x += Offset.x;
        pos.y += Offset.y;
        return pos;
    }

    /**
     * 获取boss刷怪点数据
     * @param pid 
     */
    getBossBrushPoint(Offset: Vec2 = new Vec2(100, 100)) {
        let x = 0;
        let y = GameDefine.viewHeight / 2 + Math.random() * Offset.x;
        return v3(x, y, 0);
    }

    /**
     * 获取屏幕上方怪物随机位置
     * @param Offset  偏移位置 
     */
    getScreenUpRandPos(Offset: Vec2 = new Vec2(60, 50)) {
        let visibleSize = view.getVisibleSize();
        let width = visibleSize.width - Offset.x;
        let pos = new Vec3();
        pos.x = (Math.random() - 0.5) * width;
        pos.y = visibleSize.height / 2 + Math.random() * Offset.y - 200;
        return pos;
    }

    /**
     * 通过怪物id 获取怪物配置
     * @param monsterId 
     */
    getMonsterCfgById(monsterId: number) {
        return CfgMgr.getDataById<MonsterCfg>(new MonsterCfg(), monsterId);
    }

    /**
     * 获取怪物攻击
     * @param mType 怪物 类型
     */
    getMonsterAtk(mType: number) {
        // switch (mType) {
        //     case MonsterType.LITTLE:
        //         break;
        //     case MonsterType.ELITE:
        //         atk = atk * Number(Constants.SysConstant.EliteAtt.ConstantValue);
        //         break;
        //     case MonsterType.BOSS:
        //         atk = atk * Number(Constants.SysConstant.BossAtt.ConstantValue);
        //         break;
        // }
        return 10;
    }

    /**
     * 获取怪物血量
     */
    getMonsterHp(hp: number) {
        return hp;
    }

    /**
     * 获取怪物移动速度
     */
    getMonsterSpeed(speed: number) {
        return speed;
    }

    clear() {
        this._nearMonsterData.clear();
        this._monsterNodeMap.clear();
        this._brushMonsterPoint.clear();
        this._killNum = 0;
        this._killBossNum = 0;
        this._wave = 0;
        this._MaxWave = 15;
        this._brushMonsterEventData = [];
    }

    private static _instance: MonsterData = null;
    public static get instance(): MonsterData {
        if (!this._instance) {
            this._instance = new MonsterData();
        }
        return this._instance;
    }
}

export class MonsterObj {
    id: number; //怪物id
    HpUp: number = 1;//血量系数
}

export class MonsterEventObj {
    //刷怪数量到结束事件
    monsterId: number;//怪物数据
    HpUp: number;//怪物血量系数
    startTime: number;//刷怪开始时间
    secNum: number;//每秒刷怪数量
    diffNum: number;//每秒刷怪向下取整  相差数量分配
    curNum: number = 0;//当前刷怪数量
    totalNum: number = 1;//总的的刷怪数量
}


