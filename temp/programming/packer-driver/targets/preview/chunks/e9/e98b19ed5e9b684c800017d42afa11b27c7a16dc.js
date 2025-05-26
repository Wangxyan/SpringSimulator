System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, tween, v3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Toast;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddfe1rgxVxEoZW8/Ku88Xn7", "Toast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'tween', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Toast", Toast = (_dec = ccclass('Toast'), _dec2 = property(Label), _dec(_class = (_class2 = class Toast extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbText", _descriptor, this);
        }

        init(msg) {
          this.lbText.string = msg;
          this.node.setScale(0.5, .5);
          this.setAnim();
        }

        setAnim() {
          tween(this.node).to(0.2, {
            scale: v3(1.1, 1.1, 1.1)
          }, {
            easing: 'sineIn'
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }, {
            easing: 'sineOut'
          }).delay(0.2).by(0.5, {
            position: v3(0, 100, 0)
          }).call(() => {
            this.node.destroy();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbText", [_dec2], {
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
//# sourceMappingURL=e98b19ed5e9b684c800017d42afa11b27c7a16dc.js.map