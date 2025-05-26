System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, v3, view, ChapterEventCfg, CfgMgr, Util, MonsterCfg, GameDefine, MonsterData, MonsterObj, MonsterEventObj, _crd;

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterEventCfg(extras) {
    _reporterNs.report("ChapterEventCfg", "../../Model/ChapterEventModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterCfg(extras) {
    _reporterNs.report("MonsterCfg", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  _export({
    MonsterData: void 0,
    MonsterObj: void 0,
    MonsterEventObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      ChapterEventCfg = _unresolved_2.ChapterEventCfg;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      Util = _unresolved_4.Util;
    }, function (_unresolved_5) {
      MonsterCfg = _unresolved_5.MonsterCfg;
    }, function (_unresolved_6) {
      GameDefine = _unresolved_6.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43feaU49+ZAJb6zeIrQqFaT", "MonsterData", undefined);

      __checkObsolete__(['Intersection2D', 'Rect', 'Vec2', 'Vec3', 'isValid', 'log', 'v2', 'v3', 'view']);

      _export("MonsterData", MonsterData = class MonsterData {
        constructor() {
          this._nearMonsterData = new Map();
          //多技能对应最近怪物  key=>角色id + | + pid  value=>怪物脚本
          this._monsterNodeMap = new Map();
          //怪物节点
          this._maxCheckCont = 3;
          //最大检测数量
          this._brushMonsterPoint = new Map();
          //刷怪点数据
          this._killNum = 0;
          //杀死怪物数量
          this._killBossNum = 0;
          //杀死boss的数量
          this._brushMonsterEventData = [];
          //刷怪事件数据
          this._wave = 0;
          //刷怪波次
          this._MaxWave = 10;
        }

        //最大波次
        set wave(value) {
          this._wave = value;
        }

        get wave() {
          return this._wave;
        }

        set MaxWave(value) {
          this._MaxWave = value;
        }

        get MaxWave() {
          return this._MaxWave;
        }

        get killBossNum() {
          return this._killBossNum;
        }

        set killBossNum(value) {
          this._killBossNum += value;
        }

        get killNum() {
          return this._killNum;
        }

        set killNum(value) {
          this._killNum += value;
        }

        get brushMonsterEventData() {
          return this._brushMonsterEventData;
        }

        init() {
          this._brushMonsterEventData = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).clone((_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && ChapterEventCfg === void 0 ? (_reportPossibleCrUseOfChapterEventCfg({
            error: Error()
          }), ChapterEventCfg) : ChapterEventCfg)()));
          this.MaxWave = this._brushMonsterEventData[this._brushMonsterEventData.length - 1].Wave;
        }
        /**
         * 设置最近的怪物
         */


        setNearMonster(skillKey, skillPos, range) {
          let monsterComMap = new Map();

          if (this._nearMonsterData.has(skillKey)) {
            monsterComMap = this._nearMonsterData.get(skillKey);

            if (monsterComMap.size < this._maxCheckCont) {
              //添加范围怪物
              this.addSkillRangeMonster(skillPos, range, monsterComMap);
            }
          } else {
            //添加范围怪物
            this._nearMonsterData.set(skillKey, monsterComMap);

            this.addSkillRangeMonster(skillPos, range, monsterComMap);
          }
        }
        /* 添加范围怪物 */


        addSkillRangeMonster(skillPos, range, monsterComMap) {
          let monsterBaseArr = Array.from(this._monsterNodeMap.values());

          for (let i = 0; i < monsterBaseArr.length; i++) {
            const element = monsterBaseArr[i];
            let monsterPos = element.curPos;
            let monsteKey = element.monsterKey;
            let len = Vec3.distance(skillPos, monsterPos);

            if (len <= range && monsterComMap.size < this._maxCheckCont) {
              monsterComMap.set(monsteKey, element);
            }
          }
        }
        /* 获取技能最近的怪物 */


        getNearMonster(skillKey) {
          let targetArr = [];

          if (this._nearMonsterData.has(skillKey)) {
            let monsterBaseArr = Array.from(this._nearMonsterData.get(skillKey).values());

            for (let i = 0; i < monsterBaseArr.length; i++) {
              const element = monsterBaseArr[i];

              if (element) {
                targetArr.push(element.curPos);
              }
            }
          }

          return targetArr;
        }
        /**
         * 删除最近怪物
         * @param roleId 
         */


        deleteNearMonster(monsterKey) {
          this._nearMonsterData.forEach((item, key) => {
            if (item.has(monsterKey)) {
              item.delete(monsterKey);
            }
          });
        }
        /* 清楚最近的怪物 */


        clearNearMonster() {
          this._nearMonsterData.clear();
        }
        /**
         * 获得最近怪物
         * @param skillKey 
         */


        getNearMonsterTarget(skillKey) {
          let monsterCom = new Map();

          if (this._nearMonsterData.has(skillKey)) {
            monsterCom = this._nearMonsterData.get(skillKey);
          }

          return monsterCom;
        }
        /**
         * 检测是否有最近怪物
         * @param skillKey 
         */


        checkNearMonster(skillKey) {
          if (this._nearMonsterData.has(skillKey)) {
            let monsterComMap = this._nearMonsterData.get(skillKey);

            return monsterComMap.size ? true : false;
          }

          return false;
        }
        /**
          * 添加怪物节点
          */


        addMonsterNodeByKey(monsterCom) {
          if (monsterCom) {
            this._monsterNodeMap.set(monsterCom.monsterKey, monsterCom);
          }
        }
        /**
         * 移除怪物节点
         */


        deleteMonsterNodeByKey(monsterKey) {
          this._monsterNodeMap.delete(monsterKey);
        }
        /**
         * 检测技能范围内是否有怪物
         * @param skillPos 
         * @param range 
         */


        checkSkillNearMonster(skillPos, range) {
          let check = false;

          if (this._monsterNodeMap.size) {
            let monsterBaseArr = Array.from(this._monsterNodeMap.values());

            for (let i = 0; i < monsterBaseArr.length; i++) {
              const element = monsterBaseArr[i];

              if (element && element.initStatus) {
                let monsterPos = element.curPos;
                let len = Vec3.distance(skillPos, monsterPos);

                if (len <= range) {
                  check = true;
                  break;
                }
              }
            }
          }

          return check;
        }
        /**
         * 设置刷怪点数据
         * @param pid 
         * @param pos 
         */


        setBrushMonsterPoint(pid, rect) {
          this._brushMonsterPoint.set(pid, rect);
        }
        /**
         * 设置boss刷怪点数据
         * @param pid 
         * @param pos 
         */


        setBossBrushPoint(pid, pos) {}
        /**
         * 获取指定刷怪随机点
         * @param Offset 
         */


        getAppointMonsterPoint(Offset = new Vec2(0, 100)) {
          let len = this._brushMonsterPoint.size;
          let pid = Math.floor(Math.random() * len);

          let rect = this._brushMonsterPoint.get(pid); //获取区域内随机坐标点


          let pos = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRectRandPos(rect);
          pos.x += Offset.x;
          pos.y += Offset.y;
          return pos;
        }
        /**
         * 获取boss刷怪点数据
         * @param pid 
         */


        getBossBrushPoint(Offset = new Vec2(100, 100)) {
          let x = 0;
          let y = (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).viewHeight / 2 + Math.random() * Offset.x;
          return v3(x, y, 0);
        }
        /**
         * 获取屏幕上方怪物随机位置
         * @param Offset  偏移位置 
         */


        getScreenUpRandPos(Offset = new Vec2(60, 50)) {
          let visibleSize = view.getVisibleSize();
          let width = visibleSize.width - Offset.x;
          let pos = new Vec3();
          pos.x = (Math.random() - 0.5) * width;
          pos.y = visibleSize.height / 2 + Math.random() * Offset.y - 200;
          return pos;
        }
        /**
         * 通过怪物id 获取怪物配置
         * @param monsterId 
         */


        getMonsterCfgById(monsterId) {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && MonsterCfg === void 0 ? (_reportPossibleCrUseOfMonsterCfg({
            error: Error()
          }), MonsterCfg) : MonsterCfg)(), monsterId);
        }
        /**
         * 获取怪物攻击
         * @param mType 怪物 类型
         */


        getMonsterAtk(mType) {
          // switch (mType) {
          //     case MonsterType.LITTLE:
          //         break;
          //     case MonsterType.ELITE:
          //         atk = atk * Number(Constants.SysConstant.EliteAtt.ConstantValue);
          //         break;
          //     case MonsterType.BOSS:
          //         atk = atk * Number(Constants.SysConstant.BossAtt.ConstantValue);
          //         break;
          // }
          return 10;
        }
        /**
         * 获取怪物血量
         */


        getMonsterHp(hp) {
          return hp;
        }
        /**
         * 获取怪物移动速度
         */


        getMonsterSpeed(speed) {
          return speed;
        }

        clear() {
          this._nearMonsterData.clear();

          this._monsterNodeMap.clear();

          this._brushMonsterPoint.clear();

          this._killNum = 0;
          this._killBossNum = 0;
          this._wave = 0;
          this._MaxWave = 15;
          this._brushMonsterEventData = [];
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new MonsterData();
          }

          return this._instance;
        }

      });

      MonsterData._instance = null;

      _export("MonsterObj", MonsterObj = class MonsterObj {
        constructor() {
          this.id = void 0;
          //怪物id
          this.HpUp = 1;
        } //血量系数


      });

      _export("MonsterEventObj", MonsterEventObj = class MonsterEventObj {
        constructor() {
          //刷怪数量到结束事件
          this.monsterId = void 0;
          //怪物数据
          this.HpUp = void 0;
          //怪物血量系数
          this.startTime = void 0;
          //刷怪开始时间
          this.secNum = void 0;
          //每秒刷怪数量
          this.diffNum = void 0;
          //每秒刷怪向下取整  相差数量分配
          this.curNum = 0;
          //当前刷怪数量
          this.totalNum = 1;
        } //总的的刷怪数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecfbf9e8daa5f0f4ef8d3ea804565f5253b78ed6.js.map