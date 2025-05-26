System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CfgMgr, ChapterCfg, ChapterData, _crd;

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterCfg(extras) {
    _reporterNs.report("ChapterCfg", "../../../Model/ChapterModel", _context.meta, extras);
  }

  _export("ChapterData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CfgMgr = _unresolved_2.CfgMgr;
    }, function (_unresolved_3) {
      ChapterCfg = _unresolved_3.ChapterCfg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "037c1pT24xDKr9WjwmVRWAA", "ChapterData", undefined);

      _export("ChapterData", ChapterData = class ChapterData {
        /* 获取章节数据 */
        getChapterData() {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && ChapterCfg === void 0 ? (_reportPossibleCrUseOfChapterCfg({
            error: Error()
          }), ChapterCfg) : ChapterCfg)());
        }

        getChapterCfgById(chapterId) {
          return (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && ChapterCfg === void 0 ? (_reportPossibleCrUseOfChapterCfg({
            error: Error()
          }), ChapterCfg) : ChapterCfg)(), chapterId);
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new ChapterData();
          }

          return this._instance;
        }

      });

      ChapterData._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=451ce2cb8e18f1ccda923e0bfd0d3d400069d362.js.map