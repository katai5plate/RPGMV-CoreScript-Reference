# Class: Game_Screen

## Game_Screen ()

#### new Game_Screen ()

The game object class for screen effect data, such as changes in color tone and flashes. Use as global variable [$gameScreen](global.html#$gameScreen)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_shake` | [Number](Number.html) |  |
| `_shakePower` | [Number](Number.html) |  |
| `_shakeSpeed` | [Number](Number.html) |  |
| `_shakeDuration` | [Number](Number.html) |  |
| `_shakeDirection` | [Number](Number.html) |  |
| `_zoomX` | [Number](Number.html) |  _zoomX property of the game screen. |
| `_zoomY` | [Number](Number.html) |  _zoomY property of the game screen. |
| `_zoomScale` | [Number](Number.html) |  |
| `_zoomScaleTarget` | [Number](Number.html) |  |
| `_zoomDuration` | [Number](Number.html) |  |
| `_weatherType` | [String](String.html) |  |
| `_weatherPower` | [Number](Number.html) |  |
| `_weatherPowerTarget` | [Number](Number.html) |  |
| `_weatherDuration` | [Number](Number.html) |  |
| `_brightness` | [Number](Number.html) | The _brightness property of the game screen; returned when calling the brightness method. |
| `_fadeOutDuration` | [Number](Number.html) |  |
| `_fadeInDuration` | [Number](Number.html) |  |
| `_tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneTarget` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneDuration` | [Number](Number.html) |  |
| `_flashColor` | [Array](Array.html).<[Number](Number.html)> |  |
| `_flashDuration` | [Number](Number.html) |  |
| `_pictures` | [Array](Array.html).<[Game_Picture](Game_Picture.html)> | The array of Game_Pictures that are attached to the game screen. |

<dl>
</dl>

### Methods

#### brightness () → {[Number](Number.html)}

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
| --- | --- | --- |
| `type` | [String](String.html) |  |
| `power` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

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

#### erasePicture (pictureId)

Erases a picture from the screen given the respected picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

#### flashColor () → {[Array](Array.html).<[Number](Number.html)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### maxPictures () → {[Number](Number.html)}

Returns the maximum number of pictures set on the game screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### movePicture (pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
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

#### onBattleStart ()

Handler for when the battle starts in game; prepares the screen for the battle scene.
<dl>
</dl>

#### picture (pictureId) → {[Game_Picture](Game_Picture.html)}

Returns the specified picture given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Picture</a></span>
                </dd>
            </dl>

#### realPictureId (pictureId) → {[Number](Number.html)}

Returns the real picture id, given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### rotatePicture (pictureId, speed)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `speed` | [Number](Number.html) |  |

<dl>
</dl>

#### setZoom (x, y, scale)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scale` | [Number](Number.html) |  |

<dl>
</dl>

#### shake () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### showPicture (pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
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

#### startFadeIn (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startFadeOut (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startFlashForDamage ()

<dl>
</dl>

#### startShake (power, speed, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `power` | [Number](Number.html) |  |
| `speed` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startTint (tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startZoom (x, y, scale, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scale` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### tintPicture (pictureId, tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### tone () → {[Array](Array.html).<[Number](Number.html)>}

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
<dl>
</dl>

#### updateTone ()

Updates the screen tone.
<dl>
</dl>

#### updateWeather ()

Update the screen weather.
<dl>
</dl>

#### updateZoom ()

Update the screen zoom.
<dl>
</dl>

#### weatherPower () → {[Number](Number.html)}

Returns the weather power.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### weatherType () → {[String](String.html)}

Returns the current weather type.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### zoomScale () → {[Number](Number.html)}

Returns the zoom scale of the screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### zoomX () → {[Number](Number.html)}

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

#### zoomY () → {[Number](Number.html)}

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
