System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseComponent, PoolManager, GameDefine, _dec, _class, _crd, ccclass, property, Shadow;

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
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
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      GameDefine = _unresolved_4.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12edahXWHVEuIb79B8twMAT", "Shadow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Shadow", Shadow = (_dec = ccclass('Shadow'), _dec(_class = class Shadow extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this._com = null;
        }

        init(com) {
          this._com = com;
          var scale = com.monsterCfg.shadeScale;
          this.node.setScale(scale, scale, scale);
        }

        setMonsterShadownPos() {
          var curPos = this._com.node.getPosition();

          this.node.setPosition(curPos.x, curPos.y + this._com.monsterCfg.shadeOffsetY, 0);
        }

        clear() {
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(this.node);
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart) {
            if (this._com) {
              this.setMonsterShadownPos();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed2f1b4d1af95d4f30d86c6376ca25dde60bd864.js.map