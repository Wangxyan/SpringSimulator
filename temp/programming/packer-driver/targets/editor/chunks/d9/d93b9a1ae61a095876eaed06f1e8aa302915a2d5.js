System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, BattleLevelCfg, SkillUpgradeCfg, SkillUpgradeData, SelectObj, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleLevelCfg(extras) {
    _reporterNs.report("BattleLevelCfg", "../../Model/BattleLevelModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeCfg(extras) {
    _reporterNs.report("SkillUpgradeCfg", "../../Model/SkillUpgradeMode", _context.meta, extras);
  }

  _export({
    SkillUpgradeData: void 0,
    SelectObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      BattleLevelCfg = _unresolved_3.BattleLevelCfg;
    }, function (_unresolved_4) {
      SkillUpgradeCfg = _unresolved_4.SkillUpgradeCfg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0197azBjyNEkIhWWJCAKOOQ", "SkillUpgradeData", undefined);

      _export("SkillUpgradeData", SkillUpgradeData = class SkillUpgradeData {
        constructor() {
          this._BattleLevelData = new Map();
          //战斗经验配置
          this._unlockUpgradeOptionsPoolData = new Map();
        }

        //解锁技能池数据 (权重大于0的计算)
        init() {
          let battleLevelArr = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && BattleLevelCfg === void 0 ? (_reportPossibleCrUseOfBattleLevelCfg({
            error: Error()
          }), BattleLevelCfg) : BattleLevelCfg)());

          for (let i = 0; i < battleLevelArr.length; i++) {
            const element = battleLevelArr[i];

            this._BattleLevelData.set(element.Level, element);
          }

          let skillUpgradeData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && SkillUpgradeCfg === void 0 ? (_reportPossibleCrUseOfSkillUpgradeCfg({
            error: Error()
          }), SkillUpgradeCfg) : SkillUpgradeCfg)());

          for (let i = 0; i < skillUpgradeData.length; i++) {
            const element = skillUpgradeData[i];

            if (element.options_num) {
              let selectObj = new SelectObj();
              selectObj.id = element.Id;
              selectObj.premise = element.premise;
              selectObj.options_num = element.options_num;

              this._unlockUpgradeOptionsPoolData.set(element.Id, selectObj);
            }
          }
        }

        getSkillUpgradeCfgById(id) {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && SkillUpgradeCfg === void 0 ? (_reportPossibleCrUseOfSkillUpgradeCfg({
            error: Error()
          }), SkillUpgradeCfg) : SkillUpgradeCfg)(), id);
        }
        /**
         * 获取等级经验数据
         * @param level 
         */


        getBattleLevelByLevel(level) {
          let maxExp = 100;

          if (this._BattleLevelData.has(level)) {
            maxExp = this._BattleLevelData.get(level).Exp;
          }

          return maxExp;
        }
        /* 获取解锁数据 */


        getUnlockUpgradeOptionsData() {
          return Array.from(this._unlockUpgradeOptionsPoolData.values());
        }
        /**
        * 根据权重获取数据
        */


        getSelectObjByWeight(temList, list) {
          let start = 0;
          let end = 0;
          let index = 0;
          let sum = 0;
          let newList = [];

          for (let i = 0; i < temList.length; i++) {
            let element = temList[i]; //options_num权重大于0的计算

            if (element.options_num) {
              let hasStatus = false;

              for (let j = 0; j < list.length; j++) {
                const element1 = list[j];

                if (element.id == element1.id) {
                  hasStatus = true;
                  break;
                }
              }

              if (!hasStatus) {
                let element = temList[i];
                sum += element.options_num;
                newList.push(element);
              }
            }
          }

          if (newList.length) {
            let random = Math.random() * sum;
            newList.some((item, idx) => {
              end = start + item.options_num;

              if (random >= start && random < end) {
                index = idx;
                return true;
              }

              start = end;
            });
            return newList[index];
          }

          return null;
        }
        /* 通过权重获取技能列表 */


        getSelectSkillListByWeight() {
          let list = [];

          for (let i = 0; i < 3; i++) {
            let element = this.getSelectObjByWeight(this.getUnlockUpgradeOptionsData(), list);

            if (element) {
              list.push(element);
            }
          }

          return list;
        }

        clear() {
          this._BattleLevelData.clear();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new SkillUpgradeData();
          }

          return this._instance;
        }

      });

      SkillUpgradeData._instance = null;

      _export("SelectObj", SelectObj = class SelectObj {
        constructor() {
          this.id = void 0;
          //配置id
          this.premise = void 0;
          //前置技能
          this.options_num = void 0;
        } //数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d93b9a1ae61a095876eaed06f1e8aa302915a2d5.js.map