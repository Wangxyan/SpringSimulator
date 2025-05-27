System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Intersection2D, Layout, Node, UITransform, v2, v3, GridData, ResourcesUtil, CoinObj, WeaponData, EventListener, GameEvent, Util, Constants, WeaponItem, WeaponBgItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WeaponManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponObj(extras) {
    _reporterNs.report("WeaponObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinObj(extras) {
    _reporterNs.report("CoinObj", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../Weapon/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponBgItem(extras) {
    _reporterNs.report("WeaponBgItem", "../Weapon/WeaponBgItem", _context.meta, extras);
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
      Intersection2D = _cc.Intersection2D;
      Layout = _cc.Layout;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
    }, function (_unresolved_3) {
      ResourcesUtil = _unresolved_3.ResourcesUtil;
    }, function (_unresolved_4) {
      CoinObj = _unresolved_4.CoinObj;
      WeaponData = _unresolved_4.WeaponData;
    }, function (_unresolved_5) {
      EventListener = _unresolved_5.EventListener;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      Util = _unresolved_7.Util;
    }, function (_unresolved_8) {
      Constants = _unresolved_8.Constants;
    }, function (_unresolved_9) {
      WeaponItem = _unresolved_9.WeaponItem;
    }, function (_unresolved_10) {
      WeaponBgItem = _unresolved_10.WeaponBgItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89793GPOqNFqIh+e1RC7vod", "WeaponManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Intersection2D', 'Layout', 'Node', 'Prefab', 'UITransform', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponManager", WeaponManager = (_dec = ccclass('WeaponManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class WeaponManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "weaponList", _descriptor, this);

          _initializerDefineProperty(this, "preWeaponList", _descriptor2, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor3, this);
        }

        init() {
          (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.init();
          this.initWeaponListPos();
          this.initWeaponList();
          this.initRemoveWeaponList();
        }

        initWeaponListPos() {
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapSize();
          this.weaponList.setPosition(-size.width / 2, size.height / 2);
          this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
        }

        initWeaponList() {
          let itemData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemMapData();
          itemData.forEach((weaponObj, key) => {
            let gridObjArr = weaponObj.data;
            let weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgById(weaponObj.wid);
            let res = weaponCfg.Type;
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).weaponPath;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(itemPrefab => {
              let weaponItem = instantiate(itemPrefab);
              weaponItem.parent = this.weaponList;
              weaponItem.setPosition(pos);
              weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                error: Error()
              }), WeaponItem) : WeaponItem).init(weaponCfg, key, true);
            });
          });
        }
        /* 初始化卸下(掉落)的武器列表 */


        initRemoveWeaponList() {
          //调试获取1级武器
          this.removeWeaponList.removeAllChildren();
          let weaponIdData = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getWeaponPool(); //生成格子

          let placeId = this.getPlaceGridId();

          if (placeId) {
            let randIndex = Math.floor(Math.random() * weaponIdData.length);
            weaponIdData.splice(randIndex, 1, placeId);
          }

          for (let i = 0; i < weaponIdData.length; i++) {
            let weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgById(weaponIdData[i]);
            let key = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getUuid(10);
            let path = weaponCfg.itemType ? (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).weaponPath : (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).weaponBgPath;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(itemPrefab => {
              let weaponItem = instantiate(itemPrefab);
              weaponItem.parent = this.removeWeaponList;

              if (weaponCfg.itemType) {
                weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                  error: Error()
                }), WeaponItem) : WeaponItem).init(weaponCfg, key, false);
              } else {
                //格子
                weaponItem.getComponent(_crd && WeaponBgItem === void 0 ? (_reportPossibleCrUseOfWeaponBgItem({
                  error: Error()
                }), WeaponBgItem) : WeaponBgItem).init(weaponCfg, key, false);
              }

              this.updateRemoveLayOut();
            });
          }
        }
        /* 获取可以放置的搁置id 
          0：未占位 1：占位
        */


        getPlaceGridId() {
          let bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
          let row_col = bagCfg.max_gridLen.split('_');
          let row = Number(row_col[0]);
          let col = Number(row_col[1]);
          let data = [];
          let placeId = 0;

          for (let i = 0; i < row; i++) {
            let element = [];

            for (let j = 0; j < col; j++) {
              element.push(1);
            }

            data.push(element);
          }

          let gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();

          for (let n = 0; n < gridData.length; n++) {
            const element = gridData[n];

            for (let m = 0; m < element.length; m++) {
              const value = element[m];

              if (value) {
                data[n][m] = 0;
              }
            }
          }

          placeId = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getPlaceGridIdByWeigh(data);
          return placeId;
        }
        /* 重组武器的位置 */


        onRebuildWeaponPos() {
          let itemData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemMapData();
          itemData.forEach((weaponObj, key) => {
            let gridObjArr = weaponObj.data;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
            let items = this.weaponList.children;

            for (let index = 0; index < items.length; index++) {
              const weaponItem = items[index];
              weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                error: Error()
              }), WeaponItem) : WeaponItem).setBuildWeaponPos(key, pos);
            }
          });
        }
        /* 转换飞的金币动画 */


        showFlyGoldAnim() {
          if (this.removeWeaponList.children.length) {
            let items = this.removeWeaponList.children;

            for (let i = 0; i < items.length; i++) {
              const element = items[i];
              let coinObj = new (_crd && CoinObj === void 0 ? (_reportPossibleCrUseOfCoinObj({
                error: Error()
              }), CoinObj) : CoinObj)();
              coinObj.wpos = element.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              coinObj.num = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getRandomInt(5, 10);
              (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                error: Error()
              }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).WEAPON_CHANGE_COIN, coinObj);
            }
          }
        }
        /* 隐藏显示卸载列表 */


        showHideRemoveList(status) {
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
          let layout = this.removeWeaponList.getComponent(Layout); // 设置为网格布局  

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


        onAddRemoveWeaponList(item) {
          item.parent = this.removeWeaponList;
          this.updateRemoveLayOut();
        }
        /* 添加到临时武器列表 */


        onAddPreWeaponList(item) {
          item.parent = this.preWeaponList;
        }
        /* 武器放置完成 */


        onWeaponPlace(weaponItem) {
          let gridIndexArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.curWeaponTildeIndex; //1.放置 2.替换 3.卸下

          if (gridIndexArr.includes(-1)) {
            //卸下(外合成)
            this.removeSynAction(weaponItem);
          } else {
            let isPlace = false; //是否替换和合成

            let synKey = ''; //被合成的装备key

            let sanmeCount = 0; //相同wid 数量

            let placeIdArr = []; //替换的武器唯一id(可能多个)

            let gridObjArr = [];

            for (let i = 0; i < gridIndexArr.length; i++) {
              const index = gridIndexArr[i];
              let gridObj = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridTiledByIndex(index);
              let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridMapData();
              gridObjArr.push(gridObj);

              if (gridMapData[gridObj.row][gridObj.col]) {
                //占用(替换)
                if (!isPlace) {
                  isPlace = true;
                }

                let weaponKey = gridMapData[gridObj.row][gridObj.col];
                placeIdArr.push(weaponKey); //检测武器id、等级是否相同

                if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.checkSameWeapoIdByKey(weaponKey, weaponItem.weaponCfg.Id)) {
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

              if (sanmeCount == gridIndexArr.length && (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
                error: Error()
              }), WeaponData) : WeaponData).instance.checkWeaponByLevel(level + 1, group)) {
                weaponItem.node.removeFromParent(); //合成(内合成)

                (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                  error: Error()
                }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).WEAPON_UPGRADE, synKey, true);
              } else {
                //卸下
                this.weaponRemove(placeIdArr); //放置

                this.weaponPlace(weaponItem, gridObjArr);
              }
            } else {
              //没占用直接放置
              this.weaponPlace(weaponItem, gridObjArr);
            }
          } //设置战斗按钮状态


          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SET_BATTLE_BTN_STATUS); //初始状态

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS_INIT);
        }
        /* 卸下 */


        weaponRemove(placeIdArr) {
          for (let i = 0; i < placeIdArr.length; i++) {
            const weaponKey = placeIdArr[i];
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.deletGridDataByWeaponId(weaponKey);
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_REMOVE, weaponKey);
          }
        }
        /* 卸下合成 */


        removeSynAction(weaponItem) {
          let startPos = weaponItem.node.getPosition();
          let startR = 100;
          let isSyn = false;
          let synKey = ''; //被合成的装备key
          //检测是否可以外合成

          let itemArr = this.removeWeaponList.children;

          for (let i = 0; i < itemArr.length; i++) {
            const item = itemArr[i];

            if (item.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
              error: Error()
            }), WeaponItem) : WeaponItem)) {
              //是否未武器  非格子
              let wpos = item.getChildByName('icon').getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              let endPos = this.preWeaponList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
              let endR = 100;

              if (Intersection2D.circleCircle(v2(startPos.x, startPos.y), startR, v2(endPos.x, endPos.y), endR)) {
                let itemCom = item.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                  error: Error()
                }), WeaponItem) : WeaponItem); //是否可以合成 相同等级  有可以合成的下一级

                let level = weaponItem.weaponCfg.Level;
                let group = weaponItem.weaponCfg.weaponGroupNum;

                if (weaponItem.weaponCfg.Id == itemCom.weaponCfg.Id && (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
                  error: Error()
                }), WeaponData) : WeaponData).instance.checkWeaponByLevel(level + 1, group)) {
                  isSyn = true;
                  synKey = itemCom.weaponKey;
                }
              }
            }
          }

          if (isSyn) {
            weaponItem.node.removeFromParent(); //合成(外合成)

            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_UPGRADE, synKey, false);
          } else {
            weaponItem.node.parent = this.removeWeaponList;
            weaponItem.placeStatus = false;
            weaponItem.setNodeAngel();
            this.updateRemoveLayOut();
          }
        }
        /* 放置 */


        weaponPlace(weaponItem, gridObjArr) {
          weaponItem.node.parent = this.weaponList;
          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.addGridDataByWeaponId(gridObjArr, weaponItem.weaponCfg.Id, weaponItem.weaponKey);
          let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
          weaponItem.node.setPosition(pos);
          weaponItem.placeStatus = true;
          weaponItem.setNodeAngel();
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_PlACE, this.onWeaponPlace, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_PlACE, this.onWeaponPlace, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);
        }

        clear() {
          (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "preWeaponList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec4], {
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
//# sourceMappingURL=6c371e21a77cf1e0d151bf9efb7d843044ac8670.js.map