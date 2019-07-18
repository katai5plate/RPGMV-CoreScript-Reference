# Class: Game_Event

## Game_Event ()

#### new Game_Event ()

 マップに配置する[イベント]を定義したオブジェクト。
 
 [RPG.Event](RPG.Event.md) を得る [Game_Event#event](Game_Event.md#event---rpgevent) メソッドなどを含む。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_mapId` | [Number](Number.md) | マップID |
| `_eventId` | [Number](Number.md) | イベントID |
| `_moveType` | [Number](Number.md) | 自律移動[タイプ] |
| `_trigger` | [Number](Number.md) | トリガ |
| `_starting` | Boolean | 開始しているか |
| `_erased` | Boolean | 削除されているか |
| `_pageIndex` | [Number](Number.md) | ページ番号 |
| `_originalPattern` | [Number](Number.md) | オリジナルパターン |
| `_originalDirection` | [Number](Number.md) | オリジナル向き |
| `_prelockDirection` | [Number](Number.md) | 前にロックされた方向 |
| `_locked` | Boolean | ロックされているか |

### Extends

* [Game_Character](Game_Character.md)


### Inherited From

#### [Game_CharacterBase](Game_CharacterBase.md)

* [animationId ()](Game_CharacterBase.md#animationid---number)
* [animationWait ()](Game_CharacterBase.md#animationwait---number)
* [balloonId ()](Game_CharacterBase.md#balloonid---number)
* [blendMode ()](Game_CharacterBase.md#blendmode---number)
* [bushDepth ()](Game_CharacterBase.md#bushdepth---number)
* [canPass (x, y, d)](Game_CharacterBase.md#canpass-x-y-d--boolean)
* [canPassDiagonally (x, y, horz, vert)](Game_CharacterBase.md#canpassdiagonally-x-y-horz-vert--boolean)
* [characterIndex ()](Game_CharacterBase.md#characterindex---number)
* [characterName ()](Game_CharacterBase.md#charactername---string)
* [checkEventTriggerTouch (x, y)](Game_CharacterBase.md#checkeventtriggertouch-x-y--boolean)
* [checkEventTriggerTouchFront (d)](Game_CharacterBase.md#checkeventtriggertouchfront-d)
* [checkStop (threshold)](Game_CharacterBase.md#checkstop-threshold--boolean)
* [copyPosition (character)](Game_CharacterBase.md#copyposition-character)
* [direction ()](Game_CharacterBase.md#direction---number)
* [distancePerFrame ()](Game_CharacterBase.md#distanceperframe---number)
* [endAnimation ()](Game_CharacterBase.md#endanimation-)
* [endBalloon ()](Game_CharacterBase.md#endballoon-)
* [hasStepAnime ()](Game_CharacterBase.md#hasstepanime---boolean)
* [hasWalkAnime ()](Game_CharacterBase.md#haswalkanime---boolean)
* [increaseSteps ()](Game_CharacterBase.md#increasesteps-)
* [isAnimationPlaying ()](Game_CharacterBase.md#isanimationplaying---boolean)
* [isBalloonPlaying ()](Game_CharacterBase.md#isballoonplaying---boolean)
* [isCollidedWithCharacters (x, y)](Game_CharacterBase.md#iscollidedwithcharacters-x-y--boolean)
* [isCollidedWithEvents (x, y)](Game_CharacterBase.md#iscollidedwithevents-x-y--boolean)
* [isCollidedWithVehicles (x, y)](Game_CharacterBase.md#iscollidedwithvehicles-x-y--boolean)
* [isDashing ()](Game_CharacterBase.md#isdashing---boolean)
* [isDebugThrough ()](Game_CharacterBase.md#isdebugthrough---boolean)
* [isDirectionFixed ()](Game_CharacterBase.md#isdirectionfixed---boolean)
* [isJumping ()](Game_CharacterBase.md#isjumping---boolean)
* [isMapPassable (x, y, d)](Game_CharacterBase.md#ismappassable-x-y-d--boolean)
* [isMovementSucceeded (x opt, y opt)](Game_CharacterBase.md#ismovementsucceeded-x-opt-y-opt--boolean)
* [isMoving ()](Game_CharacterBase.md#ismoving---boolean)
* [isNearTheScreen ()](Game_CharacterBase.md#isnearthescreen---boolean)
* [isNormalPriority ()](Game_CharacterBase.md#isnormalpriority---boolean)
* [isObjectCharacter ()](Game_CharacterBase.md#isobjectcharacter---boolean)
* [isOnBush ()](Game_CharacterBase.md#isonbush---boolean)
* [isOnLadder ()](Game_CharacterBase.md#isonladder---boolean)
* [isOriginalPattern ()](Game_CharacterBase.md#isoriginalpattern---boolean)
* [isStopping ()](Game_CharacterBase.md#isstopping---boolean)
* [isThrough ()](Game_CharacterBase.md#isthrough---boolean)
* [isTile ()](Game_CharacterBase.md#istile---boolean)
* [isTransparent ()](Game_CharacterBase.md#istransparent---boolean)
* [jump (xPlus, yPlus)](Game_CharacterBase.md#jump-xplus-yplus)
* [jumpHeight ()](Game_CharacterBase.md#jumpheight---number)
* [locate (x, y)](Game_CharacterBase.md#locate-x-y)
* [maxPattern ()](Game_CharacterBase.md#maxpattern---number)
* [moveDiagonally (horz, vert)](Game_CharacterBase.md#movediagonally-horz-vert)
* [moveFrequency ()](Game_CharacterBase.md#movefrequency---number)
* [moveSpeed ()](Game_CharacterBase.md#movespeed---number)
* [moveStraight (d)](Game_CharacterBase.md#movestraight-d)
* [opacity ()](Game_CharacterBase.md#opacity---number)
* [pattern ()](Game_CharacterBase.md#pattern---number)
* [pos (x, y)](Game_CharacterBase.md#pos-x-y--boolean)
* [posNt (x, y)](Game_CharacterBase.md#posnt-x-y--boolean)
* [realMoveSpeed ()](Game_CharacterBase.md#realmovespeed---number)
* [refreshBushDepth ()](Game_CharacterBase.md#refreshbushdepth-)
* [regionId ()](Game_CharacterBase.md#regionid---number)
* [requestAnimation (animationId)](Game_CharacterBase.md#requestanimation-animationid)
* [requestBalloon (balloonId)](Game_CharacterBase.md#requestballoon-balloonid)
* [resetPattern ()](Game_CharacterBase.md#resetpattern-)
* [resetStopCount ()](Game_CharacterBase.md#resetstopcount-)
* [reverseDir (d)](Game_CharacterBase.md#reversedir-d--number)
* [screenX ()](Game_CharacterBase.md#screenx---number)
* [screenY ()](Game_CharacterBase.md#screeny---number)
* [screenZ ()](Game_CharacterBase.md#screenz---number)
* [scrolledX ()](Game_CharacterBase.md#scrolledx---number)
* [scrolledY ()](Game_CharacterBase.md#scrolledy---number)
* [setBlendMode (blendMode)](Game_CharacterBase.md#setblendmode-blendmode)
* [setDirection (d)](Game_CharacterBase.md#setdirection-d)
* [setDirectionFix (directionFix)](Game_CharacterBase.md#setdirectionfix-directionfix)
* [setImage (characterName, characterIndex)](Game_CharacterBase.md#setimage-charactername-characterindex)
* [setMoveFrequency (moveFrequency)](Game_CharacterBase.md#setmovefrequency-movefrequency)
* [setMovementSuccess (success)](Game_CharacterBase.md#setmovementsuccess-success)
* [setMoveSpeed (moveSpeed)](Game_CharacterBase.md#setmovespeed-movespeed)
* [setOpacity (opacity)](Game_CharacterBase.md#setopacity-opacity)
* [setPattern (pattern)](Game_CharacterBase.md#setpattern-pattern)
* [setPosition (x, y)](Game_CharacterBase.md#setposition-x-y)
* [setPriorityType (priorityType)](Game_CharacterBase.md#setprioritytype-prioritytype)
* [setStepAnime (stepAnime)](Game_CharacterBase.md#setstepanime-stepanime)
* [setThrough (through)](Game_CharacterBase.md#setthrough-through)
* [setTileImage (tileId)](Game_CharacterBase.md#settileimage-tileid)
* [setTransparent (transparent)](Game_CharacterBase.md#settransparent-transparent)
* [setWalkAnime (walkAnime)](Game_CharacterBase.md#setwalkanime-walkanime)
* [shiftY ()](Game_CharacterBase.md#shifty---number)
* [startAnimation ()](Game_CharacterBase.md#startanimation-)
* [startBalloon ()](Game_CharacterBase.md#startballoon-)
* [straighten ()](Game_CharacterBase.md#straighten-)
* [terrainTag ()](Game_CharacterBase.md#terraintag---number)
* [tileId ()](Game_CharacterBase.md#tileid---number)
* [updateAnimation ()](Game_CharacterBase.md#updateanimation-)
* [updateAnimationCount ()](Game_CharacterBase.md#updateanimationcount-)
* [updateJump ()](Game_CharacterBase.md#updatejump-)
* [updateMove ()](Game_CharacterBase.md#updatemove-)
* [updatePattern ()](Game_CharacterBase.md#updatepattern-)


#### [Game_Character](Game_Character)

* [advanceMoveRouteIndex ()](Game_Character.md#advancemoverouteindex-)
* [deltaXFrom (x)](Game_Character.md#deltaxfrom-x--number)
* [deltaYFrom (y)](Game_Character.md#deltayfrom-y--number)
* [findDirectionTo (goalX, goalY)](Game_Character.md#finddirectionto-goalx-goaly--number)
* [forceMoveRoute (moveRoute)](Game_Character.md#forcemoveroute-moveroute)
* [isMoveRouteForcing ()](Game_Character.md#ismoverouteforcing---boolean)
* [memorizeMoveRoute ()](Game_Character.md#memorizemoveroute-)
* [moveAwayFromCharacter (character)](Game_Character.md#moveawayfromcharacter-character)
* [moveAwayFromPlayer ()](Game_Character.md#moveawayfromplayer-)
* [moveBackward ()](Game_Character.md#movebackward-)
* [moveForward ()](Game_Character.md#moveforward-)
* [moveRandom ()](Game_Character.md#moverandom-)
* [moveTowardCharacter (character)](Game_Character.md#movetowardcharacter-character)
* [moveTowardPlayer ()](Game_Character.md#movetowardplayer-)
* [processMoveCommand (command)](Game_Character.md#processmovecommand-command)
* [processRouteEnd ()](Game_Character.md#processrouteend-)
* [restoreMoveRoute ()](Game_Character.md#restoremoveroute-)
* [searchLimit ()](Game_Character.md#searchlimit---number)
* [setMoveRoute (moveRoute)](Game_Character.md#setmoveroute-moveroute)
* [swap (character)](Game_Character.md#swap-character)
* [turn180 ()](Game_Character.md#turn180-)
* [turnAwayFromCharacter (character)](Game_Character.md#turnawayfromcharacter-character)
* [turnAwayFromPlayer ()](Game_Character.md#turnawayfromplayer-)
* [turnLeft90 ()](Game_Character.md#turnleft90-)
* [turnRandom ()](Game_Character.md#turnrandom-)
* [turnRight90 ()](Game_Character.md#turnright90-)
* [turnRightOrLeft90 ()](Game_Character.md#turnrightorleft90-)
* [turnTowardCharacter (character)](Game_Character.md#turntowardcharacter-character)
* [turnTowardPlayer ()](Game_Character.md#turntowardplayer-)
* [updateRoutineMove ()](Game_Character.md#updateroutinemove-)


### Methods



#### checkEventTriggerAuto ()
[トリガー:自動実行]の[イベント]を実行。


#### checkEventTriggerTouch (x, y)
 タッチ(クリック)で発生する[イベント]を実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

##### Overrides:
[Game_Character#checkEventTriggerTouch](Game_Character.md#checkEventTriggerTouch)


#### clearPageSettings ()
 イベントページの設定を削除。


#### clearStartingFlag ()
[イベント]開始フラグを削除。



#### erase ()
[イベント]を削除。


#### event () → {[RPG.Event](RPG.Event.md)}
[イベント]情報オブジェクトを返す。


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a href="RPG.Event.html">RPG.Event</a></span>
	</dd>
</dl>


#### eventId () → {[Number](Number.md)}
 イベントIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### findProperPageIndex () → {[Number](Number.md)}
[出現条件]に合ったイベントのページ番号を返す。

##### Returns:

 ページ番号(-1: 見つからない)
<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### forceMoveRoute (moveRoute)
[移動ルート]を強制。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) |  |

##### Overrides:
[Game_Character#forceMoveRoute](Game_Character.md#forceMoveRoute)


#### initialize ()
 オブジェクト生成時の初期化。

##### Overrides:
[Game_Character#initialize](Game_Character.md#initialize)


#### initMembers ()
 メンバ変数を初期化。
 
##### Overrides:
[Game_Character#initMembers](Game_Character.md#initMembers)


#### isCollidedWithCharacters (x, y) → {Boolean}
 指定位置がキャラによって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

##### Overrides:
[Game_Character#isCollidedWithCharacters](Game_Character.md#isCollidedWithCharacters)

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isCollidedWithEvents (x, y) → {Boolean}
 指定位置が[イベント]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

##### Overrides:
[Game_Character#isCollidedWithEvents](Game_Character.md#isCollidedWithEvents)

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isCollidedWithPlayerCharacters (x, y) → {Boolean}
 指定位置がプレイヤーキャラクタによって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isNearThePlayer () → {Boolean}
 プレイヤーキャラクタに近い位置にいるか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOriginalPattern () → {Boolean}
[画像]が初期パターンか。

##### Overrides:
[Game_Character#isOriginalPattern](Game_Character.md#isOriginalPattern)


#### isStarting () → {Boolean}
[イベント]が開始しているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isTriggerIn (triggers) → {Boolean}
 指定した配列に、この[イベント]の[トリガー]が含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggers` | [Array](Array.md).<[Number](Number.md)> |  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### list () → {[Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)>}
 現在の[イベントページ]の[イベントコマンド]の配列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a href="Array.html">Array</a>.&lt;<a href="RPG.EventCommand.html">RPG.EventCommand</a>&gt;</span>
	</dd>
</dl>


#### locate (x, y)
 現在のマップ内での[イベントの位置設定]。 [Game_CharacterBase#setPosition](Game_CharacterBase.html#setPosition) と異なり、姿勢などを初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

##### Overrides:
[Game_Character#locate](Game_Character.md#locate)


#### lock ()
 ロックする。


#### meetsConditions (page) → {Boolean}
 指定したページの[出現条件]が満たされているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `page` | [RPG.EventPage](RPG.EventPage.md) |  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### moveTypeCustom ()
[タイプ:カスタム]移動。


#### moveTypeRandom ()
[タイプ:ランダム]移動。


#### moveTypeTowardPlayer ()
[タイプ:プレイヤーに近づく]移動。


#### page () → {[RPG.EventPage](RPG.EventPage.md)}
 現在の[イベントページ]情報オブジェクトを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a href="RPG.EventPage.html">RPG.EventPage</a></span>
	</dd>
</dl>


#### refresh ()
[イベント]を更新。


#### resetPattern ()
[画像]を初期パターンに戻す。

##### Overrides:
[Game_Character#resetPattern](Game_Character.md#resetPattern)


#### setupPage ()
 イベントページを準備。


#### setupPageSettings ()
 イベントページの設定を準備。


#### start ()
[イベント]を開始。



#### stopCountThreshold () → {[Number](Number.md)}
 停止カウントの閾値を返す。[頻度]により異なる。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### unlock ()
 ロックを解除。


#### update ()
[イベント]をアップデート。

##### Overrides:
[Game_Character#update](Game_Character.md#update)


#### updateParallel ()
[トリガー:並列処理]をアップデート。


#### updateSelfMovement ()
[自律移動]のアップデート。


#### updateStop ()
 停止状態をアップデート。
 
##### Overrides:
[Game_Character#updateStop](Game_Character.md#updateStop)


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
