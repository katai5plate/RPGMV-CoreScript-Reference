# Class: Sprite_Picture

## Extends: [Sprite](Sprite.md)

### new Sprite_Picture (pictureId)

| データ     | オブジェクト                    |
| ---------- | ------------------------------- |
| [ピクチャ] | [Game_Picture](Game_Picture.md) |

[ピクチャ]\( img/pictures/ フォルダの画像 )の表示用スプライト。

関連クラス: [Spriteset_Base](Spriteset_Base.md), [Game_Screen](Game_Screen.md)

#### Parameters:

| Name        | Type                | Description                                                         |
| ----------- | ------------------- | ------------------------------------------------------------------- |
| `pictureId` | [Number](Number.md) | ピクチャ ID( [Game_Screen](Game_Screen.md) の \_pictures 配列番号 ) |

### Properties:

| Name           | Type                | Description  |
| -------------- | ------------------- | ------------ |
| `_pictureId`   | [Number](Number.md) | ピクチャ ID  |
| `_pictureName` | [String](String.md) | 名前         |
| `_isPicture`   | Boolean             | [ピクチャ]か |

### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

- [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
- [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
- [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
- [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
- [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
- [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
- [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
- [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
- [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

- [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
- [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
- [calculateBounds ()](PIXI.Container.md#calculatebounds-)
- [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
- [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
- [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
- [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
- [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
- [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
- [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
- [render (renderer)](PIXI.Container.md#render-renderer)
- [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
- [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
- [sortChildren ()](PIXI.Container.md#sortchildren-)
- [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
- [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [PIXI.Sprite](PIXI.Sprite.md)

- [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
- [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
- [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
- [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
- [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
- [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
- [destroy (options)](PIXI.Sprite.md#destroy-options)
- [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
- [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)

#### [Sprite](Sprite.md)

- [\_createTinter (w, h)](Sprite.md#_createtinter-w-h)
- [\_executeTint (x, y, w, h)](Sprite.md#_executetint-x-y-w-h)
- [\_isInBitmapRect (x, y, w, h)](Sprite.md#_isinbitmaprect-x-y-w-h--boolean)
- [\_needsTint ()](Sprite.md#_needstint---boolean)
- [\_onBitmapLoad ()](Sprite.md#_onbitmapload-)
- [\_refresh ()](Sprite.md#_refresh-)
- [\_renderCanvas (renderer)](Sprite.md#_rendercanvas-renderer)
- [\_renderWebGL (renderer)](Sprite.md#_renderwebgl-renderer)
- [\_speedUpCustomBlendModes (renderer)](Sprite.md#_speedupcustomblendmodes-renderer)
- [getBlendColor ()](Sprite.md#getblendcolor---array)
- [getColorTone ()](Sprite.md#getcolortone---array)
- [move (x, y)](Sprite.md#Sprite.md#move-x-y)
- [setBlendColor (color)](Sprite.md#setblendcolor-color)
- [setColorTone (tone)](Sprite.md#setcolortone-tone)
- [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)

### Methods

#### initialize (pictureId)

Overrides:[Sprite](Sprite.md#initialize-)

##### Parameters:

| Name        | Type                | Description |
| ----------- | ------------------- | ----------- |
| `pictureId` | [Number](Number.md) | ピクチャ ID |

#### loadBitmap ()

画像を読み込む。

#### picture () → {[Game_Picture](Game_Picture.md)}

ピクチャオブジェクトを返す。

#### update ()

Overrides:[Sprite](Sprite.md#update-)

#### updateBitmap ()

画像のアップデート。

#### updateOrigin ()

原点のアップデート。

#### updateOther ()

その他のアップデート。

#### updatePosition ()

位置のアップデート。

#### updateScale ()

拡大率のアップデート。

#### updateTone ()

[色調]のアップデート。
