# Class: PIXI.Graphics

## Extends: [PIXI.Container](PIXI.Container.md)

### new PIXI.Graphics (geometry)

線や丸などを使って画像を描くためのクラス。<br />
多くのメソッドが自分自身である PIXI.Graphics を返してくるのは、メソッドを連続で書くメソッドチェーンを使えるようにするため。

詳細は本家 PIXI のサイト [PIXI.Graphics](http://pixijs.download/release/docs/PIXI.Graphics.html) を参照。<br />
なお、JavaScript の canvas クラスと共通する部分が多いので、そちらを調べても良い。

#### Parameters:

| Name        | Type                                                                                    | Description     |
| ----------- | --------------------------------------------------------------------------------------- | --------------- |
| `geometry ` | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html) | opt. ジオメトリ |

### Sub Classes

- [PIXI.tilemap.GraphicsLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/GraphicsLayer.ts)

### Properties:

| Name           | Type                                                                                                      | Description                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `batches`      | [Array](Array.md).&lt;Object&gt;                                                                          | バッチ                                                                                                        |
| `batchTint`    | [Number](Number.md)                                                                                       | (規定値: -1)                                                                                                  |
| `blendMode`    | [Number](Number.md)                                                                                       | ブレンドモード(規定値: [PIXI.BLEND_MODES](http://pixijs.download/release/docs/PIXI.html#.BLEND_MODES).NORMAL) |
| `currentPath`  | [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html)                                     | 現在のパス                                                                                                    |
| `fill`         | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html)                                 | [read-only] 塗りの形式                                                                                        |
| `geometry`     | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html)                   | ジオメトリ                                                                                                    |
| `line`         | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html)                                 | [read-only] 線の形式                                                                                          |
| `pluginName`   | [String](String.md)                                                                                       | 規定値: 'batch'                                                                                               |
| `shader`       | [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html)                                       | シェーダー                                                                                                    |
| `state`        | [PIXI.State](http://pixijs.download/release/docs/PIXI.State.html)                                         | 状態                                                                                                          |
| `tint`         | [Number](Number.md)                                                                                       | 枠線の色(規定値: 0xFFFFFF)                                                                                    |
| `vertexData`   | Float32Array                                                                                              | 頂点データ                                                                                                    |
| `graphicsData` | [Array](Array.md).&lt;[PIXI.GraphicsData](http://pixijs.download/release/docs/PIXI.GraphicsData.html)&gt; | 画像データ                                                                                                    |
| `_fillStyle`   | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html)                                 | 塗りの形式                                                                                                    |
| `_holeMode`    | Boolean                                                                                                   | 穴あけモードか(規定値: false)                                                                                 |
| `_lineStyle`   | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html)                                 | 線の形式                                                                                                      |
| `_matrix`      | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)                                       | 変形行列                                                                                                      |

### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

- [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
- [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
- [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
- [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
- [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
- [getLocalBounds (rect)](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)
- [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
- [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
- [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
- [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

- [\_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
- [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
- [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
- [calculateBounds ()](PIXI.Container.md#calculatebounds-)
- [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
- [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
- [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
- [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
- [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
- [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
- [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
- [render (renderer)](PIXI.Container.md#render-renderer)
- [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
- [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
- [sortChildren ()](PIXI.Container.md#sortchildren-)
- [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
- [updateTransform ()](PIXI.Container.md#updatetransform-)

### Methods

#### \_calculateBounds ()

Overrides:[PIXI.Container.md](PIXI.Container.md#_calculatebounds-)

#### \_initCurve (x, y)

曲線の初期化。

##### Parameters:

| Name | Type                | Default | Description           |
| ---- | ------------------- | ------- | --------------------- |
| `x`  | [Number](Number.md) | 0       | opt. x 座標(ピクセル) |
| `y`  | [Number](Number.md) | 0       | opt. y 座標(ピクセル) |

#### \_render (renderer)

Overrides:[\_render (renderer)](PIXI.Container.md#_render-renderer)

#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise) → {PIXI.Graphics}

円弧を描き、自分自身を返す。

##### Parameters:

| Name            | Type                | Default | Description           |
| --------------- | ------------------- | ------- | --------------------- |
| `cx`            | [Number](Number.md) |         | 中心 x 座標(ピクセル) |
| `cy`            | [Number](Number.md) |         | 中心 y 座標(ピクセル) |
| `radius`        | [Number](Number.md) |         | 半径(ピクセル)        |
| `startAngle`    | [Number](Number.md) |         | 開始角度              |
| `endAngle`      | [Number](Number.md) |         | 終点角度              |
| `anticlockwise` | [Number](Number.md) | false   | opt. 反時計回りか     |

#### arcTo (x1, y1, x2, y2, radius) → {PIXI.Graphics}

角丸を描き、自身を返す。<br />
直前のポイント - 中間点、中間点 - 到達点 と直線を引き、両直線に接するように radius 半径の円弧を描く、という手順で角丸を描く。

##### Parameters:

| Name     | Type                | Description               |
| -------- | ------------------- | ------------------------- |
| `x1`     | [Number](Number.md) | 中間点の x 座標(ピクセル) |
| `y1`     | [Number](Number.md) | 中間点の y 座標(ピクセル) |
| `x2`     | [Number](Number.md) | 到達点の x 座標(ピクセル) |
| `y2`     | [Number](Number.md) | 到達点の y 座標(ピクセル) |
| `radius` | [Number](Number.md) | 角丸の半径(ピクセル)      |

#### beginFill (color, alpha) → {PIXI.Graphics}

塗り潰しを開始し、自身を返す。

##### Parameters:

| Name    | Type                | Default | Description |
| ------- | ------------------- | ------- | ----------- |
| `color` | [Number](Number.md) | 0       | opt.        |
| `alpha` | [Number](Number.md) | 1       | opt.        |

#### beginHole () → {PIXI.Graphics}

最後に描いたシェイプの内側に穴を開け始め、自身を返す。

#### beginTextureFill (color, alpha) → {PIXI.Graphics}

テクスチャの塗り潰しを開始し、自身を返す。<br />
第 1 引数の color は代わりに texture も使える。<br />
第 2 引数の alpha は数値でも PIXI.Matrix でも指定可能。

##### Parameters:

| Name      | Type                                                                  | Default            | Description             |
| --------- | --------------------------------------------------------------------- | ------------------ | ----------------------- |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) | PIXI.Texture.WHITE | opt. 塗り潰しテクスチャ |
| `color`   | [Number](Number.md)                                                   | 0xffffff           | opt. 塗り潰し色         |
| `alpha`   | [Number](Number.md)                                                   | 1                  | opt. 不透明度           |
| `alpha`   | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)   | null               | opt. 不透明度           |

#### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY) → {PIXI.Graphics}

3 次ベジェ曲線を引き、自身を返す。

##### Parameters:

| Name   | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| `cpX`  | [Number](Number.md) | 制御点 1 の x 座標(ピクセル) |
| `cpY`  | [Number](Number.md) | 制御点 1 の y 座標(ピクセル) |
| `cpX2` | [Number](Number.md) | 制御点 2 の x 座標(ピクセル) |
| `cpY2` | [Number](Number.md) | 制御点 2 の y 座標(ピクセル) |
| `toX`  | [Number](Number.md) | 到達点の x 座標(ピクセル)    |
| `toY`  | [Number](Number.md) | 到達点の y 座標(ピクセル)    |

#### calculateTints ()

枠線を計算。

#### calculateVertices ()

頂点を計算。

#### clear () → {PIXI.Graphics}

画像を消去して、自身を返す。

#### clone () → {PIXI.Graphics}

複製を作って返す。

#### closePath () → {PIXI.Graphics}

パスを閉じて、自身を返す。

#### containsPoint (point) → {Boolean}

指定座標が含まれるか。

##### Parameters:

| Name     | Type                                                              | Description |
| -------- | ----------------------------------------------------------------- | ----------- |
| `point ` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) |             |

#### destroy (options)

Overrides:[PIXI.Container](PIXI.Container.md#destroy-options)

##### Parameters:

| Name       | Type              | Description                                   |
| ---------- | ----------------- | --------------------------------------------- |
| `options ` | Object \| Boolean | opt. 以下のオプション全てに同じ値が設定される |

options に Object として指定する内容

| Name          | Type    | Default | Description                                                             |
| ------------- | ------- | ------- | ----------------------------------------------------------------------- |
| `children`    | Boolean | false   | opt. 子も破棄するか                                                     |
| `texture`     | Boolean | false   | opt. children と texture が true だと子のテクスチャを破棄する           |
| `baseTexture` | Boolean | false   | opt. children と baseTexture が true だと子のベーステクスチャを破棄する |

#### drawCircle (x, y, radius) → {PIXI.Graphics}

円を描き、自身を返す。

##### Parameters:

| Name     | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `x`      | [Number](Number.md) | 中心の x 座標(ピクセル) |
| `y`      | [Number](Number.md) | 中心の y 座標(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル)          |

#### drawEllipse (x, y, width, height) → {PIXI.Graphics}

楕円を描き、自身を返す。

##### Parameters:

| Name     | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `x`      | [Number](Number.md) | 中心の x 座標(ピクセル) |
| `y`      | [Number](Number.md) | 中心の y 座標(ピクセル) |
| `width`  | [Number](Number.md) | 幅(ピクセル)            |
| `height` | [Number](Number.md) | 高さ(ピクセル)          |

#### drawPolygon (path) → {PIXI.Graphics}

多角形を描き、自身を返す。

##### Parameters:

| Name    | Type                                                                                                                                                                                                                                            | Description |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `path ` | [Array](Array.md).&lt;[Number](Number.md)&gt; \| [Array](Array.md).&lt;[PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html)&gt; \| [Array](Array.md).&lt;[PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html)&gt; | パス        |

#### drawRect (x, y, width, height) → {PIXI.Graphics}

四角形を描き、自身を返す。

##### Parameters:

| Name     | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `x`      | [Number](Number.md) | 中心の x 座標(ピクセル) |
| `y`      | [Number](Number.md) | 中心の y 座標(ピクセル) |
| `width`  | [Number](Number.md) | 幅(ピクセル)            |
| `height` | [Number](Number.md) | 高さ(ピクセル)          |

#### drawRoundedRect (x, y, width, height, radius) → {PIXI.Graphics}

角丸の四角形を描き、自身を返す。

##### Parameters:

| Name     | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `x`      | [Number](Number.md) | 中心の x 座標(ピクセル) |
| `y`      | [Number](Number.md) | 中心の y 座標(ピクセル) |
| `width`  | [Number](Number.md) | 幅(ピクセル)            |
| `height` | [Number](Number.md) | 高さ(ピクセル)          |
| `radius` | [Number](Number.md) | 半径(ピクセル)          |

#### drawShape (shape) → {PIXI.Graphics}

角丸の四角形を描き、自身を返す。

##### Parameters:

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                                          | Description |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `shape` | [PIXI.Circle](http://pixijs.download/release/docs/PIXI.Circle.html) \| [PIXI.Ellipse](http://pixijs.download/release/docs/PIXI.Ellipse.html) \| [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html) \| [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) \| [PIXI.RoundedRectangle](http://pixijs.download/release/docs/PIXI.RoundedRectangle.html) |             |

#### drawStar (x, y, points, radius, innerRadius, rotation) → {PIXI.Graphics}

星型の図形を描き、自身を返す。

##### Parameters:

| Name          | Type                | Default       | Description               |
| ------------- | ------------------- | ------------- | ------------------------- |
| `x`           | [Number](Number.md) |               | 中心の x 座標(ピクセル)   |
| `y`           | [Number](Number.md) |               | 中心の y 座標(ピクセル)   |
| `points`      | [Number](Number.md) |               | 頂点の数                  |
| `radius`      | [Number](Number.md) |               | 半径(ピクセル)            |
| `innerRadius` | [Number](Number.md) | radius の半分 | opt. 内側の半径(ピクセル) |
| `rotation`    | [Number](Number.md) | 0             | opt. 回転角(ラジアン)     |

#### endFill () → {PIXI.Graphics}

塗り潰しを終了し、自身を返す。

#### endHole () → {PIXI.Graphics}

穴あけを終了し、自身を返す。

#### finishPoly () → {PIXI.Graphics}

多角形を終了し、自身を返す。

#### generateCanvasTexture (scaleMode, resolution) → {PIXI.Texture}

指定の設定でテクスチャ([PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html))を生成して返す。

##### Parameters:

| Name         | Type                | Description                                                                    |
| ------------ | ------------------- | ------------------------------------------------------------------------------ |
| `scaleMode`  | [Number](Number.md) | [PIXI.SCALE_MODES](http://pixijs.download/release/docs/PIXI.html#.SCALE_MODES) |
| `resolution` | [Number](Number.md) | 解像度                                                                         |

#### isFastRect () → {Boolean}

最初の角か。

#### lineStyle (width, color, alpha, alignment, native) → {PIXI.Graphics}

指定の値でラインスタイルを設定し、自身を返す。

##### Parameters:

| Name        | Type                | Default | Description       |
| ----------- | ------------------- | ------- | ----------------- |
| `width`     | [Number](Number.md) | 0       | opt. 幅(ピクセル) |
| `color`     | [Number](Number.md) | 0       | opt. 色           |
| `alpha`     | [Number](Number.md) | 1       | opt. 不透明度     |
| `alignment` | [Number](Number.md) | 0.5     | opt.              |
| `native`    | Boolean             | false   | opt.              |

#### lineTextureStyle (width, texture, color, alpha, matrix, alignment, native) → {PIXI.Graphics}

指定の値でラインテクスチャスタイルを設定し、自身を返す。

##### Parameters:

| Name        | Type                                                                  | Default            | Description       |
| ----------- | --------------------------------------------------------------------- | ------------------ | ----------------- |
| `width`     | [Number](Number.md)                                                   | 0                  | opt. 幅(ピクセル) |
| `texture`   | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) | PIXI.Texture.WHITE | opt. テスクチャ   |
| `color`     | [Number](Number.md)                                                   | 0                  | opt. 色           |
| `alpha`     | [Number](Number.md)                                                   | 1                  | opt. 不透明度     |
| `matrix`    | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)   | null               | opt.              |
| `alignment` | [Number](Number.md)                                                   | 0.5                | opt.              |
| `native`    | Boolean                                                               | false              | opt.              |

#### lineTo (x, y) → {PIXI.Graphics}

指定座標まで線を引き、自身を返す。

##### Parameters:

| Name | Type                | Description      |
| ---- | ------------------- | ---------------- |
| `x`  | [Number](Number.md) | x 座標(ピクセル) |
| `y`  | [Number](Number.md) | y 座標(ピクセル) |

#### moveTo (x, y) → {PIXI.Graphics}

指定座標まで描画位置を移動し、自身を返す。

##### Parameters:

| Name | Type                | Description      |
| ---- | ------------------- | ---------------- |
| `x`  | [Number](Number.md) | x 座標(ピクセル) |
| `y`  | [Number](Number.md) | y 座標(ピクセル) |

#### quadraticCurveTo (cpX, cpY, toX, toY) → {PIXI.Graphics}

2 次ベジェ曲線を引き、自身を返す。

##### Parameters:

| Name  | Type                | Description                           |
| ----- | ------------------- | ------------------------------------- |
| `cpX` | [Number](Number.md) | コントロールポイント x 座標(ピクセル) |
| `cpY` | [Number](Number.md) | コントロールポイント y 座標(ピクセル) |
| `toX` | [Number](Number.md) | x 座標(ピクセル)                      |
| `toY` | [Number](Number.md) | y 座標(ピクセル)                      |

#### setMatrix (matrix) → {PIXI.Graphics}

マトリクスを設定し、自身を返す。

##### Parameters:

| Name     | Type                                                                | Description |
| -------- | ------------------------------------------------------------------- | ----------- |
| `matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | マトリクス  |

#### startPoly ()

多角形の描画を開始。
