import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ResourcesUtil } from '../../Frame/ResourcesUtil';
import { HeroItem } from '../Hero/HeroItem';
import { HeroData } from '../Data/HeroData';
import { Constants } from '../../Constants';
import { EventListener } from '../../Frame/EventListener';
import { GameEvent } from '../Event/GameEvent';
const { ccclass, property } = _decorator;

@ccclass('HeroManager')
export class HeroManager extends Component {
    @property(Node)
    heroParent: Node = null;
    init() {
        HeroData.instance.init();
        this.creatHero();
    }

    creatHero() {
        let path = Constants.heroPath;
        ResourcesUtil.getPrefab(path).then((itemPrefab: Prefab) => {
            let heroItem = instantiate(itemPrefab);
            let pos = HeroData.instance.heroPoint;
            heroItem.parent = this.heroParent;
            heroItem.setPosition(pos);
            heroItem.getComponent(HeroItem).init();
            heroItem.active = false;
        })
    }

    showHideHero(status: boolean) {
        this.heroParent.children[0].active = status;
    }

    clear() {
        HeroData.instance.clear();
    }
}


