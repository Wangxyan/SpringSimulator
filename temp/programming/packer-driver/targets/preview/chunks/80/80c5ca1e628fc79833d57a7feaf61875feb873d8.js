System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, _crd;

  function _reportPossibleCrUseOfSystemConstantCfg(extras) {
    _reporterNs.report("SystemConstantCfg", "./Model/SystemConstantModel", _context.meta, extras);
  }

  _export("Constants", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38f6antDZNCibijc56rqZbp", "Constants", undefined);

      _export("Constants", Constants = class Constants {});

      //动态加载预制体路径
      Constants.toastPath = 'Prefab/Popup/Common/toast';
      //提示路径
      Constants.monsterPath = 'Prefab/Game/Monster/MonsterPrefab';
      //怪物路径
      Constants.weaponPath = 'Prefab/Game/Weapon/weaponItem';
      //武器路径
      Constants.weaponBgPath = 'Prefab/Game/Weapon/weaponBgItem';
      //格子路径
      Constants.heroPath = 'Prefab/Game/Hero/heroItem';
      //英雄路径
      Constants.battSkillPath = 'Prefab/Game/Skill/skillBulletItem';
      //技能子弹路径
      Constants.battlePath = 'Prefab/Game/Battle/';
      //英雄路径
      Constants.synPath = 'Prefab/Game/Battle/synEffect';
      //英雄路径
      //动态资源路径
      Constants.qualityPath = 'Common/quality';
      //品质路径
      Constants.skillSelectIconPath = 'Game/Skill/';
      //技能选择路径
      Constants.mapPath = 'Game/Map/';
      //地图路径
      Constants.itemPath = 'Game/Item/';
      //道具路径
      Constants.weaponIconPath = 'Game/Weapon/';
      //道具路径
      Constants.gridPath = 'Game/Grid/';
      //格子路径
      Constants.monsterSpinePath = 'Spine/Monster/';
      //怪物资源路径
      Constants.monsterIconPath = 'Game/Monster/';
      //怪物资源路径
      Constants.monsterAnimPath = 'Anim/Monster/common/';
      //怪物资源路径
      Constants.chaterMapPath = 'Map/Chapter/';
      Constants.SysConstant = {};
      //配置数据
      Constants.ConfigPath = 'ConfigData/';
      Constants.selectLoadConfig = [];
      //选择加载配置
      //音频文件下分类
      Constants.AUDIO_FILE_PATH = {
        MUSIC: 'Audio/Music/',
        //bgm
        SOUND: 'Audio/Sound/' //音效

      };
      //弹窗
      Constants.PopupUI = {
        ChapterPopup: "Prefab/Popup/Chapter/chapterPopup",
        //章节界面
        GamePopup: "Prefab/Popup/Game/gamePopup",
        //游戏界面
        GameOverPopup: "Prefab/Popup/Game/gameOverPopup",
        //游戏界面
        WeaponDetailPopup: "Prefab/Popup/Weapon/weaponDetailPopup",
        //武器详情
        PausePopup: "Prefab/Popup/Game/pausePopup",
        //暂停界面
        tipsPopup: "Prefab/Popup/Common/tipsPopup",
        //提示界面
        SetPopup: "Prefab/Popup/Set/setPopup",
        //设置界面
        SkillSelectPopup: "Prefab/Popup/Skill/skillSelectPopup" //技能选择界面

      };
      //数据存储
      Constants.cacheVersion = 'cacheVersion';
      Constants.gameConfigId = 'gameData';
      //游戏数据
      Constants.playerConfigId = 'playerData';
      //玩家数据
      Constants.cacheVersionConfig = [{
        'versionName': 'gameData',
        'version': 1.03
      }, {
        'versionName': 'playerData',
        'version': 1.01
      }];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80c5ca1e628fc79833d57a7feaf61875feb873d8.js.map