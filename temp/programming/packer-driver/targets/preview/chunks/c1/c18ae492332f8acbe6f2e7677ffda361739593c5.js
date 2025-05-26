System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ChapterEventCfg, _crd, BrushMonsterType, MonsterType;

  _export("ChapterEventCfg", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32241t2YThK/bgnFGmH36of", "ChapterEventModel", undefined);

      _export("ChapterEventCfg", ChapterEventCfg = class ChapterEventCfg {
        constructor() {
          this.ClassName = 'ChapterEvent';
          this.Id = void 0;
          this.Chapter = void 0;
          this.Wave = void 0;
          this.eType = void 0;
          this.Event = void 0;
          this.HpUp = void 0;
          this.Box = void 0;
        }

      });

      _export("BrushMonsterType", BrushMonsterType = /*#__PURE__*/function (BrushMonsterType) {
        BrushMonsterType[BrushMonsterType["NORMAL"] = 1] = "NORMAL";
        BrushMonsterType[BrushMonsterType["BOSS"] = 2] = "BOSS";
        return BrushMonsterType;
      }({}));

      _export("MonsterType", MonsterType = /*#__PURE__*/function (MonsterType) {
        MonsterType[MonsterType["LITTLE"] = 1] = "LITTLE";
        MonsterType[MonsterType["ELITE"] = 2] = "ELITE";
        MonsterType[MonsterType["BOSS"] = 3] = "BOSS";
        return MonsterType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c18ae492332f8acbe6f2e7677ffda361739593c5.js.map