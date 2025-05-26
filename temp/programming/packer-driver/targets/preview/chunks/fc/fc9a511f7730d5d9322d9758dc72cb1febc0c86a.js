System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ProgressBar, tween, UIOpacity, UITransform, BaseComponent, PoolManager, GameDefine, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MonsterHpItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMonsterBase(extras) {
    _reporterNs.report("MonsterBase", "../Monster/MonsterBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      GameDefine = _unresolved_4.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "237f5e5BC5FArB67QHuARAX", "MonsterHpItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar', 'tween', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterHpItem", MonsterHpItem = (_dec = ccclass('MonsterHpItem'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class MonsterHpItem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "barAnim", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          this._com = null;
        }

        init(com) {
          this.barAnim.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
          this.getComponent(ProgressBar).progress = 1;
          this.getComponent(UIOpacity).opacity = 0;
          this._com = com;
        }

        setMonsterHp(curHp, maxHp) {
          if (curHp <= 0) {
            curHp = 0;
          }

          ;
          this.unschedule(this.setMonsterHide);
          this.getComponent(UIOpacity).opacity = 255;
          this.getComponent(ProgressBar).progress = curHp / maxHp;
          var curWidth = this.bar.getComponent(UITransform).width;
          var endWidth = this.barAnim.getComponent(UITransform).width;
          var offsetX = endWidth - curWidth;
          this.scheduleOnce(this.setMonsterHide, 0.5);
          tween(this.barAnim.getComponent(UITransform)).by(0.2, {
            width: -offsetX
          }).call(() => {
            if (curHp <= 0) {
              this.clear();
            }
          }).start();
        }

        setMonsterHide() {
          this.getComponent(UIOpacity).opacity = 0;
        }

        setMonsterHpPos() {
          var curPos = this._com.getColliderPos();

          var height = this._com.node.getComponent(UITransform).height;

          this.node.setPosition(curPos.x, curPos.y + height * 2 / 3, 0);
        }

        clear() {
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(this.node);
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart) {
            if (this._com) {
              this.setMonsterHpPos();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "barAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
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
//# sourceMappingURL=fc9a511f7730d5d9322d9758dc72cb1febc0c86a.js.map