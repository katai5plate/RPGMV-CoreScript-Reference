//=============================================================================
// rpg_scenes.js v1.5.2
//=============================================================================

//=============================================================================

/**
 * シーンの基礎オブジェクト。シーン管理は {@link SceneManager} で行う。
 * {@link Scene_Boot}, {@link Scene_Title}, {@link Scene_Gameover}, {@link Scene_Map}, {@link Scene_Battle}, {@link Scene_MenuBase} のスーパークラス。
 * @class Scene_Base
 * @extends Stage
 * @abstract
 * 
 * @prop {Boolean} _active アクティブか{@link Scene_Base#isActive}
 * @prop {Number} _fadeSign
 * @prop {Number} _fadeDuration フェードにかける時間
 * @prop {ScreenSprite} _fadeSprite フェードに使うスプライト
 * @prop {* | Number} _imageReservationId
 * @prop {WindowLayer} _windowLayer ウィンドウレイヤ
 */
function Scene_Base() {
    this.initialize.apply(this, arguments);
}

Scene_Base.prototype = Object.create(Stage.prototype);
Scene_Base.prototype.constructor = Scene_Base;


/**
 * オブジェクト生成時の初期化。
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.initialize = function() {
    Stage.prototype.initialize.call(this);
    this._active = false;
    this._fadeSign = 0;
    this._fadeDuration = 0;
    this._fadeSprite = null;
    this._imageReservationId = Utils.generateRuntimeId();
};

/**
 * キューに予約を追加。
 * @method attachReservation
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.attachReservation = function() {
    ImageManager.setDefaultReservationId(this._imageReservationId);
};

/**
 * キューから予約を削除。
 * @method detachReservation
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.detachReservation = function() {
    ImageManager.releaseReservation(this._imageReservationId);
};

/**
 * シーンの生成。
 * @method create
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.create = function() {
};

/**
 * シーンがアクティブか。
 * @method isActive
 * @instance 
 * @memberof Scene_Base
 * @return {Boolean} 
 */
Scene_Base.prototype.isActive = function() {
    return this._active;
};

/**
 * シーンの準備ができているか。
 * @method isReady
 * @instance 
 * @memberof Scene_Base
 * @return {Boolean} 
 */
Scene_Base.prototype.isReady = function() {
    return ImageManager.isReady();
};

/**
 * シーンの開始。
 * @method start
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.start = function() {
    this._active = true;
};

/**
 * フレーム毎のアップデート。
 * @method update
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.update = function() {
    this.updateFade();
    this.updateChildren();
};

/**
 * シーンの停止。
 * @method stop
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.stop = function() {
    this._active = false;
};


/**
 * フェード動作中か。
 * @method isBusy
 * @instance
 * @memberof Scene_Base
 * @return {Boolean} 
 */
Scene_Base.prototype.isBusy = function() {
    return this._fadeDuration > 0;
};

/**
 * 遷移前のシーン中断。
 * @method terminate
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.terminate = function() {
};

/**
 * ウィンドウレイヤー{@link WindowLayer}を生成。
 * @method createWindowLayer
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.createWindowLayer = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var x = (Graphics.width - width) / 2;
    var y = (Graphics.height - height) / 2;
    this._windowLayer = new WindowLayer();
    this._windowLayer.move(x, y, width, height);
    this.addChild(this._windowLayer);
};

/**
 * ウィンドウレイヤーにウィンドウを追加。
 * @method addWindow
 * @param Window 追加するウィンドウ
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.addWindow = function(window) {
    this._windowLayer.addChild(window);
};

/**
 * フェードインの要求。
 * @method startFadeIn
 * @param {Number} [duration=30] フェードインにかける時間
 * @param {Boolean} [white=false] 白で[フェード]するか(falseだと黒)
 * 
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.startFadeIn = function(duration, white) {
    this.createFadeSprite(white);
    this._fadeSign = 1;
    this._fadeDuration = duration || 30;
    this._fadeSprite.opacity = 255;
};

/**
 * フェードアウトの要求。
 * @method startFadeOut
 * @param {Number} [duration=30] フェードアウトにかける時間
 * @param {Boolean} [white=false] 白で[フェード]するか(falseだと黒)
 * 
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.startFadeOut = function(duration, white) {
    this.createFadeSprite(white);
    this._fadeSign = -1;
    this._fadeDuration = duration || 30;
    this._fadeSprite.opacity = 0;
};

/**
 * フェード用のスプライトを生成。
 * @method createFadeSprite
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.createFadeSprite = function(white) {
    if (!this._fadeSprite) {
        this._fadeSprite = new ScreenSprite();
        this.addChild(this._fadeSprite);
    }
    if (white) {
        this._fadeSprite.setWhite();
    } else {
        this._fadeSprite.setBlack();
    }
};

/**
 * フェードのアップデート。
 * @method updateFade
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.updateFade = function() {
    if (this._fadeDuration > 0) {
        var d = this._fadeDuration;
        if (this._fadeSign > 0) {
            this._fadeSprite.opacity -= this._fadeSprite.opacity / d;
        } else {
            this._fadeSprite.opacity += (255 - this._fadeSprite.opacity) / d;
        }
        this._fadeDuration--;
    }
};

/**
 * 子オブジェクトのアップデート。
 * @method updateChildren
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.updateChildren = function() {
    this.children.forEach(function(child) {
        if (child.update) {
            child.update();
        }
    });
};

/**
 * シーンを引き出す(pop)。
 * @method popScene
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.popScene = function() {
    SceneManager.pop();
};

/**
 * ゲームオーバー状態か検査。
 * @method checkGameover
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.checkGameover = function() {
    if ($gameParty.isAllDead()) {
        SceneManager.goto(Scene_Gameover);
    }
};

/**
 * 全ての映像と音声を、遅い速度でフェードアウト。
 * @method fadeOutAll
 * @instance 
 * @memberof Scene_Base
 */
Scene_Base.prototype.fadeOutAll = function() {
    var time = this.slowFadeSpeed() / 60;
    AudioManager.fadeOutBgm(time);
    AudioManager.fadeOutBgs(time);
    AudioManager.fadeOutMe(time);
    this.startFadeOut(this.slowFadeSpeed());
};

/**
 * フェード速度を返す。
 * @method fadeSpeed
 * @instance 
 * @memberof Scene_Base
 * @return {Number} 
 */
Scene_Base.prototype.fadeSpeed = function() {
    return 24;
};

/**
 * 遅いフェード速度を返す。
 * @method slowFadeSpeed
 * @instance 
 * @memberof Scene_Base
 * @return {Number} Return the fade speed
 */
Scene_Base.prototype.slowFadeSpeed = function() {
    return this.fadeSpeed() * 2;
};




/**
 * 起動時の初期化を行うシーン。システムに必要なデータや画像を読み込み、戦闘・イベントテストの分岐なども行う。
 * @class Scene_Boot
 * @extends {Scene_Base}
 * 
 * @prop {Date} _startDate
 */
function Scene_Boot() {
    this.initialize.apply(this, arguments);
}

Scene_Boot.prototype = Object.create(Scene_Base.prototype);
Scene_Boot.prototype.constructor = Scene_Boot;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Boot.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._startDate = Date.now();
};

/**
 * データを読み込んで、シーンを生成。
 */
Scene_Boot.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    DataManager.loadDatabase();
    ConfigManager.load();
    this.loadSystemWindowImage();
};

/**
 * ウィンドウに必要な画像を読み込む。
 * @memberof Scene_Boot
 */
Scene_Boot.prototype.loadSystemWindowImage = function() {
    ImageManager.reserveSystem('Window');
};

/**
 * 各種アイコンなどのシステムに必要なデータを読み込む。
 * @memberof Scene_Boot
 */
Scene_Boot.loadSystemImages = function() {
    ImageManager.reserveSystem('IconSet');
    ImageManager.reserveSystem('Balloon');
    ImageManager.reserveSystem('Shadow1');
    ImageManager.reserveSystem('Shadow2');
    ImageManager.reserveSystem('Damage');
    ImageManager.reserveSystem('States');
    ImageManager.reserveSystem('Weapons1');
    ImageManager.reserveSystem('Weapons2');
    ImageManager.reserveSystem('Weapons3');
    ImageManager.reserveSystem('ButtonSet');
};

/**
 * 準備ができているか。
 * @returns {Boolean}
 */
Scene_Boot.prototype.isReady = function() {
    if (Scene_Base.prototype.isReady.call(this)) {
        return DataManager.isDatabaseLoaded() && this.isGameFontLoaded();
    } else {
        return false;
    }
};

/**
 * フォントが読み込まれているか。
 * @returns {Boolean} 
 * @memberof Scene_Boot
 */
Scene_Boot.prototype.isGameFontLoaded = function() {
    if (Graphics.isFontLoaded('GameFont')) {
        return true;
    } else if (!Graphics.canUseCssFontLoading()){
        var elapsed = Date.now() - this._startDate;
        if (elapsed >= 60000) {
            throw new Error('Failed to load GameFont');
        }
    }
};

/**
 * シーンの開始。
 */
Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
    if (DataManager.isBattleTest()) {
        DataManager.setupBattleTest();
        SceneManager.goto(Scene_Battle);
    } else if (DataManager.isEventTest()) {
        DataManager.setupEventTest();
        SceneManager.goto(Scene_Map);
    } else {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Title);
        Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
};

/**
 * ゲームのタイトルをアップデート。
 */
Scene_Boot.prototype.updateDocumentTitle = function() {
    document.title = $dataSystem.gameTitle;
};

/**
 * プレイヤーの場所が設定されているか検査し、設定されていないならエラーを出力。
 * @memberof Scene_Boot
 */
Scene_Boot.prototype.checkPlayerLocation = function() {
    if ($dataSystem.startMapId === 0) {
        throw new Error('Player\'s starting position is not set');
    }
};





/**
 * The scene class of the title screen.
 * 
 * @class Scene_Title
 * @extends {Scene_Base}
 * 
 * @prop {Window_TitleCommand} _commandWindow
 * @prop {Sprite} _backSprite1
 * @prop {Sprite} _backSprite2
 * @prop {Sprite} _gameTitleSprite
 */
function Scene_Title() {
    this.initialize.apply(this, arguments);
}

Scene_Title.prototype = Object.create(Scene_Base.prototype);
Scene_Title.prototype.constructor = Scene_Title;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Title.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createForeground();
    this.createWindowLayer();
    this.createCommandWindow();
};

/**
 * 
 */
Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    this.centerSprite(this._backSprite1);
    this.centerSprite(this._backSprite2);
    this.playTitleMusic();
    this.startFadeIn(this.fadeSpeed(), false);
};

/**
 * 
 */
Scene_Title.prototype.update = function() {
    if (!this.isBusy()) {
        this._commandWindow.open();
    }
    Scene_Base.prototype.update.call(this);
};

/**
 * @returns {Boolean}
 */
Scene_Title.prototype.isBusy = function() {
    return this._commandWindow.isClosing() || Scene_Base.prototype.isBusy.call(this);
};

/**
 * 
 */
Scene_Title.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    SceneManager.snapForBackground();
};

    /**
     * Creates the title scene background.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.createBackground = function() {
    this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));
    this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name));
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);
};

    /**
     * Creates the title screen foreground.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.createForeground = function() {
    this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
    this.addChild(this._gameTitleSprite);
    if ($dataSystem.optDrawTitle) {
        this.drawGameTitle();
    }
};

    /**
     * Draws the game title.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.drawGameTitle = function() {
    var x = 20;
    var y = Graphics.height / 4;
    var maxWidth = Graphics.width - x * 2;
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 72;
    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
};

/**
 * @param  {Sprite} sprite
 */
Scene_Title.prototype.centerSprite = function(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
};

    /**
     * Creates the command window on the title scene.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
    this.addWindow(this._commandWindow);
};

    /**
     * Handler for the new game command.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.commandNewGame = function() {
    DataManager.setupNewGame();
    this._commandWindow.close();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};

    /**
     * Handler for the continue command.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.commandContinue = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_Load);
};

    /**
     * Handler for the options command.
     * 
     * @memberof Scene_Title
     */
Scene_Title.prototype.commandOptions = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_Options);
};

    /**
     * Plays the title screen music
     * upon enter the title scene.
     * @memberof Scene_Title
     */
Scene_Title.prototype.playTitleMusic = function() {
    AudioManager.playBgm($dataSystem.titleBgm);
    AudioManager.stopBgs();
    AudioManager.stopMe();
};





/**
 * マップ表示シーン。マップ表示スプライト {@link Spriteset_Map} と 関連ウィンドウ{@link Window_MapName}、 {@link Window_ScrollText}、 {@link Window_Message} を持っている。
 * @class Scene_Map
 * @extends {Scene_Base}
 * 
 * @prop {Boolean} menuCalling
 * 
 * @prop {Number} _waitCount
 * @prop {Number} _encounterEffectDuration
 * @prop {Boolean} _mapLoaded
 * @prop {Number} _touchCount
 * @prop {Boolean} _transfer
 * @prop {Spriteset_Map} _spriteset
 * @prop {Window_MapName} _mapNameWindow
 * @prop {Window_ScrollText} _scrollTextWindow
 * @prop {Window_Message} _messageWindow
 */
function Scene_Map() {
    this.initialize.apply(this, arguments);
}

Scene_Map.prototype = Object.create(Scene_Base.prototype);
Scene_Map.prototype.constructor = Scene_Map;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Map.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this._waitCount = 0;
    this._encounterEffectDuration = 0;
    this._mapLoaded = false;
    this._touchCount = 0;
};

/**
 * シーンの生成。
 */
Scene_Map.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this._transfer = $gamePlayer.isTransferring();
    var mapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    DataManager.loadMapData(mapId);
};

/**
 * データのロードなどの準備完了か。
 * @returns {Boolean}
 */
Scene_Map.prototype.isReady = function() {
    if (!this._mapLoaded && DataManager.isMapLoaded()) {
        this.onMapLoaded();
        this._mapLoaded = true;
    }
    return this._mapLoaded && Scene_Base.prototype.isReady.call(this);
};

/**
 * シーンの読み込みが完了した時に呼ばれるハンドラ。
 * @memberof Scene_Map
 */
Scene_Map.prototype.onMapLoaded = function() {
    if (this._transfer) {
        $gamePlayer.performTransfer();
    }
    this.createDisplayObjects();
};

/**
 * シーンの開始。
 */
Scene_Map.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    if (this._transfer) {
        this.fadeInForTransfer();
        this._mapNameWindow.open();
        $gameMap.autoplay();
    } else if (this.needsFadeIn()) {
        this.startFadeIn(this.fadeSpeed(), false);
    }
    this.menuCalling = false;
};

/**
 * フレーム毎のアップデート。
 */
Scene_Map.prototype.update = function() {
    this.updateDestination();
    this.updateMainMultiply();
    if (this.isSceneChangeOk()) {
        this.updateScene();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.updateEncounterEffect();
    }
    this.updateWaitCount();
    Scene_Base.prototype.update.call(this);
};

/**
 * メインをアップデート。早送りモードだと2度アップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateMainMultiply = function() {
    this.updateMain();
    if (this.isFastForward()) {
        this.updateMain();
    }
};

/**
 * {@link $gameMap}, {@link $gamePlayer}, {@link $gameTimer}, {@link $gameScreen} をアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateMain = function() {
    var active = this.isActive();
    $gameMap.update(active);
    $gamePlayer.update(active);
    $gameTimer.update(active);
    $gameScreen.update();
};

/**
 * 早送りモードか。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isFastForward = function() {
    return ($gameMap.isEventRunning() && !SceneManager.isSceneChanging() &&
            (Input.isLongPressed('ok') || TouchInput.isLongPressed()));
};

/**
 * シーンを停止し次のシーンの準備をする。
 * @memberof Scene_Map
 */
Scene_Map.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    $gamePlayer.straighten();
    this._mapNameWindow.close();
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else if (SceneManager.isNextScene(Scene_Map)) {
        this.fadeOutForTransfer();
    } else if (SceneManager.isNextScene(Scene_Battle)) {
        this.launchBattle();
    }
};

/**
 * シーン動作中か。
 * @returns {Boolean}
 */
Scene_Map.prototype.isBusy = function() {
    return ((this._messageWindow && this._messageWindow.isClosing()) ||
            this._waitCount > 0 || this._encounterEffectDuration > 0 ||
            Scene_Base.prototype.isBusy.call(this));
};

/**
 * シーンの中断。
 */
Scene_Map.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    if (!SceneManager.isNextScene(Scene_Battle)) {
        this._spriteset.update();
        this._mapNameWindow.hide();
        SceneManager.snapForBackground();
    } else {
        ImageManager.clearRequest();
    }

    if (SceneManager.isNextScene(Scene_Map)) {
        ImageManager.clearRequest();
    }

    $gameScreen.clearZoom();

    this.removeChild(this._fadeSprite);
    this.removeChild(this._mapNameWindow);
    this.removeChild(this._windowLayer);
    this.removeChild(this._spriteset);
};

/**
 * フェードインするか。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.needsFadeIn = function() {
    return (SceneManager.isPreviousScene(Scene_Battle) ||
            SceneManager.isPreviousScene(Scene_Load));
};

/**
 * フェードアウトするか。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.needsSlowFadeOut = function() {
    return (SceneManager.isNextScene(Scene_Title) ||
            SceneManager.isNextScene(Scene_Gameover));
};

/**
 * 待ちカウントをアップデート。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateWaitCount = function() {
    if (this._waitCount > 0) {
        this._waitCount--;
        return true;
    }
    return false;
};

/**
 * タッチ位置表示をアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateDestination = function() {
    if (this.isMapTouchOk()) {
        this.processMapTouch();
    } else {
        $gameTemp.clearDestination();
        this._touchCount = 0;
    }
};

/**
 * タッチ移動が可能か。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isMapTouchOk = function() {
    return this.isActive() && $gamePlayer.canMove();
};

/**
 * タッチをキャラクタの移動に変換。
 * @memberof Scene_Map
 */
Scene_Map.prototype.processMapTouch = function() {
    if (TouchInput.isTriggered() || this._touchCount > 0) {
        if (TouchInput.isPressed()) {
            if (this._touchCount === 0 || this._touchCount >= 15) {
                var x = $gameMap.canvasToMapX(TouchInput.x);
                var y = $gameMap.canvasToMapY(TouchInput.y);
                $gameTemp.setDestination(x, y);
            }
            this._touchCount++;
        } else {
            this._touchCount = 0;
        }
    }
};

/**
 * シーンの変更可能か。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isSceneChangeOk = function() {
    return this.isActive() && !$gameMessage.isBusy();
};

/**
 * シーンのアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateScene = function() {
    this.checkGameover();
    if (!SceneManager.isSceneChanging()) {
        this.updateTransferPlayer();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateEncounter();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallMenu();
    }
    if (!SceneManager.isSceneChanging()) {
        this.updateCallDebug();
    }
};

/**
 * シーンに必要な全表示オブジェクトを生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    this.createMapNameWindow();
    this.createWindowLayer();
    this.createAllWindows();
};

/**
 * マップスプライト({@link Spriteset_Map})を生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createSpriteset = function() {
    this._spriteset = new Spriteset_Map();
    this.addChild(this._spriteset);
};

/**
 * ウィンドウを生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createAllWindows = function() {
    this.createMessageWindow();
    this.createScrollTextWindow();
};

/**
 * マップ名表示ウィンドウ生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createMapNameWindow = function() {
    this._mapNameWindow = new Window_MapName();
    this.addChild(this._mapNameWindow);
};

/**
 * メッセージウィンドウ生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createMessageWindow = function() {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function(window) {
        this.addWindow(window);
    }, this);
};

/**
 * スクロールテキストウィンドウの生成。
 * @memberof Scene_Map
 */
Scene_Map.prototype.createScrollTextWindow = function() {
    this._scrollTextWindow = new Window_ScrollText();
    this.addWindow(this._scrollTextWindow);
};

/**
 * プレイヤーのマップ移動のアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateTransferPlayer = function() {
    if ($gamePlayer.isTransferring()) {
        SceneManager.goto(Scene_Map);
    }
};

/**
 * エンカウントをアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateEncounter = function() {
   if ($gamePlayer.executeEncounter()) {
       SceneManager.push(Scene_Battle);
   }
};

/**
 * メニュー呼び出しのアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateCallMenu = function() {
    if (this.isMenuEnabled()) {
        if (this.isMenuCalled()) {
            this.menuCalling = true;
        }
        if (this.menuCalling && !$gamePlayer.isMoving()) {
            this.callMenu();
        }
    } else {
        this.menuCalling = false;
    }
};

/**
 * メニュー使用可か。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isMenuEnabled = function() {
    return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
};

/**
 * メニューが呼ばれているか。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isMenuCalled = function() {
    return Input.isTriggered('menu') || TouchInput.isCancelled();
};

/**
 * メニューの呼び出し。
 * @memberof Scene_Map
 */
Scene_Map.prototype.callMenu = function() {
    SoundManager.playOk();
    SceneManager.push(Scene_Menu);
    Window_MenuCommand.initCommandPosition();
    $gameTemp.clearDestination();
    this._mapNameWindow.hide();
    this._waitCount = 2;
};

/**
 * デバッグウィンドウを呼ぶアップデート。
 * @memberof Scene_Map
 */
Scene_Map.prototype.updateCallDebug = function() {
    if (this.isDebugCalled()) {
        SceneManager.push(Scene_Debug);
    }
};

/**
 *  デバッグウィンドウが呼ばれているか。
 * @returns {Boolean} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.isDebugCalled = function() {
    return Input.isTriggered('debug') && $gameTemp.isPlaytest();
};

/**
 * 遷移時のフェードイン。
 */
Scene_Map.prototype.fadeInForTransfer = function() {
    var fadeType = $gamePlayer.fadeType();
    switch (fadeType) {
    case 0: case 1:
        this.startFadeIn(this.fadeSpeed(), fadeType === 1);
        break;
    }
};

/**
 * 遷移時のフェードアウト。
 */
Scene_Map.prototype.fadeOutForTransfer = function() {
    var fadeType = $gamePlayer.fadeType();
    switch (fadeType) {
    case 0: case 1:
        this.startFadeOut(this.fadeSpeed(), fadeType === 1);
        break;
    }
};

/**
 * 戦闘シーンの開始。
 * @memberof Scene_Map
 */
Scene_Map.prototype.launchBattle = function() {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
    SoundManager.playBattleStart();
    this.startEncounterEffect();
    this._mapNameWindow.hide();
};

/**
 * 戦闘開始前の音声の停止。
 * @memberof Scene_Map
 */
Scene_Map.prototype.stopAudioOnBattleStart = function() {
    if (!AudioManager.isCurrentBgm($gameSystem.battleBgm())) {
        AudioManager.stopBgm();
    }
    AudioManager.stopBgs();
    AudioManager.stopMe();
    AudioManager.stopSe();
};

/**
 * エンカウント時の効果の表示開始。
 * @memberof Scene_Map
 */
Scene_Map.prototype.startEncounterEffect = function() {
    this._spriteset.hideCharacters();
    this._encounterEffectDuration = this.encounterEffectSpeed();
};

/**
 * エンカウント時の効果のアップデート。
 */
Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration--;
        var speed = this.encounterEffectSpeed();
        var n = speed - this._encounterEffectDuration;
        var p = n / speed;
        var q = ((p - 1) * 20 * p + 5) * p + 1;
        var zoomX = $gamePlayer.screenX();
        var zoomY = $gamePlayer.screenY() - 24;
        if (n === 2) {
            $gameScreen.setZoom(zoomX, zoomY, 1);
            this.snapForBattleBackground();
            this.startFlashForEncounter(speed / 2);
        }
        $gameScreen.setZoom(zoomX, zoomY, q);
        if (n === Math.floor(speed / 6)) {
            this.startFlashForEncounter(speed / 2);
        }
        if (n === Math.floor(speed / 2)) {
            BattleManager.playBattleBgm();
            this.startFadeOut(this.fadeSpeed());
        }
    }
};

/**
 * 戦闘背景が指定されていない場合の、マップのスナップショット表示。
 * @memberof Scene_Map
 */
Scene_Map.prototype.snapForBattleBackground = function() {
    this._windowLayer.visible = false;
    SceneManager.snapForBackground();
    this._windowLayer.visible = true;
};

/**
 * エンカウント時のフラッシュ開始。
 * @param {Number} duration 
 * @memberof Scene_Map
 */
Scene_Map.prototype.startFlashForEncounter = function(duration) {
    var color = [255, 255, 255, 255];
    $gameScreen.startFlash(color, duration);
};

/**
 * エンカウント効果のスピードを返す。
 * @returns {Number} 
 * @memberof Scene_Map
 */
Scene_Map.prototype.encounterEffectSpeed = function() {
    return 60;
};




/**
 * メニュー型シーンの基礎クラス。
 * {@link Scene_File}, {@link Scene_ItemBase} and {@link Scene_Debug}, {@link Scene_Equip}, {@link Scene_GameEnd}, {@link Scene_Menu}, {@link Scene_Name}, {@link Scene_Options}, {@link Scene_Shop}, {@link Scene_Status} のスーパークラス。
 * @class Scene_MenuBase
 * @extends {Scene_Base}
 * @abstract
 * 
 * @prop  {Game_Actor} _actor 選択されているアクター
 * @prop {Sprite} _backgroundSprite シーンの背景となるスプライト
 * @prop {Window_Help} _helpWindow シーンに付加されるヘルプウィンドウ
 */
function Scene_MenuBase() {
    this.initialize.apply(this, arguments);
}

Scene_MenuBase.prototype = Object.create(Scene_Base.prototype);
Scene_MenuBase.prototype.constructor = Scene_MenuBase;

/**
 * オブジェクト生成時の初期化。
 */
Scene_MenuBase.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

/**
 * シーンを生成。
 */
Scene_MenuBase.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.updateActor();
    this.createWindowLayer();
};

/**
 * Returns the current game actor.
 * 
 * @returns {Game_Actor} 
 * @memberof Scene_MenuBase
 */
Scene_MenuBase.prototype.actor = function() {
    return this._actor;
};

    /**
     * Updates the current actor.
     * 
     * @memberof Scene_MenuBase
     */
Scene_MenuBase.prototype.updateActor = function() {
    this._actor = $gameParty.menuActor();
};

Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

/**
 * @param  {Number} opacity
 */
Scene_MenuBase.prototype.setBackgroundOpacity = function(opacity) {
    this._backgroundSprite.opacity = opacity;
};

    /**
     * Creates the help window.
     * 
     * @memberof Scene_MenuBase
     */
Scene_MenuBase.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this.addWindow(this._helpWindow);
};

    /**
     * Moves to the next actor in the party.
     * 
     * @memberof Scene_MenuBase
     */
Scene_MenuBase.prototype.nextActor = function() {
    $gameParty.makeMenuActorNext();
    this.updateActor();
    this.onActorChange();
};

    /**
     * Moves to the previous actor in the party.
     * 
     * @memberof Scene_MenuBase
     */
Scene_MenuBase.prototype.previousActor = function() {
    $gameParty.makeMenuActorPrevious();
    this.updateActor();
    this.onActorChange();
};

/**
 * 
 */
Scene_MenuBase.prototype.onActorChange = function() {
};




/**
 * The scene class of the menu screen.
 * @class Scene_Menu
 * @extends {Scene_MenuBase}
 * 
 * @prop {Window_MenuCommand} _commandWindow
 * @prop {Window_MenuStatus} _statusWindow
 * @prop {Window_Gold} _goldWindow
 */
function Scene_Menu() {
    this.initialize.apply(this, arguments);
}

Scene_Menu.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Menu.prototype.constructor = Scene_Menu;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Menu.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
};

/**
 * 
 */
Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._statusWindow.refresh();
};

    /**
     * Creates the main menu window on the 
     * menu scene; contains the commands for
     * menu usage.
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.setHandler('item',      this.commandItem.bind(this));
    this._commandWindow.setHandler('skill',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('equip',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('status',    this.commandPersonal.bind(this));
    this._commandWindow.setHandler('formation', this.commandFormation.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

    /**
     * Creates the gold window on the menu scene.
     * 
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
    this.addWindow(this._goldWindow);
};

    /**
     * Creates the status window on the menu scene.
     * 
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

    /**
     * Handler for what to do when the 'item'
     * command is clicked.
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.commandItem = function() {
    SceneManager.push(Scene_Item);
};

/**
 * 
 */
Scene_Menu.prototype.commandPersonal = function() {
    this._statusWindow.setFormationMode(false);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok',     this.onPersonalOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
};

/**
 * 
 */
Scene_Menu.prototype.commandFormation = function() {
    this._statusWindow.setFormationMode(true);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok',     this.onFormationOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onFormationCancel.bind(this));
};

    /**
     * Handler for what to do when the 'option'
     * command is clicked.
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.commandOptions = function() {
    SceneManager.push(Scene_Options);
};

    /**
     * Handler for what to do when the 'save'
     * command is clicked.
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.commandSave = function() {
    SceneManager.push(Scene_Save);
};

    /**
     * Handler for what to do when the 'game end'
     * command is clicked.
     * @memberof Scene_Menu
     */
Scene_Menu.prototype.commandGameEnd = function() {
    SceneManager.push(Scene_GameEnd);
};

/**
 * 
 */
Scene_Menu.prototype.onPersonalOk = function() {
    switch (this._commandWindow.currentSymbol()) {
    case 'skill':
        SceneManager.push(Scene_Skill);
        break;
    case 'equip':
        SceneManager.push(Scene_Equip);
        break;
    case 'status':
        SceneManager.push(Scene_Status);
        break;
    }
};

/**
 * 
 */
Scene_Menu.prototype.onPersonalCancel = function() {
    this._statusWindow.deselect();
    this._commandWindow.activate();
};

/**
 * 
 */
Scene_Menu.prototype.onFormationOk = function() {
    var index = this._statusWindow.index();
    var actor = $gameParty.members()[index];
    var pendingIndex = this._statusWindow.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.redrawItem(index);
    } else {
        this._statusWindow.setPendingIndex(index);
    }
    this._statusWindow.activate();
};

/**
 * 
 */
Scene_Menu.prototype.onFormationCancel = function() {
    if (this._statusWindow.pendingIndex() >= 0) {
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.activate();
    } else {
        this._statusWindow.deselect();
        this._commandWindow.activate();
    }
};




/**
 * The superclass of {@link Scene_Item} and {@link Scene_Skill}.
 * @class Scene_ItemBase
 * @extends {Scene_MenuBase}
 * @abstract
 * 
 * @prop {Window_MenuActor} _actorWindow
 * @prop {Window_Selectable} _itemWindow
 */
function Scene_ItemBase() {
    this.initialize.apply(this, arguments);
}

Scene_ItemBase.prototype = Object.create(Scene_MenuBase.prototype);
Scene_ItemBase.prototype.constructor = Scene_ItemBase;

/**
 * オブジェクト生成時の初期化。
 */
Scene_ItemBase.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_ItemBase.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
};

    /**
     * Creates the actor window within the base item scene.
     * 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.createActorWindow = function() {
    this._actorWindow = new Window_MenuActor();
    this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
    this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this.addWindow(this._actorWindow);
};

    /**
     * Returns the item attached to the item window within the base item scene.
     * 
     * @returns {*} 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.item = function() {
    return this._itemWindow.item();
};

    /**
     * Returns the current game actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.user = function() {
    return null;
};

    /**
     * Returns true if the cursor is left.
     * 
     * @returns {Boolean} 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.isCursorLeft = function() {
    return this._itemWindow.index() % 2 === 0;
};

    /**
     * Shows the sub window.
     * 
     * @param {Window_Base} window 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.showSubWindow = function(window) {
    window.x = this.isCursorLeft() ? Graphics.boxWidth - window.width : 0;
    window.show();
    window.activate();
};

    /**
     * Hides the sub window.
     * 
     * @param {Window_Base} window 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.hideSubWindow = function(window) {
    window.hide();
    window.deactivate();
    this.activateItemWindow();
};

/**
 * 
 */
Scene_ItemBase.prototype.onActorOk = function() {
    if (this.canUse()) {
        this.useItem();
    } else {
        SoundManager.playBuzzer();
    }
};

/**
 * 
 */
Scene_ItemBase.prototype.onActorCancel = function() {
    this.hideSubWindow(this._actorWindow);
};

/**
 * 
 */
Scene_ItemBase.prototype.determineItem = function() {
    var action = new Game_Action(this.user());
    var item = this.item();
    action.setItemObject(item);
    if (action.isForFriend()) {
        this.showSubWindow(this._actorWindow);
        this._actorWindow.selectForItem(this.item());
    } else {
        this.useItem();
        this.activateItemWindow();
    }
};

    /**
     * Uses the current item.
     * 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.useItem = function() {
    this.playSeForItem();
    this.user().useItem(this.item());
    this.applyItem();
    this.checkCommonEvent();
    this.checkGameover();
    this._actorWindow.refresh();
};

    /**
     * Activates the item window.
     * 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.activateItemWindow = function() {
    this._itemWindow.refresh();
    this._itemWindow.activate();
};

/**
 * @returns {Game_Actor}
 */
Scene_ItemBase.prototype.itemTargetActors = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    if (!action.isForFriend()) {
        return [];
    } else if (action.isForAll()) {
        return $gameParty.members();
    } else {
        return [$gameParty.members()[this._actorWindow.index()]];
    }
};

    /**
     * Returns true if the user (game actor) can use the item.
     * 
     * @returns {Boolean} 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.canUse = function() {
    return this.user().canUse(this.item()) && this.isItemEffectsValid();
};

    /**
     * Returns true if the item effects are valid on the target(the user).
     * 
     * @returns {Boolean} 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.isItemEffectsValid = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    return this.itemTargetActors().some(function(target) {
        return action.testApply(target);
    }, this);
};

/**
 * 
 */
Scene_ItemBase.prototype.applyItem = function() {
    var action = new Game_Action(this.user());
    action.setItemObject(this.item());
    this.itemTargetActors().forEach(function(target) {
        for (var i = 0; i < action.numRepeats(); i++) {
            action.apply(target);
        }
    }, this);
    action.applyGlobal();
};

    /**
     * Checks the common event set on the item.
     * 
     * @memberof Scene_ItemBase
     */
Scene_ItemBase.prototype.checkCommonEvent = function() {
    if ($gameTemp.isCommonEventReserved()) {
        SceneManager.goto(Scene_Map);
    }
};





/**
 * The scene class of the item screen.
 * @class Scene_Item
 * @extends {Scene_ItemBase}
 * 
 * @prop {Window_ItemCategory} _categoryWindow
 */
function Scene_Item() {
    this.initialize.apply(this, arguments);
}

Scene_Item.prototype = Object.create(Scene_ItemBase.prototype);
Scene_Item.prototype.constructor = Scene_Item;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Item.prototype.initialize = function() {
    Scene_ItemBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Item.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCategoryWindow();
    this.createItemWindow();
    this.createActorWindow();
};

    /**
     * Creates the category window on the
     * item scene.
     * @memberof Scene_Item
     */
Scene_Item.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = this._helpWindow.height;
    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._categoryWindow);
};

    /**
     * Creates the item window on the item
     * scene.
     * @memberof Scene_Item
     */
Scene_Item.prototype.createItemWindow = function() {
    var wy = this._categoryWindow.y + this._categoryWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};

/**
 * @returns {Game_Actor}
 */
Scene_Item.prototype.user = function() {
    var members = $gameParty.movableMembers();
    var bestActor = members[0];
    var bestPha = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].pha > bestPha) {
            bestPha = members[i].pha;
            bestActor = members[i];
        }
    }
    return bestActor;
};

    /**
     * Handler for when a cataegory is selected
     * on the item scene.
     * @memberof Scene_Item
     */
Scene_Item.prototype.onCategoryOk = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};

    /**
     * Handler for when an item is selected
     * on the item scene.
     * @memberof Scene_Item
     */
Scene_Item.prototype.onItemOk = function() {
    $gameParty.setLastItem(this.item());
    this.determineItem();
};

    /**
     * Handler for when an item selection
     * is canceled on the item scene.
     * @memberof Scene_Item
     */
Scene_Item.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    this._categoryWindow.activate();
};

    /**
     * Plays a sound effect when the
     * item is confirmed.
     * @memberof Scene_Item
     */
Scene_Item.prototype.playSeForItem = function() {
    SoundManager.playUseItem();
};

/**
 * 
 */
Scene_Item.prototype.useItem = function() {
    Scene_ItemBase.prototype.useItem.call(this);
    this._itemWindow.redrawCurrentItem();
};




/**
* The scene class of the skill screen.
 * @class Scene_Skill
 * @extends {Scene_ItemBase}
 * 
 * @prop {Window_SkillType} _skillTypeWindow
 */
function Scene_Skill() {
    this.initialize.apply(this, arguments);
}

Scene_Skill.prototype = Object.create(Scene_ItemBase.prototype);
Scene_Skill.prototype.constructor = Scene_Skill;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Skill.prototype.initialize = function() {
    Scene_ItemBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Skill.prototype.create = function() {
    Scene_ItemBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createSkillTypeWindow();
    this.createStatusWindow();
    this.createItemWindow();
    this.createActorWindow();
};

/**
 * 
 */
Scene_Skill.prototype.start = function() {
    Scene_ItemBase.prototype.start.call(this);
    this.refreshActor();
};

    /**
     * Creates the window for skill types
     * within the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.createSkillTypeWindow = function() {
    var wy = this._helpWindow.height;
    this._skillTypeWindow = new Window_SkillType(0, wy);
    this._skillTypeWindow.setHelpWindow(this._helpWindow);
    this._skillTypeWindow.setHandler('skill',    this.commandSkill.bind(this));
    this._skillTypeWindow.setHandler('cancel',   this.popScene.bind(this));
    this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._skillTypeWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._skillTypeWindow);
};

    /**
     * Creates the status window within
     * the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.createStatusWindow = function() {
    var wx = this._skillTypeWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

    /**
     * Creates the item window
     * within the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.createItemWindow = function() {
    var wx = 0;
    var wy = this._statusWindow.y + this._statusWindow.height;
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
};

/**
 * 
 */
Scene_Skill.prototype.refreshActor = function() {
    var actor = this.actor();
    this._skillTypeWindow.setActor(actor);
    this._statusWindow.setActor(actor);
    this._itemWindow.setActor(actor);
};

/**
 * @returns {Game_Actor}
 */
Scene_Skill.prototype.user = function() {
    return this.actor();
};

    /**
     * Handler for when a skill is
     * selected/confirmed within the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.commandSkill = function() {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
};

/**
 * 
 */
Scene_Skill.prototype.onItemOk = function() {
    this.actor().setLastMenuSkill(this.item());
    this.determineItem();
};

/**
 * 
 */
Scene_Skill.prototype.onItemCancel = function() {
    this._itemWindow.deselect();
    this._skillTypeWindow.activate();
};

    /**
     * Plays a sound effect on item
     * confirmation withiin the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.playSeForItem = function() {
    SoundManager.playUseSkill();
};

/**
 * 
 */
Scene_Skill.prototype.useItem = function() {
    Scene_ItemBase.prototype.useItem.call(this);
    this._statusWindow.refresh();
    this._itemWindow.refresh();
};

    /**
     * Handler for when an an actor is
     * changed within the skill scene.
     * @memberof Scene_Skill
     */
Scene_Skill.prototype.onActorChange = function() {
    this.refreshActor();
    this._skillTypeWindow.activate();
};





/**
 * The scene class of the equipment screen.
 * @class Scene_Equip
 * @extends Scene_MenuBase
 * 
 * @prop {Window_EquipStatus} _statusWindow
 * @prop {Window_EquipCommand} _commandWindow
 * @prop {Window_EquipSlot} _slotWindow
 * @prop {Window_EquipItem} _itemWindow
 */
function Scene_Equip() {
    this.initialize.apply(this, arguments);
}

Scene_Equip.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Equip.prototype.constructor = Scene_Equip;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Equip.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Equip.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createStatusWindow();
    this.createCommandWindow();
    this.createSlotWindow();
    this.createItemWindow();
    this.refreshActor();
};

    /**
     * Creates the status window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_EquipStatus(0, this._helpWindow.height);
    this.addWindow(this._statusWindow);
};

    /**
     * Creates the status window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.createCommandWindow = function() {
    var wx = this._statusWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - this._statusWindow.width;
    this._commandWindow = new Window_EquipCommand(wx, wy, ww);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('equip',    this.commandEquip.bind(this));
    this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
    this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
    this.addWindow(this._commandWindow);
};

    /**
     * Creates the slot window within the  equip scene.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.createSlotWindow = function() {
    var wx = this._statusWindow.width;
    var wy = this._commandWindow.y + this._commandWindow.height;
    var ww = Graphics.boxWidth - this._statusWindow.width;
    var wh = this._statusWindow.height - this._commandWindow.height;
    this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setStatusWindow(this._statusWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
    this.addWindow(this._slotWindow);
};


    /**
     * Creates the item window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.createItemWindow = function() {
    var wx = 0;
    var wy = this._statusWindow.y + this._statusWindow.height;
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_EquipItem(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setStatusWindow(this._statusWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._slotWindow.setItemWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
};

    /**
     * Refreshes the actor within the equip scene.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statusWindow.setActor(actor);
    this._slotWindow.setActor(actor);
    this._itemWindow.setActor(actor);
};

    /**
     * Handler for the equip command.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.commandEquip = function() {
    this._slotWindow.activate();
    this._slotWindow.select(0);
};

    /**
     * Handler for the optimize command.
     * 
     * @memberof Scene_Equip
     */
Scene_Equip.prototype.commandOptimize = function() {
    SoundManager.playEquip();
    this.actor().optimizeEquipments();
    this._statusWindow.refresh();
    this._slotWindow.refresh();
    this._commandWindow.activate();
};

/**
 * 
 */
Scene_Equip.prototype.commandClear = function() {
    SoundManager.playEquip();
    this.actor().clearEquipments();
    this._statusWindow.refresh();
    this._slotWindow.refresh();
    this._commandWindow.activate();
};

/**
 * 
 */
Scene_Equip.prototype.onSlotOk = function() {
    this._itemWindow.activate();
    this._itemWindow.select(0);
};

/**
 * 
 */
Scene_Equip.prototype.onSlotCancel = function() {
    this._slotWindow.deselect();
    this._commandWindow.activate();
};

/**
 * 
 */
Scene_Equip.prototype.onItemOk = function() {
    SoundManager.playEquip();
    this.actor().changeEquip(this._slotWindow.index(), this._itemWindow.item());
    this._slotWindow.activate();
    this._slotWindow.refresh();
    this._itemWindow.deselect();
    this._itemWindow.refresh();
    this._statusWindow.refresh();
};

/**
 * 
 */
Scene_Equip.prototype.onItemCancel = function() {
    this._slotWindow.activate();
    this._itemWindow.deselect();
};

/**
 * 
 */
Scene_Equip.prototype.onActorChange = function() {
    this.refreshActor();
    this._commandWindow.activate();
};





/**
 * The scene class of the status screen.
 * @class Scene_Status
 * @extends {Scene_MenuBase}
 * 
 * @prop {Window_Status} _statusWindow
 */
function Scene_Status() {
    this.initialize.apply(this, arguments);
}

Scene_Status.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Status.prototype.constructor = Scene_Status;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Status.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._statusWindow = new Window_Status();
    this._statusWindow.setHandler('cancel',   this.popScene.bind(this));
    this._statusWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._statusWindow.setHandler('pageup',   this.previousActor.bind(this));
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

/**
 * 
 */
Scene_Status.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this.refreshActor();
};

    /**
     * Refreshes the actor within the status scene.
     * 
     * @memberof Scene_Status
     */
Scene_Status.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statusWindow.setActor(actor);
};

    /**
     * Handler for when the actor is changed within the status scene.
     * 
     * @memberof Scene_Status
     */
Scene_Status.prototype.onActorChange = function() {
    this.refreshActor();
    this._statusWindow.activate();
};





/**
 * The scene class of the options screen.
 * @class Scene_Options
 * @extends {Scene_MenuBase}
 * 
 * @prop {Window_Options} _optionsWindow
 */
function Scene_Options() {
    this.initialize.apply(this, arguments);
}

Scene_Options.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Options.prototype.constructor = Scene_Options;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Options.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Options.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createOptionsWindow();
};

/**
 * 
 */
Scene_Options.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
    ConfigManager.save();
};

/**
 * 
 */
Scene_Options.prototype.createOptionsWindow = function() {
    this._optionsWindow = new Window_Options();
    this._optionsWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._optionsWindow);
};






/**
 * The superclass of {@link Scene_Save} and {@link Scene_Load}.
 * @class Scene_File
 * @extends {Scene_MenuBase}
 * @abstract
 * 
 * @prop {Window_SavefileList} _listWindow 
 */
function Scene_File() {
    this.initialize.apply(this, arguments);
}

Scene_File.prototype = Object.create(Scene_MenuBase.prototype);
Scene_File.prototype.constructor = Scene_File;

/**
 * オブジェクト生成時の初期化。
 */
Scene_File.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_File.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    DataManager.loadAllSavefileImages();
    this.createHelpWindow();
    this.createListWindow();
};

/**
 * 
 */
Scene_File.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._listWindow.refresh();
};

    /**
     * Returns the current savefileId.
     * 
     * @memberof Scene_File
     */
Scene_File.prototype.savefileId = function() {
    return this._listWindow.index() + 1;
};

/**
 * 
 */
Scene_File.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help(1);
    this._helpWindow.setText(this.helpWindowText());
    this.addWindow(this._helpWindow);
};

/**
 * 
 */
Scene_File.prototype.createListWindow = function() {
    var x = 0;
    var y = this._helpWindow.height;
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight - y;
    this._listWindow = new Window_SavefileList(x, y, width, height);
    this._listWindow.setHandler('ok',     this.onSavefileOk.bind(this));
    this._listWindow.setHandler('cancel', this.popScene.bind(this));
    this._listWindow.select(this.firstSavefileIndex());
    this._listWindow.setTopRow(this.firstSavefileIndex() - 2);
    this._listWindow.setMode(this.mode());
    this._listWindow.refresh();
    this.addWindow(this._listWindow);
};

    /**
     * The current mode of the scene;
     * the modes are 'save' or 'load'.
     * @memberof Scene_File
     */
Scene_File.prototype.mode = function() {
    return null;
};

/**
 * 
 */
Scene_File.prototype.activateListWindow = function() {
    this._listWindow.activate();
};

/**
 * @returns {String}
 */
Scene_File.prototype.helpWindowText = function() {
    return '';
};

    /**
     * Returns the index of the first
     * save file.
     * @returns {Number} 
     * @memberof Scene_File
     */
Scene_File.prototype.firstSavefileIndex = function() {
    return 0;
};

    /**
     * Handler for when a 
     * save file is selected within the file scene.
     * @memberof Scene_File
     */
Scene_File.prototype.onSavefileOk = function() {
};





/**
 * The scene class of the save screen.
 * @class Scene_Save
 * @extends {Scene_File}
 */
function Scene_Save() {
    this.initialize.apply(this, arguments);
}

Scene_Save.prototype = Object.create(Scene_File.prototype);
Scene_Save.prototype.constructor = Scene_Save;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Save.prototype.initialize = function() {
    Scene_File.prototype.initialize.call(this);
};

    /**
     * Returns the mode of the
     * save scene.
     * @returns {String} 
     * @memberof Scene_Save
     */
Scene_Save.prototype.mode = function() {
    return 'save';
};

/**
 * @returns {String}
 */
Scene_Save.prototype.helpWindowText = function() {
    return TextManager.saveMessage;
};

    /**
     * Returns the index of the first
     * save file within the save scene.
     * @returns {Number} 
     * @memberof Scene_Save
     */
Scene_Save.prototype.firstSavefileIndex = function() {
    return DataManager.lastAccessedSavefileId() - 1;
};

    /**
     * Handler for when a save file
     * is confirmed within the save scene.
     * @memberof Scene_Save
     */
Scene_Save.prototype.onSavefileOk = function() {
    Scene_File.prototype.onSavefileOk.call(this);
    $gameSystem.onBeforeSave();
    if (DataManager.saveGame(this.savefileId())) {
        this.onSaveSuccess();
    } else {
        this.onSaveFailure();
    }
};

    /**
     * Handler for when save is a success.
     * 
     * @memberof Scene_Save
     */
Scene_Save.prototype.onSaveSuccess = function() {
    SoundManager.playSave();
	StorageManager.cleanBackup(this.savefileId());
    this.popScene();
};

    /**
     * Handler for when save fails.
     * 
     * @memberof Scene_Save
     */
Scene_Save.prototype.onSaveFailure = function() {
    SoundManager.playBuzzer();
    this.activateListWindow();
};





/**
 * The scene class of the load screen.
 * @class Scene_Load
 * @extends {Scene_File}
 * 
 * @prop {Boolean} _loadSuccess
 */
function Scene_Load() {
    this.initialize.apply(this, arguments);
}

Scene_Load.prototype = Object.create(Scene_File.prototype);
Scene_Load.prototype.constructor = Scene_Load;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Load.prototype.initialize = function() {
    Scene_File.prototype.initialize.call(this);
    this._loadSuccess = false;
};

/**
 * 
 */
Scene_Load.prototype.terminate = function() {
    Scene_File.prototype.terminate.call(this);
    if (this._loadSuccess) {
        $gameSystem.onAfterLoad();
    }
};

    /**
     * Returns the mode of the
     * load scene.
     * @returns {String} 
     * @memberof Scene_Load
     */
Scene_Load.prototype.mode = function() {
    return 'load';
};

    /**
     * Returns the help window text on the
     * game load scene.
     * @returns {String} 
     * @memberof Scene_Load
     */
Scene_Load.prototype.helpWindowText = function() {
    return TextManager.loadMessage;
};

    /**
     * @returns {Number} 
     * @memberof Scene_Load
     */
Scene_Load.prototype.firstSavefileIndex = function() {
    return DataManager.latestSavefileId() - 1;
};

/**
 * 
 */
Scene_Load.prototype.onSavefileOk = function() {
    Scene_File.prototype.onSavefileOk.call(this);
    if (DataManager.loadGame(this.savefileId())) {
        this.onLoadSuccess();
    } else {
        this.onLoadFailure();
    }
};

/**
 * 
 */
Scene_Load.prototype.onLoadSuccess = function() {
    SoundManager.playLoad();
    this.fadeOutAll();
    this.reloadMapIfUpdated();
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
};

/**
 * 
 */
Scene_Load.prototype.onLoadFailure = function() {
    SoundManager.playBuzzer();
    this.activateListWindow();
};

/**
 * 
 */
Scene_Load.prototype.reloadMapIfUpdated = function() {
    if ($gameSystem.versionId() !== $dataSystem.versionId) {
        $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
        $gamePlayer.requestMapReload();
    }
};





/**
 * The scene class of the game end screen.
 * @class Scene_GameEnd
 * @extends {Scene_MenuBase}
 * 
 * @prop {Window_GameEnd} _commandWindow
 */
function Scene_GameEnd() {
    this.initialize.apply(this, arguments);
}

Scene_GameEnd.prototype = Object.create(Scene_MenuBase.prototype);
Scene_GameEnd.prototype.constructor = Scene_GameEnd;

/**
 * オブジェクト生成時の初期化。
 */
Scene_GameEnd.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_GameEnd.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
};

/**
 * 
 */
Scene_GameEnd.prototype.stop = function() {
    Scene_MenuBase.prototype.stop.call(this);
    this._commandWindow.close();
};

    /**
     * Creates the background for
     * the game end scene.
     * @memberof Scene_GameEnd
     */
Scene_GameEnd.prototype.createBackground = function() {
    Scene_MenuBase.prototype.createBackground.call(this);
    this.setBackgroundOpacity(128);
};

    /**
     * Creates the command window
     * for the game end screen.
     * @memberof Scene_GameEnd
     */
Scene_GameEnd.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_GameEnd();
    this._commandWindow.setHandler('toTitle',  this.commandToTitle.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

    /**
     * Handler for when to title
     * is clicked within the game end screen.
     * @memberof Scene_GameEnd
     */
Scene_GameEnd.prototype.commandToTitle = function() {
    this.fadeOutAll();
    SceneManager.goto(Scene_Title);
};





/**
 * The scene class of the shop screen.
 * @class Scene_Shop
 * @extends {Scene_MenuBase}
 * 
 * @prop {Array<Array<*>>} _goods
 * @prop {Boolean} _purchaseOnly
 * @prop {RPG.BaseItem} _item
 * @prop {Window_Gold} _goldWindow
 * @prop {Window_ShopCommand} _commandWindow
 * @prop {Window_Base} _dummyWindow
 * @prop {Window_ShopNumber} _numberWindow
 * @prop {Window_ShopStatus} _statusWindow
 * @prop {Window_ShopBuy} _buyWindow
 * @prop {Window_ItemCategory} _categoryWindow
 * @prop {Window_ShopSell} _sellWindow
 * @prop {Window_Help} _helpWindow
 */
function Scene_Shop() {
    this.initialize.apply(this, arguments);
}

Scene_Shop.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Shop.prototype.constructor = Scene_Shop;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Shop.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * @param  {Array<Array<*>>} goods
 * @param  {Boolean} purchaseOnly
 */
Scene_Shop.prototype.prepare = function(goods, purchaseOnly) {
    this._goods = goods;
    this._purchaseOnly = purchaseOnly;
    this._item = null;
};

/**
 * 
 */
Scene_Shop.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createGoldWindow();
    this.createCommandWindow();
    this.createDummyWindow();
    this.createNumberWindow();
    this.createStatusWindow();
    this.createBuyWindow();
    this.createCategoryWindow();
    this.createSellWindow();
};

    /**
     * Creates the gold window on the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, this._helpWindow.height);
    this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
    this.addWindow(this._goldWindow);
};

    /**
     * Creates the command window for buying or selling.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
    this._commandWindow.y = this._helpWindow.height;
    this._commandWindow.setHandler('buy',    this.commandBuy.bind(this));
    this._commandWindow.setHandler('sell',   this.commandSell.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

/**
 * 
 */
Scene_Shop.prototype.createDummyWindow = function() {
    var wy = this._commandWindow.y + this._commandWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._dummyWindow = new Window_Base(0, wy, Graphics.boxWidth, wh);
    this.addWindow(this._dummyWindow);
};

    /**
     * Creates the number input window on the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createNumberWindow = function() {
    var wy = this._dummyWindow.y;
    var wh = this._dummyWindow.height;
    this._numberWindow = new Window_ShopNumber(0, wy, wh);
    this._numberWindow.hide();
    this._numberWindow.setHandler('ok',     this.onNumberOk.bind(this));
    this._numberWindow.setHandler('cancel', this.onNumberCancel.bind(this));
    this.addWindow(this._numberWindow);
};

    /**
     * Creates the status window.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createStatusWindow = function() {
    var wx = this._numberWindow.width;
    var wy = this._dummyWindow.y;
    var ww = Graphics.boxWidth - wx;
    var wh = this._dummyWindow.height;
    this._statusWindow = new Window_ShopStatus(wx, wy, ww, wh);
    this._statusWindow.hide();
    this.addWindow(this._statusWindow);
};

    /**
     * Creates the buy window.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createBuyWindow = function() {
    var wy = this._dummyWindow.y;
    var wh = this._dummyWindow.height;
    this._buyWindow = new Window_ShopBuy(0, wy, wh, this._goods);
    this._buyWindow.setHelpWindow(this._helpWindow);
    this._buyWindow.setStatusWindow(this._statusWindow);
    this._buyWindow.hide();
    this._buyWindow.setHandler('ok',     this.onBuyOk.bind(this));
    this._buyWindow.setHandler('cancel', this.onBuyCancel.bind(this));
    this.addWindow(this._buyWindow);
};

    /**
     * Creates the category window.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_ItemCategory();
    this._categoryWindow.setHelpWindow(this._helpWindow);
    this._categoryWindow.y = this._dummyWindow.y;
    this._categoryWindow.hide();
    this._categoryWindow.deactivate();
    this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this.addWindow(this._categoryWindow);
};

    /**
     * Creates the sell window.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.createSellWindow = function() {
    var wy = this._categoryWindow.y + this._categoryWindow.height;
    var wh = Graphics.boxHeight - wy;
    this._sellWindow = new Window_ShopSell(0, wy, Graphics.boxWidth, wh);
    this._sellWindow.setHelpWindow(this._helpWindow);
    this._sellWindow.hide();
    this._sellWindow.setHandler('ok',     this.onSellOk.bind(this));
    this._sellWindow.setHandler('cancel', this.onSellCancel.bind(this));
    this._categoryWindow.setItemWindow(this._sellWindow);
    this.addWindow(this._sellWindow);
};

    /**
     * Activates the buy window within the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.activateBuyWindow = function() {
    this._buyWindow.setMoney(this.money());
    this._buyWindow.show();
    this._buyWindow.activate();
    this._statusWindow.show();
};

    /**
     * Activates the sell window within the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.activateSellWindow = function() {
    this._categoryWindow.show();
    this._sellWindow.refresh();
    this._sellWindow.show();
    this._sellWindow.activate();
    this._statusWindow.hide();
};

    /**
     * Handler for pressing buy within the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.commandBuy = function() {
    this._dummyWindow.hide();
    this.activateBuyWindow();
};

    /**
     * Handler for pressing sell within the shop scene.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.commandSell = function() {
    this._dummyWindow.hide();
    this._categoryWindow.show();
    this._categoryWindow.activate();
    this._sellWindow.show();
    this._sellWindow.deselect();
    this._sellWindow.refresh();
};

    /**
     * Handler for when buying is confirmed.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.onBuyOk = function() {
    this._item = this._buyWindow.item();
    this._buyWindow.hide();
    this._numberWindow.setup(this._item, this.maxBuy(), this.buyingPrice());
    this._numberWindow.setCurrencyUnit(this.currencyUnit());
    this._numberWindow.show();
    this._numberWindow.activate();
};

    /**
     * Handler for when buying is cancelled.
     * 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.onBuyCancel = function() {
    this._commandWindow.activate();
    this._dummyWindow.show();
    this._buyWindow.hide();
    this._statusWindow.hide();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
};

/**
 * 
 */
Scene_Shop.prototype.onCategoryOk = function() {
    this.activateSellWindow();
    this._sellWindow.select(0);
};

/**
 * 
 */
Scene_Shop.prototype.onCategoryCancel = function() {
    this._commandWindow.activate();
    this._dummyWindow.show();
    this._categoryWindow.hide();
    this._sellWindow.hide();
};

/**
 * 
 */
Scene_Shop.prototype.onSellOk = function() {
    this._item = this._sellWindow.item();
    this._categoryWindow.hide();
    this._sellWindow.hide();
    this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice());
    this._numberWindow.setCurrencyUnit(this.currencyUnit());
    this._numberWindow.show();
    this._numberWindow.activate();
    this._statusWindow.setItem(this._item);
    this._statusWindow.show();
};

/**
 * 
 */
Scene_Shop.prototype.onSellCancel = function() {
    this._sellWindow.deselect();
    this._categoryWindow.activate();
    this._statusWindow.setItem(null);
    this._helpWindow.clear();
};

/**
 * 
 */
Scene_Shop.prototype.onNumberOk = function() {
    SoundManager.playShop();
    switch (this._commandWindow.currentSymbol()) {
    case 'buy':
        this.doBuy(this._numberWindow.number());
        break;
    case 'sell':
        this.doSell(this._numberWindow.number());
        break;
    }
    this.endNumberInput();
    this._goldWindow.refresh();
    this._statusWindow.refresh();
};

/**
 * 
 */
Scene_Shop.prototype.onNumberCancel = function() {
    SoundManager.playCancel();
    this.endNumberInput();
};

/**
 * @param  {Number} number
 */
Scene_Shop.prototype.doBuy = function(number) {
    $gameParty.loseGold(number * this.buyingPrice());
    $gameParty.gainItem(this._item, number);
};

/**
 * @param  {Number} number
 */
Scene_Shop.prototype.doSell = function(number) {
    $gameParty.gainGold(number * this.sellingPrice());
    $gameParty.loseItem(this._item, number);
};

/**
 * 
 */
Scene_Shop.prototype.endNumberInput = function() {
    this._numberWindow.hide();
    switch (this._commandWindow.currentSymbol()) {
    case 'buy':
        this.activateBuyWindow();
        break;
    case 'sell':
        this.activateSellWindow();
        break;
    }
};

    /**
     * Returns the maximum number bought.
     * 
     * @returns {Number} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.maxBuy = function() {
    var max = $gameParty.maxItems(this._item) - $gameParty.numItems(this._item);
    var price = this.buyingPrice();
    if (price > 0) {
        return Math.min(max, Math.floor(this.money() / price));
    } else {
        return max;
    }
};

    /**
     * Returns the maximum number sold.
     * 
     * @returns {Number} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.maxSell = function() {
    return $gameParty.numItems(this._item);
};

    /**
     * Returns the player gold within
     * the shop scene.
     * @returns {Number} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.money = function() {
    return this._goldWindow.value();
};

    /**
     * Returns the currency unit of the
     * game within the shop scene.
     * @returns {String} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.currencyUnit = function() {
    return this._goldWindow.currencyUnit();
};

    /**
     * Returns the buying price for the current item.
     * 
     * @returns {Number} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.buyingPrice = function() {
    return this._buyWindow.price(this._item);
};

    /**
     * Returns the selling price for the current item.
     * 
     * @returns {Number} 
     * @memberof Scene_Shop
     */
Scene_Shop.prototype.sellingPrice = function() {
    return Math.floor(this._item.price / 2);
};




/**
 * The scene class of the name input screen.
 * @class Scene_Name
 * @extends {Scene_MenuBase}
 */
function Scene_Name() {
    this.initialize.apply(this, arguments);
}

Scene_Name.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Name.prototype.constructor = Scene_Name;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Name.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

    /**
     * Prepares the name input scene for giving the specified
     * actor at actorId a name with a maximum number of characters
     * given by maxLength.
     * @param {Number} actorId 
     * @param {Number} maxLength 
     * @memberof Scene_Name
     */
Scene_Name.prototype.prepare = function(actorId, maxLength) {
    this._actorId = actorId;
    this._maxLength = maxLength;
};

/**
 * 
 */
Scene_Name.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._actor = $gameActors.actor(this._actorId);
    this.createEditWindow();
    this.createInputWindow();
};

/**
 * 
 */
Scene_Name.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._editWindow.refresh();
};

    /**
     * Creates the edit window.
     * 
     * @memberof Scene_Name
     */
Scene_Name.prototype.createEditWindow = function() {
    this._editWindow = new Window_NameEdit(this._actor, this._maxLength);
    this.addWindow(this._editWindow);
};

    /**
     * Creates the input window.
     * 
     * @memberof Scene_Name
     */
Scene_Name.prototype.createInputWindow = function() {
    this._inputWindow = new Window_NameInput(this._editWindow);
    this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
    this.addWindow(this._inputWindow);
};

    /**
     * Handler for when ok is processed on the name input scene.
     * 
     * @memberof Scene_Name
     */
Scene_Name.prototype.onInputOk = function() {
    this._actor.setName(this._editWindow.name());
    this.popScene();
};





/**
 * The scene class of the debug screen.
 * @class Scene_Debug
 * @extends {Scene_MenuBase}
 */
function Scene_Debug() {
    this.initialize.apply(this, arguments);
}

Scene_Debug.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Debug.prototype.constructor = Scene_Debug;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Debug.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Debug.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createRangeWindow();
    this.createEditWindow();
    this.createDebugHelpWindow();
};

    /**
     * Creates the range window.
     * 
     * @memberof Scene_Debug
     */
Scene_Debug.prototype.createRangeWindow = function() {
    this._rangeWindow = new Window_DebugRange(0, 0);
    this._rangeWindow.setHandler('ok',     this.onRangeOk.bind(this));
    this._rangeWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._rangeWindow);
};

    /**
     * Creates the edit window.
     * 
     * @memberof Scene_Debug
     */
Scene_Debug.prototype.createEditWindow = function() {
    var wx = this._rangeWindow.width;
    var ww = Graphics.boxWidth - wx;
    this._editWindow = new Window_DebugEdit(wx, 0, ww);
    this._editWindow.setHandler('cancel', this.onEditCancel.bind(this));
    this._rangeWindow.setEditWindow(this._editWindow);
    this.addWindow(this._editWindow);
};

    /**
     * Creates the debug help .window.
     * 
     * @memberof Scene_Debug
     */
Scene_Debug.prototype.createDebugHelpWindow = function() {
    var wx = this._editWindow.x;
    var wy = this._editWindow.height;
    var ww = this._editWindow.width;
    var wh = Graphics.boxHeight - wy;
    this._debugHelpWindow = new Window_Base(wx, wy, ww, wh);
    this.addWindow(this._debugHelpWindow);
};

/**
 * 
 */
Scene_Debug.prototype.onRangeOk = function() {
    this._editWindow.activate();
    this._editWindow.select(0);
    this.refreshHelpWindow();
};

/**
 * 
 */
Scene_Debug.prototype.onEditCancel = function() {
    this._rangeWindow.activate();
    this._editWindow.deselect();
    this.refreshHelpWindow();
};

/**
 * 
 */
Scene_Debug.prototype.refreshHelpWindow = function() {
    this._debugHelpWindow.contents.clear();
    if (this._editWindow.active) {
        this._debugHelpWindow.drawTextEx(this.helpText(), 4, 0);
    }
};

    /**
     * Returns the help text within the 
     * debug scene.
     * @returns {String} 
     * @memberof Scene_Debug
     */
Scene_Debug.prototype.helpText = function() {
    if (this._rangeWindow.mode() === 'switch') {
        return 'Enter : ON / OFF';
    } else {
        return ('Left     :  -1\n' +
                'Right    :  +1\n' +
                'Pageup   : -10\n' +
                'Pagedown : +10');
    }
};




/**
 * The scene class of the battle screen.
 * @class Scene_Battle
 * @extends Scene_Base
 * 
 * @prop {Spriteset_Battle} _spriteset
 * @prop {Window_BattleStatus} _statusWindow
 * @prop {Window_PartyCommand} _partyCommandWindow
 * @prop {Window_ActorCommand} _actorCommandWindow
 * @prop {Window_BattleSkill} _skillWindow
 * @prop {Window_BattleItem} _itemWindow
 * @prop {Window_BattleActor} _actorWindow
 * @prop {Window_BattleEnemy} _enemyWindow
 * @prop {Window_BattleLog} _logWindow
 * @prop {Window_Help} _helpWindow
 * @prop {Window_Message} _messageWindow
 * @prop {Window_ScrollText} _scrollTextWindow
 */
function Scene_Battle() {
    this.initialize.apply(this, arguments);
}

Scene_Battle.prototype = Object.create(Scene_Base.prototype);
Scene_Battle.prototype.constructor = Scene_Battle;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Battle.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Battle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createDisplayObjects();
};

/**
 * 
 */
Scene_Battle.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
    BattleManager.playBattleBgm();
    BattleManager.startBattle();
};

/**
 * 
 */
Scene_Battle.prototype.update = function() {
    var active = this.isActive();
    $gameTimer.update(active);
    $gameScreen.update();
    this.updateStatusWindow();
    this.updateWindowPositions();
    if (active && !this.isBusy()) {
        this.updateBattleProcess();
    }
    Scene_Base.prototype.update.call(this);
};

/**
 * 
 */
Scene_Battle.prototype.updateBattleProcess = function() {
    if (!this.isAnyInputWindowActive() || BattleManager.isAborting() ||
            BattleManager.isBattleEnd()) {
        BattleManager.update();
        this.changeInputWindow();
    }
};

/**
 * @returns {Boolean}
 */
Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return (this._partyCommandWindow.active ||
            this._actorCommandWindow.active ||
            this._skillWindow.active ||
            this._itemWindow.active ||
            this._actorWindow.active ||
            this._enemyWindow.active);
};

/**
 * 
 */
Scene_Battle.prototype.changeInputWindow = function() {
    if (BattleManager.isInputting()) {
        if (BattleManager.actor()) {
            this.startActorCommandSelection();
        } else {
            this.startPartyCommandSelection();
        }
    } else {
        this.endCommandSelection();
    }
};

    /**
     * Stops the battle scene.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else {
        this.startFadeOut(this.fadeSpeed(), false);
    }
    this._statusWindow.close();
    this._partyCommandWindow.close();
    this._actorCommandWindow.close();
};

/**
 * 
 */
Scene_Battle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    $gameParty.onBattleEnd();
    $gameTroop.onBattleEnd();
    AudioManager.stopMe();

    ImageManager.clearRequest();
};

    /**
     * Returns true if the battle needs a slow fade out.
     * 
     * @returns {Boolean} 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.needsSlowFadeOut = function() {
    return (SceneManager.isNextScene(Scene_Title) ||
            SceneManager.isNextScene(Scene_Gameover));
};

    /**
     * Updates the status window on the battle scene.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.updateStatusWindow = function() {
    if ($gameMessage.isBusy()) {
        this._statusWindow.close();
        this._partyCommandWindow.close();
        this._actorCommandWindow.close();
    } else if (this.isActive() && !this._messageWindow.isClosing()) {
        this._statusWindow.open();
    }
};

    /**
     * Updates the position of the battle scene windows.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.updateWindowPositions = function() {
    var statusX = 0;
    if (BattleManager.isInputting()) {
        statusX = this._partyCommandWindow.width;
    } else {
        statusX = this._partyCommandWindow.width / 2;
    }
    if (this._statusWindow.x < statusX) {
        this._statusWindow.x += 16;
        if (this._statusWindow.x > statusX) {
            this._statusWindow.x = statusX;
        }
    }
    if (this._statusWindow.x > statusX) {
        this._statusWindow.x -= 16;
        if (this._statusWindow.x < statusX) {
            this._statusWindow.x = statusX;
        }
    }
};

    /**
     * Creates all the display objects including:
     * the spritesheet, window layer, windows, and more.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    this.createWindowLayer();
    this.createAllWindows();
    BattleManager.setLogWindow(this._logWindow);
    BattleManager.setStatusWindow(this._statusWindow);
    BattleManager.setSpriteset(this._spriteset);
    this._logWindow.setSpriteset(this._spriteset);
};

    /**
     * Creates the spriteset within
     * the battle scene. This includes
     * sprites for actors, enemies, etc.
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createSpriteset = function() {
    this._spriteset = new Spriteset_Battle();
    this.addChild(this._spriteset);
};

    /**
     * Creates all the windows within the
     * battle scene.
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createAllWindows = function() {
    this.createLogWindow();
    this.createStatusWindow();
    this.createPartyCommandWindow();
    this.createActorCommandWindow();
    this.createHelpWindow();
    this.createSkillWindow();
    this.createItemWindow();
    this.createActorWindow();
    this.createEnemyWindow();
    this.createMessageWindow();
    this.createScrollTextWindow();
};

    /**
     * Creates the log window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createLogWindow = function() {
    this._logWindow = new Window_BattleLog();
    this.addWindow(this._logWindow);
};

/**
 * 
 */
Scene_Battle.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_BattleStatus();
    this.addWindow(this._statusWindow);
};

/**
 * 
 */
Scene_Battle.prototype.createPartyCommandWindow = function() {
    this._partyCommandWindow = new Window_PartyCommand();
    this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));
    this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this._partyCommandWindow.deselect();
    this.addWindow(this._partyCommandWindow);
};

    /**
     * Creates the actor command window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this.addWindow(this._actorCommandWindow);
};

    /**
     * Creates the help window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};

    /**
     * Creates the skill window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createSkillWindow = function() {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = this._statusWindow.y - wy;
    this._skillWindow = new Window_BattleSkill(0, wy, Graphics.boxWidth, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};

    /**
     * Creates the item window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createItemWindow = function() {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = this._statusWindow.y - wy;
    this._itemWindow = new Window_BattleItem(0, wy, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

    /**
     * Creates the actor window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createActorWindow = function() {
    this._actorWindow = new Window_BattleActor(0, this._statusWindow.y);
    this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
    this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
    this.addWindow(this._actorWindow);
};

    /**
     * Creates the enemy window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createEnemyWindow = function() {
    this._enemyWindow = new Window_BattleEnemy(0, this._statusWindow.y);
    this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width;
    this._enemyWindow.setHandler('ok',     this.onEnemyOk.bind(this));
    this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
    this.addWindow(this._enemyWindow);
};

    /**
     * Creates the message window on the battle scene.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createMessageWindow = function() {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function(window) {
        this.addWindow(window);
    }, this);
};

    /**
     * Creates the scroll text window.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.createScrollTextWindow = function() {
    this._scrollTextWindow = new Window_ScrollText();
    this.addWindow(this._scrollTextWindow);
};

/**
 * 
 */
Scene_Battle.prototype.refreshStatus = function() {
    this._statusWindow.refresh();
};

/**
 * 
 */
Scene_Battle.prototype.startPartyCommandSelection = function() {
    this.refreshStatus();
    this._statusWindow.deselect();
    this._statusWindow.open();
    this._actorCommandWindow.close();
    this._partyCommandWindow.setup();
};

    /**
     * Handler for the fight command on battle start..
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandFight = function() {
    this.selectNextCommand();
};

    /**
     * Handler for the escape command on battle start.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandEscape = function() {
    BattleManager.processEscape();
    this.changeInputWindow();
};

/**
 * 
 */
Scene_Battle.prototype.startActorCommandSelection = function() {
    this._statusWindow.select(BattleManager.actor().index());
    this._partyCommandWindow.close();
    this._actorCommandWindow.setup(BattleManager.actor());
};

    /**
     * Handler for the attack command.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandAttack = function() {
    BattleManager.inputtingAction().setAttack();
    this.selectEnemySelection();
};

    /**
     * Handler for the skill command.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandSkill = function() {
    this._skillWindow.setActor(BattleManager.actor());
    this._skillWindow.setStypeId(this._actorCommandWindow.currentExt());
    this._skillWindow.refresh();
    this._skillWindow.show();
    this._skillWindow.activate();
};

    /**
     * Handler for the guard command.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandGuard = function() {
    BattleManager.inputtingAction().setGuard();
    this.selectNextCommand();
};

    /**
     * Handler for the item command.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.commandItem = function() {
    this._itemWindow.refresh();
    this._itemWindow.show();
    this._itemWindow.activate();
};

    /**
     * Selects the next command in the battle scene.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.selectNextCommand = function() {
    BattleManager.selectNextCommand();
    this.changeInputWindow();
};

    /**
     * Selects the previous command in the battle scene.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.selectPreviousCommand = function() {
    BattleManager.selectPreviousCommand();
    this.changeInputWindow();
};

/**
 * 
 */
Scene_Battle.prototype.selectActorSelection = function() {
    this._actorWindow.refresh();
    this._actorWindow.show();
    this._actorWindow.activate();
};

/**
 * 
 */
Scene_Battle.prototype.onActorOk = function() {
    var action = BattleManager.inputtingAction();
    action.setTarget(this._actorWindow.index());
    this._actorWindow.hide();
    this._skillWindow.hide();
    this._itemWindow.hide();
    this.selectNextCommand();
};

/**
 * 
 */
Scene_Battle.prototype.onActorCancel = function() {
    this._actorWindow.hide();
    switch (this._actorCommandWindow.currentSymbol()) {
    case 'skill':
        this._skillWindow.show();
        this._skillWindow.activate();
        break;
    case 'item':
        this._itemWindow.show();
        this._itemWindow.activate();
        break;
    }
};

/**
 * 
 */
Scene_Battle.prototype.selectEnemySelection = function() {
    this._enemyWindow.refresh();
    this._enemyWindow.show();
    this._enemyWindow.select(0);
    this._enemyWindow.activate();
};

    /**
     * Handler for when an enemy is selected.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.onEnemyOk = function() {
    var action = BattleManager.inputtingAction();
    action.setTarget(this._enemyWindow.enemyIndex());
    this._enemyWindow.hide();
    this._skillWindow.hide();
    this._itemWindow.hide();
    this.selectNextCommand();
};

/**
 * 
 */
Scene_Battle.prototype.onEnemyCancel = function() {
    this._enemyWindow.hide();
    switch (this._actorCommandWindow.currentSymbol()) {
    case 'attack':
        this._actorCommandWindow.activate();
        break;
    case 'skill':
        this._skillWindow.show();
        this._skillWindow.activate();
        break;
    case 'item':
        this._itemWindow.show();
        this._itemWindow.activate();
        break;
    }
};

    /**
     * Handler for when a skill is selected.
     * 
     * @memberof Scene_Battle
     */
Scene_Battle.prototype.onSkillOk = function() {
    var skill = this._skillWindow.item();
    var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);
    BattleManager.actor().setLastBattleSkill(skill);
    this.onSelectAction();
};

/**
 * 
 */
Scene_Battle.prototype.onSkillCancel = function() {
    this._skillWindow.hide();
    this._actorCommandWindow.activate();
};

/**
 * 
 */
Scene_Battle.prototype.onItemOk = function() {
    var item = this._itemWindow.item();
    var action = BattleManager.inputtingAction();
    action.setItem(item.id);
    $gameParty.setLastItem(item);
    this.onSelectAction();
};

/**
 * 
 */
Scene_Battle.prototype.onItemCancel = function() {
    this._itemWindow.hide();
    this._actorCommandWindow.activate();
};

/**
 * 
 */
Scene_Battle.prototype.onSelectAction = function() {
    var action = BattleManager.inputtingAction();
    this._skillWindow.hide();
    this._itemWindow.hide();
    if (!action.needsSelection()) {
        this.selectNextCommand();
    } else if (action.isForOpponent()) {
        this.selectEnemySelection();
    } else {
        this.selectActorSelection();
    }
};

/**
 * 
 */
Scene_Battle.prototype.endCommandSelection = function() {
    this._partyCommandWindow.close();
    this._actorCommandWindow.close();
    this._statusWindow.deselect();
};





/**
 * The scene class of the game over screen.
 * @class Scene_Gameover
 * @extends {Scene_Base}
 * 
 * @prop {Sprite} _backSprite
 */
function Scene_Gameover() {
    this.initialize.apply(this, arguments);
}

Scene_Gameover.prototype = Object.create(Scene_Base.prototype);
Scene_Gameover.prototype.constructor = Scene_Gameover;

/**
 * オブジェクト生成時の初期化。
 */
Scene_Gameover.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

/**
 * 
 */
Scene_Gameover.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.playGameoverMusic();
    this.createBackground();
};

/**
 * 
 */
Scene_Gameover.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.slowFadeSpeed(), false);
};

/**
 * 
 */
Scene_Gameover.prototype.update = function() {
    if (this.isActive() && !this.isBusy() && this.isTriggered()) {
        this.gotoTitle();
    }
    Scene_Base.prototype.update.call(this);
};

/**
 * 
 */
Scene_Gameover.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.fadeOutAll();
};

/**
 * 
 */
Scene_Gameover.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    AudioManager.stopAll();
};

    /**
     * Plays the game over music
     * within the game over scene.
     * @memberof Scene_Gameover
     */
Scene_Gameover.prototype.playGameoverMusic = function() {
    AudioManager.stopBgm();
    AudioManager.stopBgs();
    AudioManager.playMe($dataSystem.gameoverMe);
};

    /**
     * Creates the background of
     * the game over scene.
     * @memberof Scene_Gameover
     */
Scene_Gameover.prototype.createBackground = function() {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadSystem('GameOver');
    this.addChild(this._backSprite);
};

/**
 * 
 */
Scene_Gameover.prototype.isTriggered = function() {
    return Input.isTriggered('ok') || TouchInput.isTriggered();
};

    /**
     * Returns to the title scene (Scene_Title).
     * @memberof Scene_Gameover
     */
Scene_Gameover.prototype.gotoTitle = function() {
    SceneManager.goto(Scene_Title);
};
