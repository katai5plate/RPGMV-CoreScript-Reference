# Class: Game_CharacterBase

## (abstract) Game_CharacterBase ()

#### (abstract) new Game_CharacterBase ()

 マップ上のキャラクタに共通する処理を行うクラス。 [Game_Character](Game_Character.html) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | [read-only] |
| `y` | [Number](Number.html) | [read-only] |
| `_x` | [Number](Number.html) |  |
| `_y` | [Number](Number.html) |  |
| `_realX` | [Number](Number.html) |  |
| `_realY` | [Number](Number.html) |  |
| `_moveSpeed` | [Number](Number.html) |  |
| `_moveFrequency` | [Number](Number.html) |  |
| `_opacity` | [Number](Number.html) |  |
| `_blendMode` | [Number](Number.html) |  |
| `_direction` | [Number](Number.html) |  |
| `_pattern` | [Number](Number.html) |  |
| `_priorityType` | [Number](Number.html) |  |
| `_tileId` | [Number](Number.html) |  |
| `_characterName` | [String](String.html) |  |
| `_characterIndex` | [Number](Number.html) |  |
| `_isObjectCharacter` | Boolean |  |
| `_walkAnime` | Boolean |  |
| `_stepAnime` | Boolean |  |
| `_directionFix` | Boolean |  |
| `_through` | Boolean |  |
| `_transparent` | Boolean |  |
| `_bushDepth` | [Number](Number.html) |  |
| `_animationId` | [Number](Number.html) |  |
| `_balloonId` | [Number](Number.html) |  |
| `_animationPlaying` | Boolean |  |
| `_balloonPlaying` | Boolean |  |
| `_animationCount` | [Number](Number.html) |  |
| `_stopCount` | [Number](Number.html) |  |
| `_jumpCount` | [Number](Number.html) |  |
| `_jumpPeak` | [Number](Number.html) |  |
| `_movementSuccess` | Boolean |  |

<dl>
</dl>

### Methods

#### animationId () → {[Number](Number.html)}

 アニメーションIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### animationWait () → {[Number](Number.html)}

 アニメーションの待ち時間を返す。
<dl>
</dl>

##### Returns:

 フレーム
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### balloonId () → {[Number](Number.html)}

 フキダシアイコンIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### blendMode () → {[Number](Number.html)}

[合成方法]を返す。
<dl>
</dl>

##### Returns:

0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### bushDepth () → {[Number](Number.html)}

[茂み]の深さを返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canPass (x, y, d) → {Boolean}

 指定位置から指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `horz` | [Number](Number.html) |  横方向(テンキー対応) |
| `vert` | [Number](Number.html) |  縦方向(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### characterIndex () → {[Number](Number.html)}

 キャラクタ画像の番号を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterName () → {[String](String.html)}

 キャラクタ画像のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### checkEventTriggerTouch (x, y) → {Boolean}

 指定位置にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

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
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### checkStop (threshold) → {Boolean}

 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](Number.html) |  停止カウントの閾値(フレーム) |

<dl>
</dl>

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
| `character` | [Game_Player](Game_Player.html) |  |

<dl>
</dl>

#### direction () → {[Number](Number.html)}

 向きを返す。
<dl>
</dl>

##### Returns:

 向き(テンキー対応)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### distancePerFrame () → {[Number](Number.html)}

 フレーム毎の移動距離を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### endAnimation ()

[アニメーション]表示を終了。
<dl>
</dl>

#### endBalloon ()

[フキダシアイコン]表示を終了。
<dl>
</dl>

#### hasStepAnime () → {Boolean}

[足踏みアニメ]するか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasWalkAnime () → {Boolean}

[歩行アニメ]するか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### increaseSteps ()

 歩き出す(歩数を増やす)。
<dl>
</dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### initMembers ()

 メンバ変数の初期化。
<dl>
</dl>

#### isAnimationPlaying () → {Boolean}

[アニメーション]表示中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBalloonPlaying () → {Boolean}

[フキダシアイコン]表示中か。
<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDashing () → {Boolean}

 現在ダッシュ中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDebugThrough () → {Boolean}

 デバッグ用のすり抜け移動中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDirectionFixed () → {Boolean}

[向き固定]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isJumping () → {Boolean}

 ジャンプ中か。
<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

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
| `x` | [Number](Number.html) | <optional> |  |
| `y` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMoving () → {Boolean}

 移動中(タイル毎の座標ではない)か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNearTheScreen () → {Boolean}

 画面端に近いか。あるいは、スクロールを止める位置か。
<dl>
</dl>

##### Returns:

}
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNormalPriority () → {Boolean}

[プライオリティ]が[通常キャラと同じ]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isObjectCharacter () → {Boolean}

 キャラクタ用(characters フォルダ以下)の画像か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOnBush () → {Boolean}

[茂み]に乗っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOnLadder () → {Boolean}

[梯子]に乗っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOriginalPattern () → {Boolean}

 オリジナルのパターンか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isStopping () → {Boolean}

 止まっている(タイル毎の座標にいる)か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isThrough () → {Boolean}

[すり抜け]状態か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTile () → {Boolean}

 タイル用(tilesets フォルダ以下)の画像か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTransparent () → {Boolean}

[透明]状態か。
<dl>
</dl>

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
| `xPlus` | [Number](Number.html) | x方向の移動(タイル数) |
| `yPlus` | [Number](Number.html) | y方向の移動(タイル数) |

<dl>
</dl>

#### jumpHeight () → {[Number](Number.html)}

 現在のジャンプの高さを返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### locate (x, y)

 現在のマップ内での[イベントの位置設定]。 [Game_CharacterBase#setPosition](Game_CharacterBase.html#setPosition) と異なり、姿勢などを初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

#### maxPattern () → {[Number](Number.html)}

 最大パターン数を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveDiagonally (horz, vert)

 指定の方向に斜めに進む。 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.html) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.html) |  垂直向き(2: 下, 8: 上) |

<dl>
</dl>

#### moveFrequency () → {[Number](Number.html)}

 移動[頻度]を返す。
<dl>
</dl>

##### Returns:

1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveSpeed () → {[Number](Number.html)}

 移動[速度]を返す。
<dl>
</dl>

##### Returns:

1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveStraight (d)

 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### opacity () → {[Number](Number.html)}

[不透明度]を返す。
<dl>
</dl>

##### Returns:

0〜255
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### pattern () → {[Number](Number.html)}

 歩行パターンの番号を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### pos (x, y) → {Boolean}

 指定位置にいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### realMoveSpeed () → {[Number](Number.html)}

(ダッシュ状態も考慮して)現在の移動速度を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### refreshBushDepth ()

[茂み]の深さを更新。
<dl>
</dl>

#### regionId () → {[Number](Number.html)}

 乗っているリージョンIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### requestAnimation (animationId)

 アニメーションIDの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.html) |  |

<dl>
</dl>

#### requestBalloon (balloonId)

 フキダシアイコンIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.html) |  |

<dl>
</dl>

#### resetPattern ()

 オリジナルのパターンにリセット。
<dl>
</dl>

#### resetStopCount ()

 停止カウンタをリセット。
<dl>
</dl>

#### reverseDir (d) → {[Number](Number.html)}

 指定向きの逆向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:

 向き(テンキー対応)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenX () → {[Number](Number.html)}

 画面上の x座標を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenY () → {[Number](Number.html)}

 画面上の y座標を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenZ () → {[Number](Number.html)}

 重なり位置を返す。
<dl>
</dl>

##### Returns:

1: 通常キャラの下, 3:通常キャラと同じ , 5: 通常キャラの上
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrolledX () → {[Number](Number.html)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrolledY () → {[Number](Number.html)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### setBlendMode (blendMode)

[合成方法]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `blendMode` | [Number](Number.html) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |

<dl>
</dl>

#### setDirection (d)

 向きの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### setDirectionFix (directionFix)

[向き固定]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `directionFix` | Boolean |  |

<dl>
</dl>

#### setImage (characterName, characterIndex)

 キャラクタ画像の設定(タイル画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.html) |  ファイル名 |
| `characterIndex` | [Number](Number.html) |  番号 |

<dl>
</dl>

#### setMoveFrequency (moveFrequency)

 移動[頻度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](Number.html) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |

<dl>
</dl>

#### setMovementSuccess (success)

 移動可能かの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `success` | Boolean |  |

<dl>
</dl>

#### setMoveSpeed (moveSpeed)

 移動[速度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveSpeed` | [Number](Number.html) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |

<dl>
</dl>

#### setOpacity (opacity)

[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.html) | 0〜255 |

<dl>
</dl>

#### setPattern (pattern)

 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](Number.html) |  |

<dl>
</dl>

#### setPosition (x, y)

 現在のマップ内での[イベントの位置設定]

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

#### setPriorityType (priorityType)

[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](Number.html) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |

<dl>
</dl>

#### setStepAnime (stepAnime)

[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stepAnime` | Boolean |  |

<dl>
</dl>

#### setThrough (through)

[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Boolean |  |

<dl>
</dl>

#### setTileImage (tileId)

 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.html) |  タイルID |

<dl>
</dl>

#### setTransparent (transparent)

[透明]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `transparent` | Boolean |  |

<dl>
</dl>

#### setWalkAnime (walkAnime)

[歩行アニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `walkAnime` | Boolean |  |

<dl>
</dl>

#### shiftY () → {[Number](Number.html)}

 縦方向へのシフト量を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### startAnimation ()

[アニメーション]表示開始。
<dl>
</dl>

#### startBalloon ()

[フキダシアイコン]表示開始。
<dl>
</dl>

#### straighten ()

 キャラを(歩き・足踏みの途中でない)直立状態に。
<dl>
</dl>

#### terrainTag () → {[Number](Number.html)}

 乗っている[地形タグ]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileId () → {[Number](Number.html)}

 タイルIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### update ()

 キャラをアップデート。
<dl>
</dl>

#### updateAnimation ()

 アニメーションをアップデート。
<dl>
</dl>

#### updateAnimationCount ()

 アニメーションのカウンタをアップデート。
<dl>
</dl>

#### updateJump ()

 ジャンプ状態をアップデート。
<dl>
</dl>

#### updateMove ()

 移動状態をアップデート。
<dl>
</dl>

#### updatePattern ()

 パターンをアップデート。
<dl>
</dl>

#### updateStop ()

 停止状態をアップデート。
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
