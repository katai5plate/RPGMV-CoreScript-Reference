# Class: Bitmap

## Bitmap (width, height)

#### new Bitmap (width, height)

The basic object that represents an image. Bitmap states(Bitmap._loadingState): none: Empty Bitmap pending: Url requested, but pending to load until startRequest called purged: Url request completed and purged. requesting: Requesting supplied URI now. requestCompleted: Request completed decrypting: requesting encrypted data from supplied URI or decrypting it. decryptCompleted: Decrypt completed loaded: loaded. isReady() === true, so It's usable. error: error occurred

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the bitmap |
| `height` | [Number](Number.html) | The height of the bitmap |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cacheEntry` | [CacheEntry](CacheEntry.html) | Cache entry, for images. In all cases _url is the same as cacheEntry.key |
| `fontFaceThe` | [String](String.html) | face name of the font. |
| `fontSize` | [Number](Number.html) | The size of the font in pixels. |
| `fontItalic` | Boolean | Whether the font is italic. |
| `textColor` | [String](String.html) | The color of the text in CSS format. |
| `outlineColor` | [String](String.html) | The color of the outline of the text in CSS format. |
| `outlineWidth` | [Number](Number.html) | The width of the outline of the text. |
| `url` | [String](String.html) | [read-only] The url of the image file. |
| `baseTexture` | PIXI.BaseTexture | [read-only] The base texture that holds the image. |
| `canvas` | HTMLCanvasElement | [read-only] The bitmap canvas. |
| `context` | CanvasRenderingContext2D | [read-only] The 2d context of the bitmap canvas. |
| `width` | [Number](Number.html) | [read-only] The width of the bitmap. |
| `height` | [Number](Number.html) | [read-only] The height of the bitmap. |
| `rect` | [Rectangle](Rectangle.html) | [read-only] The rectangle of the bitmap. |
| `smooth` | Boolean | Whether the smooth scaling is applied. |
| `paintOpacity` | [Number](Number.html) | The opacity of the drawing object in the range (0, 255). |

<dl>
</dl>

### Methods

#### (static) _callLoadListeners ()

<dl>
</dl>

#### (static) _drawTextBody (text, tx, ty, maxWidth)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `tx` | [Number](Number.html) |  |
| `ty` | [Number](Number.html) |  |
| `maxWidth` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawTextOutline (text, tx, ty, maxWidth)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `tx` | [Number](Number.html) |  |
| `ty` | [Number](Number.html) |  |
| `maxWidth` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _makeFontNameText ()

<dl>
</dl>

#### (static) _onError ()

<dl>
</dl>

#### (static) _onLoad ()

<dl>
</dl>

#### (static) _setDirty ()

<dl>
</dl>

#### (static) _setupCssFontLoading ()

<dl>
</dl>

#### (static) load (url) → {[Bitmap](Bitmap.html)}

Loads a image file and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The image url of the texture |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) snap (stage) → {[Bitmap](Bitmap.html)}

Takes a snapshot of the game screen and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### addLoadListener (listner)

Add a callback function that will be called when the bitmap is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
</dl>

#### adjustTone (r, g, b)

Changes the color tone of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.html) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue strength in the range (-255, 255) |

<dl>
</dl>

#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
</dl>

#### bltImage (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer, using assumption that original image was not modified (no hue)

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
</dl>

#### blur ()

Applies a blur effect to the bitmap.
<dl>
</dl>

#### checkDirty ()

updates texture is bitmap was dirty
<dl>
</dl>

#### clear ()

Clears the entire bitmap.
<dl>
</dl>

#### clearRect (x, y, width, height)

Clears the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to clear |
| `height` | [Number](Number.html) | The height of the rectangle to clear |

<dl>
</dl>

#### decode ()

<dl>
</dl>

#### drawCircle (x, y, radius, color)

Draw a bitmap in the shape of a circle

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate based on the circle center |
| `y` | [Number](Number.html) | The y coordinate based on the circle center |
| `radius` | [Number](Number.html) | The radius of the circle |
| `color` | [String](String.html) | The color of the circle in CSS format |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, lineHeight, align)

Draws the outline text to the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text that will be drawn |
| `x` | [Number](Number.html) | The x coordinate for the left of the text |
| `y` | [Number](Number.html) | The y coordinate for the top of the text |
| `maxWidth` | [Number](Number.html) | The maximum allowed width of the text |
| `lineHeight` | [Number](Number.html) | The height of the text line |
| `align` | [String](String.html) | The alignment of the text |

<dl>
</dl>

#### fillAll (color)

Fills the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
</dl>

#### fillRect (x, y, width, height, color)

Fills the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
</dl>

#### getAlphaPixel (x, y) → {[String](String.html)}

Returns alpha pixel value at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
</dl>

##### Returns:

The alpha value
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### getPixel (x, y) → {[String](String.html)}

Returns pixel color at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
</dl>

##### Returns:

The pixel color (hex format)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### gradientFillRect (x, y, width, height, color1, color2, vertical)

Draws the rectangle with a gradation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color1` | [String](String.html) | The gradient starting color |
| `color2` | [String](String.html) | The gradient ending color |
| `vertical` | Boolean | Wether the gradient should be draw as vertical or not |

<dl>
</dl>

#### initialize (width, height)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |

<dl>
</dl>

#### isError () → {Boolean}

Checks whether a loading error has occurred.
<dl>
</dl>

##### Returns:

True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

Checks whether the bitmap is ready to render.
<dl>
</dl>

##### Returns:

True if the bitmap is ready to render
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRequestOnly () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRequestReady () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### measureTextWidth (text) → {[Number](Number.html)}

Returns the width of the specified text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text to be measured |

<dl>
</dl>

##### Returns:

The width of the text in pixels
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### request (url) → {[Bitmap](Bitmap.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### resize (width, height)

Resizes the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The new width of the bitmap |
| `height` | [Number](Number.html) | The new height of the bitmap |

<dl>
</dl>

#### rotateHue (offset)

Rotates the hue of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `offset` | [Number](Number.html) | The hue offset in 360 degrees |

<dl>
</dl>

#### startRequest ()

<dl>
</dl>

#### touch ()

touch the resource
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
