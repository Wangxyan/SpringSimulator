System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MonsterCfg, _crd, MonsterAmin;

  _export("MonsterCfg", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3918UZqVtApaVupxixI5Ut", "MonsterModel", undefined);

      _export("MonsterCfg", MonsterCfg = class MonsterCfg {
        constructor() {
          this.ClassName = 'Monster';
          this.Id = void 0;
          this.mType = void 0;
          this.Name = void 0;
          this.Dec = void 0;
          this.Sort = void 0;
          this.Icon = void 0;
          this.IconScale = void 0;
          this.shadeScale = void 0;
          this.shadeOffsetY = void 0;
          this.ColliderRadius = void 0;
          this.ColliderOffset = void 0;
          this.Speed = void 0;
          this.Atk = void 0;
          this.Hp = void 0;
          this.Grow_Up = void 0;
          this.Range = void 0;
          this.Interval = void 0;
          this.Skill_Immunity = void 0;
          this.Defense = void 0;
          this.Skill = void 0;
          this.Missile_Effect = void 0;
          this.Move_Def = void 0;
          this.Status_Def = void 0;
          this.Status_Resist = void 0;
          this.Show = void 0;
          this.Characteristic = void 0;
          this.Die_Animation = void 0;
          this.Valid = void 0;
          this.Version = void 0;
          this.Volume = void 0;
          this.Weaken = void 0;
        }

      });

      _export("MonsterAmin", MonsterAmin = /*#__PURE__*/function (MonsterAmin) {
        MonsterAmin["Move"] = "Move";
        MonsterAmin["Atk"] = "Skill";
        return MonsterAmin;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae215c9dba6d0508fa288befa51201ccb599395d.js.map