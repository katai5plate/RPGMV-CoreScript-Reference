# Class: Window_ShopSell

## Window_ShopSell (x, y, width, height)

#### new Window_ShopSell (x, y, width, height)

The window for selecting an item to sell on the shop screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

<dl>
</dl>

### Extends

* [Window_ItemList](Window_ItemList.md)

### Methods

#### activate ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#activate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### actorName (actorIndex) → {[String](String.md)}


Returns the actor name given an index; the index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | ---[Number](Number.md)
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

##### Parameters:
[Number](Number.md)
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
<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### bottomRow () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#bottomRow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### calcTextHeight (textState, all) → {[Number](Number.html)}
[MV.TextState](MV.TextState.md)

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

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### callCancelHandler ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#callCancelHandler</a>
                        </li>
                    </ul>
                </dd>
            <[String](String.md)

#### callHandler (symbol)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#callHandler</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### callOkHandler ()


Calls the ok handler and begins processing confirmation of selection.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#callOkHandler</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### callUpdateHelp ()

<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_Selectable#callUpdateHelp</a>
                        </li>
                    </ul>
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
                        </li>
            [String](String.md)
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
            [Number](Number.md)
                            <a>Window_Base#changeTextColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearItem (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#clearItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### close ()
[Number](Number.md)

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
                        <li>
                         [Number](Number.md)tentsHeight</a>
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
                    <ul>
                        <li>[String](String.md)
                            <a>Window_Base#contentsWidth</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[String](String.md)
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
                    <span><a>String</a></span>
                </dd>[String](String.md)
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
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#crisisColor</a>
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

#### cursorAll () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorAll</a>
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

#### cursorDown (wrap)


Moves the cursor down; if wrap is passed as true, then it will return to the top when at the end of the list.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorDown</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cursorFixed () → {Boolean}


Returns true if the _cursorFixed property is true; this means the cursor is locked to a position.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorFixed</a>
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

#### cursorLeft (wrap)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorLeft</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cursorPagedown ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorPagedown</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cursorPageup ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorPageup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cursorRight (wrap)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorRight</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### cursorUp (wrap)


Moves the cursor up; if wrap is passed as true, then it will return to the bottom when at the top of the list.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Window_Selectable#cursorUp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### deactivate ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#deactivate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### deathColor () → {[String](String.html)}


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

##### Returns:[String](String.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### deselect ()


Deselects the currently selected index.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#deselect</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[String](String.md)
#### dimColor1 () → {[String](String.html)}


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
<dl>[Game_Actor](Game_Actor.md)
        [Number](Number.md) From:</dt>
        [Number](Number.md)
                    <ul>
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
[Game_Actor](Game_Actor.md)
| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `actor` | [Number](Number.md)or.html) |  |
| `x` | [Number](Number.html) |  |
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

##### Parameters:
[Game_Actor](Game_Actor.md)
| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `actor` | [Number](Number.md)or.html) |  |
| `x` | [Numb[Number](Number.md)
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorClass</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorFace (actor, x, y, width, height)


Draws the actor face at the specified x and y coordinates within the given width.

##### Parameters:
[Game_Actor](Game_Actor.md)
| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `actor` | [Number](Number.md)or.html) |  |
| `x` | [Number](Number.html) |  |
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
[Game_Actor](Game_Actor.md)
##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Typ[Number](Number.md)
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
                            <a>Window_Base#drawActorHp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawActorIcons (actor, x, y, width)


Draws the ac[Game_Actor](Game_Actor.md)and y coordinates within the given width.
[Number](Number.md)
##### Pa[Number](Number.md)

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
[Number](Number.md)
Draws th[Number](Number.md)specified x and y coordinates.
[Number](Number.md)
##### Parameters:

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
[Number](Number.md)
Draws th[Number](Number.md)cified x and y coordinates within the given width.
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
                            <a>Window_Base#drawActorMp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawAct[Game_Actor](Game_Actor.md)
[Number](Number.md)
[Number](Number.md)
Draws the ac[Number](Number.md)fied x and y coordinates within the given width.

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
            </dl>
[Game_Actor](Game_Actor.md)
#### dra[Number](Number.md), x, y, width)
[Number](Number.md)
[Number](Number.md)
Draws the actor nickname at the specified x and y coordinates within the given width.

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
                            <a>Window_Base#drawActorNickname</a>
                        </li>
                    </ul>
                </dd>
            [Game_Actor](Game_Actor.md)
[Number](Number.md)
#### dra[Number](Number.md)ctor, x, y, width)
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
            </dl>

#### drawActorTp (actor, x, y, width)


Draws the actor tp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Num[String](String.md)
| `width` | [Number]([Number](Number.md)
[Number](Number.md)
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawAllItems ()


Draws all items within the window; this method cals drawItem multiple times.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#drawAllItems</a>
            [Number](Number.md)
           [String](String.md)
        [Number](Number.md)
        [Number](Number.md)
[Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawCharacter</a>
              [Number](Number.md)
          [Number](Number.md)
        [Number](Number.md)
        [Number](Number.md)
[Number](Number.md)
#### drawCurr[String](String.md)t, x, y, width)
[String](String.md)

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
               [String](String.md)w_Base#drawCurrencyValue</a>
                [Number](Number.md)
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
[Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)ndow_Base#drawCurrentAndMax</a>
           [Number](Number.md)
             [String](String.md)
             [String](String.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                [Number](Number.md)_Base#drawFace</a>
        [Number](Number.md)
        [Number](Number.md)
                </dd>
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
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawGauge</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawIcon (iconIndex, x, y)


Draws an icon given the specified iconIndex at the specified x and y coordinates. The Width and Height of the icon is based on the _iconWidth and _iconHeight properties.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconInde[RPG.BaseItem](RPG.BaseItem.md)
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawIcon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawItem (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |
[RPG.BaseItem](RPG.BaseItem.md)
<dl>[Number](Number.md)
        [Number](Number.md) From:</dt>
            [Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_ItemList#drawItem</a>
                        </li>
                    </ul>
                </dd>
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
[Number](Number.md)
<dl>[Number](Number.md)
               [Number](Number.md)/dt>
            [String](String.md)
                    <ul>
                        <li>
                            <a>Window_Base#drawItemName</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawItemNumber (item, x, y, width)

##### Parameters:

| Name | Type | Description |[Number](Number.md)
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `width` | [Number](Number.html) |  |

<dl>
           [String](String.md)om:</dt>
        [Number](Number.md)
        [Number](Number.md)
                        <li>
                            <a>Window_ItemList#drawItemNumber</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawText</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawTextEx (text, x, y) → {[Number](Number.html)}
[Number](Number.md)

Draws text with text codes included; this will draw icons, increase text height, and more.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [Str[Number](Number.md)|
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawTextEx</a>
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
            </dl>[String](String.md)

#### ensureCursorVisible ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#ensureCursorVisible</a>
                        </li>
                    </ul>
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
                    <ul>
                        <li>
                            <a>Window_Base#gaugeBackColor</a>
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

#### hide ()
[Number](Number.md)
[Number](Number.md)
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
            </dl>

#### hideBackgroundDimmer ()


Hides the background dimmer sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                        [String](String.md)deBackgroundDimmer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hideHelpWindow ()

[Game_Actor](Game_Actor.md)
Hides the attached help window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#hideHelpWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hitTest (x, y) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>[String](String.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#hitTest</a>
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

#### hpColor (actor) → {[String](String.html)}


Returns the hp color as a[String](String.md)

##### Parameters:

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


Returns the[RPG.BaseItem](RPG.BaseItem.md)string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hpGaugeColor1</a>
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
[Number](Number.md)

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

#### includes (item) → {Boolean}


Returns true if the given item is included.

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `item`[Number](Number.md).BaseItem.html) |  |
[Number](Number.md)
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#includes</a>
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

#### index () → {[Number](Number.html)}


Returns the current position of the _index property.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#index</a>
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
                            <a>Window_ItemList#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isCancelEnabled () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isCancelEnabled</a>
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

#### isCancelTriggered () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isCancelTriggered</a>
                        </li>
        [Number](Number.md)
        [Number](Number.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
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

#### isContentsArea (x, y) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isContentsArea</a>
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

#### isCurrentItemEnabled () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#isCurrentItemEnabled</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
           [RPG.BaseItem](RPG.BaseItem.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCursorMovable () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isCursorMovable</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[String](String.md)
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCursorVisible () → {Boolean}


Determines if the cursor is visible within the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isCursorVisible</a>
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

#### isEnabled (item) → {Boolean}


Determines if the item is sellable, otherwise, greyed out.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isHandled (symbol) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isHandled</a>
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

#### isHorizontal () → {Boolean}


Returns true if the window is horizontal; means the window only has a single row.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isHorizontal</a>
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

#### isOkEnabled () → {Boolean}


Determines if ok is enabled as an option; this means whether you can confirm selection of an item within the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isOkEnabled</a>
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

#### isOkTriggered () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isOkTriggered</a>
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

#### isOpenAndActive () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isOpenAndActive</a>
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

#### isOpening () → {Boolean}


Returns true if the window is currently opening.
<dl>
                [RPG.BaseItem](RPG.BaseItem.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#isOpening</a>
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

#### isTouchedInsideFrame () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_Selectable#isTouchedInsideFrame</a>
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

#### isTouchOkEnabled () → {Boolean}


Determines if touch ok is enabled as an option; this means whether you can confirm the selection of an item within the window with touch input.
<dl>
                <dt>Inher[Rectangle](Rectangle.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#isTouchOkEnabled</a>
                        </li>
                    </ul>
                </dd>
            [Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### item () → {[RPG.BaseItem](RPG.BaseItem.html)}


Returns the current item.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#item</a>
                        </li>
                    </ul>[Rectangle](Rectangle.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
            [Number](Number.md)
                    <span><a>RPG.BaseItem</a></span>
                </dd>
            </dl>

#### itemHeight () → {[Number](Number.html)}


Returns the height of an item within the window; determines the height of a row.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#itemHeight</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemRect (index) → {[Rectangle](Rectangle.html)}


Creates a new rectangle based on itemWidth and itemHeight. The rectangle is mainly used for positioning items within the selectable window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                      [Number](Number.md)table#itemRect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Rectangle</a></span>
                </dd>
            </dl>

#### itemRectForText (index) → {[Rectangle](Rectangle.html)}


Creates a new rectangle based on itemWidth and itemHeight The rectangle is used for positioning text within the selectable window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#itemRectForText</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Rectangle</a></span>
                </dd>
            </dl>

#### itemWidth () → {[Number](Number.html)}


Returns the width of an item within the window; determines the width of a column.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#itemWidth</a>
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

#### lineHeight () → {[Number](Number.html)}


Returns the[RPG.BaseItem](RPG.BaseItem.md)ent window; default is 36.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
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
[Number](Number.md)

Loads the window skin from the img/system directory.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#loadWindowskin</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeFontBigger ()


Makes the font bigger by a value of 12.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                    [Number](Number.md)
                            <a>Window_Base#makeFontBigger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeFontSmaller ()


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

#### makeItemList (item)[Number](Number.md)


Returns true if the given item is enabled.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#makeItemList</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### maxCols () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#maxCols</a>
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

#### maxItems () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#maxItems</a>
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

#### maxPageItems () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#maxPageItems</a>
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
[Number](Number.md)
#### max[Number](Number.md)r](Number.html)}
[Number](Number.md)
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#maxPageRows</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[String](String.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxRows () → {[Number](Number.html)}
[Game_Actor](Game_Actor.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#maxRows</a>
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

#### maxTopRow () → {[Number](Number.html)}
[String](String.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#maxTopRow</a>
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

#### move (x, y, width, height)

[String](String.md)
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

#### mpColor (actor) → {[[String](String.md)


Returns the mp color as a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpCostColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[String](String.md)
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

#### mpGaugeColor2 () → {[String](String.html)}


Returns the mp gauge color 2 as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpGaugeColor2</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                [MV.TextState](MV.TextState.md)
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### needsNumber () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#needsNumber</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[MV.TextState](MV.TextState.md)
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
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
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### numberWidth () → {[Number](Number.html)}


Returns the width of the numbers.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#numberWidth</a>
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

#### obtainEscapeCode (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#obtainEscapeCode</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### obtainEscapeParam (textState) → {number|string}

[String](String.md)
Obtains the escape parameters from text codes in the text state when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
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
                    <span>number</span> | <span>string</span>
                </dd>
            </dl>

#### onTouch (triggered)
[String](String.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggered` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#onTouch</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### open ()


Opens the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#open</a>
                        </li>
                    </ul>
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

#### partyMemberName (partyMemberIndex) → {[String](String.html)}


Returns a party member name given an index; the index starts from 1.

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
                </dd>[String](String.md)
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

#### playBuzzerSound ()


Plays the buzzer sound effect when input is incorrect.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                [MV.TextState](MV.TextState.md)
                            <a>Window_Selectable#playBuzzerSound</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### playOkSound ()


Plays a sound effect when okay is processed.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#playOkSound</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### powerDownColor () → {[String](String.html)}


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
            </dl[Number](Number.md)
[MV.TextState](MV.TextState.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#powerUpColor</a>
                        </li>
           [String](String.md)
                [MV.TextState](MV.TextState.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### processCancel ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processCancel</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processCharacter (textState)


Process each character in the text when drawTextEx is used to draw text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.html) |  |
[MV.TextState](MV.TextState.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#processCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processCursorMove ()


Handles the processing of cursor movement.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                [MV.TextState](MV.TextState.md)processCursorMove</a>
                        </li>
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
                [MV.TextState](MV.TextState.md)
                        <li>
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

#### processHandling ()


Handles the process of attached handlers.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processHandling</a>
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
            </dl>

#### processNormalCharacter (textState)


Processes the normal characters in the text when drawTextEx is used to draw text. Normal characters are letters and numbers.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState[Number](Number.md).TextState.html) |  |

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

#### processOk ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processOk</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processPagedown ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processPagedown</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processPageup ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processPageup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processTouch ()


Handles the processing of touch input.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processTouch</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processWheel ()


Handles the processing of the scroll wheel within the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processWheel</a>
                        </li>
                    </ul>
            [Number](Number.md)
            </dl>

#### redrawCurrentItem ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#redrawCurrentItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### redrawItem (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#redrawItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#refresh</a>
                        </li>
                    </ul>
                </dd>
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
                <dt> Type </dt>
                <dd>
               [Number](Number.md)an>
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

#### reselect ()


Reselects the index based on the window's _index property.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#reselect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### reserveFaceImages ()


Reverses the face images of the game party members.
<dl>[Number](Number.md)
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


Resets the font settings of the window back to the default.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#resetFontSettings</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetScroll ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#resetScroll</a>
           [Number](Number.md)
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
[Number](Number.md)
#### row () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#row</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
               [String](String.md)/a></span>
                </dd>
            </dl>

#### scrollDown ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#scrollDown</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### scrollUp ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#scrollUp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### select (index)


Selects the current index within the window given a number.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#select</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### selectLast ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#selectLast</a>
                        </li>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
[Number](Number.md)
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
                        <li>
                            <a>Window_Base#setBackgroundType</a>
                        </li>
                    </ul>
                </dd>
            <[String](String.md)

#### setBottomRow (row)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#setBottomRow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setCategory (category)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `category` | [String](String.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#setCategory</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setCursorAll (cursorAll)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorAll` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#setCursorAll</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setCursorFixed (cursorFixed)
[Number](Number.md)
[Number](Number.md)
Sets the[Number](Number.md)y of the window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorFixed` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#setCursorFixed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setCursorRect (x, y, width, height)

[Number](Number.md)
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

#### setHandler (symbol, method)


Creates a new handler with the symbol as the handler name and a method (JS function) bound to it.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.html) |  |
| `method` | * |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#setHandler</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setHelpWindow (helpWindow)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `helpWindow` |  |  |

<dl>
                <dt[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#setHelpWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setHelpWindowItem (item)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | * |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>[Number](Number.md)
                            <a>Window_Selectable#setHelpWindowItem</a>
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
                    <ul>[String](String.md)
                        <li>
                            <a>Window#setTone</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTopRow (row)


Sets the current top row of the given a number. The top row will then be moved to an index of the window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>[Number](Number.md)
                            <a>Window_Selectable#setTopRow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### show ()


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
[Number](Number.md)

Shows the background dimmer sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#showBackgroundDimmer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### showHelpWindow ()


Shows the attached help window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                       [String](String.md)able#showHelpWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### spacing () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#spacing</a>
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

#### standardBackOpacity () → {[Number](Number.html)}


Returns [Number](Number.md)city of the window; this is the opacity of the area behind the window's text content. Default is 192.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#standardBackOpacity</a>
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
[Number](Number.md)

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

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### standardFontSize () [Number](Number.md)ml)}


Returns the standard font size of the text in window; default is 28.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
           [String](String.md)
                            <a>Window_Base#standardFontSize</a>
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

#### standardPadding () → {[Number](Number.html)}


Returns the standard padding of the window; default is 18.
<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_Base#standardPadding</a>
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

#### systemColor () → {[String](String.html)}


Returns the system color as a css color string.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#systemColor</a>
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

#### textColor (n) → {*}

[String](String.md)
Returns a text color given a numbered index as a css color string; this index maps directly to the img/system/window.png colors by default.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.html) |  |
[Game_Actor](Game_Actor.md)
<dl>
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
[String](String.md)

Returns the text padding of the window; default is 6.
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

#### textWidth (text) → {[String](String.md)}


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
[String](String.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### topIndex () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#topIndex</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### topRow () → {[Number](Number.html)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#topRow</a>
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


Returns the tp cost color as [Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#tpCostColor</a>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateArrows ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#updateArrows</a>
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

#### updateCursor ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#updateCursor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateHelp ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_ItemList#updateHelp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateInputData ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#updateInputData</a>
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
