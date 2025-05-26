System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, Label, instantiate, tween, v3, ProgressBar, view, Button, Sprite, Constants, EventListener, OpenPopupManager, ResourcesUtil, Util, GridData, MonsterData, SkillUpgradeData, WeaponData, GameEvent, SkillTypeItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, GamePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../../Frame/OpenPopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../../Game/Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "../../Game/Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillUpgradeData(extras) {
    _reporterNs.report("SkillUpgradeData", "../../Game/Data/SkillUpgradeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinObj(extras) {
    _reporterNs.report("CoinObj", "../../Game/Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../../Game/Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../Game/Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTypeItem(extras) {
    _reporterNs.report("SkillTypeItem", "../../Game/Skill/SkillTypeItem", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Label = _cc.Label;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      v3 = _cc.v3;
      ProgressBar = _cc.ProgressBar;
      view = _cc.view;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      EventListener = _unresolved_3.EventListener;
    }, function (_unresolved_4) {
      OpenPopupManager = _unresolved_4.OpenPopupManager;
    }, function (_unresolved_5) {
      ResourcesUtil = _unresolved_5.ResourcesUtil;
    }, function (_unresolved_6) {
      Util = _unresolved_6.Util;
    }, function (_unresolved_7) {
      GridData = _unresolved_7.GridData;
    }, function (_unresolved_8) {
      MonsterData = _unresolved_8.MonsterData;
    }, function (_unresolved_9) {
      SkillUpgradeData = _unresolved_9.SkillUpgradeData;
    }, function (_unresolved_10) {
      WeaponData = _unresolved_10.WeaponData;
    }, function (_unresolved_11) {
      GameEvent = _unresolved_11.GameEvent;
    }, function (_unresolved_12) {
      SkillTypeItem = _unresolved_12.SkillTypeItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbe14r+mn5EhrfiOzy+Ys8V", "GamePopup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Label', 'instantiate', 'Prefab', 'tween', 'v3', 'ProgressBar', 'view', 'Button', 'Sprite', 'Layout']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePopup", GamePopup = (_dec = ccclass('GamePopup'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class GamePopup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "expProgerssBar", _descriptor, this);

          _initializerDefineProperty(this, "expLevel", _descriptor2, this);

          _initializerDefineProperty(this, "kill", _descriptor3, this);

          _initializerDefineProperty(this, "gold", _descriptor4, this);

          _initializerDefineProperty(this, "wave", _descriptor5, this);

          _initializerDefineProperty(this, "buttonList", _descriptor6, this);

          _initializerDefineProperty(this, "placeList", _descriptor7, this);

          _initializerDefineProperty(this, "skillTypeList", _descriptor8, this);

          this.weaponSkill = [];
          //携带的武器id
          this._totalGold = 0;
          this._maxExp = 100;
          //当前最大经验值
          this._curExp = 0;
          //当前经验值
          this._level = 0;
        }

        //当期前等级
        show() {
          this._totalGold = 0;
          this._curExp = 0;
          this._level = 0;
          this._maxExp = (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.getBattleLevelByLevel(this._level + 1);
          this.weaponSkill = [];
          this.gold.string = "" + this._totalGold;
          var scale = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).adapterScale();
          this.buttonList.setScale(scale, scale);
          this.expProgerssBar.node.active = false;
          this.expProgerssBar.progress = 0;
          this.expProgerssBar.node.setScale(scale, scale);
          this.onSetWaveInfo(1);
          this.updateLevelInfo();
          this.clearSkill();
          this.buttonList.active = true;
          this.expProgerssBar.node.active = false;
        }
        /* 金币动画 */


        onGameCoin(coinObj) {
          var _this = this;

          var targetPos = this.gold.node.getPosition();
          var count = coinObj.num;
          var wpos = coinObj.wpos;
          var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).battlePath + 'goldItem';
          var startPos = this.gold.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(itemPrefab => {
            var _loop = function _loop() {
              var item = instantiate(itemPrefab);
              var posX = (Math.random() - 0.5) * 2 * 100 + startPos.x;
              var posY = (Math.random() - 0.5) * 2 * 50 + startPos.y;
              item.parent = _this.gold.node.parent;
              item.setPosition(startPos);
              tween(item).to(0.2, {
                position: v3(posX, posY, 0)
              }, {
                easing: 'sineIn'
              }).delay(0.2).to(0.5, {
                position: targetPos
              }, {
                easing: 'sineInOut'
              }).call(() => {
                _this._totalGold++;
                _this.gold.string = "" + _this._totalGold;
                item.destroy();
              }).start();
            };

            for (var i = 0; i < count; i++) {
              _loop();
            }
          });
        }
        /* 设置战斗波次信息 */


        onSetWaveInfo(wave) {
          this.wave.string = "\u7B2C" + wave + "/" + (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.MaxWave + "\u6CE2";
        }
        /* 更新怪物进度 */


        onUpdateMonsterProgress(num, exp) {
          this.kill.string = "\u6740\u654C\u6570\uFF1A" + num;
          this._curExp += exp;
          this._maxExp = (_crd && SkillUpgradeData === void 0 ? (_reportPossibleCrUseOfSkillUpgradeData({
            error: Error()
          }), SkillUpgradeData) : SkillUpgradeData).instance.getBattleLevelByLevel(this._level + 1);

          if (this._curExp >= this._maxExp) {
            //升级
            this._level++;
            this._curExp = this._curExp - this._maxExp;
            this.updateLevelInfo();
          }

          this.updateLevelInfo();
        }
        /**
         * 更新玩家经验信息
        */


        updateLevelInfo() {
          this.expLevel.string = "" + this._level;
          this.expProgerssBar.progress = this._curExp / this._maxExp;
        }
        /* 设置战斗按钮状态 */


        setBattleBtnStatus() {
          var weaponIdArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemDataKeys();
          var battleBtn = this.buttonList.children[1];

          if (weaponIdArr.length) {
            battleBtn.getComponent(Button).interactable = true;
            battleBtn.getComponent(Sprite).grayscale = false;
          } else {
            battleBtn.getComponent(Button).interactable = false;
            battleBtn.getComponent(Sprite).grayscale = true;
          }
        }
        /* 刷新 */


        onRerollBtn() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_REMOVE_REFRESH);
        }
        /* 战斗 */


        onBattleBtn() {
          this.buttonList.active = false;
          this.expProgerssBar.node.active = true;
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_BATTLE_START);
        }

        onPlaceFinishBtn() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).PLACE_GRID_FINISH);
          this.placeList.active = false;
        }

        onShowHidePlaceList(status) {
          this.buttonList.active = !status;
          this.placeList.active = status;
        }

        onShowHideSkillList(status) {
          this.skillTypeList.active = status;
          this.buttonList.active = !status;
          this.expProgerssBar.node.active = status;
        }

        clearSkill() {
          for (var i = 0; i < this.skillTypeList.children.length; i++) {
            var element = this.skillTypeList.children[i];

            if (element.active) {
              element.destroy();
            }
          }
        }

        initHeroSkill() {
          //清除技能
          this.clearSkill();
          var visibleSize = view.getVisibleSize();
          this.skillTypeList.active = true;
          this.skillTypeList.getComponent(UITransform).width = visibleSize.width;
          var skillTypeItem0 = this.skillTypeList.children[0];
          var cMaxCount = 8; //行数

          var rMaxCount = 2; //列数

          var space = 10;
          var maxWidth = 100;
          this.weaponSkill = [];
          var weaponData = Array.from((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemMapData().values());
          var skillCount = weaponData.length;
          var limtCount = skillCount > cMaxCount ? cMaxCount : skillCount;
          var width = Math.floor((visibleSize.width - (limtCount + 1) * space) / limtCount) > maxWidth ? maxWidth : Math.floor((visibleSize.width - (limtCount + 1) * space) / limtCount);
          var scale = width < maxWidth ? width / maxWidth : 1;
          skillTypeItem0.setScale(scale, scale);
          var startPosX = limtCount % 2 == 0 ? -(space / 2 + (limtCount / 2 - 1) * space + limtCount / 2 * width - width / 2) : -Math.floor(limtCount / 2) * (space + width);
          var startPosY = skillCount > cMaxCount ? 50 : 0;

          for (var i = 0; i < weaponData.length; i++) {
            var weaponObj = weaponData[i];
            var wid = weaponObj.wid;
            var key = weaponObj.id;
            var weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgById(wid);
            var skillId = weaponCfg.SkillId;
            var skillKey = 'skillTypeItem' + weaponObj.id;
            var skillTypeItem = null;
            var posX = i >= cMaxCount ? startPosX + i % cMaxCount * (width + space) : startPosX + i * (width + space);
            var posY = i >= cMaxCount ? startPosY - width - space : startPosY;
            skillTypeItem = instantiate(skillTypeItem0);
            skillTypeItem.parent = this.skillTypeList;
            skillTypeItem.active = true;
            skillTypeItem.setPosition(posX, posY);
            skillTypeItem.name = skillKey;
            skillTypeItem.getComponent(_crd && SkillTypeItem === void 0 ? (_reportPossibleCrUseOfSkillTypeItem({
              error: Error()
            }), SkillTypeItem) : SkillTypeItem).init(key, weaponCfg);
            this.weaponSkill.push(wid);
          }
        }

        onPauseBtn() {
          (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
            error: Error()
          }), OpenPopupManager) : OpenPopupManager).instance.showPausePopup();
        }

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_CHANGE_COIN, this.onGameCoin, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_BATTLE, this.onSetWaveInfo, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_MONSTER_PROGRESS, this.onUpdateMonsterProgress, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SET_BATTLE_BTN_STATUS, this.setBattleBtnStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_HERO_SKILL, this.initHeroSkill, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDE_SKILL_LIST, this.onShowHideSkillList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDE_PLACE_LIST, this.onShowHidePlaceList, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).WEAPON_CHANGE_COIN, this.onGameCoin, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_BATTLE, this.onSetWaveInfo, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_MONSTER_PROGRESS, this.onUpdateMonsterProgress, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SET_BATTLE_BTN_STATUS, this.setBattleBtnStatus, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).INIT_HERO_SKILL, this.initHeroSkill, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDE_SKILL_LIST, this.onShowHideSkillList, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDE_PLACE_LIST, this.onShowHidePlaceList, this);
        }

        onTapBtn() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GAME_TAP_BTN);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "expProgerssBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "expLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "kill", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wave", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "buttonList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "placeList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "skillTypeList", [_dec9], {
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
//# sourceMappingURL=284978b342075a1d6cb77a748a6b2fd3cde88419.js.map