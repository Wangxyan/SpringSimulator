System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, v3, Input, director, Vec3, Tween, AudioManager, EventListener, GameController, OpenPopupManager, PopupManager, GameEvent, BattleUIManager, BgManager, BoxManager, GridManager, GridMapManager, HeroManager, MonsterManager, SkillManager, WeaponManager, GameDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Frame/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../Frame/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../Frame/OpenPopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Frame/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Game/Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleUIManager(extras) {
    _reporterNs.report("BattleUIManager", "../Game/Mgr/BattleUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgManager(extras) {
    _reporterNs.report("BgManager", "../Game/Mgr/BgManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxManager(extras) {
    _reporterNs.report("BoxManager", "../Game/Mgr/BoxManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "../Game/Mgr/GridManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridMapManager(extras) {
    _reporterNs.report("GridMapManager", "../Game/Mgr/GridMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroManager(extras) {
    _reporterNs.report("HeroManager", "../Game/Mgr/HeroManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterManager(extras) {
    _reporterNs.report("MonsterManager", "../Game/Mgr/MonsterManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillManager(extras) {
    _reporterNs.report("SkillManager", "../Game/Mgr/SkillManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponManager(extras) {
    _reporterNs.report("WeaponManager", "../Game/Mgr/WeaponManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../GameDefine", _context.meta, extras);
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
      tween = _cc.tween;
      v3 = _cc.v3;
      Input = _cc.Input;
      director = _cc.director;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.default;
    }, function (_unresolved_5) {
      OpenPopupManager = _unresolved_5.OpenPopupManager;
    }, function (_unresolved_6) {
      PopupManager = _unresolved_6.PopupManager;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      BattleUIManager = _unresolved_8.BattleUIManager;
    }, function (_unresolved_9) {
      BgManager = _unresolved_9.BgManager;
    }, function (_unresolved_10) {
      BoxManager = _unresolved_10.BoxManager;
    }, function (_unresolved_11) {
      GridManager = _unresolved_11.GridManager;
    }, function (_unresolved_12) {
      GridMapManager = _unresolved_12.GridMapManager;
    }, function (_unresolved_13) {
      HeroManager = _unresolved_13.HeroManager;
    }, function (_unresolved_14) {
      MonsterManager = _unresolved_14.MonsterManager;
    }, function (_unresolved_15) {
      SkillManager = _unresolved_15.SkillManager;
    }, function (_unresolved_16) {
      WeaponManager = _unresolved_16.WeaponManager;
    }, function (_unresolved_17) {
      GameDefine = _unresolved_17.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f055eMwsR9KHajpUuNSOeCK", "Game-001", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'Size', 'view', 'UITransform', 'tween', 'v3', 'EventTouch', 'Input', 'director', 'Button', 'Sprite', 'instantiate', 'Prefab', 'Vec3', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(_crd && BgManager === void 0 ? (_reportPossibleCrUseOfBgManager({
        error: Error()
      }), BgManager) : BgManager), _dec7 = property(_crd && GridMapManager === void 0 ? (_reportPossibleCrUseOfGridMapManager({
        error: Error()
      }), GridMapManager) : GridMapManager), _dec8 = property(_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
        error: Error()
      }), GridManager) : GridManager), _dec9 = property(_crd && WeaponManager === void 0 ? (_reportPossibleCrUseOfWeaponManager({
        error: Error()
      }), WeaponManager) : WeaponManager), _dec10 = property(_crd && HeroManager === void 0 ? (_reportPossibleCrUseOfHeroManager({
        error: Error()
      }), HeroManager) : HeroManager), _dec11 = property(_crd && BoxManager === void 0 ? (_reportPossibleCrUseOfBoxManager({
        error: Error()
      }), BoxManager) : BoxManager), _dec12 = property(_crd && MonsterManager === void 0 ? (_reportPossibleCrUseOfMonsterManager({
        error: Error()
      }), MonsterManager) : MonsterManager), _dec13 = property(_crd && BattleUIManager === void 0 ? (_reportPossibleCrUseOfBattleUIManager({
        error: Error()
      }), BattleUIManager) : BattleUIManager), _dec14 = property(_crd && SkillManager === void 0 ? (_reportPossibleCrUseOfSkillManager({
        error: Error()
      }), SkillManager) : SkillManager), _dec(_class = (_class2 = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameCtrl", _descriptor, this);

          _initializerDefineProperty(this, "battleMap", _descriptor2, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor3, this);

          _initializerDefineProperty(this, "openBox", _descriptor4, this);

          _initializerDefineProperty(this, "bgManager", _descriptor5, this);

          _initializerDefineProperty(this, "gridMapManager", _descriptor6, this);

          _initializerDefineProperty(this, "gridManager", _descriptor7, this);

          _initializerDefineProperty(this, "weaponManager", _descriptor8, this);

          _initializerDefineProperty(this, "heroManager", _descriptor9, this);

          _initializerDefineProperty(this, "boxManager", _descriptor10, this);

          _initializerDefineProperty(this, "monsterManager", _descriptor11, this);

          _initializerDefineProperty(this, "battleUIManager", _descriptor12, this);

          _initializerDefineProperty(this, "skillManager", _descriptor13, this);

          this._battleMapUpPosY = 1200;
          this._battleMapDownPosy = 200;
        }

        onLoad() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playMusic(2, true);
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.showGamePopup();
          this.init();
        }

        init() {
          this.gridManager.init();
          this.bgManager.init();
          this.gridMapManager.init();
          this.weaponManager.init();
          this.heroManager.init();
          this.monsterManager.init();
          this.skillManager.init();
          this.onTapBtn();
        }
        /* 触碰开始 */


        onTapBtn() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = true;
          this.setTweenAnim(this.removeWeaponList, 0.3);
        }
        /* 设置动画 */


        setTweenAnim(main, duration) {
          main.active = true;
          main.setScale(0.5, 0.5);
          tween(main).to(duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).call(() => {// 弹窗已完全展示
          }).start();
        }
        /**游戏开始 */


        onGameStart() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart = true;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameOver = false;
        }
        /**游戏结束 */


        onGameOver() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameOver = true;
          Tween.stopAll();
          this.clear();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).instance.hideAll();
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).resume();
          director.loadScene('Game');
        }
        /* 战斗 */


        onBattleBtn() {
          tween(this.battleMap).to(0.5, {
            position: new Vec3(0, this._battleMapDownPosy, 0)
          }, {
            easing: 'sineInOut'
          }).call(() => {
            //显示英雄
            this.heroManager.showHideHero(true); //初始化技能

            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).INIT_HERO_SKILL); //设置当前刷怪事件

            this.monsterManager.setCurChapterEvent();
            this.weaponManager.showHideRemoveList(false); //游戏开始

            this.onGameStart();
          }).start();
        }
        /* 重新调整背包 */


        onResertSelectBg() {
          tween(this.battleMap).to(0.5, {
            position: v3(0, this._battleMapUpPosY, 0)
          }, {
            easing: 'sineInOut'
          }).call(() => {
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SHOW_HIDE_SKILL_LIST, false);
            this.heroManager.showHideHero(false);
            (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).gameStart = false;
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).WEAPON_REMOVE_REFRESH);
            this.weaponManager.showHideRemoveList(true);
            this.setTweenAnim(this.removeWeaponList, 0.3);
            (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).gameTouch = true;
          }).start();
        }
        /* 触摸点击 */


        onTouchStart(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            var wpos = event.getUILocation();
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_TOUCH_START, wpos);
          }
        }
        /* 触摸移动 */


        onTouchMove(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            var wpos = event.getUILocation();
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_TOUCH_MOVE, wpos);
          }
        }
        /* 触摸结束 */


        onTouchEnd(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            var wpos = event.getUILocation();
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_TOUCH_END, wpos);
          }
        }
        /* 触摸取消 */


        onTouchCancle(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            var wpos = event.getUILocation();
            (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
              error: Error()
            }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GAME_TOUCH_CANCLE, wpos);
          }
        }

        onEnable() {
          this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.gameCtrl.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_OVER, this.onGameOver, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TAP_BTN, this.onTapBtn, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RESERT_SELECT_BAG, this.onResertSelectBg, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_BATTLE_START, this.onBattleBtn, this);
        }

        onDisable() {
          this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.gameCtrl.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_OVER, this.onGameOver, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TAP_BTN, this.onTapBtn, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RESERT_SELECT_BAG, this.onResertSelectBg, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_BATTLE_START, this.onBattleBtn, this);
        }

        clear() {
          // 数据清理整理
          this.bgManager.clear();
          this.heroManager.clear();
          this.gridManager.clear();
          this.weaponManager.clear();
          this.monsterManager.clear();
          this.boxManager.clear();
          this.battleUIManager.clear();
          this.skillManager.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "battleMap", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "openBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gridMapManager", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gridManager", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "weaponManager", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "heroManager", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "boxManager", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "monsterManager", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "battleUIManager", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "skillManager", [_dec14], {
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
//# sourceMappingURL=8521f909e7e06b96aed1a31b28ccfc90ebab66d6.js.map