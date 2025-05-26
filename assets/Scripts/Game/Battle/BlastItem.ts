import { _decorator, Animation, AnimationComponent, Component, Node, sp } from 'cc';
import { PoolManager } from '../../Frame/PoolManager';
const { ccclass, property } = _decorator;

@ccclass('BlastItem')
export class BlastItem extends Component {
    @property(sp.Skeleton)
    spine: sp.Skeleton = null;
    init(): void {
        this.spine.setAnimation(0, 'animation', false);
        this.spine.setCompleteListener((listener) => {
            if (listener.animation.name == 'animation') {
                //动画播放完
                PoolManager.instance.putNode(this.node);
            }
        })

        // let anim = this.node.getComponent(AnimationComponent);
        // this.scheduleOnce(() => {
        //     anim.play('blast');
        //     anim.on(Animation.EventType.FINISHED, () => {
        //         PoolManager.instance.putNode(this.node);
        //     }, this)
        // }, 0.1)
    }
}


