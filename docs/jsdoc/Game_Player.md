# Class: Game_Player

## Game_Player ()

#### new Game_Player ()

(乗り物を含む)プレイヤーキャラクタを定義したクラス。マップの[場所移動]も含む。 大域変数 [$gamePlayer](global.html#$gamePlayer) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_vehicleType` | [String](String.md) | [乗り物]の種類 |
| `_vehicleGettingOn` | Boolean | [乗り物]に乗っているか |
| `_vehicleGettingOff` | Boolean | [乗り物]から降りているか |
| `_dashing` | Boolean | ダッシュ中か |
| `_needsMapReload` | Boolean | マップの再読み込みが必要か |
| `_transferring` | Boolean | マップの移動中か |
| `_newMapId` | [Number](Number.md) | 移動先のマップID |
| `_newX` | [Number](Number.md) | 移動先のx座標(タイル数) |
| `_newY` | [Number](Number.md) | 移動先のy座標(タイル数) |
| `_newDirection` | [Number](Number.md) | 移動先の向き(テンキー対応) |
| `_fadeType` | [Number](Number.md) | フェードの種類 |
| `_followers` | [Game_Followers](Game_Followers.md) | 隊列メンバ |
| `_encounterCount` | [Number](Number.md) | エンカウントのカウント |


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
* [isDirectionFixed ()](Game_CharacterBase.md#isdirectionfixed---boolean)
* [isJumping ()](Game_CharacterBase.md#isjumping---boolean)
* [isMovementSucceeded (x opt, y opt)](Game_CharacterBase.md#ismovementsucceeded-x-opt-y-opt--boolean)
* [isMoving ()](Game_CharacterBase.md#ismoving---boolean)
* [isNearTheScreen ()](Game_CharacterBase.md#isnearthescreen---boolean)
* [isNormalPriority ()](Game_CharacterBase.md#isnormalpriority---boolean)
* [isObjectCharacter ()](Game_CharacterBase.md#isobjectcharacter---boolean)
* [isOnBush ()](Game_CharacterBase.md#isonbush---boolean)
* [isOnLadder ()](Game_CharacterBase.md#isonladder---boolean)
* [isOriginalPattern ()](Game_CharacterBase.md#isoriginalpattern---boolean)
* [isThrough ()](Game_CharacterBase.md#isthrough---boolean)
* [isTile ()](Game_CharacterBase.md#istile---boolean)
* [isTransparent ()](Game_CharacterBase.md#istransparent---boolean)
* [jumpHeight ()](Game_CharacterBase.md#jumpheight---number)
* [maxPattern ()](Game_CharacterBase.md#maxpattern---number)
* [moveFrequency ()](Game_CharacterBase.md#movefrequency---number)
* [moveSpeed ()](Game_CharacterBase.md#movespeed---number)
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
* [updateStop ()](Game_Character.md#updatestop-)



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
 画面中心 y座標(タイル数)。

##### Returns:

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


#### checkEventTriggerTouch (x, y) → {Boolean}
 指定位置にあるイベントトリガを起動。

##### Overrides:
[Game_CharacterBase#checkEventTriggerTouch (x, y)](Game_CharacterBase.md#checkeventtriggertouch-x-y--boolean)

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


#### increaseSteps ()
 歩き出す(歩数を増やす)。

##### Overrides:
[Game_CharacterBase#increaseSteps ()](Game_CharacterBase.md#increasesteps-)

#### initialize ()
 オブジェクト生成時の初期化。
 
##### Overrides:
[Game_CharacterBase#initialize ()](Game_CharacterBase.md#initialize-)


#### initMembers ()
 メンバ変数の初期化。

##### Overrides:
[Game_CharacterBase#initMembers ()](Game_CharacterBase.md#initmembers-)


#### isDashButtonPressed () → {Boolean}
 ダッシュボタン(シフト)が押されているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDashing () → {Boolean}
 現在ダッシュ中か。

##### Overrides:
[Game_CharacterBase#isDashing ()](Game_CharacterBase.md#isdashing---boolean)

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDebugThrough () → {Boolean}
 デバッグ用のすり抜け移動中か。

##### Overrides:
[Game_CharacterBase#isDebugThrough ()](Game_CharacterBase.md#isdebugthrough---boolean)

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


#### isMapPassable (x, y, d) → {Boolean}
 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

##### Overrides:
[Game_CharacterBase#isMapPassable (x, y, d)](Game_CharacterBase.md#ismappassable-x-y-d--boolean)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

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


#### isStopping () → {Boolean}
 止まっている(タイル毎の座標にいる)か。

##### Overrides:
[Game_CharacterBase#isStopping ()](Game_CharacterBase.md#isstopping---boolean)

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

#### jump (xPlus, yPlus)
[ジャンプ]。

##### Overrides:
[Game_CharacterBase#jump (xPlus, yPlus)](Game_CharacterBase.md#jump-xplus-yplus)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xPlus` | [Number](Number.md) | x方向の移動(タイル数) |
| `yPlus` | [Number](Number.md) | y方向の移動(タイル数) |


#### locate (x, y)
 現在のマップ内での[イベントの位置設定]。 [setPosition](Game_CharacterBase.md#setposition-x-y) と異なり、姿勢などを初期化。
 
##### Overrides:
[Game_CharacterBase#locate (x, y)](Game_CharacterBase.md#locate-x-y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


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


#### moveDiagonally (horz, vert)
 指定の方向に斜めに進む。
 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Overrides:
[Game_CharacterBase#moveDiagonally (horz, vert)](Game_CharacterBase.md#movediagonally-horz-vert)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.md) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.md) |  垂直向き(2: 下, 8: 上) |


#### moveStraight (d)
 指定の向きへ[一歩前進]。
 
##### Overrides:
[Game_CharacterBase#moveStraight (d)](Game_CharacterBase.md#movestraight-d)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


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


#### update ()
プレイヤーキャラをアップデート。

##### Overrides:
[Game_CharacterBase#update](Game_CharacterBase.md#update-)


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
スクロール処理

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `lastScrolledX` | [Number](Number.md) |  |
| `lastScrolledY` | [Number](Number.md) |  |


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
