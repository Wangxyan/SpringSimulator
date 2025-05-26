System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, isValid, Vec3, ResourcesUtil, PopupOptions, _dec, _class, _class2, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, PopupManager;

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "./ResourcesUtil", _context.meta, extras);
  }

  _export("PopupOptions", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      isValid = _cc.isValid;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ResourcesUtil = _unresolved_2.ResourcesUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb72adhUm1IXpHlO5jdi3i9", "PopupManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'find', 'isValid', 'Vec3', 'CameraComponent']);

      // import { PoolManager } from "./poolManager";
      // import { tips } from "../ui/common/tips";
      ({
        ccclass,
        property
      } = _decorator);
      SHOW_STR_INTERVAL_TIME = 800;

      _export("PopupManager", PopupManager = (_dec = ccclass("PopupManager"), _dec(_class = (_class2 = class PopupManager {
        constructor() {
          this._dictSharedPanel = {};
          //存在的弹窗界面
          this._dictLoading = {};
          //加载状态控制
          this._arrPopupDialog = [];
          //队列中的弹窗
          this._hidePopupArr = [];
          //打开下一个窗口时，需要被动关闭之前的弹窗
          this._showTipsTime = 0;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PopupManager();
          return this._instance;
        }
        /**
         * 检查当前界面是否正在展示
         * @param panelPath 
         */


        isDialogVisible(panelPath) {
          if (!this._dictSharedPanel.hasOwnProperty(panelPath)) {
            return false;
          }

          let panel = this._dictSharedPanel[panelPath];
          return isValid(panel) && panel.active && isValid(panel.parent);
        }
        /**
         * 显示单例界面
         * @param {PopupOptions} options 
         * @param {Array} args 
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        show(options, args, cb) {
          let panelPath = options.path;

          if (this._dictLoading[panelPath]) {
            return;
          } //是否关闭添加的弹窗队列


          options.closeCur && this.hideJoinPopup(panelPath);
          let idxSplit = panelPath.lastIndexOf('/');
          let scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];

            if (isValid(panel)) {
              var _options$parent;

              panel.parent = (_options$parent = options.parent) != null ? _options$parent : find("Canvas");
              panel.active = true;
              let script = panel.getComponent(scriptName);
              let script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));
              let ani = panel.getComponent('animationUI');

              if (script && script.show) {
                script.show.apply(script, args);

                if (ani) {
                  ani.open(() => {
                    cb && cb(script);
                  });
                } else {
                  cb && cb(script);
                }
              } else if (script2 && script2.show) {
                script2.show.apply(script2, args);

                if (ani) {
                  ani.open(() => {
                    cb && cb(script2);
                  });
                } else {
                  cb && cb(script2);
                }
              } else {
                throw `查找不到脚本文件${scriptName}`;
              }

              return;
            }
          }

          this._dictLoading[panelPath] = true;
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).createUI(panelPath, options.parent).then(node => {
            //判断是否有可能在显示前已经被关掉了？
            let isCloseBeforeShow = false;

            if (!this._dictLoading[panelPath]) {
              //已经被关掉
              isCloseBeforeShow = true;
            }

            this._dictLoading[panelPath] = false;
            this._dictSharedPanel[panelPath] = node;
            let ani = node.getComponent('animationUI');
            let script = node.getComponent(scriptName);
            let script2 = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

            if (script && script.show) {
              script.show.apply(script, args);

              if (ani) {
                ani.open(() => {
                  cb && cb(script);
                });
              } else {
                cb && cb(script);
              }
            } else if (script2 && script2.show) {
              script2.show.apply(script2, args);

              if (ani) {
                ani.open(() => {
                  cb && cb(script2);
                });
              } else {
                cb && cb(script2);
              }
            } else {
              throw `查找不到脚本文件${scriptName} 或 未定义show方法`;
            }

            if (isCloseBeforeShow) {
              //如果在显示前又被关闭，则直接触发关闭掉
              this.hide(panelPath);
            }
          });
        }
        /**
         * 隐藏单例界面
         * @param {String} panelPath 
         * @param {fn} callback
         */


        hide(panelPath, callback) {
          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              let ani = panel.getComponent('animationUI');

              if (ani) {
                ani.close(() => {
                  panel.parent = null;

                  if (callback && typeof callback === 'function') {
                    callback();
                  }
                });
              } else {
                panel.parent = null;

                if (callback && typeof callback === 'function') {
                  callback();
                }
              }
            } else if (callback && typeof callback === 'function') {
              callback();
            }
          }

          this._dictLoading[panelPath] = false;
        }

        hideAll() {
          for (const key in this._dictSharedPanel) {
            if (Object.prototype.hasOwnProperty.call(this._dictSharedPanel, key)) {
              const panel = this._dictSharedPanel[key];
              panel.parent = null;
            }
          }
        }
        /**
         * 添加需要被动关闭的弹窗
         * @param panelPath 
         */


        addHidePopup(panelPath) {
          if (!this._hidePopupArr.includes(panelPath)) {
            this._hidePopupArr.push(panelPath);
          }
        }
        /**
         * 关闭加入的隐藏弹窗
         */


        hideJoinPopup(panelPath) {
          if (this._hidePopupArr.length) {
            for (let i = 0, len = this._hidePopupArr.length; i < len; i++) {
              let hidePath = this._hidePopupArr[i];

              if (hidePath != panelPath) {
                this.hide(hidePath);

                this._hidePopupArr.splice(i, 1);

                i--;
                len--;
              }
            }
          }
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param options 
         * @param param 
         */


        pushToPopupSeq(options, param, callBack) {
          let popupDialog = {
            options: options,
            callBack: callBack,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.push(popupDialog);

          this._checkPopupSeq();
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {number} index 
         * @param {string} panelPath 
         * @param {*} param 
         */


        insertToPopupSeq(index, options, param, callBack) {
          let popupDialog = {
            options: options,
            callBack: callBack,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.splice(index, 0, popupDialog);
        }
        /**
         * 将弹窗从弹出窗队列中移除
         * @param {string} panelPath 
         */


        shiftFromPopupSeq(panelPath, callBack) {
          //检测是否为队列弹窗
          if (this._arrPopupDialog[0] && this._arrPopupDialog[0].options.path === panelPath) {
            this.hide(panelPath, () => {
              this._arrPopupDialog.shift();

              this._checkPopupSeq();
            });
          } else {
            this.hide(panelPath, callBack);
          }
        }
        /**
         * 检查当前是否需要弹窗
         */


        _checkPopupSeq() {
          if (this._arrPopupDialog.length > 0) {
            let first = this._arrPopupDialog[0];

            if (!first.isShow) {
              this.show(first.options, first.param, first.callBack);
              this._arrPopupDialog[0].isShow = true;
            }
          }
        }
        /**
         * 显示提示
         * @param {String} content 
         * @param {Function} cb 
         */


        showTips(content, type = 'txt', targetPos = new Vec3(), scale = 1, callback = () => {}) {
          let str = String(content);

          let next = () => {
            this._showTipsAni(str, type, targetPos, scale, callback);
          };

          var now = Date.now();

          if (now - this._showTipsTime < SHOW_STR_INTERVAL_TIME && type !== 'gold' && type !== 'heart') {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this._showTipsTime);
            setTimeout(() => {
              next();
            }, spareTime);
            this._showTipsTime = now + spareTime;
          } else {
            next();
            this._showTipsTime = now;
          }
        }
        /**
         * 内部函数
         * @param {String} content 
         * @param {Function} cb 
         */


        _showTipsAni(content, type, targetPos, scale, callback) {// ResourceUtil.getUIPrefabRes('common/tips').then((prefab: any) => {
          //     let tipsNode = PoolManager.instance.getNode(prefab, find("Canvas") as Node);
          //     let tipScript = tipsNode.getComponent(tips) as tips;
          //     tipScript.show(content, type, targetPos, scale, callback);
          // });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _export("PopupOptions", PopupOptions = class PopupOptions {
        constructor() {
          this.path = void 0;
          //窗口路径
          this.parent = void 0;
          //父节点
          this.closeCur = false;
        } //是否关闭添加的隐藏窗口队列


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fb0d5e2c336d38918f141ba4535206abe31f0f0.js.map