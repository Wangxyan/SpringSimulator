import { _decorator, Component, instantiate, Intersection2D, Node, Prefab, Rect, UITransform, v2, Vec2, Vec3 } from 'cc';
import { GridData, GridObj } from '../Data/GridData';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { WeaponItem } from '../Weapon/WeaponItem';
import { GridItem } from '../Grid/GridItem';
import { Util } from '../../Frame/Util';
import { WeaponData } from '../Data/WeaponData';
import { GridBgItem } from '../Grid/GridBgItem';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {
    @property(Node)
    allGridList: Node = null;  //所有格子列表
    @property(Node)
    gridList: Node = null;
    @property(Prefab)
    gridPrefab: Prefab = null;
    @property(Prefab)
    gridBgPrefab: Prefab = null; //所有格子背景预制体
    init() {
        GridData.instance.init();
        this.initGridList();
        this.initAllGridList();
    }


    /* 初始所有的背景格子 */
    initAllGridList() {
        let gridData = GridData.instance.bagCfg.max_grid;
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const item = element[j];
                let gridBgItem = instantiate(this.gridBgPrefab);
                gridBgItem.parent = this.allGridList;
                gridBgItem.getComponent(GridBgItem).init(i, j, item);
            }
        }
    }

    initGridList() {
        this.gridList.removeAllChildren();
        let gridData = GridData.instance.getGridMapData();
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const item = element[j];
                let gridItem = instantiate(this.gridPrefab);
                gridItem.parent = this.gridList;
                gridItem.getComponent(GridItem).init(i, j, item);
            }
        }
    }

    /* 初始化格子状态 */
    initGridStatus() {
        let items = this.gridList.children;
        for (let j = 0; j < items.length; j++) {
            const element = items[j];
            element.getComponent(GridItem).setDeafult();
        }
    }

    /**
     * 检测位置状态(检测坐标)
     * @param posArr 
     * @param wid 武器id
     */
    cherGridStatus(posArr: Array<Vec3>, weaponItem: WeaponItem) {
        let wid = weaponItem.weaponCfg.Id;
        let gridIndexArr: Array<number> = [];
        let items = this.gridList.children;
        let gridMapData = GridData.instance.getGridMapData();
        for (let n = 0; n < posArr.length; n++) {
            const checkPos = posArr[n];
            let index = -1;
            for (let m = 0; m < items.length; m++) {
                const element = items[m];
                let gridObj = element.getComponent(GridItem).gridObj;
                let gridValue = element.getComponent(GridItem).gridValue;
                let pos = GridData.instance.getGridPosByTiled(gridObj);
                let width = GridData.instance.gridWidth;
                let height = GridData.instance.gridHeight;
                let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
                if (rect.contains(v2(checkPos.x, checkPos.y)) && gridValue) {
                    index = m;
                    break;
                }
            }
            gridIndexArr.push(index);
        }
        GridData.instance.curWeaponTildeIndex = gridIndexArr;
        let placeWeaponKeyArr = [];//被占用可抖动的武器key(多个)
        if (gridIndexArr.includes(-1)) {
            //超出区域(占用和未占用)
            for (let j = 0; j < items.length; j++) {
                const element = items[j];
                if (gridIndexArr.includes(j)) {
                    let gridObj = GridData.instance.getGridTiledByIndex(j);
                    //是否占用
                    if (gridMapData[gridObj.row][gridObj.col]) {
                        element.getComponent(GridItem).setRed();
                        //被占用的武器抖动状态
                        let weaponKey = gridMapData[gridObj.row][gridObj.col];
                        if (!placeWeaponKeyArr.includes(weaponKey)) {
                            placeWeaponKeyArr.push(weaponKey);
                        }
                    }
                    else {
                        element.getComponent(GridItem).setYellow();
                    }
                }
                else {
                    element.getComponent(GridItem).setDeafult();
                }
            }
        }
        else {
            //未超出区域
            let sanmeCount = 0;//相同wid 数量
            let weaponKey = '';
            for (let j = 0; j < items.length; j++) {
                const element = items[j];
                if (gridIndexArr.includes(j)) {
                    element.getComponent(GridItem).setGreen();
                    //抖动和合成状态
                    let gridObj = GridData.instance.getGridTiledByIndex(j);
                    weaponKey = gridMapData[gridObj.row][gridObj.col];
                    //检测武器id是否相同
                    if (GridData.instance.checkSameWeapoIdByKey(weaponKey, wid)) {
                        sanmeCount++;
                    }
                    //添加到抖动列表
                    if (!placeWeaponKeyArr.includes(weaponKey)) {
                        placeWeaponKeyArr.push(weaponKey);
                    }
                }
                else {
                    element.getComponent(GridItem).setDeafult();
                }

            }
            //是否达到合成成状态
            if (sanmeCount == gridIndexArr.length) {
                //可以合成(是否合成达到最大等级)
                let level = weaponItem.weaponCfg.Level;
                let group = weaponItem.weaponCfg.weaponGroupNum;
                if (WeaponData.instance.checkWeaponByLevel(level + 1, group)) {
                    placeWeaponKeyArr = [];
                    weaponItem.setIconYellow();
                    EventListener.emit(GameEvent.WEAPON_ICON_STATUS, weaponKey, true);
                }
            }
        }
        //设置抖动
        for (let index = 0; index < placeWeaponKeyArr.length; index++) {
            const element = placeWeaponKeyArr[index];
            EventListener.emit(GameEvent.WEAPON_SHAKE, element);
        }
    }


    /* 武器移动 */
    onWeaponMove(weaponItem: WeaponItem) {
        let weaponKey = weaponItem.weaponKey;
        let weaponCfg = weaponItem.weaponCfg;
        let Type = weaponCfg.Type;
        let typeArr = Type.split('_');
        let row = Number(typeArr[0]);
        let col = Number(typeArr[1]);
        let pointPosArr: Array<Vec3> = [];
        let points = weaponCfg.Points;
        GridData.instance.deletGridDataByWeaponId(weaponKey);
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (points[i][j]) {
                    //如果位置点存在
                    let gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    let tieldPos = GridData.instance.getGridPosByTiled(gripObj);
                    let wpos = weaponItem.point.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
                    let pos = weaponItem.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                    pointPosArr.push(pos);
                }
            }
        }
        //初始状态
        EventListener.emit(GameEvent.WEAPON_ICON_STATUS_INIT);
        this.cherGridStatus(pointPosArr, weaponItem);
    }

    protected onEnable(): void {
        EventListener.on(GameEvent.WEAPON_MOVE, this.onWeaponMove, this);
        EventListener.on(GameEvent.WEAPON_PlACE, this.initGridStatus, this);
        EventListener.on(GameEvent.INIT_BUILD_GRID_LIST, this.initGridList, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.WEAPON_MOVE, this.onWeaponMove, this);
        EventListener.off(GameEvent.WEAPON_PlACE, this.initGridStatus, this);
        EventListener.off(GameEvent.INIT_BUILD_GRID_LIST, this.initGridList, this);
    }

    clear() {
        GridData.instance.clear();
    }
}


