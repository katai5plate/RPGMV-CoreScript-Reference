# Class: Game_Follower

## Game_Follower ()

#### new Game_Follower ()

[隊列メンバー]を定義したクラス。 これを配列として定義した [Game_Followers](Game_Followers.md) クラスがある。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_memberIndex` | [Number](Number.md) |  |

<dl>
</dl>

### Extends

* [Game_Character](Game_Character.md)

### Methods

#### actor () → {[Game_Actor](Game_Actor.md)}


[アクター]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
            </dl>

#### advanceMoveRouteIndex ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#advanceMoveRouteIndex</a>
                        </li>
                    </ul>
                </dd>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### animationId () → {[Number](Number.md)}


 アニメーションIDを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#animationId</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>[Number](Number.md)

#### animationWait () → {[Number](Number.md)}


 アニメーションの待ち時間を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#animationWait</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 フレーム
<dl>
                <dt> Type </dt>
                <dd>
                    <[Number](Number.md)pan>
                </dd>
            </dl>

#### balloonId () → {[Number](Number.md)}


 フキダシアイコンIDを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#balloonId</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### blendMode () → {[Number](Number.md)}


[合成方法]を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#blendMode</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### bushDepth () → {[Number](Number.md)}


[茂み]の深さを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#bushDepth</a>
                        </li>
                    </ul>
                </dd>
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
#### can[Number](Number.md)lean}
[Number](Number.md)

 指定位置から指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#canPass</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
        [Number](Number.md)
[Number](Number.md)
#### canPas[Number](Number.md)rz, vert) → {Boolean}
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#canPassDiagonally</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#characterIndex</a>
                        </li>
                    </ul>
                </dd>[String](String.md)
            </dl>

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#characterName</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                [Game_Character](Game_Character.md)
                    <span><a>String</a></span>
                </dd>
            </dl>

#### chaseCharacter (character)


 指定したキャラクタを追う。

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `chara[Number](Number.md)er](Game_Character.md) |  |

<dl>
</dl>

#### checkEventTriggerTouch (x, y) → {Boolean}


 指定位置にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#checkEventTriggerTouch</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
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

<dl>
                <dt>Inherited From:</dt>
                <dd>
                [Number](Number.md)
                        <li>
                            <a>Game_CharacterBase#checkEventTriggerTouchFront</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### checkStop (threshold) → {Boolean}


 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](Number.md) |  停止カウントの閾値(フレーム) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#checkStop</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Game_Player](Game_Player.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### copyPosition (character)


 指定キャラクタの位置を自身の位置にコピー。
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Player](Game_Player.md) |  |

<dl>
        [Number](Number.md) From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#copyPosition</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### deltaXFrom (x) → {[Number](Number.md)}


 指定した x座標と自身の x座標の差分を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_Character#deltaXFrom</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### deltaYFrom (y) → {[Number](Number.md)}


 指定した y座標と自身の y座標の差分を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  タイル数 |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#deltaYFrom</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### direction () → {[Number](Number.md)}

[Number](Number.md)
 向きを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#direction</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#distancePerFrame</a>
                        </li>
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

#### endAnimation ()


[アニメーション]表示を終了。[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#endAnimation</a>
                        </li>
            [Number](Number.md)
            [Number](Number.md)
            </dl>

#### endBalloon ()


[フキダシアイコン]表示を終了。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#endBalloon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### findDirectionTo (goalX, goalY) → {[Number](Number.md)}


 指定座標へたどり着くための向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `goalX` | [Number](Number.md) |  タイル数 |
| `goalY` | [Number](Number.md) |  タイル数 |

<dl>
                [RPG.MoveRoute](RPG.MoveRoute.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#findDirectionTo</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 向き(テンキー対応)
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

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#forceMoveRoute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hasStepAnime () → {Boolean}


[足踏みアニメ]するか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#hasStepAnime</a>
                        </li>
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

#### hasWalkAnime () → {Boolean}


[歩行アニメ]するか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#hasWalkAnime</a>
                        </li>
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

#### increaseSteps ()


 歩き出す(歩数を増やす)。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#increaseSteps</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initMembers ()


 メンバ変数の初期化。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#initMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isAnimationPlaying () → {Boolean}


[アニメーション]表示中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isAnimationPlaying</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
        [Number](Number.md)
        [Number](Number.md)lean</span>
                </dd>
            </dl>

#### isBalloonPlaying () → {Boolean}


[フキダシアイコン]表示中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isBalloonPlaying</a>
                        </li>
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

#### isCollidedWithCharacters (x, y) → {Boolean}

[Number](Number.md)
 指定位置がキャ[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isCollidedWithCharacters</a>
                        </li>
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

#### isCollidedWithEvents (x, y) → {Boolean}
[Number](Number.md)
[Number](Number.md)
 指定位置が[イベント]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isCollidedWithEvents</a>
                        </li>
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

#### isCollidedWithVehicles (x, y) → {Boolean}


 指定位置が[乗り物]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isCollidedWithVehicles</a>
                        </li>
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

#### isDashing () → {Boolean}


 現在ダッシュ中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isDashing</a>
                        </li>
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

#### isDebugThrough () → {Boolean}


 デバッグ用のすり抜け移動中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isDebugThrough</a>
                        </li>
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

#### isDirectionFixed () → {Boolean}


[向き固定]か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isDirectionFixed</a>
                        </li>
                    </ul>
        [Number](Number.md)
        [Number](Number.md)
[Number](Number.md)
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isJumping</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
        [Number](Number.md)lean</span>
        [Number](Number.md)
            </dl>

#### isMapPassable (x, y, d) → {Boolean}


 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isMapPassable</a>
                        </li>
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

#### isMovementSucceeded (x opt, y opt) → {Boolean}


 移動可能か。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) | <optional> |  |
| `y` | [Number](Number.md) | <optional> |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isMovementSucceeded</a>
                        </li>
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

#### isMoveRouteForcing () → {Boolean}


[移動ルート]が強制されているか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#isMoveRouteForcing</a>
                        </li>
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

#### isMoving () → {Boolean}


 移動中(タイル毎の座標ではない)か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isMoving</a>
                        </li>
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

#### isNearTheScreen () → {Boolean}


 画面端に近いか。あるいは、スクロールを止める位置か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isNearTheScreen</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isNormalPriority</a>
                        </li>
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

#### isObjectCharacter () → {Boolean}


 キャラクタ用(characters フォルダ以下)の画像か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isObjectCharacter</a>
                        </li>
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

#### isOnBush () → {Boolean}


[茂み]に乗っているか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isOnBush</a>
                        </li>
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

#### isOnLadder () → {Boolean}


[梯子]に乗っているか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isOnLadder</a>
                        </li>
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

#### isOriginalPattern () → {Boolean}


 オリジナルのパターンか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isOriginalPattern</a>
                        </li>
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

#### isStopping () → {Boolean}


 止まっている(タイル毎の座標にいる)か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isStopping</a>
                        </li>
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

#### isThrough () → {Boolean}


[すり抜け]状態か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isThrough</a>
                        </li>
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

#### isTile () → {Boolean}


 タイル用(tilesets フォルダ以下)の画像か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isTile</a>
                        </li>
                    </ul>
            [Number](Number.md)
            [Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTransparent () → {Boolean}

[Number](Number.md)
[透明]状態か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#isTransparent</a>
                        </li>
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

#### isVisible () → {Boolean}


[隊列メンバー]が表示されているか。
<dl>
</dl>

##### Returns:

<dl>
        [Number](Number.md)t>
        [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### jump (xPlus, yPlus)


[ジャンプ]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `xPlus` | [Number](Number.md) | x方向の移動(タイル数) |
| `yPlus` | [Number](Number.md) | y方向の移動(タイル数) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#jump</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### jumpHeight () → {[Number](Number.md)}


 現在のジャンプの高さを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#jumpHeight</a>
                        </li>
                    </ul>
                </dd>
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
[Game_Character](Game_Character.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#locate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### maxPattern () → {[Number](Number.md)}


 最大パターン数を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#maxPattern</a>
                        </li>
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

#### memorizeMoveRoute ()


[移動ルート]を記録。
<dl>
                <dt>Inherited From:</dt>
           [Number](Number.md)
           [Number](Number.md)
                        <li>
                            <a>Game_Character#memorizeMoveRoute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveAwayFromCharacter (character)


 指定キャラクタから遠ざかる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveAwayFromCharacter</a>
                        </li>
                    </ul>
                </dd>[Number](Number.md)
            </dl>

#### moveAwayFromPlayer ()


[プレイヤーから遠ざかる]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveAwayFromPlayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveBackward ()


[一歩後退]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveBackward</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveDiagonally (horz, vert)


 指定の方向に斜めに進む。 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.md) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.md) |  垂直向き(2: 下, 8: 上) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#moveDiagonally</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveForward ()


[一歩前進]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveForward</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### moveFrequency () → {[Number](Number.md)}


 移動[頻度]を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#moveFrequency</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
<dl>
                [Game_Character](Game_Character.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveRandom ()


[ランダムに移動][タイプ:ランダム]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveRandom</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveSpeed () → {[Number](Number.md)}


 移動[速度]を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd[Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_CharacterBase#moveSpeed</a>
                        </li>
                    </ul>
                </dd>
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
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#moveStraight</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveTowardCharacter (character)


 指定キャラクタに近づく。[タイプ:近づく]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Inherited From:</dt>
        [Number](Number.md)
        [Number](Number.md)
                        <li>
                            <a>Game_Character#moveTowardCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### moveTowardPlayer ()


[プレイヤーに近づく]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#moveTowardPlayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### opacity () → {[Number](Number.md)}


[不透明度]を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
        [Number](Number.md)
        [Number](Number.md)
                            <a>Game_CharacterBase#opacity</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


0〜255
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### pattern () → {[Number](Number.md)}


 歩行パターンの番号を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#pattern</a>
                        </li>
                    </ul>
              [RPG.MoveCommand](RPG.MoveCommand.md)
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
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Number](Number.md)
                        <li>
                            <a>Game_CharacterBase#pos</a>
                        </li>
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

#### posNt (x, y) → {Boolean}


 指定位置にいて、通行不可か。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#posNt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt>[Number](Number.md)
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### processMoveCommand (command)


[移動コマンド]を実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `command` | [RPG.MoveCommand](RPG.MoveCommand.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#processMoveCommand</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### processRouteEnd ()


[移動ルート]の終了。[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#processRouteEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### realMoveSpeed () → {[Number](Number.md)}


(ダッシュ状態も考慮して)現在の移動速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                [Number](Number.md)haracterBase#realMoveSpeed</a>
                        </li>
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

#### refresh ()


[隊列メンバー]を更新。
<dl>
</dl>

#### refreshBushDepth ()


[茂み]の深さを更新。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#refreshBushDepth</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### regionId () → {[Number](Number.md)}


 乗っているリージョンIDを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#regionId</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Ty[Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### requestAnimation (animationId)

[Number](Number.md)
 アニメーションIDの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#requestAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### requestBalloon (balloonId)


 フキダシアイコンIDを設定。[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#requestBalloon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetPattern ()


 オリジナルのパターンにリセット。
<dl>
                <dt[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#resetPattern</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetStopCount ()


 停止カウンタをリセット。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#resetStopCount</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### restoreMoveRoute ()


 記録した[移動ルート]に戻す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#restoreMoveRoute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### reverseDir (d) → {[Number](Number.md)}


 指定向きの逆向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#reverseDir</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 向き(テンキー対応)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenX () → {[Number](Number.md)}


 画面上の x座標を返す。[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#screenX</a>
                        </li>
                    </ul>
                </dd>
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
<dl>
                <dt>Inh[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#screenY</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenZ () → {[Number](Number.md)}


 重なり位置を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#screenZ</a>
                [Number](Number.md)
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
        [Number](Number.md)
                        <li>
                            <a>Game_CharacterBase#scrolledX</a>
                        </li>
                    </ul>
                </dd>
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

#### scrolledY () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#scrolledY</a>
                        </li>
                    </ul>
                </dd>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:[String](String.md)
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### searchLimit () → {[Number](Number.md)}


 ルート検索の上限数を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#searchLimit</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

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
| `blendMode` | [Number](Number.md) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setBlendMode</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setDirection (d)


 向きの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number][RPG.MoveRoute](RPG.MoveRoute.md)

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setDirection</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setDirectionFix (directionFix)


[向き固定]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --[Number](Number.md)
| `directionFix` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setDirectionFix</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setImage (characterName, characterIndex)


 キャラクタ画像の設定(タイル画像と同時には設定できない)。

##### Parameters:

| Name | Type [Number](Number.md)
| --- | --- | --- |
| `characterName` | [String](String.md) |  ファイル名 |
| `characterIndex` | [Number](Number.md) |  番号 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setImage</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setMoveFrequency (moveFrequency)


 移動[頻度]の設定。

##### Paramete[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](Number.md) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setMoveFrequency</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setMovementSuccess (success)


 移動可能かの設定。
[Number](Number.md)
##### Pa[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `success` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setMovementSuccess</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setMoveRoute (moveRoute)


[移動ルート]の設定。
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#setMoveRoute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setMoveSpeed (moveSpeed)


 移動[速度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveSpeed` | [Number](Number.md) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setMoveSpeed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setOpacity (opacity)


[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.md) | 0〜255 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setOpacity</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setPattern (pattern)
[Number](Number.md)

 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setPattern</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setPosition (x, y)


 現在のマップ内での[イベントの位置設定]

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setPosition</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setPriorityType (priorityType)


[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](Number.md) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setPriorityType</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setStepAnime (stepAnime)


[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stepAnime` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setStepAnime</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setThrough (through)


[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Boolean |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setThrough</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setTileImage (tileId)


 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  タイルID |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setTileImage</a>
                        </li>
                    </ul>
                [Game_Character](Game_Character.md)
            </dl>

#### setTransparent (transparent)


[透明]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `transparent` | Boolean |  |
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setTransparent</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setWalkAnime (walkAnime)


[歩行アニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `walkAnime` | Boolean |  |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#setWalkAnime</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### shiftY () → {[Number](Number.md)}


 縦方向へのシフト量を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#shiftY</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                [Game_Character](Game_Character.md)
                            <a>Game_CharacterBase#startAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startBalloon ()


[フキダシアイコン]表示開始。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#startBalloon</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### straighten ()


 キャラを(歩き・足踏みの途中でない)直立状態に。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#straighten</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### swap (character)


 指定したキャラクタと場所を入れ替わる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#swap</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### terrainTag () → {[Number](Number.md)}


 乗っている[地形タグ]を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#terrainTag</a>
                        </li>
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

#### tileId () → {[Number](Number.md)}


 タイルIDを返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                [Game_Character](Game_Character.md)
                            <a>Game_CharacterBase#tileId</a>
                        </li>
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

#### turn180 ()


[180度回転]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turn180</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnAwayFromCharacter (character)


 指定キャラクタの逆を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnAwayFromCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnAwayFromPlayer ()


[プレイヤーの逆を向く]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnAwayFromPlayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnLeft90 ()


[左に90度回転]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnLeft90</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnRandom ()


[ランダムに方向転換]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnRandom</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnRight90 ()


[右に90度回転]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnRight90</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnRightOrLeft90 ()


[右か左に90度回転]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnRightOrLeft90</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnTowardCharacter (character)


 指定キャラクタの方を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnTowardCharacter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### turnTowardPlayer ()


[プレイヤーの方を向く]。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#turnTowardPlayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()


[隊列メンバー]をアップデートする。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateAnimation ()


 アニメーションをアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#updateAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateAnimationCount ()


 アニメーションのカウンタをアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#updateAnimationCount</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateJump ()


 ジャンプ状態をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#updateJump</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateMove ()


 移動状態をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#updateMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updatePattern ()


 パターンをアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_CharacterBase#updatePattern</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateRoutineMove ()


[移動ルート]をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#updateRoutineMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateStop ()


 停止状態をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Character#updateStop</a>
                        </li>
                    </ul>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
