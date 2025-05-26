System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, MonsterBase, GameDefine, _dec, _class, _crd, ccclass, property, MonsterItem;

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "./MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterCfg(extras) {
    _reporterNs.report("MonsterCfg", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterObj(extras) {
    _reporterNs.report("MonsterObj", "../Data/MonsterData", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      MonsterBase = _unresolved_2.MonsterBase;
    }, function (_unresolved_3) {
      GameDefine = _unresolved_3.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15d32i74JZKNYfV93JUtcSJ", "MonsterItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterItem", MonsterItem = (_dec = ccclass('MonsterItem'), _dec(_class = class MonsterItem extends (_crd && MonsterBase === void 0 ? (_reportPossibleCrUseOfMonsterBase({
        error: Error()
      }), MonsterBase) : MonsterBase) {
        init(monsterCfg, monsterObj) {
          this.monsterCfg = monsterCfg;
          this.monsterObj = monsterObj;
          this.initStatus = false;
          this.isDie = false;
          this.setMonsterBorn();
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart && this.initStatus) {
            var frames = director.getTotalFrames();
            this.monsterMoveFrame(dt);
            this.moveRepulseEffectFrame(dt);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f519f8090108540690de1817466fac61b1d31578.js.map