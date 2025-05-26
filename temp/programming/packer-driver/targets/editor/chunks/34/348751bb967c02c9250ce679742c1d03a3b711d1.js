System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Node, Prefab, sp, tween, Vec3, BaseComponent, EventListener, GameEvent, HeroAnim, HeroData, SkillBulletObj, SkillData, MonsterData, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAnim(extras) {
    _reporterNs.report("HeroAnim", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillBulletObj(extras) {
    _reporterNs.report("SkillBulletObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillData(extras) {
    _reporterNs.report("SkillData", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../Frame/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      HeroAnim = _unresolved_5.HeroAnim;
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      SkillBulletObj = _unresolved_6.SkillBulletObj;
      SkillData = _unresolved_6.SkillData;
    }, function (_unresolved_7) {
      MonsterData = _unresolved_7.MonsterData;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52b720GqCpG9oe8aaI0Em0S", "HeroBase", undefined);

      __checkObsolete__(['_decorator', 'color', 'Component', 'instantiate', 'math', 'Node', 'Prefab', 'sp', 'tween', 'Vec3', 'AnimationComponent', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBase", HeroBase = (_dec = ccclass('HeroBase'), _dec2 = property(sp.Skeleton), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class HeroBase extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "heroSpine", _descriptor, this);

          _initializerDefineProperty(this, "skillTypeList", _descriptor2, this);

          _initializerDefineProperty(this, "skillTypePrefab", _descriptor3, this);

          this._firePos = new Vec3(0, 70, 0);
          this.isCollider = void 0;
          //是否碰撞
          this.heroKey = '';
          //英雄唯一标识
          this.releaseSkillStatus = true;
          this._showHitTotalTime = 0.15;
        }

        //释放技能状态
        initBorn() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HERO_HP, this.node.getPosition());
          this.heroKey = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.heroKey;
          this.heroSpine.setAnimation(0, (_crd && HeroAnim === void 0 ? (_reportPossibleCrUseOfHeroAnim({
            error: Error()
          }), HeroAnim) : HeroAnim).IDLE, true);
          this.insertRectCircleObj();
        }
        /* 获取技能释放点 */


        getFirePos() {
          let pos = this.node.getPosition();
          let firePos = new Vec3(pos.x + this._firePos.x, pos.y + this._firePos.y, 0);
          return firePos;
        }
        /**
        * 更新间隔伤害时间
        */


        updateSkillDamageInterval() {}
        /**
        * 添加圆形区域检测对象
        * @param dt 
        */


        insertRectCircleObj() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INSERT_HERO_CIRCLE_OBJ, this.heroKey, this);
        }
        /* 受伤 */


        onAttacked(atk) {
          this.playHit();
          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.curHp = atk;
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_HERO_HP);
        }

        playHit() {
          //占用alpha通道
          let comObj = this.heroSpine;
          comObj.color = color(255, 255, 255, 1);
          let tmpColor = color(255, 255, 255, 50);
          tween(comObj).to(this._showHitTotalTime, {}, {
            onUpdate(target, ratio) {
              tmpColor = color(255, 255, 255, 50 * ratio);
              target.color = tmpColor;
            }

          }).call(() => {
            tmpColor = color(255, 255, 255, 255);
            comObj.color = tmpColor;
          }).start();
        }
        /* 释放技能 */


        releaseSkill() {
          if (this.releaseSkillStatus) {
            let releaseSkillObj = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).instance.getQueueSkill();

            if (releaseSkillObj) {
              this.releaseSkillStatus = false;
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound(5);
              this.unschedule(this.initHeroAnim);
              this.heroSpine.setAnimation(0, (_crd && HeroAnim === void 0 ? (_reportPossibleCrUseOfHeroAnim({
                error: Error()
              }), HeroAnim) : HeroAnim).ATK, false);
              this.scheduleOnce(() => {
                let skillBulletObj = new (_crd && SkillBulletObj === void 0 ? (_reportPossibleCrUseOfSkillBulletObj({
                  error: Error()
                }), SkillBulletObj) : SkillBulletObj)();
                skillBulletObj.skillKey = releaseSkillObj.skillKey;
                skillBulletObj.skillCfg = (_crd && SkillData === void 0 ? (_reportPossibleCrUseOfSkillData({
                  error: Error()
                }), SkillData) : SkillData).instance.getUpgradeSkillBySkillId(releaseSkillObj.skillCfg);
                skillBulletObj.pos = this.getFirePos();
                skillBulletObj.targetPos = new Vec3(0, -200, 0);
                let interval = 0.1;
                let releaseTimes = skillBulletObj.skillCfg.Salvo;
                let targetCount = 1; //释放次数

                for (let i = 0; i < releaseTimes; i++) {
                  let targetPosArr = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                    error: Error()
                  }), MonsterData) : MonsterData).instance.getNearMonster(skillBulletObj.skillKey);

                  if (targetPosArr.length) {
                    //子弹个数
                    let bulletCount = skillBulletObj.skillCfg.BulletCount;

                    for (let j = 0; j < bulletCount; j++) {
                      //目标数量
                      for (let n = 0; n < targetCount; n++) {
                        let intervalAngle = skillBulletObj.skillCfg.IntervalAngle;
                        let angle = (_crd && SkillData === void 0 ? (_reportPossibleCrUseOfSkillData({
                          error: Error()
                        }), SkillData) : SkillData).instance.getSkillDirAngle(j, intervalAngle);

                        if (n < targetPosArr.length) {
                          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                            error: Error()
                          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                            error: Error()
                          }), GameEvent) : GameEvent).CREATE_SKILL_EFFECT, skillBulletObj, targetPosArr[n], angle, interval * i);
                        }
                      }
                    }
                  }
                }

                this.releaseSkillStatus = true;
                releaseSkillObj.callback && releaseSkillObj.callback();
                this.scheduleOnce(this.initHeroAnim, 1);
              }, releaseSkillObj.animTime);
            }
          }
        }

        initHeroAnim() {
          this.heroSpine.addAnimation(0, (_crd && HeroAnim === void 0 ? (_reportPossibleCrUseOfHeroAnim({
            error: Error()
          }), HeroAnim) : HeroAnim).IDLE, true);
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).HERO_HURT, this.onAttacked, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).HERO_HURT, this.onAttacked, this);
        }

        childUpdate(dt) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroSpine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillTypeList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillTypePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=348751bb967c02c9250ce679742c1d03a3b711d1.js.map