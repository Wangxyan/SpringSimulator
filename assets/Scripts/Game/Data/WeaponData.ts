import { Vec3 } from "cc";
import { CfgMgr } from "../../Frame/CfgMgr";
import { Util } from "../../Frame/Util";
import { WeaponCfg } from "../../Model/WeaponModel";

export class WeaponData {
    private _isSelect: boolean = false;//是否选中武器
    private _weaponCfgMapData: Map<string, WeaponCfg> = new Map(); // key=> group + '|' + level 
    private _weaponGridData: Map<number, WeaponCfg> = new Map();//可用格子数据

    get isSelect() {
        return this._isSelect;
    }

    set isSelect(value: boolean) {
        this._isSelect = value;
    }

    init() {
        let weaponCfgArr = CfgMgr.getCfgDataArray<WeaponCfg>(new WeaponCfg())
        for (let index = 0; index < weaponCfgArr.length; index++) {
            const element = weaponCfgArr[index];
            if (element.itemType) {
                let key = element.weaponGroupNum + '|' + element.Level;
                this._weaponCfgMapData.set(key, element);
            }
            else {
                this._weaponGridData.set(element.Id, element);
            }
        }
    }

    getWeaponCfgByLevel(level: number, group: number) {
        let key = group + '|' + level;
        return this._weaponCfgMapData.get(key)
    }

    /* 通过level检测是否有该等级的装备 */
    checkWeaponByLevel(level: number, group: number) {
        let key = group + '|' + level;
        if (this._weaponCfgMapData.has(key)) {
            return true;
        }
        return false;
    }

    getWeaponCfgById(id: number) {
        return CfgMgr.getDataById<WeaponCfg>(new WeaponCfg(), id);
    }

    getWeaponCfgData() {
        let data = [];
        let arr = CfgMgr.getCfgDataArray<WeaponCfg>(new WeaponCfg());
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (element.itemType) {
                data.push(element);
            }
        }

        return data;
    }

    getWeaponPool() {
        let arr: Array<number> = [];
        let data: Array<WeaponCfg> = Util.rand(this.getWeaponCfgData());
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element.Level == 1 && element.itemType) {
                arr.push(element.Id);
                if (arr.length == 6) {
                    break;
                }
            }

        }
        return arr;
    }

    /**
 * 检测大数组数据中是否存在区域数据
 * @param matrix 大数组区域数据 (0:占有 1:未占有)
 * @param region  待检测的区域数据
 * @returns 
 */
    countRegionOccurrences(matrix: number[][], region: number[][]): number {
        let count = 0;
        const regionRows = region.length;
        const regionCols = region[0].length;
        for (let i = 0; i <= matrix.length - regionRows; i++) {
            for (let j = 0; j <= matrix[0].length - regionCols; j++) {
                let match = true;
                for (let r = 0; r < regionRows; r++) {
                    for (let c = 0; c < regionCols; c++) {
                        if (matrix[i + r][j + c] !== region[r][c]) {
                            match = false;
                            break;
                        }
                    }
                    if (!match) {
                        break;
                    }
                }
                if (match) {
                    count++;
                }
            }
        }
        return count;
    }


    /* 通过权重获取可以放置的id  */
    getPlaceGridIdByWeigh(matrix: number[][]) {
        let weaponData: Array<WeaponCfg> = [];
        //找出可以放置的格子
        if (this._weaponGridData.size) {
            this._weaponGridData.forEach((weaponCfg, key) => {
                let count = this.countRegionOccurrences(matrix, weaponCfg.Points);
                if (count) {
                    weaponData.push(weaponCfg);
                }
            })
        }
        let placeId = 0;
        if (weaponData.length) {
            let start = 0;
            let end = 0;
            let sum = 0;
            for (let i = 0; i < weaponData.length; i++) {
                const element = weaponData[i];
                sum += element.options_num;
            }
            let rand = Math.floor(Math.random() * sum);
            let index = 0;
            weaponData.some((item, idx) => {
                end = start + item.options_num;
                if (rand >= start && rand < end) {
                    index = idx;
                    return true;
                }
                start = end;
            })
            placeId = weaponData[index].Id;
        }
        return placeId;
    }

    clear() {
        this._isSelect = false;
    }

    private static _instance: WeaponData = null;
    public static get instance(): WeaponData {
        if (!this._instance) {
            this._instance = new WeaponData();
        }
        return this._instance;
    }

}

export class CoinObj {
    wpos: Vec3;//金币坐标
    num: number;//金币数量
}


