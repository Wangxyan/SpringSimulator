System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Constants, Util, Configuration, _crd;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./Util", _context.meta, extras);
  }

  _export("Configuration", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cb26FZvcBCFoeNEIZPrPgl", "Configuration", undefined);

      __checkObsolete__(['sys']);

      _export("Configuration", Configuration = class Configuration {
        constructor() {
          this._jsonData = {};
          this._markSave = false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new Configuration();
          }

          return this._instance;
        }
        /* 初始化 */


        init() {
          var localdata = sys.localStorage.getItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).gameConfigId);

          if (localdata && localdata.startsWith('@')) {
            localdata = localdata.substring(1);
            localdata = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).decrypt(localdata);
            this._jsonData = JSON.parse(localdata);
          }

          setInterval(this.scheduleData.bind(this), 500);
        }
        /* 根据版本号清除本地数据 */


        clearConfigDataToVersion() {
          var loacalCacheVersionConfig = this.getConfigData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).cacheVersion);

          if (loacalCacheVersionConfig) {
            var loacalCacheVersionConfigArr = JSON.parse(loacalCacheVersionConfig); //比较本地版本号

            var copyVerson = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).clone((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).cacheVersionConfig);
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).cacheVersionConfig.forEach((item, index) => {
              loacalCacheVersionConfigArr.forEach((ele, ind) => {
                if (item.versionName == ele.versionName && item.version > ele.version && ele.versionName == 'gameData') {
                  //清除游戏数据
                  this.clearConfigData();
                  this._jsonData = {};
                } else {
                  if (item.versionName == ele.versionName && item.version > ele.version) {
                    if (this._jsonData.hasOwnProperty(item.versionName)) {
                      delete this._jsonData[item.versionName];
                    }
                  }

                  copyVerson.some((el, index) => {
                    if (el.versionName == ele.versionName) {
                      copyVerson.splice(index, 1);
                      return true;
                    }
                  });
                }
              });
            }); //获取新增记录

            copyVerson.forEach(item => {
              if (this._jsonData.hasOwnProperty(item.versionName)) {
                delete this._jsonData[item.versionName];
              }
            });
          } else {
            //根据版本号清除数据
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).cacheVersionConfig.forEach(item => {
              if (this._jsonData.hasOwnProperty(item.versionName)) {
                delete this._jsonData[item.versionName];
              }
            });
          } //更新本地版本数据


          this.setConfigData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).cacheVersion, JSON.stringify((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).cacheVersionConfig));
        }
        /* 清除指定数据 */


        clearByKey(key) {
          if (this._jsonData.hasOwnProperty(key)) {
            delete this._jsonData[key];
            this._markSave = true;
          }
        }
        /* 清除存储数据 */


        clearConfigData() {
          sys.localStorage.clear();
        }
        /* 获取存储数据 */


        getConfigData(key) {
          var data = this._jsonData[key];
          return data || null;
        }
        /* 设置存储数据 */


        setConfigData(key, value) {
          this._jsonData[key] = value;
          this._markSave = true;
        }
        /* 数据存储 */


        scheduleData() {
          if (!this._markSave) {
            return;
          }

          var data = JSON.stringify(this._jsonData);
          sys.localStorage.setItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).gameConfigId, '@' + (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).encrypt(data));
          this._markSave = false;
        }

      });

      Configuration._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=903eb82b96a190f22461080cc2770ed1d0e7d386.js.map