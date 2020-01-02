# Class: Sprite_Button

## Extends: [Sprite](Sprite.md)

#### new Sprite_Button ()

The sprite for displaying a button.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_touching` | Boolean | タッチ・クリック対応か |
| `_coldFrame` | [Rectangle](Rectangle.md) | 表示枠 |
| `_hotFrame` | [Rectangle](Rectangle.md) | タッチ・クリック反応枠 |
| `_clickHandler` | Function | タッチ・クリック時に呼ばれるハンドラ |



### Methods

#### _speedUpCustomBlendModes (renderer)

checks if we need to speed up custom blendmodes

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` |  |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite#_speedUpCustomBlendModes</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### callClickHandler (height)

Calls the handler method bound to the button.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `height` | function |  |


#### canvasToLocalX (x) → {number}

Changes the x coordinate of the screen to local sprite x coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### canvasToLocalY (y) → {number}

Changes the y coordinate of the screen to local sprite y coordinate.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  |


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>number</span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。

#### isActive () → {boolean}

Returns true if the sprite button is currently active.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### isButtonTouched () → {boolean}

Returns true is the button is presently being touched.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### processTouch ()

Processes weather or not the button is being touched and calls the handler bound to the button.

#### setClickHandler (height)

Creates a new handler and binds it to the button.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `height` | function |  |


#### setColdFrame (x, y, width, height)

Set the button sprites cold frame.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |


#### setHotFrame (x, y, width, height)

Set the button sprites hot frame

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `width` | [Number](Number.md) |  |
| `height` | [Number](Number.md) |  |


#### update ()


#### updateFrame ()

Update method, which checks if the sprite is being touched and updates the current frame.



