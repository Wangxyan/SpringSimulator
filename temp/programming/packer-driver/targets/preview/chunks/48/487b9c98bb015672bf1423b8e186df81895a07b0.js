System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, UITransform, v3, sp, BaseComponent, EventListener, GameEvent, ResourcesUtil, Constants, CoinObj, Util, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BoxManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinObj(extras) {
    _reporterNs.report("CoinObj", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      ResourcesUtil = _unresolved_5.ResourcesUtil;
    }, function (_unresolved_6) {
      Constants = _unresolved_6.Constants;
    }, function (_unresolved_7) {
      CoinObj = _unresolved_7.CoinObj;
    }, function (_unresolved_8) {
      Util = _unresolved_8.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "847ceV2XWlA37OAqupKooMM", "BoxManager", undefined);

      __checkObsolete__(['_decorator', 'AnimationComponent', 'Component', 'instantiate', 'Node', 'Prefab', 'tween', 'UITransform', 'v3', 'Vec3', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BoxManager", BoxManager = (_dec = ccclass('BoxManager'), _dec2 = property(Node), _dec(_class = (_class2 = class BoxManager extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "boxParent", _descriptor, this);

          this._pickBox = false;
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_DROP_BOX, this.onCreateDropBox, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_DROP_BOX, this.onCreateDropBox, this);
        }
        /* 创建掉落宝箱 */


        onCreateDropBox(pos) {
          //英雄移动动画
          var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).battlePath + 'boxItem';
          this.boxParent.setPosition(0, 0);
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(itemPrefab => {
            var boxItem = instantiate(itemPrefab);
            boxItem.parent = this.boxParent;
            boxItem.setPosition(pos);
            var boxSpine = boxItem.getChildByName('box').getComponent(sp.Skeleton);
            var wpos = boxItem.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            this.scheduleOnce(() => {
              this.showFlyGoldAnim(wpos);
            }, 0.5);
            boxSpine.setCompleteListener(() => {
              boxItem.destroy();
              (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                error: Error()
              }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).RESERT_SELECT_BAG);
            });
          });
        }
        /* 转换飞的金币动画 */


        showFlyGoldAnim(wpos) {
          var coinObj = new (_crd && CoinObj === void 0 ? (_reportPossibleCrUseOfCoinObj({
            error: Error()
          }), CoinObj) : CoinObj)();
          coinObj.wpos = wpos;
          coinObj.num = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandomInt(5, 10);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_CHANGE_COIN, coinObj);
        }

        clear() {
          this._pickBox = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=487b9c98bb015672bf1423b8e186df81895a07b0.js.map