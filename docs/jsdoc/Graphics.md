# Class: Graphics

## Graphics ()

#### new Graphics ()

The static class that carries out graphics processing.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `BLEND_ADD` | [Number](Number.html) | [static] The alias of PIXI.blendModes.ADD. |
| `BLEND_NORMAL` | [Number](Number.html) | [static] The alias of PIXI.blendModes.NORMAL. |
| `BLEND_MULTIPLY` | [Number](Number.html) | [static] The alias of PIXI.blendModes.MULTIPLY. |
| `BLEND_SCREEN` | [Number](Number.html) | [static] The alias of PIXI.blendModes.SCREEN. |
| `frameCount` | [Number](Number.html) | [static] The total frame count of the game screen. |
| `width` | [Number](Number.html) | [static] The width of the game screen. |
| `height` | [Number](Number.html) | [static] The height of the game screen. |
| `boxWidth` | [Number](Number.html) | [static] The width of the window display area. |
| `boxHeight` | [Number](Number.html) | [static] The height of the window display area. |
| `scale` | [Number](Number.html) | [static] The zoom scale of the game screen. |
| `_width` | [Number](Number.html) | [static] |
| `_height` | [Number](Number.html) | [static] |
| `_rendererType` | [String](String.html) | [static] |
| `_boxWidth` | [Number](Number.html) | [static] |
| `_boxHeight` | [Number](Number.html) | [static] |
| `_scale` | [Number](Number.html) | [static] |
| `_realScale` | [Number](Number.html) | [static] |
| `_errorPrinter` | Boolean | [static] |
| `_canvas` | HTMLCanvasElement | [static] |
| `_video` | HTMLVideoElement | [static] |
| `_upperCanvas` | HTMLCanvasElement | [static] |
| `_renderer` | PIXI.SystemRenderer | [static] |
| `_fpsMeter` | FPSMeter | [static] |
| `_modeBox` | HTMLDivElement | [static] |
| `_skipCount` | [Number](Number.html) | [static] |
| `_maxSkip` | [Number](Number.html) | [static] |
| `_rendered` | Boolean | [static] |
| `_loadingImage` | HTMLImageElement | [static] |
| `_loadingCount` | [Number](Number.html) | [static] |
| `_fpsMeterToggled` | Boolean | [static] |
| `_stretchEnabled` | Boolean | [static] |
| `_canUseDifferenceBlend` | Boolean | [static] |
| `_canUseSaturationBlend` | Boolean | [static] |
| `_hiddenCanvas` | [Number](Number.html) | [static] |

<dl>
</dl>

### Methods

#### (static) _applyCanvasFilter ()

<dl>
</dl>

#### (static) _cancelFullScreen ()

<dl>
</dl>

#### (static) _centerElement (element)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `element` | HTMLElement |  |

<dl>
</dl>

#### (static) _clearUpperCanvas ()

<dl>
</dl>

#### (static) _createAllElements ()

<dl>
</dl>

#### (static) _createCanvas ()

<dl>
</dl>

#### (static) _createErrorPrinter ()

<dl>
</dl>

#### (static) _createFontLoader (name)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) |  |

<dl>
</dl>

#### (static) _createFPSMeter ()

<dl>
</dl>

#### (static) _createGameFontLoader ()

<dl>
</dl>

#### (static) _createModeBox ()

<dl>
</dl>

#### (static) _createRenderer ()

<dl>
</dl>

#### (static) _createUpperCanvas ()

<dl>
</dl>

#### (static) _createVideo ()

<dl>
</dl>

#### (static) _defaultStretchMode ()

<dl>
</dl>

#### (static) _disableContextMenu ()

<dl>
</dl>

#### (static) _disableTextSelection ()

<dl>
</dl>

#### (static) _isFullScreen () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _isVideoVisible () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _makeErrorHtml (name, message) → {[String](String.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) |  |
| `message` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) _modifyExistingElements ()

<dl>
</dl>

#### (static) _onKeyDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) _onTouchEnd (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onVideoEnd ()

<dl>
</dl>

#### (static) _onVideoError ()

<dl>
</dl>

#### (static) _onVideoLoad ()

<dl>
</dl>

#### (static) _onWindowResize ()

<dl>
</dl>

#### (static) _paintUpperCanvas ()

<dl>
</dl>

#### (static) _playVideo (src)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.html) |  |

<dl>
</dl>

#### (static) _requestFullScreen ()

<dl>
</dl>

#### (static) _setupEventHandlers ()

<dl>
</dl>

#### (static) _switchFPSMeter ()

<dl>
</dl>

#### (static) _switchFullScreen ()

<dl>
</dl>

#### (static) _switchStretchMode () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _testCanvasBlendModes ()

<dl>
</dl>

#### (static) _updateAllElements ()

<dl>
</dl>

#### (static) _updateCanvas ()

<dl>
</dl>

#### (static) _updateErrorPrinter ()

<dl>
</dl>

#### (static) _updateRealScale ()

<dl>
</dl>

#### (static) _updateRenderer ()

<dl>
</dl>

#### (static) _updateUpperCanvas ()

<dl>
</dl>

#### (static) _updateVideo ()

<dl>
</dl>

#### (static) _updateVisibility (videoVisible)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `videoVisible` | Boolean |  |

<dl>
</dl>

#### (static) callGC ()

Calls pixi.js garbage collector
<dl>
</dl>

#### (static) canPlayVideoType (type) → {Boolean}

Checks whether the browser can play the specified video type.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [String](String.html) | The video type to test support for |

<dl>
</dl>

##### Returns:

True if the browser can play the specified video type
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseCssFontLoading ()

<dl>
</dl>

#### (static) canUseDifferenceBlend () → {Boolean}

Checks whether the canvas blend mode 'difference' is supported.
<dl>
</dl>

##### Returns:

True if the canvas blend mode 'difference' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseSaturationBlend () → {Boolean}

Checks whether the canvas blend mode 'saturation' is supported.
<dl>
</dl>

##### Returns:

True if the canvas blend mode 'saturation' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) endLoading ()

Erases the "Now Loading" image.
<dl>
</dl>

#### (static) eraseLoadingError ()

Erases the loading error text.
<dl>
</dl>

#### (static) hasWebGL () → {Boolean}

Checks whether the current browser supports WebGL.
<dl>
</dl>

##### Returns:

True if the current browser supports WebGL.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) hideFps ()

Hides the FPSMeter element.
<dl>
</dl>

#### (static) initialize (width, height, type)

Initializes the graphics system.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the game screen |
| `height` | [Number](Number.html) | The height of the game screen |
| `type` | [String](String.html) | The type of the renderer. 'canvas', 'webgl', or 'auto'. |

<dl>
</dl>

#### (static) isFontLoaded (name) → {Boolean}

Checks whether the font file is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |

<dl>
</dl>

##### Returns:

True if the font file is loaded
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isInsideCanvas (x, y) → {Boolean}

Checks whether the specified point is inside the game canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the canvas area |
| `y` | [Number](Number.html) | The y coordinate on the canvas area |

<dl>
</dl>

##### Returns:

True if the specified point is inside the game canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isVideoPlaying () → {Boolean}

Checks whether the video is playing.
<dl>
</dl>

##### Returns:

True if the video is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWebGL () → {Boolean}

Checks whether the renderer type is WebGL.
<dl>
</dl>

##### Returns:

True if the renderer type is WebGL
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadFont (name, url)

Loads a font file.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |
| `url` | [String](String.html) | The url of the font file |

<dl>
</dl>

#### (static) pageToCanvasX (x) → {[Number](Number.html)}

Converts an x coordinate on the page to the corresponding x coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the page to be converted |

<dl>
</dl>

##### Returns:

The x coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) pageToCanvasY (y) → {[Number](Number.html)}

Converts a y coordinate on the page to the corresponding y coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) | The y coordinate on the page to be converted |

<dl>
</dl>

##### Returns:

The y coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) playVideo (src)

Starts playback of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.html) |  |

<dl>
</dl>

#### (static) printError (name, message)

Displays the error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The name of the error |
| `message` | [String](String.html) | The message of the error |

<dl>
</dl>

#### (static) printLoadingError (url)

Displays the loading error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The url of the resource failed to load |

<dl>
</dl>

#### (static) render (stage)

Renders the stage to the game screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object to be rendered |

<dl>
</dl>

#### (static) setLoadingImage ()

Sets the source of the "Now Loading" image.
<dl>
</dl>

#### (static) setVideoVolume (value)

Sets volume of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) showFps ()

Shows the FPSMeter element.
<dl>
</dl>

#### (static) startLoading ()

Initializes the counter for displaying the "Now Loading" image.
<dl>
</dl>

#### (static) tickEnd ()

Marks the end of each frame for FPSMeter.
<dl>
</dl>

#### (static) tickStart ()

Marks the beginning of each frame for FPSMeter.
<dl>
</dl>

#### (static) updateLoading ()

Increments the loading counter and displays the "Now Loading" image if necessary.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
