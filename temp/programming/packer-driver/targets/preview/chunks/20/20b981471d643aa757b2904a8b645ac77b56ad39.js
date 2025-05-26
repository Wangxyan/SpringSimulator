System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, v3, Constants, GameController, PopupManager, SkillUpgradeData, SkillSelectItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SkillSelectPopup;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../Frame/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Frame/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectObj(extras) {
    _reporterNs.report("SelectObj", "../../Game/Data/SkillUpgradeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeData(extras) {
    _reporterNs.report("SkillUpgradeData", "../../Game/Data/SkillUpgradeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillSelectItem(extras) {
    _reporterNs.report("SkillSelectItem", "./Sub/SkillSelectItem", _context.meta, extras);
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
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.default;
    }, function (_unresolved_4) {
      PopupManager = _unresolved_4.PopupManager;
    }, function (_unresolved_5) {
      SkillUpgradeData = _unresolved_5.SkillUpgradeData;
    }, function (_unresolved_6) {
      SkillSelectItem = _unresolved_6.SkillSelectItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6da23yMgY1B+pjD6+TmVFFj", "SkillSelectPopup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillSelectPopup", SkillSelectPopup = (_dec = ccclass('SkillSelectPopup'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class SkillSelectPopup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "content", _descriptor, this);

          _initializerDefineProperty(this, "block", _descriptor2, this);
        }

        show(list) {
          this.setSkillSelectInfo(list);
        }

        setSkillSelectInfo(list) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var items = _this.content.children;
            _this.block.active = true;

            for (var j = 0; j < items.length; j++) {
              var element = items[j];
              element.active = false;
            }

            var _loop = function* _loop(i) {
              var element = list[i];
              var selectItem = items[i];
              selectItem.getComponent(_crd && SkillSelectItem === void 0 ? (_reportPossibleCrUseOfSkillSelectItem({
                error: Error()
              }), SkillSelectItem) : SkillSelectItem).init(element, _this.onCloseBtn.bind(_this));
              yield new Promise(res => {
                selectItem.setScale(0.5, 0.5);
                selectItem.active = true;
                tween(selectItem).to(0.05, {
                  scale: v3(1.1, 1.1, 1.1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                }).call(() => {
                  if (i == 2) {
                    _this.block.active = false;
                  }

                  res(0);
                }).start();
              });
            };

            for (var i = 0; i < list.length; i++) {
              yield* _loop(i);
            }
          })();
        }

        onCloseBtn() {
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).resume();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.hide((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.SkillSelectPopup);
        }

        onChangeBtn() {
          var list = (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.getSelectSkillListByWeight();
          this.setSkillSelectInfo(list);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "block", [_dec3], {
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
//# sourceMappingURL=20b981471d643aa757b2904a8b645ac77b56ad39.js.map