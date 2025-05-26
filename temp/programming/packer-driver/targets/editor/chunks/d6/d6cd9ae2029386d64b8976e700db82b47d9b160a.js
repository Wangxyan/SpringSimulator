System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CfgMgr, Util, WeaponCfg, WeaponData, CoinObj, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponCfg(extras) {
    _reporterNs.report("WeaponCfg", "../../Model/WeaponModel", _context.meta, extras);
  }

  _export({
    WeaponData: void 0,
    CoinObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      WeaponCfg = _unresolved_4.WeaponCfg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91348VvqW5Bi6q8SBb34d+V", "WeaponData", undefined);

      __checkObsolete__(['Vec3']);

      _export("WeaponData", WeaponData = class WeaponData {
        constructor() {
          this._isSelect = false;
          //是否选中武器
          this._weaponCfgMapData = new Map();
          // key=> group + '|' + level 
          this._weaponGridData = new Map();
        }

        //可用格子数据
        get isSelect() {
          return this._isSelect;
        }

        set isSelect(value) {
          this._isSelect = value;
        }

        init() {
          let weaponCfgArr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && WeaponCfg === void 0 ? (_reportPossibleCrUseOfWeaponCfg({
            error: Error()
          }), WeaponCfg) : WeaponCfg)());

          for (let index = 0; index < weaponCfgArr.length; index++) {
            const element = weaponCfgArr[index];

            if (element.itemType) {
              let key = element.weaponGroupNum + '|' + element.Level;

              this._weaponCfgMapData.set(key, element);
            } else {
              this._weaponGridData.set(element.Id, element);
            }
          }
        }

        getWeaponCfgByLevel(level, group) {
          let key = group + '|' + level;
          return this._weaponCfgMapData.get(key);
        }
        /* 通过level检测是否有该等级的装备 */


        checkWeaponByLevel(level, group) {
          let key = group + '|' + level;

          if (this._weaponCfgMapData.has(key)) {
            return true;
          }

          return false;
        }

        getWeaponCfgById(id) {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && WeaponCfg === void 0 ? (_reportPossibleCrUseOfWeaponCfg({
            error: Error()
          }), WeaponCfg) : WeaponCfg)(), id);
        }

        getWeaponCfgData() {
          let data = [];
          let arr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && WeaponCfg === void 0 ? (_reportPossibleCrUseOfWeaponCfg({
            error: Error()
          }), WeaponCfg) : WeaponCfg)());

          for (let i = 0; i < arr.length; i++) {
            const element = arr[i];

            if (element.itemType) {
              data.push(element);
            }
          }

          return data;
        }

        getWeaponPool() {
          let arr = [];
          let data = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).rand(this.getWeaponCfgData());

          for (let i = 0; i < data.length; i++) {
            const element = data[i];

            if (element.Level == 1 && element.itemType) {
              arr.push(element.Id);

              if (arr.length == 6) {
                break;
              }
            }
          }

          return arr;
        }
        /**
        * 检测大数组数据中是否存在区域数据
        * @param matrix 大数组区域数据 (0:占有 1:未占有)
        * @param region  待检测的区域数据
        * @returns 
        */


        countRegionOccurrences(matrix, region) {
          let count = 0;
          const regionRows = region.length;
          const regionCols = region[0].length;

          for (let i = 0; i <= matrix.length - regionRows; i++) {
            for (let j = 0; j <= matrix[0].length - regionCols; j++) {
              let match = true;

              for (let r = 0; r < regionRows; r++) {
                for (let c = 0; c < regionCols; c++) {
                  if (matrix[i + r][j + c] !== region[r][c]) {
                    match = false;
                    break;
                  }
                }

                if (!match) {
                  break;
                }
              }

              if (match) {
                count++;
              }
            }
          }

          return count;
        }
        /* 通过权重获取可以放置的id  */


        getPlaceGridIdByWeigh(matrix) {
          let weaponData = []; //找出可以放置的格子

          if (this._weaponGridData.size) {
            this._weaponGridData.forEach((weaponCfg, key) => {
              let count = this.countRegionOccurrences(matrix, weaponCfg.Points);

              if (count) {
                weaponData.push(weaponCfg);
              }
            });
          }

          let placeId = 0;

          if (weaponData.length) {
            let start = 0;
            let end = 0;
            let sum = 0;

            for (let i = 0; i < weaponData.length; i++) {
              const element = weaponData[i];
              sum += element.options_num;
            }

            let rand = Math.floor(Math.random() * sum);
            let index = 0;
            weaponData.some((item, idx) => {
              end = start + item.options_num;

              if (rand >= start && rand < end) {
                index = idx;
                return true;
              }

              start = end;
            });
            placeId = weaponData[index].Id;
          }

          return placeId;
        }

        clear() {
          this._isSelect = false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new WeaponData();
          }

          return this._instance;
        }

      });

      WeaponData._instance = null;

      _export("CoinObj", CoinObj = class CoinObj {
        constructor() {
          this.wpos = void 0;
          //金币坐标
          this.num = void 0;
        } //金币数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6cd9ae2029386d64b8976e700db82b47d9b160a.js.map