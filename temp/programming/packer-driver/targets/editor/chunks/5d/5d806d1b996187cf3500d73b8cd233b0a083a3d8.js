System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameDefine, _crd, DebugLevel;

  _export("GameDefine", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd476d/4/RPHLXXF2HDHdbK", "GameDefine", undefined);

      /* 日志级别 */
      __checkObsolete__(['Vec2']);

      DebugLevel = /*#__PURE__*/function (DebugLevel) {
        DebugLevel[DebugLevel["DEBUG"] = 0] = "DEBUG";
        DebugLevel[DebugLevel["INFO"] = 1] = "INFO";
        DebugLevel[DebugLevel["WARNING"] = 2] = "WARNING";
        DebugLevel[DebugLevel["ERROR"] = 3] = "ERROR";
        return DebugLevel;
      }(DebugLevel || {});

      _export("GameDefine", GameDefine = class GameDefine {});

      GameDefine.gameStart = false;
      //游戏是否启动
      GameDefine.gameOver = false;
      //游戏结束
      GameDefine.gameTouch = false;
      //触摸移动
      GameDefine.frameTime = 0.016;
      //固定帧时间
      GameDefine.defaultFrameTime = 0.016;
      //固定帧默认时间
      GameDefine.viewWidth = 750;
      GameDefine.viewHeight = 1334;
      GameDefine.ScreenShakeLevel = 1;
      //屏幕震动等级
      GameDefine.ScreenShakeCount = 1;
      //屏幕震动次数
      GameDefine.ScreenShakeInteval = 0.0333;
      //屏幕震动时间参数
      GameDefine.DebugLevel = DebugLevel.DEBUG;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d806d1b996187cf3500d73b8cd233b0a083a3d8.js.map