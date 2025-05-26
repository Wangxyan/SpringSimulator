import { Constants } from "../../Constants";
import { CfgMgr } from "../../Frame/CfgMgr";
import { Debug } from "../../Frame/Debug";
import { ChapterCfg } from "../../Model/ChapterModel";
import { PlayerData } from "./PlayerData";

export class ChapterMapData {
    private _chapterMapData: ChapterCfg = null; //章节地图数据
    private _ChapterDropRewardData: Map<number, ChapterDropRewardObj> = new Map();//掉落奖励数据

    public get chapterMapData() {
        return this._chapterMapData;
    }

    init() {
        this.setChapterMapData();
    }

    /* 设置章节数据 */
    setChapterMapData() {
        let chapterId = PlayerData.instance.playerInfo.curChapter;
        this._chapterMapData = CfgMgr.getDataById<ChapterCfg>(new ChapterCfg(), chapterId);
        //加载配置
        Constants.selectLoadConfig = [this._chapterMapData.cMonsterId];
        Debug.log('游戏章节数据', this._chapterMapData);
    }

    /* 设置奖励数据 */
    setChapterRewardData(chapterMapRewardData: Map<number, ChapterDropRewardObj>, rewardStr: string) {
        let rewardArr = rewardStr.split('|');
        let chapterDropRewardObj: ChapterDropRewardObj = null;
        let itemId = Number(rewardArr[0]);
        let num = Number(rewardArr[1]);
        if (chapterMapRewardData.has(itemId)) {
            chapterDropRewardObj.Num += num;
        }
        else {
            chapterDropRewardObj = new ChapterDropRewardObj();
            chapterDropRewardObj.ItemId = itemId;
            chapterDropRewardObj.Num = num;
            chapterMapRewardData.set(itemId, chapterDropRewardObj);
        }
    }

    /**
     * 是否胜利
     * @param isWin 
     */
    getChapterRewardData(isWin: boolean) {
        //TODO 掉落奖励
        let chapterMapRewardData: Map<number, ChapterDropRewardObj> = new Map();
        if (this._chapterMapData.StarReward) {
            //开始奖励
            let StarRewardArr = this._chapterMapData.StarReward.split(',');
            for (let i = 0; i < StarRewardArr.length; i++) {
                const rewardStr = StarRewardArr[i];
                this.setChapterRewardData(chapterMapRewardData, rewardStr);
            }
        }
        if (isWin) {
            //胜利奖励
            if (this._chapterMapData.WinReward) {
                let WinRewardArr = this._chapterMapData.WinReward.split(',');
                for (let i = 0; i < WinRewardArr.length; i++) {
                    const rewardStr = WinRewardArr[i];
                    this.setChapterRewardData(chapterMapRewardData, rewardStr);
                }
            }
            //首次通关奖励
            // let chapterLeveId = ChapterData.instance.getChapterLeveIdByChapterId(this._chapterMapData.Id);
            // if (this._chapterMapData.FirstPass && chapterLeveId == PlayerData.instance.playerInfo.UnlockChapter) {
            //     let FirstPassArr = this._chapterMapData.FirstPass.split(',');
            //     for (let i = 0; i < FirstPassArr.length; i++) {
            //         const rewardStr = FirstPassArr[i];
            //         this.setChapterRewardData(chapterMapRewardData, rewardStr);
            //     }
            // }
        }
        return Array.from(chapterMapRewardData.values());
    }


    clear() {
        this._chapterMapData = null;
        this._ChapterDropRewardData.clear();
    }

    private static _instance: ChapterMapData = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new ChapterMapData();
        }
        return this._instance;
    }
}

export class ChapterDropRewardObj {
    ItemId: number;//物品id
    Num: number;//物品数量
}


