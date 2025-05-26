import { _decorator, Component, Node, game, director, screen, view, resources, ProgressBar, Label } from 'cc';
import { Constants } from '../Constants';
import { AudioManager } from '../Frame/AudioManager';
import { CfgMgr } from '../Frame/CfgMgr';
import { OpenPopupManager } from '../Frame/OpenPopupManager';
import { SystemConstantCfg } from '../Model/SystemConstantModel';
const { ccclass, property } = _decorator;

@ccclass('Load')
export class Load extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    @property(Label)
    lbText: Label = null;
    @property(Node)
    PersistRoot: Node = null;
    private _progress: number = 0;

    onLoad() {
        this.initPopupLayer();
        //加载配置数据
        this.loadLocalGameConfg();
    }

    /* 初始化弹窗提示层 */
    initPopupLayer() {
        director.addPersistRootNode(this.PersistRoot);
        OpenPopupManager.instance.TopLayer = this.PersistRoot.getChildByName('Top');
        OpenPopupManager.instance.MidLayer = this.PersistRoot.getChildByName('Middle');
        OpenPopupManager.instance.BottomLayer = this.PersistRoot.getChildByName('Bottom');
        OpenPopupManager.instance.ToastLayer = this.PersistRoot.getChildByName('Toast');
    }

    /* 从本地加载配置数据 */
    loadLocalGameConfg() {
        resources.loadDir(Constants.ConfigPath, (finished: number, total: number, item: any) => {
            let p = 80 / total;
            this._progress += p;
            this.setProgressBar();
        }, (err: Error | null, data: any[]) => {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                CfgMgr.setCfgData(element.name, element.json)
            }
            AudioManager.instance.init();
            this.initData();
        });
    }

    /* 初始化数据 */
    initData() {
        this.convertConstantData();
        //加载场景
        this.preloadScene();
    }

    /* 转换系统常量数据配置 */
    convertConstantData() {
        let ConstantData = CfgMgr.getCfgDataArray<SystemConstantCfg>(new SystemConstantCfg());
        ConstantData.forEach((item) => {
            Constants.SysConstant[item.ConstantName] = item;
        });
    }

    setProgressBar() {
        this.lbText.string = `${Math.floor(this._progress)}%`;
        this.progressBar.progress = this._progress / 100;
    }

    /* 预加载场景 */
    preloadScene() {
        let sceneName = 'Game';
        director.preloadScene(sceneName, (completedCount: number, totalCount: number) => {
            let p = Math.floor(20 * (completedCount / totalCount));
            if (this._progress < 80 + p) {
                this._progress = 80 + p;
            }
            this.setProgressBar();
        }, () => {
            this._progress = 100;
            this.setProgressBar();
            director.loadScene(sceneName);
        });
    }
}


