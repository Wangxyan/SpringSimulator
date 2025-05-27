System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, Component, Node, UITransform, Layout, Sprite, Vec3, v3, UIOpacity, v2, Rect, Label, Constants, EventListener, ResourcesUtil, Util, GridData, GridObj, GameEvent, GridBgItem, WeaponItem, GridBgObj, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, GridMapManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponCfg(extras) {
    _reporterNs.report("WeaponCfg", "../../Model/WeaponModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridBgItem(extras) {
    _reporterNs.report("GridBgItem", "../Grid/GridBgItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponBgItem(extras) {
    _reporterNs.report("WeaponBgItem", "../Weapon/WeaponBgItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../Weapon/WeaponItem", _context.meta, extras);
  }

  _export("GridBgObj", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
      v2 = _cc.v2;
      Rect = _cc.Rect;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      ResourcesUtil = _unresolved_4.ResourcesUtil;
    }, function (_unresolved_5) {
      Util = _unresolved_5.Util;
    }, function (_unresolved_6) {
      GridData = _unresolved_6.GridData;
      GridObj = _unresolved_6.GridObj;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      GridBgItem = _unresolved_8.GridBgItem;
    }, function (_unresolved_9) {
      WeaponItem = _unresolved_9.WeaponItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4c63CTU+5Nc5yMg+A5m9eD", "GridMapManager", undefined);

      __checkObsolete__(['_decorator', 'director', 'Component', 'Node', 'UITransform', 'Layout', 'Sprite', 'Vec3', 'Size', 'v3', 'SpriteFrame', 'UIOpacity', 'Vec2', 'v2', 'Rect', 'tween', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridMapManager", GridMapManager = (_dec = ccclass('GridMapManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property({
        type: Vec3,
        tooltip: "GridList相对于基准点的偏移"
      }), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property({
        type: Vec3,
        tooltip: "WeaponList相对于基准点的偏移"
      }), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property({
        type: Vec3,
        tooltip: "PreWeaponList相对于基准点的偏移"
      }), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Node), _dec(_class = (_class2 = class GridMapManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgs", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "gridList", _descriptor3, this);

          //拥有格子
          _initializerDefineProperty(this, "gridListOffset", _descriptor4, this);

          _initializerDefineProperty(this, "allGridList", _descriptor5, this);

          //所有格子列表
          _initializerDefineProperty(this, "weaponList", _descriptor6, this);

          _initializerDefineProperty(this, "weaponListOffset", _descriptor7, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor8, this);

          _initializerDefineProperty(this, "preWeaponList", _descriptor9, this);

          _initializerDefineProperty(this, "preWeaponListOffset", _descriptor10, this);

          _initializerDefineProperty(this, "preBg", _descriptor11, this);

          // 新增：倒计时相关属性
          _initializerDefineProperty(this, "countdownLabel", _descriptor12, this);

          // 显示倒计时的Label组件
          // 新增：属性显示Label
          _initializerDefineProperty(this, "charmLabel", _descriptor13, this);

          _initializerDefineProperty(this, "knowledgeLabel", _descriptor14, this);

          _initializerDefineProperty(this, "talentLabel", _descriptor15, this);

          _initializerDefineProperty(this, "wealthLabel", _descriptor16, this);

          // 新增：锚点Node（需在Cocos编辑器中绑定）
          _initializerDefineProperty(this, "anchorNode", _descriptor17, this);

          // 作为锚点的特定Node
          // 计时器预设
          this._countdownTime = 63;
          // 初始倒计时60秒（可根据需求调整）
          this._isCounting = false;
          // 计时器是否运行中
          this._gridRes = ['bag1', 'bag1', 'bag3', 'bag5', 'bag5', 'bag6', 'bag6', 'bag7', 'bag7', 'bag8', 'bag8', 'bag9', 'bag'];
          //背包背景图
          this._padding = 220;
          //周围内边距距离
          this.startPoint = null;
          //拥有格子gridList 
          this._isTouch = false;
          //是否被点击
          this._offfSet = new Vec3(0, 0, 0);
          //移动偏移 
          this._startPos = new Vec3(0, 0, 0);
          //weaponList初始位置
          this._placeStatus = false;
          //是否正确放置了
          this._temPos = new Vec3(0, 0, 0);
          this._temPoint = null;
          this._temAddPoint = null;
          //新增格子
          this._mainAreaKey = '1';
          //原区域key 
          this._addPlaceAreaData = new Map();
        }

        //新增放置区域数据  key=>placeAreaKey
        init() {
          this.initGridRes();
          this.initStatPoint(); // 初始显示属性总和

          this.updateAttributeDisplay(); // 新增：初始化倒计时显示

          this._countdownTime = 65; // 重置为60秒

          this._isCounting = true; // 启动计时（或根据实际逻辑控制启动时机）

          if (this.countdownLabel) {
            this.countdownLabel.string = this._countdownTime.toString();
          }
        }
        /* 初始拥有格子在背景格子中的位置 */


        initStatPoint() {
          let max_gridLenArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          let private_gridLenArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.private_gridLen.split('_');
          let startRow = Math.floor((Number(max_gridLenArr[0]) - Number(private_gridLenArr[0])) / 2);
          let startCol = Math.floor((Number(max_gridLenArr[1]) - Number(private_gridLenArr[1])) / 2);
          let gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          gridObj.row = startRow;
          gridObj.col = startCol;
          this.startPoint = gridObj;
        }
        /* 所有格子适配 */


        initAllGridRes() {
          let space = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.space;
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getMaxGridMapSize();
          let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth;
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
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).gridPath + res + '/spriteFrame';
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(path).then(data => {
              sprite.spriteFrame = data;
              let pos = this.resNodePos(i, size, this._padding, gridWidth);

              if (!pos.equals(Vec3.ZERO)) {
                this.bgs[i].setPosition(pos);
              }
            });
          }
        }

        initGridRes() {
          let space = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.space;
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapSize();
          let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth;
          let bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
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
          this.bg.getComponent(Layout).updateLayout(true); // 计算 gridList 的基准位置 (例如，左上角对齐到父节点的某个点)
          // 假设基准点是父节点中心，然后向上向左偏移 size 的一半

          const basePositionX = -size.width / 2;
          const basePositionY = size.height / 2; //this.gridList.setPosition(basePositionX + this.gridListOffset.x, basePositionY + this.gridListOffset.y, this.gridListOffset.z);
          // 设置 weaponList
          // this.weaponList.getComponent(UITransform).setContentSize(size.width, size.height); // 假设它和gridList一样大
          // this.weaponList.setPosition(basePositionX + this.weaponListOffset.x, basePositionY + this.weaponListOffset.y, this.weaponListOffset.z);
          // 或者 weaponList 的位置可以独立于 gridList 的 size
          // this.weaponList.setPosition(this.weaponListOffset.x, this.weaponListOffset.y, this.weaponListOffset.z); // 如果偏移是绝对的
          // 设置 preWeaponList
          // this.preWeaponList.getComponent(UITransform).setContentSize(size.width, size.height); // 假设它和gridList一样大
          // this.preWeaponList.setPosition(basePositionX + this.preWeaponListOffset.x, basePositionY + this.preWeaponListOffset.y, this.preWeaponListOffset.z);
          // 或者 preWeaponList 的位置可以独立于 gridList 的 size
          // this.preWeaponList.setPosition(this.preWeaponListOffset.x, this.preWeaponListOffset.y, this.preWeaponListOffset.z);
          // 固定位置计算方法
          // this.gridList.setPosition(-size.width / 2, (size.height / 2));
          // this.weaponList.setPosition(-size.width / 2, (size.height / 2))
          // this.preWeaponList.setPosition(-size.width / 2, (size.height / 2));
          // 改为直接使用Map对象的Position  
          //let mapPosition = this.getMapPosition();  
          //this.gridList.setPosition(mapPosition.x, mapPosition.y);
          //this.weaponList.setPosition(mapPosition.x, mapPosition.y);
          //this.preWeaponList.setPosition(mapPosition.x, mapPosition.y); 
          // 新增：基于锚点的位置计算

          if (this.anchorNode) {
            // 获取锚点的世界坐标
            const anchorWorldPos = this.anchorNode.getWorldPosition(); // 转换为当前节点的局部坐标

            const localAnchorPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(anchorWorldPos); // 设置背包对象位置（锚点位置 + 偏移量）

            this.gridList.setPosition(localAnchorPos.x + this.gridListOffset.x, localAnchorPos.y + this.gridListOffset.y);
            this.weaponList.setPosition(localAnchorPos.x + this.weaponListOffset.x, localAnchorPos.y + this.weaponListOffset.y);
            this.preWeaponList.setPosition(localAnchorPos.x + this.preWeaponListOffset.x, localAnchorPos.y + this.preWeaponListOffset.y);
          } else {
            // 无锚点时使用默认位置（可选）
            this.gridList.setPosition(-size.width / 2, size.height / 2);
            this.weaponList.setPosition(-size.width / 2, size.height / 2);
            this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
          }

          this.weaponList.getComponent(UITransform).setContentSize(size.width, size.height);
          this.preWeaponList.getComponent(UITransform).setContentSize(size.width, size.height);
          let offerY = Number(rowColArr[0]) > 5 ? 100 : 200; // this.removeWeaponList.setPosition(0, -size.height / 2 - offerY);

          let offerX = size.width / 2 + 800; // 可以根据需要调整距离  

          this.removeWeaponList.setPosition(-offerX, 0);

          for (let i = 0; i < this._gridRes.length; i++) {
            const res = this._gridRes[i];
            let sprite = this.bgs[i].getComponent(Sprite);
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).gridPath + res + '/spriteFrame';
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(path).then(data => {
              sprite.spriteFrame = data;
              let pos = this.resNodePos(i, size, this._padding, gridWidth);

              if (!pos.equals(Vec3.ZERO)) {
                this.bgs[i].setPosition(pos);
              }
            });
          }
        }

        resNodePos(i, size, padding, gridWidth) {
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
              pos = v3(size.width / 2 + padding / 2 / 3, size.height / 2 - 30, 0);
              break;

            case 11:
              pos = v3(0, size.height / 2 - padding / 2 + 20, 0);
              this.bgs[i].getComponent(UITransform).width = size.width;
              break;
          }

          return pos;
        }
        /* 设置节点透明度 */


        setNodeOpacity(value) {
          this.weaponList.getComponent(UIOpacity).opacity = value;

          for (let i = 0; i < this.removeWeaponList.children.length; i++) {
            const element = this.removeWeaponList.children[i];

            if (element.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
              error: Error()
            }), WeaponItem) : WeaponItem)) {
              element.getComponent(UIOpacity).opacity = value;
            }
          }
        }
        /* 设置区域占位key */


        setMainPlaceAreaKey(startGridObj) {
          let gripObjArr = this.getGridMapObjArr();
          let items = this.allGridList.children;
          let data = [];

          for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index];
            let griddata = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridMapData();
            let value = griddata[subGridObj.row][subGridObj.col];
            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
              error: Error()
            }), GridObj) : GridObj)();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = this._mainAreaKey;
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridValue = value;
          }

          let gridBgObj = new GridBgObj();
          gridBgObj.item = this.weaponList;
          gridBgObj.data = data;

          this._addPlaceAreaData.set(this._mainAreaKey, gridBgObj);
        }
        /* 设置新增格子区域的占位key */
        // setAddPlaceAreaKey(weaponBgItem: WeaponBgItem) {
        //     let startGridObj = this._temAddPoint;
        //     let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
        //     let items = this.allGridList.children;
        //     let data: Array<GridObj> = [];
        //     for (let index = 0; index < gripObjArr.length; index++) {
        //         const subGridObj = gripObjArr[index];
        //         let row = startGridObj.row + subGridObj.row;
        //         let col = startGridObj.col + subGridObj.col;
        //         let newGridObj = new GridObj();
        //         newGridObj.row = row;
        //         newGridObj.col = col;
        //         data.push(newGridObj);
        //         let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
        //         let gridBgItem = items[newIndex];
        //         gridBgItem.getComponent(GridBgItem).placeAreaKey = weaponBgItem.weaponKey;
        //     }
        //     let gridBgObj = new GridBgObj();
        //     gridBgObj.item = weaponBgItem.node;
        //     gridBgObj.data = data;
        //     this._addPlaceAreaData.set(weaponBgItem.weaponKey, gridBgObj);
        // }

        /* 设置新增格子区域的占位key */


        setAddPlaceAreaKey(weaponBgItem) {
          let startGridObj = this._temAddPoint;
          let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
          let items = this.allGridList.children;
          let data = []; // 这些是武器占用的绝对格子坐标
          // ... (计算 data: Array<GridObj>) ...
          // 你需要确保这里的 gripObjArr 是武器在 allGridList 中的绝对坐标，而不是相对武器自身的。
          // 当前的 gripObjArr 是相对武器自身的，需要结合 _temAddPoint 转换。

          let absoluteGridObjArr = [];

          for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index]; // 武器内部的相对坐标

            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
              error: Error()
            }), GridObj) : GridObj)();
            newGridObj.row = row;
            newGridObj.col = col;
            absoluteGridObjArr.push(newGridObj); // 收集绝对坐标

            let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = weaponBgItem.weaponKey;
          }

          let gridBgObj = new GridBgObj();
          gridBgObj.item = weaponBgItem.node;
          gridBgObj.data = absoluteGridObjArr; // 使用绝对坐标

          this._addPlaceAreaData.set(weaponBgItem.weaponKey, gridBgObj); // !!! 关键改动: 在这里将武器数据添加到 GridData，并触发事件 !!!
          // 这个前提是 setAddPlaceAreaKey 意味着这个武器已经被“初步确认”放置了。
          // 如果后续可能会取消，则这个时机不对。
          // 更好的时机可能是在 onPlaceGridFinish 内部，当所有武器都确定了最终位置之后。
          // ---- 下面的逻辑需要根据你的“确认”流程来调整触发时机 ----

        }
        /* 清除区域key 和区域值 */


        delPlaceAreaKey(key) {
          let items = this.allGridList.children;

          for (let index = 0; index < items.length; index++) {
            const gridBgItem = items[index];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).delPlaceAreaKey(key);
          }
        }

        getConnectStatus(gridObj) {
          let isConnect = false;
          let bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
          let row_col = bagCfg.max_gridLen.split('_');

          if (gridObj.row >= 0 && gridObj.col >= 0 && gridObj.row <= Number(row_col[0]) - 1 && gridObj.col <= Number(row_col[1]) - 1) {
            let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridBgIndexByTiled(gridObj.row, gridObj.col);
            let item = this.allGridList.children[index];

            if (item.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey == this._mainAreaKey) {
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
                const gridObj = data[i]; //上

                let upObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                upObj.row = gridObj.row - 1;
                upObj.col = gridObj.col;

                if (!isConnect) {
                  isConnect = this.getConnectStatus(upObj);
                } //下


                let downObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                downObj.row = gridObj.row + 1;
                downObj.col = gridObj.col;

                if (!isConnect) {
                  isConnect = this.getConnectStatus(downObj);
                } //左


                let leftObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                leftObj.row = gridObj.row;
                leftObj.col = gridObj.col - 1;

                if (!isConnect) {
                  isConnect = this.getConnectStatus(leftObj);
                } //右


                let rightObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
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
              } else {
                (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                  error: Error()
                }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, item);

                this._addPlaceAreaData.delete(key);

                this.delPlaceAreaKey(key);
              }
            }
          });
        }
        /* 重组拥有格子数据 */


        rebuildGridData() {
          let data = [];

          this._addPlaceAreaData.forEach((gridBgObj, key) => {
            let gridObjArr = gridBgObj.data;
            data = data.concat(gridObjArr);
          });

          let rowMinMax = [];
          let colMinMax = [];
          data.sort((x, y) => {
            return x.row - y.row;
          });
          rowMinMax.push(data[0].row);
          rowMinMax.push(data[data.length - 1].row);
          data.sort((x, y) => {
            return x.col - y.col;
          });
          colMinMax.push(data[0].col);
          colMinMax.push(data[data.length - 1].col); //重组新格子数据

          let newdata = [];
          let items = this.allGridList.children;

          for (let i = rowMinMax[0]; i <= rowMinMax[1]; i++) {
            let rowData = [];

            for (let j = colMinMax[0]; j <= colMinMax[1]; j++) {
              let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridBgIndexByTiled(i, j);
              let gridBgItem = items[index];
              let value = gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).placeAreaKey ? gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).gridValue : '';
              rowData.push(value);
            }

            newdata.push(rowData);
          }

          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.setRebuildGridMapData(newdata);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_GRID_LIST);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_WEAPON_POS);
          this.startPoint.row = rowMinMax[0];
          this.startPoint.col = colMinMax[0];
        }
        /* 调试查看数据 */


        debugAllList() {
          let items = this.allGridList.children;
          let data = [];

          for (let i = 0; i < 7; i++) {
            let a = [];

            for (let j = 0; j < 5; j++) {
              let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridBgIndexByTiled(i, j);
              let value = items[index].getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).placeAreaKey;
              a.push(value);
            }

            data.push(a);
          }
        }
        /* 调试查看数据 */


        debugAllListValue() {
          let items = this.allGridList.children;
          let data = [];

          for (let i = 0; i < 7; i++) {
            let a = [];

            for (let j = 0; j < 5; j++) {
              let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridBgIndexByTiled(i, j);
              let value = items[index].getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).gridValue;
              a.push(value);
            }

            data.push(a);
          }
        }
        /* 调试查看数据 */


        debugAllListGridObj() {
          let items = this.allGridList.children;
          let data = [];

          for (let i = 0; i < 7; i++) {
            let a = [];

            for (let j = 0; j < 5; j++) {
              let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridBgIndexByTiled(i, j);
              let gridObj = items[index].getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).gridObj;
              a.push(gridObj);
            }

            data.push(a);
          }
        }
        /* 放置新增格子开始 */


        onPlaceGridStart(weaponBgItem) {
          if (!this.allGridList.active) {
            this.initAllGridListPlaceValue();
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridEditMode = true;
            this.gridList.parent = this.preBg;
            weaponBgItem.node.parent = this.node;
            this.allGridList.active = true; //设置透明度

            this.setNodeOpacity(100);
            this.initAllGridRes();
            this.node.parent.getComponent(UITransform).height = this.allGridList.getComponent(UITransform).height;
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SHOW_HIDE_PLACE_LIST, true); //设置拥有格子列表位置

            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(this.startPoint);
            let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
            let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            this.gridList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.weaponList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.setMainPlaceAreaKey(this.startPoint);
          }

          this.delPlaceAreaKey(weaponBgItem.weaponKey);
        }
        /* 放置新增格子移动 */


        onPlaceGridMove(weaponBgItem) {
          weaponBgItem.node.parent = this.node;
          this.initAllGridListTips();
          let firstGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          firstGridObj.row = 0;
          firstGridObj.col = 0;
          let tieldPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridPosByTiled(firstGridObj);
          let wpos = weaponBgItem.point.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
          let checkPos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          let items = this.allGridList.children;
          let all_row_col = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          this._placeStatus = false;

          for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridObj;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
            let width = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let height = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);

            if (rect.contains(v2(checkPos.x, checkPos.y))) {
              let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
              let placeArr = []; //0 为未放置

              for (let index = 0; index < gripObjArr.length; index++) {
                const subGridObj = gripObjArr[index];
                let row = gridObj.row + subGridObj.row;
                let col = gridObj.col + subGridObj.col;

                if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                  let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                    error: Error()
                  }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
                  let gridBgItem = items[newIndex]; //检测格子占用

                  if (!gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                    error: Error()
                  }), GridBgItem) : GridBgItem).placeAreaKey) {
                    gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                      error: Error()
                    }), GridBgItem) : GridBgItem).setTipsGreen();
                    placeArr.push(1);
                  } else {
                    placeArr.push(0);
                  }
                } else {
                  placeArr.push(0);
                }
              }

              if (placeArr.includes(0)) {
                this._placeStatus = false;
              } else {
                this._placeStatus = true; //设置新坐标

                let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                let startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                let points = weaponBgItem.weaponCfg.Points;
                let data = [];

                for (let n = 0; n < points.length; n++) {
                  const element = points[n];

                  for (let m = 0; m < element.length; m++) {
                    let gridObj1 = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                      error: Error()
                    }), GridObj) : GridObj)();
                    gridObj1.row = n;
                    gridObj1.col = m;
                    data.push(gridObj1);
                  }
                }

                const endGridObj = data[data.length - 1];
                let newEndObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                newEndObj.row = gridObj.row + endGridObj.row;
                newEndObj.col = gridObj.col + endGridObj.col;
                let pos1 = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridPosByTiled(newEndObj);
                let wpos1 = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos1);
                let endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos1);
                let centePos = new Vec3(0, 0, 0);
                centePos.x = (startPos.x + endPos.x) / 2;
                centePos.y = (startPos.y + endPos.y) / 2;
                this._temPos = centePos;
                this._temAddPoint = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                  error: Error()
                }), Util) : Util).clone(gridObj);
              }

              break;
            }
          }
        }
        /* 放置新增格子完成 */


        onPlaceGridEnd(weaponBgItem) {
          let item = weaponBgItem.node;
          this.initAllGridListTips();

          if (this._placeStatus) {
            item.setPosition(this._temPos);
            this.setAddPlaceAreaKey(weaponBgItem);
          } // else {
          //     EventListener.emit(GameEvent.ADD_REMOVE_WEAPON_LIST, item);
          //     this._addPlaceAreaData.delete(weaponBgItem.weaponKey);
          // }
          // this._placeStatus = false;
          else {
            // 如果放置状态无效（比如拖到了不可放置区域或部分重叠）
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, item); // 将武器送回待移除列表

            this._addPlaceAreaData.delete(weaponBgItem.weaponKey); // 从尝试放置区域中移除


            this.delPlaceAreaKey(weaponBgItem.weaponKey); // 清除其在 allGridList 上的占位标记
          }

          this._placeStatus = false; // 重置放置状态，为下一个武器拖拽做准备

          this._temPos.set(0, 0, 0); // 重置临时位置


          this._temAddPoint = null; // 重置临时添加点
        }
        /* 放置格子确定 */


        onPlaceGridFinish() {
          if (this.allGridList.active) {
            this.checkAddAreaGridData();
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridEditMode = false;
            this.allGridList.active = false;
            this.gridList.parent = this.bg; //设置透明度

            this.setNodeOpacity(255);
            this.initGridRes();
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SHOW_HIDE_PLACE_LIST, false); // 触发属性更新

            console.log("GridMapManager: onPlaceGridFinish - Triggering REFRESH_ATTRIBUTES");
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).REFRESH_ATTRIBUTES); // 创建一个新的事件名，或复用，但要确保 GridMapManager 监听它
          }
        }
        /* 获取拥有格子里的第一个有格子的数据 */


        getFirstGridObj() {
          let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let gripObjArr = [];
          let gripObj = null;

          for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
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
          let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let gripObjArr = [];

          for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gripObj.row = i;
                gripObj.col = j;
                gripObjArr.push(gripObj);
              }
            }
          }

          return gripObjArr;
        }

        getPointGridObjArr(weaponCfg) {
          let point = weaponCfg.Points;
          let gripObjArr = [];

          for (let i = 0; i < point.length; i++) {
            const element = point[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
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
            gridBg.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).setTipsDefault();
          }
        }
        /* 初始格子占有 */


        initAllGridListPlaceValue() {
          let items = this.allGridList.children;

          for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = '';
          }
        }
        /* 检测坐标是否在格子中 */


        checkAllGridListByPos(checkPos) {
          let items = this.allGridList.children;
          let all_row_col = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          this._placeStatus = false;

          for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridObj;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
            let width = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let height = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);

            if (rect.contains(v2(checkPos.x, checkPos.y))) {
              let gripObjArr = this.getGridMapObjArr();
              let placeArr = []; //0 为未放置

              for (let index = 0; index < gripObjArr.length; index++) {
                const subGridObj = gripObjArr[index];
                let row = gridObj.row + subGridObj.row;
                let col = gridObj.col + subGridObj.col;

                if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                  let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                    error: Error()
                  }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
                  let gridBgItem = items[newIndex]; //是否格子占用

                  if (!gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                    error: Error()
                  }), GridBgItem) : GridBgItem).placeAreaKey) {
                    gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                      error: Error()
                    }), GridBgItem) : GridBgItem).setTipsGreen();
                    placeArr.push(1);
                  } else {
                    placeArr.push(0);
                  }
                } else {
                  placeArr.push(0);
                }
              }

              if (placeArr.includes(0)) {
                this._placeStatus = false;
              } else {
                this._placeStatus = true;
                let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridWidth;
                let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridHeight;
                this._temPos.x = newPos.x - gridWidth / 2;
                this._temPos.y = newPos.y + gridHeight / 2;
                this._temPoint = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                  error: Error()
                }), Util) : Util).clone(gridObj);
              }

              break;
            }
          }
        }
        /* 设置移动提示 */


        setGridMoveTips() {
          this.initAllGridListTips(); //检测第一个格子是否在所有格子里中

          let firstGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          firstGridObj.row = 0;
          firstGridObj.col = 0;
          let tieldPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridPosByTiled(firstGridObj);
          let wpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
          let pos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          this.checkAllGridListByPos(pos);
        }
        /*放置拥有格子触摸点击 */


        onTouchStart(wpos) {
          //是否触摸到拥有格子列表
          let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0)); //坐标在可用格子中时

          let gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let touched = false;

          for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gridObj.row = i;
                gridObj.col = j;
                let gridPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
                let gridWpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(gridPos);
                let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(gridWpos);
                let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridWidth;
                let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridHeight;
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

          if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridEditMode && touched) {
            this._isTouch = true;
            this._offfSet = this.weaponList.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this._startPos = this.weaponList.getPosition();
            this.delPlaceAreaKey(this._mainAreaKey);
          }
        }
        /* 放置拥有格子移动 */


        onTouchMove(wpos) {
          if (this._isTouch) {
            let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            let pos = new Vec3(touchPos.x - this._offfSet.x, touchPos.y - this._offfSet.y);
            this.gridList.setPosition(pos);
            this.weaponList.setPosition(pos); //设置移动提示

            this.setGridMoveTips();
          }
        }
        /* 放置拥有格子完成 */


        onTouchEnd(wpos) {
          if (this._isTouch) {
            this._isTouch = false; //是否放置或还原

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

        onTouchCancle(wpos) {
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
        } // 新增：每帧更新计时器


        update(deltaTime) {
          this.updateAttributeDisplay(); // 每帧调用属性更新

          if (this._isCounting && this._countdownTime > 0) {
            this._countdownTime -= deltaTime; // 更新UI显示（保留2位小数或取整）
            // this.countdownLabel.string = Math.ceil(this._countdownTime).toString();
            // 更新UI显示，修改为显示“时间还有xx秒”

            this.countdownLabel.string = `购物时间还有${Math.ceil(this._countdownTime)}秒`; // 时间归零处理

            if (this._countdownTime <= 0) {
              this._isCounting = false;
              this.onCountdownEnd(); // 触发倒计时结束逻辑
            }
          }
        }

        onCountdownEnd() {
          // 跳转场景（替换为实际场景名称）
          director.loadScene('Game_1'); // 示例：跳转到游戏结束场景
          // 可选：发送事件通知其他模块（如根据项目事件系统）
          // EventListener.emit(GameEvent.COUNTDOWN_END);
        }

        onEnable() {
          //放置新增格子监听
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_START, this.onPlaceGridStart, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_MOVE, this.onPlaceGridMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_END, this.onPlaceGridEnd, this); //放置拥有格子监听

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_START, this.onTouchStart, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_MOVE, this.onTouchMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_END, this.onTouchEnd, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_CANCLE, this.onTouchEnd, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLEAR_AREA_DATA, this.onClearAreaData, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_PlACE, this.updateAttributeDisplay, this); // 武器放置事件

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_REMOVE, this.updateAttributeDisplay, this); // 武器移除事件

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_UPGRADE, this.updateAttributeDisplay, this); // 武器合成事件

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).REFRESH_ATTRIBUTES, this.updateAttributeDisplay, this); //属性更新时间
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_START, this.onPlaceGridStart, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_MOVE, this.onPlaceGridMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_END, this.onPlaceGridEnd, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_START, this.onTouchStart, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_MOVE, this.onTouchMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_END, this.onTouchEnd, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TOUCH_CANCLE, this.onTouchEnd, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLEAR_AREA_DATA, this.onClearAreaData, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).REFRESH_ATTRIBUTES, this.updateAttributeDisplay, this);
        }
        /** 更新属性显示 */


        updateAttributeDisplay() {
          const totalAttrs = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getTotalAttributes();
          this.charmLabel.string = `魅力: ${totalAttrs.charm}`;
          this.knowledgeLabel.string = `知识: ${totalAttrs.knowledge}`;
          this.talentLabel.string = `才艺: ${totalAttrs.talent}`;
          this.wealthLabel.string = `财富: ${totalAttrs.wealth}`;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridListOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "allGridList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "weaponList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weaponListOffset", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "preWeaponList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "preWeaponListOffset", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "preBg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "countdownLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "charmLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "knowledgeLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "talentLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "wealthLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "anchorNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("GridBgObj", GridBgObj = class GridBgObj {
        constructor() {
          this.data = void 0;
          //位置数据
          this.item = void 0;
        } //区域节点


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95eb34543751f41a4eee198384855da1e116cee8.js.map