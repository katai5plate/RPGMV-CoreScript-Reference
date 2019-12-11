# Class: PIXI.Sprite

## Extends: [PIXI.Container](PIXI.Container.md)

### new PIXI.Sprite (texture)
描画のための基本オブジェクト。詳細は本家 PIXI のサイト [PIXI.Sprite](http://pixijs.download/release/docs/PIXI.Sprite.html) を参照。

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) |  スプライトに設定する画像 |


### Sub Classes

* [Sprite](Sprite.md) 


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_cachedTint` | [Number](Number.md) |  |
| `_tintedCanvas` | HTMLCanvasElement |  |
| `anchor` | [PIXI.ObservablePoint](http://pixijs.download/release/docs/PIXI.ObservablePoint.html) | テキスト座標の基点 (ex: 左上{0, 0} / 右下{1, 1} ) |
| `blendMode` | [Number](Number.md) | [合成方法](0: 通常, 1: 加算, 2: 乗算, 3: スクリーン)<br/>See:[PIXI.BLEND_MODES](PIXI.BLEND_MODES) |
| `width` | [Number](Number.md) | 拡大縮小前の画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 拡大縮小前の画像の高さ(ピクセル) |
| `isSprite` | Boolean | スプライトか |
| `pluginName` | [String](String.md) | プラグイン名(Default: 'batch') |
| `roundPixels` | Boolean | ピクセル補完するか |
| `shader` | [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html) \| [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) | [static] |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) | スプライトに設定された画像 |
| `tint` | [Number](Number.md) |  |


### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
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

#### (static) from (source, options) → {PIXI.Sprite}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `source` | [Number](Number.md) \| [String](String.md) \| [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) \| HTMLCanvasElement \| HTMLVideoElement |  |
| `options` | Object | opt. |


#### _calculateBounds ()
Overrides:[PIXI.Container](PIXI.Container.md#_calculatebounds-)
 
 
#### _render (renderer)
Overrides:[PIXI.Container](PIXI.Container.md#_render-renderer)
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |

 
#### calculateTrimmedVertices ()


#### calculateVertices ()


#### containsPoint (point) → {Boolean}


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `point` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) |  |


#### destroy (options)
Overrides:[PIXI.Container](PIXI.Container.md#destroy-options)

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


#### getLocalBounds (rect) → {PIXI.Rectangle}
Overrides:[PIXI.DisplayObject](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `rect` | PIXI.Rectangle | opt. |


#### renderCanvas (renderer)
Overrides:[PIXI.Container](PIXI.Container.md#rendercanvas-renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
