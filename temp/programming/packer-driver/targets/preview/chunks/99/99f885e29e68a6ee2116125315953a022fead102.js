System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Sprite, UIOpacity, UITransform, GridData, GridObj, _dec, _class, _crd, ccclass, property, GridItem;

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
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
      GridObj = _unresolved_2.GridObj;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56899LXxFdFn6T5DajIIE2O", "GridItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Sprite', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridItem", GridItem = (_dec = ccclass('GridItem'), _dec(_class = class GridItem extends Component {
        constructor() {
          super(...arguments);
          this._gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          this._gridValue = '0';
        }

        // 0:占用格子 '':无格子  weaponKey: 武器占用格子
        get gridObj() {
          return this._gridObj;
        }

        get gridValue() {
          return this._gridValue;
        }

        init(row, col, value) {
          this.node.getComponent(UITransform).setContentSize((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth, (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridHeight);
          this._gridObj.row = row;
          this._gridObj.col = col;
          this._gridValue = value;
          this.node.getComponent(UIOpacity).opacity = value ? 255 : 0;
        }

        setDeafult() {
          this.node.getComponent(Sprite).color = new Color().fromHEX('FFFFFF');
        }

        setGreen() {
          this.node.getComponent(Sprite).color = new Color().fromHEX('7ed263');
        }

        setRed() {
          this.node.getComponent(Sprite).color = new Color().fromHEX('dd6662');
        }

        setYellow() {
          this.node.getComponent(Sprite).color = new Color().fromHEX('dbc464');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99f885e29e68a6ee2116125315953a022fead102.js.map