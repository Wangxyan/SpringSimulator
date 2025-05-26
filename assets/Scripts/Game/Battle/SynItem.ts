import { _decorator, Animation, AnimationComponent, Component, Label, Node, sp, tween, v3, dragonBones } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SynItem')
export class SynItem extends Component {
    init(): void {
        let disPlay = this.node.getComponent(dragonBones.ArmatureDisplay);
        disPlay.addEventListener(dragonBones.EventObject.COMPLETE, () => {
            this.node.destroy();
        }, disPlay);
    }
}


