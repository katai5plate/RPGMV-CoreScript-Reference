# Class: Game_Player

## Game_Player ()

#### new Game_Player ()

(乗り物を含む)プレイヤーキャラクタを定義したクラス。マップの[場所移動]も含む。 大域変数 [$gamePlayer](global.html#$gamePlayer) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_vehicleType` | [String](String.md) |  |
| `_vehicleGettingOn` | Boolean |  |
| `_vehicleGettingOff` | Boolean |  |
| `_dashing` | Boolean |  |
| `_needsMapReload` | Boolean |  |
| `_transferring` | Boolean |  |
| `_newMapId` | [Number](Number.md) |  |
| `_newX` | [Number](Number.md) |  |
| `_newY` | [Number](Number.md) |  |
| `_newDirection` | [Number](Number.md) |  |
| `_fadeType` | [Number](Number.md) |  |
| `_followers` | [Game_Followers](Game_Followers.md) |  |
| `_encounterCount` | [Number](Number.md) |  |


### Extends

* [Game_Character](Game_Character.md)

### Overrides

#### [Game_Character](Game_Character.md)
* [checkEventTriggerTouch (x, y)](Game_Character.md#checkEventTriggerTouch)
* [increaseSteps ()](Game_Character.md#increaseSteps)
* [initialize ()](Game_Character.md#initialize)
* [initMembers ()](Game_Character.md#initMembers)
* [isDashing ()](Game_Character.md#isDashing)
* [isDebugThrough ()](Game_Character.md#isDebugThrough)
* [isMapPassable (x, y, d)](Game_Character.md#isMapPassable)
* [isStopping () ](Game_Character.md#isStopping)
* [jump (xPlus, yPlus)](Game_Character.md#jump)
* [locate (x, y)](Game_Character.md#locate)
* [moveDiagonally (horz, vert)](Game_Character.md#moveDiagonally)
* [moveStraight (d)](Game_Character.md#moveStraight)
* [update (sceneActive opt)](Game_Character.md#update)



### Inherited From

#### [Game_CharacterBase](Game_CharacterBase.md)

* [animationId ()](Game_CharacterBase.md#animationid---number)
* [animationWait ()](Game_CharacterBase.md#animationwait---number)
* [balloonId ()](Game_CharacterBase.md#balloonid---number)
* [blendMode ()](Game_CharacterBase.md#blendmode---number)
* [bushDepth ()](Game_CharacterBase.md#bushdepth---number)
* [canPass (x, y, d)](Game_CharacterBase.md#canPass)
* [canPassDiagonally (x, y, horz, vert)](Game_CharacterBase.md#canPassDiagonally)
* [characterIndex ()](Game_CharacterBase.md#characterIndex)
* [characterName ()](Game_CharacterBase.md#characterName)
* [checkEventTriggerTouch (x, y)](Game_CharacterBase.md#checkEventTriggerTouch)
* [checkEventTriggerTouchFront (d)](Game_CharacterBase.md#checkEventTriggerTouchFront)
* [checkStop (threshold)](Game_CharacterBase.md#checkStop)
* [copyPosition (character)](Game_CharacterBase.md#copyPosition)
* [endAnimation ()](Game_CharacterBase.md#endAnimation)
* [endBalloon ()](Game_CharacterBase.md#endBalloon)
* [direction ()](Game_CharacterBase.md#direction)
* [distancePerFrame ()](Game_CharacterBase.md#distancePerFrame)
* [hasStepAnime ()](Game_CharacterBase.md#hasStepAnime)
* [hasWalkAnime ()](Game_CharacterBase.md#hasWalkAnime)
* [increaseSteps ()](Game_CharacterBase.md#increaseSteps)
* [isAnimationPlaying ()](Game_CharacterBase.md#isAnimationPlaying)
* [isBalloonPlaying ()](Game_CharacterBase.md#isBalloonPlaying)
* [isCollidedWithCharacters (x, y)](Game_CharacterBase.md#isCollidedWithCharacters)
* [isCollidedWithEvents (x, y)](Game_CharacterBase.md#isCollidedWithEvents)
* [isCollidedWithVehicles (x, y)](Game_CharacterBase.md#isCollidedWithVehicles)
* [isDashing ()](Game_CharacterBase.md#isDashing)
* [isDebugThrough ()](Game_CharacterBase.md#isDebugThrough)
* [isDirectionFixed ()](Game_CharacterBase.md#isDirectionFixed)
* [isJumping ()](Game_CharacterBase.md#isJumping)
* [isMapPassable (x, y, d)](Game_CharacterBase.md#isMapPassable)
* [isMovementSucceeded (x opt, y opt)](Game_CharacterBase.md#isMovementSucceeded)
* [isMoving ()](Game_CharacterBase.md#isMoving)
* [isNearTheScreen ()](Game_CharacterBase.md#isNearTheScreen)
* [isNormalPriority ()](Game_CharacterBase.md#isNormalPriority)
* [isObjectCharacter ()](Game_CharacterBase.md#isObjectCharacter)
* [isOnBush ()](Game_CharacterBase.md#isOnBush)
* [isOnLadder ()](Game_CharacterBase.md#isOnLadder)
* [isOriginalPattern ()](Game_CharacterBase.md#isOriginalPattern)
* [isStopping ()](Game_CharacterBase.md#isStopping)
* [isThrough ()](Game_CharacterBase.md#isThrough)
* [isTile ()](Game_CharacterBase.md#isTile)
* [isTransparent ()](Game_CharacterBase.md#isTransparent)
* [jump (xPlus, yPlus)](Game_CharacterBase.md#jump)
* [jumpHeight ()](Game_CharacterBase.md#jumpHeight)
* [locate (x, y)](Game_CharacterBase.md#locate)
* [maxPattern ()](Game_CharacterBase.md#maxPattern)
* [moveDiagonally (horz, vert)](Game_CharacterBase.md#moveDiagonally)
* [moveFrequency ()](Game_CharacterBase.md#moveFrequency)
* [moveSpeed ()](Game_CharacterBase.md#moveSpeed)
* [moveStraight (d)](Game_CharacterBase.md#moveStraight)
* [opacity ()](Game_CharacterBase.md#opacity)
* [pattern ()](Game_CharacterBase.md#pattern)
* [pos (x, y)](Game_CharacterBase.md#pos)
* [posNt (x, y)](Game_CharacterBase.md#posNt)
* [realMoveSpeed ()](Game_CharacterBase.md#realMoveSpeed)
* [refreshBushDepth ()](Game_CharacterBase.md#refreshBushDepth)
* [regionId ()](Game_CharacterBase.md#regionId)
* [requestAnimation (animationId)](Game_CharacterBase.md#requestAnimation)
* [requestBalloon (balloonId)](Game_CharacterBase.md#requestBalloon)
* [resetPattern ()](Game_CharacterBase.md#resetPattern)
* [resetStopCount ()](Game_CharacterBase.md#resetStopCount)
* [reverseDir (d)](Game_CharacterBase.md#reverseDir)
* [screenX ()](Game_CharacterBase.md#screenX)
* [screenY ()](Game_CharacterBase.md#screenY)
* [screenZ ()](Game_CharacterBase.md#screenZ)
* [scrolledX ()](Game_CharacterBase.md#scrolledX)
* [scrolledY ()](Game_CharacterBase.md#scrolledY)
* [setBlendMode (blendMode)](Game_CharacterBase.md#setBlendMode)
* [setDirection (d)](Game_CharacterBase.md#setDirection)
* [setDirectionFix (directionFix)](Game_CharacterBase.md#setDirectionFix)
* [setImage (characterName, characterIndex)](Game_CharacterBase.md#setImage)
* [setMoveFrequency (moveFrequency)](Game_CharacterBase.md#setMoveFrequency)
* [setMovementSuccess (success)](Game_CharacterBase.md#setMovementSuccess)
* [setMoveSpeed (moveSpeed)](Game_CharacterBase.md#setMoveSpeed)
* [setOpacity (opacity)](Game_CharacterBase.md#setOpacity)
* [setPattern (pattern)](Game_CharacterBase.md#setPattern)
* [setPosition (x, y)](Game_CharacterBase.md#setPosition)
* [setPriorityType (priorityType)](Game_CharacterBase.md#setPriorityType)
* [setStepAnime (stepAnime)](Game_CharacterBase.md#setStepAnime)
* [setThrough (through)](Game_CharacterBase.md#setThrough)
* [setTileImage (tileId)](Game_CharacterBase.md#setTileImage)
* [setTransparent (transparent)](Game_CharacterBase.md#setTransparent)
* [setWalkAnime (walkAnime)](Game_CharacterBase.md#setWalkAnime)
* [shiftY ()](Game_CharacterBase.md#shiftY)
* [startAnimation ()](Game_CharacterBase.md#startAnimation)
* [startBalloon ()](Game_CharacterBase.md#startBalloon)
* [straighten ()](Game_CharacterBase.md#straighten)
* [terrainTag ()](Game_CharacterBase.md#terrainTag)
* [tileId ()](Game_CharacterBase.md#tileId)
* [turnTowardPlayer ()](Game_CharacterBase.md#update)
* [updateAnimation ()](Game_CharacterBase.md#updateAnimation)
* [updateAnimationCount ()](Game_CharacterBase.md#updateAnimationCount)
* [updateJump ()](Game_CharacterBase.md#updateJump)
* [updateMove ()](Game_CharacterBase.md#updateMove)
* [updatePattern ()](Game_CharacterBase.md#updatePattern)


#### [Game_Character](Game_Character)

* [advanceMoveRouteIndex ()](Game_Character.md#advanceMoveRouteIndex)
* [deltaXFrom (x)](Game_Character.md#deltaXFrom)
* [deltaYFrom (y)(Game_Character.md#deltaYFrom)
* [findDirectionTo (goalX, goalY)](Game_Character.md#findDirectionTo)
* [ forceMoveRoute (moveRoute)](Game_Character.md#forceMoveRoute)
* [isMoveRouteForcing ()](Game_Character.md#isMoveRouteForcing)
* [memorizeMoveRoute ()](Game_Character.md#memorizeMoveRoute)
* [moveAwayFromCharacter (character)](Game_Character.md#moveAwayFromCharacter)
* [moveAwayFromPlayer ()](Game_Character.md#moveAwayFromPlayer)
* [moveBackward ()](Game_Character.md#moveBackward)
* [moveForward ()](Game_Character.md#moveForward)
* [moveRandom ()](Game_Character.md#moveRandom)
* [moveTowardCharacter (character)](Game_Character.md#moveTowardCharacter)
* [moveTowardPlayer ()](Game_Character.md#moveTowardPlayer)
* [processMoveCommand (command)](Game_Character.md#processMoveCommand)
* [processRouteEnd ()](Game_Character.md#processRouteEnd)
* [restoreMoveRoute ()](Game_Character.md#restoreMoveRoute)
* [searchLimit ()](Game_Character.md#searchLimit)
* [setMoveRoute (moveRoute)](Game_Character.md#setMoveRoute)
* [swap (character)](Game_Character.md#swap)
* [turn180 ()](Game_Character.md#turn180)
* [turnAwayFromCharacter (character)](Game_Character.md#turnAwayFromCharacter)
* [turnAwayFromPlayer ()](Game_Character.md#turnAwayFromPlayer)
* [turnLeft90 ()](Game_Character.md#turnLeft90)
* [turnRandom ()](Game_Character.md#turnRandom)
* [turnRight90 ()](Game_Character.md#turnRight90)
* [turnRightOrLeft90 ()](Game_Character.md#turnRightOrLeft90)
* [turnTowardCharacter (character)](Game_Character.md#turnTowardCharacter)
* [turnTowardPlayer ()](Game_Character.md#turnTowardPlayer)
* [updateRoutineMove ()](Game_Character.md#updateRoutineMove)
* [updateStop ()](Game_Character.md#updateStop)


### Methods


#### areFollowersGathered () → {Boolean}

[隊列メンバー]が集合しているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### areFollowersGathering () → {Boolean}

[隊列メンバー]の集合中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canEncounter () → {Boolean}

 敵と遭遇できる(エンカウント)状態か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canMove () → {Boolean}

 プレイヤーキャラクタを操作可能か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canStartLocalEvents () → {Boolean}

 地表の[イベント]を実行できるか。 飛行船などで空を飛んでいる場合、実行できない。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### center (x, y)

 画面中心を基準にマップを表示。 [Game_Map#setDisplayPos](Game_Map.html#setDisplayPos) は左上を基準とする。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### centerX () → {[Number](Number.md)}

 画面の中心 x座標(タイル数)。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### centerY () → {[Number](Number.md)}

 画面中心 y座標。

##### Returns:


 タイル数
<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### checkEventTriggerHere (triggers)

 現在地にある[イベント]のうち、指定[トリガー]のものを実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggers` | [Array](Array.md).<[Number](Number.md)> |  |


#### checkEventTriggerThere (triggers)

 現在地の一歩前にある[イベント]のうち、指定[トリガー]のものを実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggers` | [Array](Array.md).<[Number](Number.md)> |  |


#### clearTransferInfo ()

[場所移動]情報を削除。


#### encounterProgressValue () → {[Number](Number.md)}

[エンカウント]の発生カウントダウン量。 スキルや船の上などで減っている場合、茂みで増えている場合がある。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### executeEncounter () → {Boolean}

 エンカウントを実行。

##### Returns:

 実行できたか。
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### executeMove (direction)

 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.md) |  向き(テンキー対応) |


#### fadeType () → {[Number](Number.md)}

[場所移動]時の[フェード]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### followers () → {[Game_Followers](Game_Followers.md)}

[隊列メンバー]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Game_Followers</a></span>
	</dd>
</dl>


#### forceMoveForward ()

 強制的にプレイヤーキャラクタを前に進める。


#### gatherFollowers ()

[隊列メンバーの集合]。


#### getInputDirection () → {[Number](Number.md)}

 入力された向きを返す。

##### Returns:

 向き(テンキー対応)
<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### getOffVehicle () → {Boolean}

[乗り物]から降りる。

##### Returns:

 降りた
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### getOnOffVehicle () → {Boolean}

[乗り物]の乗り降りを行う。 乗っていたら降り、降りていたら乗る。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### getOnVehicle () → {Boolean}

[乗り物]へ乗る。

##### Returns:

 乗った
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### hideFollowers ()

[隊列歩行]をしない。


#### isCollided (x, y) → {Boolean}

 指定位置が通行不能か。

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


#### isDashButtonPressed () → {Boolean}

 ダッシュボタン(シフト)が押されているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isInAirship () → {Boolean}

[飛行船]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isInBoat () → {Boolean}

[小型船]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isInShip () → {Boolean}

[大型船]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isInVehicle () → {Boolean}

[乗り物]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isNormal () → {Boolean}

 歩行状態かつ強制移動中でないか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOnDamageFloor () → {Boolean}

[ダメージ床]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isTransferring () → {Boolean}

[場所移動]中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### makeEncounterCount ()

 次の[エンカウント]までのカウント数の設定。


#### makeEncounterTroopId () → {[Number](Number.md)}

 次の[エンカウント]の敵グループIDを生成して返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### meetsEncounterConditions (encounter) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `encounter` | [RPG.Map.Encounter](RPG.Map.Encounter.md) |  |

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### moveByInput ()

 入力に応じて移動する。


#### newMapId () → {[Number](Number.md)}

 移動予定のマップIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### performTransfer ()

[場所移動]の実行。


#### refresh ()

 プレイヤーキャラクタを更新。


#### requestMapReload ()

 マップの読み込みの予約。


#### reserveTransfer (mapId, x, y, d opt, fadeType opt)

 指定した値で[場所移動]の予約。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `mapId` | [Number](Number.md) |  |  |
| `x` | [Number](Number.md) |  |  タイル数 |
| `y` | [Number](Number.md) |  |  タイル数 |
| `d` | [Number](Number.md) | <optional> |  向き(テンキー対応) |
| `fadeType` | [Number](Number.md) | <optional> |  |


#### showFollowers ()

[隊列歩行]を行う。


#### startMapEvent (x, y, triggers, normal)

 指定位置と[トリガー]に対応する[イベント]を開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `triggers` | [Array](Array.md).<[Number](Number.md)> |  |
| `normal` | Boolean |  |


#### triggerAction () → {Boolean}

[決定ボタン]に相当する[トリガー]アクションを実行。

##### Returns:

 アクションがなされたか
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### triggerButtonAction () → {Boolean}

 決定ボタンに対応するアクションを実行。

##### Returns:

 アクションがなされたか
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### triggerTouchAction () → {Boolean}

 画面タッチ(クリック)によるアクションを実行。

##### Returns:

 アクションがなされたか
<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### triggerTouchActionD1 (x1, y1) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.md) |  |
| `y1` | [Number](Number.md) |  |

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### triggerTouchActionD2 (x2, y2) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x2` | [Number](Number.md) |  |
| `y2` | [Number](Number.md) |  |

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### triggerTouchActionD3 (x2, y2) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x2` | [Number](Number.md) |  |
| `y2` | [Number](Number.md) |  |

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>
   

#### updateDashing ()

 ダッシュ状態をアップデート。


#### updateEncounterCount ()

[エンカウント]のカウントをアップデート。


#### updateNonmoving (wasMoving)

 移動状態をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wasMoving` | Boolean | (true: 動いた, false: 止まっている) |


#### updateScroll (lastScrolledX, lastScrolledY)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `lastScrolledX` | [Number](Number.md) |  |
| `lastScrolledY` | [Number](Number.md) |  |

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>


#### updateVehicle ()

[乗り物]をアップデート。


#### updateVehicleGetOff ()

[乗り物]からの降りた状態にアップデート。


#### updateVehicleGetOn ()

[乗り物]へ乗った状態にアップデート。


#### vehicle () → {[Game_Vehicle](Game_Vehicle.md)}

[乗り物]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Game_Vehicle</a></span>
	</dd>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
