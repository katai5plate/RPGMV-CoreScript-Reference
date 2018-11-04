//=============================================================================
// rpg_objects.js v1.5.2
//=============================================================================

/**
 * The game object class for temporary data that is not included in save data.
 * Use as global variable  {@link $gameTemp}
 * @class Game_Temp
 * 
 * @prop {Boolean} _isPlaytest
 * @prop {Number} _commonEventId
 * @prop {Number} _destinationX
 * @prop {Number} _destinationY
 */
function Game_Temp() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Temp.prototype.initialize = function() {
    this._isPlaytest = Utils.isOptionValid('test');
    this._commonEventId = 0;
    this._destinationX = null;
    this._destinationY = null;
};

    /**
     * Determines if the game is in Play Test mode.
     * @returns {Boolean} 
     */
Game_Temp.prototype.isPlaytest = function() {
    return this._isPlaytest;
};
    /**
     * Reserves the given commonEventId to be processed later.
     * @param {Number} commonEventId 
     */
Game_Temp.prototype.reserveCommonEvent = function(commonEventId) {
    this._commonEventId = commonEventId;
};
    /**
     * Clears the current reserved common event.
     */
Game_Temp.prototype.clearCommonEvent = function() {
    this._commonEventId = 0;
};
    /**
     * Returns true if a common event has been reserved.
     * @returns {Boolean} 
     */
Game_Temp.prototype.isCommonEventReserved = function() {
    return this._commonEventId > 0;
};
    /**
     * Returns common event data from the database.
     * @returns {*} 
     */
Game_Temp.prototype.reservedCommonEvent = function() {
    return $dataCommonEvents[this._commonEventId];
};
    /**
     * Sets the destination of the player for movement.
     * @param {Number} x 
     * @param {Number} y 
     */
Game_Temp.prototype.setDestination = function(x, y) {
    this._destinationX = x;
    this._destinationY = y;
};
    /**
     * Clears the destination of movement for the player.
     */
Game_Temp.prototype.clearDestination = function() {
    this._destinationX = null;
    this._destinationY = null;
};
    /**
     * Determines if the destination for the player to move to is valid.
     * @returns {Boolean} 
     */
Game_Temp.prototype.isDestinationValid = function() {
    return this._destinationX !== null;
};
    /**
     * Returns the x coordinate of the destination.
     * @returns {Number} 
     */
Game_Temp.prototype.destinationX = function() {
    return this._destinationX;
};
    /**
     * Returns the y coordinate of the destination.
     * @returns {Number} 
     */
Game_Temp.prototype.destinationY = function() {
    return this._destinationY;
};




/**
 * システムデータを扱うクラス。
 * 大域変数 {@link $gameSystem} を介して扱う。
 * @class Game_System
 * 
 * @prop {Boolean} _saveEnabled
 * @prop {Boolean} _menuEnabled
 * @prop {Boolean} _encounterEnabled
 * @prop {Boolean} _formationEnabled
 * @prop {Number} _battleCount
 * @prop {Number} _winCount
 * @prop {Number} _escapeCount
 * @prop {Number} _saveCount
 * @prop {Number} _versionId
 * @prop {Number} _framesOnSave
 * @prop {RPG.AudioFile} _bgmOnSave
 * @prop {RPG.AudioFile} _bgsOnSave
 * @prop {Array<Number>} _windowTone
 * @prop {RPG.AudioFile} _battleBgm
 * @prop {RPG.AudioFile} _victoryMe
 * @prop {RPG.AudioFile} _defeatMe
 * @prop {RPG.AudioFile} _savedBgm
 * @prop {RPG.AudioFile} _walkingBgm
 */
function Game_System() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_System.prototype.initialize = function() {
    this._saveEnabled = true;
    this._menuEnabled = true;
    this._encounterEnabled = true;
    this._formationEnabled = true;
    this._battleCount = 0;
    this._winCount = 0;
    this._escapeCount = 0;
    this._saveCount = 0;
    this._versionId = 0;
    this._framesOnSave = 0;
    this._bgmOnSave = null;
    this._bgsOnSave = null;
    this._windowTone = null;
    this._battleBgm = null;
    this._victoryMe = null;
    this._defeatMe = null;
    this._savedBgm = null;
    this._walkingBgm = null;
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isJapanese = function() {
    return $dataSystem.locale.match(/^ja/);
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isChinese = function() {
    return $dataSystem.locale.match(/^zh/);
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isKorean = function() {
    return $dataSystem.locale.match(/^ko/);
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isCJK = function() {
    return $dataSystem.locale.match(/^(ja|zh|ko)/);
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isRussian = function() {
    return $dataSystem.locale.match(/^ru/);
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isSideView = function() {
    return $dataSystem.optSideView;
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isSaveEnabled = function() {
    return this._saveEnabled;
};

/**
 * Disables the ability to save the game.
 */
Game_System.prototype.disableSave = function() {
    this._saveEnabled = false;
};

/**
 * Enables the ability to save the game.
 */
Game_System.prototype.enableSave = function() {
    this._saveEnabled = true;
};

/**
 * Returns true if the menu is enabled.
 * @returns {Boolean} 
 */
Game_System.prototype.isMenuEnabled = function() {
    return this._menuEnabled;
};

/**
 * Disables the menu from being accessed.
 */
Game_System.prototype.disableMenu = function() {
    this._menuEnabled = false;
};

/**
 * Enables the menu to be accessed.
 */
Game_System.prototype.enableMenu = function() {
    this._menuEnabled = true;
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isEncounterEnabled = function() {
    return this._encounterEnabled;
};

/**
 * Returns true if the player can encounter enemies.
 */
Game_System.prototype.disableEncounter = function() {
    this._encounterEnabled = false;
};

/**
 * 
 */
Game_System.prototype.enableEncounter = function() {
    this._encounterEnabled = true;
};

/**
 * @returns {Boolean}
 */
Game_System.prototype.isFormationEnabled = function() {
    return this._formationEnabled;
};

/**
 * Disables the use of the formation command in the menu.
 */
Game_System.prototype.disableFormation = function() {
    this._formationEnabled = false;
};

/**
 * Enables the use of the formation command in the menu.
 */
Game_System.prototype.enableFormation = function() {
    this._formationEnabled = true;
};

/**
 * Returns the number of battles the player has participated in.
 * @returns {Number} 
 */
Game_System.prototype.battleCount = function() {
    return this._battleCount;
};

/**
 * Returns the number of the wins the player has gained in battle.
 * 
 * @returns {Number} 
 */
Game_System.prototype.winCount = function() {
    return this._winCount;
};

/**
 * Returns the number of battles the player has escaped from in battle.
 * @returns {Number} 
 */
Game_System.prototype.escapeCount = function() {
    return this._escapeCount;
};

/**
 * Returns the number of saves the player has made in game.
 * @returns {Number} 
 */
Game_System.prototype.saveCount = function() {
    return this._saveCount;
};

/**
 * Returns the version id represented in the database.
 * @returns {Number} 
 */
Game_System.prototype.versionId = function() {
    return this._versionId;
};

/**
 * Returns the tone of the window in the database.
 * 
 * @returns {Array<Number>} 
 */
Game_System.prototype.windowTone = function() {
    return this._windowTone || $dataSystem.windowTone;
};

/**
 * Sets the window tone, given an array
 * of rgb. Example: [0, 255, 255].
 * @param {Array<Number>} value 
 */
Game_System.prototype.setWindowTone = function(value) {
    this._windowTone = value;
};

/**
 * Returns the current battle background music.
 * @returns {RPG.AudioFile} 
 */
Game_System.prototype.battleBgm = function() {
    return this._battleBgm || $dataSystem.battleBgm;
};

/**
 * Sets the battle background music.
 * @param {RPG.AudioFile} value 
 */
Game_System.prototype.setBattleBgm = function(value) {
    this._battleBgm = value;
};

/**
 * Returns the victory musical effect.
 * @returns {RPG.AudioFile} 
 */
Game_System.prototype.victoryMe = function() {
    return this._victoryMe || $dataSystem.victoryMe;
};

/**
 * Sets the victory musical effect.
 * @param {RPG.AudioFile} value 
 */
Game_System.prototype.setVictoryMe = function(value) {
    this._victoryMe = value;
};

/**
 * Returns the defeat musical effect.
 * @returns {RPG.AudioFile}
 */
Game_System.prototype.defeatMe = function() {
    return this._defeatMe || $dataSystem.defeatMe;
};

/**
 * Sets the defeat musical effect.
 * @param {RPG.AudioFile} value
 */
Game_System.prototype.setDefeatMe = function(value) {
    this._defeatMe = value;
};

/**
 * 
 */
Game_System.prototype.onBattleStart = function() {
    this._battleCount++;
};

/**
 * 
 */
Game_System.prototype.onBattleWin = function() {
    this._winCount++;
};

/**
 * 
 */
Game_System.prototype.onBattleEscape = function() {
    this._escapeCount++;
};

/**
 * 
 */
Game_System.prototype.onBeforeSave = function() {
    this._saveCount++;
    this._versionId = $dataSystem.versionId;
    this._framesOnSave = Graphics.frameCount;
    this._bgmOnSave = AudioManager.saveBgm();
    this._bgsOnSave = AudioManager.saveBgs();
};

/**
 * 
 */
Game_System.prototype.onAfterLoad = function() {
    Graphics.frameCount = this._framesOnSave;
    AudioManager.playBgm(this._bgmOnSave);
    AudioManager.playBgs(this._bgsOnSave);
};

/**
 * Returns the total play time.
 * @returns {Number} 
 */
Game_System.prototype.playtime = function() {
    return Math.floor(Graphics.frameCount / 60);
};

/**
 * @returns {String} 
 */
Game_System.prototype.playtimeText = function() {
    var hour = Math.floor(this.playtime() / 60 / 60);
    var min = Math.floor(this.playtime() / 60) % 60;
    var sec = this.playtime() % 60;
    return hour.padZero(2) + ':' + min.padZero(2) + ':' + sec.padZero(2);
};

/**
 * Saves background music to the game system object.
 */
Game_System.prototype.saveBgm = function() {
    this._savedBgm = AudioManager.saveBgm();
};

/**
 * Replays the saved background music.
 */
Game_System.prototype.replayBgm = function() {
    if (this._savedBgm) {
        AudioManager.replayBgm(this._savedBgm);
    }
};

/**
 * Saves the walking background music.
 */
Game_System.prototype.saveWalkingBgm = function() {
    this._walkingBgm = AudioManager.saveBgm();
};

/**
 * Replays the saved walking background music.
 */
Game_System.prototype.replayWalkingBgm = function() {
    if (this._walkingBgm) {
        AudioManager.playBgm(this._walkingBgm);
    }
};

/**
 * Saves the second walking bgm from the map data.
 */
Game_System.prototype.saveWalkingBgm2 = function() {
	this._walkingBgm = $dataMap.bgm;
};




/**
 * The game object class for the timer.
 * Use as global variable  {@link $gameTimer}
 * @class Game_Timer
 * 
 * @prop {Number} _frames
 * @prop {Boolean} _working
 */
function Game_Timer() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Timer.prototype.initialize = function() {
    this._frames = 0;
    this._working = false;
};

    /**
     * Updates the game timer.
     * 
     * @param {Boolean} sceneActive 
     * @memberof Game_Timer
     */
Game_Timer.prototype.update = function(sceneActive) {
    if (sceneActive && this._working && this._frames > 0) {
        this._frames--;
        if (this._frames === 0) {
            this.onExpire();
        }
    }
};

    /**
     * Starts the timer with the specified number of frames as count.
     * 
     * @param {Number} count 
     * @memberof Game_Timer
     */
Game_Timer.prototype.start = function(count) {
    this._frames = count;
    this._working = true;
};

    /**
     * Stops the timer.
     * 
     * @memberof Game_Timer
     */
Game_Timer.prototype.stop = function() {
    this._working = false;
};

    /**
     * Returns true if the timer is working and counting down.
     * 
     * @returns {Boolean} 
     * @memberof Game_Timer
     */
Game_Timer.prototype.isWorking = function() {
    return this._working;
};

    /**
     * Returns the number of seconds on the timer.
     * 
     * @returns {Number} 
     * @memberof Game_Timer
     */
Game_Timer.prototype.seconds = function() {
    return Math.floor(this._frames / 60);
};

    /**
     * Handler for when the time expires on the timer.
     * 
     * @memberof Game_Timer
     */
Game_Timer.prototype.onExpire = function() {
    BattleManager.abort();
};



/**
 * The game object class for the state of the message window that displays text or selections, etc.
 * Use as global variable  {@link $gameMessage}
 * @class Game_Message
 * 
 * @prop {Array<String>} _texts
 * @prop {Array<String>} _choices
 * @prop {String} _faceName
 * @prop {Number} _faceIndex
 * @prop {Number} _background
 * @prop {Number} _positionType
 * @prop {Number} _choiceDefaultType
 * @prop {Number} _choiceCancelType
 * @prop {Number} _choiceBackground
 * @prop {Number} _choicePostionType
 * @prop {Number} _numInputVariableId
 * @prop {Number} _numInputMaxDigits
 * @prop {Number} _itemChoiceVariableId
 * @prop {Number} _itemChoiceItypeId
 * @prop {Boolean} _scrollMode
 * @prop {Number} _scrollSpeed
 * @prop {Boolean} _scrollNoFast
 * @prop {Function} _choiceCallback
 */
function Game_Message() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Message.prototype.initialize = function() {
    this.clear();
};

/**
 * 
 */
Game_Message.prototype.clear = function() {
    this._texts = [];
    this._choices = [];
    this._faceName = '';
    this._faceIndex = 0;
    this._background = 0;
    this._positionType = 2;
    this._choiceDefaultType = 0;
    this._choiceCancelType = 0;
    this._choiceBackground = 0;
    this._choicePositionType = 2;
    this._numInputVariableId = 0;
    this._numInputMaxDigits = 0;
    this._itemChoiceVariableId = 0;
    this._itemChoiceItypeId = 0;
    this._scrollMode = false;
    this._scrollSpeed = 2;
    this._scrollNoFast = false;
    this._choiceCallback = null;
};

/**
 * 
 */
Game_Message.prototype.choices = function() {
    return this._choices;
};

    /**
     * Returns the name of the face image used for the message.
     * 
     * @returns {String} 
     * @memberof Game_Message
     */
Game_Message.prototype.faceName = function() {
    return this._faceName;
};

    /**
     * Returns the face index within the face image to display the
     * correct face.
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.faceIndex = function() {
    return this._faceIndex;
};

    /**
     * Returns the background associated with the message;
     * this is the background
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.background = function() {
    return this._background;
};

    /**
     * Returns the current position type of the message window.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.positionType = function() {
    return this._positionType;
};

/**
 * 
 */
Game_Message.prototype.choiceDefaultType = function() {
    return this._choiceDefaultType;
};

/**
 * 
 */
Game_Message.prototype.choiceCancelType = function() {
    return this._choiceCancelType;
};


    /**
     * Returns the background type of the choice window.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.choiceBackground = function() {
    return this._choiceBackground;
};

    /**
     * Returns the position of the choice window.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.choicePositionType = function() {
    return this._choicePositionType;
};

    /**
     * Returns the number input variable id.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.numInputVariableId = function() {
    return this._numInputVariableId;
};

    /**
     * Returns the number input maximum digits.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.numInputMaxDigits = function() {
    return this._numInputMaxDigits;
};

    /**
     * Returns the item choice variable id.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.itemChoiceVariableId = function() {
    return this._itemChoiceVariableId;
};

    /**
     * Returns the item choice item type id.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.itemChoiceItypeId = function() {
    return this._itemChoiceItypeId;
};

    /**
     * Returns true if the scroll mode is set to true.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.scrollMode = function() {
    return this._scrollMode;
};

    /**
     * Returns the scroll speed.
     * 
     * @returns {Number} 
     * @memberof Game_Message
     */
Game_Message.prototype.scrollSpeed = function() {
    return this._scrollSpeed;
};

    /**
     * Returns true if the scroll is set to not being fast.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.scrollNoFast = function() {
    return this._scrollNoFast;
};

    /**
     * Adds text to the game message object.
     * 
     * @param {String} text 
     * @memberof Game_Message
     */
Game_Message.prototype.add = function(text) {
    this._texts.push(text);
};

/**
 * @param  {String} faceName
 * @param {Number} faceIndex
 */
Game_Message.prototype.setFaceImage = function(faceName, faceIndex) {
    this._faceName = faceName;
    this._faceIndex = faceIndex;
};

    /**
     * Sets the background of the message window;
     * options are 0 (fully opaque), 1 (transparent), 2 (invisible background).
     * The default is 0.
     * @param {Number} background 
     * @memberof Game_Message
     */
Game_Message.prototype.setBackground = function(background) {
    this._background = background;
};

    /**
     * Sets the position of the message window;
     * default is 2.
     * @param {Number} positionType 
     * @memberof Game_Message
     */
Game_Message.prototype.setPositionType = function(positionType) {
    this._positionType = positionType;
};

    /**
     * Sets the choices within the choice window;
     * sets the default and cancel choices for the window.
     * @param {Array<String>} choices 
     * @param {Number} defaultType 
     * @param {Number} cancelType 
     * @memberof Game_Message
     */
Game_Message.prototype.setChoices = function(choices, defaultType, cancelType) {
    this._choices = choices;
    this._choiceDefaultType = defaultType;
    this._choiceCancelType = cancelType;
};

/**
 * @param {Number} background
 */
Game_Message.prototype.setChoiceBackground = function(background) {
    this._choiceBackground = background;
};

    /**
     * Sets the position of the choice window associated with the
     * message window.
     * @param {Number} positionType 
     * @memberof Game_Message
     */
Game_Message.prototype.setChoicePositionType = function(positionType) {
    this._choicePositionType = positionType;
};

    /**
     * Sets the number input and associates it with a variable id;
     * the max number of digits can also be set.
     * @param {Number} variableId 
     * @param {Number} maxDigits 
     * @memberof Game_Message
     */
Game_Message.prototype.setNumberInput = function(variableId, maxDigits) {
    this._numInputVariableId = variableId;
    this._numInputMaxDigits = maxDigits;
};

    /**
     * Sets the choice and associates it with a variable id;
     * sets the itemtype id associated with the choice.
     * @param {Number} variableId 
     * @param {Number} itemType 
     * @memberof Game_Message
     */
Game_Message.prototype.setItemChoice = function(variableId, itemType) {
    this._itemChoiceVariableId = variableId;
    this._itemChoiceItypeId = itemType;
};

    /**
     * Sets the scroll speed of the message window;
     * disable fast movement if noFast is set to true.
     * @param {Number} speed 
     * @param {Boolean} noFast 
     * @memberof Game_Message
     */
Game_Message.prototype.setScroll = function(speed, noFast) {
    this._scrollMode = true;
    this._scrollSpeed = speed;
    this._scrollNoFast = noFast;
};

    /**
     * Sets a callback to be associated with a specific choice;
     * a callback is a JavaScript function that will be run when the
     * choice is selected.
     * @param {Function} callback 
     * @memberof Game_Message
     */
Game_Message.prototype.setChoiceCallback = function(callback) {
    this._choiceCallback = callback;
};

/**
 * @param {Number} n
 */
Game_Message.prototype.onChoice = function(n) {
    if (this._choiceCallback) {
        this._choiceCallback(n);
        this._choiceCallback = null;
    }
};

    /**
     * Returns true if the game message object has text.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.hasText = function() {
    return this._texts.length > 0;
};

    /**
     * Returns true if the game message object has a set of choices.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.isChoice = function() {
    return this._choices.length > 0;
};

    /**
     * Returns true if the game message object has a number input attached.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.isNumberInput = function() {
    return this._numInputVariableId > 0;
};

    /**
     * Returns true if the game message object has an item choice attached.
     * 
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.isItemChoice = function() {
    return this._itemChoiceVariableId > 0;
};

    /**
     * Returns true if the game message object has text, choices, number input,
     * or item choice.
     * @returns {Boolean} 
     * @memberof Game_Message
     */
Game_Message.prototype.isBusy = function() {
    return (this.hasText() || this.isChoice() ||
            this.isNumberInput() || this.isItemChoice());
};

    /**
     * Creates a new page for the text within the message window.
     * 
     * @memberof Game_Message
     */
Game_Message.prototype.newPage = function() {
    if (this._texts.length > 0) {
        this._texts[this._texts.length - 1] += '\f';
    }
};

    /**
     * Returns all of the text contained within the message.
     * 
     * @returns {String} 
     * @memberof Game_Message
     */
Game_Message.prototype.allText = function() {
    return this._texts.join('\n');
};




/**
 * The game object class for switches.
 * Use as global variable  {@link $gameSwitches}
 * @class Game_Switches
 * 
 * @prop {Array<Boolean>} _data
 */
function Game_Switches() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Switches.prototype.initialize = function() {
    this.clear();
};

/**
 * 
 */
Game_Switches.prototype.clear = function() {
    this._data = [];
};

/**
 * @param {Number} switchId
 */
Game_Switches.prototype.value = function(switchId) {
    return !!this._data[switchId];
};

/**
 * @param {Number} switchId
 * @param {Number} value
 */
Game_Switches.prototype.setValue = function(switchId, value) {
    if (switchId > 0 && switchId < $dataSystem.switches.length) {
        this._data[switchId] = value;
        this.onChange();
    }
};

/**
 * 
 */
Game_Switches.prototype.onChange = function() {
    $gameMap.requestRefresh();
};




/**
 * The game object class for variables.
 * Use as global variable  {@link $gameVariables}
 * @class Game_Variables
 * 
 * @prop {Array<Number>} _data
 */
function Game_Variables() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Variables.prototype.initialize = function() {
    this.clear();
};

/**
 * 
 */
Game_Variables.prototype.clear = function() {
    this._data = [];
};

/**
 * @param {Number} variableId
 * @returns {Number}
 */
Game_Variables.prototype.value = function(variableId) {
    return this._data[variableId] || 0;
};

/**
 * @param {Number} variableId
 * @param {Number} value
 */
Game_Variables.prototype.setValue = function(variableId, value) {
    if (variableId > 0 && variableId < $dataSystem.variables.length) {
        if (typeof value === 'number') {
            value = Math.floor(value);
        }
        this._data[variableId] = value;
        this.onChange();
    }
};

/**
 * 
 */
Game_Variables.prototype.onChange = function() {
    $gameMap.requestRefresh();
};




/**
 * The game object class for self switches.
 * Use as global variable  {@link $gameSelfSwitches}
 * @class Game_SelfSwitches
 * 
 * @prop {Object} _data {key: Array<any>}
 */
function Game_SelfSwitches() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_SelfSwitches.prototype.initialize = function() {
    this.clear();
};

    /**
     * Clears the array of data for the game's self switches.
     * 
     * @memberof Game_SelfSwitches
     */
Game_SelfSwitches.prototype.clear = function() {
    this._data = {};
};

    /**
     * Returns the value of the switch at the current key;
     * the value is a boolean (true or false).
     * @param {Array<*>} key 
     * @returns {Boolean} 
     * @memberof Game_SelfSwitches
     */
Game_SelfSwitches.prototype.value = function(key) {
    return !!this._data[key];
};

    /**
     * Sets the value of the key of the respected self switch.
     * 
     * @param {Array<*>} key 
     * @param {Boolean} value 
     * @memberof Game_SelfSwitches
     */
Game_SelfSwitches.prototype.setValue = function(key, value) {
    if (value) {
        this._data[key] = true;
    } else {
        delete this._data[key];
    }
    this.onChange();
};

/**
 * 
 */
Game_SelfSwitches.prototype.onChange = function() {
    $gameMap.requestRefresh();
};




/**
 * The game object class for screen effect data, such as
 * changes in color tone and flashes.
 * Use as global variable  {@link $gameScreen}
 * @class Game_Screen
 * 
 * @prop {Number} _shake
 * @prop {Number} _shakePower
 * @prop {Number} _shakeSpeed
 * @prop {Number} _shakeDuration
 * @prop {Number} _shakeDirection
 * @prop {Number} _zoomX _zoomX property of the game screen.
 * @prop {Number} _zoomY _zoomY property of the game screen.
 * @prop {Number} _zoomScale
 * @prop {Number} _zoomScaleTarget
 * @prop {Number} _zoomDuration
 * @prop {String} _weatherType
 * @prop {Number} _weatherPower
 * @prop {Number} _weatherPowerTarget
 * @prop {Number} _weatherDuration
 * @prop {Number} _brightness The _brightness property of the game screen;
     * returned when calling the brightness method.
 * @prop {Number} _fadeOutDuration
 * @prop {Number} _fadeInDuration
 * @prop {Array<Number>} _tone
 * @prop {Array<Number>} _toneTarget
 * @prop {Number} _toneDuration
 * @prop {Array<Number>} _flashColor
 * @prop {Number} _flashDuration
 * @prop {Array<Game_Picture>} _pictures The array of Game_Pictures that are 
     * attached to the game screen.
 */
function Game_Screen() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Screen.prototype.initialize = function() {
    this.clear();
};

/**
 * 
 */
Game_Screen.prototype.clear = function() {
    this.clearFade();
    this.clearTone();
    this.clearFlash();
    this.clearShake();
    this.clearZoom();
    this.clearWeather();
    this.clearPictures();
};

    /**
     * Handler for when the battle starts in game; prepares
     * the screen for the battle scene.
     * @memberof Game_Screen
     */
Game_Screen.prototype.onBattleStart = function() {
    this.clearFade();
    this.clearFlash();
    this.clearShake();
    this.clearZoom();
    this.eraseBattlePictures();
};

    /**
     * Returns the brightness of the game screen.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.brightness = function() {
    return this._brightness;
};

/**
 * @returns {Array<Number>}
 */
Game_Screen.prototype.tone = function() {
    return this._tone;
};


/**
 * @returns {Array<Number>}
 */
Game_Screen.prototype.flashColor = function() {
    return this._flashColor;
};


/**
 * @returns {Number}
 */
Game_Screen.prototype.shake = function() {
    return this._shake;
};

    /**
     * Returns the  zoom x coordinate of the screen.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.zoomX = function() {
    return this._zoomX;
};

    /**
     * Returns the zoom y coordiante of the screen.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.zoomY = function() {
    return this._zoomY;
};

    /**
     * Returns the zoom scale of the screen.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.zoomScale = function() {
    return this._zoomScale;
};

    /**
     * Returns the current weather type.
     * 
     * @returns {String} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.weatherType = function() {
    return this._weatherType;
};

    /**
     * Returns the weather power.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.weatherPower = function() {
    return this._weatherPower;
};

    /**
     * Returns the specified picture given the picture id.
     * 
     * @param {Number} pictureId 
     * @returns {Game_Picture} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.picture = function(pictureId) {
    var realPictureId = this.realPictureId(pictureId);
    return this._pictures[realPictureId];
};

    /**
     * Returns the real picture id, given the picture id.
     * 
     * @param {Number} pictureId 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.realPictureId = function(pictureId) {
    if ($gameParty.inBattle()) {
        return pictureId + this.maxPictures();
    } else {
        return pictureId;
    }
};

    /**
     * Clears the screen fade.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearFade = function() {
    this._brightness = 255;
    this._fadeOutDuration = 0;
    this._fadeInDuration = 0;
};

    /**
     * Clears the screen tone.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearTone = function() {
    this._tone = [0, 0, 0, 0];
    this._toneTarget = [0, 0, 0, 0];
    this._toneDuration = 0;
};

    /**
     * Clears the screen flash.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearFlash = function() {
    this._flashColor = [0, 0, 0, 0];
    this._flashDuration = 0;
};

    /**
     * Clears the screen shake.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearShake = function() {
    this._shakePower = 0;
    this._shakeSpeed = 0;
    this._shakeDuration = 0;
    this._shakeDirection = 1;
    this._shake = 0;
};

    /**
     * Clears the screen zoom.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearZoom = function() {
    this._zoomX = 0;
    this._zoomY = 0;
    this._zoomScale = 1;
    this._zoomScaleTarget = 1;
    this._zoomDuration = 0;
};

    /**
     * Clears the screen weather.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearWeather = function() {
    this._weatherType = 'none';
    this._weatherPower = 0;
    this._weatherPowerTarget = 0;
    this._weatherDuration = 0;
};

    /**
     * Clears the pictures set on the game screen.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.clearPictures = function() {
    this._pictures = [];
};

    /**
     * Erases the battle pictures.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.eraseBattlePictures = function() {
    this._pictures = this._pictures.slice(0, this.maxPictures() + 1);
};

    /**
     * Returns the maximum number of pictures set on the game screen.
     * 
     * @returns {Number} 
     * @memberof Game_Screen
     */
Game_Screen.prototype.maxPictures = function() {
    return 100;
};


/**
 * @param {Number} duration
 */
Game_Screen.prototype.startFadeOut = function(duration) {
    this._fadeOutDuration = duration;
    this._fadeInDuration = 0;
};

/**
 * @param {Number} duration
 */
Game_Screen.prototype.startFadeIn = function(duration) {
    this._fadeInDuration = duration;
    this._fadeOutDuration = 0;
};

/**
 * @param  {Array<Number>} tone
 * @param {Number} duration
 */
Game_Screen.prototype.startTint = function(tone, duration) {
    this._toneTarget = tone.clone();
    this._toneDuration = duration;
    if (this._toneDuration === 0) {
        this._tone = this._toneTarget.clone();
    }
};

/**
* @param  {Array<Number>} color
* @param {Number} duration
*/
Game_Screen.prototype.startFlash = function(color, duration) {
    this._flashColor = color.clone();
    this._flashDuration = duration;
};


/**
 * @param {Number} power
 * @param {Number} speed
 * @param {Number} duration
 */
Game_Screen.prototype.startShake = function(power, speed, duration) {
    this._shakePower = power;
    this._shakeSpeed = speed;
    this._shakeDuration = duration;
};


/**
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scale
 * @param {Number} duration
 */
Game_Screen.prototype.startZoom = function(x, y, scale, duration) {
    this._zoomX = x;
    this._zoomY = y;
    this._zoomScaleTarget = scale;
    this._zoomDuration = duration;
};

/**
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scale
 */
Game_Screen.prototype.setZoom = function(x, y, scale) {
    this._zoomX = x;
    this._zoomY = y;
    this._zoomScale = scale;
};

/**
 * @param  {String} type
 * @param {Number} power
 * @param {Number} duration
 */
Game_Screen.prototype.changeWeather = function(type, power, duration) {
    if (type !== 'none' || duration === 0) {
        this._weatherType = type;
    }
    this._weatherPowerTarget = type === 'none' ? 0 : power;
    this._weatherDuration = duration;
    if (duration === 0) {
        this._weatherPower = this._weatherPowerTarget;
    }
};

    /**
     * Updates the game screen.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.update = function() {
    this.updateFadeOut();
    this.updateFadeIn();
    this.updateTone();
    this.updateFlash();
    this.updateShake();
    this.updateZoom();
    this.updateWeather();
    this.updatePictures();
};

    /**
     * Updates the screen fade out.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateFadeOut = function() {
    if (this._fadeOutDuration > 0) {
        var d = this._fadeOutDuration;
        this._brightness = (this._brightness * (d - 1)) / d;
        this._fadeOutDuration--;
    }
};

    /**
     * Updates the screen fade in.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateFadeIn = function() {
    if (this._fadeInDuration > 0) {
        var d = this._fadeInDuration;
        this._brightness = (this._brightness * (d - 1) + 255) / d;
        this._fadeInDuration--;
    }
};

    /**
     * Updates the screen tone.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateTone = function() {
    if (this._toneDuration > 0) {
        var d = this._toneDuration;
        for (var i = 0; i < 4; i++) {
            this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
        }
        this._toneDuration--;
    }
};

    /**
     * Update the screen flash.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateFlash = function() {
    if (this._flashDuration > 0) {
        var d = this._flashDuration;
        this._flashColor[3] *= (d - 1) / d;
        this._flashDuration--;
    }
};

    /**
     * Update the screen shake.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateShake = function() {
    if (this._shakeDuration > 0 || this._shake !== 0) {
        var delta = (this._shakePower * this._shakeSpeed * this._shakeDirection) / 10;
        if (this._shakeDuration <= 1 && this._shake * (this._shake + delta) < 0) {
            this._shake = 0;
        } else {
            this._shake += delta;
        }
        if (this._shake > this._shakePower * 2) {
            this._shakeDirection = -1;
        }
        if (this._shake < - this._shakePower * 2) {
            this._shakeDirection = 1;
        }
        this._shakeDuration--;
    }
};

    /**
     * Update the screen zoom.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateZoom = function() {
    if (this._zoomDuration > 0) {
        var d = this._zoomDuration;
        var t = this._zoomScaleTarget;
        this._zoomScale = (this._zoomScale * (d - 1) + t) / d;
        this._zoomDuration--;
    }
};

    /**
     * Update the screen weather.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updateWeather = function() {
    if (this._weatherDuration > 0) {
        var d = this._weatherDuration;
        var t = this._weatherPowerTarget;
        this._weatherPower = (this._weatherPower * (d - 1) + t) / d;
        this._weatherDuration--;
        if (this._weatherDuration === 0 && this._weatherPowerTarget === 0) {
            this._weatherType = 'none';
        }
    }
};

    /**
     * Update the screen pictures.
     * 
     * @memberof Game_Screen
     */
Game_Screen.prototype.updatePictures = function() {
    this._pictures.forEach(function(picture) {
        if (picture) {
            picture.update();
        }
    });
};

/**
 * 
 */
Game_Screen.prototype.startFlashForDamage = function() {
    this.startFlash([255, 0, 0, 128], 8);
};

/**
 * @param {Number} pictureId
 * @param  {String} name
 * @param {Number} origin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} opacity
 * @param {Number} blendMode
 */
Game_Screen.prototype.showPicture = function(pictureId, name, origin, x, y,
                                             scaleX, scaleY, opacity, blendMode) {
    var realPictureId = this.realPictureId(pictureId);
    var picture = new Game_Picture();
    picture.show(name, origin, x, y, scaleX, scaleY, opacity, blendMode);
    this._pictures[realPictureId] = picture;
};

/**
 * @param {Number} pictureId
 * @param {Number} origin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} opacity
 * @param {Number} blendMode
 * @param {Number} duration
 */
Game_Screen.prototype.movePicture = function(pictureId, origin, x, y, scaleX,
                                             scaleY, opacity, blendMode, duration) {
    var picture = this.picture(pictureId);
    if (picture) {
        picture.move(origin, x, y, scaleX, scaleY, opacity, blendMode, duration);
    }
};


/**
 * @param {Number} pictureId
 * @param {Number} speed
 */
Game_Screen.prototype.rotatePicture = function(pictureId, speed) {
    var picture = this.picture(pictureId);
    if (picture) {
        picture.rotate(speed);
    }
};


/**
 * @param {Number} pictureId
 * @param  {Array<Number>} tone
 * @param {Number} duration
 */
Game_Screen.prototype.tintPicture = function(pictureId, tone, duration) {
    var picture = this.picture(pictureId);
    if (picture) {
        picture.tint(tone, duration);
    }
};

    /**
     * Erases a picture from the screen given the respected picture id.
     * 
     * @param {Number} pictureId 
     * @memberof Game_Screen
     */
Game_Screen.prototype.erasePicture = function(pictureId) {
    var realPictureId = this.realPictureId(pictureId);
    this._pictures[realPictureId] = null;
};




/**
 * The game object class for a picture.
 * @class Game_Picture
 * 
 * @prop {String} _name
 * @prop {Number} _origin
 * @prop {Number} _x
 * @prop {Number} _y
 * @prop {Number} _scaleX
 * @prop {Number}  _scaleY
 * @prop {Number} _opacity
 * @prop {Number} _blendMode
 * @prop {Number} _targetX
 * @prop {Number} _targetY
 * @prop {Number} _targetScaleX
 * @prop {Number}  _targetScaleY
 * @prop {Number} _targetOpacity
 * @prop {Number} _duration
 * @prop {Array<Number>} _tone
 * @prop {Array<Number>} _toneTarget
 * @prop {Number} _toneDuration
 * @prop {Number}  _angle
 * @prop {Number}  _rotationSpeed
 */
function Game_Picture() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Picture.prototype.initialize = function() {
    this.initBasic();
    this.initTarget();
    this.initTone();
    this.initRotation();
};

/**
     * Returns the name of the game picture.
     * @returns {String} 
     * @memberof Game_Picture
     */
  Game_Picture.prototype.name = function() {
    return this._name;
};

    /**
     * Returns the origin of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.origin = function() {
    return this._origin;
};

    /**
     * Returns the picture x coordinate.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.x = function() {
    return this._x;
};

    /**
     * Returns the picture y coordinate.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.y = function() {
    return this._y;
};

    /**
     * Returns x scale of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.scaleX = function() {
    return this._scaleX;
};

    /**
     * Returns the y scale of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.scaleY = function() {
    return this._scaleY;
};

    /**
     * Returns the opacity of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.opacity = function() {
    return this._opacity;
};

    /**
     * Returns the blend mode of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.blendMode = function() {
    return this._blendMode;
};

    /**
     * Returns the tone of the game picture.
     * 
     * @returns {Array<Number>} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.tone = function() {
    return this._tone;
};

    /**
     * Returns the angle of the game picture.
     * 
     * @returns {Number} 
     * @memberof Game_Picture
     */
Game_Picture.prototype.angle = function() {
    return this._angle;
};

/**
 * 
 */
Game_Picture.prototype.initBasic = function() {
    this._name = '';
    this._origin = 0;
    this._x = 0;
    this._y = 0;
    this._scaleX = 100;
    this._scaleY = 100;
    this._opacity = 255;
    this._blendMode = 0;
};

/**
 * 
 */
Game_Picture.prototype.initTarget = function() {
    this._targetX = this._x;
    this._targetY = this._y;
    this._targetScaleX = this._scaleX;
    this._targetScaleY = this._scaleY;
    this._targetOpacity = this._opacity;
    this._duration = 0;
};

/**
 * 
 */
Game_Picture.prototype.initTone = function() {
    this._tone = null;
    this._toneTarget = null;
    this._toneDuration = 0;
};

/**
 * 
 */
Game_Picture.prototype.initRotation = function() {
    this._angle = 0;
    this._rotationSpeed = 0;
};

/**
 * @param  {String} name
 * @param {Number} origin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} opacity
 * @param {Number} blendMode
 */
Game_Picture.prototype.show = function(name, origin, x, y, scaleX,
                                       scaleY, opacity, blendMode) {
    this._name = name;
    this._origin = origin;
    this._x = x;
    this._y = y;
    this._scaleX = scaleX;
    this._scaleY = scaleY;
    this._opacity = opacity;
    this._blendMode = blendMode;
    this.initTarget();
    this.initTone();
    this.initRotation();
};

/**
 * @param {Number} origin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} opacity
 * @param {Number} blendMode
 * @param {Number} duration
 */
Game_Picture.prototype.move = function(origin, x, y, scaleX, scaleY,
                                       opacity, blendMode, duration) {
    this._origin = origin;
    this._targetX = x;
    this._targetY = y;
    this._targetScaleX = scaleX;
    this._targetScaleY = scaleY;
    this._targetOpacity = opacity;
    this._blendMode = blendMode;
    this._duration = duration;
};

/**
 * @param {Number} speed
 */
Game_Picture.prototype.rotate = function(speed) {
    this._rotationSpeed = speed;
};

/**
 * @param  {Array<Number>} tone
 * @param {Number} duration
 */
Game_Picture.prototype.tint = function(tone, duration) {
    if (!this._tone) {
        this._tone = [0, 0, 0, 0];
    }
    this._toneTarget = tone.clone();
    this._toneDuration = duration;
    if (this._toneDuration === 0) {
        this._tone = this._toneTarget.clone();
    }
};

/**
     * Erases the game picture.
     * 
     * @memberof Game_Picture
     */
Game_Picture.prototype.erase = function() {
    this._name = '';
    this._origin = 0;
    this.initTarget();
    this.initTone();
    this.initRotation();
};

    /**
     * Updates the game picture.
     * 
     * @memberof Game_Picture
     */
Game_Picture.prototype.update = function() {
    this.updateMove();
    this.updateTone();
    this.updateRotation();
};

    /**
     * Updates the movement of the game picture.
     * 
     * @memberof Game_Picture
     */
Game_Picture.prototype.updateMove = function() {
    if (this._duration > 0) {
        var d = this._duration;
        this._x = (this._x * (d - 1) + this._targetX) / d;
        this._y = (this._y * (d - 1) + this._targetY) / d;
        this._scaleX  = (this._scaleX  * (d - 1) + this._targetScaleX)  / d;
        this._scaleY  = (this._scaleY  * (d - 1) + this._targetScaleY)  / d;
        this._opacity = (this._opacity * (d - 1) + this._targetOpacity) / d;
        this._duration--;
    }
};

    /**
     * Updates the tone of the game picture.
     * 
     * @memberof Game_Picture
     */
Game_Picture.prototype.updateTone = function() {
    if (this._toneDuration > 0) {
        var d = this._toneDuration;
        for (var i = 0; i < 4; i++) {
            this._tone[i] = (this._tone[i] * (d - 1) + this._toneTarget[i]) / d;
        }
        this._toneDuration--;
    }
};

    /**
     * Updates the rotation of the game picture.
     * 
     * @memberof Game_Picture
     */
Game_Picture.prototype.updateRotation = function() {
    if (this._rotationSpeed !== 0) {
        this._angle += this._rotationSpeed / 2;
    }
};




/**
 * Game_Item
 * The game object class for handling skills, items, weapons. armor.
 * This is required, because the save data should not include the database object itself.
 * @class Game_Item
 * 
 * @prop {String} _dataClass
 * @prop {Number} _itemId
 */
function Game_Item() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Item.prototype.initialize = function(item) {
    this._dataClass = '';
    this._itemId = 0;
    if (item) {
        this.setObject(item);
    }
};

    /**
     * Returns true the item is a skill.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isSkill = function() {
    return this._dataClass === 'skill';
};

    /**
     * Returns true if the item is an item.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isItem = function() {
    return this._dataClass === 'item';
};

    /**
     * Returns true if the item is a usable item, similar to a potion.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isUsableItem = function() {
    return this.isSkill() || this.isItem();
};

    /**
     * Returns true if the item is a weapon.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isWeapon = function() {
    return this._dataClass === 'weapon';
};

    /**
     * Returns true if the item is an armor.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isArmor = function() {
    return this._dataClass === 'armor';
};

    /**
     * Returns true if the item is equippable (weapon or armor).
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isEquipItem = function() {
    return this.isWeapon() || this.isArmor();
};

    /**
     * Returns true if the item is 'null'.
     * 
     * @returns {Boolean} 
     * @memberof Game_Item
     */
Game_Item.prototype.isNull = function() {
    return this._dataClass === '';
};

    /**
     * Returns the current itemId.
     * 
     * @returns {Number} 
     * @memberof Game_Item
     */
Game_Item.prototype.itemId = function() {
    return this._itemId;
};

/**
 * @returns {RPG.BaseItem}
 */
Game_Item.prototype.object = function() {
    if (this.isSkill()) {
        return $dataSkills[this._itemId];
    } else if (this.isItem()) {
        return $dataItems[this._itemId];
    } else if (this.isWeapon()) {
        return $dataWeapons[this._itemId];
    } else if (this.isArmor()) {
        return $dataArmors[this._itemId];
    } else {
        return null;
    }
};

    /**
     * Sets the current item of the current Game_Item object.
     * 
     * @param {RPG.BaseItem} item 
     * @memberof Game_Item
     */
Game_Item.prototype.setObject = function(item) {
    if (DataManager.isSkill(item)) {
        this._dataClass = 'skill';
    } else if (DataManager.isItem(item)) {
        this._dataClass = 'item';
    } else if (DataManager.isWeapon(item)) {
        this._dataClass = 'weapon';
    } else if (DataManager.isArmor(item)) {
        this._dataClass = 'armor';
    } else {
        this._dataClass = '';
    }
    this._itemId = item ? item.id : 0;
};

/**
 * @param  {Boolean} isWeapon
 * @param {Number} itemId
 */
Game_Item.prototype.setEquip = function(isWeapon, itemId) {
    this._dataClass = isWeapon ? 'weapon' : 'armor';
    this._itemId = itemId;
};




/**
 * Game_Action
 * The game object class representing a battle action.
 * @class Game_Action
 * 
 * @prop {Number} EFFECT_RECOVER_HP [static]
 * @prop {Number} EFFECT_RECOVER_MP [static]
 * @prop {Number} EFFECT_GAIN_TP [static]
 * @prop {Number} EFFECT_ADD_STATE [static]
 * @prop {Number} EFFECT_REMOVE_STATE [static]
 * @prop {Number} EFFECT_ADD_BUFF [static]
 * @prop {Number} EFFECT_ADD_DEBUFF [static]
 * @prop {Number} EFFECT_REMOVE_BUFF [static]
 * @prop {Number} EFFECT_REMOVE_DEBUFF [static]
 * @prop {Number} EFFECT_SPECIAL [static]
 * @prop {Number} EFFECT_GROW [static]
 * @prop {Number} EFFECT_LEARN_SKILL [static]
 * @prop {Number} EFFECT_COMMON_EVENT [static]
 * @prop {Number} SPECIAL_EFFECT_ESCAPE [static]
 * @prop {Number} HITTYPE_CERTAIN [static]
 * @prop {Number} HITTYPE_PHYSICAL [static]
 * @prop {Number} HITTYPE_MAGICAL [static]
 * 
 * @prop {Number} _subjectActorId
 * @prop {Number} _subjectEnemyIndex
 * @prop {Number} _targetIndex
 * @prop {Boolean} _forcing
 * @prop {Game_Item} _item
 * 
 */
function Game_Action() {
    this.initialize.apply(this, arguments);
}

Game_Action.EFFECT_RECOVER_HP       = 11;
Game_Action.EFFECT_RECOVER_MP       = 12;
Game_Action.EFFECT_GAIN_TP          = 13;
Game_Action.EFFECT_ADD_STATE        = 21;
Game_Action.EFFECT_REMOVE_STATE     = 22;
Game_Action.EFFECT_ADD_BUFF         = 31;
Game_Action.EFFECT_ADD_DEBUFF       = 32;
Game_Action.EFFECT_REMOVE_BUFF      = 33;
Game_Action.EFFECT_REMOVE_DEBUFF    = 34;
Game_Action.EFFECT_SPECIAL          = 41;
Game_Action.EFFECT_GROW             = 42;
Game_Action.EFFECT_LEARN_SKILL      = 43;
Game_Action.EFFECT_COMMON_EVENT     = 44;
Game_Action.SPECIAL_EFFECT_ESCAPE   = 0;
Game_Action.HITTYPE_CERTAIN         = 0;
Game_Action.HITTYPE_PHYSICAL        = 1;
Game_Action.HITTYPE_MAGICAL         = 2;


    /**
     *  オブジェクト生成時の初期化。
     * @method initialize
     * @memberof Game_Action
     * @param  {Game_Battler} subject
     * @param  {Boolean} forcing
     */
Game_Action.prototype.initialize = function(subject, forcing) {
    this._subjectActorId = 0;
    this._subjectEnemyIndex = -1;
    this._forcing = forcing || false;
    this.setSubject(subject);
    this.clear();
};

/**
 */
Game_Action.prototype.clear = function() {
    this._item = new Game_Item();
    this._targetIndex = -1;
};

 /**
  * @param  {Game_Battler} subject
  */
Game_Action.prototype.setSubject = function(subject) {
    if (subject.isActor()) {
        this._subjectActorId = subject.actorId();
        this._subjectEnemyIndex = -1;
    } else {
        this._subjectEnemyIndex = subject.index();
        this._subjectActorId = 0;
    }
};

/**
 * @returns {Game_Battler}
 */
Game_Action.prototype.subject = function() {
    if (this._subjectActorId > 0) {
        return $gameActors.actor(this._subjectActorId);
    } else {
        return $gameTroop.members()[this._subjectEnemyIndex];
    }
};

/**
 * @returns {Game_Unit}
 */
Game_Action.prototype.friendsUnit = function() {
    return this.subject().friendsUnit();
};

/**
 * @returns {Game_Unit}
 */
Game_Action.prototype.opponentsUnit = function() {
    return this.subject().opponentsUnit();
};

/**
 * @param  {RPG.Enemy.Action} action
 */
Game_Action.prototype.setEnemyAction = function(action) {
    if (action) {
        this.setSkill(action.skillId);
    } else {
        this.clear();
    }
};

/**
 * 
 */
Game_Action.prototype.setAttack = function() {
    this.setSkill(this.subject().attackSkillId());
};

/**
 * 
 */
Game_Action.prototype.setGuard = function() {
    this.setSkill(this.subject().guardSkillId());
};

/**
 * @param {Number} skillId
 */
Game_Action.prototype.setSkill = function(skillId) {
    this._item.setObject($dataSkills[skillId]);
};

/**
 * @param {Number} itemId
 */
Game_Action.prototype.setItem = function(itemId) {
    this._item.setObject($dataItems[itemId]);
};

/**
 * @param  {RPG.UsableItem} object
 */
Game_Action.prototype.setItemObject = function(object) {
    this._item.setObject(object);
};

/**
 * @param {Number} targetIndex
 */
Game_Action.prototype.setTarget = function(targetIndex) {
    this._targetIndex = targetIndex;
};

/**
 * @return {RPG.UsableItem}
 */
Game_Action.prototype.item = function() {
    return this._item.object();
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isSkill = function() {
    return this._item.isSkill();
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isItem = function() {
    return this._item.isItem();
};

/**
 * @returns {Number}
 */
Game_Action.prototype.numRepeats = function() {
    var repeats = this.item().repeats;
    if (this.isAttack()) {
        repeats += this.subject().attackTimesAdd();
    }
    return Math.floor(repeats);
};

/**
 * @param  {Array<Number>} list
 * @returns {Boolean}
 */
Game_Action.prototype.checkItemScope = function(list) {
    return list.contains(this.item().scope);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForOpponent = function() {
    return this.checkItemScope([1, 2, 3, 4, 5, 6]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForFriend = function() {
    return this.checkItemScope([7, 8, 9, 10, 11]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForDeadFriend = function() {
    return this.checkItemScope([9, 10]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForUser = function() {
    return this.checkItemScope([11]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForOne = function() {
    return this.checkItemScope([1, 3, 7, 9, 11]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForRandom = function() {
    return this.checkItemScope([3, 4, 5, 6]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isForAll = function() {
    return this.checkItemScope([2, 8, 10]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.needsSelection = function() {
    return this.checkItemScope([1, 7, 9]);
};

/**
 * @returns {Number}
 */
Game_Action.prototype.numTargets = function() {
    return this.isForRandom() ? this.item().scope - 2 : 0;
};

/**
  * @param  {Array<Number>} list
 * @returns {Boolean}
 */
Game_Action.prototype.checkDamageType = function(list) {
    return list.contains(this.item().damage.type);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isHpEffect = function() {
    return this.checkDamageType([1, 3, 5]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isMpEffect = function() {
    return this.checkDamageType([2, 4, 6]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isDamage = function() {
    return this.checkDamageType([1, 2]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isRecover = function() {
    return this.checkDamageType([3, 4]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isDrain = function() {
    return this.checkDamageType([5, 6]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isHpRecover = function() {
    return this.checkDamageType([3]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isMpRecover = function() {
    return this.checkDamageType([4]);
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isCertainHit = function() {
    return this.item().hitType === Game_Action.HITTYPE_CERTAIN;
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isPhysical = function() {
    return this.item().hitType === Game_Action.HITTYPE_PHYSICAL;
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isMagical = function() {
    return this.item().hitType === Game_Action.HITTYPE_MAGICAL;
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isAttack = function() {
    return this.item() === $dataSkills[this.subject().attackSkillId()];
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isGuard = function() {
    return this.item() === $dataSkills[this.subject().guardSkillId()];
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isMagicSkill = function() {
    if (this.isSkill()) {
        return $dataSystem.magicSkills.contains(this.item().stypeId);
    } else {
        return false;
    }
};

/**
 * 
 */
Game_Action.prototype.decideRandomTarget = function() {
    var target;
    if (this.isForDeadFriend()) {
        target = this.friendsUnit().randomDeadTarget();
    } else if (this.isForFriend()) {
        target = this.friendsUnit().randomTarget();
    } else {
        target = this.opponentsUnit().randomTarget();
    }
    if (target) {
        this._targetIndex = target.index();
    } else {
        this.clear();
    }
};

/**
 * 
 */
Game_Action.prototype.setConfusion = function() {
    this.setAttack();
};

/**
 * 
 */
Game_Action.prototype.prepare = function() {
    if (this.subject().isConfused() && !this._forcing) {
        this.setConfusion();
    }
};

/**
 * @returns {Boolean}
 */
Game_Action.prototype.isValid = function() {
    return (this._forcing && this.item()) || this.subject().canUse(this.item());
};

/**
 * @returns {Number}
 */
Game_Action.prototype.speed = function() {
    var agi = this.subject().agi;
    var speed = agi + Math.randomInt(Math.floor(5 + agi / 4));
    if (this.item()) {
        speed += this.item().speed;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed();
    }
    return speed;
};

/**
 * @returns {Array<Game_Battler>}
 */
Game_Action.prototype.makeTargets = function() {
    var targets = [];
    if (!this._forcing && this.subject().isConfused()) {
        targets = [this.confusionTarget()];
    } else if (this.isForOpponent()) {
        targets = this.targetsForOpponents();
    } else if (this.isForFriend()) {
        targets = this.targetsForFriends();
    }
    return this.repeatTargets(targets);
};

/**
 * @param  {Array<Game_Battler>} targets
 * @returns {Array<Game_Battler>}
 */
Game_Action.prototype.repeatTargets = function(targets) {
    var repeatedTargets = [];
    var repeats = this.numRepeats();
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (target) {
            for (var j = 0; j < repeats; j++) {
                repeatedTargets.push(target);
            }
        }
    }
    return repeatedTargets;
};

/**
 * @returns {Game_Battler}
 */
Game_Action.prototype.confusionTarget = function() {
    switch (this.subject().confusionLevel()) {
    case 1:
        return this.opponentsUnit().randomTarget();
    case 2:
        if (Math.randomInt(2) === 0) {
            return this.opponentsUnit().randomTarget();
        }
        return this.friendsUnit().randomTarget();
    default:
        return this.friendsUnit().randomTarget();
    }
};

/**
 * @returns {Array<Game_Battler>}
 */
Game_Action.prototype.targetsForOpponents = function() {
    var targets = [];
    var unit = this.opponentsUnit();
    if (this.isForRandom()) {
        for (var i = 0; i < this.numTargets(); i++) {
            targets.push(unit.randomTarget());
        }
    } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        targets = unit.aliveMembers();
    }
    return targets;
};

/**
 * @returns {Array<Game_Battler>}
 */
Game_Action.prototype.targetsForFriends = function() {
    var targets = [];
    var unit = this.friendsUnit();
    if (this.isForUser()) {
        return [this.subject()];
    } else if (this.isForDeadFriend()) {
        if (this.isForOne()) {
            targets.push(unit.smoothDeadTarget(this._targetIndex));
        } else {
            targets = unit.deadMembers();
        }
    } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        targets = unit.aliveMembers();
    }
    return targets;
};

/**
 * @returns {Number}
 */
Game_Action.prototype.evaluate = function() {
    var value = 0;
    this.itemTargetCandidates().forEach(function(target) {
        var targetValue = this.evaluateWithTarget(target);
        if (this.isForAll()) {
            value += targetValue;
        } else if (targetValue > value) {
            value = targetValue;
            this._targetIndex = target.index();
        }
    }, this);
    value *= this.numRepeats();
    if (value > 0) {
        value += Math.random();
    }
    return value;
};

/**
 * @returns {Array<Game_Battler>}
 */
Game_Action.prototype.itemTargetCandidates = function() {
    if (!this.isValid()) {
        return [];
    } else if (this.isForOpponent()) {
        return this.opponentsUnit().aliveMembers();
    } else if (this.isForUser()) {
        return [this.subject()];
    } else if (this.isForDeadFriend()) {
        return this.friendsUnit().deadMembers();
    } else {
        return this.friendsUnit().aliveMembers();
    }
};
/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.evaluateWithTarget = function(target) {
    if (this.isHpEffect()) {
        var value = this.makeDamageValue(target, false);
        if (this.isForOpponent()) {
            return value / Math.max(target.hp, 1);
        } else {
            var recovery = Math.min(-value, target.mhp - target.hp);
            return recovery / target.mhp;
        }
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Boolean}
 */
Game_Action.prototype.testApply = function(target) {
    return (this.isForDeadFriend() === target.isDead() &&
            ($gameParty.inBattle() || this.isForOpponent() ||
            (this.isHpRecover() && target.hp < target.mhp) ||
            (this.isMpRecover() && target.mp < target.mmp) ||
            (this.hasItemAnyValidEffects(target))));
};

/**
 * @param  {Game_Battler} target
 * @returns {Boolean}
 */
Game_Action.prototype.hasItemAnyValidEffects = function(target) {
    return this.item().effects.some(function(effect) {
        return this.testItemEffect(target, effect);
    }, this);
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 * @returns {Boolean}
 */
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_RECOVER_HP:
        return target.hp < target.mhp || effect.value1 < 0 || effect.value2 < 0;
    case Game_Action.EFFECT_RECOVER_MP:
        return target.mp < target.mmp || effect.value1 < 0 || effect.value2 < 0;
    case Game_Action.EFFECT_ADD_STATE:
        return !target.isStateAffected(effect.dataId);
    case Game_Action.EFFECT_REMOVE_STATE:
        return target.isStateAffected(effect.dataId);
    case Game_Action.EFFECT_ADD_BUFF:
        return !target.isMaxBuffAffected(effect.dataId);
    case Game_Action.EFFECT_ADD_DEBUFF:
        return !target.isMaxDebuffAffected(effect.dataId);
    case Game_Action.EFFECT_REMOVE_BUFF:
        return target.isBuffAffected(effect.dataId);
    case Game_Action.EFFECT_REMOVE_DEBUFF:
        return target.isDebuffAffected(effect.dataId);
    case Game_Action.EFFECT_LEARN_SKILL:
        return target.isActor() && !target.isLearnedSkill(effect.dataId);
    default:
        return true;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.itemCnt = function(target) {
    if (this.isPhysical() && target.canMove()) {
        return target.cnt;
    } else {
        return 0;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.itemMrf = function(target) {
    if (this.isMagical()) {
        return target.mrf;
    } else {
        return 0;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.itemHit = function(target) {
    if (this.isPhysical()) {
        return this.item().successRate * 0.01 * this.subject().hit;
    } else {
        return this.item().successRate * 0.01;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.itemEva = function(target) {
    if (this.isPhysical()) {
        return target.eva;
    } else if (this.isMagical()) {
        return target.mev;
    } else {
        return 0;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.itemCri = function(target) {
    return this.item().damage.critical ? this.subject().cri * (1 - target.cev) : 0;
};

/**
 * @param  {Game_Battler} target
 */
Game_Action.prototype.apply = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = (result.used && Math.random() >= this.itemHit(target));
    result.evaded = (!result.missed && Math.random() < this.itemEva(target));
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if (result.isHit()) {
        if (this.item().damage.type > 0) {
            result.critical = (Math.random() < this.itemCri(target));
            var value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {Boolean} critical
 * @returns {Number}
 */
Game_Action.prototype.makeDamageValue = function(target, critical) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.evalDamageFormula = function(target) {
    try {
        var item = this.item();
        var a = this.subject();
        var b = target;
        var v = $gameVariables._data;
        var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
        var value = Math.max(eval(item.damage.formula), 0) * sign;
		if (isNaN(value)) value = 0;
		return value;
    } catch (e) {
        return 0;
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.calcElementRate = function(target) {
    if (this.item().damage.elementId < 0) {
        return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
        return target.elementRate(this.item().damage.elementId);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {Array<Number>} elements
 * @returns {Number}
 */
Game_Action.prototype.elementsMaxRate = function(target, elements) {
    if (elements.length > 0) {
        return Math.max.apply(null, elements.map(function(elementId) {
            return target.elementRate(elementId);
        }, this));
    } else {
        return 1;
    }
};

/**
 * @param {Number} damage
 * @returns {Number}
 */
Game_Action.prototype.applyCritical = function(damage) {
    return damage * 3;
};

/**
 * @param {Number} damage
 * @param {Number} variance
 * @returns {Number}
 */
Game_Action.prototype.applyVariance = function(damage, variance) {
    var amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
    var v = Math.randomInt(amp + 1) + Math.randomInt(amp + 1) - amp;
    return damage >= 0 ? damage + v : damage - v;
};

/**
 * @param {Number} damage
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.applyGuard = function(damage, target) {
    return damage / (damage > 0 && target.isGuard() ? 2 * target.grd : 1);
};

/**
 * @param  {Game_Battler} target
 * @param {Number} value
 */
Game_Action.prototype.executeDamage = function(target, value) {
    var result = target.result();
    if (value === 0) {
        result.critical = false;
    }
    if (this.isHpEffect()) {
        this.executeHpDamage(target, value);
    }
    if (this.isMpEffect()) {
        this.executeMpDamage(target, value);
    }
};

/**
 * @param  {Game_Battler} target
 * @param {Number} value
 */
Game_Action.prototype.executeHpDamage = function(target, value) {
    if (this.isDrain()) {
        value = Math.min(target.hp, value);
    }
    this.makeSuccess(target);
    target.gainHp(-value);
    if (value > 0) {
        target.onDamage(value);
    }
    this.gainDrainedHp(value);
};

/**
 * @param  {Game_Battler} target
 * @param {Number} value
 */
Game_Action.prototype.executeMpDamage = function(target, value) {
    if (!this.isMpRecover()) {
        value = Math.min(target.mp, value);
    }
    if (value !== 0) {
        this.makeSuccess(target);
    }
    target.gainMp(-value);
    this.gainDrainedMp(value);
};

/**
 * @param {Number} value
 */
Game_Action.prototype.gainDrainedHp = function(value) {
    if (this.isDrain()) {
       var gainTarget = this.subject();
       if (this._reflectionTarget !== undefined) {
            gainTarget = this._reflectionTarget;
        }
       gainTarget.gainHp(value);
    }
};

/**
 * @param {Number} value
 */
Game_Action.prototype.gainDrainedMp = function(value) {
    if (this.isDrain()) {
       var gainTarget = this.subject();
       if (this._reflectionTarget !== undefined) {
           gainTarget = this._reflectionTarget;
       }
       gainTarget.gainMp(value);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.applyItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_RECOVER_HP:
        this.itemEffectRecoverHp(target, effect);
        break;
    case Game_Action.EFFECT_RECOVER_MP:
        this.itemEffectRecoverMp(target, effect);
        break;
    case Game_Action.EFFECT_GAIN_TP:
        this.itemEffectGainTp(target, effect);
        break;
    case Game_Action.EFFECT_ADD_STATE:
        this.itemEffectAddState(target, effect);
        break;
    case Game_Action.EFFECT_REMOVE_STATE:
        this.itemEffectRemoveState(target, effect);
        break;
    case Game_Action.EFFECT_ADD_BUFF:
        this.itemEffectAddBuff(target, effect);
        break;
    case Game_Action.EFFECT_ADD_DEBUFF:
        this.itemEffectAddDebuff(target, effect);
        break;
    case Game_Action.EFFECT_REMOVE_BUFF:
        this.itemEffectRemoveBuff(target, effect);
        break;
    case Game_Action.EFFECT_REMOVE_DEBUFF:
        this.itemEffectRemoveDebuff(target, effect);
        break;
    case Game_Action.EFFECT_SPECIAL:
        this.itemEffectSpecial(target, effect);
        break;
    case Game_Action.EFFECT_GROW:
        this.itemEffectGrow(target, effect);
        break;
    case Game_Action.EFFECT_LEARN_SKILL:
        this.itemEffectLearnSkill(target, effect);
        break;
    case Game_Action.EFFECT_COMMON_EVENT:
        this.itemEffectCommonEvent(target, effect);
        break;
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
    var value = (target.mhp * effect.value1 + effect.value2) * target.rec;
    if (this.isItem()) {
        value *= this.subject().pha;
    }
    value = Math.floor(value);
    if (value !== 0) {
        target.gainHp(value);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectRecoverMp = function(target, effect) {
    var value = (target.mmp * effect.value1 + effect.value2) * target.rec;
    if (this.isItem()) {
        value *= this.subject().pha;
    }
    value = Math.floor(value);
    if (value !== 0) {
        target.gainMp(value);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectGainTp = function(target, effect) {
    var value = Math.floor(effect.value1);
    if (value !== 0) {
        target.gainTp(value);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectAddState = function(target, effect) {
    if (effect.dataId === 0) {
        this.itemEffectAddAttackState(target, effect);
    } else {
        this.itemEffectAddNormalState(target, effect);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectAddAttackState = function(target, effect) {
    this.subject().attackStates().forEach(function(stateId) {
        var chance = effect.value1;
        chance *= target.stateRate(stateId);
        chance *= this.subject().attackStatesRate(stateId);
        chance *= this.lukEffectRate(target);
        if (Math.random() < chance) {
            target.addState(stateId);
            this.makeSuccess(target);
        }
    }.bind(this), target);
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectAddNormalState = function(target, effect) {
    var chance = effect.value1;
    if (!this.isCertainHit()) {
        chance *= target.stateRate(effect.dataId);
        chance *= this.lukEffectRate(target);
    }
    if (Math.random() < chance) {
        target.addState(effect.dataId);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectRemoveState = function(target, effect) {
    var chance = effect.value1;
    if (Math.random() < chance) {
        target.removeState(effect.dataId);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectAddBuff = function(target, effect) {
    target.addBuff(effect.dataId, effect.value1);
    this.makeSuccess(target);
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectAddDebuff = function(target, effect) {
    var chance = target.debuffRate(effect.dataId) * this.lukEffectRate(target);
    if (Math.random() < chance) {
        target.addDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectRemoveBuff = function(target, effect) {
    if (target.isBuffAffected(effect.dataId)) {
        target.removeBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectRemoveDebuff = function(target, effect) {
    if (target.isDebuffAffected(effect.dataId)) {
        target.removeBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectSpecial = function(target, effect) {
    if (effect.dataId === Game_Action.SPECIAL_EFFECT_ESCAPE) {
        target.escape();
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectGrow = function(target, effect) {
    target.addParam(effect.dataId, Math.floor(effect.value1));
    this.makeSuccess(target);
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectLearnSkill = function(target, effect) {
    if (target.isActor()) {
        target.learnSkill(effect.dataId);
        this.makeSuccess(target);
    }
};

/**
 * @param  {Game_Battler} target
 * @param  {RPG.Effect} effect
 */
Game_Action.prototype.itemEffectCommonEvent = function(target, effect) {
};

/**
 * @param  {Game_Battler} target
 */
Game_Action.prototype.makeSuccess = function(target) {
    target.result().success = true;
};

/**
 * @param  {Game_Battler} target
 */
Game_Action.prototype.applyItemUserEffect = function(target) {
    var value = Math.floor(this.item().tpGain * this.subject().tcr);
    this.subject().gainSilentTp(value);
};

/**
 * @param  {Game_Battler} target
 * @returns {Number}
 */
Game_Action.prototype.lukEffectRate = function(target) {
    return Math.max(1.0 + (this.subject().luk - target.luk) * 0.001, 0.0);
};

/**
 */
Game_Action.prototype.applyGlobal = function() {
    this.item().effects.forEach(function(effect) {
        if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
            $gameTemp.reserveCommonEvent(effect.dataId);
        }
    }, this);
};




/**
 * The game object declare class for a result of a battle action. For convinience, all
 * member variables in this declare class are public.
 * @class Game_ActionResult
 * 
 * @prop {Boolean} used
 * @prop {Boolean} missed
 * @prop {Boolean} evaded
 * @prop {Boolean} physical
 * @prop {Boolean} drain
 * @prop {Boolean} critical
 * @prop {Boolean} success
 * @prop {Boolean} hpAffected
 * @prop {Number} hpDamage
 * @prop {Number} mpDamage
 * @prop {Number} tpDamage
 * @prop {Array<Number>} addedStates
 * @prop {Array<Number>} removedStates
 * @prop {Array<Number>} addedBuffs
 * @prop {Array<Number>} addedDebuffs
 * @prop {Array<Number>} removedBuffs
 */
function Game_ActionResult() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_ActionResult.prototype.initialize = function() {
    this.clear();
};

    /**
     * Clears the game action result.
     * 
     * @memberof Game_ActionResult
     */
Game_ActionResult.prototype.clear = function() {
    this.used = false;
    this.missed = false;
    this.evaded = false;
    this.physical = false;
    this.drain = false;
    this.critical = false;
    this.success = false;
    this.hpAffected = false;
    this.hpDamage = 0;
    this.mpDamage = 0;
    this.tpDamage = 0;
    this.addedStates = [];
    this.removedStates = [];
    this.addedBuffs = [];
    this.addedDebuffs = [];
    this.removedBuffs = [];
};

    /**
     * Returns the added states from the action result.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_ActionResult
     */
Game_ActionResult.prototype.addedStateObjects = function() {
    return this.addedStates.map(function(id) {
        return $dataStates[id];
    });
};

    /**
     * Returns the removes states from the result.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_ActionResult
     */
Game_ActionResult.prototype.removedStateObjects = function() {
    return this.removedStates.map(function(id) {
        return $dataStates[id];
    });
};

/**
 * @returns {Boolean}
 */
Game_ActionResult.prototype.isStatusAffected = function() {
    return (this.addedStates.length > 0 || this.removedStates.length > 0 ||
            this.addedBuffs.length > 0 || this.addedDebuffs.length > 0 ||
            this.removedBuffs.length > 0);
};

    /**
     * Returns true if the action result is a hit.
     * 
     * @returns {Boolean} 
     * @memberof Game_ActionResult
     */
Game_ActionResult.prototype.isHit = function() {
    return this.used && !this.missed && !this.evaded;
};

/**
 * @param {Number} stateId
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.isStateAdded = function(stateId) {
    return this.addedStates.contains(stateId);
};

/**
 * @param {Number} stateId
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.pushAddedState = function(stateId) {
    if (!this.isStateAdded(stateId)) {
        this.addedStates.push(stateId);
    }
};

/**
 * @param {Number} stateId
 * @returns {Boolean}
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.isStateRemoved = function(stateId) {
    return this.removedStates.contains(stateId);
};

/**
 * @param {Number} stateId
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.pushRemovedState = function(stateId) {
    if (!this.isStateRemoved(stateId)) {
        this.removedStates.push(stateId);
    }
};

    /**
     * Returns true if the a buff is added to the specified param
     * from the action result.
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_ActionResult
     */
Game_ActionResult.prototype.isBuffAdded = function(paramId) {
    return this.addedBuffs.contains(paramId);
};

/**
 * @param {Number} paramId 
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.pushAddedBuff = function(paramId) {
    if (!this.isBuffAdded(paramId)) {
        this.addedBuffs.push(paramId);
    }
};

/**
 * @param {Number} paramId 
 * @returns {Boolean} 
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.isDebuffAdded = function(paramId) {
    return this.addedDebuffs.contains(paramId);
};

/**
 * @param {Number} paramId 
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.pushAddedDebuff = function(paramId) {
    if (!this.isDebuffAdded(paramId)) {
        this.addedDebuffs.push(paramId);
    }
};

/**
 * @param {Number} paramId 
 * @returns {Boolean} 
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.isBuffRemoved = function(paramId) {
    return this.removedBuffs.contains(paramId);
};

/**
 * @param {Number} paramId 
 * @memberof Game_ActionResult
 */
Game_ActionResult.prototype.pushRemovedBuff = function(paramId) {
    if (!this.isBuffRemoved(paramId)) {
        this.removedBuffs.push(paramId);
    }
};




/**
 * The superdeclare class of {@link Game_Battler}. It mainly contains parameters calculation.
 * @class Game_BattlerBase
 * @abstract
 * 
 * @prop {Number} TRAIT_ELEMENT_RATE [static]
 * @prop {Number} TRAIT_DEBUFF_RATE [static]
 * @prop {Number} TRAIT_STATE_RATE [static]
 * @prop {Number} TRAIT_STATE_RESIST [static]
 * @prop {Number} TRAIT_PARAM [static]
 * @prop {Number} TRAIT_XPARAM [static]
 * @prop {Number} TRAIT_SPARAM [static]
 * @prop {Number} TRAIT_ATTACK_ELEMENT [static]
 * @prop {Number} TRAIT_ATTACK_STATE [static]
 * @prop {Number} TRAIT_ATTACK_SPEED [static]
 * @prop {Number} TRAIT_ATTACK_TIMES [static]
 * @prop {Number} TRAIT_STYPE_ADD [static]
 * @prop {Number} TRAIT_STYPE_SEAL [static]
 * @prop {Number} TRAIT_SKILL_ADD [static]
 * @prop {Number} TRAIT_SKILL_SEAL [static]
 * @prop {Number} TRAIT_EQUIP_WTYPE [static]
 * @prop {Number} TRAIT_EQUIP_ATYPE [static]
 * @prop {Number} TRAIT_EQUIP_LOCK [static]
 * @prop {Number} TRAIT_EQUIP_SEAL [static]
 * @prop {Number} TRAIT_SLOT_TYPE [static]
 * @prop {Number} TRAIT_ACTION_PLUS [static]
 * @prop {Number} TRAIT_SPECIAL_FLAG [static]
 * @prop {Number} TRAIT_COLLAPSE_TYPE [static]
 * @prop {Number} TRAIT_PARTY_ABILITY [static]
 * @prop {Number} FLAG_ID_AUTO_BATTLE [static]
 * @prop {Number} FLAG_ID_GUARD [static]
 * @prop {Number} FLAG_ID_SUBSTITUTE [static]
 * @prop {Number} FLAG_ID_PRESERVE_TP [static]
 * @prop {Number} ICON_BUFF_START [static]
 * @prop {Number} ICON_DEBUFF_START [static]
 * 
    * @prop {Number} hp [read-only] Hit Points
    * @prop {Number} mp [read-only] Magic Points
    * @prop {Number} tp [read-only] Tactical Points
    * @prop {Number} mhp [read-only] Maximum Hit Points
    * @prop {Number} mmp [read-only] Maximum Magic Points
    * @prop {Number} atk [read-only] ATtacK power
    * @prop {Number} def [read-only] DEFense power
    * @prop {Number} mat [read-only] Magic ATtack power
    * @prop {Number} mdf [read-only] Magic DeFense power
    * @prop {Number} agi [read-only] AGIlity
    * @prop {Number} luk [read-only] LUcK
    * @prop {Number} hit [read-only] HIT rate
    * @prop {Number} eva [read-only] EVAsion rate
    * @prop {Number} cri [read-only] CRItical rate
    * @prop {Number} cev [read-only] Critical EVasion rate
    * @prop {Number} mev [read-only] Magic EVasion rate
    * @prop {Number} mrf [read-only] Magic ReFlection rate
    * @prop {Number} cnt [read-only] CouNTer attack rate
    * @prop {Number} hrg [read-only] Hp ReGeneration rate
    * @prop {Number} mrg [read-only] Mp ReGeneration rate
    * @prop {Number} trg [read-only] Tp ReGeneration rate
    * @prop {Number} tgr [read-only] TarGet Rate
    * @prop {Number} grd [read-only] GuaRD effect rate
    * @prop {Number} rec [read-only] RECovery effect rate
    * @prop {Number} pha [read-only] PHArmacology
    * @prop {Number} mcr [read-only] Mp Cost Rate
    * @prop {Number} tcr [read-only] Tp Charge Rate
    * @prop {Number} pdr [read-only] Physical Damage Rate
    * @prop {Number} mdr [read-only] Magical Damage Rate
    * @prop {Number} fdr [read-only] Floor Damage Rate
    * @prop {Number} exr [read-only] EXperience Rate
    * 
    * @prop {Number} _hp
    * @prop {Number} _mp
    * @prop {Number} _tp
    * @prop {Boolean} _hidden
    * @prop {Array<Number>} _paramPlus
    * @prop {Array<Number>} _states
    * @prop {Object} _stateTurns {[stateId: number]: number}
    * @prop {Array<Number>} _buffs
    * @prop {Array<Number>} _buffTurns
 */
function Game_BattlerBase() {
    this.initialize.apply(this, arguments);
}

Game_BattlerBase.TRAIT_ELEMENT_RATE   = 11;
Game_BattlerBase.TRAIT_DEBUFF_RATE    = 12;
Game_BattlerBase.TRAIT_STATE_RATE     = 13;
Game_BattlerBase.TRAIT_STATE_RESIST   = 14;
Game_BattlerBase.TRAIT_PARAM          = 21;
Game_BattlerBase.TRAIT_XPARAM         = 22;
Game_BattlerBase.TRAIT_SPARAM         = 23;
Game_BattlerBase.TRAIT_ATTACK_ELEMENT = 31;
Game_BattlerBase.TRAIT_ATTACK_STATE   = 32;
Game_BattlerBase.TRAIT_ATTACK_SPEED   = 33;
Game_BattlerBase.TRAIT_ATTACK_TIMES   = 34;
Game_BattlerBase.TRAIT_STYPE_ADD      = 41;
Game_BattlerBase.TRAIT_STYPE_SEAL     = 42;
Game_BattlerBase.TRAIT_SKILL_ADD      = 43;
Game_BattlerBase.TRAIT_SKILL_SEAL     = 44;
Game_BattlerBase.TRAIT_EQUIP_WTYPE    = 51;
Game_BattlerBase.TRAIT_EQUIP_ATYPE    = 52;
Game_BattlerBase.TRAIT_EQUIP_LOCK     = 53;
Game_BattlerBase.TRAIT_EQUIP_SEAL     = 54;
Game_BattlerBase.TRAIT_SLOT_TYPE      = 55;
Game_BattlerBase.TRAIT_ACTION_PLUS    = 61;
Game_BattlerBase.TRAIT_SPECIAL_FLAG   = 62;
Game_BattlerBase.TRAIT_COLLAPSE_TYPE  = 63;
Game_BattlerBase.TRAIT_PARTY_ABILITY  = 64;
Game_BattlerBase.FLAG_ID_AUTO_BATTLE  = 0;
Game_BattlerBase.FLAG_ID_GUARD        = 1;
Game_BattlerBase.FLAG_ID_SUBSTITUTE   = 2;
Game_BattlerBase.FLAG_ID_PRESERVE_TP  = 3;
Game_BattlerBase.ICON_BUFF_START      = 32;
Game_BattlerBase.ICON_DEBUFF_START    = 48;

Object.defineProperties(Game_BattlerBase.prototype, {
    hp: { get: function() { return this._hp; }, configurable: true },
    mp: { get: function() { return this._mp; }, configurable: true },
    tp: { get: function() { return this._tp; }, configurable: true },
    mhp: { get: function() { return this.param(0); }, configurable: true },
    mmp: { get: function() { return this.param(1); }, configurable: true },
    atk: { get: function() { return this.param(2); }, configurable: true },
    def: { get: function() { return this.param(3); }, configurable: true },
    mat: { get: function() { return this.param(4); }, configurable: true },
    mdf: { get: function() { return this.param(5); }, configurable: true },
    agi: { get: function() { return this.param(6); }, configurable: true },
    luk: { get: function() { return this.param(7); }, configurable: true },
    hit: { get: function() { return this.xparam(0); }, configurable: true },
    eva: { get: function() { return this.xparam(1); }, configurable: true },
    cri: { get: function() { return this.xparam(2); }, configurable: true },
    cev: { get: function() { return this.xparam(3); }, configurable: true },
    mev: { get: function() { return this.xparam(4); }, configurable: true },
    mrf: { get: function() { return this.xparam(5); }, configurable: true },
    cnt: { get: function() { return this.xparam(6); }, configurable: true },
    hrg: { get: function() { return this.xparam(7); }, configurable: true },
    mrg: { get: function() { return this.xparam(8); }, configurable: true },
    trg: { get: function() { return this.xparam(9); }, configurable: true },
    tgr: { get: function() { return this.sparam(0); }, configurable: true },
    grd: { get: function() { return this.sparam(1); }, configurable: true },
    rec: { get: function() { return this.sparam(2); }, configurable: true },
    pha: { get: function() { return this.sparam(3); }, configurable: true },
    mcr: { get: function() { return this.sparam(4); }, configurable: true },
    tcr: { get: function() { return this.sparam(5); }, configurable: true },
    pdr: { get: function() { return this.sparam(6); }, configurable: true },
    mdr: { get: function() { return this.sparam(7); }, configurable: true },
    fdr: { get: function() { return this.sparam(8); }, configurable: true },
    exr: { get: function() { return this.sparam(9); }, configurable: true }
});

/**
 *  オブジェクト生成時の初期化。
 */
Game_BattlerBase.prototype.initialize = function() {
    this.initMembers();
};

/**
 * 
 */
Game_BattlerBase.prototype.initMembers = function() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();
};

/**
 * 
 */
Game_BattlerBase.prototype.clearParamPlus = function() {
    this._paramPlus = [0,0,0,0,0,0,0,0];
};

/**
 * 
 */
Game_BattlerBase.prototype.clearStates = function() {
    this._states = [];
    this._stateTurns = {};
};

    /**
     * Erases the current state from the game battler given the 
     * stateId in the editor database.
     * @param {Number} stateId 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.eraseState = function(stateId) {
    var index = this._states.indexOf(stateId);
    if (index >= 0) {
        this._states.splice(index, 1);
    }
    delete this._stateTurns[stateId];
};

    /**
     * Returns true if the battler is affected by the specified state given
     * the state id.
     * @param {Number} stateId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isStateAffected = function(stateId) {
    return this._states.contains(stateId);
};

    /**
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isDeathStateAffected = function() {
    return this.isStateAffected(this.deathStateId());
};

    /**
     * Returns the death state id.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.deathStateId = function() {
    return 1;
};

    /**
     * Resets the state count of the specified state, given the state id.
     * 
     * @param {Number} stateId 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
    var state = $dataStates[stateId];
    var variance = 1 + Math.max(state.maxTurns - state.minTurns, 0);
    this._stateTurns[stateId] = state.minTurns + Math.randomInt(variance);
};

    /**
     * Returns true if the state, given the state id is expired.
     * 
     * @param {Number} stateId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isStateExpired = function(stateId) {
    return this._stateTurns[stateId] === 0;
};

/**
 * 
 */
Game_BattlerBase.prototype.updateStateTurns = function() {
    this._states.forEach(function(stateId) {
        if (this._stateTurns[stateId] > 0) {
            this._stateTurns[stateId]--;
        }
    }, this);
};

    /**
     * Clears buffs from the battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.clearBuffs = function() {
    this._buffs = [0,0,0,0,0,0,0,0];
    this._buffTurns = [0,0,0,0,0,0,0,0];
};

/**
 * @param {Number} paramId
 */
Game_BattlerBase.prototype.eraseBuff = function(paramId) {
    this._buffs[paramId] = 0;
    this._buffTurns[paramId] = 0;
};

    /**
     * Returns the length of the buff.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.buffLength = function() {
    return this._buffs.length;
};

    /**
     * Buffs the current parameter id.
     * 
     * @param {Number} paramId 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.buff = function(paramId) {
    return this._buffs[paramId];
};

    /**
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isBuffAffected = function(paramId) {
    return this._buffs[paramId] > 0;
};

    /**
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isDebuffAffected = function(paramId) {
    return this._buffs[paramId] < 0;
};

    /**
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isBuffOrDebuffAffected = function(paramId) {
    return this._buffs[paramId] !== 0;
};

    /**
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isMaxBuffAffected = function(paramId) {
    return this._buffs[paramId] === 2;
};

    /**
     * @param {Number} paramId 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isMaxDebuffAffected = function(paramId) {
    return this._buffs[paramId] === -2;
};

    /**
     * @param {Number} paramId 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.increaseBuff = function(paramId) {
    if (!this.isMaxBuffAffected(paramId)) {
        this._buffs[paramId]++;
    }
};

    /**
     * @param {Number} paramId 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.decreaseBuff = function(paramId) {
    if (!this.isMaxDebuffAffected(paramId)) {
        this._buffs[paramId]--;
    }
};

/**
 * @param {Number} paramId
 * @param {Number} turns
 */
Game_BattlerBase.prototype.overwriteBuffTurns = function(paramId, turns) {
    if (this._buffTurns[paramId] < turns) {
        this._buffTurns[paramId] = turns;
    }
};

/**
 * @param {Number} paramId
 * @returns  {Boolean}
 */
Game_BattlerBase.prototype.isBuffExpired = function(paramId) {
    return this._buffTurns[paramId] === 0;
};

    /**
     * Updates the buff turns on battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.updateBuffTurns = function() {
    for (var i = 0; i < this._buffTurns.length; i++) {
        if (this._buffTurns[i] > 0) {
            this._buffTurns[i]--;
        }
    }
};

    /**
     * Kills the battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.die = function() {
    this._hp = 0;
    this.clearStates();
    this.clearBuffs();
};

    /**
     * Revives the battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.revive = function() {
    if (this._hp === 0) {
        this._hp = 1;
    }
};

    /**
     * Returns the states applied to the battler.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.states = function() {
    return this._states.map(function(id) {
        return $dataStates[id];
    });
};

    /**
     * Returns the array of state icons attached to the battler;
     * this is determined by the active states on the battler.
     * @returns {Array<Number>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.stateIcons = function() {
    return this.states().map(function(state) {
        return state.iconIndex;
    }).filter(function(iconIndex) {
        return iconIndex > 0;
    });
};

    /**
     * Returns the array of buff icons attached to the battler;
     * this is determined by the active buffs on the battler.
     * @returns {Array<Number>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.buffIcons = function() {
    var icons = [];
    for (var i = 0; i < this._buffs.length; i++) {
        if (this._buffs[i] !== 0) {
            icons.push(this.buffIconIndex(this._buffs[i], i));
        }
    }
    return icons;
};

/**
 * @param {Number} buffLevel
 * @param {Number} paramId
 * @returns {Number}
 */
Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if (buffLevel > 0) {
        return Game_BattlerBase.ICON_BUFF_START + (buffLevel - 1) * 8 + paramId;
    } else if (buffLevel < 0) {
        return Game_BattlerBase.ICON_DEBUFF_START + (-buffLevel - 1) * 8 + paramId;
    } else {
        return 0;
    }
};

    /**
     * Returns all of the icons attached to the battler.
     * 
     * @returns {Array<Number>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.allIcons = function() {
    return this.stateIcons().concat(this.buffIcons());
};

/**
 * Returns an array of the all objects having traits. States only here.
 * @returns {Array<*>}
 */
Game_BattlerBase.prototype.traitObjects = function() {
    return this.states();
};

    /**
     * Returns all the traits of the battler.
     * 
     * @returns {Array<RPG.Trait>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.allTraits = function() {
    return this.traitObjects().reduce(function(r, obj) {
        return r.concat(obj.traits);
    }, []);
};

/**
 * @param {Number} code
 * @returns {Array<RPG.Trait>} 
 */
Game_BattlerBase.prototype.traits = function(code) {
    return this.allTraits().filter(function(trait) {
        return trait.code === code;
    });
};

/**
 * @param {Number} code
 * @param {Number} id
 * @returns {Array<RPG.Trait>} 
 */
Game_BattlerBase.prototype.traitsWithId = function(code, id) {
    return this.allTraits().filter(function(trait) {
        return trait.code === code && trait.dataId === id;
    });
};

/**
 * @param {Number} code
 * @param {Number} id
 * @returns {Number} 
 */
Game_BattlerBase.prototype.traitsPi = function(code, id) {
    return this.traitsWithId(code, id).reduce(function(r, trait) {
        return r * trait.value;
    }, 1);
};

/**
 * @param {Number} code
 * @param {Number} id
 * @returns {Number} 
 */
Game_BattlerBase.prototype.traitsSum = function(code, id) {
    return this.traitsWithId(code, id).reduce(function(r, trait) {
        return r + trait.value;
    }, 0);
};

/**
 * @param {Number} code
 * @returns {Number} 
 */
Game_BattlerBase.prototype.traitsSumAll = function(code) {
    return this.traits(code).reduce(function(r, trait) {
        return r + trait.value;
    }, 0);
};

/**
 * @param {Number} code
 * @returns {Array<Number>} 
 */
Game_BattlerBase.prototype.traitsSet = function(code) {
    return this.traits(code).reduce(function(r, trait) {
        return r.concat(trait.dataId);
    }, []);
};

    /**
     * Returns the base parameters of the battler; this is determined by their
     * current level and the paramId given.
     * @param {Number} paramId 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.paramBase = function(paramId) {
    return 0;
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.paramPlus = function(paramId) {
    return this._paramPlus[paramId];
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.paramMin = function(paramId) {
    if (paramId === 1) {
        return 0;   // MMP
    } else {
        return 1;
    }
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return 999999;  // MHP
    } else if (paramId === 1) {
        return 9999;    // MMP
    } else {
        return 999;
    }
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.paramRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_PARAM, paramId);
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
    return this._buffs[paramId] * 0.25 + 1.0;
};

    /**
     * Returns a standard parameter, given a paramId;
     * standard parameters include: HP, MP, Atk, M.Atk, Def, M.Def, Luck, Agility.
     * @param {Number} paramId 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId);
    value *= this.paramRate(paramId) * this.paramBuffRate(paramId);
    var maxValue = this.paramMax(paramId);
    var minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};

/**
 * @param {Number} xparamId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.xparam = function(xparamId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
};

/**
 * @param {Number} sparamId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.sparam = function(sparamId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
};

/**
 * @param {Number} elementId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.elementRate = function(elementId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
};

/**
 * @param {Number} paramId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.debuffRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId);
};

/**
 * @param {Number} stateId
 * @returns {Number} 
 */
Game_BattlerBase.prototype.stateRate = function(stateId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_STATE_RATE, stateId);
};

/**
 * @returns {Array<Number>} 
 */
Game_BattlerBase.prototype.stateResistSet = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_STATE_RESIST);
};

/**
 * @param {Number} stateId
 * @returns {Boolean} 
 */
Game_BattlerBase.prototype.isStateResist = function(stateId) {
    return this.stateResistSet().contains(stateId);
};

    /**
     * Returns the attack elements of the battler
     * as a list of numbers.
     * @returns {Array<Number>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.attackElements = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_ELEMENT);
};

    /**
     * Returns the attack states of the battler as a
     * list of numbers.
     * @returns {Array<Number>} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.attackStates = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_STATE);
};

/**
 * @param {Number} stateId
 */
Game_BattlerBase.prototype.attackStatesRate = function(stateId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_ATTACK_STATE, stateId);
};

    /**
     * Returns the attack speed of the battler.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.attackSpeed = function() {
    return this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_SPEED);
};

    /**
     * Returns the number of attacks available to the battler.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.attackTimesAdd = function() {
    return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_TIMES), 0);
};

/**
 * @returns {Array<Number>}
 */
Game_BattlerBase.prototype.addedSkillTypes = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_ADD);
};

/**
 * @param {Number} stypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isSkillTypeSealed = function(stypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_SEAL).contains(stypeId);
};

/**
 * @returns {Array<Number>}
 */
Game_BattlerBase.prototype.addedSkills = function() {
    return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_ADD);
};

/**
 * @param {Number} stypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isSkillSealed = function(skillId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_SEAL).contains(skillId);
};

/**
 * @param {Number} wtypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isEquipWtypeOk = function(wtypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_WTYPE).contains(wtypeId);
};

/**
 * @param {Number} atypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isEquipAtypeOk = function(atypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_ATYPE).contains(atypeId);
};

/**
 * @param {Number} etypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isEquipTypeLocked = function(etypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_LOCK).contains(etypeId);
};

/**
 * @param {Number} etypeId
 * @returns {Boolean}
 */
Game_BattlerBase.prototype.isEquipTypeSealed = function(etypeId) {
    return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_SEAL).contains(etypeId);
};

    /**
     * Returns the battler slot type of a trait.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.slotType = function() {
    var set = this.traitsSet(Game_BattlerBase.TRAIT_SLOT_TYPE);
    return set.length > 0 ? Math.max.apply(null, set) : 0;
};

    /**
     * Returns true if the battler dual wields.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isDualWield = function() {
    return this.slotType() === 1;
};

/**
 * @returns {Array<Number>} 
 */
Game_BattlerBase.prototype.actionPlusSet = function() {
    return this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(function(trait) {
        return trait.value;
    });
};

/**
 * @param {Number} flagId
 * @returns {Boolean} 
 */
Game_BattlerBase.prototype.specialFlag = function(flagId) {
    return this.traits(Game_BattlerBase.TRAIT_SPECIAL_FLAG).some(function(trait) {
        return trait.dataId === flagId;
    });
};

    /**
     * Returns the collapse type of the battler.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.collapseType = function() {
    var set = this.traitsSet(Game_BattlerBase.TRAIT_COLLAPSE_TYPE);
    return set.length > 0 ? Math.max.apply(null, set) : 0;
};

/**
 * @param {Number} abilityId
 * @returns {Boolean} 
 */
Game_BattlerBase.prototype.partyAbility = function(abilityId) {
    return this.traits(Game_BattlerBase.TRAIT_PARTY_ABILITY).some(function(trait) {
        return trait.dataId === abilityId;
    });
};

    /**
     * Returns true if the battler is set to battle automatically.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isAutoBattle = function() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_AUTO_BATTLE);
};

    /**
     * Returns true if the battler is guarding.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isGuard = function() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_GUARD) && this.canMove();
};

    /**
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isSubstitute = function() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_SUBSTITUTE) && this.canMove();
};

    /**
     * Returns true if tp is preserved between battles.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isPreserveTp = function() {
    return this.specialFlag(Game_BattlerBase.FLAG_ID_PRESERVE_TP);
};

/**
 * @param {Number} paramId
 * @param {Number} value
 */
Game_BattlerBase.prototype.addParam = function(paramId, value) {
    this._paramPlus[paramId] += value;
    this.refresh();
};

    /**
     * Sets the battler hp.
     * 
     * @param {Number} hp 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.setHp = function(hp) {
    this._hp = hp;
    this.refresh();
};

    /**
     * Sets the battler mp.
     * 
     * @param {Number} mp 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.setMp = function(mp) {
    this._mp = mp;
    this.refresh();
};

    /**
     * Sets the battler tp.
     * 
     * @param {Number} tp 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.setTp = function(tp) {
    this._tp = tp;
    this.refresh();
};

    /**
     * Returns the maximum tp of the battler.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.maxTp = function() {
    return 100;
};

    /**
     * Refreshes the battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.refresh = function() {
    this.stateResistSet().forEach(function(stateId) {
        this.eraseState(stateId);
    }, this);
    this._hp = this._hp.clamp(0, this.mhp);
    this._mp = this._mp.clamp(0, this.mmp);
    this._tp = this._tp.clamp(0, this.maxTp());
};

    /**
     * Recovers the battler from all states and restores the
     * battler to maximum hp and mp.
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.recoverAll = function() {
    this.clearStates();
    this._hp = this.mhp;
    this._mp = this.mmp;
};

    /**
     * Returns the percentage of the battler's hp left as a float.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.hpRate = function() {
    return this.hp / this.mhp;
};

    /**
     * Returns the percentage of the battler's mp left as a float.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.mpRate = function() {
    return this.mmp > 0 ? this.mp / this.mmp : 0;
};

    /**
     * Returns the percentage of the battler's tp left as a float.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.tpRate = function() {
    return this.tp / this.maxTp();
};

    /**
     * Hides the game battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.hide = function() {
    this._hidden = true;
};

    /**
     * Shows the game battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.appear = function() {
    this._hidden = false;
};

    /**
     * Returns true if the game battler is hidden.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isHidden = function() {
    return this._hidden;
};

    /**
     * Returns true if the game battler is not hidden.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isAppeared = function() {
    return !this.isHidden();
};

    /**
     * Returns true if the battler is dead.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isDead = function() {
    return this.isAppeared() && this.isDeathStateAffected();
};

    /**
     * Returns true if the battler is alive.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isAlive = function() {
    return this.isAppeared() && !this.isDeathStateAffected();
};

    /**
     * Returns true if the battler is dying.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isDying = function() {
    return this.isAlive() && this._hp < this.mhp / 4;
};

    /**
     * Returns true if the game battler is restricted.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isRestricted = function() {
    return this.isAppeared() && this.restriction() > 0;
};

    /**
     * Returns true if the battler can input actions.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canInput = function() {
    return this.isAppeared() && !this.isRestricted() && !this.isAutoBattle();
};

    /**
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canMove = function() {
    return this.isAppeared() && this.restriction() < 4;
};

    /**
     * Returns true if the battler is confused.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isConfused = function() {
    return this.isAppeared() && this.restriction() >= 1 && this.restriction() <= 3;
};

    /**
     * Returns the confusion level of the battler.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.confusionLevel = function() {
    return this.isConfused() ? this.restriction() : 0;
};

    /**
     * Returns true if the battler is an actor.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isActor = function() {
    return false;
};

    /**
     * Returns true if the battler is an enemy.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isEnemy = function() {
    return false;
};

    /**
     * Sorts the states attached to the battler.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.sortStates = function() {
    this._states.sort(function(a, b) {
        var p1 = $dataStates[a].priority;
        var p2 = $dataStates[b].priority;
        if (p1 !== p2) {
            return p2 - p1;
        }
        return a - b;
    });
};

    /**
     * Returns the number of the restriction.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.restriction = function() {
    return Math.max.apply(null, this.states().map(function(state) {
        return state.restriction;
    }).concat(0));
};

    /**
     * Adds a new state given a state id to the battler.
     * 
     * @param {Number} stateId 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.addNewState = function(stateId) {
    if (stateId === this.deathStateId()) {
        this.die();
    }
    var restricted = this.isRestricted();
    this._states.push(stateId);
    this.sortStates();
    if (!restricted && this.isRestricted()) {
        this.onRestrict();
    }
};

    /**
     * Handler for when the battler is restricted.
     * 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.onRestrict = function() {
};

/**
 * @returns {String}
 */
Game_BattlerBase.prototype.mostImportantStateText = function() {
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        if (states[i].message3) {
            return states[i].message3;
        }
    }
    return '';
};

/**
 * @returns {Number}
 */
Game_BattlerBase.prototype.stateMotionIndex = function() {
    var states = this.states();
    if (states.length > 0) {
        return states[0].motion;
    } else {
        return 0;
    }
};

/**
 * @returns {Number}
 */
Game_BattlerBase.prototype.stateOverlayIndex = function() {
    var states = this.states();
    if (states.length > 0) {
        return states[0].overlay;
    } else {
        return 0;
    }
};

    /**
     * Returns true if the skill is a weapon type
     * oriented skill.
     * @param {RPG.Skill} skill 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isSkillWtypeOk = function(skill) {
    return true;
};

    /**
     * Returns the mp cost of the skill.
     * 
     * @param {RPG.Skill} skill 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.skillMpCost = function(skill) {
    return Math.floor(skill.mpCost * this.mcr);
};

    /**
     * Returns the tp cost of the skill.
     * 
     * @param {RPG.Skill} skill 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.skillTpCost = function(skill) {
    return skill.tpCost;
};

    /**
     * Returns true if the battler can pay the cost
     * of the specified skill.
     * @param {RPG.Skill} skill 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
    return this._tp >= this.skillTpCost(skill) && this._mp >= this.skillMpCost(skill);
};

    /**
     * Pays the cost of the skill when activating the skill.
     * 
     * @param {RPG.Skill} skill 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    this._mp -= this.skillMpCost(skill);
    this._tp -= this.skillTpCost(skill);
};

    /**
     * Returns true if the item occasion is okay.
     * 
     * @param {RPG.UsableItem} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.isOccasionOk = function(item) {
    if ($gameParty.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
    } else {
        return item.occasion === 0 || item.occasion === 2;
    }
};

/**
 * @param  {RPG.UsableItem} item
 * @returns {Boolean} 
 */
Game_BattlerBase.prototype.meetsUsableItemConditions = function(item) {
    return this.canMove() && this.isOccasionOk(item);
};

    /**
     * Returns true if the battler meets the skill conditions.
     * 
     * @param {RPG.Skill} skill 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    return (this.meetsUsableItemConditions(skill) &&
            this.isSkillWtypeOk(skill) && this.canPaySkillCost(skill) &&
            !this.isSkillSealed(skill.id) && !this.isSkillTypeSealed(skill.stypeId));
};

    /**
     * Returns true if the battler meets the item conditions.
     * 
     * @param {RPG.Item} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.meetsItemConditions = function(item) {
    return this.meetsUsableItemConditions(item) && $gameParty.hasItem(item);
};

    /**
     * Returns true if the battler can use the item.
     * 
     * @param {RPG.UsableItem} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canUse = function(item) {
    if (!item) {
        return false;
    } else if (DataManager.isSkill(item)) {
        return this.meetsSkillConditions(item);
    } else if (DataManager.isItem(item)) {
        return this.meetsItemConditions(item);
    } else {
        return false;
    }
};

    /**
     * Returns true if the battler can equip the item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canEquip = function(item) {
    if (!item) {
        return false;
    } else if (DataManager.isWeapon(item)) {
        return this.canEquipWeapon(item);
    } else if (DataManager.isArmor(item)) {
        return this.canEquipArmor(item);
    } else {
        return false;
    }
};

    /**
     * Returns true if the battler can equip a weapon.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canEquipWeapon = function(item) {
    return this.isEquipWtypeOk(item.wtypeId) && !this.isEquipTypeSealed(item.etypeId);
};

    /**
     * Returns true if the battler can equip armor.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canEquipArmor = function(item) {
    return this.isEquipAtypeOk(item.atypeId) && !this.isEquipTypeSealed(item.etypeId);
};

    /**
     * Returns the attack skill id in the database.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.attackSkillId = function() {
    return 1;
};

    /**
     * Returns the guard skill id in the database.
     * 
     * @returns {Number} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.guardSkillId = function() {
    return 2;
};

    /**
     * Returns true if the battler can attack.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canAttack = function() {
    return this.canUse($dataSkills[this.attackSkillId()]);
};

    /**
     * Returns true if the battler can guard.
     * 
     * @returns {Boolean} 
     * @memberof Game_BattlerBase
     */
Game_BattlerBase.prototype.canGuard = function() {
    return this.canUse($dataSkills[this.guardSkillId()]);
};


/**
* The superdeclare class of {@link Game_Actor} and {@link Game_Enemy}. It contains methods for sprites
 * @class Game_Battler
 * @extends Game_BattlerBase
 * 
 * @prop {Array<Game_Action>} _actions
 * @prop {Number} _speed
 * @prop {Game_ActionResult} _result
 * @prop {String} _actionState
 * @prop {Number} _lastTargetIndex
 * @prop {Array<MV.BattlerAnimation>} _animations
 * @prop {Boolean} _damagePopup
 * @prop {String} _effectType
 * @prop {String} _motionType
 * @prop {Number} _weaponImageId
 * @prop {Boolean} _motionRefresh
 * @prop {Boolean} _selected
 */
function Game_Battler() {
    this.initialize.apply(this, arguments);
}

Game_Battler.prototype = Object.create(Game_BattlerBase.prototype);
Game_Battler.prototype.constructor = Game_Battler;

/**
 *  オブジェクト生成時の初期化。
 */
Game_Battler.prototype.initialize = function() {
    Game_BattlerBase.prototype.initialize.call(this);
};

/**
 * 
 */
Game_Battler.prototype.initMembers = function() {
    Game_BattlerBase.prototype.initMembers.call(this);
    this._actions = [];
    this._speed = 0;
    this._result = new Game_ActionResult();
    this._actionState = '';
    this._lastTargetIndex = 0;
    this._animations = [];
    this._damagePopup = false;
    this._effectType = null;
    this._motionType = null;
    this._weaponImageId = 0;
    this._motionRefresh = false;
    this._selected = false;
};


    /**
     * Clears animations from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearAnimations = function() {
    this._animations = [];
};

    /**
     * Clear damage pop up from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearDamagePopup = function() {
    this._damagePopup = false;
};

    /**
     * Clear weapon animation from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearWeaponAnimation = function() {
    this._weaponImageId = 0;
};

    /**
     * Clears effect from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearEffect = function() {
    this._effectType = null;
};

    /**
     * Clears motion from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearMotion = function() {
    this._motionType = null;
    this._motionRefresh = false;
};

/**
 * @param  {String} effectType
 */
Game_Battler.prototype.requestEffect = function(effectType) {
    this._effectType = effectType;
};

    /**
     * Request the specified motion on the game battler.
     * 
     * @param {String} motionType 
     * @memberof Game_Battler
     */
Game_Battler.prototype.requestMotion = function(motionType) {
    this._motionType = motionType;
};

/**
 * 
 */
Game_Battler.prototype.requestMotionRefresh = function() {
    this._motionRefresh = true;
};

/**
 * 
 */
Game_Battler.prototype.select = function() {
    this._selected = true;
};

/**
 * 
 */
Game_Battler.prototype.deselect = function() {
    this._selected = false;
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isAnimationRequested = function() {
    return this._animations.length > 0;
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isDamagePopupRequested = function() {
    return this._damagePopup;
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isEffectRequested = function() {
    return !!this._effectType;
};

/**
     * Returns true if a motion is requested.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
 */
Game_Battler.prototype.isMotionRequested = function() {
    return !!this._motionType;
};

    /**
     * Returns true if a weapon animation is requested.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isWeaponAnimationRequested = function() {
    return this._weaponImageId > 0;
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isMotionRefreshRequested = function() {
    return this._motionRefresh;
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isSelected = function() {
    return this._selected;
};

    /**
     * Returns the effect type of the battler.
     * 
     * @returns {String} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.effectType = function() {
    return this._effectType;
};

    /**
     * Returns the motion type of the battler.
     * 
     * @returns {String} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.motionType = function() {
    return this._motionType;
};

    /**
     * Returns the weapon image id.
     * 
     * @returns {Number} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.weaponImageId = function() {
    return this._weaponImageId;
};

    /**
     * Shifts the battler animation.
     * 
     * @returns {MV.BattlerAnimation} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.shiftAnimation = function() {
    return this._animations.shift();
};

    /**
     * Starts the specified animation, given the animation id on the
     * battler.
     * @param {Number} animationId 
     * @param {Boolean} mirror 
     * @param {Number} delay 
     * @memberof Game_Battler
     */
Game_Battler.prototype.startAnimation = function(animationId, mirror, delay) {
    var data = { animationId: animationId, mirror: mirror, delay: delay };
    this._animations.push(data);
};

    /**
     * Starts a damage pop up on the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.startDamagePopup = function() {
    this._damagePopup = true;
};

    /**
     * Starts the weapon animation on te battler given a weapon id.
     * 
     * @param {Number} weaponImageId 
     * @memberof Game_Battler
     */
Game_Battler.prototype.startWeaponAnimation = function(weaponImageId) {
    this._weaponImageId = weaponImageId;
};

/**
 * @param {Number} index
 * @returns {Game_Action}
 */
Game_Battler.prototype.action = function(index) {
    return this._actions[index];
};

    /**
     * Sets the action at the specified index for the battler.
     * 
     * @param {Number} index 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
Game_Battler.prototype.setAction = function(index, action) {
    this._actions[index] = action;
};

    /**
     * Returns the number of battler actions.
     * 
     * @returns {Number} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.numActions = function() {
    return this._actions.length;
};

    /**
     * Clears the battler actions.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearActions = function() {
    this._actions = [];
};

    /**
     * Returns the battler action result.
     * 
     * @returns {Game_ActionResult} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.result = function() {
    return this._result;
};

    /**
     * Clears the battler action result.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearResult = function() {
    this._result.clear();
};

    /**
     * Refreshes the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp === 0) {
        this.addState(this.deathStateId());
    } else {
        this.removeState(this.deathStateId());
    }
};

    /**
     * Adds a state to the battler given the specified
     * state id.
     * @param {Number} stateId 
     * @memberof Game_Battler
     */
Game_Battler.prototype.addState = function(stateId) {
    if (this.isStateAddable(stateId)) {
        if (!this.isStateAffected(stateId)) {
            this.addNewState(stateId);
            this.refresh();
        }
        this.resetStateCounts(stateId);
        this._result.pushAddedState(stateId);
    }
};

    /**
     * Returns true if the specified state given the state id
     * is addable.
     * @param {Number} stateId 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isStateAddable = function(stateId) {
    return (this.isAlive() && $dataStates[stateId] &&
            !this.isStateResist(stateId) &&
            !this._result.isStateRemoved(stateId) &&
            !this.isStateRestrict(stateId));
};

    /**
     * Returns true if the specified state given the state id
     * restricts.
     * 
     * @param {Number} stateId 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isStateRestrict = function(stateId) {
    return $dataStates[stateId].removeByRestriction && this.isRestricted();
};

    /**
     * Handler for when theb attler is restricted.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.onRestrict = function() {
    Game_BattlerBase.prototype.onRestrict.call(this);
    this.clearActions();
    this.states().forEach(function(state) {
        if (state.removeByRestriction) {
            this.removeState(state.id);
        }
    }, this);
};

    /**
     * Removes the specified state given the state id.
     * 
     * @param {Number} stateId 
     * @memberof Game_Battler
     */
Game_Battler.prototype.removeState = function(stateId) {
    if (this.isStateAffected(stateId)) {
        if (stateId === this.deathStateId()) {
            this.revive();
        }
        this.eraseState(stateId);
        this.refresh();
        this._result.pushRemovedState(stateId);
    }
};

    /**
     * Has the battler escape from battle; plays a sound on escaping.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.escape = function() {
    if ($gameParty.inBattle()) {
        this.hide();
    }
    this.clearActions();
    this.clearStates();
    SoundManager.playEscape();
};

    /**
     * Adds a buff to the battler for the specified number of turns
     * on the selected parameter.
     * @param {Number} paramId 
     * @param {Number} turns 
     * @memberof Game_Battler
     */
Game_Battler.prototype.addBuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.increaseBuff(paramId);
        if (this.isBuffAffected(paramId)) {
            this.overwriteBuffTurns(paramId, turns);
        }
        this._result.pushAddedBuff(paramId);
        this.refresh();
    }
};

    /**
     * Adds a debuff to the battler for the specified number of turns
     * on the selected parameter.
     * @param {Number} paramId 
     * @param {Number} turns 
     * @memberof Game_Battler
     */
Game_Battler.prototype.addDebuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.decreaseBuff(paramId);
        if (this.isDebuffAffected(paramId)) {
            this.overwriteBuffTurns(paramId, turns);
        }
        this._result.pushAddedDebuff(paramId);
        this.refresh();
    }
};

/**
 * @param {Number} paramId
 */
Game_Battler.prototype.removeBuff = function(paramId) {
    if (this.isAlive() && this.isBuffOrDebuffAffected(paramId)) {
        this.eraseBuff(paramId);
        this._result.pushRemovedBuff(paramId);
        this.refresh();
    }
};

/**
 * 
 */
Game_Battler.prototype.removeBattleStates = function() {
    this.states().forEach(function(state) {
        if (state.removeAtBattleEnd) {
            this.removeState(state.id);
        }
    }, this);
};

    /**
     * Removes all buffs from the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.removeAllBuffs = function() {
    for (var i = 0; i < this.buffLength(); i++) {
        this.removeBuff(i);
    }
};

/**
 * @param {Number} timing
 */
Game_Battler.prototype.removeStatesAuto = function(timing) {
    this.states().forEach(function(state) {
        if (this.isStateExpired(state.id) && state.autoRemovalTiming === timing) {
            this.removeState(state.id);
        }
    }, this);
};

/**
 * 
 */
Game_Battler.prototype.removeBuffsAuto = function() {
    for (var i = 0; i < this.buffLength(); i++) {
        if (this.isBuffExpired(i)) {
            this.removeBuff(i);
        }
    }
};

/**
 * 
 */
Game_Battler.prototype.removeStatesByDamage = function() {
    this.states().forEach(function(state) {
        if (state.removeByDamage && Math.randomInt(100) < state.chanceByDamage) {
            this.removeState(state.id);
        }
    }, this);
};

    /**
     * Creates the number of times for
     * an action.
     * @returns {Number} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.makeActionTimes = function() {
    return this.actionPlusSet().reduce(function(r, p) {
        return Math.random() < p ? r + 1 : r;
    }, 1);
};

    /**
     * Creates the actions for the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.makeActions = function() {
    this.clearActions();
    if (this.canMove()) {
        var actionTimes = this.makeActionTimes();
        this._actions = [];
        for (var i = 0; i < actionTimes; i++) {
            this._actions.push(new Game_Action(this));
        }
    }
};

    /**
     * Returns the speed of the battler.
     * 
     * @returns {Number} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.speed = function() {
    return this._speed;
};

    /**
     * Calculates the speed of the battler.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.makeSpeed = function() {
    this._speed = Math.min.apply(null, this._actions.map(function(action) {
        return action.speed();
    })) || 0;
};

    /**
     * Returns the current action of the battler.
     * 
     * @returns {Game_Action} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.currentAction = function() {
    return this._actions[0];
};

    /**
     * Removes the current battler action.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.removeCurrentAction = function() {
    this._actions.shift();
};

/**
 * @param  {Game_Battler} target
 */
Game_Battler.prototype.setLastTarget = function(target) {
    if (target) {
        this._lastTargetIndex = target.index();
    } else {
        this._lastTargetIndex = 0;
    }
};

/**
 * @param {Number} skillId
 * @param {Number} targetIndex
 */
Game_Battler.prototype.forceAction = function(skillId, targetIndex) {
    this.clearActions();
    var action = new Game_Action(this, true);
    action.setSkill(skillId);
    if (targetIndex === -2) {
        action.setTarget(this._lastTargetIndex);
    } else if (targetIndex === -1) {
        action.decideRandomTarget();
    } else {
        action.setTarget(targetIndex);
    }
    this._actions.push(action);
};

    /**
     * Has theb attler use the given item.
     * 
     * @param {RPG.UsableItem} item 
     * @memberof Game_Battler
     */
Game_Battler.prototype.useItem = function(item) {
    if (DataManager.isSkill(item)) {
        this.paySkillCost(item);
    } else if (DataManager.isItem(item)) {
        this.consumeItem(item);
    }
};

    /**
     * Has the battler consume the given item.
     * 
     * @param {RPG.UsableItem} item 
     * @memberof Game_Battler
     */
Game_Battler.prototype.consumeItem = function(item) {
    $gameParty.consumeItem(item);
};

    /**
     * Adds the specified amount of hp to the battler.
     * 
     * @param {Number} value 
     * @memberof Game_Battler
     */
Game_Battler.prototype.gainHp = function(value) {
    this._result.hpDamage = -value;
    this._result.hpAffected = true;
    this.setHp(this.hp + value);
};

    /**
     * Adds the specified amount of mp to the battler.
     * 
     * @param {Number} value 
     * @memberof Game_Battler
     */
Game_Battler.prototype.gainMp = function(value) {
    this._result.mpDamage = -value;
    this.setMp(this.mp + value);
};

    /**
     * Adds the specified amount of tp to the battler.
     * 
     * @param {Number} value 
     * @memberof Game_Battler
     */
Game_Battler.prototype.gainTp = function(value) {
    this._result.tpDamage = -value;
    this.setTp(this.tp + value);
};

    /**
     * Adds a specified amount of tp to the battler silently.
     * 
     * @param {Number} value 
     * @memberof Game_Battler
     */
Game_Battler.prototype.gainSilentTp = function(value) {
    this.setTp(this.tp + value);
};

    /**
     * Initializes the battler's tp; tp is random.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.initTp = function() {
    this.setTp(Math.randomInt(25));
};

    /**
     * Clears the battler's tp.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.clearTp = function() {
    this.setTp(0);
};

/**
 * @param {Number} damageRate
 */
Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(50 * damageRate * this.tcr);
    this.gainSilentTp(value);
};

    /**
     * Has the battler regenerate hp based on their hp regen.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.regenerateHp = function() {
    var value = Math.floor(this.mhp * this.hrg);
    value = Math.max(value, -this.maxSlipDamage());
    if (value !== 0) {
        this.gainHp(value);
    }
};

/**
 * @returns {Number}
 */
Game_Battler.prototype.maxSlipDamage = function() {
    return $dataSystem.optSlipDeath ? this.hp : Math.max(this.hp - 1, 0);
};

    /**
     * Has the battler regenerate mp based on their mp regen.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.regenerateMp = function() {
    var value = Math.floor(this.mmp * this.mrg);
    if (value !== 0) {
        this.gainMp(value);
    }
};

    /**
     * Has the battler regenerate tp based on their tp regen.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.regenerateTp = function() {
    var value = Math.floor(100 * this.trg);
    this.gainSilentTp(value);
};

    /**
     * Handler for when battle has started.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.regenerateAll = function() {
    if (this.isAlive()) {
        this.regenerateHp();
        this.regenerateMp();
        this.regenerateTp();
    }
};

/**
 * 
 */
Game_Battler.prototype.onBattleStart = function() {
    this.setActionState('undecided');
    this.clearMotion();
    if (!this.isPreserveTp()) {
        this.initTp();
    }
};

/**
 * 
 */
Game_Battler.prototype.onAllActionsEnd = function() {
    this.clearResult();
    this.removeStatesAuto(1);
    this.removeBuffsAuto();
};

/**
 * 
 */
Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
    this.regenerateAll();
    if (!BattleManager.isForcedTurn()) {
        this.updateStateTurns();
        this.updateBuffTurns();
    }
    this.removeStatesAuto(2);
};

/**
 * 
 */
Game_Battler.prototype.onBattleEnd = function() {
    this.clearResult();
    this.removeBattleStates();
    this.removeAllBuffs();
    this.clearActions();
    if (!this.isPreserveTp()) {
        this.clearTp();
    }
    this.appear();
};

/**
 * @param {Number} value
 */
Game_Battler.prototype.onDamage = function(value) {
    this.removeStatesByDamage();
    this.chargeTpByDamage(value / this.mhp);
};

/**
 * @param  {String} actionState
 */
Game_Battler.prototype.setActionState = function(actionState) {
    this._actionState = actionState;
    this.requestMotionRefresh();
};

/**
 * @returns {Boolean}
 */
Game_Battler.prototype.isUndecided = function() {
    return this._actionState === 'undecided';
};

    /**
     * Returns true if the battler is inputting commands in battle.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isInputting = function() {
    return this._actionState === 'inputting';
};

    /**
     * Returns true if the battler is waiting in battle.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isWaiting = function() {
    return this._actionState === 'waiting';
};

    /**
     * Returns true if the battler is performing an action in battle.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isActing = function() {
    return this._actionState === 'acting';
};

    /**
     * Returns true if the battler is chanting in combat.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isChanting = function() {
    if (this.isWaiting()) {
        return this._actions.some(function(action) {
            return action.isMagicSkill();
        });
    }
    return false;
};

    /**
     * Returns true if the battler is waiting to guard.
     * 
     * @returns {Boolean} 
     * @memberof Game_Battler
     */
Game_Battler.prototype.isGuardWaiting = function() {
    if (this.isWaiting()) {
        return this._actions.some(function(action) {
            return action.isGuard();
        });
    }
    return false;
};

    /**
     * Perform action start motion, given the specified game action.
     * 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performActionStart = function(action) {
    if (!action.isGuard()) {
        this.setActionState('acting');
    }
};

    /**
     * Perform given action motion.
     * 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performAction = function(action) {
};

    /**
     * Perform action end motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performActionEnd = function() {
    this.setActionState('done');
};

    /**
     * Perform damage motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performDamage = function() {
};

    /**
     * Perform miss motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performMiss = function() {
    SoundManager.playMiss();
};

    /**
     * Perform recovery motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performRecovery = function() {
    SoundManager.playRecovery();
};

    /**
     * Perform evasion motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performEvasion = function() {
    SoundManager.playEvasion();
};

    /**
     * Perform magic evasion motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performMagicEvasion = function() {
    SoundManager.playMagicEvasion();
};

    /**
     * Perform counter motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performCounter = function() {
    SoundManager.playEvasion();
};

    /**
     * Performs the reflect motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performReflection = function() {
    SoundManager.playReflection();
};

    /**
     * Perform substitute motion with the specified game battler.
     * 
     * @param {Game_Battler} target 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performSubstitute = function(target) {
};

    /**
     * Performs the collapse motion.
     * 
     * @memberof Game_Battler
     */
Game_Battler.prototype.performCollapse = function() {
};




/**
 * [アクター]を定義したクラス。
 * @class Game_Actor
 * @extends Game_Battler
 * @prop {Number} level [read-only] Level
 * 
 * @prop {Number} _actorId
 * @prop {String} _name
 * @prop {String} _nickname
 * @prop {String} _profile
 * @prop {Number} _classId
 * @prop {Number} _level
 * @prop {String} _characterName
 * @prop {Number} _characterIndex
 * @prop {String} _faceName
 * @prop {Number} _faceIndex
 * @prop {String} _battlerName
 * @prop {Object} _exp {[classId: number]: number}
 * @prop {Array<Number>} _skills
 * @prop {Array<Game_Item>} _equips
 * @prop {Number} _actionInputIndex
 * @prop {Game_Item} _lastMenuSkill
 * @prop {Game_Item} _lastBattleSkill
 * @prop {String} _lastCommandSymbol
 * @prop {Object} _stateSteps {[stateId: number]: number}
 */
function Game_Actor() {
    this.initialize.apply(this, arguments);
}

Game_Actor.prototype = Object.create(Game_Battler.prototype);
Game_Actor.prototype.constructor = Game_Actor;

Object.defineProperty(Game_Actor.prototype, 'level', {
    get: function() {
        return this._level;
    },
    configurable: true
});

/**
 *  オブジェクト生成時の初期化。
 * @param {Number} actorId
 */
Game_Actor.prototype.initialize = function(actorId) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
};

/**
 * 
 */
Game_Actor.prototype.initMembers = function() {
    Game_Battler.prototype.initMembers.call(this);
    this._actorId = 0;
    this._name = '';
    this._nickname = '';
    this._classId = 0;
    this._level = 0;
    this._characterName = '';
    this._characterIndex = 0;
    this._faceName = '';
    this._faceIndex = 0;
    this._battlerName = '';
    this._exp = {};
    this._skills = [];
    this._equips = [];
    this._actionInputIndex = 0;
    this._lastMenuSkill = new Game_Item();
    this._lastBattleSkill  = new Game_Item();
    this._lastCommandSymbol = '';
};

/**
 * @param {Number} actorId
 */
Game_Actor.prototype.setup = function(actorId) {
    var actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._profile = actor.profile;
    this._classId = actor.classId;
    this._level = actor.initialLevel;
    this.initImages();
    this.initExp();
    this.initSkills();
    this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};

    /**
     * Returns the id of the actor.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.actorId = function() {
    return this._actorId;
};

    /**
     * Returns the database information of the actor.
     * 
     * @returns {RPG.Actor} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.actor = function() {
    return $dataActors[this._actorId];
};

    /**
     * Sets the actor name.
     * 
     * @param {String} name 
     * @memberof Game_Actor
     */
Game_Actor.prototype.name = function() {
    return this._name;
};

    /**
     * Sets the actor name.
     * 
     * @param {String} name 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setName = function(name) {
    this._name = name;
};

    /**
     * Returns the nickname of the actor.
     * 
     * @returns {String} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.nickname = function() {
    return this._nickname;
};

    /**
     * Sets the nickname of the actor.
     * 
     * @param {String} nickname 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setNickname = function(nickname) {
    this._nickname = nickname;
};

    /**
     * Returns the actor profile.
     * 
     * @returns {String} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.profile = function() {
    return this._profile;
};

    /**
     * Sets the actor profile.
     * 
     * @param {String} profile 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setProfile = function(profile) {
    this._profile = profile;
};

/**
 * @returns {String}
 */
Game_Actor.prototype.characterName = function() {
    return this._characterName;
};

/**
 * @returns {Number}
 */
Game_Actor.prototype.characterIndex = function() {
    return this._characterIndex;
};

    /**
     * Returns the face name of the actor; this is
     * the image of faces for the actor.
     * @returns {String} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.faceName = function() {
    return this._faceName;
};

    /**
     * Returns the face index of the actor.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.faceIndex = function() {
    return this._faceIndex;
};

/**
 * @returns {String}
 */
Game_Actor.prototype.battlerName = function() {
    return this._battlerName;
};

    /**
     * Clears all states from the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.clearStates = function() {
    Game_Battler.prototype.clearStates.call(this);
    this._stateSteps = {};
};

    /**
     * Erase the specified state from the actor.
     * 
     * @param {Number} stateId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.eraseState = function(stateId) {
    Game_Battler.prototype.eraseState.call(this, stateId);
    delete this._stateSteps[stateId];
};

    /**
     * Reset state count of the specified state.
     * 
     * @param {Number} stateId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.resetStateCounts = function(stateId) {
    Game_Battler.prototype.resetStateCounts.call(this, stateId);
    this._stateSteps[stateId] = $dataStates[stateId].stepsToRemove;
};

    /**
     * Initialize images of the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.initImages = function() {
    var actor = this.actor();
    this._characterName = actor.characterName;
    this._characterIndex = actor.characterIndex;
    this._faceName = actor.faceName;
    this._faceIndex = actor.faceIndex;
    this._battlerName = actor.battlerName;
};

    /**
     * Returns the exp required to level.
     * 
     * @param {Number} level 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.expForLevel = function(level) {
    var c = this.currentClass();
    var basis = c.expParams[0];
    var extra = c.expParams[1];
    var acc_a = c.expParams[2];
    var acc_b = c.expParams[3];
    return Math.round(basis*(Math.pow(level-1, 0.9+acc_a/250))*level*
            (level+1)/(6+Math.pow(level,2)/50/acc_b)+(level-1)*extra);
};

    /**
     * Initialize exp of the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.initExp = function() {
    this._exp[this._classId] = this.currentLevelExp();
};

    /**
     * Returns the current experience points of the actor.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.currentExp = function() {
    return this._exp[this._classId];
};

    /**
     * Returns the current level's experience for the actor.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.currentLevelExp = function() {
    return this.expForLevel(this._level);
};

    /**
     * Returns the experience points for the next level of the actor.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.nextLevelExp = function() {
    return this.expForLevel(this._level + 1);
};

    /**
     * Returns the next required experience points for the actor to level up.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.nextRequiredExp = function() {
    return this.nextLevelExp() - this.currentExp();
};

    /**
     * Returns the maximum level of the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.maxLevel = function() {
    return this.actor().maxLevel;
};

    /**
     * Returns true if the actor is max level.
     * 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isMaxLevel = function() {
    return this._level >= this.maxLevel();
};

    /**
     * Initialize actor skills.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.initSkills = function() {
    this._skills = [];
    this.currentClass().learnings.forEach(function(learning) {
        if (learning.level <= this._level) {
            this.learnSkill(learning.skillId);
        }
    }, this);
};

    /**
     * Initialize actor equipment in the given slots.
     * 
     * @param {Array<Number>} equips 
     * @memberof Game_Actor
     */
Game_Actor.prototype.initEquips = function(equips) {
    var slots = this.equipSlots();
    var maxSlots = slots.length;
    this._equips = [];
    for (var i = 0; i < maxSlots; i++) {
        this._equips[i] = new Game_Item();
    }
    for (var j = 0; j < equips.length; j++) {
        if (j < maxSlots) {
            this._equips[j].setEquip(slots[j] === 1, equips[j]);
        }
    }
    this.releaseUnequippableItems(true);
    this.refresh();
};

    /**
     * Returns the equip slots of the actor.
     * 
     * @returns {Array<Number>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.equipSlots = function() {
    var slots = [];
    for (var i = 1; i < $dataSystem.equipTypes.length; i++) {
        slots.push(i);
    }
    if (slots.length >= 2 && this.isDualWield()) {
        slots[1] = 1;
    }
    return slots;
};

    /**
     * Returns the equipment of the actor.
     * 
     * @returns {Array<RPG.EquipItem>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.equips = function() {
    return this._equips.map(function(item) {
        return item.object();
    });
};

    /**
     * Returns the weapon of the actor.
     * 
     * @returns {Array<RPG.Weapon>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.weapons = function() {
    return this.equips().filter(function(item) {
        return item && DataManager.isWeapon(item);
    });
};

    /**
     * Returns the armor of the actor.
     * 
     * @returns {Array<RPG.Armor>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.armors = function() {
    return this.equips().filter(function(item) {
        return item && DataManager.isArmor(item);
    });
};

    /**
     * Returns true if the actor has a weapon.
     * 
     * @param {RPG.Weapon} weapon 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.hasWeapon = function(weapon) {
    return this.weapons().contains(weapon);
};

    /**
     * Returns true if the actor has armor.
     * 
     * @param {RPG.Armor} armor 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.hasArmor = function(armor) {
    return this.armors().contains(armor);
};

    /**
     * Returns true if the equip change is okay in the given slot.
     * 
     * @param {Number} slotId 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isEquipChangeOk = function(slotId) {
    return (!this.isEquipTypeLocked(this.equipSlots()[slotId]) &&
            !this.isEquipTypeSealed(this.equipSlots()[slotId]));
};

    /**
     * Changes the actor equipment in the given slot with the
     * given equip item. Places the original item into the party
     * inventory.
     * @param {Number} slotId 
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
Game_Actor.prototype.changeEquip = function(slotId, item) {
    if (this.tradeItemWithParty(item, this.equips()[slotId]) &&
            (!item || this.equipSlots()[slotId] === item.etypeId)) {
        this._equips[slotId].setObject(item);
        this.refresh();
    }
};

    /**
     * Forces the actor to change equipment in the given slot
     * with the given equip item without placing the item back into
     * the party inventory.
     * @param {Number} slotId 
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
    this._equips[slotId].setObject(item);
    this.releaseUnequippableItems(true);
    this.refresh();
};

    /**
     * Trades the new item with the old item in the party inventory.
     * 
     * @param {RPG.EquipItem} newItem 
     * @param {RPG.EquipItem} oldItem 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.tradeItemWithParty = function(newItem, oldItem) {
    if (newItem && !$gameParty.hasItem(newItem)) {
        return false;
    } else {
        $gameParty.gainItem(oldItem, 1);
        $gameParty.loseItem(newItem, 1);
        return true;
    }
};

    /**
     * Changes the actor equip with an item based on the equip id.
     * 
     * @param {Number} etypeId 
     * @param {Number} itemId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.changeEquipById = function(etypeId, itemId) {
    var slotId = etypeId - 1;
    if (this.equipSlots()[slotId] === 1) {
        this.changeEquip(slotId, $dataWeapons[itemId]);
    } else {
        this.changeEquip(slotId, $dataArmors[itemId]);
    }
};

    /**
     * Returns true if the actor is equipped with the specific item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isEquipped = function(item) {
    return this.equips().contains(item);
};

    /**
     * Discards the given equip item from the actor; item
     * is not return to the party inventory.
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
Game_Actor.prototype.discardEquip = function(item) {
    var slotId = this.equips().indexOf(item);
    if (slotId >= 0) {
        this._equips[slotId].setObject(null);
    }
};

    /**
     * Returns items the actor can't normally equip to the party inventory.
     * 
     * @param {Boolean} forcing 
     * @memberof Game_Actor
     */
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
    for (;;) {
        var slots = this.equipSlots();
        var equips = this.equips();
        var changed = false;
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item && (!this.canEquip(item) || item.etypeId !== slots[i])) {
                if (!forcing) {
                    this.tradeItemWithParty(null, item);
                }
                this._equips[i].setObject(null);
                changed = true;
            }
        }
        if (!changed) {
            break;
        }
    }
};

    /**
     * Clears the actor's equipment; items are returned to the inventory.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.clearEquipments = function() {
    var maxSlots = this.equipSlots().length;
    for (var i = 0; i < maxSlots; i++) {
        if (this.isEquipChangeOk(i)) {
            this.changeEquip(i, null);
        }
    }
};

    /**
     * Optimize the actor's equipment.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.optimizeEquipments = function() {
    var maxSlots = this.equipSlots().length;
    this.clearEquipments();
    for (var i = 0; i < maxSlots; i++) {
        if (this.isEquipChangeOk(i)) {
            this.changeEquip(i, this.bestEquipItem(i));
        }
    }
};

    /**
     * Equips the best item in the given slot.
     * 
     * @param {Number} slotId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.bestEquipItem = function(slotId) {
    var etypeId = this.equipSlots()[slotId];
    var items = $gameParty.equipItems().filter(function(item) {
        return item.etypeId === etypeId && this.canEquip(item);
    }, this);
    var bestItem = null;
    var bestPerformance = -1000;
    for (var i = 0; i < items.length; i++) {
        var performance = this.calcEquipItemPerformance(items[i]);
        if (performance > bestPerformance) {
            bestPerformance = performance;
            bestItem = items[i];
        }
    }
    return bestItem;
};

    /**
     * Calculates the equip item performance and returns the sum/difference.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.calcEquipItemPerformance = function(item) {
    return item.params.reduce(function(a, b) {
        return a + b;
    });
}

/**
 * @param  {RPG.Skill} skill
 * @return {Boolean}
 */
Game_Actor.prototype.isSkillWtypeOk = function(skill) {
    var wtypeId1 = skill.requiredWtypeId1;
    var wtypeId2 = skill.requiredWtypeId2;
    if ((wtypeId1 === 0 && wtypeId2 === 0) ||
            (wtypeId1 > 0 && this.isWtypeEquipped(wtypeId1)) ||
            (wtypeId2 > 0 && this.isWtypeEquipped(wtypeId2))) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {Number} wtypeId
 * @return {Boolean}
 */
Game_Actor.prototype.isWtypeEquipped = function(wtypeId) {
    return this.weapons().some(function(weapon) {
        return weapon.wtypeId === wtypeId;
    });
};

    /**
     * Refreshes the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.refresh = function() {
    this.releaseUnequippableItems(false);
    Game_Battler.prototype.refresh.call(this);
};

/**
 * @returns {Boolean}
 */
Game_Actor.prototype.isActor = function() {
    return true;
};

/**
 * @returns {Game_Party}
 */
Game_Actor.prototype.friendsUnit = function() {
    return $gameParty;
};

/**
 * @return {Game_Troop}
 */
Game_Actor.prototype.opponentsUnit = function() {
    return $gameTroop;
};

/**
 * @returns {Number}
 */
Game_Actor.prototype.index = function() {
    return $gameParty.members().indexOf(this);
};

    /**
     * Returns true if the actor is a member in battle.
     * 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isBattleMember = function() {
    return $gameParty.battleMembers().contains(this);
};

/**
 * @returns {Boolean}
 */
Game_Actor.prototype.isFormationChangeOk = function() {
    return true;
};

    /**
     * Returns the current class of the actor from the database.
     * 
     * @returns {RPG.Class} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.currentClass = function() {
    return $dataClasses[this._classId];
};

    /**
     * Returns true if the actor is the specified class from the database.
     * 
     * @param {RPG.Class} gameClass 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isClass = function(gameClass) {
    return gameClass && this._classId === gameClass.id;
};

    /**
     * Returns the actor's skills; even if the skills are not usable.
     * 
     * @returns {Array<RPG.Skill>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.skills = function() {
    var list = [];
    this._skills.concat(this.addedSkills()).forEach(function(id) {
        if (!list.contains($dataSkills[id])) {
            list.push($dataSkills[id]);
        }
    });
    return list;
};

    /**
     * Returns the usable skills of the actor.
     * 
     * @returns {Array<RPG.Skill>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.usableSkills = function() {
    return this.skills().filter(function(skill) {
        return this.canUse(skill);
    }, this);
};

/**
 * @returns {Array<*>}
 */
Game_Actor.prototype.traitObjects = function() {
    var objects = Game_Battler.prototype.traitObjects.call(this);
    objects = objects.concat([this.actor(), this.currentClass()]);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            objects.push(item);
        }
    }
    return objects;
};

    /**
     * Returns the attack element ids.
     * 
     * @returns {Array<Number>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.attackElements = function() {
    var set = Game_Battler.prototype.attackElements.call(this);
    if (this.hasNoWeapons() && !set.contains(this.bareHandsElementId())) {
        set.push(this.bareHandsElementId());
    }
    return set;
};

    /**
     * Returns true if the actor has no weapon.
     * 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.hasNoWeapons = function() {
    return this.weapons().length === 0;
};

    /**
     * Returns the element id of barehanded attacks.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.bareHandsElementId = function() {
    return 1;
};

/**
 * @param {Number} paramId
 * @returns {Number}
 */
Game_Actor.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return 9999;    // MHP
    }
    return Game_Battler.prototype.paramMax.call(this, paramId);
};

/**
 * @param {Number} paramId
 * @returns {Number}
 */
Game_Actor.prototype.paramBase = function(paramId) {
    return this.currentClass().params[paramId][this._level];
};

/**
 * @param {Number} paramId
 * @returns {Number}
 */
Game_Actor.prototype.paramPlus = function(paramId) {
    var value = Game_Battler.prototype.paramPlus.call(this, paramId);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            value += item.params[paramId];
        }
    }
    return value;
};

    /**
     * Returns the first attack animation id.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.attackAnimationId1 = function() {
    if (this.hasNoWeapons()) {
        return this.bareHandsAnimationId();
    } else {
        var weapons = this.weapons();
        return weapons[0] ? weapons[0].animationId : 0;
    }
};

    /**
     * Returns the second attack animation id.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.attackAnimationId2 = function() {
    var weapons = this.weapons();
    return weapons[1] ? weapons[1].animationId : 0;
};

    /**
     * Returns the animation id for a barehanded attack.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.bareHandsAnimationId = function() {
    return 1;
};

    /**
     * Change the actor experience points; leveling up the actor
     * if it's above the required exp for the current level.
     * If show is set to true, actor level up with be displayed.
     * @param {Number} exp 
     * @param {Boolean} show 
     * @memberof Game_Actor
     */
Game_Actor.prototype.changeExp = function(exp, show) {
    this._exp[this._classId] = Math.max(exp, 0);
    var lastLevel = this._level;
    var lastSkills = this.skills();
    while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
        this.levelUp();
    }
    while (this.currentExp() < this.currentLevelExp()) {
        this.levelDown();
    }
    if (show && this._level > lastLevel) {
        this.displayLevelUp(this.findNewSkills(lastSkills));
    }
    this.refresh();
};

    /**
     * Level up the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.levelUp = function() {
    this._level++;
    this.currentClass().learnings.forEach(function(learning) {
        if (learning.level === this._level) {
            this.learnSkill(learning.skillId);
        }
    }, this);
};

    /**
     * Level down the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.levelDown = function() {
    this._level--;
};
/**
 * @param  {Array<RPG.Skill>} lastSkills
 * @returns {Array<RPG.Skill>}
 */
Game_Actor.prototype.findNewSkills = function(lastSkills) {
    var newSkills = this.skills();
    for (var i = 0; i < lastSkills.length; i++) {
        var index = newSkills.indexOf(lastSkills[i]);
        if (index >= 0) {
            newSkills.splice(index, 1);
        }
    }
    return newSkills;
};

    /**
     * Displays the actor level up in a message window, with the learned skills.
     * 
     * @param {Array<RPG.Skill>} newSkills 
     * @memberof Game_Actor
     */
Game_Actor.prototype.displayLevelUp = function(newSkills) {
    var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
    $gameMessage.newPage();
    $gameMessage.add(text);
    newSkills.forEach(function(skill) {
        $gameMessage.add(TextManager.obtainSkill.format(skill.name));
    });
};

    /**
     * Gives the specified exp to the actor.
     * 
     * @param {Number} exp 
     * @memberof Game_Actor
     */
Game_Actor.prototype.gainExp = function(exp) {
    var newExp = this.currentExp() + Math.round(exp * this.finalExpRate());
    this.changeExp(newExp, this.shouldDisplayLevelUp());
};

    /**
     * Returns the final exp rate of the actor based on if the actor 
     * is a reserved party member or an active battle member. 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.finalExpRate = function() {
    return this.exr * (this.isBattleMember() ? 1 : this.benchMembersExpRate());
};

    /**
     * Returns the exp rate of actors not in battle; this is set in the database.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.benchMembersExpRate = function() {
    return $dataSystem.optExtraExp ? 1 : 0;
};

    /**
     * Returns true if the actor should display level up in a message window.
     * 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.shouldDisplayLevelUp = function() {
    return true;
};

    /**
     * Changes the actor level; if show is set to true,
     * the actor level will be displayed.
     * @param {Number} level 
     * @param {Boolean} show 
     * @memberof Game_Actor
     */
Game_Actor.prototype.changeLevel = function(level, show) {
    level = level.clamp(1, this.maxLevel());
    this.changeExp(this.expForLevel(level), show);
};

    /**
     * Actor learns the specified skill given the skill id.
     * 
     * @param {Number} skillId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.learnSkill = function(skillId) {
    if (!this.isLearnedSkill(skillId)) {
        this._skills.push(skillId);
        this._skills.sort(function(a, b) {
            return a - b;
        });
    }
};

    /**
     * Actor forgets the specified skill given the skill id from 
     * the actor's usable skills.
     * @param {Number} skillId 
     * @memberof Game_Actor
     */
Game_Actor.prototype.forgetSkill = function(skillId) {
    var index = this._skills.indexOf(skillId);
    if (index >= 0) {
        this._skills.splice(index, 1);
    }
};

    /**
     * Returns true if the actor has learned the specified
     * skill given the specified skill id.
     * @param {Number} skillId 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isLearnedSkill = function(skillId) {
    return this._skills.contains(skillId);
};

/**
 * @param {Number} skillId
 * @returns {Boolean}
 */
Game_Actor.prototype.hasSkill = function(skillId) {
    return this.skills().contains($dataSkills[skillId]);
};

    /**
     * Changes the actor class; if keep is true, the actor
     * will retain their experience points.
     * @param {Number} classId 
     * @param {Boolean} keepExp 
     * @memberof Game_Actor
     */
Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this.currentExp();
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

/**
 * @param  {String} characterName
 * @param {Number} characterIndex
 */
Game_Actor.prototype.setCharacterImage = function(characterName, characterIndex) {
    this._characterName = characterName;
    this._characterIndex = characterIndex;
};

    /**
     * Sets the face image of the actor given the face image (from database)
     * and face index within the iamge.
     * 
     * @param {String} faceName 
     * @param {Number} faceIndex 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setFaceImage = function(faceName, faceIndex) {
    this._faceName = faceName;
    this._faceIndex = faceIndex;
};

    /**
     * Sets the battler image of the actor; this is the sprite displayed
     * in the side view mode.
     * @param {String} battlerName 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setBattlerImage = function(battlerName) {
    this._battlerName = battlerName;
};

    /**
     * Returns true if the actor sprite is visible.
     * 
     * @returns {Boolean} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.isSpriteVisible = function() {
    return $gameSystem.isSideView();
};

    /**
     * Starts the animation on the actor given the specified animation id;
     * if  mirror is set to true, the animation will be mirrored. If a delay is enter,
     * the animation will be delayed.
     * @param {Number} animationId 
     * @param {Boolean} mirror 
     * @param {Number} delay 
     * @memberof Game_Actor
     */
Game_Actor.prototype.startAnimation = function(animationId, mirror, delay) {
    mirror = !mirror;
    Game_Battler.prototype.startAnimation.call(this, animationId, mirror, delay);
};

/**
 * @param {Game_Action}
 */
Game_Actor.prototype.performActionStart = function(action) {
    Game_Battler.prototype.performActionStart.call(this, action);
};

/**
 * @param {Game_Action}
 */
Game_Actor.prototype.performAction = function(action) {
    Game_Battler.prototype.performAction.call(this, action);
    if (action.isAttack()) {
        this.performAttack();
    } else if (action.isGuard()) {
        this.requestMotion('guard');
    } else if (action.isMagicSkill()) {
        this.requestMotion('spell');
    } else if (action.isSkill()) {
        this.requestMotion('skill');
    } else if (action.isItem()) {
        this.requestMotion('item');
    }
};

/**
 */
Game_Actor.prototype.performActionEnd = function() {
    Game_Battler.prototype.performActionEnd.call(this);
};

    /**
     * Performs the attack motion for the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.performAttack = function() {
    var weapons = this.weapons();
    var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
    var attackMotion = $dataSystem.attackMotions[wtypeId];
    if (attackMotion) {
        if (attackMotion.type === 0) {
            this.requestMotion('thrust');
        } else if (attackMotion.type === 1) {
            this.requestMotion('swing');
        } else if (attackMotion.type === 2) {
            this.requestMotion('missile');
        }
        this.startWeaponAnimation(attackMotion.weaponImageId);
    }
};

/**
 * 
 */
Game_Actor.prototype.performDamage = function() {
    Game_Battler.prototype.performDamage.call(this);
    if (this.isSpriteVisible()) {
        this.requestMotion('damage');
    } else {
        $gameScreen.startShake(5, 5, 10);
    }
    SoundManager.playActorDamage();
};

/**
 * 
 */
Game_Actor.prototype.performEvasion = function() {
    Game_Battler.prototype.performEvasion.call(this);
    this.requestMotion('evade');
};

/**
 * 
 */
Game_Actor.prototype.performMagicEvasion = function() {
    Game_Battler.prototype.performMagicEvasion.call(this);
    this.requestMotion('evade');
};

/**
 * 
 */
Game_Actor.prototype.performCounter = function() {
    Game_Battler.prototype.performCounter.call(this);
    this.performAttack();
};

/**
 * 
 */
Game_Actor.prototype.performCollapse = function() {
    Game_Battler.prototype.performCollapse.call(this);
    if ($gameParty.inBattle()) {
        SoundManager.playActorCollapse();
    }
};

    /**
     * Perform the victory motion for the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.performVictory = function() {
    if (this.canMove()) {
        this.requestMotion('victory');
    }
};

    /**
     * Performs the escape motion for the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.performEscape = function() {
    if (this.canMove()) {
        this.requestMotion('escape');
    }
};

    /**
     * Creates the action list for the actor.
     * 
     * @returns {Array<Game_Action>} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.makeActionList = function() {
    var list = [];
    var action = new Game_Action(this);
    action.setAttack();
    list.push(action);
    this.usableSkills().forEach(function(skill) {
        action = new Game_Action(this);
        action.setSkill(skill.id);
        list.push(action);
    }, this);
    return list;
};

    /**
     * Creates the auto battle actions for the game actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.makeAutoBattleActions = function() {
    for (var i = 0; i < this.numActions(); i++) {
        var list = this.makeActionList();
        var maxValue = Number.MIN_VALUE;
        for (var j = 0; j < list.length; j++) {
            var value = list[j].evaluate();
            if (value > maxValue) {
                maxValue = value;
                this.setAction(i, list[j]);
            }
        }
    }
    this.setActionState('waiting');
};

/**
 * 
 */
Game_Actor.prototype.makeConfusionActions = function() {
    for (var i = 0; i < this.numActions(); i++) {
        this.action(i).setConfusion();
    }
    this.setActionState('waiting');
};

/**
 * 
 */
Game_Actor.prototype.makeActions = function() {
    Game_Battler.prototype.makeActions.call(this);
    if (this.numActions() > 0) {
        this.setActionState('undecided');
    } else {
        this.setActionState('waiting');
    }
    if (this.isAutoBattle()) {
        this.makeAutoBattleActions();
    } else if (this.isConfused()) {
        this.makeConfusionActions();
    }
};

    /**
     * Handler for when the player walks on the map scene.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.onPlayerWalk = function() {
    this.clearResult();
    this.checkFloorEffect();
    if ($gamePlayer.isNormal()) {
        this.turnEndOnMap();
        this.states().forEach(function(state) {
            this.updateStateSteps(state);
        }, this);
        this.showAddedStates();
        this.showRemovedStates();
    }
};

/**
 * @param  {RPG.State} state
 */
Game_Actor.prototype.updateStateSteps = function(state) {
    if (state.removeByWalking) {
        if (this._stateSteps[state.id] > 0) {
            if (--this._stateSteps[state.id] === 0) {
                this.removeState(state.id);
            }
        }
    }
};

    /**
     * Shows the added states to the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.showAddedStates = function() {
    this.result().addedStateObjects().forEach(function(state) {
        if (state.message1) {
            $gameMessage.add(this._name + state.message1);
        }
    }, this);
};

    /**
     * Shows the removed states from the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.showRemovedStates = function() {
    this.result().removedStateObjects().forEach(function(state) {
        if (state.message4) {
            $gameMessage.add(this._name + state.message4);
        }
    }, this);
};

/**
 * @returns {Number}
 */
Game_Actor.prototype.stepsForTurn = function() {
    return 20;
};

/**
 * 
 */
Game_Actor.prototype.turnEndOnMap = function() {
    if ($gameParty.steps() % this.stepsForTurn() === 0) {
        this.onTurnEnd();
        if (this.result().hpDamage > 0) {
            this.performMapDamage();
        }
    }
};

    /**
     * Checks the effect of the floor on the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.checkFloorEffect = function() {
    if ($gamePlayer.isOnDamageFloor()) {
        this.executeFloorDamage();
    }
};

    /**
     * Executes the floor dmaage on the actor.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.executeFloorDamage = function() {
    var damage = Math.floor(this.basicFloorDamage() * this.fdr);
    damage = Math.min(damage, this.maxFloorDamage());
    this.gainHp(-damage);
    if (damage > 0) {
        this.performMapDamage();
    }
};

    /**
     * Returns the basic floor damage.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.basicFloorDamage = function() {
    return 10;
};

    /**
     * Returns the max floor damage.
     * 
     * @returns {Number} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.maxFloorDamage = function() {
    return $dataSystem.optFloorDeath ? this.hp : Math.max(this.hp - 1, 0);
};

    /**
     * Perform damage to the actor on the map scene.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.performMapDamage = function() {
    if (!$gameParty.inBattle()) {
        $gameScreen.startFlashForDamage();
    }
};

    /**
     * Clears all of the actor's animations.
     * 
     * @memberof Game_Actor
     */
Game_Actor.prototype.clearActions = function() {
    Game_Battler.prototype.clearActions.call(this);
    this._actionInputIndex = 0;
};

    /**
     * Returns action the actor is inputting.
     * 
     * @returns {Game_Action} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.inputtingAction = function() {
    return this.action(this._actionInputIndex);
};

/**
 * @returns {Boolean}
 */
Game_Actor.prototype.selectNextCommand = function() {
    if (this._actionInputIndex < this.numActions() - 1) {
        this._actionInputIndex++;
        return true;
    } else {
        return false;
    }
};

/**
 * @returns {Boolean}
 */
Game_Actor.prototype.selectPreviousCommand = function() {
    if (this._actionInputIndex > 0) {
        this._actionInputIndex--;
        return true;
    } else {
        return false;
    }
};

    /**
     * Returns the last menu skill of the actor.
     * 
     * @returns {RPG.Skill} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.lastMenuSkill = function() {
    return this._lastMenuSkill.object();
};

    /**
     * @param {RPG.Skill} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setLastMenuSkill = function(skill) {
    this._lastMenuSkill.setObject(skill);
};

    /**
     * Returns the last battle skill of the actor.
     * 
     * @returns {RPG.Skill} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.lastBattleSkill = function() {
    return this._lastBattleSkill.object();
};

    /**
     * @param {RPG.Skill} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setLastBattleSkill = function(skill) {
    this._lastBattleSkill.setObject(skill);
};

    /**
     * Returns the last command symbol that the actor used.
     * 
     * @returns {String} 
     * @memberof Game_Actor
     */
Game_Actor.prototype.lastCommandSymbol = function() {
    return this._lastCommandSymbol;
};

    /**
     * Sets the last command symbol to the given symbol; this is the
     * selected command in the battle menu.
     * @param {String} symbol 
     * @memberof Game_Actor
     */
Game_Actor.prototype.setLastCommandSymbol = function(symbol) {
    this._lastCommandSymbol = symbol;
};

/**
 * @param  {RPG.BaseItem} item
 */
Game_Actor.prototype.testEscape = function(item) {
    return item.effects.some(function(effect, index, ar) {
        return effect && effect.code === Game_Action.EFFECT_SPECIAL;
    });
};

/**
 * @param {RPG.UsableItem} item
 * @returns {Boolean}
 */
Game_Actor.prototype.meetsUsableItemConditions = function(item) {
    if ($gameParty.inBattle() && !BattleManager.canEscape() && this.testEscape(item)) {
        return false;
    }
    return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};





/**
 * The game object declare class for an enemy.
 * @class Game_Enemy
 * @extends Game_Battler
 *
 * @prop {Number} _enemyId
 * @prop {String} _letter
 * @prop {Boolean} _plural
 * @prop {Number} _screenX
 * @prop {Number} _screenY
 */
function Game_Enemy() {
    this.initialize.apply(this, arguments);
}

Game_Enemy.prototype = Object.create(Game_Battler.prototype);
Game_Enemy.prototype.constructor = Game_Enemy;

/**
 *  オブジェクト生成時の初期化。
 * @param {Number} enemyId
 * @param {Number} x
 * @param {Number} y
 */
Game_Enemy.prototype.initialize = function(enemyId, x, y) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(enemyId, x, y);
};

/**
 * 
 */
Game_Enemy.prototype.initMembers = function() {
    Game_Battler.prototype.initMembers.call(this);
    this._enemyId = 0;
    this._letter = '';
    this._plural = false;
    this._screenX = 0;
    this._screenY = 0;
};

/**
 * @param {Number} enemyId
 * @param {Number} x
 * @param {Number} y
 */
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    this._enemyId = enemyId;
    this._screenX = x;
    this._screenY = y;
    this.recoverAll();
};

    /**
     * @returns {Boolean} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.isEnemy = function() {
    return true;
};

    /**
     * Returns the other troops in the enemy team.
     * @returns {Game_Troop} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.friendsUnit = function() {
    return $gameTroop;
};

    /**
     * Returns the game party.
     * 
     * @returns {Game_Party} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.opponentsUnit = function() {
    return $gameParty;
};

/**
 * @returns {Number}
 */
Game_Enemy.prototype.index = function() {
    return $gameTroop.members().indexOf(this);
};

/**
 * @returns {Boolean}
 */
Game_Enemy.prototype.isBattleMember = function() {
    return this.index() >= 0;
};

    /**
     * Returns the enemy id.
     * 
     * @returns {Number} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.enemyId = function() {
    return this._enemyId;
};

    /**
     * Returns the enemy information from the database.
     * 
     * @returns {RPG.Enemy} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.enemy = function() {
    return $dataEnemies[this._enemyId];
};

/**
 * @return {*} RPG.Trait ?
 */
Game_Enemy.prototype.traitObjects = function() {
    return Game_Battler.prototype.traitObjects.call(this).concat(this.enemy());
};

/**
 * @param {Number} paramId
 * @returns {Number}
 */
Game_Enemy.prototype.paramBase = function(paramId) {
    return this.enemy().params[paramId];
};

    /**
     * Returns the enemy's exp amount.
     * @returns {Number}
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.exp = function() {
    return this.enemy().exp;
};

    /**
     * Returns enemy's given gold.
     * @returns {Number}
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.gold = function() {
    return this.enemy().gold;
};

    /**
     * Creates the drop items for the enemy specified by the database.
     * 
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.makeDropItems = function() {
    return this.enemy().dropItems.reduce(function(r, di) {
        if (di.kind > 0 && Math.random() * di.denominator < this.dropItemRate()) {
            return r.concat(this.itemObject(di.kind, di.dataId));
        } else {
            return r;
        }
    }.bind(this), []);
};

    /**
     * Returns the item drop rate of the enemy.
     * 
     * @returns {Number} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.dropItemRate = function() {
    return $gameParty.hasDropItemDouble() ? 2 : 1;
};

/**
 * @param {Number} kind 1:item 2:weapon 3:armor
 * @param  {Numver} dataId
 * @returns {RPG.BaseItem}
 */
Game_Enemy.prototype.itemObject = function(kind, dataId) {
    if (kind === 1) {
        return $dataItems[dataId];
    } else if (kind === 2) {
        return $dataWeapons[dataId];
    } else if (kind === 3) {
        return $dataArmors[dataId];
    } else {
        return null;
    }
};

    /**
     * Returns true if the enemy sprite is visible.
     * 
     * @returns {Boolean} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.isSpriteVisible = function() {
    return true;
};

    /**
     * Returns enemy screen X coordinate.
     * 
     * @returns {Number} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.screenX = function() {
    return this._screenX;
};

    /**
     * Returns enemy screen Y position.
     * 
     * @returns {Number} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.screenY = function() {
    return this._screenY;
};

/**
 * @returns {String}
 */
Game_Enemy.prototype.battlerName = function() {
    return this.enemy().battlerName;
};

    /**
     * Returns the hue of the enemy.
     * 
     * @returns {Number} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.battlerHue = function() {
    return this.enemy().battlerHue;
};

/**
 * Returns the enemy original name.
 * @returns {String}
 */
Game_Enemy.prototype.originalName = function() {
    return this.enemy().name;
};

/**
 * Returns the enemy name with letter.
 * @returns {String}
 */
Game_Enemy.prototype.name = function() {
    return this.originalName() + (this._plural ? this._letter : '');
};

/**
 * @returns {Boolean}
 */
Game_Enemy.prototype.isLetterEmpty = function() {
    return this._letter === '';
};

/**
 * @param  {String} letter
 */
Game_Enemy.prototype.setLetter = function(letter) {
    this._letter = letter;
};

/**
 * @param  {Boolean} plural
 */
Game_Enemy.prototype.setPlural = function(plural) {
    this._plural = plural;
};

/**
 * @param  {RPG.Enemy.Action} action
 */
Game_Enemy.prototype.performActionStart = function(action) {
    Game_Battler.prototype.performActionStart.call(this, action);
    this.requestEffect('whiten');
};

/**
 * @param  {RPG.Enemy.Action} action
 */
Game_Enemy.prototype.performAction = function(action) {
    Game_Battler.prototype.performAction.call(this, action);
};

/**
 * 
 */
Game_Enemy.prototype.performActionEnd = function() {
    Game_Battler.prototype.performActionEnd.call(this);
};

/**
 * 
 */
Game_Enemy.prototype.performDamage = function() {
    Game_Battler.prototype.performDamage.call(this);
    SoundManager.playEnemyDamage();
    this.requestEffect('blink');
};

/**
 * 
 */
Game_Enemy.prototype.performCollapse = function() {
    Game_Battler.prototype.performCollapse.call(this);
    switch (this.collapseType()) {
    case 0:
        this.requestEffect('collapse');
        SoundManager.playEnemyCollapse();
        break;
    case 1:
        this.requestEffect('bossCollapse');
        SoundManager.playBossCollapse1();
        break;
    case 2:
        this.requestEffect('instantCollapse');
        break;
    }
};

    /**
     * Transform the enemy into another enemy based on id.
     * 
     * @param {Number} enemyId 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.transform = function(enemyId) {
    var name = this.originalName();
    this._enemyId = enemyId;
    if (this.originalName() !== name) {
        this._letter = '';
        this._plural = false;
    }
    this.refresh();
    if (this.numActions() > 0) {
        this.makeActions();
    }
};
/**
 * @param  {RPG.Enemy.Action} action
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsCondition = function(action) {
    var param1 = action.conditionParam1;
    var param2 = action.conditionParam2;
    switch (action.conditionType) {
    case 1:
        return this.meetsTurnCondition(param1, param2);
    case 2:
        return this.meetsHpCondition(param1, param2);
    case 3:
        return this.meetsMpCondition(param1, param2);
    case 4:
        return this.meetsStateCondition(param1);
    case 5:
        return this.meetsPartyLevelCondition(param1);
    case 6:
        return this.meetsSwitchCondition(param1);
    default:
        return true;
    }
};

/**
 * @param {Number} param1
 * @param {Number} param2
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsTurnCondition = function(param1, param2) {
    var n = $gameTroop.turnCount();
    if (param2 === 0) {
        return n === param1;
    } else {
        return n > 0 && n >= param1 && n % param2 === param1 % param2;
    }
};

/**
 * @param {Number} param1
 * @param {Number} param2
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsHpCondition = function(param1, param2) {
    return this.hpRate() >= param1 && this.hpRate() <= param2;
};

/**
 * @param {Number} param1
 * @param {Number} param2
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsMpCondition = function(param1, param2) {
    return this.mpRate() >= param1 && this.mpRate() <= param2;
};

/**
 * @param {Number} param
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsStateCondition = function(param) {
    return this.isStateAffected(param);
};

/**
 * @param {Number} param
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsPartyLevelCondition = function(param) {
    return $gameParty.highestLevel() >= param;
};

/**
 * @param {Number} param
 * @returns {Boolean}
 */
Game_Enemy.prototype.meetsSwitchCondition = function(param) {
    return $gameSwitches.value(param);
};

    /**
     * Returns true if the enemy action is valid.
     * 
     * @param {RPG.Enemy.Action} action 
     * @returns {Boolean} 
     * @memberof Game_Enemy
     */
Game_Enemy.prototype.isActionValid = function(action) {
    return this.meetsCondition(action) && this.canUse($dataSkills[action.skillId]);
};

/**
 * @param  {Array<RPG.Enemy.Action>} actionList
 * @param {Number} ratingZero
 * @returns {RPG.Enemy.Action}
 */
Game_Enemy.prototype.selectAction = function(actionList, ratingZero) {
    var sum = actionList.reduce(function(r, a) {
        return r + a.rating - ratingZero;
    }, 0);
    if (sum > 0) {
        var value = Math.randomInt(sum);
        for (var i = 0; i < actionList.length; i++) {
            var action = actionList[i];
            value -= action.rating - ratingZero;
            if (value < 0) {
                return action;
            }
        }
    } else {
        return null;
    }
};

/**
 * @param  {Array<RPG.Enemy.Action>} actionList
 */
Game_Enemy.prototype.selectAllActions = function(actionList) {
    var ratingMax = Math.max.apply(null, actionList.map(function(a) {
        return a.rating;
    }));
    var ratingZero = ratingMax - 3;
    actionList = actionList.filter(function(a) {
        return a.rating > ratingZero;
    });
    for (var i = 0; i < this.numActions(); i++) {
        this.action(i).setEnemyAction(this.selectAction(actionList, ratingZero));
    }
};

/**
 * 
 */
Game_Enemy.prototype.makeActions = function() {
    Game_Battler.prototype.makeActions.call(this);
    if (this.numActions() > 0) {
        var actionList = this.enemy().actions.filter(function(a) {
            return this.isActionValid(a);
        }, this);
        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        }
    }
    this.setActionState('waiting');
};




/**
 * The wrapper class for an actor array.
 * Use as global variable  {@link $gameActors}
 * @class Game_Actors
 * 
 * @prop {Array<Game_Actor>} _data
 */
function Game_Actors() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Actors.prototype.initialize = function() {
    this._data = [];
};

    /**
     * Returns the actor with the specified id.
     * 
     * @param {Number} actorId 
     * @returns {Game_Actor} 
     * @memberof Game_Actors
     */
Game_Actors.prototype.actor = function(actorId) {
    if ($dataActors[actorId]) {
        if (!this._data[actorId]) {
            this._data[actorId] = new Game_Actor(actorId);
        }
        return this._data[actorId];
    }
    return null;
};



/**
 * The superclass of {@link Game_Party} and {@link Game_Troop}.
 * @class Game_Unit
 * 
 * @prop {Boolean} _inBattle
 */
function Game_Unit() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Unit.prototype.initialize = function() {
    this._inBattle = false;
};

    /**
     * Returns true if unit is in battle.
     * 
     * @returns {Boolean} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.inBattle = function() {
    return this._inBattle;
};

    /**
     * Returns the list of battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.members = function() {
    return [];
};

    /**
     * Returns the list of alive battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.aliveMembers = function() {
    return this.members().filter(function(member) {
        return member.isAlive();
    });
};

    /**
     * Returns the list of dead battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.deadMembers = function() {
    return this.members().filter(function(member) {
        return member.isDead();
    });
};

    /**
     * Returns the list of movable members.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.movableMembers = function() {
    return this.members().filter(function(member) {
        return member.canMove();
    });
};

    /**
     * Clears the unit's actions.
     * 
     * @memberof Game_Unit
     */
Game_Unit.prototype.clearActions = function() {
    return this.members().forEach(function(member) {
        return member.clearActions();
    });
};

    /**
     * Returns the agility of the unit.
     * 
     * @returns {Number} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.agility = function() {
    var members = this.members();
    if (members.length === 0) {
        return 1;
    }
    var sum = members.reduce(function(r, member) {
        return r + member.agi;
    }, 0);
    return sum / members.length;
};

/**
 * @returns {Number}
 */
Game_Unit.prototype.tgrSum = function() {
    return this.aliveMembers().reduce(function(r, member) {
        return r + member.tgr;
    }, 0);
};

    /**
     * Returns a random target from the game unit.
     * 
     * @returns {Game_Battler} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.randomTarget = function() {
    var tgrRand = Math.random() * this.tgrSum();
    var target = null;
    this.aliveMembers().forEach(function(member) {
        tgrRand -= member.tgr;
        if (tgrRand <= 0 && !target) {
            target = member;
        }
    });
    return target;
};

    /**
     * Returns a random dead target from the game unit.
     * 
     * @returns {Game_Battler} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.randomDeadTarget = function() {
    var members = this.deadMembers();
    if (members.length === 0) {
        return null;
    }
    return members[Math.floor(Math.random() * members.length)];
};

/**
 * @param {Number} index
 * @returns {Game_Battler}
 */
Game_Unit.prototype.smoothTarget = function(index) {
    if (index < 0) {
        index = 0;
    }
    var member = this.members()[index];
    return (member && member.isAlive()) ? member : this.aliveMembers()[0];
};

/**
 * @param {Number} index
 * @returns {Game_Battler}
 */
Game_Unit.prototype.smoothDeadTarget = function(index) {
    if (index < 0) {
        index = 0;
    }
    var member = this.members()[index];
    return (member && member.isDead()) ? member : this.deadMembers()[0];
};

    /**
     * Clears the action results.
     * 
     * @memberof Game_Unit
     */
Game_Unit.prototype.clearResults = function() {
    this.members().forEach(function(member) {
        member.clearResult();
    });
};

    /**
     * Handler for when battle is started.
     * 
     * @memberof Game_Unit
     */
Game_Unit.prototype.onBattleStart = function() {
    this.members().forEach(function(member) {
        member.onBattleStart();
    });
    this._inBattle = true;
};

    /**
     * Handler for when battle has ended.
     * 
     * @memberof Game_Unit
     */
Game_Unit.prototype.onBattleEnd = function() {
    this._inBattle = false;
    this.members().forEach(function(member) {
        member.onBattleEnd();
    });
};

    /**
     * Creates the action's of the game unit.
     * 
     * @memberof Game_Unit
     */
Game_Unit.prototype.makeActions = function() {
    this.members().forEach(function(member) {
        member.makeActions();
    });
};

    /**
     * Selects a member of the unit given a battler.
     * 
     * @param {Game_Battler} activeMember 
     * @memberof Game_Unit
     */
Game_Unit.prototype.select = function(activeMember) {
    this.members().forEach(function(member) {
        if (member === activeMember) {
            member.select();
        } else {
            member.deselect();
        }
    });
};

    /**
     * Returns true if all members of the unit are dead.
     * 
     * @returns {Boolean} 
     * @memberof Game_Unit
     */
Game_Unit.prototype.isAllDead = function() {
    return this.aliveMembers().length === 0;
};

/**
 * @returns {Game_Battler}
 */
Game_Unit.prototype.substituteBattler = function() {
    var members = this.members();
    for (var i = 0; i < members.length; i++) {
        if (members[i].isSubstitute()) {
            return members[i];
        }
    }
};




/**
 * The game object class for the party. Information such as gold and items is included.
 * Use as global variable  {@link $gameParty}
 * @class Game_Party
 * @extends Game_Unit
 * 
 * @prop {Number} ABILITY_ENCOUNTER_HALF [static]
 * @prop {Number} ABILITY_ENCOUNTER_NONE [static]
 * @prop {Number} ABILITY_CANCEL_SURPRISE [static]
 * @prop {Number} ABILITY_RAISE_PREEMPTIVE [static]
 * @prop {Number} ABILITY_GOLD_DOUBLE [static]
 * @prop {Number} ABILITY_DROP_ITEM_DOUBLE [static]
 * 
 * @prop {Number} _gold
 * @prop {Number} _steps
 * @prop {Game_Item} _lastItem
 * @prop {Number} _menuActorId
 * @prop {Number} _targetActorId
 * @prop {Array<Game_Actor>} _actors
 * @prop {Object} _items {[itemId: number]: number}
 * @prop {Object} _weapons {[itemId: number]: number}
 * @prop {Object} _armors {[itemId: number]: number}
 */
function Game_Party() {
    this.initialize.apply(this, arguments);
}

Game_Party.prototype = Object.create(Game_Unit.prototype);
Game_Party.prototype.constructor = Game_Party;

Game_Party.ABILITY_ENCOUNTER_HALF    = 0;
Game_Party.ABILITY_ENCOUNTER_NONE    = 1;
Game_Party.ABILITY_CANCEL_SURPRISE   = 2;
Game_Party.ABILITY_RAISE_PREEMPTIVE  = 3;
Game_Party.ABILITY_GOLD_DOUBLE       = 4;
Game_Party.ABILITY_DROP_ITEM_DOUBLE  = 5;

/**
 *  オブジェクト生成時の初期化。
 */
Game_Party.prototype.initialize = function() {
    Game_Unit.prototype.initialize.call(this);
    this._gold = 0;
    this._steps = 0;
    this._lastItem = new Game_Item();
    this._menuActorId = 0;
    this._targetActorId = 0;
    this._actors = [];
    this.initAllItems();
};

/**
 * 
 */
Game_Party.prototype.initAllItems = function() {
    this._items = {};
    this._weapons = {};
    this._armors = {};
};

/**
 * @return {Boolean}
 */
Game_Party.prototype.exists = function() {
    return this._actors.length > 0;
};

/**
 * Returns number of party member.
 * @return {Number}
 */
Game_Party.prototype.size = function() {
    return this.members().length;
};

/**
 * @return {Boolean}
 */
Game_Party.prototype.isEmpty = function() {
    return this.size() === 0;
};

    /**
     * Returns all party members.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
Game_Party.prototype.members = function() {
    return this.inBattle() ? this.battleMembers() : this.allMembers();
};

/**
 * @returns {Array<Game_Actor>}
 */
Game_Party.prototype.allMembers = function() {
    return this._actors.map(function(id) {
        return $gameActors.actor(id);
    });
};

    /**
     * Returns the battle members in the party.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
Game_Party.prototype.battleMembers = function() {
    return this.allMembers().slice(0, this.maxBattleMembers()).filter(function(actor) {
        return actor.isAppeared();
    });
};

/**
 * Returns the maximum battle members in the party.
 * @returns {Number}
 */
Game_Party.prototype.maxBattleMembers = function() {
    return 4;
};

    /**
     * Returns the leader of the party.
     * 
     * @returns {Game_Actor} 
     * @memberof Game_Party
     */
Game_Party.prototype.leader = function() {
    return this.battleMembers()[0];
};

    /**
     * Revive the battle members of the party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.reviveBattleMembers = function() {
    this.battleMembers().forEach(function(actor) {
        if (actor.isDead()) {
            actor.setHp(1);
        }
    });
};

/**
 * @returns {Array<RPG.Item>}
 */
Game_Party.prototype.items = function() {
    var list = [];
    for (var id in this._items) {
        list.push($dataItems[id]);
    }
    return list;
};

    /**
     * Returns the weapons of the party.
     * 
     * @returns {Array<RPG.Weapon>} 
     * @memberof Game_Party
     */
Game_Party.prototype.weapons = function() {
    var list = [];
    for (var id in this._weapons) {
        list.push($dataWeapons[id]);
    }
    return list;
};

    /**
     * Returns the party's armor.
     * 
     * @returns {Array<RPG.Armor>} 
     * @memberof Game_Party
     */
Game_Party.prototype.armors = function() {
    var list = [];
    for (var id in this._armors) {
        list.push($dataArmors[id]);
    }
    return list;
};

    /**
     * Returns the party's equippable items.
     * 
     * @returns {Array<RPG.EquipItem>} 
     * @memberof Game_Party
     */
Game_Party.prototype.equipItems = function() {
    return this.weapons().concat(this.armors());
};

    /**
     * Returns all items within the party's posession.
     * Items can be of equip item, or item type.
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Party
     */
Game_Party.prototype.allItems = function() {
    return this.items().concat(this.equipItems());
};

/**
 * @param  {RPG.BaseItem} item
 * @returns {Array<RPG.BaseItem>}
 */
Game_Party.prototype.itemContainer = function(item) {
    if (!item) {
        return null;
    } else if (DataManager.isItem(item)) {
        return this._items;
    } else if (DataManager.isWeapon(item)) {
        return this._weapons;
    } else if (DataManager.isArmor(item)) {
        return this._armors;
    } else {
        return null;
    }
};

    /**
     * Sets up the starting party members.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.setupStartingMembers = function() {
    this._actors = [];
    $dataSystem.partyMembers.forEach(function(actorId) {
        if ($gameActors.actor(actorId)) {
            this._actors.push(actorId);
        }
    }, this);
};

    /**
     * @returns {String}
     * @memberof Game_Party
     */
Game_Party.prototype.name = function() {
    var numBattleMembers = this.battleMembers().length;
    if (numBattleMembers === 0) {
        return '';
    } else if (numBattleMembers === 1) {
        return this.leader().name();
    } else {
        return TextManager.partyName.format(this.leader().name());
    }
};

    /**
     * Sets up a test battle with the party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.setupBattleTest = function() {
    this.setupBattleTestMembers();
    this.setupBattleTestItems();
};

    /**
     * Sets up the battle test members.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.setupBattleTestMembers = function() {
    $dataSystem.testBattlers.forEach(function(battler) {
        var actor = $gameActors.actor(battler.actorId);
        if (actor) {
            actor.changeLevel(battler.level, false);
            actor.initEquips(battler.equips);
            actor.recoverAll();
            this.addActor(battler.actorId);
        }
    }, this);
};

    /**
     * Sets up the battle test items.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.setupBattleTestItems = function() {
    $dataItems.forEach(function(item) {
        if (item && item.name.length > 0) {
            this.gainItem(item, this.maxItems(item));
        }
    }, this);
};

    /**
     * Returns the highest level in the party.
     * 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.highestLevel = function() {
    return Math.max.apply(null, this.members().map(function(actor) {
        return actor.level;
    }));
};

    /**
     * Adds an actor to the party given the actor id.
     * 
     * @param {Number} actorId 
     * @memberof Game_Party
     */
Game_Party.prototype.addActor = function(actorId) {
    if (!this._actors.contains(actorId)) {
        this._actors.push(actorId);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};

    /**
     * Removes an actor from the party given the actor id.
     * 
     * @param {Number} actorId 
     * @memberof Game_Party
     */
Game_Party.prototype.removeActor = function(actorId) {
    if (this._actors.contains(actorId)) {
        this._actors.splice(this._actors.indexOf(actorId), 1);
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};

    /**
     * Returns party gold.
     * 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.gold = function() {
    return this._gold;
};

    /**
     * Increases the party gold given a specified amount.
     * 
     * @param {Number} amount 
     * @memberof Game_Party
     */
Game_Party.prototype.gainGold = function(amount) {
    this._gold = (this._gold + amount).clamp(0, this.maxGold());
};

    /**
     * Decreases the party gold given a specified amount.
     * 
     * @param {Number} amount 
     * @memberof Game_Party
     */
Game_Party.prototype.loseGold = function(amount) {
    this.gainGold(-amount);
};

    /**
     * Returns maximum gold of the party.
     * 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.maxGold = function() {
    return 99999999;
};

    /**
     * Returns the number of steps the party has taken.
     * 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.steps = function() {
    return this._steps;
};

    /**
     * Increases the number of steps the party has taken.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.increaseSteps = function() {
    this._steps++;
};

    /**
     * Returns the number of items in the possession of the party of the
     * given item.
     * @param {RPG.BaseItem} item 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.numItems = function(item) {
    var container = this.itemContainer(item);
    return container ? container[item.id] || 0 : 0;
};

    /**
     * Returns the maximum number of items of the given item.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {Number} 
     * @memberof Game_Party
     */
Game_Party.prototype.maxItems = function(item) {
    return 99;
};

/**
 * @param  {RPG.BaseItem} item
 * @returns {Boolean}
 */
Game_Party.prototype.hasMaxItems = function(item) {
    return this.numItems(item) >= this.maxItems(item);
};

    /**
     * Returns true if the party has the given item;
     * if includeEquip is set to true, this will also check party equipment.
     * @param {RPG.BaseItem} item 
     * @param {Boolean} includeEquip 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasItem = function(item, includeEquip) {
    if (includeEquip === undefined) {
        includeEquip = false;
    }
    if (this.numItems(item) > 0) {
        return true;
    } else if (includeEquip && this.isAnyMemberEquipped(item)) {
        return true;
    } else {
        return false;
    }
};

    /**
     * Returns true if any party member has the specified equip item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.isAnyMemberEquipped = function(item) {
    return this.members().some(function(actor) {
        return actor.equips().contains(item);
    });
};

/**
 * @param  {RPG.BaseItem} item
 * @param {Number} amount
 * @param  {Boolean} includeEquip
 */
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    var container = this.itemContainer(item);
    if (container) {
        var lastNumber = this.numItems(item);
        var newNumber = lastNumber + amount;
        container[item.id] = newNumber.clamp(0, this.maxItems(item));
        if (container[item.id] === 0) {
            delete container[item.id];
        }
        if (includeEquip && newNumber < 0) {
            this.discardMembersEquip(item, -newNumber);
        }
        $gameMap.requestRefresh();
    }
};

/**
     * @param  {RPG.EquipItem} item
     * @param {Number} amount
     */
Game_Party.prototype.discardMembersEquip = function(item, amount) {
    var n = amount;
    this.members().forEach(function(actor) {
        while (n > 0 && actor.isEquipped(item)) {
            actor.discardEquip(item);
            n--;
        }
    });
};
    /**
     * @param  {RPG.BaseItem} item
     * @param {Number} amount
     * @param  {Boolean} includeEquip
     */
Game_Party.prototype.loseItem = function(item, amount, includeEquip) {
    this.gainItem(item, -amount, includeEquip);
};

    /**
     * Has the party consume the given item.
     * 
     * @param {RPG.BaseItem} item 
     * @memberof Game_Party
     */
Game_Party.prototype.consumeItem = function(item) {
    if (DataManager.isItem(item) && item.consumable) {
        this.loseItem(item, 1);
    }
};

    /**
     * Returns true if the party can use the item.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.canUse = function(item) {
    return this.members().some(function(actor) {
        return actor.canUse(item);
    });
};

/**
 * @returns {Boolean}
 */
Game_Party.prototype.canInput = function() {
    return this.members().some(function(actor) {
        return actor.canInput();
    });
};

/**
 * @returns {Boolean}
 */
Game_Party.prototype.isAllDead = function() {
    if (Game_Unit.prototype.isAllDead.call(this)) {
        return this.inBattle() || !this.isEmpty();
    } else {
        return false;
    }
};

    /**
     * Handler for when the player walks.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.onPlayerWalk = function() {
    this.members().forEach(function(actor) {
        return actor.onPlayerWalk();
    });
};

    /**
     * Returns the actor that will be used in the current menu;
     * this is for menu scenes that target one actor.
     * @returns {Game_Actor} 
     * @memberof Game_Party
     */
Game_Party.prototype.menuActor = function() {
    var actor = $gameActors.actor(this._menuActorId);
    if (!this.members().contains(actor)) {
        actor = this.members()[0];
    }
    return actor;
};

/**
 * @param  {Game_Actor} actor
 */
Game_Party.prototype.setMenuActor = function(actor) {
    this._menuActorId = actor.actorId();
};

/**
 * 
 */
Game_Party.prototype.makeMenuActorNext = function() {
    var index = this.members().indexOf(this.menuActor());
    if (index >= 0) {
        index = (index + 1) % this.members().length;
        this.setMenuActor(this.members()[index]);
    } else {
        this.setMenuActor(this.members()[0]);
    }
};

/**
 * 
 */
Game_Party.prototype.makeMenuActorPrevious = function() {
    var index = this.members().indexOf(this.menuActor());
    if (index >= 0) {
        index = (index + this.members().length - 1) % this.members().length;
        this.setMenuActor(this.members()[index]);
    } else {
        this.setMenuActor(this.members()[0]);
    }
};

/**
 * @returns {Game_Actor}
 */
Game_Party.prototype.targetActor = function() {
    var actor = $gameActors.actor(this._targetActorId);
    if (!this.members().contains(actor)) {
        actor = this.members()[0];
    }
    return actor;
};

/**
 * @param  {Game_Actor} actor
 */
Game_Party.prototype.setTargetActor = function(actor) {
    this._targetActorId = actor.actorId();
};

    /**
     * Returns the last item selected by the game party.
     * 
     * @returns {RPG.BaseItem} 
     * @memberof Game_Party
     */
Game_Party.prototype.lastItem = function() {
    return this._lastItem.object();
};

/**
 * @param  {RPG.BaseItem} item
 */
Game_Party.prototype.setLastItem = function(item) {
    this._lastItem.setObject(item);
};
/**
 * @param {Number} index1
 * @param {Number} index2
 */
Game_Party.prototype.swapOrder = function(index1, index2) {
    var temp = this._actors[index1];
    this._actors[index1] = this._actors[index2];
    this._actors[index2] = temp;
    $gamePlayer.refresh();
};

    /**
     * Returns the characters that go on the save life.
     * 
     * @returns {Array<Array<*>>} Array of [{String}name, {Number}index]
     * @memberof Game_Party
     */
Game_Party.prototype.charactersForSavefile = function() {
    return this.battleMembers().map(function(actor) {
        return [actor.characterName(), actor.characterIndex()];
    });
};

    /**
     * Returns the actor faces for the save file.
     * 
     * @returns {Array<Array<*>>} 
     * @memberof Game_Party
     */
Game_Party.prototype.facesForSavefile = function() {
    return this.battleMembers().map(function(actor) {
        return [actor.faceName(), actor.faceIndex()];
    });
};

/**
 * @param {Number} abilityId
 * @returns {Boolean}
 */
Game_Party.prototype.partyAbility = function(abilityId) {
    return this.battleMembers().some(function(actor) {
        return actor.partyAbility(abilityId);
    });
};

    /**
     * Returns true if the encounter rate is set to half.
     * 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasEncounterHalf = function() {
    return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_HALF);
};

    /**
     * Returns true if the encounter rate is set to none.
     * 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasEncounterNone = function() {
    return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_NONE);
};

    /**
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasCancelSurprise = function() {
    return this.partyAbility(Game_Party.ABILITY_CANCEL_SURPRISE);
};

    /**
     * Returns true if the party has an increased chance of preemptive strike.
     * 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasRaisePreemptive = function() {
    return this.partyAbility(Game_Party.ABILITY_RAISE_PREEMPTIVE);
};

    /**
     * Returns true if the party has double gold in effect.
     * 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasGoldDouble = function() {
    return this.partyAbility(Game_Party.ABILITY_GOLD_DOUBLE);
};

    /**
     * Returns true if the party has double drop item in effect.
     * 
     * @returns {Boolean} 
     * @memberof Game_Party
     */
Game_Party.prototype.hasDropItemDouble = function() {
    return this.partyAbility(Game_Party.ABILITY_DROP_ITEM_DOUBLE);
};

/**
 * @param {Number} troopAgi
 * @returns {Number}
 */
Game_Party.prototype.ratePreemptive = function(troopAgi) {
    var rate = this.agility() >= troopAgi ? 0.05 : 0.03;
    if (this.hasRaisePreemptive()) {
        rate *= 4;
    }
    return rate;
};

/**
 * @param {Number} troopAgi
 * @returns {Number}
 */
Game_Party.prototype.rateSurprise = function(troopAgi) {
    var rate = this.agility() >= troopAgi ? 0.03 : 0.05;
    if (this.hasCancelSurprise()) {
        rate = 0;
    }
    return rate;
};

    /**
     * Performs victory motion for the entire party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.performVictory = function() {
    this.members().forEach(function(actor) {
        actor.performVictory();
    });
};

    /**
     * Performs escape motion for the entire party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.performEscape = function() {
    this.members().forEach(function(actor) {
        actor.performEscape();
    });
};

    /**
     * Remove battle states from all actors in the party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.removeBattleStates = function() {
    this.members().forEach(function(actor) {
        actor.removeBattleStates();
    });
};

    /**
     * Refreshes the motion on all actors in the party.
     * 
     * @memberof Game_Party
     */
Game_Party.prototype.requestMotionRefresh = function() {
    this.members().forEach(function(actor) {
        actor.requestMotionRefresh();
    });
};




/**
 * The game object declare class for a troop and the battle-related data.
 * Use as global variable  {@link $gameTroop}
 * @class Game_Troop
 * @extends Game_Unit
 * 
 * @prop {Array<String>} LETTER_TABLE_HALF [static]
 * @prop {Array<String>} LETTER_TABLE_FULL [static]
 * 
 * @prop {Game_Interpreter} _interpreter
 * @prop {Number} _troopId
 * @prop {Object} _eventFlags {[page: number]: boolean}
 * @prop {Array<Game_Enemy>} _enemies
 * @prop {Number} _turnCount
 * @prop {Object} _namesCount {[name: string]: number}
 */
function Game_Troop() {
    this.initialize.apply(this, arguments);
}

Game_Troop.prototype = Object.create(Game_Unit.prototype);
Game_Troop.prototype.constructor = Game_Troop;

Game_Troop.LETTER_TABLE_HALF = [
    ' A',' B',' C',' D',' E',' F',' G',' H',' I',' J',' K',' L',' M',
    ' N',' O',' P',' Q',' R',' S',' T',' U',' V',' W',' X',' Y',' Z'
];
Game_Troop.LETTER_TABLE_FULL = [
    'Ａ','Ｂ','Ｃ','Ｄ','Ｅ','Ｆ','Ｇ','Ｈ','Ｉ','Ｊ','Ｋ','Ｌ','Ｍ',
    'Ｎ','Ｏ','Ｐ','Ｑ','Ｒ','Ｓ','Ｔ','Ｕ','Ｖ','Ｗ','Ｘ','Ｙ','Ｚ'
];

/**
 *  オブジェクト生成時の初期化。
 */
Game_Troop.prototype.initialize = function() {
    Game_Unit.prototype.initialize.call(this);
    this._interpreter = new Game_Interpreter();
    this.clear();
};

/**
     * Returns true if event is running.
 * @returns {Boolean}
 */
Game_Troop.prototype.isEventRunning = function() {
    return this._interpreter.isRunning();
};

/**
     * Updates the game interpreter.
 */
Game_Troop.prototype.updateInterpreter = function() {
    this._interpreter.update();
};

/**
     * Returns the turn count.
 * @returns {Number}
 */
Game_Troop.prototype.turnCount = function() {
    return this._turnCount;
};

    /**
     * Returns all enemies in the battle.
     * 
     * @returns {Array<Game_Enemy>} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.members = function() {
    return this._enemies;
};

/**
 * 
 */
Game_Troop.prototype.clear = function() {
    this._interpreter.clear();
    this._troopId = 0;
    this._eventFlags = {};
    this._enemies = [];
    this._turnCount = 0;
    this._namesCount = {};
};

/**
     * Returns troop information from the database.
 * @returns {RPG.Troop}
 */
Game_Troop.prototype.troop = function() {
    return $dataTroops[this._troopId];
};

/**
 * @param {Number} troopId
 */
Game_Troop.prototype.setup = function(troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    this.troop().members.forEach(function(member) {
        if ($dataEnemies[member.enemyId]) {
            var enemyId = member.enemyId;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    this.makeUniqueNames();
};

/**
     * Creates unique names for each enemy.
 */
Game_Troop.prototype.makeUniqueNames = function() {
    var table = this.letterTable();
    this.members().forEach(function(enemy) {
        if (enemy.isAlive() && enemy.isLetterEmpty()) {
            var name = enemy.originalName();
            var n = this._namesCount[name] || 0;
            enemy.setLetter(table[n % table.length]);
            this._namesCount[name] = n + 1;
        }
    }, this);
    this.members().forEach(function(enemy) {
        var name = enemy.originalName();
        if (this._namesCount[name] >= 2) {
            enemy.setPlural(true);
        }
    }, this);
};

/**
 * Returns the letter table for enemy troops.
 * @returns {Array<String>}
 */
Game_Troop.prototype.letterTable = function() {
    return $gameSystem.isCJK() ? Game_Troop.LETTER_TABLE_FULL :
            Game_Troop.LETTER_TABLE_HALF;
};

    /**
     * Returns the name of enemies within the troop.
     * 
     * @returns {Array<String>} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.enemyNames = function() {
    var names = [];
    this.members().forEach(function(enemy) {
        var name = enemy.originalName();
        if (enemy.isAlive() && !names.contains(name)) {
            names.push(name);
        }
    });
    return names;
};

/**
 * @param  {RPG.BattleEventPage} page
 * @returns {Boolean}
 */
Game_Troop.prototype.meetsConditions = function(page) {
    var c = page.conditions;
    if (!c.turnEnding && !c.turnValid && !c.enemyValid &&
            !c.actorValid && !c.switchValid) {
        return false;  // Conditions not set
    }
    if (c.turnEnding) {
        if (!BattleManager.isTurnEnd()) {
            return false;
        }
    }
    if (c.turnValid) {
        var n = this._turnCount;
        var a = c.turnA;
        var b = c.turnB;
        if ((b === 0 && n !== a)) {
            return false;
        }
        if ((b > 0 && (n < 1 || n < a || n % b !== a % b))) {
            return false;
        }
    }
    if (c.enemyValid) {
        var enemy = $gameTroop.members()[c.enemyIndex];
        if (!enemy || enemy.hpRate() * 100 > c.enemyHp) {
            return false;
        }
    }
    if (c.actorValid) {
        var actor = $gameActors.actor(c.actorId);
        if (!actor || actor.hpRate() * 100 > c.actorHp) {
            return false;
        }
    }
    if (c.switchValid) {
        if (!$gameSwitches.value(c.switchId)) {
            return false;
        }
    }
    return true;
};

/**
 * 
 */
Game_Troop.prototype.setupBattleEvent = function() {
    if (!this._interpreter.isRunning()) {
        if (this._interpreter.setupReservedCommonEvent()) {
            return;
        }
        var pages = this.troop().pages;
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (this.meetsConditions(page) && !this._eventFlags[i]) {
                this._interpreter.setup(page.list);
                if (page.span <= 1) {
                    this._eventFlags[i] = true;
                }
                break;
            }
        }
    }
};

    /**
     * Increases the turn number.
     * 
     * @memberof Game_Troop
     */
Game_Troop.prototype.increaseTurn = function() {
    var pages = this.troop().pages;
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (page.span === 1) {
            this._eventFlags[i] = false;
        }
    }
    this._turnCount++;
};

    /**
     * Returns the total exp of all members of the enemy troop.
     * 
     * @returns {Number} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.expTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.exp();
    }, 0);
};

    /**
     * Return the total gold of all enemies.
     * 
     * @returns {Number} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.goldTotal = function() {
    return this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.gold();
    }, 0) * this.goldRate();
};

    /**
     * Returns the gold rate based on game party gold rate.
     * 
     * @returns {Number} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.goldRate = function() {
    return $gameParty.hasGoldDouble() ? 2 : 1;
};

    /**
     * Creates the drop items for all members of the enemy troop, and
     * returns the item information.
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Troop
     */
Game_Troop.prototype.makeDropItems = function() {
    return this.deadMembers().reduce(function(r, enemy) {
        return r.concat(enemy.makeDropItems());
    }, []);
};




/**
 * マップのデータ {@link $dataMap} や {@link $dataTilesets} を扱うためのクラス。
 * 表示を中心にスクロール制御や通行判定なども含む。
 * 大域変数 {@link $gameMap} を介して扱う。
 * @class Game_Map
 * 
 * @prop {Game_Interpreter} _interpreter RPGツクールMVのコマンドインタプリタ
 * @prop {Number} _mapId [マップ]のID
 * @prop {Number} _tilesetId [タイルセット]のID
 * @prop {Array<Game_Event>} _events
 * @prop {Array<Game_CommonEvent>} _commonEvents
 * @prop {Array<Game_Vehicle>} _vehicles
 * @prop {Number} _displayX マップ表示のX座標 {@link Game_Map#displayX}
 * @prop {Number} _displayY マップ表示のY座標 {@link Game_Map#displayY}
 * @prop {Boolean} _nameDisplay 表示名
 * @prop {Number} _scrollDirection スクロール方向
 * @prop {Number} _scrollRest
 * @prop {Number} _scrollSpeed スクロール速度
 * @prop {String} _parallaxName [遠景]のファイル名 {@link Game_Map#parallaxName}
 * @prop {Boolean} _parallaxZero
 * @prop {Boolean} _parallaxLoopX [横方向にループする]
 * @prop {Boolean} _parallaxLoopY [縦方向にループする]
 * @prop {Number} _parallaxSx x [スクロール]量 ピクセル
 * @prop {Number} _parallaxSy y [スクロール]量 ピクセル
 * @prop {Number} _parallaxX
 * @prop {Number} _parallaxY
 * @prop {String} _battleback1Name レイヤー奥の戦闘背景画像1(地面)のファイル名 {@link Game_Map#battleback1Name}
 * @prop {String} _battleback2Name レイヤー手前の戦闘背景画像2(壁)のファイル名 {@link Game_Map#battleback2Name}
 * @prop {Boolean} _needsRefresh
 */
function Game_Map() {
    this.initialize.apply(this, arguments);
}

/**
 * オブジェクト生成時の初期化。
 */
Game_Map.prototype.initialize = function() {
    this._interpreter = new Game_Interpreter();
    this._mapId = 0;
    this._tilesetId = 0;
    this._events = [];
    this._commonEvents = [];
    this._vehicles = [];
    this._displayX = 0;
    this._displayY = 0;
    this._nameDisplay = true;
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
    this._parallaxName = '';
    this._parallaxZero = false;
    this._parallaxLoopX = false;
    this._parallaxLoopY = false;
    this._parallaxSx = 0;
    this._parallaxSy = 0;
    this._parallaxX = 0;
    this._parallaxY = 0;
    this._battleback1Name = null;
    this._battleback2Name = null;
    this.createVehicles();
};

/**
 * マップ移動などで新たなマップを表示する場合の初期化。
 * @param {Number} mapId マップID
 */
Game_Map.prototype.setup = function(mapId) {
    if (!$dataMap) {
        throw new Error('The map data is not available');
    }
    this._mapId = mapId;
    this._tilesetId = $dataMap.tilesetId;
    this._displayX = 0;
    this._displayY = 0;
    this.refereshVehicles();
    this.setupEvents();
    this.setupScroll();
    this.setupParallax();
    this.setupBattleback();
    this._needsRefresh = false;
};

/**
 * イベント実行中か。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isEventRunning = function() {
    return this._interpreter.isRunning() || this.isAnyEventStarting();
};

/**
 * タイルの幅を返す。
 * @returns {Number}  ピクセル(デフォルト : 48)
 * @memberof Game_Map
 */
Game_Map.prototype.tileWidth = function() {
    return 48;
};

/**
 * タイルの高さを返す。
 * @returns {Number} ピクセル(デフォルト : 48)
 * @memberof Game_Map
 */
Game_Map.prototype.tileHeight = function() {
    return 48;
};

/**
 * マップIDを返す。
 * @returns {Number} 
 * @memberof Game_Map
 */
Game_Map.prototype.mapId = function() {
    return this._mapId;
};

/**
 * タイルセットIDを返す。
 * @returns {Number} 
 * @memberof Game_Map
 */
Game_Map.prototype.tilesetId = function() {
    return this._tilesetId;
};

/**
 * マップ表示のX座標を返す。
 * @returns {Number} タイル数
 * @memberof Game_Map
 */
Game_Map.prototype.displayX = function() {
    return this._displayX;
};

/**
 * マップ表示のY座標を返す。
* @returns {Number} タイル数
* @memberof Game_Map
*/
Game_Map.prototype.displayY = function() {
    return this._displayY;
};

/**
 * [遠景]画像のファイル名を返す。
 * @returns {String}
 */
Game_Map.prototype.parallaxName = function() {
    return this._parallaxName;
};

/**
 * レイヤー奥の戦闘背景画像1(地面)のファイル名を返す。
 * @returns {String} 
 * @memberof Game_Map
 */
Game_Map.prototype.battleback1Name = function() {
    return this._battleback1Name;
};

/**
 * レイヤー手前の戦闘背景画像2(壁)のファイル名を返す。
 * @returns {String} 
 * @memberof Game_Map
 */
Game_Map.prototype.battleback2Name = function() {
    return this._battleback2Name;
};

/**
 * マップの再描画を予約。
 * @param {Number} mapId
 */
Game_Map.prototype.requestRefresh = function(mapId) {
    this._needsRefresh = true;
};

/**
 * マップ[表示名]が表示されるか。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isNameDisplayEnabled = function() {
    return this._nameDisplay;
};

/**
 * マップ[表示名]を非表示に設定。
 * @memberof Game_Map
 */
Game_Map.prototype.disableNameDisplay = function() {
    this._nameDisplay = false;
};

/**
 * マップ[表示名]を表示に設定。
 * @memberof Game_Map
 */
Game_Map.prototype.enableNameDisplay = function() {
    this._nameDisplay = true;
};

/**
 * マップ上に[乗り物]( boat, ship, airship )を生成。
 * @memberof Game_Map
 */
Game_Map.prototype.createVehicles = function() {
    this._vehicles = [];
    this._vehicles[0] = new Game_Vehicle('boat');
    this._vehicles[1] = new Game_Vehicle('ship');
    this._vehicles[2] = new Game_Vehicle('airship');
};

/**
 * [乗り物]を再描画。
 * @memberof Game_Map
 */
Game_Map.prototype.refereshVehicles = function() {
    this._vehicles.forEach(function(vehicle) {
        vehicle.refresh();
    });
};

/**
 * 生成されている[乗り物]の配列を返す。
 * @returns {Array<Game_Vehicle>}
 */
Game_Map.prototype.vehicles = function() {
    return this._vehicles;
};

/**
 * 数値( 0:小型船, 1:大型船, 2:飛行船 )か文字列( 'boat', 'ship', 'airship' )による指定で[乗り物]を返す。
 * @param {Number | String} type 
 * @returns {Game_Vehicle} 
 * @memberof Game_Map
 */
Game_Map.prototype.vehicle = function(type) {
    if (type ===  0 || type === 'boat') {
        return this.boat();
    } else if (type ===  1 || type === 'ship') {
        return this.ship();
    } else if (type ===  2 || type === 'airship') {
        return this.airship();
    } else {
        return null;
    }
};

/**
 * [小型船]を返す。
 * @returns {Game_Vehicle} 
 * @memberof Game_Map
 */
Game_Map.prototype.boat = function() {
    return this._vehicles[0];
};

/**
 * [大型船]を返す。
 * @returns {Game_Vehicle} 
 * @memberof Game_Map
 */
Game_Map.prototype.ship = function() {
    return this._vehicles[1];
};

/**
 * [飛行船]を返す。
 * @returns {Game_Vehicle} 
 * @memberof Game_Map
 */
Game_Map.prototype.airship = function() {
    return this._vehicles[2];
};

/**
 * [イベント]の初期化。
 */
Game_Map.prototype.setupEvents = function() {
    this._events = [];
    for (var i = 0; i < $dataMap.events.length; i++) {
        if ($dataMap.events[i]) {
            this._events[i] = new Game_Event(this._mapId, i);
        }
    }
    this._commonEvents = this.parallelCommonEvents().map(function(commonEvent) {
        return new Game_CommonEvent(commonEvent.id);
    });
    this.refreshTileEvents();
};

/**
 * 現在のマップ上に存在する全[イベント]の配列を返す。
 * @returns {Array<Game_Event>} 
 * @memberof Game_Map
 */
Game_Map.prototype.events = function() {
    return this._events.filter(function(event) {
        return !!event;
    });
};

/**
 * イベントIDに対応する[イベント]を返す。
 * @param {Number} eventId 
 * @returns {Game_Event} 
 * @memberof Game_Map
 */
Game_Map.prototype.event = function(eventId) {
    return this._events[eventId];
};

/**
 * イベントIDに対応する[イベント]を削除。
 * @param {Number} eventId 
 * @memberof Game_Map
 */
Game_Map.prototype.eraseEvent = function(eventId) {
    this._events[eventId].erase();
};

/**
 * [並列処理]の[コモンイベント]の配列を返す。
 * @returns {Array<RPG.CommonEvent>} 
 * @memberof Game_Map
 */
Game_Map.prototype.parallelCommonEvents = function() {
    return $dataCommonEvents.filter(function(commonEvent) {
        return commonEvent && commonEvent.trigger === 2;
    });
};

/**
 * スクロールの初期化。
 */
Game_Map.prototype.setupScroll = function() {
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
};

/**
 * [遠景]の初期化。
 */
Game_Map.prototype.setupParallax = function() {
    this._parallaxName = $dataMap.parallaxName || '';
    this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
    this._parallaxLoopX = $dataMap.parallaxLoopX;
    this._parallaxLoopY = $dataMap.parallaxLoopY;
    this._parallaxSx = $dataMap.parallaxSx;
    this._parallaxSy = $dataMap.parallaxSy;
    this._parallaxX = 0;
    this._parallaxY = 0;
};

/**
 * 戦闘背景の初期化。
 */
Game_Map.prototype.setupBattleback = function() {
    if ($dataMap.specifyBattleback) {
        this._battleback1Name = $dataMap.battleback1Name;
        this._battleback2Name = $dataMap.battleback2Name;
    } else {
        this._battleback1Name = null;
        this._battleback2Name = null;
    }
};

/**
 * 指定位置(画面左上基準)にマップ表示。
 * マップ端でスクロールが止まるか、ループする処理も行う。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Map.prototype.setDisplayPos = function(x, y) {
    if (this.isLoopHorizontal()) {
        this._displayX = x.mod(this.width());
        this._parallaxX = x;
    } else {
        var endX = this.width() - this.screenTileX();
        this._displayX = endX < 0 ? endX / 2 : x.clamp(0, endX);
        this._parallaxX = this._displayX;
    }
    if (this.isLoopVertical()) {
        this._displayY = y.mod(this.height());
        this._parallaxY = y;
    } else {
        var endY = this.height() - this.screenTileY();
        this._displayY = endY < 0 ? endY / 2 : y.clamp(0, endY);
        this._parallaxY = this._displayY;
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @returns {Number}
 */
Game_Map.prototype.parallaxOx = function() {
    if (this._parallaxZero) {
        return this._parallaxX * this.tileWidth();
    } else if (this._parallaxLoopX) {
        return this._parallaxX * this.tileWidth() / 2;
    } else {
        return 0;
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @returns {Number}
 */
Game_Map.prototype.parallaxOy = function() {
    if (this._parallaxZero) {
        return this._parallaxY * this.tileHeight();
    } else if (this._parallaxLoopY) {
        return this._parallaxY * this.tileHeight() / 2;
    } else {
        return 0;
    }
};

/**
 * [タイルセット]を返す。
 * @returns {RPG.Tileset} 
 * @memberof Game_Map
 */
Game_Map.prototype.tileset = function() {
    return $dataTilesets[this._tilesetId];
};

/**
 * [タイルセット]に設定された[通行]などの地形フラグを返す。
 * @returns {Array<Number>} 詳細は{@link RPG.Tileset}を参照
 * @memberof Game_Map
 */
Game_Map.prototype.tilesetFlags = function() {
    var tileset = this.tileset();
    if (tileset) {
        return tileset.flags;
    } else {
        return [];
    }
};

/**
 * マップ[表示名]を返す。
 * @returns {String} 
 * @memberof Game_Map
 */
Game_Map.prototype.displayName = function() {
    return $dataMap.displayName;
};

/**
 * マップの[幅]を返す。
 * @returns {Number} タイル数
 * @memberof Game_Map
 */
Game_Map.prototype.width = function() {
    return $dataMap.width;
};

/**
 * マップの[高さ]を返す。
 * @returns {Number} タイル数
 * @memberof Game_Map
 */
Game_Map.prototype.height = function() {
    return $dataMap.height;
};

/**
 * マップデータの配列を返す。
 * @returns {Array<Number>} 
 * @memberof Game_Map
 */
Game_Map.prototype.data = function() {
    return $dataMap.data;
};

/**
 * [横方向にループする]か。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isLoopHorizontal = function() {
    return $dataMap.scrollType === 2 || $dataMap.scrollType === 3;
};

/**
 * [縦方向にループする]か。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isLoopVertical = function() {
    return $dataMap.scrollType === 1 || $dataMap.scrollType === 3;
};

/**
 * [ダッシュ禁止]か。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isDashDisabled = function() {
    return $dataMap.disableDashing;
};

/**
 * [エンカウント]の配列を返す。
 * @returns {Array<RPG.Map.Encounter>} 
 * @memberof Game_Map
 */
Game_Map.prototype.encounterList = function() {
    return $dataMap.encounterList;
};

/**
 * [敵出現歩数]を返す。
 * @returns {Number} 
 * @memberof Game_Map
 */
Game_Map.prototype.encounterStep = function() {
    return $dataMap.encounterStep;
};

/**
 * [タイルセット]の[モード]が[フィールドタイプ]か。
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isOverworld = function() {
    return this.tileset() && this.tileset().mode === 0;
};

/**
 * 画面の幅を返す。
 * @returns {Number} タイル数(小数点以下有り)
 * @memberof Game_Map
 */
Game_Map.prototype.screenTileX = function() {
    return Graphics.width / this.tileWidth();
};

/**
 * 画面の高さを返す。
 * @returns {Number} タイル数(小数点以下有り)
 * @memberof Game_Map
 */
Game_Map.prototype.screenTileY = function() {
    return Graphics.height / this.tileHeight();
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} x タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this._displayX -
            (this.width() - this.screenTileX()) / 2) {
        return x - this._displayX + $dataMap.width;
    } else {
        return x - this._displayX;
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} y タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this._displayY -
            (this.height() - this.screenTileY()) / 2) {
        return y - this._displayY + $dataMap.height;
    } else {
        return y - this._displayY;
    }
};

/**
 * ループ回数を考慮しない x座標に変換。
 * @param {Number} x タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.roundX = function(x) {
    return this.isLoopHorizontal() ? x.mod(this.width()) : x;
};

/**
 * ループ回数を考慮しない y座標に変換。
 * @param {Number} y タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.roundY = function(y) {
    return this.isLoopVertical() ? y.mod(this.height()) : y;
};

/**
 * 指定向きに移動した x座標を返す。
 * @param {Number} x タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Number} タイル数
 */
Game_Map.prototype.xWithDirection = function(x, d) {
    return x + (d === 6 ? 1 : d === 4 ? -1 : 0);
};

/**
 * 指定向きに移動した y座標を返す。
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Number} タイル数
 */
Game_Map.prototype.yWithDirection = function(y, d) {
    return y + (d === 2 ? 1 : d === 8 ? -1 : 0);
};

/**
 * 指定向きに移動した(ループ回数を考慮しない) x座標を返す。
 * @param {Number} x タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Number} タイル数
 */
Game_Map.prototype.roundXWithDirection = function(x, d) {
    return this.roundX(x + (d === 6 ? 1 : d === 4 ? -1 : 0));
};

/**
 * 指定向きに移動した(ループ回数を考慮しない) y座標を返す。
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Number} タイル数
 */
Game_Map.prototype.roundYWithDirection = function(y, d) {
    return this.roundY(y + (d === 2 ? 1 : d === 8 ? -1 : 0));
};

/**
 * x座標2点間のタイル距離を(ループも考慮して)返す。
 * @param {Number} x1 タイル数
 * @param {Number} x2 タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.deltaX = function(x1, x2) {
    var result = x1 - x2;
    if (this.isLoopHorizontal() && Math.abs(result) > this.width() / 2) {
        if (result < 0) {
            result += this.width();
        } else {
            result -= this.width();
        }
    }
    return result;
};

/**
 * y座標2点間のタイル距離を(ループも考慮して)返す。
 * @param {Number} y1 タイル数
 * @param {Number} y2 タイル数
 * @returns {Number} タイル数
 */
Game_Map.prototype.deltaY = function(y1, y2) {
    var result = y1 - y2;
    if (this.isLoopVertical() && Math.abs(result) > this.height() / 2) {
        if (result < 0) {
            result += this.height();
        } else {
            result -= this.height();
        }
    }
    return result;
};

/**
 * @param {Number} x1
 * @param {Number} x2
 * @param {Number} y1
 * @param {Number} y2
 * @returns {Number}
 */
Game_Map.prototype.distance = function(x1, y1, x2, y2) {
    return Math.abs(this.deltaX(x1, x2)) + Math.abs(this.deltaY(y1, y2));
};

    /**
     * canvasのx座標をタイル数に変換。
     * @param {Number} x x座標 ピクセル
     * @returns {Number} x座標 タイル数
     * @memberof Game_Map
     */
Game_Map.prototype.canvasToMapX = function(x) {
    var tileWidth = this.tileWidth();
    var originX = this._displayX * tileWidth;
    var mapX = Math.floor((originX + x) / tileWidth);
    return this.roundX(mapX);
};

    /**
     * canvasのy座標をタイル数に変換。
     * @param {Number} y 
     * @returns {Number} 
     * @memberof Game_Map
     */
Game_Map.prototype.canvasToMapY = function(y) {
    var tileHeight = this.tileHeight();
    var originY = this._displayY * tileHeight;
    var mapY = Math.floor((originY + y) / tileHeight);
    return this.roundY(mapY);
};

/**
 * [BGM自動演奏][BGS自動演奏]を開始。
 * @memberof Game_Map
 */
Game_Map.prototype.autoplay = function() {
    if ($dataMap.autoplayBgm) {
        if ($gamePlayer.isInVehicle()) {
            $gameSystem.saveWalkingBgm2();
        } else {
            AudioManager.playBgm($dataMap.bgm);
        }
    }
    if ($dataMap.autoplayBgs) {
        AudioManager.playBgs($dataMap.bgs);
    }
};

/**
 * {@link Game_Map#requestRefresh}で予約されていたら再描画。
 */
Game_Map.prototype.refreshIfNeeded = function() {
    if (this._needsRefresh) {
        this.refresh();
    }
};

/**
 * [イベント]の更新。
 */
Game_Map.prototype.refresh = function() {
    this.events().forEach(function(event) {
        event.refresh();
    });
    this._commonEvents.forEach(function(event) {
        event.refresh();
    });
    this.refreshTileEvents();
    this._needsRefresh = false;
};

/**
 * タイルが設定されている[イベント]を更新。
 */
Game_Map.prototype.refreshTileEvents = function() {
    this.tileEvents = this.events().filter(function(event) {
        return event.isTile();
    });
};

/**
 * 指定位置にある[イベント]を配列で返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Array<Game_Event>} 
 * @memberof Game_Map
 */
Game_Map.prototype.eventsXy = function(x, y) {
    return this.events().filter(function(event) {
        return event.pos(x, y);
    });
};

/**
 *  指定位置にある、通行不可の[イベント]を配列で返す。たぶん Nt = No Through。
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Array<Game_Event>} 
 * @memberof Game_Map
 */
Game_Map.prototype.eventsXyNt = function(x, y) {
    return this.events().filter(function(event) {
        return event.posNt(x, y);
    });
};

/**
 * 指定位置にある、画像にタイルセットを選択した[イベント]を配列で返す。
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Array<Game_Event>} 
 * @memberof Game_Map
 */
Game_Map.prototype.tileEventsXy = function(x, y) {
    return this.tileEvents.filter(function(event) {
        return event.posNt(x, y);
    });
};

/**
 * 指定位置にある[イベント]のイベントIDを返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Number} イベントがない場合は0、複数ある場合は最初のイベントID
 * @memberof Game_Map
 */
Game_Map.prototype.eventIdXy = function(x, y) {
    var list = this.eventsXy(x, y);
    return list.length === 0 ? 0 : list[0].eventId();
};

/**
 * 指定数だけ下にスクロール。
 * @param {Number} distance タイル数
 */
Game_Map.prototype.scrollDown = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += distance;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY += distance;
        }
    } else if (this.height() >= this.screenTileY()) {
        var lastY = this._displayY;
        this._displayY = Math.min(this._displayY + distance,
            this.height() - this.screenTileY());
        this._parallaxY += this._displayY - lastY;
    }
};

/**
 * 指定数だけ左にスクロール。
 * @param {Number} distance
 */
Game_Map.prototype.scrollLeft = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += $dataMap.width - distance;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX -= distance;
        }
    } else if (this.width() >= this.screenTileX()) {
        var lastX = this._displayX;
        this._displayX = Math.max(this._displayX - distance, 0);
        this._parallaxX += this._displayX - lastX;
    }
};

/**
 * 指定数だけ右にスクロール。
 * @param {Number} distance
 */
Game_Map.prototype.scrollRight = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += distance;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX += distance;
        }
    } else if (this.width() >= this.screenTileX()) {
        var lastX = this._displayX;
        this._displayX = Math.min(this._displayX + distance,
            this.width() - this.screenTileX());
        this._parallaxX += this._displayX - lastX;
    }
};

/**
 * 指定数だけ上にスクロール。
 * @param {Number} distance
 */
Game_Map.prototype.scrollUp = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += $dataMap.height - distance;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY -= distance;
        }
    } else if (this.height() >= this.screenTileY()) {
        var lastY = this._displayY;
        this._displayY = Math.max(this._displayY - distance, 0);
        this._parallaxY += this._displayY - lastY;
    }
};

/**
 * 指定位置がマップ範囲に含まれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isValid = function(x, y) {
    return x >= 0 && x < this.width() && y >= 0 && y < this.height();
};

/**
 * 指定位置の指定フラグビットが通行可か。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} bit {@link RPG.Tileset}の flagsチェック用ビット
 * @returns {Boolean} [☆]でない最初のタイルのうち、指定したビットが立っていれば false
 */
Game_Map.prototype.checkPassage = function(x, y, bit) {
    var flags = this.tilesetFlags();
    var tiles = this.allTiles(x, y);
    for (var i = 0; i < tiles.length; i++) {
        var flag = flags[tiles[i]];
        if ((flag & 0x10) !== 0)  // [*] No effect on passage
            continue;
        if ((flag & bit) === 0)   // [o] Passable
            return true;
        if ((flag & bit) === bit) // [x] Impassable
            return false;
    }
    return false;
};

/**
 * 指定位置のタイルIDを返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} z 重なり(0 〜 3)
 * @returns {Number} 
 * @memberof Game_Map
 */
Game_Map.prototype.tileId = function(x, y, z) {
    var width = $dataMap.width;
    var height = $dataMap.height;
    return $dataMap.data[(z * height + y) * width + x] || 0;
};

/**
 *  指定位置に重なったタイルIDの配列を返す。
 * @param {Number} x
 * @param {Number} y
 * @returns {Array<Number>}
 */
Game_Map.prototype.layeredTiles = function(x, y) {
    var tiles = [];
    for (var i = 0; i < 4; i++) {
        tiles.push(this.tileId(x, y, 3 - i));
    }
    return tiles;
};

/**
 * 指定位置に重なった[イベント]も含めた全タイルIDの配列を返す。
 * @param {Number} x
 * @param {Number} y
 * @returns {Array<Number>}
 */
Game_Map.prototype.allTiles = function(x, y) {
    var tiles = this.tileEventsXy(x, y).map(function(event) {
        return event.tileId();
    });
    return tiles.concat(this.layeredTiles(x, y));
};

/**
 * 指定位置のオートタイルのタイプを返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} z 重なり(0〜3)
 * @returns {Number} オートタイルでない場合は-1
 */
Game_Map.prototype.autotileType = function(x, y, z) {
    var tileId = this.tileId(x, y, z);
    return tileId >= 2048 ? Math.floor((tileId - 2048) / 48) : -1;
};

/**
 * 指定位置から指定方向に進めるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 方向(テンキー対応)
 * @returns {Boolean}
 */
Game_Map.prototype.isPassable = function(x, y, d) {
    return this.checkPassage(x, y, (1 << (d / 2 - 1)) & 0x0f);
};

/**
 * [小型船]で指定位置が通れるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isBoatPassable = function(x, y) {
    return this.checkPassage(x, y, 0x0200);
};

/**
 * [大型船]で指定位置が通れるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isShipPassable = function(x, y) {
    return this.checkPassage(x, y, 0x0400);
};

/**
 * [飛行船]で指定位置に着地できるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isAirshipLandOk = function(x, y) {
    return this.checkPassage(x, y, 0x0800) && this.checkPassage(x, y, 0x0f);
};

/**
 * 指定位置のタイルのうち指定フラグが立っているものがあるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} bit {@link RPG.Tileset}の flagsチェック用ビット
 * @returns {Boolean}
 */
Game_Map.prototype.checkLayeredTilesFlags = function(x, y, bit) {
    var flags = this.tilesetFlags();
    return this.layeredTiles(x, y).some(function(tileId) {
        return (flags[tileId] & bit) !== 0;
    });
};

/**
 * 指定位置のタイルに[梯](はしご)属性を持つものがあるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.isLadder = function(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x20);
};

/**
 * 指定位置のタイルに[茂み]属性を持つものがあるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isBush = function(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x40);
};

/**
 * 指定位置のタイルに[カウンター]属性を持つものがあるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isCounter = function(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x80);
};

/**
 * 指定位置のタイルに[ダメージ床]属性を持つものがあるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Map.prototype.isDamageFloor = function(x, y) {
    return this.isValid(x, y) && this.checkLayeredTilesFlags(x, y, 0x100);
};

/**
 * 指定位置のタイルのうち最初の[地形タグ]を返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Number}
 */
Game_Map.prototype.terrainTag = function(x, y) {
    if (this.isValid(x, y)) {
        var flags = this.tilesetFlags();
        var tiles = this.layeredTiles(x, y);
        for (var i = 0; i < tiles.length; i++) {
            var tag = flags[tiles[i]] >> 12;
            if (tag > 0) {
                return tag;
            }
        }
    }
    return 0;
};

/**
 * 指定位置のタイルのリージョンIDを返す。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Number}
 */
Game_Map.prototype.regionId = function(x, y) {
    return this.isValid(x, y) ? this.tileId(x, y, 5) : 0;
};

/**
 * スクロール開始。
 * @param {Number} direction
 * @param {Number} distance
 * @param {Number} speed
 */
Game_Map.prototype.startScroll = function(direction, distance, speed) {
    this._scrollDirection = direction;
    this._scrollRest = distance;
    this._scrollSpeed = speed;
};

/**
 * スクロール中か。
 * @returns {Boolean}
 */
Game_Map.prototype.isScrolling = function() {
    return this._scrollRest > 0;
};

/**
 * マップをアップデート。
 * @param {Boolean} sceneActive 
 * @memberof Game_Map
 */
Game_Map.prototype.update = function(sceneActive) {
    this.refreshIfNeeded();
    if (sceneActive) {
        this.updateInterpreter();
    }
    this.updateScroll();
    this.updateEvents();
    this.updateVehicles();
    this.updateParallax();
};

/**
 * スクロールをアップデート。
 */
Game_Map.prototype.updateScroll = function() {
    if (this.isScrolling()) {
        var lastX = this._displayX;
        var lastY = this._displayY;
        this.doScroll(this._scrollDirection, this.scrollDistance());
        if (this._displayX === lastX && this._displayY === lastY) {
            this._scrollRest = 0;
        } else {
            this._scrollRest -= this.scrollDistance();
        }
    }
};

/**
 * スクロール距離を返す。
 * @returns {Number}
 */
Game_Map.prototype.scrollDistance = function() {
    return Math.pow(2, this._scrollSpeed) / 256;
};

/**
 * スクロール。
 * @param {Number} direction
 * @param {Number} distance
 */
Game_Map.prototype.doScroll = function(direction, distance) {
    switch (direction) {
    case 2:
        this.scrollDown(distance);
        break;
    case 4:
        this.scrollLeft(distance);
        break;
    case 6:
        this.scrollRight(distance);
        break;
    case 8:
        this.scrollUp(distance);
        break;
    }
};

    /**
     * 現在のマップにある全[イベント]をアップデート。
     * @memberof Game_Map
     */
Game_Map.prototype.updateEvents = function() {
    this.events().forEach(function(event) {
        event.update();
    });
    this._commonEvents.forEach(function(event) {
        event.update();
    });
};

/**
 * 現在のマップにある全乗り物をアップデート。
 * @memberof Game_Map
 */
Game_Map.prototype.updateVehicles = function() {
    this._vehicles.forEach(function(vehicle) {
        vehicle.update();
    });
};

/**
 * [遠景]をアップデート。
 * @memberof Game_Map
 */
Game_Map.prototype.updateParallax = function() {
    if (this._parallaxLoopX) {
        this._parallaxX += this._parallaxSx / this.tileWidth() / 2;
    }
    if (this._parallaxLoopY) {
        this._parallaxY += this._parallaxSy / this.tileHeight() / 2;
    }
};

/**
 * [タイルセットの変更]を行う。
 * @param {Number} tilesetId 
 * @memberof Game_Map
 */
Game_Map.prototype.changeTileset = function(tilesetId) {
    this._tilesetId = tilesetId;
    this.refresh();
};

/**
 * [戦闘背景の変更]を行う。
 * @param  {String} battleback1Name
 * @param  {String} battleback2Name
 */
Game_Map.prototype.changeBattleback = function(battleback1Name, battleback2Name) {
    this._battleback1Name = battleback1Name;
    this._battleback2Name = battleback2Name;
};

/**
 * [遠景の変更]を行う。
 * @param  {String} name [画像]ファイル名
 * @param  {Boolean} loopX [横方向にループする]
 * @param  {Boolean} loopY [縦方向にループする]
 * @param {Number} sx x [スクロール]量 ピクセル
 * @param {Number} sy y [スクロール]量 ピクセル
 */
Game_Map.prototype.changeParallax = function(name, loopX, loopY, sx, sy) {
    this._parallaxName = name;
    this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
    if (this._parallaxLoopX && !loopX) {
        this._parallaxX = 0;
    }
    if (this._parallaxLoopY && !loopY) {
        this._parallaxY = 0;
    }
    this._parallaxLoopX = loopX;
    this._parallaxLoopY = loopY;
    this._parallaxSx = sx;
    this._parallaxSy = sy;
};

/**
 * インタプリタをアップデート。
 * @memberof Game_Map
 */
Game_Map.prototype.updateInterpreter = function() {
    for (;;) {
        this._interpreter.update();
        if (this._interpreter.isRunning()) {
            return;
        }
        if (this._interpreter.eventId() > 0) {
            this.unlockEvent(this._interpreter.eventId());
            this._interpreter.clear();
        }
        if (!this.setupStartingEvent()) {
            return;
        }
    }
};

/**
 * 指定IDの[イベント]をアンロック。
 * 決定ボタンでイベントをプレイヤーの方に向かせた状態の解除。
 * @param {Number} eventId 
 * @memberof Game_Map
 */
Game_Map.prototype.unlockEvent = function(eventId) {
    if (this._events[eventId]) {
        this._events[eventId].unlock();
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @returns {Boolean}
 */
Game_Map.prototype.setupStartingEvent = function() {
    this.refreshIfNeeded();
    if (this._interpreter.setupReservedCommonEvent()) {
        return true;
    }
    if (this.setupTestEvent()) {
        return true;
    }
    if (this.setupStartingMapEvent()) {
        return true;
    }
    if (this.setupAutorunCommonEvent()) {
        return true;
    }
    return false;
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @returns {Boolean}
 */
Game_Map.prototype.setupTestEvent = function() {
    if ($testEvent) {
        this._interpreter.setup($testEvent, 0);
        $testEvent = null;
        return true;
    }
    return false;
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @returns {Boolean}
 */
Game_Map.prototype.setupStartingMapEvent = function() {
    var events = this.events();
    for (var i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.isStarting()) {
            event.clearStartingFlag();
            this._interpreter.setup(event.list(), event.eventId());
            return true;
        }
    }
    return false;
};

/**
 * Sets up an auto run common event.
 * @todo この用語の意味が分かったら教えてください
 * @returns {Boolean} 
 * @memberof Game_Map
 */
Game_Map.prototype.setupAutorunCommonEvent = function() {
    for (var i = 0; i < $dataCommonEvents.length; i++) {
        var event = $dataCommonEvents[i];
        if (event && event.trigger === 1 && $gameSwitches.value(event.switchId)) {
            this._interpreter.setup(event.list);
            return true;
        }
    }
    return false;
};

    /**
     * なんらかの[イベント]が実行されたか。
     * @returns {Boolean} 
     * @memberof Game_Map
     */
Game_Map.prototype.isAnyEventStarting = function() {
    return this.events().some(function(event) {
        return event.isStarting();
    });
};




/**
 * The game object declare class for a common event. It contains functionality for
 * running parallel process events.
 * @class Game_CommonEvent
 * 
 * @prop {Number} _commonEventId
 * @prop {Game_Interpreter} _interpreter
 */
function Game_CommonEvent() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_CommonEvent.prototype.initialize = function(commonEventId) {
    this._commonEventId = commonEventId;
    this.refresh();
};

    /**
     * Returns the common event information from the database.
     * 
     * @returns {RPG.CommonEvent} 
     * @memberof Game_CommonEvent
     */
Game_CommonEvent.prototype.event = function() {
    return $dataCommonEvents[this._commonEventId];
};

    /**
     * Returns the common event's list of event commands.
     * 
     * @returns {Array<RPG.EventCommand>} 
     * @memberof Game_CommonEvent
     */
Game_CommonEvent.prototype.list = function() {
    return this.event().list;
};

    /**
     * Refreshes the common event.
     * 
     * @memberof Game_CommonEvent
     */
Game_CommonEvent.prototype.refresh = function() {
    if (this.isActive()) {
        if (!this._interpreter) {
            this._interpreter = new Game_Interpreter();
        }
    } else {
        this._interpreter = null;
    }
};

    /**
     * Returns true if the common event is active.
     * 
     * @returns {Boolean} 
     * @memberof Game_CommonEvent
     */
Game_CommonEvent.prototype.isActive = function() {
    var event = this.event();
    return event.trigger === 2 && $gameSwitches.value(event.switchId);
};

    /**
     * Updates the common event.
     * 
     * @memberof Game_CommonEvent
     */
Game_CommonEvent.prototype.update = function() {
    if (this._interpreter) {
        if (!this._interpreter.isRunning()) {
            this._interpreter.setup(this.list());
        }
        this._interpreter.update();
    }
};


/**
 * マップ上のキャラクタに共通する処理を行うクラス。
 * {@link Game_Character} のスーパークラス。
 * @class Game_CharacterBase
 * @abstract
 * @prop {Number} x [read-only]
 * @prop {Number} y [read-only]
 * 
 * @prop {Number} _x
 * @prop {Number} _y
 * @prop {Number} _realX
 * @prop {Number} _realY
 * @prop {Number} _moveSpeed
 * @prop {Number} _moveFrequency
 * @prop {Number} _opacity
 * @prop {Number} _blendMode
 * @prop {Number} _direction
 * @prop {Number} _pattern
 * @prop {Number} _priorityType
 * @prop {Number} _tileId
 * @prop {String} _characterName
 * @prop {Number} _characterIndex
 * @prop {Boolean} _isObjectCharacter
 * @prop {Boolean} _walkAnime
 * @prop {Boolean} _stepAnime
 * @prop {Boolean} _directionFix
 * @prop {Boolean} _through
 * @prop {Boolean} _transparent
 * @prop {Number} _bushDepth
 * @prop {Number} _animationId
 * @prop {Number} _balloonId
 * @prop {Boolean} _animationPlaying
 * @prop {Boolean} _balloonPlaying
 * @prop {Number} _animationCount
 * @prop {Number} _stopCount
 * @prop {Number} _jumpCount
 * @prop {Number} _jumpPeak
 * @prop {Boolean} _movementSuccess
 */
function Game_CharacterBase() {
    this.initialize.apply(this, arguments);
}

Object.defineProperties(Game_CharacterBase.prototype, {
    x: { get: function() { return this._x; }, configurable: true },
    y: { get: function() { return this._y; }, configurable: true }
});

/**
 * オブジェクト生成時の初期化。
 */
Game_CharacterBase.prototype.initialize = function() {
    this.initMembers();
};

/**
 * メンバ変数の初期化。
 */
Game_CharacterBase.prototype.initMembers = function() {
    this._x = 0;
    this._y = 0;
    this._realX = 0;
    this._realY = 0;
    this._moveSpeed = 4;
    this._moveFrequency = 6;
    this._opacity = 255;
    this._blendMode = 0;
    this._direction = 2;
    this._pattern = 1;
    this._priorityType = 1;
    this._tileId = 0;
    this._characterName = '';
    this._characterIndex = 0;
    this._isObjectCharacter = false;
    this._walkAnime = true;
    this._stepAnime = false;
    this._directionFix = false;
    this._through = false;
    this._transparent = false;
    this._bushDepth = 0;
    this._animationId = 0;
    this._balloonId = 0;
    this._animationPlaying = false;
    this._balloonPlaying = false;
    this._animationCount = 0;
    this._stopCount = 0;
    this._jumpCount = 0;
    this._jumpPeak = 0;
    this._movementSuccess = true;
};

/**
 * 指定位置にいるか。
 * @param {Number} x
 * @param {Number} y
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.pos = function(x, y) {
    return this._x === x && this._y === y;
};

/**
 * 指定位置にいて、通行不可か。たぶん Nt = No Through。
 * @param {Number} x
 * @param {Number} y
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.posNt = function(x, y) {
    // No through
    return this.pos(x, y) && !this.isThrough();
};

/**
 * 移動[速度]を返す。
 * @returns {Number} 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.moveSpeed = function() {
    return this._moveSpeed;
};

/**
 * 移動[速度]の設定。
 * @param {Number} moveSpeed 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
 */
Game_CharacterBase.prototype.setMoveSpeed = function(moveSpeed) {
    this._moveSpeed = moveSpeed;
};

/**
 * 移動[頻度]を返す。
 * @returns {Number} 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.moveFrequency = function() {
    return this._moveFrequency;
};

/**
 * 移動[頻度]の設定。
 * @param {Number} moveFrequency 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
 */
Game_CharacterBase.prototype.setMoveFrequency = function(moveFrequency) {
    this._moveFrequency = moveFrequency;
};

/**
 * [不透明度]を返す。
 * @returns {Number} 0〜255
 */
Game_CharacterBase.prototype.opacity = function() {
    return this._opacity;
};

/**
 * [不透明度]の設定。
 * @param {Number} opacity 0〜255
 */
Game_CharacterBase.prototype.setOpacity = function(opacity) {
    this._opacity = opacity;
};

/**
 * [合成方法]を返す。
 * @returns {Number} 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.blendMode = function() {
    return this._blendMode;
};

/**
 * [合成方法]の設定。
 * @param {Number} blendMode 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.setBlendMode = function(blendMode) {
    this._blendMode = blendMode;
};

/**
 * [プライオリティ]が[通常キャラと同じ]か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isNormalPriority = function() {
    return this._priorityType === 1;
};

/**
 * [プライオリティ]の設定。
 * @param {Number} priorityType 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上
 */
Game_CharacterBase.prototype.setPriorityType = function(priorityType) {
    this._priorityType = priorityType;
};

/**
 * 移動中(タイル毎の座標ではない)か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isMoving = function() {
    return this._realX !== this._x || this._realY !== this._y;
};

/**
 * ジャンプ中か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isJumping = function() {
    return this._jumpCount > 0;
};

/**
 * 現在のジャンプの高さを返す。
 * @returns {Number} ピクセル
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.jumpHeight = function() {
    return (this._jumpPeak * this._jumpPeak -
            Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
};

/**
 * 止まっている(タイル毎の座標にいる)か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isStopping = function() {
    return !this.isMoving() && !this.isJumping();
};

/**
 * 停止状態が閾値を超えたか。
 * @param {Number} threshold 停止カウントの閾値(フレーム)
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.checkStop = function(threshold) {
    return this._stopCount > threshold;
};

/**
 * 停止カウンタをリセット。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.resetStopCount = function() {
    this._stopCount = 0;
};

/**
 * (ダッシュ状態も考慮して)現在の移動速度を返す。
 * @returns {Number}
 */
Game_CharacterBase.prototype.realMoveSpeed = function() {
    return this._moveSpeed + (this.isDashing() ? 1 : 0);
};

/**
 * フレーム毎の移動距離を返す。
 * @returns {Number}
 */
Game_CharacterBase.prototype.distancePerFrame = function() {
    return Math.pow(2, this.realMoveSpeed()) / 256;
};

/**
 * 現在ダッシュ中か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isDashing = function() {
    return false;
};

/**
 * デバッグ用のすり抜け移動中か。
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isDebugThrough = function() {
    return false;
};

/**
 * キャラを(歩き・足踏みの途中でない)直立状態に。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.straighten = function() {
    if (this.hasWalkAnime() || this.hasStepAnime()) {
        this._pattern = 1;
    }
    this._animationCount = 0;
};

/**
 * 指定向きの逆向きを返す。
 * @param {Number} d 向き(テンキー対応)
 * @returns {Number} 向き(テンキー対応)
 */
Game_CharacterBase.prototype.reverseDir = function(d) {
    return 10 - d;
};

/**
 * 指定位置から指定向きへの通行が可能か。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.canPass = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
    if (!$gameMap.isValid(x2, y2)) {
        return false;
    }
    if (this.isThrough() || this.isDebugThrough()) {
        return true;
    }
    if (!this.isMapPassable(x, y, d)) {
        return false;
    }
    if (this.isCollidedWithCharacters(x2, y2)) {
        return false;
    }
    return true;
};

/**
 * 指定位置から斜め指定向きへの通行が可能か。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} horz 横方向(テンキー対応)
 * @param {Number} vert 縦方向(テンキー対応)
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.canPassDiagonally = function(x, y, horz, vert) {
    var x2 = $gameMap.roundXWithDirection(x, horz);
    var y2 = $gameMap.roundYWithDirection(y, vert);
    if (this.canPass(x, y, vert) && this.canPass(x, y2, horz)) {
        return true;
    }
    if (this.canPass(x, y, horz) && this.canPass(x2, y, vert)) {
        return true;
    }
    return false;
};

/**
 * 指定位置から指定向きへのマップ通行が可能か。
 * キャラ・[イベント]による障害を考慮しない。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isMapPassable = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
    var d2 = this.reverseDir(d);
    return $gameMap.isPassable(x, y, d) && $gameMap.isPassable(x2, y2, d2);
};

/**
 * 指定位置がキャラによって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isCollidedWithCharacters = function(x, y) {
    return this.isCollidedWithEvents(x, y) || this.isCollidedWithVehicles(x, y);
};

/**
 * 指定位置が[イベント]によって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isCollidedWithEvents = function(x, y) {
    var events = $gameMap.eventsXyNt(x, y);
    return events.some(function(event) {
        return event.isNormalPriority();
    });
};

/**
 * 指定位置が[乗り物]によって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isCollidedWithVehicles = function(x, y) {
    return $gameMap.boat().posNt(x, y) || $gameMap.ship().posNt(x, y);
};

/**
 * 現在のマップ内での[イベントの位置設定]
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_CharacterBase.prototype.setPosition = function(x, y) {
    this._x = Math.round(x);
    this._y = Math.round(y);
    this._realX = x;
    this._realY = y;
};

/**
 * 指定キャラクタの位置を自身の位置にコピー。
 * @param  {Game_Player} character
 */
Game_CharacterBase.prototype.copyPosition = function(character) {
    this._x = character._x;
    this._y = character._y;
    this._realX = character._realX;
    this._realY = character._realY;
    this._direction = character._direction;
};

/**
 * 現在のマップ内での[イベントの位置設定]。
 * {@link Game_CharacterBase#setPosition}と異なり、姿勢などを初期化。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_CharacterBase.prototype.locate = function(x, y) {
    this.setPosition(x, y);
    this.straighten();
    this.refreshBushDepth();
};

/**
 * 向きを返す。
 * @returns {Number} 向き(テンキー対応)
 */
Game_CharacterBase.prototype.direction = function() {
    return this._direction;
};

/**
 * 向きの設定。
 * @param {Number} d 向き(テンキー対応)
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.setDirection = function(d) {
    if (!this.isDirectionFixed() && d) {
        this._direction = d;
    }
    this.resetStopCount();
};

/**
 * タイル用(tilesets フォルダ以下)の画像か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isTile = function() {
    return this._tileId > 0 && this._priorityType === 0;
};

/**
 * キャラクタ用(characters フォルダ以下)の画像か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isObjectCharacter = function() {
    return this._isObjectCharacter;
};

/**
 * 縦方向へのシフト量を返す。
 * @returns {Number} ピクセル
 */
Game_CharacterBase.prototype.shiftY = function() {
    return this.isObjectCharacter() ? 0 : 6;
};

/**
 * @todo この用語の意味が分かったら教えてください 
 * @returns {Number}
 */
Game_CharacterBase.prototype.scrolledX = function() {
    return $gameMap.adjustX(this._realX);
};

/**
 * @todo この用語の意味が分かったら教えてください 
 * @returns {Number}
 */
Game_CharacterBase.prototype.scrolledY = function() {
    return $gameMap.adjustY(this._realY);
};

/**
 * 画面上の x座標を返す。
 * @returns {Number} ピクセル
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.screenX = function() {
    var tw = $gameMap.tileWidth();
    return Math.round(this.scrolledX() * tw + tw / 2);
};

/**
 * 画面上の y座標を返す。
 * @returns {Number} ピクセル
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.screenY = function() {
    var th = $gameMap.tileHeight();
    return Math.round(this.scrolledY() * th + th -
                      this.shiftY() - this.jumpHeight());
};

/**
 * 重なり位置を返す。
 * @returns {Number} 1: 通常キャラの下, 3:通常キャラと同じ , 5: 通常キャラの上
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.screenZ = function() {
    return this._priorityType * 2 + 1;
};

/**
 * 画面端に近いか。あるいは、スクロールを止める位置か。
 * @returns {Boolean}}
 */
Game_CharacterBase.prototype.isNearTheScreen = function() {
    var gw = Graphics.width;
    var gh = Graphics.height;
    var tw = $gameMap.tileWidth();
    var th = $gameMap.tileHeight();
    var px = this.scrolledX() * tw + tw / 2 - gw / 2;
    var py = this.scrolledY() * th + th / 2 - gh / 2;
    return px >= -gw && px <= gw && py >= -gh && py <= gh;
};

/**
 * キャラをアップデート。
 */
Game_CharacterBase.prototype.update = function() {
    if (this.isStopping()) {
        this.updateStop();
    }
    if (this.isJumping()) {
        this.updateJump();
    } else if (this.isMoving()) {
        this.updateMove();
    }
    this.updateAnimation();
};

/**
 * 停止状態をアップデート。
 */
Game_CharacterBase.prototype.updateStop = function() {
    this._stopCount++;
};

/**
 * ジャンプ状態をアップデート。
 */
Game_CharacterBase.prototype.updateJump = function() {
    this._jumpCount--;
    this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1.0);
    this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1.0);
    this.refreshBushDepth();
    if (this._jumpCount === 0) {
        this._realX = this._x = $gameMap.roundX(this._x);
        this._realY = this._y = $gameMap.roundY(this._y);
    }
};

/**
 * 移動状態をアップデート。
 */
Game_CharacterBase.prototype.updateMove = function() {
    if (this._x < this._realX) {
        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
    }
    if (this._x > this._realX) {
        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
    }
    if (this._y < this._realY) {
        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
    }
    if (this._y > this._realY) {
        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
    }
    if (!this.isMoving()) {
        this.refreshBushDepth();
    }
};

/**
 * アニメーションをアップデート。
 */
Game_CharacterBase.prototype.updateAnimation = function() {
    this.updateAnimationCount();
    if (this._animationCount >= this.animationWait()) {
        this.updatePattern();
        this._animationCount = 0;
    }
};

/**
 * アニメーションの待ち時間を返す。
 * @returns {Number} フレーム
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.animationWait = function() {
    return (9 - this.realMoveSpeed()) * 3;
};

/**
 * アニメーションのカウンタをアップデート。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.updateAnimationCount = function() {
    if (this.isMoving() && this.hasWalkAnime()) {
        this._animationCount += 1.5;
    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
        this._animationCount++;
    }
};

/**
 * パターンをアップデート。
 */
Game_CharacterBase.prototype.updatePattern = function() {
    if (!this.hasStepAnime() && this._stopCount > 0) {
        this.resetPattern();
    } else {
        this._pattern = (this._pattern + 1) % this.maxPattern();
    }
};


/**
 * 最大パターン数を返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.maxPattern = function() {
    return 4;
};

/**
 * 歩行パターンの番号を返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.pattern = function() {
    return this._pattern < 3 ? this._pattern : 1;
};

/**
 * 指定番号のパターンを設定。
 * @param {Number} pattern 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.setPattern = function(pattern) {
    this._pattern = pattern;
};

/**
 * オリジナルのパターンか。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isOriginalPattern = function() {
    return this.pattern() === 1;
};

/**
 * オリジナルのパターンにリセット。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.resetPattern = function() {
    this.setPattern(1);
};

/**
 * [茂み]の深さを更新。
 */
Game_CharacterBase.prototype.refreshBushDepth = function() {
    if (this.isNormalPriority() && !this.isObjectCharacter() &&
            this.isOnBush() && !this.isJumping()) {
        if (!this.isMoving()) {
            this._bushDepth = 12;
        }
    } else {
        this._bushDepth = 0;
    }
};

/**
 * [梯子]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isOnLadder = function() {
    return $gameMap.isLadder(this._x, this._y);
};

/**
 * [茂み]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isOnBush = function() {
    return $gameMap.isBush(this._x, this._y);
};

/**
 * 乗っている[地形タグ]を返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.terrainTag = function() {
    return $gameMap.terrainTag(this._x, this._y);
};

/**
 * 乗っているリージョンIDを返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.regionId = function() {
    return $gameMap.regionId(this._x, this._y);
};

/**
 * 歩き出す(歩数を増やす)。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.increaseSteps = function() {
    if (this.isOnLadder()) {
        this.setDirection(8);
    }
    this.resetStopCount();
    this.refreshBushDepth();
};

/**
 * タイルIDを返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.tileId = function() {
    return this._tileId;
};

/**
 * キャラクタ画像のファイル名を返す。
 * @returns {String}
 */
Game_CharacterBase.prototype.characterName = function() {
    return this._characterName;
};

/**
 * キャラクタ画像の番号を返す。
 * @returns {Number}
 */
Game_CharacterBase.prototype.characterIndex = function() {
    return this._characterIndex;
};

/**
 * キャラクタ画像の設定(タイル画像と同時には設定できない)。
 * @param  {String} characterName ファイル名
 * @param {Number} characterIndex 番号
 */
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
    this._tileId = 0;
    this._characterName = characterName;
    this._characterIndex = characterIndex;
    this._isObjectCharacter = ImageManager.isObjectCharacter(characterName);
};

/**
 * タイル画像の設定(キャラクタ画像と同時には設定できない)。
 * @param {Number} tileId タイルID
 */
Game_CharacterBase.prototype.setTileImage = function(tileId) {
    this._tileId = tileId;
    this._characterName = '';
    this._characterIndex = 0;
    this._isObjectCharacter = true;
};

/**
 * 指定方向にあるイベントトリガを起動。
 * @param {Number} d 向き(テンキー対応)
 */
Game_CharacterBase.prototype.checkEventTriggerTouchFront = function(d) {
    var x2 = $gameMap.roundXWithDirection(this._x, d);
    var y2 = $gameMap.roundYWithDirection(this._y, d);
    this.checkEventTriggerTouch(x2, y2);
};

/**
 * 指定位置にあるイベントトリガを起動。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.checkEventTriggerTouch = function(x, y) {
    return false;
};

/**
 * 移動可能か。
 * @param {Number} [x]
 * @param {Number} [y]
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isMovementSucceeded = function(x, y) {
    return this._movementSuccess;
};

/**
 * 移動可能かの設定。
 * @param  {Boolean} success
 */
Game_CharacterBase.prototype.setMovementSuccess = function(success) {
    this._movementSuccess = success;
};

/**
 * 指定の向きへ[一歩前進]。
 * @param {Number} d 向き(テンキー対応)
 */
Game_CharacterBase.prototype.moveStraight = function(d) {
    this.setMovementSuccess(this.canPass(this._x, this._y, d));
    if (this.isMovementSucceeded()) {
        this.setDirection(d);
        this._x = $gameMap.roundXWithDirection(this._x, d);
        this._y = $gameMap.roundYWithDirection(this._y, d);
        this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(d));
        this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(d));
        this.increaseSteps();
    } else {
        this.setDirection(d);
        this.checkEventTriggerTouchFront(d);
    }
};

/**
 * 指定の方向に斜めに進む。
 * テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。
 * @param {Number} horz 水平向き(4: 左, 6:右)
 * @param {Number} vert 垂直向き(2: 下, 8: 上)
 */
Game_CharacterBase.prototype.moveDiagonally = function(horz, vert) {
    this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, horz, vert));
    if (this.isMovementSucceeded()) {
        this._x = $gameMap.roundXWithDirection(this._x, horz);
        this._y = $gameMap.roundYWithDirection(this._y, vert);
        this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
        this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
        this.increaseSteps();
    }
    if (this._direction === this.reverseDir(horz)) {
        this.setDirection(horz);
    }
    if (this._direction === this.reverseDir(vert)) {
        this.setDirection(vert);
    }
};

/**
 * [ジャンプ]。
 * @param {Number} xPlus x方向の移動(タイル数)
 * @param {Number} yPlus y方向の移動(タイル数)
 */
Game_CharacterBase.prototype.jump = function(xPlus, yPlus) {
    if (Math.abs(xPlus) > Math.abs(yPlus)) {
        if (xPlus !== 0) {
            this.setDirection(xPlus < 0 ? 4 : 6);
        }
    } else {
        if (yPlus !== 0) {
            this.setDirection(yPlus < 0 ? 8 : 2);
        }
    }
    this._x += xPlus;
    this._y += yPlus;
    var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
    this._jumpPeak = 10 + distance - this._moveSpeed;
    this._jumpCount = this._jumpPeak * 2;
    this.resetStopCount();
    this.straighten();
};

/**
 * [歩行アニメ]するか。
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.hasWalkAnime = function() {
    return this._walkAnime;
};

/**
 * [歩行アニメ]するかの設定。
 * @param  {Boolean} walkAnime
 */
Game_CharacterBase.prototype.setWalkAnime = function(walkAnime) {
    this._walkAnime = walkAnime;
};

/**
 * [足踏みアニメ]するか。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.hasStepAnime = function() {
    return this._stepAnime;
};

/**
 * [足踏みアニメ]するかの設定。
 * @param  {Boolean} stepAnime
 */
Game_CharacterBase.prototype.setStepAnime = function(stepAnime) {
    this._stepAnime = stepAnime;
};

/**
 * [向き固定]か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isDirectionFixed = function() {
    return this._directionFix;
};

/**
 * [向き固定]の設定。
 * @param {Boolean} directionFix 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.setDirectionFix = function(directionFix) {
    this._directionFix = directionFix;
};

/**
 * [すり抜け]状態か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isThrough = function() {
    return this._through;
};

/**
 * [すり抜け]状態の設定。
 * @param  {Boolean} through
 */
Game_CharacterBase.prototype.setThrough = function(through) {
    this._through = through;
};

/**
 * [透明]状態か。
 * @returns  {Boolean}
 */
Game_CharacterBase.prototype.isTransparent = function() {
    return this._transparent;
};

/**
 * [茂み]の深さを返す。
 * @returns {Number} ピクセル
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.bushDepth = function() {
    return this._bushDepth;
};

/**
 * [透明]状態の設定。
 * @param  {Boolean} transparent
 */
Game_CharacterBase.prototype.setTransparent = function(transparent) {
    this._transparent = transparent;
};

/**
 * アニメーションIDの設定。
 * @param {Number} animationId 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.requestAnimation = function(animationId) {
    this._animationId = animationId;
};

/**
 * フキダシアイコンIDを設定。
 * @param {Number} balloonId 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.requestBalloon = function(balloonId) {
    this._balloonId = balloonId;
};

/**
 * アニメーションIDを返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.animationId = function() {
    return this._animationId;
};

/**
 * フキダシアイコンIDを返す。
 * @returns {Number} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.balloonId = function() {
    return this._balloonId;
};

/**
 * [アニメーション]表示開始。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.startAnimation = function() {
    this._animationId = 0;
    this._animationPlaying = true;
};

/**
 * [フキダシアイコン]表示開始。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.startBalloon = function() {
    this._balloonId = 0;
    this._balloonPlaying = true;
};

/**
 * [アニメーション]表示中か。
 * @returns {Boolean}
 */
Game_CharacterBase.prototype.isAnimationPlaying = function() {
    return this._animationId > 0 || this._animationPlaying;
};

/**
 * [フキダシアイコン]表示中か。
 * @returns {Boolean} 
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.isBalloonPlaying = function() {
    return this._balloonId > 0 || this._balloonPlaying;
};

/**
 * [アニメーション]表示を終了。
 */
Game_CharacterBase.prototype.endAnimation = function() {
    this._animationPlaying = false;
};

/**
 * [フキダシアイコン]表示を終了。
 * @memberof Game_CharacterBase
 */
Game_CharacterBase.prototype.endBalloon = function() {
    this._balloonPlaying = false;
};




/**
 * {@link Game_Player}, {@link Game_Follower}, {@link Game_Vehicle} および {@link Game_Event} のスーパークラス。
 * @class Game_Character
 * @extends Game_CharacterBase
 * @abstract
 * 
 * @prop {Number} ROUTE_END [static]
 * @prop {Number} ROUTE_MOVE_DOWN [static]
 * @prop {Number} ROUTE_MOVE_LEFT [static]
 * @prop {Number} ROUTE_MOVE_RIGHT [static]
 * @prop {Number} ROUTE_MOVE_UP [static]
 * @prop {Number} ROUTE_MOVE_LOWER_L [static]
 * @prop {Number} ROUTE_MOVE_LOWER_R [static]
 * @prop {Number} ROUTE_MOVE_UPPER_L [static]
 * @prop {Number} ROUTE_MOVE_UPPER_R [static]
 * @prop {Number} ROUTE_MOVE_RANDOM [static]
 * @prop {Number} ROUTE_MOVE_TOWARD [static]
 * @prop {Number} ROUTE_MOVE_AWAY [static]
 * @prop {Number} ROUTE_MOVE_FORWARD [static]
 * @prop {Number} ROUTE_MOVE_BACKWARD [static]
 * @prop {Number} ROUTE_JUMP [static]
 * @prop {Number} ROUTE_WAIT [static]
 * @prop {Number} ROUTE_TURN_DOWN [static]
 * @prop {Number} ROUTE_TURN_LEFT [static]
 * @prop {Number} ROUTE_TURN_RIGHT [static]
 * @prop {Number} ROUTE_TURN_UP [static]
 * @prop {Number} ROUTE_TURN_90D_R [static]
 * @prop {Number} ROUTE_TURN_90D_L [static]
 * @prop {Number} ROUTE_TURN_180D [static]
 * @prop {Number} ROUTE_TURN_90D_R_L [static]
 * @prop {Number} ROUTE_TURN_RANDOM [static]
 * @prop {Number} ROUTE_TURN_TOWARD [static]
 * @prop {Number} ROUTE_TURN_AWAY [static]
 * @prop {Number} ROUTE_SWITCH_ON [static]
 * @prop {Number} ROUTE_SWITCH_OFF [static]
 * @prop {Number} ROUTE_CHANGE_SPEED [static]
 * @prop {Number} ROUTE_CHANGE_FREQ [static]
 * @prop {Number} ROUTE_WALK_ANIME_ON [static]
 * @prop {Number} ROUTE_WALK_ANIME_OFF [static]
 * @prop {Number} ROUTE_STEP_ANIME_ON [static]
 * @prop {Number} ROUTE_STEP_ANIME_OFF [static]
 * @prop {Number} ROUTE_DIR_FIX_ON [static]
 * @prop {Number} ROUTE_DIR_FIX_OFF [static]
 * @prop {Number} ROUTE_THROUGH_ON [static]
 * @prop {Number} ROUTE_THROUGH_OFF [static]
 * @prop {Number} ROUTE_TRANSPARENT_ON [static]
 * @prop {Number} ROUTE_TRANSPARENT_OFF [static]
 * @prop {Number} ROUTE_CHANGE_IMAGE [static]
 * @prop {Number} ROUTE_CHANGE_OPACITY [static]
 * @prop {Number} ROUTE_CHANGE_BLEND_MODE [static]
 * @prop {Number} ROUTE_PLAY_SE [static]
 * @prop {Number} ROUTE_SCRIPT [static]
 * 
 * @prop {Boolean} _moveRouteForcing
 * @prop {RPG.MoveRoute} _moveRoute
 * @prop {Number} _moveRouteIndex
 * @prop {RPG.MoveRoute} _originalMoveRoute
 * @prop {Number} _originalMoveRouteIndex
 * @prop {Number} _waitCount
 */
function Game_Character() {
    this.initialize.apply(this, arguments);
}

Game_Character.prototype = Object.create(Game_CharacterBase.prototype);
Game_Character.prototype.constructor = Game_Character;

Game_Character.ROUTE_END               = 0;
Game_Character.ROUTE_MOVE_DOWN         = 1;
Game_Character.ROUTE_MOVE_LEFT         = 2;
Game_Character.ROUTE_MOVE_RIGHT        = 3;
Game_Character.ROUTE_MOVE_UP           = 4;
Game_Character.ROUTE_MOVE_LOWER_L      = 5;
Game_Character.ROUTE_MOVE_LOWER_R      = 6;
Game_Character.ROUTE_MOVE_UPPER_L      = 7;
Game_Character.ROUTE_MOVE_UPPER_R      = 8;
Game_Character.ROUTE_MOVE_RANDOM       = 9;
Game_Character.ROUTE_MOVE_TOWARD       = 10;
Game_Character.ROUTE_MOVE_AWAY         = 11;
Game_Character.ROUTE_MOVE_FORWARD      = 12;
Game_Character.ROUTE_MOVE_BACKWARD     = 13;
Game_Character.ROUTE_JUMP              = 14;
Game_Character.ROUTE_WAIT              = 15;
Game_Character.ROUTE_TURN_DOWN         = 16;
Game_Character.ROUTE_TURN_LEFT         = 17;
Game_Character.ROUTE_TURN_RIGHT        = 18;
Game_Character.ROUTE_TURN_UP           = 19;
Game_Character.ROUTE_TURN_90D_R        = 20;
Game_Character.ROUTE_TURN_90D_L        = 21;
Game_Character.ROUTE_TURN_180D         = 22;
Game_Character.ROUTE_TURN_90D_R_L      = 23;
Game_Character.ROUTE_TURN_RANDOM       = 24;
Game_Character.ROUTE_TURN_TOWARD       = 25;
Game_Character.ROUTE_TURN_AWAY         = 26;
Game_Character.ROUTE_SWITCH_ON         = 27;
Game_Character.ROUTE_SWITCH_OFF        = 28;
Game_Character.ROUTE_CHANGE_SPEED      = 29;
Game_Character.ROUTE_CHANGE_FREQ       = 30;
Game_Character.ROUTE_WALK_ANIME_ON     = 31;
Game_Character.ROUTE_WALK_ANIME_OFF    = 32;
Game_Character.ROUTE_STEP_ANIME_ON     = 33;
Game_Character.ROUTE_STEP_ANIME_OFF    = 34;
Game_Character.ROUTE_DIR_FIX_ON        = 35;
Game_Character.ROUTE_DIR_FIX_OFF       = 36;
Game_Character.ROUTE_THROUGH_ON        = 37;
Game_Character.ROUTE_THROUGH_OFF       = 38;
Game_Character.ROUTE_TRANSPARENT_ON    = 39;
Game_Character.ROUTE_TRANSPARENT_OFF   = 40;
Game_Character.ROUTE_CHANGE_IMAGE      = 41;
Game_Character.ROUTE_CHANGE_OPACITY    = 42;
Game_Character.ROUTE_CHANGE_BLEND_MODE = 43;
Game_Character.ROUTE_PLAY_SE           = 44;
Game_Character.ROUTE_SCRIPT            = 45;

/**
 * オブジェクト生成時の初期化。
 */
Game_Character.prototype.initialize = function() {
    Game_CharacterBase.prototype.initialize.call(this);
};

/**
 * メンバ変数の初期化。
 */
Game_Character.prototype.initMembers = function() {
    Game_CharacterBase.prototype.initMembers.call(this);
    this._moveRouteForcing = false;
    this._moveRoute = null;
    this._moveRouteIndex = 0;
    this._originalMoveRoute = null;
    this._originalMoveRouteIndex = 0;
    this._waitCount = 0;
};

/**
 * [移動ルート]を記録。
 * @memberof Game_Character
 */
Game_Character.prototype.memorizeMoveRoute = function() {
    this._originalMoveRoute       = this._moveRoute;
    this._originalMoveRouteIndex  = this._moveRouteIndex;
};

/**
 * 記録した[移動ルート]に戻す。
 * @memberof Game_Character
 */
Game_Character.prototype.restoreMoveRoute = function() {
    this._moveRoute          = this._originalMoveRoute;
    this._moveRouteIndex     = this._originalMoveRouteIndex;
    this._originalMoveRoute  = null;
};

/**
 * [移動ルート]が強制されているか。
 * @returns {Boolean} 
 * @memberof Game_Character
 */
Game_Character.prototype.isMoveRouteForcing = function() {
    return this._moveRouteForcing;
};

/**
 * [移動ルート]の設定。
 * @param {RPG.MoveRoute} moveRoute 
 * @memberof Game_Character
 */
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    this._moveRoute = moveRoute;
    this._moveRouteIndex = 0;
    this._moveRouteForcing = false;
};

/**
 * [移動ルート]を強制。
 * @param {RPG.MoveRoute} moveRoute 
 * @memberof Game_Character
 */
Game_Character.prototype.forceMoveRoute = function(moveRoute) {
    if (!this._originalMoveRoute) {
        this.memorizeMoveRoute();
    }
    this._moveRoute = moveRoute;
    this._moveRouteIndex = 0;
    this._moveRouteForcing = true;
    this._waitCount = 0;
};

/**
 * 停止状態をアップデート。
 */
Game_Character.prototype.updateStop = function() {
    Game_CharacterBase.prototype.updateStop.call(this);
    if (this._moveRouteForcing) {
        this.updateRoutineMove();
    }
};

/**
 * [移動ルート]をアップデート。
 * @memberof Game_Character
 */
Game_Character.prototype.updateRoutineMove = function() {
    if (this._waitCount > 0) {
        this._waitCount--;
    } else {
        this.setMovementSuccess(true);
        var command = this._moveRoute.list[this._moveRouteIndex];
        if (command) {
            this.processMoveCommand(command);
            this.advanceMoveRouteIndex();
        }
    }
};

/**
 * [移動コマンド]を実行。
 * @param {RPG.MoveCommand} command 
 * @memberof Game_Character
 */
Game_Character.prototype.processMoveCommand = function(command) {
    var gc = Game_Character;
    var params = command.parameters;
    switch (command.code) {
    case gc.ROUTE_END:
        this.processRouteEnd();
        break;
    case gc.ROUTE_MOVE_DOWN:
        this.moveStraight(2);
        break;
    case gc.ROUTE_MOVE_LEFT:
        this.moveStraight(4);
        break;
    case gc.ROUTE_MOVE_RIGHT:
        this.moveStraight(6);
        break;
    case gc.ROUTE_MOVE_UP:
        this.moveStraight(8);
        break;
    case gc.ROUTE_MOVE_LOWER_L:
        this.moveDiagonally(4, 2);
        break;
    case gc.ROUTE_MOVE_LOWER_R:
        this.moveDiagonally(6, 2);
        break;
    case gc.ROUTE_MOVE_UPPER_L:
        this.moveDiagonally(4, 8);
        break;
    case gc.ROUTE_MOVE_UPPER_R:
        this.moveDiagonally(6, 8);
        break;
    case gc.ROUTE_MOVE_RANDOM:
        this.moveRandom();
        break;
    case gc.ROUTE_MOVE_TOWARD:
        this.moveTowardPlayer();
        break;
    case gc.ROUTE_MOVE_AWAY:
        this.moveAwayFromPlayer();
        break;
    case gc.ROUTE_MOVE_FORWARD:
        this.moveForward();
        break;
    case gc.ROUTE_MOVE_BACKWARD:
        this.moveBackward();
        break;
    case gc.ROUTE_JUMP:
        this.jump(params[0], params[1]);
        break;
    case gc.ROUTE_WAIT:
        this._waitCount = params[0] - 1;
        break;
    case gc.ROUTE_TURN_DOWN:
        this.setDirection(2);
        break;
    case gc.ROUTE_TURN_LEFT:
        this.setDirection(4);
        break;
    case gc.ROUTE_TURN_RIGHT:
        this.setDirection(6);
        break;
    case gc.ROUTE_TURN_UP:
        this.setDirection(8);
        break;
    case gc.ROUTE_TURN_90D_R:
        this.turnRight90();
        break;
    case gc.ROUTE_TURN_90D_L:
        this.turnLeft90();
        break;
    case gc.ROUTE_TURN_180D:
        this.turn180();
        break;
    case gc.ROUTE_TURN_90D_R_L:
        this.turnRightOrLeft90();
        break;
    case gc.ROUTE_TURN_RANDOM:
        this.turnRandom();
        break;
    case gc.ROUTE_TURN_TOWARD:
        this.turnTowardPlayer();
        break;
    case gc.ROUTE_TURN_AWAY:
        this.turnAwayFromPlayer();
        break;
    case gc.ROUTE_SWITCH_ON:
        $gameSwitches.setValue(params[0], true);
        break;
    case gc.ROUTE_SWITCH_OFF:
        $gameSwitches.setValue(params[0], false);
        break;
    case gc.ROUTE_CHANGE_SPEED:
        this.setMoveSpeed(params[0]);
        break;
    case gc.ROUTE_CHANGE_FREQ:
        this.setMoveFrequency(params[0]);
        break;
    case gc.ROUTE_WALK_ANIME_ON:
        this.setWalkAnime(true);
        break;
    case gc.ROUTE_WALK_ANIME_OFF:
        this.setWalkAnime(false);
        break;
    case gc.ROUTE_STEP_ANIME_ON:
        this.setStepAnime(true);
        break;
    case gc.ROUTE_STEP_ANIME_OFF:
        this.setStepAnime(false);
        break;
    case gc.ROUTE_DIR_FIX_ON:
        this.setDirectionFix(true);
        break;
    case gc.ROUTE_DIR_FIX_OFF:
        this.setDirectionFix(false);
        break;
    case gc.ROUTE_THROUGH_ON:
        this.setThrough(true);
        break;
    case gc.ROUTE_THROUGH_OFF:
        this.setThrough(false);
        break;
    case gc.ROUTE_TRANSPARENT_ON:
        this.setTransparent(true);
        break;
    case gc.ROUTE_TRANSPARENT_OFF:
        this.setTransparent(false);
        break;
    case gc.ROUTE_CHANGE_IMAGE:
        this.setImage(params[0], params[1]);
        break;
    case gc.ROUTE_CHANGE_OPACITY:
        this.setOpacity(params[0]);
        break;
    case gc.ROUTE_CHANGE_BLEND_MODE:
        this.setBlendMode(params[0]);
        break;
    case gc.ROUTE_PLAY_SE:
        AudioManager.playSe(params[0]);
        break;
    case gc.ROUTE_SCRIPT:
        eval(params[0]);
        break;
    }
};

/**
 * 指定した x座標と自身の x座標の差分を返す。
 * @param {Number} x タイル数
 * @returns {Number} タイル数
 */
Game_Character.prototype.deltaXFrom = function(x) {
    return $gameMap.deltaX(this.x, x);
};

/**
 * 指定した y座標と自身の y座標の差分を返す。
 * @param {Number} y タイル数
 * @returns {Number} タイル数
 */
Game_Character.prototype.deltaYFrom = function(y) {
    return $gameMap.deltaY(this.y, y);
};

/**
 * [ランダムに移動][タイプ:ランダム]。
 * @memberof Game_Character
 */
Game_Character.prototype.moveRandom = function() {
    var d = 2 + Math.randomInt(4) * 2;
    if (this.canPass(this.x, this.y, d)) {
        this.moveStraight(d);
    }
};

/**
 * 指定キャラクタに近づく。[タイプ:近づく]。
 * @param {Game_Character} character 
 * @memberof Game_Character
 */
Game_Character.prototype.moveTowardCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
        this.moveStraight(sx > 0 ? 4 : 6);
        if (!this.isMovementSucceeded() && sy !== 0) {
            this.moveStraight(sy > 0 ? 8 : 2);
        }
    } else if (sy !== 0) {
        this.moveStraight(sy > 0 ? 8 : 2);
        if (!this.isMovementSucceeded() && sx !== 0) {
            this.moveStraight(sx > 0 ? 4 : 6);
        }
    }
};

/**
 * 指定キャラクタから遠ざかる。
 * @param {Game_Character} character 
 * @memberof Game_Character
 */
Game_Character.prototype.moveAwayFromCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
        this.moveStraight(sx > 0 ? 6 : 4);
        if (!this.isMovementSucceeded() && sy !== 0) {
            this.moveStraight(sy > 0 ? 2 : 8);
        }
    } else if (sy !== 0) {
        this.moveStraight(sy > 0 ? 2 : 8);
        if (!this.isMovementSucceeded() && sx !== 0) {
            this.moveStraight(sx > 0 ? 6 : 4);
        }
    }
};

/**
 * 指定キャラクタの方を向く。
 * @param {Game_Character} character 
 * @memberof Game_Character
 */
Game_Character.prototype.turnTowardCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
        this.setDirection(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
        this.setDirection(sy > 0 ? 8 : 2);
    }
};

/**
 * 指定キャラクタの逆を向く。
 * @param {Game_Character} character 
 * @memberof Game_Character
 */
Game_Character.prototype.turnAwayFromCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (Math.abs(sx) > Math.abs(sy)) {
        this.setDirection(sx > 0 ? 6 : 4);
    } else if (sy !== 0) {
        this.setDirection(sy > 0 ? 2 : 8);
    }
};

/**
 * [プレイヤーの方を向く]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnTowardPlayer = function() {
    this.turnTowardCharacter($gamePlayer);
};

/**
 * [プレイヤーの逆を向く]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnAwayFromPlayer = function() {
    this.turnAwayFromCharacter($gamePlayer);
};

/**
 * [プレイヤーに近づく]。
 * @memberof Game_Character
 */
Game_Character.prototype.moveTowardPlayer = function() {
    this.moveTowardCharacter($gamePlayer);
};

/**
 * [プレイヤーから遠ざかる]。
 * @memberof Game_Character
 */
Game_Character.prototype.moveAwayFromPlayer = function() {
    this.moveAwayFromCharacter($gamePlayer);
};

/**
 * [一歩前進]。
 * @memberof Game_Character
 */
Game_Character.prototype.moveForward = function() {
    this.moveStraight(this.direction());
};

/**
 * [一歩後退]。
 * @memberof Game_Character
 */
Game_Character.prototype.moveBackward = function() {
    var lastDirectionFix = this.isDirectionFixed();
    this.setDirectionFix(true);
    this.moveStraight(this.reverseDir(this.direction()));
    this.setDirectionFix(lastDirectionFix);
};

/**
 * [移動ルート]の終了。
 * @memberof Game_Character
 */
Game_Character.prototype.processRouteEnd = function() {
    if (this._moveRoute.repeat) {
        this._moveRouteIndex = -1;
    } else if (this._moveRouteForcing) {
        this._moveRouteForcing = false;
        this.restoreMoveRoute();
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @memberof Game_Character
 */
Game_Character.prototype.advanceMoveRouteIndex = function() {
    var moveRoute = this._moveRoute;
    if (moveRoute && (this.isMovementSucceeded() || moveRoute.skippable)) {
        var numCommands = moveRoute.list.length - 1;
        this._moveRouteIndex++;
        if (moveRoute.repeat && this._moveRouteIndex >= numCommands) {
            this._moveRouteIndex = 0;
        }
    }
};

/**
 * [右に90度回転]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnRight90 = function() {
    switch (this.direction()) {
    case 2:
        this.setDirection(4);
        break;
    case 4:
        this.setDirection(8);
        break;
    case 6:
        this.setDirection(2);
        break;
    case 8:
        this.setDirection(6);
        break;
    }
};

/**
 * [左に90度回転]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnLeft90 = function() {
    switch (this.direction()) {
    case 2:
        this.setDirection(6);
        break;
    case 4:
        this.setDirection(2);
        break;
    case 6:
        this.setDirection(8);
        break;
    case 8:
        this.setDirection(4);
        break;
    }
};

/**
 * [180度回転]。
 * @memberof Game_Character
 */
Game_Character.prototype.turn180 = function() {
    this.setDirection(this.reverseDir(this.direction()));
};

/**
 * [右か左に90度回転]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnRightOrLeft90 = function() {
    switch (Math.randomInt(2)) {
    case 0:
        this.turnRight90();
        break;
    case 1:
        this.turnLeft90();
        break;
    }
};

/**
 * [ランダムに方向転換]。
 * @memberof Game_Character
 */
Game_Character.prototype.turnRandom = function() {
    this.setDirection(2 + Math.randomInt(4) * 2);
};

/**
 * 指定したキャラクタと場所を入れ替わる。
 * @param  {Game_Character} character
 */
Game_Character.prototype.swap = function(character) {
    var newX = character.x;
    var newY = character.y;
    character.locate(this.x, this.y);
    this.locate(newX, newY);
};

/**
 * 指定座標へたどり着くための向きを返す。
 * @param {Number} goalX タイル数
 * @param {Number} goalY タイル数
 * @returns {Number} 向き(テンキー対応)
 */
Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
    var searchLimit = this.searchLimit();
    var mapWidth = $gameMap.width();
    var nodeList = [];
    var openList = [];
    var closedList = [];
    var start = {};
    var best = start;

    if (this.x === goalX && this.y === goalY) {
        return 0;
    }

    start.parent = null;
    start.x = this.x;
    start.y = this.y;
    start.g = 0;
    start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
    nodeList.push(start);
    openList.push(start.y * mapWidth + start.x);

    while (nodeList.length > 0) {
        var bestIndex = 0;
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].f < nodeList[bestIndex].f) {
                bestIndex = i;
            }
        }

        var current = nodeList[bestIndex];
        var x1 = current.x;
        var y1 = current.y;
        var pos1 = y1 * mapWidth + x1;
        var g1 = current.g;

        nodeList.splice(bestIndex, 1);
        openList.splice(openList.indexOf(pos1), 1);
        closedList.push(pos1);

        if (current.x === goalX && current.y === goalY) {
            best = current;
            break;
        }

        if (g1 >= searchLimit) {
            continue;
        }

        for (var j = 0; j < 4; j++) {
            var direction = 2 + j * 2;
            var x2 = $gameMap.roundXWithDirection(x1, direction);
            var y2 = $gameMap.roundYWithDirection(y1, direction);
            var pos2 = y2 * mapWidth + x2;

            if (closedList.contains(pos2)) {
                continue;
            }
            if (!this.canPass(x1, y1, direction)) {
                continue;
            }

            var g2 = g1 + 1;
            var index2 = openList.indexOf(pos2);

            if (index2 < 0 || g2 < nodeList[index2].g) {
                var neighbor;
                if (index2 >= 0) {
                    neighbor = nodeList[index2];
                } else {
                    neighbor = {};
                    nodeList.push(neighbor);
                    openList.push(pos2);
                }
                neighbor.parent = current;
                neighbor.x = x2;
                neighbor.y = y2;
                neighbor.g = g2;
                neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                    best = neighbor;
                }
            }
        }
    }

    var node = best;
    while (node.parent && node.parent !== start) {
        node = node.parent;
    }

    var deltaX1 = $gameMap.deltaX(node.x, start.x);
    var deltaY1 = $gameMap.deltaY(node.y, start.y);
    if (deltaY1 > 0) {
        return 2;
    } else if (deltaX1 < 0) {
        return 4;
    } else if (deltaX1 > 0) {
        return 6;
    } else if (deltaY1 < 0) {
        return 8;
    }

    var deltaX2 = this.deltaXFrom(goalX);
    var deltaY2 = this.deltaYFrom(goalY);
    if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
        return deltaX2 > 0 ? 4 : 6;
    } else if (deltaY2 !== 0) {
        return deltaY2 > 0 ? 8 : 2;
    }

    return 0;
};

/**
 * ルート検索の上限数を返す。
 * @returns {Number} 
 * @memberof Game_Character
 */
Game_Character.prototype.searchLimit = function() {
    return 12;
};




/**
 * (乗り物を含む)プレイヤーキャラクタを定義したクラス。マップの[場所移動]も含む。
 * 大域変数 {@link $gamePlayer} を介して扱う。
 * @class Game_Player
 * @extends Game_Character
 * 
 * @prop {String} _vehicleType
 * @prop {Boolean} _vehicleGettingOn
 * @prop {Boolean} _vehicleGettingOff
 * @prop {Boolean} _dashing
 * @prop {Boolean} _needsMapReload
 * @prop {Boolean} _transferring
 * @prop {Number} _newMapId
 * @prop {Number} _newX
 * @prop {Number} _newY
 * @prop {Number} _newDirection
 * @prop {Number} _fadeType
 * @prop {Game_Followers} _followers
 * @prop {Number} _encounterCount
 */
function Game_Player() {
    this.initialize.apply(this, arguments);
}

Game_Player.prototype = Object.create(Game_Character.prototype);
Game_Player.prototype.constructor = Game_Player;

/**
 *  オブジェクト生成時の初期化。
 */
Game_Player.prototype.initialize = function() {
    Game_Character.prototype.initialize.call(this);
    this.setTransparent($dataSystem.optTransparent);
};

/**
 * メンバ変数の初期化。
 */
Game_Player.prototype.initMembers = function() {
    Game_Character.prototype.initMembers.call(this);
    this._vehicleType = 'walk';
    this._vehicleGettingOn = false;
    this._vehicleGettingOff = false;
    this._dashing = false;
    this._needsMapReload = false;
    this._transferring = false;
    this._newMapId = 0;
    this._newX = 0;
    this._newY = 0;
    this._newDirection = 0;
    this._fadeType = 0;
    this._followers = new Game_Followers();
    this._encounterCount = 0;
};

/**
 * [場所移動]情報を削除。
 * @memberof Game_Player
 */
Game_Player.prototype.clearTransferInfo = function() {
    this._transferring = false;
    this._newMapId = 0;
    this._newX = 0;
    this._newY = 0;
    this._newDirection = 0;
};

/**
 * [隊列メンバー]を返す。
 * @returns {Game_Followers} 
 * @memberof Game_Player
 */
Game_Player.prototype.followers = function() {
    return this._followers;
};

/**
 * プレイヤーキャラクタを更新。
 * @memberof Game_Player
 */
Game_Player.prototype.refresh = function() {
    var actor = $gameParty.leader();
    var characterName = actor ? actor.characterName() : '';
    var characterIndex = actor ? actor.characterIndex() : 0;
    this.setImage(characterName, characterIndex);
    this._followers.refresh();
};

/**
 * プレイヤーキャラクタが停止しているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isStopping = function() {
    if (this._vehicleGettingOn || this._vehicleGettingOff) {
        return false;
    }
    return Game_Character.prototype.isStopping.call(this);
};

/**
 * 指定した値で[場所移動]の予約。
 * @param {Number} mapId 
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} [d] 向き(テンキー対応)
 * @param {Number} [fadeType] 
 * @memberof Game_Player
 */
Game_Player.prototype.reserveTransfer = function(mapId, x, y, d, fadeType) {
    this._transferring = true;
    this._newMapId = mapId;
    this._newX = x;
    this._newY = y;
    this._newDirection = d;
    this._fadeType = fadeType;
};

/**
 * マップの読み込みの予約。
 */
Game_Player.prototype.requestMapReload = function() {
    this._needsMapReload = true;
};

/**
 * [場所移動]中か。
 * @returns {Boolean}
 */
Game_Player.prototype.isTransferring = function() {
    return this._transferring;
};

/**
 * 移動予定のマップIDを返す。
 * @returns {Number} 
 * @memberof Game_Player
 */
Game_Player.prototype.newMapId = function() {
    return this._newMapId;
};

/**
 * [場所移動]時の[フェード]を返す。
 * @returns {Number} 
 * @memberof Game_Player
 */
Game_Player.prototype.fadeType = function() {
    return this._fadeType;
};

/**
 * [場所移動]の実行。
 * @memberof Game_Player
 */
Game_Player.prototype.performTransfer = function() {
    if (this.isTransferring()) {
        this.setDirection(this._newDirection);
        if (this._newMapId !== $gameMap.mapId() || this._needsMapReload) {
            $gameMap.setup(this._newMapId);
            this._needsMapReload = false;
        }
        this.locate(this._newX, this._newY);
        this.refresh();
        this.clearTransferInfo();
    }
};

/**
 * 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Boolean}
 */
Game_Player.prototype.isMapPassable = function(x, y, d) {
    var vehicle = this.vehicle();
    if (vehicle) {
        return vehicle.isMapPassable(x, y, d);
    } else {
        return Game_Character.prototype.isMapPassable.call(this, x, y, d);
    }
};

/**
 * [乗り物]を返す。
 * @returns {Game_Vehicle} 
 * @memberof Game_Player
 */
Game_Player.prototype.vehicle = function() {
    return $gameMap.vehicle(this._vehicleType);
};

/**
 * [小型船]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isInBoat = function() {
    return this._vehicleType === 'boat';
};

/**
 * [大型船]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isInShip = function() {
    return this._vehicleType === 'ship';
};

/**
 * [飛行船]に乗っているか。 
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isInAirship = function() {
    return this._vehicleType === 'airship';
};

/**
 * [乗り物]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isInVehicle = function() {
    return this.isInBoat() || this.isInShip() || this.isInAirship();
};

/**
 * 歩行状態かつ強制移動中でないか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isNormal = function() {
    return this._vehicleType === 'walk' && !this.isMoveRouteForcing();
};

/**
 * 現在ダッシュ中か。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isDashing = function() {
    return this._dashing;
};

/**
 * デバッグ用のすり抜け移動中か。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isDebugThrough = function() {
    return Input.isPressed('control') && $gameTemp.isPlaytest();
};

/**
 * 指定位置が通行不能か。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Player.prototype.isCollided = function(x, y) {
    if (this.isThrough()) {
        return false;
    } else {
        return this.pos(x, y) || this._followers.isSomeoneCollided(x, y);
    }
};

/**
 * 画面の中心 x座標。
 * @returns {Number} タイル数
 * @memberof Game_Player
 */
Game_Player.prototype.centerX = function() {
    return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0;
};

/**
 * 画面中心 y座標。
 * @returns {Number} タイル数
 * @memberof Game_Player
 */
Game_Player.prototype.centerY = function() {
    return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0;
};

/**
 * 画面中心を基準にマップを表示。
 * {@link Game_Map#setDisplayPos} は左上を基準とする。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Player.prototype.center = function(x, y) {
    return $gameMap.setDisplayPos(x - this.centerX(), y - this.centerY());
};

/**
 * 現在のマップ内での[イベントの位置設定]。
 * {@link Game_CharacterBase#setPosition}と異なり、姿勢などを初期化。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Player.prototype.locate = function(x, y) {
    Game_Character.prototype.locate.call(this, x, y);
    this.center(x, y);
    this.makeEncounterCount();
    if (this.isInVehicle()) {
        this.vehicle().refresh();
    }
    this._followers.synchronize(x, y, this.direction());
};

/**
 * 歩き出す(歩数を増やす)。
 */
Game_Player.prototype.increaseSteps = function() {
    Game_Character.prototype.increaseSteps.call(this);
    if (this.isNormal()) {
        $gameParty.increaseSteps();
    }
};

/**
 * 次の[エンカウント]までのカウント数の設定。
 * @memberof Game_Player
 */
Game_Player.prototype.makeEncounterCount = function() {
    var n = $gameMap.encounterStep();
    this._encounterCount = Math.randomInt(n) + Math.randomInt(n) + 1;
};

/**
 * 次の[エンカウント]の敵グループIDを生成して返す。
 * @returns {Number} 
 * @memberof Game_Player
 */
Game_Player.prototype.makeEncounterTroopId = function() {
    var encounterList = [];
    var weightSum = 0;
    $gameMap.encounterList().forEach(function(encounter) {
        if (this.meetsEncounterConditions(encounter)) {
            encounterList.push(encounter);
            weightSum += encounter.weight;
        }
    }, this);
    if (weightSum > 0) {
        var value = Math.randomInt(weightSum);
        for (var i = 0; i < encounterList.length; i++) {
            value -= encounterList[i].weight;
            if (value < 0) {
                return encounterList[i].troopId;
            }
        }
    }
    return 0;
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param  {RPG.Map.Encounter} encounter
 * @returns {Boolean}
 */
Game_Player.prototype.meetsEncounterConditions = function(encounter) {
    return (encounter.regionSet.length === 0 ||
            encounter.regionSet.contains(this.regionId()));
};

/**
 * エンカウントを実行。
 * @returns {Boolean} 実行できたか。
 * @memberof Game_Player
 */
Game_Player.prototype.executeEncounter = function() {
    if (!$gameMap.isEventRunning() && this._encounterCount <= 0) {
        this.makeEncounterCount();
        var troopId = this.makeEncounterTroopId();
        if ($dataTroops[troopId]) {
            BattleManager.setup(troopId, true, false);
            BattleManager.onEncounter();
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

/**
 * 指定位置と[トリガー]に対応する[イベント]を開始。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Array<Number>} triggers 
 * @param {Boolean} normal 
 * @memberof Game_Player
 */
Game_Player.prototype.startMapEvent = function(x, y, triggers, normal) {
    if (!$gameMap.isEventRunning()) {
        $gameMap.eventsXy(x, y).forEach(function(event) {
            if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
                event.start();
            }
        });
    }
};

/**
 * 入力に応じて移動する。
 */
Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        var direction = this.getInputDirection();
        if (direction > 0) {
            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
            var x = $gameTemp.destinationX();
            var y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
        }
        if (direction > 0) {
            this.executeMove(direction);
        }
    }
};

/**
 * プレイヤーキャラクタを操作可能か。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.canMove = function() {
    if ($gameMap.isEventRunning() || $gameMessage.isBusy()) {
        return false;
    }
    if (this.isMoveRouteForcing() || this.areFollowersGathering()) {
        return false;
    }
    if (this._vehicleGettingOn || this._vehicleGettingOff) {
        return false;
    }
    if (this.isInVehicle() && !this.vehicle().canMove()) {
        return false;
    }
    return true;
};

/**
 * 入力された向きを返す。
 * @returns {Number} 向き(テンキー対応)
 * @memberof Game_Player
 */
Game_Player.prototype.getInputDirection = function() {
    return Input.dir4;
};

/**
 * 指定の向きへ[一歩前進]。
 * @param {Number} direction 向き(テンキー対応)
 */
Game_Player.prototype.executeMove = function(direction) {
    this.moveStraight(direction);
};

/**
 * プレイヤーキャラクタのアップデート。
 * @param {Number} [sceneActive]
 */
Game_Player.prototype.update = function(sceneActive) {
    var lastScrolledX = this.scrolledX();
    var lastScrolledY = this.scrolledY();
    var wasMoving = this.isMoving();
    this.updateDashing();
    if (sceneActive) {
        this.moveByInput();
    }
    Game_Character.prototype.update.call(this);
    this.updateScroll(lastScrolledX, lastScrolledY);
    this.updateVehicle();
    if (!this.isMoving()) {
        this.updateNonmoving(wasMoving);
    }
    this._followers.update();
};

/**
 * ダッシュ状態をアップデート。
 * @memberof Game_Player
 */
Game_Player.prototype.updateDashing = function() {
    if (this.isMoving()) {
        return;
    }
    if (this.canMove() && !this.isInVehicle() && !$gameMap.isDashDisabled()) {
        this._dashing = this.isDashButtonPressed() || $gameTemp.isDestinationValid();
    } else {
        this._dashing = false;
    }
};

/**
 * ダッシュボタン(シフト)が押されているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isDashButtonPressed = function() {
    var shift = Input.isPressed('shift');
    if (ConfigManager.alwaysDash) {
        return !shift;
    } else {
        return shift;
    }
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} lastScrolledX
 * @param {Number} lastScrolledY
 */
Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
    var x1 = lastScrolledX;
    var y1 = lastScrolledY;
    var x2 = this.scrolledX();
    var y2 = this.scrolledY();
    if (y2 > y1 && y2 > this.centerY()) {
        $gameMap.scrollDown(y2 - y1);
    }
    if (x2 < x1 && x2 < this.centerX()) {
        $gameMap.scrollLeft(x1 - x2);
    }
    if (x2 > x1 && x2 > this.centerX()) {
        $gameMap.scrollRight(x2 - x1);
    }
    if (y2 < y1 && y2 < this.centerY()) {
        $gameMap.scrollUp(y1 - y2);
    }
};

/**
 * [乗り物]をアップデート。
 * @memberof Game_Player
 */
Game_Player.prototype.updateVehicle = function() {
    if (this.isInVehicle() && !this.areFollowersGathering()) {
        if (this._vehicleGettingOn) {
            this.updateVehicleGetOn();
        } else if (this._vehicleGettingOff) {
            this.updateVehicleGetOff();
        } else {
            this.vehicle().syncWithPlayer();
        }
    }
};

/**
 * [乗り物]へ乗った状態にアップデート。
 * @memberof Game_Player
 */
Game_Player.prototype.updateVehicleGetOn = function() {
    if (!this.areFollowersGathering() && !this.isMoving()) {
        this.setDirection(this.vehicle().direction());
        this.setMoveSpeed(this.vehicle().moveSpeed());
        this._vehicleGettingOn = false;
        this.setTransparent(true);
        if (this.isInAirship()) {
            this.setThrough(true);
        }
        this.vehicle().getOn();
    }
};

/**
 * [乗り物]からの降りた状態にアップデート。
 * @memberof Game_Player
 */
Game_Player.prototype.updateVehicleGetOff = function() {
    if (!this.areFollowersGathering() && this.vehicle().isLowest()) {
        this._vehicleGettingOff = false;
        this._vehicleType = 'walk';
        this.setTransparent(false);
    }
};

/**
 * 移動状態をアップデート。
 * @param {Boolean} wasMoving (true: 動いた, false: 止まっている)
 */
Game_Player.prototype.updateNonmoving = function(wasMoving) {
    if (!$gameMap.isEventRunning()) {
        if (wasMoving) {
            $gameParty.onPlayerWalk();
            this.checkEventTriggerHere([1,2]);
            if ($gameMap.setupStartingEvent()) {
                return;
            }
        }
        if (this.triggerAction()) {
            return;
        }
        if (wasMoving) {
            this.updateEncounterCount();
        } else {
            $gameTemp.clearDestination();
        }
    }
};

/**
 * [決定ボタン]に相当する[トリガー]アクションを実行。
 * @returns {Boolean} アクションがなされたか
 */
Game_Player.prototype.triggerAction = function() {
    if (this.canMove()) {
        if (this.triggerButtonAction()) {
            return true;
        }
        if (this.triggerTouchAction()) {
            return true;
        }
    }
    return false;
};

/**
 * 決定ボタンに対応するアクションを実行。
 * @returns {Boolean} アクションがなされたか
 */
Game_Player.prototype.triggerButtonAction = function() {
    if (Input.isTriggered('ok')) {
        if (this.getOnOffVehicle()) {
            return true;
        }
        this.checkEventTriggerHere([0]);
        if ($gameMap.setupStartingEvent()) {
            return true;
        }
        this.checkEventTriggerThere([0,1,2]);
        if ($gameMap.setupStartingEvent()) {
            return true;
        }
    }
    return false;
};

/**
 * 画面タッチ(クリック)によるアクションを実行。
 * @returns {Boolean} アクションがなされたか
 * @memberof Game_Player
 */
Game_Player.prototype.triggerTouchAction = function() {
    if ($gameTemp.isDestinationValid()){
        var direction = this.direction();
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, direction);
        var y2 = $gameMap.roundYWithDirection(y1, direction);
        var x3 = $gameMap.roundXWithDirection(x2, direction);
        var y3 = $gameMap.roundYWithDirection(y2, direction);
        var destX = $gameTemp.destinationX();
        var destY = $gameTemp.destinationY();
        if (destX === x1 && destY === y1) {
            return this.triggerTouchActionD1(x1, y1);
        } else if (destX === x2 && destY === y2) {
            return this.triggerTouchActionD2(x2, y2);
        } else if (destX === x3 && destY === y3) {
            return this.triggerTouchActionD3(x2, y2);
        }
    }
    return false;
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} x1
 * @param {Number} y1
 * @returns {Boolean} 
 */
Game_Player.prototype.triggerTouchActionD1 = function(x1, y1) {
    if ($gameMap.airship().pos(x1, y1)) {
        if (TouchInput.isTriggered() && this.getOnOffVehicle()) {
            return true;
        }
    }
    this.checkEventTriggerHere([0]);
    return $gameMap.setupStartingEvent();
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} x2
 * @param {Number} y2
 * @returns {Boolean} 
 */
Game_Player.prototype.triggerTouchActionD2 = function(x2, y2) {
    if ($gameMap.boat().pos(x2, y2) || $gameMap.ship().pos(x2, y2)) {
        if (TouchInput.isTriggered() && this.getOnVehicle()) {
            return true;
        }
    }
    if (this.isInBoat() || this.isInShip()) {
        if (TouchInput.isTriggered() && this.getOffVehicle()) {
            return true;
        }
    }
    this.checkEventTriggerThere([0,1,2]);
    return $gameMap.setupStartingEvent();
};

/**
 * @todo この用語の意味が分かったら教えてください
 * @param {Number} x2
 * @param {Number} y2
 * @returns {Boolean} 
 */
Game_Player.prototype.triggerTouchActionD3 = function(x2, y2) {
    if ($gameMap.isCounter(x2, y2)) {
        this.checkEventTriggerThere([0,1,2]);
    }
    return $gameMap.setupStartingEvent();
};

/**
 * [エンカウント]のカウントをアップデート。
 * @memberof Game_Player
 */
Game_Player.prototype.updateEncounterCount = function() {
    if (this.canEncounter()) {
        this._encounterCount -= this.encounterProgressValue();
    }
};

/**
 * 敵と遭遇できる(エンカウント)状態か。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.canEncounter = function() {
    return (!$gameParty.hasEncounterNone() && $gameSystem.isEncounterEnabled() &&
            !this.isInAirship() && !this.isMoveRouteForcing() && !this.isDebugThrough());
};

/**
 * [エンカウント]の発生カウントダウン量。
 * スキルや船の上などで減っている場合、茂みで増えている場合がある。
 * @returns {Number} 
 * @memberof Game_Player
 */
Game_Player.prototype.encounterProgressValue = function() {
    var value = $gameMap.isBush(this.x, this.y) ? 2 : 1;
    if ($gameParty.hasEncounterHalf()) {
        value *= 0.5;
    }
    if (this.isInShip()) {
        value *= 0.5;
    }
    return value;
};

/**
 * 現在地にある[イベント]のうち、指定[トリガー]のものを実行。
 * @param  {Array<Number>} triggers
 */
Game_Player.prototype.checkEventTriggerHere = function(triggers) {
    if (this.canStartLocalEvents()) {
        this.startMapEvent(this.x, this.y, triggers, false);
    }
};

/**
 * 現在地の一歩前にある[イベント]のうち、指定[トリガー]のものを実行。
 * @param  {Array<Number>} triggers
 */
Game_Player.prototype.checkEventTriggerThere = function(triggers) {
    if (this.canStartLocalEvents()) {
        var direction = this.direction();
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, direction);
        var y2 = $gameMap.roundYWithDirection(y1, direction);
        this.startMapEvent(x2, y2, triggers, true);
        if (!$gameMap.isAnyEventStarting() && $gameMap.isCounter(x2, y2)) {
            var x3 = $gameMap.roundXWithDirection(x2, direction);
            var y3 = $gameMap.roundYWithDirection(y2, direction);
            this.startMapEvent(x3, y3, triggers, true);
        }
    }
};

/**
 * タッチ(クリック)で発生する[イベント]を実行。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Player.prototype.checkEventTriggerTouch = function(x, y) {
    if (this.canStartLocalEvents()) {
        this.startMapEvent(x, y, [1,2], true);
    }
};

/**
 * 地表の[イベント]を実行できるか。
 * 飛行船などで空を飛んでいる場合、実行できない。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.canStartLocalEvents = function() {
    return !this.isInAirship();
};

/**
 * [乗り物]の乗り降りを行う。
 * 乗っていたら降り、降りていたら乗る。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.getOnOffVehicle = function() {
    if (this.isInVehicle()) {
        return this.getOffVehicle();
    } else {
        return this.getOnVehicle();
    }
};

/**
 * [乗り物]へ乗る。
 * @returns {Boolean} 乗った
 * @memberof Game_Player
 */
Game_Player.prototype.getOnVehicle = function() {
    var direction = this.direction();
    var x1 = this.x;
    var y1 = this.y;
    var x2 = $gameMap.roundXWithDirection(x1, direction);
    var y2 = $gameMap.roundYWithDirection(y1, direction);
    if ($gameMap.airship().pos(x1, y1)) {
        this._vehicleType = 'airship';
    } else if ($gameMap.ship().pos(x2, y2)) {
        this._vehicleType = 'ship';
    } else if ($gameMap.boat().pos(x2, y2)) {
        this._vehicleType = 'boat';
    }
    if (this.isInVehicle()) {
        this._vehicleGettingOn = true;
        if (!this.isInAirship()) {
            this.forceMoveForward();
        }
        this.gatherFollowers();
    }
    return this._vehicleGettingOn;
};

/**
 * [乗り物]から降りる。
 * @returns {Boolean} 降りた
 * @memberof Game_Player
 */
Game_Player.prototype.getOffVehicle = function() {
    if (this.vehicle().isLandOk(this.x, this.y, this.direction())) {
        if (this.isInAirship()) {
            this.setDirection(2);
        }
        this._followers.synchronize(this.x, this.y, this.direction());
        this.vehicle().getOff();
        if (!this.isInAirship()) {
            this.forceMoveForward();
            this.setTransparent(false);
        }
        this._vehicleGettingOff = true;
        this.setMoveSpeed(4);
        this.setThrough(false);
        this.makeEncounterCount();
        this.gatherFollowers();
    }
    return this._vehicleGettingOff;
};

/**
 * 強制的にプレイヤーキャラクタを前に進める。
 * @memberof Game_Player
 */
Game_Player.prototype.forceMoveForward = function() {
    this.setThrough(true);
    this.moveForward();
    this.setThrough(false);
};

/**
 * [ダメージ床]に乗っているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.isOnDamageFloor = function() {
    return $gameMap.isDamageFloor(this.x, this.y) && !this.isInAirship();
};

/**
 * 指定の向きへ[一歩前進]。
 * @param {Number} d 向き(テンキー対応)
 * @memberof Game_Player
 */
Game_Player.prototype.moveStraight = function(d) {
    if (this.canPass(this.x, this.y, d)) {
        this._followers.updateMove();
    }
    Game_Character.prototype.moveStraight.call(this, d);
};

/**
 * 指定の方向に斜めに進む。
 * テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。
 * @param {Number} horz 水平向き(4: 左, 6:右)
 * @param {Number} vert 垂直向き(2: 下, 8: 上)
 * @memberof Game_Player
 */
Game_Player.prototype.moveDiagonally = function(horz, vert) {
    if (this.canPassDiagonally(this.x, this.y, horz, vert)) {
        this._followers.updateMove();
    }
    Game_Character.prototype.moveDiagonally.call(this, horz, vert);
};

/**
 * [ジャンプ]。
 * @param {Number} xPlus x方向の移動(タイル数)
 * @param {Number} yPlus y方向の移動(タイル数)
 * @memberof Game_Player
 */
Game_Player.prototype.jump = function(xPlus, yPlus) {
    Game_Character.prototype.jump.call(this, xPlus, yPlus);
    this._followers.jumpAll();
};

/**
 * [隊列歩行]を行う。
 * @memberof Game_Player
 */
Game_Player.prototype.showFollowers = function() {
    this._followers.show();
};

/**
 * [隊列歩行]をしない。
 * @memberof Game_Player
 */
Game_Player.prototype.hideFollowers = function() {
    this._followers.hide();
};

/**
 * [隊列メンバーの集合]。
 * @memberof Game_Player
 */
Game_Player.prototype.gatherFollowers = function() {
    this._followers.gather();
};

/**
 * [隊列メンバー]の集合中か。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.areFollowersGathering = function() {
    return this._followers.areGathering();
};

/**
 * [隊列メンバー]が集合しているか。
 * @returns {Boolean} 
 * @memberof Game_Player
 */
Game_Player.prototype.areFollowersGathered = function() {
    return this._followers.areGathered();
};




/**
 * [隊列メンバー]を定義したクラス。
 * これを配列として定義した  {@link Game_Followers} クラスがある。
 * @class Game_Follower
 * @extends Game_Character
 * 
 * @prop {Number} _memberIndex
 */
function Game_Follower() {
    this.initialize.apply(this, arguments);
}

Game_Follower.prototype = Object.create(Game_Character.prototype);
Game_Follower.prototype.constructor = Game_Follower;

/**
 *  オブジェクト生成時の初期化。
 */
Game_Follower.prototype.initialize = function(memberIndex) {
    Game_Character.prototype.initialize.call(this);
    this._memberIndex = memberIndex;
    this.setTransparent($dataSystem.optTransparent);
    this.setThrough(true);
};

/**
 * [隊列メンバー]を更新。
 */
Game_Follower.prototype.refresh = function() {
    var characterName = this.isVisible() ? this.actor().characterName() : '';
    var characterIndex = this.isVisible() ? this.actor().characterIndex() : 0;
    this.setImage(characterName, characterIndex);
};

/**
 * [アクター]を返す。
 * @returns {Game_Actor} 
 * @memberof Game_Follower
 */
Game_Follower.prototype.actor = function() {
    return $gameParty.battleMembers()[this._memberIndex];
};

/**
 * [隊列メンバー]が表示されているか。
 * @returns {Boolean} 
 * @memberof Game_Follower
 */
Game_Follower.prototype.isVisible = function() {
    return this.actor() && $gamePlayer.followers().isVisible();
};

/**
 * [隊列メンバー]をアップデートする。
 * @memberof Game_Follower
 */
Game_Follower.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
    this.setOpacity($gamePlayer.opacity());
    this.setBlendMode($gamePlayer.blendMode());
    this.setWalkAnime($gamePlayer.hasWalkAnime());
    this.setStepAnime($gamePlayer.hasStepAnime());
    this.setDirectionFix($gamePlayer.isDirectionFixed());
    this.setTransparent($gamePlayer.isTransparent());
};

/**
 * 指定したキャラクタを追う。
 * @param {Game_Character} character 
 * @memberof Game_Follower
 */
Game_Follower.prototype.chaseCharacter = function(character) {
    var sx = this.deltaXFrom(character.x);
    var sy = this.deltaYFrom(character.y);
    if (sx !== 0 && sy !== 0) {
        this.moveDiagonally(sx > 0 ? 4 : 6, sy > 0 ? 8 : 2);
    } else if (sx !== 0) {
        this.moveStraight(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
        this.moveStraight(sy > 0 ? 8 : 2);
    }
    this.setMoveSpeed($gamePlayer.realMoveSpeed());
};


/**
 * 隊列の並びなどを管理する。{@link Game_Follower} を配列として定義したクラス。
 * {@link Game_Player#followers} メソッドで得られる。
 * @class Game_Followers
 * 
 * @prop {Boolean} _visible
 * @prop {Boolean} _gathering
 * @prop {Array<Game_Follower>} _data
 */
function Game_Followers() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Followers.prototype.initialize = function() {
    this._visible = $dataSystem.optFollowers;
    this._gathering = false;
    this._data = [];
    for (var i = 1; i < $gameParty.maxBattleMembers(); i++) {
        this._data.push(new Game_Follower(i));
    }
};

/**
 * [隊列メンバー]が表示されているか。
 * @returns {Boolean} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.isVisible = function() {
    return this._visible;
};

/**
 * [隊列メンバー]を表示。
 * @memberof Game_Followers
 */
Game_Followers.prototype.show = function() {
    this._visible = true;
};

/**
 * [隊列メンバー]を表示しない。
 * @memberof Game_Followers
 */
Game_Followers.prototype.hide = function() {
    this._visible = false;
};

/**
 * 指定した番号の[隊列メンバー]を返す。
 * @param {Number} index 
 * @returns {Game_Follower} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.follower = function(index) {
    return this._data[index];
};

/**
 * 各[隊列メンバー]オブジェクトを対象に関数を実行する。
 * @param  {Function} callback
 * @param  {*} thisObject
 */
Game_Followers.prototype.forEach = function(callback, thisObject) {
    this._data.forEach(callback, thisObject);
};

/**
 * 各[隊列メンバー]オブジェクトを対象に逆順に関数を実行する。
 * @param  {Function} callback
 * @param  {*} thisObject
 */
Game_Followers.prototype.reverseEach = function(callback, thisObject) {
    this._data.reverse();
    this._data.forEach(callback, thisObject);
    this._data.reverse();
};

/**
 * [隊列メンバー]を更新。
 * @memberof Game_Followers
 */
Game_Followers.prototype.refresh = function() {
    this.forEach(function(follower) {
        return follower.refresh();
    }, this);
};

/**
 * [隊列メンバー]をアップデート。
 * @memberof Game_Followers
 */
Game_Followers.prototype.update = function() {
    if (this.areGathering()) {
        if (!this.areMoving()) {
            this.updateMove();
        }
        if (this.areGathered()) {
            this._gathering = false;
        }
    }
    this.forEach(function(follower) {
        follower.update();
    }, this);
};

/**
 * [隊列メンバー]の移動をアップデート。
 * @memberof Game_Followers
 */
Game_Followers.prototype.updateMove = function() {
    for (var i = this._data.length - 1; i >= 0; i--) {
        var precedingCharacter = (i > 0 ? this._data[i - 1] : $gamePlayer);
        this._data[i].chaseCharacter(precedingCharacter);
    }
};

/**
 * [隊列メンバー]全員を、プレイヤーキャラクタの[ジャンプ]高さに揃える。
 */
Game_Followers.prototype.jumpAll = function() {
    if ($gamePlayer.isJumping()) {
        for (var i = 0; i < this._data.length; i++) {
            var follower = this._data[i];
            var sx = $gamePlayer.deltaXFrom(follower.x);
            var sy = $gamePlayer.deltaYFrom(follower.y);
            follower.jump(sx, sy);
        }
    }
};

/**
 * 指定の位置と向きに[隊列メンバー]を揃える。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 */
Game_Followers.prototype.synchronize = function(x, y, d) {
    this.forEach(function(follower) {
        follower.locate(x, y);
        follower.setDirection(d);
    }, this);
};

/**
 * [隊列メンバーの集合]。
 * @memberof Game_Followers
 */
Game_Followers.prototype.gather = function() {
    this._gathering = true;
};

/**
 * [隊列メンバー]の集合中か。
 * @returns {Boolean} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.areGathering = function() {
    return this._gathering;
};

/**
 * 表示中の[隊列メンバー]の配列を返す。
 * @returns {Array<Game_Follower>} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.visibleFollowers = function() {
    return this._data.filter(function(follower) {
        return follower.isVisible();
    }, this);
};

/**
 * [隊列メンバー]が移動中か。
 * @returns {Boolean} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.areMoving = function() {
    return this.visibleFollowers().some(function(follower) {
        return follower.isMoving();
    }, this);
};

/**
 * [隊列メンバー]が集合しているか。
 * @returns {Boolean} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.areGathered = function() {
    return this.visibleFollowers().every(function(follower) {
        return !follower.isMoving() && follower.pos($gamePlayer.x, $gamePlayer.y);
    }, this);
};

/**
 * 指定位置に[隊列メンバー]の誰かがいるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean} 
 * @memberof Game_Followers
 */
Game_Followers.prototype.isSomeoneCollided = function(x, y) {
    return this.visibleFollowers().some(function(follower) {
        return follower.pos(x, y);
    }, this);
};





/**
 * [乗り物]を定義したクラス。
 * 大体の機能は {@link Game_Player} クラスから使える。
 * @class Game_Vehicle
 * @extends Game_Character
 * 
 * @prop {String} _type
 * @prop {Number} _mapId
 * @prop {Number} _altitude
 * @prop {Boolean} _driving
 * @prop {RPG.AudioFile} _bgm
 */
function Game_Vehicle() {
    this.initialize.apply(this, arguments);
}

Game_Vehicle.prototype = Object.create(Game_Character.prototype);
Game_Vehicle.prototype.constructor = Game_Vehicle;

/**
 *  オブジェクト生成時の初期化。
 * @param  {String} type
 */
Game_Vehicle.prototype.initialize = function(type) {
    Game_Character.prototype.initialize.call(this);
    this._type = type;
    this.resetDirection();
    this.initMoveSpeed();
    this.loadSystemSettings();
};

/**
 * メンバ変数の初期化。
 */
Game_Vehicle.prototype.initMembers = function() {
    Game_Character.prototype.initMembers.call(this);
    this._type = '';
    this._mapId = 0;
    this._altitude = 0;
    this._driving = false;
    this._bgm = null;
};

/**
 * [小型船]か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isBoat = function() {
    return this._type === 'boat';
};

/**
 * [大型船]か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isShip = function() {
    return this._type === 'ship';
};

/**
 * [飛行船]か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isAirship = function() {
    return this._type === 'airship';
};

/**
 * [乗り物]の向きを(左向きに)リセット。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.resetDirection = function() {
    this.setDirection(4);
};

/**
 * 移動速度の初期化。
 */
Game_Vehicle.prototype.initMoveSpeed = function() {
    if (this.isBoat()) {
        this.setMoveSpeed(4);
    } else if (this.isShip()) {
        this.setMoveSpeed(5);
    } else if (this.isAirship()) {
        this.setMoveSpeed(6);
    }
};

/**
 * 現在の[乗り物]情報オブジェクトを返す。
 * @returns {RPG.System.Vehicle} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.vehicle = function() {
    if (this.isBoat()) {
        return $dataSystem.boat;
    } else if (this.isShip()) {
        return $dataSystem.ship;
    } else if (this.isAirship()) {
        return $dataSystem.airship;
    } else {
        return null;
    }
};

/**
 * [システム]設定を読んで設定。
 */
Game_Vehicle.prototype.loadSystemSettings = function() {
    var vehicle = this.vehicle();
    this._mapId = vehicle.startMapId;
    this.setPosition(vehicle.startX, vehicle.startY);
    this.setImage(vehicle.characterName, vehicle.characterIndex);
};

/**
 * [乗り物]の更新。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.refresh = function() {
    if (this._driving) {
        this._mapId = $gameMap.mapId();
        this.syncWithPlayer();
    } else if (this._mapId === $gameMap.mapId()) {
        this.locate(this.x, this.y);
    }
    if (this.isAirship()) {
        this.setPriorityType(this._driving ? 2 : 0);
    } else {
        this.setPriorityType(1);
    }
    this.setWalkAnime(this._driving);
    this.setStepAnime(this._driving);
    this.setTransparent(this._mapId !== $gameMap.mapId());
};

/**
 * 指定マップ・位置に移動。
 * @param {Number} mapId
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Vehicle.prototype.setLocation = function(mapId, x, y) {
    this._mapId = mapId;
    this.setPosition(x, y);
    this.refresh();
};

/**
 * 指定位置にいるか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @return {Boolean}
 */
Game_Vehicle.prototype.pos = function(x, y) {
    if (this._mapId === $gameMap.mapId()) {
        return Game_Character.prototype.pos.call(this, x, y);
    } else {
        return false;
    }
};

/**
 * 指定位置から指定向きへのマップ通行が可能か。
 * キャラ・[イベント]による障害を考慮しない。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @return {Boolean}
 */
Game_Vehicle.prototype.isMapPassable = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
    if (this.isBoat()) {
        return $gameMap.isBoatPassable(x2, y2);
    } else if (this.isShip()) {
        return $gameMap.isShipPassable(x2, y2);
    } else if (this.isAirship()) {
        return true;
    } else {
        return false;
    }
};

/**
 * [乗り物]へ乗る。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.getOn = function() {
    this._driving = true;
    this.setWalkAnime(true);
    this.setStepAnime(true);
    $gameSystem.saveWalkingBgm();
    this.playBgm();
};

/**
 * [乗り物]から降りる。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.getOff = function() {
    this._driving = false;
    this.setWalkAnime(false);
    this.setStepAnime(false);
    this.resetDirection();
    $gameSystem.replayWalkingBgm();
};

/**
 * [乗り物]用のBGMの設定。
 * @param {RPG.AudioFile} bgm 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.setBgm = function(bgm) {
    this._bgm = bgm;
};

/**
 * [乗り物]用のBGMを再生。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.playBgm = function() {
    AudioManager.playBgm(this._bgm || this.vehicle().bgm);
};

/**
 * プレイヤー位置に揃える。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.syncWithPlayer = function() {
    this.copyPosition($gamePlayer);
    this.refreshBushDepth();
};

/**
 * 画面上の y座標を返す。
 * @returns {Number} ピクセル
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.screenY = function() {
    return Game_Character.prototype.screenY.call(this) - this._altitude;
};

/**
 * 画面上の影の x座標を返す。
 * @returns {Number} ピクセル
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.shadowX = function() {
    return this.screenX();
};

/**
 * 画面上の影の y座標を返す。
 * @returns {Number} ピクセル
 * @returns {Number} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.shadowY = function() {
    return this.screenY() + this._altitude;
};

/**
 * 影の不透明度を返す。
 * @returns {Number} 0〜255
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.shadowOpacity = function() {
    return 255 * this._altitude / this.maxAltitude();
};

/**
 * [乗り物]を操作可能か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.canMove = function() {
    if (this.isAirship()) {
        return this.isHighest();
    } else {
        return true;
    }
};

/**
 * [乗り物]をアップデート。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    if (this.isAirship()) {
        this.updateAirship();
    }
};

/**
 * [飛行船]をアップデート。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.updateAirship = function() {
    this.updateAirshipAltitude();
    this.setStepAnime(this.isHighest());
    this.setPriorityType(this.isLowest() ? 0 : 2);
};

/**
 * [飛行船]の高度をアップデート。
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.updateAirshipAltitude = function() {
    if (this._driving && !this.isHighest()) {
        this._altitude++;
    }
    if (!this._driving && !this.isLowest()) {
        this._altitude--;
    }
};

/**
 * 最高高度を返す。
 * @returns {Number} ピクセル
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.maxAltitude = function() {
    return 48;
};

/**
 * 着陸しているか(最低高度か)。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isLowest = function() {
    return this._altitude <= 0;
};

/**
 * 最高高度か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isHighest = function() {
    return this._altitude >= this.maxAltitude();
};

/**
 * 離陸可能か。
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isTakeoffOk = function() {
    return $gamePlayer.areFollowersGathered();
};

/**
 * 指定位置と向きで着陸可能か。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @param {Number} d 向き(テンキー対応)
 * @returns {Boolean} 
 * @memberof Game_Vehicle
 */
Game_Vehicle.prototype.isLandOk = function(x, y, d) {
    if (this.isAirship()) {
        if (!$gameMap.isAirshipLandOk(x, y)) {
            return false;
        }
        if ($gameMap.eventsXy(x, y).length > 0) {
            return false;
        }
    } else {
        var x2 = $gameMap.roundXWithDirection(x, d);
        var y2 = $gameMap.roundYWithDirection(y, d);
        if (!$gameMap.isValid(x2, y2)) {
            return false;
        }
        if (!$gameMap.isPassable(x2, y2, this.reverseDir(d))) {
            return false;
        }
        if (this.isCollidedWithCharacters(x2, y2)) {
            return false;
        }
    }
    return true;
};




/**
 * マップに配置する[イベント]を定義したオブジェクト。[実行内容]を得る {@link Game_Event#event} メソッドなどを含む。
 * @class Game_Event
 * @extends Game_Character
 * 
 * @prop {Number} _mapId
 * @prop {Number} _eventId
 * @prop {Number} _moveType
 * @prop {Number} _trigger
 * @prop {Boolean} _starting
 * @prop {Boolean} _erased
 * @prop {Number} _pageIndex
 * @prop {Number} _originalPattern
 * @prop {Number} _originalDirection
 * @prop {Number} _prelockDirection
 * @prop {Boolean} _locked
 */
function Game_Event() {
    this.initialize.apply(this, arguments);
}

Game_Event.prototype = Object.create(Game_Character.prototype);
Game_Event.prototype.constructor = Game_Event;

/**
 *  オブジェクト生成時の初期化。
 */
Game_Event.prototype.initialize = function(mapId, eventId) {
    Game_Character.prototype.initialize.call(this);
    this._mapId = mapId;
    this._eventId = eventId;
    this.locate(this.event().x, this.event().y);
    this.refresh();
};

/**
 * メンバ変数を初期化。
 */
Game_Event.prototype.initMembers = function() {
    Game_Character.prototype.initMembers.call(this);
    this._moveType = 0;
    this._trigger = 0;
    this._starting = false;
    this._erased = false;
    this._pageIndex = -2;
    this._originalPattern = 1;
    this._originalDirection = 2;
    this._prelockDirection = 0;
    this._locked = false;
};

/**
 * イベントIDを返す。
 * @returns {Number} 
 * @memberof Game_Event
 */
Game_Event.prototype.eventId = function() {
    return this._eventId;
};

/**
 * [イベント]情報オブジェクトを返す。
 * @returns {RPG.Event} 
 * @memberof Game_Event
 */
Game_Event.prototype.event = function() {
    return $dataMap.events[this._eventId];
};

/**
 * 現在の[イベントページ]情報オブジェクトを返す。
 * @returns {RPG.EventPage} 
 * @memberof Game_Event
 */
Game_Event.prototype.page = function() {
    return this.event().pages[this._pageIndex];
};

/**
 * 現在の[イベントページ]の[イベントコマンド]の配列を返す。
 * @returns {Array<RPG.EventCommand>} 
 * @memberof Game_Event
 */
Game_Event.prototype.list = function() {
    return this.page().list;
};

/**
 * 指定位置がキャラによって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Event.prototype.isCollidedWithCharacters = function(x, y) {
    return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
            this.isCollidedWithPlayerCharacters(x, y));
};

/**
 * 指定位置が[イベント]によって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean}
 */
Game_Event.prototype.isCollidedWithEvents = function(x, y) {
    var events = $gameMap.eventsXyNt(x, y);
    return events.length > 0;
};

/**
 * 指定位置がプレイヤーキャラクタによって塞がれているか。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 * @returns {Boolean} 
 * @memberof Game_Event
 */
Game_Event.prototype.isCollidedWithPlayerCharacters = function(x, y) {
    return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
};

/**
 * ロックする。
 * @memberof Game_Event
 */
Game_Event.prototype.lock = function() {
    if (!this._locked) {
        this._prelockDirection = this.direction();
        this.turnTowardPlayer();
        this._locked = true;
    }
};

/**
 * ロックを解除。
 * @memberof Game_Event
 */
Game_Event.prototype.unlock = function() {
    if (this._locked) {
        this._locked = false;
        this.setDirection(this._prelockDirection);
    }
};

/**
 * 停止状態をアップデート。
 */
Game_Event.prototype.updateStop = function() {
    if (this._locked) {
        this.resetStopCount();
    }
    Game_Character.prototype.updateStop.call(this);
    if (!this.isMoveRouteForcing()) {
        this.updateSelfMovement();
    }
};

/**
 * [自律移動]のアップデート。
 * @memberof Game_Event
 */
Game_Event.prototype.updateSelfMovement = function() {
    if (!this._locked && this.isNearTheScreen() &&
            this.checkStop(this.stopCountThreshold())) {
        switch (this._moveType) {
        case 1:
            this.moveTypeRandom();
            break;
        case 2:
            this.moveTypeTowardPlayer();
            break;
        case 3:
            this.moveTypeCustom();
            break;
        }
    }
};

/**
 * 停止カウントの閾値を返す。[頻度]により異なる。
 * @returns {Number}
 */
Game_Event.prototype.stopCountThreshold = function() {
    return 30 * (5 - this.moveFrequency());
};

/**
 * [タイプ:ランダム]移動。
 */
Game_Event.prototype.moveTypeRandom = function() {
    switch (Math.randomInt(6)) {
    case 0: case 1:
        this.moveRandom();
        break;
    case 2: case 3: case 4:
        this.moveForward();
        break;
    case 5:
        this.resetStopCount();
        break;
    }
};

/**
 * [タイプ:プレイヤーに近づく]移動。
 */
Game_Event.prototype.moveTypeTowardPlayer = function() {
    if (this.isNearThePlayer()) {
        switch (Math.randomInt(6)) {
        case 0: case 1: case 2: case 3:
            this.moveTowardPlayer();
            break;
        case 4:
            this.moveRandom();
            break;
        case 5:
            this.moveForward();
            break;
        }
    } else {
        this.moveRandom();
    }
};

/**
 * プレイヤーキャラクタに近い位置にいるか。
 * @returns {Boolean} 
 * @memberof Game_Event
 */
Game_Event.prototype.isNearThePlayer = function() {
    var sx = Math.abs(this.deltaXFrom($gamePlayer.x));
    var sy = Math.abs(this.deltaYFrom($gamePlayer.y));
    return sx + sy < 20;
};

/**
 * [タイプ:カスタム]移動。
 */
Game_Event.prototype.moveTypeCustom = function() {
    this.updateRoutineMove();
};

/**
 * [イベント]が開始しているか。
 * @returns {Boolean} 
 * @memberof Game_Event
 */
Game_Event.prototype.isStarting = function() {
    return this._starting;
};

/**
 * [イベント]開始フラグを削除。
 * @memberof Game_Event
 */
Game_Event.prototype.clearStartingFlag = function() {
    this._starting = false;
};

/**
 * 指定した配列に、この[イベント]の[トリガー]が含まれるか。
 * @param  {Array<Number>} triggers
 * @return {Boolean}
 */
Game_Event.prototype.isTriggerIn = function(triggers) {
    return triggers.contains(this._trigger);
};

/**
 * [イベント]を開始。
 * @memberof Game_Event
 */
Game_Event.prototype.start = function() {
    var list = this.list();
    if (list && list.length > 1) {
        this._starting = true;
        if (this.isTriggerIn([0,1,2])) {
            this.lock();
        }
    }
};

/**
 *  [イベント]を削除。
 * @memberof Game_Event
 */
Game_Event.prototype.erase = function() {
    this._erased = true;
    this.refresh();
};

/**
 * [イベント]を更新。
 * @memberof Game_Event
 */
Game_Event.prototype.refresh = function() {
    var newPageIndex = this._erased ? -1 : this.findProperPageIndex();
    if (this._pageIndex !== newPageIndex) {
        this._pageIndex = newPageIndex;
        this.setupPage();
    }
};

/**
 * [出現条件]に合ったイベントのページ番号を返す。
 * @returns {Number} ページ番号(-1: 見つからない)
 * @memberof Game_Event
 */
Game_Event.prototype.findProperPageIndex = function() {
    var pages = this.event().pages;
    for (var i = pages.length - 1; i >= 0; i--) {
        var page = pages[i];
        if (this.meetsConditions(page)) {
            return i;
        }
    }
    return -1;
};

/**
 * 指定したページの[出現条件]が満たされているか。
 * @param  {RPG.EventPage} page
 * @returns {Boolean}
 */
Game_Event.prototype.meetsConditions = function(page) {
    var c = page.conditions;
    if (c.switch1Valid) {
        if (!$gameSwitches.value(c.switch1Id)) {
            return false;
        }
    }
    if (c.switch2Valid) {
        if (!$gameSwitches.value(c.switch2Id)) {
            return false;
        }
    }
    if (c.variableValid) {
        if ($gameVariables.value(c.variableId) < c.variableValue) {
            return false;
        }
    }
    if (c.selfSwitchValid) {
        var key = [this._mapId, this._eventId, c.selfSwitchCh];
        if ($gameSelfSwitches.value(key) !== true) {
            return false;
        }
    }
    if (c.itemValid) {
        var item = $dataItems[c.itemId];
        if (!$gameParty.hasItem(item)) {
            return false;
        }
    }
    if (c.actorValid) {
        var actor = $gameActors.actor(c.actorId);
        if (!$gameParty.members().contains(actor)) {
            return false;
        }
    }
    return true;
};

/**
 * イベントページを準備。
 * @memberof Game_Event
 */
Game_Event.prototype.setupPage = function() {
    if (this._pageIndex >= 0) {
        this.setupPageSettings();
    } else {
        this.clearPageSettings();
    }
    this.refreshBushDepth();
    this.clearStartingFlag();
    this.checkEventTriggerAuto();
};

/**
 * イベントページの設定を削除。
 * @memberof Game_Event
 */
Game_Event.prototype.clearPageSettings = function() {
    this.setImage('', 0);
    this._moveType = 0;
    this._trigger = null;
    this._interpreter = null;
    this.setThrough(true);
};

/**
 * イベントページの設定を準備。
 * @memberof Game_Event
 */
Game_Event.prototype.setupPageSettings = function() {
    var page = this.page();
    var image = page.image;
    if (image.tileId > 0) {
        this.setTileImage(image.tileId);
    } else {
        this.setImage(image.characterName, image.characterIndex);
    }
    if (this._originalDirection !== image.direction) {
        this._originalDirection = image.direction;
        this._prelockDirection = 0;
        this.setDirectionFix(false);
        this.setDirection(image.direction);
    }
    if (this._originalPattern !== image.pattern) {
        this._originalPattern = image.pattern;
        this.setPattern(image.pattern);
    }
    this.setMoveSpeed(page.moveSpeed);
    this.setMoveFrequency(page.moveFrequency);
    this.setPriorityType(page.priorityType);
    this.setWalkAnime(page.walkAnime);
    this.setStepAnime(page.stepAnime);
    this.setDirectionFix(page.directionFix);
    this.setThrough(page.through);
    this.setMoveRoute(page.moveRoute);
    this._moveType = page.moveType;
    this._trigger = page.trigger;
    if (this._trigger === 4) {
        this._interpreter = new Game_Interpreter();
    } else {
        this._interpreter = null;
    }
};

/**
 * [画像]が初期パターンか。
 * @returns {Boolean}
 */
Game_Event.prototype.isOriginalPattern = function() {
    return this.pattern() === this._originalPattern;
};

/**
 * [画像]を初期パターンに戻す。
 * @memberof Game_Event
 */
Game_Event.prototype.resetPattern = function() {
    this.setPattern(this._originalPattern);
};

/**
 * タッチ(クリック)で発生する[イベント]を実行。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Event.prototype.checkEventTriggerTouch = function(x, y) {
    if (!$gameMap.isEventRunning()) {
        if (this._trigger === 2 && $gamePlayer.pos(x, y)) {
            if (!this.isJumping() && this.isNormalPriority()) {
                this.start();
            }
        }
    }
};

/**
 * [トリガー:自動実行]の[イベント]を実行。
 */
Game_Event.prototype.checkEventTriggerAuto = function() {
    if (this._trigger === 3) {
        this.start();
    }
};

/**
 * [イベント]をアップデート。
 */
Game_Event.prototype.update = function() {
    Game_Character.prototype.update.call(this);
    this.checkEventTriggerAuto();
    this.updateParallel();
};

/**
 * [トリガー:並列処理]をアップデート。
 */
Game_Event.prototype.updateParallel = function() {
    if (this._interpreter) {
        if (!this._interpreter.isRunning()) {
            this._interpreter.setup(this.list(), this._eventId);
        }
        this._interpreter.update();
    }
};

/**
 * 現在のマップ内での[イベントの位置設定]。
 * {@link Game_CharacterBase#setPosition}と異なり、姿勢などを初期化。
 * @param {Number} x タイル数
 * @param {Number} y タイル数
 */
Game_Event.prototype.locate = function(x, y) {
    Game_Character.prototype.locate.call(this, x, y);
    this._prelockDirection = 0;
};

/**
 * [移動ルート]を強制。
 * @param {RPG.MoveRoute} moveRoute 
 * @memberof Game_Event
 */
Game_Event.prototype.forceMoveRoute = function(moveRoute) {
    Game_Character.prototype.forceMoveRoute.call(this, moveRoute);
    this._prelockDirection = 0;
};




/**
 * イベントコマンドを実行するクラス。
 * プラグインコマンドを処理する{@link Game_Interpreter#pluginCommand}などを含む。
 * @class Game_Interpreter
 * @param {Number} depth
 * 
 * @prop {Number} _depth
 * @prop {Object} _branch
 * @prop {Array<*>} _params
 * @prop {Number} _indent
 * @prop {Number} _frameCount
 * @prop {Number} _freezeChecker
 * @prop {Number} _mapId
 * @prop {Number} _eventId
 * @prop {Array<RPG.EventCommand>} _list
 * @prop {Number} _index
 * @prop {Number} _waitCount
 * @prop {String} _waitMode
 * @prop {String} _comments
 * @prop {Game_Event} _character
 * @prop {Game_Interpreter} _childInterpreter
 */
function Game_Interpreter() {
    this.initialize.apply(this, arguments);
}

/**
 *  オブジェクト生成時の初期化。
 */
Game_Interpreter.prototype.initialize = function(depth) {
    this._depth = depth || 0;
    this.checkOverflow();
    this.clear();
    this._branch = {};
    this._params = [];
    this._indent = 0;
    this._frameCount = 0;
    this._freezeChecker = 0;
};

/**
 * 
 */
Game_Interpreter.prototype.checkOverflow = function() {
    if (this._depth >= 100) {
        throw new Error('Common event calls exceeded the limit');
    }
};

    /**
     * Clears the interpreter.
     * 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.clear = function() {
    this._mapId = 0;
    this._eventId = 0;
    this._list = null;
    this._index = 0;
    this._waitCount = 0;
    this._waitMode = '';
    this._comments = '';
    this._character = null;
    this._childInterpreter = null;
};

    /**
     * Sets up the interpreter with the list of event commands, and the given
     * event Id.
     * 
     * @param {Array<RPG.EventCommand>} list 
     * @param {Number} eventId 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.setup = function(list, eventId) {
    this.clear();
    this._mapId = $gameMap.mapId();
    this._eventId = eventId || 0;
    this._list = list;
    Game_Interpreter.requestImages(list);
};

    /**
     * Returns the currrent eventId.
     * 
     * @returns {Number} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.eventId = function() {
    return this._eventId;
};

Game_Interpreter.prototype.isOnCurrentMap = function() {
    return this._mapId === $gameMap.mapId();
};

    /**
     * Returns true if the event is on the current map.
     * 
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.setupReservedCommonEvent = function() {
    if ($gameTemp.isCommonEventReserved()) {
        this.setup($gameTemp.reservedCommonEvent().list);
        $gameTemp.clearCommonEvent();
        return true;
    } else {
        return false;
    }
};

    /**
     * Returns true if the interpreter is running.
     * 
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.isRunning = function() {
    return !!this._list;
};

/**
 * 
 */
Game_Interpreter.prototype.update = function() {
    while (this.isRunning()) {
        if (this.updateChild() || this.updateWait()) {
            break;
        }
        if (SceneManager.isSceneChanging()) {
            break;
        }
        if (!this.executeCommand()) {
            break;
        }
        if (this.checkFreeze()) {
            break;
        }
    }
};

    /**
     * Updates the child game interpreter.
     * 
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.updateChild = function() {
    if (this._childInterpreter) {
        this._childInterpreter.update();
        if (this._childInterpreter.isRunning()) {
            return true;
        } else {
            this._childInterpreter = null;
        }
    }
    return false;
};

    /**
     * Updates the wait of the game interpreter.
     * 
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.updateWait = function() {
    return this.updateWaitCount() || this.updateWaitMode();
};

/**
 * @returns {Boolean} 
 */
Game_Interpreter.prototype.updateWaitCount = function() {
    if (this._waitCount > 0) {
        this._waitCount--;
        return true;
    }
    return false;
};

/**
 * @returns {Boolean} 
 */
Game_Interpreter.prototype.updateWaitMode = function() {
    var waiting = false;
    switch (this._waitMode) {
    case 'message':
        waiting = $gameMessage.isBusy();
        break;
    case 'transfer':
        waiting = $gamePlayer.isTransferring();
        break;
    case 'scroll':
        waiting = $gameMap.isScrolling();
        break;
    case 'route':
        waiting = this._character.isMoveRouteForcing();
        break;
    case 'animation':
        waiting = this._character.isAnimationPlaying();
        break;
    case 'balloon':
        waiting = this._character.isBalloonPlaying();
        break;
    case 'gather':
        waiting = $gamePlayer.areFollowersGathering();
        break;
    case 'action':
        waiting = BattleManager.isActionForced();
        break;
    case 'video':
        waiting = Graphics.isVideoPlaying();
        break;
    case 'image':
        waiting = !ImageManager.isReady();
        break;
    }
    if (!waiting) {
        this._waitMode = '';
    }
    return waiting;
};

    /**
     * Sets the wait mode of the interpreter.
     * 
     * @param {String} waitMode 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.setWaitMode = function(waitMode) {
    this._waitMode = waitMode;
};

    /**
     * sets a specified wait duration for the interpreter.
     * 
     * @param {Number} duration 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.wait = function(duration) {
    this._waitCount = duration;
};

/**
 * @returns {Number}
 */
Game_Interpreter.prototype.fadeSpeed = function() {
    return 24;
};

    /**
     * Executes the event command;
     * returns true or false based on execution.
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.executeCommand = function() {
    var command = this.currentCommand();
    if (command) {
        this._params = command.parameters;
        this._indent = command.indent;
        var methodName = 'command' + command.code;
        if (typeof this[methodName] === 'function') {
            if (!this[methodName]()) {
                return false;
            }
        }
        this._index++;
    } else {
        this.terminate();
    }
    return true;
};

    /**
     * Checks if the interpreter has frozen.
     * 
     * @returns {Boolean} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.checkFreeze = function() {
    if (this._frameCount !== Graphics.frameCount) {
        this._frameCount = Graphics.frameCount;
        this._freezeChecker = 0;
    }
    if (this._freezeChecker++ >= 100000) {
        return true;
    } else {
        return false;
    }
};

    /**
     * Terminates the game interpreter.
     * 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.terminate = function() {
    this._list = null;
    this._comments = '';
};

    /**
     * Skips a conditional branch on the interpreter.
     * 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.skipBranch = function() {
    while (this._list[this._index + 1].indent > this._indent) {
        this._index++;
    }
};

    /**
     * Returns the current event command.
     * 
     * @returns {RPG.EventCommand} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.currentCommand = function() {
    return this._list[this._index];
};

    /**
     * Returns the next event code.
     * 
     * @returns {Number} 
     * @memberof Game_Interpreter
     */
Game_Interpreter.prototype.nextEventCode = function() {
    var command = this._list[this._index + 1];
    if (command) {
        return command.code;
    } else {
        return 0;
    }
};

/**
 * @param {Number} param
 * @param  {Function} callback
 */
Game_Interpreter.prototype.iterateActorId = function(param, callback) {
    if (param === 0) {
        $gameParty.members().forEach(callback);
    } else {
        var actor = $gameActors.actor(param);
        if (actor) {
            callback(actor);
        }
    }
};

/**
 * @param {Number} param1
 * @param {Number} param2
 * @param  {Function} callback
 */
Game_Interpreter.prototype.iterateActorEx = function(param1, param2, callback) {
    if (param1 === 0) {
        this.iterateActorId(param2, callback);
    } else {
        this.iterateActorId($gameVariables.value(param2), callback);
    }
};

/**
 * @param {Number} param
 * @param  {Function} callback
 */
Game_Interpreter.prototype.iterateActorIndex = function(param, callback) {
    if (param < 0) {
        $gameParty.members().forEach(callback);
    } else {
        var actor = $gameParty.members()[param];
        if (actor) {
            callback(actor);
        }
    }
};

/**
 * @param {Number} param
 * @param  {Function} callback
 */
Game_Interpreter.prototype.iterateEnemyIndex = function(param, callback) {
    if (param < 0) {
        $gameTroop.members().forEach(callback);
    } else {
        var enemy = $gameTroop.members()[param];
        if (enemy) {
            callback(enemy);
        }
    }
};

/**
 * @param {Number} param1
 * @param {Number} param2
 * @param  {Function} callback
 */
Game_Interpreter.prototype.iterateBattler = function(param1, param2, callback) {
    if ($gameParty.inBattle()) {
        if (param1 === 0) {
            this.iterateEnemyIndex(param2, callback);
        } else {
            this.iterateActorId(param2, callback);
        }
    }
};

/**
 * @param {Number} param
 * @returns {Game_Character}
 */
Game_Interpreter.prototype.character = function(param) {
    if ($gameParty.inBattle()) {
        return null;
    } else if (param < 0) {
        return $gamePlayer;
    } else if (this.isOnCurrentMap()) {
        return $gameMap.event(param > 0 ? param : this._eventId);
    } else {
        return null;
    }
};

/**
 * @param {Number} operation
 * @param {Number} operandType
 * @param {Number} operand
 * @returns {Number}
 */
Game_Interpreter.prototype.operateValue = function(operation, operandType, operand) {
    var value = operandType === 0 ? operand : $gameVariables.value(operand);
    return operation === 0 ? value : -value;
};

/**
 * @param {Number} target
 * @param {Number} value
 * @param {Number} allowDeath
 */
Game_Interpreter.prototype.changeHp = function(target, value, allowDeath) {
    if (target.isAlive()) {
        if (!allowDeath && target.hp <= -value) {
            value = 1 - target.hp;
        }
        target.gainHp(value);
        if (target.isDead()) {
            target.performCollapse();
        }
    }
};

    /**
     * Show Text
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
        $gameMessage.setFaceImage(this._params[0], this._params[1]);
        $gameMessage.setBackground(this._params[2]);
        $gameMessage.setPositionType(this._params[3]);
        while (this.nextEventCode() === 401) {  // Text data
            this._index++;
            $gameMessage.add(this.currentCommand().parameters[0]);
        }
        switch (this.nextEventCode()) {
        case 102:  // Show Choices
            this._index++;
            this.setupChoices(this.currentCommand().parameters);
            break;
        case 103:  // Input Number
            this._index++;
            this.setupNumInput(this.currentCommand().parameters);
            break;
        case 104:  // Select Item
            this._index++;
            this.setupItemChoice(this.currentCommand().parameters);
            break;
        }
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

    /**
     * Show Choices
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command102 = function() {
    if (!$gameMessage.isBusy()) {
        this.setupChoices(this._params);
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

/**
 * @param  {Array<*>} params
 */
Game_Interpreter.prototype.setupChoices = function(params) {
    var choices = params[0].clone();
    var cancelType = params[1];
    var defaultType = params.length > 2 ? params[2] : 0;
    var positionType = params.length > 3 ? params[3] : 2;
    var background = params.length > 4 ? params[4] : 0;
    if (cancelType >= choices.length) {
        cancelType = -2;
    }
    $gameMessage.setChoices(choices, defaultType, cancelType);
    $gameMessage.setChoiceBackground(background);
    $gameMessage.setChoicePositionType(positionType);
    $gameMessage.setChoiceCallback(function(n) {
        this._branch[this._indent] = n;
    }.bind(this));
};

    /**
     * When [**]
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command402 = function() {
    if (this._branch[this._indent] !== this._params[0]) {
        this.skipBranch();
    }
    return true;
};

    /**
     * When Cancel
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command403 = function() {
    if (this._branch[this._indent] >= 0) {
        this.skipBranch();
    }
    return true;
};

    /**
     * Input Number
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command103 = function() {
    if (!$gameMessage.isBusy()) {
        this.setupNumInput(this._params);
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

/**
 * 
 * @param  {Array<Number>} params
 */
Game_Interpreter.prototype.setupNumInput = function(params) {
    $gameMessage.setNumberInput(params[0], params[1]);
};

    /**
     * Select Item
     * @returns {Boolean}
     */
Game_Interpreter.prototype.command104 = function() {
    if (!$gameMessage.isBusy()) {
        this.setupItemChoice(this._params);
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

/**
 * @param  {Array<Number>} params
 */
Game_Interpreter.prototype.setupItemChoice = function(params) {
    $gameMessage.setItemChoice(params[0], params[1] || 2);
};

/**
 *  Show Scrolling Text
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command105 = function() {
    if (!$gameMessage.isBusy()) {
        $gameMessage.setScroll(this._params[0], this._params[1]);
        while (this.nextEventCode() === 405) {
            this._index++;
            $gameMessage.add(this.currentCommand().parameters[0]);
        }
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

/**
 *  Comment
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command108 = function() {
    this._comments = [this._params[0]];
    while (this.nextEventCode() === 408) {
        this._index++;
        this._comments.push(this.currentCommand().parameters[0]);
    }
    return true;
};

/**
 *  Conditional Branch
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command111 = function() {
    var result = false;
    switch (this._params[0]) {
        case 0:  // Switch
            result = ($gameSwitches.value(this._params[1]) === (this._params[2] === 0));
            break;
        case 1:  // Variable
            var value1 = $gameVariables.value(this._params[1]);
            var value2;
            if (this._params[2] === 0) {
                value2 = this._params[3];
            } else {
                value2 = $gameVariables.value(this._params[3]);
            }
            switch (this._params[4]) {
                case 0:  // Equal to
                    result = (value1 === value2);
                    break;
                case 1:  // Greater than or Equal to
                    result = (value1 >= value2);
                    break;
                case 2:  // Less than or Equal to
                    result = (value1 <= value2);
                    break;
                case 3:  // Greater than
                    result = (value1 > value2);
                    break;
                case 4:  // Less than
                    result = (value1 < value2);
                    break;
                case 5:  // Not Equal to
                    result = (value1 !== value2);
                    break;
            }
            break;
        case 2:  // Self Switch
            if (this._eventId > 0) {
                var key = [this._mapId, this._eventId, this._params[1]];
                result = ($gameSelfSwitches.value(key) === (this._params[2] === 0));
            }
            break;
        case 3:  // Timer
            if ($gameTimer.isWorking()) {
                if (this._params[2] === 0) {
                    result = ($gameTimer.seconds() >= this._params[1]);
                } else {
                    result = ($gameTimer.seconds() <= this._params[1]);
                }
            }
            break;
        case 4:  // Actor
            var actor = $gameActors.actor(this._params[1]);
            if (actor) {
                var n = this._params[3];
                switch (this._params[2]) {
                    case 0:  // In the Party
                        result = $gameParty.members().contains(actor);
                        break;
                    case 1:  // Name
                        result = (actor.name() === n);
                        break;
                    case 2:  // Class
                        result = actor.isClass($dataClasses[n]);
                        break;
                    case 3:  // Skill
                        result = actor.hasSkill(n);
                        break;
                    case 4:  // Weapon
                        result = actor.hasWeapon($dataWeapons[n]);
                        break;
                    case 5:  // Armor
                        result = actor.hasArmor($dataArmors[n]);
                        break;
                    case 6:  // State
                        result = actor.isStateAffected(n);
                        break;
                }
            }
            break;
        case 5:  // Enemy
            var enemy = $gameTroop.members()[this._params[1]];
            if (enemy) {
                switch (this._params[2]) {
                    case 0:  // Appeared
                        result = enemy.isAlive();
                        break;
                    case 1:  // State
                        result = enemy.isStateAffected(this._params[3]);
                        break;
                }
            }
            break;
        case 6:  // Character
            var character = this.character(this._params[1]);
            if (character) {
                result = (character.direction() === this._params[2]);
            }
            break;
        case 7:  // Gold
            switch (this._params[2]) {
                case 0:  // Greater than or equal to
                    result = ($gameParty.gold() >= this._params[1]);
                    break;
                case 1:  // Less than or equal to
                    result = ($gameParty.gold() <= this._params[1]);
                    break;
                case 2:  // Less than
                    result = ($gameParty.gold() < this._params[1]);
                    break;
            }
            break;
        case 8:  // Item
            result = $gameParty.hasItem($dataItems[this._params[1]]);
            break;
        case 9:  // Weapon
            result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
            break;
        case 10:  // Armor
            result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
            break;
        case 11:  // Button
            result = Input.isPressed(this._params[1]);
            break;
        case 12:  // Script
            result = !!eval(this._params[1]);
            break;
        case 13:  // Vehicle
            result = ($gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]));
            break;
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) {
        this.skipBranch();
    }
    return true;
};

/**
 *  Else
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command411 = function() {
    if (this._branch[this._indent] !== false) {
        this.skipBranch();
    }
    return true;
};

/**
 *  Loop
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command112 = function() {
    return true;
};

/**
 *  Repeat Above
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command413 = function() {
    do {
        this._index--;
    } while (this.currentCommand().indent !== this._indent);
    return true;
};

/**
 *  Break Loop
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command113 = function () {
    var depth = 0;
    while (this._index < this._list.length - 1) {
        this._index++;
        var command = this.currentCommand();

        if (command.code === 112)
            depth++;

        if (command.code === 413 && command.indent < this._indent) {
            if (depth > 0)
                depth--;
            else
                break;
        }
    }
    return true;
};

/**
 *  Exit Event Processing
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command115 = function() {
    this._index = this._list.length;
    return true;
};

/**
 *  Common Event
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command117 = function() {
    var commonEvent = $dataCommonEvents[this._params[0]];
    if (commonEvent) {
        var eventId = this.isOnCurrentMap() ? this._eventId : 0;
        this.setupChild(commonEvent.list, eventId);
    }
    return true;
};

/**
 * @param  {Array<RPG.EventCommand>} list
 * @param {Number} eventId
 */
Game_Interpreter.prototype.setupChild = function(list, eventId) {
    this._childInterpreter = new Game_Interpreter(this._depth + 1);
    this._childInterpreter.setup(list, eventId);
};

/**
 *  Label
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command118 = function() {
    return true;
};

/**
 *  Jump to Label
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command119 = function() {
    var labelName = this._params[0];
    for (var i = 0; i < this._list.length; i++) {
        var command = this._list[i];
        if (command.code === 118 && command.parameters[0] === labelName) {
            this.jumpTo(i);
            return;
        }
    }
    return true;
};

/**
 * @param {Number} index
 */
Game_Interpreter.prototype.jumpTo = function(index) {
    var lastIndex = this._index;
    var startIndex = Math.min(index, lastIndex);
    var endIndex = Math.max(index, lastIndex);
    var indent = this._indent;
    for (var i = startIndex; i <= endIndex; i++) {
        var newIndent = this._list[i].indent;
        if (newIndent !== indent) {
            this._branch[indent] = null;
            indent = newIndent;
        }
    }
    this._index = index;
};

/**
 *  Control Switches
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command121 = function() {
    for (var i = this._params[0]; i <= this._params[1]; i++) {
        $gameSwitches.setValue(i, this._params[2] === 0);
    }
    return true;
};

/**
 *  Control Variables
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command122 = function() {
    var value = 0;
    switch (this._params[3]) { // Operand
        case 0: // Constant
            value = this._params[4];
            break;
        case 1: // Variable
            value = $gameVariables.value(this._params[4]);
            break;
        case 2: // Random
            value = this._params[5] - this._params[4] + 1;
            for (var i = this._params[0]; i <= this._params[1]; i++) {
                this.operateVariable(i, this._params[2], this._params[4] + Math.randomInt(value));
            }
            return true;
            break;
        case 3: // Game Data
            value = this.gameDataOperand(this._params[4], this._params[5], this._params[6]);
            break;
        case 4: // Script
            value = eval(this._params[4]);
            break;
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
        this.operateVariable(i, this._params[2], value);
    }
    return true;
};

/**
 * @param {Number} type
 * @param {Number} param1
 * @param {Number} param2
 * @returns {Number}
 */
Game_Interpreter.prototype.gameDataOperand = function(type, param1, param2) {
    switch (type) {
    case 0:  // Item
        return $gameParty.numItems($dataItems[param1]);
    case 1:  // Weapon
        return $gameParty.numItems($dataWeapons[param1]);
    case 2:  // Armor
        return $gameParty.numItems($dataArmors[param1]);
    case 3:  // Actor
        var actor = $gameActors.actor(param1);
        if (actor) {
            switch (param2) {
            case 0:  // Level
                return actor.level;
            case 1:  // EXP
                return actor.currentExp();
            case 2:  // HP
                return actor.hp;
            case 3:  // MP
                return actor.mp;
            default:    // Parameter
                if (param2 >= 4 && param2 <= 11) {
                    return actor.param(param2 - 4);
                }
            }
        }
        break;
    case 4:  // Enemy
        var enemy = $gameTroop.members()[param1];
        if (enemy) {
            switch (param2) {
            case 0:  // HP
                return enemy.hp;
            case 1:  // MP
                return enemy.mp;
            default:    // Parameter
                if (param2 >= 2 && param2 <= 9) {
                    return enemy.param(param2 - 2);
                }
            }
        }
        break;
    case 5:  // Character
        var character = this.character(param1);
        if (character) {
            switch (param2) {
            case 0:  // Map X
                return character.x;
            case 1:  // Map Y
                return character.y;
            case 2:  // Direction
                return character.direction();
            case 3:  // Screen X
                return character.screenX();
            case 4:  // Screen Y
                return character.screenY();
            }
        }
        break;
    case 6:  // Party
        actor = $gameParty.members()[param1];
        return actor ? actor.actorId() : 0;
    case 7:  // Other
        switch (param1) {
        case 0:  // Map ID
            return $gameMap.mapId();
        case 1:  // Party Members
            return $gameParty.size();
        case 2:  // Gold
            return $gameParty.gold();
        case 3:  // Steps
            return $gameParty.steps();
        case 4:  // Play Time
            return $gameSystem.playtime();
        case 5:  // Timer
            return $gameTimer.seconds();
        case 6:  // Save Count
            return $gameSystem.saveCount();
        case 7:  // Battle Count
            return $gameSystem.battleCount();
        case 8:  // Win Count
            return $gameSystem.winCount();
        case 9:  // Escape Count
            return $gameSystem.escapeCount();
        }
        break;
    }
    return 0;
};

/**
 * @param {Number} variableId
 * @param {Number} operationType
 * @param {Number} value
 */
Game_Interpreter.prototype.operateVariable = function(variableId, operationType, value) {
    try {
        var oldValue = $gameVariables.value(variableId);
        switch (operationType) {
        case 0:  // Set
            $gameVariables.setValue(variableId, oldValue = value);
            break;
        case 1:  // Add
            $gameVariables.setValue(variableId, oldValue + value);
            break;
        case 2:  // Sub
            $gameVariables.setValue(variableId, oldValue - value);
            break;
        case 3:  // Mul
            $gameVariables.setValue(variableId, oldValue * value);
            break;
        case 4:  // Div
            $gameVariables.setValue(variableId, oldValue / value);
            break;
        case 5:  // Mod
            $gameVariables.setValue(variableId, oldValue % value);
            break;
        }
    } catch (e) {
        $gameVariables.setValue(variableId, 0);
    }
};

/**
 *  Control Self Switch
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command123 = function() {
    if (this._eventId > 0) {
        var key = [this._mapId, this._eventId, this._params[0]];
        $gameSelfSwitches.setValue(key, this._params[1] === 0);
    }
    return true;
};

/**
 *  Control Timer
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command124 = function() {
    if (this._params[0] === 0) {  // Start
        $gameTimer.start(this._params[1] * 60);
    } else {  // Stop
        $gameTimer.stop();
    }
    return true;
};

/**
 *  Change Gold
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command125 = function() {
    var value = this.operateValue(this._params[0], this._params[1], this._params[2]);
    $gameParty.gainGold(value);
    return true;
};

/**
 *  Change Items
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command126 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    $gameParty.gainItem($dataItems[this._params[0]], value);
    return true;
};

/**
 *  Change Weapons
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command127 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    $gameParty.gainItem($dataWeapons[this._params[0]], value, this._params[4]);
    return true;
};

/**
 *  Change Armors
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command128 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    $gameParty.gainItem($dataArmors[this._params[0]], value, this._params[4]);
    return true;
};

/**
 *  Change Party Member
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command129 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        if (this._params[1] === 0) {  // Add
            if (this._params[2]) {   // Initialize
                $gameActors.actor(this._params[0]).setup(this._params[0]);
            }
            $gameParty.addActor(this._params[0]);
        } else {  // Remove
            $gameParty.removeActor(this._params[0]);
        }
    }
    return true;
};

/**
 *  Change Battle BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command132 = function() {
    $gameSystem.setBattleBgm(this._params[0]);
    return true;
};

/**
 *  Change Victory ME
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command133 = function() {
    $gameSystem.setVictoryMe(this._params[0]);
    return true;
};

/**
 *  Change Save Access
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command134 = function() {
    if (this._params[0] === 0) {
        $gameSystem.disableSave();
    } else {
        $gameSystem.enableSave();
    }
    return true;
};

/**
 *  Change Menu Access
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command135 = function() {
    if (this._params[0] === 0) {
        $gameSystem.disableMenu();
    } else {
        $gameSystem.enableMenu();
    }
    return true;
};

/**
 *  Change Encounter Disable
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command136 = function() {
    if (this._params[0] === 0) {
        $gameSystem.disableEncounter();
    } else {
        $gameSystem.enableEncounter();
    }
    $gamePlayer.makeEncounterCount();
    return true;
};

/**
 *  Change Formation Access
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command137 = function() {
    if (this._params[0] === 0) {
        $gameSystem.disableFormation();
    } else {
        $gameSystem.enableFormation();
    }
    return true;
};

/**
 *  Change Window Color
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command138 = function() {
    $gameSystem.setWindowTone(this._params[0]);
    return true;
};

/**
 *  Change Defeat ME
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command139 = function() {
    $gameSystem.setDefeatMe(this._params[0]);
    return true;
};

/**
 *  Change Vehicle BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command140 = function() {
    var vehicle = $gameMap.vehicle(this._params[0]);
    if (vehicle) {
        vehicle.setBgm(this._params[1]);
    }
    return true;
};

/**
 *  Transfer Player
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command201 = function() {
    if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
        var mapId, x, y;
        if (this._params[0] === 0) {  // Direct designation
            mapId = this._params[1];
            x = this._params[2];
            y = this._params[3];
        } else {  // Designation with variables
            mapId = $gameVariables.value(this._params[1]);
            x = $gameVariables.value(this._params[2]);
            y = $gameVariables.value(this._params[3]);
        }
        $gamePlayer.reserveTransfer(mapId, x, y, this._params[4], this._params[5]);
        this.setWaitMode('transfer');
        this._index++;
    }
    return false;
};

/**
 *  Set Vehicle Location
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command202 = function() {
    var mapId, x, y;
    if (this._params[1] === 0) {  // Direct designation
        mapId = this._params[2];
        x = this._params[3];
        y = this._params[4];
    } else {  // Designation with variables
        mapId = $gameVariables.value(this._params[2]);
        x = $gameVariables.value(this._params[3]);
        y = $gameVariables.value(this._params[4]);
    }
    var vehicle = $gameMap.vehicle(this._params[0]);
    if (vehicle) {
        vehicle.setLocation(mapId, x, y);
    }
    return true;
};

/**
 *  Set Event Location
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command203 = function() {
    var character = this.character(this._params[0]);
    if (character) {
        if (this._params[1] === 0) {  // Direct designation
            character.locate(this._params[2], this._params[3]);
        } else if (this._params[1] === 1) {  // Designation with variables
            var x = $gameVariables.value(this._params[2]);
            var y = $gameVariables.value(this._params[3]);
            character.locate(x, y);
        } else {  // Exchange with another event
            var character2 = this.character(this._params[2]);
            if (character2) {
                character.swap(character2);
            }
        }
        if (this._params[4] > 0) {
            character.setDirection(this._params[4]);
        }
    }
    return true;
};

/**
 *  Set Scroll Map
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command204 = function() {
    if (!$gameParty.inBattle()) {
        if ($gameMap.isScrolling()) {
            this.setWaitMode('scroll');
            return false;
        }
        $gameMap.startScroll(this._params[0], this._params[1], this._params[2]);
    }
    return true;
};

/**
 *  Set Movement Route
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command205 = function() {
    $gameMap.refreshIfNeeded();
    this._character = this.character(this._params[0]);
    if (this._character) {
        this._character.forceMoveRoute(this._params[1]);
        if (this._params[1].wait) {
            this.setWaitMode('route');
        }
    }
    return true;
};

/**
 *  Getting On and Off Vehicles
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command206 = function() {
    $gamePlayer.getOnOffVehicle();
    return true;
};

/**
 *  Change Transparency
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command211 = function() {
    $gamePlayer.setTransparent(this._params[0] === 0);
    return true;
};

/**
 *  Show Animation
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command212 = function() {
    this._character = this.character(this._params[0]);
    if (this._character) {
        this._character.requestAnimation(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('animation');
        }
    }
    return true;
};

/**
 *  Show Balloon Icon
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command213 = function() {
    this._character = this.character(this._params[0]);
    if (this._character) {
        this._character.requestBalloon(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('balloon');
        }
    }
    return true;
};

/**
 *  Erase Event
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command214 = function() {
    if (this.isOnCurrentMap() && this._eventId > 0) {
        $gameMap.eraseEvent(this._eventId);
    }
    return true;
};

/**
 *  Change Player Followers
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command216 = function() {
    if (this._params[0] === 0) {
        $gamePlayer.showFollowers();
    } else {
        $gamePlayer.hideFollowers();
    }
    $gamePlayer.refresh();
    return true;
};

/**
 *  Gather Followers
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command217 = function() {
    if (!$gameParty.inBattle()) {
        $gamePlayer.gatherFollowers();
        this.setWaitMode('gather');
    }
    return true;
};

/**
 *  Fadeout Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command221 = function() {
    if (!$gameMessage.isBusy()) {
        $gameScreen.startFadeOut(this.fadeSpeed());
        this.wait(this.fadeSpeed());
        this._index++;
    }
    return false;
};

/**
 *  Fadein Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command222 = function() {
    if (!$gameMessage.isBusy()) {
        $gameScreen.startFadeIn(this.fadeSpeed());
        this.wait(this.fadeSpeed());
        this._index++;
    }
    return false;
};

/**
 *  Tint Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command223 = function() {
    $gameScreen.startTint(this._params[0], this._params[1]);
    if (this._params[2]) {
        this.wait(this._params[1]);
    }
    return true;
};

/**
 *  Flash Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command224 = function() {
    $gameScreen.startFlash(this._params[0], this._params[1]);
    if (this._params[2]) {
        this.wait(this._params[1]);
    }
    return true;
};

/**
 *  Shake Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command225 = function() {
    $gameScreen.startShake(this._params[0], this._params[1], this._params[2]);
    if (this._params[3]) {
        this.wait(this._params[2]);
    }
    return true;
};

/**
 *  Wait
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command230 = function() {
    this.wait(this._params[0]);
    return true;
};

/**
 *  Show Picture
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command231 = function() {
    var x, y;
    if (this._params[3] === 0) {  // Direct designation
        x = this._params[4];
        y = this._params[5];
    } else {  // Designation with variables
        x = $gameVariables.value(this._params[4]);
        y = $gameVariables.value(this._params[5]);
    }
    $gameScreen.showPicture(this._params[0], this._params[1], this._params[2],
        x, y, this._params[6], this._params[7], this._params[8], this._params[9]);
    return true;
};

/**
 *  Move Picture
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command232 = function() {
    var x, y;
    if (this._params[3] === 0) {  // Direct designation
        x = this._params[4];
        y = this._params[5];
    } else {  // Designation with variables
        x = $gameVariables.value(this._params[4]);
        y = $gameVariables.value(this._params[5]);
    }
    $gameScreen.movePicture(this._params[0], this._params[2], x, y, this._params[6],
        this._params[7], this._params[8], this._params[9], this._params[10]);
    if (this._params[11]) {
        this.wait(this._params[10]);
    }
    return true;
};

/**
 *  Rotate Picture
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command233 = function() {
    $gameScreen.rotatePicture(this._params[0], this._params[1]);
    return true;
};

/**
 *  Tint Picture
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command234 = function() {
    $gameScreen.tintPicture(this._params[0], this._params[1], this._params[2]);
    if (this._params[3]) {
        this.wait(this._params[2]);
    }
    return true;
};

/**
 *  Erase Picture
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command235 = function() {
    $gameScreen.erasePicture(this._params[0]);
    return true;
};

/**
 *  Set Weather Effect
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command236 = function() {
    if (!$gameParty.inBattle()) {
        $gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]);
        if (this._params[3]) {
            this.wait(this._params[2]);
        }
    }
    return true;
};

/**
 *  Play BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command241 = function() {
    AudioManager.playBgm(this._params[0]);
    return true;
};

/**
 *  Fadeout BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command242 = function() {
    AudioManager.fadeOutBgm(this._params[0]);
    return true;
};

/**
 *  Save BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command243 = function() {
    $gameSystem.saveBgm();
    return true;
};

/**
 *  Resume BGM
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command244 = function() {
    $gameSystem.replayBgm();
    return true;
};

/**
 *  Play BGS
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command245 = function() {
    AudioManager.playBgs(this._params[0]);
    return true;
};

/**
 *  Fadeout BGS
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command246 = function() {
    AudioManager.fadeOutBgs(this._params[0]);
    return true;
};

/**
 *  Play ME
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command249 = function() {
    AudioManager.playMe(this._params[0]);
    return true;
};

/**
 *  Play SE
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command250 = function() {
    AudioManager.playSe(this._params[0]);
    return true;
};

/**
 *  Stop SE
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command251 = function() {
    AudioManager.stopSe();
    return true;
};

/**
 *  Play Movie
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command261 = function() {
    if (!$gameMessage.isBusy()) {
        var name = this._params[0];
        if (name.length > 0) {
            var ext = this.videoFileExt();
            Graphics.playVideo('movies/' + name + ext);
            this.setWaitMode('video');
        }
        this._index++;
    }
    return false;
};

/**
 * @returns {String}
 */
Game_Interpreter.prototype.videoFileExt = function() {
    if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
        return '.webm';
    } else {
        return '.mp4';
    }
};

/**
 *  Change Map Name Display
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command281 = function() {
    if (this._params[0] === 0) {
        $gameMap.enableNameDisplay();
    } else {
        $gameMap.disableNameDisplay();
    }
    return true;
};

/**
 *  Change Tileset
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command282 = function() {
    var tileset = $dataTilesets[this._params[0]];
    if(!this._imageReservationId){
        this._imageReservationId = Utils.generateRuntimeId();
    }

    var allReady = tileset.tilesetNames.map(function(tilesetName) {
        return ImageManager.reserveTileset(tilesetName, 0, this._imageReservationId);
    }, this).every(function(bitmap) {return bitmap.isReady();});

    if (allReady) {
        $gameMap.changeTileset(this._params[0]);
        ImageManager.releaseReservation(this._imageReservationId);
        this._imageReservationId = null;

        return true;
    } else {
        return false;
    }
};

/**
 *  Change Battle Back
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command283 = function() {
    $gameMap.changeBattleback(this._params[0], this._params[1]);
    return true;
};

/**
 *  Change Parallax
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command284 = function() {
    $gameMap.changeParallax(this._params[0], this._params[1],
        this._params[2], this._params[3], this._params[4]);
    return true;
};

/**
 *  Get Location Info
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command285 = function() {
    var x, y, value;
    if (this._params[2] === 0) {  // Direct designation
        x = this._params[3];
        y = this._params[4];
    } else {  // Designation with variables
        x = $gameVariables.value(this._params[3]);
        y = $gameVariables.value(this._params[4]);
    }
    switch (this._params[1]) {
    case 0:     // Terrain Tag
        value = $gameMap.terrainTag(x, y);
        break;
    case 1:     // Event ID
        value = $gameMap.eventIdXy(x, y);
        break;
    case 2:     // Tile ID (Layer 1)
    case 3:     // Tile ID (Layer 2)
    case 4:     // Tile ID (Layer 3)
    case 5:     // Tile ID (Layer 4)
        value = $gameMap.tileId(x, y, this._params[1] - 2);
        break;
    default:    // Region ID
        value = $gameMap.regionId(x, y);
        break;
    }
    $gameVariables.setValue(this._params[0], value);
    return true;
};

/**
 *  Battle Processing
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command301 = function() {
    if (!$gameParty.inBattle()) {
        var troopId;
        if (this._params[0] === 0) {  // Direct designation
            troopId = this._params[1];
        } else if (this._params[0] === 1) {  // Designation with a variable
            troopId = $gameVariables.value(this._params[1]);
        } else {  // Same as Random Encounter
            troopId = $gamePlayer.makeEncounterTroopId();
        }
        if ($dataTroops[troopId]) {
            BattleManager.setup(troopId, this._params[2], this._params[3]);
            BattleManager.setEventCallback(function(n) {
                this._branch[this._indent] = n;
            }.bind(this));
            $gamePlayer.makeEncounterCount();
            SceneManager.push(Scene_Battle);
        }
    }
    return true;
};

/**
 *  If Win
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command601 = function() {
    if (this._branch[this._indent] !== 0) {
        this.skipBranch();
    }
    return true;
};

/**
 *  If Escape
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command602 = function() {
    if (this._branch[this._indent] !== 1) {
        this.skipBranch();
    }
    return true;
};

/**
 *  If Lose
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command603 = function() {
    if (this._branch[this._indent] !== 2) {
        this.skipBranch();
    }
    return true;
};

/**
 *  Shop Processing
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command302 = function() {
    if (!$gameParty.inBattle()) {
        var goods = [this._params];
        while (this.nextEventCode() === 605) {
            this._index++;
            goods.push(this.currentCommand().parameters);
        }
        SceneManager.push(Scene_Shop);
        SceneManager.prepareNextScene(goods, this._params[4]);
    }
    return true;
};

/**
 *  Name Input Processing
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command303 = function() {
    if (!$gameParty.inBattle()) {
        if ($dataActors[this._params[0]]) {
            SceneManager.push(Scene_Name);
            SceneManager.prepareNextScene(this._params[0], this._params[1]);
        }
    }
    return true;
};

/**
 *  Change HP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command311 = function() {
    var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        this.changeHp(actor, value, this._params[5]);
    }.bind(this));
    return true;
};

/**
 *  Change MP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command312 = function() {
    var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.gainMp(value);
    }.bind(this));
    return true;
};

/**
 *  Change TP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command326 = function() {
    var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.gainTp(value);
    }.bind(this));
    return true;
};

/**
 *  Change State
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command313 = function() {
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        var alreadyDead = actor.isDead();
        if (this._params[2] === 0) {
            actor.addState(this._params[3]);
        } else {
            actor.removeState(this._params[3]);
        }
        if (actor.isDead() && !alreadyDead) {
            actor.performCollapse();
        }
        actor.clearResult();
    }.bind(this));
    return true;
};

/**
 *  Recover All
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command314 = function() {
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.recoverAll();
    }.bind(this));
    return true;
};

/**
 *  Change EXP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command315 = function() {
    var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.changeExp(actor.currentExp() + value, this._params[5]);
    }.bind(this));
    return true;
};

/**
 *  Change Level
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command316 = function() {
    var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.changeLevel(actor.level + value, this._params[5]);
    }.bind(this));
    return true;
};

/**
 *  Change Parameter
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command317 = function() {
    var value = this.operateValue(this._params[3], this._params[4], this._params[5]);
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        actor.addParam(this._params[2], value);
    }.bind(this));
    return true;
};

/**
 *  Change Skill
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command318 = function() {
    this.iterateActorEx(this._params[0], this._params[1], function(actor) {
        if (this._params[2] === 0) {
            actor.learnSkill(this._params[3]);
        } else {
            actor.forgetSkill(this._params[3]);
        }
    }.bind(this));
    return true;
};

/**
 *  Change Equipment
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command319 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        actor.changeEquipById(this._params[1], this._params[2]);
    }
    return true;
};

/**
 *  Change Name
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command320 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        actor.setName(this._params[1]);
    }
    return true;
};

/**
 *  Change Class
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command321 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor && $dataClasses[this._params[1]]) {
        actor.changeClass(this._params[1], this._params[2]);
    }
    return true;
};

/**
 *  Change Actor Images
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command322 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        actor.setCharacterImage(this._params[1], this._params[2]);
        actor.setFaceImage(this._params[3], this._params[4]);
        actor.setBattlerImage(this._params[5]);
    }
    $gamePlayer.refresh();
    return true;
};

/**
 *  Change Vehicle Image
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command323 = function() {
    var vehicle = $gameMap.vehicle(this._params[0]);
    if (vehicle) {
        vehicle.setImage(this._params[1], this._params[2]);
    }
    return true;
};

/**
 *  Change Nickname
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command324 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        actor.setNickname(this._params[1]);
    }
    return true;
};

/**
 *  Change Profile
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command325 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (actor) {
        actor.setProfile(this._params[1]);
    }
    return true;
};

/**
 *  Change Enemy HP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command331 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        this.changeHp(enemy, value, this._params[4]);
    }.bind(this));
    return true;
};

/**
 *  Change Enemy MP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command332 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        enemy.gainMp(value);
    }.bind(this));
    return true;
};

/**
 *  Change Enemy TP
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command342 = function() {
    var value = this.operateValue(this._params[1], this._params[2], this._params[3]);
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        enemy.gainTp(value);
    }.bind(this));
    return true;
};

/**
 *  Change Enemy State
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command333 = function() {
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        var alreadyDead = enemy.isDead();
        if (this._params[1] === 0) {
            enemy.addState(this._params[2]);
        } else {
            enemy.removeState(this._params[2]);
        }
        if (enemy.isDead() && !alreadyDead) {
            enemy.performCollapse();
        }
        enemy.clearResult();
    }.bind(this));
    return true;
};

/**
 *  Enemy Recover All
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command334 = function() {
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        enemy.recoverAll();
    }.bind(this));
    return true;
};

/**
 *  Enemy Appear
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command335 = function() {
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        enemy.appear();
        $gameTroop.makeUniqueNames();
    }.bind(this));
    return true;
};

/**
 *  Enemy Transform
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command336 = function() {
    this.iterateEnemyIndex(this._params[0], function(enemy) {
        enemy.transform(this._params[1]);
        $gameTroop.makeUniqueNames();
    }.bind(this));
    return true;
};

/**
 *  Show Battle Animation
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command337 = function() {
    if (this._params[2] == true) {
        this.iterateEnemyIndex(-1,function(enemy) {
            if (enemy.isAlive()) {
                enemy.startAnimation(this._params[1],false,0);
            }
        }.bind(this));
    } else {
        this.iterateEnemyIndex(this._params[0], function (enemy) {
            if (enemy.isAlive()) {
                enemy.startAnimation(this._params[1], false, 0);
            }
        }.bind(this));
    }
    return true;
};

/**
 *  Force Action
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command339 = function() {
    this.iterateBattler(this._params[0], this._params[1], function(battler) {
        if (!battler.isDeathStateAffected()) {
            battler.forceAction(this._params[2], this._params[3]);
            BattleManager.forceAction(battler);
            this.setWaitMode('action');
        }
    }.bind(this));
    return true;
};

/**
 *  Abort Battle
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command340 = function() {
    BattleManager.abort();
    return true;
};

/**
 *  Open Menu Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command351 = function() {
    if (!$gameParty.inBattle()) {
        SceneManager.push(Scene_Menu);
        Window_MenuCommand.initCommandPosition();
    }
    return true;
};

/**
 *  Open Save Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command352 = function() {
    if (!$gameParty.inBattle()) {
        SceneManager.push(Scene_Save);
    }
    return true;
};

/**
 *  Game Over
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command353 = function() {
    SceneManager.goto(Scene_Gameover);
    return true;
};

/**
 *  Return to Title Screen
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command354 = function() {
    SceneManager.goto(Scene_Title);
    return true;
};

/**
 *  Script
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command355 = function() {
    var script = this.currentCommand().parameters[0] + '\n';
    while (this.nextEventCode() === 655) {
        this._index++;
        script += this.currentCommand().parameters[0] + '\n';
    }
    eval(script);
    return true;
};

/**
 *  Plugin Command
 * @returns {Boolean}
 */
Game_Interpreter.prototype.command356 = function() {
    var args = this._params[0].split(" ");
    var command = args.shift();
    this.pluginCommand(command, args);
    return true;
};

/**
 * プラグインコマンドを受け取るメソッド。
 * このメソッドにプラグイン毎の処理を追加。
 * 次のような書き方が定番。
 * @example
 * const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
 * Game_Interpreter.prototype.pluginCommand = function ( command, args ){
 *    _Game_Interpreter_pluginCommand.call( this, command, args );
 *   // ここにプラグインごとのコマンド名の判定と実行内容を書く
 * };
 * @param  {String} command コマンド名
 * @param  {Array<string>} args 引数の配列
 */
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    // to be overridden by plugins
};


/**
 * @param  {Array<RPG.EventCommand>} list
 * @param  {Array<*>} commonList
 */
Game_Interpreter.requestImages = function(list, commonList){
    if(!list) return;

    list.forEach(function(command){
        var params = command.parameters;
        switch(command.code){
            // Show Text
            case 101:
                ImageManager.requestFace(params[0]);
                break;

            // Common Event
            case 117:
                var commonEvent = $dataCommonEvents[params[0]];
                if (commonEvent) {
                    if (!commonList) {
                        commonList = [];
                    }
                    if (!commonList.contains(params[0])) {
                        commonList.push(params[0]);
                        Game_Interpreter.requestImages(commonEvent.list, commonList);
                    }
                }
                break;

            // Change Party Member
            case 129:
                var actor = $gameActors.actor(params[0]);
                if (actor && params[1] === 0) {
                    var name = actor.characterName();
                    ImageManager.requestCharacter(name);
                }
                break;

            // Set Movement Route
            case 205:
                if(params[1]){
                    params[1].list.forEach(function(command){
                        var params = command.parameters;
                        if(command.code === Game_Character.ROUTE_CHANGE_IMAGE){
                            ImageManager.requestCharacter(params[0]);
                        }
                    });
                }
                break;

            // Show Animation, Show Battle Animation
            case 212: case 337:
                if(params[1]) {
                    var animation = $dataAnimations[params[1]];
                    var name1 = animation.animation1Name;
                    var name2 = animation.animation2Name;
                    var hue1 = animation.animation1Hue;
                    var hue2 = animation.animation2Hue;
                    ImageManager.requestAnimation(name1, hue1);
                    ImageManager.requestAnimation(name2, hue2);
                }
                break;

            // Change Player Followers
            case 216:
                if (params[0] === 0) {
                    $gamePlayer.followers().forEach(function(follower) {
                        var name = follower.characterName();
                        ImageManager.requestCharacter(name);
                    });
                }
                break;

            // Show Picture
            case 231:
                ImageManager.requestPicture(params[1]);
                break;

            // Change Tileset
            case 282:
                var tileset = $dataTilesets[params[0]];
                tileset.tilesetNames.forEach(function(tilesetName){
                    ImageManager.requestTileset(tilesetName);
                });
                break;

            // Change Battle Back
            case 283:
                if ($gameParty.inBattle()) {
                    ImageManager.requestBattleback1(params[0]);
                    ImageManager.requestBattleback2(params[1]);
                }
                break;

            // Change Parallax
            case 284:
                if (!$gameParty.inBattle()) {
                    ImageManager.requestParallax(params[0]);
                }
                break;

            // Change Actor Images
            case 322:
                ImageManager.requestCharacter(params[1]);
                ImageManager.requestFace(params[3]);
                ImageManager.requestSvActor(params[5]);
                break;

            // Change Vehicle Image
            case 323:
                var vehicle = $gameMap.vehicle(params[0]);
                if(vehicle){
                    ImageManager.requestCharacter(params[1]);
                }
                break;

            // Enemy Transform
            case 336:
                var enemy = $dataEnemies[params[1]];
                var name = enemy.battlerName;
                var hue = enemy.battlerHue;
                if ($gameSystem.isSideView()) {
                    ImageManager.requestSvEnemy(name, hue);
                } else {
                    ImageManager.requestEnemy(name, hue);
                }
                break;
        }
    });
};