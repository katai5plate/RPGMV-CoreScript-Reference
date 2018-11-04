# Class: Scene_Base

## (abstract) Scene_Base ()

#### (abstract) new Scene_Base ()

 シーンの基礎オブジェクト。シーン管理は [SceneManager](SceneManager.html) で行う。 [Scene_Boot](Scene_Boot.html), [Scene_Title](Scene_Title.html), [Scene_Gameover](Scene_Gameover.html), [Scene_Map](Scene_Map.html), [Scene_Battle](Scene_Battle.html), [Scene_MenuBase](Scene_MenuBase.html) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_active` | Boolean |  アクティブか[Scene_Base#isActive](Scene_Base.html#isActive) |
| `_fadeSign` | [Number](Number.html) |  |
| `_fadeDuration` | [Number](Number.html) |  フェードにかける時間 |
| `_fadeSprite` | [ScreenSprite](ScreenSprite.html) |  フェードに使うスプライト |
| `_imageReservationId` | * | [Number](Number.html) |  |
| `_windowLayer` | [WindowLayer](WindowLayer.html) |  ウィンドウレイヤ |

<dl>
</dl>

### Extends

* [Stage](Stage.html)

### Methods

#### addChild (child) → {Object}

[super] 子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#addChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 追加されたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

[super] 指定位置に子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |
| `index` | [Number](Number.html) |  追加位置 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#addChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 追加されたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addWindow (Window)

 ウィンドウレイヤーにウィンドウを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `Window` |  |  追加するウィンドウ |

<dl>
</dl>

#### attachReservation ()

 キューに予約を追加。
<dl>
</dl>

#### checkGameover ()

 ゲームオーバー状態か検査。
<dl>
</dl>

#### create ()

 シーンの生成。
<dl>
</dl>

#### createFadeSprite ()

 フェード用のスプライトを生成。
<dl>
</dl>

#### createWindowLayer ()

 ウィンドウレイヤー[WindowLayer](WindowLayer.html) を生成。
<dl>
</dl>

#### detachReservation ()

 キューから予約を削除。
<dl>
</dl>

#### fadeOutAll ()

 全ての映像と音声を、遅い速度でフェードアウト。
<dl>
</dl>

#### fadeSpeed () → {[Number](Number.html)}

 フェード速度を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isActive () → {Boolean}

 シーンがアクティブか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBusy () → {Boolean}

 フェード動作中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

 シーンの準備ができているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### popScene ()

 シーンを引き出す(pop)。
<dl>
</dl>

#### removeChild (child) → {Object}

[super] 子オブジェクトを取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  取り除くオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#removeChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 取り除かれたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

[super] 指定位置にある子オブジェクトを取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  取り除く位置 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#removeChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 取り除かれたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### slowFadeSpeed () → {[Number](Number.html)}

 遅いフェード速度を返す。
<dl>
</dl>

##### Returns:

Return the fade speed
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### start ()

 シーンの開始。
<dl>
</dl>

#### startFadeIn (duration opt, white opt)

 フェードインの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードインにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
</dl>

#### startFadeOut (duration opt, white opt)

 フェードアウトの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードアウトにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
</dl>

#### stop ()

 シーンの停止。
<dl>
</dl>

#### terminate ()

 遷移前のシーン中断。
<dl>
</dl>

#### update ()

 フレーム毎のアップデート。
<dl>
</dl>

#### updateChildren ()

 子オブジェクトのアップデート。
<dl>
</dl>

#### updateFade ()

 フェードのアップデート。
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
