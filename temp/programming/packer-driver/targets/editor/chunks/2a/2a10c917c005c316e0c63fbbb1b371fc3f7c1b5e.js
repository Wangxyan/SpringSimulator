System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, resources, Prefab, Material, error, instantiate, find, Sprite, SpriteFrame, SpriteAtlas, sp, TiledMapAsset, isValid, assetManager, Texture2D, ResourcesUtil, _crd;

  _export("ResourcesUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      Material = _cc.Material;
      error = _cc.error;
      instantiate = _cc.instantiate;
      find = _cc.find;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      SpriteAtlas = _cc.SpriteAtlas;
      sp = _cc.sp;
      TiledMapAsset = _cc.TiledMapAsset;
      isValid = _cc.isValid;
      assetManager = _cc.assetManager;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85b9dh82G1BfaMK6OYv6K+u", "ResourcesUtil", undefined);

      __checkObsolete__(['Node', 'Component', 'resources', 'Prefab', 'Material', 'error', 'JsonAsset', 'TextAsset', 'instantiate', 'find', 'Sprite', 'SpriteFrame', 'SpriteAtlas', 'sp', 'TiledMapAsset', 'Asset', 'AssetManager', 'isValid', 'assetManager', 'ImageAsset', 'Texture2D']);

      _export("ResourcesUtil", ResourcesUtil = class ResourcesUtil extends Component {
        constructor(...args) {
          super(...args);

          /* 加载远程资源 */
          this.cache = {};
        }

        /**
        * 加载资源
        * @param url   资源路径
        * @param type  资源类型
        * @param cb    回调
        * @method loadRes
        */
        static loadRes(url, type, cb = () => {}) {
          resources.load(url, (err, res) => {
            if (err) {
              cb(err, res);
              return;
            }

            cb && cb(null, res);
          });
        }
        /**
         * 获取特效prefab
         * @param modulePath 路径
         * @returns 
         */


        static loadEffectRes(modulePath) {
          return new Promise((resolve, reject) => {
            this.loadRes(`prefab/effect/${modulePath}`, Prefab, (err, prefab) => {
              if (err) {
                console.info('effect load failed', modulePath);
                reject && reject();
                return;
              }

              resolve && resolve(prefab);
            });
          });
        }
        /**
         * 获取模型数据
         * @param modulePath 模型路径
         * @returns 
         */


        static loadModelRes(modulePath) {
          return new Promise((resolve, reject) => {
            this.loadRes(`${modulePath}`, Prefab, (err, prefab) => {
              if (err) {
                console.info("model load failed", modulePath);
                reject && reject();
                return;
              }

              resolve && resolve(prefab);
            });
          });
        }
        /**
         * 获取材质
         * @param matPath 路径
         * @returns 
         */


        static loadMatRes(matPath) {
          return new Promise((resolve, reject) => {
            this.loadRes(`${matPath}`, Material, (err, mat) => {
              if (err) {
                console.info('mat load failed', matPath);
                reject && reject();
                return;
              }

              resolve && resolve(mat);
            });
          });
        }
        /**
         * 获取多模型数据
         * @param path 资源路径
         * @param arrName 资源名称
         * @param progressCb 过程回调函数
         * @param completeCb 完成回调函数
         */


        static loadModelResArr(path, arrName, progressCb, completeCb) {
          let arrUrls = arrName.map(item => {
            return `${path}/${item}`;
          });
          resources.load(arrUrls, Prefab, progressCb, completeCb);
        }
        /**
         * 获取关卡数据
         * @param type 关卡类型
         * @param arrName 资源名称
         * @param progressCb 过程回调函数
         * @param completeCb 完成回调函数
         */


        static getMapObj(type, arrName, progressCb, completeCb) {
          let arrUrls = [];

          for (let idx = 0; idx < arrName.length; idx++) {
            arrUrls.push(`map/${type}/${arrName[idx]}`);
          }

          resources.load(arrUrls, Prefab, progressCb, completeCb);
        }
        /**
         * 获取json数据
         * @param fileName 文件名
         * @param cb 回调函数 
         */


        static getJsonData(fileName, cb) {
          this.loadRes("datas/" + fileName, null, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            if (content.json) {
              cb(err, content.json);
            } else {
              cb('failed!!!');
            }
          });
        }
        /**
         * 获取文本数据
         * @param fileName 文件名
         * @param cb  回调函数
         */


        static getTextData(fileName, cb) {
          this.loadRes("datas/" + fileName, null, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            let text = content.text;
            cb(err, text);
          });
        }
        /**
         * 
         * @param resName 加载单个文件
         * @param type 
         * @returns 
         */


        static loadFile(resName, type) {
          return new Promise((resolve, reject) => {
            if (!resName) {
              resolve([]);
              return;
            }

            let res = resources.get(resName);

            if (res) {
              resolve([resName, res]);
            } else {
              resources.load(resName, type, (err, data) => {
                if (err != undefined) {
                  console.info("下载资源错误：" + err);
                  return;
                }

                resolve([resName, data]);
              });
            }
          });
        }
        /**
         * 加载整个文件夹里的文本数据
         * @param dirPath 
         * @param type 
         * @returns 
         */


        static loadDir(dirPath) {
          return new Promise((resolve, reject) => {
            if (!dirPath) {
              resolve([]);
              return;
            }

            resources.loadDir(dirPath, (err, data) => {
              if (err != undefined) {
                console.info("下载资源错误：" + err);
                return;
              }

              resolve(data);
            });
          });
        }
        /**
         * 加载远程资源
         * @param dirPath 
         * @param type 
         * @returns 
         */


        static loadRemote(dirPath, type) {
          return new Promise((resolve, reject) => {
            if (!dirPath) {
              resolve([]);
              console.info("路径错误：" + dirPath);
              return;
            }

            assetManager.loadRemote(dirPath, function (err, data) {
              if (err != undefined) {
                console.info("下载资源错误：" + err);
                return;
              }

              resolve(data);
            });
          });
        }
        /**
        * 加载资源
        * @param url   资源路径
        * @param type  资源类型
        * @method loadRes
        */


        static loadResNew(url, type) {
          return new Promise((resolve, reject) => {
            resources.load(url, type, (err, res) => {
              if (err) {
                error(err.message || err);
                reject && reject(err);
                return;
              }

              resolve && resolve(res);
            });
          });
        }
        /**
         * 获取UI prefab
         * @param prefabPath prefab路径 
         * @param cb 回调函数
         */


        static getUIPrefabRes(prefabPath) {
          return this.loadResNew(prefabPath, Prefab);
        }
        /**
          * 创建ui界面
          * @param path ui路径
          * @param cb 回调函数
          * @param parent 父节点
          */


        static async createUI(path, parent) {
          let pf = await this.getUIPrefabRes(path);
          let node = instantiate(pf);
          node.setPosition(0, 0, 0);

          if (!parent) {
            parent = find("Canvas");
          }

          parent.addChild(node);
          return node;
        }
        /**
        * 设置节点精灵
        * @param path 资源路径
        * @param node 节点
        */


        static setSpriteFrame(path, sprite, clear = true, callback = null) {
          if (sprite) {
            if (clear) {
              sprite.spriteFrame = null;
            }

            resources.load(path, SpriteFrame, function (err, SpriteFrame) {
              if (err) {
                console.info('set sprite frame failed! err:', path, err);

                if (callback) {
                  callback();
                }

                return;
              }

              if (sprite && sprite) {
                sprite.spriteFrame = SpriteFrame;
              }

              if (callback) {
                callback();
              }
            });
          } else {
            if (callback) {
              callback();
            }
          }
        }

        static geSpriteFrame(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, function (err, SpriteFrame) {
              if (err) {
                console.info('set sprite frame failed! err:', path);
                resolve(null);
                return;
              }

              resolve(SpriteFrame);
            });
          });
        }
        /**
         * 设置图集
         * @param path 
         * @param res 
         * @param sprite 
         */


        static setSpriteAtlasSpriteFrame(path, res, sprite) {
          if (sprite) {
            resources.load(path, SpriteAtlas, (err, atlas) => {
              if (err) {
                console.info('set spriteAtlas frame failed! err:', path, err);
                return;
              }

              const frame = atlas.getSpriteFrame(res);
              sprite.spriteFrame = frame;
            });
          }
        }
        /**
         * 获取图集中的精灵
         *  ResourcesUtil.getSpriteAtlasSpriteFrame(Constants.skillImagePath, resIcon).then((spriterFrame: SpriteFrame) => {
                this.iconSprite.spriteFrame = spriterFrame;
            });
         * @param path 
         * @param res 
         * @returns 
         */


        static getSpriteAtlasSpriteFrame(path, res) {
          return new Promise(resolve => {
            resources.load(path, SpriteAtlas, (err, atlas) => {
              if (err) {
                console.info('get SpriteAtlasSprite failed! err:', path);
                resolve(null);
                return;
              }

              const frame = atlas.getSpriteFrame(res);
              resolve(frame);
            });
          });
        }
        /**
         * 获得精灵
         * @param path 资源路径
         */


        static getSpriteFrame(path) {
          return new Promise(resolve => {
            resources.load(path, SpriteFrame, function (err, SpriteFrame) {
              resolve(SpriteFrame);
            });
          });
        }
        /**
        * 获得龙骨数据
        * @param path 资源路径
        */


        static getSkeletonData(path) {
          return new Promise(resolve => {
            resources.load(path, sp.SkeletonData, function (err, SkeletonData) {
              if (err) {
                console.info('get SkeletonData failed! err:', path);
                return;
              }

              resolve(SkeletonData);
            });
          });
        }
        /**
        * 获得龙骨数据
        * @param path 资源路径
        */


        static getPrefab(path) {
          return new Promise((resolve, reject) => {
            resources.load(path, Prefab, function (err, prefab) {
              if (err) {
                console.info('get Prefab failed! err:', path);
                reject(null);
              }

              resolve(prefab);
            });
          });
        }
        /**
         * 资源释放
         * @param sp 
         */


        static releaseRes(sp) {
          let res = sp.spriteFrame;
          sp.spriteFrame = null;
          res.decRef();
        }
        /**
        * 获得tiledMap数据
        * @param path 资源路径
        */


        static getTiledMap(path) {
          return new Promise(resolve => {
            resources.load(path, TiledMapAsset, function (err, data) {
              if (err) {
                console.info('get Prefab failed! err:', path);
                return;
              }

              resolve(data);
            });
          });
        }
        /* 释放节点资源 */


        releaseSprite(node) {
          if (!isValid(node)) {
            return;
          }

          const sp = node.getComponent(Sprite);

          if (sp && sp.spriteFrame) {
            sp.spriteFrame.decRef();
            sp.spriteFrame = null;
          }
        }

        loadRemoteImg(url) {
          assetManager.loadRemote(url, (err, imageAsset) => {
            if (!err && imageAsset) {
              let spFrame = this.cache[imageAsset._uuid];

              if (!spFrame) {
                const texture = new Texture2D();
                texture.image = imageAsset;
                spFrame = new SpriteFrame();
                spFrame.texture = texture;
                imageAsset.addRef();
                this.cache[imageAsset._uuid] = spFrame; // 添加映射表记录
              }

              spFrame.addRef(); // 计数加1
            }
          });
        }
        /* 释放远程资源 */


        releaseRemoteSprite(node) {
          if (!isValid(node)) {
            return;
          }

          const sp = node.getComponent(Sprite);

          if (sp && sp.spriteFrame) {
            const spFrame = sp.spriteFrame;
            sp.spriteFrame.decRef(false); // 只把计数减1

            sp.spriteFrame = null;

            if (spFrame.refCount <= 0) {
              let texture = spFrame.texture; // 如果已加入动态合图，必须取原始的Texture2D

              if (spFrame.packable) {
                var _spFrame$original;

                texture = (_spFrame$original = spFrame.original) == null ? void 0 : _spFrame$original._texture;
              }

              if (texture) {
                var _texture$image;

                delete this.cache[texture.image._uuid]; // 删除映射表记录

                (_texture$image = texture.image) == null || _texture$image.decRef();
                texture.destroy();
              }

              spFrame.destroy();
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a10c917c005c316e0c63fbbb1b371fc3f7c1b5e.js.map