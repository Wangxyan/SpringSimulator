export class BagCfg {
    ClassName?: string = 'Bag';
    Id: number;
    name: string;
    private_gridLen: string;
    max_gridLen: string;
    private_gridWidth: number;
    private_gredHeight: number;
    private_space: number;
    //武器资源缩放大小
    picture: number;
    //拥有格子数据
    private_grid: Array<Array<string>>;
    //最大格子数据
    max_grid: Array<Array<string>>;
}

