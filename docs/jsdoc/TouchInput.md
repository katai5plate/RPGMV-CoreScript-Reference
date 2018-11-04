# Class: TouchInput

## TouchInput ()

#### new TouchInput ()

The static class that handles input data from the mouse and touchscreen.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `keyRepeatWait` | [Number](Number.html) | [static] The wait time of the pseudo key repeat in frames. |
| `keyRepeatInterval` | [Number](Number.html) | [static] The interval of the pseudo key repeat in frames. |
| `wheelX` | [Number](Number.html) | [static][read-only] The horizontal scroll amount. |
| `wheelY` | [Number](Number.html) | [static][read-only] The vertical scroll amount. |
| `x` | [Number](Number.html) | [static][read-only] The x coordinate on the canvas area of the latest touch event. |
| `y` | [Number](Number.html) | [static][read-only] The y coordinate on the canvas area of the latest touch event. |
| `date` | [Number](Number.html) | [static][read-only] The time of the last input in milliseconds. |
| `_mousePressed` | Boolean | [static] |
| `_screenPressed` | Boolean | [static] |
| `_pressedTime` | [Number](Number.html) | [static] |
| `_events` | [MV.TouchInputEvents](MV.TouchInputEvents.html) | [static] |
| `_triggered` | Boolean | [static] |
| `_cancelled` | Boolean | [static] |
| `_moved` | Boolean | [static] |
| `_released` | Boolean | [static] |
| `_wheelX` | [Number](Number.html) | [static] |
| `_wheelY` | [Number](Number.html) | [static] |
| `_x` | [Number](Number.html) | [static] |
| `_y` | [Number](Number.html) | [static] |
| `_date` | [Number](Number.html) | [static] |

<dl>
</dl>

### Methods

#### (static) _onCancel (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _onLeftButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onMiddleButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onMouseDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onMouseMove (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onMouseUp (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onMove (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _onPointerDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | PointerEvent |  |

<dl>
</dl>

#### (static) _onRelease (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _onRightButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |

<dl>
</dl>

#### (static) _onTouchCancel (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onTouchEnd (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onTouchMove (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onTouchStart (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onTrigger (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _onWheel (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | WheelEvent |  |

<dl>
</dl>

#### (static) _setupEventHandlers ()

<dl>
</dl>

#### (static) clear ()

Clears all the touch data.
<dl>
</dl>

#### (static) initialize ()

Initializes the touch system.
<dl>
</dl>

#### (static) isCancelled () → {Boolean}

Checks whether the right mouse button is just pressed.
<dl>
</dl>

##### Returns:

True if the right mouse button is just pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isLongPressed () → {Boolean}

Checks whether the left mouse button or touchscreen is kept depressed.
<dl>
</dl>

##### Returns:

True if the left mouse button or touchscreen is long-pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isMoved () → {Boolean}

Checks whether the mouse or a finger on the touchscreen is moved.
<dl>
</dl>

##### Returns:

True if the mouse or a finger on the touchscreen is moved
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPressed () → {Boolean}

Checks whether the mouse button or touchscreen is currently pressed down.
<dl>
</dl>

##### Returns:

True if the mouse button or touchscreen is pressed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isReleased () → {Boolean}

Checks whether the left mouse button or touchscreen is released.
<dl>
</dl>

##### Returns:

True if the mouse button or touchscreen is released
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isRepeated () → {Boolean}

Checks whether the left mouse button or touchscreen is just pressed or a pseudo key repeat occurred.
<dl>
</dl>

##### Returns:

True if the mouse button or touchscreen is repeated
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTriggered () → {Boolean}

Checks whether the left mouse button or touchscreen is just pressed.
<dl>
</dl>

##### Returns:

True if the mouse button or touchscreen is triggered
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) update ()

Updates the touch data.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
