System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, CfgMgr, Debug, ChapterCfg, PlayerData, ChapterMapData, ChapterDropRewardObj, _crd;

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Frame/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterCfg(extras) {
    _reporterNs.report("ChapterCfg", "../../Model/ChapterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./PlayerData", _context.meta, extras);
  }

  _export({
    ChapterMapData: void 0,
    ChapterDropRewardObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
    }, function (_unresolved_5) {
      ChapterCfg = _unresolved_5.ChapterCfg;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76678VIX75Efa0Bu8ve9nTW", "ChapterMapData", undefined);

      _export("ChapterMapData", ChapterMapData = class ChapterMapData {
        constructor() {
          this._chapterMapData = null;
          //章节地图数据
          this._ChapterDropRewardData = new Map();
        }

        //掉落奖励数据
        get chapterMapData() {
          return this._chapterMapData;
        }

        init() {
          this.setChapterMapData();
        }
        /* 设置章节数据 */


        setChapterMapData() {
          let chapterId = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.curChapter;
          this._chapterMapData = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && ChapterCfg === void 0 ? (_reportPossibleCrUseOfChapterCfg({
            error: Error()
          }), ChapterCfg) : ChapterCfg)(), chapterId); //加载配置

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).selectLoadConfig = [this._chapterMapData.cMonsterId];
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).log('游戏章节数据', this._chapterMapData);
        }
        /* 设置奖励数据 */


        setChapterRewardData(chapterMapRewardData, rewardStr) {
          let rewardArr = rewardStr.split('|');
          let chapterDropRewardObj = null;
          let itemId = Number(rewardArr[0]);
          let num = Number(rewardArr[1]);

          if (chapterMapRewardData.has(itemId)) {
            chapterDropRewardObj.Num += num;
          } else {
            chapterDropRewardObj = new ChapterDropRewardObj();
            chapterDropRewardObj.ItemId = itemId;
            chapterDropRewardObj.Num = num;
            chapterMapRewardData.set(itemId, chapterDropRewardObj);
          }
        }
        /**
         * 是否胜利
         * @param isWin 
         */


        getChapterRewardData(isWin) {
          //TODO 掉落奖励
          let chapterMapRewardData = new Map();

          if (this._chapterMapData.StarReward) {
            //开始奖励
            let StarRewardArr = this._chapterMapData.StarReward.split(',');

            for (let i = 0; i < StarRewardArr.length; i++) {
              const rewardStr = StarRewardArr[i];
              this.setChapterRewardData(chapterMapRewardData, rewardStr);
            }
          }

          if (isWin) {
            //胜利奖励
            if (this._chapterMapData.WinReward) {
              let WinRewardArr = this._chapterMapData.WinReward.split(',');

              for (let i = 0; i < WinRewardArr.length; i++) {
                const rewardStr = WinRewardArr[i];
                this.setChapterRewardData(chapterMapRewardData, rewardStr);
              }
            } //首次通关奖励
            // let chapterLeveId = ChapterData.instance.getChapterLeveIdByChapterId(this._chapterMapData.Id);
            // if (this._chapterMapData.FirstPass && chapterLeveId == PlayerData.instance.playerInfo.UnlockChapter) {
            //     let FirstPassArr = this._chapterMapData.FirstPass.split(',');
            //     for (let i = 0; i < FirstPassArr.length; i++) {
            //         const rewardStr = FirstPassArr[i];
            //         this.setChapterRewardData(chapterMapRewardData, rewardStr);
            //     }
            // }

          }

          return Array.from(chapterMapRewardData.values());
        }

        clear() {
          this._chapterMapData = null;

          this._ChapterDropRewardData.clear();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new ChapterMapData();
          }

          return this._instance;
        }

      });

      ChapterMapData._instance = null;

      _export("ChapterDropRewardObj", ChapterDropRewardObj = class ChapterDropRewardObj {
        constructor() {
          this.ItemId = void 0;
          //物品id
          this.Num = void 0;
        } //物品数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b18396da4d581d0d2eb728b8637fdcc2751e0e2.js.map