System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Node, Sprite, UIOpacity, UITransform, GridData, GridObj, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GridBgItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
      GridObj = _unresolved_2.GridObj;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bfcbt9VBpJXrTYdzarVMdh", "GridBgItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Sprite', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridBgItem", GridBgItem = (_dec = ccclass('GridBgItem'), _dec2 = property(Node), _dec(_class = (_class2 = class GridBgItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tipsNode", _descriptor, this);

          this._gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          this._gridValue = '0';
          // 0:格子中没有武器   'fdagfdag':格子中填充了武器   ''：确定后不占格子
          this._placeAreaKey = '';
        }

        //放置格子的区域key  空则没有放置格子
        get placeAreaKey() {
          return this._placeAreaKey;
        }

        set placeAreaKey(value) {
          this._placeAreaKey = value;
        }

        get gridObj() {
          return this._gridObj;
        }

        get gridValue() {
          return this._gridValue;
        }

        set gridValue(value) {
          this._gridValue = value;
        }

        init(row, col, value) {
          this.node.getComponent(UITransform).setContentSize((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth, (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridHeight);
          this.tipsNode.getComponent(UITransform).setContentSize((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth, (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridHeight);
          this._gridObj.row = row;
          this._gridObj.col = col;
          this._gridValue = value;
          this.node.getComponent(UIOpacity).opacity = value ? 255 : 0;
        }

        setTipsGreen() {
          this.tipsNode.getComponent(Sprite).color = Color.GREEN;
        }

        setTipsDefault() {
          this.tipsNode.getComponent(Sprite).color = new Color().fromHEX('ffffff');
        }

        delPlaceAreaKey(key) {
          if (this._placeAreaKey == key) {
            this._placeAreaKey = '';

            if (this._gridValue) {
              this._gridValue = '0';
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipsNode", [_dec2], {
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
//# sourceMappingURL=5fbd42265b7280458a341953408c5f4ecc0a110e.js.map