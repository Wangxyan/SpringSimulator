import { SystemConstantCfg } from "./Model/SystemConstantModel";

export class Constants {

    //动态加载预制体路径
    public static toastPath = 'Prefab/Popup/Common/toast';//提示路径
    public static monsterPath = 'Prefab/Game/Monster/MonsterPrefab';//怪物路径
    public static weaponPath = 'Prefab/Game/Weapon/weaponItem';//武器路径
    public static weaponBgPath = 'Prefab/Game/Weapon/weaponBgItem';//格子路径
    public static heroPath = 'Prefab/Game/Hero/heroItem';//英雄路径
    public static battSkillPath = 'Prefab/Game/Skill/skillBulletItem';//技能子弹路径
    public static battlePath = 'Prefab/Game/Battle/';//英雄路径
    public static synPath = 'Prefab/Game/Battle/synEffect';//英雄路径


    //动态资源路径
    public static qualityPath = 'Common/quality';//品质路径
    public static skillSelectIconPath = 'Game/Skill/';//技能选择路径
    public static mapPath = 'Game/Map/';//地图路径
    public static itemPath = 'Game/Item/';//道具路径
    public static weaponIconPath = 'Game/Weapon/';//道具路径
    public static gridPath = 'Game/Grid/';//格子路径
    public static monsterSpinePath = 'Spine/Monster/';//怪物资源路径
    public static monsterIconPath = 'Game/Monster/';//怪物资源路径
    public static monsterAnimPath = 'Anim/Monster/common/';//怪物资源路径
    public static chaterMapPath = 'Map/Chapter/';

    public static SysConstant: { [key: string]: SystemConstantCfg } = {};
    //配置数据
    public static ConfigPath = 'ConfigData/'
    public static selectLoadConfig: Array<string> = [];//选择加载配置

    //音频文件下分类
    public static AUDIO_FILE_PATH = {
        MUSIC: 'Audio/Music/',//bgm
        SOUND: 'Audio/Sound/',//音效
    }

    //弹窗
    public static PopupUI = {
        ChapterPopup: "Prefab/Popup/Chapter/chapterPopup",//章节界面
        GamePopup: "Prefab/Popup/Game/gamePopup",//游戏界面
        GameOverPopup: "Prefab/Popup/Game/gameOverPopup",//游戏界面
        WeaponDetailPopup: "Prefab/Popup/Weapon/weaponDetailPopup",//武器详情
        PausePopup: "Prefab/Popup/Game/pausePopup",//暂停界面
        tipsPopup: "Prefab/Popup/Common/tipsPopup",//提示界面
        SetPopup: "Prefab/Popup/Set/setPopup",//设置界面
        SkillSelectPopup: "Prefab/Popup/Skill/skillSelectPopup",//技能选择界面
    }

    //数据存储
    public static cacheVersion = 'cacheVersion';
    public static gameConfigId = 'gameData';//游戏数据
    public static playerConfigId = 'playerData';//玩家数据
    public static cacheVersionConfig = [
        { 'versionName': 'gameData', 'version': 1.03 },
        { 'versionName': 'playerData', 'version': 1.01 },
    ];
}


