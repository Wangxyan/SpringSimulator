System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, NodePool, instantiate, PoolManager, _crd;

  _export("PoolManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcd3aoftHFN/Iw6BfOJPxdN", "PoolManager", undefined);

      __checkObsolete__(['Component', 'NodePool', 'Prefab', 'instantiate', 'Node']);

      _export("PoolManager", PoolManager = class PoolManager extends Component {
        constructor() {
          super(...arguments);
          this._dictPool = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PoolManager();
          return this._instance;
        }
        /**
         * 根据预设从对象池中获取对应节点
         */


        getNode(prefab, parent) {
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new NodePool();

            this._dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.setPosition(10000, 100000);
          node.active = true;
          return node;
        }
        /**
        * 根据预设从对象池中获取对应节点
        */


        getNodeItem(prefab) {
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool2 = new NodePool();

            this._dictPool[name] = _pool2;
            node = instantiate(prefab);
          }

          node.setPosition(10000, 100000);
          node.active = true;
          return node;
        }
        /**
         * 根据唯一键值从对象池中获取对应节点
         * @param Node 
         * @param key 
         * @returns 
         */


        getNodeItemById(Node, key) {
          var node = null;

          if (this._dictPool.hasOwnProperty(key)) {
            //已有对应的对象池
            var pool = this._dictPool[key];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(Node);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool3 = new NodePool();

            this._dictPool[key] = _pool3;
            node = instantiate(Node);
          }

          node.setPosition(10000, 100000);
          node.active = true;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         * @param node 
         * @param key 
         * @returns 
         */


        putNodeByKey(node, key) {
          var pool = new NodePool();

          if (this._dictPool.hasOwnProperty(key)) {
            //已有对应的对象池
            pool = this._dictPool[key];
          } else {
            //没有对应对象池，创建他！
            this._dictPool[key] = pool;
          } // this.resertStreak(node);


          node.active = false;
          pool.put(node);
        }
        /**
         * 获取对象池预制体个数
         * @param prefab 
         */


        getPoolSizeByPrefab(prefab) {
          var num = 0;
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this._dictPool[name];
            num = pool.size();
          }

          return num;
        }
        /**
        * 将对应节点放回对象池中
        */


        putPool(node) {
          if (!node) {
            return;
          }

          var name = node.name;
          var pool = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this._dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this._dictPool[name] = pool;
          } // this.resertStreak(node);


          node.active = false;
          pool.put(node);
        }
        /**
         * 将对应节点放回对象池中
         */


        putNode(node) {
          if (!node) {
            return;
          }

          var name = node.name;
          var pool = new NodePool();

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this._dictPool[name];
          } else {
            //没有对应对象池，创建他！
            this._dictPool[name] = pool;
          } // this.resertStreak(node);


          node.active = false;
          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */


        clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            var pool = this._dictPool[name];
            pool.clear();
          }
        }
        /**
         * 清理对象池
         */


        clear() {
          for (var key in this._dictPool) {
            if (this._dictPool.hasOwnProperty(key)) {
              var pool = this._dictPool[key];
              pool.clear();
            }
          }
        }
        /**
         * 预生成对象池
         * @param prefab 
         * @param nodeNum 
         */


        prePool(prefab, nodeNum) {
          var name = prefab.data.name;
          var pool = new NodePool();
          this._dictPool[name] = pool;

          for (var i = 0; i < nodeNum; i++) {
            var node = instantiate(prefab);
            pool.put(node);
          }
        }

      });

      PoolManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=188dcbd6ae410cf4045a2388aed7b5a814cf0019.js.map