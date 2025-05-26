System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Rect, Size, Vec3, Util, WeaponData, CfgMgr, BagCfg, GridData, WeaponObj, GridObj, _crd;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../Frame/Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "./WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "../../Frame/CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagCfg(extras) {
    _reporterNs.report("BagCfg", "../../Model/BagModel", _context.meta, extras);
  }

  _export({
    GridData: void 0,
    WeaponObj: void 0,
    GridObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Rect = _cc.Rect;
      Size = _cc.Size;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      WeaponData = _unresolved_3.WeaponData;
    }, function (_unresolved_4) {
      CfgMgr = _unresolved_4.CfgMgr;
    }, function (_unresolved_5) {
      BagCfg = _unresolved_5.BagCfg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe537oi94JPVo69/FDHGzhg", "GridData", undefined);

      __checkObsolete__(['Rect', 'Size', 'Vec2', 'Vec3']);

      _export("GridData", GridData = class GridData {
        constructor() {
          this._curGrid = 109;
          //当前位置表id
          this._gridMapData = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '']];
          //格子地图数据  0:有格子 '':没有格子   value=>武器唯一id
          this._bagCfg = null;
          //背包配置数据
          this._gridRowLen = 3;
          //格子行长度(每行多少个)
          this._gridColLen = 3;
          //格子列长度(每列多少个)
          this._gridWidth = 94;
          //格子宽度
          this._gredHeight = 94;
          //格子高度
          this._space = 10;
          //格子间隔
          this._gridItemData = new Map();
          //携带的武器数据  key=>武器唯一id
          this._curWeaponTildeIndex = [];
          //当前武器位置索引
          // 添加位置相关属性  
          // private _mapPosition: Vec3 = new Vec3(0, 0, 0);
          this._gridEditMode = false;
        }

        //是否为格子编辑模式
        get gridEditMode() {
          return this._gridEditMode;
        }

        set gridEditMode(value) {
          this._gridEditMode = value;
        }

        get iconScale() {
          return this._bagCfg.picture;
        }

        get space() {
          return this._space;
        }

        get bagCfg() {
          return this._bagCfg;
        }

        get curWeaponTildeIndex() {
          return this._curWeaponTildeIndex;
        }

        set curWeaponTildeIndex(value) {
          this._curWeaponTildeIndex = value;
        }

        get gridWidth() {
          return this._gridWidth;
        }

        get gridHeight() {
          return this._gredHeight;
        }

        init() {
          this.initGridMapData();
          this.initGridItemData();
        } //get mapPosition() {
        //    return this._mapPosition;
        //}
        //set mapPosition(value: Vec3) {
        //    this._mapPosition = value;
        //}  

        /* 初始化格子数据 */


        initGridMapData() {
          this._bagCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && BagCfg === void 0 ? (_reportPossibleCrUseOfBagCfg({
            error: Error()
          }), BagCfg) : BagCfg)(), this._curGrid);

          var row_col = this._bagCfg.private_gridLen.split('_');

          this._gridMapData = this._bagCfg.private_grid;
          this._gridWidth = this._bagCfg.private_gridWidth;
          this._gredHeight = this._bagCfg.private_gredHeight;
          this._space = this._bagCfg.private_space;
          this._gridColLen = Number(row_col[0]);
          this._gridRowLen = Number(row_col[1]); // 从配置中读取位置信息（如果有的话）  
          //if (this._bagCfg.mapPosition) {
          //    this._mapPosition = new Vec3(this._bagCfg.mapPosition.x, this._bagCfg.mapPosition.y, 0);  
        }
        /* 初始携带的武器数据 */


        initGridItemData() {
          //调试 初始携带武器数据
          this.addWeaponItem(1001); //初始化地图格子数据

          this._gridItemData.forEach((weaponObj, key) => {
            var data = weaponObj.data;

            for (var i = 0; i < data.length; i++) {
              var gridObj = data[i];
              this._gridMapData[gridObj.row][gridObj.col] = key;
            }
          }); // console.log('携带武器数据', this._gridItemData);
          // console.log('初始格子数据', this._gridMapData);

        }
        /**
         * 添加携带的武器id
         * @param wid 
         */


        addWeaponItem(wid) {
          var weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getWeaponCfgById(wid);
          var weaponObj = new WeaponObj();
          weaponObj.id = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getUuid(10);
          weaponObj.gid = this._curGrid;
          weaponObj.wid = wid;
          var points = weaponCfg.Points;
          var data = [];

          for (var i = 0; i < points.length; i++) {
            var element = points[i];

            for (var j = 0; j < element.length; j++) {
              var gridObj = new GridObj();
              gridObj.row = i;
              gridObj.col = j;
              data.push(gridObj);
            }
          }

          weaponObj.data = data;

          this._gridItemData.set(weaponObj.id, weaponObj);
        }
        /* 设置重组格子数据 */


        setRebuildGridMapData(value) {
          var row = value.length;
          var col = value[0].length;
          this._gridMapData = value;
          this._bagCfg.private_gridLen = row + '_' + col;
          this._gridColLen = row;
          this._gridRowLen = col; //设置武器位置数据

          this._gridItemData.forEach((weaponObj, key) => {
            var data = [];

            for (var i = 0; i < value.length; i++) {
              var element = value[i];

              for (var j = 0; j < element.length; j++) {
                var weaponKey = element[j];

                if (weaponKey == key) {
                  var gridObj = new GridObj();
                  gridObj.row = i;
                  gridObj.col = j;
                  data.push(gridObj);
                }
              }
            }

            weaponObj.data = data;
          });
        }
        /* 获取最大背包尺寸 */


        getMaxGridMapSize() {
          var size = new Size();
          var bagCfg = this.bagCfg;
          var width = bagCfg.private_gridWidth;
          var height = bagCfg.private_gredHeight;
          var space = bagCfg.private_space;
          var row_col = bagCfg.max_gridLen.split('_');
          var rowLen = Number(row_col[0]);
          var colLen = Number(row_col[1]);
          var w = colLen * width + (colLen - 1) * space;
          var h = rowLen * height + (rowLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /* 获取背包尺寸 */


        getGridMapSize() {
          var size = new Size();
          var bagCfg = this.bagCfg;
          var width = bagCfg.private_gridWidth;
          var height = bagCfg.private_gredHeight;
          var space = bagCfg.private_space;
          var row_col = bagCfg.private_gridLen.split('_');
          var rowLen = Number(row_col[1]);
          var colLen = Number(row_col[0]);
          var w = rowLen * width + (rowLen - 1) * space;
          var h = colLen * height + (colLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /**
         * 通过行列数量获取尺寸
         * @param rowLen 
         * @param colLen 
         */


        getGridSizeByRowCol(rowLen, colLen) {
          var size = new Size();
          var bagCfg = this.bagCfg;
          var width = bagCfg.private_gridWidth;
          var height = bagCfg.private_gredHeight;
          var space = bagCfg.private_space;
          var w = rowLen * width + (rowLen - 1) * space;
          var h = colLen * height + (colLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /* 获取格子数据 */


        getGridMapData() {
          return this._gridMapData;
        }
        /* 获取携带的武器位置数据 */


        getGridItemData() {
          return Array.from(this._gridItemData.values());
        }
        /* 获取携带的武器唯一键值 */


        getGridItemDataKeys() {
          return Array.from(this._gridItemData.keys());
        }
        /*获取携带的武器Map数据  */


        getGridItemMapData() {
          return this._gridItemData;
        }
        /**
         * 通过位置组获取位置中点坐标
         * @param gridObjArr 
         */


        getItemPosByTiledObj(gridObjArr) {
          var startPos = this.getGridPosByTiled(gridObjArr[0]);
          var endPos = this.getGridPosByTiled(gridObjArr[gridObjArr.length - 1]);
          var pos = new Vec3(0, 0, 0);
          pos.x = (startPos.x + endPos.x) / 2;
          pos.y = (startPos.y + endPos.y) / 2;
          return pos;
        }
        /**
         * 通过位置获取坐标
         * @param gridObj 
         * @returns 
         */


        getGridPosByTiled(gridObj) {
          var posX = gridObj.col * this._gridWidth + this._gridWidth / 2 + gridObj.col * this._space;
          var posY = gridObj.row * this._gredHeight + this._gredHeight / 2 + gridObj.row * this._space;
          return new Vec3(posX, -posY);
        }
        /**
         * 通过位置获取位置索引
         * @param row 
         * @param col 
         */


        getGridIndexByTiled(row, col) {
          return row * this._gridRowLen + col;
        }
        /**
         * 通过位置索引获取位置
         * @param index 
         */


        getGridTiledByIndex(index) {
          var row = Math.floor(index / this._gridRowLen);
          var col = index % this._gridRowLen;
          var gridObj = new GridObj();
          gridObj.row = row;
          gridObj.col = col;
          return gridObj;
        }
        /**
         * 通过武器唯一id 删除位置数据
         * @param id   武器唯一id
         */


        deletGridDataByWeaponId(id) {
          if (this._gridItemData.has(id)) {
            var weaponObj = this._gridItemData.get(id);

            var gridObjArr = weaponObj.data;

            for (var i = 0; i < gridObjArr.length; i++) {
              var gridObj = gridObjArr[i];
              this._gridMapData[gridObj.row][gridObj.col] = '0';
            }

            this._gridItemData.delete(id);
          }
        }
        /**
         * 添加放置数据
         * @param gridObjArr 
         * @param wid 
         */


        addGridDataByWeaponId(gridObjArr, wid, weaponKey) {
          var weaponObj = new WeaponObj();
          weaponObj.id = weaponKey;
          weaponObj.gid = this._curGrid;
          weaponObj.wid = wid;
          weaponObj.data = gridObjArr;

          this._gridItemData.set(weaponObj.id, weaponObj);

          for (var i = 0; i < gridObjArr.length; i++) {
            var element = gridObjArr[i];
            this._gridMapData[element.row][element.col] = weaponObj.id;
          }
        }
        /* 合成更新 */


        updateGridItemData(weaponKey, wid) {
          if (this._gridItemData.has(weaponKey)) {
            var weaponObj = this._gridItemData.get(weaponKey);

            weaponObj.wid = wid;
          }
        }
        /**
         * 通过坐标获取位置
         * @param pos 
         */


        getTiledByPos(pos) {
          var tiledX = pos.x > 0 ? Math.floor((pos.x - this._gridWidth / 2) / (this._gridWidth + this._space)) : 3;
          var tiledY = pos.y < 0 ? Math.floor((Math.abs(pos.y) - this._gredHeight / 2) / (this._gredHeight + this._space)) : 3;
          var gridObj = new GridObj();
          gridObj.row = tiledY;
          gridObj.col = tiledX;
          return gridObj;
        }
        /**
         * 通过位置获取位置索引
         * @param pos 
         */


        getTiledIndexByPos(pos) {
          var gridObj = this.getTiledByPos(pos);

          if (gridObj.col < 0 || gridObj.row < 0 || gridObj.col > this._gridRowLen - 1 || gridObj.row > this._gridColLen - 1) {
            return -1;
          }

          return this.getGridIndexByTiled(gridObj.row, gridObj.col);
        }
        /* 检测武器id是否相同 */


        checkSameWeapoIdByKey(weaponKey, wid) {
          if (this._gridItemData.has(weaponKey)) {
            var weaponObj = this._gridItemData.get(weaponKey);

            if (wid == weaponObj.wid) {
              return true;
            }
          }

          return false;
        }
        /* 间隔触摸点是否在位置上 */


        checkPointinGrid(touchPos, gridObjArr) {
          var isTouch = false;

          for (var i = 0; i < gridObjArr.length; i++) {
            var gridObj = gridObjArr[i];
            var pos = this.getGridPosByTiled(gridObj);
            var rect = new Rect(pos.x - this._gridWidth / 2, pos.y - this.gridHeight / 2, this.gridWidth, this.gridHeight);

            if (rect.contains(touchPos)) {
              isTouch = true;
              break;
            }
          }

          return isTouch;
        }
        /**
        * 通过位置获取位置索引
        * @param row 
        * @param col 
        */


        getGridBgIndexByTiled(row, col) {
          var row_col = this._bagCfg.max_gridLen.split('_');

          return row * Number(row_col[1]) + col;
        }

        clear() {
          this._gridItemData.clear();

          this._curWeaponTildeIndex = [];
          this._bagCfg = null;
          this._gridEditMode = false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new GridData();
          }

          return this._instance;
        }

      });

      GridData._instance = null;

      _export("WeaponObj", WeaponObj = class WeaponObj {
        constructor() {
          this.id = void 0;
          //唯一id
          this.wid = void 0;
          //武器id
          this.gid = void 0;
          //格子表id
          this.data = void 0;
        } //位置数据


      });

      _export("GridObj", GridObj = class GridObj {
        constructor() {
          this.row = void 0;
          //行
          this.col = void 0;
        } //列


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43cd309c44da4028fec8d5cd529f9c8be786004e.js.map