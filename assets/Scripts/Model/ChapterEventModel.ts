export class ChapterEventCfg {
    ClassName?: string = 'ChapterEvent';
    Id: number;
    Chapter: number;
    Wave: number;
    eType: number;
    Event: string;
    HpUp: number;
    Box: string;
}

export enum BrushMonsterType {
    NORMAL = 1,//普通刷怪事件
    BOSS,//BOSS事件
}

export enum MonsterType {
    LITTLE = 1, //小怪
    ELITE,//精英怪
    BOSS//boss
}
