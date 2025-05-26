System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Constants, EventListener, PopupManager, GameEvent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TipsPopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Frame/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Game/Event/GameEvent", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      PopupManager = _unresolved_4.PopupManager;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "177d1C/dg5OWZknvJEioKJs", "TipsPopup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TipsPopup", TipsPopup = (_dec = ccclass('TipsPopup'), _dec2 = property(Label), _dec(_class = (_class2 = class TipsPopup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "desc", _descriptor, this);

          this._skipType = 1;
        }

        //1回到主页
        show(msg, skip) {
          this._skipType = skip;
          this.desc.string = msg;
        }

        onEscBtn() {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.hide((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.tipsPopup);
        }

        onEnterBtn() {
          switch (this._skipType) {
            case 1:
              (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                error: Error()
              }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).GAME_OVER);
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec2], {
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
//# sourceMappingURL=c7dc971ff6d06a4cf340905d855d752936632041.js.map