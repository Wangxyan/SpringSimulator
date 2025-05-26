import { _decorator, Color, Component, Label, tween, v3, Vec3 } from 'cc';
import { PoolManager } from '../../Frame/PoolManager';
const { ccclass, property } = _decorator;

@ccclass('DamageItem')
export class DamageItem extends Component {
    @property(Label)
    numLab: Label = null;
    public monsterKey = ''

    init(attack: number, type: number, fontSize: number = 25) {
        this.numLab.string = `${attack}`;
        this.numLab.fontSize = fontSize;
        this.setsetDamageColor(type);
        this.setDamageFlyAnim(attack, type);
    }


    setDamageScaleAnim(attack: number, type: number) {
        if (attack > 0) {
            this.node.scale = v3(1, 1, 1);
            tween(this.node).to(0.25, { scale: v3(0.8, 0.8, 0.8) }).call(() => {
                PoolManager.instance.putNode(this.node);
            }).start();
        }
        else {
            PoolManager.instance.putNode(this.node);
        }
    }

    setDamageFlyAnim(attack: number, type: number) {
        let node = this.numLab.node;
        if (attack > 0) {
            class BindTarget {
                position: Vec3;
                scale: number;
            }
            let target = new BindTarget();
            target.position = node.getPosition();
            target.scale = 1.5;
            tween(target).parallel(
                tween().by(0.25, { position: v3(0, 30, 0) }, {
                    onUpdate: (tar: BindTarget) => {
                        node.setPosition(tar.position);
                    }
                }),
                tween().to(0.25, { scale: 1.3 }, {
                    onUpdate: (tar: BindTarget) => {
                        node.setScale(tar.scale, tar.scale);
                    }
                })
            ).delay(0.25).call(() => {
                node.setPosition(0, 0, 0);
                PoolManager.instance.putNode(this.node);
            }).start();
        }
        else {
            node.setPosition(0, 0, 0);
            PoolManager.instance.putNode(this.node);
        }
    }

    setsetDamageColor(type: number) {
        switch (type) {
            case 0:
                //正常
                this.numLab.color = new Color().fromHEX('#ffffff');
                break;
            case 1:
                //暴击
                this.numLab.color = new Color().fromHEX('#FF0000');
                break
        }
    }
}


