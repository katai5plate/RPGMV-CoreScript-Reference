# Class: PIXI.Graphics

## PIXI.Graphics (geometry)

#### new PIXI.Graphics (geometry)

[PIXI.tilemap.GraphicsLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/GraphicsLayer.ts) のスーパークラス。

線や丸などを使って画像を描くためのクラス。
多くのメソッドが自分自身である PIXI.Graphics を返してくるのは、メソッドを連続で書くメソッドチェーンを使えるようにするため。

詳細は本家 PIXI のサイト [PIXI.Graphics](http://pixijs.download/release/docs/PIXI.Graphics.html) を参照。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `geometry ` | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html) | opt. |


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_fillStyle` | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html) | 塗りの形式 |
| `_holeMode` | Boolean | 規定値: false |
| `_lineStyle` | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html) | 線の形式 |
| `_matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | 変形行列 |
| `batches` | [Array](Array.md).&lt;Object&gt; |  |
| `batchTint` | [Number](Number.md) | 規定値: -1 |
| `blendMode` | [Number](Number.md) | 規定値: [PIXI.BLEND_MODES](http://pixijs.download/release/docs/PIXI.html#.BLEND_MODES).NORMAL |
| `currentPath` | [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html) |  |
| `fill` | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html) | [read-only] 塗りの形式 |
| `geometry` | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html) |  |
| `line` | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html) | [read-only] 線の形式 |
| `pluginName` | [String](String.md) | 規定値: \'batch\' |
| `shader` | [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) | シェーダー |
| `state` | [PIXI.State](http://pixijs.download/release/docs/PIXI.State.html) | 状態 |
| `tint` | [Number](Number.md) | 規定値: 0xFFFFFF |
| `vertexData` | Float32Array | |


### Extends

* [PIXI.Container](PIXI.Container.md) 


### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [getLocalBounds (rect)](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)


#### [PIXI.Container](PIXI.Container.md)

* [\_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)



### Methods

#### _calculateBounds ()

##### Overrides:
 [PIXI.Container.md.\_calculateBounds ()](PIXI.Container.md#_calculatebounds-)
 
 
#### _initCurve (x, y)

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | [Number](Number.md)  | 0 | opt. |
| `y` | [Number](Number.md)  | 0 | opt. |

 
#### _render (renderer)

##### Overrides:

* [PIXI.Container.md.\_render (renderer)](PIXI.Container.md#_render-renderer)
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |

#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cx` | [Number](Number.md)  |  | |
| `cy` | [Number](Number.md)  |  |  |
| `radius` | [Number](Number.md)  |  |  |
| `startAngle` | [Number](Number.md)  |  |  |
| `endAngle` | [Number](Number.md)  |  |  |
| `anticlockwise` | [Number](Number.md)  | false | opt. |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### arcTo (x1, y1, x2, y2, radius) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x1` | [Number](Number.md)  |  | |
| `y1` | [Number](Number.md)  |  |  |
| `x2` | [Number](Number.md)  |  | |
| `y2` | [Number](Number.md)  |  |  |
| `radius` | [Number](Number.md)  |  |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### beginFill (color, alpha) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | [Number](Number.md)  | 0 | opt. |
| `alpha` | [Number](Number.md)  | 1 | opt. |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### beginHole () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>



#### beginTextureFill (color, alpha) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html)   | PIXI.Texture.WHITE | opt. |
| `color` | [Number](Number.md)  | 0xffffff | opt. |
| `alpha` | [Number](Number.md)  | 1 | opt. |
| `alpha` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)  | null | opt. |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cpX` | [Number](Number.md)  |  |
| `cpY` | [Number](Number.md)  |  |
| `cpX2` | [Number](Number.md)  |  |
| `cpY2` | [Number](Number.md)  |  |
| `toX` | [Number](Number.md)  |  |
| `toY` | [Number](Number.md)  |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### calculateTints ()


#### calculateVertices ()


#### clear () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### clone () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### closePath () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### containsPoint (point) →  {Boolean}
指定座標が含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `point ` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> Boolean </span>
    </dd>
</dl>


#### destroy (options)
破棄する。

##### Overrides:
[PIXI.Container.destroy (options)](PIXI.Container.md#destroy-options)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `options ` | Object \| Boolean | opt. 以下のオプション全てに同じ値が設定される |

options に Object として指定する内容

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | Boolean | false | opt. 子も破棄するか|
| `texture` | Boolean | false | opt. children と texture が true だと子のテクスチャを破棄する |
| `baseTexture` | Boolean | false | opt. children と baseTexture が true だと子のベーステクスチャを破棄する |


#### drawCircle (x, y, radius) →  {PIXI.Graphics}
円を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md)  | 中心のy座標(ピクセル) |
| `radius` | [Number](Number.md)  | 半径(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawEllipse (x, y, width, height) →  {PIXI.Graphics}
楕円を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md)  | 中心のy座標(ピクセル) |
| `width` | [Number](Number.md)  | 幅(ピクセル) |
| `height` | [Number](Number.md)  | 高さ(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawPolygon (path) →  {PIXI.Graphics}
多角形を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path ` | [Array](Array.md).&lt;[Number](Number.md)&gt; \| [Array](Array.md).&lt;[PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html)&gt; \| [Array](Array.md).&lt;[PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html)&gt;  | パス |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawRect (x, y, width, height) →  {PIXI.Graphics}
四角形を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md)  | 中心のy座標(ピクセル) |
| `width` | [Number](Number.md)  | 幅(ピクセル) |
| `height` | [Number](Number.md)  | 高さ(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawRoundedRect (x, y, width, height, radius) →  {PIXI.Graphics}
角丸の四角形を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md)  | 中心のy座標(ピクセル) |
| `width` | [Number](Number.md)  | 幅(ピクセル) |
| `height` | [Number](Number.md)  | 高さ(ピクセル) |
| `radius` | [Number](Number.md)  | 半径(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawShape (shape) →  {PIXI.Graphics}
角丸の四角形を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `shape` | [PIXI.Circle](http://pixijs.download/release/docs/PIXI.Circle.html) \| [PIXI.Ellipse](http://pixijs.download/release/docs/PIXI.Ellipse.html) \| [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html) \| [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) \| [PIXI.RoundedRectangle](http://pixijs.download/release/docs/PIXI.RoundedRectangle.html)  | |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### drawStar (x, y, points, radius, innerRadius, rotation) →  {PIXI.Graphics}
星型の図形を描く。

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) |  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md) |  | 中心のy座標(ピクセル) |
| `points` | [Number](Number.md) |  | 頂点の数 |
| `radius` | [Number](Number.md) |  | 半径(ピクセル) |
| `innerRadius` | [Number](Number.md) | radius の半分 | opt. 内側の半径(ピクセル) |
| `rotation` | [Number](Number.md)  | 0 | opt. 回転角(ラジアン) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### endFill () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### endHole () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### finishPoly () →  {PIXI.Graphics}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### generateCanvasTexture (scaleMode, resolution) →  {PIXI.Texture}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `scaleMode` | [Number](Number.md) | |
| `resolution` | [Number](Number.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> <a href="http://pixijs.download/release/docs/PIXI.Texture.html">PIXI.Texture</a> </span>
    </dd>
</dl>


#### isFastRect () →  {Boolean}

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> Boolean </span>
    </dd>
</dl>


#### lineStyle (width, color, alpha, alignment, native) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | [Number](Number.md) | 0 | opt. 幅(ピクセル) |
| `color` | [Number](Number.md) | 0 | opt. 色 |
| `alpha` | [Number](Number.md) | 1 | opt. 不透明度 |
| `alignment` | [Number](Number.md) | 0.5 | opt.  |
| `native` | Boolean | false | opt. |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### lineTextureStyle (width, texture, color, alpha, matrix, alignment, native) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | [Number](Number.md) | 0 | opt. 幅(ピクセル) |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) | PIXI.Texture.WHITE | opt. テスクチャ |
| `color` | [Number](Number.md) | 0 | opt. 色 |
| `alpha` | [Number](Number.md) | 1 | opt. 不透明度 |
| `matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | null | opt.  |
| `alignment` | [Number](Number.md) | 0.5 | opt.  |
| `native` | Boolean | false | opt. |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### lineTo (x, y) →  {PIXI.Graphics}
指定座標まで線を引く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | x座標(ピクセル) |
| `y` | [Number](Number.md)  | y座標(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### moveTo (x, y) →  {PIXI.Graphics}
指定座標まで描画位置を移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md)  | x座標(ピクセル) |
| `y` | [Number](Number.md)  | y座標(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### quadraticCurveTo (cpX, cpY, toX, toY) →  {PIXI.Graphics}
ベジェ曲線を引く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cpX` | [Number](Number.md)  | コントロールポイントx座標(ピクセル) |
| `cpY` | [Number](Number.md)  | コントロールポイントy座標(ピクセル) |
| `toX` | [Number](Number.md)  | x座標(ピクセル) |
| `toY` | [Number](Number.md)  | y座標(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>


#### setMatrix (matrix) →  {PIXI.Graphics}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)   |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span> PIXI.Graphics </span>
    </dd>
</dl>

####  startPoly ()



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
