//=============================================================================
// rpg_windows.js v1.5.2
//=============================================================================


/**
 * The superclass of {@link Window_EquipStatus}, {@link Window_Gold}, {@link Window_Help}, {@link Window_MapName}, {@link Window_Message}, {@link Window_NameEdit}, {@link Window_ScrollText}, {@link Window_ShopStatus}, {@link Window_SkillStatus} and {@link Window_Selectable}
 * @class Window_Base
 * @extends Window
 * @abstract
 * 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @param {Number} height 
   * 
   * @param {Number} _iconWidth The standard icon width. default : 32
   * @param {Number} _iconHeight The standard icon height. default : 32
   * @param {Number} _faceWidth The standard face width. default : 144
   * @param {Number} _faceHeight The standard face height. default : 144
   * @param {Boolean} _opening The opening property; determines if
   * the window is opening.
   * @param {Boolean} _closing The closing property; determines if
   * the window is closing.
 */
function Window_Base() {
    this.initialize.apply(this, arguments);
}

Window_Base.prototype = Object.create(Window.prototype);
Window_Base.prototype.constructor = Window_Base;

  /**
   * オブジェクト生成時の初期化。
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @param {Number} height 
   * @memberof Window_Base
   */
Window_Base.prototype.initialize = function(x, y, width, height) {
    Window.prototype.initialize.call(this);
    this.loadWindowskin();
    this.move(x, y, width, height);
    this.updatePadding();
    this.updateBackOpacity();
    this.updateTone();
    this.createContents();
    this._opening = false;
    this._closing = false;
    this._dimmerSprite = null;
};

Window_Base._iconWidth  = 32;
Window_Base._iconHeight = 32;
Window_Base._faceWidth  = 144;
Window_Base._faceHeight = 144;

  /**
   * Returns the standard line height of the current window;
   * default is 36.
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.lineHeight = function() {
    return 36;
};

  /**
   * Returns the standard font face of the 
   * game based on what language the game is in.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
        return 'SimHei, Heiti TC, sans-serif';
    } else if ($gameSystem.isKorean()) {
        return 'Dotum, AppleGothic, sans-serif';
    } else {
        return 'GameFont';
    }
};

  /**
   * Returns the standard font size of the text
   * in window; default is 28.
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.standardFontSize = function() {
    return 28;
};

  /**
   * Returns the standard padding of the window;
   * default is 18.
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.standardPadding = function() {
    return 18;
};

  /**
   * Returns the text padding of the window;
   * default is 6.
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.textPadding = function() {
    return 6;
};

  /**
   * Returns the standard back opacity of the window; this is the
   * opacity of the area behind the window's text content.
   * Default is 192.
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.standardBackOpacity = function() {
    return 192;
};

  /**
   * Loads the window skin from the img/system directory.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem('Window');
};

  /**
   * Updates the window padding based on the 
   * standardPadding method.
   * @memberof Window_Base
   */
Window_Base.prototype.updatePadding = function() {
    this.padding = this.standardPadding();
};

  /**
   * Returns the inner content width of the window.
   * 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.updateBackOpacity = function() {
    this.backOpacity = this.standardBackOpacity();
};

  /**
   * Returns the inner content width of the window.
   * 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.contentsWidth = function() {
    return this.width - this.standardPadding() * 2;
};

  /**
   * Returns the inner content height of the window.
   * 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.contentsHeight = function() {
    return this.height - this.standardPadding() * 2;
};

  /**
   * Returns the fitting height given a number of lines based on
   * the line height plus standard padding of the window.
   * Default formula: numLines * lineHeight + standardPadding * 2
   *
   * @param {Number} numLines 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.fittingHeight = function(numLines) {
    return numLines * this.lineHeight() + this.standardPadding() * 2;
};

  /**
   * Updates the tone of the window based on the
   * game system window tone defined in the database.
   * @memberof Window_Base
   */
Window_Base.prototype.updateTone = function() {
    var tone = $gameSystem.windowTone();
    this.setTone(tone[0], tone[1], tone[2]);
};

  /**
   * Creates the contents of the window; this is the area
   * of the window which text is drawn to.
   * @memberof Window_Base
   */
Window_Base.prototype.createContents = function() {
    this.contents = new Bitmap(this.contentsWidth(), this.contentsHeight());
    this.resetFontSettings();
};

  /**
   * Resets the font settings of the window back to the
   * default.
   * @memberof Window_Base
   */
Window_Base.prototype.resetFontSettings = function() {
    this.contents.fontFace = this.standardFontFace();
    this.contents.fontSize = this.standardFontSize();
    this.resetTextColor();
};

  /**
   * Resets the text color of the window back to the
   * default.
   * @memberof Window_Base
   */
Window_Base.prototype.resetTextColor = function() {
    this.changeTextColor(this.normalColor());
};

  /**
   * The update method of the window; this is
   * run every frame to do logic processing for the window.
   * @memberof Window_Base
   */
Window_Base.prototype.update = function() {
    Window.prototype.update.call(this);
    this.updateTone();
    this.updateOpen();
    this.updateClose();
    this.updateBackgroundDimmer();
};

  /**
   * Updates the openness of the window when the
   * _opening property is set to true.
   * Openness is increased.
   * @memberof Window_Base
   */
Window_Base.prototype.updateOpen = function() {
    if (this._opening) {
        this.openness += 32;
        if (this.isOpen()) {
            this._opening = false;
        }
    }
};

  /**
   * Updates the openness of the window when the 
   * _closing property is set to true.
   * Openness is decreased.
   * @memberof Window_Base
   */
Window_Base.prototype.updateClose = function() {
    if (this._closing) {
        this.openness -= 32;
        if (this.isClosed()) {
            this._closing = false;
        }
    }
};

  /**
   * Opens the window.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.open = function() {
    if (!this.isOpen()) {
        this._opening = true;
    }
    this._closing = false;
};

  /**
   * Closes the window.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.close = function() {
    if (!this.isClosed()) {
        this._closing = true;
    }
    this._opening = false;
};

  /**
   * Returns true if the window is currently opening.
   *
   * @returns {Boolean} 
   * @memberof Window_Base
   */
Window_Base.prototype.isOpening = function() {
    return this._opening;
};

  /**
   * Returns true if the window is currently closing.
   * 
   * @returns {Boolean} 
   * @memberof Window_Base
   */
Window_Base.prototype.isClosing = function() {
    return this._closing;
};

  /**
   * Shows the window, making it visible.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.show = function() {
    this.visible = true;
};

  /**
   * Hides the window, making it invisible;
   * the window is not closed when hidden.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.hide = function() {
    this.visible = false;
};

  /**
   * Activates the window, allowing it to be processed
   * and to update.
   * @memberof Window_Base
   */
Window_Base.prototype.activate = function() {
    this.active = true;
};

  /**
   * Deactives the window, preventing further processing.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.deactivate = function() {
    this.active = false;
};

  /**
   * Returns a text color given a numbered index
   * as a css color string; this index maps
   * directly to the img/system/window.png colors
   * by default.
   * @param {Number} n 
   * @returns {*} 
   * @memberof Window_Base
   */
Window_Base.prototype.textColor = function(n) {
    var px = 96 + (n % 8) * 12 + 6;
    var py = 144 + Math.floor(n / 8) * 12 + 6;
    return this.windowskin.getPixel(px, py);
};

  /**
   * Returns the normal color as a css
   * color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.normalColor = function() {
    return this.textColor(0);
};

  /**
   * Returns the system color as a
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.systemColor = function() {
    return this.textColor(16);
};

  /**
   * Returns the crisis color as a 
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.crisisColor = function() {
    return this.textColor(17);
};

  /**
   * Returns the death color as a 
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.deathColor = function() {
    return this.textColor(18);
};

  /**
   * Returns the gauage back color as 
   * a css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(19);
};

  /**
   * Returns the hp gauge color 1 
   * as a css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(20);
};

  /**
   * Returns the hp gauge color 2 
   * as a css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(21);
};

  /**
   * Returns the mp gauge color 1
   * as a css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(22);
};

  /**
   * Returns the mp gauge color 2
   * as a css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(23);
};

  /**
   * Returns the mp cost color as a
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.mpCostColor = function() {
    return this.textColor(23);
};

  /**
   * Returns the power up color as a
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.powerUpColor = function() {
    return this.textColor(24);
};

  /**
   * Returns the power down color as a 
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.powerDownColor = function() {
    return this.textColor(25);
};

  /**
   * Returns the tp gauge color 1 as a 
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(28);
};

  /**
   * Returns tp gauge color 2 as a
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(29);
};

  /**
   * Returns the tp cost color as a 
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.tpCostColor = function() {
    return this.textColor(29);
};

  /**
   * Returns the pending color as a
   * css color string.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.pendingColor = function() {
    return this.windowskin.getPixel(120, 120);
};

  /**
   * Returns the translucentOpacity for the window;
   * The default is 160.
   * 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.translucentOpacity = function() {
    return 160;
};

  /**
   * Changes the text color property given a css color string.
   * 
   * @param {String} color 
   * @memberof Window_Base
   */
Window_Base.prototype.changeTextColor = function(color) {
    this.contents.textColor = color;
};

  /**
   * Changes the paintOpacity (the opacity of the text drawn to the window);
   * if true the opacity is set to 255, otherwise the opacity is set to 160.
   * @param {Boolean} enabled 
   * @memberof Window_Base
   */
Window_Base.prototype.changePaintOpacity = function(enabled) {
    this.contents.paintOpacity = enabled ? 255 : this.translucentOpacity();
};

  /**
   * Given text or a number, draws the content to the window's contents
   * layer at the specified x and y coordinate within the max width.
   * The text content can also be aligned with the align property.
   * The possible alignments are: "left", "center", "right".
   * @param {(string | number)} text 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} maxWidth 
   * @param {String} align 
   * @memberof Window_Base
   */
Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
    this.contents.drawText(text, x, y, maxWidth, this.lineHeight(), align);
};

  /**
   * Calculates the width of a text string and
   * returns a number.
   * @param {String} text 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.textWidth = function(text) {
    return this.contents.measureTextWidth(text);
};

  /**
   * Draws text with text codes included; this will draw
   * icons, increase text height, and more.
   * @param {String} text 
   * @param {Number} x 
   * @param {Number} y 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.drawTextEx = function(text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};

  /**
   * Converts the escape characters and returns the text content
   * after processing the characters.
   * @param {String} text 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
    return text;
};

  /**
   * Returns the actor name given an index;
   * the index starts from 1.
   * @param {Number} actorIndex 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.actorName = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.name() : '';
};

  /**
   * Returns a party member name given an index;
   * the index starts from 1.
   * @param {Number} partyMemberIndex 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.partyMemberName = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.name() : '';
};

  /**
   * Process each character in the text when drawTextEx
   * is used to draw text.
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processCharacter = function(textState) {
    switch (textState.text[textState.index]) {
    case '\n':
        this.processNewLine(textState);
        break;
    case '\f':
        this.processNewPage(textState);
        break;
    case '\x1b':
        this.processEscapeCharacter(this.obtainEscapeCode(textState), textState);
        break;
    default:
        this.processNormalCharacter(textState);
        break;
    }
};

  /**
   * Processes the normal characters in the text
   * when drawTextEx is used to draw text.
   * Normal characters are letters and numbers.
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processNormalCharacter = function(textState) {
    var c = textState.text[textState.index++];
    var w = this.textWidth(c);
    this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
    textState.x += w;
};

  /**
   * Processes new line when drawTextEx is used to draw text.
   * 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processNewLine = function(textState) {
    textState.x = textState.left;
    textState.y += textState.height;
    textState.height = this.calcTextHeight(textState, false);
    textState.index++;
};

  /**
   * Processes new page when drawTexttEx is used to draw text.
   * 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processNewPage = function(textState) {
    textState.index++;
};

  /**
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.obtainEscapeCode = function(textState) {
    textState.index++;
    var regExp = /^[\$\.\|\^!><\{\}\\]|^[A-Z]+/i;
    var arr = regExp.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return arr[0].toUpperCase();
    } else {
        return '';
    }
};

  /**
   * Obtains the escape parameters from text codes in the text state
   * when drawTextEx is used to draw text.
   * @param {MV.TextState} textState 
   * @returns {(number | string)} 
   * @memberof Window_Base
   */
Window_Base.prototype.obtainEscapeParam = function(textState) {
    var arr = /^\[\d+\]/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return parseInt(arr[0].slice(1));
    } else {
        return '';
    }
};

  /**
   * Processes escape characters when drawTextEx is used 
   * for drawing text.
   * @param {String} code 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case 'C':
        this.changeTextColor(this.textColor(this.obtainEscapeParam(textState)));
        break;
    case 'I':
        this.processDrawIcon(this.obtainEscapeParam(textState), textState);
        break;
    case '{':
        this.makeFontBigger();
        break;
    case '}':
        this.makeFontSmaller();
        break;
    }
};

  /**
   * Processes drawing an icon when drawTextEx is used for
   * drawing text.
   * @param {Number} iconIndex 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
Window_Base.prototype.processDrawIcon = function(iconIndex, textState) {
    this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
    textState.x += Window_Base._iconWidth + 4;
};

  /**
   * Makes the font bigger by a value of 12.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.makeFontBigger = function() {
    if (this.contents.fontSize <= 96) {
        this.contents.fontSize += 12;
    }
};

  /**
   * Makes the font smaller by a value of 12.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.makeFontSmaller = function() {
    if (this.contents.fontSize >= 24) {
        this.contents.fontSize -= 12;
    }
};

  /**
   * Calculates the text height of the textState (when using drawTextEx);
   * if all is set to true, all lines of text are calculated, otherwise
   * only a single line is processed.
   * @param {MV.TextState} textState 
   * @param {Boolean} all 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.calcTextHeight = function(textState, all) {
    var lastFontSize = this.contents.fontSize;
    var textHeight = 0;
    var lines = textState.text.slice(textState.index).split('\n');
    var maxLines = all ? lines.length : 1;

    for (var i = 0; i < maxLines; i++) {
        var maxFontSize = this.contents.fontSize;
        var regExp = /\x1b[\{\}]/g;
        for (;;) {
            var array = regExp.exec(lines[i]);
            if (array) {
                if (array[0] === '\x1b{') {
                    this.makeFontBigger();
                }
                if (array[0] === '\x1b}') {
                    this.makeFontSmaller();
                }
                if (maxFontSize < this.contents.fontSize) {
                    maxFontSize = this.contents.fontSize;
                }
            } else {
                break;
            }
        }
        textHeight += maxFontSize + 8;
    }

    this.contents.fontSize = lastFontSize;
    return textHeight;
};

  /**
   * Draws an icon given the specified iconIndex at the specified
   * x and y coordinates. The Width and Height of the icon is based on the
   * _iconWidth and _iconHeight properties.
   * @param {Number} iconIndex 
   * @param {Number} x 
   * @param {Number} y 
   * @memberof Window_Base
   */
Window_Base.prototype.drawIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
};

/**
 * @param  {String} faceName
 * @param  {Number} faceIndex
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} [width]
 * @param  {Number} [height]
 */
Window_Base.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    var bitmap = ImageManager.loadFace(faceName);
    var pw = Window_Base._faceWidth;
    var ph = Window_Base._faceHeight;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    var sx = faceIndex % 4 * pw + (pw - sw) / 2;
    var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
};

  /**
   * Draws a character (map sprites) at the specified x and y coordinate.
   * CharacterName refers to character spritesheet, and characterIndex refers
   * to the characterIndex on the spritesheet.
   * @param {String} characterName 
   * @param {Number} characterIndex 
   * @param {Number} x 
   * @param {Number} y 
   * @memberof Window_Base
   */
Window_Base.prototype.drawCharacter = function(characterName, characterIndex, x, y) {
    var bitmap = ImageManager.loadCharacter(characterName);
    var big = ImageManager.isBigCharacter(characterName);
    var pw = bitmap.width / (big ? 3 : 12);
    var ph = bitmap.height / (big ? 4 : 8);
    var n = characterIndex;
    var sx = (n % 4 * 3 + 1) * pw;
    var sy = (Math.floor(n / 4) * 4) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

  /**
   * Draws a gauge at the specified x and y coordinates within the given width.
   * Color1 and Color2 represent the gradient as css color strings of the gauge.
   * 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @param {Number} rate 
   * @param {String} color1 
   * @param {String} color2 
   * @memberof Window_Base
   */
Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 8;
    this.contents.fillRect(x, gaugeY, width, 6, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, 6, color1, color2);
};

  /**
   * Returns the hp color as a css string.
   * 
   * @param {Game_Actor} actor 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.hpColor = function(actor) {
    if (actor.isDead()) {
        return this.deathColor();
    } else if (actor.isDying()) {
        return this.crisisColor();
    } else {
        return this.normalColor();
    }
};

  /**
   * Returns the mp color as a css color string.
   * 
   * @param {Game_Actor} actor 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.mpColor = function(actor) {
    return this.normalColor();
};

  /**
   * Returns the tp color as a css color string.
   * 
   * @param {Game_Actor} actor 
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.tpColor = function(actor) {
    return this.normalColor();
};

/**
 * @param  {Game_Actor} actor
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Base.prototype.drawActorCharacter = function(actor, x, y) {
    this.drawCharacter(actor.characterName(), actor.characterIndex(), x, y);
};

  /**
   * Draws the actor face at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @param {Number} height 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorFace = function(actor, x, y, width, height) {
    this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
};

  /**
   * Draws the actor name at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorName = function(actor, x, y, width) {
    width = width || 168;
    this.changeTextColor(this.hpColor(actor));
    this.drawText(actor.name(), x, y, width);
};

  /**
   * Draws the actor class at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
    width = width || 168;
    this.resetTextColor();
    this.drawText(actor.currentClass().name, x, y, width);
};

  /**
   * Draws the actor nickname at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorNickname = function(actor, x, y, width) {
    width = width || 270;
    this.resetTextColor();
    this.drawText(actor.nickname(), x, y, width);
};

  /**
   * Draws the actor level at the specified x and y coordinates.
   * 
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 84, y, 36, 'right');
};

  /**
   * Draws the actor icons at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

  /**
   * Draws the current and max number at the specified x and y coordinate
   * within the given width. Color1 represents the current number and color2
   * represents the max number when the text is drawn.
   * @param {Number} current 
   * @param {Number} max 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @param {String} color1 
   * @param {String} color2 
   * @memberof Window_Base
   */
Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth('0000');
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(current, x3, y, valueWidth, 'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(max, x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(current, x1, y, valueWidth, 'right');
    }
};

  /**
   * Draws the actor hp at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
};

  /**
   * Draws the actor mp at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
    this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.mpA, x, y, 44);
    this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                           this.mpColor(actor), this.normalColor());
};

  /**
   * Draws the actor tp at the specified x and y coordinates within the
   * given width.
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(actor.tp, x + width - 64, y, 64, 'right');
};

  /**
   * Draws a simple status for the game actor passed into the method at the
   * specified x and y coordinates within the given width.
   * 
   * @param {Game_Actor} actor 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};

  /**
   * Draws the item name at the specified x and y coordinates within
   * the given width.
   * @param {RPG.BaseItem} item 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

  /**
   * Draws the currency value given at the specified x and y coordinates within
   * the width given. Useful if you want to write your own custom currency value.
   * @param {Number} value 
   * @param {String} unit 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} width 
   * @memberof Window_Base
   */
Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    var unitWidth = Math.min(80, this.textWidth(unit));
    this.resetTextColor();
    this.drawText(value, x, y, width - unitWidth - 6, 'right');
    this.changeTextColor(this.systemColor());
    this.drawText(unit, x + width - unitWidth, y, unitWidth, 'right');
};

  /**
   * Changes the text color based on the powerUpColor, powerDownColor
   * and normal color. powerUpColor is any number greater than 0, powerDownColor
   * is any color less than 0, otherwise normal color is returned.
   * @param {Number} change 
   * @memberof Window_Base
   */
Window_Base.prototype.paramchangeTextColor = function(change) {
    if (change > 0) {
        return this.powerUpColor();
    } else if (change < 0) {
        return this.powerDownColor();
    } else {
        return this.normalColor();
    }
};

  /**
   * Sets the background type of the window.
   * 0 is 255 window opacity (standard).
   * 1 is the window with background dimmer.
   * Any other number changes the opacity
   * to 0.
   * @param {Number} type 
   * @memberof Window_Base
   */
Window_Base.prototype.setBackgroundType = function(type) {
    if (type === 0) {
        this.opacity = 255;
    } else {
        this.opacity = 0;
    }
    if (type === 1) {
        this.showBackgroundDimmer();
    } else {
        this.hideBackgroundDimmer();
    }
};

  /**
   * Shows the background dimmer sprite.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.showBackgroundDimmer = function() {
    if (!this._dimmerSprite) {
        this._dimmerSprite = new Sprite();
        this._dimmerSprite.bitmap = new Bitmap(0, 0);
        this.addChildToBack(this._dimmerSprite);
    }
    var bitmap = this._dimmerSprite.bitmap;
    if (bitmap.width !== this.width || bitmap.height !== this.height) {
        this.refreshDimmerBitmap();
    }
    this._dimmerSprite.visible = true;
    this.updateBackgroundDimmer();
};

  /**
   * Hides the background dimmer sprite.
   * 
   * @memberof Window_Base
   */
Window_Base.prototype.hideBackgroundDimmer = function() {
    if (this._dimmerSprite) {
        this._dimmerSprite.visible = false;
    }
};

  /**
   * Updates the background dimmer sprite opacity based on the openness
   * of the window.
   * @memberof Window_Base
   */
Window_Base.prototype.updateBackgroundDimmer = function() {
    if (this._dimmerSprite) {
        this._dimmerSprite.opacity = this.openness;
    }
};

  /**
   * Refreshes the bitmap attached to the dimmer sprite
   * based on the window dimensions.
   * @memberof Window_Base
   */
Window_Base.prototype.refreshDimmerBitmap = function() {
    if (this._dimmerSprite) {
        var bitmap = this._dimmerSprite.bitmap;
        var w = this.width;
        var h = this.height;
        var m = this.padding;
        var c1 = this.dimColor1();
        var c2 = this.dimColor2();
        bitmap.resize(w, h);
        bitmap.gradientFillRect(0, 0, w, m, c2, c1, true);
        bitmap.fillRect(0, m, w, h - m * 2, c1);
        bitmap.gradientFillRect(0, h - m, w, m, c1, c2, true);
        this._dimmerSprite.setFrame(0, 0, w, h);
    }
};

  /**
   * Color 1 of the dimmer sprite bitmap.
   * for the gradient.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.dimColor1 = function() {
    return 'rgba(0, 0, 0, 0.6)';
};

  /**
   * Color 2 of the dimmer sprite bitmap
   * for the gradient.
   * @returns {String} 
   * @memberof Window_Base
   */
Window_Base.prototype.dimColor2 = function() {
    return 'rgba(0, 0, 0, 0)';
};

  /**
   * Returns the x coordinate of the mouse to
   * a local window x coordinate.
   * @param {Number} x 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.canvasToLocalX = function(x) {
    var node = this;
    while (node) {
        x -= node.x;
        node = node.parent;
    }
    return x;
};

  /**
   * Returns the y coordinate of the mouse
   * to a local window y coordinate.
   * @param {Number} y 
   * @returns {Number} 
   * @memberof Window_Base
   */
Window_Base.prototype.canvasToLocalY = function(y) {
    var node = this;
    while (node) {
        y -= node.y;
        node = node.parent;
    }
    return y;
};

  /**
   * Reverses the face images of the 
   * game party members.
   * @memberof Window_Base
   */
Window_Base.prototype.reserveFaceImages = function() {
    $gameParty.members().forEach(function(actor) {
        ImageManager.reserveFace(actor.faceName());
    }, this);
};

/**
 * The window class with cursor movement and scroll functions.
 * Super class of {@link Window_BattleEnemy}, {@link Window_BattleLog}, {@link Window_DebugEdit}, {@link Window_DebugRange}, {@link Window_EquipSlot}, {@link Window_NameInput}, {@link Window_NumberInput}, {@link Window_SavefileList}, {@link Window_ShopBuy}, {@link Window_ShopNumber}, {@link Window_Status} and {@link Window_BattleStatus}, {@link Window_MenuStatus}, {@link Window_SkillList} and {@link Window_ItemList} and {@link Window_Command}
 * @class Window_Selectable
 * @extends Window_Base
 * @abstract
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * @param  {Number} height
 * 
 * @prop  {Number} _index  this is used to select items from the list within the window.
 * @prop  {Boolean} _cursorFixed The boolean property that determines if the cursor is
   * fixed(locked to a position).
 * @prop  {Boolean} _cursorAll
 * @prop  {Number} _stayCount
 * @prop  {*} _helpWindow
 * @prop  {Object} _handlers
 * @prop  {Boolean} _touching
 * @prop  {Number} _scrollX
 * @prop  {Number} _scrollY
 */
function Window_Selectable() {
    this.initialize.apply(this, arguments);
}

Window_Selectable.prototype = Object.create(Window_Base.prototype);
Window_Selectable.prototype.constructor = Window_Selectable;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_Selectable.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._index = -1;
    this._cursorFixed = false;
    this._cursorAll = false;
    this._stayCount = 0;
    this._helpWindow = null;
    this._handlers = {};
    this._touching = false;
    this._scrollX = 0;
    this._scrollY = 0;
    this.deactivate();
};

  /**
   * Returns the current position of the _index property.
   * 
   * @returns {Number} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.index = function() {
    return this._index;
};

  /**
   * Returns true if the _cursorFixed property is true;
   * this means the cursor is locked to a position.
   * @returns {Boolean} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.cursorFixed = function() {
    return this._cursorFixed;
};

  /**
   * Sets the _cursorFixed property of the
   * window.
   * @param {Boolean} cursorFixed 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.setCursorFixed = function(cursorFixed) {
    this._cursorFixed = cursorFixed;
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.cursorAll = function() {
    return this._cursorAll;
};

/**
 * @param  {Boolean} cursorAll
 */
Window_Selectable.prototype.setCursorAll = function(cursorAll) {
    this._cursorAll = cursorAll;
};

  /**
   * Returns the maximum number of columns
   * for the window.
   * @returns {Number} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.maxCols = function() {
    return 1;
};

  /**
   * Returns the maximum number of items within the window;
   * useful to overwrite when creating a new window.
   * This method is used to calculate the number of rows and more.
   * @returns {Number} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.maxItems = function() {
    return 0;
};

/**
 * @returns {Number} 
 */
Window_Selectable.prototype.spacing = function() {
    return 12;
};

  /**
   * Returns the width of an item within the window;
   * determines the width of a column.
   * @returns {Number} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.itemWidth = function() {
    return Math.floor((this.width - this.padding * 2 +
                       this.spacing()) / this.maxCols() - this.spacing());
};

  /**
   * Returns the height of an item within the window;
   * determines the height of a row.
   * @returns {Number} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.itemHeight = function() {
    return this.lineHeight();
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.maxRows = function() {
    return Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1);
};

/**
 * 
 */
Window_Selectable.prototype.activate = function() {
    Window_Base.prototype.activate.call(this);
    this.reselect();
};

/**
 * 
 */
Window_Selectable.prototype.deactivate = function() {
    Window_Base.prototype.deactivate.call(this);
    this.reselect();
};

  /**
   * Selects the current index within the window given a number.
   * 
   * @param {Number} index 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.select = function(index) {
    this._index = index;
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

  /**
   * Deselects the currently selected index.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.deselect = function() {
    this.select(-1);
};

  /**
   * Reselects the index based on the window's _index property.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.reselect = function() {
    this.select(this._index);
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.row = function() {
    return Math.floor(this.index() / this.maxCols());
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.topRow = function() {
    return Math.floor(this._scrollY / this.itemHeight());
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.maxTopRow = function() {
    return Math.max(0, this.maxRows() - this.maxPageRows());
};

  /**
   * Sets the current top row of the given a number.
   * The top row will then be moved to an index
   * of the window.
   * @param {Number} row 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.setTopRow = function(row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    if (this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refresh();
        this.updateCursor();
    }
};

/**
 * 
 */
Window_Selectable.prototype.resetScroll = function() {
    this.setTopRow(0);
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.maxPageRows = function() {
    var pageHeight = this.height - this.padding * 2;
    return Math.floor(pageHeight / this.itemHeight());
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.maxPageItems = function() {
    return this.maxPageRows() * this.maxCols();
};

  /**
   * Returns true if the window is horizontal;
   * means the window only has a single row.
 * @returns {Boolean}
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.isHorizontal = function() {
    return this.maxPageRows() === 1;
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.bottomRow = function() {
    return Math.max(0, this.topRow() + this.maxPageRows() - 1);
};
/**
 * @param  {Number} row
 */
Window_Selectable.prototype.setBottomRow = function(row) {
    this.setTopRow(row - (this.maxPageRows() - 1));
};

/**
 * @returns {Number}
 */
Window_Selectable.prototype.topIndex = function() {
    return this.topRow() * this.maxCols();
};

  /**
   * Creates a new rectangle based on itemWidth and itemHeight.
   * The rectangle is mainly used for positioning items within
   * the selectable window.
   * @param {Number} index 
   * @returns {Rectangle} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
    return rect;
};

  /**
   * Creates a new rectangle based on itemWidth and itemHeight
   * The rectangle is used for positioning text within
   * the selectable window.
   * @param {Number} index 
   * @returns {Rectangle} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.itemRectForText = function(index) {
    var rect = this.itemRect(index);
    rect.x += this.textPadding();
    rect.width -= this.textPadding() * 2;
    return rect;
};

  /**
   * 
   * @param helpWindow 
   */
Window_Selectable.prototype.setHelpWindow = function(helpWindow) {
    this._helpWindow = helpWindow;
    this.callUpdateHelp();
};

  /**
   * Shows the attached help window.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.showHelpWindow = function() {
    if (this._helpWindow) {
        this._helpWindow.show();
    }
};

  /**
   * Hides the attached help window.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.hideHelpWindow = function() {
    if (this._helpWindow) {
        this._helpWindow.hide();
    }
};

  /**
   * Creates a new handler with the symbol as the handler name
   * and a method (JS function) bound to it.
   * @param {String} symbol 
   * @param {*} method 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.setHandler = function(symbol, method) {
    this._handlers[symbol] = method;
};

/**
 * @param  {String} symbol
 * @returns {Boolean}
 */
Window_Selectable.prototype.isHandled = function(symbol) {
    return !!this._handlers[symbol];
};

/**
 * @param  {String} symbol
 */
Window_Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol]();
    }
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.active;
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isCursorMovable = function() {
    return (this.isOpenAndActive() && !this._cursorFixed &&
            !this._cursorAll && this.maxItems() > 0);
};

  /**
   * Moves the cursor down; if wrap is passed
   * as true, then it will return to the top when
   * at the end of the list.
   * @param {Boolean} wrap 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.cursorDown = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
        this.select((index + maxCols) % maxItems);
    }
};

  /**
   * Moves the cursor up; if wrap is passed 
   * as true, then it will return to the bottom
   * when at the top of the list.
   * @param {Boolean} wrap 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.cursorUp = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (index >= maxCols || (wrap && maxCols === 1)) {
        this.select((index - maxCols + maxItems) % maxItems);
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_Selectable.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
        this.select((index + 1) % maxItems);
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_Selectable.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
        this.select((index - 1 + maxItems) % maxItems);
    }
};

/**
 * 
 */
Window_Selectable.prototype.cursorPagedown = function() {
    var index = this.index();
    var maxItems = this.maxItems();
    if (this.topRow() + this.maxPageRows() < this.maxRows()) {
        this.setTopRow(this.topRow() + this.maxPageRows());
        this.select(Math.min(index + this.maxPageItems(), maxItems - 1));
    }
};

/**
 * 
 */
Window_Selectable.prototype.cursorPageup = function() {
    var index = this.index();
    if (this.topRow() > 0) {
        this.setTopRow(this.topRow() - this.maxPageRows());
        this.select(Math.max(index - this.maxPageItems(), 0));
    }
};

/**
 * 
 */
Window_Selectable.prototype.scrollDown = function() {
    if (this.topRow() + 1 < this.maxRows()) {
        this.setTopRow(this.topRow() + 1);
    }
};

/**
 * 
 */
Window_Selectable.prototype.scrollUp = function() {
    if (this.topRow() > 0) {
        this.setTopRow(this.topRow() - 1);
    }
};

/**
 * 
 */
Window_Selectable.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateArrows();
    this.processCursorMove();
    this.processHandling();
    this.processWheel();
    this.processTouch();
    this._stayCount++;
};

/**
 * 
 */
Window_Selectable.prototype.updateArrows = function() {
    var topRow = this.topRow();
    var maxTopRow = this.maxTopRow();
    this.downArrowVisible = maxTopRow > 0 && topRow < maxTopRow;
    this.upArrowVisible = topRow > 0;
};

  /**
   * Handles the processing of cursor movement.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        }
        if (Input.isRepeated('up')) {
            this.cursorUp(Input.isTriggered('up'));
        }
        if (Input.isRepeated('right')) {
            this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
            this.cursorLeft(Input.isTriggered('left'));
        }
        if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.cursorPagedown();
        }
        if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.cursorPageup();
        }
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        }
    }
};

  /**
   * Handles the process of attached handlers.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.processHandling = function() {
    if (this.isOpenAndActive()) {
        if (this.isOkEnabled() && this.isOkTriggered()) {
            this.processOk();
        } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
            this.processCancel();
        } else if (this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
            this.processPagedown();
        } else if (this.isHandled('pageup') && Input.isTriggered('pageup')) {
            this.processPageup();
        }
    }
};

  /**
   * Handles the processing of the scroll wheel within
   * the window.
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.processWheel = function() {
    if (this.isOpenAndActive()) {
        var threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollUp();
        }
    }
};

  /**
   * Handles the processing of touch input.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive()) {
        if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
            this._touching = true;
            this.onTouch(true);
        } else if (TouchInput.isCancelled()) {
            if (this.isCancelEnabled()) {
                this.processCancel();
            }
        }
        if (this._touching) {
            if (TouchInput.isPressed()) {
                this.onTouch(false);
            } else {
                this._touching = false;
            }
        }
    } else {
        this._touching = false;
    }
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isTouchedInsideFrame = function() {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

/**
 * @param  {Boolean} triggered
 */
Window_Selectable.prototype.onTouch = function(triggered) {
    var lastIndex = this.index();
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    var hitIndex = this.hitTest(x, y);
    if (hitIndex >= 0) {
        if (hitIndex === this.index()) {
            if (triggered && this.isTouchOkEnabled()) {
                this.processOk();
            }
        } else if (this.isCursorMovable()) {
            this.select(hitIndex);
        }
    } else if (this._stayCount >= 10) {
        if (y < this.padding) {
            this.cursorUp();
        } else if (y >= this.height - this.padding) {
            this.cursorDown();
        }
    }
    if (this.index() !== lastIndex) {
        SoundManager.playCursor();
    }
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @returns {Number}
 */
Window_Selectable.prototype.hitTest = function(x, y) {
    if (this.isContentsArea(x, y)) {
        var cx = x - this.padding;
        var cy = y - this.padding;
        var topIndex = this.topIndex();
        for (var i = 0; i < this.maxPageItems(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                var rect = this.itemRect(index);
                var right = rect.x + rect.width;
                var bottom = rect.y + rect.height;
                if (cx >= rect.x && cy >= rect.y && cx < right && cy < bottom) {
                    return index;
                }
            }
        }
    }
    return -1;
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @returns {Boolean}
 */
Window_Selectable.prototype.isContentsArea = function(x, y) {
    var left = this.padding;
    var top = this.padding;
    var right = this.width - this.padding;
    var bottom = this.height - this.padding;
    return (x >= left && y >= top && x < right && y < bottom);
};

  /**
   * Determines if touch ok is enabled as an option;
   * this means whether you can confirm the selection
   * of an item within the window with touch input.
   * @returns {Boolean} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.isTouchOkEnabled = function() {
    return this.isOkEnabled();
};

  /**
   * Determines if ok is enabled as an option;
   * this means whether you can confirm selection
   * of an item within the window.
   * @returns {Boolean} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.isOkEnabled = function() {
    return this.isHandled('ok');
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isCancelEnabled = function() {
    return this.isHandled('cancel');
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isOkTriggered = function() {
    return Input.isRepeated('ok');
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isCancelTriggered = function() {
    return Input.isRepeated('cancel');
};

/**
 * 
 */
Window_Selectable.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

  /**
   * Plays a sound effect when okay is processed.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.playOkSound = function() {
    SoundManager.playOk();
};

  /**
   * Plays the buzzer sound effect when input is
   * incorrect.
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.playBuzzerSound = function() {
    SoundManager.playBuzzer();
};

  /**
   * Calls the ok handler and begins processing
   * confirmation of selection.
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.callOkHandler = function() {
    this.callHandler('ok');
};

/**
 * 
 */
Window_Selectable.prototype.processCancel = function() {
    SoundManager.playCancel();
    this.updateInputData();
    this.deactivate();
    this.callCancelHandler();
};

/**
 * 
 */
Window_Selectable.prototype.callCancelHandler = function() {
    this.callHandler('cancel');
};

/**
 * 
 */
Window_Selectable.prototype.processPageup = function() {
    SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pageup');
};

/**
 * 
 */
Window_Selectable.prototype.processPagedown = function() {
    SoundManager.playCursor();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pagedown');
};

/**
 * 
 */
Window_Selectable.prototype.updateInputData = function() {
    Input.update();
    TouchInput.update();
};

/**
 * 
 */
Window_Selectable.prototype.updateCursor = function() {
    if (this._cursorAll) {
        var allRowsHeight = this.maxRows() * this.itemHeight();
        this.setCursorRect(0, 0, this.contents.width, allRowsHeight);
        this.setTopRow(0);
    } else if (this.isCursorVisible()) {
        var rect = this.itemRect(this.index());
        this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
    } else {
        this.setCursorRect(0, 0, 0, 0);
    }
};

  /**
   * Determines if the cursor is visible within
   * the window.
   * @returns {Boolean} 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.isCursorVisible = function() {
    var row = this.row();
    return row >= this.topRow() && row <= this.bottomRow();
};

/**
 * 
 */
Window_Selectable.prototype.ensureCursorVisible = function() {
    var row = this.row();
    if (row < this.topRow()) {
        this.setTopRow(row);
    } else if (row > this.bottomRow()) {
        this.setBottomRow(row);
    }
};

/**
 * 
 */
Window_Selectable.prototype.callUpdateHelp = function() {
    if (this.active && this._helpWindow) {
        this.updateHelp();
    }
};

/**
 * 
 */
Window_Selectable.prototype.updateHelp = function() {
    this._helpWindow.clear();
};

/**
 * @param  {*} item
 */
Window_Selectable.prototype.setHelpWindowItem = function(item) {
    if (this._helpWindow) {
        this._helpWindow.setItem(item);
    }
};

/**
 * @returns {Boolean}
 */
Window_Selectable.prototype.isCurrentItemEnabled = function() {
    return true;
};

  /**
   * Draws all items within the window; this method
   * cals drawItem multiple times.
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

/**
 * @param  {Number} index
 */
Window_Selectable.prototype.drawItem = function(index) {
};

/**
 * @param  {Number} index
 */
Window_Selectable.prototype.clearItem = function(index) {
    var rect = this.itemRect(index);
    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
};

/**
 * @param  {Number} index
 */
Window_Selectable.prototype.redrawItem = function(index) {
    if (index >= 0) {
        this.clearItem(index);
        this.drawItem(index);
    }
};

/**
 * 
 */
Window_Selectable.prototype.redrawCurrentItem = function() {
    this.redrawItem(this.index());
};

  /**
   * Refreshes the window contents.
   * 
   * @memberof Window_Selectable
   */
Window_Selectable.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
        this.drawAllItems();
    }
};

/**
 * コマンド選択用ウィンドウ。
 *  {@link Window_ActorCommand}, {@link Window_ChoiceList}, {@link Window_GameEnd}, {@link Window_MenuCommand}, {@link Window_Options}, {@link Window_SkillType}, {@link Window_PartyCommand}, {@link Window_TitleCommand} と {@link Window_HorzCommand} のスーパークラス。
 * @class Window_Command
 * @extends Window_Selectable
 * @abstract
 * @param  {Number} x
 * @param  {Number} y
*/
function Window_Command() {
    this.initialize.apply(this, arguments);
}

Window_Command.prototype = Object.create(Window_Selectable.prototype);
Window_Command.prototype.constructor = Window_Command;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Command.prototype.initialize = function(x, y) {
    this.clearCommandList();
    this.makeCommandList();
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(0);
    this.activate();
};

  /**
   * Returns the width of the window;
   * default is 240.
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.windowWidth = function() {
    return 240;
};

  /**
   * Returns the height of the window;
   * takes the visible rows and passes it to the fittingHeight method.
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

  /**
   * Returns the number of visible rows within the window.
   * 
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.numVisibleRows = function() {
    return Math.ceil(this.maxItems() / this.maxCols());
};

  /**
   * Returns the maximum number of items within the window.
   * 
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.maxItems = function() {
    return this._list.length;
};

  /**
   * Clears the list of commands from the window;
   * this is useful for refreshing changing commands.
   * @memberof Window_Command
   */
Window_Command.prototype.clearCommandList = function() {
    this._list = [];
};

/**
 * メニューに全項目を追加。
 * 個々の追加は {@link #addCommand} で行っている。
   * @memberof Window_Command
   */
Window_Command.prototype.makeCommandList = function() {
};

  /**
   * ウィンドウに項目を追加する。
   * 項目はオブジェクトに格納される。
   * @param {String} name 表示名
   * @param {String} symbol 言語によらない名
   * @param {Boolean} enabled 選択可能か
   * @param {* | Object} ext 
   * @memberof Window_Command
   */
Window_Command.prototype.addCommand = function(name, symbol, enabled, ext) {
    if (enabled === undefined) {
        enabled = true;
    }
    if (ext === undefined) {
        ext = null;
    }
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};

  /**
   * Returns the command name given an index.
   * 
   * @param {Number} index 
   * @returns {String} 
   * @memberof Window_Command
   */
Window_Command.prototype.commandName = function(index) {
    return this._list[index].name;
};

  /**
   * Returns the command symbol given an index.
   * 
   * @param {Number} index 
   * @returns {String} 
   * @memberof Window_Command
   */
Window_Command.prototype.commandSymbol = function(index) {
    return this._list[index].symbol;
};

  /**
   * Determines if the command is enabled;
   * checks the enabled property of the command.
   * @param {Number} index 
   * @returns {Boolean} 
   * @memberof Window_Command
   */
Window_Command.prototype.isCommandEnabled = function(index) {
    return this._list[index].enabled;
};

  /**
   * Returns the command object at the current index.
   * 
   * @returns {object} 
   * @memberof Window_Command
   */
Window_Command.prototype.currentData = function() {
    return this.index() >= 0 ? this._list[this.index()] : null;
};

/**
 * @returns {Boolean}
 */
Window_Command.prototype.isCurrentItemEnabled = function() {
    return this.currentData() ? this.currentData().enabled : false;
};

  /**
   * Returns the command symbol at the current index.
   * 
   * @returns {String} 
   * @memberof Window_Command
   */
Window_Command.prototype.currentSymbol = function() {
    return this.currentData() ? this.currentData().symbol : null;
};

  /**
   * Returns the ext property of the command at the current index.
   * 
   * @returns {(any | object)} 
   * @memberof Window_Command
   */
Window_Command.prototype.currentExt = function() {
    return this.currentData() ? this.currentData().ext : null;
};

  /**
   * Finds a command object and returns the index number based
   * on the symbol property.
   * @param {String} symbol 
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.findSymbol = function(symbol) {
    for (var i = 0; i < this._list.length; i++) {
        if (this._list[i].symbol === symbol) {
            return i;
        }
    }
    return -1;
};

  /**
   * Selects a command object based on the symbol property.
   * 
   * @param {String} symbol 
   * @memberof Window_Command
   */
Window_Command.prototype.selectSymbol = function(symbol) {
    var index = this.findSymbol(symbol);
    if (index >= 0) {
        this.select(index);
    } else {
        this.select(0);
    }
};

  /**
   * Finds a command object and returns the index number
   * based on the ext property.
   * @param {(any | object)} ext 
   * @returns {Number} 
   * @memberof Window_Command
   */
Window_Command.prototype.findExt = function(ext) {
    for (var i = 0; i < this._list.length; i++) {
        if (this._list[i].ext === ext) {
            return i;
        }
    }
    return -1;
};

  /**
   * Selects a command object based on the ext property.
   * 
   * @param {(any | object)} ext 
   * @memberof Window_Command
   */
Window_Command.prototype.selectExt = function(ext) {
    var index = this.findExt(ext);
    if (index >= 0) {
        this.select(index);
    } else {
        this.select(0);
    }
};

/**
 * @param  {Number} index
 */
Window_Command.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};

  /**
   * Returns the text align of the commands;
   * possible values are: 'left', 'center', 'right'.
   * @returns {String} 
   * @memberof Window_Command
   */
Window_Command.prototype.itemTextAlign = function() {
    return 'left';
};

/**
 * @returns {Boolean}
 */
Window_Command.prototype.isOkEnabled = function() {
    return true;
};

/**
 * 
 */
Window_Command.prototype.callOkHandler = function() {
    var symbol = this.currentSymbol();
    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        Window_Selectable.prototype.callOkHandler.call(this);
    } else {
        this.activate();
    }
};

/**
 * 
 */
Window_Command.prototype.refresh = function() {
    this.clearCommandList();
    this.makeCommandList();
    this.createContents();
    Window_Selectable.prototype.refresh.call(this);
};





/**
 * The command window for the horizontal selection format.
 * Superclass of {@link Window_EquipCommand}, {@link Window_ItemCategory}, {@link Window_ShopCommand}
 * @class Window_HorzCommand
 * @extends Window_Command
 * @param  {Number} x
 * @param  {Number} y
 */
function Window_HorzCommand() {
    this.initialize.apply(this, arguments);
}

Window_HorzCommand.prototype = Object.create(Window_Command.prototype);
Window_HorzCommand.prototype.constructor = Window_HorzCommand;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_HorzCommand.prototype.initialize = function(x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
};

/**
 * @return {Number}
 */
Window_HorzCommand.prototype.numVisibleRows = function() {
    return 1;
};

/**
 * @return {Number}
 */
Window_HorzCommand.prototype.maxCols = function() {
    return 4;
};

/**
 * @return {String}
 */
Window_HorzCommand.prototype.itemTextAlign = function() {
    return 'center';
};






/**
 * The window for displaying the description of the selected item.
 * @class Window_Help
 * @extends Window_Base
 * @param {Number} numLines
 * 
 * @prop {String} _text The text that is displayed within the window.
 */
function Window_Help() {
    this.initialize.apply(this, arguments);
}

Window_Help.prototype = Object.create(Window_Base.prototype);
Window_Help.prototype.constructor = Window_Help;

/**
 * オブジェクト生成時の初期化。
 * @param {Number} numLines
 */
Window_Help.prototype.initialize = function(numLines) {
    var width = Graphics.boxWidth;
    var height = this.fittingHeight(numLines || 2);
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this._text = '';
};

  /**
   * Sets the _text property of the window;
   * this text will be displayed within the window.
   * @param {String} text 
   * @memberof Window_Help
   */
Window_Help.prototype.setText = function(text) {
    if (this._text !== text) {
        this._text = text;
        this.refresh();
    }
};

/**
 * 
 */
Window_Help.prototype.clear = function() {
    this.setText('');
};

Window_Help.prototype.setItem = function(item) {
    this.setText(item ? item.description : '');
};

  /**
   * Sets the current item of the help window.
   * 
   * @param {RPG.BaseItem} item 
   * @memberof Window_Help
   */
Window_Help.prototype.refresh = function() {
    this.contents.clear();
    this.drawTextEx(this._text, this.textPadding(), 0);
};

/**
 * The window for displaying the party's gold.
 * @class Window_Gold
 * @extends Window_Base
 * @param  {Number} x
 * @param  {Number} y
 */
function Window_Gold() {
    this.initialize.apply(this, arguments);
}

Window_Gold.prototype = Object.create(Window_Base.prototype);
Window_Gold.prototype.constructor = Window_Gold;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Gold.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

/**
 * @returns {Number}
 */
Window_Gold.prototype.windowWidth = function() {
    return 240;
};

/**
 * @returns {Number}
 */
Window_Gold.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

/**
 * 
 */
Window_Gold.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, width);
};

  /**
   * Returns the $gameParty gold as a number.
   * 
   * @returns {Number} 
   * @memberof Window_Gold
   */
Window_Gold.prototype.value = function() {
    return $gameParty.gold();
};

  /**
   * Returns the RPGMakerMV database currency
   * as a string.
   * @returns {String} 
   * @memberof Window_Gold
   */
Window_Gold.prototype.currencyUnit = function() {
    return TextManager.currencyUnit;
};

/**
 * 
 */
Window_Gold.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

/**
 * The window for selecting a command on the menu screen.
 * @class Window_MenuCommand
 * @extends Window_Command
 * @param  {Number} x
 * @param  {Number} y
 */
function Window_MenuCommand() {
    this.initialize.apply(this, arguments);
}

Window_MenuCommand.prototype = Object.create(Window_Command.prototype);
Window_MenuCommand.prototype.constructor = Window_MenuCommand;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_MenuCommand.prototype.initialize = function(x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
    this.selectLast();
};

Window_MenuCommand._lastCommandSymbol = null;

/**
 * 
 */
Window_MenuCommand.initCommandPosition = function() {
    this._lastCommandSymbol = null;
};

/**
 * @returns {Number}
 */
Window_MenuCommand.prototype.windowWidth = function() {
    return 240;
};

/**
 * @returns {Number}
 */
Window_MenuCommand.prototype.numVisibleRows = function() {
    return this.maxItems();
};

/**
 * 
 */
Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addOptionsCommand();
    this.addSaveCommand();
    this.addGameEndCommand();
};

  /**
   * Adds the standard game commands to the
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.addMainCommands = function() {
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('item')) {
        this.addCommand(TextManager.item, 'item', enabled);
    }
    if (this.needsCommand('skill')) {
        this.addCommand(TextManager.skill, 'skill', enabled);
    }
    if (this.needsCommand('equip')) {
        this.addCommand(TextManager.equip, 'equip', enabled);
    }
    if (this.needsCommand('status')) {
        this.addCommand(TextManager.status, 'status', enabled);
    }
};

  /**
   * Adds the standard formation command to the
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.addFormationCommand = function() {
    if (this.needsCommand('formation')) {
        var enabled = this.isFormationEnabled();
        this.addCommand(TextManager.formation, 'formation', enabled);
    }
};

  /**
   * Adds any user created commands to the 
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.addOriginalCommands = function() {
};

/**
 * 
 */
Window_MenuCommand.prototype.addOptionsCommand = function() {
    if (this.needsCommand('options')) {
        var enabled = this.isOptionsEnabled();
        this.addCommand(TextManager.options, 'options', enabled);
    }
};

/**
 * 
 */
Window_MenuCommand.prototype.addSaveCommand = function() {
    if (this.needsCommand('save')) {
        var enabled = this.isSaveEnabled();
        this.addCommand(TextManager.save, 'save', enabled);
    }
};

/**
 * 
 */
Window_MenuCommand.prototype.addGameEndCommand = function() {
    var enabled = this.isGameEndEnabled();
    this.addCommand(TextManager.gameEnd, 'gameEnd', enabled);
};

  /**
   * Checks if the standard game commands for the menu
   * are needed based on database system options.
   * @param {String} name 
   * @returns {Boolean} 
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.needsCommand = function(name) {
    var flags = $dataSystem.menuCommands;
    if (flags) {
        switch (name) {
        case 'item':
            return flags[0];
        case 'skill':
            return flags[1];
        case 'equip':
            return flags[2];
        case 'status':
            return flags[3];
        case 'formation':
            return flags[4];
        case 'save':
            return flags[5];
        }
    }
    return true;
};

  /**
   * Determines if the main commands are enabled;
   * this is based on the settings in the database.
   * @returns {Boolean} 
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.areMainCommandsEnabled = function() {
    return $gameParty.exists();
};

/**
 * @returns {Boolean}
 */
Window_MenuCommand.prototype.isFormationEnabled = function() {
    return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
};

  /**
   * Determines if the option command is enabled;
   * based on the setting in the database.
   * @returns {Boolean} 
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.isOptionsEnabled = function() {
    return true;
};

  /**
   * Determines if the save command is enabled;
   * based on the setting in the database.
   * @returns {Boolean} 
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.isSaveEnabled = function() {
    return !DataManager.isEventTest() && $gameSystem.isSaveEnabled();
};

/**
 * @returns {Boolean}
 */
Window_MenuCommand.prototype.isGameEndEnabled = function() {
    return true;
};

/**
 * 
 */
Window_MenuCommand.prototype.processOk = function() {
    Window_MenuCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};

  /**
   * Selects the last command in menu.
   * 
   * @memberof Window_MenuCommand
   */
Window_MenuCommand.prototype.selectLast = function() {
    this.selectSymbol(Window_MenuCommand._lastCommandSymbol);
};

/**
 * The window for displaying party member status on the menu screen.
 * Superclass of {@link Window_MenuActor}
 * @class Window_MenuStatus
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * 
 * @prop {Boolean} _formationMode
 * @prop {Number} _pendingIndex
 */
function Window_MenuStatus() {
    this.initialize.apply(this, arguments);
}

Window_MenuStatus.prototype = Object.create(Window_Selectable.prototype);
Window_MenuStatus.prototype.constructor = Window_MenuStatus;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.refresh();
};

/**
 * @returns {Number}
 */
Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - 240;
};

/**
 * @returns {Number}
 */
Window_MenuStatus.prototype.windowHeight = function() {
    return Graphics.boxHeight;
};

/**
 * @returns {Number}
 */
Window_MenuStatus.prototype.maxItems = function() {
    return $gameParty.size();
};

    /**
     * Returns the height of each item (actor status) in the main menu
     * window.
     * @returns {Number} 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.itemHeight = function() {
    var clientHeight = this.height - this.padding * 2;
    return Math.floor(clientHeight / this.numVisibleRows());
};

    /**
     * Returns the number of visible rows in
     * menu status.
     * @returns {Number} 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.numVisibleRows = function() {
    return 4;
};

    /**
     * Loads the images for the main menu status window.
     * 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.loadImages = function() {
    $gameParty.members().forEach(function(actor) {
        ImageManager.reserveFace(actor.faceName());
    }, this);
};

    /**
     * Draws the item background at the given index.
     * 
     * @param {Number} index 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.drawItem = function(index) {
    this.drawItemBackground(index);
    this.drawItemImage(index);
    this.drawItemStatus(index);
};

/**
 * @param  {Number} index
 */
Window_MenuStatus.prototype.drawItemBackground = function(index) {
    if (index === this._pendingIndex) {
        var rect = this.itemRect(index);
        var color = this.pendingColor();
        this.changePaintOpacity(false);
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.changePaintOpacity(true);
    }
};

/**
 * @param  {Number} index
 */
Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
    this.changePaintOpacity(true);
};

/**
 * @param  {Number} index
 */
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var x = rect.x + 162;
    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

/**
 * 
 */
Window_MenuStatus.prototype.processOk = function() {
    Window_Selectable.prototype.processOk.call(this);
    $gameParty.setMenuActor($gameParty.members()[this.index()]);
};

/**
 * @returns {Boolean}
 */
Window_MenuStatus.prototype.isCurrentItemEnabled = function() {
    if (this._formationMode) {
        var actor = $gameParty.members()[this.index()];
        return actor && actor.isFormationChangeOk();
    } else {
        return true;
    }
};

/**
 * 
 */
Window_MenuStatus.prototype.selectLast = function() {
    this.select($gameParty.menuActor().index() || 0);
};

    /**
     * Determines if the window is in formation mode;
     * if true, the player can select characters to swap
     * positions with.
     * @returns {Boolean} 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.formationMode = function() {
    return this._formationMode;
};

    /**
     * Sets the formation mode to true or false.
     * 
     * @param {Boolean} formationMode 
     * @memberof Window_MenuStatus
     */
Window_MenuStatus.prototype.setFormationMode = function(formationMode) {
    this._formationMode = formationMode;
};

/**
 * @returns {Number}
 */
Window_MenuStatus.prototype.pendingIndex = function() {
    return this._pendingIndex;
};

/**
 * @param  {Number} index
 */
Window_MenuStatus.prototype.setPendingIndex = function(index) {
    var lastPendingIndex = this._pendingIndex;
    this._pendingIndex = index;
    this.redrawItem(this._pendingIndex);
    this.redrawItem(lastPendingIndex);
};

/**
 * The window for selecting a target actor on the item and skill screens.
 * @class Window_MenuActor
 * @extends Window_MenuStatus
 */
function Window_MenuActor() {
    this.initialize.apply(this, arguments);
}

Window_MenuActor.prototype = Object.create(Window_MenuStatus.prototype);
Window_MenuActor.prototype.constructor = Window_MenuActor;

/**
 * オブジェクト生成時の初期化。
 */
Window_MenuActor.prototype.initialize = function() {
    Window_MenuStatus.prototype.initialize.call(this, 0, 0);
    this.hide();
};

/**
 * 
 */
Window_MenuActor.prototype.processOk = function() {
    if (!this.cursorAll()) {
        $gameParty.setTargetActor($gameParty.members()[this.index()]);
    }
    this.callOkHandler();
};

/**
 * 
 */
Window_MenuActor.prototype.selectLast = function() {
    this.select($gameParty.targetActor().index() || 0);
};

/**
 * @param  {RPG.BaseItem} item
 */
Window_MenuActor.prototype.selectForItem = function(item) {
    var actor = $gameParty.menuActor();
    var action = new Game_Action(actor);
    action.setItemObject(item);
    this.setCursorFixed(false);
    this.setCursorAll(false);
    if (action.isForUser()) {
        if (DataManager.isSkill(item)) {
            this.setCursorFixed(true);
            this.select(actor.index());
        } else {
            this.selectLast();
        }
    } else if (action.isForAll()) {
        this.setCursorAll(true);
        this.select(0);
    } else {
        this.selectLast();
    }
};

/**
 * The window for selecting a category of items on the item and shop screens.
 * @class Window_ItemCategory
 * @extends Window_HorzCommand
 * 
 * @prop {Window_ItemList} _itemWindow
 */
function Window_ItemCategory() {
    this.initialize.apply(this, arguments);
}

Window_ItemCategory.prototype = Object.create(Window_HorzCommand.prototype);
Window_ItemCategory.prototype.constructor = Window_ItemCategory;

/**
 * オブジェクト生成時の初期化。
 */
Window_ItemCategory.prototype.initialize = function() {
    Window_HorzCommand.prototype.initialize.call(this, 0, 0);
};

/**
 * @returns {Number}
 */
Window_ItemCategory.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

/**
 * @returns {Number}
 */
Window_ItemCategory.prototype.maxCols = function() {
    return 4;
};

/**
 * 
 */
Window_ItemCategory.prototype.update = function() {
    Window_HorzCommand.prototype.update.call(this);
    if (this._itemWindow) {
        this._itemWindow.setCategory(this.currentSymbol());
    }
};

/**
 * 
 */
Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
    this.addCommand(TextManager.weapon,  'weapon');
    this.addCommand(TextManager.armor,   'armor');
    this.addCommand(TextManager.keyItem, 'keyItem');
};

    /**
     * Sets the item window on the item category window.
     * 
     * @param {Window_ItemList} itemWindow 
     * @memberof Window_ItemCategory
     */
Window_ItemCategory.prototype.setItemWindow = function(itemWindow) {
    this._itemWindow = itemWindow;
    this.update();
};

/**
 * The window for selecting an item on the item screen.
 * Super class of {@link Window_BattleItem}, {@link Window_EquipItem}, {@link Window_EventItem}, {@link Window_ShopSell}
 * @class Window_ItemList
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {String} _category
 * @prop {Array<RPG.BaseItem>} _data
 */
function Window_ItemList() {
    this.initialize.apply(this, arguments);
}

Window_ItemList.prototype = Object.create(Window_Selectable.prototype);
Window_ItemList.prototype.constructor = Window_ItemList;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_ItemList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._category = 'none';
    this._data = [];
};

/**
 * @param  {String} category
 */
Window_ItemList.prototype.setCategory = function(category) {
    if (this._category !== category) {
        this._category = category;
        this.refresh();
        this.resetScroll();
    }
};

/**
 * @returns {Number}
 */
Window_ItemList.prototype.maxCols = function() {
    return 2;
};

/**
 * @returns {Number}
 */
Window_ItemList.prototype.spacing = function() {
    return 48;
};

/**
 * @returns {Number}
 */
Window_ItemList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

    /**
     * Returns the current item.
     * 
     * @returns {RPG.BaseItem} 
     * @memberof Window_ItemList
     */
Window_ItemList.prototype.item = function() {
    var index = this.index();
    return this._data && index >= 0 ? this._data[index] : null;
};

/**
 * @returns {Boolean}
 */
Window_ItemList.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};

    /**
     * Returns true if the given item is included.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {Boolean} 
     * @memberof Window_ItemList
     */
Window_ItemList.prototype.includes = function(item) {
    switch (this._category) {
    case 'item':
        return DataManager.isItem(item) && item.itypeId === 1;
    case 'weapon':
        return DataManager.isWeapon(item);
    case 'armor':
        return DataManager.isArmor(item);
    case 'keyItem':
        return DataManager.isItem(item) && item.itypeId === 2;
    default:
        return false;
    }
};

/**
 * @returns {Boolean}
 */
Window_ItemList.prototype.needsNumber = function() {
    return true;
};

Window_ItemList.prototype.isEnabled = function(item) {
    return $gameParty.canUse(item);
};

    /**
     * Returns true if the given item is enabled.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {Boolean} 
     * @memberof Window_ItemList
     */
Window_ItemList.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    }
};

/**
 * 
 */
Window_ItemList.prototype.selectLast = function() {
    var index = this._data.indexOf($gameParty.lastItem());
    this.select(index >= 0 ? index : 0);
};

/**
 * @param  {Number} index
 */
Window_ItemList.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

    /**
     * Returns the width of the numbers.
     * 
     * @returns {Number} 
     * @memberof Window_ItemList
     */
Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('000');
};


/**
 * @param  {RPG.BaseItem} item
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 */
Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(':', x, y, width - this.textWidth('00'), 'right');
        this.drawText($gameParty.numItems(item), x, y, width, 'right');
    }
};

/**
 * 
 */
Window_ItemList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

/**
 * 
 */
Window_ItemList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};





/**
 * The window for selecting a skill type on the skill screen.
 * @class Window_SkillType
 * @extends Window_Command
     * @param {Number} x 
     * @param {Number} y 
     * 
     * @prop {Game_Actor} _actor The current game actor attached to the window.
     * @prop {Window_SkillList} _skillWindow The current skill window attached to the window.
 */
function Window_SkillType() {
    this.initialize.apply(this, arguments);
}

Window_SkillType.prototype = Object.create(Window_Command.prototype);
Window_SkillType.prototype.constructor = Window_SkillType;

/**
 * オブジェクト生成時の初期化。
 * @param {Number} x 
 * @param {Number} y 
 * @memberof Window_SkillType
 */
Window_SkillType.prototype.initialize = function(x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
    this._actor = null;
};

/**
 * @returns {Number}
 */
Window_SkillType.prototype.windowWidth = function() {
    return 240;
};

/**
 * @param {Game_Actor}
 */
Window_SkillType.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.selectLast();
    }
};

/**
 * @returns {Number}
 */
Window_SkillType.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * 
 */
Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b) {
            return a - b;
        });
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

/**
 * 
 */
Window_SkillType.prototype.update = function() {
    Window_Command.prototype.update.call(this);
    if (this._skillWindow) {
        this._skillWindow.setStypeId(this.currentExt());
    }
};

    /**
     * Sets the skill window for the current skill type.
     * 
     * @param {Window_SkillList} skillWindow 
     * @memberof Window_SkillType
     */
Window_SkillType.prototype.setSkillWindow = function(skillWindow) {
    this._skillWindow = skillWindow;
    this.update();
};

    /**
     * Selects the last command in the window.
     * 
     * @memberof Window_SkillType
     */
Window_SkillType.prototype.selectLast = function() {
    var skill = this._actor.lastMenuSkill();
    if (skill) {
        this.selectExt(skill.stypeId);
    } else {
        this.select(0);
    }
};





/**
 * The window for displaying the skill user's status on the skill screen.
 * @class Window_SkillStatus
 * @extends Window_Base
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {Game_Actor} _actor The current game actor attached to the window.
 */
function Window_SkillStatus() {
    this.initialize.apply(this, arguments);
}

Window_SkillStatus.prototype = Object.create(Window_Base.prototype);
Window_SkillStatus.prototype.constructor = Window_SkillStatus;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_SkillStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
};

    /**
     * Sets the current actor for the window.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_SkillStatus
     */
Window_SkillStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_SkillStatus
     */
Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        var y = h / 2 - this.lineHeight() * 1.5;
        var width = w - 162 - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, 144, h);
        this.drawActorSimpleStatus(this._actor, 162, y, width);
    }
};

/**
 * The window for selecting a skill on the skill screen.
 * Super class of {@link Window_BattleSkill}
 * @class Window_SkillList
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {Game_Actor} _actor
 * @prop {Number} _stypeId
 * @prop {Array<RPG.Skill>} _data
 */
function Window_SkillList() {
    this.initialize.apply(this, arguments);
}

Window_SkillList.prototype = Object.create(Window_Selectable.prototype);
Window_SkillList.prototype.constructor = Window_SkillList;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_SkillList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._stypeId = 0;
    this._data = [];
};

    /**
     * Sets the current actor of the skill list window.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.resetScroll();
    }
};

    /**
     * Sets the skill type id of the skill list window.
     * 
     * @param {Number} stypeId 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.setStypeId = function(stypeId) {
    if (this._stypeId !== stypeId) {
        this._stypeId = stypeId;
        this.refresh();
        this.resetScroll();
    }
};

/**
 * @returns {Number}
 */
Window_SkillList.prototype.maxCols = function() {
    return 2;
};

/**
 * @returns {Number}
 */
Window_SkillList.prototype.spacing = function() {
    return 48;
};

/**
 * @returns {Number}
 */
Window_SkillList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

    /**
     * Returns the current skill from the databse.
     * 
     * @returns {RPG.Skill} 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.item = function() {
    return this._data && this.index() >= 0 ? this._data[this.index()] : null;
};

/**
 * @returns {Boolean}
 */
Window_SkillList.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this._data[this.index()]);
};

    /**
     * Returns true if the given skill is included.
     * 
     * @param {RPG.Skill} item 
     * @returns {Boolean} 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.includes = function(item) {
    return item && item.stypeId === this._stypeId;
};

    /**
     * Returns true if the given skill is enabled.
     * 
     * @param {RPG.Skill} item 
     * @returns {Boolean} 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.isEnabled = function(item) {
    return this._actor && this._actor.canUse(item);
};

    /**
     * Creates the item list.
     * 
     * @memberof Window_SkillList
     */
Window_SkillList.prototype.makeItemList = function() {
    if (this._actor) {
        this._data = this._actor.skills().filter(function(item) {
            return this.includes(item);
        }, this);
    } else {
        this._data = [];
    }
};

/**
 * 
 */
Window_SkillList.prototype.selectLast = function() {
    var skill;
    if ($gameParty.inBattle()) {
        skill = this._actor.lastBattleSkill();
    } else {
        skill = this._actor.lastMenuSkill();
    }
    var index = this._data.indexOf(skill);
    this.select(index >= 0 ? index : 0);
};

/**
 * @param {Number} index
 */
Window_SkillList.prototype.drawItem = function(index) {
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

/**
 * @returns {Number}
 */
Window_SkillList.prototype.costWidth = function() {
    return this.textWidth('000');
};

/**
 * @param  {RPG.Skill} skill
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 */
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
    }
};

/**
 * 
 */
Window_SkillList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

/**
 * 
 */
Window_SkillList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};





/**
 * The window for displaying parameter changes on the equipment screen.
 * @class Window_EquipStatus
 * @extends Window_Base
 * @param  {Number} x
 * @param  {Number} y
 * 
 * @prop {Game_Actor} _actor
 * @prop {Game_Actor} _tempActor
 */
function Window_EquipStatus() {
    this.initialize.apply(this, arguments);
}

Window_EquipStatus.prototype = Object.create(Window_Base.prototype);
Window_EquipStatus.prototype.constructor = Window_EquipStatus;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_EquipStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._tempActor = null;
    this.refresh();
};

/**
 * @returns {Number}
 */
Window_EquipStatus.prototype.windowWidth = function() {
    return 312;
};

/**
 * @returns {Number}
 */
Window_EquipStatus.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

/**
 * @returns {Number}
 */
Window_EquipStatus.prototype.numVisibleRows = function() {
    return 7;
};

/**
 * @param {Game_Actor} actor
 */
Window_EquipStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

/**
 * 
 */
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        this.drawActorName(this._actor, this.textPadding(), 0);
        for (var i = 0; i < 6; i++) {
            this.drawItem(0, this.lineHeight() * (1 + i), 2 + i);
        }
    }
};

/**
 * @param {Game_Actor} actor
 */
Window_EquipStatus.prototype.setTempActor = function(tempActor) {
    if (this._tempActor !== tempActor) {
        this._tempActor = tempActor;
        this.refresh();
    }
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} paramId
 */
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 140, y, paramId);
    }
    this.drawRightArrow(x + 188, y);
    if (this._tempActor) {
        this.drawNewParam(x + 222, y, paramId);
    }
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} paramId
 */
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(paramId), x, y, 120);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} paramId
 */
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, 48, 'right');
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_EquipStatus.prototype.drawRightArrow = function(x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText('\u2192', x, y, 32, 'center');
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} paramId
 */
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(newValue, x, y, 48, 'right');
};





/**
 * The window for selecting a command on the equipment screen.
 * @class Window_EquipCommand
 * @extends Window_HorzCommand
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * 
 * @prop {Number} _windowWidth
 */
function Window_EquipCommand() {
    this.initialize.apply(this, arguments);
}

Window_EquipCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_EquipCommand.prototype.constructor = Window_EquipCommand;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 */
Window_EquipCommand.prototype.initialize = function(x, y, width) {
    this._windowWidth = width;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

/**
 * @returns {Number}
 */
Window_EquipCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

/**
 * @returns {Number}
 */
Window_EquipCommand.prototype.maxCols = function() {
    return 3;
};

/**
 * 
 */
Window_EquipCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.equip2,   'equip');
    this.addCommand(TextManager.optimize, 'optimize');
    this.addCommand(TextManager.clear,    'clear');
};





/**
 * The window for selecting an equipment slot on the equipment screen.
 * @class Window_EquipSlot
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {Game_Actor} _actor
 * @prop {Window_EquipItem} _itemWindow
 * @prop {Window_EquipStatus} _statusWindow
 */
function Window_EquipSlot() {
    this.initialize.apply(this, arguments);
}

Window_EquipSlot.prototype = Object.create(Window_Selectable.prototype);
Window_EquipSlot.prototype.constructor = Window_EquipSlot;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_EquipSlot.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this.refresh();
};

    /**
     * Sets the current game actor.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

/**
 * 
 */
Window_EquipSlot.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this._itemWindow) {
        this._itemWindow.setSlotId(this.index());
    }
};

/**
 * @returns {Number}
 */
Window_EquipSlot.prototype.maxItems = function() {
    return this._actor ? this._actor.equipSlots().length : 0;
};

    /**
     * Returns the current equip item.
     * 
     * @returns {RPG.EquipItem} 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.item = function() {
    return this._actor ? this._actor.equips()[this.index()] : null;
};

/**
 * @param  {Number} index
 */
Window_EquipSlot.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
        this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
        this.drawItemName(this._actor.equips()[index], rect.x + 138, rect.y);
        this.changePaintOpacity(true);
    }
};

    /**
     * Returns the name of the slot at the specified index.
     * 
     * @param {Number} index 
     * @returns {String} 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.slotName = function(index) {
    var slots = this._actor.equipSlots();
    return this._actor ? $dataSystem.equipTypes[slots[index]] : '';
};

    /**
     * Returns true if the current slot is enabled.
     * 
     * @param {Number} index 
     * @returns {Boolean} 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.isEnabled = function(index) {
    return this._actor ? this._actor.isEquipChangeOk(index) : false;
};

/**
 * @returns {Boolean}
 */
Window_EquipSlot.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.index());
};

    /**
     * Sets the status window within the equip slot window.
     * 
     * @param {Window_EquipStatus} statusWindow 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
};

    /**
     * Sets the item window within the equip slot window.
     * 
     * @param {Window_EquipItem} itemWindow 
     * @memberof Window_EquipSlot
     */
Window_EquipSlot.prototype.setItemWindow = function(itemWindow) {
    this._itemWindow = itemWindow;
    this.update();
};

/**
 * 
 */
Window_EquipSlot.prototype.updateHelp = function() {
    Window_Selectable.prototype.updateHelp.call(this);
    this.setHelpWindowItem(this.item());
    if (this._statusWindow) {
        this._statusWindow.setTempActor(null);
    }
};


/**
 * The window for selecting an equipment item on the equipment screen.
 * @class Window_EquipItem
 * @extends Window_ItemList
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {Game_Actor} _actor
 * @prop {Number} _slotId
 * @prop {Window_EquipStatus} _statusWindow
 */
function Window_EquipItem() {
    this.initialize.apply(this, arguments);
}

Window_EquipItem.prototype = Object.create(Window_ItemList.prototype);
Window_EquipItem.prototype.constructor = Window_EquipItem;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_EquipItem.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._slotId = 0;
};

/**
 * @param  {Game_Actor} actor
 */
Window_EquipItem.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.resetScroll();
    }
};

/**
 * @param  {Number} slotId
 */
Window_EquipItem.prototype.setSlotId = function(slotId) {
    if (this._slotId !== slotId) {
        this._slotId = slotId;
        this.refresh();
        this.resetScroll();
    }
};

/**
 * @param  {RPG.EquipItem} item
 * @returns {Boolean}
 */
Window_EquipItem.prototype.includes = function(item) {
    if (item === null) {
        return true;
    }
    if (this._slotId < 0 || item.etypeId !== this._actor.equipSlots()[this._slotId]) {
        return false;
    }
    return this._actor.canEquip(item);
};

/**
 * @param  {RPG.EquipItem} item
 * @returns {Boolean}
 */
Window_EquipItem.prototype.isEnabled = function(item) {
    return true;
};

/**
 * 
 */
Window_EquipItem.prototype.selectLast = function() {
};

/**
 * @param  {Window_EquipStatus} statusWindow
 */
Window_EquipItem.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
};

/**
 * 
 */
Window_EquipItem.prototype.updateHelp = function() {
    Window_ItemList.prototype.updateHelp.call(this);
    if (this._actor && this._statusWindow) {
        var actor = JsonEx.makeDeepCopy(this._actor);
        actor.forceChangeEquip(this._slotId, this.item());
        this._statusWindow.setTempActor(actor);
    }
};

/**
 * 
 */
Window_EquipItem.prototype.playOkSound = function() {
};





/**
 * The window for displaying full status on the status screen.
 * @class Window_Status
 * @extends Window_Selectable
 * 
 * @prop {Game_Actor} _actor
 */
function Window_Status() {
    this.initialize.apply(this, arguments);
}

Window_Status.prototype = Object.create(Window_Selectable.prototype);
Window_Status.prototype.constructor = Window_Status;

/**
 * オブジェクト生成時の初期化。
 */
Window_Status.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this._actor = null;
    this.refresh();
    this.activate();
};

/**
 * @param  {Game_Actor} actor
 */
Window_Status.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

/**
 * 
 */
Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0);
        this.drawHorzLine(lineHeight * 1);
        this.drawBlock2(lineHeight * 2);
        this.drawHorzLine(lineHeight * 6);
        this.drawBlock3(lineHeight * 7);
        this.drawHorzLine(lineHeight * 13);
        this.drawBlock4(lineHeight * 14);
    }
};

/**
 * @param  {Number} y
 */
Window_Status.prototype.drawBlock1 = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawActorNickname(this._actor, 432, y);
};

/**
 * @param  {Number} y
 */
Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorFace(this._actor, 12, y);
    this.drawBasicInfo(204, y);
    this.drawExpInfo(456, y);
};

/**
 * @param  {Number} y
 */
Window_Status.prototype.drawBlock3 = function(y) {
    this.drawParameters(48, y);
    this.drawEquipments(432, y);
};

/**
 * @param  {Number} y
 */
Window_Status.prototype.drawBlock4 = function(y) {
    this.drawProfile(6, y);
};

    /**
     * Draws a horizontal line at the given y coordinate.
     * 
     * @param {Number} y 
     * @memberof Window_Status
     */
Window_Status.prototype.drawHorzLine = function(y) {
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
};

/**
 * @returns  {String}
 */
Window_Status.prototype.lineColor = function() {
    return this.normalColor();
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.drawActorHp(this._actor, x, y + lineHeight * 2);
    this.drawActorMp(this._actor, x, y + lineHeight * 3);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
        var paramId = i + 2;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Status.prototype.drawEquipments = function(x, y) {
    var equips = this._actor.equips();
    var count = Math.min(equips.length, this.maxEquipmentLines());
    for (var i = 0; i < count; i++) {
        this.drawItemName(equips[i], x, y + this.lineHeight() * i);
    }
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_Status.prototype.drawProfile = function(x, y) {
    this.drawTextEx(this._actor.profile(), x, y);
};

/**
 * @returns  {Number}
 */
Window_Status.prototype.maxEquipmentLines = function() {
    return 6;
};





/**
 * [オプション]ウィンドウ。
 * alwaysDash, commandRemember, bgmVolume, bgsVolume, meVolume, seVolume の選択項目を含む。
 * @class Window_Options
 * @extends Window_Command
 */
function Window_Options() {
    this.initialize.apply(this, arguments);
}

Window_Options.prototype = Object.create(Window_Command.prototype);
Window_Options.prototype.constructor = Window_Options;

/**
 * オブジェクト生成時の初期化。
 */
Window_Options.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
};

/**
 * @returns {Number}
 */
Window_Options.prototype.windowWidth = function() {
    return 400;
};

/**
 * @returns {Number}
 */
Window_Options.prototype.windowHeight = function() {
    return this.fittingHeight(Math.min(this.numVisibleRows(), 12));
};

/**
 * 
 */
Window_Options.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
};

/**
 * メニューにオプション全項目を追加。
 */
Window_Options.prototype.makeCommandList = function() {
    this.addGeneralOptions();
    this.addVolumeOptions();
};

/**
 * [alwaysDash]と[commandRemember]をメニューに追加。
 */
Window_Options.prototype.addGeneralOptions = function() {
    this.addCommand(TextManager.alwaysDash, 'alwaysDash');
    this.addCommand(TextManager.commandRemember, 'commandRemember');
};

/**
 * [bgmVolume][bgsVolume][meVolume][seVolume]をメニューに追加。
 */
Window_Options.prototype.addVolumeOptions = function() {
    this.addCommand(TextManager.bgmVolume, 'bgmVolume');
    this.addCommand(TextManager.bgsVolume, 'bgsVolume');
    this.addCommand(TextManager.meVolume, 'meVolume');
    this.addCommand(TextManager.seVolume, 'seVolume');
};

/**
 * @param  {Number} index
 */
Window_Options.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, titleWidth, 'left');
    this.drawText(this.statusText(index), titleWidth, rect.y, statusWidth, 'right');
};

/**
 * @returns  {Number}
 */
Window_Options.prototype.statusWidth = function() {
    return 120;
};

/**
 * @param  {Number} index
 * @returns  {String}
 */
Window_Options.prototype.statusText = function(index) {
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (this.isVolumeSymbol(symbol)) {
        return this.volumeStatusText(value);
    } else {
        return this.booleanStatusText(value);
    }
};

/**
 * @param  {String} symbol
 * @returns  {Boolean}
 */
Window_Options.prototype.isVolumeSymbol = function(symbol) {
    return symbol.contains('Volume');
};

/**
 * @param  {Boolean} value
 * @returns  {String}
 */
Window_Options.prototype.booleanStatusText = function(value) {
    return value ? 'ON' : 'OFF';
};

/**
 * @param  {Number} value
 * @returns  {String}
 */
Window_Options.prototype.volumeStatusText = function(value) {
    return value + '%';
};

/**
 * 
 */
Window_Options.prototype.processOk = function() {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (this.isVolumeSymbol(symbol)) {
        value += this.volumeOffset();
        if (value > 100) {
            value = 0;
        }
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
    } else {
        this.changeValue(symbol, !value);
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_Options.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (this.isVolumeSymbol(symbol)) {
        value += this.volumeOffset();
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
    } else {
        this.changeValue(symbol, true);
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_Options.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (this.isVolumeSymbol(symbol)) {
        value -= this.volumeOffset();
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
    } else {
        this.changeValue(symbol, false);
    }
};

/**
 * @returns  {Number}
 */
Window_Options.prototype.volumeOffset = function() {
    return 20;
};

/**
 * @param  {String} symbol
 * @param  {Boolean|Number} value
 */
Window_Options.prototype.changeValue = function(symbol, value) {
    var lastValue = this.getConfigValue(symbol);
    if (lastValue !== value) {
        this.setConfigValue(symbol, value);
        this.redrawItem(this.findSymbol(symbol));
        SoundManager.playCursor();
    }
};

/**
 * @param  {String} symbol
 * @returns {Boolean}
 */
Window_Options.prototype.getConfigValue = function(symbol) {
    return ConfigManager[symbol];
};

/**
 * @param  {String} symbol
 * @param  {Boolean|Number} value
 */
Window_Options.prototype.setConfigValue = function(symbol, volume) {
    ConfigManager[symbol] = volume;
};





/**
 * The window for selecting a save file on the save and load screens.
 * @class Window_SavefileList
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 * 
 * @prop {String} _mode
 */
function Window_SavefileList() {
    this.initialize.apply(this, arguments);
}

Window_SavefileList.prototype = Object.create(Window_Selectable.prototype);
Window_SavefileList.prototype.constructor = Window_SavefileList;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_SavefileList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.activate();
    this._mode = null;
};

    /**
     * Sets the mode of the save file window.
     * 
     * @param {String} mode 
     * @memberof Window_SavefileList
     */
Window_SavefileList.prototype.setMode = function(mode) {
    this._mode = mode;
};

/**
 * @returns {Number}
 */
Window_SavefileList.prototype.maxItems = function() {
    return DataManager.maxSavefiles();
};

    /**
     * Returns the maximum number of visible items.
     * 
     * @returns {Number} 
     * @memberof Window_SavefileList
     */
Window_SavefileList.prototype.maxVisibleItems = function() {
    return 5;
};

/**
 * @returns {Number}
 */
Window_SavefileList.prototype.itemHeight = function() {
    var innerHeight = this.height - this.padding * 2;
    return Math.floor(innerHeight / this.maxVisibleItems());
};

/**
 * @param  {Number} index
 */
Window_SavefileList.prototype.drawItem = function(index) {
    var id = index + 1;
    var valid = DataManager.isThisGameFile(id);
    var info = DataManager.loadSavefileInfo(id);
    var rect = this.itemRectForText(index);
    this.resetTextColor();
    if (this._mode === 'load') {
        this.changePaintOpacity(valid);
    }
    this.drawFileId(id, rect.x, rect.y);
    if (info) {
        this.changePaintOpacity(valid);
        this.drawContents(info, rect, valid);
        this.changePaintOpacity(true);
    }
};

    /**
     * Draws the file id at the specified x and y coordinates.
     * 
     * @param {Number} id 
     * @param {Number} x 
     * @param {Number} y 
     * @memberof Window_SavefileList
     */
Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    this.drawText(TextManager.file + ' ' + id, x, y, 180);
};

/**
 * @param  {Object} info {key:String}
 * @param  {Rectangle} rect
 * @param  {Boolean} valid
 */
Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
        this.drawGameTitle(info, rect.x + 192, rect.y, rect.width - 192);
        if (valid) {
            this.drawPartyCharacters(info, rect.x + 220, bottom - 4);
        }
    }
    var lineHeight = this.lineHeight();
    var y2 = bottom - lineHeight;
    if (y2 >= lineHeight) {
        this.drawPlaytime(info, rect.x, y2, rect.width);
    }
};

/**
 * @param  {Object} info {key:String}
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 */
Window_SavefileList.prototype.drawGameTitle = function(info, x, y, width) {
    if (info.title) {
        this.drawText(info.title, x, y, width);
    }
};

/**
 * @param  {Object} info {key:String}
 * @param  {Number} x
 * @param  {Number} y
 */
Window_SavefileList.prototype.drawPartyCharacters = function(info, x, y) {
    if (info.characters) {
        for (var i = 0; i < info.characters.length; i++) {
            var data = info.characters[i];
            this.drawCharacter(data[0], data[1], x + i * 48, y);
        }
    }
};

    /**
     * Draws the current playtime at the specified x and y coordinates within the given
     * width.
     * @param {Object} info {key: string}
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @memberof Window_SavefileList
     */
Window_SavefileList.prototype.drawPlaytime = function(info, x, y, width) {
    if (info.playtime) {
        this.drawText(info.playtime, x, y, width, 'right');
    }
};

/**
 * 
 */
Window_SavefileList.prototype.playOkSound = function() {
};





/**
 * The window for selecting buy/sell on the shop screen.
 * @class Window_ShopCommand
 * @extends Window_HorzCommand
 * @param  {Number} width
 * @param  {Boolean} purchaseOnly
 * 
 * @prop {Number} _windowWidth
 * @prop {Boolean} _purchaseOnly Determines if the shop is purchase only.
 */
function Window_ShopCommand() {
    this.initialize.apply(this, arguments);
}

Window_ShopCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_ShopCommand.prototype.constructor = Window_ShopCommand;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} width
 * @param  {Boolean} purchaseOnly
 */
Window_ShopCommand.prototype.initialize = function(width, purchaseOnly) {
    this._windowWidth = width;
    this._purchaseOnly = purchaseOnly;
    Window_HorzCommand.prototype.initialize.call(this, 0, 0);
};

/**
 * @returns {Number}
 */
Window_ShopCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

/**
 * @returns {Number}
 */
Window_ShopCommand.prototype.maxCols = function() {
    return 3;
};

/**
 * 
 */
Window_ShopCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.buy,    'buy');
    this.addCommand(TextManager.sell,   'sell',   !this._purchaseOnly);
    this.addCommand(TextManager.cancel, 'cancel');
};




/**
 * The window for selecting an item to buy on the shop screen.
 * @class Window_ShopBuy
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} height
 * @param  {Array<Array<*>>} shopGoods
 * 
 * @prop {Array<Array<*>>} _shopGoods
 * @prop {Number} _money
 * @prop {Array<RPG.BaseItem>} _data
 * @prop {Array<Number>} _price
 * @prop {Window_ShopStatus} _statusWindow
 */
function Window_ShopBuy() {
    this.initialize.apply(this, arguments);
}

Window_ShopBuy.prototype = Object.create(Window_Selectable.prototype);
Window_ShopBuy.prototype.constructor = Window_ShopBuy;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} height
 * @param  {Array<Array<*>>} shopGoods
 */
Window_ShopBuy.prototype.initialize = function(x, y, height, shopGoods) {
    var width = this.windowWidth();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._shopGoods = shopGoods;
    this._money = 0;
    this.refresh();
    this.select(0);
};

    /**
     * Returns the width of the window.
     * 
     * @returns {Number} 
     * @memberof Window_ShopBuy
     */
Window_ShopBuy.prototype.windowWidth = function() {
    return 456;
};

    /**
     * 
     * @returns {Number} 
     * @memberof Window_ShopBuy
     */
Window_ShopBuy.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

/**
 * @returns {RPG.BaseItem}
 */
Window_ShopBuy.prototype.item = function() {
    return this._data[this.index()];
};

/**
 * @param  {Number} money
 */
Window_ShopBuy.prototype.setMoney = function(money) {
    this._money = money;
    this.refresh();
};

/**
 * @returns {Boolean}
 */
Window_ShopBuy.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this._data[this.index()]);
};

/**
 * @param {RPG.BaseItem}
 * @returns {Number}
 */
Window_ShopBuy.prototype.price = function(item) {
    return this._price[this._data.indexOf(item)] || 0;
};

/**
     * Checks if the current item is enabled (can be bought/sold).
 * @param {RPG.BaseItem}
 * @returns {Boolean}
 */
Window_ShopBuy.prototype.isEnabled = function(item) {
    return (item && this.price(item) <= this._money &&
            !$gameParty.hasMaxItems(item));
};

/**
 * 
 */
Window_ShopBuy.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

    /**
     * Creates a list of items for the shop window.
     * 
     * @memberof Window_ShopBuy
     */
Window_ShopBuy.prototype.makeItemList = function() {
    this._data = [];
    this._price = [];
    this._shopGoods.forEach(function(goods) {
        var item = null;
        switch (goods[0]) {
        case 0:
            item = $dataItems[goods[1]];
            break;
        case 1:
            item = $dataWeapons[goods[1]];
            break;
        case 2:
            item = $dataArmors[goods[1]];
            break;
        }
        if (item) {
            this._data.push(item);
            this._price.push(goods[2] === 0 ? item.price : goods[3]);
        }
    }, this);
};

/**
 * @param {Number} index
 */
Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    var priceWidth = 96;
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
    this.drawText(this.price(item), rect.x + rect.width - priceWidth,
                  rect.y, priceWidth, 'right');
    this.changePaintOpacity(true);
};

/**
 * 
 */
Window_ShopBuy.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.callUpdateHelp();
};

/**
 * 
 */
Window_ShopBuy.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
    if (this._statusWindow) {
        this._statusWindow.setItem(this.item());
    }
};






/**
 * The window for selecting an item to sell on the shop screen.
 * @class Window_ShopSell
 * @extends Window_ItemList
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
function Window_ShopSell() {
    this.initialize.apply(this, arguments);
}

Window_ShopSell.prototype = Object.create(Window_ItemList.prototype);
Window_ShopSell.prototype.constructor = Window_ShopSell;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_ShopSell.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
};

    /**
     * Determines if the item is sellable, otherwise, greyed out.
     *
     * @param {RPG.BaseItem} item 
     * @returns {Boolean} 
     * @memberof Window_ShopSell
     */
Window_ShopSell.prototype.isEnabled = function(item) {
    return item && item.price > 0;
};





/**
 * The window for inputting quantity of items to buy or sell on the shop
 * screen.
 * @class Window_ShopNumber
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} height
 * 
 * @prop {RPG.BaseItem} _item The current item being bought/sold.
 * @prop {Number} _max Returns the maximum number of the item
     * that can be bought/sold.
 * @prop {Number} _price The current price of the items.
 * @prop {Number} _number
 * @prop {String} _currencyUnit Returns the currency unit of the game.
 * @prop {Array<Sprite_Button>} _buttons The buttons to input quantity
     * for the quantity of the item to be bought/sold.
 */
function Window_ShopNumber() {
    this.initialize.apply(this, arguments);
}

Window_ShopNumber.prototype = Object.create(Window_Selectable.prototype);
Window_ShopNumber.prototype.constructor = Window_ShopNumber;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} height
 */
Window_ShopNumber.prototype.initialize = function(x, y, height) {
    var width = this.windowWidth();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._item = null;
    this._max = 1;
    this._price = 0;
    this._number = 1;
    this._currencyUnit = TextManager.currencyUnit;
    this.createButtons();
};

    /**
     * Returns the width of the window.
     * 
     * @returns {Number} 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.windowWidth = function() {
    return 456;
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.number = function() {
    return this._number;
};

/**
 * @param  {RPG.BaseItem} item
 * @param  {Number} max
 * @param  {Number} price
 */
Window_ShopNumber.prototype.setup = function(item, max, price) {
    this._item = item;
    this._max = Math.floor(max);
    this._price = price;
    this._number = 1;
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.refresh();
};

/**
 * @param  {String} currencyUnit
 */
Window_ShopNumber.prototype.setCurrencyUnit = function(currencyUnit) {
    this._currencyUnit = currencyUnit;
    this.refresh();
};

/**
 * 
 */
Window_ShopNumber.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 5; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * i;
        var w = buttonWidth * (i === 4 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown2.bind(this));
    this._buttons[1].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[2].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[3].setClickHandler(this.onButtonUp2.bind(this));
    this._buttons[4].setClickHandler(this.onButtonOk.bind(this));
};

/**
 * 
 */
Window_ShopNumber.prototype.placeButtons = function() {
    var numButtons = this._buttons.length;
    var spacing = 16;
    var totalWidth = -spacing;
    for (var i = 0; i < numButtons; i++) {
        totalWidth += this._buttons[i].width + spacing;
    }
    var x = (this.width - totalWidth) / 2;
    for (var j = 0; j < numButtons; j++) {
        var button = this._buttons[j];
        button.x = x;
        button.y = this.buttonY();
        x += button.width + spacing;
    }
};

/**
 * 
 */
Window_ShopNumber.prototype.updateButtonsVisiblity = function() {
    if (TouchInput.date > Input.date) {
        this.showButtons();
    } else {
        this.hideButtons();
    }
};

    /**
     * Shows the quantity input buttons.
     * 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.showButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = true;
    }
};

    /**
     * Hides the quantity input buttons.
     * 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.hideButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = false;
    }
};

/**
 * 
 */
Window_ShopNumber.prototype.refresh = function() {
    this.contents.clear();
    this.drawItemName(this._item, 0, this.itemY());
    this.drawMultiplicationSign();
    this.drawNumber();
    this.drawTotalPrice();
};

/**
 * 
 */
Window_ShopNumber.prototype.drawMultiplicationSign = function() {
    var sign = '\u00d7';
    var width = this.textWidth(sign);
    var x = this.cursorX() - width * 2;
    var y = this.itemY();
    this.resetTextColor();
    this.drawText(sign, x, y, width);
};

/**
 * 
 */
Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._number, x, y, width, 'right');
};

    /**
     * Draws the total price of the selected
     * quantity of item.
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.drawTotalPrice = function() {
    var total = this._price * this._number;
    var width = this.contentsWidth() - this.textPadding();
    this.drawCurrencyValue(total, this._currencyUnit, 0, this.priceY(), width);
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.itemY = function() {
    return Math.round(this.contentsHeight() / 2 - this.lineHeight() * 1.5);
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.priceY = function() {
    return Math.round(this.contentsHeight() / 2 + this.lineHeight() / 2);
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.buttonY = function() {
    return Math.round(this.priceY() + this.lineHeight() * 2.5);
};

    /**
     * Returns the width of the cursor.
     * 
     * @returns {Number} 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.cursorWidth = function() {
    var digitWidth = this.textWidth('0');
    return this.maxDigits() * digitWidth + this.textPadding() * 2;
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.cursorX = function() {
    return this.contentsWidth() - this.cursorWidth() - this.textPadding();
};

/**
 * @returns {Number}
 */
Window_ShopNumber.prototype.maxDigits = function() {
    return 2;
};

/**
 * 
 */
Window_ShopNumber.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    this.processNumberChange();
};

/**
 * 
 */
Window_ShopNumber.prototype.isOkTriggered = function() {
    return Input.isTriggered('ok');
};

/**
 * 
 */
Window_ShopNumber.prototype.playOkSound = function() {
};

    /**
     * Processes the change in quantity.
     * 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.processNumberChange = function() {
    if (this.isOpenAndActive()) {
        if (Input.isRepeated('right')) {
            this.changeNumber(1);
        }
        if (Input.isRepeated('left')) {
            this.changeNumber(-1);
        }
        if (Input.isRepeated('up')) {
            this.changeNumber(10);
        }
        if (Input.isRepeated('down')) {
            this.changeNumber(-10);
        }
    }
};

    /**
     * Changes the quantity, given a number.
     * 
     * @param {Number} amount 
     * @memberof Window_ShopNumber
     */
Window_ShopNumber.prototype.changeNumber = function(amount) {
    var lastNumber = this._number;
    this._number = (this._number + amount).clamp(1, this._max);
    if (this._number !== lastNumber) {
        SoundManager.playCursor();
        this.refresh();
    }
};

/**
 * 
 */
Window_ShopNumber.prototype.updateCursor = function() {
    this.setCursorRect(this.cursorX(), this.itemY(),
                       this.cursorWidth(), this.lineHeight());
};

/**
 * 
 */
Window_ShopNumber.prototype.onButtonUp = function() {
    this.changeNumber(1);
};

/**
 * 
 */
Window_ShopNumber.prototype.onButtonUp2 = function() {
    this.changeNumber(10);
};

/**
 * 
 */
Window_ShopNumber.prototype.onButtonDown = function() {
    this.changeNumber(-1);
};

/**
 * 
 */
Window_ShopNumber.prototype.onButtonDown2 = function() {
    this.changeNumber(-10);
};

/**
 * 
 */
Window_ShopNumber.prototype.onButtonOk = function() {
    this.processOk();
};





/**
 * The window for displaying number of items in possession and the actor's
 * equipment on the shop screen.
 * @class Window_ShopStatus
 * @extends Window_Base
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
 * 
 * @prop {RPG.BaseItem} _item
 * @prop {Number} _pageIndex
 */
function Window_ShopStatus() {
    this.initialize.apply(this, arguments);
}

Window_ShopStatus.prototype = Object.create(Window_Base.prototype);
Window_ShopStatus.prototype.constructor = Window_ShopStatus;

/**
 * オブジェクト生成時の初期化。
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} width 
 * @param {Number} height 
 * @memberof Window_ShopStatus
 */
Window_ShopStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._item = null;
    this._pageIndex = 0;
    this.refresh();
};

    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._item) {
        var x = this.textPadding();
        this.drawPossession(x, 0);
        if (this.isEquipItem()) {
            this.drawEquipInfo(x, this.lineHeight() * 2);
        }
    }
};
/**
 * @param  {RPG.BaseItem} item
 */
Window_ShopStatus.prototype.setItem = function(item) {
    this._item = item;
    this.refresh();
};

/**
 * @returns {Boolean}
 */
Window_ShopStatus.prototype.isEquipItem = function() {
    return DataManager.isWeapon(this._item) || DataManager.isArmor(this._item);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_ShopStatus.prototype.drawPossession = function(x, y) {
    var width = this.contents.width - this.textPadding() - x;
    var possessionWidth = this.textWidth('0000');
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.possession, x, y, width - possessionWidth);
    this.resetTextColor();
    this.drawText($gameParty.numItems(this._item), x, y, width, 'right');
};

/**
 * @param  {Number} x
 * @param  {Number} y
 */
Window_ShopStatus.prototype.drawEquipInfo = function(x, y) {
    var members = this.statusMembers();
    for (var i = 0; i < members.length; i++) {
        this.drawActorEquipInfo(x, y + this.lineHeight() * (i * 2.4), members[i]);
    }
};

/**
 * @returns {Array<Game_Actor>}
 */
Window_ShopStatus.prototype.statusMembers = function() {
    var start = this._pageIndex * this.pageSize();
    var end = start + this.pageSize();
    return $gameParty.members().slice(start, end);
};

    /**
     * Returns the page size.
     * 
     * @returns {Number} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.pageSize = function() {
    return 4;
};

    /**
     * Returns the max number of pages.
     * 
     * @returns {Number} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.maxPages = function() {
    return Math.floor(($gameParty.size() + this.pageSize() - 1) / this.pageSize());
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Game_Actor} actor
 */
Window_ShopStatus.prototype.drawActorEquipInfo = function(x, y, actor) {
    var enabled = actor.canEquip(this._item);
    this.changePaintOpacity(enabled);
    this.resetTextColor();
    this.drawText(actor.name(), x, y, 168);
    var item1 = this.currentEquippedItem(actor, this._item.etypeId);
    if (enabled) {
        this.drawActorParamChange(x, y, actor, item1);
    }
    this.drawItemName(item1, x, y + this.lineHeight());
    this.changePaintOpacity(true);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Game_Actor} actor
 * @param  {RPG.EquipItem} item1
 */
Window_ShopStatus.prototype.drawActorParamChange = function(x, y, actor, item1) {
    var width = this.contents.width - this.textPadding() - x;
    var paramId = this.paramId();
    var change = this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
    this.changeTextColor(this.paramchangeTextColor(change));
    this.drawText((change > 0 ? '+' : '') + change, x, y, width, 'right');
};

    /**
     * Returns the parameter id.
     * 
     * @returns {Number} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.paramId = function() {
    return DataManager.isWeapon(this._item) ? 2 : 3;
};

    /**
     * Returns the current item equiped by the given actor when
     * the respective equipment Id is passed.
     * @param {Game_Actor} actor 
     * @param {Number} etypeId 
     * @returns {RPG.EquipItem} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.currentEquippedItem = function(actor, etypeId) {
    var list = [];
    var equips = actor.equips();
    var slots = actor.equipSlots();
    for (var i = 0; i < slots.length; i++) {
        if (slots[i] === etypeId) {
            list.push(equips[i]);
        }
    }
    var paramId = this.paramId();
    var worstParam = Number.MAX_VALUE;
    var worstItem = null;
    for (var j = 0; j < list.length; j++) {
        if (list[j] && list[j].params[paramId] < worstParam) {
            worstParam = list[j].params[paramId];
            worstItem = list[j];
        }
    }
    return worstItem;
};

/**
 * 
 */
Window_ShopStatus.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updatePage();
};

    /**
     * Updates the current page.
     * 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.updatePage = function() {
    if (this.isPageChangeEnabled() && this.isPageChangeRequested()) {
        this.changePage();
    }
};

    /**
     * Determines if page can be changed.
     * 
     * @returns {Boolean} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.isPageChangeEnabled = function() {
    return this.visible && this.maxPages() >= 2;
};

    /**
     * 
     * @returns {Boolean} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.isPageChangeRequested = function() {
    if (Input.isTriggered('shift')) {
        return true;
    }
    if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
        return true;
    }
    return false;
};

    /**
     * Determines if the window is touched within it's frame.
     * 
     * @returns {Boolean} 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.isTouchedInsideFrame = function() {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

    /**
     * Changes the current page.
     * 
     * @memberof Window_ShopStatus
     */
Window_ShopStatus.prototype.changePage = function() {
    this._pageIndex = (this._pageIndex + 1) % this.maxPages();
    this.refresh();
    SoundManager.playCursor();
};





/**
 * The window for editing an actor's name on the name input screen.
 * @class Window_NameEdit
 * @extends Window_Base
     * @param {Game_Actor} actor 
     * @param {Number} maxLength 
 * 
 * @prop {String} _name
 * @prop {Number} _index
 */
function Window_NameEdit() {
    this.initialize.apply(this, arguments);
}

Window_NameEdit.prototype = Object.create(Window_Base.prototype);
Window_NameEdit.prototype.constructor = Window_NameEdit;

    /**
     * オブジェクト生成時の初期化。
     * @param {Game_Actor} actor 
     * @param {Number} maxLength 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.initialize = function(actor, maxLength) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = actor;
    this._name = actor.name().slice(0, this._maxLength);
    this._index = this._name.length;
    this._maxLength = maxLength;
    this._defaultName = this._name;
    this.deactivate();
    this.refresh();
    ImageManager.reserveFace(actor.faceName());
};

    /**
     * Returns the window width.
     * 
     * @returns {Number} 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.windowWidth = function() {
    return 480;
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.windowHeight = function() {
    return this.fittingHeight(4);
};

/**
 * @returns {String}
 */
Window_NameEdit.prototype.name = function() {
    return this._name;
};

/**
 * @returns {Boolean}
 */
Window_NameEdit.prototype.restoreDefault = function() {
    this._name = this._defaultName;
    this._index = this._name.length;
    this.refresh();
    return this._name.length > 0;
};

/**
 * @param  {String} ch
 * @returns {Boolean}
 */
Window_NameEdit.prototype.add = function(ch) {
    if (this._index < this._maxLength) {
        this._name += ch;
        this._index++;
        this.refresh();
        return true;
    } else {
        return false;
    }
};

/**
 * @returns {Boolean}
 */
Window_NameEdit.prototype.back = function() {
    if (this._index > 0) {
        this._index--;
        this._name = this._name.slice(0, this._index);
        this.refresh();
        return true;
    } else {
        return false;
    }
};

    /**
     * Returns the width of the character face.
     * 
     * @returns {Number} 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.faceWidth = function() {
    return 144;
};

    /**
     * Returns the width of a character.
     * 
     * @returns {Number} 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.charWidth = function() {
    var text = $gameSystem.isJapanese() ? '\uff21' : 'A';
    return this.textWidth(text);
};

/**
 * @return {Number}
 */
Window_NameEdit.prototype.left = function() {
    var nameCenter = (this.contentsWidth() + this.faceWidth()) / 2;
    var nameWidth = (this._maxLength + 1) * this.charWidth();
    return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
};

/**
 * @param  {Number} index
 * @return {Rectangle} 
 */
Window_NameEdit.prototype.itemRect = function(index) {
    return {
        x: this.left() + index * this.charWidth(),
        y: 54,
        width: this.charWidth(),
        height: this.lineHeight()
    };
};

/**
 * @param  {Number} index
 * @return {Rectangle}
 */
Window_NameEdit.prototype.underlineRect = function(index) {
    var rect = this.itemRect(index);
    rect.x++;
    rect.y += rect.height - 4;
    rect.width -= 2;
    rect.height = 2;
    return rect;
};

    /**
     * Returns the color of the underline as a css color string.
     * 
     * @returns {String} 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.underlineColor = function() {
    return this.normalColor();
};

    /**
     * Draws the underline at the given index of the window.
     * 
     * @param {Number} index 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.drawUnderline = function(index) {
    var rect = this.underlineRect(index);
    var color = this.underlineColor();
    this.contents.paintOpacity = 48;
    this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this.contents.paintOpacity = 255;
};

    /**
     * Draws a character within the window at the specified index.
     * 
     * @param {Number} index 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.drawChar = function(index) {
    var rect = this.itemRect(index);
    this.resetTextColor();
    this.drawText(this._name[index] || '', rect.x, rect.y);
};

    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_NameEdit
     */
Window_NameEdit.prototype.refresh = function() {
    this.contents.clear();
    this.drawActorFace(this._actor, 0, 0);
    for (var i = 0; i < this._maxLength; i++) {
        this.drawUnderline(i);
    }
    for (var j = 0; j < this._name.length; j++) {
        this.drawChar(j);
    }
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};





/**
 * The window for selecting text characters on the name input screen.
 * @class Window_NameInput
 * @extends Window_Selectable
 * @param {Window_NameEdit} editWindow
 * 
 * @prop {Array<String>} LATIN1 [static]
 * @prop {Array<String>} LATIN2 [static]
 * @prop {Array<String>} RUSSIA [static]
 * @prop {Array<String>} JAPAN1 [static]
 * @prop {Array<String>} JAPAN2 [static]
 * @prop {Array<String>} JAPAN3 [static]
 * 
 * @prop {Window_NameEdit} _editWindow
 * @prop {Number} _page
 * @prop {Number} _index
 */
function Window_NameInput() {
    this.initialize.apply(this, arguments);
}

Window_NameInput.prototype = Object.create(Window_Selectable.prototype);
Window_NameInput.prototype.constructor = Window_NameInput;
Window_NameInput.LATIN1 =
        [ 'A','B','C','D','E',  'a','b','c','d','e',
          'F','G','H','I','J',  'f','g','h','i','j',
          'K','L','M','N','O',  'k','l','m','n','o',
          'P','Q','R','S','T',  'p','q','r','s','t',
          'U','V','W','X','Y',  'u','v','w','x','y',
          'Z','[',']','^','_',  'z','{','}','|','~',
          '0','1','2','3','4',  '!','#','$','%','&',
          '5','6','7','8','9',  '(',')','*','+','-',
          '/','=','@','<','>',  ':',';',' ','Page','OK' ];
Window_NameInput.LATIN2 =
        [ 'Á','É','Í','Ó','Ú',  'á','é','í','ó','ú',
          'À','È','Ì','Ò','Ù',  'à','è','ì','ò','ù',
          'Â','Ê','Î','Ô','Û',  'â','ê','î','ô','û',
          'Ä','Ë','Ï','Ö','Ü',  'ä','ë','ï','ö','ü',
          'Ā','Ē','Ī','Ō','Ū',  'ā','ē','ī','ō','ū',
          'Ã','Å','Æ','Ç','Ð',  'ã','å','æ','ç','ð',
          'Ñ','Õ','Ø','Š','Ŵ',  'ñ','õ','ø','š','ŵ',
          'Ý','Ŷ','Ÿ','Ž','Þ',  'ý','ÿ','ŷ','ž','þ',
          'Ĳ','Œ','ĳ','œ','ß',  '«','»',' ','Page','OK' ];
Window_NameInput.RUSSIA =
        [ 'А','Б','В','Г','Д',  'а','б','в','г','д',
          'Е','Ё','Ж','З','И',  'е','ё','ж','з','и',
          'Й','К','Л','М','Н',  'й','к','л','м','н',
          'О','П','Р','С','Т',  'о','п','р','с','т',
          'У','Ф','Х','Ц','Ч',  'у','ф','х','ц','ч',
          'Ш','Щ','Ъ','Ы','Ь',  'ш','щ','ъ','ы','ь',
          'Э','Ю','Я','^','_',  'э','ю','я','%','&',
          '0','1','2','3','4',  '(',')','*','+','-',
          '5','6','7','8','9',  ':',';',' ','','OK' ];
Window_NameInput.JAPAN1 =
        [ 'あ','い','う','え','お',  'が','ぎ','ぐ','げ','ご',
          'か','き','く','け','こ',  'ざ','じ','ず','ぜ','ぞ',
          'さ','し','す','せ','そ',  'だ','ぢ','づ','で','ど',
          'た','ち','つ','て','と',  'ば','び','ぶ','べ','ぼ',
          'な','に','ぬ','ね','の',  'ぱ','ぴ','ぷ','ぺ','ぽ',
          'は','ひ','ふ','へ','ほ',  'ぁ','ぃ','ぅ','ぇ','ぉ',
          'ま','み','む','め','も',  'っ','ゃ','ゅ','ょ','ゎ',
          'や','ゆ','よ','わ','ん',  'ー','～','・','＝','☆',
          'ら','り','る','れ','ろ',  'ゔ','を','　','カナ','決定' ];
Window_NameInput.JAPAN2 =
        [ 'ア','イ','ウ','エ','オ',  'ガ','ギ','グ','ゲ','ゴ',
          'カ','キ','ク','ケ','コ',  'ザ','ジ','ズ','ゼ','ゾ',
          'サ','シ','ス','セ','ソ',  'ダ','ヂ','ヅ','デ','ド',
          'タ','チ','ツ','テ','ト',  'バ','ビ','ブ','ベ','ボ',
          'ナ','ニ','ヌ','ネ','ノ',  'パ','ピ','プ','ペ','ポ',
          'ハ','ヒ','フ','ヘ','ホ',  'ァ','ィ','ゥ','ェ','ォ',
          'マ','ミ','ム','メ','モ',  'ッ','ャ','ュ','ョ','ヮ',
          'ヤ','ユ','ヨ','ワ','ン',  'ー','～','・','＝','☆',
          'ラ','リ','ル','レ','ロ',  'ヴ','ヲ','　','英数','決定' ];
Window_NameInput.JAPAN3 =
        [ 'Ａ','Ｂ','Ｃ','Ｄ','Ｅ',  'ａ','ｂ','ｃ','ｄ','ｅ',
          'Ｆ','Ｇ','Ｈ','Ｉ','Ｊ',  'ｆ','ｇ','ｈ','ｉ','ｊ',
          'Ｋ','Ｌ','Ｍ','Ｎ','Ｏ',  'ｋ','ｌ','ｍ','ｎ','ｏ',
          'Ｐ','Ｑ','Ｒ','Ｓ','Ｔ',  'ｐ','ｑ','ｒ','ｓ','ｔ',
          'Ｕ','Ｖ','Ｗ','Ｘ','Ｙ',  'ｕ','ｖ','ｗ','ｘ','ｙ',
          'Ｚ','［','］','＾','＿',  'ｚ','｛','｝','｜','～',
          '０','１','２','３','４',  '！','＃','＄','％','＆',
          '５','６','７','８','９',  '（','）','＊','＋','－',
          '／','＝','＠','＜','＞',  '：','；','　','かな','決定' ];

/**
 * オブジェクト生成時の初期化。
 * @param {Window_NameEdit} editWindow
 */
Window_NameInput.prototype.initialize = function(editWindow) {
    var x = editWindow.x;
    var y = editWindow.y + editWindow.height + 8;
    var width = editWindow.width;
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._editWindow = editWindow;
    this._page = 0;
    this._index = 0;
    this.refresh();
    this.updateCursor();
    this.activate();
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_NameInput
     */
Window_NameInput.prototype.windowHeight = function() {
    return this.fittingHeight(9);
};

    /**
     * Returns the table of characters to input.
     * 
     * @returns {Array<Array<string>>} 
     * @memberof Window_NameInput
     */
Window_NameInput.prototype.table = function() {
    if ($gameSystem.isJapanese()) {
        return [Window_NameInput.JAPAN1,
                Window_NameInput.JAPAN2,
                Window_NameInput.JAPAN3];
    } else if ($gameSystem.isRussian()) {
        return [Window_NameInput.RUSSIA];
    } else {
        return [Window_NameInput.LATIN1,
                Window_NameInput.LATIN2];
    }
};

/**
 * @returns {Number}
 */
Window_NameInput.prototype.maxCols = function() {
    return 10;
};

/**
 * @returns {Number}
 */
Window_NameInput.prototype.maxItems = function() {
    return 90;
};

/**
 * @returns {String}
 */
Window_NameInput.prototype.character = function() {
    return this._index < 88 ? this.table()[this._page][this._index] : '';
};

/**
 * @returns {Boolean}
 */
Window_NameInput.prototype.isPageChange = function() {
    return this._index === 88;
};

/**
 * @returns {Boolean}
 */
Window_NameInput.prototype.isOk = function() {
    return this._index === 89;
};

/**
 * @returns {Rectangle} 
 */
Window_NameInput.prototype.itemRect = function(index) {
    return {
        x: index % 10 * 42 + Math.floor(index % 10 / 5) * 24,
        y: Math.floor(index / 10) * this.lineHeight(),
        width: 42,
        height: this.lineHeight()
    };
};

/**
 * 
 */
Window_NameInput.prototype.refresh = function() {
    var table = this.table();
    this.contents.clear();
    this.resetTextColor();
    for (var i = 0; i < 90; i++) {
        var rect = this.itemRect(i);
        rect.x += 3;
        rect.width -= 6;
        this.drawText(table[this._page][i], rect.x, rect.y, rect.width, 'center');
    }
};

/**
 * 
 */
Window_NameInput.prototype.updateCursor = function() {
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

/**
 * @returns {Boolean}
 */
Window_NameInput.prototype.isCursorMovable = function() {
    return this.active;
};

/**
 * @param  {Boolean} wrap
 */
Window_NameInput.prototype.cursorDown = function(wrap) {
    if (this._index < 80 || wrap) {
        this._index = (this._index + 10) % 90;
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_NameInput.prototype.cursorUp = function(wrap) {
    if (this._index >= 10 || wrap) {
        this._index = (this._index + 80) % 90;
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_NameInput.prototype.cursorRight = function(wrap) {
    if (this._index % 10 < 9) {
        this._index++;
    } else if (wrap) {
        this._index -= 9;
    }
};

/**
 * @param  {Boolean} wrap
 */
Window_NameInput.prototype.cursorLeft = function(wrap) {
    if (this._index % 10 > 0) {
        this._index--;
    } else if (wrap) {
        this._index += 9;
    }
};

/**
 * 
 */
Window_NameInput.prototype.cursorPagedown = function() {
    this._page = (this._page + 1) % this.table().length;
    this.refresh();
};

/**
 * 
 */
Window_NameInput.prototype.cursorPageup = function() {
    this._page = (this._page + this.table().length - 1) % this.table().length;
    this.refresh();
};

/**
 * 
 */
Window_NameInput.prototype.processCursorMove = function() {
    var lastPage = this._page;
    Window_Selectable.prototype.processCursorMove.call(this);
    this.updateCursor();
    if (this._page !== lastPage) {
        SoundManager.playCursor();
    }
};

/**
 * 
 */
Window_NameInput.prototype.processHandling = function() {
    if (this.isOpen() && this.active) {
        if (Input.isTriggered('shift')) {
            this.processJump();
        }
        if (Input.isRepeated('cancel')) {
            this.processBack();
        }
        if (Input.isRepeated('ok')) {
            this.processOk();
        }
    }
};

/**
 * @returns {Boolean}
 */
Window_NameInput.prototype.isCancelEnabled = function() {
    return true;
};

/**
 * 
 */
Window_NameInput.prototype.processCancel = function() {
    this.processBack();
};

/**
 * 
 */
Window_NameInput.prototype.processJump = function() {
    if (this._index !== 89) {
        this._index = 89;
        SoundManager.playCursor();
    }
};

/**
 * 
 */
Window_NameInput.prototype.processBack = function() {
    if (this._editWindow.back()) {
        SoundManager.playCancel();
    }
};

/**
 * 
 */
Window_NameInput.prototype.processOk = function() {
    if (this.character()) {
        this.onNameAdd();
    } else if (this.isPageChange()) {
        SoundManager.playOk();
        this.cursorPagedown();
    } else if (this.isOk()) {
        this.onNameOk();
    }
};

/**
 * 
 */
Window_NameInput.prototype.onNameAdd = function() {
    if (this._editWindow.add(this.character())) {
        SoundManager.playOk();
    } else {
        SoundManager.playBuzzer();
    }
};

/**
 * 
 */
Window_NameInput.prototype.onNameOk = function() {
    if (this._editWindow.name() === '') {
        if (this._editWindow.restoreDefault()) {
            SoundManager.playOk();
        } else {
            SoundManager.playBuzzer();
        }
    } else {
        SoundManager.playOk();
        this.callOkHandler();
    }
};





/**
 * The window used for the event command [Show Choices].
 * @class Window_ChoiceList
 * @extends Window_Command
 * @param  {Window_Message} messageWindow
 * 
 * @prop {Window_Message} _messageWindow
 * @prop {Number} _background
 */
function Window_ChoiceList() {
    this.initialize.apply(this, arguments);
}

Window_ChoiceList.prototype = Object.create(Window_Command.prototype);
Window_ChoiceList.prototype.constructor = Window_ChoiceList;

/**
 * オブジェクト生成時の初期化。
 * @param  {Window_Message} messageWindow
 */
Window_ChoiceList.prototype.initialize = function(messageWindow) {
    this._messageWindow = messageWindow;
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
    this.deactivate();
    this._background = 0;
};

/**
 * 
 */
Window_ChoiceList.prototype.start = function() {
    this.updatePlacement();
    this.updateBackground();
    this.refresh();
    this.selectDefault();
    this.open();
    this.activate();
};

/**
 * 
 */
Window_ChoiceList.prototype.selectDefault = function() {
    this.select($gameMessage.choiceDefaultType());
};

/**
 * 
 */
Window_ChoiceList.prototype.updatePlacement = function() {
    var positionType = $gameMessage.choicePositionType();
    var messageY = this._messageWindow.y;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    switch (positionType) {
    case 0:
        this.x = 0;
        break;
    case 1:
        this.x = (Graphics.boxWidth - this.width) / 2;
        break;
    case 2:
        this.x = Graphics.boxWidth - this.width;
        break;
    }
    if (messageY >= Graphics.boxHeight / 2) {
        this.y = messageY - this.height;
    } else {
        this.y = messageY + this._messageWindow.height;
    }
};

/**
 * 
 */
Window_ChoiceList.prototype.updateBackground = function() {
    this._background = $gameMessage.choiceBackground();
    this.setBackgroundType(this._background);
};

/**
 * @returns {Number}
 */
Window_ChoiceList.prototype.windowWidth = function() {
    var width = this.maxChoiceWidth() + this.padding * 2;
    return Math.min(width, Graphics.boxWidth);
};

/**
 * 
 */
Window_ChoiceList.prototype.numVisibleRows = function() {
    var messageY = this._messageWindow.y;
    var messageHeight = this._messageWindow.height;
    var centerY = Graphics.boxHeight / 2;
    var choices = $gameMessage.choices();
    var numLines = choices.length;
    var maxLines = 8;
    if (messageY < centerY && messageY + messageHeight > centerY) {
        maxLines = 4;
    }
    if (numLines > maxLines) {
        numLines = maxLines;
    }
    return numLines;
};

/**
 * @returns {Number}
 */
Window_ChoiceList.prototype.maxChoiceWidth = function() {
    var maxWidth = 96;
    var choices = $gameMessage.choices();
    for (var i = 0; i < choices.length; i++) {
        var choiceWidth = this.textWidthEx(choices[i]) + this.textPadding() * 2;
        if (maxWidth < choiceWidth) {
            maxWidth = choiceWidth;
        }
    }
    return maxWidth;
};

/**
 * @param  {String} text
 * @returns {Number}
 */
Window_ChoiceList.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

/**
 * @returns {Number}
 */
Window_ChoiceList.prototype.contentsHeight = function() {
    return this.maxItems() * this.itemHeight();
};

/**
 * 
 */
Window_ChoiceList.prototype.makeCommandList = function() {
    var choices = $gameMessage.choices();
    for (var i = 0; i < choices.length; i++) {
        this.addCommand(choices[i], 'choice');
    }
};

/**
 * @param  {Number} index
 */
Window_ChoiceList.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    this.drawTextEx(this.commandName(index), rect.x, rect.y);
};

/**
 * @returns {Boolean}
 */
Window_ChoiceList.prototype.isCancelEnabled = function() {
    return $gameMessage.choiceCancelType() !== -1;
};

/**
 * @returns {Boolean}
 */
Window_ChoiceList.prototype.isOkTriggered = function() {
    return Input.isTriggered('ok');
};

/**
 * 
 */
Window_ChoiceList.prototype.callOkHandler = function() {
    $gameMessage.onChoice(this.index());
    this._messageWindow.terminateMessage();
    this.close();
};

/**
 * 
 */
Window_ChoiceList.prototype.callCancelHandler = function() {
    $gameMessage.onChoice($gameMessage.choiceCancelType());
    this._messageWindow.terminateMessage();
    this.close();
};





/**
 * The window used for the event command [Input Number].
 * @class Window_NumberInput
 * @extends Window_Selectable
 * @param {Window_Message} messageWindow
 * 
 * @prop {Window_Message} _messageWindow
 * @prop {Number} _number
 * @prop {Number} _maxDigits
 * @prop {Array<Sprite_Button>} _buttons
 */
function Window_NumberInput() {
    this.initialize.apply(this, arguments);
}

Window_NumberInput.prototype = Object.create(Window_Selectable.prototype);
Window_NumberInput.prototype.constructor = Window_NumberInput;

/**
 * オブジェクト生成時の初期化。
 * @param {Window_Message} messageWindow
 */
Window_NumberInput.prototype.initialize = function(messageWindow) {
    this._messageWindow = messageWindow;
    Window_Selectable.prototype.initialize.call(this, 0, 0, 0, 0);
    this._number = 0;
    this._maxDigits = 1;
    this.openness = 0;
    this.createButtons();
    this.deactivate();
};

/**
 * 
 */
Window_NumberInput.prototype.start = function() {
    this._maxDigits = $gameMessage.numInputMaxDigits();
    this._number = $gameVariables.value($gameMessage.numInputVariableId());
    this._number = this._number.clamp(0, Math.pow(10, this._maxDigits) - 1);
    this.updatePlacement();
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(0);
};

/**
 * 
 */
Window_NumberInput.prototype.updatePlacement = function() {
    var messageY = this._messageWindow.y;
    var spacing = 8;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.boxWidth - this.width) / 2;
    if (messageY >= Graphics.boxHeight / 2) {
        this.y = messageY - this.height - spacing;
    } else {
        this.y = messageY + this._messageWindow.height + spacing;
    }
};

    /**
     * Returns the window width.
     * 
     * @returns {Number} 
     * @memberof Window_NumberInput
     */
Window_NumberInput.prototype.windowWidth = function() {
    return this.maxCols() * this.itemWidth() + this.padding * 2;
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_NumberInput
     */
Window_NumberInput.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

/**
 * @returns {Number}
 */
Window_NumberInput.prototype.maxCols = function() {
    return this._maxDigits;
};

/**
 * @returns {Number}
 */
Window_NumberInput.prototype.maxItems = function() {
    return this._maxDigits;
};

/**
 * @returns {Number}
 */
Window_NumberInput.prototype.spacing = function() {
    return 0;
};

    /**
     * Returns the item width.
     * 
     * @returns {Number} 
     * @memberof Window_NumberInput
     */
Window_NumberInput.prototype.itemWidth = function() {
    return 32;
};

    /**
     * Creates the number input window buttons.
     * 
     * @memberof Window_NumberInput
     */
Window_NumberInput.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 3; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * [1, 2, 4][i];
        var w = buttonWidth * (i === 2 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[1].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[2].setClickHandler(this.onButtonOk.bind(this));
};

    /**
     * Places the number input window buttons.
     * 
     * @memberof Window_NumberInput
     */
Window_NumberInput.prototype.placeButtons = function() {
    var numButtons = this._buttons.length;
    var spacing = 16;
    var totalWidth = -spacing;
    for (var i = 0; i < numButtons; i++) {
        totalWidth += this._buttons[i].width + spacing;
    }
    var x = (this.width - totalWidth) / 2;
    for (var j = 0; j < numButtons; j++) {
        var button = this._buttons[j];
        button.x = x;
        button.y = this.buttonY();
        x += button.width + spacing;
    }
};

/**
 * 
 */
Window_NumberInput.prototype.updateButtonsVisiblity = function() {
    if (TouchInput.date > Input.date) {
        this.showButtons();
    } else {
        this.hideButtons();
    }
};

/**
 * 
 */
Window_NumberInput.prototype.showButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = true;
    }
};

/**
 * 
 */
Window_NumberInput.prototype.hideButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = false;
    }
};

/**
 * @returns {Number}
 */
Window_NumberInput.prototype.buttonY = function() {
    var spacing = 8;
    if (this._messageWindow.y >= Graphics.boxHeight / 2) {
        return 0 - this._buttons[0].height - spacing;
    } else {
        return this.height + spacing;
    }
};

/**
 * 
 */
Window_NumberInput.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    this.processDigitChange();
};

/**
 * 
 */
Window_NumberInput.prototype.processDigitChange = function() {
    if (this.isOpenAndActive()) {
        if (Input.isRepeated('up')) {
            this.changeDigit(true);
        } else if (Input.isRepeated('down')) {
            this.changeDigit(false);
        }
    }
};

/**
 * @param  {Boolean} up
 */
Window_NumberInput.prototype.changeDigit = function(up) {
    var index = this.index();
    var place = Math.pow(10, this._maxDigits - 1 - index);
    var n = Math.floor(this._number / place) % 10;
    this._number -= n * place;
    if (up) {
        n = (n + 1) % 10;
    } else {
        n = (n + 9) % 10;
    }
    this._number += n * place;
    this.refresh();
    SoundManager.playCursor();
};

/**
 * @param  {Boolean} up
 */
Window_NumberInput.prototype.isTouchOkEnabled = function() {
    return false;
};

/**
 * @param  {Boolean} up
 */
Window_NumberInput.prototype.isOkEnabled = function() {
    return true;
};

/**
 * @param  {Boolean} up
 */
Window_NumberInput.prototype.isCancelEnabled = function() {
    return false;
};

/**
 * @param  {Boolean} up
 */
Window_NumberInput.prototype.isOkTriggered = function() {
    return Input.isTriggered('ok');
};

/**
 * 
 */
Window_NumberInput.prototype.processOk = function() {
    SoundManager.playOk();
    $gameVariables.setValue($gameMessage.numInputVariableId(), this._number);
    this._messageWindow.terminateMessage();
    this.updateInputData();
    this.deactivate();
    this.close();
};

/**
 * @param  {Number} index
 */
Window_NumberInput.prototype.drawItem = function(index) {
    var rect = this.itemRect(index);
    var align = 'center';
    var s = this._number.padZero(this._maxDigits);
    var c = s.slice(index, index + 1);
    this.resetTextColor();
    this.drawText(c, rect.x, rect.y, rect.width, align);
};

/**
 * 
 */
Window_NumberInput.prototype.onButtonUp = function() {
    this.changeDigit(true);
};

/**
 * 
 */
Window_NumberInput.prototype.onButtonDown = function() {
    this.changeDigit(false);
};

/**
 * 
 */
Window_NumberInput.prototype.onButtonOk = function() {
    this.processOk();
    this.hideButtons();
};





/**
 * The window used for the event command [Select Item].
 * @class Window_EventItem
 * @param  {Window_Message} messageWindow
 * 
 * @prop {Window_Message} _messageWindow
 */
function Window_EventItem() {
    this.initialize.apply(this, arguments);
}

Window_EventItem.prototype = Object.create(Window_ItemList.prototype);
Window_EventItem.prototype.constructor = Window_EventItem;

/**
 * オブジェクト生成時の初期化。
 * @param  {Window_Message} messageWindow
 */
Window_EventItem.prototype.initialize = function(messageWindow) {
    this._messageWindow = messageWindow;
    var width = Graphics.boxWidth;
    var height = this.windowHeight();
    Window_ItemList.prototype.initialize.call(this, 0, 0, width, height);
    this.openness = 0;
    this.deactivate();
    this.setHandler('ok',     this.onOk.bind(this));
    this.setHandler('cancel', this.onCancel.bind(this));
};

    /**
     * Returns the height off the window.
     * 
     * @returns {Number} 
     * @memberof Window_EventItem
     */
Window_EventItem.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

    /**
     * Returns the number of visible rows.
     * 
     * @returns {Number} 
     * @memberof Window_EventItem
     */
Window_EventItem.prototype.numVisibleRows = function() {
    return 4;
};

    /**
     * Starts the event item window.
     * 
     * @memberof Window_EventItem
     */
Window_EventItem.prototype.start = function() {
    this.refresh();
    this.updatePlacement();
    this.select(0);
    this.open();
    this.activate();
};

/**
 * 
 */
Window_EventItem.prototype.updatePlacement = function() {
    if (this._messageWindow.y >= Graphics.boxHeight / 2) {
        this.y = 0;
    } else {
        this.y = Graphics.boxHeight - this.height;
    }
};

/**
 * @param  {RPG.BaseItem} item
 * @returns {Boolean}
 */
Window_EventItem.prototype.includes = function(item) {
    var itypeId = $gameMessage.itemChoiceItypeId();
    return DataManager.isItem(item) && item.itypeId === itypeId;
};

/**
 * @param  {RPG.BaseItem} item
 * @returns {Boolean}
 */
Window_EventItem.prototype.isEnabled = function(item) {
    return true;
};

/**
 * 
 */
Window_EventItem.prototype.onOk = function() {
    var item = this.item();
    var itemId = item ? item.id : 0;
    $gameVariables.setValue($gameMessage.itemChoiceVariableId(), itemId);
    this._messageWindow.terminateMessage();
    this.close();
};

/**
 * 
 */
Window_EventItem.prototype.onCancel = function() {
    $gameVariables.setValue($gameMessage.itemChoiceVariableId(), 0);
    this._messageWindow.terminateMessage();
    this.close();
};




/**
 * The window for displaying text messages.
 * @class Window_Message
 * @extends Window_Base
 * 
 * @prop {Number} _background
 * @prop {Number} _positionType
 * @prop {Number} _waitCount
 * @prop {MV.TextState} _faceBitmap
 * @prop {Boolean} _pauseSkip
 * @prop {Boolean} _showFast
 * @prop {Boolean} _lineShowFast
 * @prop {Window_Gold} _goldWindow
 * @prop {Window_ChoiceList} _choiceWindow
 * @prop {Window_NumberInput} _numberWindow
 * @prop {Window_EventItem} _itemWindow
 */
function Window_Message() {
    this.initialize.apply(this, arguments);
}

Window_Message.prototype = Object.create(Window_Base.prototype);
Window_Message.prototype.constructor = Window_Message;

/**
 * オブジェクト生成時の初期化。
 */
Window_Message.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    Window_Base.prototype.initialize.call(this, x, 0, width, height);
    this.openness = 0;
    this.initMembers();
    this.createSubWindows();
    this.updatePlacement();
};

/**
 * 
 */
Window_Message.prototype.initMembers = function() {
    this._imageReservationId = Utils.generateRuntimeId();
    this._background = 0;
    this._positionType = 2;
    this._waitCount = 0;
    this._faceBitmap = null;
    this._textState = null;
    this.clearFlags();
};

    /**
     * Returns the sub windows attached to the message window.
     * 
     * @returns {Array<Window_Base>} 
     * @memberof Window_Message
     */
Window_Message.prototype.subWindows = function() {
    return [this._goldWindow, this._choiceWindow,
            this._numberWindow, this._itemWindow];
};

    /**
     * Creates the sub windows for the message window.
     * 
     * @memberof Window_Message
     */
Window_Message.prototype.createSubWindows = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
    this._goldWindow.openness = 0;
    this._choiceWindow = new Window_ChoiceList(this);
    this._numberWindow = new Window_NumberInput(this);
    this._itemWindow = new Window_EventItem(this);
};

    /**
     * Returns the width of the window.
     * 
     * @returns {Number} 
     * @memberof Window_Message
     */
Window_Message.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

    /**
     * Returns the height of the window.
     * 
     * @returns {Number} 
     * @memberof Window_Message
     */
Window_Message.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

/**
 * 
 */
Window_Message.prototype.clearFlags = function() {
    this._showFast = false;
    this._lineShowFast = false;
    this._pauseSkip = false;
};

    /**
     * Returns the number of visible rows within the message window.
     * 
     * @returns {Number} 
     * @memberof Window_Message
     */
Window_Message.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * 
 */
Window_Message.prototype.update = function() {
    this.checkToNotClose();
    Window_Base.prototype.update.call(this);
    while (!this.isOpening() && !this.isClosing()) {
        if (this.updateWait()) {
            return;
        } else if (this.updateLoading()) {
            return;
        } else if (this.updateInput()) {
            return;
        } else if (this.updateMessage()) {
            return;
        } else if (this.canStart()) {
            this.startMessage();
        } else {
            this.startInput();
            return;
        }
    }
};

/**
 * 
 */
Window_Message.prototype.checkToNotClose = function() {
    if (this.isClosing() && this.isOpen()) {
        if (this.doesContinue()) {
            this.open();
        }
    }
};

    /**
     * Returns true if the message window can start.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.canStart = function() {
    return $gameMessage.hasText() && !$gameMessage.scrollMode();
};

    /**
     * Starts the displaying of the message within the message window.
     * 
     * @memberof Window_Message
     */
Window_Message.prototype.startMessage = function() {
    this._textState = {};
    this._textState.index = 0;
    this._textState.text = this.convertEscapeCharacters($gameMessage.allText());
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
    this.open();
};

    /**
     * Updates the placement of the message window.
     * 
     * @memberof Window_Message
     */
Window_Message.prototype.updatePlacement = function() {
    this._positionType = $gameMessage.positionType();
    this.y = this._positionType * (Graphics.boxHeight - this.height) / 2;
    this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
};

    /**
     * Updates the background of the message window.
     * 
     * @memberof Window_Message
     */
Window_Message.prototype.updateBackground = function() {
    this._background = $gameMessage.background();
    this.setBackgroundType(this._background);
};

    /**
     * Terminates the message and closes the gold and message window.
     * 
     * @memberof Window_Message
     */
Window_Message.prototype.terminateMessage = function() {
    this.close();
    this._goldWindow.close();
    $gameMessage.clear();
};

    /**
     * Updates the wait of the message window.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.updateWait = function() {
    if (this._waitCount > 0) {
        this._waitCount--;
        return true;
    } else {
        return false;
    }
};

/**
 * 
 */
Window_Message.prototype.updateLoading = function() {
    if (this._faceBitmap) {
        if (this._faceBitmap.isReady()) {
            this.drawMessageFace();
            this._faceBitmap = null;
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

    /**
     * Updates input when the message window is processing.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.updateInput = function() {
    if (this.isAnySubWindowActive()) {
        return true;
    }
    if (this.pause) {
        if (this.isTriggered()) {
            Input.update();
            this.pause = false;
            if (!this._textState) {
                this.terminateMessage();
            }
        }
        return true;
    }
    return false;
};

    /**
     * Returns true if any sub window is active.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.isAnySubWindowActive = function() {
    return (this._choiceWindow.active ||
            this._numberWindow.active ||
            this._itemWindow.active);
};

    /**
     * Updates the message.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.updateMessage = function() {
    if (this._textState) {
        while (!this.isEndOfText(this._textState)) {
            if (this.needsNewPage(this._textState)) {
                this.newPage(this._textState);
            }
            this.updateShowFast();
            this.processCharacter(this._textState);
            if (!this._showFast && !this._lineShowFast) {
                break;
            }
            if (this.pause || this._waitCount > 0) {
                break;
            }
        }
        if (this.isEndOfText(this._textState)) {
            this.onEndOfText();
        }
        return true;
    } else {
        return false;
    }
};

    /**
     * Handler for when there is no text left to display within
     * the message window.
     * @memberof Window_Message
     */
Window_Message.prototype.onEndOfText = function() {
    if (!this.startInput()) {
        if (!this._pauseSkip) {
            this.startPause();
        } else {
            this.terminateMessage();
        }
    }
    this._textState = null;
};

/**
 * @returns {Boolean}
 */
Window_Message.prototype.startInput = function() {
    if ($gameMessage.isChoice()) {
        this._choiceWindow.start();
        return true;
    } else if ($gameMessage.isNumberInput()) {
        this._numberWindow.start();
        return true;
    } else if ($gameMessage.isItemChoice()) {
        this._itemWindow.start();
        return true;
    } else {
        return false;
    }
};

    /**
     * Returns true if the ok or cancel inputs have been triggered
     * multiple times.
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.isTriggered = function() {
    return (Input.isRepeated('ok') || Input.isRepeated('cancel') ||
            TouchInput.isRepeated());
};

    /**
     * Returns true if the message window still has text
     * and settings have not changed.
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.doesContinue = function() {
    return ($gameMessage.hasText() && !$gameMessage.scrollMode() &&
            !this.areSettingsChanged());
};

    /**
     * Returns true if the message window settings have been changed.
     * 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.areSettingsChanged = function() {
    return (this._background !== $gameMessage.background() ||
            this._positionType !== $gameMessage.positionType());
};

/**
 * 
 */
Window_Message.prototype.updateShowFast = function() {
    if (this.isTriggered()) {
        this._showFast = true;
    }
};

/**
 * @param  {MV.TextState} textState
 */
Window_Message.prototype.newPage = function(textState) {
    this.contents.clear();
    this.resetFontSettings();
    this.clearFlags();
    this.loadMessageFace();
    textState.x = this.newLineX();
    textState.y = 0;
    textState.left = this.newLineX();
    textState.height = this.calcTextHeight(textState, false);
};

/**
 * 
 */
Window_Message.prototype.loadMessageFace = function() {
    this._faceBitmap = ImageManager.reserveFace($gameMessage.faceName(), 0, this._imageReservationId);
};

/**
 * 
 */
Window_Message.prototype.drawMessageFace = function() {
    this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, 0);
    ImageManager.releaseReservation(this._imageReservationId);
};

/**
 * @returns {Number}
 */
Window_Message.prototype.newLineX = function() {
    return $gameMessage.faceName() === '' ? 0 : 168;
};

/**
 * @param  {MV.TextState} textState
 */
Window_Message.prototype.processNewLine = function(textState) {
    this._lineShowFast = false;
    Window_Base.prototype.processNewLine.call(this, textState);
    if (this.needsNewPage(textState)) {
        this.startPause();
    }
};

/**
 * @param  {MV.TextState} textState
 */
Window_Message.prototype.processNewPage = function(textState) {
    Window_Base.prototype.processNewPage.call(this, textState);
    if (textState.text[textState.index] === '\n') {
        textState.index++;
    }
    textState.y = this.contents.height;
    this.startPause();
};

    /**
     * Returns true if there is no text left to display in the message
     * window.
     * @param {MV.TextState} textState 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.isEndOfText = function(textState) {
    return textState.index >= textState.text.length;
};

    /**
     * Returns true if the text state needs a new page to display text.
     * 
     * @param {MV.TextState} textState 
     * @returns {Boolean} 
     * @memberof Window_Message
     */
Window_Message.prototype.needsNewPage = function(textState) {
    return (!this.isEndOfText(textState) &&
            textState.y + textState.height > this.contents.height);
};

/**
 * @param  {String} code
 * @param  {MV.TextState} textState
 */
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case '$':
        this._goldWindow.open();
        break;
    case '.':
        this.startWait(15);
        break;
    case '|':
        this.startWait(60);
        break;
    case '!':
        this.startPause();
        break;
    case '>':
        this._lineShowFast = true;
        break;
    case '<':
        this._lineShowFast = false;
        break;
    case '^':
        this._pauseSkip = true;
        break;
    default:
        Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
        break;
    }
};

    /**
     * Starts a wait for the message window.
     * 
     * @param {Number} count 
     * @memberof Window_Message
     */
Window_Message.prototype.startWait = function(count) {
    this._waitCount = count;
};

    /**
     * Starts a pause for the message window; this will only be
     * lifted if the user presses a button.
     * @memberof Window_Message
     */
Window_Message.prototype.startPause = function() {
    this.startWait(10);
    this.pause = true;
};





/**
 * The window for displaying scrolling text. No frame is displayed, but it
 * is handled as a window for convenience.
 * @class Window_ScrollText
 * @extends Window_Base
 * 
 * @prop {String} _text
 * @prop {Number} _allTextHeight
 */
function Window_ScrollText() {
    this.initialize.apply(this, arguments);
}

Window_ScrollText.prototype = Object.create(Window_Base.prototype);
Window_ScrollText.prototype.constructor = Window_ScrollText;

/**
 * オブジェクト生成時の初期化。
 */
Window_ScrollText.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this.opacity = 0;
    this.hide();
    this._text = '';
    this._allTextHeight = 0;
};

/**
 * 
 */
Window_ScrollText.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if ($gameMessage.scrollMode()) {
        if (this._text) {
            this.updateMessage();
        }
        if (!this._text && $gameMessage.hasText()) {
            this.startMessage();
        }
    }
};

    /**
     * Starts the displaying of a message in the scroll text window.
     * 
     * @memberof Window_ScrollText
     */
Window_ScrollText.prototype.startMessage = function() {
    this._text = $gameMessage.allText();
    this.refresh();
    this.show();
};

/**
 * 
 */
Window_ScrollText.prototype.refresh = function() {
    var textState = { index: 0 };
    textState.text = this.convertEscapeCharacters(this._text);
    this.resetFontSettings();
    this._allTextHeight = this.calcTextHeight(textState, true);
    this.createContents();
    this.origin.y = -this.height;
    this.drawTextEx(this._text, this.textPadding(), 1);
};

/**
 * 
 */
Window_ScrollText.prototype.contentsHeight = function() {
    return Math.max(this._allTextHeight, 1);
};

/**
 * 
 */
Window_ScrollText.prototype.updateMessage = function() {
    this.origin.y += this.scrollSpeed();
    if (this.origin.y >= this.contents.height) {
        this.terminateMessage();
    }
};

/**
 * @returns {Number}
 */
Window_ScrollText.prototype.scrollSpeed = function() {
    var speed = $gameMessage.scrollSpeed() / 2;
    if (this.isFastForward()) {
        speed *= this.fastForwardRate();
    }
    return speed;
};

    /**
     * Returns true if the scene is in fast forward mode.
     * 
     * @returns {Boolean} 
     * @memberof Window_ScrollText
     */
Window_ScrollText.prototype.isFastForward = function() {
    if ($gameMessage.scrollNoFast()) {
        return false;
    } else {
        return (Input.isPressed('ok') || Input.isPressed('shift') ||
                TouchInput.isPressed());
    }
};

    /**
     * Returns the fast forward rate of the scroll text window.
     * 
     * @returns {Number} 
     * @memberof Window_ScrollText
     */
Window_ScrollText.prototype.fastForwardRate = function() {
    return 3;
};

    /**
     * Terminates the message and the scroll text window is hidden.
     * 
     * @memberof Window_ScrollText
     */
Window_ScrollText.prototype.terminateMessage = function() {
    this._text = null;
    $gameMessage.clear();
    this.hide();
};




/**
 * The window for displaying the map name on the map screen.
 * @class Window_MapName
 * @extends Window_Base
 * 
 * @prop {Number} _showCount
 */
function Window_MapName() {
    this.initialize.apply(this, arguments);
}

Window_MapName.prototype = Object.create(Window_Base.prototype);
Window_MapName.prototype.constructor = Window_MapName;

/**
 * オブジェクト生成時の初期化。
 */
Window_MapName.prototype.initialize = function() {
    var wight = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, wight, height);
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._showCount = 0;
    this.refresh();
};

    /**
     * Returns the window width.
     * 
     * @returns {Number} 
     * @memberof Window_MapName
     */
Window_MapName.prototype.windowWidth = function() {
    return 360;
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_MapName
     */
Window_MapName.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

/**
 * 
 */
Window_MapName.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this._showCount > 0 && $gameMap.isNameDisplayEnabled()) {
        this.updateFadeIn();
        this._showCount--;
    } else {
        this.updateFadeOut();
    }
};

/**
 * 
 */
Window_MapName.prototype.updateFadeIn = function() {
    this.contentsOpacity += 16;
};

/**
 * 
 */
Window_MapName.prototype.updateFadeOut = function() {
    this.contentsOpacity -= 16;
};

/**
 * 
 */
Window_MapName.prototype.open = function() {
    this.refresh();
    this._showCount = 150;
};

/**
 * 
 */
Window_MapName.prototype.close = function() {
    this._showCount = 0;
};

    /**
     * Windows the map name window.
     * 
     * @memberof Window_MapName
     */
Window_MapName.prototype.refresh = function() {
    this.contents.clear();
    if ($gameMap.displayName()) {
        var width = this.contentsWidth();
        this.drawBackground(0, 0, width, this.lineHeight());
        this.drawText($gameMap.displayName(), 0, 0, width, 'center');
    }
};

    /**
     * Draws the background of the map name window.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     * @memberof Window_MapName
     */
Window_MapName.prototype.drawBackground = function(x, y, width, height) {
    var color1 = this.dimColor1();
    var color2 = this.dimColor2();
    this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
    this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
};





/**
 * The window for displaying battle progress. No frame is displayed, but it is
 * handled as a window for convenience.
 * @class Window_BattleLog
 * @extends Window_Selectable
 * 
 * @prop {Array<String>} _lines
 * @prop {Array<MV.BattleLogMethod>} _methods
 * @prop {Number} _waitCount
 * @prop {String} _waitMode
 * @prop {Array<Number>} _baseLineStack
 * @prop {Spriteset_Battle} _spriteset
 */
function Window_BattleLog() {
    this.initialize.apply(this, arguments);
}

Window_BattleLog.prototype = Object.create(Window_Selectable.prototype);
Window_BattleLog.prototype.constructor = Window_BattleLog;

/**
 * オブジェクト生成時の初期化。
 */
Window_BattleLog.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this.opacity = 0;
    this._lines = [];
    this._methods = [];
    this._waitCount = 0;
    this._waitMode = '';
    this._baseLineStack = [];
    this._spriteset = null;
    this.createBackBitmap();
    this.createBackSprite();
    this.refresh();
};

/**
 * @param  {Spriteset_Battle} spriteset
 */
Window_BattleLog.prototype.setSpriteset = function(spriteset) {
    this._spriteset = spriteset;
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.windowHeight = function() {
    return this.fittingHeight(this.maxLines());
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.maxLines = function() {
    return 10;
};

/**
 * 
 */
Window_BattleLog.prototype.createBackBitmap = function() {
    this._backBitmap = new Bitmap(this.width, this.height);
};

/**
 * 
 */
Window_BattleLog.prototype.createBackSprite = function() {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = this._backBitmap;
    this._backSprite.y = this.y;
    this.addChildToBack(this._backSprite);
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.numLines = function() {
    return this._lines.length;
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.messageSpeed = function() {
    return 16;
};

/**
 * @returns {Boolean}
 */
Window_BattleLog.prototype.isBusy = function() {
    return this._waitCount > 0 || this._waitMode || this._methods.length > 0;
};

/**
 * 
 */
Window_BattleLog.prototype.update = function() {
    if (!this.updateWait()) {
        this.callNextMethod();
    }
};

/**
 * @returns {Boolean}
 */
Window_BattleLog.prototype.updateWait = function() {
    return this.updateWaitCount() || this.updateWaitMode();
};

/**
 * @returns {Boolean}
 */
Window_BattleLog.prototype.updateWaitCount = function() {
    if (this._waitCount > 0) {
        this._waitCount -= this.isFastForward() ? 3 : 1;
        if (this._waitCount < 0) {
            this._waitCount = 0;
        }
        return true;
    }
    return false;
};

/**
 * @returns {Boolean}
 */
Window_BattleLog.prototype.updateWaitMode = function() {
    var waiting = false;
    switch (this._waitMode) {
    case 'effect':
        waiting = this._spriteset.isEffecting();
        break;
    case 'movement':
        waiting = this._spriteset.isAnyoneMoving();
        break;
    }
    if (!waiting) {
        this._waitMode = '';
    }
    return waiting;
};

/**
 * @param  {String} waitMode
 */
Window_BattleLog.prototype.setWaitMode = function(waitMode) {
    this._waitMode = waitMode;
};

/**
 * 
 */
Window_BattleLog.prototype.callNextMethod = function() {
    if (this._methods.length > 0) {
        var method = this._methods.shift();
        if (method.name && this[method.name]) {
            this[method.name].apply(this, method.params);
        } else {
            throw new Error('Method not found: ' + method.name);
        }
    }
};

/**
 * @returns {Boolean}
 */
Window_BattleLog.prototype.isFastForward = function() {
    return (Input.isLongPressed('ok') || Input.isPressed('shift') ||
            TouchInput.isLongPressed());
};

/**
 * @param  {String} methodName
 * @param  {any[]} args ...
 */
Window_BattleLog.prototype.push = function(methodName) {
    var methodArgs = Array.prototype.slice.call(arguments, 1);
    this._methods.push({ name: methodName, params: methodArgs });
};

/**
 * 
 */
Window_BattleLog.prototype.clear = function() {
    this._lines = [];
    this._baseLineStack = [];
    this.refresh();
};

/**
 * 
 */
Window_BattleLog.prototype.wait = function() {
    this._waitCount = this.messageSpeed();
};

/**
 * 
 */
Window_BattleLog.prototype.waitForEffect = function() {
    this.setWaitMode('effect');
};

/**
 * 
 */
Window_BattleLog.prototype.waitForMovement = function() {
    this.setWaitMode('movement');
};

/**
 * @param  {String} text
 */
Window_BattleLog.prototype.addText = function(text) {
    this._lines.push(text);
    this.refresh();
    this.wait();
};

/**
 * 
 */
Window_BattleLog.prototype.pushBaseLine = function() {
    this._baseLineStack.push(this._lines.length);
};

/**
 * 
 */
Window_BattleLog.prototype.popBaseLine = function() {
    var baseLine = this._baseLineStack.pop();
    while (this._lines.length > baseLine) {
        this._lines.pop();
    }
};

/**
 * 
 */
Window_BattleLog.prototype.waitForNewLine = function() {
    var baseLine = 0;
    if (this._baseLineStack.length > 0) {
        baseLine = this._baseLineStack[this._baseLineStack.length - 1];
    }
    if (this._lines.length > baseLine) {
        this.wait();
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.popupDamage = function(target) {
    target.startDamagePopup();
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Action} action
 */
Window_BattleLog.prototype.performActionStart = function(subject, action) {
    subject.performActionStart(action);
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Action} action
 */
Window_BattleLog.prototype.performAction = function(subject, action) {
    subject.performAction(action);
};


/**
 * @param  {Game_Battler} subject
 */
Window_BattleLog.prototype.performActionEnd = function(subject) {
    subject.performActionEnd();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performDamage = function(target) {
    target.performDamage();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performMiss = function(target) {
    target.performMiss();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performRecovery = function(target) {
    target.performRecovery();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performEvasion = function(target) {
    target.performEvasion();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performMagicEvasion = function(target) {
    target.performMagicEvasion();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performCounter = function(target) {
    target.performCounter();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performReflection = function(target) {
    target.performReflection();
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performSubstitute = function(substitute, target) {
    substitute.performSubstitute(target);
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.performCollapse = function(target) {
    target.performCollapse();
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} targets
 * @param  {Number} animationId
 */
Window_BattleLog.prototype.showAnimation = function(subject, targets, animationId) {
    if (animationId < 0) {
        this.showAttackAnimation(subject, targets);
    } else {
        this.showNormalAnimation(targets, animationId);
    }
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} targets
 */
Window_BattleLog.prototype.showAttackAnimation = function(subject, targets) {
    if (subject.isActor()) {
        this.showActorAttackAnimation(subject, targets);
    } else {
        this.showEnemyAttackAnimation(subject, targets);
    }
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} targets
 */
Window_BattleLog.prototype.showActorAttackAnimation = function(subject, targets) {
    this.showNormalAnimation(targets, subject.attackAnimationId1(), false);
    this.showNormalAnimation(targets, subject.attackAnimationId2(), true);
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} targets
 */
Window_BattleLog.prototype.showEnemyAttackAnimation = function(subject, targets) {
    SoundManager.playEnemyAttack();
};

/**
 * @param  {Game_Battler} targets
 * @param  {Number} animationId
 * @param  {Boolean} mirror
 */
Window_BattleLog.prototype.showNormalAnimation = function(targets, animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
        var delay = this.animationBaseDelay();
        var nextDelay = this.animationNextDelay();
        targets.forEach(function(target) {
            target.startAnimation(animationId, mirror, delay);
            delay += nextDelay;
        });
    }
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.animationBaseDelay = function() {
    return 8;
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.animationNextDelay = function() {
    return 12;
};

/**
 * 
 */
Window_BattleLog.prototype.refresh = function() {
    this.drawBackground();
    this.contents.clear();
    for (var i = 0; i < this._lines.length; i++) {
        this.drawLineText(i);
    }
};

/**
 * 
 */
Window_BattleLog.prototype.drawBackground = function() {
    var rect = this.backRect();
    var color = this.backColor();
    this._backBitmap.clear();
    this._backBitmap.paintOpacity = this.backPaintOpacity();
    this._backBitmap.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this._backBitmap.paintOpacity = 255;
};

/**
 * @returns {Rectangle}
 */
Window_BattleLog.prototype.backRect = function() {
    return {
        x: 0,
        y: this.padding,
        width: this.width,
        height: this.numLines() * this.lineHeight()
    };
};

/**
 * @returns {String}
 */
Window_BattleLog.prototype.backColor = function() {
    return '#000000';
};

/**
 * @returns {Number}
 */
Window_BattleLog.prototype.backPaintOpacity = function() {
    return 64;
};

/**
 * @param  {Number} index
 */
Window_BattleLog.prototype.drawLineText = function(index) {
    var rect = this.itemRectForText(index);
    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
    this.drawTextEx(this._lines[index], rect.x, rect.y, rect.width);
};

/**
 * 
 */
Window_BattleLog.prototype.startTurn = function() {
    this.push('wait');
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Action} action
 * @param  {Array<Game_Battler>} targets
 */
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
    var item = action.item();
    this.push('performActionStart', subject, action);
    this.push('waitForMovement');
    this.push('performAction', subject, action);
    this.push('showAnimation', subject, targets.clone(), item.animationId);
    this.displayAction(subject, item);
};

/**
 * @param  {Game_Battler} subject
 */
Window_BattleLog.prototype.endAction = function(subject) {
    this.push('waitForNewLine');
    this.push('clear');
    this.push('performActionEnd', subject);
};

/**
 * @param  {Game_Battler} subject
 */
Window_BattleLog.prototype.displayCurrentState = function(subject) {
    var stateText = subject.mostImportantStateText();
    if (stateText) {
        this.push('addText', subject.name() + stateText);
        this.push('wait');
        this.push('clear');
    }
};

/**
 * @param  {Game_Battler} subject
 */
Window_BattleLog.prototype.displayRegeneration = function(subject) {
    this.push('popupDamage', subject);
};

/**
 * @param  {Game_Battler} subject
 * @param  {Number} item
 */
Window_BattleLog.prototype.displayAction = function(subject, item) {
    var numMethods = this._methods.length;
    if (DataManager.isSkill(item)) {
        if (item.message1) {
            this.push('addText', subject.name() + item.message1.format(item.name));
        }
        if (item.message2) {
            this.push('addText', item.message2.format(item.name));
        }
    } else {
        this.push('addText', TextManager.useItem.format(subject.name(), item.name));
    }
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayCounter = function(target) {
    this.push('performCounter', target);
    this.push('addText', TextManager.counterAttack.format(target.name()));
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayReflection = function(target) {
    this.push('performReflection', target);
    this.push('addText', TextManager.magicReflection.format(target.name()));
};

/**
 * @param  {Game_Battler} substitute
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displaySubstitute = function(substitute, target) {
    var substName = substitute.name();
    this.push('performSubstitute', substitute, target);
    this.push('addText', TextManager.substitute.format(substName, target.name()));
};

/**
 * @param  {Game_Battler} subject
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayActionResults = function(subject, target) {
    if (target.result().used) {
        this.push('pushBaseLine');
        this.displayCritical(target);
        this.push('popupDamage', target);
        this.push('popupDamage', subject);
        this.displayDamage(target);
        this.displayAffectedStatus(target);
        this.displayFailure(target);
        this.push('waitForNewLine');
        this.push('popBaseLine');
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayFailure = function(target) {
    if (target.result().isHit() && !target.result().success) {
        this.push('addText', TextManager.actionFailure.format(target.name()));
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayCritical = function(target) {
    if (target.result().critical) {
        if (target.isActor()) {
            this.push('addText', TextManager.criticalToActor);
        } else {
            this.push('addText', TextManager.criticalToEnemy);
        }
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayDamage = function(target) {
    if (target.result().missed) {
        this.displayMiss(target);
    } else if (target.result().evaded) {
        this.displayEvasion(target);
    } else {
        this.displayHpDamage(target);
        this.displayMpDamage(target);
        this.displayTpDamage(target);
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayMiss = function(target) {
    var fmt;
    if (target.result().physical) {
        fmt = target.isActor() ? TextManager.actorNoHit : TextManager.enemyNoHit;
        this.push('performMiss', target);
    } else {
        fmt = TextManager.actionFailure;
    }
    this.push('addText', fmt.format(target.name()));
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayEvasion = function(target) {
    var fmt;
    if (target.result().physical) {
        fmt = TextManager.evasion;
        this.push('performEvasion', target);
    } else {
        fmt = TextManager.magicEvasion;
        this.push('performMagicEvasion', target);
    }
    this.push('addText', fmt.format(target.name()));
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayHpDamage = function(target) {
    if (target.result().hpAffected) {
        if (target.result().hpDamage > 0 && !target.result().drain) {
            this.push('performDamage', target);
        }
        if (target.result().hpDamage < 0) {
            this.push('performRecovery', target);
        }
        this.push('addText', this.makeHpDamageText(target));
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayMpDamage = function(target) {
    if (target.isAlive() && target.result().mpDamage !== 0) {
        if (target.result().mpDamage < 0) {
            this.push('performRecovery', target);
        }
        this.push('addText', this.makeMpDamageText(target));
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayTpDamage = function(target) {
    if (target.isAlive() && target.result().tpDamage !== 0) {
        if (target.result().tpDamage < 0) {
            this.push('performRecovery', target);
        }
        this.push('addText', this.makeTpDamageText(target));
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayAffectedStatus = function(target) {
    if (target.result().isStatusAffected()) {
        this.push('pushBaseLine');
        this.displayChangedStates(target);
        this.displayChangedBuffs(target);
        this.push('waitForNewLine');
        this.push('popBaseLine');
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayAutoAffectedStatus = function(target) {
    if (target.result().isStatusAffected()) {
        this.displayAffectedStatus(target, null);
        this.push('clear');
    }
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayChangedStates = function(target) {
    this.displayAddedStates(target);
    this.displayRemovedStates(target);
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayAddedStates = function(target) {
    target.result().addedStateObjects().forEach(function(state) {
        var stateMsg = target.isActor() ? state.message1 : state.message2;
        if (state.id === target.deathStateId()) {
            this.push('performCollapse', target);
        }
        if (stateMsg) {
            this.push('popBaseLine');
            this.push('pushBaseLine');
            this.push('addText', target.name() + stateMsg);
            this.push('waitForEffect');
        }
    }, this);
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayRemovedStates = function(target) {
    target.result().removedStateObjects().forEach(function(state) {
        if (state.message4) {
            this.push('popBaseLine');
            this.push('pushBaseLine');
            this.push('addText', target.name() + state.message4);
        }
    }, this);
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.displayChangedBuffs = function(target) {
    var result = target.result();
    this.displayBuffs(target, result.addedBuffs, TextManager.buffAdd);
    this.displayBuffs(target, result.addedDebuffs, TextManager.debuffAdd);
    this.displayBuffs(target, result.removedBuffs, TextManager.buffRemove);
};

/**
 * @param  {Game_Battler} target
 * @param  {Array<Number>} buffs
 * @param  {String} fmt
 */
Window_BattleLog.prototype.displayBuffs = function(target, buffs, fmt) {
    buffs.forEach(function(paramId) {
        this.push('popBaseLine');
        this.push('pushBaseLine');
        this.push('addText', fmt.format(target.name(), TextManager.param(paramId)));
    }, this);
};

/**
 * @param  {Game_Battler} target
 */
Window_BattleLog.prototype.makeHpDamageText = function(target) {
    var result = target.result();
    var damage = result.hpDamage;
    var isActor = target.isActor();
    var fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return fmt.format(target.name(), TextManager.hp, damage);
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorDamage : TextManager.enemyDamage;
        return fmt.format(target.name(), damage);
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
        return fmt.format(target.name(), TextManager.hp, -damage);
    } else {
        fmt = isActor ? TextManager.actorNoDamage : TextManager.enemyNoDamage;
        return fmt.format(target.name());
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {String}
 */
Window_BattleLog.prototype.makeMpDamageText = function(target) {
    var result = target.result();
    var damage = result.mpDamage;
    var isActor = target.isActor();
    var fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return fmt.format(target.name(), TextManager.mp, damage);
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return fmt.format(target.name(), TextManager.mp, damage);
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
        return fmt.format(target.name(), TextManager.mp, -damage);
    } else {
        return '';
    }
};

/**
 * @param  {Game_Battler} target
 * @returns {String}
 */
Window_BattleLog.prototype.makeTpDamageText = function(target) {
    var result = target.result();
    var damage = result.tpDamage;
    var isActor = target.isActor();
    var fmt;
    if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return fmt.format(target.name(), TextManager.tp, damage);
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorGain : TextManager.enemyGain;
        return fmt.format(target.name(), TextManager.tp, -damage);
    } else {
        return '';
    }
};





/**
 * The window for selecting whether to fight or escape on the battle screen.
 * @class Window_PartyCommand
 * @extends Window_Command
 */
function Window_PartyCommand() {
    this.initialize.apply(this, arguments);
}

Window_PartyCommand.prototype = Object.create(Window_Command.prototype);
Window_PartyCommand.prototype.constructor = Window_PartyCommand;

/**
 * オブジェクト生成時の初期化。
 */
Window_PartyCommand.prototype.initialize = function() {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 0, y);
    this.openness = 0;
    this.deactivate();
};

/**
 * @returns {Number}
 */
Window_PartyCommand.prototype.windowWidth = function() {
    return 192;
};

/**
 * @returns {Number}
 */
Window_PartyCommand.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * 
 */
Window_PartyCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.fight,  'fight');
    this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
};

/**
 * 
 */
Window_PartyCommand.prototype.setup = function() {
    this.clearCommandList();
    this.makeCommandList();
    this.refresh();
    this.select(0);
    this.activate();
    this.open();
};





/**
 * The window for selecting an actor's action on the battle screen.
 * @class Window_ActorCommand
 * @extends Window_Command
 * 
 * @prop {Game_Actor} _actor
 */
function Window_ActorCommand() {
    this.initialize.apply(this, arguments);
}

Window_ActorCommand.prototype = Object.create(Window_Command.prototype);
Window_ActorCommand.prototype.constructor = Window_ActorCommand;

/**
 * オブジェクト生成時の初期化。
 */
Window_ActorCommand.prototype.initialize = function() {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 0, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

/**
 * @returns {Number}
 */
Window_ActorCommand.prototype.windowWidth = function() {
    return 192;
};

/**
 * @returns {Number}
 */
Window_ActorCommand.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * 
 */
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
        this.addSkillCommands();
        this.addGuardCommand();
        this.addItemCommand();
    }
};

    /**
     * Adds the attack command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
Window_ActorCommand.prototype.addAttackCommand = function() {
    this.addCommand(TextManager.attack, 'attack', this._actor.canAttack());
};

    /**
     * Adds the skill command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

    /**
     * Adds the guard command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
Window_ActorCommand.prototype.addGuardCommand = function() {
    this.addCommand(TextManager.guard, 'guard', this._actor.canGuard());
};

    /**
     * Adds the item command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
Window_ActorCommand.prototype.addItemCommand = function() {
    this.addCommand(TextManager.item, 'item');
};

    /**
     * Sets up the actor command window with a specified actor.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_ActorCommand
     */
Window_ActorCommand.prototype.setup = function(actor) {
    this._actor = actor;
    this.clearCommandList();
    this.makeCommandList();
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};

/**
 * 
 */
Window_ActorCommand.prototype.processOk = function() {
    if (this._actor) {
        if (ConfigManager.commandRemember) {
            this._actor.setLastCommandSymbol(this.currentSymbol());
        } else {
            this._actor.setLastCommandSymbol('');
        }
    }
    Window_Command.prototype.processOk.call(this);
};

/**
 * 
 */
Window_ActorCommand.prototype.selectLast = function() {
    this.select(0);
    if (this._actor && ConfigManager.commandRemember) {
        var symbol = this._actor.lastCommandSymbol();
        this.selectSymbol(symbol);
        if (symbol === 'skill') {
            var skill = this._actor.lastBattleSkill();
            if (skill) {
                this.selectExt(skill.stypeId);
            }
        }
    }
};





/**
 * The window for displaying the status of party members on the battle screen.
 * Super class of {@link Window_BattleActor}
 * @class Window_BattleStatus
 * @extends Window_Selectable
 */
function Window_BattleStatus() {
    this.initialize.apply(this, arguments);
}

Window_BattleStatus.prototype = Object.create(Window_Selectable.prototype);
Window_BattleStatus.prototype.constructor = Window_BattleStatus;

/**
 * オブジェクト生成時の初期化。
 */
Window_BattleStatus.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = Graphics.boxWidth - width;
    var y = Graphics.boxHeight - height;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.openness = 0;
};

    /**
     * Returns the window width.
     * 
     * @returns {Number} 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - 192;
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

    /**
     * Returns the number of visible rows.
     * 
     * @returns {Number} 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * @returns {Number}
 */
Window_BattleStatus.prototype.maxItems = function() {
    return $gameParty.battleMembers().length;
};

/**
 * 
 */
Window_BattleStatus.prototype.refresh = function() {
    this.contents.clear();
    this.drawAllItems();
};

/**
 * @param {Number} index
 */
Window_BattleStatus.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    this.drawBasicArea(this.basicAreaRect(index), actor);
    this.drawGaugeArea(this.gaugeAreaRect(index), actor);
};

/**
 * @param {Number} index
 * @returns {Rectangle}
 */
Window_BattleStatus.prototype.basicAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.width -= this.gaugeAreaWidth() + 15;
    return rect;
};

    /**
     * returns a rectangle for the gauges in the gauge area.
     * 
     * @param {Number} index 
     * @returns {Rectangle} 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.gaugeAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.x += rect.width - this.gaugeAreaWidth();
    rect.width = this.gaugeAreaWidth();
    return rect;
};

    /**
     * Returns the width of the guage area.
     * 
     * @returns {Number} 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return 330;
};

    /**
     * Draws the basic area for actors within the battle status window.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    this.drawActorName(actor, rect.x + 0, rect.y, 150);
    this.drawActorIcons(actor, rect.x + 156, rect.y, rect.width - 156);
};

    /**
     * Draws the gauge area for the actors within the battle status window.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.drawGaugeArea = function(rect, actor) {
    if ($dataSystem.optDisplayTp) {
        this.drawGaugeAreaWithTp(rect, actor);
    } else {
        this.drawGaugeAreaWithoutTp(rect, actor);
    }
};

    /**
     * Draws the gauges in the basic area with tp included.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x + 0, rect.y, 108);
    this.drawActorMp(actor, rect.x + 123, rect.y, 96);
    this.drawActorTp(actor, rect.x + 234, rect.y, 96);
};

    /**
     * Draws the gauges in the basic area without tp included.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x + 0, rect.y, 201);
    this.drawActorMp(actor, rect.x + 216,  rect.y, 114);
};





/**
 * The window for selecting a target actor on the battle screen.
 * @class Window_BattleActor
 * @extends Window_BattleStatus
 * @param  {Number} x
 * @param  {Number} y
 */
function Window_BattleActor() {
    this.initialize.apply(this, arguments);
}

Window_BattleActor.prototype = Object.create(Window_BattleStatus.prototype);
Window_BattleActor.prototype.constructor = Window_BattleActor;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_BattleActor.prototype.initialize = function(x, y) {
    Window_BattleStatus.prototype.initialize.call(this);
    this.x = x;
    this.y = y;
    this.openness = 255;
    this.hide();
};

/**
 * 
 */
Window_BattleActor.prototype.show = function() {
    this.select(0);
    Window_BattleStatus.prototype.show.call(this);
};

/**
 * 
 */
Window_BattleActor.prototype.hide = function() {
    Window_BattleStatus.prototype.hide.call(this);
    $gameParty.select(null);
};

    /**
     * Selects an actor within the battle actor window.
     * 
     * @param {Number} index 
     * @memberof Window_BattleActor
     */
Window_BattleActor.prototype.select = function(index) {
    Window_BattleStatus.prototype.select.call(this, index);
    $gameParty.select(this.actor());
};

    /**
     * Returns the current selected actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Window_BattleActor
     */
Window_BattleActor.prototype.actor = function() {
    return $gameParty.members()[this.index()];
};





/**
 * The window for selecting a target enemy on the battle screen.
 * @class Window_BattleEnemy
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * 
 * @prop {Array<Game_Enemy>} _enemies
 */
function Window_BattleEnemy() {
    this.initialize.apply(this, arguments);
}

Window_BattleEnemy.prototype = Object.create(Window_Selectable.prototype);
Window_BattleEnemy.prototype.constructor = Window_BattleEnemy;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_BattleEnemy.prototype.initialize = function(x, y) {
    this._enemies = [];
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.hide();
};

    /**
     * Returns the window width.
     * 
     * @returns {Number} 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.windowWidth = function() {
    return Graphics.boxWidth - 192;
};

    /**
     * Returns the window height.
     * 
     * @returns {Number} 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

    /**
     * Returns the number of visible rows.
     * 
     * @returns {Number} 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.numVisibleRows = function() {
    return 4;
};

/**
 * @returns {Number}
 */
Window_BattleEnemy.prototype.maxCols = function() {
    return 2;
};

/**
 * @returns {Number}
 */
Window_BattleEnemy.prototype.maxItems = function() {
    return this._enemies.length;
};

    /**
     * Returns the current enemy.
     * 
     * @returns {Game_Enemy} 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.enemy = function() {
    return this._enemies[this.index()];
};

    /**
     * Returns the current index selected.
     * 
     * @returns {Number} 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.enemyIndex = function() {
    var enemy = this.enemy();
    return enemy ? enemy.index() : -1;
};

/**
 * @param  {Number} index
 */
Window_BattleEnemy.prototype.drawItem = function(index) {
    this.resetTextColor();
    var name = this._enemies[index].name();
    var rect = this.itemRectForText(index);
    this.drawText(name, rect.x, rect.y, rect.width);
};

/**
 * 
 */
Window_BattleEnemy.prototype.show = function() {
    this.refresh();
    this.select(0);
    Window_Selectable.prototype.show.call(this);
};

/**
 * 
 */
Window_BattleEnemy.prototype.hide = function() {
    Window_Selectable.prototype.hide.call(this);
    $gameTroop.select(null);
};

/**
 * 
 */
Window_BattleEnemy.prototype.refresh = function() {
    this._enemies = $gameTroop.aliveMembers();
    Window_Selectable.prototype.refresh.call(this);
};

    /**
     * Selects a specified enemy using the index.
     * 
     * @param {Number} index 
     * @memberof Window_BattleEnemy
     */
Window_BattleEnemy.prototype.select = function(index) {
    Window_Selectable.prototype.select.call(this, index);
    $gameTroop.select(this.enemy());
};





/**
 * The window for selecting a skill to use on the battle screen.
 * @class Window_BattleSkill
 * @extends Window_SkillList
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
function Window_BattleSkill() {
    this.initialize.apply(this, arguments);
}

Window_BattleSkill.prototype = Object.create(Window_SkillList.prototype);
Window_BattleSkill.prototype.constructor = Window_BattleSkill;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_BattleSkill.prototype.initialize = function(x, y, width, height) {
    Window_SkillList.prototype.initialize.call(this, x, y, width, height);
    this.hide();
};

/**
 * 
 */
Window_BattleSkill.prototype.show = function() {
    this.selectLast();
    this.showHelpWindow();
    Window_SkillList.prototype.show.call(this);
};

/**
 * 
 */
Window_BattleSkill.prototype.hide = function() {
    this.hideHelpWindow();
    Window_SkillList.prototype.hide.call(this);
};





/**
 * The window for selecting an item to use on the battle screen.
 * @class Window_BattleItem
 * @extends Window_ItemList
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
function Window_BattleItem() {
    this.initialize.apply(this, arguments);
}

Window_BattleItem.prototype = Object.create(Window_ItemList.prototype);
Window_BattleItem.prototype.constructor = Window_BattleItem;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * @param  {Number} height
 */
Window_BattleItem.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
    this.hide();
};

/**
 * @param  {RPG.UsableItem} item
 */
Window_BattleItem.prototype.includes = function(item) {
    return $gameParty.canUse(item);
};

/**
 * 
 */
Window_BattleItem.prototype.show = function() {
    this.selectLast();
    this.showHelpWindow();
    Window_ItemList.prototype.show.call(this);
};

/**
 * 
 */
Window_BattleItem.prototype.hide = function() {
    this.hideHelpWindow();
    Window_ItemList.prototype.hide.call(this);
};





/**
 * The window for selecting New Game/Continue on the title screen.
 * @class Window_TitleCommand
 * @extends Window_Command
 * 
 * @prop {String} _lastCommandSymbol
 */
function Window_TitleCommand() {
    this.initialize.apply(this, arguments);
}

Window_TitleCommand.prototype = Object.create(Window_Command.prototype);
Window_TitleCommand.prototype.constructor = Window_TitleCommand;

/**
 * オブジェクト生成時の初期化。
 */
Window_TitleCommand.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
    this.openness = 0;
    this.selectLast();
};

Window_TitleCommand._lastCommandSymbol = null;

/**
 * 
 */
Window_TitleCommand.initCommandPosition = function() {
    this._lastCommandSymbol = null;
};

/**
 * @returns {Number}
 */
Window_TitleCommand.prototype.windowWidth = function() {
    return 240;
};

/**
 * 
 */
Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = Graphics.boxHeight - this.height - 96;
};

/**
 * 
 */
Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(TextManager.options,   'options');
};

/**
 * @returns {Boolean}
 */
Window_TitleCommand.prototype.isContinueEnabled = function() {
    return DataManager.isAnySavefileExists();
};

/**
 * 
 */
Window_TitleCommand.prototype.processOk = function() {
    Window_TitleCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};

/**
 * 
 */
Window_TitleCommand.prototype.selectLast = function() {
    if (Window_TitleCommand._lastCommandSymbol) {
        this.selectSymbol(Window_TitleCommand._lastCommandSymbol);
    } else if (this.isContinueEnabled()) {
        this.selectSymbol('continue');
    }
};






/**
 * The window for selecting "Go to Title" on the game end screen.
 * @class Window_GameEnd
 * @extends Window_Command
 */
function Window_GameEnd() {
    this.initialize.apply(this, arguments);
}

Window_GameEnd.prototype = Object.create(Window_Command.prototype);
Window_GameEnd.prototype.constructor = Window_GameEnd;

/**
 * オブジェクト生成時の初期化。
 */
Window_GameEnd.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.updatePlacement();
    this.openness = 0;
    this.open();
};

/**
 * @returns {Number}
 */
Window_GameEnd.prototype.windowWidth = function() {
    return 240;
};

/**
 * 
 */
Window_GameEnd.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
};

/**
 * 
 */
Window_GameEnd.prototype.makeCommandList = function() {
    this.addCommand(TextManager.toTitle, 'toTitle');
    this.addCommand(TextManager.cancel,  'cancel');
};





/**
 * The window for selecting a block of switches/variables on the debug screen.
 * @class Window_DebugRange
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * 
 * @prop {Number} lastTopRow [static]
 * @prop {Number} lastIndex [static]
 * 
 * @prop {Window_DebugEdit} _editWindow
 */
function Window_DebugRange() {
    this.initialize.apply(this, arguments);
}

Window_DebugRange.prototype = Object.create(Window_Selectable.prototype);
Window_DebugRange.prototype.constructor = Window_DebugRange;

Window_DebugRange.lastTopRow = 0;
Window_DebugRange.lastIndex  = 0;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 */
Window_DebugRange.prototype.initialize = function(x, y) {
    this._maxSwitches = Math.ceil(($dataSystem.switches.length - 1) / 10);
    this._maxVariables = Math.ceil(($dataSystem.variables.length - 1) / 10);
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.setTopRow(Window_DebugRange.lastTopRow);
    this.select(Window_DebugRange.lastIndex);
    this.activate();
};

/**
 * @returns {Number}
 */
Window_DebugRange.prototype.windowWidth = function() {
    return 246;
};

/**
 * @returns {Number}
 */
Window_DebugRange.prototype.windowHeight = function() {
    return Graphics.boxHeight;
};

/**
 * @returns {Number}
 */
Window_DebugRange.prototype.maxItems = function() {
    return this._maxSwitches + this._maxVariables;
};

/**
 * 
 */
Window_DebugRange.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this._editWindow) {
        this._editWindow.setMode(this.mode());
        this._editWindow.setTopId(this.topId());
    }
};

/**
 * @returns {String}
 */
Window_DebugRange.prototype.mode = function() {
    return this.index() < this._maxSwitches ? 'switch' : 'variable';
};

/**
 * @returns {Number}
 */
Window_DebugRange.prototype.topId = function() {
    var index = this.index();
    if (index < this._maxSwitches) {
        return index * 10 + 1;
    } else {
        return (index - this._maxSwitches) * 10 + 1;
    }
};

/**
 * 
 */
Window_DebugRange.prototype.refresh = function() {
    this.createContents();
    this.drawAllItems();
};

/**
 * @param  {Number} index
 */
Window_DebugRange.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var start;
    var text;
    if (index < this._maxSwitches) {
        start = index * 10 + 1;
        text = 'S';
    } else {
        start = (index - this._maxSwitches) * 10 + 1;
        text = 'V';
    }
    var end = start + 9;
    text += ' [' + start.padZero(4) + '-' + end.padZero(4) + ']';
    this.drawText(text, rect.x, rect.y, rect.width);
};

/**
 * @returns {Boolean}
 */
Window_DebugRange.prototype.isCancelTriggered = function() {
    return (Window_Selectable.prototype.isCancelTriggered() ||
            Input.isTriggered('debug'));
};

/**
 * 
 */
Window_DebugRange.prototype.processCancel = function() {
    Window_Selectable.prototype.processCancel.call(this);
    Window_DebugRange.lastTopRow = this.topRow();
    Window_DebugRange.lastIndex = this.index();
};

/**
 * @param  {Window_DebugEdit} index
 */
Window_DebugRange.prototype.setEditWindow = function(editWindow) {
    this._editWindow = editWindow;
    this.update();
};





/**
 * The window for displaying switches and variables on the debug screen.
 * @class Window_DebugEdit
 * @extends Window_Selectable
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 * 
 * @prop {String} _mode
 * @prop {Number} _topId
 */
function Window_DebugEdit() {
    this.initialize.apply(this, arguments);
}

Window_DebugEdit.prototype = Object.create(Window_Selectable.prototype);
Window_DebugEdit.prototype.constructor = Window_DebugEdit;

/**
 * オブジェクト生成時の初期化。
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} width
 */
Window_DebugEdit.prototype.initialize = function(x, y, width) {
    var height = this.fittingHeight(10);
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._mode = 'switch';
    this._topId = 1;
    this.refresh();
};

/**
 * @returns {Number}
 */
Window_DebugEdit.prototype.maxItems = function() {
    return 10;
};

/**
 * 
 */
Window_DebugEdit.prototype.refresh = function() {
    this.contents.clear();
    this.drawAllItems();
};

/**
 * @param {Number} index
 */
Window_DebugEdit.prototype.drawItem = function(index) {
    var dataId = this._topId + index;
    var idText = dataId.padZero(4) + ':';
    var idWidth = this.textWidth(idText);
    var statusWidth = this.textWidth('-00000000');
    var name = this.itemName(dataId);
    var status = this.itemStatus(dataId);
    var rect = this.itemRectForText(index);
    this.resetTextColor();
    this.drawText(idText, rect.x, rect.y, rect.width);
    rect.x += idWidth;
    rect.width -= idWidth + statusWidth;
    this.drawText(name, rect.x, rect.y, rect.width);
    this.drawText(status, rect.x + rect.width, rect.y, statusWidth, 'right');
};

/**
 * @param {Number} dataId
 * @returns {String}
 */
Window_DebugEdit.prototype.itemName = function(dataId) {
    if (this._mode === 'switch') {
        return $dataSystem.switches[dataId];
    } else {
        return $dataSystem.variables[dataId];
    }
};

/**
 * @param {Number} dataId
 * @returns {String}
 */
Window_DebugEdit.prototype.itemStatus = function(dataId) {
    if (this._mode === 'switch') {
        return $gameSwitches.value(dataId) ? '[ON]' : '[OFF]';
    } else {
        return String($gameVariables.value(dataId));
    }
};

/**
 * @param {String} mode
 */
Window_DebugEdit.prototype.setMode = function(mode) {
    if (this._mode !== mode) {
        this._mode = mode;
        this.refresh();
    }
};

/**
 * @param {Number} id
 */
Window_DebugEdit.prototype.setTopId = function(id) {
    if (this._topId !== id) {
        this._topId = id;
        this.refresh();
    }
};

/**
 * @returns {Number}
 */
Window_DebugEdit.prototype.currentId = function() {
    return this._topId + this.index();
};

/**
 * 
 */
Window_DebugEdit.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this.active) {
        if (this._mode === 'switch') {
            this.updateSwitch();
        } else {
            this.updateVariable();
        }
    }
};

/**
 * 
 */
Window_DebugEdit.prototype.updateSwitch = function() {
    if (Input.isRepeated('ok')) {
        var switchId = this.currentId();
        SoundManager.playCursor();
        $gameSwitches.setValue(switchId, !$gameSwitches.value(switchId));
        this.redrawCurrentItem();
    }
};

/**
 * 
 */
Window_DebugEdit.prototype.updateVariable = function() {
    var variableId = this.currentId();
    var value = $gameVariables.value(variableId);
    if (typeof value === 'number') {
        if (Input.isRepeated('right')) {
            value++;
        }
        if (Input.isRepeated('left')) {
            value--;
        }
        if (Input.isRepeated('pagedown')) {
            value += 10;
        }
        if (Input.isRepeated('pageup')) {
            value -= 10;
        }
        if ($gameVariables.value(variableId) !== value) {
            $gameVariables.setValue(variableId, value);
            SoundManager.playCursor();
            this.redrawCurrentItem();
        }
    }
};
