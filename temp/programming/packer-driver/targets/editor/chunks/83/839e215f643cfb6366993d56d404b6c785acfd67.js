System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Debug, CfgMgr, _crd;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  _export("CfgMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f0fcdZNgJLlbkVxJmLK0oC", "CfgMgr", undefined);

      _export("CfgMgr", CfgMgr = class CfgMgr {
        //any为[];

        /**
         * 添加配置数据
         * @param name 
         * @param cfgs 
         */
        static addCfgData(name, cfgs) {
          if (name == null || !this.CfgDataList.has(name)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).info("Error: 不存在配置表" + name);
            return;
          }

          let datas = this.CfgData.get(name);
          let dataList = this.CfgDataList.get(name);
          cfgs.forEach(item => {
            if (item.hasOwnProperty('Id')) {
              let key = item.Id;
              datas[key] = item;
              dataList.push(item);
            } else {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).info('配置表Id字段错误:', name);
            }
          });
        }
        /**
         * 设置配置数据
         * @param name 
         * @param cfgs 
         */


        static setCfgData(name, cfgs) {
          let datas = {};
          let dataList = [];
          cfgs.forEach(item => {
            if (item.hasOwnProperty('Id')) {
              let key = item.Id;
              datas[key] = item;
              dataList.push(item);
            } else {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).info('配置表Id字段错误:', name);
            }
          });
          this.CfgData.set(name, datas);
          this.CfgDataList.set(name, dataList);
        }
        /**
        * 返回数据对象map
        * cfgMgr.getCfgData<class>(class);
        * @param  {any} cfgCls  数据对象
        * @returns T            数据对象
        */


        static getCfgData(cls) {
          let name = cls.ClassName;

          if (!this.CfgData.has(name)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).info("Error: 不存在配置表" + name);
            return null;
          }

          return this.CfgData.get(name);
        }

        static hasCfg(key) {
          if (this.CfgData.has(key)) {
            return true;
          }

          return false;
        }
        /**
        * 返回数据对象数组
        * cfgMgr.getCfgDataArray<class>(class);
        * @param  {any} cfgCls 数据对象
        * @returns Array       数据对象数组
        */


        static getCfgDataArray(cls) {
          let name = cls.ClassName;

          if (name == null || !this.CfgDataList.has(name)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).info("Error: 不存在配置表" + name);
            return null;
          }

          return this.CfgDataList.get(name);
        }

        /**
        * 根据ID获得配置
        * @param  {any} cfgCls
        * @param  {string|number} Id
        * @returns T
        */
        static getDataById(cls, Id) {
          let name = cls.ClassName;
          let res = null;

          if (!this.CfgData.has(name)) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).info(name + "配置不存在。" + Id);
          } else {
            let data = this.CfgData.get(name);

            if (!data[Id]) {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).info(name + ":不存在ID " + Id);
            } else {
              res = data[Id];
            }
          }

          return res;
        }

        static clearByKey(key) {
          this.CfgData.delete(key);
          this.CfgDataList.delete(key);
        }

      });

      CfgMgr.CfgData = new Map();
      //any为{key:{}}
      CfgMgr.CfgDataList = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=839e215f643cfb6366993d56d404b6c785acfd67.js.map