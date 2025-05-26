import { CfgMgr } from "../../../Frame/CfgMgr";
import { ChapterCfg } from "../../../Model/ChapterModel";

export class ChapterData {


    /* 获取章节数据 */
    getChapterData() {
        return CfgMgr.getCfgDataArray<ChapterCfg>(new ChapterCfg());
    }

    getChapterCfgById(chapterId: number) {
        return CfgMgr.getDataById<ChapterCfg>(new ChapterCfg(), chapterId);
    }

    private static _instance: ChapterData = null;
    public static get instance(): ChapterData {
        if (!this._instance) {
            this._instance = new ChapterData();
        }
        return this._instance;
    }
}


