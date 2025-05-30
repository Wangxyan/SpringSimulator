System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, Sprite, SpriteFrame, _decorator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, requireComponent, menu, SpriteEx;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7351A5vfBG26Vq3Fx4Zzzr", "SpriteEx", undefined);

      __checkObsolete__(['CCInteger', 'Component', 'Sprite', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        requireComponent,
        menu
      } = _decorator);

      _export("SpriteEx", SpriteEx = (_dec = requireComponent(Sprite), _dec2 = menu("UI/SpriteEx Index(帧图改变)"), _dec3 = property({
        type: [SpriteFrame],
        tooltip: 'sprite将会用到帧图片'
      }), _dec4 = property({
        type: CCInteger,
        tooltip: '当前显示的帧图'
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class SpriteEx extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spriteFrames", _descriptor, this);

          _initializerDefineProperty(this, "_index", _descriptor2, this);
        }

        get index() {
          return this._index;
        }

        set index(value) {
          if (value < 0) return;
          this._index = value % this.spriteFrames.length;
          var sprite = this.node.getComponent(Sprite); //设置 Sprite 组件的spriteFrame属性，变换图片               

          sprite.spriteFrame = this.spriteFrames[this._index];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [null];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "index", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_index", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f3aae75ec20a28d050008b561d337147e47d1a3.js.map