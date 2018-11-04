# Class: Game_Picture

## Game_Picture ()

#### new Game_Picture ()

The game object class for a picture.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_name` | [String](String.html) |  |
| `_origin` | [Number](Number.html) |  |
| `_x` | [Number](Number.html) |  |
| `_y` | [Number](Number.html) |  |
| `_scaleX` | [Number](Number.html) |  |
| `_scaleY` | [Number](Number.html) |  |
| `_opacity` | [Number](Number.html) |  |
| `_blendMode` | [Number](Number.html) |  |
| `_targetX` | [Number](Number.html) |  |
| `_targetY` | [Number](Number.html) |  |
| `_targetScaleX` | [Number](Number.html) |  |
| `_targetScaleY` | [Number](Number.html) |  |
| `_targetOpacity` | [Number](Number.html) |  |
| `_duration` | [Number](Number.html) |  |
| `_tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneTarget` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneDuration` | [Number](Number.html) |  |
| `_angle` | [Number](Number.html) |  |
| `_rotationSpeed` | [Number](Number.html) |  |

<dl>
</dl>

### Methods

#### angle () → {[Number](Number.html)}

Returns the angle of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### blendMode () → {[Number](Number.html)}

Returns the blend mode of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### erase ()

Erases the game picture.
<dl>
</dl>

#### initBasic ()

<dl>
</dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### initRotation ()

<dl>
</dl>

#### initTarget ()

<dl>
</dl>

#### initTone ()

<dl>
</dl>

#### move (origin, x, y, scaleX, scaleY, opacity, blendMode, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `origin` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scaleX` | [Number](Number.html) |  |
| `scaleY` | [Number](Number.html) |  |
| `opacity` | [Number](Number.html) |  |
| `blendMode` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### name () → {[String](String.html)}

Returns the name of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### opacity () → {[Number](Number.html)}

Returns the opacity of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### origin () → {[Number](Number.html)}

Returns the origin of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### rotate (speed)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `speed` | [Number](Number.html) |  |

<dl>
</dl>

#### scaleX () → {[Number](Number.html)}

Returns x scale of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scaleY () → {[Number](Number.html)}

Returns the y scale of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### show (name, origin, x, y, scaleX, scaleY, opacity, blendMode)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) |  |
| `origin` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scaleX` | [Number](Number.html) |  |
| `scaleY` | [Number](Number.html) |  |
| `opacity` | [Number](Number.html) |  |
| `blendMode` | [Number](Number.html) |  |

<dl>
</dl>

#### tint (tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### tone () → {[Array](Array.html).<[Number](Number.html)>}

Returns the tone of the game picture.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### update ()

Updates the game picture.
<dl>
</dl>

#### updateMove ()

Updates the movement of the game picture.
<dl>
</dl>

#### updateRotation ()

Updates the rotation of the game picture.
<dl>
</dl>

#### updateTone ()

Updates the tone of the game picture.
<dl>
</dl>

#### x () → {[Number](Number.html)}

Returns the picture x coordinate.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### y () → {[Number](Number.html)}

Returns the picture y coordinate.
<dl>
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
