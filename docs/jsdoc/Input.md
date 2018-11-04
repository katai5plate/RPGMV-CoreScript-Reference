# Class: Input

## Input ()

#### new Input ()

The static class that handles input data from the keyboard and gamepads.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `keyRepeatWait` | [Number](Number.html) | [static] The wait time of the key repeat in frames. |
| `keyRepeatInterval` | [Number](Number.html) | [static] The interval of the key repeat in frames. |
| `keyMapper` | Object | [static] A hash table to convert from a virtual key code to a mapped key name. |
| `gamepadMapper` | Object | [static] A hash table to convert from a gamepad button to a mapped key name. |
| `dir4` | [Number](Number.html) | [static][read-only] The four direction value as a number of the numpad, or 0 for neutral. |
| `dir8` | [Number](Number.html) | [static][read-only] The eight direction value as a number of the numpad, or 0 for neutral. |
| `date` | [Number](Number.html) | [static][read-only] The time of the last input in milliseconds. |
| `_currentState` | Object | [static]{[key: string]: boolean} |
| `_previousState` | Object | [static]{[key: string]: boolean} |
| `_gamepadStates` | [Array](Array.html).<[Array](Array.html).<Boolean>> | [static] |
| `_latestButton` | [String](String.html) | [static] |
| `_pressedTime` | [Number](Number.html) | [static] |
| `_dir4` | [Number](Number.html) | [static] |
| `_dir8` | [Number](Number.html) | [static] |
| `_preferredAxis` | [String](String.html) | [static] |
| `_date` | [Number](Number.html) | [static] |

<dl>
</dl>

### Methods

#### (static) _isEscapeCompatible (keyName) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _makeNumpadDirection (x, y) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
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
| `keyCode` | [Number](Number.html) |  |

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
| `index` | [Number](Number.html) |  |

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

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

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

Checks whether a key is just pressed or a key repeat occurred.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

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

#### (static) isTriggered (keyName) → {Boolean}

Checks whether a key is just pressed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.html) | The mapped name of the key |

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
