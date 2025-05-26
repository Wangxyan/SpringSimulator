System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationComponent, instantiate, Node, Vec3, Sprite, PoolManager, MonsterItem, ResourcesUtil, EventListener, MonsterEvent, BaseComponent, GameEvent, MonsterType, MonsterAmin, MonsterData, MonsterEventObj, MonsterObj, Constants, GameDefine, OpenPopupManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MonsterManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../Frame/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterItem(extras) {
    _reporterNs.report("MonsterItem", "../Monster/MonsterItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "../../Frame/ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "../../Frame/EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterEvent(extras) {
    _reporterNs.report("MonsterEvent", "../Monster/Event/MonsterEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../Frame/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Event/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterEventCfg(extras) {
    _reporterNs.report("ChapterEventCfg", "../../Model/ChapterEventModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterType(extras) {
    _reporterNs.report("MonsterType", "../../Model/ChapterEventModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterAmin(extras) {
    _reporterNs.report("MonsterAmin", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterCfg(extras) {
    _reporterNs.report("MonsterCfg", "../../Model/MonsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterData(extras) {
    _reporterNs.report("MonsterData", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterEventObj(extras) {
    _reporterNs.report("MonsterEventObj", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterObj(extras) {
    _reporterNs.report("MonsterObj", "../Data/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenPopupManager(extras) {
    _reporterNs.report("OpenPopupManager", "../../Frame/OpenPopupManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AnimationComponent = _cc.AnimationComponent;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }, function (_unresolved_3) {
      MonsterItem = _unresolved_3.MonsterItem;
    }, function (_unresolved_4) {
      ResourcesUtil = _unresolved_4.ResourcesUtil;
    }, function (_unresolved_5) {
      EventListener = _unresolved_5.EventListener;
    }, function (_unresolved_6) {
      MonsterEvent = _unresolved_6.MonsterEvent;
    }, function (_unresolved_7) {
      BaseComponent = _unresolved_7.default;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }, function (_unresolved_9) {
      MonsterType = _unresolved_9.MonsterType;
    }, function (_unresolved_10) {
      MonsterAmin = _unresolved_10.MonsterAmin;
    }, function (_unresolved_11) {
      MonsterData = _unresolved_11.MonsterData;
      MonsterEventObj = _unresolved_11.MonsterEventObj;
      MonsterObj = _unresolved_11.MonsterObj;
    }, function (_unresolved_12) {
      Constants = _unresolved_12.Constants;
    }, function (_unresolved_13) {
      GameDefine = _unresolved_13.GameDefine;
    }, function (_unresolved_14) {
      OpenPopupManager = _unresolved_14.OpenPopupManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc381bL0FRA+qOjTTLMP7lu", "MonsterManager", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'AnimationComponent', 'Asset', 'Component', 'director', 'instantiate', 'log', 'Node', 'Prefab', 'Skeleton', 'sp', 'v3', 'Vec2', 'Vec3', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterManager", MonsterManager = (_dec = ccclass('MonsterManager'), _dec2 = property(Node), _dec(_class = (_class2 = class MonsterManager extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "monsterParent", _descriptor, this);

          this._monsterPrefabMap = new Map();
          //怪物
          this._gameTime = 0;
          //游戏时间
          this._brushMonsterEventArr = [];
          //当前刷怪事件数据
          this._queeuMonsterArr = [];
          //队列怪物
          this._curChapterEvent = null;
          //当前刷怪事件
          this._curTotalNum = 0;
          //当前事件总刷怪数量
          this._curKillNum = 0;
          //当前击杀怪物数量
          this._screenMonsterCount = 0;
          //屏幕上存在的怪物
          this._schduleTime = 1;
        }

        init() {
          this._schduleTime = 1;
          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.init();
        }
        /* 设置当前刷怪事件 */


        setCurChapterEvent() {
          if ((_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.brushMonsterEventData.length) {
            this._curChapterEvent = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
              error: Error()
            }), MonsterData) : MonsterData).instance.brushMonsterEventData.shift();
            (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
              error: Error()
            }), MonsterData) : MonsterData).instance.wave = this._curChapterEvent.Wave; // Debug.log('当前刷怪事件', this._curChapterEvent);

            this.setBrushMonsterEvent();
          }
        }
        /**
         * 设置刷怪事件组
         */


        setBrushMonsterEvent() {
          this._curTotalNum = 0;
          this._curKillNum = 0;
          let eType = this._curChapterEvent.eType;

          let eventArr = this._curChapterEvent.Event.split(','); // if (eType == BrushMonsterType.BOSS) {
          //     //boss事件(随机boss事件)
          //     eventArr = [this.getBossEventByWeight(eventArr)];
          // }
          //刷怪事件


          for (let i = 0; i < eventArr.length; i++) {
            const eventStrArr = eventArr[i].split('|');
            let monsterId = Number(eventStrArr[0]);
            let totalNum = Number(eventStrArr[1]);
            let startTime = Number(eventStrArr[2]);
            let endTime = Number(eventStrArr[3]);
            let diffTime = endTime - startTime;
            let secNum = Math.floor(totalNum / diffTime);
            let diffNum = totalNum - diffTime * secNum;
            let monsterEventObj = new (_crd && MonsterEventObj === void 0 ? (_reportPossibleCrUseOfMonsterEventObj({
              error: Error()
            }), MonsterEventObj) : MonsterEventObj)();
            monsterEventObj.HpUp = this._curChapterEvent.HpUp;
            monsterEventObj.monsterId = monsterId;
            monsterEventObj.startTime = startTime;
            monsterEventObj.secNum = secNum;
            monsterEventObj.diffNum = diffNum;
            monsterEventObj.curNum = 0;
            monsterEventObj.totalNum = totalNum;

            this._brushMonsterEventArr.push(monsterEventObj);

            this._curTotalNum += totalNum;
          }
        }
        /* 通过权重获取boss事件 */


        getBossEventByWeight(eventArr) {
          let start = 0;
          let end = 0;
          let sum = 0;
          let weightArr = [];

          for (let i = 0; i < eventArr.length; i++) {
            const element = eventArr[i];
            let eventStrArr = element.split('|');
            let weight = Number(eventStrArr[4]);
            weightArr.push(weight);
            sum += weight;
          }

          let random = Math.floor(Math.random() * sum);
          let index = 0;
          weightArr.some((item, idx) => {
            end = start + item;

            if (random >= start && random < end) {
              index = idx;
              return true;
            }

            start = end;
          });
          return eventArr[index];
        }
        /**
         * 创建怪物
         */


        onCreateMonster(createrNum) {
          for (let i = 0; i < createrNum; i++) {
            if (this._queeuMonsterArr.length) {
              let monsterObj = this._queeuMonsterArr.shift();

              let monsterId = monsterObj.id;
              let monsterItem = null;
              let pos = new Vec3();
              let monsterCfg = (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                error: Error()
              }), MonsterData) : MonsterData).instance.getMonsterCfgById(monsterId);

              if (this._monsterPrefabMap.has(monsterId)) {
                pos = monsterCfg.mType != (_crd && MonsterType === void 0 ? (_reportPossibleCrUseOfMonsterType({
                  error: Error()
                }), MonsterType) : MonsterType).BOSS ? (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                  error: Error()
                }), MonsterData) : MonsterData).instance.getScreenUpRandPos() : (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                  error: Error()
                }), MonsterData) : MonsterData).instance.getBossBrushPoint();
                monsterItem = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.getNodeItemById(this._monsterPrefabMap.get(monsterId), monsterId.toString());
                this.monsterParent.addChild(monsterItem);
                monsterItem.setPosition(pos);
                monsterItem.getComponent(_crd && MonsterItem === void 0 ? (_reportPossibleCrUseOfMonsterItem({
                  error: Error()
                }), MonsterItem) : MonsterItem).init(monsterCfg, monsterObj);
              } else {
                //动态加载
                let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).monsterPath;
                (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
                  error: Error()
                }), ResourcesUtil) : ResourcesUtil).getPrefab(path).then(monsterPrefab => {
                  //加载资源
                  this.loadMonsterRes(monsterObj, monsterCfg, monsterPrefab);
                });
              }
            }
          } // Debug.log('地图上怪物数量', this.monsterParent.children.length);

        }
        /**
         * 加载怪物资源 动画资源
         * @param monsterObj 
         * @param monsterCfg 
         * @param monsterPrefab 
         */


        loadMonsterRes(monsterObj, monsterCfg, monsterPrefab) {
          //加载骨骼资源
          // let spinePath = Constants.monsterSpinePath + monsterCfg.Icon;
          // ResourcesUtil.getSkeletonData(spinePath).then((data: sp.SkeletonData) => {
          //     let pos = MonsterData.instance.getBossBrushPoint();
          //     let monsterItem = instantiate(monsterPrefab);
          //     let spine = monsterItem.getChildByName('spine').getComponent(sp.Skeleton);
          //     this.monsterParent.addChild(monsterItem);
          //     monsterItem.setPosition(pos);
          //     spine.skeletonData = data;
          //     monsterItem.getComponent(MonsterItem).init(monsterCfg, monsterObj);
          //     this._monsterPrefabMap.set(monsterCfg.Id, monsterItem);
          // })
          //加载图片资源
          let monsterItem = instantiate(monsterPrefab);
          let iconPath = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).monsterIconPath + monsterCfg.Icon + '/spriteFrame';
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).geSpriteFrame(iconPath).then(data => {
            let iconSprite = monsterItem.getChildByName('icon').getComponent(Sprite);
            iconSprite.spriteFrame = data;
          }); //加载动画资源

          let animPath = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).monsterAnimPath;
          (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).loadDir(animPath).then(asert => {
            if (asert.length) {
              let pos = monsterCfg.mType != (_crd && MonsterType === void 0 ? (_reportPossibleCrUseOfMonsterType({
                error: Error()
              }), MonsterType) : MonsterType).BOSS ? (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                error: Error()
              }), MonsterData) : MonsterData).instance.getScreenUpRandPos() : (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
                error: Error()
              }), MonsterData) : MonsterData).instance.getBossBrushPoint();
              let animationCom = monsterItem.getChildByName('icon').getComponent(AnimationComponent);
              this.monsterParent.addChild(monsterItem);
              monsterItem.setPosition(pos);

              for (let i = 0; i < asert.length; i++) {
                let clip = asert[i];
                animationCom.addClip(asert[i]);

                if (clip.name == (_crd && MonsterAmin === void 0 ? (_reportPossibleCrUseOfMonsterAmin({
                  error: Error()
                }), MonsterAmin) : MonsterAmin).Move) {
                  animationCom.defaultClip = clip;
                }
              }

              monsterItem.getComponent(_crd && MonsterItem === void 0 ? (_reportPossibleCrUseOfMonsterItem({
                error: Error()
              }), MonsterItem) : MonsterItem).init(monsterCfg, monsterObj);

              this._monsterPrefabMap.set(monsterCfg.Id, monsterItem);
            }
          });
        }
        /**
         * 怪物死亡
         * @param pos 
         */


        onMonsterDie(pos) {
          this._curKillNum++; //更新进度

          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_MONSTER_PROGRESS, (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.killNum, 10); //检测当前怪物是否已经清除

          if (!this.monsterParent.children.length) {
            (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
              error: Error()
            }), MonsterData) : MonsterData).instance.clearNearMonster(); //TODO检测是否战斗结束

            if (this._curChapterEvent.Wave >= (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
              error: Error()
            }), MonsterData) : MonsterData).instance.MaxWave) {
              //无刷怪事件 游戏胜利
              (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).gameOver = true;
              (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).gameStart = false;
              (_crd && OpenPopupManager === void 0 ? (_reportPossibleCrUseOfOpenPopupManager({
                error: Error()
              }), OpenPopupManager) : OpenPopupManager).instance.showGameOverPopup(1);
            } else {
              let wave = this._curChapterEvent.Wave + 1; //检测是否有宝箱

              if (this._curChapterEvent.Box) {
                //有宝箱
                this.scheduleOnce(() => {
                  (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                    error: Error()
                  }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                    error: Error()
                  }), GameEvent) : GameEvent).GAME_BATTLE, wave);
                  (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                    error: Error()
                  }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                    error: Error()
                  }), GameEvent) : GameEvent).CREATE_DROP_BOX, pos);
                }, 1);
              } else {
                //进入下一时间轴
                this.setCurChapterEvent();
                (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
                  error: Error()
                }), EventListener) : EventListener).emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).GAME_BATTLE, this._curChapterEvent.Wave);
              }
            }
          }
        }
        /* 触发刷怪事件 */


        triggleBrushMonsterEvent(dt) {
          this._gameTime += dt;
          this._schduleTime -= dt;

          if (this._schduleTime <= 0) {
            for (let i = 0, len = this._brushMonsterEventArr.length; i < len; i++) {
              const event = this._brushMonsterEventArr[i];

              if (event.curNum < event.totalNum) {
                if (this._gameTime >= event.startTime) {
                  this._schduleTime = 1; //加入队列怪物

                  let num = event.secNum;

                  if (event.diffNum) {
                    event.diffNum--;
                    num += 1;
                  }

                  for (let n = 0; n < num; n++) {
                    let monsterObj = new (_crd && MonsterObj === void 0 ? (_reportPossibleCrUseOfMonsterObj({
                      error: Error()
                    }), MonsterObj) : MonsterObj)();
                    monsterObj.id = event.monsterId;
                    monsterObj.HpUp = event.HpUp;

                    this._queeuMonsterArr.push(monsterObj);
                  }

                  event.curNum += num;
                }
              } else {
                //清除刷怪事件
                this._brushMonsterEventArr.splice(i, 1);

                i--;
                len--;
              }
            }
          }
        }
        /* 添加技能最近怪物 */


        onAddNearMonster(skillKey, range) {}

        onEnable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).CREATE_MONSTER, this.onCreateMonster, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).MONSTER_DIE, this.onMonsterDie, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).on((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).ADD_NEAR_MONSTER, this.onAddNearMonster, this);
        }

        onDisable() {
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).CREATE_MONSTER, this.onCreateMonster, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).MONSTER_DIE, this.onMonsterDie, this);
          (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener).off((_crd && MonsterEvent === void 0 ? (_reportPossibleCrUseOfMonsterEvent({
            error: Error()
          }), MonsterEvent) : MonsterEvent).ADD_NEAR_MONSTER, this.onAddNearMonster, this);
        }

        setMonsterSort() {
          let monsterItems = this.monsterParent.children;
          monsterItems.sort((x, y) => {
            return Math.round(y.position.y) - Math.round(x.position.y);
          });

          for (let i = 0; i < monsterItems.length; i++) {
            monsterItems[i].setSiblingIndex(i);
          }
        }

        clear() {
          this._monsterPrefabMap.clear();

          (_crd && MonsterData === void 0 ? (_reportPossibleCrUseOfMonsterData({
            error: Error()
          }), MonsterData) : MonsterData).instance.clear();
          this._gameTime = 0;
          this._schduleTime = 1;
          this._brushMonsterEventArr = [];
          this._queeuMonsterArr = [];
          this._curChapterEvent = null;
          this.monsterParent.destroyAllChildren();
        }

        childUpdate(dt) {
          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart) {
            this.triggleBrushMonsterEvent(dt);
            this.setMonsterSort();

            if (this._queeuMonsterArr.length) {
              let createNum = this._queeuMonsterArr.length > 60 ? Math.ceil(this._queeuMonsterArr.length / 60) : 1;
              this.onCreateMonster(createNum);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "monsterParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9929bcc21829116316575892b108ffcceb12ac1.js.map