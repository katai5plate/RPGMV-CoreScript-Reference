# Class: Window_Base

## (abstract) Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

#### (abstract) new Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

The superclass of [Window_EquipStatus](Window_EquipStatus.html), [Window_Gold](Window_Gold.html), [Window_Help](Window_Help.html), [Window_MapName](Window_MapName.html), [Window_Message](Window_Message.html), [Window_NameEdit](Window_NameEdit.html), [Window_ScrollText](Window_ScrollText.html), [Window_ShopStatus](Window_ShopStatus.html), [Window_SkillStatus](Window_SkillStatus.html) and [Window_Selectable](Window_Selectable.html)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |
| `_iconWidth` | [Number](Number.html) | The standard icon width. default : 32 |
| `_iconHeight` | [Number](Number.html) | The standard icon height. default : 32 |
| `_faceWidth` | [Number](Number.html) | The standard face width. default : 144 |
| `_faceHeight` | [Number](Number.html) | The standard face height. default : 144 |
| `_opening` | Boolean | The opening property; determines if the window is opening. |
| `_closing` | Boolean | The closing property; determines if the window is closing. |

<dl>
</dl>

### Extends

* [Window](Window.html)

### Methods

#### activate ()

Activates the window, allowing it to be processed and to update.
<dl>
</dl>

#### actorName (actorIndex) → {[String](String.html)}

Returns the actor name given an index; the index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorIndex` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### addChild (child) → {Object}

[super] Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#addChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

[super] Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.html) | The index to place the child in |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#addChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildToBack (child) → {Object}

Adds a child between the background and contents.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#addChildToBack</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### calcTextHeight (textState, all) → {[Number](Number.html)}

Calculates the text height of the textState (when using drawTextEx); if all is set to true, all lines of text are calculated, otherwise only a single line is processed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |
| `all` | Boolean |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canvasToLocalX (x) → {[Number](Number.html)}

Returns the x coordinate of the mouse to a local window x coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canvasToLocalY (y) → {[Number](Number.html)}

Returns the y coordinate of the mouse to a local window y coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### changePaintOpacity (enabled)

Changes the paintOpacity (the opacity of the text drawn to the window); if true the opacity is set to 255, otherwise the opacity is set to 160.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | Boolean |  |

<dl>
</dl>

#### changeTextColor (color)

Changes the text color property given a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.html) |  |

<dl>
</dl>

#### close ()

Closes the window.
<dl>
</dl>

#### contentsHeight () → {[Number](Number.html)}

Returns the inner content height of the window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### contentsWidth () → {[Number](Number.html)}

Returns the inner content width of the window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### convertEscapeCharacters (text) → {[String](String.html)}

Converts the escape characters and returns the text content after processing the characters.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### createContents ()

Creates the contents of the window; this is the area of the window which text is drawn to.
<dl>
</dl>

#### crisisColor () → {[String](String.html)}

Returns the crisis color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### deactivate ()

Deactives the window, preventing further processing.
<dl>
</dl>

#### deathColor () → {[String](String.html)}

Returns the death color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### dimColor1 () → {[String](String.html)}

Color 1 of the dimmer sprite bitmap. for the gradient.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### dimColor2 () → {[String](String.html)}

Color 2 of the dimmer sprite bitmap for the gradient.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### drawActorCharacter (actor, x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorClass (actor, x, y, width)

Draws the actor class at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorFace (actor, x, y, width, height)

Draws the actor face at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorHp (actor, x, y, width)

Draws the actor hp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorIcons (actor, x, y, width)

Draws the actor icons at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorLevel (actor, x, y)

Draws the actor level at the specified x and y coordinates.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorMp (actor, x, y, width)

Draws the actor mp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorName (actor, x, y, width)

Draws the actor name at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorNickname (actor, x, y, width)

Draws the actor nickname at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorSimpleStatus (actor, x, y, width)

Draws a simple status for the game actor passed into the method at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawActorTp (actor, x, y, width)

Draws the actor tp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawCharacter (characterName, characterIndex, x, y)

Draws a character (map sprites) at the specified x and y coordinate. CharacterName refers to character spritesheet, and characterIndex refers to the characterIndex on the spritesheet.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.html) |  |
| `characterIndex` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### drawCurrencyValue (value, unit, x, y, width)

Draws the currency value given at the specified x and y coordinates within the width given. Useful if you want to write your own custom currency value.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) |  |
| `unit` | [String](String.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawCurrentAndMax (current, max, x, y, width, color1, color2)

Draws the current and max number at the specified x and y coordinate within the given width. Color1 represents the current number and color2 represents the max number when the text is drawn.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `current` | [Number](Number.html) |  |
| `max` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `color1` | [String](String.html) |  |
| `color2` | [String](String.html) |  |

<dl>
</dl>

#### drawFace (faceName, faceIndex, x, y, width opt, height opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `faceName` | [String](String.html) |  |  |
| `faceIndex` | [Number](Number.html) |  |  |
| `x` | [Number](Number.html) |  |  |
| `y` | [Number](Number.html) |  |  |
| `width` | [Number](Number.html) | <optional> |  |
| `height` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### drawGauge (x, y, width, rate, color1, color2)

Draws a gauge at the specified x and y coordinates within the given width. Color1 and Color2 represent the gradient as css color strings of the gauge.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `rate` | [Number](Number.html) |  |
| `color1` | [String](String.html) |  |
| `color2` | [String](String.html) |  |

<dl>
</dl>

#### drawIcon (iconIndex, x, y)

Draws an icon given the specified iconIndex at the specified x and y coordinates. The Width and Height of the icon is based on the _iconWidth and _iconHeight properties.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### drawItemName (item, x, y, width)

Draws the item name at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, align)

Given text or a number, draws the content to the window's contents layer at the specified x and y coordinate within the max width. The text content can also be aligned with the align property. The possible alignments are: "left", "center", "right".

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | string |number |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `maxWidth` | [Number](Number.html) |  |
| `align` | [String](String.html) |  |

<dl>
</dl>

#### drawTextEx (text, x, y) → {[Number](Number.html)}

Draws text with text codes included; this will draw icons, increase text height, and more.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### fittingHeight (numLines) → {[Number](Number.html)}

Returns the fitting height given a number of lines based on the line height plus standard padding of the window. Default formula: numLines * lineHeight + standardPadding * 2

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `numLines` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### gaugeBackColor () → {[String](String.html)}

Returns the gauage back color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hide ()

Hides the window, making it invisible; the window is not closed when hidden.
<dl>
</dl>

#### hideBackgroundDimmer ()

Hides the background dimmer sprite.
<dl>
</dl>

#### hpColor (actor) → {[String](String.html)}

Returns the hp color as a css string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hpGaugeColor1 () → {[String](String.html)}

Returns the hp gauge color 1 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hpGaugeColor2 () → {[String](String.html)}

Returns the hp gauge color 2 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### initialize (x, y, width, height)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isClosed ()

Returns true if the window is completely closed (openness == 0).
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#isClosed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isClosing () → {Boolean}

Returns true if the window is currently closing.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOpen ()

Returns true if the window is completely open (openness == 255).
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#isOpen</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isOpening () → {Boolean}

Returns true if the window is currently opening.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### lineHeight () → {[Number](Number.html)}

Returns the standard line height of the current window; default is 36.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### loadWindowskin ()

Loads the window skin from the img/system directory.
<dl>
</dl>

#### makeFontBigger ()

Makes the font bigger by a value of 12.
<dl>
</dl>

#### makeFontSmaller ()

Makes the font smaller by a value of 12.
<dl>
</dl>

#### move (x, y, width, height)

Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the window |
| `y` | [Number](Number.html) | The y coordinate of the window |
| `width` | [Number](Number.html) | The width of the window |
| `height` | [Number](Number.html) | The height of the window |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#move</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### mpColor (actor) → {[String](String.html)}

Returns the mp color as a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpCostColor () → {[String](String.html)}

Returns the mp cost color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpGaugeColor1 () → {[String](String.html)}

Returns the mp gauge color 1 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpGaugeColor2 () → {[String](String.html)}

Returns the mp gauge color 2 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### normalColor () → {[String](String.html)}

Returns the normal color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### obtainEscapeCode (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### obtainEscapeParam (textState) → {number|string}

Obtains the escape parameters from text codes in the text state when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span> | <span>string</span>
                </dd>
            </dl>

#### open ()

Opens the window.
<dl>
</dl>

#### paramchangeTextColor (change)

Changes the text color based on the powerUpColor, powerDownColor and normal color. powerUpColor is any number greater than 0, powerDownColor is any color less than 0, otherwise normal color is returned.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `change` | [Number](Number.html) |  |

<dl>
</dl>

#### partyMemberName (partyMemberIndex) → {[String](String.html)}

Returns a party member name given an index; the index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `partyMemberIndex` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### pendingColor () → {[String](String.html)}

Returns the pending color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### powerDownColor () → {[String](String.html)}

Returns the power down color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### powerUpColor () → {[String](String.html)}

Returns the power up color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### processCharacter (textState)

Process each character in the text when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### processDrawIcon (iconIndex, textState)

Processes drawing an icon when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.html) |  |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### processEscapeCharacter (code, textState)

Processes escape characters when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [String](String.html) |  |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### processNewLine (textState)

Processes new line when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### processNewPage (textState)

Processes new page when drawTexttEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### processNormalCharacter (textState)

Processes the normal characters in the text when drawTextEx is used to draw text. Normal characters are letters and numbers.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
</dl>

#### refreshDimmerBitmap ()

Refreshes the bitmap attached to the dimmer sprite based on the window dimensions.
<dl>
</dl>

#### removeChild (child) → {Object}

[super] Removes a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#removeChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

[super] Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#removeChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### reserveFaceImages ()

Reverses the face images of the game party members.
<dl>
</dl>

#### resetFontSettings ()

Resets the font settings of the window back to the default.
<dl>
</dl>

#### resetTextColor ()

Resets the text color of the window back to the default.
<dl>
</dl>

#### setBackgroundType (type)

Sets the background type of the window. 0 is 255 window opacity (standard). 1 is the window with background dimmer. Any other number changes the opacity to 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) |  |

<dl>
</dl>

#### setCursorRect (x, y, width, height)

Sets the position of the command cursor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the cursor |
| `y` | [Number](Number.html) | The y coordinate of the cursor |
| `width` | [Number](Number.html) | The width of the cursor |
| `height` | [Number](Number.html) | The height of the cursor |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#setCursorRect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTone (r, g, b)

Changes the color of the background.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red value in the range (-255, 255) |
| `g` | [Number](Number.html) | The green value in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue value in the range (-255, 255) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#setTone</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### show ()

Shows the window, making it visible.
<dl>
</dl>

#### showBackgroundDimmer ()

Shows the background dimmer sprite.
<dl>
</dl>

#### standardBackOpacity () → {[Number](Number.html)}

Returns the standard back opacity of the window; this is the opacity of the area behind the window's text content. Default is 192.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### standardFontFace () → {[String](String.html)}

Returns the standard font face of the game based on what language the game is in.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### standardFontSize () → {[Number](Number.html)}

Returns the standard font size of the text in window; default is 28.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### standardPadding () → {[Number](Number.html)}

Returns the standard padding of the window; default is 18.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### systemColor () → {[String](String.html)}

Returns the system color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### textColor (n) → {*}

Returns a text color given a numbered index as a css color string; this index maps directly to the img/system/window.png colors by default.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>*</span>
                </dd>
            </dl>

#### textPadding () → {[Number](Number.html)}

Returns the text padding of the window; default is 6.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### textWidth (text) → {[Number](Number.html)}

Calculates the width of a text string and returns a number.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tpColor (actor) → {[String](String.html)}

Returns the tp color as a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### tpCostColor () → {[String](String.html)}

Returns the tp cost color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### tpGaugeColor1 () → {[String](String.html)}

Returns the tp gauge color 1 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### tpGaugeColor2 () → {[String](String.html)}

Returns tp gauge color 2 as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### translucentOpacity () → {[Number](Number.html)}

Returns the translucentOpacity for the window; The default is 160.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### update ()

The update method of the window; this is run every frame to do logic processing for the window.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBackgroundDimmer ()

Updates the background dimmer sprite opacity based on the openness of the window.
<dl>
</dl>

#### updateBackOpacity () → {[Number](Number.html)}

Returns the inner content width of the window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### updateClose ()

Updates the openness of the window when the _closing property is set to true. Openness is decreased.
<dl>
</dl>

#### updateOpen ()

Updates the openness of the window when the _opening property is set to true. Openness is increased.
<dl>
</dl>

#### updatePadding ()

Updates the window padding based on the standardPadding method.
<dl>
</dl>

#### updateTone ()

Updates the tone of the window based on the game system window tone defined in the database.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
