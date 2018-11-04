# Class: Window_HorzCommand

## Window_HorzCommand (x, y)

#### new Window_HorzCommand (x, y)

The command window for the horizontal selection format. Superclass of [Window_EquipCommand](Window_EquipCommand.md), [Window_ItemCategory](Window_ItemCategory.md), [Window_ShopCommand](Window_ShopCommand.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

### Extends

* [Window_Command](Window_Command.md)

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
| `actorIndex` | [Number](Number.md) |  |

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


The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addCommand (name, symbol, enabled, ext)
[String](String.md)
[String](String.md)
 ウィンドウに項目を追加する。 項目はオブジェクトに格納される。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  表示名 |
| `symbol` | [String](String.md) |  言語によらない名 |
| `enabled` | Boolean |  選択可能か |
| `ext` | * |Object |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <[Number](Number.md)
                        <li>
                            <a>Window_Command#addCommand</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### bottomRow () → {[Number](Number.md)}

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
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
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
             [String](String.md)
            </dl>

#### callHandler (symbol)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) |  |

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

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#callOkHandler</a>
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
#### canvasToLocalX (x) → {[Number](Number.md)}


Returns the x coordinate of the mouse to a local window x coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |

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

#### canvasToLocalY (y) → {[Number](Number.md)}


Returns the y coordinate of the mouse to a local window y coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  |

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
| `color` | [String](String.md) |  |

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

#### clearCommandList ()


Clears the list of commands from the window; this is useful for refreshing changing commands.
<dl>
                <dt>Inherited From:</dt>
                <dd>
            [Number](Number.md)
                        <li>
                            <a>Window_Command#clearCommandList</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearItem (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

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

#### close ()[String](String.md)


Closes the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
            [Number](Number.md)
                            <a>Window_Base#close</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### commandName (index) → {[String](String.md)}


Returns the command name given an index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>[String](String.md)
                            <a>Window_Command#commandName</a>
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

#### commandSymbol (index) → {[String](String.md)}


Returns the command symbol given an index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Number](Number.md)
                        <li>
                            <a>Window_Command#commandSymbol</a>
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

#### contentsHeight () → {[Number](Number.md)}


Returns the inner content height of the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
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

#### contentsWidth () → {[Number](Number.md)}


Returns the inner content width of the window.
<dl>
                <dt>Inherited From:</dt[String](String.md)
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#contentsWidth</a>
                        </li>
                    </ul>
                </dd>
           [String](String.md)

##### Returns:

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
                <dt> Ty[String](String.md)
                <dd>
                    <span><a>String</a></span>
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

#### crisisColor () → {[String](String.md)}


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

#### currentData () → {object}


Returns the command object at the current index.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#currentData</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>object</span>
                </dd>
            </dl>

#### currentExt () → {any[String](String.md)


Returns the ext property of the command at the current index.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#currentExt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>any</span> | <span>object</span>
                </dd>
            </dl>

#### currentSymbol () → {[String](String.md)}


Returns the command symbol at the current index.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#currentSymbol</a>
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

| Name | Type | Descri[String](String.md)
| --- | --- | --- |
| `wrap` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
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

#### deathColor () → {[String](String.md)}


Returns the death color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                     [String](String.md)#deathColor</a>
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

#### deselect ()


Deselects the currently selected index.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                     [String](String.md)
                            <a>Window_Selectable#deselect</a>
                        </li>
                    </ul>
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
            [Game_Actor](Game_Actor.md)
[Number](Number.md)
#### dim[Number](Number.md)(String.md)}


Color 2 of the dimmer sprite bitmap for the gradient.
<dl>
                <dt>Inherited From:</dt>
                <dd>
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
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
[Number](Number.md)
#### drawAct[Number](Number.md), y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

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

#### drawAct[Game_Actor](Game_Actor.md)
[Number](Number.md)
[Number](Number.md)
Draws the ac[Number](Number.md)ified x and y coordinates within the given width.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

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

#### drawAct[Game_Actor](Game_Actor.md)eight)
[Number](Number.md)
[Number](Number.md)
Draws the ac[Number](Number.md)fied x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorFace</a>
                        </li>
                    </ul>
                </dd>
            [Game_Actor](Game_Actor.md)
[Number](Number.md)
#### dra[Number](Number.md), width)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorHp</a>
                        </li>
                    </ul>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
[Number](Number.md)
#### drawActorIcons (actor, x, y, width)


Draws the actor icons at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorIcons</a>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)

#### drawActorLevel (actor, x, y)


Draws the actor level at the specified x and y coordinates.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawActorLevel</a>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)

#### drawActorMp (actor, x, y, width)


Draws the actor mp at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
            [Game_Actor](Game_Actor.md)e#drawActorMp</a>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
            </dl>

#### drawActorName (actor, x, y, width)


Draws the actor name at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)a>Window_Base#drawActorName</a>
        [Number](Number.md)
            [Number](Number.md)
                </dd>
            </dl>

#### drawActorNickname (actor, x, y, width)


Draws the actor nickname at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
            [Game_Actor](Game_Actor.md)
        [Number](Number.md)
        [Number](Number.md)a>Window_Base#drawActorNickname</a>
            [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### drawActorSimpleStatus (actor, x, y, width)


Draws a simple status for the game actor passed into the method at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

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

##### Parameters:[String](String.md)
[Number](Number.md)
| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `actor` | [Game_Actor](Game_Actor.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
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
<dl>[Number](Number.md)
           [String](String.md)om:</dt>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
                            <a>Window_Selectable#drawAllItems</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawCharacter (characterName, characterIndex, x, y)


Draws a character (map sprites) at the specified x and y coordinate. CharacterName refers to character spritesheet, and characterIndex refers to the characterIndex on the spritesheet.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  |
| `characterIndex` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>[Number](Number.md)
          [Number](Number.md)rom:</dt>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)
             [String](String.md)dow_Base#drawCharacter</a>
             [String](String.md)
                    </ul>
                </dd>
            </dl>

#### drawCurrencyValue (value, unit, x, y, width)


Draws the currency value given at the specified x and y coordinates within the width given. Useful if you want to write your own custom currency value.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |
| `unit` | [String](String.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
[String](String.md)
<dl>[Number](Number.md)
        [Number](Number.md) From:</dt>
        [Number](Number.md)
            [Number](Number.md)
             [Number](Number.md)
                            <a>Window_Base#drawCurrencyValue</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawCurrentAndMax (current, max, x, y, width, color1, color2)


Draws the current and max number at the specified x and y coordinate within the given width. Color1 represents the current number and color2 represents the max number when the text is drawn.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `current` | [Number](Number.md) |  |
| `max` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `color[Number](Number.md)html) |  |
| `color[Number](Number.md)html) |  |
[Number](Number.md)
<dl>[Number](Number.md)
             [String](String.md):</dt>
             [String](String.md)
                    <ul>
                        <li>
                            <a>Window_Base#drawCurrentAndMax</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawFace (faceName, faceIndex, x, y, width opt, height opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `faceName` | [String](String.md) |  |  |
| `faceIndex` | [Number](Number.md) |  |  |
| `x` | [Number](Number.md) |  |  |
| `y` | [Number](Number.md) |  |  |
| `width` | [Number](Number.md) | <optional> |  |
| `height` | [Number](Number.md) | <optional> |  |
[Number](Number.md)
<dl>[Number](Number.md)
        [Number](Number.md) From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawFace</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawGauge (x, y, width, rate, color1, color2)


Draws a gauge at the specified x and y coordinates within the given width. Color1 and Color2 represent the gradient as css color strings of the gauge.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Num[Number](Number.md)|
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `rate` | [Number](Number.md) |  |
| `color1` | [String](String.md) |  |
| `color2` | [String](String.md) |  |

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


Draws an ic[RPG.BaseItem](RPG.BaseItem.md)at the specified x and y coordinates. The Width and Height of the icon is based on the _iconWidth and _iconHeight properties.
[Number](Number.md)
##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

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

| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `index` | [Nu[Number](Number.md) |
[String](String.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#drawItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### drawItemName (item, x, y, width)
[Number](Number.md)

Draws the item name at the specified x and y coordinates within the given width.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [String](String.md)seItem.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawItemName</a>
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
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `maxWidth` | [Number](Number.md) |  |
| `align` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#drawText</a>
                      [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### drawTextEx (text, x, y) → {[Number](Number.md)}


Draws text with text codes included; this will draw icons, increase text height, and more.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

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
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### ensureCu[String](String.md)

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

#### findExt (ext) → {[Number](Number.md)}


Finds a command object and returns the index number based on the ext property.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `ext` | any |object |  |[Number](Number.md)

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#findExt</a>
               [Number](Number.md)
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

#### findSymbol (symbol) → {[Number](Number.md)}


Finds a command object and returns the index number based on the symbol property.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[String](String.md)
| `symbol` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#findSymbol</a>
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

#### fittingHeight (numLines) → {[Number](Number.md)}


Returns the fitting height given a number of lines based on the line height plus standard padding of the window. Default formula: numLines * lineHeight + standardPadding * 2

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `numLines` | [Number](Number.md) |  |

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

#### gaugeBackColor () → {[String](String.md)}


Returns the gauage back color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#gaugeBackColor</a>
                        </li>
                    </u[Number](Number.md)
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
        [Number](Number.md)t>
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
            </dl>

#### hideBackgroundDimmer ()
[String](String.md)

Hides the background dimmer sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
            [Game_Actor](Game_Actor.md)e#hideBackgroundDimmer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hideHelpWindow ()


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

#### hitTest (x, y) → {[Number](Number.md)}
[String](String.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
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
                <dd>[String](String.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### hpColor (actor) → {[String](String.md)}


Returns the hp color as a css string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#hpColor</a>
                        </li>
                 [Number](Number.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hpGaugeColor1 () → {[String](String.md)}


Returns the hp gauge color 1 as a css color string.
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
        [Number](Number.md)t>
        [Number](Number.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hpGaugeColor2 () → {[String](String.md)}


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

#### index () → {[Number](Number.md)}


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

#### initialize (x, y)


 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#initialize</a>
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
            [Number](Number.md)
                    <ul>
                        <li>
                            <a>Window_Selectable#isCancelTriggered</a>
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

#### isClosed ()


Returns true if the window is completely closed (openness == 0).
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window#isClosed</a>
        [Number](Number.md)
        [Number](Number.md)
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

#### isCommandEnabled (index) → {Boolean}


Determines if the command is enabled; checks the enabled property of the command.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#isCommandEnabled</a>
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
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

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
             [String](String.md)dow_Command#isCurrentItemEnabled</a>
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

<dl>
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

#### isHandled (symbol) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) |  |

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

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#isOkEnabled</a>
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
[Number](Number.md)
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
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>[Rectangle](Rectangle.md)

#### isTouchedInsideFrame () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
            [Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>[Rectangle](Rectangle.md)
                    <ul>
                        <li>
                            <a>Window_Selectable#isTouchOkEnabled</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### itemHeight () → {[Number](Number.md)}


Returns the height of an item within the window; determines the height of a row.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#itemHeight</a>
                        </li>
                    </ul>
                </dd>[String](String.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemRect (index) → {[Rectangle](Rectangle.md)}


Creates a new rectangle based on itemWidth and itemHeight. The rectangle is mainly used for positioning items within the selectable window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#itemRect</a>
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

#### itemRectForText (index) → {[Rectangle](Rectangle.md)}

[Number](Number.md)
Creates a new rectangle based on itemWidth and itemHeight The rectangle is used for positioning text within the selectable window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

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

#### itemTextAlign () → {[String](String.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#itemTextAlign</a>
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

#### itemWidth () → {[Number](Number.md)}


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

#### lineHeight () → {[Number](Number.md)}


Returns the standard line height of the current window; default is 36.
<dl>[Number](Number.md)
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

#### makeCommandList ()


 メニューに全項目を追加。 個々の追加は #addCommand で行っている。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#makeCommandList</a>
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
                        <li>
                            <a>Window_Base#makeFontBigger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeFontSmaller ()

[Number](Number.md)
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

#### maxCols () → {[Number](Number.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#maxCols</a>
                        </li>
                   [Number](Number.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxItems () → {[Number](Number.md)}


Returns the maximum number of items within the window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                     [Number](Number.md)and#maxItems</a>
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

#### maxPageItems () → {[Number](Number.md)}

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

<dl>[Number](Number.md)
        [Number](Number.md)t>
            [Number](Number.md)
             [Number](Number.md)r</a></span>
                </dd>
            </dl>

#### maxPageRows () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#maxPageRows</a>
                        </li>
                    </ul[String](String.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
            [Game_Actor](Game_Actor.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxRows () → {[Number](Number.md)}

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
                <dd>[String](String.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxTopRow () → {[Number](Number.md)}

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
                    <span[String](String.md)
                </dd>
            </dl>

#### move (x, y, width, height)


Sets the x, y, width, and height all at once.

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
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpColor</a>
                       [String](String.md)
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

#### mpCostColor () → {[String](String.md)}


Returns the mp cost color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                          [Number](Number.md)stColor</a>
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

#### mpGaugeColor1 () → {[String](String.md)}


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
            </dl[MV.TextState](MV.TextState.md)

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#mpGaugeColor2</a>
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

#### normalColor () → {[String](String.md)}


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

#### numVisibleRows () → {[Number](Number.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#numVisibleRows</a>
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
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#obtainEscapeCode</a>
                        </li>
                    </ul>
                </dd>[String](String.md)
            </dl>

#### obtainEscapeParam (textState) → {number|string}


Obtains the escape parameters from text codes in the text state when drawTextEx is used to draw text.

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
                    <spa[String](String.md)an>string</span>
                </dd>
            </dl>

#### onTouch (triggered)

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
| `change` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Window_Base#paramchangeTextColor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### partyMemberName (partyMemberIndex) → {[String](String.md)}


Returns a party member name given an index; the index starts from 1.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `partyMemberIndex` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[String](String.md)
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

#### pendingColor () → {[String](String.md)}


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


Plays the buzzer[MV.TextState](MV.TextState.md)rect.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
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

#### powerDownColor () → {[String](String.md)}


Returns the power down color as a css color string.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                [Number](Number.md)
                [MV.TextState](MV.TextState.md)ownColor</a>
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

#### powerUpColor () → {[String](String.md)}


Returns the power up color as a css color string.
<dl>
                <dt>Inherited From:</dt>
           [String](String.md)
                [MV.TextState](MV.TextState.md)
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

##### Parameters[MV.TextState](MV.TextState.md)

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
<dl>[MV.TextState](MV.TextState.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#processCursorMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processDrawIcon (iconIndex, textState)


Processes drawing an icon when drawTextEx is used for drawing text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) |  |
| `textState` | [MV.TextState](MV.TextState.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
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
| `code` | [String](String.md) |  |
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

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
            [Number](Number.md)
                        <li>
                            <a>Window_Selectable#processWheel</a>
                        </li>
                    </ul>
                </dd>
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
| `index` | [Number](Number.md) |  |

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
                            <a>Window_Command#refresh</a>
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

[Number](Number.md)
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
| `index` | [Number](Number.md) | The index to get the child from |

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
[Number](Number.md)
#### reserveFaceImages ()


Reverses the face images of the game party members.
<dl>
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
                        </li>
                    </ul>
                </dd>
            <[String](String.md)

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

#### row () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
           [Number](Number.md)
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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrollDown ()
[Number](Number.md)
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
| `index` | [Number](Number.md) |  |

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

#### selectExt (ext)


Selects a command object based on the ext property.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `ext` | any |object |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
        [Number](Number.md)
        [Number](Number.md)
            [Number](Number.md)ndow_Command#selectExt</a>
             [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### selectSymbol (symbol)


Selects a command object based on the symbol property.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
             [String](String.md)dow_Command#selectSymbol</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBackgroundType (type)


Sets the background type of the window. 0 is 255 window opacity (standard). 1 is the window with background dimmer. Any other number changes the opacity to 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Base#setBackgroundType</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBottomRow (row)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.md) |  |

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
        [Number](Number.md)a>Window_Selectable#setCursorAll</a>
        [Number](Number.md)
        [Number](Number.md)
                </dd>
            </dl>

#### setCursorFixed (cursorFixed)


Sets the _cursorFixed property of the window.

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
          [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### setCursorRect (x, y, width, height)


Sets the position of the command cursor.

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
| `symbol` | [String](String.md) |  |
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

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `helpWindow` |  |  |

<dl>
                <dt>Inherited From:</dt>
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
| --- | --- | --- |[Number](Number.md)
| `item` | * |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
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
| `r` | [Number](Number.html[String](String.md)the range (-255, 255) |
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

#### setTopRow (row)


Sets the current top row of the given a number. The top row will then be moved to an index of the window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `row` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
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
                           [Number](Number.md)/a>
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
                        </li>
                    </ul>
                </dd>
            </dl>

#### showHelpWindow ()

[String](String.md)
Shows the attached help window.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#showHelpWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### spacing () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#spacing</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
        [Number](Number.md)Number</a></span>
                </dd>
            </dl>

#### standardBackOpacity () → {[Number](Number.md)}


Returns the standard back opacity of the window; this is the opacity of the area behind the window's text content. Default is 192.
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
                <dt> Ty[Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### standardFontFace () → {[String](String.md)}


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

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### standardFontSize () → {[Number](Number.md)}
[String](String.md)

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

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### standardPadding () → {[Number](Number.md)}


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
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </[Number](Number.md)
            </dl>

#### systemColor () → {[String](String.md)}


Returns the system color as a css color string.
<dl>
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
                <dd>[String](String.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### textColor (n) → {*}


Returns a te[Game_Actor](Game_Actor.md)ex as a css color string; this index maps directly to the img/system/window.png colors by default.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) |  |

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
                <dt> Ty[String](String.md)
                <dd>
                    <span>*</span>
                </dd>
            </dl>

#### textPadding () → {[Number](Number.md)}


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

<dl>[String](String.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                         [String](String.md)tWidth</a>
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

#### topIndex () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Selectable#topIndex</a>
                        </li>[Number](Number.md)
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

#### topRow () → {[Number](Number.md)}

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

#### tpColor (actor) → {[String](String.md)}


Returns the tp color as a css color string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

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
                    <span><a>[Number](Number.md)
                </dd>
            </dl>

#### tpCostColor () → {[String](String.md)}


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

#### tpGaugeColor2 () → {[String](String.md)}


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

#### translucentOpacity () → {[Number](Number.md)}


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
                    <ul>[Number](Number.md)
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

#### updateBackOpacity [Number](Number.md).md)}


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
                            <a>Window_Selectable#updateHelp</a>
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

#### windowHeight () → {[Number](Number.md)}


Returns the height of the window; takes the visible rows and passes it to the fittingHeight method.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#windowHeight</a>
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

#### windowWidth () → {[Number](Number.md)}


Returns the width of the window; default is 240.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Window_Command#windowWidth</a>
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


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
