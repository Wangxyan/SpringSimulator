System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Constants, Toast, GameController, PopupManager, PopupOptions, ResourcesUtil, OpenPopupManager, _crd;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponCfg(extras) {
    _reporterNs.report("WeaponCfg", "../Model/WeaponModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToast(extras) {
    _reporterNs.report("Toast", "../Popup/Common/Toast", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupOptions(extras) {
    _reporterNs.report("PopupOptions", "./PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "./ResourcesUtil", _context.meta, extras);
  }

  _export("OpenPopupManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      Toast = _unresolved_3.Toast;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.default;
    }, function (_unresolved_5) {
      PopupManager = _unresolved_5.PopupManager;
      PopupOptions = _unresolved_5.PopupOptions;
    }, function (_unresolved_6) {
      ResourcesUtil = _unresolved_6.ResourcesUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e999vijwZOkpi2Rl4QGn2h", "OpenPopupManager", undefined);

      __checkObsolete__(['instantiate', 'Node', 'Prefab', 'Vec3']);

      _export("OpenPopupManager", OpenPopupManager = class OpenPopupManager {
        constructor() {
          this.TopLayer = null;
          //弹窗上层
          this.MidLayer = null;
          //弹窗中层
          this.BottomLayer = null;
          //弹窗下层
          this.ToastLayer = null;
        }

        //弹窗提示层

        /* 显示队列弹窗 */
        showSeqPopup(path, parentPath, param, callBack) {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = path;
          options.parent = this.TopLayer;
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.pushToPopupSeq(options, param, callBack);
        }
        /* 关闭队列弹窗 */


        hideSeqPopup(path, callBack) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.shiftFromPopupSeq(path, callBack);
        }
        /* 添加需要被动关闭的窗口 */


        addHidePopup(path) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.addHidePopup(path);
        }
        /* 显示章节界面 */


        showChapterPopup(parent) {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.ChapterPopup;
          options.parent = parent;
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.show(options);
        }
        /* 显示战斗弹窗 */


        showGamePopup() {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.GamePopup;
          options.parent = this.BottomLayer;
          options.closeCur = true;
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.show(options);
        }
        /* 显示战斗结束弹窗 */


        showGameOverPopup(status) {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.GameOverPopup;
          options.parent = this.TopLayer;
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.show(options, [status]);
        }
        /* 显示武器详情 */


        showWeaponDetailPopup(weaponCfg) {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.WeaponDetailPopup;
          options.parent = this.MidLayer;
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.show(options, [weaponCfg]);
        }
        /* 显示暂停界面 */


        showPausePopup() {
          var options = new (_crd && PopupOptions === void 0 ? (_reportPossibleCrUseOfPopupOptions({
            error: Error()
          }), PopupOptions) : PopupOptions)();
          options.path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PopupUI.PausePopup;
          options.parent = this.MidLayer;
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).pause();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.show(options);
        }

        showToast(msg, posY) {
          if (posY === void 0) {
            posY = 0;
          }

          var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).toastPath;
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(item => {
            var toast = instantiate(item);
            toast.parent = this.ToastLayer;
            toast.setPosition(0, posY);
            toast.getComponent(_crd && Toast === void 0 ? (_reportPossibleCrUseOfToast({
              error: Error()
            }), Toast) : Toast).init(msg);
          });
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new OpenPopupManager();
          }

          return this._instance;
        }

      });

      OpenPopupManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97bf926e857734922f6ade1976fe9d60d585db24.js.map