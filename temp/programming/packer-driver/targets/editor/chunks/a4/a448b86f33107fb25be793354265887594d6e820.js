System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Sprite, GameEvent, EventListener, SkillData, ResourcesUtil, PoolManager, Constants, SkillUpgradeData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SkillManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillBulletObj(extras) {
    _reporterNs.report("SkillBulletObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillData(extras) {
    _reporterNs.report("SkillData", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeData(extras) {
    _reporterNs.report("SkillUpgradeData", "../Data/SkillUpgradeData", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      GameEvent = _unresolved_2.GameEvent;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      SkillData = _unresolved_4.SkillData;
    }, function (_unresolved_5) {
      ResourcesUtil = _unresolved_5.ResourcesUtil;
    }, function (_unresolved_6) {
      PoolManager = _unresolved_6.PoolManager;
    }, function (_unresolved_7) {
      Constants = _unresolved_7.Constants;
    }, function (_unresolved_8) {
      SkillUpgradeData = _unresolved_8.SkillUpgradeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfbb4uHJ+JKjq7N/Z8t/KLe", "SkillManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillManager", SkillManager = (_dec = ccclass('SkillManager'), _dec2 = property(Node), _dec(_class = (_class2 = class SkillManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skillParentUp", _descriptor, this);

          this._skillPrefabItemMap = new Map();
        }

        //技能预制体
        init() {
          (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.init();
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_SKILL_EFFECT, this.onCreateSkillEffect, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CREATE_SKILL_EFFECT, this.onCreateSkillEffect, this);
        }

        onCreateSkillEffect(skillBulletObj, targetPos, angle, deltaTime = 0) {
          this.scheduleOnce(() => {
            let skillItem = null;
            let skillId = skillBulletObj.skillCfg.Id;
            let skillCom = null;

            if (this._skillPrefabItemMap.has(skillId)) {
              skillItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNodeItemById(this._skillPrefabItemMap.get(skillId), skillId.toString());
              this.skillParentUp.addChild(skillItem);
              skillItem.setPosition(skillBulletObj.pos);
              skillCom = skillItem.components[1];
              skillCom.init(skillBulletObj, targetPos, angle);
            } else {
              //动态加载
              let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).battSkillPath;
              (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
                error: Error()
              }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(skillPrefab => {
                //加载资源
                let itemPath = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).weaponIconPath + skillBulletObj.skillCfg.Bullet + '/spriteFrame';
                (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
                  error: Error()
                }), ResourcesUtil) : ResourcesUtil).getSpriteFrame(itemPath).then(data => {
                  skillItem = instantiate(skillPrefab);
                  let iconSprite = skillItem.getChildByName('icon').getComponent(Sprite);
                  iconSprite.spriteFrame = data;
                  iconSprite.node.angle = skillBulletObj.skillCfg.Angle;
                  iconSprite.node.setScale(skillBulletObj.skillCfg.Scale, skillBulletObj.skillCfg.Scale);
                  this.skillParentUp.addChild(skillItem);
                  skillItem.setPosition(skillBulletObj.pos);
                  skillCom = skillItem.components[1];
                  skillCom.init(skillBulletObj, targetPos, angle);

                  this._skillPrefabItemMap.set(skillId, skillItem);
                });
              });
            }
          }, deltaTime);
        }

        clear() {
          (_crd && SkillData === void 0 ? (_reportPossibleCrUseOfSkillData({
            error: Error()
          }), SkillData) : SkillData).instance.clear();
          (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillParentUp", [_dec2], {
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
//# sourceMappingURL=a448b86f33107fb25be793354265887594d6e820.js.map