# Class: Sprite

## (abstract) Sprite (bitmap)

#### (abstract) new Sprite (bitmap)

 描画のための基本オブジェクト。 PIXI.Sprite ([http://pixijs.download/release/docs/PIXI.Sprite.html](http://pixijs.download/release/docs/PIXI.Sprite.html)) の子クラス。 [Sprite_Animation](Sprite_Animation.html), [Sprite_Button](Sprite_Button.html), [Sprite_Damage](Sprite_Damage.html), [Sprite_Destination](Sprite_Destination.html), [Sprite_Picture](Sprite_Picture.html), [Sprite_StateIcon](Sprite_StateIcon.html), [Sprite_Timer](Sprite_Timer.html) および [Spriteset_Base](Spriteset_Base.html) と [Sprite_Base](Sprite_Base.html) のスーパークラス。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.html) |  スプライトに設定する画像 |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_counter` | [Number](Number.html) | [static] スプライトの(生成順)番号 |
| `voidFilter` | PIXI.filters.VoidFilter | [static] |
| `spriteId` | [Number](Number.html) |  |
| `opaque` | Boolean |  不[透明状態]か |
| `bitmap` | [Bitmap](Bitmap.html) |  スプライトに設定する画像 |
| `width` | [Number](Number.html) |  拡大縮小前の画像の幅 |
| `height` | [Number](Number.html) |  拡大縮小前の画像の高さ |
| `opacity` | [Number](Number.html) |  不透明度 (0 〜 255) |
| `visible` | Boolean |  表示中か |
| `x` | [Number](Number.html) | x座標 |
| `y` | [Number](Number.html) | y座標 |
| `point` | [Point](Point.html) |  基点 ( (0, 0) 〜 (1, 1) ) |
| `scale` | [Point](Point.html) |  拡大量 |
| `rotation` | [Number](Number.html) |  回転角(ラジアン) |
| `blendMode` | [Number](Number.html) | [合成方法](0: 通常, 1: 加算, 2: 乗算, 3: スクリーン) |
| `filters` | [Array](Array.html).<PIXI.Filter> |  フィルタの配列 |
| `children` | [Array](Array.html).<PIXI.DisplayObject> | [read-only] 子表示オブジェクトの配列 |
| `parent` | PIXI.Container | [read-only] 親コンテナオブジェクト |

<dl>
</dl>

### Extends

* PIXI.Sprite

### Methods

#### (static) _createTinter (w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `w` | [Number](Number.html) |  |
| `h` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _executeTint (x, y, w, h)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `w` | [Number](Number.html) |  |
| `h` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _isInBitmapRect (x, y, w, h) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `w` | [Number](Number.html) |  |
| `h` | [Number](Number.html) |  |

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

#### (static) getBlendColor () → {[Array](Array.html)}

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

#### (static) getColorTone () → {[Array](Array.html)}

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
| `bitmap` | [Bitmap](Bitmap.html) |  |

<dl>
</dl>

#### (static) move (x, y)

 位置の指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | x座標 |
| `y` | [Number](Number.html) | y座標 |

<dl>
</dl>

#### (static) setBlendColor (color)

 合成される色(r, g, b)と不透明度(a)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.html) | [r, g, b, a] の配列 |

<dl>
</dl>

#### (static) setColorTone (tone)

 補正される色調(r, g, b)とグレー(gray)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.html) | [r, g, b, gray] の配列 |

<dl>
</dl>

#### (static) setFrame (x, y, width, height)

 表示される矩形を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  枠のx座標 |
| `y` | [Number](Number.html) |  枠のy座標 |
| `width` | [Number](Number.html) |  枠の幅 |
| `height` | [Number](Number.html) |  枠の高さ |

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
