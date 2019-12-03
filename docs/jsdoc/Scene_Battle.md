# Class: Scene_Battle

## Scene_Battle ()

#### new Scene_Battle ()

戦闘画面のシーンクラス。

[SceneManager](SceneManager.md) と [BattleManager](BattleManager.md) のふたつのマネージャで制御される。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | 戦闘スプライトセット |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) | [ステータス]ウィンドウ |
| `_partyCommandWindow` | [Window_PartyCommand](Window_PartyCommand.md) | [バーティ]コマンドウィンドウ |
| `_actorCommandWindow` | [Window_ActorCommand](Window_ActorCommand.md) | [アクター]コマンドウィンドウ |
| `_skillWindow` | [Window_BattleSkill](Window_BattleSkill.md) | [スキル]ウィンドウ |
| `_itemWindow` | [Window_BattleItem](Window_BattleItem.md) | [アイテム]ウィンドウ |
| `_actorWindow` | [Window_BattleActor](Window_BattleActor.md) | [アクター]選択ウィンドウ |
| `_enemyWindow` | [Window_BattleEnemy](Window_BattleEnemy.md) | [敵]選択ウィンドウ |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.md) | ログウィンドウ |
| `_helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |
| `_messageWindow` | [Window_Message](Window_Message.md) | メッセージウィンドウ |
| `_scrollTextWindow` | [Window_ScrollText](Window_ScrollText.md) | スクロールテキストウィンドウ |


### Extends

* [Scene_Base](Scene_Base.md)

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

* [addChild (child)](PIXI.Container.md#addchild-child--pixidisplayobject)
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
* [isActive ()](Scene_Base.md#isactive---boolean)
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)


### Methods

#### changeInputWindow ()
[パーティ]か[アクター]のコマンドウィンドウの選択、非選択を状態に応じて切り替え。


#### commandAttack ()
[攻撃]コマンドのハンドラ。


#### commandEscape ()
[逃げる]コマンドのハンドラ。


#### commandFight ()
[戦う]コマンドのハンドラ。


#### commandGuard ()
[防御]コマンドのハンドラ。


#### commandItem ()
[アイテム]コマンドのハンドラ。


#### commandSkill ()
[スキル]コマンドのハンドラ。


#### create ()
Overrides: [Scene_Base](Scene_Base.md#create-)


#### createActorCommandWindow ()
[アクター]コマンドウィンドウ([Window_ActorCommand](Window_ActorCommand.md))を生成。


#### createActorWindow ()
[アクター]選択ウィンドウ([Window_BattleActor](Window_BattleActor.md))を生成。


#### createAllWindows ()
戦闘シーンに必要なすべてのウィンドウを生成。


#### createDisplayObjects ()
表示に必要なオブジェクトを生成。
スプライトセット、ウィンドウレイヤー、ウィンドウなど。


#### createEnemyWindow ()
[敵]選択ウィンドウ([Window_BattleEnemy](Window_BattleEnemy.md))を生成。


#### createHelpWindow ()
ヘルプウィンドウ([Window_Help](Window_Help.md))を生成。


#### createItemWindow ()
[アイテム]ウィンドウ([Window_BattleItem](Window_BattleItem.md))を生成。


#### createLogWindow ()
ログウィンドウ([Window_BattleLog](Window_BattleLog.md))を生成。


#### createMessageWindow ()
メッセージウィンドウ([Window_Message](Window_Message.md))を生成。


#### createPartyCommandWindow ()
[パーティ]コマンドウィンドウ([Window_PartyCommand](Window_PartyCommand.md))を生成。

#### createScrollTextWindow ()
スクロールテキストウィンドウ([Window_ScrollText](Window_ScrollText.md))を生成。


#### createSkillWindow ()
[スキル]ウィンドウ([Window_BattleSkill](Window_BattleSkill.md))を生成。


#### createSpriteset ()
戦闘シーンに必要なスプライトセットを生成。
[アクター][敵]など。


#### createStatusWindow ()
[ステータス]ウィンドウ([Window_BattleStatus](Window_BattleStatus.md))を生成。


#### endCommandSelection ()
コマンド選択の終了処理。


#### initialize ()
Overrides:[Stage](Stage.md#initialize-)


#### isAnyInputWindowActive () → {Boolean}
入力ウィンドウがアクティブか。


#### needsSlowFadeOut () → {Boolean}
ゆっくりしたフェードアウトが必要か。


#### onActorCancel ()
[アクター]選択ウィンドウで[キャンセル]が選択された時のハンドラ


#### onActorOk ()
[アクター]選択ウィンドウで[OK]が選択された時のハンドラ


#### onEnemyCancel ()
[敵]選択ウィンドウで[キャンセル]が選択された時のハンドラ


#### onEnemyOk ()
[敵]選択ウィンドウで[OK]が選択された時のハンドラ。


#### onItemCancel ()
[アイテム]ウィンドウで[キャンセル]が選択された時のハンドラ


#### onItemOk ()
[アイテム]ウィンドウで[OK]が選択された時のハンドラ。


#### onSelectAction ()
アイテムかスキルが選択された時のハンドラ。

#### onSkillCancel ()
[スキル]ウィンドウで[キャンセル]が選択された時のハンドラ


#### onSkillOk ()
[スキル]ウィンドウで[OK]が選択された時のハンドラ。


#### refreshStatus ()
[ステータス]の回復。


#### selectActorSelection ()
[アクター]選択ウィンドウの準備。


#### selectEnemySelection ()
[敵]選択ウィンドウの準備。


#### selectNextCommand ()
ひとつ先のコマンドを選択。


#### selectPreviousCommand ()
ひとつ前のコマンドを選択。


#### start ()
Overrides:[Scene_Base](Scene_Base.md#start-)


#### startActorCommandSelection ()
[アクター]コマンドの選択開始。


#### startPartyCommandSelection ()
[パーティ]コマンドの選択開始。

#### stop ()
Overrides:[Scene_Base](Scene_Base.md#stop-)


#### terminate ()
Overrides:[Scene_Base](Scene_Base.md#terminate-)


#### update ()
Overrides:[Scene_Base](Scene_Base.md#update-)


#### updateBattleProcess ()
戦闘段階のアップデート。

#### updateStatusWindow ()
[ステータス]ウィンドウのアップデート。


#### updateWindowPositions ()
ウィンドウ位置のアップデート。


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
