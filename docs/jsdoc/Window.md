# Class: Window

## Window ()

#### new Window ()

ゲーム内で使われるウィンドウ。[Window_Base](Window_Base.md)のスーパークラス。<br />
ブラウザやその他アプリケーションのウィンドウではない。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `children` | [Array](Array.md).&lt;\*&gt; | [super][read-only] 子オブジェクト |
| `parent` | [PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html) | [super][read-only] 親オブジェクト |
| `active` | Boolean | ウィンドウがアクティブか |
| `openness` | [Number](Number.md) | 開放度 (0 〜 255) |
| `contents` | [Bitmap](Bitmap.md) | コンテンツ |
| `windowskin` | [Bitmap](Bitmap.md) | ウィンドウのスキンに使う画像 |
| `visible` | Boolean | ウィンドウが表示中か |
| `pause` | Boolean | ポーズサインが表示中か |
| `downArrowVisible` | Boolean | 下向きスクロールアローが表示中か|
| `upArrowVisible` | Boolean | 上むきスクロールアローが表示中か |
| `opacity` | [Number](Number.md) | コンテンツの不透明度(0 〜 255) |
| `backOpacity` | [Number](Number.md) | 背景の不透明度(0 〜 255) |
| `contentsOpacity` | [Number](Number.md) | コンテンツの不透明度(0 〜 255) |
| `origin` | [Point](Point.md) | スクロールの際のウィンドウの原点 |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | 拡大縮小前のウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | 拡大縮小前のウィンドウ高さ(ピクセル) |
| `margin` | [Number](Number.md) | 背景マージン幅(ピクセル) |
| `padding` | [Number](Number.md) | 枠とコンテンツの間のパディング幅(ピクセル) |
| `_isWindow` | Boolean |  |
| `_windowskin` | [Bitmap](Bitmap.md) |  |
| `_width` | [Number](Number.md) |  |
| `_height` | [Number](Number.md) |  |
| `_cursorRect` | [Rectangle](Rectangle.md) |  |
| `_openness` | [Number](Number.md) |  |
| `_animationCount` | [Number](Number.md) |  |
| `_padding` | [Number](Number.md) |  |
| `_margin` | [Number](Number.md) |  |
| `_colorTone` | [Array](Array.md).<[Number](Number.md)> |  |
| `_windowSpriteContainer` | [PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html) |  |
| `_windowBackSprite` | [Sprite](Sprite.md) |  |
| `_windowCursorSprite` | [Sprite](Sprite.md) |  |
| `_windowFrameSprite` | [Sprite](Sprite.md) |  |
| `_windowContentsSprite` | [Sprite](Sprite.md) |  |
| `_windowArrowSprites` | [Array](Array.md).&lt;\*&gt; |  |
| `_windowPauseSignSprite` | [Sprite](Sprite.md) |  |
| `_downArrowSprite` | [Sprite](Sprite.md) |  |
| `_upArrowSprite` | [Sprite](Sprite.md) |  |

<dl>
</dl>

### Extends

* [PIXI.Container](PIXI.Container.md)

### Methods

#### (static) _createAllParts ()

<dl>
</dl>

#### (static) _onWindowskinLoad ()

<dl>
</dl>

#### (static) _refreshAllParts ()

<dl>
</dl>

#### (static) _refreshArrows ()

<dl>
</dl>

#### (static) _refreshBack ()

<dl>
</dl>

#### (static) _refreshContents ()

<dl>
</dl>

#### (static) _refreshCursor ()

<dl>
</dl>

#### (static) _refreshFrame ()

<dl>
</dl>

#### (static) _refreshPauseSign ()

<dl>
</dl>

#### (static) _updateArrows ()

<dl>
</dl>

#### (static) _updateContents ()

<dl>
</dl>

#### (static) _updateCursor ()

<dl>
</dl>

#### (static) _updatePauseSign ()

<dl>
</dl>

#### (static) updateTransform ()

<dl>
</dl>

#### addChild (child) → {Object}

[super] コンテナに子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html) | 追加するオブジェクト |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### addChildAt (child, index) → {Object}
[super] コンテナの指定位置に子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html)  | 追加するオブジェクト |
| `index` | [Number](Number.md) | 追加位置 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### addChildToBack (child) → {Object}

背景とコンテンツの間に子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html)  | 追加するオブジェクト |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### isClosed () → {Boolean}

ウィンドウが完全に閉じているか。<br />
つまり、openness === 0 であるか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isOpen () → {Boolean}

ウィンドウが完全に開いているか。<br />
つまり、openness === 255 であるか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### move (x, y, width, height)
指定した位置と大きさにウィンドウを変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | ウィンドウ高さ(ピクセル) |

<dl>
</dl>

#### removeChild (child) → {Object}

[super] 指定したオブジェクトをコンテナから取り除いて、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html) | 取り除くオブジェクト |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="http://pixijs.download/release/docs/PIXI.Container.html#removeChild">PIXI.Container#removeChild</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### removeChildAt (index) → {Object}
[super] 指定位置のオブジェクトをコンテナから取り除いて、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 取り除くオブジェクトの位置 |


<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="http://pixijs.download/release/docs/PIXI.Container.html#removeChildAt">PIXI.Container#removeChildAt</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### setCursorRect (x, y, width, height)
コマンド用カーソルの位置と大きさを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | カーソル x座標(ピクセル) |
| `y` | [Number](Number.md) | カーソル y座標(ピクセル) |
| `width` | [Number](Number.md) | カーソル幅(ピクセル) |
| `height` | [Number](Number.md) | カーソル高さ(ピクセル) |

<dl>
</dl>

#### setTone (r, g, b)
背景の色調を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤(-255 〜 255) |
| `g` | [Number](Number.md) | 緑(-255 〜 255) |
| `b` | [Number](Number.md) | 青(-255 〜 255) |

<dl>
</dl>

#### update ()

フレーム毎のアップデート。
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
