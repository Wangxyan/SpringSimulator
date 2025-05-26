System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Util, _dec, _class, _crd, ccclass, property, ContentScale;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./Util", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29ec8b7A9ZAfpoh28pIYAGQ", "ContentScale", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ContentScale", ContentScale = (_dec = ccclass('ContentScale'), _dec(_class = class ContentScale extends Component {
        start() {
          let scale = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).adapterScale();
          this.node.setScale(scale, scale);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a19acadd2f96db864444c380d0fa713fc7662954.js.map