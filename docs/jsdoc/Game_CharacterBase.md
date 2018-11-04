# Class: Game_CharacterBase

## (abstract) Game_CharacterBase ()

#### (abstract) new Game_CharacterBase ()

 マップ上のキャラクタに共通する処理を行うクラス。 [Game_Character](Game_Character.md) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | [read-only] |
| `y` | [Number](Number.md) | [read-only] |
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

<dl>
</dl>

### Methods

#### animationId () → {[Number](Number.md)}


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
[Number](Number.md)
#### animationWait () → {[Number](Number.md)}


 アニメーションの待ち時間を返す。
<dl>
</dl>

##### Returns:


 フレーム
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[Number](Number.md)
            </dl>

#### balloonId () → {[Number](Number.md)}


 フキダシアイコンIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <[Number](Number.md)pan>
                </dd>
            </dl>

#### blendMode () → {[Number](Number.md)}


[合成方法]を返す。
<dl>
</dl>

##### Returns:


0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
<dl>
                <dt> [Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### bushDepth () → {[Number](Number.md)}


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

#### can[Number](Number.md)lean}
[Number](Number.md)
[Number](Number.md)
 指定位置から指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>
[Number](Number.md)
#### can[Number](Number.md) horz, vert) → {Boolean}
[Number](Number.md)
[Number](Number.md)
 指定位置から斜め指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `horz` | [Number](Number.md) |  横方向(テンキー対応) |
| `vert` | [Number](Number.md) |  縦方向(テンキー対応) |

<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### characterIndex () → {[Number](Number.md)}


 キャラクタ画像の番号を返す。
<dl>
</dl>[String](String.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterName () → {[String](String.md)}


 キャラクタ画像のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
        [Number](Number.md)String</a></span>
        [Number](Number.md)
            </dl>

#### checkEventTriggerTouch (x, y) → {Boolean}


 指定位置にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
        [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkEventTriggerTouchFront (d)


 指定方向にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --[Number](Number.md)
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

#### checkStop (threshold) → {Boolean}


 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](Number.md) |  停止カウントの閾値(フレーム) |

<dl>
</dl>

##### Returns:

<dl>[Game_Player](Game_Player.md)
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>[Number](Number.md)

#### copyPosition (character)


 指定キャラクタの位置を自身の位置にコピー。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Player](Game_Player.md) |  |

<dl>
</dl>

#### direction () → {[Number[Number](Number.md)


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

#### distancePerFrame () → {[Number](Number.md)}


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
        [Number](Number.md)lean</span>
        [Number](Number.md)
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


 指定位置がキャ[Number](Number.md)
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

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

[Number](Number.md)
 指定位置が[イ[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

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
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

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
</dl>[Number](Number.md)
[Number](Number.md)
##### Re[Number](Number.md)

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
        [Number](Number.md)
        [Number](Number.md)

#### isMapPassable (x, y, d) → {Boolean}


 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

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
| `x` | [Number](Number.md) | <optional> |  |
| `y` | [Number](Number.md) | <optional> |  |

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

##### Return[Number](Number.md)
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>[Number](Number.md)
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
</dl>[Number](Number.md)
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
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

<dl>
</dl>

#### jumpHeight () → {[Number](Number.md)}


 現在のジャンプの高さ[Number](Number.md)
<dl>[Number](Number.md)
</dl>

##### Returns:

[Number](Number.md)
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

| Name | Type | Descr[Number](Number.md)
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

#### maxPattern () → {[Number](Number.md)}


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

#### mov[Number](Number.md)rt)


 指定の方向に斜めに進む。 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.md) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.md) |  垂直向き(2: 下, 8: 上) |

<dl>
</dl>

#### moveFrequency () → {[Number](Number.md)}


 移動[頻度]を返す。
<dl>
</dl>
[Number](Number.md)
##### Returns:


1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveSpeed () → {[Number](Number.md)}


 移動[速度]を返す。
<dl>
</dl>

##### Returns:


1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
<dl>[Number](Number.md)
        [Number](Number.md)t>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveStraight (d)


 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

#### opacity () → {[Number](Number.md)}

[Number](Number.md)
[不透明度]を返[Number](Number.md)
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
[Number](Number.md)
#### pattern () → {[Number](Number.md)}


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
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

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


 指定位置にいて、通行不可か。たぶん[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### realMoveSpeed () → {[Number](Number.md)}


(ダッシュ状態も考慮して)現在の移動速度を返す。
<dl>
</dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### refreshBushDepth ()
[Number](Number.md)

[茂み]の深さを更新。
<dl>
</dl>

#### regionId () → {[Number](Number.md)}


 乗っているリージョンIDを返す。
<dl>
</dl>

##### Returns:

<dl>[Number](Number.md)
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
| `animationId` | [[Number](Number.md)|  |

<dl>
</dl>

#### requestBalloon (balloonId)


 フキダシアイコンIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.md) |  |

<dl>[Number](Number.md)
</dl>

#### resetPattern ()


 オリジナルのパターンにリセット。
<dl>
</dl>

#### resetStopCount ()


 停止カウンタをリセット。
<dl>
</dl>
[Number](Number.md)
#### reverseDir (d) → {[Number](Number.md)}


 指定向きの逆向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:


 向き(テンキー対応)
<dl>
                <dt> [Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenX () → {[Number](Number.md)}


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

#### screenY () → {[Number](Number.md)}


 画面上の y座標を返す。
<dl>[Number](Number.md)
</dl>

##### Returns:


 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### screenZ () → {[Number](Number.md)}


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

#### scrolledX () → {[Number](Number.md)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    [String](String.md)
                </dd>[Number](Number.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrolledY () → {[Number](Number.md)}
[Number](Number.md)
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

| Name | Type | [Number](Number.md)
| --- | --- | --- |
| `blendMode` | [Number](Number.md) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |

<dl>
</dl>

#### setDirection (d)


 向きの設定。

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

#### setDirectionFix (directionFix)


[向き固定]の設定。

##### Paramete[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `directionFix` | Boolean |  |

<dl>
</dl>

#### setImage (characterName, characterIndex)


 キャラクタ画像の設定(タイル画像と同時には設定できない)。
[Number](Number.md)
##### Pa[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  ファイル名 |
| `characterIndex` | [Number](Number.md) |  番号 |

<dl>
</dl>

#### setMoveFrequency (moveFrequency)


 移動[頻度]の設定。[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](Number.md) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |

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
| `moveSpeed` | [Number](Number.md) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |

<dl>
</dl>

#### setOpaci[Number](Number.md)


[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.md) | 0〜255 |

<dl>
</dl>

#### setPattern (pattern)


 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](Number.md) |  |

<dl>
</dl>

#### setPosition (x, y)


 現在のマップ内での[イベントの位置[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

#### setPriorityType (priorityType)


[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](Number.md) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |

<dl>
</dl>

#### setStepAnime (stepAnime)


[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `stepAnime` | Boolean |  |

<dl>
</dl>

#### setThrough (through)


[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Bool[Number](Number.md)

<dl>
</dl>

#### setTileImage (tileId)


 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  タイルID |

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

#### shiftY () → {[Number](Number.md)}


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

#### terrainTag () → {[Number](Number.md)}


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

#### tileId () → {[Number](Number.md)}


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
