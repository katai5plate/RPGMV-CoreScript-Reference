# Class: Window_Selectable

## (abstract) Window_Selectable (x, y, width, height)

#### (abstract) new Window_Selectable (x, y, width, height)

コマンドカーソルの移動やスクロールを行うウィンドウ。

[Window_BattleEnemy](Window_BattleEnemy.md), [Window_BattleLog](Window_BattleLog.md), [Window_DebugEdit](Window_DebugEdit.md), [Window_DebugRange](Window_DebugRange.md), [Window_EquipSlot](Window_EquipSlot.md), [Window_NameInput](Window_NameInput.md), [Window_NumberInput](Window_NumberInput.md), [Window_SavefileList](Window_SavefileList.md), [Window_ShopBuy](Window_ShopBuy.md), [Window_ShopNumber](Window_ShopNumber.md), [Window_Status](Window_Status.md) および [Window_BattleStatus](Window_BattleStatus.md), [Window_MenuStatus](Window_MenuStatus.md), [Window_SkillList](Window_SkillList.md) および [Window_ItemList](Window_ItemList.md) および [Window_Command](Window_Command.md) のスーパークラス。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | ウィンドウ高さ(ピクセル) |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_index` | [Number](Number.md) | 選択されている項目の番号 |
| `_cursorFixed` | Boolean | カーソルが固定されているか |
| `_cursorAll` | Boolean | 全項目を選択しているか |
| `_stayCount` | [Number](Number.md) | 選択されてからの待ち時間(フレーム) |
| `_helpWindow` | * | ヘルプウィンドウ |
| `_handlers` | Object | ハンドラ |
| `_touching` | Boolean | タッチされているか |
| `_scrollX` | [Number](Number.md) | x軸のスクロール量 |
| `_scrollY` | [Number](Number.md) | y軸のスクロール量 |


### Extends

* [Window_Base](Window_Base.md)


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

#### [Window](Window.md)

* [addChildToBack (child)](Window.md#addchildtoback-child--object)
* [isClosed ()](Window.md#isclosed---boolean)
* [isOpen ()](Window.md#isopen---boolean)
* [move (x, y, width, height)](Window.md#move-x-y-width-height)
* [setCursorRect (x, y, width, height)](Window.md#setcursorrect-x-y-width-height)
* [setTone (r, g, b)](Window.md#settone-r-g-b)
* [updateTransform ()](Window.md#updatetransform-)

#### [Window_Base](Window_Base.md)

* [actorName (actorIndex)](Window.md#actorname-actorindex--string)
* [calcTextHeight (textState, all)](Window.md#calctextheight-textstate-all--number)
* [canvasToLocalX (x)](Window.md#canvastolocalx-x--number)
* [canvasToLocalY (y)](Window.md#canvastolocaly-y--number)
* [changePaintOpacity (enabled)](Window.md#changepaintopacity-enabled)
* [changeTextColor (color)](Window.md#changetextcolor-color)
* [close ()](Window.md#close-)
* [contentsHeight ()](Window.md#contentsheight---number)
* [contentsWidth ()](Window.md#contentswidth---number)
* [convertEscapeCharacters (text)](Window.md#convertescapecharacters-text--string)
* [createContents ()](Window.md#createcontents-)
* [crisisColor ()](Window.md#crisiscolor---string)
* [deathColor ()](Window.md#deathcolor---string)
* [dimColor1 ()](Window.md#dimcolor1---string)
* [dimColor2 ()](Window.md#dimcolor2---string)
* [drawActorCharacter (actor, x, y)](Window.md#drawactorcharacter-actor-x-y)
* [drawActorClass (actor, x, y, width)](Window.md#drawactorclass-actor-x-y-width)
* [drawActorFace (actor, x, y, width, height)](Window.md#drawactorface-actor-x-y-width-height)
* [drawActorHp (actor, x, y, width)](Window.md#drawactorhp-actor-x-y-width)
* [drawActorIcons (actor, x, y, width)](Window.md#drawactoricons-actor-x-y-width)
* [drawActorLevel (actor, x, y)](Window.md#drawactorlevel-actor-x-y)
* [drawActorMp (actor, x, y, width)](Window.md#drawactormp-actor-x-y-width)
* [drawActorName (actor, x, y, width)](Window.md#drawactorname-actor-x-y-width)
* [drawActorNickname (actor, x, y, width)](Window.md#drawactornickname-actor-x-y-width)
* [drawActorSimpleStatus (actor, x, y, width)](Window.md#drawactorsimplestatus-actor-x-y-width)
* [drawActorTp (actor, x, y, width)](Window.md#drawactortp-actor-x-y-width)
* [drawCharacter (characterName, characterIndex, x, y)](Window.md#drawcharacter-charactername-characterindex-x-y)
* [drawCurrencyValue (value, unit, x, y, width)](Window.md#drawcurrencyvalue-value-unit-x-y-width)
* [drawCurrentAndMax (current, max, x, y, width, color1, color2)](Window.md#md#drawcurrentandmax-current-max-x-y-width-color1-color2)
* [drawFace (faceName, faceIndex, x, y, width opt, height opt)](Window.md#drawface-facename-faceindex-x-y-width-opt-height-opt)
* [drawGauge (x, y, width, rate, color1, color2)](Window.md#drawgauge-x-y-width-rate-color1-color2)
* [drawIcon (iconIndex, x, y)](Window.md#drawicon-iconindex-x-y)
* [drawItemName (item, x, y, width)](Window.md#drawitemname-item-x-y-width)
* [drawText (text, x, y, maxWidth, align)](Window.md#drawtext-text-x-y-maxwidth-align)
* [drawTextEx (text, x, y)](Window.md#drawtextex-text-x-y--number)
* [fittingHeight (numLines)](Window.md#fittingheight-numlines--number)
* [gaugeBackColor ()](Window.md#gaugebackcolor---string)
* [hide ()](Window.md#hide-)
* [hideBackgroundDimmer ()](Window.md#hidebackgrounddimmer-)
* [hpColor (actor)](Window.md#hpcolor-actor--string)
* [hpGaugeColor1 ()](Window.md#hpgaugecolor1---string)
* [hpGaugeColor2 ()](Window.md#hpgaugecolor2---string)
* [isClosing ()](Window.md#isclosing---boolean)
* [isOpening ()](Window.md#isopening---boolean)
* [lineHeight ()](Window.md#lineheight---number)
* [loadWindowskin ()](Window.md#loadwindowskin-)
* [makeFontBigger ()](Window.md#makefontbigger-)
* [makeFontSmaller ()](Window.md#makefontsmaller-)
* [mpColor (actor)](Window.md#mpcolor-actor--string)
* [mpCostColor ()](Window.md#mpcostcolor---string)
* [mpGaugeColor1 ()](Window.md#mpgaugecolor1---string)
* [mpGaugeColor2 ()](Window.md#mpgaugecolor2---string)
* [normalColor ()](Window.md#normalcolor---string)
* [obtainEscapeCode (textState)](Window.md#obtainescapecode-textstate)
* [obtainEscapeParam (textState)](Window.md#obtainescapeparam-textstate--numberstring)
* [open ()](Window.md#open-)
* [paramchangeTextColor (change)](Window.md#paramchangetextcolor-change--string)
* [partyMemberName (partyMemberIndex)](Window.md#partymembername-partymemberindex--string)
* [pendingColor ()](Window.md#pendingcolor---string)
* [powerDownColor ()](Window.md#powerdowncolor---string)
* [powerUpColor ()](Window.md#powerupcolor---string)
* [processCharacter (textState)](Window.md#processcharacter-textstate)
* [processDrawIcon (iconIndex, textState)](Window.md#processdrawicon-iconindex-textstate)
* [processEscapeCharacter (code, textState)](Window.md#processescapecharacter-code-textstate)
* [processNewLine (textState)](Window.md#processnewline-textstate)
* [processNewPage (textState)](Window.md#processnewpage-textstate)
* [processNormalCharacter (textState)](Window.md#processnormalcharacter-textstate)
* [refreshDimmerBitmap ()](Window.md#refreshdimmerbitmap-)
* [reserveFaceImages ()](Window.md#reservefaceimages-)
* [resetFontSettings ()](Window.md#resetfontsettings-)
* [resetTextColor ()](Window.md#resettextcolor-)
* [setBackgroundType (type)](Window.md#setbackgroundtype-type)
* [show ()](Window.md#show-)
* [showBackgroundDimmer ()](Window.md#showbackgrounddimmer-)
* [standardBackOpacity ()](Window.md#standardbackopacity---number)
* [standardFontFace ()](Window.md#standardfontface---string)
* [standardFontSize ()](Window.md#standardfontsize---number)
* [standardPadding ()](Window.md#standardpadding---number)
* [systemColor ()](Window.md#systemcolor---string)
* [textColor (n)](Window.md#textcolor-n--string)
* [textPadding ()](Window.md#textpadding---number)
* [textWidth (text)](Window.md#textwidth-text--number)
* [tpColor (actor)](Window.md#tpcolor-actor--string)
* [tpCostColor ()](Window.md#tpcostcolor---string)
* [tpGaugeColor1 ()](Window.md#tpgaugecolor1---string)
* [tpGaugeColor2 ()](Window.md#tpgaugecolor2---string)
* [translucentOpacity ()](Window.md#translucentopacity---number)
* [updateBackgroundDimmer ()](Window.md#updatebackgrounddimmer-)
* [updateBackOpacity ()](Window.md#updatebackopacity-)
* [updateClose ()](Window.md#updateclose-)
* [updateOpen ()](Window.md#updateopen-)
* [updatePadding ()](Window.md#updatepadding-)
* [updateTone ()](Window.md#updatetone-)


### Methods

#### activate ()

##### Overrides:
[Window_Base.activate ()](Window_Base.md#activate-)


#### bottomRow () → {[Number](Number.md)}
行数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### callCancelHandler ()
キャンセルのハンドラを呼ぶ。


#### callHandler (symbol)
指定したハンドラを呼ぶ。

##### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | ハンドラ名 |


#### callOkHandler ()
OKのハンドラを呼ぶ。


#### callUpdateHelp ()
ヘルプのアップデートを呼ぶ。


#### clearItem (index)
指定した番号の項目を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### cursorAll () → {Boolean}
全項目を選択しているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### cursorDown (wrap)
カーソルを下に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorFixed () → {Boolean}
カーソルが固定されているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### cursorLeft (wrap)
カーソルを左に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorPagedown ()
カーソルを次ページに移動。


#### cursorPageup ()
カーソルを前ページに移動。


#### cursorRight (wrap)
カーソルを右に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorUp (wrap)
カーソルを上に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### deactivate ()

##### Overrides:

[Window_Base.deactivate ()](Window_Base.md#deactivate-)


#### deselect ()
全項目を非選択。


#### drawAllItems ()
全項目を描画。


#### drawItem (index)
指定番号の項目を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### ensureCursorVisible ()
選択カーソルを表示。


#### hideHelpWindow ()
ヘルプウィンドウを非表示。


#### hitTest (x, y) → {[Number](Number.md)}
指定座標が項目の範囲に含まれるか上から判定を行い、最初に適合した項目番号を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### index () → {[Number](Number.md)}
選択中の項目の番号を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### initialize (x, y, width, height)
 オブジェクト生成時の初期化。

##### Overrides:
[Window_Base.initialize (x, y, width, height)](Window_Base.md#initialize-x-y-width-height)


#### isCancelEnabled () → {Boolean}
キャンセルが可能か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isCancelTriggered () → {Boolean}
キャンセルが起動されたか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isContentsArea (x, y) → {Boolean}
指定座標がコンテンツの範囲内か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isCurrentItemEnabled () → {Boolean}
選択中の項目が利用可能か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isCursorMovable () → {Boolean}
カーソルが動かせるか。

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isCursorVisible () → {Boolean}
カーソルが表示中か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isHandled (symbol) → {Boolean}
指定されたハンドラが利用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | ハンドラ名 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isHorizontal () → {Boolean}
縦一列のコマンド並びか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isOkEnabled () → {Boolean}
OKが可能か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isOkTriggered () → {Boolean}
OKが起動されたか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isOpenAndActive () → {Boolean}
ウィンドウが開いてアクティブか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isTouchedInsideFrame () → {Boolean}
枠の内側をタッチされたか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isTouchOkEnabled () → {Boolean}
タッチ入力によるOKが可能か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### itemHeight () → {[Number](Number.md)}
項目の高さ(ピクセル)を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### itemRect (index) → {[Rectangle](Rectangle.md)}
指定された項目の矩形範囲を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Rectangle.html">Rectangle</a></span>
    </dd>
</dl>


#### itemRectForText (index) → {[Rectangle](Rectangle.md)}
指定された項目の文字列用の矩形範囲を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Rectangle.html">Rectangle</a></span>
    </dd>
</dl>


#### itemWidth () → {[Number](Number.md)}
項目の幅(ピクセル)を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxCols () → {[Number](Number.md)}
ウィンドウが持つ最大列(カラム)数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxItems () → {[Number](Number.md)}
ウィンドウが持つ最大項目数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxPageItems () → {[Number](Number.md)}
ページが持つ最大項目数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxPageRows () → {[Number](Number.md)}
ページが持つ最大行(ロー)数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxRows () → {[Number](Number.md)}
ウィンドウが持つ最大行(ロー)数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### maxTopRow () → {[Number](Number.md)}
最後の最上部の行(ロー)数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### onTouch (triggered)
タッチの処理。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggered` | Boolean |  |


#### playBuzzerSound ()
[ブザー]音を再生。


#### playOkSound ()
[決定]音を再生。


#### processCancel ()
キャンセルを処理。


#### processCursorMove ()
カーソルの移動を処理。


#### processHandling ()
追加されたハンドラの処理。


#### processOk ()
OKの処理。


#### processPagedown ()
ページダウンの処理。


#### processPageup ()
ページアップの処理。


#### processTouch ()
タッチ入力の処理。


#### processWheel ()
ホイール入力の処理。


#### redrawCurrentItem ()
現在の項目の再描画。


#### redrawItem (index)
指定した番号の項目の再描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### refresh ()
コンテンツの再描画。


#### reselect ()
項目の再選択。


#### resetScroll ()
スクロールを初期化。


#### row () → {[Number](Number.md)}
現在の行(ロー)数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### scrollDown ()
下にスクロール。


#### scrollUp ()
上にスクロール。


#### select (index)
指定した番号の項目を選択。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### setBottomRow (row)
下の行(ロー)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.md) | 行番号 |


#### setCursorAll (cursorAll)
全項目選択の状態を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorAll` | Boolean | 全選択か |


#### setCursorFixed (cursorFixed)
カーソルの固定状態を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorFixed` | Boolean | カーソル固定か |


#### setHandler (symbol, method)
ハンドラを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | ハンドラ名 |
| `method` | Function | ハンドラ関数 |


#### setHelpWindow (helpWindow)
ヘルプウィンドウを設定。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `helpWindow` | [Window_Help](Window_Help.html) | ヘルプウィンドウ |


#### setHelpWindowItem (item)
ヘルプウィンドウの項目を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | * | 設定する項目 |


#### setTopRow (row)
上の行(ロー)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.md) | 行番号 |


#### showHelpWindow ()
ヘルプウィンドウを表示。


#### spacing () → {[Number](Number.md)}
空白の量(ピクセル)を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### topIndex () → {[Number](Number.md)}
スクロールリストの上にある項目の番号を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### topRow () → {[Number](Number.md)}
上の行(ロー)の番号を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### update ()

#####Overrides:
[Window_Base.update ()](Window_Base.md#update-)


#### updateCursor ()
カーソルをアップデート。


#### updateHelp ()
ヘルプウィンドウをアップデート。


#### updateInputData ()
入力データをアップデート。


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
