
export class MonsterCfg {
    ClassName?: string = 'Monster';
    Id: number;
    mType: number;
    Name: string;
    Dec: string;
    Sort: string;
    Icon: string;
    IconScale: number;
    shadeScale: number;
    shadeOffsetY: number;
    ColliderRadius: number;
    ColliderOffset: string;
    Speed: number;
    Atk: number;
    Hp: number;
    Grow_Up: string;
    Range: number;
    Interval: number;
    Skill_Immunity: string;
    Defense: string;
    Skill: string;
    Missile_Effect: string;
    Move_Def: string;
    Status_Def: string;
    Status_Resist: string;
    Show: string;
    Characteristic: string;
    Die_Animation: string;
    Valid: string;
    Version: string;
    Volume: string;
    Weaken: string;
}

export enum MonsterAmin {
    Move = 'Move',
    Atk = 'Skill'
}