# Class: Scene_MenuBase

## Extends: [Scene_Base](Scene_Base.md)

### new Scene_MenuBase ()

メニュー型シーンの基礎クラス。

### Sub Classes

- [Scene_Debug](Scene_Debug.md)
- [Scene_Equip](Scene_Equip.md)
- [Scene_GameEnd](Scene_GameEnd.md)
- [Scene_Menu](Scene_Menu.md)
- [Scene_Name](Scene_Name.md)
- [Scene_Options](Scene_Options.md)
- [Scene_Shop](Scene_Shop.md)
- [Scene_Status](Scene_Status.md)
- [Scene_File](Scene_File.md)
- [Scene_ItemBase](Scene_ItemBase.md)

### Properties:

| Name                | Type                          | Description                        |
| ------------------- | ----------------------------- | ---------------------------------- |
| `_actor`            | [Game_Actor](Game_Actor.md)   | 選択されているアクター             |
| `_backgroundSprite` | [Sprite](Sprite.md)           | シーンの背景となるスプライト       |
| `_helpWindow`       | [Window_Help](Window_Help.md) | シーンに付加されるヘルプウィンドウ |

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
- [destroy ()](PIXI.Container.md#destroy-)
- [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
- [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
- [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
- [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
- [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
- [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
- [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
- [render (renderer)](PIXI.Container.md#render-renderer)
- [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
- [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
- [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
- [sortChildren ()](PIXI.Container.md#sortchildren-)
- [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
- [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [Scene_Base](Scene_Base.md)

- [addWindow (Window)](Scene_Base.md#addwindow-window)
- [attachReservation ()](Scene_Base.md#attachreservation-)
- [checkGameover ()](Scene_Base.md#checkgameover-)
- [createFadeSprite ()](Scene_Base.md#createfadesprite-)
- [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
- [detachReservation ()](Scene_Base.md#detachreservation-)
- [fadeOutAll ()](Scene_Base.md#fadeoutall-)
- [fadeSpeed ()](Scene_Base.md#fadespeed---number)
- [isActive () ](Scene_Base.md#isactive---boolean)
- [isBusy ()](Scene_Base.md#isbusy---boolean)
- [isReady ()](Scene_Base.md#isready---boolean)
- [popScene ()](Scene_Base.md#popscene-)
- [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
- [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
- [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
- [start ()](Scene_Base.md#start-)
- [stop ()](Scene_Base.md#stop-)
- [terminate ()](Scene_Base.md#terminate-)
- [update ()](Scene_Base.md#update-)
- [updateChildren ()](Scene_Base.md#updatechildren-)
- [updateFade ()](Scene_Base.md#updatefade-)

### Methods

#### actor () → {[Game_Actor](Game_Actor.md)}

現在のアクターを返す。

#### create ()

Overrides: [Scene_Base](Scene_Base.md#create-)

#### createHelpWindow ()

ヘルプウィンドウを生成。

#### initialize ()

Overrides: [Scene_Base](Scene_Base.md#initialize-)

#### nextActor ()

パーティの次のアクターに切り替える。

#### onActorChange ()

アクターが切り替わった時に呼ばれるハンドラ。

#### previousActor ()

パーティの前のアクターに切り替える。

#### setBackgroundOpacity (opacity)

背景の不透明度を設定。

##### Parameters:

| Name      | Type                | Description      |
| --------- | ------------------- | ---------------- |
| `opacity` | [Number](Number.md) | 不透明度(0〜255) |

#### updateActor ()

現在のアクターをアップデート。
