# Class: Sprite

## Sprite (bitmap)

#### new Sprite (bitmap)

描画のための基本オブジェクト。[Sprite_Animation](Sprite_Animation.md), [Sprite_Button](Sprite_Button.md), [Sprite_Damage](Sprite_Damage.md), [Sprite_Destination](Sprite_Destination.md), [Sprite_Picture](Sprite_Picture.md), [Sprite_StateIcon](Sprite_StateIcon.md), [Sprite_Timer](Sprite_Timer.md) および [Spriteset_Base](Spriteset_Base.md) と [Sprite_Base](Sprite_Base.md) のスーパークラス。

PRGツクールMVでは、[ImageManager](ImageManager.md)で画像ファイルから読み込んだ[Bitmap](Bitmap.md)を、コンストラクタ引数に指定してSpriteを生成し、[Stage](Stage.md)などのコンテナオブジェクトにaddChildする、という手順で画像を表示する。

継承元の [PIXI.Sprite](http://pixijs.download/release/docs/PIXI.Sprite.html) には多くのプロパティ・メソッドが存在するが、ほとんどはここに書いてないので、実際の利用には、ある程度は継承元の使い方も理解しておく必要がある。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_counter` | [Number](Number.md) | [static] スプライトの(生成順)番号 |
| `voidFilter` | [PIXI.filters.VoidFilter](http://pixijs.download/dev/docs/PIXI.filters.VoidFilter.html) | [static] |
| `spriteId` | [Number](Number.md) | スプライトID |
| `opaque` | Boolean | 不[透明状態]か |
| `bitmap` | [Bitmap](Bitmap.md) | スプライトに設定する画像 |
| `width` | [Number](Number.md) | 拡大縮小前の画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 拡大縮小前の画像の高さ(ピクセル) |
| `opacity` | [Number](Number.md) | 不透明度 (0 〜 255) |
| `visible` | Boolean |  表示中か |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `z` | [Number](Number.md) | 重なりの優先度(See :  [Tilemap.\_comparechildorder](Tilemap.md#static-_comparechildorder-a-b)) |
| `anchor` | [Point](Point.md) | 座標の基点 (ex: 左上{0, 0} / 右下{1, 1} ) |
| `point` | [Point](Point.md) | 位置(x, y を同時に指定) |
| `scale` | [Point](Point.md) | 拡大量(ex: 等倍 {1, 1} / 横2倍 {2, 1}) |
| `rotation` | [Number](Number.md) | 回転角(ラジアン) |
| `blendMode` | [Number](Number.md) | [合成方法](0: 通常, 1: 加算, 2: 乗算, 3: スクリーン) |
| `filters` | [Array](Array.md).<[PIXI.Filter](http://pixijs.download/dev/docs/PIXI.Filter.html)> | フィルタの配列 |
| `children` | [Array](Array.md).<[PIXI.DisplayObject](http://pixijs.download/dev/docs/PIXI.DisplayObject.html)> | [read-only] 子表示オブジェクトの配列 |
| `parent` | [PIXI.Container](http://pixijs.download/dev/docs/PIXI.Container.html) | [read-only] 親コンテナオブジェクト |


### Extends

* [PIXI.Sprite](PIXI.Sprite.md)

### Methods

#### _createTinter (w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |


#### _executeTint (x, y, w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |


#### _isInBitmapRect (x, y, w, h) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### _needsTint () → {Boolean}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### _onBitmapLoad ()


#### _refresh ()


#### _renderCanvas (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |


#### _renderWebGL (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |


#### getBlendColor () → {[Array](Array.md)}


 合成される色(r, g, b)と不透明度(a)を返す。

##### Returns:


[r, g, b, a] の配列
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### getColorTone () → {[Array](Array.md)}


 補正される色調(r, g, b)とグレー(gray)を返す。

##### Returns:


[r, g, b, gray] の配列
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### initialize (bitmap)


 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |


#### move (x, y)


 位置の指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標 |
| `y` | [Number](Number.md) | y座標 |


#### setBlendColor (color)


 合成される色(r, g, b)と不透明度(a)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md) | [r, g, b, a] の配列 |


#### setColorTone (tone)


 補正される色調(r, g, b)とグレー(gray)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.md) | [r, g, b, gray] の配列 |


#### setFrame (x, y, width, height)
 保持している画像(bitmap)の表示領域を指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  矩形枠のx座標(ピクセル) |
| `y` | [Number](Number.md) |  矩形枠のy座標(ピクセル) |
| `width` | [Number](Number.md) |  矩形枠の幅(ピクセル) |
| `height` | [Number](Number.md) |  矩形枠の高さ(ピクセル) |


#### update ()
 フレーム毎のアップデート。


#### _speedUpCustomBlendModes (renderer)
カスタムブレンドモードのスピードアップの要不要をチェック

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` |  | レンダラ |



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
