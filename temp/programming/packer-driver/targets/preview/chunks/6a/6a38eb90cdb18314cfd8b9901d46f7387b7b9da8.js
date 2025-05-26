System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BlastItem;

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
      Component = _cc.Component;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6cdfbbCEVFPtarMgjH7Ar9b", "BlastItem", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationComponent', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlastItem", BlastItem = (_dec = ccclass('BlastItem'), _dec2 = property(sp.Skeleton), _dec(_class = (_class2 = class BlastItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spine", _descriptor, this);
        }

        init() {
          this.spine.setAnimation(0, 'animation', false);
          this.spine.setCompleteListener(listener => {
            if (listener.animation.name == 'animation') {
              //动画播放完
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }
          }); // let anim = this.node.getComponent(AnimationComponent);
          // this.scheduleOnce(() => {
          //     anim.play('blast');
          //     anim.on(Animation.EventType.FINISHED, () => {
          //         PoolManager.instance.putNode(this.node);
          //     }, this)
          // }, 0.1)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
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
//# sourceMappingURL=6a38eb90cdb18314cfd8b9901d46f7387b7b9da8.js.map