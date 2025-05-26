System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, Rect, UITransform, v2, GridData, GridObj, EventListener, GameEvent, GridItem, WeaponData, GridBgItem, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../Weapon/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridItem(extras) {
    _reporterNs.report("GridItem", "../Grid/GridItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridBgItem(extras) {
    _reporterNs.report("GridBgItem", "../Grid/GridBgItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Rect = _cc.Rect;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
      GridObj = _unresolved_2.GridObj;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      GridItem = _unresolved_5.GridItem;
    }, function (_unresolved_6) {
      WeaponData = _unresolved_6.WeaponData;
    }, function (_unresolved_7) {
      GridBgItem = _unresolved_7.GridBgItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40e3bgPqJ9JEqCu6pQ/roWG", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Intersection2D', 'Node', 'Prefab', 'Rect', 'UITransform', 'v2', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = class GridManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "allGridList", _descriptor, this);

          //所有格子列表
          _initializerDefineProperty(this, "gridList", _descriptor2, this);

          _initializerDefineProperty(this, "gridPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "gridBgPrefab", _descriptor4, this);
        }

        //所有格子背景预制体
        init() {
          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.init();
          this.initGridList();
          this.initAllGridList();
        }
        /* 初始所有的背景格子 */


        initAllGridList() {
          let gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_grid;

          for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];

            for (let j = 0; j < element.length; j++) {
              const item = element[j];
              let gridBgItem = instantiate(this.gridBgPrefab);
              gridBgItem.parent = this.allGridList;
              gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).init(i, j, item);
            }
          }
        }

        initGridList() {
          this.gridList.removeAllChildren();
          let gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();

          for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];

            for (let j = 0; j < element.length; j++) {
              const item = element[j];
              let gridItem = instantiate(this.gridPrefab);
              gridItem.parent = this.gridList;
              gridItem.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                error: Error()
              }), GridItem) : GridItem).init(i, j, item);
            }
          }
        }
        /* 初始化格子状态 */


        initGridStatus() {
          let items = this.gridList.children;

          for (let j = 0; j < items.length; j++) {
            const element = items[j];
            element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
              error: Error()
            }), GridItem) : GridItem).setDeafult();
          }
        }
        /**
         * 检测位置状态(检测坐标)
         * @param posArr 
         * @param wid 武器id
         */


        cherGridStatus(posArr, weaponItem) {
          let wid = weaponItem.weaponCfg.Id;
          let gridIndexArr = [];
          let items = this.gridList.children;
          let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();

          for (let n = 0; n < posArr.length; n++) {
            const checkPos = posArr[n];
            let index = -1;

            for (let m = 0; m < items.length; m++) {
              const element = items[m];
              let gridObj = element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                error: Error()
              }), GridItem) : GridItem).gridObj;
              let gridValue = element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                error: Error()
              }), GridItem) : GridItem).gridValue;
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

              if (rect.contains(v2(checkPos.x, checkPos.y)) && gridValue) {
                index = m;
                break;
              }
            }

            gridIndexArr.push(index);
          }

          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.curWeaponTildeIndex = gridIndexArr;
          let placeWeaponKeyArr = []; //被占用可抖动的武器key(多个)

          if (gridIndexArr.includes(-1)) {
            //超出区域(占用和未占用)
            for (let j = 0; j < items.length; j++) {
              const element = items[j];

              if (gridIndexArr.includes(j)) {
                let gridObj = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridTiledByIndex(j); //是否占用

                if (gridMapData[gridObj.row][gridObj.col]) {
                  element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                    error: Error()
                  }), GridItem) : GridItem).setRed(); //被占用的武器抖动状态

                  let weaponKey = gridMapData[gridObj.row][gridObj.col];

                  if (!placeWeaponKeyArr.includes(weaponKey)) {
                    placeWeaponKeyArr.push(weaponKey);
                  }
                } else {
                  element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                    error: Error()
                  }), GridItem) : GridItem).setYellow();
                }
              } else {
                element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                  error: Error()
                }), GridItem) : GridItem).setDeafult();
              }
            }
          } else {
            //未超出区域
            let sanmeCount = 0; //相同wid 数量

            let weaponKey = '';

            for (let j = 0; j < items.length; j++) {
              const element = items[j];

              if (gridIndexArr.includes(j)) {
                element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                  error: Error()
                }), GridItem) : GridItem).setGreen(); //抖动和合成状态

                let gridObj = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridTiledByIndex(j);
                weaponKey = gridMapData[gridObj.row][gridObj.col]; //检测武器id是否相同

                if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.checkSameWeapoIdByKey(weaponKey, wid)) {
                  sanmeCount++;
                } //添加到抖动列表


                if (!placeWeaponKeyArr.includes(weaponKey)) {
                  placeWeaponKeyArr.push(weaponKey);
                }
              } else {
                element.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                  error: Error()
                }), GridItem) : GridItem).setDeafult();
              }
            } //是否达到合成成状态


            if (sanmeCount == gridIndexArr.length) {
              //可以合成(是否合成达到最大等级)
              let level = weaponItem.weaponCfg.Level;
              let group = weaponItem.weaponCfg.weaponGroupNum;

              if ((_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
                error: Error()
              }), WeaponData) : WeaponData).instance.checkWeaponByLevel(level + 1, group)) {
                placeWeaponKeyArr = [];
                weaponItem.setIconYellow();
                (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                  error: Error()
                }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).WEAPON_ICON_STATUS, weaponKey, true);
              }
            }
          } //设置抖动


          for (let index = 0; index < placeWeaponKeyArr.length; index++) {
            const element = placeWeaponKeyArr[index];
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_SHAKE, element);
          }
        }
        /* 武器移动 */


        onWeaponMove(weaponItem) {
          let weaponKey = weaponItem.weaponKey;
          let weaponCfg = weaponItem.weaponCfg;
          let Type = weaponCfg.Type;
          let typeArr = Type.split('_');
          let row = Number(typeArr[0]);
          let col = Number(typeArr[1]);
          let pointPosArr = [];
          let points = weaponCfg.Points;
          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.deletGridDataByWeaponId(weaponKey);

          for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
              if (points[i][j]) {
                //如果位置点存在
                let gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gripObj.row = i;
                gripObj.col = j;
                let tieldPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridPosByTiled(gripObj);
                let wpos = weaponItem.point.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
                let pos = weaponItem.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                pointPosArr.push(pos);
              }
            }
          } //初始状态


          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS_INIT);
          this.cherGridStatus(pointPosArr, weaponItem);
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_MOVE, this.onWeaponMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_PlACE, this.initGridStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_GRID_LIST, this.initGridList, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_MOVE, this.onWeaponMove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_PlACE, this.initGridStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_GRID_LIST, this.initGridList, this);
        }

        clear() {
          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "allGridList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridBgPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2aafca2fc63613f4f74679278b0730de1e7982f.js.map