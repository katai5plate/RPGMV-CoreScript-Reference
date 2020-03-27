# Class: Scene_Shop

## Extends: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_Shop ()
[ショップ]のシーン。

関連クラス: [Game_Interpreter](Game_Interpreter.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_goods` | [Array](Array.md).&lt;[Array](Array.md).&lt;*&gt;&gt; |  |
| `_purchaseOnly` | Boolean |  |
| `_item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `_goldWindow` | [Window_Gold](Window_Gold.md) |  |
| `_commandWindow` | [Window_ShopCommand](Window_ShopCommand.md) |  |
| `_dummyWindow` | [Window_Base](Window_Base.md) |  |
| `_numberWindow` | [Window_ShopNumber](Window_ShopNumber.md) |  |
| `_statusWindow` | [Window_ShopStatus](Window_ShopStatus.md) |  |
| `_buyWindow` | [Window_ShopBuy](Window_ShopBuy.md) |  |
| `_categoryWindow` | [Window_ItemCategory](Window_ItemCategory.md) |  |
| `_sellWindow` | [Window_ShopSell](Window_ShopSell.md) |  |
| `_helpWindow` | [Window_Help](Window_Help.md) |  |


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
* [destroy ()](PIXI.Container.md#destroy-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [Scene_Base](Scene_Base.md)

* [addWindow (Window)](Scene_Base.md#addwindow-window)
* [attachReservation ()](Scene_Base.md#attachreservation-)
* [checkGameover ()](Scene_Base.md#checkgameover-)
* [createFadeSprite ()](Scene_Base.md#createfadesprite-)
* [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
* [detachReservation ()](Scene_Base.md#detachreservation-)
* [fadeOutAll ()](Scene_Base.md#fadeoutall-)
* [fadeSpeed ()](Scene_Base.md#fadespeed---number)
* [isActive () ](Scene_Base.md#isactive---boolean)
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [update ()](Scene_Base.md#update-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_MenuBase](Scene_MenuBase.md)

* [actor ()](Scene_MenuBase.md#actor---game_actor)
* [createHelpWindow ()](Scene_MenuBase.md#createhelpwindow-)
* [nextActor ()](Scene_MenuBase.md#nextactor-)
* [onActorChange ()](Scene_MenuBase.md#onactorchange-)
* [previousActor ()](Scene_MenuBase.md#previousactor-)
* [setBackgroundOpacity (opacity)](Scene_MenuBase.md#setbackgroundopacity-opacity)
* [start ()](Scene_Base.md#start-)
* [updateActor ()](Scene_MenuBase.md#updateactor-)


### Methods

#### activateBuyWindow ()
Activates the buy window within the shop scene.

#### activateSellWindow ()
Activates the sell window within the shop scene.


#### buyingPrice () → {[Number](Number.md)}
Returns the buying price for the current item.
#### commandBuy ()
Handler for pressing buy within the shop scene.

#### commandSell ()
Handler for pressing sell within the shop scene.

#### create ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### createBuyWindow ()
Creates the buy window.

#### createCategoryWindow ()

Creates the category window.

#### createCommandWindow ()
Creates the command window for buying or selling.

#### createDummyWindow ()


#### createGoldWindow ()
Creates the gold window on the shop scene.

#### createNumberWindow ()
Creates the number input window on the shop scene.

#### createSellWindow ()
Creates the sell window.

#### createStatusWindow ()
Creates the status window.

#### currencyUnit () → {[String](String.md)}
Returns the currency unit of the game within the shop scene.

#### doBuy (number)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `number` | [Number](Number.md) |  |


#### doSell (number)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `number` | [Number](Number.md) |  |


#### endNumberInput ()


#### initialize ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### maxBuy () → {[Number](Number.md)}
Returns the maximum number bought.

#### maxSell () → {[Number](Number.md)}
Returns the maximum number sold.

#### money () → {[Number](Number.md)}
Returns the player gold within the shop scene.#### onBuyCancel ()
Handler for when buying is cancelled.

#### onBuyOk ()
Handler for when buying is confirmed.

#### onCategoryCancel ()


#### onCategoryOk ()


#### onNumberCancel ()


#### onNumberOk ()


#### onSellCancel ()


#### onSellOk ()



#### prepare (goods, purchaseOnly)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `goods` | [Array](Array.md).<[Array](Array.md).<*>> |  |
| `purchaseOnly` | Boolean |  |


#### sellingPrice () → {[Number](Number.md)}
Returns the selling price for the current item.
