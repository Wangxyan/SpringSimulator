System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, PlayerData, PlayerObj, _crd;

  _export({
    PlayerData: void 0,
    PlayerObj: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cf576ioxpCAaOFMsTCq3pg", "PlayerData", undefined);

      _export("PlayerData", PlayerData = class PlayerData {
        constructor() {
          this._playerInfo = new PlayerObj();
        }

        get playerInfo() {
          return this._playerInfo;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new PlayerData();
          }

          return this._instance;
        }

      });

      PlayerData._instance = null;

      _export("PlayerObj", PlayerObj = class PlayerObj {
        constructor() {
          this.gold = 0;
          this.curChapter = 4010101;
          this.unlockChapter = 4010301;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0e1e17505c8eba9672fcd03f0d844be5555382d.js.map