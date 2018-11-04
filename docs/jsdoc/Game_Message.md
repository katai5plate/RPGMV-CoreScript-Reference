# Class: Game_Message

## Game_Message ()

#### new Game_Message ()

The game object class for the state of the message window that displays text or selections, etc. Use as global variable [$gameMessage](global.html#$gameMessage)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_texts` | [Array](Array.html).<[String](String.html)> |  |
| `_choices` | [Array](Array.html).<[String](String.html)> |  |
| `_faceName` | [String](String.html) |  |
| `_faceIndex` | [Number](Number.html) |  |
| `_background` | [Number](Number.html) |  |
| `_positionType` | [Number](Number.html) |  |
| `_choiceDefaultType` | [Number](Number.html) |  |
| `_choiceCancelType` | [Number](Number.html) |  |
| `_choiceBackground` | [Number](Number.html) |  |
| `_choicePostionType` | [Number](Number.html) |  |
| `_numInputVariableId` | [Number](Number.html) |  |
| `_numInputMaxDigits` | [Number](Number.html) |  |
| `_itemChoiceVariableId` | [Number](Number.html) |  |
| `_itemChoiceItypeId` | [Number](Number.html) |  |
| `_scrollMode` | Boolean |  |
| `_scrollSpeed` | [Number](Number.html) |  |
| `_scrollNoFast` | Boolean |  |
| `_choiceCallback` | function |  |

<dl>
</dl>

### Methods

#### add (text)

Adds text to the game message object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |

<dl>
</dl>

#### allText () → {[String](String.html)}

Returns all of the text contained within the message.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### background () → {[Number](Number.html)}

Returns the background associated with the message; this is the background
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### choiceBackground () → {[Number](Number.html)}

Returns the background type of the choice window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### choiceCancelType ()

<dl>
</dl>

#### choiceDefaultType ()

<dl>
</dl>

#### choicePositionType () → {[Number](Number.html)}

Returns the position of the choice window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### choices ()

<dl>
</dl>

#### clear ()

<dl>
</dl>

#### faceIndex () → {[Number](Number.html)}

Returns the face index within the face image to display the correct face.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### faceName () → {[String](String.html)}

Returns the name of the face image used for the message.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### hasText () → {Boolean}

Returns true if the game message object has text.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### isBusy () → {Boolean}

Returns true if the game message object has text, choices, number input, or item choice.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isChoice () → {Boolean}

Returns true if the game message object has a set of choices.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isItemChoice () → {Boolean}

Returns true if the game message object has an item choice attached.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNumberInput () → {Boolean}

Returns true if the game message object has a number input attached.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### itemChoiceItypeId () → {[Number](Number.html)}

Returns the item choice item type id.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemChoiceVariableId () → {[Number](Number.html)}

Returns the item choice variable id.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### newPage ()

Creates a new page for the text within the message window.
<dl>
</dl>

#### numInputMaxDigits () → {[Number](Number.html)}

Returns the number input maximum digits.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### numInputVariableId () → {[Number](Number.html)}

Returns the number input variable id.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### onChoice (n)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.html) |  |

<dl>
</dl>

#### positionType () → {[Number](Number.html)}

Returns the current position type of the message window.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrollMode () → {Boolean}

Returns true if the scroll mode is set to true.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### scrollNoFast () → {Boolean}

Returns true if the scroll is set to not being fast.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### scrollSpeed () → {[Number](Number.html)}

Returns the scroll speed.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### setBackground (background)

Sets the background of the message window; options are 0 (fully opaque), 1 (transparent), 2 (invisible background). The default is 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.html) |  |

<dl>
</dl>

#### setChoiceBackground (background)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.html) |  |

<dl>
</dl>

#### setChoiceCallback (callback)

Sets a callback to be associated with a specific choice; a callback is a JavaScript function that will be run when the choice is selected.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `callback` | function |  |

<dl>
</dl>

#### setChoicePositionType (positionType)

Sets the position of the choice window associated with the message window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.html) |  |

<dl>
</dl>

#### setChoices (choices, defaultType, cancelType)

Sets the choices within the choice window; sets the default and cancel choices for the window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `choices` | [Array](Array.html).<[String](String.html)> |  |
| `defaultType` | [Number](Number.html) |  |
| `cancelType` | [Number](Number.html) |  |

<dl>
</dl>

#### setFaceImage (faceName, faceIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.html) |  |
| `faceIndex` | [Number](Number.html) |  |

<dl>
</dl>

#### setItemChoice (variableId, itemType)

Sets the choice and associates it with a variable id; sets the itemtype id associated with the choice.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.html) |  |
| `itemType` | [Number](Number.html) |  |

<dl>
</dl>

#### setNumberInput (variableId, maxDigits)

Sets the number input and associates it with a variable id; the max number of digits can also be set.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.html) |  |
| `maxDigits` | [Number](Number.html) |  |

<dl>
</dl>

#### setPositionType (positionType)

Sets the position of the message window; default is 2.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.html) |  |

<dl>
</dl>

#### setScroll (speed, noFast)

Sets the scroll speed of the message window; disable fast movement if noFast is set to true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `speed` | [Number](Number.html) |  |
| `noFast` | Boolean |  |

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
