# Class: Bitmap

## Bitmap (width, height)

#### new Bitmap (width, height)

画像を表す基本オブジェクト。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) | 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 画像の高さ(ピクセル) |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cacheEntry` | [CacheEntry](CacheEntry.md) | Cache entry, for images. In all cases _url is the same as cacheEntry.key |
| `fontFace` | [String](String.md) | フォント名 |
| `fontSize` | [Number](Number.md) | フォントサイズ(ピクセル) |
| `fontItalic` | Boolean | イタリックか |
| `textColor` | [String](String.md) | 文字色(CSS形式) |
| `outlineColor` | [String](String.md) | アウトラインの色(CSS形式) |
| `outlineWidth` | [Number](Number.md) | アウトラインの文字幅 |
| `url` | [String](String.md) | [read-only] 画像ファイルのurl |
| `baseTexture` | PIXI.BaseTexture | [read-only] The base texture that holds the image. |
| `canvas` | HTMLCanvasElement | [read-only] 画像を描画するcanvas |
| `context` | CanvasRenderingContext2D | [read-only] 2Dレンダリングコンテクスト |
| `width` | [Number](Number.md) | [read-only] 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | [read-only] 画像の高さ(ピクセル) |
| `rect` | [Rectangle](Rectangle.md) | [read-only] 画像の矩形範囲 |
| `smooth` | Boolean | スムーススケーリングを適用するか |
| `paintOpacity` | [Number](Number.md) | 不透明度(0 〜 255) |
| `_loadingState` | [String](String.md) | 読み込みの状態<br/>none: Empty Bitmap<br/>pending: Url requested, but pending to load until startRequest called<br/>purged: Url request completed and purged.<br/>requesting: Requesting supplied URI now.<br/>requestCompleted: Request completed<br/>decrypting: requesting encrypted data from supplied URI or decrypting it.<br/>decryptCompleted: Decrypt completed<br/>loaded: loaded. isReady() === true, so It's usable.<br/>error: error occurred |

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
| `text` | [String](String.md) |  |
| `tx` | [Number](Number.md) |  |
| `ty` | [Number](Number.md) |  |
| `maxWidth` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _drawTextOutline (text, tx, ty, maxWidth)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) |  |
| `tx` | [Number](Number.md) |  |
| `ty` | [Number](Number.md) |  |
| `maxWidth` | [Number](Number.md) |  |

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

#### (static) load (url) → {[Bitmap](Bitmap.md)}

画像ファイルを読み込んで、Bitmapオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | 画像ファイルのURL |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Bitmap</a></span>
    </dd>
</dl>

#### (static) snap (stage) → {[Bitmap](Bitmap.md)}

指定したStageのゲーム画面のスナップショットを持ったBitmapオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.md) | Stageオブジェクト |

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

画像がロードされたときに呼ばれるリスナ関数を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | Function | コールバック関数 |

<dl>
</dl>

#### adjustTone (r, g, b)

指定したRPGに画像のトーンを変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (-255 〜 255) |
| `g` | [Number](Number.md) | 緑 (-255　〜 255) |
| `b` | [Number](Number.md) | 青 (-255 〜 255) |

<dl>
</dl>

#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

指定先画像から画像ブロックを転送。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | \<optional> | sw | 転送先の画像幅(ピクセル) |
| `dh` | [Number](Number.md) | \<optional> | sh | 転送先の画像高さ(ピクセル) |

<dl>
</dl>

#### bltImage (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

指定先画像から画像ブロックを転送。ただし、canvasには描画しない。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | \<optional> | sw | 転送先の画像幅(ピクセル) |
| `dh` | [Number](Number.md) | \<optional> | sh | 転送先の画像高さ(ピクセル) |

<dl>
</dl>

#### blur ()

ぼかしエフェクトを適用。

<dl>
</dl>

#### checkDirty ()

updates texture is bitmap was dirty
<dl>
</dl>

#### clear ()

画像を削除。
<dl>
</dl>

#### clearRect (x, y, width, height)
指定した矩形範囲を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左x座標(ピクセル) |
| `y` | [Number](Number.md) | 矩形上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |

<dl>
</dl>

#### decode ()

<dl>
</dl>

#### drawCircle (x, y, radius, color)
円を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心y座標(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル) |
| `color` | [String](String.md) | 色(CSS形式) |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, lineHeight, align)

文字を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 描く文字 |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大許容幅(ピクセル) |
| `lineHeight` | [Number](Number.md) | 行高さ(ピクセル) |
| `align` | [String](String.md) | 文字揃え(left\|center\|right) |

<dl>
</dl>

#### fillAll (color)


Fills the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.md) | The color of the rectangle in CSS format |

<dl>
</dl>

#### fillRect (x, y, width, height, color)


Fills the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.md) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.md) | The width of the rectangle to fill |
| `height` | [Number](Number.md) | The height of the rectangle to fill |
| `color` | [String](String.md) | The color of the rectangle in CSS format |

<dl>
</dl>

#### getAlphaPixel (x, y) → {[String](String.md)}


Returns alpha pixel value at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.md) | The y coordinate of the pixel in the bitmap |

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

#### getPixel (x, y) → {[String](String.md)}


Returns pixel color at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.md) | The y coordinate of the pixel in the bitmap |

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
| `x` | [Number](Number.md) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.md) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.md) | The width of the rectangle to fill |
| `height` | [Number](Number.md) | The height of the rectangle to fill |
| `color1` | [String](String.md) | The gradient starting color |
| `color2` | [String](String.md) | The gradient ending color |
| `vertical` | Boolean | Wether the gradient should be draw as vertical or not |

<dl>
</dl>

#### initialize (width, height)


 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |

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

#### measureTextWidth (text) → {[Number](Number.md)}


Returns the width of the specified text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | The text to be measured |

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

#### request (url) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |

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
| `width` | [Number](Number.md) | The new width of the bitmap |
| `height` | [Number](Number.md) | The new height of the bitmap |

<dl>
</dl>

#### rotateHue (offset)


Rotates the hue of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `offset` | [Number](Number.md) | The hue offset in 360 degrees |

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
