//=============================================================================
// rpg_managers.js v1.5.2
//=============================================================================

//-----------------------------------------------------------------------------
/**
 * データベースの管理を行う静的クラス。
 * セーブデータの管理など行う。だいたい、$XXXで大域変数に設定されているものの管理。
 * @class DataManager
 * 
 * @prop {String} _globalId [static]システムID 'RPGMV'
 * @prop {Number} _lastAccessedId [static] 最後にセーブ・ロードを行ったファイルのID
 * @prop {*} _errorUrl [static]
 * @prop {Array<Object>} _databaseFiles [static]
 */
function DataManager() {
    throw new Error('This is a static class');
}
/**
 * アクター用JSON( data/Actors.json )のデータ構造。
 * @type {Array<RPG.Actor>}
 */
var $dataActors       = null;

/**
 * クラス用JSON( data/Classes.json )のデータ構造。
 * @type {Array<RPG.Class>}
 */
var $dataClasses      = null;

/**
 * スキル用JSON( data/Skills.json )のデータ構造。
 * @type {Array<RPG.Skill>}
 */
var $dataSkills       = null;

/**
 * アイテム用JSON( data/Items.json )のデータ構造。
 * @type {Array<RPG.Item>}
 */
var $dataItems        = null;

/**
 * 武器用JSON( data/Weapons.json )のデータ構造。
 * @type {Array<RPG.Weapon>}
 */
var $dataWeapons      = null;

/**
 * 防具用JSON( data/Armors.json )のデータ構造。
 * @type {Array<RPG.Armor>}
 */
var $dataArmors       = null;

/**
 * 敵用JSON( data/Enemies.json )のデータ構造。
 * RPGMakerMV Enemy data.
 * @type {Array<RPG.Enemy>}
 */
var $dataEnemies      = null;

/**
 * 敵グループ用JSON( data/Troops.json )のデータ構造。
 * @type {Array<RPG.Troop>}
 */
var $dataTroops       = null;

/**
 * 状態用JSON( data/States.json )のデータ構造。
 * @type {Array<RPG.State>}
 */
var $dataStates       = null;

/**
 * アニメーション用JSON( data/Animations.json )のデータ構造。
 * @type {Array<RPG.Animation>}
 */
var $dataAnimations   = null;

/**
 * タイルセット用JSON( data/Tilesets.json )のデータ構造。
 * @type {Array<RPG.Tileset>}
 */
var $dataTilesets     = null;

/**
 * コモンイベント用JSON( data/CommonEvents.json )のデータ構造。
 * @type {Array<RPG.CommonEvent>}
 */
var $dataCommonEvents = null;

/**
 * システム用JSON( data/System.json )のデータ構造。
 * @type {RPG.System}
 */
var $dataSystem       = null;

/**
 * マップ情報用JSON( data/MapInfo.json )のデータ構造。
 * @type {Array<RPG.MapInfo>}
*/
var $dataMapInfos     = null;

/**
 * 現在のマップ用JSON( data/MapXXX.json( XXX は3桁の数値)  )のデータ構造。
 * @type {RPG.Map}
 */
var $dataMap          = null;

/**
 * RPGMakerMV Temporary game data; not saved with the game.
 * @type {Game_Temp}
 */
var $gameTemp         = null;

/**
 * [システム]管理用の静的クラス。※セーブされる
 * @type {Game_System}
*/
var $gameSystem       = null;

/**
 * 画面管理用の静的クラス。
 * @type {Game_Screen}
 */
var $gameScreen       = null;

/**
 * タイマー管理用の静的クラス。
 * @type {Game_Timer}
 */
var $gameTimer        = null;

/**
 * メッセージ管理用の静的クラス。
 * @type {Game_Message}
*/
var $gameMessage      = null;

/**
 * [スイッチ]管理用の静的クラス。
 * @type {Game_Switches}
 */
var $gameSwitches     = null;

/**
 * [変数]管理用の静的クラス。
 * @type {Game_Variables}
 */
var $gameVariables    = null;

/**
 * [セルフスイッチ]管理用の静的クラス。
 * @type {Game_SelfSwitches}
 */
var $gameSelfSwitches = null;

/**
 * [アクター]管理用の静的クラス。
 * @type {Game_Actors}
 */
var $gameActors       = null;

/**
 * [パーティー]管理用の静的クラス。
 * @type {Game_Party}
 */
var $gameParty        = null;

/**
 * [敵グループ]管理用の静的クラス。
 * @type {Game_Troop}
 */
var $gameTroop        = null;

/** 
 * [マップ]管理用の静的クラス。
 * @type {Game_Map}
 */
var $gameMap          = null;

/**
 * [プレイヤー]管理用の静的クラス。
 * @type {Game_Player}
 */
var $gamePlayer       = null;

/**
 * @type {Array<RPG.EventCommand>}
 */
var $testEvent        = null;

DataManager._globalId       = 'RPGMV';
DataManager._lastAccessedId = 1;
DataManager._errorUrl       = null;

DataManager._databaseFiles = [
    { name: '$dataActors',       src: 'Actors.json'       },
    { name: '$dataClasses',      src: 'Classes.json'      },
    { name: '$dataSkills',       src: 'Skills.json'       },
    { name: '$dataItems',        src: 'Items.json'        },
    { name: '$dataWeapons',      src: 'Weapons.json'      },
    { name: '$dataArmors',       src: 'Armors.json'       },
    { name: '$dataEnemies',      src: 'Enemies.json'      },
    { name: '$dataTroops',       src: 'Troops.json'       },
    { name: '$dataStates',       src: 'States.json'       },
    { name: '$dataAnimations',   src: 'Animations.json'   },
    { name: '$dataTilesets',     src: 'Tilesets.json'     },
    { name: '$dataCommonEvents', src: 'CommonEvents.json' },
    { name: '$dataSystem',       src: 'System.json'       },
    { name: '$dataMapInfos',     src: 'MapInfos.json'     }
];

/**
 * データベースファイル( $data から始まる大域変数に代入される JSON)を読み込む。
 * ただし $dataMap は別扱い。
 */
DataManager.loadDatabase = function() {
    var test = this.isBattleTest() || this.isEventTest();
    var prefix = test ? 'Test_' : '';
    for (var i = 0; i < this._databaseFiles.length; i++) {
        var name = this._databaseFiles[i].name;
        var src = this._databaseFiles[i].src;
        this.loadDataFile(name, prefix + src);
    }
    if (this.isEventTest()) {
        this.loadDataFile('$testEvent', prefix + 'Event.json');
    }
};

/**
 * 指定したデータを読み込む。読み込みが完了したら onLoad が呼ばれる。
 * @param  {String} name データ代入先の大域変数名 $dataXXX
 * @param  {String} src data/以下のファイル名
 */
DataManager.loadDataFile = function(name, src) {
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager.onLoad(window[name]);
        }
    };
    xhr.onerror = this._mapLoader || function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

/**
 * データベースの読み込みが完了しているか。
 * @returns {Boolean}
 */
DataManager.isDatabaseLoaded = function() {
    this.checkError();
    for (var i = 0; i < this._databaseFiles.length; i++) {
        if (!window[this._databaseFiles[i].name]) {
            return false;
        }
    }
    return true;
};

/**
 * マップデータを読み込む。完了時は onLoad が呼ばれる。
 * @param  {Number} mapId -1: 空のマップを作る
 */
DataManager.loadMapData = function(mapId) {
    if (mapId > 0) {
        var filename = 'Map%1.json'.format(mapId.padZero(3));
        this._mapLoader = ResourceHandler.createLoader('data/' + filename, this.loadDataFile.bind(this, '$dataMap', filename));
        this.loadDataFile('$dataMap', filename);
    } else {
        this.makeEmptyMap();
    }
};

/**
 * 空のマップを作成。
 */
DataManager.makeEmptyMap = function() {
    $dataMap = {};
    $dataMap.data = [];
    $dataMap.events = [];
    $dataMap.width = 100;
    $dataMap.height = 100;
    $dataMap.scrollType = 3;
};

/**
 *  マップの読み込みが完了しているか。
 * @returns {Boolean}
 */
DataManager.isMapLoaded = function() {
    this.checkError();
    return !!$dataMap;
};

/**
 * データ読み込み完了時に呼ばれるハンドラ。
 * @param  {*} object データを格納したオブジェクト
 */
DataManager.onLoad = function(object) {
    var array;
    if (object === $dataMap) {
        this.extractMetadata(object);
        array = object.events;
    } else {
        array = object;
    }
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            var data = array[i];
            if (data && data.note !== undefined) {
                this.extractMetadata(data);
            }
        }
    }
    if (object === $dataSystem) {
        Decrypter.hasEncryptedImages = !!object.hasEncryptedImages;
        Decrypter.hasEncryptedAudio = !!object.hasEncryptedAudio;
        Scene_Boot.loadSystemImages();
    }
};

/**
 * data.noteに<名前:データ> の形で入っているデータを、data.mata = {名前:データ,…}の形に変換。
 * @param  {Object} data JSONデータ
 */
DataManager.extractMetadata = function(data) {
    var re = /<([^<>:]+)(:?)([^>]*)>/g;
    data.meta = {};
    for (;;) {
        var match = re.exec(data.note);
        if (match) {
            if (match[2] === ':') {
                data.meta[match[1]] = match[3];
            } else {
                data.meta[match[1]] = true;
            }
        } else {
            break;
        }
    }
};

/**
 * エラーが記録されていれば、エラーを表示。
 */
DataManager.checkError = function() {
    if (DataManager._errorUrl) {
        throw new Error('Failed to load: ' + DataManager._errorUrl);
    }
};

/**
 * [戦闘テスト]モードか。
 * @returns {Boolean}
 */
DataManager.isBattleTest = function() {
    return Utils.isOptionValid('btest');
};

/**
 * [イベントテスト]モードか。
 * @returns {Boolean}
 */
DataManager.isEventTest = function() {
    return Utils.isOptionValid('etest');
};

/**
 * 指定した項目が[スキル]に含まれるか。
 * @static
 * @param {Object} item 
 * @returns {Boolean} 
 */
DataManager.isSkill = function(item) {
    return item && $dataSkills.contains(item);
};

/**
 * 指定した項目が[アイテム]に含まれるか。
 * @static
 * @param {Object} item 
 * @returns {Boolean} 
 */
DataManager.isItem = function(item) {
    return item && $dataItems.contains(item);
};

/**
 * 指定した項目が[武器]に含まれるか。
 * @static
 * @param {object} item 
 * @returns {Boolean} 
 */
DataManager.isWeapon = function(item) {
    return item && $dataWeapons.contains(item);
};

/**
 * 指定した項目が[防具]に含まれるか。
 * @static
 * @param {object} item 
 * @returns {Boolean} 
 */
DataManager.isArmor = function(item) {
    return item && $dataArmors.contains(item);
};

/**
 * $game から始まる大域変数に、対応したオブジェクトを生成し代入。
 */
DataManager.createGameObjects = function() {
    $gameTemp          = new Game_Temp();
    $gameSystem        = new Game_System();
    $gameScreen        = new Game_Screen();
    $gameTimer         = new Game_Timer();
    $gameMessage       = new Game_Message();
    $gameSwitches      = new Game_Switches();
    $gameVariables     = new Game_Variables();
    $gameSelfSwitches  = new Game_SelfSwitches();
    $gameActors        = new Game_Actors();
    $gameParty         = new Game_Party();
    $gameTroop         = new Game_Troop();
    $gameMap           = new Game_Map();
    $gamePlayer        = new Game_Player();
};

/**
 * 新規ゲームの準備。
 */
DataManager.setupNewGame = function() {
    this.createGameObjects();
    this.selectSavefileForNewGame();
    $gameParty.setupStartingMembers();
    $gamePlayer.reserveTransfer($dataSystem.startMapId,
        $dataSystem.startX, $dataSystem.startY);
    Graphics.frameCount = 0;
};

/**
 * [戦闘テスト] の準備。
 */
DataManager.setupBattleTest = function() {
    this.createGameObjects();
    $gameParty.setupBattleTest();
    BattleManager.setup($dataSystem.testTroopId, true, false);
    BattleManager.setBattleTest(true);
    BattleManager.playBattleBgm();
};

/**
 * [イベントテスト]の準備。
 */
DataManager.setupEventTest = function() {
    this.createGameObjects();
    this.selectSavefileForNewGame();
    $gameParty.setupStartingMembers();
    $gamePlayer.reserveTransfer(-1, 8, 6);
    $gamePlayer.setTransparent(false);
};

/**
 * GlobalInfo を読み込んで返す。
 * @returns {Array<MV.SaveFileInfo>}
 */
DataManager.loadGlobalInfo = function() {
    var json;
    try {
        json = StorageManager.load(0);
    } catch (e) {
        console.error(e);
        return [];
    }
    if (json) {
        var globalInfo = JSON.parse(json);
        for (var i = 1; i <= this.maxSavefiles(); i++) {
            if (!StorageManager.exists(i)) {
                delete globalInfo[i];
            }
        }
        return globalInfo;
    } else {
        return [];
    }
};

/**
 * GlobalInfo を保存。
 * @param  {MV.SaveFileInfo} info
 */
DataManager.saveGlobalInfo = function(info) {
    StorageManager.save(0, JSON.stringify(info));
};

/**
 * 指定した ID のセーブファイルが存在するか。
 * @static
 * @param {Number} savefileId 
 * @returns {Boolean} 
 */
DataManager.isThisGameFile = function(savefileId) {
    var globalInfo = this.loadGlobalInfo();
    if (globalInfo && globalInfo[savefileId]) {
        if (StorageManager.isLocalMode()) {
            return true;
        } else {
            var savefile = globalInfo[savefileId];
            return (savefile.globalId === this._globalId &&
                    savefile.title === $dataSystem.gameTitle);
        }
    } else {
        return false;
    }
};

/**
 * セーブファイルが(ひとつでも)存在するか。
 * @returns {Boolean}
 */
DataManager.isAnySavefileExists = function() {
    var globalInfo = this.loadGlobalInfo();
    if (globalInfo) {
        for (var i = 1; i < globalInfo.length; i++) {
            if (this.isThisGameFile(i)) {
                return true;
            }
        }
    }
    return false;
};

/**
 * 最新のセーブファイルID を返す。
 * @returns {Number}
 */
DataManager.latestSavefileId = function() {
    var globalInfo = this.loadGlobalInfo();
    var savefileId = 1;
    var timestamp = 0;
    if (globalInfo) {
        for (var i = 1; i < globalInfo.length; i++) {
            if (this.isThisGameFile(i) && globalInfo[i].timestamp > timestamp) {
                timestamp = globalInfo[i].timestamp;
                savefileId = i;
            }
        }
    }
    return savefileId;
};

/**
 * 全てのセーブファイルの画像を読み込む。
 */
DataManager.loadAllSavefileImages = function() {
    var globalInfo = this.loadGlobalInfo();
    if (globalInfo) {
        for (var i = 1; i < globalInfo.length; i++) {
            if (this.isThisGameFile(i)) {
                var info = globalInfo[i];
                this.loadSavefileImages(info);
            }
        }
    }
};


/**
 * セーブファイルに必要な画像を読み込む。
 * @param  {Object} info
 */
DataManager.loadSavefileImages = function(info) {
    if (info.characters) {
        for (var i = 0; i < info.characters.length; i++) {
            ImageManager.reserveCharacter(info.characters[i][0]);
        }
    }
    if (info.faces) {
        for (var j = 0; j < info.faces.length; j++) {
            ImageManager.reserveFace(info.faces[j][0]);
        }
    }
};

/**
 * セーブ可能なファイルの最大数を返す。
 * @static
 * @returns {Number} 
 */
DataManager.maxSavefiles = function() {
    return 20;
};

/**
 * ゲームデータをセーブファイルに保存。
 * @static
 * @param {Number} savefileId 
 * @returns {Boolean} 保存に成功したか
 */
DataManager.saveGame = function(savefileId) {
    try {
        StorageManager.backup(savefileId);
        return this.saveGameWithoutRescue(savefileId);
    } catch (e) {
        console.error(e);
        try {
            StorageManager.remove(savefileId);
            StorageManager.restoreBackup(savefileId);
        } catch (e2) {
        }
        return false;
    }
};

/**
 * 指定したセーブファイルID からデータを読み込む。
 * @param  {Number} savefileId
 */
DataManager.loadGame = function(savefileId) {
    try {
        return this.loadGameWithoutRescue(savefileId);
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * 指定したセーブファイルID の情報を読み込んで返す。
 * @param  {Number} savefileId
 * @returns {Object}
 */
DataManager.loadSavefileInfo = function(savefileId) {
    var globalInfo = this.loadGlobalInfo();
    return (globalInfo && globalInfo[savefileId]) ? globalInfo[savefileId] : null;
};

/**
 * 最後にセーブ・ロードを行ったファイルのIDを返す。
 * @static
 * @returns {Number} 
 */
DataManager.lastAccessedSavefileId = function() {
    return this._lastAccessedId;
};

/**
 *  指定したセーブファイルID にリソース抜きの情報を保存。
 * @param  {Number} savefileId
 * @returns {Boolean} 保存に成功したか
 */
DataManager.saveGameWithoutRescue = function(savefileId) {
    var json = JsonEx.stringify(this.makeSaveContents());
    if (json.length >= 200000) {
        console.warn('Save data too big!');
    }
    StorageManager.save(savefileId, json);
    this._lastAccessedId = savefileId;
    var globalInfo = this.loadGlobalInfo() || [];
    globalInfo[savefileId] = this.makeSavefileInfo();
    this.saveGlobalInfo(globalInfo);
    return true;
};

/**
 *  指定したセーブファイルID からリソース抜きの情報を読み込む。
 * @param  {Number} savefileId
 * @returns {Boolean} 読み込みに成功したか
 */
DataManager.loadGameWithoutRescue = function(savefileId) {
    var globalInfo = this.loadGlobalInfo();
    if (this.isThisGameFile(savefileId)) {
        var json = StorageManager.load(savefileId);
        this.createGameObjects();
        this.extractSaveContents(JsonEx.parse(json));
        this._lastAccessedId = savefileId;
        return true;
    } else {
        return false;
    }
};

/**
 * [ニューゲーム]用のセーブファイルを選択。
 */
DataManager.selectSavefileForNewGame = function() {
    var globalInfo = this.loadGlobalInfo();
    this._lastAccessedId = 1;
    if (globalInfo) {
        var numSavefiles = Math.max(0, globalInfo.length - 1);
        if (numSavefiles < this.maxSavefiles()) {
            this._lastAccessedId = numSavefiles + 1;
        } else {
            var timestamp = Number.MAX_VALUE;
            for (var i = 1; i < globalInfo.length; i++) {
                if (!globalInfo[i]) {
                    this._lastAccessedId = i;
                    break;
                }
                if (globalInfo[i].timestamp < timestamp) {
                    timestamp = globalInfo[i].timestamp;
                    this._lastAccessedId = i;
                }
            }
        }
    }
};

/**
 * 新規のセーブファイル情報を作って返す。
 * @static
 * @returns {MV.SaveFileInfo} 
 */
DataManager.makeSavefileInfo = function() {
    var info = {};
    info.globalId   = this._globalId;
    info.title      = $dataSystem.gameTitle;
    info.characters = $gameParty.charactersForSavefile();
    info.faces      = $gameParty.facesForSavefile();
    info.playtime   = $gameSystem.playtimeText();
    info.timestamp  = Date.now();
    return info;
};

/**
 * セーブ用のデータ作成。$gameで始まる大域変数をまとめたオブジェクトを返す。
 * ただし$gameTemp, $gameMessage, $gameTroop を含まない。
 * @static
 * @returns {Object} 大域変数をまとめたオブジェクト
 */
DataManager.makeSaveContents = function() {
    // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.
    var contents = {};
    contents.system       = $gameSystem;
    contents.screen       = $gameScreen;
    contents.timer        = $gameTimer;
    contents.switches     = $gameSwitches;
    contents.variables    = $gameVariables;
    contents.selfSwitches = $gameSelfSwitches;
    contents.actors       = $gameActors;
    contents.party        = $gameParty;
    contents.map          = $gameMap;
    contents.player       = $gamePlayer;
    return contents;
};

/**
 * 渡したオブジェクトから$gameで始まる大域変数に値を返す。
 * @static
 * @param {Object} contents
 */
DataManager.extractSaveContents = function(contents) {
    $gameSystem        = contents.system;
    $gameScreen        = contents.screen;
    $gameTimer         = contents.timer;
    $gameSwitches      = contents.switches;
    $gameVariables     = contents.variables;
    $gameSelfSwitches  = contents.selfSwitches;
    $gameActors        = contents.actors;
    $gameParty         = contents.party;
    $gameMap           = contents.map;
    $gamePlayer        = contents.player;
};



/**
 * The static class that manages the configuration data.
 * @class ConfigManager
 * @prop {Number} bgmVolume [static]
 * @prop {Number} bgsVolume [static]
 * @prop {Number} meVolume [static]
 * @prop {Number} seVolume [static]
 */
function ConfigManager() {
    throw new Error('This is a static class');
}

/**@member {Boolean} */
ConfigManager.alwaysDash        = false;
/**@member {Boolean} */
ConfigManager.commandRemember   = false;

Object.defineProperty(ConfigManager, 'bgmVolume', {
    get: function() {
        return AudioManager._bgmVolume;
    },
    set: function(value) {
        AudioManager.bgmVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'bgsVolume', {
    get: function() {
        return AudioManager.bgsVolume;
    },
    set: function(value) {
        AudioManager.bgsVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'meVolume', {
    get: function() {
        return AudioManager.meVolume;
    },
    set: function(value) {
        AudioManager.meVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'seVolume', {
    get: function() {
        return AudioManager.seVolume;
    },
    set: function(value) {
        AudioManager.seVolume = value;
    },
    configurable: true
});

/**
 * 
 */
ConfigManager.load = function() {
    var json;
    var config = {};
    try {
        json = StorageManager.load(-1);
    } catch (e) {
        console.error(e);
    }
    if (json) {
        config = JSON.parse(json);
    }
    this.applyData(config);
};

/**
 * 
 */
ConfigManager.save = function() {
    StorageManager.save(-1, JSON.stringify(this.makeData()));
};

/**
 * @returns {MV.ConfigData}
 */
ConfigManager.makeData = function() {
    var config = {};
    config.alwaysDash = this.alwaysDash;
    config.commandRemember = this.commandRemember;
    config.bgmVolume = this.bgmVolume;
    config.bgsVolume = this.bgsVolume;
    config.meVolume = this.meVolume;
    config.seVolume = this.seVolume;
    return config;
};

/**
 * @param  {MV.ConfigData} config
 */
ConfigManager.applyData = function(config) {
    this.alwaysDash = this.readFlag(config, 'alwaysDash');
    this.commandRemember = this.readFlag(config, 'commandRemember');
    this.bgmVolume = this.readVolume(config, 'bgmVolume');
    this.bgsVolume = this.readVolume(config, 'bgsVolume');
    this.meVolume = this.readVolume(config, 'meVolume');
    this.seVolume = this.readVolume(config, 'seVolume');
};

/**
 * @param  {MV.ConfigData} config
 * @param  {String} name
 * @return {Boolean}
 */
ConfigManager.readFlag = function(config, name) {
    return !!config[name];
};

/**
 * @param  {MV.ConfigData} config
 * @param  {String} name
 * @return {Number}
 */
ConfigManager.readVolume = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        return 100;
    }
};



/**
 * The static class that manages storage for saving game data.
 * @class StorageManager
 */
function StorageManager() {
    throw new Error('This is a static class');
}

/**
 * @param  {Number} savefileId
 * @param  {String} json
 */
StorageManager.save = function(savefileId, json) {
    if (this.isLocalMode()) {
        this.saveToLocalFile(savefileId, json);
    } else {
        this.saveToWebStorage(savefileId, json);
    }
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.load = function(savefileId) {
    if (this.isLocalMode()) {
        return this.loadFromLocalFile(savefileId);
    } else {
        return this.loadFromWebStorage(savefileId);
    }
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.exists = function(savefileId) {
    if (this.isLocalMode()) {
        return this.localFileExists(savefileId);
    } else {
        return this.webStorageExists(savefileId);
    }
};

/**
 * @param  {Number} savefileId
 */
StorageManager.remove = function(savefileId) {
    if (this.isLocalMode()) {
        this.removeLocalFile(savefileId);
    } else {
        this.removeWebStorage(savefileId);
    }
};

/**
 * @param  {Number} savefileId
 */
StorageManager.backup = function(savefileId) {
    if (this.exists(savefileId)) {
        if (this.isLocalMode()) {
            var data = this.loadFromLocalFile(savefileId);
            var compressed = LZString.compressToBase64(data);
            var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId) + ".bak";
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            fs.writeFileSync(filePath, compressed);
        } else {
            var data = this.loadFromWebStorage(savefileId);
            var compressed = LZString.compressToBase64(data);
            var key = this.webStorageKey(savefileId) + "bak";
            localStorage.setItem(key, compressed);
        }
    }
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.backupExists = function(savefileId) {
    if (this.isLocalMode()) {
        return this.localFileBackupExists(savefileId);
    } else {
        return this.webStorageBackupExists(savefileId);
    }
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.cleanBackup = function(savefileId) {
	if (this.backupExists(savefileId)) {
		if (this.isLocalMode()) {
			var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId);
            fs.unlinkSync(filePath + ".bak");
		} else {
		    var key = this.webStorageKey(savefileId);
			localStorage.removeItem(key + "bak");
		}
	}
};

/**
 * @param  {Number} savefileId
 */
StorageManager.restoreBackup = function(savefileId) {
    if (this.backupExists(savefileId)) {
        if (this.isLocalMode()) {
            var data = this.loadFromLocalBackupFile(savefileId);
            var compressed = LZString.compressToBase64(data);
            var fs = require('fs');
            var dirPath = this.localFileDirectoryPath();
            var filePath = this.localFilePath(savefileId);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }
            fs.writeFileSync(filePath, compressed);
            fs.unlinkSync(filePath + ".bak");
        } else {
            var data = this.loadFromWebStorageBackup(savefileId);
            var compressed = LZString.compressToBase64(data);
            var key = this.webStorageKey(savefileId);
            localStorage.setItem(key, compressed);
            localStorage.removeItem(key + "bak");
        }
    }
};

/**
 * @returns  {Boolean}
 */
StorageManager.isLocalMode = function() {
    return Utils.isNwjs();
};

/**
 * @param  {Number} savefileId
 * @param  {String} json
 */
StorageManager.saveToLocalFile = function(savefileId, json) {
    var data = LZString.compressToBase64(json);
    var fs = require('fs');
    var dirPath = this.localFileDirectoryPath();
    var filePath = this.localFilePath(savefileId);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(filePath, data);
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.loadFromLocalFile = function(savefileId) {
    var data = null;
    var fs = require('fs');
    var filePath = this.localFilePath(savefileId);
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
    }
    return LZString.decompressFromBase64(data);
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.loadFromLocalBackupFile = function(savefileId) {
    var data = null;
    var fs = require('fs');
    var filePath = this.localFilePath(savefileId) + ".bak";
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath, { encoding: 'utf8' });
    }
    return LZString.decompressFromBase64(data);
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.localFileBackupExists = function(savefileId) {
    var fs = require('fs');
    return fs.existsSync(this.localFilePath(savefileId) + ".bak");
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.localFileExists = function(savefileId) {
    var fs = require('fs');
    return fs.existsSync(this.localFilePath(savefileId));
};

/**
 * @param  {Number} savefileId
 */
StorageManager.removeLocalFile = function(savefileId) {
    var fs = require('fs');
    var filePath = this.localFilePath(savefileId);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

/**
 * @param  {Number} savefileId
 * @param  {String} json
 */
StorageManager.saveToWebStorage = function(savefileId, json) {
    var key = this.webStorageKey(savefileId);
    var data = LZString.compressToBase64(json);
    localStorage.setItem(key, data);
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.loadFromWebStorage = function(savefileId) {
    var key = this.webStorageKey(savefileId);
    var data = localStorage.getItem(key);
    return LZString.decompressFromBase64(data);
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.loadFromWebStorageBackup = function(savefileId) {
    var key = this.webStorageKey(savefileId) + "bak";
    var data = localStorage.getItem(key);
    return LZString.decompressFromBase64(data);
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.webStorageBackupExists = function(savefileId) {
    var key = this.webStorageKey(savefileId) + "bak";
    return !!localStorage.getItem(key);
};

/**
 * @param  {Number} savefileId
 * @returns  {Boolean}
 */
StorageManager.webStorageExists = function(savefileId) {
    var key = this.webStorageKey(savefileId);
    return !!localStorage.getItem(key);
};

/**
 * @param  {Number} savefileId
 */
StorageManager.removeWebStorage = function(savefileId) {
    var key = this.webStorageKey(savefileId);
    localStorage.removeItem(key);
};

/**
 * @returns  {String}
 */
StorageManager.localFileDirectoryPath = function() {
    var path = require('path');

    var base = path.dirname(process.mainModule.filename);
    return path.join(base, 'save/');
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.localFilePath = function(savefileId) {
    var name;
    if (savefileId < 0) {
        name = 'config.rpgsave';
    } else if (savefileId === 0) {
        name = 'global.rpgsave';
    } else {
        name = 'file%1.rpgsave'.format(savefileId);
    }
    return this.localFileDirectoryPath() + name;
};

/**
 * @param  {Number} savefileId
 * @returns  {String}
 */
StorageManager.webStorageKey = function(savefileId) {
    if (savefileId < 0) {
        return 'RPG Config';
    } else if (savefileId === 0) {
        return 'RPG Global';
    } else {
        return 'RPG File%1'.format(savefileId);
    }
};



/**
 * The static class that loads images, creates bitmap objects and retains them.
 * @class ImageManager
 * 
 * @prop {CacheMap} cache [static]
 * 
 * @prop {CacheMap} cache [static]
 * @prop {ImageCache} _imageCache [static]
 * @prop {RequestQueue} _requestQueue [static]
 * @prop {Number} _systemReservationId [static]
 */
function ImageManager() {
    throw new Error('This is a static class');
}


ImageManager.cache = new CacheMap(ImageManager);

ImageManager._imageCache = new ImageCache();
ImageManager._requestQueue = new RequestQueue();
ImageManager._systemReservationId = Utils.generateRuntimeId();

ImageManager._generateCacheKey = function(path, hue){
    return  path + ':' + hue;
};

    /**
     * Loads a Bitmap object from the 'img/animations/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadAnimation = function(filename, hue) {
    return this.loadBitmap('img/animations/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/battlebacks1/' folder
     *  and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadBattleback1 = function(filename, hue) {
    return this.loadBitmap('img/battlebacks1/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/battlebacks2/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadBattleback2 = function(filename, hue) {
    return this.loadBitmap('img/battlebacks2/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/enemies/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadEnemy = function(filename, hue) {
    return this.loadBitmap('img/enemies/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/characters/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadCharacter = function(filename, hue) {
    return this.loadBitmap('img/characters/', filename, hue, false);
};
    /**
     * Loads a Bitmap object from the 'img/faces/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadFace = function(filename, hue) {
    return this.loadBitmap('img/faces/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/parallaxes/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadParallax = function(filename, hue) {
    return this.loadBitmap('img/parallaxes/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/pictures/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadPicture = function(filename, hue) {
    return this.loadBitmap('img/pictures/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/sv_actors/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadSvActor = function(filename, hue) {
    return this.loadBitmap('img/sv_actors/', filename, hue, false);
};
    /**
     * Loads a Bitmap object from the 'img/sv_enemies/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadSvEnemy = function(filename, hue) {
    return this.loadBitmap('img/sv_enemies/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from 'img/system/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadSystem = function(filename, hue) {
    return this.loadBitmap('img/system/', filename, hue, false);
};
    /**
     * Loads a Bitmap object from the 'img/tilesets/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadTileset = function(filename, hue) {
    return this.loadBitmap('img/tilesets/', filename, hue, false);
};
    /**
     * Loads a Bitmap object from the 'img/titles1/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadTitle1 = function(filename, hue) {
    return this.loadBitmap('img/titles1/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from the 'img/titles2/' folder
     * and returns it.
     * @param {String} filename 
     * @param {Number} [hue] 
     * @returns {Bitmap} 
     */
ImageManager.loadTitle2 = function(filename, hue) {
    return this.loadBitmap('img/titles2/', filename, hue, true);
};
    /**
     * Loads a Bitmap object from any folder and returns it.
     * 
     * @param {String} folder 
     * @param {String} filename 
     * @param {Number} hue 
     * @param {Boolean} smooth 
     * @returns {Bitmap} 
     */
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.loadNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};
    /**
     * Loads an empty Bitmap object and returns it.
     * 
     * @param {String} path 
     * @param {Number} hue 
     * @returns {Bitmap} 
     */
ImageManager.loadEmptyBitmap = function() {
    var empty = this._imageCache.get('empty');
    if(!empty){
        empty = new Bitmap();
        this._imageCache.add('empty', empty);
        this._imageCache.reserve('empty', empty, this._systemReservationId);
    }

    return empty;
};
    /**
     * Loads a Bitmap object given a path
     * and returns it.
     * @param {String} path 
     * @param {Number} hue 
     * @returns {Bitmap} 
     */
ImageManager.loadNormalBitmap = function(path, hue) {
    var key = this._generateCacheKey(path, hue);
    var bitmap = this._imageCache.get(key);
    if (!bitmap) {
        bitmap = Bitmap.load(path);
        bitmap.addLoadListener(function() {
            bitmap.rotateHue(hue);
        });
        this._imageCache.add(key, bitmap);
    }else if(!bitmap.isReady()){
        bitmap.decode();
    }

    return bitmap;
};
    /**
     * Clears the image cache in RPGMakerMV.
     * 
     */
ImageManager.clear = function() {
    this._imageCache = new ImageCache();
};
/**
* Returns true if the image cache is ready.
* @returns {Boolean} 
*/
ImageManager.isReady = function() {
    return this._imageCache.isReady();
};
    /**
     * Returns true if the given filename
     * is an object character. Must contain
     * a  '!' in the file name to be an
     * object character.
     * @param {String} filename 
     * @returns {Boolean} 
     */
ImageManager.isObjectCharacter = function(filename) {
    var sign = filename.match(/^[\!\$]+/);
    return sign && sign[0].contains('!');
};
    /**
     * Returns true if the given filename is
     * a large character. Must contain a '$'
     * in the file name to be a large character.
     * @param {String} filename 
     * @returns {Boolean} 
     */
ImageManager.isBigCharacter = function(filename) {
    var sign = filename.match(/^[\!\$]+/);
    return sign && sign[0].contains('$');
};

/**
 * @param  {String} filename
 * @returns {Boolean} 
 */
ImageManager.isZeroParallax = function(filename) {
    return filename.charAt(0) === '!';
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveAnimation = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/animations/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveBattleback1 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/battlebacks1/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveBattleback2 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/battlebacks2/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveEnemy = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/enemies/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveCharacter = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/characters/', filename, hue, false, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveFace = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/faces/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveParallax = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/parallaxes/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reservePicture = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/pictures/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveSvActor = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/sv_actors/', filename, hue, false, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveSvEnemy = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/sv_enemies/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveSystem = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/system/', filename, hue, false, reservationId || this._systemReservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveTileset = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/tilesets/', filename, hue, false, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveTitle1 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/titles1/', filename, hue, true, reservationId);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveTitle2 = function(filename, hue, reservationId) {
    return this.reserveBitmap('img/titles2/', filename, hue, true, reservationId);
};

/**
 * @param  {String} folder
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Boolean} smooth
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveBitmap = function(folder, filename, hue, smooth, reservationId) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.reserveNormalBitmap(path, hue || 0, reservationId || this._defaultReservationId);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

/**
 * @param  {String} path
 * @param  {Number} hue
 * @param  {Number} reservationId
 * @returns {Bitmap} 
 */
ImageManager.reserveNormalBitmap = function(path, hue, reservationId){
    var bitmap = this.loadNormalBitmap(path, hue);
    this._imageCache.reserve(this._generateCacheKey(path, hue), bitmap, reservationId);

    return bitmap;
};

/**
 * @param  {Number} reservationId
 */
ImageManager.releaseReservation = function(reservationId){
    this._imageCache.releaseReservation(reservationId);
};

/**
 * @param  {Number} reservationId
 */
ImageManager.setDefaultReservationId = function(reservationId){
    this._defaultReservationId = reservationId;
};


/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestAnimation = function(filename, hue) {
    return this.requestBitmap('img/animations/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestBattleback1 = function(filename, hue) {
    return this.requestBitmap('img/battlebacks1/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestBattleback2 = function(filename, hue) {
    return this.requestBitmap('img/battlebacks2/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestEnemy = function(filename, hue) {
    return this.requestBitmap('img/enemies/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestCharacter = function(filename, hue) {
    return this.requestBitmap('img/characters/', filename, hue, false);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestFace = function(filename, hue) {
    return this.requestBitmap('img/faces/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestParallax = function(filename, hue) {
    return this.requestBitmap('img/parallaxes/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestPicture = function(filename, hue) {
    return this.requestBitmap('img/pictures/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestSvActor = function(filename, hue) {
    return this.requestBitmap('img/sv_actors/', filename, hue, false);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestSvEnemy = function(filename, hue) {
    return this.requestBitmap('img/sv_enemies/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestSystem = function(filename, hue) {
    return this.requestBitmap('img/system/', filename, hue, false);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestTileset = function(filename, hue) {
    return this.requestBitmap('img/tilesets/', filename, hue, false);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestTitle1 = function(filename, hue) {
    return this.requestBitmap('img/titles1/', filename, hue, true);
};

/**
 * @param  {String} filename
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestTitle2 = function(filename, hue) {
    return this.requestBitmap('img/titles2/', filename, hue, true);
};

/**
 * @param  {String} folder
 * @param  {String} filename
 * @param  {Number} hue
 * @param  {Boolean} smooth
 * @returns {Bitmap} 
 */
ImageManager.requestBitmap = function(folder, filename, hue, smooth) {
    if (filename) {
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.requestNormalBitmap(path, hue || 0);
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return this.loadEmptyBitmap();
    }
};

/**
 * @param  {String} path
 * @param  {Number} hue
 * @returns {Bitmap} 
 */
ImageManager.requestNormalBitmap = function(path, hue){
    var key = this._generateCacheKey(path, hue);
    var bitmap = this._imageCache.get(key);
    if(!bitmap){
        bitmap = Bitmap.request(path);
        bitmap.addLoadListener(function(){
            bitmap.rotateHue(hue);
        });
        this._imageCache.add(key, bitmap);
        this._requestQueue.enqueue(key, bitmap);
    }else{
        this._requestQueue.raisePriority(key);
    }

    return bitmap;
};

/**
 * 
 */
ImageManager.update = function(){
    this._requestQueue.update();
};

/**
 * 
 */
ImageManager.clearRequest = function(){
    this._requestQueue.clear();
};




/**
 * The static class that handles BGM, BGS, ME and SE.
 * @class AudioManager
 * @prop {Number} masterVolume [static]
 * @prop {Number} bgmVolume [static]
 * @prop {Number} bgsVolume [static]
 * @prop {Number} meVolume [static]
 * @prop {Number} seVolume [static]
 * 
 * @prop {Number} _bgmVolume [static]
 * @prop {Number} _bgsVolume [static]
 * @prop {Number} _meVolume [static]
 * @prop {Number} _seVolume [static]
 * @prop {MV.AudioParameters} _currentBgm [static]
 * @prop {MV.AudioParameters} _currentBgs [static]
 * @prop {Html5AudioStatic | WebAudio} _bgmBuffer [static]
 * @prop {Html5AudioStatic | WebAudio} _bgsBuffer [static]
 * @prop {Html5AudioStatic | WebAudio} _meBuffer [static]
 * @prop {Array<Html5AudioStatic | WebAudio>} _seBuffers [static]
 * @prop {Array<Html5AudioStatic | WebAudio>} _replayFadeTime [static]
 * @prop {String} _path [static]
 * @prop {String} _blobUrl [static]
 */
function AudioManager() {
    throw new Error('This is a static class');
}

AudioManager._masterVolume   = 1;   // (min: 0, max: 1)
AudioManager._bgmVolume      = 100;
AudioManager._bgsVolume      = 100;
AudioManager._meVolume       = 100;
AudioManager._seVolume       = 100;
AudioManager._currentBgm     = null;
AudioManager._currentBgs     = null;
AudioManager._bgmBuffer      = null;
AudioManager._bgsBuffer      = null;
AudioManager._meBuffer       = null;
AudioManager._seBuffers      = [];
AudioManager._staticBuffers  = [];
AudioManager._replayFadeTime = 0.5;
AudioManager._path           = 'audio/';
AudioManager._blobUrl        = null;

Object.defineProperty(AudioManager, 'masterVolume', {
    get: function() {
        return this._masterVolume;
    },
    set: function(value) {
        this._masterVolume = value;
        WebAudio.setMasterVolume(this._masterVolume);
        Graphics.setVideoVolume(this._masterVolume);
    },
    configurable: true
});

Object.defineProperty(AudioManager, 'bgmVolume', {
    get: function() {
        return this._bgmVolume;
    },
    set: function(value) {
        this._bgmVolume = value;
        this.updateBgmParameters(this._currentBgm);
    },
    configurable: true
});

Object.defineProperty(AudioManager, 'bgsVolume', {
    get: function() {
        return this._bgsVolume;
    },
    set: function(value) {
        this._bgsVolume = value;
        this.updateBgsParameters(this._currentBgs);
    },
    configurable: true
});

Object.defineProperty(AudioManager, 'meVolume', {
    get: function() {
        return this._meVolume;
    },
    set: function(value) {
        this._meVolume = value;
        this.updateMeParameters(this._currentMe);
    },
    configurable: true
});

Object.defineProperty(AudioManager, 'seVolume', {
    get: function() {
        return this._seVolume;
    },
    set: function(value) {
        this._seVolume = value;
    },
    configurable: true
});

/**
 * @param  {MV.AudioParameters} bgm
 * @param  {Number} [pos]
 */
AudioManager.playBgm = function(bgm, pos) {
    if (this.isCurrentBgm(bgm)) {
        this.updateBgmParameters(bgm);
    } else {
        this.stopBgm();
        if (bgm.name) { 
            if(Decrypter.hasEncryptedAudio && this.shouldUseHtml5Audio()){
                this.playEncryptedBgm(bgm, pos);
            }
            else {
                this._bgmBuffer = this.createBuffer('bgm', bgm.name);
                this.updateBgmParameters(bgm);
                if (!this._meBuffer) {
                    this._bgmBuffer.play(true, pos || 0);
                }
            }
        }
    }
    this.updateCurrentBgm(bgm, pos);
};

/**
 * @param  {MV.AudioParameters} bgm
 * @param  {Number} [pos]
 */
AudioManager.playEncryptedBgm = function(bgm, pos) {
    var ext = this.audioFileExt();
    var url = this._path + 'bgm/' + encodeURIComponent(bgm.name) + ext;
    url = Decrypter.extToEncryptExt(url);
    Decrypter.decryptHTML5Audio(url, bgm, pos);
};

/**
 * @param  {String} url
 * @param  {MV.AudioParameters} bgm
 * @param  {Number} [pos]
 */
AudioManager.createDecryptBuffer = function(url, bgm, pos){
    this._blobUrl = url;
    this._bgmBuffer = this.createBuffer('bgm', bgm.name);
    this.updateBgmParameters(bgm);
    if (!this._meBuffer) {
        this._bgmBuffer.play(true, pos || 0);
    }
    this.updateCurrentBgm(bgm, pos);
};

/**
 * @param  {MV.AudioParameters} bgm
 */
AudioManager.replayBgm = function(bgm) {
    if (this.isCurrentBgm(bgm)) {
        this.updateBgmParameters(bgm);
    } else {
        this.playBgm(bgm, bgm.pos);
        if (this._bgmBuffer) {
            this._bgmBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

/**
 * @param  {MV.AudioParameters} bgm
 * @returns {Boolean}
 */
AudioManager.isCurrentBgm = function(bgm) {
    return (this._currentBgm && this._bgmBuffer &&
            this._currentBgm.name === bgm.name);
};

/**
 * @param  {MV.AudioParameters} bgm
 */
AudioManager.updateBgmParameters = function(bgm) {
    this.updateBufferParameters(this._bgmBuffer, this._bgmVolume, bgm);
};

/**
 * @param  {MV.AudioParameters} bgm
 * @param  {Number} pos
 */
AudioManager.updateCurrentBgm = function(bgm, pos) {
    this._currentBgm = {
        name: bgm.name,
        volume: bgm.volume,
        pitch: bgm.pitch,
        pan: bgm.pan,
        pos: pos
    };
};

/**
 * 
 */
AudioManager.stopBgm = function() {
    if (this._bgmBuffer) {
        this._bgmBuffer.stop();
        this._bgmBuffer = null;
        this._currentBgm = null;
    }
};

/**
 * @param  {Number} duration
 */
AudioManager.fadeOutBgm = function(duration) {
    if (this._bgmBuffer && this._currentBgm) {
        this._bgmBuffer.fadeOut(duration);
        this._currentBgm = null;
    }
};

/**
 * @param  {Number} duration
 */
AudioManager.fadeInBgm = function(duration) {
    if (this._bgmBuffer && this._currentBgm) {
        this._bgmBuffer.fadeIn(duration);
    }
};

/**
 * @param  {MV.AudioParameters} bgs
 * @param  {Number} [pos]
 */
AudioManager.playBgs = function(bgs, pos) {
    if (this.isCurrentBgs(bgs)) {
        this.updateBgsParameters(bgs);
    } else {
        this.stopBgs();
        if (bgs.name) {
            this._bgsBuffer = this.createBuffer('bgs', bgs.name);
            this.updateBgsParameters(bgs);
            this._bgsBuffer.play(true, pos || 0);
        }
    }
    this.updateCurrentBgs(bgs, pos);
};

/**
 * @param  {MV.AudioParameters} bgs
 */
AudioManager.replayBgs = function(bgs) {
    if (this.isCurrentBgs(bgs)) {
        this.updateBgsParameters(bgs);
    } else {
        this.playBgs(bgs, bgs.pos);
        if (this._bgsBuffer) {
            this._bgsBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

/**
 * @param  {MV.AudioParameters} bgs
 * @returns {Boolean}
 */
AudioManager.isCurrentBgs = function(bgs) {
    return (this._currentBgs && this._bgsBuffer &&
            this._currentBgs.name === bgs.name);
};

/**
 * @param  {MV.AudioParameters} bgs
 */
AudioManager.updateBgsParameters = function(bgs) {
    this.updateBufferParameters(this._bgsBuffer, this._bgsVolume, bgs);
};

/**
 * @param  {MV.AudioParameters} bgs
 * @param  {Number} pos
 */
AudioManager.updateCurrentBgs = function(bgs, pos) {
    this._currentBgs = {
        name: bgs.name,
        volume: bgs.volume,
        pitch: bgs.pitch,
        pan: bgs.pan,
        pos: pos
    };
};

/**
 * 
 */
AudioManager.stopBgs = function() {
    if (this._bgsBuffer) {
        this._bgsBuffer.stop();
        this._bgsBuffer = null;
        this._currentBgs = null;
    }
};

/**
 * @param  {Number} duration
 */
AudioManager.fadeOutBgs = function(duration) {
    if (this._bgsBuffer && this._currentBgs) {
        this._bgsBuffer.fadeOut(duration);
        this._currentBgs = null;
    }
};

/**
 * @param  {Number} duration
 */
AudioManager.fadeInBgs = function(duration) {
    if (this._bgsBuffer && this._currentBgs) {
        this._bgsBuffer.fadeIn(duration);
    }
};

/**
 * @param  {MV.AudioParameters} me
 */
AudioManager.playMe = function(me) {
    this.stopMe();
    if (me.name) {
        if (this._bgmBuffer && this._currentBgm) {
            this._currentBgm.pos = this._bgmBuffer.seek();
            this._bgmBuffer.stop();
        }
        this._meBuffer = this.createBuffer('me', me.name);
        this.updateMeParameters(me);
        this._meBuffer.play(false);
        this._meBuffer.addStopListener(this.stopMe.bind(this));
    }
};

/**
 * @param  {MV.AudioParameters} me
 */
AudioManager.updateMeParameters = function(me) {
    this.updateBufferParameters(this._meBuffer, this._meVolume, me);
};

/**
 * @param  {Number} duration
 */
AudioManager.fadeOutMe = function(duration) {
    if (this._meBuffer) {
        this._meBuffer.fadeOut(duration);
    }
};

/**
 * 
 */
AudioManager.stopMe = function() {
    if (this._meBuffer) {
        this._meBuffer.stop();
        this._meBuffer = null;
        if (this._bgmBuffer && this._currentBgm && !this._bgmBuffer.isPlaying()) {
            this._bgmBuffer.play(true, this._currentBgm.pos);
            this._bgmBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

/**
 * @param  {MV.AudioParameters} se
 */
AudioManager.playSe = function(se) {
    if (se.name) {
        this._seBuffers = this._seBuffers.filter(function(audio) {
            return audio.isPlaying();
        });
        var buffer = this.createBuffer('se', se.name);
        this.updateSeParameters(buffer, se);
        buffer.play(false);
        this._seBuffers.push(buffer);
    }
};

/**
 * @param  {MV.AudioParameters} buffer
 * @param  {MV.AudioParameters} se
 */
AudioManager.updateSeParameters = function(buffer, se) {
    this.updateBufferParameters(buffer, this._seVolume, se);
};

/**
 * 
 */
AudioManager.stopSe = function() {
    this._seBuffers.forEach(function(buffer) {
        buffer.stop();
    });
    this._seBuffers = [];
};

/**
 * @param  {MV.AudioParameters} se
 */
AudioManager.playStaticSe = function(se) {
    if (se.name) {
        this.loadStaticSe(se);
        for (var i = 0; i < this._staticBuffers.length; i++) {
            var buffer = this._staticBuffers[i];
            if (buffer._reservedSeName === se.name) {
                buffer.stop();
                this.updateSeParameters(buffer, se);
                buffer.play(false);
                break;
            }
        }
    }
};

/**
 * @param  {MV.AudioParameters} se
 */
AudioManager.loadStaticSe = function(se) {
    if (se.name && !this.isStaticSe(se)) {
        var buffer = this.createBuffer('se', se.name);
        buffer._reservedSeName = se.name;
        this._staticBuffers.push(buffer);
        if (this.shouldUseHtml5Audio()) {
            Html5Audio.setStaticSe(buffer._url);
        }
    }
};

/**
 * @param  {MV.AudioParameters} se
 * @returns {Boolean}
 */
AudioManager.isStaticSe = function(se) {
    for (var i = 0; i < this._staticBuffers.length; i++) {
        var buffer = this._staticBuffers[i];
        if (buffer._reservedSeName === se.name) {
            return true;
        }
    }
    return false;
};

/**
 * 
 */
AudioManager.stopAll = function() {
    this.stopMe();
    this.stopBgm();
    this.stopBgs();
    this.stopSe();
};

/**
 * @returns {MV.AudioParameters}
 */
AudioManager.saveBgm = function() {
    if (this._currentBgm) {
        var bgm = this._currentBgm;
        return {
            name: bgm.name,
            volume: bgm.volume,
            pitch: bgm.pitch,
            pan: bgm.pan,
            pos: this._bgmBuffer ? this._bgmBuffer.seek() : 0
        };
    } else {
        return this.makeEmptyAudioObject();
    }
};

/**
 * @returns {MV.AudioParameters}
 */
AudioManager.saveBgs = function() {
    if (this._currentBgs) {
        var bgs = this._currentBgs;
        return {
            name: bgs.name,
            volume: bgs.volume,
            pitch: bgs.pitch,
            pan: bgs.pan,
            pos: this._bgsBuffer ? this._bgsBuffer.seek() : 0
        };
    } else {
        return this.makeEmptyAudioObject();
    }
};

/**
 * @returns {MV.AudioParameters}
 */
AudioManager.makeEmptyAudioObject = function() {
    return { name: '', volume: 0, pitch: 0 };
};

/**
 * @returns {Html5AudioStatic | WebAudio}
 */
AudioManager.createBuffer = function(folder, name) {
    var ext = this.audioFileExt();
    var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
    if (this.shouldUseHtml5Audio() && folder === 'bgm') {
        if(this._blobUrl) Html5Audio.setup(this._blobUrl);
        else Html5Audio.setup(url);
        return Html5Audio;
    } else {
        return new WebAudio(url);
    }
};

/**
 * @param  {MV.AudioParameters} buffer
 * @param  {Number} configVolume
 * @param  {MV.AudioParameters} audio
 */
AudioManager.updateBufferParameters = function(buffer, configVolume, audio) {
    if (buffer && audio) {
        buffer.volume = configVolume * (audio.volume || 0) / 10000;
        buffer.pitch = (audio.pitch || 0) / 100;
        buffer.pan = (audio.pan || 0) / 100;
    }
};

/**
 * @returns {String}
 */
AudioManager.audioFileExt = function() {
    if (WebAudio.canPlayOgg() && !Utils.isMobileDevice()) {
        return '.ogg';
    } else {
        return '.m4a';
    }
};

/**
    The only case where we wanted html5audio was android/ no encrypt
    Atsuma-ru asked to force webaudio there too, so just return false for ALL
 * @returns {Boolean}
 */
AudioManager.shouldUseHtml5Audio = function() {
    // The only case where we wanted html5audio was android/ no encrypt
    // Atsuma-ru asked to force webaudio there too, so just return false for ALL    // return Utils.isAndroidChrome() && !Decrypter.hasEncryptedAudio;
 return false;
};

/**
 * 
 */
AudioManager.checkErrors = function() {
    this.checkWebAudioError(this._bgmBuffer);
    this.checkWebAudioError(this._bgsBuffer);
    this.checkWebAudioError(this._meBuffer);
    this._seBuffers.forEach(function(buffer) {
        this.checkWebAudioError(buffer);
    }.bind(this));
    this._staticBuffers.forEach(function(buffer) {
        this.checkWebAudioError(buffer);
    }.bind(this));
};

/**
 * @param  {Html5AudioStatic | WebAudio} webAudio
 */
AudioManager.checkWebAudioError = function(webAudio) {
    if (webAudio && webAudio.isError()) {
        throw new Error('Failed to load: ' + webAudio.url);
    }
};




/**
 * The static class that plays sound effects defined in the database.
 * @class SoundManager
 */
function SoundManager() {
    throw new Error('This is a static class');
}

/**
 * 
 */
SoundManager.preloadImportantSounds = function() {
    this.loadSystemSound(0);
    this.loadSystemSound(1);
    this.loadSystemSound(2);
    this.loadSystemSound(3);
};

/**
 * @param  {Number} n
 */
SoundManager.loadSystemSound = function(n) {
    if ($dataSystem) {
        AudioManager.loadStaticSe($dataSystem.sounds[n]);
    }
};

/**
 * @param  {Number} n
 */
SoundManager.playSystemSound = function(n) {
    if ($dataSystem) {
        AudioManager.playStaticSe($dataSystem.sounds[n]);
    }
};

/**
 * 
 */
SoundManager.playCursor = function() {
    this.playSystemSound(0);
};

/**
 * 
 */
SoundManager.playOk = function() {
    this.playSystemSound(1);
};

/**
 * 
 */
SoundManager.playCancel = function() {
    this.playSystemSound(2);
};

/**
 * 
 */
SoundManager.playBuzzer = function() {
    this.playSystemSound(3);
};

/**
 * 
 */
SoundManager.playEquip = function() {
    this.playSystemSound(4);
};

/**
 * 
 */
SoundManager.playSave = function() {
    this.playSystemSound(5);
};

/**
 * 
 */
SoundManager.playLoad = function() {
    this.playSystemSound(6);
};

/**
 * 
 */
SoundManager.playBattleStart = function() {
    this.playSystemSound(7);
};

/**
 * 
 */
SoundManager.playEscape = function() {
    this.playSystemSound(8);
};

/**
 * 
 */
SoundManager.playEnemyAttack = function() {
    this.playSystemSound(9);
};

/**
 * 
 */
SoundManager.playEnemyDamage = function() {
    this.playSystemSound(10);
};

/**
 * 
 */
SoundManager.playEnemyCollapse = function() {
    this.playSystemSound(11);
};

/**
 * 
 */
SoundManager.playBossCollapse1 = function() {
    this.playSystemSound(12);
};

/**
 * 
 */
SoundManager.playBossCollapse2 = function() {
    this.playSystemSound(13);
};

/**
 * 
 */
SoundManager.playActorDamage = function() {
    this.playSystemSound(14);
};

/**
 * 
 */
SoundManager.playActorCollapse = function() {
    this.playSystemSound(15);
};

/**
 * 
 */
SoundManager.playRecovery = function() {
    this.playSystemSound(16);
};

/**
 * 
 */
SoundManager.playMiss = function() {
    this.playSystemSound(17);
};

/**
 * 
 */
SoundManager.playEvasion = function() {
    this.playSystemSound(18);
};

/**
 * 
 */
SoundManager.playMagicEvasion = function() {
    this.playSystemSound(19);
};

/**
 * 
 */
SoundManager.playReflection = function() {
    this.playSystemSound(20);
};

/**
 * 
 */
SoundManager.playShop = function() {
    this.playSystemSound(21);
};

/**
 * 
 */
SoundManager.playUseItem = function() {
    this.playSystemSound(22);
};

/**
 * 
 */
SoundManager.playUseSkill = function() {
    this.playSystemSound(23);
};




/**
 * The static class that handles terms and messages.
 * @class TextManager
 * @prop {String} currencyUnit [static][read-only]
 * @prop {String} level [static][read-only]
 * @prop {String} levelA [static][read-only]
 * @prop {String} hp [static][read-only]
 * @prop {String} hpA [static][read-only]
 * @prop {String} mp [static][read-only]
 * @prop {String} mpA [static][read-only]
 * @prop {String} tp [static][read-only]
 * @prop {String} tpA [static][read-only]
 * @prop {String} exp [static][read-only]
 * @prop {String} expA [static][read-only]
 * @prop {String} fight [static][read-only]
 * @prop {String} escape [static][read-only]
 * @prop {String} attack [static][read-only]
 * @prop {String} guard [static][read-only]
 * @prop {String} item [static][read-only]
 * @prop {String} skill [static][read-only]
 * @prop {String} equip [static][read-only]
 * @prop {String} status [static][read-only]
 * @prop {String} formation [static][read-only]
 * @prop {String} save [static][read-only]
 * @prop {String} gameEnd [static][read-only]
 * @prop {String} options [static][read-only]
 * @prop {String} weapon [static][read-only]
 * @prop {String} armor [static][read-only]
 * @prop {String} keyItem [static][read-only]
 * @prop {String} equip2 [static][read-only]
 * @prop {String} optimize [static][read-only]
 * @prop {String} clear [static][read-only]
 * @prop {String} newGame [static][read-only]
 * @prop {String} continue_ [static][read-only]
 * @prop {String} toTitle [static][read-only]
 * @prop {String} cancel [static][read-only]
 * @prop {String} buy [static][read-only]
 * @prop {String} sell [static][read-only]
 * @prop {String} alwaysDash [static][read-only]
 * @prop {String} commandRemember [static][read-only]
 * @prop {String} bgmVolume [static][read-only]
 * @prop {String} bgsVolume [static][read-only]
 * @prop {String} meVolume [static][read-only]
 * @prop {String} seVolume [static][read-only]
 * @prop {String} possession [static][read-only]
 * @prop {String} expTotal [static][read-only]
 * @prop {String} expNext [static][read-only]
 * @prop {String} saveMessage [static][read-only]
 * @prop {String} loadMessage [static][read-only]
 * @prop {String} file [static][read-only]
 * @prop {String} partyName [static][read-only]
 * @prop {String} emerge [static][read-only]
 * @prop {String} preemptive [static][read-only]
 * @prop {String} surprise [static][read-only]
 * @prop {String} escapeStart [static][read-only]
 * @prop {String} escapeFailure [static][read-only]
 * @prop {String} victory [static][read-only]
 * @prop {String} defeat [static][read-only]
 * @prop {String} obtainExp [static][read-only]
 * @prop {String} obtainGold [static][read-only]
 * @prop {String} obtainItem [static][read-only]
 * @prop {String} levelUp [static][read-only]
 * @prop {String} obtainSkill [static][read-only]
 * @prop {String} useItem [static][read-only]
 * @prop {String} criticalToEnemy [static][read-only]
 * @prop {String} criticalToActor [static][read-only]
 * @prop {String} actorDamage [static][read-only]
 * @prop {String} actorRecovery [static][read-only]
 * @prop {String} actorGain [static][read-only]
 * @prop {String} actorLoss [static][read-only]
 * @prop {String} actorDrain [static][read-only]
 * @prop {String} actorNoDamage [static][read-only]
 * @prop {String} actorNoHit [static][read-only]
 * @prop {String} enemyDamage [static][read-only]
 * @prop {String} enemyRecovery [static][read-only]
 * @prop {String} enemyGain [static][read-only]
 * @prop {String} enemyLoss [static][read-only]
 * @prop {String} enemyDrain [static][read-only]
 * @prop {String} enemyNoDamage [static][read-only]
 * @prop {String} enemyNoHit [static][read-only]
 * @prop {String} evasion [static][read-only]
 * @prop {String} magicEvasion [static][read-only]
 * @prop {String} magicReflection [static][read-only]
 * @prop {String} counterAttack [static][read-only]
 * @prop {String} substitute [static][read-only]
 * @prop {String} buffAdd [static][read-only]
 * @prop {String} debuffAdd [static][read-only]
 * @prop {String} buffRemove [static][read-only]
 * @prop {String} actionFailure [static][read-only]
 */
function TextManager() {
    throw new Error('This is a static class');
}

/**
 * @param  {Number} basicId
 * @return {String}
 */
TextManager.basic = function(basicId) {
    return $dataSystem.terms.basic[basicId] || '';
};

/**
 * @param  {Number} paramId
 * @return {String}
 */
TextManager.param = function(paramId) {
    return $dataSystem.terms.params[paramId] || '';
};

/**
 * @param  {Number} commandId
 * @return {String}
 */
TextManager.command = function(commandId) {
    return $dataSystem.terms.commands[commandId] || '';
};

/**
 * @param  {Number} messageId
 * @return {String}
 */
TextManager.message = function(messageId) {
    return $dataSystem.terms.messages[messageId] || '';
};

/**
 * @param  {String} method
 * @param  {Number} param
 * @return {String}
 */
TextManager.getter = function(method, param) {
    return {
        get: function() {
            return this[method](param);
        },
        configurable: true
    };
};

Object.defineProperty(TextManager, 'currencyUnit', {
    get: function() { return $dataSystem.currencyUnit; },
    configurable: true
});

Object.defineProperties(TextManager, {
    level           : TextManager.getter('basic', 0),
    levelA          : TextManager.getter('basic', 1),
    hp              : TextManager.getter('basic', 2),
    hpA             : TextManager.getter('basic', 3),
    mp              : TextManager.getter('basic', 4),
    mpA             : TextManager.getter('basic', 5),
    tp              : TextManager.getter('basic', 6),
    tpA             : TextManager.getter('basic', 7),
    exp             : TextManager.getter('basic', 8),
    expA            : TextManager.getter('basic', 9),
    fight           : TextManager.getter('command', 0),
    escape          : TextManager.getter('command', 1),
    attack          : TextManager.getter('command', 2),
    guard           : TextManager.getter('command', 3),
    item            : TextManager.getter('command', 4),
    skill           : TextManager.getter('command', 5),
    equip           : TextManager.getter('command', 6),
    status          : TextManager.getter('command', 7),
    formation       : TextManager.getter('command', 8),
    save            : TextManager.getter('command', 9),
    gameEnd         : TextManager.getter('command', 10),
    options         : TextManager.getter('command', 11),
    weapon          : TextManager.getter('command', 12),
    armor           : TextManager.getter('command', 13),
    keyItem         : TextManager.getter('command', 14),
    equip2          : TextManager.getter('command', 15),
    optimize        : TextManager.getter('command', 16),
    clear           : TextManager.getter('command', 17),
    newGame         : TextManager.getter('command', 18),
    continue_       : TextManager.getter('command', 19),
    toTitle         : TextManager.getter('command', 21),
    cancel          : TextManager.getter('command', 22),
    buy             : TextManager.getter('command', 24),
    sell            : TextManager.getter('command', 25),
    alwaysDash      : TextManager.getter('message', 'alwaysDash'),
    commandRemember : TextManager.getter('message', 'commandRemember'),
    bgmVolume       : TextManager.getter('message', 'bgmVolume'),
    bgsVolume       : TextManager.getter('message', 'bgsVolume'),
    meVolume        : TextManager.getter('message', 'meVolume'),
    seVolume        : TextManager.getter('message', 'seVolume'),
    possession      : TextManager.getter('message', 'possession'),
    expTotal        : TextManager.getter('message', 'expTotal'),
    expNext         : TextManager.getter('message', 'expNext'),
    saveMessage     : TextManager.getter('message', 'saveMessage'),
    loadMessage     : TextManager.getter('message', 'loadMessage'),
    file            : TextManager.getter('message', 'file'),
    partyName       : TextManager.getter('message', 'partyName'),
    emerge          : TextManager.getter('message', 'emerge'),
    preemptive      : TextManager.getter('message', 'preemptive'),
    surprise        : TextManager.getter('message', 'surprise'),
    escapeStart     : TextManager.getter('message', 'escapeStart'),
    escapeFailure   : TextManager.getter('message', 'escapeFailure'),
    victory         : TextManager.getter('message', 'victory'),
    defeat          : TextManager.getter('message', 'defeat'),
    obtainExp       : TextManager.getter('message', 'obtainExp'),
    obtainGold      : TextManager.getter('message', 'obtainGold'),
    obtainItem      : TextManager.getter('message', 'obtainItem'),
    levelUp         : TextManager.getter('message', 'levelUp'),
    obtainSkill     : TextManager.getter('message', 'obtainSkill'),
    useItem         : TextManager.getter('message', 'useItem'),
    criticalToEnemy : TextManager.getter('message', 'criticalToEnemy'),
    criticalToActor : TextManager.getter('message', 'criticalToActor'),
    actorDamage     : TextManager.getter('message', 'actorDamage'),
    actorRecovery   : TextManager.getter('message', 'actorRecovery'),
    actorGain       : TextManager.getter('message', 'actorGain'),
    actorLoss       : TextManager.getter('message', 'actorLoss'),
    actorDrain      : TextManager.getter('message', 'actorDrain'),
    actorNoDamage   : TextManager.getter('message', 'actorNoDamage'),
    actorNoHit      : TextManager.getter('message', 'actorNoHit'),
    enemyDamage     : TextManager.getter('message', 'enemyDamage'),
    enemyRecovery   : TextManager.getter('message', 'enemyRecovery'),
    enemyGain       : TextManager.getter('message', 'enemyGain'),
    enemyLoss       : TextManager.getter('message', 'enemyLoss'),
    enemyDrain      : TextManager.getter('message', 'enemyDrain'),
    enemyNoDamage   : TextManager.getter('message', 'enemyNoDamage'),
    enemyNoHit      : TextManager.getter('message', 'enemyNoHit'),
    evasion         : TextManager.getter('message', 'evasion'),
    magicEvasion    : TextManager.getter('message', 'magicEvasion'),
    magicReflection : TextManager.getter('message', 'magicReflection'),
    counterAttack   : TextManager.getter('message', 'counterAttack'),
    substitute      : TextManager.getter('message', 'substitute'),
    buffAdd         : TextManager.getter('message', 'buffAdd'),
    debuffAdd       : TextManager.getter('message', 'debuffAdd'),
    buffRemove      : TextManager.getter('message', 'buffRemove'),
    actionFailure   : TextManager.getter('message', 'actionFailure'),
});




/**
 * シーン遷移を管理する静的クラス。
 * @class SceneManager
 * 
 * @prop {Scene_Base} _scene [static]現在のシーン
 * @prop {Scene_Base} _nextScene [static]次のシーン
 * @prop {Array<Function>} _stack [static]シーンなどの履歴
 * @prop {Boolean}_stopped [static]
 * @prop {Boolean} _sceneStarted [static]
 * @prop {Boolean} _exiting [static]
 * @prop {Function} _previousClass [static]前のシーンなど
 * @prop {Bitmap} _backgroundBitmap [static]
 * @prop {Number} _screenWidth [static]画面の幅(ピクセル)
 * @prop {Number} _screenHeight [static]画面の高さ(ピクセル)
 * @prop {Number} _boxWidth [static]幅(ピクセル)
 * @prop {Number} _boxHeight [static]高さ(ピクセル)
 * @prop {Number} _deltaTime [static]
 * @prop {Number} _currentTime [static]
 * @prop {Number} _accumulator [static]
 */
function SceneManager() {
    throw new Error('This is a static class');
}

/**
 * Gets the current time in ms without on iOS Safari.
 */
SceneManager._getTimeInMsWithoutMobileSafari = function() {
    return performance.now();
};

SceneManager._scene             = null;
SceneManager._nextScene         = null;
SceneManager._stack             = [];
SceneManager._stopped           = false;
SceneManager._sceneStarted      = false;
SceneManager._exiting           = false;
SceneManager._previousClass     = null;
SceneManager._backgroundBitmap  = null;
SceneManager._screenWidth       = 816;
SceneManager._screenHeight      = 624;
SceneManager._boxWidth          = 816;
SceneManager._boxHeight         = 624;
SceneManager._deltaTime = 1.0 / 60.0;
if (!Utils.isMobileSafari()) SceneManager._currentTime = SceneManager._getTimeInMsWithoutMobileSafari();
SceneManager._accumulator = 0.0;

/**
 * 指定したシーンの実行。
 * @param  {Scene_Base} sceneClass シーンオブジェクト
 */
SceneManager.run = function(sceneClass) {
    try {
        this.initialize();
        this.goto(sceneClass);
        this.requestUpdate();
    } catch (e) {
        this.catchException(e);
    }
};

/**
 * 初期化。
 */
SceneManager.initialize = function() {
    this.initGraphics();
    this.checkFileAccess();
    this.initAudio();
    this.initInput();
    this.initNwjs();
    this.checkPluginErrors();
    this.setupErrorHandlers();
};

/**
 * 画像の初期化。
 */
SceneManager.initGraphics = function() {
    var type = this.preferableRendererType();
    Graphics.initialize(this._screenWidth, this._screenHeight, type);
    Graphics.boxWidth = this._boxWidth;
    Graphics.boxHeight = this._boxHeight;
    Graphics.setLoadingImage('img/system/Loading.png');
    if (Utils.isOptionValid('showfps')) {
        Graphics.showFps();
    }
    if (type === 'webgl') {
        this.checkWebGL();
    }
};

/**
 * 環境に適したレンダ方式を返す。
 * @returns {String} レンダ方式(canvas, webgl, auto のいずれか)
 */
SceneManager.preferableRendererType = function() {
    if (Utils.isOptionValid('canvas')) {
        return 'canvas';
    } else if (Utils.isOptionValid('webgl')) {
        return 'webgl';
    } else {
        return 'auto';
    }
};

/**
 * canvas レンダ方式を使っているか。
 * @returns {Boolean}
 */
SceneManager.shouldUseCanvasRenderer = function() {
    return Utils.isMobileDevice();
};

/**
 * WebGL が使えない環境ならエラーを発生させる。
 */
SceneManager.checkWebGL = function() {
    if (!Graphics.hasWebGL()) {
        throw new Error('Your browser does not support WebGL.');
    }
};

/**
 * ファイル操作ができない環境ならエラーを発生させる。
 */
SceneManager.checkFileAccess = function() {
    if (!Utils.canReadGameFiles()) {
        throw new Error('Your browser does not allow to read local files.');
    }
};

/**
 * 音声の初期化。
 */
SceneManager.initAudio = function() {
    var noAudio = Utils.isOptionValid('noaudio');
    if (!WebAudio.initialize(noAudio) && !noAudio) {
        throw new Error('Your browser does not support Web Audio API.');
    }
};

/**
 * 入力の初期化。
 */
SceneManager.initInput = function() {
    Input.initialize();
    TouchInput.initialize();
};

/**
 * NW.js の初期化。
 */
SceneManager.initNwjs = function() {
    if (Utils.isNwjs()) {
        var gui = require('nw.gui');
        var win = gui.Window.get();
        if (process.platform === 'darwin' && !win.menu) {
            var menubar = new gui.Menu({ type: 'menubar' });
            var option = { hideEdit: true, hideWindow: true };
            menubar.createMacBuiltin('Game', option);
            win.menu = menubar;
        }
    }
};

/**
 * プラグインの検査。
 */
SceneManager.checkPluginErrors = function() {
    PluginManager.checkErrors();
};

/**
 * エラーハンドラを準備。
 */
SceneManager.setupErrorHandlers = function() {
    window.addEventListener('error', this.onError.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
};

/**
 * アップデートを要求。
 */
SceneManager.requestUpdate = function() {
    if (!this._stopped) {
        requestAnimationFrame(this.update.bind(this));
    }
};

/**
 * フレーム毎のアップデート。
 */
SceneManager.update = function() {
    try {
        this.tickStart();
        if (Utils.isMobileSafari()) {
            this.updateInputData();
        }
        this.updateManagers();
        this.updateMain();
        this.tickEnd();
    } catch (e) {
        this.catchException(e);
    }
};

/**
 * 終了。
 */
SceneManager.terminate = function() {
    window.close();
};

/**
 * エラーハンドラ。
 * @param  {Event} e エラーイベント
 */
SceneManager.onError = function(e) {
    console.error(e.message);
    console.error(e.filename, e.lineno);
    try {
        this.stop();
        Graphics.printError('Error', e.message);
        AudioManager.stopAll();
    } catch (e2) {
    }
};

/**
 * キー押下イベントハンドラ。ここではリロード(F5)とデバッグウィンドウ(F8)の制御を行なっている。
 * @param  {KeyboardEvent} event
 */
SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
        case 116:   // F5
            if (Utils.isNwjs()) {
                location.reload();
            }
            break;
        case 119:   // F8
            if (Utils.isNwjs() && Utils.isOptionValid('test')) {
                require('nw.gui').Window.get().showDevTools();
            }
            break;
        }
    }
};

/**
 * 例外を受け取るハンドラ。
 * @param  {Event} e
 */
SceneManager.catchException = function(e) {
    if (e instanceof Error) {
        Graphics.printError(e.name, e.message);
        console.error(e.stack);
    } else {
        Graphics.printError('UnknownError', e);
    }
    AudioManager.stopAll();
    this.stop();
};

/**
 * @todo この用語の意味が分かったら教えてください
 */
SceneManager.tickStart = function() {
    Graphics.tickStart();
};

/**
 * @todo この用語の意味が分かったら教えてください
 */
SceneManager.tickEnd = function() {
    Graphics.tickEnd();
};

/**
 * 入力データのアップデート。
 */
SceneManager.updateInputData = function() {
    Input.update();
    TouchInput.update();
};

/**
 * 主要部分のアップデート。
 */
SceneManager.updateMain = function() {
    if (Utils.isMobileSafari()) {
        this.changeScene();
        this.updateScene();
    } else {
        var newTime = this._getTimeInMsWithoutMobileSafari();
        var fTime = (newTime - this._currentTime) / 1000;
        if (fTime > 0.25) fTime = 0.25;
        this._currentTime = newTime;
        this._accumulator += fTime;
        while (this._accumulator >= this._deltaTime) {
            this.updateInputData();
            this.changeScene();
            this.updateScene();
            this._accumulator -= this._deltaTime;
        }
    }
    this.renderScene();
    this.requestUpdate();
};

/**
 * マネージャのアップデート。
 */
SceneManager.updateManagers = function() {
    ImageManager.update();
};

/**
 * シーンの切り替え。
 */
SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();
            this._scene.detachReservation();
            this._previousClass = this._scene.constructor;
        }
        this._scene = this._nextScene;
        if (this._scene) {
            this._scene.attachReservation();
            this._scene.create();
            this._nextScene = null;
            this._sceneStarted = false;
            this.onSceneCreate();
        }
        if (this._exiting) {
            this.terminate();
        }
    }
};

/**
 * シーンのアップデート。
 */
SceneManager.updateScene = function() {
    if (this._scene) {
        if (!this._sceneStarted && this._scene.isReady()) {
            this._scene.start();
            this._sceneStarted = true;
            this.onSceneStart();
        }
        if (this.isCurrentSceneStarted()) {
            this._scene.update();
        }
    }
};

/**
 * シーンの描画。
 */
SceneManager.renderScene = function() {
    if (this.isCurrentSceneStarted()) {
        Graphics.render(this._scene);
    } else if (this._scene) {
        this.onSceneLoading();
    }
};

/**
 * シーンが生成された時に呼ばれるハンドラ。
 */
SceneManager.onSceneCreate = function() {
    Graphics.startLoading();
};

/**
 * シーンが開始された時に呼ばれるハンドラ。
 */
SceneManager.onSceneStart = function() {
    Graphics.endLoading();
};

/**
 * シーンが読み込まれる時に呼ばれるハンドラ。
 */
SceneManager.onSceneLoading = function() {
    Graphics.updateLoading();
};

/**
 * シーンの変更中か。
 * @returns {Boolean}
 */
SceneManager.isSceneChanging = function() {
    return this._exiting || !!this._nextScene;
};

/**
 * シーンの実行中か。
 * @returns {Boolean}
 */
SceneManager.isCurrentSceneBusy = function() {
    return this._scene && this._scene.isBusy();
};

/**
 * 現在のシーンが開始されているか。
 * @returns {Boolean}
 */
SceneManager.isCurrentSceneStarted = function() {
    return this._scene && this._sceneStarted;
};

/**
 * 指定したシーンが次のシーンか。
 * @param {Scene_Base} sceneClass
 * @returns {Boolean}
 */
SceneManager.isNextScene = function(sceneClass) {
    return this._nextScene && this._nextScene.constructor === sceneClass;
};

/**
 * 指定したシーンが前のシーンか。
 * @param {Scene_Base} sceneClass
 * @returns {Boolean}
 */
SceneManager.isPreviousScene = function(sceneClass) {
    return this._previousClass === sceneClass;
};

/**
 * 指定したシーンに遷移。
 * @param  {Object} sceneClass
 */
SceneManager.goto = function(sceneClass) {
    if (sceneClass) {
        this._nextScene = new sceneClass();
    }
    if (this._scene) {
        this._scene.stop();
    }
};

/**
 * 指定したシーンに遷移し履歴を残す。
 * @param  {Scene_Base} sceneClass
 */
SceneManager.push = function(sceneClass) {
    this._stack.push(this._scene.constructor);
    this.goto(sceneClass);
};

/**
 * 履歴からシーンを取り出して遷移。
 */
SceneManager.pop = function() {
    if (this._stack.length > 0) {
        this.goto(this._stack.pop());
    } else {
        this.exit();
    }
};

/**
 * シーン遷移を終了。
 */
SceneManager.exit = function() {
    this.goto(null);
    this._exiting = true;
};

/**
 * 履歴を消去。
 */
SceneManager.clearStack = function() {
    this._stack = [];
};

/**
 * シーン遷移を停止。
 */
SceneManager.stop = function() {
    this._stopped = true;
};

/**
 * 次のシーンの準備。
 */
SceneManager.prepareNextScene = function() {
    this._nextScene.prepare.apply(this._nextScene, arguments);
};

/**
 * スナップショットを返す。
 * @returns {Bitmap}
 */
SceneManager.snap = function() {
    return Bitmap.snap(this._scene);
};

/**
 * 背景用に(ぼかした)スナップショットを生成。
 */
SceneManager.snapForBackground = function() {
    this._backgroundBitmap = this.snap();
    this._backgroundBitmap.blur();
};

/**
 * 生成された背景用に(ぼかした)スナップショットを返す。
 * @returns {Bitmap}
 */
SceneManager.backgroundBitmap = function() {
    return this._backgroundBitmap;
};

/**
 * 停止状態から復帰。
 */
SceneManager.resume = function() {
    this._stopped = false;
    this.requestUpdate();
    if (!Utils.isMobileSafari()) {
        this._currentTime = this._getTimeInMsWithoutMobileSafari();
        this._accumulator = 0;
    }
};




/**
 * The static class that manages battle progress.
 * @class BattleManager
 * 
 * @prop {String} _phase [static]
 * @prop {Boolean} _canEscape [static] [static]
 * @prop {Boolean} _canLose [static]
 * @prop {Boolean} _battleTest [static]
 * @prop {Function} _eventCallback [static]
 * @prop {Boolean} _preemptive [static]
 * @prop {Boolean} _surprise [static]
 * @prop {Number} _actorIndex [static]
 * @prop {Game_Battler} _actionForcedBattler [static]
 * @prop {MV.AudioParameters} _mapBgm [static]
 * @prop {MV.AudioParameters} _mapBgs [static]
 * @prop {Array<Game_Battler>} _actionBattlers [static]
 * @prop {Game_Battler} _subject [static]
 * @prop {Game_Action} _action [static]
 * @prop {Array<Game_Battler>} _targets [static]
 * @prop {Window_BattleLog} _logWindow [static]
 * @prop {Window_BattleStatus} _statusWindow [static]
 * @prop {Spriteset_Battle} _spriteset [static]
 * @prop {Number} _escapeRatio [static]
 * @prop {Boolean} _escaped [static]
 * @prop {MV.BattleRewards} _rewards [static]
 */
function BattleManager() {
    throw new Error('This is a static class');
}

/**
 * @param  {Number} troopId
 * @param  {Boolean} canEscape
 * @param  {Boolean} canLose
 */
BattleManager.setup = function(troopId, canEscape, canLose) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(troopId);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();
};

/**
 * 
 */
BattleManager.initMembers = function() {
    this._phase = 'init';
    this._canEscape = false;
    this._canLose = false;
    this._battleTest = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._mapBgm = null;
    this._mapBgs = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._logWindow = null;
    this._statusWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
    this._turnForced = false;
};

/**
 * @returns {Boolean}
 */
BattleManager.isBattleTest = function() {
    return this._battleTest;
};

/**
 * @param  {Boolean} battleTest
 */
BattleManager.setBattleTest = function(battleTest) {
    this._battleTest = battleTest;
};

/**
 * @param  {Function} callback
 */
BattleManager.setEventCallback = function(callback) {
    this._eventCallback = callback;
};

/**
 * @param  {Window_BattleLog} logWindow
 */
BattleManager.setLogWindow = function(logWindow) {
    this._logWindow = logWindow;
};

/**
 * @param  {Window_BattleStatus} statusWindow
 */
BattleManager.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
};

/**
 * @param  {Spriteset_Battle} spriteset
 */
BattleManager.setSpriteset = function(spriteset) {
    this._spriteset = spriteset;
};

/**
 * 
 */
BattleManager.onEncounter = function() {
    this._preemptive = (Math.random() < this.ratePreemptive());
    this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
};

BattleManager.ratePreemptive = function() {
    return $gameParty.ratePreemptive($gameTroop.agility());
};

/**
 * @returns {Number}
 */
BattleManager.rateSurprise = function() {
    return $gameParty.rateSurprise($gameTroop.agility());
};

/**
 * 
 */
BattleManager.saveBgmAndBgs = function() {
    this._mapBgm = AudioManager.saveBgm();
    this._mapBgs = AudioManager.saveBgs();
};

/**
 * 
 */
BattleManager.playBattleBgm = function() {
    AudioManager.playBgm($gameSystem.battleBgm());
    AudioManager.stopBgs();
};

/**
 * 
 */
BattleManager.playVictoryMe = function() {
    AudioManager.playMe($gameSystem.victoryMe());
};

/**
 * 
 */
BattleManager.playDefeatMe = function() {
    AudioManager.playMe($gameSystem.defeatMe());
};

/**
 * 
 */
BattleManager.replayBgmAndBgs = function() {
    if (this._mapBgm) {
        AudioManager.replayBgm(this._mapBgm);
    } else {
        AudioManager.stopBgm();
    }
    if (this._mapBgs) {
        AudioManager.replayBgs(this._mapBgs);
    }
};

/**
 * 
 */
BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};

/**
 * 
 */
BattleManager.update = function() {
    if (!this.isBusy() && !this.updateEvent()) {
        switch (this._phase) {
        case 'start':
            this.startInput();
            break;
        case 'turn':
            this.updateTurn();
            break;
        case 'action':
            this.updateAction();
            break;
        case 'turnEnd':
            this.updateTurnEnd();
            break;
        case 'battleEnd':
            this.updateBattleEnd();
            break;
        }
    }
};

/**
 * @returns {Boolean}
 */
BattleManager.updateEvent = function() {
    switch (this._phase) {
        case 'start':
        case 'turn':
        case 'turnEnd':
            if (this.isActionForced()) {
                this.processForcedAction();
                return true;
            } else {
                return this.updateEventMain();
            }
    }
    return this.checkAbort();
};

/**
 * @returns {Boolean}
 */
BattleManager.updateEventMain = function() {
    $gameTroop.updateInterpreter();
    $gameParty.requestMotionRefresh();
    if ($gameTroop.isEventRunning() || this.checkBattleEnd()) {
        return true;
    }
    $gameTroop.setupBattleEvent();
    if ($gameTroop.isEventRunning() || SceneManager.isSceneChanging()) {
        return true;
    }
    return false;
};

/**
 * @returns {Boolean}
 */
BattleManager.isBusy = function() {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
            this._logWindow.isBusy());
};

/**
 * @returns {Boolean}
 */
BattleManager.isInputting = function() {
    return this._phase === 'input';
};

/**
 * @returns {Boolean}
 */
BattleManager.isInTurn = function() {
    return this._phase === 'turn';
};

/**
 * @returns {Boolean}
 */
BattleManager.isTurnEnd = function() {
    return this._phase === 'turnEnd';
};

/**
 * @returns {Boolean}
 */
BattleManager.isAborting = function() {
    return this._phase === 'aborting';
};

/**
 * @returns {Boolean}
 */
BattleManager.isBattleEnd = function() {
    return this._phase === 'battleEnd';
};

/**
 * @returns {Boolean}
 */
BattleManager.canEscape = function() {
    return this._canEscape;
};

/**
 * @returns {Boolean}
 */
BattleManager.canLose = function() {
    return this._canLose;
};

/**
 * @returns {Boolean}
 */
BattleManager.isEscaped = function() {
    return this._escaped;
};

/**
 * @returns {Game_Actor}
 */
BattleManager.actor = function() {
    return this._actorIndex >= 0 ? $gameParty.members()[this._actorIndex] : null;
};

/**
 * 
 */
BattleManager.clearActor = function() {
    this.changeActor(-1, '');
};

/**
 * @param  {Number} newActorIndex
 * @param  {String} lastActorActionState
 */
BattleManager.changeActor = function(newActorIndex, lastActorActionState) {
    var lastActor = this.actor();
    this._actorIndex = newActorIndex;
    var newActor = this.actor();
    if (lastActor) {
        lastActor.setActionState(lastActorActionState);
    }
    if (newActor) {
        newActor.setActionState('inputting');
    }
};

/**
 * 
 */
BattleManager.startBattle = function() {
    this._phase = 'start';
    $gameSystem.onBattleStart();
    $gameParty.onBattleStart();
    $gameTroop.onBattleStart();
    this.displayStartMessages();
};

/**
 * 
 */
BattleManager.displayStartMessages = function() {
    $gameTroop.enemyNames().forEach(function(name) {
        $gameMessage.add(TextManager.emerge.format(name));
    });
    if (this._preemptive) {
        $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
    } else if (this._surprise) {
        $gameMessage.add(TextManager.surprise.format($gameParty.name()));
    }
};

/**
 * 
 */
BattleManager.startInput = function() {
    this._phase = 'input';
    $gameParty.makeActions();
    $gameTroop.makeActions();
    this.clearActor();
    if (this._surprise || !$gameParty.canInput()) {
        this.startTurn();
    }
};

/**
 * @returns Game_Action
 */
BattleManager.inputtingAction = function() {
    return this.actor() ? this.actor().inputtingAction() : null;
};

/**
 * 
 */
BattleManager.selectNextCommand = function() {
    do {
        if (!this.actor() || !this.actor().selectNextCommand()) {
            this.changeActor(this._actorIndex + 1, 'waiting');
            if (this._actorIndex >= $gameParty.size()) {
                this.startTurn();
                break;
            }
        }
    } while (!this.actor().canInput());
};

/**
 * 
 */
BattleManager.selectPreviousCommand = function() {
    do {
        if (!this.actor() || !this.actor().selectPreviousCommand()) {
            this.changeActor(this._actorIndex - 1, 'undecided');
            if (this._actorIndex < 0) {
                return;
            }
        }
    } while (!this.actor().canInput());
};

/**
 * 
 */
BattleManager.refreshStatus = function() {
    this._statusWindow.refresh();
};

/**
 * 
 */
BattleManager.startTurn = function() {
    this._phase = 'turn';
    this.clearActor();
    $gameTroop.increaseTurn();
    this.makeActionOrders();
    $gameParty.requestMotionRefresh();
    this._logWindow.startTurn();
};

/**
 * 
 */
BattleManager.updateTurn = function() {
    $gameParty.requestMotionRefresh();
    if (!this._subject) {
        this._subject = this.getNextSubject();
    }
    if (this._subject) {
        this.processTurn();
    } else {
        this.endTurn();
    }
};

/**
 * 
 */
BattleManager.processTurn = function() {
    var subject = this._subject;
    var action = subject.currentAction();
    if (action) {
        action.prepare();
        if (action.isValid()) {
            this.startAction();
        }
        subject.removeCurrentAction();
    } else {
        subject.onAllActionsEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(subject);
        this._logWindow.displayCurrentState(subject);
        this._logWindow.displayRegeneration(subject);
        this._subject = this.getNextSubject();
    }
};

/**
 * 
 */
BattleManager.endTurn = function() {
    this._phase = 'turnEnd';
    this._preemptive = false;
    this._surprise = false;
    this.allBattleMembers().forEach(function(battler) {
        battler.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(battler);
        this._logWindow.displayRegeneration(battler);
    }, this);
    if (this.isForcedTurn()) {
        this._turnForced = false;
    }
};

/**
 * @returns {Boolean}
 */
BattleManager.isForcedTurn = function () {
    return this._turnForced;
};

/**
 * 
 */
BattleManager.updateTurnEnd = function() {
    this.startInput();
};

/**
 * @return {Game_Battler}
 */
BattleManager.getNextSubject = function() {
    for (;;) {
        var battler = this._actionBattlers.shift();
        if (!battler) {
            return null;
        }
        if (battler.isBattleMember() && battler.isAlive()) {
            return battler;
        }
    }
};

/**
 * @return {Array<Game_Battler>}
 */
BattleManager.allBattleMembers = function() {
    return $gameParty.members().concat($gameTroop.members());
};

/**
 * 
 */
BattleManager.makeActionOrders = function() {
    var battlers = [];
    if (!this._surprise) {
        battlers = battlers.concat($gameParty.members());
    }
    if (!this._preemptive) {
        battlers = battlers.concat($gameTroop.members());
    }
    battlers.forEach(function(battler) {
        battler.makeSpeed();
    });
    battlers.sort(function(a, b) {
        return b.speed() - a.speed();
    });
    this._actionBattlers = battlers;
};

/**
 * 
 */
BattleManager.startAction = function() {
    var subject = this._subject;
    var action = subject.currentAction();
    var targets = action.makeTargets();
    this._phase = 'action';
    this._action = action;
    this._targets = targets;
    subject.useItem(action.item());
    this._action.applyGlobal();
    this.refreshStatus();
    this._logWindow.startAction(subject, action, targets);
};

/**
 * 
 */
BattleManager.updateAction = function() {
    var target = this._targets.shift();
    if (target) {
        this.invokeAction(this._subject, target);
    } else {
        this.endAction();
    }
};

/**
 * 
 */
BattleManager.endAction = function() {
    this._logWindow.endAction(this._subject);
    this._phase = 'turn';
};


/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} target
 */
BattleManager.invokeAction = function(subject, target) {
    this._logWindow.push('pushBaseLine');
    if (Math.random() < this._action.itemCnt(target)) {
        this.invokeCounterAttack(subject, target);
    } else if (Math.random() < this._action.itemMrf(target)) {
        this.invokeMagicReflection(subject, target);
    } else {
        this.invokeNormalAction(subject, target);
    }
    subject.setLastTarget(target);
    this._logWindow.push('popBaseLine');
    this.refreshStatus();
};


/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} target
 */
BattleManager.invokeNormalAction = function(subject, target) {
    var realTarget = this.applySubstitute(target);
    this._action.apply(realTarget);
    this._logWindow.displayActionResults(subject, realTarget);
};


/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} target
 */
BattleManager.invokeCounterAttack = function(subject, target) {
    var action = new Game_Action(target);
    action.setAttack();
    action.apply(subject);
    this._logWindow.displayCounter(target);
    this._logWindow.displayActionResults(target, subject);
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} target
 */
BattleManager.invokeMagicReflection = function(subject, target) {
	this._action._reflectionTarget = target;
    this._logWindow.displayReflection(target);
    this._action.apply(subject);
    this._logWindow.displayActionResults(target, subject);
};

/**
 * @param  {Game_Battler} target
 * @returns {Game_Battler}
 */
BattleManager.applySubstitute = function(target) {
    if (this.checkSubstitute(target)) {
        var substitute = target.friendsUnit().substituteBattler();
        if (substitute && target !== substitute) {
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
        }
    }
    return target;
};

/**
 * @param  {Game_Battler} target
 * @returns {Boolean}
 */
BattleManager.checkSubstitute = function(target) {
    return target.isDying() && !this._action.isCertainHit();
};

/**
 * @returns {Boolean}
 */
BattleManager.isActionForced = function() {
    return !!this._actionForcedBattler;
};

/**
 * @param  {Game_Battler} battler
 */
BattleManager.forceAction = function(battler) {
    this._actionForcedBattler = battler;
    var index = this._actionBattlers.indexOf(battler);
    if (index >= 0) {
        this._actionBattlers.splice(index, 1);
    }
};

/**
 * 
 */
BattleManager.processForcedAction = function() {
    if (this._actionForcedBattler) {
        this._turnForced = true;
        this._subject = this._actionForcedBattler;
        this._actionForcedBattler = null;
        this.startAction();
        this._subject.removeCurrentAction();
    }
};

/**
 * 
 */
BattleManager.abort = function() {
    this._phase = 'aborting';
};

/**
 * @returns {Boolean}
 */
BattleManager.checkBattleEnd = function() {
    if (this._phase) {
        if (this.checkAbort()) {
            return true;
        } else if ($gameParty.isAllDead()) {
            this.processDefeat();
            return true;
        } else if ($gameTroop.isAllDead()) {
            this.processVictory();
            return true;
        }
    }
    return false;
};

/**
 * @returns {Boolean}
 */
BattleManager.checkAbort = function() {
    if ($gameParty.isEmpty() || this.isAborting()) {
        SoundManager.playEscape();
        this._escaped = true;
        this.processAbort();
    }
    return false;
};

/**
 * 
 */
BattleManager.processVictory = function() {
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
    this.playVictoryMe();
    this.replayBgmAndBgs();
    this.makeRewards();
    this.displayVictoryMessage();
    this.displayRewards();
    this.gainRewards();
    this.endBattle(0);
};

/**
 * @returns {Boolean}
 */
BattleManager.processEscape = function() {
    $gameParty.performEscape();
    SoundManager.playEscape();
    var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
    if (success) {
        this.displayEscapeSuccessMessage();
        this._escaped = true;
        this.processAbort();
    } else {
        this.displayEscapeFailureMessage();
        this._escapeRatio += 0.1;
        $gameParty.clearActions();
        this.startTurn();
    }
    return success;
};

/**
 * 
 */
BattleManager.processAbort = function() {
    $gameParty.removeBattleStates();
    this.replayBgmAndBgs();
    this.endBattle(1);
};

/**
 * 
 */
BattleManager.processDefeat = function() {
    this.displayDefeatMessage();
    this.playDefeatMe();
    if (this._canLose) {
        this.replayBgmAndBgs();
    } else {
        AudioManager.stopBgm();
    }
    this.endBattle(2);
};

/**
 * @param  {Number} result
 */
BattleManager.endBattle = function(result) {
    this._phase = 'battleEnd';
    if (this._eventCallback) {
        this._eventCallback(result);
    }
    if (result === 0) {
        $gameSystem.onBattleWin();
    } else if (this._escaped) {
        $gameSystem.onBattleEscape();
    }
};

/**
 * 
 */
BattleManager.updateBattleEnd = function() {
    if (this.isBattleTest()) {
        AudioManager.stopBgm();
        SceneManager.exit();
    } else if (!this._escaped && $gameParty.isAllDead()) {
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        } else {
            SceneManager.goto(Scene_Gameover);
        }
    } else {
        SceneManager.pop();
    }
    this._phase = null;
};

/**
 * 
 */
BattleManager.makeRewards = function() {
    this._rewards = {};
    this._rewards.gold = $gameTroop.goldTotal();
    this._rewards.exp = $gameTroop.expTotal();
    this._rewards.items = $gameTroop.makeDropItems();
};

/**
 * 
 */
BattleManager.displayVictoryMessage = function() {
    $gameMessage.add(TextManager.victory.format($gameParty.name()));
};

/**
 * 
 */
BattleManager.displayDefeatMessage = function() {
    $gameMessage.add(TextManager.defeat.format($gameParty.name()));
};

/**
 * 
 */
BattleManager.displayEscapeSuccessMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
};

/**
 * 
 */
BattleManager.displayEscapeFailureMessage = function() {
    $gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
    $gameMessage.add('\\.' + TextManager.escapeFailure);
};

/**
 * 
 */
BattleManager.displayRewards = function() {
    this.displayExp();
    this.displayGold();
    this.displayDropItems();
};

/**
 * 
 */
BattleManager.displayExp = function() {
    var exp = this._rewards.exp;
    if (exp > 0) {
        var text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add('\\.' + text);
    }
};

/**
 * 
 */
BattleManager.displayGold = function() {
    var gold = this._rewards.gold;
    if (gold > 0) {
        $gameMessage.add('\\.' + TextManager.obtainGold.format(gold));
    }
};

/**
 * 
 */
BattleManager.displayDropItems = function() {
    var items = this._rewards.items;
    if (items.length > 0) {
        $gameMessage.newPage();
        items.forEach(function(item) {
            $gameMessage.add(TextManager.obtainItem.format(item.name));
        });
    }
};

/**
 * 
 */
BattleManager.gainRewards = function() {
    this.gainExp();
    this.gainGold();
    this.gainDropItems();
};

/**
 * 
 */
BattleManager.gainExp = function() {
    var exp = this._rewards.exp;
    $gameParty.allMembers().forEach(function(actor) {
        actor.gainExp(exp);
    });
};

/**
 * 
 */
BattleManager.gainGold = function() {
    $gameParty.gainGold(this._rewards.gold);
};

/**
 * 
 */
BattleManager.gainDropItems = function() {
    var items = this._rewards.items;
    items.forEach(function(item) {
        $gameParty.gainItem(item, 1);
    });
};




/**
 * プラグインを管理する静的クラス。
 * @class PluginManager
 * 
 * @prop {String} _path [static] プラグインフォルダのパス
 * @prop {Array<String>} _scripts [static]
 * @prop {Array<String>} _errorUrls [static]
 * @prop {Object} _parameters [static] {[key: string]: {[key: string]: string}}
 */
function PluginManager() {
    throw new Error('This is a static class');
}

PluginManager._path         = 'js/plugins/';
PluginManager._scripts      = [];
PluginManager._errorUrls    = [];
PluginManager._parameters   = {};

/**
 * プラグインの初期化。
 * @param  {Array<MV.PluginSettings>} plugins
 */
PluginManager.setup = function(plugins) {
    plugins.forEach(function(plugin) {
        if (plugin.status && !this._scripts.contains(plugin.name)) {
            this.setParameters(plugin.name, plugin.parameters);
            this.loadScript(plugin.name + '.js');
            this._scripts.push(plugin.name);
        }
    }, this);
};

/**
 * エラーを検査。
 * @memberof PluginManager
 */
PluginManager.checkErrors = function() {
    var url = this._errorUrls.shift();
    if (url) {
        throw new Error('Failed to load: ' + url);
    }
};

/**
 * 指定プラグイン名に対応するパラメータをオブジェクトで返す。
 * 本体ヘルプの「プラグイン仕様」の項目も参照のこと。
 * @param  {String} name プラグイン名(英字の大小を区別しない)
 * @returns {Object} パラメータのキーと値の組み合わせ
 */
PluginManager.parameters = function(name) {
    return this._parameters[name.toLowerCase()] || {};
};

/**
 * パラメータを設定。
 * @param  {String} name プラグイン名(英字の大小を区別しない)
 * @param  {Object} parameters パラメータのキーと値の組み合わせ
 */
PluginManager.setParameters = function(name, parameters) {
    this._parameters[name.toLowerCase()] = parameters;
};

/**
 * 外部スクリプトファイルを読み込む。
 * @param  {String} name スクリプトファイル名
 */
PluginManager.loadScript = function(name) {
    var url = this._path + name;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = false;
    script.onerror = this.onError.bind(this);
    script._url = url;
    document.body.appendChild(script);
};

/**
 *   エラーハンドラ。
 * @param  {Event} e 
 */
PluginManager.onError = function(e) {
    this._errorUrls.push(e.target._url);
};
