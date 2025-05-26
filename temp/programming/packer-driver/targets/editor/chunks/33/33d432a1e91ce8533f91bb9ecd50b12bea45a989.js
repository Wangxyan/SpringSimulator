System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, CfgMgr, Util, SkillCfg, SkillTargetCfg, MonsterData, SkillData, SkillBulletObj, ReleaseSkillObj, AtkObj, SkillUpgradeObj, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCfg(extras) {
    _reporterNs.report("SkillCfg", "../../Model/SkillModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTargetCfg(extras) {
    _reporterNs.report("SkillTargetCfg", "../../Model/SkillTargetModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeCfg(extras) {
    _reporterNs.report("SkillUpgradeCfg", "../../Model/SkillUpgradeMode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "./MonsterData", _context.meta, extras);
  }

  _export({
    SkillData: void 0,
    SkillBulletObj: void 0,
    ReleaseSkillObj: void 0,
    AtkObj: void 0,
    SkillUpgradeObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      SkillCfg = _unresolved_4.SkillCfg;
    }, function (_unresolved_5) {
      SkillTargetCfg = _unresolved_5.SkillTargetCfg;
    }, function (_unresolved_6) {
      MonsterData = _unresolved_6.MonsterData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d47c0P8lLFPJqDru2of1KHi", "SkillData", undefined);

      __checkObsolete__(['Vec3']);

      _export("SkillData", SkillData = class SkillData {
        constructor() {
          this._battleSkillUpgradeData = new Map();
        }

        //战斗内外的技能升级提升(针对技能的提升)  key=>skillId
        getSkillCfgById(id) {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && SkillCfg === void 0 ? (_reportPossibleCrUseOfSkillCfg({
            error: Error()
          }), SkillCfg) : SkillCfg)(), id);
        }
        /**
        * 提升技能属性
        * @param skillId 
        * @param skillUpgradeCfg 
        */


        upgradeSkillObjAtt(skillUpgradeCfg) {
          //aim_skill   0:针对所有
          let aim_skill = skillUpgradeCfg.aim_skill;

          if (aim_skill) {
            for (let i = 0; i < aim_skill.length; i++) {
              const skillId = aim_skill[i];
              let skillUpgradeObj = this._battleSkillUpgradeData.has(skillId) ? this._battleSkillUpgradeData.get(skillId) : new SkillUpgradeObj();
              skillUpgradeObj.skillId = skillId;
              skillUpgradeObj.Hp += skillUpgradeCfg.hp_up;
              skillUpgradeObj.Exp += skillUpgradeCfg.exp_up;
              skillUpgradeObj.Gold += skillUpgradeCfg.gold_up;
              skillUpgradeObj.CdPer += skillUpgradeCfg.cd_shorten;
              skillUpgradeObj.DamageRange += skillUpgradeCfg.damageRange_up;
              skillUpgradeObj.DamageNum += skillUpgradeCfg.damageNum_up;
              skillUpgradeObj.Damage += skillUpgradeCfg.damage_up;
              skillUpgradeObj.Range += skillUpgradeCfg.range_up;
              skillUpgradeObj.Speed += skillUpgradeCfg.speed_up;
              skillUpgradeObj.Salvo += skillUpgradeCfg.salvo_up;
              skillUpgradeObj.BulletCount += skillUpgradeCfg.intensity_up;

              if (!this._battleSkillUpgradeData.has(skillId)) {
                this._battleSkillUpgradeData.set(skillId, skillUpgradeObj);
              }
            }
          }
        }
        /* 获取升级技能 */


        getUpgradeSkillBySkillId(skillCfg) {
          let skillCfgTem = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).clone(skillCfg);

          if (this._battleSkillUpgradeData.has(skillCfgTem.Id)) {
            let upgradeObj = this._battleSkillUpgradeData.get(skillCfgTem.Id);

            for (const key in upgradeObj) {
              if (Object.prototype.hasOwnProperty.call(upgradeObj, key)) {
                const element = upgradeObj[key];

                if (skillCfgTem.hasOwnProperty(key)) {
                  skillCfgTem[key] += element;
                }
              }
            }
          } //TODO  加上针对所有技能id 0


          return skillCfgTem;
        }
        /**
        * 获取技能目标id
        * @param targetIdArr 
        */


        getSkillTargetId(targetIdArr, index) {
          if (targetIdArr.length) {
            return index < targetIdArr.length ? targetIdArr[index] : targetIdArr[targetIdArr.length - 1];
          }

          return 0;
        }
        /**
         * 获取每次释放的子弹数量
         */


        getSkillBulletCount(targetId) {
          if (targetId) {
            let targetCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).getDataById(new (_crd && SkillTargetCfg === void 0 ? (_reportPossibleCrUseOfSkillTargetCfg({
              error: Error()
            }), SkillTargetCfg) : SkillTargetCfg)(), targetId);

            if (targetCfg.random) {
              let randomArr = targetCfg.random.split(':');
              return Number(randomArr[1]);
            }

            return 1;
          }

          return 1;
        }
        /**
         * 获取偏移角度
         * @param index 子弹索引
         * @param intervalAngle 间隔角度
         */


        getSkillDirAngle(index, intervalAngle) {
          let angle = 0;

          if (index) {
            if (index % 2 == 0) {
              angle = index / 2 * intervalAngle;
            } else {
              angle = -Math.ceil(index / 2) * intervalAngle;
            }
          }

          return angle;
        }
        /**
         * 获取技能攻击目标坐标
         * @param targetId 
         */


        getSkillAtkTargetPos(targetId, curPos, skillKey) {
          let posArr = [];

          if (targetId) {
            let targetCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
              error: Error()
            }), CfgMgr) : CfgMgr).getDataById(new (_crd && SkillTargetCfg === void 0 ? (_reportPossibleCrUseOfSkillTargetCfg({
              error: Error()
            }), SkillTargetCfg) : SkillTargetCfg)(), targetId);
            let targetType = targetCfg.type;
            let random = targetCfg.random;
            let randomArr = random.split(':');
            let poolCount = Number(randomArr[0]);
            let targetCount = Number(randomArr[1]);

            if (targetType.length) {
              switch (targetType[0]) {
                case 1:
                  //英雄最近
                  posArr = this.getHeroNearTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                case 2:
                  //英雄最近
                  posArr = this.getHeroNearTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                case 3:
                  //最大血量
                  posArr = this.getMonsterHpTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                case 4:
                  //最小血量
                  posArr = this.getMonsterHpTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                case 7:
                  //屏幕内随机
                  posArr = this.getScreenTargetPos(poolCount, targetCount, skillKey);
                  break;

                case 8:
                  //离自身最近
                  posArr = this.getSelfTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                case 9:
                  //离自身最远
                  posArr = this.getSelfTargetPos(true, poolCount, targetCount, skillKey, curPos);
                  break;

                default:
                  posArr = this.getScreenTargetPos(poolCount, targetCount, skillKey);
                  break;
              }
            } //为空则随机


            posArr = posArr.length ? posArr : this.getRandPos(curPos, targetCount);
          } else {
            posArr = [curPos];
          }

          return posArr;
        }
        /**
         * 获取英雄近远目标
         * @param status   ture:最近  false：最远
         * @param randomStr 随机参数
         */


        getHeroNearTargetPos(status, poolCount, targetCount, heroKey, curPos) {
          let posArr = [];
          let monsterNodeMap = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getNearMonsterTarget(heroKey);
          let data = [];
          let checkArr = [];

          if (monsterNodeMap.size) {
            monsterNodeMap.forEach(item => {
              //垂直距离
              let len = item.getColliderPos().x;
              data.push({
                monsterBase: item,
                distance: len
              });
            });
            data.sort((a, b) => {
              return status ? a.distance - b.distance : b.distance - a.distance;
            });
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);

            if (checkArr.length) {
              for (let i = 0; i < targetCount; i++) {
                let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                let e = checkArr[index];
                posArr.push(e.monsterBase.getColliderPos());
              }
            }
          }

          return posArr;
        }
        /**
         * 获取血量高低目标
         * @param status ture:高  false：低
         * @param randomStr 随机参数
         */


        getMonsterHpTargetPos(status, poolCount, targetCount, heroKey, curPos) {
          let posArr = [];
          let monsterNodeMap = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getNearMonsterTarget(heroKey);
          let data = [];
          let checkArr = [];

          if (monsterNodeMap.size) {
            monsterNodeMap.forEach(item => {
              let curhp = item.curHp;
              data.push({
                monsterBase: item,
                hp: curhp
              });
            });
            data.sort((a, b) => {
              return !status ? a.hp - b.hp : b.hp - a.hp;
            });
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);

            if (checkArr.length) {
              for (let i = 0; i < targetCount; i++) {
                let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                let e = checkArr[index];
                posArr.push(e.monsterBase.getColliderPos());
              }
            }
          }

          return posArr;
        }
        /**
         * 获取屏幕内随机目标
         * @param randomStr 
         */


        getScreenTargetPos(poolCount, targetCount, heroKey) {
          let posArr = [];
          let monsterNodeMap = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getNearMonsterTarget(heroKey);

          if (monsterNodeMap.size) {
            let data = Array.from(monsterNodeMap.values());

            for (let i = 0; i < targetCount; i++) {
              let index = Math.floor(Math.random() * data.length);
              posArr.push(data[index].getColliderPos());
            }
          }

          return posArr;
        }
        /**
         * 获取自身近远目标
         * @param status ture:近  false：远
         * @param randomStr  随机参数
         */


        getSelfTargetPos(status, poolCount, targetCount, heroKey, curPos) {
          let posArr = [];
          let monsterNodeMap = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getNearMonsterTarget(heroKey);
          let data = [];
          let checkArr = [];

          if (monsterNodeMap.size) {
            monsterNodeMap.forEach(item => {
              //垂直距离
              let len = Vec3.distance(item.getColliderPos(), curPos);

              if (len > 50) {
                data.push({
                  monsterBase: item,
                  distance: len
                });
              }
            });
            data.sort((a, b) => {
              return status ? a.distance - b.distance : b.distance - a.distance;
            });
            poolCount = poolCount >= data.length ? data.length : poolCount;
            checkArr = data.slice(0, poolCount);

            if (checkArr.length) {
              for (let i = 0; i < targetCount; i++) {
                let index = i < checkArr.length ? Math.floor(Math.random() * checkArr.length) : 0;
                let e = checkArr[index];
                posArr.push(e.monsterBase.getColliderPos());
              }
            }
          }

          return posArr;
        }

        getRandPos(curPos, targetCount) {
          let posArr = [];

          for (let i = 0; i < targetCount; i++) {
            let targetPos = new Vec3();
            targetPos.x = 0;
            targetPos.y = (Math.random() - 0.5) * 2 * 200;
            posArr.push(targetPos);
          }

          return posArr;
        }
        /**
         * 检测碰撞触发技能 skillGroupType
         *  1=碰撞之后首次触发
            2=技能结束后触发
            3=碰撞触发
            4=闪电链击中触发
            5=范围伤害碰撞后
            6=技能释放或命中多少次触发
            7=由城墙释放
            8=持续技能触发，和持续技能一起释放一起结束
            9=怪物死亡后触发
            11=持续技能碰撞后触发
         * @param trigger 
         */


        checkColliderTriggleSkill(trigger, count, damageTimes) {
          let check = false;

          switch (trigger) {
            case 1:
              //碰撞之后首次触发
              check = count == 1 ? true : false;
              break;

            case 2:
              //技能结束后触发
              check = count == damageTimes ? true : false;
              break;

            case 3:
              //碰撞触发
              check = true;
              break;

            default:
              check = false;
              break;
          }

          return check;
        }

        clear() {
          this._battleSkillUpgradeData.clear();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new SkillData();
          }

          return this._instance;
        }

      });
      /* 技能子弹对象 */


      SkillData._instance = null;

      _export("SkillBulletObj", SkillBulletObj = class SkillBulletObj {
        constructor() {
          this.skillKey = void 0;
          //技能唯一值
          this.skillCfg = void 0;
          //技能配置
          this.layer = 1;
          //1:怪物上层 0：怪物下层
          this.pos = void 0;
          //技能初始位置
          this.callback = void 0;
          //技能释放完回调
          this.targetPos = void 0;
          //技能目标位置
          this.param = void 0;
          //技能参数
          this.scale = 1;
        } //技能大小


      });

      _export("ReleaseSkillObj", ReleaseSkillObj = class ReleaseSkillObj {
        constructor() {
          this.skillKey = void 0;
          //技能唯一值
          this.skillCfg = void 0;
          //技能配置
          this.animTime = 0.2;
          this.releaseTimes = 1;
          //释放次数
          this.bulletCount = 1;
          //子弹数量
          this.callback = void 0;
        }

      });

      _export("AtkObj", AtkObj = class AtkObj {
        constructor() {
          this.atk = 0;
          //攻击力
          this.type = 0;
        } //攻击类型 0:默认  1:暴击


      });
      /* 技能提升对象  */


      _export("SkillUpgradeObj", SkillUpgradeObj = class SkillUpgradeObj {
        constructor() {
          this.skillId = 0;
          //技能id
          this.Hp = 0;
          this.Exp = 0;
          this.Gold = 0;
          this.CdPer = 0;
          //技能cd百分比
          this.DamageRange = 0;
          //伤害范围
          this.DamageNum = 0;
          //伤害次数
          this.Damage = 0;
          //伤害
          this.Range = 0;
          //攻击范围
          this.Speed = 0;
          //移动速度
          this.Salvo = 0;
          //发射次数
          this.BulletCount = 0;
        } //子弹个数


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33d432a1e91ce8533f91bb9ecd50b12bea45a989.js.map