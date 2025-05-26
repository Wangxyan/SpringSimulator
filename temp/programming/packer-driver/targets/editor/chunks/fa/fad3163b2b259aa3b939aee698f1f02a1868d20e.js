System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, Collider2D, Contact2DType, SkillBulletBase, GameDefine, MonsterBase, _dec, _class, _crd, ccclass, property, SkillBulletItem;

  function _reportPossibleCrUseOfSkillBulletBase(extras) {
    _reporterNs.report("SkillBulletBase", "./SkillBulletBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillBulletObj(extras) {
    _reporterNs.report("SkillBulletObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      SkillBulletBase = _unresolved_2.SkillBulletBase;
    }, function (_unresolved_3) {
      GameDefine = _unresolved_3.GameDefine;
    }, function (_unresolved_4) {
      MonsterBase = _unresolved_4.MonsterBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6484nUmyVJOrVFOypCdAIm", "SkillBulletItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Vec3', 'Collider2D', 'IPhysics2DContact', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillBulletItem", SkillBulletItem = (_dec = ccclass('SkillBulletItem'), _dec(_class = class SkillBulletItem extends (_crd && SkillBulletBase === void 0 ? (_reportPossibleCrUseOfSkillBulletBase({
        error: Error()
      }), SkillBulletBase) : SkillBulletBase) {
        init(skillBulletObj, targetPos, angle) {
          this.initStatus = false;
          this.skillBulletObj = skillBulletObj;
          this.initSkillBullet(targetPos, angle);
        }

        start() {
          // 注册单个碰撞体的回调函数
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          otherCollider.node.getComponent(_crd && MonsterBase === void 0 ? (_reportPossibleCrUseOfMonsterBase({
            error: Error()
          }), MonsterBase) : MonsterBase).onAttacked(this.skillBulletObj.skillCfg.Damage);
          this.clear();
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart && this.initStatus) {
            let frames = director.getTotalFrames();
            this.updateSkillBulletScreen(dt);
            this.setBulletMove(dt);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fad3163b2b259aa3b939aee698f1f02a1868d20e.js.map