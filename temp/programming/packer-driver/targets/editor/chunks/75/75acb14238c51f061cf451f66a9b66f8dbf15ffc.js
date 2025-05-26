System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AnimationComponent, CircleCollider2D, color, Color, Sprite, tween, UITransform, v3, Vec2, Vec3, BaseComponent, PoolManager, EventListener, GameEvent, MonsterEvent, MonsterAmin, MonsterType, MonsterData, HeroData, GameDefine, MoveEffect, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MonsterBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterEvent(extras) {
    _reporterNs.report("MonsterEvent", "./Event/MonsterEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterAmin(extras) {
    _reporterNs.report("MonsterAmin", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterCfg(extras) {
    _reporterNs.report("MonsterCfg", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterType(extras) {
    _reporterNs.report("MonsterType", "../../Model/ChapterEventModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillBulletObj(extras) {
    _reporterNs.report("SkillBulletObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterObj(extras) {
    _reporterNs.report("MonsterObj", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterHpItem(extras) {
    _reporterNs.report("MonsterHpItem", "../Battle/MonsterHpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShadow(extras) {
    _reporterNs.report("Shadow", "../Battle/Shadow", _context.meta, extras);
  }

  _export("MoveEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationComponent = _cc.AnimationComponent;
      CircleCollider2D = _cc.CircleCollider2D;
      color = _cc.color;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      EventListener = _unresolved_4.EventListener;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }, function (_unresolved_6) {
      MonsterEvent = _unresolved_6.MonsterEvent;
    }, function (_unresolved_7) {
      MonsterAmin = _unresolved_7.MonsterAmin;
    }, function (_unresolved_8) {
      MonsterType = _unresolved_8.MonsterType;
    }, function (_unresolved_9) {
      MonsterData = _unresolved_9.MonsterData;
    }, function (_unresolved_10) {
      HeroData = _unresolved_10.HeroData;
    }, function (_unresolved_11) {
      GameDefine = _unresolved_11.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1634eQBtIVM3bFh1eHG/Url", "MonsterBase", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationComponent', 'BoxCollider2D', 'CircleCollider2D', 'color', 'Color', 'Component', 'log', 'math', 'Node', 'Rect', 'sp', 'Sprite', 'Tween', 'tween', 'UITransform', 'v2', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterBase", MonsterBase = (_dec = ccclass('MonsterBase'), _dec2 = property(AnimationComponent), _dec(_class = (_class2 = class MonsterBase extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "monsterAnim", _descriptor, this);

          this.monsterHpItem = null;
          //怪物血量
          this.monsterShadow = null;
          //怪物阴影
          this.initStatus = false;
          //怪物初始化
          this.monsterCfg = null;
          //怪物配置
          this.monsterObj = null;
          //怪物对象
          this.moveSpeed = 80;
          //怪物移动速度
          this.monsterId = 101;
          //怪物id
          this.monsterHp = 10;
          //怪物血量
          this.curHp = 10;
          //怪物当前血量
          this.atk = 5;
          //怪物攻击
          this.atkTime = 0;
          //攻击间隔时间
          this.dir = v3(0, -1, 0);
          //怪物移动方向
          this.scale = 1;
          //整体比例缩放大小
          this.isMove = true;
          //是否移动
          this.curAnim = '';
          //当前动画
          this.curPos = new Vec3();
          //怪物当前基点坐标
          this.colliderPos = new Vec3();
          //怪物碰撞中心坐标
          this.boundBox = null;
          //包围盒
          this.monsterKey = '';
          this.isDie = false;
          //是否死亡
          this.isCollider = void 0;
          //是否碰撞
          this.isHurt = false;
          //是否受伤
          this.isRepulse = false;
          //是否击退
          this._moveEffect = null;
          this._showHitTotalTime = 0.15;
        }

        //击退效果
        setMonsterBorn() {
          this.moveSpeed = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getMonsterSpeed(this.monsterCfg.Speed);
          this.monsterId = this.monsterCfg.Id;
          this.monsterHp = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getMonsterHp(this.monsterCfg.Hp * Number(this.monsterObj.HpUp));
          this.curHp = this.monsterHp;
          this.atk = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.getMonsterAtk(this.monsterCfg.mType);
          this.dir = v3(0, -1, 0);
          this.isMove = true;
          this.atkTime = 0;
          let comObj = this.monsterAnim.getComponent(Sprite);
          comObj.color = new Color(255, 255, 255);
          this.setMonsterSize();
          let monterName = this.monsterCfg.mType == (_crd && MonsterType === void 0 ? (_reportPossibleCrUseOfMonsterType({
            error: Error()
          }), MonsterType) : MonsterType).BOSS ? 'boss' : 'monster';
          this.monsterKey = monterName + this.monsterId + Math.random().toString().substring(2, 6) + Math.random().toString().substring(2, 12);
          this.setMonsterBoundBox();
          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.addMonsterNodeByKey(this);
          this.isDie = false;
          this.isHurt = false;
          this.isRepulse = false;
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_HP, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_SHADOW, this);
          this.curPos = this.node.getPosition();
          this.initStatus = true;
        }
        /* 设置怪物大小 */


        setMonsterSize() {
          this.scale = this.monsterCfg.IconScale;
          this.node.setScale(v3(this.scale, this.scale, this.scale));
        }

        setMonsterAnim(anim, loop = true) {
          if (this.curAnim != anim) {
            if (this.monsterCfg) {
              this.monsterAnim.play(anim);
              this.curAnim = anim;
            }
          }
        }
        /* 设置动画监听 */


        setMonsterAnimEvent() {
          this.monsterAnim.on(Animation.EventType.FINISHED, data => {
            this.attackHero(this.atk);
            this.setMonsterAnim((_crd && MonsterAmin === void 0 ? (_reportPossibleCrUseOfMonsterAmin({
              error: Error()
            }), MonsterAmin) : MonsterAmin).Move);
          });
        }
        /**
        * 攻击英雄
        * @param atk 
        */


        attackHero(atk) {
          // console.log('英雄受伤', atk);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).HERO_HURT, atk);
        }
        /**
         * 获取碰撞点坐标
         * @returns 
         */


        getColliderPos() {
          let pos = this.curPos.clone();
          let offset = this.boundBox.offset;
          pos.x += offset.x;
          pos.y += offset.y;
          return pos;
        }
        /**
         * 设置怪物包围盒
         */


        setMonsterBoundBox() {
          this.boundBox = this.node.getComponent(CircleCollider2D);
          this.boundBox.radius = this.monsterCfg.ColliderRadius;
          let offsetArr = this.monsterCfg.ColliderOffset ? this.monsterCfg.ColliderOffset.split('|') : ['0', '0'];
          this.boundBox.offset = new Vec2(Number(offsetArr[0]), Number(offsetArr[1]));
        }
        /**
         * 获取包围盒半径
         * @returns 
         */


        getBoundBoxCircle() {
          let circleR = this.boundBox instanceof CircleCollider2D ? this.boundBox.radius : 20;
          return circleR;
        }
        /**
         * 怪物移动
         * @param dt 
         */


        monsterMoveFrame(dt) {
          if (!this.isRepulse) {
            if (this.isMove) {
              this.setMonsterAnim((_crd && MonsterAmin === void 0 ? (_reportPossibleCrUseOfMonsterAmin({
                error: Error()
              }), MonsterAmin) : MonsterAmin).Move);
              let nodePos = this.node.getPosition();
              let dir = this.dir.clone();
              let dis = dir.multiply(v3(this.moveSpeed * dt, this.moveSpeed * dt, 0));
              let temPos = nodePos.add(dis);
              this.node.setPosition(temPos);
              this.curPos = temPos; //检测英雄
              //检测进入英雄范围内

              this.isMove = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).instance.checkInHeroRange(new Vec2(temPos.x, temPos.y), this);
            } else {
              //攻击
              this.atkTime -= dt;

              if (this.atkTime <= 0) {
                //攻击动作
                this.setMonsterAnim((_crd && MonsterAmin === void 0 ? (_reportPossibleCrUseOfMonsterAmin({
                  error: Error()
                }), MonsterAmin) : MonsterAmin).Atk, false);
                this.atkTime = this.monsterCfg.Interval; //动画完成监听

                this.setMonsterAnimEvent();
              }
            }
          }
        }
        /**
         * 添加方形区域检测对象
         * @param dt 
         */


        insertRectCircleObj(dt) {
          if (this.initStatus) {
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).INSERT_QUARD_TREE_RECT_CIRCLE, this.monsterKey, this, this.boundBox);
          }
        }
        /**
         * 怪物受伤
         */


        onAttacked(attack, type = 0, skillBulletObj = null) {
          if (attack > 0 && !this.isDie) {
            let attacked = Math.ceil(attack);
            this.curHp -= attacked; //血条进度

            this.monsterHpItem && this.monsterHpItem.setMonsterHp(this.curHp, this.monsterHp);
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).CREATE_DAMAGER_NUM, this.getColliderPos(), attacked, type);

            if (this.curHp <= 0) {
              this.curHp = 0;
              this.isDie = true; //获得经验值

              this.clear();
              (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                error: Error()
              }), EventListener) : EventListener).emit((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
                error: Error()
              }), MonsterEvent) : MonsterEvent).MONSTER_DIE, this.curPos);
            } else {
              //受击效果
              // this.setMonsterHurtEffect();
              this.playHit();
            }
          }
        }

        playHit() {
          //占用alpha通道
          let comObj = this.monsterAnim.getComponent(Sprite);
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
        /* 设置怪物受伤状态 */


        setMonsterHurtEffect(time = 0.3) {
          if (!this.isDie && !this.isHurt) {
            this.isHurt = true;
            let comObj = this.monsterAnim.getComponent(Sprite);
            comObj.color = new Color().fromHEX('FF4B4B');
            ;
            this.scheduleOnce(() => {
              this.isHurt = false;
              comObj.color = new Color(255, 255, 255);
            }, time);
          }
        }
        /**
         * 设置怪物首次受伤击退效果
         */


        setMonsterHurtMoveEffect(move, intensity_up, dir, pos) {
          if (move.length) {
            let moveArr = move[0];
            let type = Number(moveArr[0]);
            let speed = Number(moveArr[1]) + intensity_up;
            let time = Number(moveArr[2]);
            let moveEffect = new MoveEffect();
            moveEffect.speed = speed;
            moveEffect.time = time;

            switch (type) {
              case 1:
                //牵引
                moveEffect.dir = dir;
                break;

              case 2:
                //圆心范围内击退
                let vector = new Vec3();
                Vec3.subtract(vector, this.getColliderPos(), pos);
                moveEffect.dir = vector.normalize();
                break;

              case 3:
                //击退
                moveEffect.dir = dir;
                break;
            }

            this._moveEffect = moveEffect;
            this.isRepulse = true;
          }
        }
        /**
         * 移动击退效果
         */


        moveRepulseEffectFrame(dt) {
          if (this.isRepulse) {
            if (this._moveEffect) {
              this._moveEffect.time -= dt;

              if (this._moveEffect.time <= 0) {
                this.isRepulse = false;
                this._moveEffect = null;
              } else {
                let nodePos = this.node.getPosition();

                if (nodePos.y > (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).viewHeight / 2 + this.monsterAnim.node.getComponent(UITransform).height / 2) {
                  this.isRepulse = false;
                  this._moveEffect = null;
                  return;
                }

                ;
                let dir = this._moveEffect.dir;
                let speed = this._moveEffect.speed;
                let dis = dir.multiply(v3(speed * dt, speed * dt, 0));
                let temPos = nodePos.add(dis); //是否出边界

                if (Math.abs(temPos.x) > (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).viewWidth / 2 - this.monsterAnim.node.getComponent(UITransform).width / 2) {
                  let dir = new Vec3(0, 1, 0);
                  dis = dir.multiply(v3(speed * dt, speed * dt, 0));
                  temPos = nodePos.add(dis);
                }

                this.node.setPosition(temPos);
                this.curPos = temPos;
              }
            }
          }
        }
        /* 设置boss死亡 */


        setBossDie() {
          // Debug.log('boss死亡完成');
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).MONSTER_DIE, this.curPos);
          this.clear();
        }
        /* 检测碰撞次数 */


        checkColliderCount() {}
        /**
         * 更新间隔伤害时间
         */


        updateSkillDamageInterval() {}

        clear() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_DIE_EFFECT, this.node.getPosition()); //移除怪物

          this.monsterShadow && this.monsterShadow.clear(); //移除怪物

          this.initStatus = false;
          this.monsterCfg = null;
          this.monsterObj = null;
          this.monsterHpItem = null;
          this.monsterShadow = null;
          this.isDie = false;
          this.isMove = true;
          this.isHurt = false;
          this.isRepulse = false;
          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.killNum = 1;
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DELETE_QUARD_TREE_OBJ, this.monsterKey);
          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.deleteNearMonster(this.monsterKey);
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNodeByKey(this.node, this.monsterId.toString());
          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.deleteMonsterNodeByKey(this.monsterKey);
        }

        childUpdate(dt) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "monsterAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("MoveEffect", MoveEffect = class MoveEffect {
        constructor() {
          this.speed = void 0;
          this.time = void 0;
          this.dir = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75acb14238c51f061cf451f66a9b66f8dbf15ffc.js.map