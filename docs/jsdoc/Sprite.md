# Class: Sprite

## Sprite (bitmap)

#### new Sprite (bitmap)

描画のための基本オブジェクト。[Sprite_Animation](Sprite_Animation.md), [Sprite_Button](Sprite_Button.md), [Sprite_Damage](Sprite_Damage.md), [Sprite_Destination](Sprite_Destination.md), [Sprite_Picture](Sprite_Picture.md), [Sprite_StateIcon](Sprite_StateIcon.md), [Sprite_Timer](Sprite_Timer.md) および [Spriteset_Base](Spriteset_Base.md) と [Sprite_Base](Sprite_Base.md) のスーパークラス。<br />
PRGツクールMVでは、[ImageManager](ImageManager.md)で画像ファイルから読み込んだ[Bitmap](Bitmap.md)を、コンストラクタ引数に指定してSpriteを生成し、[Stage](Stage.md)などのコンテナオブジェクトにaddChildする、という手順で画像を表示する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_counter` | [Number](Number.md) | [static] スプライトの(生成順)番号 |
| `voidFilter` | [PIXI.filters.VoidFilter](http://pixijs.download/dev/docs/PIXI.filters.VoidFilter.html) | [static] |
| `spriteId` | [Number](Number.md) |  |
| `opaque` | Boolean |  不[透明状態]か |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |
| `width` | [Number](Number.md) |  拡大縮小前の画像の幅 |
| `height` | [Number](Number.md) |  拡大縮小前の画像の高さ |
| `opacity` | [Number](Number.md) |  不透明度 (0 〜 255) |
| `visible` | Boolean |  表示中か |
| `x` | [Number](Number.md) | x座標 |
| `y` | [Number](Number.md) | y座標 |
| `point` | [Point](Point.md) |  基点 ( (0, 0) 〜 (1, 1) ) |
| `scale` | [Point](Point.md) |  拡大量 |
| `rotation` | [Number](Number.md) |  回転角(ラジアン) |
| `blendMode` | [Number](Number.md) | [合成方法](0: 通常, 1: 加算, 2: 乗算, 3: スクリーン) |
| `filters` | [Array](Array.md).<[PIXI.Filter](http://pixijs.download/dev/docs/PIXI.Filter.html)> |  フィルタの配列 |
| `children` | [Array](Array.md).<[PIXI.DisplayObject](http://pixijs.download/dev/docs/PIXI.DisplayObject.html)> | [read-only] 子表示オブジェクトの配列 |
| `parent` | [PIXI.Container](http://pixijs.download/dev/docs/PIXI.Container.html) | [read-only] 親コンテナオブジェクト |

<dl>
</dl>

### Extends

* [PIXI.Sprite](http://pixijs.download/release/docs/PIXI.Sprite.html)

### Methods

#### (static) _createTinter (w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _executeTint (x, y, w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _isInBitmapRect (x, y, w, h) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `w` | [Number](Number.md) |  |
| `h` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _needsTint () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _onBitmapLoad ()

<dl>
</dl>

#### (static) _refresh ()

<dl>
</dl>

#### (static) _renderCanvas (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |

<dl>
</dl>

#### (static) _renderWebGL (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |

<dl>
</dl>

#### (static) getBlendColor () → {[Array](Array.md)}


 合成される色(r, g, b)と不透明度(a)を返す。
<dl>
</dl>

##### Returns:


[r, g, b, a] の配列
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### (static) getColorTone () → {[Array](Array.md)}


 補正される色調(r, g, b)とグレー(gray)を返す。
<dl>
</dl>

##### Returns:


[r, g, b, gray] の配列
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### (static) initialize (bitmap)


 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |

<dl>
</dl>

#### (static) move (x, y)


 位置の指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標 |
| `y` | [Number](Number.md) | y座標 |

<dl>
</dl>

#### (static) setBlendColor (color)


 合成される色(r, g, b)と不透明度(a)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md) | [r, g, b, a] の配列 |

<dl>
</dl>

#### (static) setColorTone (tone)


 補正される色調(r, g, b)とグレー(gray)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.md) | [r, g, b, gray] の配列 |

<dl>
</dl>

#### (static) setFrame (x, y, width, height)


 表示される矩形を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  枠のx座標 |
| `y` | [Number](Number.md) |  枠のy座標 |
| `width` | [Number](Number.md) |  枠の幅 |
| `height` | [Number](Number.md) |  枠の高さ |

<dl>
</dl>

#### (static) update ()


 フレーム毎のアップデート。
<dl>
</dl>

#### _speedUpCustomBlendModes (renderer)


checks if we need to speed up custom blendmodes

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` |  |  |

<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
