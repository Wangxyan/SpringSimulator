System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BlockInputEvents, Component, Node, tween, UIOpacity, UITransform, v3, _dec, _class, _crd, ccclass, property, animationUI;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BlockInputEvents = _cc.BlockInputEvents;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a05e5ex0PBBGKnHqFKc4eio", "animationUI", undefined);

      __checkObsolete__(['_decorator', 'BlockInputEvents', 'Component', 'log', 'Node', 'tween', 'UI', 'UIOpacity', 'UITransform', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("animationUI", animationUI = (_dec = ccclass('animationUI'), _dec(_class = class animationUI extends Component {
        constructor() {
          super(...arguments);
          this._during = 0.1;
          this._blocker = null;
        }

        onLoad() {
          var blocker = this.node.getChildByName('blocker');

          if (!blocker) {
            var _blocker = new Node('blocker');

            _blocker.addComponent(BlockInputEvents);

            _blocker.addComponent(UITransform);

            _blocker.parent = this.node;

            _blocker.getComponent(UITransform).setContentSize(this.node.getComponent(UITransform).contentSize);

            this._blocker = _blocker;
          } else {
            this._blocker = blocker;
          }
        }

        close(com) {
          this._blocker.active = true;
          var bg = this.node.getChildByName('Bg');
          var content = this.node.getChildByName('Content');

          if (bg.getComponent(UIOpacity)) {
            tween(bg.getComponent(UIOpacity)).to(this._during, {
              opacity: 0
            }, {
              easing: 'backIn'
            }).start();
          } else {
            bg.addComponent(UIOpacity);
            tween(bg.getComponent(UIOpacity)).to(this._during, {
              opacity: 0
            }, {
              easing: 'backIn'
            }).start();
          }

          tween(content).to(this._during, {
            scale: v3(0.5, 0.5, 0.5)
          }).call(() => {
            this._blocker.active = false;
            com && com();
          }).start();
        }

        open(com) {
          this._blocker.active = true;
          var bg = this.node.getChildByName('Bg');
          var content = this.node.getChildByName('Content');

          if (bg.getComponent(UIOpacity)) {
            bg.getComponent(UIOpacity).opacity = 0;
            tween(bg.getComponent(UIOpacity)).to(this._during, {
              opacity: 255
            }, {
              easing: 'backOut'
            }).start();
          } else {
            bg.addComponent(UIOpacity);
            bg.getComponent(UIOpacity).opacity = 0;
            tween(bg.getComponent(UIOpacity)).to(this._during, {
              opacity: 255
            }, {
              easing: 'backOut'
            }).start();
          }

          content.setScale(0.5, 0.5, 0.5);
          tween(content).to(this._during, {
            scale: v3(1, 1, 1)
          }).call(() => {
            this._blocker.active = false;
            com && com();
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e8177eb1407b86774cb282d764a2c70b42b5e6f.js.map