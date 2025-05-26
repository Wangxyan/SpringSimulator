import { _decorator, Component, Node, tween, v3 } from 'cc';
import { Constants } from '../../Constants';
import GameController from '../../Frame/GameController';
import { PopupManager } from '../../Frame/PopupManager';
import { SelectObj, SkillUpgradeData } from '../../Game/Data/SkillUpgradeData';
import { SkillSelectItem } from './Sub/SkillSelectItem';
const { ccclass, property } = _decorator;

@ccclass('SkillSelectPopup')
export class SkillSelectPopup extends Component {
    @property(Node)
    content: Node = null;
    @property(Node)
    block: Node = null;
    show(list: Array<SelectObj>) {
        this.setSkillSelectInfo(list);
    }

    async setSkillSelectInfo(list: Array<SelectObj>) {
        let items = this.content.children;
        this.block.active = true;
        for (let j = 0; j < items.length; j++) {
            const element = items[j];
            element.active = false;
        }
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let selectItem = items[i];
            selectItem.getComponent(SkillSelectItem).init(element, this.onCloseBtn.bind(this));
            await new Promise((res) => {
                selectItem.setScale(0.5, 0.5);
                selectItem.active = true;
                tween(selectItem).to(0.05, { scale: v3(1.1, 1.1, 1.1) }).to(0.05, { scale: v3(1, 1, 1) }).call(() => {
                    if (i == 2) {
                        this.block.active = false;
                    }
                    res(0);
                }).start();
            })

        }
    }

    onCloseBtn() {
        GameController.resume()
        PopupManager.instance.hide(Constants.PopupUI.SkillSelectPopup);
    }

    onChangeBtn() {
        let list = SkillUpgradeData.instance.getSelectSkillListByWeight();
        this.setSkillSelectInfo(list);
    }
}


