import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { Constants } from '../../Constants';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
const { ccclass, property } = _decorator;

@ccclass('BgManager')
export class BgManager extends Component {
    @property(Node)
    bgs: Array<Node> = [];
    init() {
        this.setBattleBgRes();
        this.setGridBgRes();
    }

    setBattleBgRes() {
        let path = Constants.mapPath + 'battleBg/spriteFrame';
        const element = this.bgs[0];
        let sprite = element.getComponent(Sprite);
        ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
            sprite.spriteFrame = data;
        })

    }

    setGridBgRes() {
        let path = Constants.mapPath + 'gridBg/spriteFrame';
        const element = this.bgs[1];
        let sprite = element.getComponent(Sprite);
        ResourcesUtil.geSpriteFrame(path).then((data: SpriteFrame) => {
            sprite.spriteFrame = data;
        })
    }

    clear() {
        //TODO  资源释放 
    }
}


