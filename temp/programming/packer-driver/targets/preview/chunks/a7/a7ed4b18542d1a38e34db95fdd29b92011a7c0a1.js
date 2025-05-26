System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, screen, _dec, _class, _crd, ccclass, property, BackgroundAdapter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71ae6w0ow1ACok/pAFH3tJT", "BackgroundAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'screen', 'view', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BackgroundAdapter", BackgroundAdapter = (_dec = ccclass('BackgroundAdapter'), _dec(_class = class BackgroundAdapter extends Component {
        onLoad() {
          var size = screen.windowSize;
          var nodeSize = this.node.getComponent(UITransform).contentSize;
          var srcScaleForShowAll = Math.min(size.width / nodeSize.width, size.height / nodeSize.height);
          var realWidth = nodeSize.width * srcScaleForShowAll;
          var realHeight = nodeSize.height * srcScaleForShowAll;
          var s = Math.max(size.width / realWidth, size.height / realHeight);
          this.node.setScale(s, s, s);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7ed4b18542d1a38e34db95fdd29b92011a7c0a1.js.map