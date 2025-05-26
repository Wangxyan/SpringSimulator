
export class SysOpenData {
    private _sysOpenId: Array<number> = [2];


    /**
     * 检测系统是否解锁
     * @param sid 系统id
     */
    checkSysOpen(sid: number) {
        if (this._sysOpenId.includes(sid)) {
            return true;
        }
        return false;
    }

    private static _instance: SysOpenData = null;
    public static get instance() {
        if (!this._instance) {
            this._instance = new SysOpenData();
        }
        return this._instance;
    }
}


