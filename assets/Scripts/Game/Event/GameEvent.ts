
export class GameEvent {

    public static SAVE_GAME_DATA = 'saveGameData';//保存游戏数据
    public static SCREEN_VIBRATOR = 'screenVibrator';//屏幕震动

    public static GAME_TOUCH_START = 'gameTouchStart';
    public static GAME_TOUCH_MOVE = 'gameTouchMove';
    public static GAME_TOUCH_END = 'gameTouchEnd';
    public static GAME_TOUCH_CANCLE = 'gameTouchCancle';

    public static GAME_TAP_BTN = 'gameTapBtn';

    public static GAME_WIN_FAIL = 'gameWinFail';//游戏胜利结束
    public static GAME_OVER = 'gameOver';//游戏结束

    public static GAME_BATTLE = 'gameBattle';//游戏战斗
    public static GAME_BATTLE_START = 'gameBattleStart';//游戏战斗开始

    public static SET_BATTLE_BTN_STATUS = 'setBattleBtnStatus';//设置战斗按钮状态
    public static CREATE_SKILL_EFFECT = 'createSkillEffect';//技能效果

    public static INIT_BUILD_GRID_LIST = 'initBuildGridList';//初始化重组格子列表
    public static INIT_BUILD_WEAPON_POS = 'initBuildWeaponPos';//初始化重组武器位置
    public static WEAPON_MOVE = 'weaponMove';//武器移动
    public static WEAPON_ICON_STATUS_INIT = 'weaponIconStatusInit';//武器图标状态初始化
    public static WEAPON_ICON_STATUS = 'weaponIconStatus';//武器图标状态
    public static WEAPON_UPGRADE = 'weaponGrade';//武器升级
    public static WEAPON_SHAKE = 'weaponShake';//武器抖动
    public static WEAPON_PlACE = 'weaponPlace';//武器放置完成
    public static WEAPON_REMOVE = 'weaponRemove';//武器卸下

    public static ATTRIBUTES_UPDATED = 'AttributesUpdated'; // 新事件名，表示属性需要刷新
    public static REFRESH_ATTRIBUTES = 'RefreshAttributes'; // 与你之前代码一致，我们就用这个

    public static WEAPON_CHANGE_COIN = 'weaponChangeCoin';//武器转换金币
    public static WEAPON_PROGRESS_BAR = 'weaponProgressBar';//武器进度条
    public static ADD_REMOVE_WEAPON_LIST = 'addRemoveWeaponList';//添加卸下武器列表
    public static ADD_PRE_WEAPON_LIST = 'addPreWeaponList';//添加到临时武器列表
    public static WEAPON_REMOVE_REFRESH = 'weaponRemoveRefresh';//武器卸下刷新
    public static HERO_HURT = 'heroHurt';//英雄受伤

    public static INIT_HERO_SKILL = 'initHeroSkill';//初始化英雄技能
    public static UPDATE_HERO_HP = 'updateHeroHp';//更新英雄血量

    public static INSERT_HERO_CIRCLE_OBJ = 'insertHeroCircleObj';//添加英雄对象
    public static INSERT_SKILL_RELEASE_CIRCLE_OBJ = 'insertSkillReleaseCircleObj';//添加技能释放范围对象
    public static INSERT_QUARD_TREE_RECT_CIRCLE = 'insertQuardTreeRectCircle';//添加四叉树检测对象
    public static DELETE_QUARD_TREE_OBJ = 'deleteQuardTreeObj';//删除四叉树对象
    public static CHECK_QUARD_TREE_OBJ = 'checkQuardTreeObj';//检测四叉树对象
    public static REFRESH_BOSS_HP = 'refreshBossHp';//刷新boss血量值
    public static CREATE_DAMAGER_NUM = 'createDamageNum';
    public static SHOW_MONSTER_DIE_EFFECT = 'showMonsterDieEffect';//显示怪物死亡特效

    public static SHOW_HERO_HP = 'showHeroHp';//显示英雄血条
    public static SHOW_MONSTER_HP = 'showMonsterHp';//显示怪物血条
    public static SHOW_MONSTER_SHADOW = 'showMonsterShadow';//显示怪物阴影
    public static HERO_ANIM = 'heroAnim';//英雄动画

    public static CREATE_DROP_BOX = 'createDropBox';//掉落宝箱
    public static RESERT_SELECT_BAG = 'resertSelectBag';//重新调整背包
    public static UPDATE_MONSTER_PROGRESS = 'updateMonsterProgress';//更新怪物进度
    public static SHOW_HIDE_SKILL_LIST = 'showHideSkillList';
    public static SHOW_HIDE_PLACE_LIST = 'showHidePlaceList';


    public static PLACE_GRID_START = 'placeGridStart';//放置格子开始
    public static PLACE_GRID_MOVE = 'placeGridMove';//放置格子移动
    public static PLACE_GRID_END = 'placeGridEnd';//放置格子结束
    public static CLEAR_AREA_DATA = 'clearAreaData';//清除区域数据
    public static PLACE_GRID_FINISH = 'placeGridFinish';//放置完成
}


