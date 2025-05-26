import { _decorator, Component, Node } from 'cc';
import { Util } from './Util';
const { ccclass, property } = _decorator;

@ccclass('ContentScale')
export class ContentScale extends Component {
    start() {
        let scale = Util.adapterScale();
        this.node.setScale(scale, scale);
    }
}


