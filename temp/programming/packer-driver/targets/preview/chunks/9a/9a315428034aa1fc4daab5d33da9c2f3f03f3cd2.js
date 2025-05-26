System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, resources, ProgressBar, Label, Constants, AudioManager, CfgMgr, OpenPopupManager, SystemConstantCfg, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Load;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Frame/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../Frame/OpenPopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemConstantCfg(extras) {
    _reporterNs.report("SystemConstantCfg", "../Model/SystemConstantModel", _context.meta, extras);
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
      Node = _cc.Node;
      director = _cc.director;
      resources = _cc.resources;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      OpenPopupManager = _unresolved_5.OpenPopupManager;
    }, function (_unresolved_6) {
      SystemConstantCfg = _unresolved_6.SystemConstantCfg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47e05tFPodPoaFGg/ApUzzN", "Load", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'game', 'director', 'screen', 'view', 'resources', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Load", Load = (_dec = ccclass('Load'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = class Load extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "lbText", _descriptor2, this);

          _initializerDefineProperty(this, "PersistRoot", _descriptor3, this);

          this._progress = 0;
        }

        onLoad() {
          this.initPopupLayer(); //加载配置数据

          this.loadLocalGameConfg();
        }
        /* 初始化弹窗提示层 */


        initPopupLayer() {
          director.addPersistRootNode(this.PersistRoot);
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.TopLayer = this.PersistRoot.getChildByName('Top');
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.MidLayer = this.PersistRoot.getChildByName('Middle');
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.BottomLayer = this.PersistRoot.getChildByName('Bottom');
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.ToastLayer = this.PersistRoot.getChildByName('Toast');
        }
        /* 从本地加载配置数据 */


        loadLocalGameConfg() {
          resources.loadDir((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ConfigPath, (finished, total, item) => {
            var p = 80 / total;
            this._progress += p;
            this.setProgressBar();
          }, (err, data) => {
            for (var i = 0; i < data.length; i++) {
              var element = data[i];
              (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
                error: Error()
              }), CfgMgr) : CfgMgr).setCfgData(element.name, element.json);
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.init();
            this.initData();
          });
        }
        /* 初始化数据 */


        initData() {
          this.convertConstantData(); //加载场景

          this.preloadScene();
        }
        /* 转换系统常量数据配置 */


        convertConstantData() {
          var ConstantData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getCfgDataArray(new (_crd && SystemConstantCfg === void 0 ? (_reportPossibleCrUseOfSystemConstantCfg({
            error: Error()
          }), SystemConstantCfg) : SystemConstantCfg)());
          ConstantData.forEach(item => {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).SysConstant[item.ConstantName] = item;
          });
        }

        setProgressBar() {
          this.lbText.string = Math.floor(this._progress) + "%";
          this.progressBar.progress = this._progress / 100;
        }
        /* 预加载场景 */


        preloadScene() {
          var sceneName = 'Game';
          director.preloadScene(sceneName, (completedCount, totalCount) => {
            var p = Math.floor(20 * (completedCount / totalCount));

            if (this._progress < 80 + p) {
              this._progress = 80 + p;
            }

            this.setProgressBar();
          }, () => {
            this._progress = 100;
            this.setProgressBar();
            director.loadScene(sceneName);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PersistRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a315428034aa1fc4daab5d33da9c2f3f03f3cd2.js.map