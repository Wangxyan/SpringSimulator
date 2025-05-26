System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, HeroData, _crd, HeroAnim;

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReleaseSkillObj(extras) {
    _reporterNs.report("ReleaseSkillObj", "./SkillData", _context.meta, extras);
  }

  _export("HeroData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb7bbazU8hHH7H+JeHxuMK9", "HeroData", undefined);

      __checkObsolete__(['Rect', 'Vec2', 'Vec3']);

      _export("HeroData", HeroData = class HeroData {
        constructor() {
          this._heroPoint = new Vec3(0, -620, 0);
          this._heroR = 450;
          //检测范围
          this._rangeW = 200;
          this._rangeH = 500;
          this._heroKey = '1001';
          this._ReleaseSkillQueue = [];
          this._curHp = 0;
          this._maxHp = 300;
        }

        get heroPoint() {
          return this._heroPoint;
        }

        get heroKey() {
          return this._heroKey;
        }

        get heroR() {
          return this._heroR;
        }

        get maxHp() {
          return this._maxHp;
        }

        get curHp() {
          return this._curHp;
        }

        set curHp(value) {
          this._curHp -= value;

          if (this._curHp <= 0) {
            this._curHp = 0;
          }
        }

        init() {
          this._curHp = 500;
          this._maxHp = 500;
        }
        /* 检测位置是否在英雄范围内 */


        checkInHeroRange(pos, com) {
          let dis = Vec2.distance(pos, new Vec2(this._heroPoint.x, this._heroPoint.y));

          if (dis < 100) {
            return false;
          } else if (pos.y - this.heroPoint.y < 300) {
            let vector = new Vec3();
            let dir = Vec3.subtract(vector, this._heroPoint.clone(), new Vec3(pos.x, pos.y, 0));
            com.dir = dir.normalize();
          }

          return true;
        }
        /* 添加队列技能 */


        addQueueSkill(releaseSkillObj) {
          this._ReleaseSkillQueue.push(releaseSkillObj);
        }
        /* 获得队列技能 */


        getQueueSkill() {
          return this._ReleaseSkillQueue.shift();
        }

        clear() {
          this._ReleaseSkillQueue = [];
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new HeroData();
          }

          return this._instance;
        }

      });

      HeroData._instance = null;

      _export("HeroAnim", HeroAnim = /*#__PURE__*/function (HeroAnim) {
        HeroAnim["IDLE"] = "Idle";
        HeroAnim["ATK"] = "Skill";
        HeroAnim["DIE"] = "die";
        return HeroAnim;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8318221a65e9cfc9241edeaeae9640b661e6804.js.map