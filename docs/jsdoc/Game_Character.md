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

###Overrides: [Game_CharacterBase](Game_CharacterBase.md)

* [initialize ()](Game_CharacterBase#initialize)
* [initMembers ()](Game_CharacterBase#initMembers)
* [updateStop ()](Game_CharacterBase#updateStop)


###Inherited From: [Game_CharacterBase](Game_CharacterBase.md)

* [animationId ()](Game_CharacterBase.md#animationid---number)
* [animationWait ()](Game_CharacterBase.html#animationwait---number)
* [balloonId ()](Game_CharacterBase.html#balloonid---number)
* [blendMode ()](Game_CharacterBase.html#blendmode---number)
* [bushDepth ()](Game_CharacterBase.html#bushdepth---number)
* [canPass (x, y, d)](Game_CharacterBase#canPass)
* [canPassDiagonally (x, y, horz, vert)](Game_CharacterBase#canPassDiagonally)
* [characterIndex ()](Game_CharacterBase#characterIndex)
* [characterName ()](Game_CharacterBase#characterName)
* [checkEventTriggerTouch (x, y)](Game_CharacterBase#checkEventTriggerTouch)
* [checkEventTriggerTouchFront (d)](Game_CharacterBase#checkEventTriggerTouchFront)
* [checkStop (threshold)](Game_CharacterBase#checkStop)
* [copyPosition (character)](Game_CharacterBase#copyPosition)
* [endAnimation ()](Game_CharacterBase#endAnimation)
* [endBalloon ()](Game_CharacterBase#endBalloon)
* [direction ()](Game_CharacterBase#direction)
* [distancePerFrame ()](Game_CharacterBase#distancePerFrame)
* [hasStepAnime ()](Game_CharacterBase#hasStepAnime)
* [hasWalkAnime ()](Game_CharacterBase#hasWalkAnime)
* [increaseSteps ()](Game_CharacterBase#increaseSteps)
* [isAnimationPlaying ()](Game_CharacterBase#isAnimationPlaying)
* [isBalloonPlaying ()](Game_CharacterBase#isBalloonPlaying)
* [isCollidedWithCharacters (x, y)](Game_CharacterBase#isCollidedWithCharacters)
* [isCollidedWithEvents (x, y)](Game_CharacterBase#isCollidedWithEvents)
* [isCollidedWithVehicles (x, y)](Game_CharacterBase#isCollidedWithVehicles)
* [isDashing ()](Game_CharacterBase#isDashing)
* [isDebugThrough ()](Game_CharacterBase#isDebugThrough)
* [isDirectionFixed ()](Game_CharacterBase#isDirectionFixed)
* [isJumping ()](Game_CharacterBase#isJumping)
* [isMapPassable (x, y, d)](Game_CharacterBase#isMapPassable)
* [isMovementSucceeded (x opt, y opt)](Game_CharacterBase#isMovementSucceeded)
* [isMoving ()](Game_CharacterBase#isMoving)
* [isNearTheScreen ()](Game_CharacterBase#isNearTheScreen)
* [isNormalPriority ()](Game_CharacterBase#isNormalPriority)
* [isObjectCharacter ()](Game_CharacterBase#isObjectCharacter)
* [isOnBush ()](Game_CharacterBase#isOnBush)
* [isOnLadder ()](Game_CharacterBase#isOnLadder)
* [isOriginalPattern ()](Game_CharacterBase#isOriginalPattern)
* [isStopping ()](Game_CharacterBase#isStopping)
* [isThrough ()](Game_CharacterBase#isThrough)
* [isTile ()](Game_CharacterBase#isTile)
* [isTransparent ()](Game_CharacterBase#isTransparent)
* [jump (xPlus, yPlus)](Game_CharacterBase#jump)
* [jumpHeight ()](Game_CharacterBase#jumpHeight)
* [locate (x, y)](Game_CharacterBase#locate)
* [maxPattern ()](Game_CharacterBase#maxPattern)
* [moveDiagonally (horz, vert)](Game_CharacterBase#moveDiagonally)
* [moveFrequency ()](Game_CharacterBase#moveFrequency)
* [moveSpeed ()](Game_CharacterBase#moveSpeed)
* [moveStraight (d)](Game_CharacterBase#moveStraight)
* [opacity ()](Game_CharacterBase#opacity)
* [pattern ()](Game_CharacterBase#pattern)
* [pos (x, y)](Game_CharacterBase#pos)
* [posNt (x, y)](Game_CharacterBase#posNt)
* [realMoveSpeed ()](Game_CharacterBase#realMoveSpeed)
* [refreshBushDepth ()](Game_CharacterBase#refreshBushDepth)
* [regionId ()](Game_CharacterBase#regionId)
* [requestAnimation (animationId)](Game_CharacterBase#requestAnimation)
* [requestBalloon (balloonId)](Game_CharacterBase#requestBalloon)
* [resetPattern ()](Game_CharacterBase#resetPattern)
* [resetStopCount ()](Game_CharacterBase#resetStopCount)
* [reverseDir (d)](Game_CharacterBase#reverseDir)
* [screenX ()](Game_CharacterBase#screenX)
* [screenY ()](Game_CharacterBase#screenY)
* [screenZ ()](Game_CharacterBase#screenZ)
* [scrolledX ()](Game_CharacterBase#scrolledX)
* [scrolledY ()](Game_CharacterBase#scrolledY)
* [setBlendMode (blendMode)](Game_CharacterBase#setBlendMode)
* [setDirection (d)](Game_CharacterBase#setDirection)
* [setDirectionFix (directionFix)](Game_CharacterBase#setDirectionFix)
* [setImage (characterName, characterIndex)](Game_CharacterBase#setImage)
* [setMoveFrequency (moveFrequency)](Game_CharacterBase#setMoveFrequency)
* [setMovementSuccess (success)](Game_CharacterBase#setMovementSuccess)
* [setMoveSpeed (moveSpeed)](Game_CharacterBase#setMoveSpeed)
* [setOpacity (opacity)](Game_CharacterBase#setOpacity)
* [setPattern (pattern)](Game_CharacterBase#setPattern)
* [setPosition (x, y)](Game_CharacterBase#setPosition)
* [setPriorityType (priorityType)](Game_CharacterBase#setPriorityType)
* [setStepAnime (stepAnime)](Game_CharacterBase#setStepAnime)
* [setThrough (through)](Game_CharacterBase#setThrough)
* [setTileImage (tileId)](Game_CharacterBase#setTileImage)
* [setTransparent (transparent)](Game_CharacterBase#setTransparent)
* [setWalkAnime (walkAnime)](Game_CharacterBase#setWalkAnime)
* [shiftY ()](Game_CharacterBase#shiftY)
* [startAnimation ()](Game_CharacterBase#startAnimation)
* [startBalloon ()](Game_CharacterBase#startBalloon)
* [straighten ()](Game_CharacterBase#straighten)
* [terrainTag ()](Game_CharacterBase#terrainTag)
* [tileId ()](Game_CharacterBase#tileId)
* [turnTowardPlayer ()](Game_CharacterBase#update)
* [updateAnimation ()](Game_CharacterBase#updateAnimation)
* [updateAnimationCount ()](Game_CharacterBase#updateAnimationCount)
* [updateJump ()](Game_CharacterBase#updateJump)
* [updateMove ()](Game_CharacterBase#updateMove)
* [updatePattern ()](Game_CharacterBase#updatePattern)



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


#### processRouteEnd ()
[移動ルート]の終了。


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


#### updateRoutineMove ()
[移動ルート]をアップデート。


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
