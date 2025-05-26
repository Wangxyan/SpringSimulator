import { _decorator, Component, Node } from 'cc';
import { Constants } from '../../Constants';
import { EventListener } from '../../Frame/EventListener';
import GameController from '../../Frame/GameController';
import { PopupManager } from '../../Frame/PopupManager';
import { GameEvent } from '../../Game/Event/GameEvent';
const { ccclass, property } = _decorator;

@ccclass('PausePopup')
export class PausePopup extends Component {
    show() {

    }

    onReturnBtn() {
        PopupManager.instance.hide(Constants.PopupUI.PausePopup);
        GameController.resume();
    }

    onStartBtn() {
        PopupManager.instance.hide(Constants.PopupUI.PausePopup);
        GameController.resume();
        EventListener.emit(GameEvent.GAME_OVER);
    }
}


