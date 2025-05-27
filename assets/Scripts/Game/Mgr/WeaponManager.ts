import { _decorator, Component, instantiate, Intersection2D, Layout, Node, Prefab, UITransform, v2, v3 } from 'cc';
import { GridData, GridObj, WeaponObj } from '../Data/GridData';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { CoinObj, WeaponData } from '../Data/WeaponData';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { Util } from '../../Frame/Util';
import { WeaponCfg } from '../../Model/WeaponModel';
import { Constants } from '../../Constants';
import { WeaponItem } from '../Weapon/WeaponItem';
import { WeaponBgItem } from '../Weapon/WeaponBgItem';
const { ccclass, property } = _decorator;

@ccclass('WeaponManager')
export class WeaponManager extends Component {
    @property(Node)
    weaponList: Node = null;
    @property(Node)
    preWeaponList: Node = null;
    @property(Node)
    removeWeaponList: Node = null;

    init() {
        WeaponData.instance.init();
        this.initWeaponListPos();
        this.initWeaponList();
        this.initRemoveWeaponList();
    }

    initWeaponListPos() {
        let size = GridData.instance.getGridMapSize();
        this.weaponList.setPosition(-size.width / 2, size.height / 2);
        this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
    }

    initWeaponList() {
        let itemData = GridData.instance.getGridItemMapData();
        itemData.forEach((weaponObj: WeaponObj, key: string) => {
            let gridObjArr = weaponObj.data;
            let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponObj.wid);
            let res = weaponCfg.Type;
            let path = Constants.weaponPath;
            let pos = GridData.instance.getItemPosByTiledObj(gridObjArr);
            ResourcesUtil.getPrefab(path).then((itemPrefab: Prefab) => {
                let weaponItem = instantiate(itemPrefab);
                weaponItem.parent = this.weaponList;
                weaponItem.setPosition(pos);
                weaponItem.getComponent(WeaponItem).init(weaponCfg, key, true);
            })
        })
    }

    /* 初始化卸下(掉落)的武器列表 */
    initRemoveWeaponList() {
        //调试获取1级武器
        this.removeWeaponList.removeAllChildren();
        let weaponIdData: Array<number> = WeaponData.instance.getWeaponPool();
        //生成格子
        let placeId = this.getPlaceGridId();
        if (placeId) {
            let randIndex = Math.floor(Math.random() * weaponIdData.length);
            weaponIdData.splice(randIndex, 1, placeId);
        }
        for (let i = 0; i < weaponIdData.length; i++) {
            let weaponCfg = WeaponData.instance.getWeaponCfgById(weaponIdData[i]);
            let key = Util.getUuid(10);
            let path = weaponCfg.itemType ? Constants.weaponPath : Constants.weaponBgPath;
            ResourcesUtil.getPrefab(path).then((itemPrefab: Prefab) => {
                let weaponItem = instantiate(itemPrefab);
                weaponItem.parent = this.removeWeaponList;

                if (weaponCfg.itemType) {
                    weaponItem.getComponent(WeaponItem).init(weaponCfg, key, false);
                }
                else {
                    //格子
                    weaponItem.getComponent(WeaponBgItem).init(weaponCfg, key, false);
                }
                this.updateRemoveLayOut();
            })
        }
    }

    /* 获取可以放置的搁置id 
      0：未占位 1：占位
  */
    getPlaceGridId() {
        let bagCfg = GridData.instance.bagCfg;
        let row_col = bagCfg.max_gridLen.split('_');
        let row = Number(row_col[0]);
        let col = Number(row_col[1]);
        let data: Array<Array<number>> = [];
        let placeId = 0;
        for (let i = 0; i < row; i++) {
            let element = [];
            for (let j = 0; j < col; j++) {
                element.push(1);
            }
            data.push(element);
        }
        let gridData = GridData.instance.getGridMapData();
        for (let n = 0; n < gridData.length; n++) {
            const element = gridData[n];
            for (let m = 0; m < element.length; m++) {
                const value = element[m];
                if (value) {
                    data[n][m] = 0;
                }
            }
        }
        placeId = WeaponData.instance.getPlaceGridIdByWeigh(data);
        return placeId;
    }

    /* 重组武器的位置 */
    onRebuildWeaponPos() {
        let itemData = GridData.instance.getGridItemMapData();
        itemData.forEach((weaponObj: WeaponObj, key: string) => {
            let gridObjArr = weaponObj.data;
            let pos = GridData.instance.getItemPosByTiledObj(gridObjArr);
            let items = this.weaponList.children;
            for (let index = 0; index < items.length; index++) {
                const weaponItem = items[index];
                weaponItem.getComponent(WeaponItem).setBuildWeaponPos(key, pos);
            }
        })
    }


    /* 转换飞的金币动画 */
    showFlyGoldAnim() {
        if (this.removeWeaponList.children.length) {
            let items = this.removeWeaponList.children;
            for (let i = 0; i < items.length; i++) {
                const element = items[i];
                let coinObj = new CoinObj();
                coinObj.wpos = element.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                coinObj.num = Util.getRandomInt(5, 10);
                EventListener.emit(GameEvent.WEAPON_CHANGE_COIN, coinObj);
            }
        }
    }

    /* 隐藏显示卸载列表 */
    showHideRemoveList(status: boolean) {
        this.removeWeaponList.active = status;
    }

    /* 根据内容设置排布 */
    //updateRemoveLayOut() {
    //    let len = this.removeWeaponList.children.length;
    //    let diff = (len - 3) > 0 ? len - 3 : 0;
    //    let spaceX = 0 - diff * 10;
    //    this.removeWeaponList.getComponent(Layout).spacingX = spaceX;
    //    this.removeWeaponList.getComponent(Layout).updateLayout(true);
    //}

    updateRemoveLayOut() {
        let len = this.removeWeaponList.children.length;
        let layout = this.removeWeaponList.getComponent(Layout);

        // 设置为网格布局  
        layout.type = Layout.Type.GRID;
        layout.startAxis = Layout.AxisDirection.HORIZONTAL;
        layout.constraint = Layout.Constraint.FIXED_COL;
        layout.constraintNum = 2; // 2列  

        // 设置间距  
        layout.spacingX = 50;
        layout.spacingY = 50;

        layout.updateLayout(true);
    }

    /* 添加到卸下武器列表 */
    onAddRemoveWeaponList(item: Node) {
        item.parent = this.removeWeaponList;
        this.updateRemoveLayOut();
    }

    /* 添加到临时武器列表 */
    onAddPreWeaponList(item: Node) {
        item.parent = this.preWeaponList;
    }

    /* 武器放置完成 */
    onWeaponPlace(weaponItem: WeaponItem) {
        let gridIndexArr = GridData.instance.curWeaponTildeIndex;
        //1.放置 2.替换 3.卸下
        if (gridIndexArr.includes(-1)) {
            //卸下(外合成)
            this.removeSynAction(weaponItem);
        }
        else {
            let isPlace = false; //是否替换和合成
            let synKey = '';//被合成的装备key
            let sanmeCount = 0;//相同wid 数量
            let placeIdArr = []; //替换的武器唯一id(可能多个)
            let gridObjArr: Array<GridObj> = [];
            for (let i = 0; i < gridIndexArr.length; i++) {
                const index = gridIndexArr[i];
                let gridObj = GridData.instance.getGridTiledByIndex(index);
                let gridMapData = GridData.instance.getGridMapData();
                gridObjArr.push(gridObj);
                if (gridMapData[gridObj.row][gridObj.col]) {
                    //占用(替换)
                    if (!isPlace) {
                        isPlace = true;
                    }
                    let weaponKey = gridMapData[gridObj.row][gridObj.col];
                    placeIdArr.push(weaponKey);
                    //检测武器id、等级是否相同
                    if (GridData.instance.checkSameWeapoIdByKey(weaponKey, weaponItem.weaponCfg.Id)) {
                        sanmeCount++;
                        synKey = weaponKey;
                    }
                }
            }
            if (isPlace) {
                //替换或合成(卸下 + 放置)
                //是否有可以合成的下一级别
                let level = weaponItem.weaponCfg.Level;
                let group = weaponItem.weaponCfg.weaponGroupNum;
                if (sanmeCount == gridIndexArr.length && WeaponData.instance.checkWeaponByLevel(level + 1, group)) {
                    weaponItem.node.removeFromParent();
                    //合成(内合成)
                    EventListener.emit(GameEvent.WEAPON_UPGRADE, synKey, true);
                }
                else {
                    //卸下
                    this.weaponRemove(placeIdArr);
                    //放置
                    this.weaponPlace(weaponItem, gridObjArr);
                }

            }
            else {
                //没占用直接放置
                this.weaponPlace(weaponItem, gridObjArr);
            }
        }
        //设置战斗按钮状态
        EventListener.emit(GameEvent.SET_BATTLE_BTN_STATUS);
        //初始状态
        EventListener.emit(GameEvent.WEAPON_ICON_STATUS_INIT);
    }

    /* 卸下 */
    weaponRemove(placeIdArr: Array<string>) {
        for (let i = 0; i < placeIdArr.length; i++) {
            const weaponKey = placeIdArr[i];
            GridData.instance.deletGridDataByWeaponId(weaponKey);
            EventListener.emit(GameEvent.WEAPON_REMOVE, weaponKey);
        }
    }

    /* 卸下合成 */
    removeSynAction(weaponItem: WeaponItem) {
        let startPos = weaponItem.node.getPosition();
        let startR = 100;
        let isSyn: boolean = false;
        let synKey = '';//被合成的装备key
        //检测是否可以外合成
        let itemArr = this.removeWeaponList.children;
        for (let i = 0; i < itemArr.length; i++) {
            const item = itemArr[i];
            if (item.getComponent(WeaponItem)) {
                //是否未武器  非格子
                let wpos = item.getChildByName('icon').getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                let endPos = this.preWeaponList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                let endR = 100;
                if (Intersection2D.circleCircle(v2(startPos.x, startPos.y), startR, v2(endPos.x, endPos.y), endR)) {
                    let itemCom = item.getComponent(WeaponItem);
                    //是否可以合成 相同等级  有可以合成的下一级
                    let level = weaponItem.weaponCfg.Level;
                    let group = weaponItem.weaponCfg.weaponGroupNum;
                    if (weaponItem.weaponCfg.Id == itemCom.weaponCfg.Id && WeaponData.instance.checkWeaponByLevel(level + 1, group)) {
                        isSyn = true;
                        synKey = itemCom.weaponKey;
                    }
                }
            }
        }
        if (isSyn) {
            weaponItem.node.removeFromParent();
            //合成(外合成)
            EventListener.emit(GameEvent.WEAPON_UPGRADE, synKey, false);
        }
        else {
            weaponItem.node.parent = this.removeWeaponList;
            weaponItem.placeStatus = false;
            weaponItem.setNodeAngel();
            this.updateRemoveLayOut();
        }
    }

    /* 放置 */
    weaponPlace(weaponItem: WeaponItem, gridObjArr: Array<GridObj>) {
        weaponItem.node.parent = this.weaponList;
        GridData.instance.addGridDataByWeaponId(gridObjArr, weaponItem.weaponCfg.Id, weaponItem.weaponKey);
        let pos = GridData.instance.getItemPosByTiledObj(gridObjArr);
        weaponItem.node.setPosition(pos);
        weaponItem.placeStatus = true;
        weaponItem.setNodeAngel();
    }

    protected onEnable(): void {
        EventListener.on(GameEvent.ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
        EventListener.on(GameEvent.ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
        EventListener.on(GameEvent.WEAPON_PlACE, this.onWeaponPlace, this);
        EventListener.on(GameEvent.WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
        EventListener.on(GameEvent.INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
        EventListener.off(GameEvent.ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
        EventListener.off(GameEvent.WEAPON_PlACE, this.onWeaponPlace, this);
        EventListener.off(GameEvent.WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
        EventListener.off(GameEvent.INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);

    }

    clear() {
        WeaponData.instance.clear();
    }
}


