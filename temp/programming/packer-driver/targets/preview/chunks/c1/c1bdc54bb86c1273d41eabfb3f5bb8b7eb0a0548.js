System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, RichText, Constants, ResourcesUtil, SpriteEx, SkillData, SkillUpgradeData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SkillSelectItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteEx(extras) {
    _reporterNs.report("SpriteEx", "../../../Frame/SpriteEx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillData(extras) {
    _reporterNs.report("SkillData", "../../../Game/Data/SkillData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectObj(extras) {
    _reporterNs.report("SelectObj", "../../../Game/Data/SkillUpgradeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeData(extras) {
    _reporterNs.report("SkillUpgradeData", "../../../Game/Data/SkillUpgradeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeCfg(extras) {
    _reporterNs.report("SkillUpgradeCfg", "../../../Model/SkillUpgradeMode", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      ResourcesUtil = _unresolved_3.ResourcesUtil;
    }, function (_unresolved_4) {
      SpriteEx = _unresolved_4.SpriteEx;
    }, function (_unresolved_5) {
      SkillData = _unresolved_5.SkillData;
    }, function (_unresolved_6) {
      SkillUpgradeData = _unresolved_6.SkillUpgradeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2164JsWmlHK60Q7+zA/GgW", "SkillSelectItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'RichText', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillSelectItem", SkillSelectItem = (_dec = ccclass('SkillSelectItem'), _dec2 = property(_crd && SpriteEx === void 0 ? (_reportPossibleCrUseOfSpriteEx({
        error: Error()
      }), SpriteEx) : SpriteEx), _dec3 = property(_crd && SpriteEx === void 0 ? (_reportPossibleCrUseOfSpriteEx({
        error: Error()
      }), SpriteEx) : SpriteEx), _dec4 = property(Sprite), _dec5 = property(RichText), _dec(_class = (_class2 = class SkillSelectItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "frame", _descriptor, this);

          _initializerDefineProperty(this, "quality", _descriptor2, this);

          _initializerDefineProperty(this, "icon", _descriptor3, this);

          _initializerDefineProperty(this, "desc", _descriptor4, this);

          this._callBack = null;
          this._skillUpgradeCfg = null;
          this._selectObj = null;
        }

        init(selectObj, callback) {
          var skillUpgradeCfg = (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.getSkillUpgradeCfgById(selectObj.id);
          this._selectObj = selectObj;
          this._callBack = callback;
          this._skillUpgradeCfg = skillUpgradeCfg;
          this.frame.index = skillUpgradeCfg.quality;
          this.quality.index = skillUpgradeCfg.quality;
          this.desc.string = skillUpgradeCfg.desc;
          var qualityPath = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).skillSelectIconPath + skillUpgradeCfg.icon + '/spriteFrame';
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(qualityPath).then(data => {
            this.icon.spriteFrame = data;
          });
        }

        setUpgradeSkill() {
          var type = this._skillUpgradeCfg.type;

          switch (type) {
            case 0:
              (_crd && SkillData === void 0 ? (_reportPossibleCrUseOfSkillData({
                error: Error()
              }), SkillData) : SkillData).instance.upgradeSkillObjAtt(this._skillUpgradeCfg);
              break;

            case 1:
              //银币
              break;

            case 2:
              //敌人移动速度
              break;

            case 3:
              //经验
              break;

            case 4:
              //生命
              break;
          }
        }

        onTouchBtn() {
          this._callBack && this._callBack();
          this._selectObj.options_num--;
          this.setUpgradeSkill();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "quality", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1bdc54bb86c1273d41eabfb3f5bb8b7eb0a0548.js.map