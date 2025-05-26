System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, tween, v3, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DamageItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c20chu39hHKYv9Mua9Oz/X", "DamageItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'tween', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DamageItem", DamageItem = (_dec = ccclass('DamageItem'), _dec2 = property(Label), _dec(_class = (_class2 = class DamageItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "numLab", _descriptor, this);

          this.monsterKey = '';
        }

        init(attack, type, fontSize) {
          if (fontSize === void 0) {
            fontSize = 25;
          }

          this.numLab.string = "" + attack;
          this.numLab.fontSize = fontSize;
          this.setsetDamageColor(type);
          this.setDamageFlyAnim(attack, type);
        }

        setDamageScaleAnim(attack, type) {
          if (attack > 0) {
            this.node.scale = v3(1, 1, 1);
            tween(this.node).to(0.25, {
              scale: v3(0.8, 0.8, 0.8)
            }).call(() => {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }).start();
          } else {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);
          }
        }

        setDamageFlyAnim(attack, type) {
          var node = this.numLab.node;

          if (attack > 0) {
            class BindTarget {
              constructor() {
                this.position = void 0;
                this.scale = void 0;
              }

            }

            var target = new BindTarget();
            target.position = node.getPosition();
            target.scale = 1.5;
            tween(target).parallel(tween().by(0.25, {
              position: v3(0, 30, 0)
            }, {
              onUpdate: tar => {
                node.setPosition(tar.position);
              }
            }), tween().to(0.25, {
              scale: 1.3
            }, {
              onUpdate: tar => {
                node.setScale(tar.scale, tar.scale);
              }
            })).delay(0.25).call(() => {
              node.setPosition(0, 0, 0);
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }).start();
          } else {
            node.setPosition(0, 0, 0);
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);
          }
        }

        setsetDamageColor(type) {
          switch (type) {
            case 0:
              //正常
              this.numLab.color = new Color().fromHEX('#ffffff');
              break;

            case 1:
              //暴击
              this.numLab.color = new Color().fromHEX('#FF0000');
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec2], {
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
//# sourceMappingURL=2fc668ccc7587474cbbe74dde0f63c97d0e40594.js.map