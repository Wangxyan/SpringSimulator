import { Rect, Size, Vec2, Vec3 } from "cc";
import { Util } from "../../Frame/Util";
import { WeaponData } from "./WeaponData";
import { CfgMgr } from "../../Frame/CfgMgr";
import { BagCfg } from "../../Model/BagModel";

export class GridData {
    private _curGrid = 109;//当前位置表id
    private _gridMapData: Array<Array<string>> = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '']];  //格子地图数据  0:有格子 '':没有格子   value=>武器唯一id
    private _bagCfg: BagCfg = null;//背包配置数据
    private _gridRowLen = 3; //格子行长度(每行多少个)
    private _gridColLen = 3; //格子列长度(每列多少个)
    private _gridWidth = 94;//格子宽度
    private _gredHeight = 94;//格子高度
    private _space = 10;//格子间隔
    private _gridItemData: Map<string, WeaponObj> = new Map();//携带的武器数据  key=>武器唯一id
    private _curWeaponTildeIndex: Array<number> = [];//当前武器位置索引
    // 添加位置相关属性  
    // private _mapPosition: Vec3 = new Vec3(0, 0, 0);

    private _gridEditMode: boolean = false;//是否为格子编辑模式

    get gridEditMode() {
        return this._gridEditMode;
    }

    set gridEditMode(value: boolean) {
        this._gridEditMode = value;
    }

    get iconScale() {
        return this._bagCfg.picture;
    }
    get space() {
        return this._space;
    }

    get bagCfg() {
        return this._bagCfg;
    }

    get curWeaponTildeIndex() {
        return this._curWeaponTildeIndex;
    }

    set curWeaponTildeIndex(value: Array<number>) {
        this._curWeaponTildeIndex = value;
    }

    get gridWidth() {
        return this._gridWidth;
    }

    get gridHeight() {
        return this._gredHeight;
    }

    init() {
        this.initGridMapData();
        this.initGridItemData();
    }

    //get mapPosition() {
    //    return this._mapPosition;
    //}

    //set mapPosition(value: Vec3) {
    //    this._mapPosition = value;
    //}  

    /* 初始化格子数据 */
    initGridMapData() {

        this._bagCfg = CfgMgr.getDataById<BagCfg>(new BagCfg(), this._curGrid);
        let row_col = this._bagCfg.private_gridLen.split('_');
        this._gridMapData = this._bagCfg.private_grid;
        this._gridWidth = this._bagCfg.private_gridWidth;
        this._gredHeight = this._bagCfg.private_gredHeight;
        this._space = this._bagCfg.private_space;
        this._gridColLen = Number(row_col[0]);
        this._gridRowLen = Number(row_col[1]);

        // 从配置中读取位置信息（如果有的话）  
        //if (this._bagCfg.mapPosition) {
        //    this._mapPosition = new Vec3(this._bagCfg.mapPosition.x, this._bagCfg.mapPosition.y, 0);  
    }

    /* 初始携带的武器数据 */
    initGridItemData() {
        //调试 初始携带武器数据
        this.addWeaponItem(1001);

        //初始化地图格子数据
        this._gridItemData.forEach((weaponObj, key) => {
            let data = weaponObj.data;
            for (let i = 0; i < data.length; i++) {
                const gridObj = data[i];
                this._gridMapData[gridObj.row][gridObj.col] = key;
            }
        })
        // console.log('携带武器数据', this._gridItemData);
        // console.log('初始格子数据', this._gridMapData);
    }

    /**
     * 添加携带的武器id
     * @param wid 
     */
    addWeaponItem(wid: number) {
        let weaponCfg = WeaponData.instance.getWeaponCfgById(wid);
        let weaponObj = new WeaponObj();
        weaponObj.id = Util.getUuid(10);
        weaponObj.gid = this._curGrid;
        weaponObj.wid = wid;
        let points = weaponCfg.Points;
        let data: Array<GridObj> = [];
        for (let i = 0; i < points.length; i++) {
            const element = points[i];
            for (let j = 0; j < element.length; j++) {
                let gridObj = new GridObj();
                gridObj.row = i;
                gridObj.col = j;
                data.push(gridObj);
            }

        }
        weaponObj.data = data;
        this._gridItemData.set(weaponObj.id, weaponObj);
    }

    /* 设置重组格子数据 */
    setRebuildGridMapData(value: Array<Array<string>>) {
        let row = value.length;
        let col = value[0].length;
        this._gridMapData = value;
        this._bagCfg.private_gridLen = row + '_' + col;
        this._gridColLen = row;
        this._gridRowLen = col;
        //设置武器位置数据
        this._gridItemData.forEach((weaponObj, key) => {
            let data: Array<GridObj> = [];
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                for (let j = 0; j < element.length; j++) {
                    const weaponKey = element[j];
                    if (weaponKey == key) {
                        let gridObj = new GridObj();
                        gridObj.row = i;
                        gridObj.col = j;
                        data.push(gridObj);
                    }
                }

            }
            weaponObj.data = data;
        })
    }

    /* 获取最大背包尺寸 */
    getMaxGridMapSize() {
        let size = new Size();
        let bagCfg = this.bagCfg;
        let width = bagCfg.private_gridWidth;
        let height = bagCfg.private_gredHeight;
        let space = bagCfg.private_space;
        let row_col = bagCfg.max_gridLen.split('_');
        let rowLen = Number(row_col[0]);
        let colLen = Number(row_col[1]);
        let w = colLen * width + (colLen - 1) * space;
        let h = rowLen * height + (rowLen - 1) * space;
        size.width = w;
        size.height = h;
        return size;
    }

    /* 获取背包尺寸 */
    getGridMapSize() {
        let size = new Size();
        let bagCfg = this.bagCfg;
        let width = bagCfg.private_gridWidth;
        let height = bagCfg.private_gredHeight;
        let space = bagCfg.private_space;
        let row_col = bagCfg.private_gridLen.split('_');
        let rowLen = Number(row_col[1]);
        let colLen = Number(row_col[0]);
        let w = rowLen * width + (rowLen - 1) * space;
        let h = colLen * height + (colLen - 1) * space;
        size.width = w;
        size.height = h;
        return size;
    }

    /**
     * 通过行列数量获取尺寸
     * @param rowLen 
     * @param colLen 
     */
    getGridSizeByRowCol(rowLen: number, colLen: number) {
        let size = new Size();
        let bagCfg = this.bagCfg;
        let width = bagCfg.private_gridWidth;
        let height = bagCfg.private_gredHeight;
        let space = bagCfg.private_space;
        let w = rowLen * width + (rowLen - 1) * space;
        let h = colLen * height + (colLen - 1) * space;
        size.width = w;
        size.height = h;
        return size;
    }

    /* 获取格子数据 */
    getGridMapData() {
        return this._gridMapData;
    }

    /* 获取携带的武器位置数据 */
    getGridItemData() {
        return Array.from(this._gridItemData.values());
    }

    /* 获取携带的武器唯一键值 */
    getGridItemDataKeys() {
        return Array.from(this._gridItemData.keys());
    }

    /*获取武器的魅力加成*/
    getWeaponCharmByKey(key: string) {
        let weaponObj = this._gridItemData.get(key);
        let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponObj.wid);
        let values = weaponCfg.charm;
        return values;
    }

    /*获取武器的知识加成*/
    getWeaponKnowledgeByKey(key: string) {
        let weaponObj = this._gridItemData.get(key);
        let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponObj.wid);
        let values = weaponCfg.knowledge;
        return values;
    }
    
    /*获取武器的才艺加成*/
    getWeaponTalentByKey(key: string) {
        let weaponObj = this._gridItemData.get(key);
        let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponObj.wid);
        let values = weaponCfg.talent;
        return values;
    }
    
    /*获取武器的财富加成*/
    getWeaponWealthByKey(key: string) {
        let weaponObj = this._gridItemData.get(key);
        let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponObj.wid);
        let values = weaponCfg.wealth;
        return values;
    }

    /*获取携带的武器Map数据  */
    getGridItemMapData() {
        return this._gridItemData;
    }

    /**
     * 通过位置组获取位置中点坐标
     * @param gridObjArr 
     */
    getItemPosByTiledObj(gridObjArr: Array<GridObj>) {
        let startPos = this.getGridPosByTiled(gridObjArr[0]);
        let endPos = this.getGridPosByTiled(gridObjArr[gridObjArr.length - 1]);
        let pos = new Vec3(0, 0, 0);
        pos.x = (startPos.x + endPos.x) / 2;
        pos.y = (startPos.y + endPos.y) / 2;
        return pos;
    }

    /**
     * 通过位置获取坐标
     * @param gridObj 
     * @returns 
     */
    getGridPosByTiled(gridObj: GridObj) {
        let posX = gridObj.col * this._gridWidth + this._gridWidth / 2 + gridObj.col * this._space;
        let posY = gridObj.row * this._gredHeight + this._gredHeight / 2 + gridObj.row * this._space;
        return new Vec3(posX, -posY);
    }

    /**
     * 通过位置获取位置索引
     * @param row 
     * @param col 
     */
    getGridIndexByTiled(row: number, col: number) {
        return row * this._gridRowLen + col;
    }

    /**
     * 通过位置索引获取位置
     * @param index 
     */
    getGridTiledByIndex(index: number) {
        let row = Math.floor(index / this._gridRowLen);
        let col = index % this._gridRowLen;
        let gridObj = new GridObj();
        gridObj.row = row;
        gridObj.col = col;
        return gridObj;
    }

    /**
     * 通过武器唯一id 删除位置数据
     * @param id   武器唯一id
     */
    deletGridDataByWeaponId(id: string) {
        if (this._gridItemData.has(id)) {
            let weaponObj = this._gridItemData.get(id)
            let gridObjArr = weaponObj.data;
            for (let i = 0; i < gridObjArr.length; i++) {
                const gridObj = gridObjArr[i];
                this._gridMapData[gridObj.row][gridObj.col] = '0';
            }
            this._gridItemData.delete(id);
        }
    }

    /**
     * 添加放置数据
     * @param gridObjArr 
     * @param wid 
     */
    addGridDataByWeaponId(gridObjArr: Array<GridObj>, wid: number, weaponKey: string) {
        let weaponObj = new WeaponObj();
        weaponObj.id = weaponKey;
        weaponObj.gid = this._curGrid;
        weaponObj.wid = wid;
        weaponObj.data = gridObjArr;

        this._gridItemData.set(weaponObj.id, weaponObj);
        for (let i = 0; i < gridObjArr.length; i++) {
            const element = gridObjArr[i];
            this._gridMapData[element.row][element.col] = weaponObj.id;
        }
    }

    /* 合成更新 */
    updateGridItemData(weaponKey: string, wid: number) {
        if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey)
            weaponObj.wid = wid;
        }
    }

    /**
     * 通过坐标获取位置
     * @param pos 
     */
    getTiledByPos(pos: Vec3) {
        let tiledX = pos.x > 0 ? Math.floor((pos.x - this._gridWidth / 2) / (this._gridWidth + this._space)) : 3;
        let tiledY = pos.y < 0 ? Math.floor((Math.abs(pos.y) - this._gredHeight / 2) / (this._gredHeight + this._space)) : 3;
        let gridObj = new GridObj();
        gridObj.row = tiledY;
        gridObj.col = tiledX;
        return gridObj;
    }

    /**
     * 通过位置获取位置索引
     * @param pos 
     */
    getTiledIndexByPos(pos: Vec3) {
        let gridObj = this.getTiledByPos(pos);
        if (gridObj.col < 0 || gridObj.row < 0 || gridObj.col > (this._gridRowLen - 1) || gridObj.row > (this._gridColLen - 1)) {
            return -1
        }
        return this.getGridIndexByTiled(gridObj.row, gridObj.col);
    }

    /* 检测武器id是否相同 */
    checkSameWeapoIdByKey(weaponKey: string, wid: number) {
        if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey);
            if (wid == weaponObj.wid) {
                return true;
            }
        }
        return false;
    }

    /* 间隔触摸点是否在位置上 */
    checkPointinGrid(touchPos: Vec2, gridObjArr: Array<GridObj>) {
        let isTouch = false;
        for (let i = 0; i < gridObjArr.length; i++) {
            const gridObj = gridObjArr[i];
            let pos = this.getGridPosByTiled(gridObj);
            let rect = new Rect(pos.x - this._gridWidth / 2, pos.y - this.gridHeight / 2, this.gridWidth, this.gridHeight);
            if (rect.contains(touchPos)) {
                isTouch = true;
                break;
            }
        }
        return isTouch;
    }


    /**
    * 通过位置获取位置索引
    * @param row 
    * @param col 
    */
    getGridBgIndexByTiled(row: number, col: number) {
        let row_col = this._bagCfg.max_gridLen.split('_');
        return row * Number(row_col[1]) + col;
    }


    clear() {
        this._gridItemData.clear();
        this._curWeaponTildeIndex = [];
        this._bagCfg = null;
        this._gridEditMode = false;
    }

    private static _instance: GridData = null;
    public static get instance(): GridData {
        if (!this._instance) {
            this._instance = new GridData();
        }
        return this._instance;
    }

    

}



export class WeaponObj {
    id: string;//唯一id
    wid: number;//武器id
    gid: number;//格子表id
    data: Array<GridObj>;//位置数据
}

export class GridObj {
    row: number;//行
    col: number;//列
}
