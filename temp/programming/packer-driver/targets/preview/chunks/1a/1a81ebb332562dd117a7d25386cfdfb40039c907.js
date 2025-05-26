System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, instantiate, Label, ProgressBar, Sprite, Tween, tween, UITransform, v2, v3, Vec3, GameEvent, EventListener, ResourcesUtil, BaseComponent, WeaponData, SynItem, GridData, GridObj, Constants, AudioManager, OpenPopupManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, WeaponItem, TouchStatus;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWeaponCfg(extras) {
    _reporterNs.report("WeaponCfg", "../../Model/WeaponModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSynItem(extras) {
    _reporterNs.report("SynItem", "../Battle/SynItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Frame/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../../Frame/OpenPopupManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameEvent = _unresolved_2.GameEvent;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      ResourcesUtil = _unresolved_4.ResourcesUtil;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.default;
    }, function (_unresolved_6) {
      WeaponData = _unresolved_6.WeaponData;
    }, function (_unresolved_7) {
      SynItem = _unresolved_7.SynItem;
    }, function (_unresolved_8) {
      GridData = _unresolved_8.GridData;
      GridObj = _unresolved_8.GridObj;
    }, function (_unresolved_9) {
      Constants = _unresolved_9.Constants;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }, function (_unresolved_11) {
      OpenPopupManager = _unresolved_11.OpenPopupManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25dfdn2NRZPKLZpIOwY85wi", "WeaponItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTouch', 'Input', 'input', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'SpriteFrame', 'Tween', 'tween', 'UITransform', 'v2', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponItem", WeaponItem = (_dec = ccclass('WeaponItem'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(ProgressBar), _dec(_class = (_class2 = class WeaponItem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "level", _descriptor, this);

          _initializerDefineProperty(this, "icon", _descriptor2, this);

          _initializerDefineProperty(this, "bar", _descriptor3, this);

          _initializerDefineProperty(this, "progressBar", _descriptor4, this);

          this._touchStatus = 0;
          //当前触摸状态
          this._weaponKey = '';
          //唯一值
          this._weaponCfg = null;
          this._point = null;
          this._pointGridObj = [];
          //占用点位置
          this._isShake = false;
          //是否抖动
          this._placeStatus = true;
          //true:放置  false:卸下
          this._isTouch = false;
        }

        //是否被点击
        get point() {
          return this._point;
        }

        get weaponCfg() {
          return this._weaponCfg;
        }

        get weaponKey() {
          return this._weaponKey;
        }

        set placeStatus(value) {
          this._placeStatus = value;
        }

        init(weaponCfg, weaponKey, placeStatus) {
          this._pointGridObj = [];
          this._placeStatus = placeStatus;
          this._weaponKey = weaponKey;
          this._weaponCfg = weaponCfg;
          this._isShake = false;
          this._point = this.node.getChildByName('point');
          this.level.string = "Lv" + weaponCfg.Level;
          this.progressBar.progress = 0;
          this.initWeaponSize();
          this.setPointPosArr();
          this.setWeaponIcon();
          this.setNodeAngel();
        }
        /* 初始武器格子尺寸 */


        initWeaponSize() {
          var typeArr = this._weaponCfg.Type.split('_');

          var rowLen = Number(typeArr[1]);
          var colLen = Number(typeArr[0]);
          var size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridSizeByRowCol(rowLen, colLen);
          var scale = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.iconScale;
          this.node.getComponent(UITransform).setContentSize(size);
          this.point.setPosition(-size.width / 2, size.height / 2);
          this.icon.node.setScale(scale, scale, scale);
        }
        /* 设置点坐标 */


        setPointPosArr() {
          this._pointGridObj = [];
          var point = this._weaponCfg.Points;

          for (var i = 0; i < point.length; i++) {
            var item = point[i];

            for (var j = 0; j < item.length; j++) {
              var element = item[j];

              if (element) {
                var gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gridObj.row = i;
                gridObj.col = j;

                this._pointGridObj.push(gridObj);
              }
            }
          }
        }
        /* 设置武器图标 */


        setWeaponIcon() {
          var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).weaponIconPath + this.weaponCfg.Res + '/spriteFrame';
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(path).then(data => {
            this.icon.spriteFrame = data;
            this.bar.spriteFrame = data;
            var size = this.icon.getComponent(UITransform).contentSize;
            this.bar.node.setPosition(v3(0, -size.height / 2, 0));
          });
        }
        /* 设置重组后武器的位置 */


        setBuildWeaponPos(key, pos) {
          if (this._weaponKey == key) {
            this.node.setPosition(pos);
          }
        }

        setIconYellow() {
          this.icon.getComponent(Sprite).color = new Color().fromHEX('dbc464');
        }

        setIconDefault() {
          this.icon.getComponent(Sprite).color = new Color().fromHEX('ffffff');
        }

        onSetIconStatus(id, status) {
          if (this.weaponKey == id) {
            if (status) {
              this.setIconYellow();
            } else {
              this.setIconDefault();
            }
          }
        }

        setNodeAngel() {
          var angle = this._placeStatus ? 0 : 10;
          this.node.angle = angle;
        }
        /* 更新技能进度条 */


        onUpdateProgressBar(value, id) {
          if (this.weaponKey == id) {
            this.progressBar.progress = value;
          }
        }

        onSetStatusInit() {
          this.setIconDefault();
          this._isShake = false;
          Tween.stopAllByTarget(this.icon.node);
        }

        onSetIconShake(id) {
          if (this.weaponKey == id) {
            //抖动
            if (!this._isShake) {
              this._isShake = true;
              var posX = 5;
              var time = 0.1;
              this.icon.node.setPosition(0, 0, 0);
              tween(this.icon.node).by(time, {
                position: v3(-posX, 0, 0)
              }).by(time, {
                position: v3(posX, 0, 0)
              }).by(time, {
                position: v3(posX, 0, 0)
              }).by(time, {
                position: v3(-posX, 0, 0)
              }).union().repeatForever().start();
            }
          }
        }
        /* 武器弹窗 */


        onPenWeaponPopup() {
          if (this._touchStatus == TouchStatus.START) {
            var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).itemPath + this.weaponCfg.Res; //TODO显示弹窗
          }
        }
        /* 武器卸下 */


        onWeaponRemove(id) {
          if (this.weaponKey == id) {
            //添加到待上阵武器列表
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, this.node);
            this.placeStatus = false;
            this.setNodeAngel();
          }
        }
        /* 武器预卸下 */


        onWeapoPreRemove() {
          if (this._touchStatus == TouchStatus.START) {
            // console.log('武器预卸下');
            //武器预卸下
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ADD_PRE_WEAPON_LIST, this.node);
            this.placeStatus = true;
            this.setNodeAngel();
          }
        }
        /* 放置完成 */


        onPlaceFinish() {
          if (this._touchStatus == TouchStatus.MOVE) {
            //放置完成
            // console.log('放置完成');
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_PlACE, this);
          }
        }
        /**
         * 合成升级
         * 1.合成后格子相同 直接合成
         * 2.合成后格子不相同则直接卸下
         * @param weaponKey 武器的唯一key
         * @param isInner 内合成或者外合成
         */


        onWeaponUpgrade(weaponKey, isInner) {
          if (this._weaponKey == weaponKey) {
            var level = this._weaponCfg.Level + 1;
            var group = this._weaponCfg.weaponGroupNum;
            this._weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgByLevel(level, group);
            this.level.string = "Lv" + this._weaponCfg.Level;
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.updateGridItemData(weaponKey, this._weaponCfg.Id); //播放合成特效

            this.setSynEffect(); //设置资源

            this.setWeaponIcon();
          }
        }
        /* 设置合成特效 */


        setSynEffect() {
          var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).synPath;
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(synPrefab => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound(4);
            var synItem = instantiate(synPrefab);
            synItem.parent = this.node;
            synItem.getComponent(_crd && SynItem === void 0 ? (_reportPossibleCrUseOfSynItem({
              error: Error()
            }), SynItem) : SynItem).init();
          });
        }
        /* 关闭多触碰 */

        /* 触摸点击 */


        onTouchStart(wpos) {
          //是否触摸到武器(只能选中一个)
          var touchPos = this.point.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));

          if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.checkPointinGrid(v2(touchPos.x, touchPos.y), this._pointGridObj) && !(_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.isSelect && !(_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridEditMode) {
            this._isTouch = true;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = true;
            this._touchStatus = TouchStatus.START;
          }
        }

        onTouchMove(wpos) {
          if (this._isTouch) {
            this.onWeapoPreRemove();
            this._touchStatus = TouchStatus.MOVE;
            var pos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this.node.setPosition(pos);
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_MOVE, this);
          }
        }

        onTouchEnd(wpos) {
          if (this._isTouch) {
            if (this._touchStatus == TouchStatus.START) {
              //弹出详情
              (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
                error: Error()
              }), OpenPopupManager) : OpenPopupManager).instance.showWeaponDetailPopup(this.weaponCfg);
            }

            this._isTouch = false;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = false;
            this.onPenWeaponPopup();
            this.onPlaceFinish();
            this._touchStatus = TouchStatus.END;
          }
        }

        onTouchCancle(wpos) {
          if (this._isTouch) {
            this._isTouch = false;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = false;
            this._touchStatus = TouchStatus.CANCEL; //添加到待上阵武器列表

            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).ADD_REMOVE_WEAPON_LIST, this.node); //设置战斗按钮状态

            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SET_BATTLE_BTN_STATUS);
          }
        }

        onEnable() {
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
          }), GameEvent) : GameEvent).WEAPON_REMOVE, this.onWeaponRemove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS, this.onSetIconStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS_INIT, this.onSetStatusInit, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_SHAKE, this.onSetIconShake, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_UPGRADE, this.onWeaponUpgrade, this); // EventListener.on(GameEvent.WEAPON_PROGRESS_BAR, this.onUpdateProgressBar, this);
        }

        onDisable() {
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
          }), GameEvent) : GameEvent).WEAPON_REMOVE, this.onWeaponRemove, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS, this.onSetIconStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_ICON_STATUS_INIT, this.onSetStatusInit, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_SHAKE, this.onSetIconShake, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_UPGRADE, this.onWeaponUpgrade, this); // EventListener.off(GameEvent.WEAPON_PROGRESS_BAR, this.onUpdateProgressBar, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("TouchStatus", TouchStatus = /*#__PURE__*/function (TouchStatus) {
        TouchStatus[TouchStatus["DEFAULT"] = 0] = "DEFAULT";
        TouchStatus[TouchStatus["START"] = 1] = "START";
        TouchStatus[TouchStatus["MOVE"] = 2] = "MOVE";
        TouchStatus[TouchStatus["END"] = 3] = "END";
        TouchStatus[TouchStatus["CANCEL"] = 4] = "CANCEL";
        return TouchStatus;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a81ebb332562dd117a7d25386cfdfb40039c907.js.map