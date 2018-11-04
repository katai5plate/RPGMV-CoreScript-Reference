# Class: Game_Screen

## Game_Screen ()

#### new Game_Screen ()

The game object class for screen effect data, such as changes in color tone and flashes. Use as global variable [$gameScreen](global.html#$gameScreen)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_shake` | [Number](Number.md) |  |
| `_shakePower` | [Number](Number.md) |  |
| `_shakeSpeed` | [Number](Number.md) |  |
| `_shakeDuration` | [Number](Number.md) |  |
| `_shakeDirection` | [Number](Number.md) |  |
| `_zoomX` | [Number](Number.md) |  _zoomX property of the game screen. |
| `_zoomY` | [Number](Number.md) |  _zoomY property of the game screen. |
| `_zoomScale` | [Number](Number.md) |  |
| `_zoomScaleTarget` | [Number](Number.md) |  |
| `_zoomDuration` | [Number](Number.md) |  |
| `_weatherType` | [String](String.md) |  |
| `_weatherPower` | [Number](Number.md) |  |
| `_weatherPowerTarget` | [Number](Number.md) |  |
| `_weatherDuration` | [Number](Number.md) |  |
| `_brightness` | [Number](Number.md) | The _brightness property of the game screen; returned when calling the brightness method. |
| `_fadeOutDuration` | [Number](Number.md) |  |
| `_fadeInDuration` | [Number](Number.md) |  |
| `_tone` | [Array](Array.md).<[Number](Number.md)> |  |
| `_toneTarget` | [Array](Array.md).<[Number](Number.md)> |  |
| `_toneDuration` | [Number](Number.md) |  |
| `_flashColor` | [Array](Array.md).<[Number](Number.md)> |  |
| `_flashDuration` | [Number](Number.md) |  |
| `_pictures` | [Array](Array.md).<[Game_Picture](Game_Picture.md)> | The array of Game_Pictures that are attached to the game screen. |

<dl>
</dl>

### Methods

#### brightness () → {[Number](Number.md)}


Returns the brightness of the game screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### changeWeather (type, power, duration)

##### Parameters:

| Name | Type | Description |
| --- | ---[String](String.md)
| `type` | [[Number](Number.md)|  |
| `power` | [Nu[Number](Number.md) |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### clear ()

<dl>
</dl>

#### clearFade ()


Clears the screen fade.
<dl>
</dl>

#### clearFlash ()


Clears the screen flash.
<dl>
</dl>

#### clearPictures ()


Clears the pictures set on the game screen.
<dl>
</dl>

#### clearShake ()


Clears the screen shake.
<dl>
</dl>

#### clearTone ()


Clears the screen tone.
<dl>
</dl>

#### clearWeather ()


Clears the screen weather.
<dl>
</dl>

#### clearZoom ()


Clears the screen zoom.
<dl>
</dl>

#### eraseBattlePictures ()


Erases the battle pictures.
<dl>
</dl>
[Number](Number.md)
#### erasePicture (pictureId)


Erases a picture from the screen given the respected picture id.
[Array](Array.md)[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) |  |

<dl>
</dl>

#### flashColor () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <sp[Number](Number.md)a>Number</a>&gt;</span>
                </dd>
            </dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
</dl>

#### maxPictures () → {[Number](Number.md)}


Returns the maximum number of pictures set on the game screen.
<dl>
</dl>

##### Returns:

<dl>
                [Number](Number.md)
             [Number](Number.md)
        [Number](Number.md)Number</a></span>
        [Number](Number.md)
            <[Number](Number.md)
[Number](Number.md)
#### movePictu[Number](Number.md), x, y, scaleX, scaleY, opacity, blendMode, duration)
[Number](Number.md)
##### Parameter[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) |  |
| `origin` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `scaleX` | [Number](Number.md) |  |
| `scaleY` | [Number](Number.md) |  |
| `opacity` | [Number](Number.md) |  |
| `blendMode` | [Number](Num[Game_Picture](Game_Picture.md)
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### onBattleStart ()

[Number](Number.md)
Handler for when the battle starts in game; prepares the screen for the battle scene.
<dl>
</dl>

#### picture (pictureId) → {[Game_Picture](Game_Picture.md)}


Returns the specified picture given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.ht[Number](Number.md)

<dl>
</dl>

##### Returns:

<dl>
                [Number](Number.md)
                <dd>
                    <span><a>Game_Picture</a></span>
                </dd>
            </dl>

#### realPictureId (pictureId) → {[Number](Number.md)}


Returns the real picture id, given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:[Number](Number.md)
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### rotatePicture (pictureId, speed)

##### Parameters:
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- [Number](Number.md)
| `pictureId` | [Number](Number.md) |  |
| `speed` | [Number](Number.md) |  |

<dl>
</dl>[Number](Number.md)

#### setZoom (x, y, scale)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `scale` | [Number](Number.md) |  |

<dl>
</dl>

#### shake () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:[Number](Number.md)
[String](String.md)
<dl>[Number](Number.md)
        [Number](Number.md)t>
        [Number](Number.md)
             [Number](Number.md)r</a></span>
             [Number](Number.md)
            </[Number](Number.md)
[Number](Number.md)
#### showPicture (pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) |  |
| `name` | [String](String.md) |  |
| `origin` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number[Number](Number.md)
| `scaleX` | [Number](Number.md) |  |
| `scaleY` | [Number](Number.md) |  |
| `opacity` | [Number](Number.md) |  |
| `blendMode` | [Number](Number.md) |  |

<dl>
</dl>

#### startFadeIn (duration)

##### Parameter[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### startFadeOut (duration)

##### Parame[Array](Array.md)[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### startFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).<[Number](Number.md)> |  |
| `duration` | [Number](Number.md) |  |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>[Number](Number.md)

#### startFlashForDamage ()

<dl>
</dl>

#### startShake (power, speed, duration)

##### Parameters:

| Name | Ty[Array](Array.md)[Number](Number.md)
| --- | --- | -[Number](Number.md)
| `power` | [Number](Number.md) |  |
| `speed` | [Number](Number.md) |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### startTint (tone, duration)

##### Parameters:
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- [Number](Number.md)
| `tone` | [Arr[Number](Number.md)ber](Number.md)> |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### startZoom (x, y, scale, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --[Number](Number.md)
| `x` | [Nu[Array](Array.md)| [Number](Number.md)
| `y` | [Number[Number](Number.md)
| `scale` | [Number](Number.md) |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>[Array](Array.md)[Number](Number.md)

#### tintPicture (pictureId, tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) |  |
| `tone` | [Array](Array.md).<[Number](Number.md)> |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### tone () → {[Array](Array.md).<[Number](Number.md)>}

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


Updates the game screen.
<dl>
</dl>

#### updateFadeIn ()


Updates the screen fade in.
<dl>
</dl>

#### updateFadeOut ()


Updates the screen fade out.
<dl>
</dl>

#### updateFlash ()


Update the screen flash.
<dl>
</dl>

#### updatePictures ()


Update the screen pictures.
<dl>
</dl>

#### updateShake ()


Update the screen shake.
<dl>[Number](Number.md)
</dl>

#### updateTone ()


Updates the screen tone.
<dl>
</dl>

#### updateWeather ()


Update the screen weather.
<dl>
</dl>[String](String.md)

#### updateZoom ()


Update the screen zoom.
<dl>
</dl>

#### weatherPower () → {[Number](Number.md)}


Returns the weather power.
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### weatherType () → {[String](String.md)}


Returns the current weather type.
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### zoomScale () → {[Number](Number.md)}


Returns the zoom scale of the screen.
<dl>[Number](Number.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### zoomX () → {[Number](Number.md)}


Returns the zoom x coordinate of the screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### zoomY () → {[Number](Number.md)}


Returns the zoom y coordiante of the screen.
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
