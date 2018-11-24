# Class: Window

## Window ()

#### new Window ()

ゲーム内で使われるウィンドウ。<br />
ブラウザやその他アプリケーションのウィンドウではない。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `children` | [Array](Array.md).<*> | [super][read-only] 子オブジェクト |
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
| `_windowArrowSprites` | [Array](Array.md).<*> |  |
| `_windowPauseSignSprite` | [Sprite](Sprite.md) |  |
| `_downArrowSprite` | [Sprite](Sprite.md) |  |
| `_upArrowSprite` | [Sprite](Sprite.md) |  |

<dl>
</dl>

### Extends

* [PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html)

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


[super] Adds a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
</dl>

##### Returns:


The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}


[super] Adds a child to the container at a specified index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |
| `index` | [Number](Number.md) | The index to place the child in |

<dl>
</dl>

##### Returns:


The child that was added
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildToBack (child) → {Object}


Adds a child between the background and contents.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to add |

<dl>
</dl>

##### Returns:


The child that was added
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

#### isClosed ()


Returns true if the window is completely closed (openness == 0).
<dl>
</dl>

#### isOpen ()


Returns true if the window is completely open (openness == 255).
<dl>
</dl>

#### move (x, y, width, height)


Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the window |
| `y` | [Number](Number.md) | The y coordinate of the window |
| `width` | [Number](Number.md) | The width of the window |
| `height` | [Number](Number.md) | The height of the window |

<dl>
</dl>

#### removeChild (child) → {Object}


[super] Removes a child to the container.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object | The child to remove |

<dl>
</dl>

##### Returns:


The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}


[super] Removes a child from the specified index position.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | The index to get the child from |

<dl>
</dl>

##### Returns:


The child that was removed
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### setCursorRect (x, y, width, height)


Sets the position of the command cursor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the cursor |
| `y` | [Number](Number.md) | The y coordinate of the cursor |
| `width` | [Number](Number.md) | The width of the cursor |
| `height` | [Number](Number.md) | The height of the cursor |

<dl>
</dl>

#### setTone (r, g, b)


Changes the color of the background.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | The red value in the range (-255, 255) |
| `g` | [Number](Number.md) | The green value in the range (-255, 255) |
| `b` | [Number](Number.md) | The blue value in the range (-255, 255) |

<dl>
</dl>

#### update ()


Updates the window for each frame.
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
