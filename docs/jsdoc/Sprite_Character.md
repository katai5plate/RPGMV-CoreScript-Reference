# Class: Sprite_Character

## Sprite_Character (character)

#### new Sprite_Character (character)

[イベント][アクター][フォロワー][乗り物]といった、キャラクタを表示するスプライト。

コンストラクタの引数(Parameters)として渡される以下のキャラクタデータオブジェクトによって挙動が決まる。

* [Game_Player](Game_Player.md)
* [Game_Follower](Game_Follower.md)
* [Game_Event](Game_Event.md)
* [Game_Vehicle](Game_Vehicle.md)

[Spriteset_Map](Spriteset_Map.md) の createCharacters() で生成され、_characterSprites に格納される。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタデータ |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_character` | [Game_Character](Game_Character.md) | キャラクタデータ |
| `_balloonDuration` | [Number](Number.md) |  |
| `_tilesetId` | [Number](Number.md) |  |
| `_upperBody` | [Sprite](Sprite.md) |  |
| `_lowerBody` | [Sprite](Sprite.md) |  |
| `_bushDepth` | [Number](Number.md) |  |
| `_balloonSprite` | [Sprite_Balloon](Sprite_Balloon.md) | 付随するフキダシスプライト |


### Extends

* [Sprite_Base](Sprite_Base.md)


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

#### [Sprite_Base](Sprite_Base.md)

* [hide ()](Sprite_Base.md#)
* [isAnimationPlaying ()](Sprite_Base.md#)
* [show ()](Sprite_Base.md#)
* [startAnimation (animation, mirror, delay)](Sprite_Base.md#)
* [updateAnimationSprites ()](Sprite_Base.md#)


### Methods

#### characterBlockX () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### characterBlockY () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### characterPatternX () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### characterPatternY () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### createHalfBodySprites ()


#### endBalloon ()
フキダシを削除。


#### initialize (character)
 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

##### Overrides:
[Sprite_Base.initialize ()](Sprite_Base.md#initialize-)


#### initMembers ()


#### isBalloonPlaying () → {boolean}
フキダシが動作しているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isImageChanged () → {Boolean}
画像が切り替わったか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isTile () → {boolean}
タイルの上に乗っている(0 < tileID)か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### patternHeight () → {[Number](Number.md)}
パターンの高さ(ピクセル)を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### patternWidth () → {[Number](Number.md)}
パターンの幅(ピクセル)を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### setCharacter (character)
キャラクタを再設定。コンストラクタに渡す値と同じ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |


#### setCharacterBitmap ()
キャラクタの画像を設定。


#### setTileBitmap ()
タイル画像を設定。


#### setupAnimation ()
アニメーションを設定。


#### setupBalloon ()
フキダシの設定。


#### startBalloon ()
フキダシの表示を開始。


#### tilesetBitmap (tileId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Bitmap</a></span>
    </dd>
</dl>


#### update ()

##### Overrides:
[Sprite_Base.update()](Sprite_Base.md#update-)


#### updateAnimation ()


#### updateBalloon ()
フキダシをアップデート。


#### updateBitmap ()
ビットマップをアップデート。


#### updateCharacterFrame ()
キャラクタのフレームをアップデート。


#### updateFrame ()
フレームをアップデート。


#### updateHalfBodySprites ()


#### updateOther ()


#### updatePosition ()
キャラクタの位置をアップデート。


#### updateTileFrame ()
タイルのフレームをアップデート。


#### updateVisibility ()
表示プロパティのアップデート。

##### Overrides:
[Sprite_Base.updateVisibility ()](Sprite_Base.md#updateVisibility-)


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
