System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ChapterCfg, ChapterRewardCfg, _crd;

  _export({
    ChapterCfg: void 0,
    ChapterRewardCfg: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2530f+OzZ9CfYvZ5BsmGlGp", "ChapterModel", undefined);

      _export("ChapterCfg", ChapterCfg = class ChapterCfg {
        constructor() {
          this.ClassName = 'Chapter';
          this.Id = void 0;
          this.Name = void 0;
          this.lType = void 0;
          this.MapId = void 0;
          this.LoopMap = void 0;
          this.MonsterId = void 0;
          this.MonsterAtk = void 0;
          this.MonsterDef = void 0;
          this.HpUp = void 0;
          this.cMonsterId = void 0;
          this.StarReward = void 0;
          this.RandomReward = void 0;
          this.WinReward = void 0;
          this.FirstPass = void 0;
          this.ReSkills = void 0;
          this.ReBorn = void 0;
          this.PlaceReward = void 0;
          this.BattlePower = void 0;
          this.IsUseSkill = void 0;
          this.Entry = void 0;
          this.Difficulty = void 0;
          this.NextChapter = void 0;
        }

      });

      _export("ChapterRewardCfg", ChapterRewardCfg = class ChapterRewardCfg {
        constructor() {
          this.ClassName = 'ChapterReward';
          this.Id = void 0;
          this.ChapterId = void 0;
          this.Lock = void 0;
          this.Reward = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d7bba1f604b37e026e70bdc9ad53ed9c8780ff6a.js.map