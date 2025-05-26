import { Constants } from "../../Constants";
import { Configuration } from "../../Frame/Configuration";




export class GameData {
    private _gameTime: number = 0;//游戏时间
    private _eventTime: number = 0;//时间时间轴
    private _dataInited: boolean = false;//数据初始化完成

    public set eventTime(value: number) {
        this._eventTime = value;
    }

    public set gameTime(value: number) {
        this._gameTime = value;
    }

    public get gameTime() {
        return this._gameTime;
    }


    init() {
        //读取本地数据
        this.loadFromCache();
    }

    /* 检测游戏事件是否结束 */
    checkGameEventOver() {
        // let bossTimeArr = MonsterData.instance.bossTimePoint;
        // let maxTime = bossTimeArr[bossTimeArr.length - 1];
        // if (this._eventTime >= maxTime) {
        //     return true;
        // }
        return false;
    }


    /**
    * 按权重获取随机装备材料
    * @param idsStr 
    * @returns 
    */
    getRandEquipMaterialByWeight(idsStr: string) {
        let idsArr = idsStr.split(',');
        let start = 0;
        let end = 0;
        let sum = 0;
        let ids = [];
        let weights = [];
        idsArr.forEach((itemStr: string) => {
            let itemArr = itemStr.split('|');
            ids.push(Number(itemArr[0]));
            weights.push(Number(itemArr[1]));
            sum += Number(itemArr[1]);
        })
        let randWeight = Math.floor(Math.random() * sum);
        let index = 0;
        weights.some((weight, idx) => {
            end = start + weight;
            if (randWeight >= start && randWeight < end) {
                index = idx;
                return true;
            }
            start = end;
        })
        return ids[index];
    }

    clear() {
        this._gameTime = 0;
        this._eventTime = 0;
    }

    /* 读取本地数据 */
    public loadFromCache() {
        if (this._dataInited) {
            return;
        }
        // Configuration.instance().clearConfigData();
        Configuration.instance.init();
        Configuration.instance.clearConfigDataToVersion();//版本号清除数据
        const playerInfo = Configuration.instance.getConfigData(Constants.playerConfigId);
        this._dataInited = true;
    }

    /* 清除本地数据 */
    public clearCacheData() {
        Configuration.instance.clearConfigData();
    }

    private static _instance: GameData = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new GameData();
        }
        return this._instance;
    }
}


