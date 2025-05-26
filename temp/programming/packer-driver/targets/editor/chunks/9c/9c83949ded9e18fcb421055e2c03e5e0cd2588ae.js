System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Graphics, Node, GameDefine, Debug, _crd;

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../GameDefine", _context.meta, extras);
  }

  _export("Debug", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Graphics = _cc.Graphics;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameDefine = _unresolved_2.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57624QKseNHsYSFOwkcAy/w", "Debug", undefined);

      __checkObsolete__(['Graphics', 'Rect', 'Node', 'Vec2']);

      _export("Debug", Debug = class Debug {
        static log(...params) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).DebugLevel <= 0) {
            Promise.resolve(console.log.apply(this, params));
          }
        }

        static info(...params) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).DebugLevel <= 1) {
            Promise.resolve(console.info.apply(this, params));
          }
        }

        static warn(...params) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).DebugLevel <= 2) {
            Promise.resolve(console.warn.apply(this, params));
          }
        }

        static error(...params) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).DebugLevel <= 3) {
            Promise.resolve(console.error.apply(this, params));
          }
        }

        static drawFillRect(node, rect) {
          let g = node.addComponent(Graphics);
          g.fillColor.fromHEX('#ff0000');
          g.rect(rect.x, rect.y, rect.width, rect.height);
          g.fill();
        }

        static drawRect(node, rect) {
          let g = node.addComponent(Graphics);
          g.lineWidth = 2;
          g.strokeColor.fromHEX('#ff0000');
          g.rect(rect.x, rect.y, rect.width, rect.height);
          g.stroke();
        }

        static drawLine(node) {
          var g = node.addComponent(Graphics);
          g.lineWidth = 2;
          g.strokeColor.fromHEX('#ffffff');
          g.clear();
          g.moveTo(100, 100);
          g.lineTo(100, 200);
          g.lineTo(200, 200);
          g.stroke();
        }

        static drawPolyGon(node, points) {
          let tempNode = new Node();
          node.addChild(tempNode);
          let g = tempNode.addComponent(Graphics);
          g.lineWidth = 10;
          g.strokeColor.fromHEX("#ffffff");

          for (let i = 0; i < points.length; i++) {
            let p = points[i];

            if (i == 0) {
              g.moveTo(p.x, p.y);
            } else {
              g.lineTo(p.x, p.y);
            }
          }

          g.close();
          g.stroke();
        }

        static drawBesize(node, startPos, targetPos, c1x, c1y, c2x, c2y) {
          let tempNode = new Node();
          node.addChild(tempNode);
          let g = tempNode.addComponent(Graphics);
          g.lineWidth = 10;
          g.strokeColor.fromHEX("#ffffff");
          g.moveTo(startPos.x, startPos.y);
          g.bezierCurveTo(c1x, c1y, c2x, c2y, targetPos.x, targetPos.y);
          g.stroke();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c83949ded9e18fcb421055e2c03e5e0cd2588ae.js.map