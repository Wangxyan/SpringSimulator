import { _decorator, Component, Node } from 'cc';
import { Constants } from '../../Constants';
import { EventListener } from '../../Frame/EventListener';
import { PopupManager } from '../../Frame/PopupManager';
import { SpriteEx } from '../../Frame/SpriteEx';
import { GameEvent } from '../../Game/Event/GameEvent';
const { ccclass, property } = _decorator;

@ccclass('GameOverPopup')
export class GameOverPopup extends Component {
    @property(SpriteEx)
    icon: SpriteEx = null;
    show(status: number) {
        this.icon.index = status;
    }

    onResetGame() {
        EventListener.emit(GameEvent.GAME_OVER);
    }
}


