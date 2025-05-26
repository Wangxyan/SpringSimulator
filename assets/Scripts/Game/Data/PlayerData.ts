
export class PlayerData {
    private _playerInfo: PlayerObj = new PlayerObj();

    public get playerInfo() {
        return this._playerInfo;
    }

    private static _instance: PlayerData = null;
    public static get instance(): PlayerData {
        if (!this._instance) {
            this._instance = new PlayerData();
        }
        return this._instance;
    }
}

export class PlayerObj {
    gold: number = 0;
    curChapter: number = 4010101;
    unlockChapter: number = 4010301
}


