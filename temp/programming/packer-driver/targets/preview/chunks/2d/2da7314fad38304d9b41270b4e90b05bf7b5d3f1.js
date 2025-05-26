System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, dragonBones, _dec, _class, _crd, ccclass, property, SynItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      dragonBones = _cc.dragonBones;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f664azpR1P674rPvf42GZp", "SynItem", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationComponent', 'Component', 'Label', 'Node', 'sp', 'tween', 'v3', 'dragonBones']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SynItem", SynItem = (_dec = ccclass('SynItem'), _dec(_class = class SynItem extends Component {
        init() {
          var disPlay = this.node.getComponent(dragonBones.ArmatureDisplay);
          disPlay.addEventListener(dragonBones.EventObject.COMPLETE, () => {
            this.node.destroy();
          }, disPlay);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2da7314fad38304d9b41270b4e90b05bf7b5d3f1.js.map