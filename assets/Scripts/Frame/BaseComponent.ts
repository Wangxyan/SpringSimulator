import { Component } from "cc";
import { GameDefine } from "../GameDefine";
import GameController from "./GameController";

export default class BaseComponent extends Component {

    //固定帧计时
    private _now_time = 0;

    protected childUpdate(dt: number): void {

    }

    protected update(dt: number): void {
        if (GameController.pause_data.state_b) {
            return;
        }
        this._now_time += dt;
        while (this._now_time >= GameDefine.frameTime) {
            this.childUpdate(GameDefine.frameTime);
            this._now_time -= GameDefine.frameTime;
        }
    }
}
