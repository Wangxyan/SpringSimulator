System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, Configuration, GameData, _crd;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfiguration(extras) {
    _reporterNs.report("Configuration", "../../Frame/Configuration", _context.meta, extras);
  }

  _export("GameData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      Configuration = _unresolved_3.Configuration;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d101mQYZlH5YgNDTHpHFON", "GameData", undefined);

      _export("GameData", GameData = class GameData {
        constructor() {
          this._gameTime = 0;
          //游戏时间
          this._eventTime = 0;
          //时间时间轴
          this._dataInited = false;
        }

        //数据初始化完成
        set eventTime(value) {
          this._eventTime = value;
        }

        set gameTime(value) {
          this._gameTime = value;
        }

        get gameTime() {
          return this._gameTime;
        }

        init() {
          //读取本地数据
          this.loadFromCache();
        }
        /* 检测游戏事件是否结束 */


        checkGameEventOver() {
          // let bossTimeArr = MonsterData.instance.bossTimePoint;
          // let maxTime = bossTimeArr[bossTimeArr.length - 1];
          // if (this._eventTime >= maxTime) {
          //     return true;
          // }
          return false;
        }
        /**
        * 按权重获取随机装备材料
        * @param idsStr 
        * @returns 
        */


        getRandEquipMaterialByWeight(idsStr) {
          var idsArr = idsStr.split(',');
          var start = 0;
          var end = 0;
          var sum = 0;
          var ids = [];
          var weights = [];
          idsArr.forEach(itemStr => {
            var itemArr = itemStr.split('|');
            ids.push(Number(itemArr[0]));
            weights.push(Number(itemArr[1]));
            sum += Number(itemArr[1]);
          });
          var randWeight = Math.floor(Math.random() * sum);
          var index = 0;
          weights.some((weight, idx) => {
            end = start + weight;

            if (randWeight >= start && randWeight < end) {
              index = idx;
              return true;
            }

            start = end;
          });
          return ids[index];
        }

        clear() {
          this._gameTime = 0;
          this._eventTime = 0;
        }
        /* 读取本地数据 */


        loadFromCache() {
          if (this._dataInited) {
            return;
          } // Configuration.instance().clearConfigData();


          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.init();
          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.clearConfigDataToVersion(); //版本号清除数据

          var playerInfo = (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.getConfigData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).playerConfigId);
          this._dataInited = true;
        }
        /* 清除本地数据 */


        clearCacheData() {
          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.clearConfigData();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new GameData();
          }

          return this._instance;
        }

      });

      GameData._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfddd4815a6f0943c74144424ed23b3e3d5978a1.js.map