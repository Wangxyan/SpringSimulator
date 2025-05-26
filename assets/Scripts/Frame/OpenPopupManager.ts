import { instantiate, Node, Prefab, Vec3 } from "cc";
import { Constants } from "../Constants";
import { SelectObj } from "../Game/Data/SkillUpgradeData";
import { WeaponCfg } from "../Model/WeaponModel";
import { Toast } from "../Popup/Common/Toast";
import GameController from "./GameController";
import { PopupManager, PopupOptions } from "./PopupManager";
import { ResourcesUtil } from "./ResourcesUtil";

export class OpenPopupManager {
    public TopLayer: Node = null; //弹窗上层
    public MidLayer: Node = null;//弹窗中层
    public BottomLayer: Node = null;//弹窗下层
    public ToastLayer: Node = null;//弹窗提示层


    /* 显示队列弹窗 */
    showSeqPopup(path: string, parentPath: string, param?: any, callBack?: Function) {
        let options = new PopupOptions();
        options.path = path;
        options.parent = this.TopLayer;
        PopupManager.instance.pushToPopupSeq(options, param, callBack);
    }

    /* 关闭队列弹窗 */
    hideSeqPopup(path: string, callBack?: Function) {
        PopupManager.instance.shiftFromPopupSeq(path, callBack);
    }

    /* 添加需要被动关闭的窗口 */
    addHidePopup(path: string) {
        PopupManager.instance.addHidePopup(path);
    }

    /* 显示章节界面 */
    showChapterPopup(parent: Node) {
        let options = new PopupOptions();
        options.path = Constants.PopupUI.ChapterPopup;
        options.parent = parent;
        PopupManager.instance.show(options)
    }

    /* 显示战斗弹窗 */
    showGamePopup() {
        let options = new PopupOptions();
        options.path = Constants.PopupUI.GamePopup;
        options.parent = this.BottomLayer;
        options.closeCur = true;
        PopupManager.instance.show(options);
    }

    /* 显示战斗结束弹窗 */
    showGameOverPopup(status: number) {
        let options = new PopupOptions();
        options.path = Constants.PopupUI.GameOverPopup;
        options.parent = this.TopLayer;
        PopupManager.instance.show(options, [status]);
    }

    /* 显示武器详情 */
    showWeaponDetailPopup(weaponCfg: WeaponCfg) {
        let options = new PopupOptions();
        options.path = Constants.PopupUI.WeaponDetailPopup;
        options.parent = this.MidLayer;
        PopupManager.instance.show(options, [weaponCfg]);
    }

    /* 显示暂停界面 */
    showPausePopup() {
        let options = new PopupOptions();
        options.path = Constants.PopupUI.PausePopup;
        options.parent = this.MidLayer;
        GameController.pause();
        PopupManager.instance.show(options);
    }

    showToast(msg: string, posY: number = 0) {
        let path = Constants.toastPath;
        ResourcesUtil.getPrefab(path).then((item: Prefab) => {
            let toast = instantiate(item);
            toast.parent = this.ToastLayer;
            toast.setPosition(0, posY);
            toast.getComponent(Toast).init(msg);
        })
    }

    public static _instance: OpenPopupManager = null;
    public static get instance(): OpenPopupManager {
        if (!this._instance) {
            this._instance = new OpenPopupManager();
        }
        return this._instance;
    }
}


