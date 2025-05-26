import { _decorator, Component, Node, Label, director } from 'cc';
import { Constants } from '../../Constants';
import { EventListener } from '../../Frame/EventListener';
import GameController from '../../Frame/GameController';
import { PopupManager } from '../../Frame/PopupManager';
import { GameEvent } from '../../Game/Event/GameEvent';
const { ccclass, property } = _decorator;

@ccclass('TipsPopup')
export class TipsPopup extends Component {
    @property(Label)
    desc: Label = null;
    private _skipType: number = 1; //1回到主页
    show(msg: string, skip: number) {
        this._skipType = skip;
        this.desc.string = msg;
    }

    onEscBtn() {
        PopupManager.instance.hide(Constants.PopupUI.tipsPopup);
    }

    onEnterBtn() {
        switch (this._skipType) {
            case 1:
                EventListener.emit(GameEvent.GAME_OVER);
                break;
        }
    }
}


