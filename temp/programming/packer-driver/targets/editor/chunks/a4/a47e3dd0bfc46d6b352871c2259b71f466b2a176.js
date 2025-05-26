System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, bezier, misc, Node, Rect, tween, v2, v3, Vec2, Vec3, PoolManager, BaseComponent, EventListener, GameEvent, Util, AtkObj, GameDefine, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SkillBulletBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAtkObj(extras) {
    _reporterNs.report("AtkObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillBulletObj(extras) {
    _reporterNs.report("SkillBulletObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      bezier = _cc.bezier;
      misc = _cc.misc;
      Node = _cc.Node;
      Rect = _cc.Rect;
      tween = _cc.tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventListener = _unresolved_4.EventListener;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }, function (_unresolved_6) {
      Util = _unresolved_6.Util;
    }, function (_unresolved_7) {
      AtkObj = _unresolved_7.AtkObj;
    }, function (_unresolved_8) {
      GameDefine = _unresolved_8.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f7c12DY8NE1LdJCAb4kT1q", "SkillBulletBase", undefined);

      __checkObsolete__(['_decorator', 'bezier', 'BoxCollider2D', 'CircleCollider2D', 'Component', 'director', 'find', 'log', 'misc', 'Node', 'Rect', 'sp', 'Sprite', 'tween', 'v2', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillBulletBase", SkillBulletBase = (_dec = ccclass('SkillBulletBase'), _dec2 = property(Node), _dec(_class = (_class2 = class SkillBulletBase extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          this.skillBulletObj = null;
          this.initStatus = false;
          this.bulletId = 101;
          //子弹id
          this.during = 10;
          //持续时间
          this.damageR = 30;
          //默认伤害范围
          this.damageInterval = void 0;
          //伤害间隔
          this.damageTimes = void 0;
          //伤害次数
          this.isCollider = void 0;
          //是否碰撞 （伤害间隔控制）
          this.LoopCount = 0;
          //动画播放次数
          this.moveSpeed = 1500;
          //子弹速度
          this.initSpeed = 1500;
          //初始速度
          this.isEasing = false;
          //是否子弹加速
          this.scale = 1;
          //缩放大小
          this._dir = new Vec3();
          //方向向量
          this.curPos = new Vec3();
          //技能当前坐标
          this.targetPos = new Vec3();
          //目标点坐标
          this.quadBoundBox = null;
          //四叉树检测包围盒
          this.boundBox = null;
          //技能检测区域
          this._skillBulletKey = '';
          this.type = 0;
          //技能类型
          this._minY = 5;
          this._maxY = 300;
          this._minX = 0;
          this._maxX = 0;
          this._playTime = 1;
        }

        //飞行时间
        get atkObj() {
          let atkObj = new (_crd && AtkObj === void 0 ? (_reportPossibleCrUseOfAtkObj({
            error: Error()
          }), AtkObj) : AtkObj)();
          atkObj.atk = Math.floor((_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandomInt(5, 15));
          return atkObj;
        }
        /* 初始化技能子弹 */


        initSkillBullet(targetPos, angel = 0) {
          this.type = this.skillBulletObj.skillCfg.Type;
          let nodePos = this.node.getPosition();
          let vector = new Vec3();
          this.targetPos = targetPos.clone();
          Vec3.subtract(vector, targetPos, nodePos); //根据偏移角度计算新向量

          let curAngel = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).vector_to_angle(v2(vector.x, vector.y));
          let v = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).angle_to_vector(curAngel + angel);
          vector.set(v.x, v.y);
          this._dir = vector.normalize();
          this.isEasing = false;
          this.curPos = this.node.getPosition();
          this.scale = 1;
          this.setSkillSize();
          this.during = 10;
          this.moveSpeed = this.getSkillMoveSpeedByType();
          this.initSpeed = this.moveSpeed;
          this.damageTimes = 1;
          this.damageInterval = 0;
          this.isCollider = true;
          this.LoopCount = 0;
          this._skillBulletKey = 'skillBullet' + this.bulletId + Math.random().toString().substring(2, 6) + Math.random().toString().substring(2, 12);
          this.setSkillBulletAnim();
          this.initStatus = true;
        }
        /* 设置技能大小 */


        setSkillSize() {
          this.node.setScale(v3(this.scale, this.scale, this.scale));
        }
        /* 设置技能动画 */


        setSkillBulletAnim() {}
        /**
         * 加速运动
         * @param time 
         * @param isAcc 
         */


        easingSpeed(time, isAcc = true) {
          if (this.isEasing) {
            class BintTweenObj {
              constructor() {
                this.t = void 0;
              }

            }

            let speedTweenObj = new BintTweenObj();
            speedTweenObj.t = 0;
            tween(speedTweenObj).to(time, {
              t: 1
            }, {
              onUpdate: (target, t) => {
                const p0 = v2(0, 0);
                const p1 = v2(0, 0.4);
                const p2 = v2(0.2, 1);
                const p3 = v2(1, 1);
                const x = p0.x * (1 - t) * (1 - t) * (1 - t) + 3 * p1.x * t * (1 - t) * (1 - t) + 3 * p2.x * t * t * (1 - t) + p3.x * t * t * t;
                const y = p0.y * (1 - t) * (1 - t) * (1 - t) + 3 * p1.y * t * (1 - t) * (1 - t) + 3 * p2.y * t * t * (1 - t) + p3.y * t * t * t; //调试

                this.moveSpeed = this.initSpeed + 500 * y;
              }
            }).start();
          }
        }
        /**
         * 设置子弹移动
         * @param dt 
         * @param isAngle  是否有旋转角度 
         * @returns 
         */


        setBulletMove(dt) {
          if (this.skillBulletObj.skillCfg.Speed > 0) {
            let nodePos = this.node.getPosition();
            let dir = v3(this._dir.x, this._dir.y, 0);
            let dis = dir.multiply(v3(this.moveSpeed * dt, this.moveSpeed * dt, 0));
            let temPos = nodePos.add(dis);
            this.node.setPosition(temPos);
            this.curPos = temPos; //调角度

            this.setBulletAngle(this.skillBulletObj.skillCfg.Type);
          }
        }

        setBulletAngle(type) {
          switch (type) {
            case 1:
              //直线运动
              let r = new Vec2(this._dir.x, this._dir.y).signAngle(new Vec2(0, 1));
              let angle = misc.radiansToDegrees(r);
              this.node.angle = -angle;
              break;

            case 2:
              //直线运动旋转
              this.node.angle = this.node.angle - 20;
              break;
          }
        }
        /* 设置子弹抛物线 */


        playBulletTween(targetPos) {
          this.node.eulerAngles = new Vec3(0, 0, 0);
          var bullet = this.node;
          var startPos = bullet.position;
          var startAngle = bullet.eulerAngles;
          var bulletTween = tween(startPos); // let time = Vec3.distance(startPos, targetPos) / this.skillBulletObj.skillCfg.Speed;
          // this._playTime = time > 0.2 ? time : 0.2;

          this._minY = startPos.y + (targetPos.y - startPos.y) / 2 + 100;
          this._maxY = startPos.y + (targetPos.y - startPos.y) / 2 + 100;
          this._maxX = startPos.x + (targetPos.x - startPos.x) / 2 + 100;
          this._minX = startPos.x + (targetPos.x - startPos.x) / 2 + 100;
          const mixY = this._minY;
          const maxY = this._maxY;
          const mixX = this._minX;
          const maxX = this._maxX;

          var progressX = function (start, end, current, t) {
            current = bezier(start, mixX, maxX, end, t);
            return current;
          };

          var progressY = function (start, end, current, t) {
            current = bezier(start, mixY, maxY, end, t);
            return current;
          };

          bulletTween.parallel(tween().to(this._playTime, {
            x: targetPos.x
          }, {
            progress: progressX,
            easing: "smooth",
            onUpdate: () => {
              bullet.setPosition(startPos);
              this.curPos = startPos;
            }
          }), tween().to(this._playTime, {
            y: targetPos.y
          }, {
            progress: progressY,
            easing: "smooth",
            onUpdate: () => {
              bullet.setPosition(startPos);
              this.curPos = startPos;
            }
          })).call(() => {}).start();
          tween(startAngle).to(this._playTime, {
            z: -1440
          }, {
            onUpdate: () => {
              bullet.eulerAngles = startAngle;
            }
          }).start();
        }
        /**
         * 更新技能是否出屏幕
         * @param dt 
         * @returns 
         */


        updateSkillBulletScreen(dt) {
          //出屏幕移除
          let rect = new Rect(-(_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).viewWidth / 2, -(_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).viewHeight / 2, (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).viewWidth, (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).viewHeight);
          let pos = this.curPos;

          if (!rect.contains(v2(pos.x, pos.y))) {
            this.clear();
            return;
          } //持续时间到清除


          this.duringTriggleClearByType(dt);
        }
        /* 更新技能伤害间隔 */


        updateSkillDamageInterval(dt) {
          if (this.skillBulletObj.skillCfg.Damage_interval) {
            this.damageInterval -= dt;
            this.isCollider = false;

            if (this.damageInterval <= 0) {
              this.isCollider = true;
              this.damageInterval = this.skillBulletObj.skillCfg.Damage_interval;
            }
          }
        }
        /**
        * 添加方形区域检测对象
        * @param dt 
        */


        insertRectCircleObj() {
          if (this.initStatus) {
            //通过类型判定是否加入检测对象
            switch (this.type) {
              case 10:
                break;

              default:
                (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                  error: Error()
                }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).INSERT_QUARD_TREE_RECT_CIRCLE, this._skillBulletKey, this, this.quadBoundBox, 1);
                break;
            }
          }
        }

        onAttacked() {}
        /**
         * 直接触发链接技能
         */


        triggleSkillBySkillId() {}
        /* 碰撞触发技能 */


        colliderTriggleSkill(triggerCount, damageTimes) {}
        /**
         * 检测碰撞次数
         * @param count 碰撞次数
         * @param com 
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
         */


        checkColliderCount(count, com) {
          //伤害次数为0则为持续释放
          if (count == 1) {
            //震动
            // EventListener.emit(GameEvent.SCREEN_VIBRATOR, 3, this.skillBulletObj.skillCfg.shake);
            //击退
            if (com.node.parent) {// com.setMonsterHurtMoveEffect(this.skillBulletObj.skillCfg.move, this.skillBulletObj.skillCfg.intensity, this._dir.clone(), this.getColliderPos());
            }
          }

          if (this.damageTimes) {
            //碰撞结束触发新技能效果
            this.colliderTriggleSkill(count, this.damageTimes);

            if (count >= this.damageTimes) {
              //伤害次数达到移除
              this.damageTimeClearByType();
            }
          } else {
            //伤害次数为0根据类型判断是否首次碰撞触发技能
            this.colliderTriggleClearByType(count, this.damageTimes);
          }
        }
        /**
         * 根据类型判断是否首次碰撞触发技能
         */


        colliderTriggleClearByType(count, damageTimes) {}
        /* 根据类型 持续时间了清除 */


        duringTriggleClearByType(dt) {
          this.during -= dt;

          if (this.during <= 0) {
            this.clear();
          }
        }
        /* 根据类型 伤害次数达到了清除 */


        damageTimeClearByType() {
          //TODO 通过类型
          this.clear();
        }
        /**
         * 通过技能类型获取移动速度
         */


        getSkillMoveSpeedByType() {
          let speed = 0;

          switch (this.type) {
            case 99:
              speed = 0;
              break;

            default:
              speed = this.skillBulletObj.skillCfg.Speed;
              break;
          }

          return speed;
        }

        onEnable() {}

        onDisable() {}

        clear() {
          this.initStatus = false;
          this.boundBox = null;
          this.quadBoundBox = null; //技能释放回调

          this.skillBulletObj.callback && this.skillBulletObj.callback();
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DELETE_QUARD_TREE_OBJ, this._skillBulletKey);
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(this.node);
        }

        childUpdate(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
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
//# sourceMappingURL=a47e3dd0bfc46d6b352871c2259b71f466b2a176.js.map