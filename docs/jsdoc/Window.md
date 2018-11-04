# Class: Window

## Window ()

#### new Window ()

The window in the game.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `children` | [Array](Array.html) | [super][read-only] The array of children of the window. |
| `parent` | Object | [super][read-only] The object that contains the window. |
| `active` | Boolean | The active state for the window. |
| `openness` | [Number](Number.html) | The openness of the window (0 to 255). |
| `contents` | [Bitmap](Bitmap.html) |  |
| `windowskin` | [Bitmap](Bitmap.html) | The image used as a window skin. |
| `visible` | Boolean | The visibility of the window. |
| `pause` | Boolean | The visibility of the pause sign. |
| `downArrowVisible` | Boolean | The visibility of the down scroll arrow. |
| `upArrowVisible` | Boolean | The visibility of the up scroll arrow. |
| `opacity` | [Number](Number.html) | The opacity of the window without contents (0 to 255). |
| `backOpacity` | [Number](Number.html) | The opacity of the window contents (0 to 255). |
| `contentsOpacity` | [Number](Number.html) | The opacity of the window contents (0 to 255). |
| `origin` | [Point](Point.html) | The origin point of the window for scrolling. |
| `x` | [Number](Number.html) | The x coordinate of the window. |
| `y` | [Number](Number.html) | The y coordinate of the window. |
| `width` | [Number](Number.html) | The width of the sprite without the scale. |
| `height` | [Number](Number.html) | The height of the window in pixels. |
| `margin` | [Number](Number.html) | The size of the margin for the window background. |
| `padding` | [Number](Number.html) | The size of the padding between the frame and contents. |
| `_isWindow` | Boolean |  |
| `_windowskin` | [Bitmap](Bitmap.html) |  |
| `_width` | [Number](Number.html) |  |
| `_height` | [Number](Number.html) |  |
| `_cursorRect` | [Rectangle](Rectangle.html) |  |
| `_openness` | [Number](Number.html) |  |
| `_animationCount` | [Number](Number.html) |  |
| `_padding` | [Number](Number.html) |  |
| `_margin` | [Number](Number.html) |  |
| `_colorTone` | [Array](Array.html).<[Number](Number.html)> |  |
| `_windowSpriteContainer` | PIXI.Container |  |
| `_windowBackSprite` | [Sprite](Sprite.html) |  |
| `_windowCursorSprite` | [Sprite](Sprite.html) |  |
| `_windowFrameSprite` | [Sprite](Sprite.html) |  |
| `_windowContentsSprite` | [Sprite](Sprite.html) |  |
| `_windowArrowSprites` | [Array](Array.html).<*> |  |
| `_windowPauseSignSprite` | [Sprite](Sprite.html) |  |
| `_downArrowSprite` | [Sprite](Sprite.html) |  |
| `_upArrowSprite` | [Sprite](Sprite.html) |  |

<dl>
</dl>

### Extends

* PIXI.Container

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
| `index` | [Number](Number.html) | The index to place the child in |

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
| `x` | [Number](Number.html) | The x coordinate of the window |
| `y` | [Number](Number.html) | The y coordinate of the window |
| `width` | [Number](Number.html) | The width of the window |
| `height` | [Number](Number.html) | The height of the window |

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
| `index` | [Number](Number.html) | The index to get the child from |

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
| `x` | [Number](Number.html) | The x coordinate of the cursor |
| `y` | [Number](Number.html) | The y coordinate of the cursor |
| `width` | [Number](Number.html) | The width of the cursor |
| `height` | [Number](Number.html) | The height of the cursor |

<dl>
</dl>

#### setTone (r, g, b)

Changes the color of the background.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red value in the range (-255, 255) |
| `g` | [Number](Number.html) | The green value in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue value in the range (-255, 255) |

<dl>
</dl>

#### update ()

Updates the window for each frame.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
