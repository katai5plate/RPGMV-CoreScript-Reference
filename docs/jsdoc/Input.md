# Class: Input

## Input ()

#### new Input ()

The static class that handles input data from the keyboard and gamepads.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `keyRepeatWait` | [Number](Number.md) | [static] The wait time of the key repeat in frames. |
| `keyRepeatInterval` | [Number](Number.md) | [static] The interval of the key repeat in frames. |
| `keyMapper` | Object | [static] A hash table to convert from a virtual key code to a mapped key name. |
| `gamepadMapper` | Object | [static] A hash table to convert from a gamepad button to a mapped key name. |
| `dir4` | [Number](Number.md) | [static][read-only] The four direction value as a number of the numpad, or 0 for neutral. |
| `dir8` | [Number](Number.md) | [static][read-only] The eight direction value as a number of the numpad, or 0 for neutral. |
| `date` | [Number](Number.md) | [static][read-only] The time of the last input in milliseconds. |
| `_currentState` | Object | [static]{[key: string]: boolean} |
| `_previousState` | Object | [static]{[key: string]: boolean} |
| `_gamepadStates` | [Array](Array.md).<[Array](Array.md).<Boolean>> | [static] |
| `_latestButton` | [String](String.md) | [static] |
| `_pressedTime` | [Number](Number.md) | [static] |
| `_dir4` | [Number](Number.md) | [static] |
| `_dir8` | [Number](Number.md) | [static] |
| `_preferredAxis` | [String](String.md) | [static] |
| `_date` | [Number](Number.md) | [static] |

<dl>
</dl>

### Methods

#### (static) _isEscapeCompatible (keyName) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _makeNumpadDirection (x, y) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
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

#### (static) _onKeyDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) _onKeyUp (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) _onLostFocus ()

<dl>
</dl>

#### (static) _pollGamepads ()

<dl>
</dl>

#### (static) _setupEventHandlers ()

<dl>
</dl>

#### (static) _shouldPreventDefault (keyCode)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyCode` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _signX ()

<dl>
</dl>

#### (static) _signY ()

<dl>
</dl>

#### (static) _updateDirection ()

<dl>
</dl>

#### (static) _updateGamepadState (gamepad, index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `gamepad` | Gamepad |  |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _wrapNwjsAlert ()

<dl>
</dl>

#### (static) clear ()


Clears all the input data.
<dl>
</dl>

#### (static) initialize ()


Initializes the input system.
<dl>
</dl>

#### (static) isLongPressed (keyName) → {Boolean}


Checks whether a key is kept depressed.

##### Parameters:
[String](String.md)
| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | The mapped name of the key |

<dl>
</dl>

##### Returns:


True if the key is long-pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPressed (keyName) → {Boolean}


Checks whether a key is currently pressed down.
[String](String.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | The mapped name of the key |

<dl>
</dl>

##### Returns:


True if the key is pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isRepeated (keyName) → {Boolean}

[String](String.md)
Checks whether a key is just pressed or a key repeat occurred.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | The mapped name of the key |

<dl>
</dl>

##### Returns:


True if the key is repeated
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) [String](String.md) → {Boolean}


Checks whether a key is just pressed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | The mapped name of the key |

<dl>
</dl>

##### Returns:


True if the key is triggered
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) update ()


Updates the input data.
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
