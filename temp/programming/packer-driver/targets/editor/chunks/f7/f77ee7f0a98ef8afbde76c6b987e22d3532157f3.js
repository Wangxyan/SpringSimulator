System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, WeaponCfg, _crd;

  _export("WeaponCfg", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cef42/LHrdNd5rGXORftRTM", "WeaponModel", undefined);

      _export("WeaponCfg", WeaponCfg = class WeaponCfg {
        constructor() {
          this.ClassName = 'Weapon';

          /** id */
          this.Id = void 0;
          this.Name = void 0;
          this.Description = void 0;
          this.Res = void 0;

          /*属性*/
          this.charm = void 0;
          this.knowledge = void 0;
          this.talent = void 0;
          this.wealth = void 0;
          //物品组
          this.weaponGroupNum = void 0;
          this.itemType = void 0;

          /* 格子点类型 */
          this.Type = void 0;
          this.SkillId = void 0;
          this.Level = void 0;

          /* 占用位置点 */
          this.Points = void 0;
          this.options_num = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f77ee7f0a98ef8afbde76c6b987e22d3532157f3.js.map