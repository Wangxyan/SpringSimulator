System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, tween, UITransform, EventListener, GameEvent, HeroAnim, HeroData, GameDefine, OpenPopupManager, Util, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroHpItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAnim(extras) {
    _reporterNs.report("HeroAnim", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../../Frame/OpenPopupManager", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      EventListener = _unresolved_2.EventListener;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      HeroAnim = _unresolved_4.HeroAnim;
      HeroData = _unresolved_4.HeroData;
    }, function (_unresolved_5) {
      GameDefine = _unresolved_5.GameDefine;
    }, function (_unresolved_6) {
      OpenPopupManager = _unresolved_6.OpenPopupManager;
    }, function (_unresolved_7) {
      Util = _unresolved_7.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f84e2Gtlm9LUIZobBtPl4iy", "HeroHpItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar', 'tween', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroHpItem", HeroHpItem = (_dec = ccclass('HeroHpItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class HeroHpItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "barAnim", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          _initializerDefineProperty(this, "hpText", _descriptor3, this);
        }

        init() {
          let scale = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).adapterScale();
          this.barAnim.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
          this.getComponent(ProgressBar).progress = 1;
          this.hpText.string = `${(_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.curHp}`;
          this.node.setScale(scale, scale);
        }

        setHeroHp() {
          let curHp = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.curHp;
          let maxHp = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.maxHp;
          this.hpText.string = `${(_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.curHp}`;

          if (curHp <= 0) {
            curHp = 0;
          }

          ;
          this.getComponent(ProgressBar).progress = curHp / maxHp;
          let curWidth = this.bar.getComponent(UITransform).width;
          let endWidth = this.barAnim.getComponent(UITransform).width;
          let offsetX = endWidth - curWidth;
          tween(this.barAnim.getComponent(UITransform)).by(0.2, {
            width: -offsetX
          }).call(() => {
            if (curHp <= 0) {
              //游戏结束
              (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).gameOver = true;
              (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).gameStart = false; //屏蔽游戏界面点击事件
              // EventListener.emit(GameEvent.GAME_BLOCK_EVENT);
              //播放死亡动画 弹出游戏结束弹窗

              (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                error: Error()
              }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).HERO_ANIM, (_crd && HeroAnim === void 0 ? (_reportPossibleCrUseOfHeroAnim({
                error: Error()
              }), HeroAnim) : HeroAnim).DIE);
              (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
                error: Error()
              }), OpenPopupManager) : OpenPopupManager).instance.showGameOverPopup(0);
              this.node.destroy();
            }
          }).start();
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_HERO_HP, this.setHeroHp, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_HERO_HP, this.setHeroHp, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "barAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hpText", [_dec4], {
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
//# sourceMappingURL=66902caf4f0def06f79ac540aad897b8b36c8120.js.map