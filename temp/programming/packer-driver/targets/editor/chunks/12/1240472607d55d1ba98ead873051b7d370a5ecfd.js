System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SysOpenData, _crd;

  _export("SysOpenData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63bbcBqI+ZE/66F0uXhki5z", "SysOpenData", undefined);

      _export("SysOpenData", SysOpenData = class SysOpenData {
        constructor() {
          this._sysOpenId = [2];
        }

        /**
         * 检测系统是否解锁
         * @param sid 系统id
         */
        checkSysOpen(sid) {
          if (this._sysOpenId.includes(sid)) {
            return true;
          }

          return false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new SysOpenData();
          }

          return this._instance;
        }

      });

      SysOpenData._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1240472607d55d1ba98ead873051b7d370a5ecfd.js.map