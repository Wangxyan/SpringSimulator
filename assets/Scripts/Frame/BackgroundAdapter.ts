
import { _decorator, Component, UITransform, screen, view, Size } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('BackgroundAdapter')
export class BackgroundAdapter extends Component {
    onLoad() {
        let size = screen.windowSize;
        let nodeSize = this.node.getComponent(UITransform).contentSize;
        let srcScaleForShowAll = Math.min(size.width / nodeSize.width, size.height / nodeSize.height);
        let realWidth = nodeSize.width * srcScaleForShowAll;
        let realHeight = nodeSize.height * srcScaleForShowAll;

        let s = Math.max(size.width / realWidth, size.height / realHeight);
        this.node.setScale(s, s, s);
    }
}
