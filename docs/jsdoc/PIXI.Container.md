# Class: PIXI.Container

## PIXI.Container ()

#### new PIXI.Container ()

描画オブジェクトを含むコンテナ。

以下のスーパークラス。

* [PIXI.Sprite](PIXI.Sprite.md) 
* [PIXI.Graphics](PIXI.Graphics.md)
* [PIXI.tilemap.CompositeRectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/CompositeRectTileLayer.ts)
* [PIXI.tilemap.RectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/RectTileLayer.ts)
* [PIXI.tilemap.ZLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/ZLayer.ts)
* [ScreenSprite](ScreenSprite.md)
* [ToneSprite](ToneSprite.md)
* [Weather](Weather.md)
* [WindowLayer](WindowLayer.md)
* [Tilemap](Tilemap.md)
* [Stage](Stage.md)
* [Window](Window.md)

詳細は本家 PIXI のサイト [PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html) を参照。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `children` | [Array](Array.md).&lt;[PIXI.DisplayObject](PIXI.DisplayObject.md)&gt;  | [read-only]子オブジェクト |
| `width` | [Number](Number.md) | 拡大縮小前の画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 拡大縮小前の画像の高さ(ピクセル) |
| `sortableChildren` | Boolean |  子が(zIndexで)ソート可能か |
| `sortDirty` | Boolean |  次回アップデート時ソートされるか |


### Extends

* [PIXI.DisplayObject](PIXI.DisplayObject.md)

### Methods

#### _calculateBounds ()



#### _render (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |


#### _renderCanvas (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |


#### addChild (child) → {PIXI.DisplayObject}
子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 追加するオブジェクト |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>


#### addChildAt (child, index) → {PIXI.DisplayObject}
子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 追加するオブジェクト |
| `index` | [Number](Number.md) | 追加位置 |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>


#### calculateBounds()
矩形範囲の再計算。


#### destroy (options)
破棄する。

##### Overrides:
[PIXI.DisplayObject.destroy()](PIXI.DisplayObject.md#destroy-)

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



#### getChildAt (index) → {PIXI.DisplayObject}
指定番号の子オブジェクトを得る。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>



#### getChildByName (name) → {PIXI.DisplayObject}
指定番号の子オブジェクトを得る。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | 子オブジェクトの名前 |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>


#### getChildIndex (child) → {PIXI.DisplayObject}
子オブジェクトの番号を得る。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html"> Number  </a></span>
    </dd>
</dl>



#### onChildrenChange () 


#### removeChild (child) → {PIXI.DisplayObject}
子オブジェクトを削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>


#### removeChildAt (index) → {PIXI.DisplayObject}
指定番号の子オブジェクトを削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a></span>
    </dd>
</dl>


#### removeChildren (beginIndex, endIndex) → {Array.&lt;PIXI.DisplayObject&gt;}
指定番号範囲の子オブジェクトを削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `beginIndex ` | [Number](Number.md) | 子オブジェクトの開始番号 |
| `endIndex ` | [Number](Number.md) | 子オブジェクトの終了番号 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;<a href="PIXI.DisplayObject.html"> PIXI.DisplayObject </a>&gt;</span>
    </dd>
</dl>


#### render (renderer)

##### Overrides:
[PIXI.DisplayObject. render()](PIXI.DisplayObject.md#render--renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |


#### renderAdvanced (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |


#### renderCanvas (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.Renderer.html) |  |


#### setChildIndex (child, index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |


#### sortChildren ()
子オブジェクトを zIndex に従ってソート。

#### swapChildren (child, child2)
子オブジェクトの位置(番号)を入れ替える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |
| `child2` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |


#### updateTransform ()

##### Overrides:
[PIXI.DisplayObject. updateTransform()](PIXI.DisplayObject.md#updateTransform-)




 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
