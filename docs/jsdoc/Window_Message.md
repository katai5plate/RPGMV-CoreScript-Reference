# Class: Window_Message

## Window_Message ()

#### new Window_Message ()
[文章の表示]をするウィンドウ。

標準では [Scene_Map](Scene_Map.md) と [Scene_Battle](Scene_Battle.md) で生成される。

文章などの設定は [Game_Message](Game_Message.md)( [$gameMessage](global.md#$gamemessage-game_message) ) を通して行われる。


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_background` | [Number](Number.md) | [背景]のタイプ |
| `_positionType` | [Number](Number.md) | [ウィンドウ位置] |
| `_waitCount` | [Number](Number.md) | 待機カウント |
| `_faceBitmap` | [Bitmap](Bitmap.md) | 顔の画像 |
| `_pauseSkip` | Boolean | 入力待ちをとばすか |
| `_showFast` | Boolean | 一括表示するか |
| `_lineShowFast` | Boolean | 行を一括表示するか |
| `_goldWindow` | [Window_Gold](Window_Gold.md) | 所持金ウィンドウ |
| `_choiceWindow` | [Window_ChoiceList](Window_ChoiceList.md) | 選択肢ウィンドウ |
| `_numberWindow` | [Window_NumberInput](Window_NumberInput.md) | 数値入力ウィンドウ |
| `_itemWindow` | [Window_EventItem](Window_EventItem.md) | アイテム選択ウィンドウ |


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
* [activate ()](Window.md#activate-)* [actorName (actorIndex)](Window.md#actorname-actorindex--string)* [calcTextHeight (textState, all)](Window.md#calctextheight-textstate-all--number)* [canvasToLocalX (x)](Window.md#canvastolocalx-x--number)* [canvasToLocalY (y)](Window.md#canvastolocaly-y--number)* [changePaintOpacity (enabled)](Window.md#changepaintopacity-enabled)* [changeTextColor (color)](Window.md#changetextcolor-color)* [close ()](Window.md#close-)* [contentsWidth ()](Window.md#contentswidth---number)* [convertEscapeCharacters (text)](Window.md#convertescapecharacters-text--string)* [createContents ()](Window.md#createcontents-)* [crisisColor ()](Window.md#crisiscolor---string)* [deactivate ()](Window.md#deactivate-)* [deathColor ()](Window.md#deathcolor---string)* [dimColor1 ()](Window.md#dimcolor1---string)* [dimColor2 ()](Window.md#dimcolor2---string)* [drawActorCharacter (actor, x, y)](Window.md#drawactorcharacter-actor-x-y)* [drawActorClass (actor, x, y, width)](Window.md#drawactorclass-actor-x-y-width)* [drawActorFace (actor, x, y, width, height)](Window.md#drawactorface-actor-x-y-width-height)* [drawActorHp (actor, x, y, width)](Window.md#drawactorhp-actor-x-y-width)* [drawActorIcons (actor, x, y, width)](Window.md#drawactoricons-actor-x-y-width)* [drawActorLevel (actor, x, y)](Window.md#drawactorlevel-actor-x-y)* [drawActorMp (actor, x, y, width)](Window.md#drawactormp-actor-x-y-width)* [drawActorName (actor, x, y, width)](Window.md#drawactorname-actor-x-y-width)* [drawActorNickname (actor, x, y, width)](Window.md#drawactornickname-actor-x-y-width)* [drawActorSimpleStatus (actor, x, y, width)](Window.md#drawactorsimplestatus-actor-x-y-width)* [drawActorTp (actor, x, y, width)](Window.md#drawactortp-actor-x-y-width)* [drawCharacter (characterName, characterIndex, x, y)](Window.md#drawcharacter-charactername-characterindex-x-y)* [drawCurrencyValue (value, unit, x, y, width)](Window.md#drawcurrencyvalue-value-unit-x-y-width)* [drawCurrentAndMax (current, max, x, y, width, color1, color2)](Window.md#md#drawcurrentandmax-current-max-x-y-width-color1-color2)* [drawFace (faceName, faceIndex, x, y, width opt, height opt)](Window.md#drawface-facename-faceindex-x-y-width-opt-height-opt)* [drawGauge (x, y, width, rate, color1, color2)](Window.md#drawgauge-x-y-width-rate-color1-color2)* [drawIcon (iconIndex, x, y)](Window.md#drawicon-iconindex-x-y)* [drawItemName (item, x, y, width)](Window.md#drawitemname-item-x-y-width)* [drawText (text, x, y, maxWidth, align)](Window.md#drawtext-text-x-y-maxwidth-align)* [drawTextEx (text, x, y)](Window.md#drawtextex-text-x-y--number)* [fittingHeight (numLines)](Window.md#fittingheight-numlines--number)* [gaugeBackColor ()](Window.md#gaugebackcolor---string)* [hide ()](Window.md#hide-)* [hideBackgroundDimmer ()](Window.md#hidebackgrounddimmer-)* [hpColor (actor)](Window.md#hpcolor-actor--string)* [hpGaugeColor1 ()](Window.md#hpgaugecolor1---string)* [hpGaugeColor2 ()](Window.md#hpgaugecolor2---string)* [isClosing ()](Window.md#isclosing---boolean)* [isOpening ()](Window.md#isopening---boolean)* [lineHeight ()](Window.md#lineheight---number)* [loadWindowskin ()](Window.md#loadwindowskin-)* [makeFontBigger ()](Window.md#makefontbigger-)* [makeFontSmaller ()](Window.md#makefontsmaller-)* [mpColor (actor)](Window.md#mpcolor-actor--string)* [mpCostColor ()](Window.md#mpcostcolor---string)* [mpGaugeColor1 ()](Window.md#mpgaugecolor1---string)* [mpGaugeColor2 ()](Window.md#mpgaugecolor2---string)* [normalColor ()](Window.md#normalcolor---string)* [obtainEscapeCode (textState)](Window.md#obtainescapecode-textstate)* [obtainEscapeParam (textState)](Window.md#obtainescapeparam-textstate--numberstring)* [open ()](Window.md#open-)* [paramchangeTextColor (change)](Window.md#paramchangetextcolor-change--string)* [partyMemberName (partyMemberIndex)](Window.md#partymembername-partymemberindex--string)* [pendingColor ()](Window.md#pendingcolor---string)* [powerDownColor ()](Window.md#powerdowncolor---string)* [powerUpColor ()](Window.md#powerupcolor---string)* [processCharacter (textState)](Window.md#processcharacter-textstate)* [processDrawIcon (iconIndex, textState)](Window.md#processdrawicon-iconindex-textstate)* [processEscapeCharacter (code, textState)](Window.md#processescapecharacter-code-textstate)* [processNormalCharacter (textState)](Window.md#processnormalcharacter-textstate)* [refreshDimmerBitmap ()](Window.md#refreshdimmerbitmap-)* [reserveFaceImages ()](Window.md#reservefaceimages-)* [resetFontSettings ()](Window.md#resetfontsettings-)* [resetTextColor ()](Window.md#resettextcolor-)* [setBackgroundType (type)](Window.md#setbackgroundtype-type)* [show ()](Window.md#show-)* [showBackgroundDimmer ()](Window.md#showbackgrounddimmer-)* [standardBackOpacity ()](Window.md#standardbackopacity---number)* [standardFontFace ()](Window.md#standardfontface---string)* [standardFontSize ()](Window.md#standardfontsize---number)* [standardPadding ()](Window.md#standardpadding---number)* [systemColor ()](Window.md#systemcolor---string)* [textColor (n)](Window.md#textcolor-n--string)* [textPadding ()](Window.md#textpadding---number)* [textWidth (text)](Window.md#textwidth-text--number)* [tpColor (actor)](Window.md#tpcolor-actor--string)* [tpCostColor ()](Window.md#tpcostcolor---string)* [tpGaugeColor1 ()](Window.md#tpgaugecolor1---string)* [tpGaugeColor2 ()](Window.md#tpgaugecolor2---string)* [translucentOpacity ()](Window.md#translucentopacity---number)
* [updateBackgroundDimmer ()](Window.md#updatebackgrounddimmer-)* [updateBackOpacity ()](Window.md#updatebackopacity-)* [updateClose ()](Window.md#updateclose-)* [updateOpen ()](Window.md#updateopen-)* [updatePadding ()](Window.md#updatepadding-)* [updateTone ()](Window.md#updatetone-)


### Methods

#### areSettingsChanged () → {Boolean}


Returns true if the message window settings have been changed.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### canStart () → {Boolean}


Returns true if the message window can start.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### checkToNotClose ()


#### clearFlags ()


#### createSubWindows ()


Creates the sub windows for the message window.


#### doesContinue () → {Boolean}


Returns true if the message window still has text and settings have not changed.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### initialize ()

##### Overrides:
[Window_Base.initialize ()](Window_Base.md#initialize-)


#### initMembers ()


#### isAnySubWindowActive () → {Boolean}


Returns true if any sub window is active.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isEndOfText (textState) → {Boolean}


Returns true if there is no text left to display in the message window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isTriggered () → {Boolean}


Returns true if the ok or cancel inputs have been triggered multiple times.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### loadMessageFace ()



#### needsNewPage (textState) → {Boolean}


Returns true if the text state needs a new page to display text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### newLineX () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### newPage (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |


#### numVisibleRows () → {[Number](Number.md)}


Returns the number of visible rows within the message window.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### onEndOfText ()


Handler for when there is no text left to display within the message window.


#### processNewLine (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

##### Overrides:[Window.processNewLine (textState)](Window.md#processnewline-textstate)


#### processNewPage (textState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) |  |

##### Overrides:
[Window.processNewPage (textState)](Window.md#processnewpage-textstate)


#### startInput () → {Boolean}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### startMessage ()


Starts the displaying of the message within the message window.


#### startPause ()


Starts a pause for the message window; this will only be lifted if the user presses a button.


#### startWait (count)


Starts a wait for the message window.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `count` | [Number](Number.md) |  |


#### subWindows () → {[Array](Array.md).<[Window_Base](Window_Base.md)>}


Returns the sub windows attached to the message window.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Window_Base&gt;</span>
    </dd>
</dl>


#### terminateMessage ()


Terminates the message and closes the gold and message window.


#### update ()

##### Overrides:
[Window_Base.update ()](Window_Base.md#update-)


#### updateBackground ()


Updates the background of the message window.


#### updateInput () → {Boolean}


Updates input when the message window is processing.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### updateLoading ()


#### updateMessage () → {Boolean}


Updates the message.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### updatePlacement ()


Updates the placement of the message window.


#### updateShowFast ()


#### updateWait () → {Boolean}


Updates the wait of the message window.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### windowHeight () → {[Number](Number.md)}


Returns the height of the window.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### windowWidth () → {[Number](Number.md)}


Returns the width of the window.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
