import { _decorator, Component, Node, UITransform, Layout, Sprite, Vec3, Size, v3, SpriteFrame, UIOpacity, Vec2, v2, Rect, tween } from 'cc';
import { Constants } from '../../Constants';
import { EventListener } from '../../Frame/EventListener';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { Util } from '../../Frame/Util';
import { WeaponCfg } from '../../Model/WeaponModel';
import { GridData, GridObj } from '../Data/GridData';
import { GameEvent } from '../Event/GameEvent';
import { GridBgItem } from '../Grid/GridBgItem';
import { WeaponBgItem } from '../Weapon/WeaponBgItem';
import { WeaponItem } from '../Weapon/WeaponItem';
const { ccclass, property } = _decorator;

@ccclass('GridMapManager')
export class GridMapManager extends Component {
    @property(Node)
    bgs: Array<Node> = [];
    @property(Node)
    bg: Node = null;
    @property(Node)
    gridList: Node = null;  //拥有格子
    @property(Node)
    allGridList: Node = null;  //所有格子列表
    @property(Node)
    weaponList: Node = null;
    @property(Node)
    removeWeaponList: Node = null;
    @property(Node)
    preWeaponList: Node = null;
    @property(Node)
    preBg: Node = null;

    private _gridRes: Array<string> = ['bag1', 'bag1', 'bag3', 'bag5', 'bag5', 'bag6', 'bag6', 'bag7', 'bag7', 'bag8', 'bag8', 'bag9', 'bag']; //背包背景图
    private _padding: number = 90;//周围内边距距离

    private startPoint: GridObj = null; //拥有格子gridList 
    private _isTouch: boolean = false;//是否被点击
    private _offfSet: Vec3 = new Vec3(0, 0, 0);//移动偏移 
    private _startPos: Vec3 = new Vec3(0, 0, 0);//weaponList初始位置
    private _placeStatus: boolean = false; //是否正确放置了
    private _temPos: Vec3 = new Vec3(0, 0, 0);
    private _temPoint: GridObj = null;
    private _temAddPoint: GridObj = null; //新增格子
    private _mainAreaKey: string = '1';//原区域key 

    private _addPlaceAreaData: Map<string, GridBgObj> = new Map();//新增放置区域数据  key=>placeAreaKey

    init() {
        this.initGridRes();
        this.initStatPoint();
    }

    /* 初始拥有格子在背景格子中的位置 */
    initStatPoint() {
        let max_gridLenArr = GridData.instance.bagCfg.max_gridLen.split('_');
        let private_gridLenArr = GridData.instance.bagCfg.private_gridLen.split('_');
        let startRow = Math.floor((Number(max_gridLenArr[0]) - Number(private_gridLenArr[0])) / 2);
        let startCol = Math.floor((Number(max_gridLenArr[1]) - Number(private_gridLenArr[1])) / 2);
        let gridObj = new GridObj();
        gridObj.row = startRow;
        gridObj.col = startCol;
        this.startPoint = gridObj;
    }

    /* 所有格子适配 */
    initAllGridRes() {
        let space = GridData.instance.space;
        let size = GridData.instance.getMaxGridMapSize();
        let gridWidth = GridData.instance.gridWidth;
        this.allGridList.getComponent(UITransform).setContentSize(size);
        this.allGridList.getComponent(Layout).spacingX = space;
        this.allGridList.getComponent(Layout).spacingY = space;
        this.bg.getComponent(UITransform).setContentSize(size.width + this._padding, size.height + this._padding);
        this.bg.getComponent(Layout).paddingTop = this._padding / 2;
        this.bg.getComponent(Layout).paddingBottom = this._padding / 2;
        this.bg.getComponent(Layout).paddingLeft = this._padding / 2;
        this.bg.getComponent(Layout).paddingRight = this._padding / 2;
        this.allGridList.getComponent(Layout).updateLayout(true);
        this.bg.getComponent(Layout).updateLayout(true);
        this.allGridList.setPosition(-size.width / 2, size.height / 2);
        this.removeWeaponList.setPosition(0, -size.height / 2 - 100);
        for (let i = 0; i < this._gridRes.length; i++) {
            const res = this._gridRes[i];
            let sprite = this.bgs[i].getComponent(Sprite);
            let path = Constants.gridPath + res + '/spriteFrame';
            ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
                sprite.spriteFrame = data;
                let pos = this.resNodePos(i, size, this._padding, gridWidth);
                if (!pos.equals(Vec3.ZERO)) {
                    this.bgs[i].setPosition(pos);
                }
            })
        }
    }

    initGridRes() {
        let space = GridData.instance.space;
        let size = GridData.instance.getGridMapSize();
        let gridWidth = GridData.instance.gridWidth;
        let bagCfg = GridData.instance.bagCfg;
        let rowColArr = bagCfg.private_gridLen.split('_');
        this.gridList.getComponent(UITransform).setContentSize(size);
        this.gridList.getComponent(Layout).spacingX = space;
        this.gridList.getComponent(Layout).spacingY = space;
        this.bg.getComponent(UITransform).setContentSize(size.width + this._padding, size.height + this._padding);
        this.bg.getComponent(Layout).paddingTop = this._padding / 2;
        this.bg.getComponent(Layout).paddingBottom = this._padding / 2;
        this.bg.getComponent(Layout).paddingLeft = this._padding / 2;
        this.bg.getComponent(Layout).paddingRight = this._padding / 2;
        this.gridList.getComponent(Layout).updateLayout(true);
        this.bg.getComponent(Layout).updateLayout(true);

        // 固定位置计算方法
        this.gridList.setPosition(-size.width / 2, size.height / 2);
        this.weaponList.setPosition(-size.width / 2, size.height / 2)
        this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
        // 改为直接使用Map对象的Position  
        //let mapPosition = this.getMapPosition();  
        //this.gridList.setPosition(mapPosition.x, mapPosition.y);
        //this.weaponList.setPosition(mapPosition.x, mapPosition.y);
        //this.preWeaponList.setPosition(mapPosition.x, mapPosition.y); 
        
        this.weaponList.getComponent(UITransform).setContentSize(size.width, size.height);
        this.preWeaponList.getComponent(UITransform).setContentSize(size.width, size.height);
        let offerY = Number(rowColArr[0]) > 5 ? 100 : 200;
        // this.removeWeaponList.setPosition(0, -size.height / 2 - offerY);
        let offerX = size.width / 2 + 800; // 可以根据需要调整距离  
        this.removeWeaponList.setPosition(-offerX, offerY); 
        for (let i = 0; i < this._gridRes.length; i++) {
            const res = this._gridRes[i];
            let sprite = this.bgs[i].getComponent(Sprite);
            let path = Constants.gridPath + res + '/spriteFrame';
            ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
                sprite.spriteFrame = data;
                let pos = this.resNodePos(i, size, this._padding, gridWidth);
                if (!pos.equals(Vec3.ZERO)) {
                    this.bgs[i].setPosition(pos);
                }
            })
        }
    }

    resNodePos(i: number, size: Size, padding: number, gridWidth: number) {
        let pos = Vec3.ZERO;
        switch (i) {
            case 0:
                pos = v3(-(size.width - 100) / 2, -size.height / 2 - 10, 0);
                break;
            case 1:
                pos = v3((size.width - 100) / 2, -size.height / 2 - 10, 0);
                break;
            case 2:
                pos = v3(0, size.height / 2 + padding / 2 - padding / 2 / 3, 0);
                break;
            case 3:
                pos = v3(size.width / 2 + padding / 2 / 3, size.height / 2, 0);
                break;
            case 4:
                pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2, 0);
                break;
            case 5:
                pos = v3(-(gridWidth / 2 + gridWidth) + 10, size.height / 2 + padding / 2, 0);
                break;
            case 6:
                pos = v3(gridWidth / 2 + gridWidth - 10, size.height / 2 + padding / 2, 0);
                break;
            case 7:
                pos = v3(-size.width / 2 - padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
                break;
            case 8:
                pos = v3(size.width / 2 + padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
                break;
            case 9:
                pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2 - 30, 0);
                break;
            case 10:
                pos = v3((size.width / 2 + padding / 2 / 3), size.height / 2 - 30, 0);
                break;
            case 11:
                pos = v3(0, size.height / 2 - padding / 2 + 20, 0);
                this.bgs[i].getComponent(UITransform).width = size.width;
                break;
        }

        return pos;
    }


    /* 设置节点透明度 */
    setNodeOpacity(value: number) {
        this.weaponList.getComponent(UIOpacity).opacity = value;
        for (let i = 0; i < this.removeWeaponList.children.length; i++) {
            const element = this.removeWeaponList.children[i];
            if (element.getComponent(WeaponItem)) {
                element.getComponent(UIOpacity).opacity = value;
            }
        }
    }

    /* 设置区域占位key */
    setMainPlaceAreaKey(startGridObj: GridObj) {
        let gripObjArr = this.getGridMapObjArr();
        let items = this.allGridList.children;
        let data: Array<GridObj> = [];
        for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index];
            let griddata = GridData.instance.getGridMapData();
            let value = griddata[subGridObj.row][subGridObj.col]
            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new GridObj();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(GridBgItem).placeAreaKey = this._mainAreaKey;
            gridBgItem.getComponent(GridBgItem).gridValue = value;
        }
        let gridBgObj = new GridBgObj();
        gridBgObj.item = this.weaponList;
        gridBgObj.data = data;
        this._addPlaceAreaData.set(this._mainAreaKey, gridBgObj);
    }

    /* 设置新增格子区域的占位key */
    setAddPlaceAreaKey(weaponBgItem: WeaponBgItem) {
        let startGridObj = this._temAddPoint;
        let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
        let items = this.allGridList.children;
        let data: Array<GridObj> = [];
        for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index];
            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new GridObj();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(GridBgItem).placeAreaKey = weaponBgItem.weaponKey;
        }
        let gridBgObj = new GridBgObj();
        gridBgObj.item = weaponBgItem.node;
        gridBgObj.data = data;
        this._addPlaceAreaData.set(weaponBgItem.weaponKey, gridBgObj);

    }

    /* 清除区域key 和区域值 */
    delPlaceAreaKey(key: string) {
        let items = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBgItem = items[index];
            gridBgItem.getComponent(GridBgItem).delPlaceAreaKey(key);
        }
    }

    getConnectStatus(gridObj: GridObj) {
        let isConnect = false;
        let bagCfg = GridData.instance.bagCfg;
        let row_col = bagCfg.max_gridLen.split('_');

        if (gridObj.row >= 0 && gridObj.col >= 0 && gridObj.row <= Number(row_col[0]) - 1 && gridObj.col <= Number(row_col[1]) - 1) {
            let index = GridData.instance.getGridBgIndexByTiled(gridObj.row, gridObj.col);
            let item = this.allGridList.children[index];
            if (item.getComponent(GridBgItem).placeAreaKey == this._mainAreaKey) {
                isConnect = true;
            }
        }
        return isConnect;
    }

    /* 检测新增区域数据是否相连 */
    checkAddAreaGridData() {
        this._addPlaceAreaData.forEach((gridBgObj, key) => {
            if (key != this._mainAreaKey) {
                let item = gridBgObj.item;
                let data = gridBgObj.data;
                let isConnect = false;
                for (let i = 0; i < data.length; i++) {
                    const gridObj = data[i];
                    //上
                    let upObj = new GridObj();
                    upObj.row = gridObj.row - 1;
                    upObj.col = gridObj.col;
                    if (!isConnect) {
                        isConnect = this.getConnectStatus(upObj);
                    }
                    //下
                    let downObj = new GridObj();
                    downObj.row = gridObj.row + 1;
                    downObj.col = gridObj.col;
                    if (!isConnect) {
                        isConnect = this.getConnectStatus(downObj);
                    }
                    //左
                    let leftObj = new GridObj();
                    leftObj.row = gridObj.row;
                    leftObj.col = gridObj.col - 1;
                    if (!isConnect) {
                        isConnect = this.getConnectStatus(leftObj);
                    }
                    //右
                    let rightObj = new GridObj();
                    rightObj.row = gridObj.row;
                    rightObj.col = gridObj.col + 1;
                    if (!isConnect) {
                        isConnect = this.getConnectStatus(rightObj);
                    }
                    if (isConnect) {
                        break;
                    }
                }
                if (isConnect) {
                    item.destroy();
                    this.rebuildGridData();
                }
                else {
                    EventListener.emit(GameEvent.ADD_REMOVE_WEAPON_LIST, item);
                    this._addPlaceAreaData.delete(key);
                    this.delPlaceAreaKey(key);
                }
            }
        })
    }

    /* 重组拥有格子数据 */
    rebuildGridData() {
        let data: Array<GridObj> = [];
        this._addPlaceAreaData.forEach((gridBgObj, key) => {
            let gridObjArr = gridBgObj.data;
            data = data.concat(gridObjArr);
        })
        let rowMinMax = [];
        let colMinMax = [];
        data.sort((x, y) => { return x.row - y.row });
        rowMinMax.push(data[0].row);
        rowMinMax.push(data[data.length - 1].row);
        data.sort((x, y) => { return x.col - y.col });
        colMinMax.push(data[0].col);
        colMinMax.push(data[data.length - 1].col);
        //重组新格子数据
        let newdata: Array<Array<string>> = [];
        let items = this.allGridList.children;
        for (let i = rowMinMax[0]; i <= rowMinMax[1]; i++) {
            let rowData = [];
            for (let j = colMinMax[0]; j <= colMinMax[1]; j++) {
                let index = GridData.instance.getGridBgIndexByTiled(i, j);
                let gridBgItem = items[index];
                let value = gridBgItem.getComponent(GridBgItem).placeAreaKey ? gridBgItem.getComponent(GridBgItem).gridValue : '';
                rowData.push(value);
            }
            newdata.push(rowData);
        }
        GridData.instance.setRebuildGridMapData(newdata);
        EventListener.emit(GameEvent.INIT_BUILD_GRID_LIST);
        EventListener.emit(GameEvent.INIT_BUILD_WEAPON_POS);
        this.startPoint.row = rowMinMax[0];
        this.startPoint.col = colMinMax[0];
    }

    /* 调试查看数据 */
    debugAllList() {
        let items = this.allGridList.children;
        let data: Array<Array<string>> = [];
        for (let i = 0; i < 7; i++) {
            let a = [];
            for (let j = 0; j < 5; j++) {
                let index = GridData.instance.getGridBgIndexByTiled(i, j);
                let value = items[index].getComponent(GridBgItem).placeAreaKey;
                a.push(value)
            }
            data.push(a);
        }
    }

    /* 调试查看数据 */
    debugAllListValue() {
        let items = this.allGridList.children;
        let data: Array<Array<string>> = [];
        for (let i = 0; i < 7; i++) {
            let a = [];
            for (let j = 0; j < 5; j++) {
                let index = GridData.instance.getGridBgIndexByTiled(i, j);
                let value = items[index].getComponent(GridBgItem).gridValue;
                a.push(value)
            }
            data.push(a);
        }
    }


    /* 调试查看数据 */
    debugAllListGridObj() {
        let items = this.allGridList.children;
        let data: Array<Array<string>> = [];
        for (let i = 0; i < 7; i++) {
            let a = [];
            for (let j = 0; j < 5; j++) {
                let index = GridData.instance.getGridBgIndexByTiled(i, j);
                let gridObj = items[index].getComponent(GridBgItem).gridObj;
                a.push(gridObj)
            }
            data.push(a);
        }
    }

    /* 放置新增格子开始 */
    onPlaceGridStart(weaponBgItem: WeaponBgItem) {
        if (!this.allGridList.active) {
            this.initAllGridListPlaceValue();
            GridData.instance.gridEditMode = true;
            this.gridList.parent = this.preBg;
            weaponBgItem.node.parent = this.node;
            this.allGridList.active = true;
            //设置透明度
            this.setNodeOpacity(100);
            this.initAllGridRes();
            this.node.parent.getComponent(UITransform).height = this.allGridList.getComponent(UITransform).height;
            EventListener.emit(GameEvent.SHOW_HIDE_PLACE_LIST, true);
            //设置拥有格子列表位置
            let pos = GridData.instance.getGridPosByTiled(this.startPoint);
            let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
            let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            let gridWidth = GridData.instance.gridWidth;
            let gridHeight = GridData.instance.gridHeight;
            this.gridList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.weaponList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.setMainPlaceAreaKey(this.startPoint);
        }
        this.delPlaceAreaKey(weaponBgItem.weaponKey);
    }

    /* 放置新增格子移动 */
    onPlaceGridMove(weaponBgItem: WeaponBgItem) {
        weaponBgItem.node.parent = this.node;
        this.initAllGridListTips();
        let firstGridObj = new GridObj();
        firstGridObj.row = 0;
        firstGridObj.col = 0;
        let tieldPos = GridData.instance.getGridPosByTiled(firstGridObj);
        let wpos = weaponBgItem.point.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
        let checkPos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
        let items = this.allGridList.children;
        let all_row_col = GridData.instance.bagCfg.max_gridLen.split('_');
        this._placeStatus = false;
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(GridBgItem).gridObj;
            let pos = GridData.instance.getGridPosByTiled(gridObj);
            let width = GridData.instance.gridWidth;
            let height = GridData.instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
            if (rect.contains(v2(checkPos.x, checkPos.y))) {
                let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
                let placeArr = [];//0 为未放置
                for (let index = 0; index < gripObjArr.length; index++) {
                    const subGridObj = gripObjArr[index];
                    let row = gridObj.row + subGridObj.row;
                    let col = gridObj.col + subGridObj.col;
                    if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                        let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
                        let gridBgItem = items[newIndex];
                        //检测格子占用
                        if (!gridBgItem.getComponent(GridBgItem).placeAreaKey) {
                            gridBgItem.getComponent(GridBgItem).setTipsGreen();
                            placeArr.push(1);
                        }
                        else {
                            placeArr.push(0);
                        }
                    }
                    else {
                        placeArr.push(0);
                    }
                }
                if (placeArr.includes(0)) {
                    this._placeStatus = false;

                }
                else {
                    this._placeStatus = true;
                    //设置新坐标
                    let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                    let startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);

                    let points = weaponBgItem.weaponCfg.Points;
                    let data: Array<GridObj> = [];
                    for (let n = 0; n < points.length; n++) {
                        const element = points[n];
                        for (let m = 0; m < element.length; m++) {
                            let gridObj1 = new GridObj();
                            gridObj1.row = n;
                            gridObj1.col = m;
                            data.push(gridObj1);
                        }
                    }
                    const endGridObj = data[data.length - 1];
                    let newEndObj = new GridObj();
                    newEndObj.row = gridObj.row + endGridObj.row;
                    newEndObj.col = gridObj.col + endGridObj.col;
                    let pos1 = GridData.instance.getGridPosByTiled(newEndObj);
                    let wpos1 = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos1);
                    let endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos1);

                    let centePos = new Vec3(0, 0, 0);
                    centePos.x = (startPos.x + endPos.x) / 2;
                    centePos.y = (startPos.y + endPos.y) / 2;
                    this._temPos = centePos;
                    this._temAddPoint = Util.clone(gridObj);
                }
                break;
            }
        }
    }

    /* 放置新增格子完成 */
    onPlaceGridEnd(weaponBgItem: WeaponBgItem) {
        let item = weaponBgItem.node;
        this.initAllGridListTips();
        if (this._placeStatus) {
            item.setPosition(this._temPos);
            this.setAddPlaceAreaKey(weaponBgItem);
        }
        else {
            EventListener.emit(GameEvent.ADD_REMOVE_WEAPON_LIST, item);
            this._addPlaceAreaData.delete(weaponBgItem.weaponKey);
        }
        this._placeStatus = false;
    }


    /* 放置格子确定 */
    onPlaceGridFinish() {
        if (this.allGridList.active) {
            this.checkAddAreaGridData();
            GridData.instance.gridEditMode = false;
            this.allGridList.active = false;
            this.gridList.parent = this.bg;
            //设置透明度
            this.setNodeOpacity(255);
            this.initGridRes();
            EventListener.emit(GameEvent.SHOW_HIDE_PLACE_LIST, false);

        }
    }

    /* 获取拥有格子里的第一个有格子的数据 */
    getFirstGridObj() {
        let gridMapData = GridData.instance.getGridMapData();
        let gripObjArr: Array<GridObj> = [];
        let gripObj = null;
        for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    break;
                }
            }
            if (gripObj) {
                break;
            }
        }
        return gripObj;
    }

    /* 获取拥有格子的位置数据 */
    getGridMapObjArr() {
        let gridMapData = GridData.instance.getGridMapData();
        let gripObjArr: Array<GridObj> = [];
        for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    gripObjArr.push(gripObj);
                }
            }
        }
        return gripObjArr;
    }

    getPointGridObjArr(weaponCfg: WeaponCfg) {
        let point = weaponCfg.Points;
        let gripObjArr: Array<GridObj> = [];
        for (let i = 0; i < point.length; i++) {
            const element = point[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    gripObjArr.push(gripObj);
                }
            }
        }
        return gripObjArr;
    }

    /* 初始格子颜色 */
    initAllGridListTips() {
        let items = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(GridBgItem).setTipsDefault();
        }
    }

    /* 初始格子占有 */
    initAllGridListPlaceValue() {
        let items = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(GridBgItem).placeAreaKey = '';
        }
    }

    /* 检测坐标是否在格子中 */
    checkAllGridListByPos(checkPos: Vec3) {
        let items = this.allGridList.children;
        let all_row_col = GridData.instance.bagCfg.max_gridLen.split('_');
        this._placeStatus = false;
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(GridBgItem).gridObj;
            let pos = GridData.instance.getGridPosByTiled(gridObj);
            let width = GridData.instance.gridWidth;
            let height = GridData.instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
            if (rect.contains(v2(checkPos.x, checkPos.y))) {
                let gripObjArr = this.getGridMapObjArr();
                let placeArr = [];//0 为未放置
                for (let index = 0; index < gripObjArr.length; index++) {
                    const subGridObj = gripObjArr[index];
                    let row = gridObj.row + subGridObj.row;
                    let col = gridObj.col + subGridObj.col;
                    if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                        let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
                        let gridBgItem = items[newIndex];
                        //是否格子占用
                        if (!gridBgItem.getComponent(GridBgItem).placeAreaKey) {
                            gridBgItem.getComponent(GridBgItem).setTipsGreen();
                            placeArr.push(1);
                        }
                        else {
                            placeArr.push(0);
                        }
                    }
                    else {
                        placeArr.push(0);
                    }
                }
                if (placeArr.includes(0)) {
                    this._placeStatus = false;
                }
                else {
                    this._placeStatus = true;
                    let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                    let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                    let gridWidth = GridData.instance.gridWidth;
                    let gridHeight = GridData.instance.gridHeight;
                    this._temPos.x = newPos.x - gridWidth / 2;
                    this._temPos.y = newPos.y + gridHeight / 2;
                    this._temPoint = Util.clone(gridObj);
                }
                break;
            }
        }
    }

    /* 设置移动提示 */
    setGridMoveTips() {
        this.initAllGridListTips();
        //检测第一个格子是否在所有格子里中
        let firstGridObj = new GridObj();
        firstGridObj.row = 0;
        firstGridObj.col = 0;
        let tieldPos = GridData.instance.getGridPosByTiled(firstGridObj);
        let wpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
        let pos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
        this.checkAllGridListByPos(pos);
    }

    /*放置拥有格子触摸点击 */
    onTouchStart(wpos: Vec2) {
        //是否触摸到拥有格子列表
        let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
        //坐标在可用格子中时
        let gridData = GridData.instance.getGridMapData();
        let touched = false;
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gridObj = new GridObj();
                    gridObj.row = i;
                    gridObj.col = j;
                    let gridPos = GridData.instance.getGridPosByTiled(gridObj);
                    let gridWpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(gridPos);
                    let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(gridWpos);
                    let gridWidth = GridData.instance.gridWidth;
                    let gridHeight = GridData.instance.gridHeight;
                    let rect = new Rect(newPos.x - gridWidth / 2, newPos.y - gridHeight / 2, gridWidth, gridWidth);
                    if (rect.contains(v2(touchPos.x, touchPos.y))) {
                        touched = true;
                        break;
                    }
                }
            }
            if (touched) {
                break;
            }
        }
        if (GridData.instance.gridEditMode && touched) {
            this._isTouch = true;
            this._offfSet = this.weaponList.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this._startPos = this.weaponList.getPosition();
            this.delPlaceAreaKey(this._mainAreaKey);
        }
    }

    /* 放置拥有格子移动 */
    onTouchMove(wpos: Vec2) {
        if (this._isTouch) {
            let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            let pos = new Vec3(touchPos.x - this._offfSet.x, touchPos.y - this._offfSet.y);
            this.gridList.setPosition(pos);
            this.weaponList.setPosition(pos);
            //设置移动提示
            this.setGridMoveTips();
        }
    }

    /* 放置拥有格子完成 */
    onTouchEnd(wpos: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            //是否放置或还原
            if (this._placeStatus) {
                this._startPos = this._temPos;
                this.startPoint = this._temPoint;
            }
            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this._placeStatus = false;
            this.initAllGridListTips();
            this.setMainPlaceAreaKey(this.startPoint);
        }
    }

    onTouchCancle(wpos: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            this._placeStatus = false;
            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this.initAllGridListTips();
        }
    }

    onClearAreaData() {
        this._addPlaceAreaData.clear();
    }


    protected onEnable(): void {
        //放置新增格子监听
        EventListener.on(GameEvent.PLACE_GRID_START, this.onPlaceGridStart, this);
        EventListener.on(GameEvent.PLACE_GRID_MOVE, this.onPlaceGridMove, this);
        EventListener.on(GameEvent.PLACE_GRID_END, this.onPlaceGridEnd, this);


        //放置拥有格子监听
        EventListener.on(GameEvent.GAME_TOUCH_START, this.onTouchStart, this);
        EventListener.on(GameEvent.GAME_TOUCH_MOVE, this.onTouchMove, this);
        EventListener.on(GameEvent.GAME_TOUCH_END, this.onTouchEnd, this);
        EventListener.on(GameEvent.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        EventListener.on(GameEvent.CLEAR_AREA_DATA, this.onClearAreaData, this);
        EventListener.on(GameEvent.PLACE_GRID_FINISH, this.onPlaceGridFinish, this);

    }

    protected onDisable(): void {
        EventListener.off(GameEvent.PLACE_GRID_START, this.onPlaceGridStart, this);
        EventListener.off(GameEvent.PLACE_GRID_MOVE, this.onPlaceGridMove, this);
        EventListener.off(GameEvent.PLACE_GRID_END, this.onPlaceGridEnd, this);

        EventListener.off(GameEvent.GAME_TOUCH_START, this.onTouchStart, this);
        EventListener.off(GameEvent.GAME_TOUCH_MOVE, this.onTouchMove, this);
        EventListener.off(GameEvent.GAME_TOUCH_END, this.onTouchEnd, this);
        EventListener.off(GameEvent.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        EventListener.off(GameEvent.CLEAR_AREA_DATA, this.onClearAreaData, this);
        EventListener.off(GameEvent.PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
    }
}


export class GridBgObj {
    data: Array<GridObj>;//位置数据
    item: Node;//区域节点
}


