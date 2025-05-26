System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, EventListener, GameEvent, PoolManager, DamageItem, ResourcesUtil, BlastItem, HeroHpItem, MonsterHpItem, Constants, Shadow, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BattleUIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageItem(extras) {
    _reporterNs.report("DamageItem", "../Battle/DamageItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlastItem(extras) {
    _reporterNs.report("BlastItem", "../Battle/BlastItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroHpItem(extras) {
    _reporterNs.report("HeroHpItem", "../Battle/HeroHpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterHpItem(extras) {
    _reporterNs.report("MonsterHpItem", "../Battle/MonsterHpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShadow(extras) {
    _reporterNs.report("Shadow", "../Battle/Shadow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventListener = _unresolved_2.EventListener;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      PoolManager = _unresolved_4.PoolManager;
    }, function (_unresolved_5) {
      DamageItem = _unresolved_5.DamageItem;
    }, function (_unresolved_6) {
      ResourcesUtil = _unresolved_6.ResourcesUtil;
    }, function (_unresolved_7) {
      BlastItem = _unresolved_7.BlastItem;
    }, function (_unresolved_8) {
      HeroHpItem = _unresolved_8.HeroHpItem;
    }, function (_unresolved_9) {
      MonsterHpItem = _unresolved_9.MonsterHpItem;
    }, function (_unresolved_10) {
      Constants = _unresolved_10.Constants;
    }, function (_unresolved_11) {
      Shadow = _unresolved_11.Shadow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b377pXlFFISI2cYT0s3FLN", "BattleUIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'log', 'Node', 'Prefab', 'v2', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleUIManager", BattleUIManager = (_dec = ccclass('BattleUIManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class BattleUIManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "battleUIParent", _descriptor, this);

          _initializerDefineProperty(this, "battleUIDownParent", _descriptor2, this);

          this._battlerUIPrefabData = new Map();
          //预制体数据
          this._battleUiNode = new Map();
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_DAMAGER_NUM, this.onCreateDamageNum, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_DIE_EFFECT, this.onCreateDieEffect, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HERO_HP, this.onCreateHeroHp, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_HP, this.onCreateMonsterHp, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_SHADOW, this.onCreateMonsterShadow, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_DAMAGER_NUM, this.onCreateDamageNum, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_DIE_EFFECT, this.onCreateDieEffect, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HERO_HP, this.onCreateHeroHp, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_HP, this.onCreateMonsterHp, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_MONSTER_SHADOW, this.onCreateMonsterShadow, this);
        }
        /**
         * 伤害数字
         * @param pos 位置
         * @param attack 伤害值
         * @param type 伤害类型
         */


        onCreateDamageNum(pos, attack, type, fontSize) {
          let key = 'damageNum';
          let damageItem = null;
          let damagePrefab = null;

          if (this._battlerUIPrefabData.has(key)) {
            damagePrefab = this._battlerUIPrefabData.get(key);
            damageItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNodeItem(damagePrefab);
            this.battleUIParent.addChild(damageItem);
            damageItem.setPosition(pos);
            damageItem.getComponent(_crd && DamageItem === void 0 ? (_reportPossibleCrUseOfDamageItem({
              error: Error()
            }), DamageItem) : DamageItem).init(attack, type);
          } else {
            //动态加载
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).battlePath + key;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(damagePrefab => {
              this._battlerUIPrefabData.set(key, damagePrefab);

              damageItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItem(damagePrefab);
              this.battleUIParent.addChild(damageItem);
              damageItem.setPosition(pos);
              damageItem.getComponent(_crd && DamageItem === void 0 ? (_reportPossibleCrUseOfDamageItem({
                error: Error()
              }), DamageItem) : DamageItem).init(attack, type);
            });
          }
        }
        /**
         * 怪物死亡特效
         * @param pos 
         */


        onCreateDieEffect(pos) {
          let key = 'blastItem';
          let blastItem = null;
          let blastPrefab = null;
          let parent = this.battleUIDownParent.getChildByName('Die');

          if (this._battlerUIPrefabData.has(key)) {
            blastPrefab = this._battlerUIPrefabData.get(key);
            blastItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNodeItem(blastPrefab);
            parent.addChild(blastItem);
            blastItem.setPosition(pos);
            blastItem.getComponent(_crd && BlastItem === void 0 ? (_reportPossibleCrUseOfBlastItem({
              error: Error()
            }), BlastItem) : BlastItem).init();
          } else {
            //动态加载
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).battlePath + key;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(damagePrefab => {
              this._battlerUIPrefabData.set(key, damagePrefab);

              blastItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItem(damagePrefab);
              parent.addChild(blastItem);
              blastItem.setPosition(pos);
              blastItem.getComponent(_crd && BlastItem === void 0 ? (_reportPossibleCrUseOfBlastItem({
                error: Error()
              }), BlastItem) : BlastItem).init();
            });
          }
        }
        /* 创建英雄血条 */


        onCreateHeroHp(pos) {
          let key = 'heroHpItem';
          let heroHpItem = null;
          let heroHpPrefab = null;
          let parent = this.battleUIParent;
          let newPos = new Vec3(pos.x, pos.y - 30, 0);

          if (this._battlerUIPrefabData.has(key)) {
            heroHpPrefab = this._battlerUIPrefabData.get(key);
            heroHpItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNodeItem(heroHpPrefab);
            parent.addChild(heroHpItem);
            heroHpItem.setPosition(newPos);
            heroHpItem.getComponent(_crd && HeroHpItem === void 0 ? (_reportPossibleCrUseOfHeroHpItem({
              error: Error()
            }), HeroHpItem) : HeroHpItem).init();
          } else {
            //动态加载
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).battlePath + key;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(heroHpPrefab => {
              this._battlerUIPrefabData.set(key, heroHpPrefab);

              heroHpItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItem(heroHpPrefab);
              parent.addChild(heroHpItem);
              heroHpItem.setPosition(newPos);
              heroHpItem.getComponent(_crd && HeroHpItem === void 0 ? (_reportPossibleCrUseOfHeroHpItem({
                error: Error()
              }), HeroHpItem) : HeroHpItem).init();
            });
          }
        }
        /* 创建怪物血条 */


        onCreateMonsterHp(com) {
          let key = 'monsterHpItem';
          let monsterHpItem = null;
          let monsterHpPrefab = null;
          let parent = this.battleUIParent;

          if (this._battlerUIPrefabData.has(key)) {
            monsterHpPrefab = this._battlerUIPrefabData.get(key);
            monsterHpItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNodeItem(monsterHpPrefab);
            parent.addChild(monsterHpItem);
            monsterHpItem.getComponent(_crd && MonsterHpItem === void 0 ? (_reportPossibleCrUseOfMonsterHpItem({
              error: Error()
            }), MonsterHpItem) : MonsterHpItem).init(com);
            com.monsterHpItem = monsterHpItem.getComponent(_crd && MonsterHpItem === void 0 ? (_reportPossibleCrUseOfMonsterHpItem({
              error: Error()
            }), MonsterHpItem) : MonsterHpItem);
          } else {
            //动态加载
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).battlePath + key;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(monsterHpPrefab => {
              this._battlerUIPrefabData.set(key, monsterHpPrefab);

              monsterHpItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItem(monsterHpPrefab);
              parent.addChild(monsterHpItem);
              monsterHpItem.getComponent(_crd && MonsterHpItem === void 0 ? (_reportPossibleCrUseOfMonsterHpItem({
                error: Error()
              }), MonsterHpItem) : MonsterHpItem).init(com);
              com.monsterHpItem = monsterHpItem.getComponent(_crd && MonsterHpItem === void 0 ? (_reportPossibleCrUseOfMonsterHpItem({
                error: Error()
              }), MonsterHpItem) : MonsterHpItem);
            });
          }
        }
        /* 创建怪物阴影 */


        onCreateMonsterShadow(com) {
          let key = 'shadown';
          let monsterShadownItem = null;
          let monsterShadownPrefab = null;
          let parent = this.battleUIDownParent.getChildByName('Shadow');

          if (this._battlerUIPrefabData.has(key)) {
            monsterShadownPrefab = this._battlerUIPrefabData.get(key);
            monsterShadownItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNodeItem(monsterShadownPrefab);
            parent.addChild(monsterShadownItem);
            monsterShadownItem.getComponent(_crd && Shadow === void 0 ? (_reportPossibleCrUseOfShadow({
              error: Error()
            }), Shadow) : Shadow).init(com);
            com.monsterShadow = monsterShadownItem.getComponent(_crd && Shadow === void 0 ? (_reportPossibleCrUseOfShadow({
              error: Error()
            }), Shadow) : Shadow);
          } else {
            //动态加载
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).battlePath + key;
            (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(monsterShadownPrefab => {
              this._battlerUIPrefabData.set(key, monsterShadownPrefab);

              monsterShadownItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItem(monsterShadownPrefab);
              parent.addChild(monsterShadownItem);
              monsterShadownItem.getComponent(_crd && Shadow === void 0 ? (_reportPossibleCrUseOfShadow({
                error: Error()
              }), Shadow) : Shadow).init(com);
              com.monsterShadow = monsterShadownItem.getComponent(_crd && Shadow === void 0 ? (_reportPossibleCrUseOfShadow({
                error: Error()
              }), Shadow) : Shadow);
            });
          }
        }

        clear() {
          this._battlerUIPrefabData.clear();

          this._battleUiNode.clear();

          this.battleUIParent.removeAllChildren();
          this.battleUIDownParent.getChildByName('Die').removeAllChildren();
          this.battleUIDownParent.getChildByName('Shadow').removeAllChildren();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "battleUIParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "battleUIDownParent", [_dec3], {
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
//# sourceMappingURL=965a5e191ba26cf332d098e9d5acc8828f904ee1.js.map