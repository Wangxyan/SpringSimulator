System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MonsterEvent, _crd;

  _export("MonsterEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57d4aClDBhKubGr6xXTpywI", "MonsterEvent", undefined);

      _export("MonsterEvent", MonsterEvent = class MonsterEvent {});

      MonsterEvent.CREATE_MONSTER = 'createMonster';
      //创建怪物
      MonsterEvent.MONSTER_DIE = 'monsterDie';
      //怪物死亡
      MonsterEvent.ADD_NEAR_MONSTER = 'addNearMonster';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fcf04d963af3ea950216c59e9449efb2f55e0555.js.map