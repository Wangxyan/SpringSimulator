import { _decorator, Component, Size, UITransform, screen, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass('ContentAdapter')
export class ContentAdapter extends Component {

    onLoad() {
        let size = screen.windowSize;
        let nodeSize = this.node.getComponent(UITransform).contentSize;
        let srcScaleForShowAll = Math.min(size.width / nodeSize.width, size.height / nodeSize.height);
        let realWidth = nodeSize.width * srcScaleForShowAll;
        let realHeight = nodeSize.height * srcScaleForShowAll;

        let realSize = new Size();
        realSize.width = nodeSize.width * (size.width / realWidth);
        realSize.height = nodeSize.height * (size.height / realHeight);
        this.node.getComponent(UITransform).setContentSize(realSize);
    }
}
