# Class: Window_Base

## (abstract) Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

#### (abstract) new Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

The superclass of [Window_EquipStatus](Window_EquipStatus.md), [Window_Gold](Window_Gold.md), [Window_Help](Window_Help.md), [Window_MapName](Window_MapName.md), [Window_Message](Window_Message.md), [Window_NameEdit](Window_NameEdit.md), [Window_ScrollText](Window_ScrollText.md), [Window_ShopStatus](Window_ShopStatus.md), [Window_SkillStatus](Window_SkillStatus.md) and [Window_Selectable](Window_Selectable.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |
| `_iconWidth` | [Number](Number.md) | The standard icon width. default : 32 |
| `_iconHeight` | [Number](Number.md) | The standard icon height. default : 32 |
| `_faceWidth` | [Number](Number.md) | The standard face width. default : 144 |
| `_faceHeight` | [Number](Number.md) | The standard face height. default : 144 |
| `_opening` | Boolean | The opening property; determines if the window is opening. |
| `_closing` | Boolean | The closing property; determines if the window is closing. |

<dl>
</dl>

### Extends

* [Window](Window.md)

### Methods

#### activate ()


Activates the window, allowing it to be processed and to update.
<dl>
</dl>
[String](String.md)
#### actorName (actorIndex) → {[String](String.md)}


Returns the actor name given an index; the index starts from 1.

##### Parameters:

| Name | Type | D[Number](Number.md)
| --- | --- | --- |
| `actorIndex` | [Number](Number.md) |  |

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

##### Parame[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.md) | The index to place the child in |

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


The child that was added[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### calcTextHei[MV.TextState](MV.TextState.md)Number.md)}


Calculates the text height of the textState (when using drawTextEx); if all is set to true, all lines of text are calculated, otherwise only a single line is processed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |
| `all` | Boolean |  |

<dl>
</dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### canvasToLocalX (x) → {[Number](Number.md)}


Returns the x coordinate of the mouse to a local window x coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |

<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
        [Number](Number.md)

#### canvasToLocalY (y) → {[Number](Number.md)}


Returns the y coordinate of the mouse to a local window y coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  |

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
[String](String.md)
<dl>
</dl>

#### changeTextColor (color)


Changes the text color property given a css color string.

##### Parameters:

| Name | Type | Descriptio[Number](Number.md)
| --- | --- | --- |
| `color` | [String](String.md) |  |

<dl>
</dl>

#### close ()


Closes the window.
<dl>
</dl>

#### contentsHeight () → {[Number](Number.md)}
[Number](Number.md)

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

#### contentsWidth () → {[Number](Numbe[String](String.md)


Returns the inner content width of the window.
<dl>
</dl>

##### Returns:
[String](String.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### convertEscapeCharacters (text) → {[String](String.md)}


Converts the escape characters and returns the text content after processing the characters.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) |  |

<dl>
</dl>[String](String.md)

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

#### crisisColor () → {[String](String.md)}


Returns the crisis col[String](String.md)ing.
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

[String](String.md)
Deactives the window, preventing further processing.
<dl>
</dl>

#### deathColor () → {[String](String.md)}


Returns the death color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> [String](String.md)
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### dimColor1 () → {[String](String.md)}


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
[Game_Actor](Game_Actor.md)
#### dim[Number](Number.md)(String.md)}
[Number](Number.md)

Color 2 of the dimmer sprite bitmap for the gradient.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            [Game_Actor](Game_Actor.md)
[Number](Number.md)
#### dra[Number](Number.md)r, x, y)
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

#### drawActorClass (actor, x, y, width)
[Game_Actor](Game_Actor.md)
[Number](Number.md)
Draws th[Number](Number.md)specified x and y coordinates within the given width.
[Number](Number.md)
##### Paramet[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
</dl>

#### drawActorFace (actor, x, y, width, height)
[Game_Actor](Game_Actor.md)
[Number](Number.md)
Draws th[Number](Number.md)pecified x and y coordinates within the given width.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

<dl>
</dl>
[Game_Actor](Game_Actor.md)
#### dra[Number](Number.md), width)
[Number](Number.md)
[Number](Number.md)
Draws the actor hp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
</dl>[Game_Actor](Game_Actor.md)
[Number](Number.md)
#### dra[Number](Number.md), y, width)


Draws the actor icons at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
[Game_Actor](Game_Actor.md)
<dl>[Number](Number.md)
</dl>[Number](Number.md)
[Number](Number.md)
#### drawActorLevel (actor, x, y)


Draws the actor level at the specified x and y coordinates.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
[Game_Actor](Game_Actor.md)
<dl>[Number](Number.md)
</dl>[Number](Number.md)
[Number](Number.md)
#### drawActorMp (actor, x, y, width)


Draws the actor mp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Game_Actor](Game_Actor.md)
[Number](Number.md)
<dl>[Number](Number.md)
</dl>[Number](Number.md)

#### drawActorName (actor, x, y, width)


Draws the actor name at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Num[Game_Actor](Game_Actor.md)
| `width[Number](Number.md)tml) |  |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>

#### drawActorNickname (actor, x, y, width)


Draws the actor nickname at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Num[Game_Actor](Game_Actor.md)
| `y` | [Number](Number.md) |  |
| `width[Number](Number.md)tml) |  |
[Number](Number.md)
<dl>
</dl>

#### drawActorSimpleStatus (actor, x, y, width)


Draws a simple status for the game actor passed into the method at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Ac[String](String.md) |  |
| `x` | [Number](Numb[Number](Number.md)
| `y` | [Number](Number.md) |  |
| `width[Number](Number.md)tml) |  |

<dl>
</dl>

#### drawActorTp (actor, x, y, width)


Draws the actor tp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- [Number](Number.md)
| `actor` |[String](String.md)tor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
</dl>

#### drawCharacter (characterName, characterIndex, x, y)


Draws a character (map sprites) at the specified x and y coordinate. CharacterName refers to character spritesheet, and characterIndex refers to the characterIndex on the spritesheet.

##### Parameters:

| Name | Type | Description |
| --- | --- | [Number](Number.md)
| `charact[Number](Number.md)ring.md) |  |
| `chara[Number](Number.md)(Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Num[Number](Number.md)|
[String](String.md)
<dl>[String](String.md)
</dl>

#### drawCurrencyValue (value, unit, x, y, width)


Draws the currency value given at the specified x and y coordinates within the width given. Useful if you want to write your own custom currency value.

##### Parameters:

| Name | Type | Description |
| --- | --- | -[String](String.md)
| `value` | [Num[Number](Number.md)|
| `unit`[Number](Number.md)ml) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Num[Number](Number.md)|
| `width` | [[Number](Number.md)|  |

<dl>
</dl>

#### drawCurrentAndMax (current, max, x, y, width, color1, color2)


Draws the current and max number at the specified x and y coordinate within the given width. Color1 represents the current number and color2 represents the max number when the text is drawn.

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `curre[Number](Number.md).md) |  |
| `max` | [N[Number](Number.md)  |
| `x` | [Nu[Number](Number.md) |
| `y` | [Numb[String](String.md)
| `width` | [[String](String.md)|  |
| `color1` | [String](String.md) |  |
| `color2` | [String](String.md) |  |

<dl>
</dl>

#### drawFace (faceName, faceIndex, x, y, width opt, height opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `faceName` | [[Number](Number.md)|  |  |
| `faceI[Number](Number.md)er.md) |  |  |
| `x` | [Number](Number.md) |  |  |
| `y` | [Number](Number.md) |  |  |
| `width` | [Number](Number.md) | <optional> |  |
| `height` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

#### drawGauge (x, y, width, rate, color1, color2)


Draws a gauge at the specified x and y coordinates within the given width. Color1 and Color2 represent the gradient as css color strings of the gauge.

##### Param[RPG.BaseItem](RPG.BaseItem.md)
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- [Number](Number.md)
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `rate` | [Number](Number.md) |  |
| `color1` | [String](String.md) |  |
| `color2` | [String](String.md) |  |

<dl>
</dl>

#### drawIcon (iconIndex, x, y)


Draws an[Number](Number.md)fied iconIndex at the specified x and y coordinates. The Width and Height of the icon is based on the _iconWidth and _iconHeight properties.
[Number](Number.md)
##### Parameter[Number](Number.md)
[String](String.md)
| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) | [Number](Number.md)

<dl>
</dl>

#### drawItemName (item, x, y, width)


Draws the i[String](String.md)fied x and y coordinates within the given width.
[Number](Number.md)
##### Pa[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, align)

[Number](Number.md)
Given text or a number, draws the content to the window's contents layer at the specified x and y coordinate within the max width. The text content can also be aligned with the align property. The possible alignments are: "left", "center", "right".

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | string |number |  |
| `x` | [Number[Number](Number.md)
| `y` | [Number](Number.md) |  |
| `maxWidth` | [Number](Number.md) |  |
| `align` | [String](String.md) |  |

<dl>
</dl>

#### drawTextEx (text, x, y) → {[Number](Number.md)}


Draws text with text codes included; this will draw icons, increase text height, and more.

##### Parameters:
[String](String.md)
| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### fittingHeight (numLines) → {[Number](Number.md)}


Returns the fitting height given a number of lines based on the line height plus standard padding of the window. Default formula: numLines * lineHeight + standardPadding * 2

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[String](String.md)
| `numLines` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>[Game_Actor](Game_Actor.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### gaugeBackColor () → {[String](String.md)}


Returns the gauage back color as a css color string.
<dl>
</dl>

##### Returns:[String](String.md)

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
[String](String.md)
#### hideBackgroundDimmer ()


Hides the background dimmer sprite.
<dl>
</dl>

#### hpColor (actor) → {[String](String.md)}


Returns the hp color as a css string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
</dl>

##### Returns:
[Number](Number.md)
<dl>[Number](Number.md)
            [Number](Number.md)
             [Number](Number.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hpGaugeColor1 () → {[String](String.md)}


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

#### hpGaugeColor2 () → {[String](String.md)}


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
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

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
                      [Number](Number.md)sed</a>
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
<dl>[Number](Number.md)
</dl>[Number](Number.md)
[Number](Number.md)
##### Returns[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### lineHeight () → {[Number](Number.md)}


Returns the standard line height of the current window; default is 36.
<dl>[String](String.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
            [Game_Actor](Game_Actor.md)span>
                </dd>
            </dl>

#### loadWindowskin ()


Loads the window skin from the img/system directory.
<dl>
</dl>

#### makeFontBigger ()


Makes the font bigger b[String](String.md)
<dl>
</dl>

#### makeFontSmaller ()


Makes the font smaller by a value of 12.
<dl>
</dl>

#### move (x, y, width, height)


Sets the x, y, width, and height all at once.
[String](String.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the window |
| `y` | [Number](Number.md) | The y coordinate of the window |
| `width` | [Number](Number.md) | The width of the window |
| `height` | [Number](Number.md) | The height of the window |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                         [String](String.md)
                        </li>
                    </ul>
                </dd>
            </dl>

#### mpColor (actor) → {[String](String.md)}


Returns the mp color as a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor[String](String.md) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpCostColor () → {[String](String.md)}


Returns the mp cost color as a css color string.
<dl>
</dl>

##### Returns:[MV.TextState](MV.TextState.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpGaugeColor1 () → {[String](String.md)}


Returns the mp gauge color 1 as a css color string.
<dl>[MV.TextState](MV.TextState.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpGaugeColor2 () → {[String](String.md)}


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

#### normalCo[Number](Number.md)ring.md)}


Returns the normal color as a css color string.
<dl>
</dl>[String](String.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>[Number](Number.md)
            </dl>

#### obtainEscapeCode (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

#### obtainEscapeParam ([String](String.md)string}


Obtains the escape parameters from text codes in the text state when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

##### Returns:
[String](String.md)
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

#### paramchangeTextColo[String](String.md)


Changes the text color based on the powerUpColor, powerDownColor and normal color. powerUpColor is any number greater than 0, powerDownColor is any color less than 0, otherwise normal color is returned.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `change` | [Number](Number.md) |  |

<dl>
</dl>

#### partyMemberName (partyMemberIndex) → {[String](String.md)}


Returns a party member name given an index; the index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `partyMemberIn[MV.TextState](MV.TextState.md)

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### pendingColo[MV.TextState](MV.TextState.md)


Returns the pending color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
           [String](String.md)
            </dl[MV.TextState](MV.TextState.md)

#### powerDownColor () → {[String](String.md)}


Returns the power down color as a css color string.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                [MV.TextState](MV.TextState.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### powerUpColor () → {[String](String.md)}


Returns the power up color as a css color string.
<dl>
</dl>

##### Returns:
[MV.TextState](MV.TextState.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### processCharacter (textState)


Process each character in the text when drawTextEx is used to draw text.

##### Parameters[MV.TextState](MV.TextState.md)

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

#### processDrawIcon (iconIndex, textState)


Processes drawing an icon when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) |  |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

#### processEscapeCharacter (code, textState)


Processes escape characters when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [String](String.md) |  |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

#### processNewLine (textState)


Processes new line when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>[Number](Number.md)
</dl>

#### processNewPage (textState)


Processes new page when drawTexttEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
</dl>

#### processNormalCharacter (textState)


Processes the normal characters in the text when drawTextEx is used to draw text. Normal characters are letters and numbers.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

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

<dl>[Number](Number.md)
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

[Number](Number.md)
The chil[Number](Number.md)
<dl>[Number](Number.md)
             [Number](Number.md)
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}


[super] Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | The index to get the child from |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
        [Number](Number.md)
        [Number](Number.md)a>Window#removeChildAt</a>
        [Number](Number.md)
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

[Number](Number.md)
Resets the font settings of the window back to the default.
<dl>
</dl>

#### resetTextColor ()


Resets the text color of the window back to the default.
<dl>
</dl>

#### setBackgroundType (type)


Sets the background type of [String](String.md)window opacity (standard). 1 is the window with background dimmer. Any other number changes the opacity to 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) |  |

<dl>
</dl>

#### setCursorRect (x, y, width, height)


Sets the position of the command cursor.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the cursor |
| `y` | [Number](Number.md) | The y coordinate of the cursor |
| `width` | [Number](Number.md) | The width of the cursor |
| `height` | [Number](Number.md) | The height of the cursor |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                           [Number](Number.md)ect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTone (r, g, b)


Changes the color of the background.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number[String](String.md)e in the range (-255, 255) |
| `g` | [Number](Number.md) | The green value in the range (-255, 255) |
| `b` | [Number](Number.md) | The blue value in the range (-255, 255) |

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
[Number](Number.md)

Shows the background dimmer sprite.
<dl>
</dl>

#### standardBackOpacity () → {[Number](Number.md)}


Returns the standard back opacity of the window; this is the opacity of the area behind the window's text content. Default is 192.
<dl>
</dl>

##### Returns:
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### standardFontFace () → {[String](String.md)}


Returns the standard font face of the game based on what language the game is in.
<dl>
</dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>
[String](String.md)
#### standardFontSize () → {[Number](Number.md)}


Returns the standard font size of the text in window; default is 28.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[String](String.md)
            </dl>

#### standardPadding () → {[Number](Number.md)}


Returns the standard padding of the window; default is 18.
<dl>
</dl>[Game_Actor](Game_Actor.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### systemColor () → {[String](String.md)}


Returns the system colo[String](String.md)ng.
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

[String](String.md)
Returns a text color given a numbered index as a css color string; this index maps directly to the img/system/window.png colors by default.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type[String](String.md)
                <dd>
                    <span>*</span>
                </dd>
            </dl>

#### textPadding () → {[Number](Number.md)}


Returns the text padding of the window; default is 6.
<dl>
</dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### textWidth (text) → {[Number](Number.md)}


Calculates the width of a text string and returns a number.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tpColor (actor) → {[String](String.md)}


Returns the tp color as a css color string.

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### tpCostColor () → {[String](String.md)}


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

#### tpGaugeColor1 () → {[String](String.md)}


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

#### tpGaugeColor2 () → {[String](String.md)}


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

#### translucentOpacity () → {[Number](Number.md)}


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

#### updateBackOpacity () → {[Number](Number.md)}


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
