import { _decorator, Component, Node, Label, tween, Vec3, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends Component {
    @property(Label)
    lbText: Label = null;


    init(msg: string) {
        this.lbText.string = msg;
        this.node.setScale(0.5, .5);
        this.setAnim();
    }

    setAnim() {
        tween(this.node).to(0.2, { scale: v3(1.1, 1.1, 1.1) }, { easing: 'sineIn' }).to(0.2, { scale: v3(1, 1, 1) }, { easing: 'sineOut' }).delay(0.2).by(0.5, { position: v3(0, 100, 0) }).call(() => {
            this.node.destroy();
        }).start();
    }
}


