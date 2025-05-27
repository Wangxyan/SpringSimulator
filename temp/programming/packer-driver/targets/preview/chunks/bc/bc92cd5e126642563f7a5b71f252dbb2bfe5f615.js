System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameEvent, _crd;

  _export("GameEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5d0dY/89NEZKp7PTxaM7GN", "GameEvent", undefined);

      _export("GameEvent", GameEvent = class GameEvent {});

      GameEvent.SAVE_GAME_DATA = 'saveGameData';
      //保存游戏数据
      GameEvent.SCREEN_VIBRATOR = 'screenVibrator';
      //屏幕震动
      GameEvent.GAME_TOUCH_START = 'gameTouchStart';
      GameEvent.GAME_TOUCH_MOVE = 'gameTouchMove';
      GameEvent.GAME_TOUCH_END = 'gameTouchEnd';
      GameEvent.GAME_TOUCH_CANCLE = 'gameTouchCancle';
      GameEvent.GAME_TAP_BTN = 'gameTapBtn';
      GameEvent.GAME_WIN_FAIL = 'gameWinFail';
      //游戏胜利结束
      GameEvent.GAME_OVER = 'gameOver';
      //游戏结束
      GameEvent.GAME_BATTLE = 'gameBattle';
      //游戏战斗
      GameEvent.GAME_BATTLE_START = 'gameBattleStart';
      //游戏战斗开始
      GameEvent.SET_BATTLE_BTN_STATUS = 'setBattleBtnStatus';
      //设置战斗按钮状态
      GameEvent.CREATE_SKILL_EFFECT = 'createSkillEffect';
      //技能效果
      GameEvent.INIT_BUILD_GRID_LIST = 'initBuildGridList';
      //初始化重组格子列表
      GameEvent.INIT_BUILD_WEAPON_POS = 'initBuildWeaponPos';
      //初始化重组武器位置
      GameEvent.WEAPON_MOVE = 'weaponMove';
      //武器移动
      GameEvent.WEAPON_ICON_STATUS_INIT = 'weaponIconStatusInit';
      //武器图标状态初始化
      GameEvent.WEAPON_ICON_STATUS = 'weaponIconStatus';
      //武器图标状态
      GameEvent.WEAPON_UPGRADE = 'weaponGrade';
      //武器升级
      GameEvent.WEAPON_SHAKE = 'weaponShake';
      //武器抖动
      GameEvent.WEAPON_PlACE = 'weaponPlace';
      //武器放置完成
      GameEvent.WEAPON_REMOVE = 'weaponRemove';
      //武器卸下
      GameEvent.ATTRIBUTES_UPDATED = 'AttributesUpdated';
      // 新事件名，表示属性需要刷新
      GameEvent.REFRESH_ATTRIBUTES = 'RefreshAttributes';
      // 与你之前代码一致，我们就用这个
      GameEvent.WEAPON_CHANGE_COIN = 'weaponChangeCoin';
      //武器转换金币
      GameEvent.WEAPON_PROGRESS_BAR = 'weaponProgressBar';
      //武器进度条
      GameEvent.ADD_REMOVE_WEAPON_LIST = 'addRemoveWeaponList';
      //添加卸下武器列表
      GameEvent.ADD_PRE_WEAPON_LIST = 'addPreWeaponList';
      //添加到临时武器列表
      GameEvent.WEAPON_REMOVE_REFRESH = 'weaponRemoveRefresh';
      //武器卸下刷新
      GameEvent.HERO_HURT = 'heroHurt';
      //英雄受伤
      GameEvent.INIT_HERO_SKILL = 'initHeroSkill';
      //初始化英雄技能
      GameEvent.UPDATE_HERO_HP = 'updateHeroHp';
      //更新英雄血量
      GameEvent.INSERT_HERO_CIRCLE_OBJ = 'insertHeroCircleObj';
      //添加英雄对象
      GameEvent.INSERT_SKILL_RELEASE_CIRCLE_OBJ = 'insertSkillReleaseCircleObj';
      //添加技能释放范围对象
      GameEvent.INSERT_QUARD_TREE_RECT_CIRCLE = 'insertQuardTreeRectCircle';
      //添加四叉树检测对象
      GameEvent.DELETE_QUARD_TREE_OBJ = 'deleteQuardTreeObj';
      //删除四叉树对象
      GameEvent.CHECK_QUARD_TREE_OBJ = 'checkQuardTreeObj';
      //检测四叉树对象
      GameEvent.REFRESH_BOSS_HP = 'refreshBossHp';
      //刷新boss血量值
      GameEvent.CREATE_DAMAGER_NUM = 'createDamageNum';
      GameEvent.SHOW_MONSTER_DIE_EFFECT = 'showMonsterDieEffect';
      //显示怪物死亡特效
      GameEvent.SHOW_HERO_HP = 'showHeroHp';
      //显示英雄血条
      GameEvent.SHOW_MONSTER_HP = 'showMonsterHp';
      //显示怪物血条
      GameEvent.SHOW_MONSTER_SHADOW = 'showMonsterShadow';
      //显示怪物阴影
      GameEvent.HERO_ANIM = 'heroAnim';
      //英雄动画
      GameEvent.CREATE_DROP_BOX = 'createDropBox';
      //掉落宝箱
      GameEvent.RESERT_SELECT_BAG = 'resertSelectBag';
      //重新调整背包
      GameEvent.UPDATE_MONSTER_PROGRESS = 'updateMonsterProgress';
      //更新怪物进度
      GameEvent.SHOW_HIDE_SKILL_LIST = 'showHideSkillList';
      GameEvent.SHOW_HIDE_PLACE_LIST = 'showHidePlaceList';
      GameEvent.PLACE_GRID_START = 'placeGridStart';
      //放置格子开始
      GameEvent.PLACE_GRID_MOVE = 'placeGridMove';
      //放置格子移动
      GameEvent.PLACE_GRID_END = 'placeGridEnd';
      //放置格子结束
      GameEvent.CLEAR_AREA_DATA = 'clearAreaData';
      //清除区域数据
      GameEvent.PLACE_GRID_FINISH = 'placeGridFinish';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc92cd5e126642563f7a5b71f252dbb2bfe5f615.js.map