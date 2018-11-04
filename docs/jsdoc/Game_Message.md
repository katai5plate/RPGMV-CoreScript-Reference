# Class: Game_Message

## Game_Message ()

#### new Game_Message ()

The game object class for the state of the message window that displays text or selections, etc. Use as global variable [$gameMessage](global.html#$gameMessage)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_texts` | [Array](Array.md).<[String](String.md)> |  |
| `_choices` | [Array](Array.md).<[String](String.md)> |  |
| `_faceName` | [String](String.md) |  |
| `_faceIndex` | [Number](Number.md) |  |
| `_background` | [Number](Number.md) |  |
| `_positionType` | [Number](Number.md) |  |
| `_choiceDefaultType` | [Number](Number.md) |  |
| `_choiceCancelType` | [Number](Number.md) |  |
| `_choiceBackground` | [Number](Number.md) |  |
| `_choicePostionType` | [Number](Number.md) |  |
| `_numInputVariableId` | [Number](Number.md) |  |
| `_numInputMaxDigits` | [Number](Number.md) |  |
| `_itemChoiceVariableId` | [Number](Number.md) |  |
| `_itemChoiceItypeId` | [Number](Number.md) |  |
| `_scrollMode` | Boolean |  |
| `_scrollSpeed` | [Number](Number.md) |  |
| `_scrollNoFast` | Boolean |  |
| `_choiceCallback` | function |  |

<dl>
</dl>

### Methods

#### add (text)


Adds text to the game message object.

##### Parameters:

| Name | Type | Description |
| --- | ---[String](String.md)
| `text` | [String](String.md) |  |

<dl>
</dl>
[String](String.md)
#### allText () → {[String](String.md)}


Returns all of the text contained within the message.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>[Number](Number.md)

#### background () → {[Number](Number.md)}


Returns the background associated with the message; this is the background
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[Number](Number.md)
            </dl>

#### choiceBackground () → {[Number](Number.md)}


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
[Number](Number.md)
<dl>
</dl>

#### choicePositionType () → {[Number](Number.md)}


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

#### clear ()[Number](Number.md)

<dl>
</dl>

#### faceIndex () → {[Number](Number.md)}


Returns the face index within the face image to display the correct face.
<dl>
</dl>

##### Returns:

<dl>
                <dt>[String](String.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### faceName () → {[String](String.md)}


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


Returns true if the game mess[Number](Number.md)er input attached.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### itemChoiceItypeId () → {[Number](Number.md)}

[Number](Number.md)
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

#### itemChoiceVariableId () → {[Number](Number.md)}


Returns the item choice variable id.
<dl>
</dl>

##### Returns:[Number](Number.md)

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
[Number](Number.md)
#### numInputMaxDigits () → {[Number](Number.md)}


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

#### numInputVariableId () → {[Number](Number.md)}


Returns the number input variable id.
<dl>[Number](Number.md)
</dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### onChoice (n)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) |  |

<dl>
</dl>

#### positionType () → {[Number](Number.md)}


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
                <dd>[Number](Number.md)
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

#### scrollSpeed () → {[Number](Number.md)}

[Number](Number.md)
Returns the scroll speed.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                <[Number](Number.md)
            </dl>

#### setBackground (background)


Sets the background of the message window; options are 0 (fully opaque), 1 (transparent), 2 (invisible background). The default is 0.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.md) |  |

<dl>
</dl>

#### setChoiceBackground (background)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.md) |  |

<dl>
</dl>[Number](Number.md)

#### setChoiceCallback (callback)


Sets a callback to be associated with a specific choice; a callback is a JavaScript function that will be run when the choice is selected.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `callback` | function |  |

<dl>[Array](Array.md)[String](String.md)
</dl>[Number](Number.md)
[Number](Number.md)
#### setChoicePositionType (positionType)


Sets the position of the choice window associated with the message window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.md) |  |
[String](String.md)
<dl>[Number](Number.md)
</dl>

#### setChoices (choices, defaultType, cancelType)


Sets the choices within the choice window; sets the default and cancel choices for the window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `choices` | [Array](Array.md).<[String](String.md)> |  |
| `defaultType` |[Number](Number.md)) |  |
| `cancelType` [Number](Number.md)l) |  |

<dl>
</dl>

#### setFaceImage (faceName, faceIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.md) |  |
| `faceIndex` | [Number](Number.md) |  |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>

#### setItemChoice (variableId, itemType)


Sets the choice and associates it with a variable id; sets the itemtype id associated with the choice.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) |  |
| `itemType` | [Num[Number](Number.md)|

<dl>
</dl>

#### setNumberInput (variableId, maxDigits)


Sets the number input and associates it with a variable id; the max number of digits can also be set.

##### Parameters:

| Name | Type | Description |
| --- | --- [Number](Number.md)
| `variableId` | [Number](Number.md) |  |
| `maxDigits` | [Number](Number.md) |  |

<dl>
</dl>

#### setPositionType (positionType)


Sets the position of the message window; default is 2.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.md) |  |

<dl>
</dl>

#### setScroll (speed, noFast)


Sets the scroll speed of the message window; disable fast movement if noFast is set to true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `speed` | [Number](Number.md) |  |
| `noFast` | Boolean |  |

<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
