
export class WeaponCfg {
    ClassName?: string = 'Weapon';
    /** id */
    Id: number;
    Name: string;
    Description: string;
    Res: string;
    /*属性*/
    charm: number;
    knowledge: number;
    talent: number;
    wealth: number;
    //物品组
    weaponGroupNum: number;
    itemType: string;
    /* 格子点类型 */
    Type: string;
    SkillId: number;
    Level: number;
    /* 占用位置点 */
    Points: Array<Array<number>>;
    options_num: number
}


