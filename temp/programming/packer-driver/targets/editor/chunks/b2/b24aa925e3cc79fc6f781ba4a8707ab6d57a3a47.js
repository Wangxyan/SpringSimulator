System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Quat, Rect, Vec2, Vec3, bezier, tween, v2, v3, view, misc, screen, Util, _crd;

  _export("Util", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Rect = _cc.Rect;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      bezier = _cc.bezier;
      tween = _cc.tween;
      v2 = _cc.v2;
      v3 = _cc.v3;
      view = _cc.view;
      misc = _cc.misc;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e632+VYKdG5qMiRPU5yd+n", "Util", undefined);

      __checkObsolete__(['Node', 'Color', 'Component', 'Quat', 'Rect', 'Size', 'Vec2', 'Vec3', 'bezier', 'tween', 'v2', 'v3', 'view', 'misc', 'log']);

      __checkObsolete__(['screen']);

      _export("Util", Util = class Util extends Component {
        /**
         * 判断传入的参数是否为空的Object。数组或undefined会返回false
         * @param obj
         */
        static isEmptyObject(obj) {
          let result = true;

          if (obj && obj.constructor === Object) {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                result = false;
                break;
              }
            }
          } else {
            result = false;
          }

          return result;
        }
        /**
         * 获取字符串长度
         * @param {string} render 
         * @returns 
         */


        static getStringLength(render) {
          let strArr = render;
          let len = 0;

          for (let i = 0, n = strArr.length; i < n; i++) {
            let val = strArr.charCodeAt(i);

            if (val <= 255) {
              len = len + 1;
            } else {
              len = len + 2;
            }
          }

          return Math.ceil(len / 2);
        }
        /**
         * 从n个数中获取m个随机数
         * @param {Number} n   总数
         * @param {Number} m    获取数
         * @returns {Array} array   获取数列
         */


        static getRandomNFromM(n, m) {
          let array = [];
          let intRd = 0;
          let count = 0;

          while (count < m) {
            if (count >= n + 1) {
              break;
            }

            intRd = this.getRandomInt(0, n);
            var flag = 0;

            for (var i = 0; i < count; i++) {
              if (array[i] === intRd) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              array[count] = intRd;
              count++;
            }
          }

          return array;
        }
        /**
         * 获取随机整数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns 
         */


        static getRandomInt(min, max) {
          let r = Math.random();
          let rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
        /**
         * 将数组转化为object。
         * @param { any} srcObj 
         * @param { string} objectKey 
         * @returns 
         */


        static arrayToObject(srcObj, objectKey) {
          let resultObj = {}; // to object

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key) || !srcObj[key][objectKey]) {
              continue;
            }

            resultObj[srcObj[key][objectKey]] = srcObj[key];
          }
        }
        /**
         * 深度拷贝
         * @param {any} sObj 拷贝的对象
         * @returns 
         */


        static clone(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          let s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (let i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.clone(sObj[i]);
            }
          }

          return s;
        }
        /**
        * 将object转化为数组
        * @param { any} srcObj  
        * @returns 
        */


        static objectToArray(srcObj) {
          let resultArr = []; // to array

          for (let key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
        * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
        * @param {number}money 需要被格式化的数值
        * @returns {string}返回 被格式化的数值
        */


        static formatMoney(money) {
          let arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          let strValue = '';

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = Math.floor(money) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; //超过最大值就加个U
          }

          return strValue;
        }
        /**
        * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
        * @param {number}money 需要被格式化的数值
        * @returns {string}返回 被格式化的数值
        */


        static newFormatMoney(money) {
          if (money < 10000) {
            return money.toString();
          }

          let arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          let strValue = '';

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = money.toFixed(1) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; //超过最大值就加个U
          }

          return strValue;
        }
        /**
        * 判断是否是新的一天
        * @param {Object|Number} dateValue 时间对象 todo MessageCenter 与 pve 相关的时间存储建议改为 Date 类型
        * @returns {boolean}
        */


        static isNewDay(dateValue) {
          // todo：是否需要判断时区？
          var oldDate = new Date(dateValue);
          var curDate = new Date();
          var oldYear = oldDate.getYear();
          var oldMonth = oldDate.getMonth();
          var oldDay = oldDate.getDate();
          var curYear = curDate.getYear();
          var curMonth = curDate.getMonth();
          var curDay = curDate.getDate();

          if (curYear > oldYear) {
            return true;
          } else {
            if (curMonth > oldMonth) {
              return true;
            } else {
              if (curDay > oldDay) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         * 获取对象属性数量
         * @param {object} 对象
         * @returns 
         */


        static getPropertyCount(o) {
          var n,
              count = 0;

          for (n in o) {
            if (o.hasOwnProperty(n)) {
              count++;
            }
          }

          return count;
        }
        /**
         * 返回一个差异化数组（将array中diff里的值去掉）
         * @param array
         * @param diff
         */


        static difference(array, diff) {
          let result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          let length = array.length;

          for (let i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        }

        static trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }

        static format(s, params) {
          s = s.replace(new RegExp('\\{' + 0 + '\\}', 'gm'), params);
          return s;
        }

        static format1(s, params) {
          var i = params.length;

          while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), params[i]);
          }

          return s;
        }
        /**
         * 判断当前时间是否在有效时间内
         * @param {String|Number} start 起始时间。带有时区信息
         * @param {String|Number} end 结束时间。带有时区信息
         */


        static isNowValid(start, end) {
          var startTime = new Date(start);
          var endTime = new Date(end);
          var result = false;

          if (startTime.getDate() + '' !== 'NaN' && endTime.getDate() + '' !== 'NaN') {
            var curDate = new Date();
            result = curDate < endTime && curDate > startTime;
          }

          return result;
        }
        /**
         * 返回相隔天数
         * @param start 
         * @param end 
         * @returns 
         */


        static getDeltaDays(start, end) {
          start = new Date(start);
          end = new Date(end);
          let startYear = start.getFullYear();
          let startMonth = start.getMonth() + 1;
          let startDate = start.getDate();
          let endYear = end.getFullYear();
          let endMonth = end.getMonth() + 1;
          let endDate = end.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          let deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        }
        /**
         * 获取数组最小值
         * @param array 数组
         * @returns 
         */


        static getMin(array) {
          let result = null;

          if (array.constructor === Array) {
            let length = array.length;

            for (let i = 0; i < length; i++) {
              if (i === 0) {
                result = Number(array[0]);
              } else {
                result = result > Number(array[i]) ? Number(array[i]) : result;
              }
            }
          }

          return result;
        }
        /**
         * 格式化两位小数点
         * @param time 
         * @returns 
         */


        static formatTwoDigits(time) {
          //@ts-ignore
          return (Array(2).join(0) + time).slice(-2);
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */


        static getDay() {
          let date = new Date();
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
        * 获取格式化后的日期（不含小时分秒）
        */


        static formatDate(time) {
          let date = new Date(time);
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
         *  根据剩余毫秒数格式化剩余时间 返回 HH:MM:SS
         *
         * @param {Number} ms
         */


        static formatTimeForMillisecond(ms) {
          let second = Math.floor(ms / 1000 % 60);
          let minute = Math.floor(ms / 1000 / 60 % 60);
          let hour = Math.floor(ms / 1000 / 60 / 60);
          return {
            'hour': hour,
            'minute': minute,
            'second': second
          };
        }
        /**
         * 将数组内容进行随机排列
         * @param {Array}arr 需要被随机的数组 
         * @returns 
         */


        static rand(arr) {
          let arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (let i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            const randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            const itemIndex = arrClone[randomIndex];
            arrClone[randomIndex] = arrClone[i];
            arrClone[i] = itemIndex;
          } // 每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）


          return arrClone;
        }
        /**
        * 获得开始和结束两者之间相隔分钟数
        *
        * @static
        * @param {number} start
        * @param {number} end
        * @memberof Util
        */


        static getOffsetMimutes(start, end) {
          let offSetTime = end - start;
          let minute = Math.floor(offSetTime % (1000 * 60 * 60) / (1000 * 60));
          return minute;
        }
        /**
         * 返回指定小数位的数值
         * @param {number} num 
         * @param {number} idx 
         */


        static formatNumToFixed(num, idx = 0) {
          return Number(num.toFixed(idx));
        }
        /** 返回当天剩余时间 */


        static dayRemainingTime() {
          let h = "";
          let m = "";
          let s = "";
          let curMilliseconds = new Date().getTime();
          let milliseconds = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000;
          let diff = milliseconds - curMilliseconds;
          let second = Math.floor(diff / 1000 % 60);

          if (second >= 10) {
            s = second.toString();
          } else {
            s = "0" + second;
          }

          let minute = Math.floor(diff / 1000 / 60 % 60);

          if (minute >= 10) {
            m = minute.toString();
          } else {
            m = "0" + minute;
          }

          let hour = Math.floor(diff / 1000 / 60 / 60);

          if (hour >= 10) {
            h = hour.toString();
          } else {
            h = "0" + hour;
          }

          return [h, m, s];
        }
        /**
         * 用于数值到达另外一个目标数值之间进行平滑过渡运动效果
         * @param {number} targetValue 目标数值 
         * @param {number} curValue 当前数值
         * @param {number} ratio    过渡比率
         * @returns 
         */


        static lerp(targetValue, curValue, ratio = 0.25) {
          let v = curValue;

          if (targetValue > curValue) {
            v = curValue + (targetValue - curValue) * ratio;
          } else if (targetValue < curValue) {
            v = curValue - (curValue - targetValue) * ratio;
          }

          return v;
        }
        /**
         * base64转buffer
         * @param base64 
         * @returns 
         */


        static base64ToArrayBuffer(base64) {
          var arr = base64.split(",");
          var binaryString = atob(base64);
          var len = binaryString.length;
          var bytes = new Uint8Array(len);

          for (let index = 0; index < len; index++) {
            bytes[index] = binaryString.charCodeAt(index);
          }

          return bytes.buffer;
        } // uint8array转为base64字符串


        static uint8arrayToBase64(u8Arr) {
          let CHUNK_SIZE = 0x8000; //arbitrary number

          let index = 0;
          let length = u8Arr.length;
          let result = '';
          let slice;

          while (index < length) {
            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
            result += String.fromCharCode.apply(null, slice);
            index += CHUNK_SIZE;
          } // web image base64图片格式: "data:image/png;base64," + b64encoded;
          // return  "data:image/png;base64," + btoa(result);


          return btoa(result);
        } // base64字符串转为uint8array数组


        static base64ToUint8Array(base64String) {
          let padding = '='.repeat((4 - base64String.length % 4) % 4);
          let base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
          let rawData = window.atob(base64);
          let outputArray = new Uint8Array(rawData.length);

          for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
          }

          return outputArray;
        }
        /**
         * buffer转base64
         * @param buffer 
         * @returns 
         */


        static arrayBufferToBase64(buffer) {
          var binary = '';
          var bytes = new Uint8Array(buffer);
          var len = bytes.byteLength;

          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }

          return window.btoa(binary);
        }
        /**
         * 数据加密
         * @param {String} str 
         */


        static encrypt(str) {
          let b64Data = this._base64encode(str);

          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let encodeData = '';

          for (let idx = 0; idx < (b64Data.length - n + 1) / 2; idx++) {
            encodeData += b64Data[2 * idx + 1];
            encodeData += b64Data[2 * idx];
          }

          encodeData += b64Data.slice(b64Data.length - n + 1);
          return encodeData;
        }
        /**
         * 数据解密
         * @param {String} str 
         */


        static decrypt(b64Data) {
          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let decodeData = '';

          for (var idx = 0; idx < b64Data.length - n; idx += 2) {
            decodeData += b64Data[idx + 1];
            decodeData += b64Data[idx];
          }

          decodeData += b64Data.slice(b64Data.length - n + 1);
          decodeData = this._base64Decode(decodeData);
          return decodeData;
        }
        /**
        * base64加密
        * @param {string}input 
        * @returns 
        */


        static _base64encode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "",
              chr1,
              chr2,
              chr3,
              enc1,
              enc2,
              enc3,
              enc4,
              i = 0;
          input = this._utf8Encode(input);

          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }

            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
          }

          return output;
        }
        /**
         * utf-8 加密
         * @param string 
         * @returns 
         */


        static _utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          let utftext = "";

          for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);

            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }

          return utftext;
        }
        /**
         * utf-8解密
         * @param utftext 
         * @returns 
         */


        static _utf8Decode(utftext) {
          let string = "";
          let i = 0;
          let c = 0;
          let c1 = 0;
          let c2 = 0;
          let c3 = 0;

          while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
              string += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }

          return string;
        }
        /**
         * base64解密
         * @param {string}input 解密字符串
         * @returns 
         */


        static _base64Decode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "";
          let chr1;
          let chr2;
          let chr3;
          let enc1;
          let enc2;
          let enc3;
          let enc4;
          let i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
            }
          }

          output = this._utf8Decode(output);
          return output;
        }
        /**
         * 计算两个节点的xz坐标的弧度
         * @param x1 
         * @param z1 
         * @param x2 
         * @param z2 
         * @returns 
         */


        static checkTwoPosEulRad(x1, z1, x2, z2) {
          return Math.atan2(x1 - x2, z1 - z2);
        }
        /**
        * 获取两个坐标在xz轴的距离
        * @param x1 
        * @param z1 
        * @param x2 
        * @param z2 
        * @returns 
        */


        static getTwoPosXZLength(x1, z1, x2, z2) {
          const x = x1 - x2;
          const z = z1 - z2;
          return Math.sqrt(x * x + z * z);
        }
        /**
         * 将当前的string型 转化为vec3类型数据
         * @param dataString string
         * @returns Vec3
         */


        static setStringToVec3(dataString) {
          const data = dataString.split(',');
          return new Vec3(Number(data[0]), Number(data[1]), Number(data[2]));
        }
        /**
         * 将当前的string型 转化为Quat类型数据
         * @param dataString string
         * @returns Quat
         */


        static setStringToQuate(dataString) {
          const data = dataString.split(',');
          return new Quat(Number(data[0]), Number(data[1]), Number(data[2]), Number(data[3]));
        }
        /**
         * 获取给定范围内随机值
         * @param num 0-n的n的具体数值
         * @param isIncludeMinus 是否包含负数
         * @returns 
         */


        static getRandomRange(num, isIncludeMinus) {
          if (isIncludeMinus) {
            return (Math.random() > 0.5 ? 1 : -1) * Math.random() * num;
          }

          return Math.random() * num;
        }
        /**
        * 获得一定角度一定距离的坐标X
        * @param distance 
        * @param eulRad 
        * @returns 
        */


        static getDirectionOfDistanceX(distance, eulRad) {
          return distance * Math.sin(eulRad);
        }
        /**
         * 获得一定角度一定距离的坐标Z
         * @param distance 
         * @param eulRad 
         * @returns 
         */


        static getDirectionOfDistanceZ(distance, eulRad) {
          return distance * Math.cos(eulRad);
        }
        /* 角度转弧度 */


        static angle_to_radian(angle) {
          // 角度转弧度公式
          // π / 180 * 角度
          // 计算出弧度
          let radian = Math.PI / 180 * angle; // 返回弧度

          return radian;
        }
        /* 弧度转角度 */


        static radian_to_angle(radian) {
          // 弧度转角度公式
          // 180 / π * 弧度
          // 计算出角度
          let angle = 180 / Math.PI * radian; // 返回弧度

          return angle;
        }
        /* 角度转向量   */


        static angle_to_vector(angle) {
          // tan = sin / cos
          // 将传入的角度转为弧度
          let radian = this.angle_to_radian(angle); // 算出cos,sin和tan

          let cos = Math.cos(radian); // 邻边 / 斜边

          let sin = Math.sin(radian); // 对边 / 斜边

          let tan = sin / cos; // 对边 / 邻边
          // 结合在一起并归一化

          let vec = new Vec2(cos, sin).normalize(); // 返回向量

          return vec;
        }
        /* 向量转角度 */


        static vector_to_angle(vector) {
          if (vector.x == 0 && vector.y == 0) {
            return null;
          } // 将传入的向量归一化


          let dir = v2(vector.x, vector.y).normalize(); // 计算出目标角度的弧度

          let radian = dir.signAngle(new Vec2(1, 0)); // 把弧度计算成角度

          let angle = -this.radian_to_angle(radian); // 返回角度

          return angle;
        }
        /* 根据剩余秒数格式化剩余时间 返回 HH:MM:SS */


        static timeToString(time) {
          let h = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
          let m = Math.floor(time / 60 % 60) < 10 ? '0' + Math.floor(time / 60 % 60) : Math.floor(time / 60 % 60);
          let s = Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
          let res = '';

          if (h != '00') {
            res = `${h}:${m}:${s}`;
            return res;
          } else {
            res = `${m}:${s}`;
            return res;
          }
        }
        /* 根据剩余秒数格式化剩余时间 返回 HH时MM分SS秒 */


        static timeToStrings(time) {
          let h = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
          let m = Math.floor(time / 60 % 60) < 10 ? '0' + Math.floor(time / 60 % 60) : Math.floor(time / 60 % 60);
          let s = Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
          let res = '';
          res = `${h}:${m}:${s}`;
          return res;
        }
        /* 根据剩余秒数格式化剩余时间 返回 HH时MM分SS秒 */


        static getTimeToString(time) {
          let h = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
          let m = Math.floor(time / 60 % 60) < 10 ? '0' + Math.floor(time / 60 % 60) : Math.floor(time / 60 % 60);
          let s = Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
          let res = '';

          if (h != '00') {
            res = `${h}时${m}分`;
            return res;
          } else if (m != '00') {
            res = `${m}分${s}秒`;
            return res;
          } else {
            res = `${s}秒`;
            return res;
          }
        }
        /* 获取今日剩余时间 返回剩余秒数 */


        static getTodayRemainingtime() {
          let startTime = new Date().getTime();
          let endTime = new Date(new Date().toLocaleDateString()).getTime();
          let days = (endTime - startTime) / 1000 / 3600 / 24;
          let day = Math.floor(days);
          let hours = (days - day) * 24;
          let hour = Math.floor(hours);
          let minutes = (hours - hour) * 60;
          let minute = Math.floor(minutes);
          let seconds = (minutes - minute) * 60;
          let second = Math.floor(seconds);

          if (hour > 0) {
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            return `${hour}:${minute}:${second}:`;
          } else {
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            return `${minute}:${second}:`;
          }
        }
        /* 获取当前月的天数 */


        static getMonthDay() {
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var d = new Date(year, month, 0);
          return d.getDate();
        }

        static getMonth() {
          var date = new Date();
          var month = date.getMonth() + 1;
          return month;
        }

        static stringToColor(colorStr) {
          let r = this.hex2int(colorStr[0], 16) + this.hex2int(colorStr[1], 1);
          let g = this.hex2int(colorStr[2], 16) + this.hex2int(colorStr[3], 1);
          let b = this.hex2int(colorStr[4], 16) + this.hex2int(colorStr[5], 1);
          return new Color(r, g, b, 255);
        }

        static hex2int(hex, digit) {
          let code = hex.charCodeAt(0);

          if (48 <= code && code < 58) {
            code -= 48;
          } else {
            code = (code & 0xdf) - 65 + 10;
          }

          return code * digit;
        }
        /**
         * 根据时间戳获取具体的时间
         * @param time  秒
         */


        static getDateDetail(time) {
          let date = new Date(time * 1000);
          let n = date.toLocaleString();
          return n;
        }

        static parseTimeTwo(time) {
          if (time) {
            let date = new Date(time * 1000);
            let year = date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
             * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
             * */

            let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); // 拼接

            return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes;
          } else {
            return '';
          }
        }
        /**
         * 获取圆内随机点
         * @param r 
         * @param pos 
         */


        static getCircleRandPoint(r, pos) {
          let x = pos.x + (Math.random() - 0.5) * 2 * r;
          let y = pos.y + (Math.random() - 0.5) * 2 * r;
          return new Vec2(x, y);
        }
        /**
        * 以某点为圆心，生成圆周上等分点的坐标
        *
        * @param {number} r 半径
        * @param {Vec2} pos 圆心坐标
        * @param {number} count 等分点数量
        * @param {number} [randomScope=80] 等分点的随机波动范围
        * @returns {Vec2[]} 返回等分点坐标
        */


        static getCirclePoints(r, pos, count, randomScope = 60, dir = 1) {
          let points = [];
          let radians = dir * (Math.PI / 180) * Math.round(360 / count);

          for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i);
            let y = pos.y + r * Math.cos(radians * i);
            points.unshift(new Vec2(x + Math.random() * randomScope, y + Math.random() * randomScope));
          }

          return points;
        }
        /**
        * 以某点为圆心，生成圆周上等分点的坐标
        *
        * @param {number} r 半径
        * @param {Vec2} pos 圆心坐标
        * @param {number} count 等分点数量
        * @param {number} [randomScope=80] 等分点的随机波动范围
        * @returns {Vec2[]} 返回等分点坐标
        */


        static getCircleRandomPoints(r, pos, count, randomScope = 60) {
          let points = [];
          let radians = Math.PI / 180 * Math.round(360 / count);
          let offerR = Math.random() * Math.PI;

          for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i + offerR);
            let y = pos.y + r * Math.cos(radians * i + offerR);
            points.unshift(new Vec3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
          }

          return points;
        }
        /**
         * 通过半径和角度获取坐标
         * @param r 
         * @param pos 
         * @param angle 
         * @returns 
         */


        static getCirclePos(r, pos, angle) {
          let radians = Math.PI / 180 * angle;
          let x = pos.y + r * Math.cos(radians);
          let y = pos.x + r * Math.sin(radians);
          return new Vec3(x, y, 0);
        }
        /**
         * 获取上下随机坐标
         * @param r 
         * @param pos 
         * @param count 
         * @param randomScope 
         * @returns 
         */


        static getUpDownRandomPoints(r, pos, count, randomScope = 300) {
          let points = [];

          for (let i = 0; i < count; i++) {
            let dir = Math.floor(Math.random() * 100) <= 50 ? 1 : -1;
            let x = (Math.random() - 0.5) * 2 * randomScope;
            let y = pos.y + (r + Math.random() * 60) * dir;
            points.unshift(new Vec3(x, y, 0));
          }

          return points;
        }
        /**
         * 固定方形小地图刷怪
         * @param r 
         * @param pos 
         * @param count 
         * @param limtMoveWidth 
         * @param limtMoveHeight 
         * @returns 
         */


        static getLeftRightRectRandomPoints1(r, pos, count, limtMoveWidth, limtMoveHeight, randomScope = 20) {
          let points = [];

          if (limtMoveWidth > limtMoveHeight) {
            r = limtMoveHeight / 2 - randomScope;
          } else {
            r = limtMoveWidth / 2 - randomScope;
          }

          r = limtMoveWidth / 2 - randomScope;
          let radians = Math.PI / 180 * Math.round(360 / count);
          let offerR = Math.random() * Math.PI;
          let rec = new Rect(-limtMoveWidth / 2, -limtMoveHeight / 2, limtMoveWidth, limtMoveHeight);
          let index = 0;

          for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i + offerR);
            let y = pos.y + r * Math.cos(radians * i + offerR); //判断当前坐标是否在方形内内

            let newPos = new Vec2(x + Math.random() * randomScope, y + Math.random() * randomScope);

            if (rec.contains(newPos)) {
              points.unshift(new Vec3(newPos.x, newPos.y, 0));
            } else {
              if (points.length) {
                //存在 从现有的点取
                index = Math.floor(Math.random() * points.length);
                let copyPos = this.clone(points[index]);
                let randPos = new Vec3(copyPos.x + (Math.random() - 0.5) * 2 * 20, copyPos.y + (Math.random() - 0.5) * 2 * 20, 0);
                points.unshift(randPos);
              } else {
                //方形内随机取随机取
                r = limtMoveHeight / 2 - randomScope;
                let newPosArr = this.getCircleRandomPoints(r, new Vec3(0, 0, 0), 10, 20);
                index = Math.floor(Math.random() * newPosArr.length);
                points.unshift(newPosArr[index]);
              }
            }
          }

          return points;
        }

        static uuid() {
          var s = [];
          var hexDigits = "0123456789abcdef";

          for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }

          s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

          s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

          s[8] = s[13] = s[18] = s[23] = "-";
          var uuid = s.join("");
          return uuid;
        }
        /**
        * 生成一个用不重复的ID
        * @param { Number } randomLength
        */


        static getUuid(randomLength) {
          return Number(Math.random().toString().substr(2, randomLength) + Date.now()).toString(36);
        }
        /** 获取指定月份天数 */


        static getMonthDays(year, month) {
          let date = new Date(year, month, 0);
          return date.getDate();
        }
        /** 获取指定月份第一天时间戳 */


        static getMonthDayMilliseconds(year, month) {
          let date = new Date(year, month, 1);
          return date.getTime();
        }

        static getDayHour(time) {
          let date = new Date(time);
          let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
          let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
          let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); // 拼接

          return day + '天' + hours + '时';
        }

        static getWinSize() {
          return screen.windowSize;
          return view.getVisibleSize();
        }

        static getBezierPoint(begin, ctrl1, ctrl2, end, t) {
          const x = begin.x * (1 - t) * (1 - t) * (1 - t) + 3 * ctrl1.x * t * (1 - t) * (1 - t) + 3 * ctrl2.x * t * t * (1 - t) + end.x * t * t * t;
          const y = begin.y * (1 - t) * (1 - t) * (1 - t) + 3 * ctrl1.y * t * (1 - t) * (1 - t) + 3 * ctrl2.y * t * t * (1 - t) + end.y * t * t * t;
          return v2(x, y);
        }
        /**
        *  二阶贝塞尔曲线 运动
        * @param target
        * @param {number} duration
        * @param {} c1 起点坐标
        * @param {} c2 控制点
        * @param {Vec3} to 终点坐标
        * @param opts
        * @returns {any}
        * TweenUtils.bezierTo(this.spNode,2,v2(-200,-200),v2(200,0),v3(350,400,0),null).start()
        */


        static bezierTo(target, duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          /**
           * @desc 二阶贝塞尔
           * @param {number} t 当前百分比
           * @param {} p1 起点坐标
           * @param {} cp 控制点
           * @param {} p2 终点坐标
           * @returns {any}
           */

          let twoBezier = (t, p1, cp, p2) => {
            let x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            let y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };

          opts.onUpdate = (arg, ratio) => {
            target.position = twoBezier(ratio, c1, c2, to);
          };

          return tween(target).to(duration, {}, opts);
        }
        /* 贝塞尔曲线运动 */


        static playTargetTween(target, playTime, targetPos) {
          return new Promise((resolve, reject) => {
            var startPos = target.position;
            var startAngle = target.eulerAngles;
            var targetTween = tween(startPos);
            let c1 = new Vec2();
            const mixY = 100;
            const maxY = 200;
            const mixX = 100;
            const maxX = 200;

            var progressX = function (start, end, current, t) {
              //@ts-ignore
              current = bezier(start, mixX, maxX, end, t);
              return current;
            };

            var progressY = function (start, end, current, t) {
              //@ts-ignore
              current = bezier(start, mixY, maxY, end, t);
              return current;
            };

            targetTween.parallel(tween().to(playTime, {
              x: -target.position.x
            }, {
              progress: progressX,
              easing: "smooth",
              onUpdate: () => {
                target.setPosition(startPos);
              }
            }), tween().to(playTime, {
              y: 0
            }, {
              progress: progressY,
              easing: "smooth",
              onUpdate: () => {
                target.setPosition(startPos);
              }
            })).start();
            tween(startAngle).to(playTime, {
              z: 360
            }, {
              onUpdate: () => {
                target.eulerAngles = startAngle;
              }
            }).call(() => {
              resolve(1);
            }).start();
          });
        }
        /**
         * 贝塞尔曲线 
         * Util.targetBezier(this.node, startPos, targetPos, 1, 0, 0.72, 0.1, 1).then(() => {
                 PoolManager.instance.putNode(this.node);
             });
         * @param target 
         * @param startPos 
         * @param targetPos 
         * @param time 
         * @param px1 
         * @param py1 
         * @param px2 
         * @param py2 
         * @returns 
         */


        static targetBezier(target, startPos, targetPos, time, px1, py1, px2, py2) {
          return new Promise((resolve, reject) => {
            let tweenObj = {
              t: 0
            };
            let prePos = new Vec2(startPos.x, startPos.y);
            tween(tweenObj).to(time, {
              t: 1
            }, {
              onUpdate: (tar, t) => {
                const p0 = v2(0, 0);
                const p1 = v2(px1, py1);
                const p2 = v2(px2, py2);
                const p3 = v2(1, 1);
                const x = p0.x * (1 - t) * (1 - t) * (1 - t) + 3 * p1.x * t * (1 - t) * (1 - t) + 3 * p2.x * t * t * (1 - t) + p3.x * t * t * t;
                const y = p0.y * (1 - t) * (1 - t) * (1 - t) + 3 * p1.y * t * (1 - t) * (1 - t) + 3 * p2.y * t * t * (1 - t) + p3.y * t * t * t;
                let posx = (targetPos.x - startPos.x) * x + startPos.x;
                let posy = (targetPos.y - startPos.y) * y + startPos.y;
                let curPos = new Vec2(posx, posy);
                target.setPosition(posx, posy);
                let vector = new Vec2();
                Vec2.subtract(vector, curPos, prePos);
                let r = vector.signAngle(v2(0, 1));
                let angle = misc.radiansToDegrees(r);
                target.angle = -angle;
                prePos = curPos.clone();
              }
            }).call(() => {
              resolve(1);
            }).start();
          });
        }
        /**
         * 贝塞尔加缩放
         * @param tweenObj 
         * @param target 
         * @param startPos 
         * @param targetPos 
         * @param time 
         * @param scale 
         * @param px1 
         * @param py1 
         * @param px2 
         * @param py2 
         * @returns 
         */


        static targetScaleBezier(tweenObj, target, startPos, targetPos, time, scale, px1, py1, px2, py2) {
          return new Promise((resolve, reject) => {
            let t1 = tween(tweenObj).to(time, {
              t: 1
            }, {
              onUpdate: (tar, t) => {
                const p0 = v2(0, 0);
                const p1 = v2(px1, py1);
                const p2 = v2(px2, py2);
                const p3 = v2(1, 1);
                const x = p0.x * (1 - t) * (1 - t) * (1 - t) + 3 * p1.x * t * (1 - t) * (1 - t) + 3 * p2.x * t * t * (1 - t) + p3.x * t * t * t;
                const y = p0.y * (1 - t) * (1 - t) * (1 - t) + 3 * p1.y * t * (1 - t) * (1 - t) + 3 * p2.y * t * t * (1 - t) + p3.y * t * t * t;
                let posx = (targetPos.x - startPos.x) * x + startPos.x;
                let posy = (targetPos.y - startPos.y) * y + startPos.y;
                target.setPosition(posx, posy);
              }
            });
            let t2 = tween(tweenObj).to(time, {
              scale: scale
            }, {
              onUpdate: (tar, t) => {
                target.setScale(tar.scale, tar.scale, tar.scale);
              }
            });
            tween(tweenObj).parallel(t1, t2).call(() => {
              resolve(1);
            }).start();
          });
        } // 根据 传入 C 值，计算该C值下，最小暴击范围的平均暴击率


        static PFromC(c) {
          let dCurP = 0;
          let dPreSuccessP = 0;
          let dPE = 0;
          let nMaxFail = Math.ceil(1 / c);

          for (let i = 1; i <= nMaxFail; ++i) {
            dCurP = Math.min(1, i * c) * (1 - dPreSuccessP);
            dPreSuccessP += dCurP;
            dPE += i * dCurP;
          }

          return 1 / dPE;
        } // 根据传入的暴击率，计算 PRD 算法中的系数 C


        static CFromP(p) {
          let dUp = p;
          let dLow = 0;
          let dMid = p;
          let dPLast = 1;

          while (true) {
            dMid = (dUp + dLow) / 2;
            let dPtested = this.PFromC(dMid);
            if (Math.abs(dPtested - dPLast) <= 0.00005) break;
            if (dPtested > p) dUp = dMid;else dLow = dMid;
            dPLast = dPtested;
          }

          return dMid;
        }
        /* 计算两线段的交点坐标 */


        static segmentsIntr(a, b, c, d) {
          // 三角形abc 面积的2倍 
          var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x); // 三角形abd 面积的2倍 

          var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x); // 面积符号相同则两点在线段同侧,不相交 (对点在线段上的情况,本例当作不相交处理); 

          if (area_abc * area_abd >= 0) {
            return false;
          } // 三角形cda 面积的2倍 


          var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x); // 三角形cdb 面积的2倍 
          // 注意: 这里有一个小优化.不需要再用公式计算面积,而是通过已知的三个面积加减得出. 

          var area_cdb = area_cda + area_abc - area_abd;

          if (area_cda * area_cdb >= 0) {
            return false;
          } //计算交点坐标 


          var t = area_cda / (area_abd - area_abc);
          var dx = t * (b.x - a.x),
              dy = t * (b.y - a.y);
          return v2(a.x + dx, a.y + dy);
        }
        /* 贝塞尔曲线分线段数量 */


        static bezier_length(start_point, ctrl1, ctrl2, end_point, count = 20) {
          var prev_point = start_point;
          var length = 0;
          var t = 0.05;

          for (var i = 0; i < 20; i++) {
            var x = start_point.x * (1 - t) * (1 - t) * (1 - t) + 3 * ctrl1.x * t * (1 - t) * (1 - t) + 3 * ctrl2.x * t * t * (1 - t) + end_point.x * t * t * t;
            var y = start_point.y * (1 - t) * (1 - t) * (1 - t) + 3 * ctrl1.y * t * (1 - t) * (1 - t) + 3 * ctrl2.y * t * t * (1 - t) + end_point.y * t * t * t;
            var now_point = new Vec2(x, y);
            var dir = now_point.subtract(prev_point);
            prev_point = now_point;
            length += dir.length();
            t += 0.05;
          }

          return length;
        }
        /**
         * @param weights 权重数组 随机一个
         * @returns 
         */


        static weightRandomIdx(weights) {
          if (weights.length <= 1) {
            return 0;
          }

          let tw = 0;

          for (let i = 0; i < weights.length; i++) {
            tw += weights[i];
          }

          let rw = Math.random() * tw;
          let sw = 0,
              ew = 0;

          for (let i = 0; i < weights.length; i++) {
            ew = sw + weights[i];

            if (sw < rw && rw <= ew) {
              return i;
            }

            sw = ew;
          }

          return 0;
        }
        /**小数去0 */


        static numMoveZoro(num) {
          if (num.indexOf('.') < 0) {
            return num;
          }

          num = num.replace(/0+?$/g, '');

          if (num[num.length - 1] == '.') {
            num = num.replace(/[.$]/, '');
          }

          return num;
        }
        /**
         * 获取矩形区域内随机坐标点
         * @param rect 
         */


        static getRectRandPos(rect) {
          let pos = new Vec3();
          let randX = Math.random() * rect.width;
          let randY = Math.random() * rect.height;
          pos.x = rect.x + randX;
          pos.y = rect.y + randY;
          return pos;
        }

        static adapterScale() {
          let designSize = view.getDesignResolutionSize();
          let visibleSize = view.getVisibleSize();
          let scale = visibleSize.width / designSize.width;
          return scale;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b24aa925e3cc79fc6f781ba4a8707ab6d57a3a47.js.map