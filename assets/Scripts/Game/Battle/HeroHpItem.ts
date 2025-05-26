import { _decorator, Component, Label, Node, ProgressBar, tween, UITransform } from 'cc';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
import { HeroAnim, HeroData } from '../Data/HeroData';
import { HeroBase } from '../Hero/HeroBase';
import { GameDefine } from '../../GameDefine';
import { OpenPopupManager } from '../../Frame/OpenPopupManager';
import { Util } from '../../Frame/Util';
const { ccclass, property } = _decorator;

@ccclass('HeroHpItem')
export class HeroHpItem extends Component {
    @property(Node)
    barAnim: Node = null;
    @property(Node)
    bar: Node = null;
    @property(Label)
    hpText: Label = null;
    init() {
        let scale = Util.adapterScale();
        this.barAnim.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
        this.getComponent(ProgressBar).progress = 1;
        this.hpText.string = `${HeroData.instance.curHp}`;
        this.node.setScale(scale, scale);
    }

    setHeroHp() {
        let curHp = HeroData.instance.curHp;
        let maxHp = HeroData.instance.maxHp;
        this.hpText.string = `${HeroData.instance.curHp}`;
        if (curHp <= 0) { curHp = 0 };
        this.getComponent(ProgressBar).progress = curHp / maxHp;
        let curWidth = this.bar.getComponent(UITransform).width;
        let endWidth = this.barAnim.getComponent(UITransform).width;
        let offsetX = endWidth - curWidth;
        tween(this.barAnim.getComponent(UITransform)).by(0.2, { width: -offsetX }).call((() => {
            if (curHp <= 0) {
                //游戏结束
                GameDefine.gameOver = true;
                GameDefine.gameStart = false;
                //屏蔽游戏界面点击事件
                // EventListener.emit(GameEvent.GAME_BLOCK_EVENT);
                //播放死亡动画 弹出游戏结束弹窗
                EventListener.emit(GameEvent.HERO_ANIM, HeroAnim.DIE);
                OpenPopupManager.instance.showGameOverPopup(0);
                this.node.destroy();
            }
        })).start();
    }

    protected onEnable(): void {
        EventListener.on(GameEvent.UPDATE_HERO_HP, this.setHeroHp, this);
    }

    protected onDisable(): void {
        EventListener.off(GameEvent.UPDATE_HERO_HP, this.setHeroHp, this);
    }
}


