# Class: Window_ShopStatus

## Window_ShopStatus (x, y, width, height)

#### new Window_ShopStatus (x, y, width, height)

The window for displaying number of items in possession and the actor's equipment on the shop screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `_pageIndex` | [Number](Number.md) |  |

<dl>
</dl>

### Extends

* [Window_Base](Window_Base.md)

### Methods

#### activate ()


Activates the window, allowing it to be processed and to update.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#activate</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[String](String.md)
#### actorName (actorIndex) → {[String](String.html)}


Returns the actor name given an index; the index starts from 1.

##### Parameters:

| Name | Type | D[Number](Number.md)
| --- | --- | --- |
| `actorIndex` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#actorName</a>
                        </li>
                    </ul>
                </dd>
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


The child that was added[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### calcTextHei[MV.TextState](MV.TextState.md)Number.html)}


Calculates the text height of the textState (when using drawTextEx); if all is set to true, all lines of text are calculated, otherwise only a single line is processed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |
| `all` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#calcTextHeight</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### canvasToLocalX (x) → {[Number](Number.html)}


Returns the x coordinate of the mouse to a local window x coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#canvasToLocalX</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
        [Number](Number.md)

#### canvasToLocalY (y) → {[Number](Number.html)}


Returns the y coordinate of the mouse to a local window y coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#canvasToLocalY</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### changePage ()


Changes the current page.
<dl>
</dl>

#### changePaintOpacity (enabled)


Changes the paintOpacity (the opacity of the text drawn to the window); if true the opacity is set to 255, otherwise the opacity is set to 160.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#changePaintOpacity</a>
            [String](String.md)
                    </ul>
                </dd>
            </dl>

#### changeTextColor (color)


Changes the text color property given a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#changeTextColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### close ()[Number](Number.md)


Closes the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#close</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### contentsHeight () → {[Number](Number.html)}


Returns the inner content height of the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <[Number](Number.md)
                            <a>Window_Base#contentsHeight</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[String](String.md)
                        <li>
                            <a>Window_Base#contentsWidth</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Retur[String](String.md)

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#convertEscapeCharacters</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <sp[String](String.md)n>
                </dd>
            </dl>

#### createContents ()


Creates the contents of the window; this is the area of the window which text is drawn to.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#createContents</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### crisisColor () → {[String](String.html)}


Returns the crisis color as a css color string.
<dl>[RPG.EquipItem](RPG.EquipItem.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#crisisColor</a>
                        </li>
                    </ul>
            [Game_Actor](Game_Actor.md)
            </[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### currentEquippedItem (actor, etypeId) → {[RPG.EquipItem](RPG.EquipItem.html)}


Returns the current item equiped by the given actor when the respective equipment Id is passed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `etypeId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>[String](String.md)
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.EquipItem</a></span>
                </dd>
            </dl>

#### deactivate ()


Deactives the window, preventing further processing.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#deactivate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### deathColor () → {[String](String.html)}
[String](String.md)

Returns the death color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#deathColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### dimColor1 () → {[String](String.md)}


Color 1 of the dimmer sprite bitmap. for the gradient.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#dimColor1</a>
                        </li>
                    </ul>
                </dd>
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
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
        [Number](Number.md)
                        <li>
                            <a>Window_Base#dimColor2</a>
                        </li>
                    </ul>
                </dd>
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

| Name | Typ[Game_Actor](Game_Actor.md)
| --- | [Number](Number.md)
| `actor[Number](Number.md)_Actor.html) |  |
| `x` | [Num[Number](Number.md)|
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorClass (actor, x, y, width)


Draws the actor class at the specified x and y coordinates within the given width.

##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Typ[Game_Actor](Game_Actor.md)
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorClass</a>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
[Number](Number.md)
#### drawActorEquipInfo (x, y, actor)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
</dl>

#### drawActorFace (actor, x, y, width, height)


Draws the actor face at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Typ[Game_Actor](Game_Actor.md)
| --- | [Number](Number.md)
| `actor[Number](Number.md)_Actor.html) |  |
| `x` | [Num[Number](Number.md)|
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorFace</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorHp (actor, x, y, width)


Draws the actor hp at the specified x and y coordinates within the given width.

##### Parame[Game_Actor](Game_Actor.md)
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- [Number](Number.md)
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorHp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorIcons (actor, x, y, width)


Draws the actor icons at the specified x and y coordinates within the given width.
[Game_Actor](Game_Actor.md)
##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorIcons</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorLevel (actor, x, y)

[Game_Actor](Game_Actor.md)
Draws th[Number](Number.md)specified x and y coordinates.
[Number](Number.md)
##### Parame[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorLevel</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorMp (actor, x, y, width)

[Game_Actor](Game_Actor.md)
Draws th[Number](Number.md)cified x and y coordinates within the given width.
[Number](Number.md)
##### Parame[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorMp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorName (actor, x, y, width)
[Game_Actor](Game_Actor.md)
[Number](Number.md)
Draws th[Number](Number.md)pecified x and y coordinates within the given width.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorName</a>
                        </li>
                    </ul>
                </dd>
        [Number](Number.md)
[Number](Number.md)
#### drawAct[Game_Actor](Game_Actor.md)h)
[RPG.EquipItem](RPG.EquipItem.md)

Draws the actor nickname at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>[Game_Actor](Game_Actor.md)
        [Number](Number.md) From:</dt>
        [Number](Number.md)
            [Number](Number.md)
                        <li>
                            <a>Window_Base#drawActorNickname</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorParamChange (x, y, actor, item1)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `item1` | [RPG.EquipItem](RPG.EquipItem.html) |  |

<dl>
</dl>
[Game_Actor](Game_Actor.md)
#### dra[Number](Number.md)ctor, x, y, width)
[Number](Number.md)
[Number](Number.md)
Draws a simple status for the game actor passed into the method at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorSimpleStatus</a>
                        </li>
                    </ul>
                </dd>
            </dl>[String](String.md)
[Number](Number.md)
#### dra[Number](Number.md), width)
[Number](Number.md)

Draws the actor tp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorTp</a>
                        </li>
                    </ul>
            [Number](Number.md)
           [String](String.md)
[Number](Number.md)
#### dra[Number](Number.md)Name, characterIndex, x, y)
[Number](Number.md)

Draws a character (map sprites) at the specified x and y coordinate. CharacterName refers to character spritesheet, and characterIndex refers to the characterIndex on the spritesheet.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.html) |  |
| `characterIndex` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawCharacter</a>
                        </li>
                    </ul>
              [Number](Number.md)
          [Number](Number.md)
[Number](Number.md)
#### dra[Number](Number.md), unit, x, y, width)
[Number](Number.md)
[String](String.md)
Draws the cur[String](String.md)the specified x and y coordinates within the width given. Useful if you want to write your own custom currency value.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) |  |
| `unit` | [String](String.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawCurrencyValue</a>
                        </li>
        [Number](Number.md)
        [Number](Number.md)
            </dl>

#### drawCurrentAndMax (current, max, x, y, width, color1, color2)


Draws the current and max number at the specified x and y coordinate within the given width. Color1 represents the current number and color2 represents the max number when the text is drawn.

##### Parameters:

| Name | Type | Description |
| --- | --- | -[String](String.md)
| `current` | [N[Number](Number.md)  |
| `max` [Number](Number.md)l) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Num[Number](Number.md)|
| `width` | [[Number](Number.md)|  |
| `color1` | [String](String.html) |  |
| `color2` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawCurrentAndMax</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawEquipInfo (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>[String](String.md)
[String](String.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawFace</a>
                        </li>
                [Number](Number.md)
        [Number](Number.md)
        [Number](Number.md)

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
                <dt>Inherited From:</dt>
                <dd>
           [RPG.BaseItem](RPG.BaseItem.md)
        [Number](Number.md)
        [Number](Number.md)a>Window_Base#drawGauge</a>
            [Number](Number.md)
                    </ul>
                </dd>
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
        [Number](Number.md) From:</dt>
        [Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_Base#drawIcon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawItemName (item, x, y, width)


Draws the item name at the specified x and y coordinates within the given width.

##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Type |[Number](Number.md)
| --- | --- [String](String.md)
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawItemName</a>
                        </li>
                    </ul>[Number](Number.md)
                </dd>
            </dl>

#### drawPossession (x, y)

##### Parameters:

| Name | Ty[String](String.md)
| --- | [Number](Number.md)
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.html) |  |

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
                <dt>Inherited Fro[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawText</a>
                        </li>
                    </ul>
                </dd>
            </d[Number](Number.md)

#### drawTextEx (text, x, y) → {[Number](Number.html)}


Draws text with text codes included; this will draw icons, increase text height, and more.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawTextEx</a>
                        </li>
                    </ul>[String](String.md)
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#fittingHeight</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[String](String.md)
                        <li>
                            <a>Window_Base#gaugeBackColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Return[Game_Actor](Game_Actor.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hide ()


Hides the window, making it invisible; the window is not closed when hidden.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hide</a>
                        </li>
                    </ul>
                </dd>
            </dl>[String](String.md)

#### hideBackgroundDimmer ()


Hides the background dimmer sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hideBackgroundDimmer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hpColor (actor) → {[String](String.html)}


Returns the hp color as a css string.

##### Parameters:
[String](String.md)
| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hpColor</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
             [Number](Number.md)dow_Base#hpGaugeColor1</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hpGaugeColor2</a>
                        </li>
                    </ul>
                </dd>
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
                            <a>Window_Base#initialize</a>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#isClosing</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEquipItem () → {Boolean}

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#isOpening</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPageChangeEnabled () → {Boolean}


Determines if page can be changed.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPageChangeRequested () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTouchedInsideFrame () → {Boolean}


Determines if the window is touched within it's frame.
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                    [Number](Number.md)
                            <a>Window_Base#lineHeight</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)ndow_Base#loadWindowskin</a>
             [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### makeFontBigger ()


Makes the font bigger by a value of 12.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        [String](String.md)
                            <a>Window_Base#makeFontBigger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeFontSmaller ()
[Game_Actor](Game_Actor.md)

Makes the font smaller by a value of 12.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#makeFontSmaller</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### maxPages () → {[Number](Number.html)}


Returns the max number of pages.
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
                <dt>Inher[String](String.md)
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
                <dt>Inherited From:</dt>
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Window_Base#mpColor</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inh[String](String.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpCostColor</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpGaugeColor1</a>
                [MV.TextState](MV.TextState.md)
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                [MV.TextState](MV.TextState.md)
                        <li>
                            <a>Window_Base#mpGaugeColor2</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#normalColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### obtainEscapeCode (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#obtainEscapeCode</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### obtainEscapeParam (textState) → {number|string}


Obtains the escape parameters from text codes in the text state when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#obtainEscapeParam</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span> | <[String](String.md)
                </dd>
            </dl>

#### open ()


Opens the window.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#open</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### pageSize () → {[Number](Number.html)}


Returns the page size.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[String](String.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramchangeTextColor (change)


Changes the text color based on the powerUpColor, powerDownColor and normal color. powerUpColor is any number greater than 0, powerDownColor is any color less than 0, otherwise normal color is returned.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `change` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#paramchangeTextColor</a>
                        </li>
                    </ul>[String](String.md)
                </dd>
            </dl>

#### paramId () → {[Number](Number.html)}


Returns the parameter id.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### partyMemberName (partyMemberIndex) → {[String](String.html)}


Returns a party member n[String](String.md)he index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `partyMemberIndex` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#partyMemberName</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### pendingColor () → {[String](String.html)}


Returns the pend[MV.TextState](MV.TextState.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#pendingColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### powerDownCo[Number](Number.md)ring.html)}
[MV.TextState](MV.TextState.md)

Returns the power down color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#powerDownColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
           [String](String.md)
[MV.TextState](MV.TextState.md)
#### powerUpColor () → {[String](String.html)}


Returns the power up color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#powerUpColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                [MV.TextState](MV.TextState.md)
                </dd>
            </dl>

#### processCharacter (textState)


Process each character in the text when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processCharacter</a>
                [MV.TextState](MV.TextState.md)
                    </ul>
                </dd>
            </dl>

#### processDrawIcon (iconIndex, textState)


Processes drawing an icon when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.html) |  |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                [MV.TextState](MV.TextState.md)
                            <a>Window_Base#processDrawIcon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processEscapeCharacter (code, textState)


Processes escape characters when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [String](String.html) |  |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processEscapeCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processNewLine (textState)


Processes new line when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processNewLine</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processNewPage (textState)


Processes new page when drawTexttEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processNewPage</a>
                        </li>
                    </ul>
                </dd>
            [Number](Number.md)

#### processNormalCharacter (textState)


Processes the normal characters in the text when drawTextEx is used to draw text. Normal characters are letters and numbers.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processNormalCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()


Refreshes the window contents.
<dl>
</dl>

#### refreshDimmerBitmap ()


Refreshes the bitmap attached to the dimmer sprite based on the window dimensions.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#refreshDimmerBitmap</a>
                        </li>
                    </ul>
                </dd>
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
| `index` | [Number](Number.html) | The index to get the child from |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
        [Number](Number.md)
        [Number](Number.md)a>Window#removeChildAt</a>
            [Number](Number.md)
             [Number](Number.md)
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
<dl>[RPG.BaseItem](RPG.BaseItem.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#reserveFaceImages</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetFontSettings ()

[Number](Number.md)
Resets t[Number](Number.md)he window back to the default.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#resetFontSettings</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetTextColor ()


Resets the text color of the window back to the default.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#resetTextColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBackgroundType (type)


Sets the background type of the window. 0 is 255 window opacity (standard). 1 is the window with background dimmer. Any other number changes the opacity to 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>[Number](Number.md)
                            <a>Window_Base#setBackgroundType</a>
                        </li>
                    </ul>
                </dd>
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
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Window#setCursorRect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setItem (item)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |

<dl>
</dl>

#### setTone (r, g, b)


Changes the color of the bac[Number](Number.md)

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

[Number](Number.md)
Shows the window, making it visible.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#show</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### showBackgroundDimmer ()


Shows the background dimmer sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#showBackgroundDimmer</a>
                        <[Array](Array.md)[Game_Actor](Game_Actor.md)
                    </ul>
                </dd>
            </dl>

#### standardBackOpacity () → {[Number](Number.html)}


Returns the standard back opacity of the window; this is the opacity of the area behind the window's text content. Default is 192.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                       [String](String.md)tandardBackOpacity</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#standardFontFace</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### standardFontSize () → {[Number](Number.html)}


Returns the standard font size of the text in window; default is 28.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#standardFontSize</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#standardPadding</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
           [String](String.md)
            </dl>

#### statusMembers () → {[Array](Array.html).<[Game_Actor](Game_Actor.html)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Actor</a>&gt;</span>
                </dd>
            </dl>

#### systemColor () → {[String](String.html)}


Returns the system color as a css color string.
<dl>
                <dt>Inhe[String](String.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#systemColor</a>
                        </li>
                    </ul>
                </dd>
            [Game_Actor](Game_Actor.md)

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

<dl>[String](String.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#textColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>*</span>
                </dd>
            </dl>

#### textPadding () → {[Number](Number.html)}


Returns the text padding [String](String.md)t is 6.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#textPadding</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### textWidth (text) → {[Number](Number.html)}

[String](String.md)
Calculates the width of a text string and returns a number.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#textWidth</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt[Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#tpColor</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#tpCostColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#tpGaugeColor1</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#tpGaugeColor2</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#translucentOpacity</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### update ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBackgroundDimmer ()


Updates the background dimmer sprite opacity based on the openness of the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updateBackgroundDimmer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBackOpacity () → {[Number](Number.html)}


Returns the inner content width of the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updateBackOpacity</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updateClose</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateOpen ()


Updates the openness of the window when the _opening property is set to true. Openness is increased.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updateOpen</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updatePadding ()


Updates the window padding based on the standardPadding method.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updatePadding</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updatePage ()


Updates the current page.
<dl>
</dl>

#### updateTone ()


Updates the tone of the window based on the game system window tone defined in the database.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#updateTone</a>
                        </li>
                    </ul>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
