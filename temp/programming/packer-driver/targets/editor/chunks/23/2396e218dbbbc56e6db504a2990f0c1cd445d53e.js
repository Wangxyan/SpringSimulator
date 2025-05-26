System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, game, Game, _crd, cc, GameController;

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
      game = _cc2.game;
      Game = _cc2.Game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c76e0fkdyBP5IBNGua/cGsR", "GameController", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      __checkObsolete__(['game', 'Game']);

      (function (_GameController) {
        var timeScale = 1;
        var gameTimeScale = 1; //@ts-ignore

        game._calculateDT = function (now) {
          if (!now) now = performance.now();
          this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0;

          if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
            this._deltaTime = this.frameTime / 1000;
          }

          this._startTime = now;
          this._deltaTime = this._deltaTime * timeScale;
          return this._deltaTime; // this._deltaTime * timeScale;
        };

        function getGameTimeScale() {
          return gameTimeScale;
        }

        _GameController.getGameTimeScale = getGameTimeScale;

        function setGameTimeScale(time) {
          gameTimeScale = time;
        }

        _GameController.setGameTimeScale = setGameTimeScale;

        function changeTimeScale(time) {
          timeScale = time;
        }

        _GameController.changeTimeScale = changeTimeScale;
        const pause_data = _GameController.pause_data = new class {
          constructor() {
            /**暂停状态 */
            this.state_b = false;

            /**2d物理系统状态 */
            this.physics_2d_b = void 0;

            /**3d物理系统状态 */
            this.physics_3d_b = void 0;

            /**定时器对象列表 */
            this.scheduler_as = void 0;

            /**动画列表 */
            this.anim_as = [];

            /**缓动对象列表 */
            this.tween_target_as = void 0;

            /**龙骨组件列表 */
            // dragon_bones_as: cc.dragonBones.ArmatureDisplay[];
            this.spine_as = void 0;
            this.spine_TimeScale = new Map();
          } //恢复龙骨缩放值


        }();

        class pause_config {
          constructor() {
            /**排除节点 */
            this.exclude_as = void 0;

            /**递归排除节点 */
            this.recu_exclude_as = void 0;
          }

        }

        _GameController.pause_config = pause_config;

        /*---------function_private */
        function recu_node_list(node_, result_as = []) {
          if (!node_) {
            return result_as;
          }

          result_as.push(node_);
          node_.children.forEach(v1 => {
            result_as.push(v1);
            recu_node_list(v1);
          });
          return result_as;
        }

        function quick(timeScale) {
          cc.director.getScheduler().setTimeScale(timeScale);
        }

        _GameController.quick = quick;

        function pause(config_) {
          if (pause_data.state_b) {
            return;
          } // 暂停定时器


          pause_data.scheduler_as = cc.director.getScheduler().pauseAllTargets(); // 暂停当前动画

          {
            let anim_system = cc.director.getSystem(cc.AnimationManager.ID);
            pause_data.anim_as.splice(0, pause_data.anim_as.length, ...anim_system["_anims"].array);
            pause_data.anim_as.forEach(v1 => {
              v1.pause();
            });
          } // 暂停龙骨动画

          {
            pause_data.spine_as = cc.director.getScene().getComponentsInChildren(cc.sp.Skeleton);
            pause_data.spine_as.forEach(v1 => {
              if (v1.skeletonData) {
                pause_data.spine_TimeScale.set(v1.skeletonData.name, v1.timeScale);
                v1.timeScale = 0;
              }
            });
          }
          {// pause_data.dragon_bones_as = cc.director
            // 	.getScene()
            // 	.getComponentsInChildren(cc.dragonBones.ArmatureDisplay);
            // pause_data.dragon_bones_as.forEach(v1 => {
            // 	v1.timeScale = 0;
            // });
          } // 暂停当前缓动

          pause_data.tween_target_as = cc.TweenSystem.instance.ActionManager.pauseAllRunningActions(); // 暂停物理系统

          {// if (cc.PhysicsSystem2D && cc.PhysicsSystem2D.instance.enable) {
            // 	pause_data.physics_2d_b = cc.PhysicsSystem2D.instance.enable;
            // 	cc.PhysicsSystem2D.instance.enable = false;
            // }
            // if (cc.PhysicsSystem && cc.PhysicsSystem.instance.enable) {
            // 	pause_data.physics_3d_b = cc.PhysicsSystem.instance.enable;
            // 	cc.PhysicsSystem.instance.enable = false;
            // }
          } // 恢复排除节点

          if (config_) {
            var _config_$recu_exclude;

            let exclude_as = [];
            exclude_as.push(...config_.exclude_as);
            (_config_$recu_exclude = config_.recu_exclude_as) == null || _config_$recu_exclude.forEach(v1 => {
              exclude_as.push(...recu_node_list(v1));
            });
            exclude_as.forEach(v1 => {
              resume_node(v1);
            });
          }

          pause_data.state_b = true;
        }

        _GameController.pause = pause;

        function resume() {
          // 恢复定时器
          cc.director.getScheduler().resumeTargets(pause_data.scheduler_as); // 恢复动画

          pause_data.anim_as.forEach(v1 => {
            if (v1.isPlaying && v1.isPaused) {
              v1.play();
            }
          }); // 恢复龙骨动画
          // pause_data.dragon_bones_as.forEach(v1 => {
          // 	v1.timeScale = 1;
          // });

          if (pause_data.spine_as) {
            pause_data.spine_as.forEach(v1 => {
              if (v1.skeletonData) {
                v1.timeScale = pause_data.spine_TimeScale.has(v1.skeletonData.name) ? pause_data.spine_TimeScale.get(v1.skeletonData.name) : 1;
              }
            });
          } // 恢复缓动


          cc.TweenSystem.instance.ActionManager.resumeTargets(pause_data.tween_target_as); // 恢复物理系统

          {// if (pause_data.physics_2d_b) {
            // 	cc.PhysicsSystem2D.instance.enable = pause_data.physics_2d_b;
            // }
            // if (pause_data.physics_3d_b) {
            // 	cc.PhysicsSystem.instance.enable = pause_data.physics_3d_b;
            // }
          }
          pause_data.state_b = false;
        }

        _GameController.resume = resume;
        /**暂停节点
         * - 物理系统需手动启用/禁用
         */

        function pause_node(args1_) {
          let node_as;

          if (Array.isArray(args1_)) {
            node_as = args1_;
          } else {
            node_as = [args1_];
          }

          node_as.forEach(v1 => {
            var _v1$getComponent;

            // 暂停定时器
            cc.director.getScheduler().pauseTarget(v1); // 暂停动画

            (_v1$getComponent = v1.getComponent(cc.Animation)) == null || _v1$getComponent.pause(); // 暂停龙骨

            if (v1.getComponent(cc.dragonBones.ArmatureDisplay)) {
              v1.getComponent(cc.dragonBones.ArmatureDisplay).timeScale = 0;
            } // 暂停缓动


            cc.TweenSystem.instance.ActionManager.pauseTarget(v1);
          });
        }

        _GameController.pause_node = pause_node;
        /**恢复节点 */

        function resume_node(args1_) {
          let node_as;

          if (Array.isArray(args1_)) {
            node_as = args1_;
          } else {
            node_as = [args1_];
          }

          node_as.forEach(v1 => {
            var _v1$getComponent2;

            // 恢复定时器
            cc.director.getScheduler().resumeTarget(v1); // 恢复动画

            (_v1$getComponent2 = v1.getComponent(cc.Animation)) == null || _v1$getComponent2.resume(); // 恢复龙骨

            if (v1.getComponent(cc.dragonBones.ArmatureDisplay)) {
              v1.getComponent(cc.dragonBones.ArmatureDisplay).timeScale = 1;
            } // 恢复缓动


            cc.TweenSystem.instance.ActionManager.resumeTarget(v1);
          });
        }

        _GameController.resume_node = resume_node;
      })(GameController || (GameController = {}));

      _export("default", GameController);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2396e218dbbbc56e6db504a2990f0c1cd445d53e.js.map