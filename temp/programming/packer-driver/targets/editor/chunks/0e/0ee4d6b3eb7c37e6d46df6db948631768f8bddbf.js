System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventListener, _crd;

  _export("EventListener", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10e50v0/Z9Cuq8TUTgBlAZ2", "EventListener", undefined);

      _export("EventListener", EventListener = class EventListener {
        static on(eventName, cb, target) {
          if (!this.handle[eventName]) {
            this.handle[eventName] = [];
          }

          const data = {
            func: cb,
            target
          };
          this.handle[eventName].push(data);
        }

        static off(eventName, cb, target) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (let i = 0; i < list.length; i++) {
            const event = list[i];

            if (event.func === cb && (!target || target === event.target)) {
              list.splice(i, 1);
              break;
            }
          }
        }

        static emit(eventName, ...args) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          let curLen = list.length;

          for (let i = 0; i < list.length; i++) {
            const event = list[i];

            if (event) {
              event.func.apply(event.target, args);
              let offset = 0;

              if (curLen > list.length) {
                offset = curLen - list.length;
                i -= offset;
                curLen = list.length;
              }
            }
          }
        }

        static clear() {
          this.handle = {};
        }

      });

      EventListener.handle = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ee4d6b3eb7c37e6d46df6db948631768f8bddbf.js.map