export class ChapterCfg {
    ClassName?: string = 'Chapter';
    Id: number;
    Name: string;
    lType: number;
    MapId: string;
    LoopMap: string;
    MonsterId: number;
    MonsterAtk: number;
    MonsterDef: number;
    HpUp: number;
    cMonsterId: string;
    StarReward: string;
    RandomReward: string;
    WinReward: string;
    FirstPass: string;
    ReSkills: string;
    ReBorn: string;
    PlaceReward: string;
    BattlePower: string;
    IsUseSkill: string;
    Entry: string;
    Difficulty: number;
    NextChapter: number;
}

export class ChapterRewardCfg {
    ClassName?: string = 'ChapterReward';
    Id: number;
    ChapterId: number;
    Lock: string;
    Reward: string;

}