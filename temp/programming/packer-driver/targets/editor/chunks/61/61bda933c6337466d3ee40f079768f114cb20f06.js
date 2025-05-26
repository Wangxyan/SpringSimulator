System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, UITransform, BaseComponent, ReleaseSkillObj, SkillData, MonsterData, HeroData, GameDefine, Constants, ResourcesUtil, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SkillTypeItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCfg(extras) {
    _reporterNs.report("SkillCfg", "../../Model/SkillModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReleaseSkillObj(extras) {
    _reporterNs.report("ReleaseSkillObj", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillData(extras) {
    _reporterNs.report("SkillData", "../Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../Data/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponCfg(extras) {
    _reporterNs.report("WeaponCfg", "../../Model/WeaponModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      ReleaseSkillObj = _unresolved_3.ReleaseSkillObj;
      SkillData = _unresolved_3.SkillData;
    }, function (_unresolved_4) {
      MonsterData = _unresolved_4.MonsterData;
    }, function (_unresolved_5) {
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      GameDefine = _unresolved_6.GameDefine;
    }, function (_unresolved_7) {
      Constants = _unresolved_7.Constants;
    }, function (_unresolved_8) {
      ResourcesUtil = _unresolved_8.ResourcesUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6d1449qq9HZJX0i4z/zLFB", "SkillTypeItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillTypeItem", SkillTypeItem = (_dec = ccclass('SkillTypeItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = class SkillTypeItem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "quality", _descriptor, this);

          _initializerDefineProperty(this, "skilIcon", _descriptor2, this);

          this._skillCfg = null;
          this._cd = 0;
          //技能cd
          this._initRelease = true;
          //技能释放
          this._weaponKey = '';
        }

        get range() {
          return this._skillCfg.Range;
        }

        init(weaponKey, weaponCfg) {
          this._weaponKey = weaponKey;
          this._skillCfg = (_crd && SkillData === void 0 ? (_reportPossibleCrUseOfSkillData({
            error: Error()
          }), SkillData) : SkillData).instance.getSkillCfgById(weaponCfg.SkillId);
          this._cd = this._skillCfg.Cd;
          this.setSkillTypeInfo(this._skillCfg);
        }

        setSkillTypeInfo(skillCfg) {
          let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).weaponIconPath + skillCfg.Res + '/spriteFrame';
          let qualityPath = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).qualityPath + skillCfg.Quality + '/spriteFrame';
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(qualityPath).then(data => {
            this.quality.spriteFrame = data;
          });
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(path).then(data => {
            this.skilIcon.spriteFrame = data;
            let contentSize = this.skilIcon.getComponent(UITransform).contentSize;
            let scale = Math.min(80 / contentSize.width, 80 / contentSize.height);
            this.skilIcon.node.setScale(scale, scale);
            this._initRelease = true;
          });
        }

        initSkillCd() {
          this._cd = this._skillCfg.Cd;
          this._initRelease = true;
        }

        setSkillProgressBar(cd) {
          let progress = cd / this._skillCfg.Cd;
          this.node.getChildByName('bar').getComponent(Sprite).fillRange = progress;
        }
        /* 创建队列技能 */


        createQueueSkill() {
          let releaseSkillObj = new (_crd && ReleaseSkillObj === void 0 ? (_reportPossibleCrUseOfReleaseSkillObj({
            error: Error()
          }), ReleaseSkillObj) : ReleaseSkillObj)();
          releaseSkillObj.skillCfg = this._skillCfg;
          releaseSkillObj.callback = this.initSkillCd.bind(this);
          releaseSkillObj.skillKey = this._weaponKey;
          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).instance.addQueueSkill(releaseSkillObj);
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart) {
            let skillPos = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).instance.heroPoint;

            if (this._initRelease) {
              this._cd -= dt;
              this.setSkillProgressBar(this._cd);
              /* 检测技能范围内的怪物 */

              if (this._cd < 0) {
                //释放技能
                if ((_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                  error: Error()
                }), MonsterData) : MonsterData).instance.checkSkillNearMonster(skillPos, this._skillCfg.Range)) {
                  this._initRelease = false;
                  this.createQueueSkill();
                } else {
                  this._cd = this._skillCfg.Cd;
                }
              }

              (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                error: Error()
              }), MonsterData) : MonsterData).instance.setNearMonster(this._weaponKey, skillPos, this._skillCfg.Range);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "quality", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skilIcon", [_dec3], {
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
//# sourceMappingURL=61bda933c6337466d3ee40f079768f114cb20f06.js.map