System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GameDefine, HeroBase, _dec, _class, _crd, ccclass, property, HeroItem;

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBase(extras) {
    _reporterNs.report("HeroBase", "./HeroBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameDefine = _unresolved_2.GameDefine;
    }, function (_unresolved_3) {
      HeroBase = _unresolved_3.HeroBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cadejCYdZBKrCfzup7CJ4/", "HeroItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroItem", HeroItem = (_dec = ccclass('HeroItem'), _dec(_class = class HeroItem extends (_crd && HeroBase === void 0 ? (_reportPossibleCrUseOfHeroBase({
        error: Error()
      }), HeroBase) : HeroBase) {
        init() {
          this.initBorn();
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart) {
            this.releaseSkill();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0d6d833ff827d2964e911c5ba7a54e572b5993c.js.map