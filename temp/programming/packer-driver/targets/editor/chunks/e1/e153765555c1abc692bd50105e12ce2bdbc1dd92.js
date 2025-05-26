System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, UITransform, _dec, _class, _crd, ccclass, property, ContentWidthAdapter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d1beTZsZVLLodLFMhkBa8y", "ContentWidthAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'view', 'Size', 'UITransform', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ContentWidthAdapter", ContentWidthAdapter = (_dec = ccclass('ContentWidthAdapter'), _dec(_class = class ContentWidthAdapter extends Component {
        onLoad() {
          // console.log(screen.windowSize);
          // console.log(view.getVisibleSize());
          //通过固定高度的缩放比 可以算出可见宽度
          let visibleSize = view.getVisibleSize();
          let designSize = view.getDesignResolutionSize();
          let width = visibleSize.width > designSize.width ? designSize.width : visibleSize.width;
          this.node.getComponent(UITransform).width = width;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e153765555c1abc692bd50105e12ce2bdbc1dd92.js.map