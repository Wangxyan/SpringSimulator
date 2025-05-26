System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SoundCfg, _crd;

  _export("SoundCfg", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da0b587TatEfYOmhgmfwcge", "SoundModel", undefined);

      _export("SoundCfg", SoundCfg = class SoundCfg {
        constructor() {
          this.ClassName = 'Sound';

          /** id */
          this.Id = void 0;
          this.Name = void 0;
          this.Desc = void 0;
          this.Group = void 0;
          this.Type = void 0;
          this.Volume = void 0;
          this.Delay = void 0;
          this.Mp3 = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f548c11b5457b011e0e46340e42cbfc5e984722.js.map