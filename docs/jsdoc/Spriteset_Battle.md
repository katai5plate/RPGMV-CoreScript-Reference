# Class: Spriteset_Battle

## Spriteset_Battle ()

#### new Spriteset_Battle ()
戦闘シーン用のスプライトセット。
[Scene_Battle](Scene_Battle.md) オブジェクトで管理される。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_battlebackLocated` | Boolean |  |
| `_backgroundSprite` | [Sprite](Sprite.md) |  |
| `_battleField` | [Sprite](Sprite.md) |  |
| `_back1Sprite` | [TilingSprite](TilingSprite.md) |  |
| `_back2Sprite` | [TilingSprite](TilingSprite.md) |  |
| `_enemySprites` | [Array](Array.md).<[Sprite_Enemy](Sprite_Enemy.md)> |  |
| `_actorSprites` | [Array](Array.md).<[Sprite_Actor](Sprite_Actor.md)> |  |


### Extends

* [Spriteset_Base](Spriteset_Base.md)

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


#### [Spriteset_Base](Spriteset_Base.md)

* [createBaseSprite ()](Spriteset_Base.md#createbasesprite-)
* [createCanvasToneChanger ()](Spriteset_Base.md#createcanvastonechanger-)
* [createPictures ()](Spriteset_Base.md#createpictures-)
* [createScreenSprites ()](Spriteset_Base.md#createscreensprites-)
* [createTimer ()](Spriteset_Base.md#createtimer-)
* [createToneChanger ()](Spriteset_Base.md#createtonechanger-)
* [createUpperLayer ()](Spriteset_Base.md#createupperlayer-)
* [createWebGLToneChanger ()](Spriteset_Base.md#createwebgltonechanger-)
* [updateCanvasToneChanger ()](Spriteset_Base.md#updatecanvastonechanger-)
* [updatePosition ()](Spriteset_Base.md#updateposition-)
* [updateScreenSprites ()](Spriteset_Base.md#updatescreensprites-)
* [updateToneChanger ()](Spriteset_Base.md#updatetonechanger-)
* [updateWebGLToneChanger ()](Spriteset_Base.md#updatewebgltonechanger-)


### Methods

#### autotileType (z) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `z` | [Number](Number.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.md">Number</a></span>
    </dd>
</dl>


#### battleback1Bitmap () → {[Bitmap](Bitmap.md)}Returns battleb ack 2 of the battle spriteset.

##### Returns:Instance of the Bitmap class.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Bitmap</a></span>
    </dd>
</dl>


#### battleback1Name () → {[String](String.md)}


##### Returns:Name of battleback 1 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### battleback2Bitmap () → {[Bitmap](Bitmap.md)}Returns battleback 2 of the battle spriteset.

##### Returns:
Instance of the Bitmap class.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Bitmap</a></span>
    </dd>
</dl>


#### battleback2Name () → {[String](String.md)}


##### Returns:Name of battleback 2 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### battlerSprites () → {[Array](Array.md).<[Sprite_Battler](Sprite_Battler.md)>}Returns all battler sprites on the battle spriteset.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Array.md">Array</a>.&lt;<a href="Sprite_Battler.md">Sprite_Battler</a>&gt;</span>
    </dd>
</dl>


#### compareEnemySprite (a, b) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | [Sprite_Enemy](Sprite_Enemy.md) |  |
| `b` | [Sprite_Enemy](Sprite_Enemy.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.md">Number</a></span>
    </dd>
</dl>


#### createActors ()Creates sprite actors for the battle spriteset.


#### createBackground ()Creates the background of the battle spriteset.


#### createBattleback ()Creates the battleback of the battle spriteset.


#### createBattleField ()Creates the battlefield of the battle spriteset.


#### createEnemies ()Creates sprite enemies for the battle spriteset.


#### createLowerLayer ()
下層レイヤーを生成。

##### Overrides
[Spriteset_Base.createLowerLayer ()](Spriteset_Base.md#createLowerLayer-)


#### defaultBattleback1Name () → {[String](String.md)}


##### Returns:Name of the default battleback 1 name.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### defaultBattleback2Name () → {[String](String.md)}


##### Returns:Name of the default battleback 2 name.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### isAnimationPlaying () → {Boolean}Returns true if animation is playing on the battle spriteset.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isAnyoneMoving () → {Boolean}Returns true if any sprite actor or enemy is moving.

##### Returns:Representing whether any battle participants are moving.
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isBusy () → {Boolean}Returns true if the battle spriteset is busy.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isEffecting () → {Boolean}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### locateBattleback ()Locates the battleback and adjusts the coordinates of the battleback.


#### normalBattleback1Name () → {[String](String.md)}


##### Returns:
Name of the normal battleback 1 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### normalBattleback2Name () → {[String](String.md)}


##### Returns:Name of the normal battleback 2 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### overworldBattleback1Name () → {[String](String.md)}Returns the battleback 1 name as a string.

##### Returns:Name of overworld battleback 1 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### overworldBattleback2Name () → {[String](String.md)}Returns the battleback 2 name as a string.

##### Returns:Name of overworld battleback 2 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>

#### shipBattleback1Name () → {[String](String.md)}

##### Returns:Name of the ship battleback 1 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>

#### shipBattleback2Name () → {[String](String.md)}


##### Returns:
Name of the ship battleback 2 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>

#### terrainBattleback1Name (type) → {[String](String.md)}Given the specified terrtain type, return the battleback 1 name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | Terrain type. |

##### Returns:Name of the terrtain battleback 1 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### terrainBattleback2Name (type) → {[String](String.md)}Given the specified terrain type, return the battleback 2 name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | Terrain type. |

##### Returns:Name of the terrain battleback 2 bitmap.
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.md">String</a></span>
    </dd>
</dl>


#### updateActors ()Updates the actor sprites on the battle spriteset.


#### updateBattleback ()Updates the battleback of the battle spriteset.

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
