System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, AudioClip, AudioSource, director, assetManager, Button, Toggle, ResourcesUtil, CfgMgr, SoundCfg, Configuration, Constants, AudioManager, _crd;

  function _reportPossibleCrUseOfResourcesUtil(extras) {
    _reporterNs.report("ResourcesUtil", "./ResourcesUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCfgMgr(extras) {
    _reporterNs.report("CfgMgr", "./CfgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundCfg(extras) {
    _reporterNs.report("SoundCfg", "../Model/SoundModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfiguration(extras) {
    _reporterNs.report("Configuration", "./Configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Constants", _context.meta, extras);
  }

  _export("AudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      director = _cc.director;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ResourcesUtil = _unresolved_2.ResourcesUtil;
    }, function (_unresolved_3) {
      CfgMgr = _unresolved_3.CfgMgr;
    }, function (_unresolved_4) {
      SoundCfg = _unresolved_4.SoundCfg;
    }, function (_unresolved_5) {
      Configuration = _unresolved_5.Configuration;
    }, function (_unresolved_6) {
      Constants = _unresolved_6.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05fc0Ua1slE04pfKYS6Neg/", "AudioManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'AudioClip', 'AudioSource', 'game', 'director', 'assetManager', 'Button', 'Toggle']);

      _export("AudioManager", AudioManager = class AudioManager {
        constructor() {
          this.dictWeaponSoundIndex = {};
          this.mainVolume = 1;
          this._musicVolume = 1;
          //背景音乐音量
          this._soundVolume = 1;
          //音效音量
          this._musicSwitch = 1;
          //音乐开关
          this._soundSwitch = 1;
          //音效开关
          this._mapSound = new Map();
          //所有的音效
          this._mapMusic = new Map();
          //所有的音乐
          this._persistRootNode = null;
          this._musicSource = null;
          this._curSounds = [];
        }

        // 主音量
        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        get musicSource() {
          return this._musicSource;
        }

        get musicVolume() {
          return this._musicVolume * this._musicSwitch;
          ;
        }

        set musicVolume(v) {
          this._musicVolume = v;

          this._setCurMusicVolume();
        }

        get soundVolume() {
          return this._soundVolume * this._soundSwitch;
        }

        set soundVolume(v) {
          this._soundVolume = v;

          this._setCurSoundVolume();
        }

        /**
         * 初始化
         * @returns 
         */
        init() {
          if (this._persistRootNode) return; //避免切换场景初始化报错

          this._persistRootNode = new Node('audio');
          director.getScene().addChild(this._persistRootNode);
          director.addPersistRootNode(this._persistRootNode);
          this.SetButtonSound();
          this._musicSwitch = this.getAudioSetting(true) ? 1 : 0;
          this._soundSwitch = this.getAudioSetting(false) ? 1 : 0;
          this.soundVolume = 1;
          this.musicVolume = 1;
        }
        /* 播放通用按钮声音 */


        SetButtonSound() {
          if (Button.prototype["touchBeganClone"]) return;
          Button.prototype["touchBeganClone"] = Button.prototype["_onTouchEnded"];

          Button.prototype["_onTouchEnded"] = function (event) {
            if (this.interactable && this.enabledInHierarchy) {
              // 播放自己的按钮音效
              // AudioManager.instance.playSound(Constants.audioSource.CommonClick);
              if (this instanceof Toggle) {
                // 播放自己的按钮音效
                AudioManager.instance.playSound(3);
              } else {
                // 播放自己的按钮音效
                AudioManager.instance.playSound(3);
              }
            }

            this.touchBeganClone(event);
          };
        }
        /**
         * 设置当前音乐音量
         */


        _setCurMusicVolume() {
          //@ts-ignore
          for (const value of this._mapMusic.values()) {
            value.volume = this.musicVolume;
          }
        }
        /**
         * 设置当前音效音量
         */


        _setCurSoundVolume() {
          //@ts-ignore
          for (const value of this._mapSound.values()) {
            value.forEach(source => {
              source.volume = this.soundVolume;
            });
          }
        }
        /**
           * 获取音频设置
           * @param isMusic 
           * @returns 
           */


        getAudioSetting(isMusic) {
          let state;

          if (isMusic) {
            state = (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
              error: Error()
            }), Configuration) : Configuration).instance.getConfigData('music');
          } else {
            state = (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
              error: Error()
            }), Configuration) : Configuration).instance.getConfigData('sound');
          }

          return !state || state === 'true' ? true : false;
        }
        /**
        * 获取音效
        * @param clip 
        * @returns 
        */


        _getAudioSource(clip) {
          let result;

          this._mapSound.forEach((sounds, name) => {
            if (clip.name == name) {
              if (sounds.length > 0) {
                const source = sounds.pop();
                result = source;

                this._mapSound.set(name, sounds);
              }

              return;
            }
          });

          if (!result) {
            result = this._persistRootNode.addComponent(AudioSource);
          }

          result.clip = clip;
          result.currentTime = 0;
          return result;
        }
        /**
        * 播放音乐
        * @param {number} Id id 音乐名称可通过 配置id获取
        * @param {Boolean} loop 是否循环播放
        * @param {Function} cb 播放开始时回调
        */


        async playMusic(id, loop, cb) {
          let audioCfg = this._geAudioNameById(id);

          if (!audioCfg) {
            return;
          }

          let name = audioCfg.Mp3;
          let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).AUDIO_FILE_PATH.MUSIC + name;
          let source = this._musicSource;
          source && source.stop();

          if (source && source.clip.name == name) {} else if (this._mapMusic.get(name)) {
            //先把之前的那个背景音乐存起来
            if (source && !this._mapMusic.get(source.clip.name)) {
              this._mapMusic.set(source.clip.name, source);
            } //原来已经创建的就从里面取


            source = this._mapMusic.get(name);
          } else {
            //如果已经有这个组件了就不用再添加了
            let musicSource = this._getExistMusicSource(name);

            if (!musicSource) {
              let clip = await (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
                error: Error()
              }), ResourcesUtil) : ResourcesUtil).loadResNew(path, AudioClip); //防止网速慢情况下，同时调用多次playMusic,导致短时间多个await

              musicSource = this._getExistMusicSource(name);

              if (!musicSource) {
                musicSource = this._persistRootNode.addComponent(AudioSource);
                musicSource.clip = clip;

                this._mapMusic.set(name, musicSource);
              }
            }

            source = musicSource;
          }

          source.currentTime = 0;
          source.volume = audioCfg.Volume * this.musicVolume;
          source.loop = loop;
          source.playOnAwake = false;
          this._musicSource = source;

          if (this._musicSwitch) {
            source.play();
          }

          cb && cb();
        }
        /**
         * 获取audio节点下已经存在的同名称AudioSource组件
         *
         * @private
         * @param {string} name
         * @return {*} 
         * @memberof AudioManager
         */


        _getExistMusicSource(name) {
          for (let i = this._persistRootNode.components.length - 1; i >= 0; i--) {
            let com = this._persistRootNode.components[i];

            if (com instanceof AudioSource && com.clip.name == name) {
              console.log("###已经有这个音乐组件了", name);
              return com;
            }
          }

          return null;
        }
        /**
        * 获取音效配置
        */


        _geAudioNameById(Id) {
          let soundCfg = (_crd && CfgMgr === void 0 ? (_reportPossibleCrUseOfCfgMgr({
            error: Error()
          }), CfgMgr) : CfgMgr).getDataById(new (_crd && SoundCfg === void 0 ? (_reportPossibleCrUseOfSoundCfg({
            error: Error()
          }), SoundCfg) : SoundCfg)(), Id);
          return soundCfg;
        }
        /**
         * 播放音效
         * @param {number} id 音效名称可通过 配置id获取
         * @param {Boolean} loop 是否循环播放
         */


        async playSound(id, loop = false, cb) {
          let audioCfg = this._geAudioNameById(id);

          if (!audioCfg) {
            return;
          }

          let name = audioCfg.Mp3;
          let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).AUDIO_FILE_PATH.SOUND + name;
          const clip = await (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
            error: Error()
          }), ResourcesUtil) : ResourcesUtil).loadResNew(path, AudioClip);

          let source = this._getAudioSource(clip);

          source.volume = audioCfg.Volume * this.soundVolume;
          source.loop = loop;
          source.playOnAwake = false;

          this._curSounds.push(source);

          if (this._soundSwitch) {
            source.play();
            setTimeout(() => {
              if (this._curSounds.indexOf(source) >= 0) {
                this._curSounds.splice(this._curSounds.indexOf(source), 1);
              }

              if (!this._mapSound.get(name)) {
                this._mapSound.set(name, [source]);
              } else {
                const sounds = this._mapSound.get(name);

                sounds.push(source);

                this._mapSound.set(name, sounds);
              }

              cb == null || cb();
            }, source.duration * 1000);
          }
        }
        /**
         * 当前是否正在播放指定音效
         *
         * @param {string} name
         * @return {*} 
         * @memberof AudioManager
         */


        isSoundPlaying(name) {
          return this._curSounds.some(source => {
            var _source$clip;

            return ((_source$clip = source.clip) == null ? void 0 : _source$clip.name) == name;
          });
        }
        /**
         * 是否存在指定音乐
         *
         * @param {string} name
         * @return {*} 
         * @memberof AudioManager
         */


        isMusicExist(name) {
          return this._mapMusic.get(name) != null;
        }
        /**
         * 指定背景音乐是否正在播放
         *
         * @param {string} name
         * @return {*} 
         * @memberof AudioManager
         */


        isMusicPlaying(name) {
          return this._musicSource && this._musicSource.clip.name == name && this._musicSource.playing;
        }
        /**
         * 预加载音乐
         * @param musics 
         */


        async preLoadMusics(musics) {
          for (let i = 0; i < musics.length; i++) {
            const id = musics[i];

            let audioCfg = this._geAudioNameById(id);

            if (!audioCfg) {
              continue;
            }

            let name = audioCfg.Mp3;
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AUDIO_FILE_PATH.MUSIC + name;
            const clip = await (_crd && ResourcesUtil === void 0 ? (_reportPossibleCrUseOfResourcesUtil({
              error: Error()
            }), ResourcesUtil) : ResourcesUtil).loadResNew(path, AudioClip);

            if (clip) {
              const musicSource = this._persistRootNode.addComponent(AudioSource);

              musicSource.clip = clip;

              this._mapMusic.set(name, musicSource);
            }
          }
        }
        /**
         * 开关音乐
         * @param open 
         */


        switchMusic(open) {
          if (open) {
            this.resumeMusic();
          } else {
            this.stopMusic();
          }

          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.setConfigData('music', `${open}`);
        }
        /**
         * 开关音效
         * @param open 
         */


        switchSound(open) {
          if (open) {
            this.resumeSound();
          } else {
            this.pauseSound();
          }

          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance.setConfigData('sound', `${open}`);
        }
        /**
         * 暂停所有音频播放
         */


        stopAllAudio() {
          this.stopMusic();
          this.pauseSound();
        }
        /**
         * 暂停当前音乐
         */


        stopMusic() {
          this._musicSwitch = 0;
          this._musicSource && this._musicSource.pause();
        }
        /**
         * 停止所有正在播放的背景音乐（一般只会有一个正在播放的背景音乐）
         *
         * @memberof AudioManager
         */


        stopAllMusic() {
          //@ts-ignore
          for (const value of this._mapMusic.values()) {
            if (value && value.playing) {
              value.stop();
            }
          }
        }
        /**
         * 删除当前背景音乐
         */


        destroyMusic() {
          if (this._musicSource.clip) {
            if (this._mapMusic.has(this._musicSource.clip.name)) {
              this._mapMusic.delete(this._musicSource.clip.name);
            }

            if (this._musicSource) {
              this._musicSource.destroy();

              this._musicSource = null;
            }
          }
        }
        /**
         * 暂停音效
         */


        pauseSound() {
          this._soundSwitch = 0;

          this._curSounds.forEach(source => {
            if (source.playing) {
              source.pause();
            }
          });
        }
        /**
         * 停止播放当前所有正在播放的音效
         *
         * @memberof AudioManager
         */


        stopAllSound() {
          //@ts-ignore
          for (const value of this._mapSound.values()) {
            if (value && value.length) {
              value.forEach(audio => {
                if (audio && audio.playing) {
                  audio.stop();
                }
              });
            }
          }

          for (let idx = 0; idx < this._curSounds.length; idx++) {
            let audio = this._curSounds[idx];

            if (audio && audio.playing) {
              audio.stop();
            }
          }
        }
        /**
         * 停止播放当前在arr里面的所有音效
         *
         * @param {Array<string>} arr
         * @memberof AudioManager
         */


        stopSoundArr(arr) {
          //@ts-ignore
          for (const value of this._mapSound.values()) {
            if (value && value.length) {
              value.forEach(audio => {
                if (audio && audio.playing && arr.indexOf(audio.clip.name) != -1) {
                  audio.stop();
                }
              });
            }
          }

          for (let idx = 0; idx < this._curSounds.length; idx++) {
            let audio = this._curSounds[idx];

            if (audio && audio.playing && arr.indexOf(audio.clip.name) != -1) {
              audio.stop();
            }
          }
        }
        /**
         * 停止播放当前在arr里面的所有音乐（一般只会有一个正在播放的背景音乐）
         *
         * @param {Array<string>} arr
         * @memberof AudioManager
         */


        stopMusicArr(arr) {
          //@ts-ignore
          for (let value of this._mapMusic.values()) {
            if (value && value.playing && arr.indexOf(value.clip.name) != -1) {
              value.stop();
            }
          }
        }
        /**
          * 继续播放所有音效和音乐
          */


        resumeAll() {
          this.resumeMusic();
          this.resumeSound();
        }
        /**
         * 恢复音乐
         */


        resumeMusic() {
          this._musicSwitch = 1;

          if (this._musicSource) {
            this._musicSource.volume = this.musicVolume;

            this._musicSource.play();
          }
        }
        /**
         * 恢复音效
         */


        resumeSound() {
          this._soundSwitch = 1;

          this._curSounds.forEach(source => {
            if (source.state == AudioSource.AudioState.PAUSED) {
              source.volume = this.soundVolume;
              source.play();
            }
          });
        }
        /**
         * 移除不需要的音乐
         * @param musics 
         */


        removeMusic(musics) {
          for (let i = 0; i < musics.length; i++) {
            const name = musics[i];

            const audioSource = this._mapMusic.get(name);

            this._mapMusic.delete(name);

            if (audioSource) {
              //@ts-ignore
              assetManager.releaseAsset(audioSource.clip);
              audioSource.destroy(); //@ts-ignore

              this._mapMusic[name] = null;
            }
          }
        }
        /**
         * 移除不需要的音效
         * @param sounds 
         */


        removeSound(sounds) {
          for (let i = 0; i < sounds.length; i++) {
            const name = sounds[i];

            const arrAudioSource = this._mapSound.get(name);

            if (arrAudioSource && arrAudioSource.length) {
              this._mapSound.delete(name);

              arrAudioSource.forEach(audioSource => {
                assetManager.releaseAsset(audioSource.clip);
                audioSource.destroy();
              });
            }
          }
        }
        /**
         * 设置音乐音量
         *
         * @param {number} flag
         * @memberof AudioManager
         */


        setMusic(flag) {
          this.musicVolume = flag; //@ts-ignore

          for (let value of this._mapMusic.values()) {
            if (value) {
              value.volume = this.musicVolume * this.mainVolume;
            }
          }
        }
        /**
         * 设置音乐音量但是不用保存
         *
         * @param {number} flag
         * @memberof AudioManager
         */


        setMusicWithoutSave(flag) {
          //@ts-ignore
          for (let value of this._mapMusic.values()) {
            if (value) {
              value.volume = flag * this.mainVolume;
            }
          }
        }

        setSound(flag) {
          this.soundVolume = flag; //@ts-ignore

          for (const value of this._mapSound.values()) {
            if (value && value.length) {
              value.forEach(audio => {
                audio.volume = this.soundVolume * this.mainVolume;
              });
            }
          }

          for (let idx = 0; idx < this._curSounds.length; idx++) {
            let audio = this._curSounds[idx];
            audio.volume = this.soundVolume * this.mainVolume;
          }
        }

      });

      AudioManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38088cb53e81d24ff5b383ab58ce94348e930c72.js.map