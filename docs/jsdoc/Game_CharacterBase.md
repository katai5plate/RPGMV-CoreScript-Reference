# Class: Game_CharacterBase

## (abstract) Game_CharacterBase ()

#### (abstract) new Game_CharacterBase ()

 マップ上のキャラクタに共通する処理を行うクラス。 [Game_Character](Game_Character.md) のスーパークラス。
 
キャラの状態だけではなく、 乗っているマップの状態や移動可能かを調べたりもできる。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | [read-only] マップ上のX座標 |
| `y` | [Number](Number.md) | [read-only] マップ上のY座標 |
| `_x` | [Number](Number.md) |  |
| `_y` | [Number](Number.md) |  |
| `_realX` | [Number](Number.md) |  |
| `_realY` | [Number](Number.md) |  |
| `_moveSpeed` | [Number](Number.md) |  |
| `_moveFrequency` | [Number](Number.md) |  |
| `_opacity` | [Number](Number.md) |  |
| `_blendMode` | [Number](Number.md) |  |
| `_direction` | [Number](Number.md) |  |
| `_pattern` | [Number](Number.md) |  |
| `_priorityType` | [Number](Number.md) |  |
| `_tileId` | [Number](Number.md) |  |
| `_characterName` | [String](String.md) |  |
| `_characterIndex` | [Number](Number.md) |  |
| `_isObjectCharacter` | Boolean |  |
| `_walkAnime` | Boolean |  |
| `_stepAnime` | Boolean |  |
| `_directionFix` | Boolean |  |
| `_through` | Boolean |  |
| `_transparent` | Boolean |  |
| `_bushDepth` | [Number](Number.md) |  |
| `_animationId` | [Number](Number.md) |  |
| `_balloonId` | [Number](Number.md) |  |
| `_animationPlaying` | Boolean |  |
| `_balloonPlaying` | Boolean |  |
| `_animationCount` | [Number](Number.md) |  |
| `_stopCount` | [Number](Number.md) |  |
| `_jumpCount` | [Number](Number.md) |  |
| `_jumpPeak` | [Number](Number.md) |  |
| `_movementSuccess` | Boolean |  |


### Methods

#### animationId () → {[Number](Number.md)}

 アニメーションIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### animationWait () → {[Number](Number.md)}

 アニメーションの待ち時間(フレーム数)を返す。

##### Returns:

 <dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### balloonId () → {[Number](Number.md)}

 フキダシアイコンIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### blendMode () → {[Number](Number.md)}

[合成方法]を返す。

##### Returns:

0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### bushDepth () → {[Number](Number.md)}

[茂み]の深さ(ピクセル数)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### canPass (x, y, d) → {Boolean}

 指定位置から指定向きへの通行が可能か。

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


#### canPassDiagonally (x, y, horz, vert) → {Boolean}

 指定位置から斜め指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `horz` | [Number](Number.md) |  横方向(テンキー対応) |
| `vert` | [Number](Number.md) |  縦方向(テンキー対応) |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### characterIndex () → {[Number](Number.md)}

 キャラクタ画像の番号(0〜7)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### characterName () → {[String](String.md)}

 キャラクタ画像のファイル名(拡張子なし)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### checkEventTriggerTouch (x, y) → {Boolean}

 指定位置にあるイベントトリガを起動。

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


#### checkEventTriggerTouchFront (d)

 指定方向にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### checkStop (threshold) → {Boolean}

 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](Number.md) |  停止カウントの閾値(フレーム) |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### copyPosition (character)

 指定キャラクタの位置を自身の位置にコピー。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Player](Game_Player.md) |  |


#### direction () → {[Number](Number.md)}

 向き(テンキー対応)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### distancePerFrame () → {[Number](Number.md)}

 フレーム毎の移動距離を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### endAnimation ()

[アニメーション]表示を終了。


#### endBalloon ()

[フキダシアイコン]表示を終了。


#### hasStepAnime () → {Boolean}

[足踏みアニメ]するか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### hasWalkAnime () → {Boolean}

[歩行アニメ]するか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### increaseSteps ()

 歩き出す(歩数を増やす)。


#### initialize ()

 オブジェクト生成時の初期化。


#### initMembers ()

 メンバ変数の初期化。


#### isAnimationPlaying () → {Boolean}

[アニメーション]表示中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isBalloonPlaying () → {Boolean}

[フキダシアイコン]表示中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isCollidedWithCharacters (x, y) → {Boolean}

 指定位置がキャラによって塞がれているか。

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


#### isCollidedWithEvents (x, y) → {Boolean}

 指定位置が[イベント]によって塞がれているか。

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


#### isCollidedWithVehicles (x, y) → {Boolean}

 指定位置が[乗り物]によって塞がれているか。

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


#### isDashing () → {Boolean}

 現在ダッシュ中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDebugThrough () → {Boolean}

 デバッグ用のすり抜け移動中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDirectionFixed () → {Boolean}

[向き固定]か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isJumping () → {Boolean}

 ジャンプ中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMapPassable (x, y, d) → {Boolean}

 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

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


#### isMovementSucceeded (x opt, y opt) → {Boolean}

 移動可能か。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) | <optional> |  |
| `y` | [Number](Number.md) | <optional> |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMoving () → {Boolean}

 移動中(タイル毎の座標ではない)か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isNearTheScreen () → {Boolean}

 画面端に近いか。あるいは、スクロールを止める位置か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isNormalPriority () → {Boolean}

[プライオリティ]が[通常キャラと同じ]か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isObjectCharacter () → {Boolean}

 キャラクタ用(characters フォルダ以下)の画像か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOnBush () → {Boolean}

[茂み]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOnLadder () → {Boolean}

[梯子]に乗っているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOriginalPattern () → {Boolean}

 オリジナルのパターンか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isStopping () → {Boolean}

 止まっている(タイル毎の座標にいる)か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isThrough () → {Boolean}

[すり抜け]状態か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isTile () → {Boolean}

 タイル用(tilesets フォルダ以下)の画像か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isTransparent () → {Boolean}

[透明]状態か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### jump (xPlus, yPlus)

[ジャンプ]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xPlus` | [Number](Number.md) | x方向の移動(タイル数) |
| `yPlus` | [Number](Number.md) | y方向の移動(タイル数) |


#### jumpHeight () → {[Number](Number.md)}

 現在のジャンプの高さ(ピクセル数)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### locate (x, y)

 現在のマップ内での[イベントの位置設定]。 [setPosition](Game_CharacterBase.md#setposition-x-y) と異なり、姿勢などを初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### maxPattern () → {[Number](Number.md)}

 最大パターン数を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### moveDiagonally (horz, vert)

 指定の方向に斜めに進む。
 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.md) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.md) |  垂直向き(2: 下, 8: 上) |


#### moveFrequency () → {[Number](Number.md)}

 移動[頻度]を返す。

##### Returns:

1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### moveSpeed () → {[Number](Number.md)}

 移動[速度]を返す。

##### Returns:

1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### moveStraight (d)

 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### opacity () → {[Number](Number.md)}

[不透明度]を返す。

##### Returns:

0〜255
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### pattern () → {[Number](Number.md)}

 歩行パターンの番号を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### pos (x, y) → {Boolean}

 指定位置にいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### posNt (x, y) → {Boolean}

 指定位置にいて、通行不可か。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### realMoveSpeed () → {[Number](Number.md)}

(ダッシュ状態も考慮して)現在の移動速度を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### refreshBushDepth ()

[茂み]の深さを更新。


#### regionId () → {[Number](Number.md)}

 乗っているリージョンIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### requestAnimation (animationId)

 アニメーションIDの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.md) |  |


#### requestBalloon (balloonId)

 フキダシアイコンIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.md) |  |


#### resetPattern ()

 オリジナルのパターンにリセット。


#### resetStopCount ()

 停止カウンタをリセット。


#### reverseDir (d) → {[Number](Number.md)}

 指定向きの逆向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


##### Returns:

 向き(テンキー対応)
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### screenX () → {[Number](Number.md)}

 画面上の x座標(ピクセル数)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### screenY () → {[Number](Number.md)}

 画面上の y座標(ピクセル数)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### screenZ () → {[Number](Number.md)}

 重なり位置を返す。

##### Returns:

1: 通常キャラの下, 3:通常キャラと同じ , 5: 通常キャラの上
<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### scrolledX () → {[Number](Number.md)}

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
		<span>Number</span>
	</dd>
</dl>


#### scrolledY () → {[Number](Number.md)}

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
		<span>Number</span>
	</dd>
</dl>

#### setBlendMode (blendMode)

[合成方法]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `blendMode` | [Number](Number.md) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |


#### setDirection (d)

 向きの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### setDirectionFix (directionFix)

[向き固定]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `directionFix` | Boolean |  |


#### setImage (characterName, characterIndex)

 キャラクタ画像の設定(タイル画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  ファイル名 |
| `characterIndex` | [Number](Number.md) |  番号 |


#### setMoveFrequency (moveFrequency)

 移動[頻度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](Number.md) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |


#### setMovementSuccess (success)

 移動可能かの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `success` | Boolean |  |


#### setMoveSpeed (moveSpeed)

 移動[速度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveSpeed` | [Number](Number.md) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |


#### setOpacity (opacity)

[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.md) | 0〜255 |


#### setPattern (pattern)

 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](Number.md) |  |


#### setPosition (x, y)

 現在のマップ内での[イベントの位置設定]

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### setPriorityType (priorityType)

[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](Number.md) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |


#### setStepAnime (stepAnime)

[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stepAnime` | Boolean |  |


#### setThrough (through)

[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Boolean |  |


#### setTileImage (tileId)

 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  タイルID |


#### setTransparent (transparent)

[透明]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `transparent` | Boolean |  |


#### setWalkAnime (walkAnime)

[歩行アニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `walkAnime` | Boolean |  |


#### shiftY () → {[Number](Number.md)}

 縦方向へのシフト量(ピクセル数)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### startAnimation ()

[アニメーション]表示開始。


#### startBalloon ()

[フキダシアイコン]表示開始。


#### straighten ()

 キャラを(歩き・足踏みの途中でない)直立状態に。


#### terrainTag () → {[Number](Number.md)}

 乗っている[地形タグ]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### tileId () → {[Number](Number.md)}

 タイルIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### update ()

 キャラをアップデート。


#### updateAnimation ()

 アニメーションをアップデート。


#### updateAnimationCount ()

 アニメーションのカウンタをアップデート。


#### updateJump ()

 ジャンプ状態をアップデート。


#### updateMove ()

 移動状態をアップデート。


#### updatePattern ()

 パターンをアップデート。


#### updateStop ()

 停止状態をアップデート。


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
