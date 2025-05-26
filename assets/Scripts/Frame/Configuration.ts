import { sys } from "cc";
import { Constants } from "../Constants";
import { Util } from "./Util";

export class Configuration {
    private _jsonData = {};
    private _markSave = false;

    static _instance: Configuration = null!;

    public static get instance() {
        if (!this._instance) {
            this._instance = new Configuration();
        }

        return this._instance
    }

    /* 初始化 */
    public init() {
        let localdata = sys.localStorage.getItem(Constants.gameConfigId);
        if (localdata && localdata.startsWith('@')) {
            localdata = localdata.substring(1);
            localdata = Util.decrypt(localdata);
            this._jsonData = JSON.parse(localdata);
        }
        setInterval(this.scheduleData.bind(this), 500);
    }

    /* 根据版本号清除本地数据 */
    public clearConfigDataToVersion() {
        let loacalCacheVersionConfig = this.getConfigData(Constants.cacheVersion);
        if (loacalCacheVersionConfig) {
            let loacalCacheVersionConfigArr = JSON.parse(loacalCacheVersionConfig);
            //比较本地版本号
            let copyVerson = Util.clone(Constants.cacheVersionConfig);
            Constants.cacheVersionConfig.forEach((item: any, index: number) => {
                loacalCacheVersionConfigArr.forEach((ele: any, ind: number) => {
                    if (item.versionName == ele.versionName && item.version > ele.version && ele.versionName == 'gameData') {
                        //清除游戏数据
                        this.clearConfigData();
                        this._jsonData = {};
                    }
                    else {
                        if (item.versionName == ele.versionName && item.version > ele.version) {
                            if (this._jsonData.hasOwnProperty(item.versionName)) {
                                delete this._jsonData[item.versionName];
                            }
                        }

                        copyVerson.some((el, index) => {
                            if (el.versionName == ele.versionName) {
                                copyVerson.splice(index, 1);
                                return true;
                            }
                        });
                    }
                });
            });

            //获取新增记录
            copyVerson.forEach((item: any) => {
                if (this._jsonData.hasOwnProperty(item.versionName)) {
                    delete this._jsonData[item.versionName];
                }
            });

        }
        else {
            //根据版本号清除数据
            Constants.cacheVersionConfig.forEach((item: any) => {
                if (this._jsonData.hasOwnProperty(item.versionName)) {
                    delete this._jsonData[item.versionName];
                }
            })
        }
        //更新本地版本数据
        this.setConfigData(Constants.cacheVersion, JSON.stringify(Constants.cacheVersionConfig));

    }

    /* 清除指定数据 */
    public clearByKey(key: string) {
        if (this._jsonData.hasOwnProperty(key)) {
            delete this._jsonData[key];
            this._markSave = true;
        }
    }

    /* 清除存储数据 */
    public clearConfigData() {
        sys.localStorage.clear();
    }

    /* 获取存储数据 */
    public getConfigData(key: string) {
        const data: string = this._jsonData[key];
        return data || null;
    }

    /* 设置存储数据 */
    public setConfigData(key: string, value: string) {
        this._jsonData[key] = value;
        this._markSave = true;
    }

    /* 数据存储 */
    public scheduleData() {
        if (!this._markSave) {
            return;
        }
        const data = JSON.stringify(this._jsonData);
        sys.localStorage.setItem(Constants.gameConfigId, '@' + Util.encrypt(data));
        this._markSave = false;
    }

}

