# Class: Sprite_Animation

## Extends: [Sprite](Sprite.md)

### new Sprite_Animation ()

| データベース| JSONデータ | 大域変数 |
| --- | --- | --- |
| [アニメーション] | [RPG.Animation](RPG.Animation.md), [RPG.Animation.Timing](RPG.Animation.Timing.md) | [$dataAnimations](global.md#dataanimations-arrayrpganimation)(配列) |

[アニメーション]を表示するスプライト。

関連項目: [Sprite_Base](Sprite_Base.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_checker1` | Object | [static] {key: [RPG.Animation](RPG.Animation.md)} |
| `_checker2` | Object | [static] {key: [RPG.Animation](RPG.Animation.md)} |
| `z` | [Number](Number.md) |  |
| `_target` | [Sprite_Base](Sprite_Base.md) |  |
| `_animation` | [RPG.Animation](RPG.Animation.md) |  |
| `_mirror` | Boolean |  |
| `_delay` | [Number](Number.md) |  |
| `_rate` | [Number](Number.md) |  |
| `_duration` | [Number](Number.md) |  |
| `_flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |
| `_flashDuration` | [Number](Number.md) |  |
| `_screenFlashDuration` | [Number](Number.md) |  |
| `_hidingDuration` | [Number](Number.md) |  |
| `_bitmap1` | [Bitmap](Bitmap.md) |  |
| `_bitmap2` | [Bitmap](Bitmap.md) |  |
| `_cellSprites` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; |  |
| `_screenFlashSprite` | [ScreenSprite](ScreenSprite.md) |  |
| `_duplicated` | Boolean |  |
| `_reduceArtifacts` | Boolean |  |


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

#### [PIXI.Sprite](PIXI.Sprite.md)

* [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
* [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
* [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
* [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
* [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
* [destroy (options)](PIXI.Sprite.md#destroy-options)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)

#### [Sprite](Sprite.md)

* [\_createTinter (w, h)](Sprite.md#_createtinter-w-h)
* [\_executeTint (x, y, w, h)](Sprite.md#_executetint-x-y-w-h)
* [\_isInBitmapRect (x, y, w, h)](Sprite.md#_isinbitmaprect-x-y-w-h--boolean)
* [\_needsTint ()](Sprite.md#_needstint---boolean)
* [\_onBitmapLoad ()](Sprite.md#_onbitmapload-)
* [\_refresh ()](Sprite.md#_refresh-)
* [\_renderCanvas (renderer)](Sprite.md#_rendercanvas-renderer)
* [\_renderWebGL (renderer)](Sprite.md#_renderwebgl-renderer)
* [\_speedUpCustomBlendModes (renderer)](Sprite.md#_speedupcustomblendmodes-renderer)
* [getBlendColor ()](Sprite.md#getblendcolor---array)
* [getColorTone ()](Sprite.md#getcolortone---array)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)


### Methods

#### absoluteX () → {[Number](Number.md)}
Returns the absolute x position of the sprite animation.

#### absoluteY () → {[Number](Number.md)}
Returns the absolute y position of the sprite aniamtion.


#### createCellSprites ()
Create the cell sprites of the sprite animation.

#### createScreenFlashSprite ()
Create the screen flash sprite of the sprite animation.

#### createSprites ()
Create the sprites of the sprite animation.

#### currentFrameIndex () → {[Number](Number.md)}
Returns the current frame index of the sprite aniamtion.

#### initialize ()
Overrides:[Sprite](Sprite.md#initialize-)
 
#### initMembers ()

#### isPlaying () → {Boolean}
Returns true if the sprite animation is playing.

#### isReady () → {Boolean}
Returns true if the sprite animation is ready.

#### loadBitmaps ()
Loads the bitmaps of the sprite animation.

#### processTimingData (timing)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `timing` | [RPG.Animation.Timing](RPG.Animation.Timing.md) |  |


#### remove ()
Removes the sprite animation.


#### setup (target, animation, mirror, delay)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Sprite_Base](Sprite_Base.md) |  |
| `animation` | [RPG.Animation](RPG.Animation.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |


#### setupDuration ()


#### setupRate ()


#### startFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |
| `duration` | [Number](Number.md) |  |


#### startHiding (duration)
Starts hiding the sprite animation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | The duration of the hide. |


#### startScreenFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |
| `duration` | [Number](Number.md) |  |


#### update ()
Overrides:[Sprite](Sprite.md#update-)


#### updateAllCellSprites (frame)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt; |  |


#### updateCellSprite (sprite, cell)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |
| `cell` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |


#### updateFlash ()
Updates the flash animation of the sprite animation.

#### updateFrame ()
Updates the frame of the sprite aniamtion.

#### updateHiding ()
Updates the hiding of the sprite animation.

#### updateMain ()
Updates the main loop of the sprite animation.

#### updatePosition ()
Updates the position of the sprite animation.

#### updateScreenFlash ()


