# Class: Game_Character

## Game_Character ()

#### new Game_Character ()

[Game_Player](Game_Player.md), [Game_Follower](Game_Follower.md), [Game_Vehicle](Game_Vehicle.md) および [Game_Event](Game_Event.md) のスーパークラス。

静的プロパティに定義してある定数は、[移動ルートの設定]の[移動コマンド]に対応している。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `ROUTE_END` | [Number](Number.md) | [static]終了 |
| `ROUTE_MOVE_DOWN` | [Number](Number.md) | [static][下に移動] |
| `ROUTE_MOVE_LEFT` | [Number](Number.md) | [static][左に移動] |
| `ROUTE_MOVE_RIGHT` | [Number](Number.md) | [static][右に移動] |
| `ROUTE_MOVE_UP` | [Number](Number.md) | [static][上に移動] |
| `ROUTE_MOVE_LOWER_L` | [Number](Number.md) | [static][左下に移動] |
| `ROUTE_MOVE_LOWER_R` | [Number](Number.md) | [static][右下に移動] |
| `ROUTE_MOVE_UPPER_L` | [Number](Number.md) | [static][左上に移動] |
| `ROUTE_MOVE_UPPER_R` | [Number](Number.md) | [static][右上に移動] |
| `ROUTE_MOVE_RANDOM` | [Number](Number.md) | [static][ランダムに移動] |
| `ROUTE_MOVE_TOWARD` | [Number](Number.md) | [static][プレイヤーに近く] |
| `ROUTE_MOVE_AWAY` | [Number](Number.md) | [static][プレイヤーから遠ざかる] |
| `ROUTE_MOVE_FORWARD` | [Number](Number.md) | [static][一歩前進] |
| `ROUTE_MOVE_BACKWARD` | [Number](Number.md) | [static][一歩後退] |
| `ROUTE_JUMP` | [Number](Number.md) | [static][ジャンプ] |
| `ROUTE_WAIT` | [Number](Number.md) | [static][ウェイト] |
| `ROUTE_TURN_DOWN` | [Number](Number.md) | [static][下を向く] |
| `ROUTE_TURN_LEFT` | [Number](Number.md) | [static][左を向く] |
| `ROUTE_TURN_RIGHT` | [Number](Number.md) | [static][右を向く] |
| `ROUTE_TURN_UP` | [Number](Number.md) | [static][上を向く] |
| `ROUTE_TURN_90D_R` | [Number](Number.md) | [static][右に90度回転] |
| `ROUTE_TURN_90D_L` | [Number](Number.md) | [static][左に90度回転] |
| `ROUTE_TURN_180D` | [Number](Number.md) | [static][180度回転] |
| `ROUTE_TURN_90D_R_L` | [Number](Number.md) | [static][右か左に90度回転] |
| `ROUTE_TURN_RANDOM` | [Number](Number.md) | [static][ランダムに方向転換] |
| `ROUTE_TURN_TOWARD` | [Number](Number.md) | [static][プレイヤーの方を向く] |
| `ROUTE_TURN_AWAY` | [Number](Number.md) | [static][プレイヤーの逆を向く] |
| `ROUTE_SWITCH_ON` | [Number](Number.md) | [static][スイッチON] |
| `ROUTE_SWITCH_OFF` | [Number](Number.md) | [static][スイッチOFF] |
| `ROUTE_CHANGE_SPEED` | [Number](Number.md) | [static][移動速度の変更] |
| `ROUTE_CHANGE_FREQ` | [Number](Number.md) | [static][移動頻度の変更] |
| `ROUTE_WALK_ANIME_ON` | [Number](Number.md) | [static][歩行アニメON] |
| `ROUTE_WALK_ANIME_OFF` | [Number](Number.md) | [static][歩行アニメOFF] |
| `ROUTE_STEP_ANIME_ON` | [Number](Number.md) | [static][足踏みアニメON] |
| `ROUTE_STEP_ANIME_OFF` | [Number](Number.md) | [static][足踏みアニメOFF] |
| `ROUTE_DIR_FIX_ON` | [Number](Number.md) | [static][向き固定ON] |
| `ROUTE_DIR_FIX_OFF` | [Number](Number.md) | [static][向き固定OFF] |
| `ROUTE_THROUGH_ON` | [Number](Number.md) | [static][すり抜けON] |
| `ROUTE_THROUGH_OFF` | [Number](Number.md) | [static][すり抜けOFF] |
| `ROUTE_TRANSPARENT_ON` | [Number](Number.md) | [static][透明化ON] |
| `ROUTE_TRANSPARENT_OFF` | [Number](Number.md) | [static][透明化OFF] |
| `ROUTE_CHANGE_IMAGE` | [Number](Number.md) | [static][画像の変更] |
| `ROUTE_CHANGE_OPACITY` | [Number](Number.md) | [static][不透明度の変更] |
| `ROUTE_CHANGE_BLEND_MODE` | [Number](Number.md) | [static][合成方法の変更] |
| `ROUTE_PLAY_SE` | [Number](Number.md) | [static][SEの演奏] |
| `ROUTE_SCRIPT` | [Number](Number.md) | [static][スクリプト] |
| `_moveRouteForcing` | Boolean | [移動ルート]を強制しているか |
| `_moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | [移動ルート] |
| `_moveRouteIndex` | [Number](Number.md) | [移動ルート]の番号 |
| `_originalMoveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | オリジナルの[移動ルート] |
| `_originalMoveRouteIndex` | [Number](Number.md) | オリジナルの[移動ルート]の番号 |
| `_waitCount` | [Number](Number.md) | ウェイト |


### Extends

* [Game_CharacterBase](Game_CharacterBase.md)

### Overrides

#### [Game_CharacterBase](Game_CharacterBase.md)

* [initialize ()](Game_CharacterBase.md#initialize)
* [initMembers ()](Game_CharacterBase.md#initMembers)
* [updateStop ()](Game_CharacterBase.md#updateStop)


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


### Methods

#### advanceMoveRouteIndex ()

To Do: この用語の意味が分かったら教えてください。

#### deltaXFrom (x) → {[Number](Number.md)}
 指定した x座標と自身の x座標の差分(タイル数)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | タイル数 |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### deltaYFrom (y) → {[Number](Number.md)}
 指定した y座標と自身の y座標の差分(タイル数)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  タイル数 |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>


#### findDirectionTo (goalX, goalY) → {[Number](Number.md)}
 指定座標へたどり着くための向き(テンキー対応)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `goalX` | [Number](Number.md) |  タイル数 |
| `goalY` | [Number](Number.md) |  タイル数 |


##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### forceMoveRoute (moveRoute)
[移動ルート]を強制。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) |  |


#### isMoveRouteForcing () → {Boolean}
[移動ルート]が強制されているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### memorizeMoveRoute ()
[移動ルート]を記録。

#### moveAwayFromCharacter (character)
 指定キャラクタから遠ざかる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |


#### moveAwayFromPlayer ()
[プレイヤーから遠ざかる]。

#### moveBackward ()
[一歩後退]。

#### moveForward ()
[一歩前進]。

#### moveRandom ()
[ランダムに移動][タイプ:ランダム]。

#### moveTowardCharacter (character)
 指定キャラクタに近づく。[タイプ:近づく]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

#### moveTowardPlayer ()
[プレイヤーに近づく]。

#### processMoveCommand (command)
[移動コマンド]を実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `command` | [RPG.MoveCommand](RPG.MoveCommand.md) |  |


#### processRouteEnd ()
[移動ルート]の終了。


#### restoreMoveRoute ()
 記録した[移動ルート]に戻す。

#### searchLimit () → {[Number](Number.md)}
 ルート検索の上限数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### setMoveRoute (moveRoute)
[移動ルート]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) |  |

#### swap (character)
 指定したキャラクタと場所を入れ替わる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

#### turn180 ()
[180度回転]。

#### turnAwayFromCharacter (character)
 指定キャラクタの逆を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |


#### turnAwayFromPlayer ()
[プレイヤーの逆を向く]。

#### turnLeft90 ()
[左に90度回転]。

#### turnRandom ()
[ランダムに方向転換]。

#### turnRight90 ()
[右に90度回転]。

#### turnRightOrLeft90 ()
[右か左に90度回転]。

#### turnTowardCharacter (character)
 指定キャラクタの方を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |


#### turnTowardPlayer ()
[プレイヤーの方を向く]。

#### updateRoutineMove ()
[移動ルート]をアップデート。


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
