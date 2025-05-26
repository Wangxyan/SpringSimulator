System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Size, UITransform, screen, _dec, _class, _crd, ccclass, property, ContentAdapter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "494f9k+dAhM/KtYR67LvtYz", "ContentAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Size', 'UITransform', 'screen', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ContentAdapter", ContentAdapter = (_dec = ccclass('ContentAdapter'), _dec(_class = class ContentAdapter extends Component {
        onLoad() {
          let size = screen.windowSize;
          let nodeSize = this.node.getComponent(UITransform).contentSize;
          let srcScaleForShowAll = Math.min(size.width / nodeSize.width, size.height / nodeSize.height);
          let realWidth = nodeSize.width * srcScaleForShowAll;
          let realHeight = nodeSize.height * srcScaleForShowAll;
          let realSize = new Size();
          realSize.width = nodeSize.width * (size.width / realWidth);
          realSize.height = nodeSize.height * (size.height / realHeight);
          this.node.getComponent(UITransform).setContentSize(realSize);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59cab12f6bac8d78b0684358e8ebccf61da17798.js.map