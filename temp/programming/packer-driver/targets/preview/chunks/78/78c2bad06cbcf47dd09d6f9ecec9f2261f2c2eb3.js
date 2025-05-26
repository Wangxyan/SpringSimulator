System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, GameDefine, GameController, BaseComponent, _crd;

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameDefine = _unresolved_2.GameDefine;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12e28pWfOpKyIbZwZp3vv5F", "BaseComponent", undefined);

      __checkObsolete__(['Component']);

      _export("default", BaseComponent = class BaseComponent extends Component {
        constructor() {
          super(...arguments);
          //固定帧计时
          this._now_time = 0;
        }

        childUpdate(dt) {}

        update(dt) {
          if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).pause_data.state_b) {
            return;
          }

          this._now_time += dt;

          while (this._now_time >= (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).frameTime) {
            this.childUpdate((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).frameTime);
            this._now_time -= (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).frameTime;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78c2bad06cbcf47dd09d6f9ecec9f2261f2c2eb3.js.map