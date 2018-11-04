# Class: Scene_Save

## Scene_Save ()

#### new Scene_Save ()

The scene class of the save screen.
<dl>
</dl>

### Extends

* [Scene_File](Scene_File.md)

### Methods

#### activateListWindow ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#activateListWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### actor () → {[Game_Actor](Game_Actor.md)}


Returns the current game actor.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#actor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
            </dl>

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
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |
| `index` | [Number](Number.md) |  追加位置 |

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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#addWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### attachReservation ()


 キューに予約を追加。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#attachReservation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### checkGameover ()


 ゲームオーバー状態か検査。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#checkGameover</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### create ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#create</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createFadeSprite ()


 フェード用のスプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#createFadeSprite</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createHelpWindow ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#createHelpWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createListWindow ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
[$1]($2.md)                        <li>
                            <a>Scene_File#createListWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createWindowLayer ()


 ウィンドウレイヤー[WindowLayer](WindowLayer.md) を生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#createWindowLayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### detachReservation ()


 キューから予約を削除。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#detachReservation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fadeOutAll ()


 全ての映像と音声を、遅い速度でフェードア[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#fadeOutAll</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fadeSpeed () → {[Number](Number.md)}


 フェード速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#fadeSpeed</a>
                        </li>
                    </ul>[Number](Number.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### firstSavefileIndex () → {[Number](Number.md)}


Returns the index of the first save file within the save scene.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#firstSavefileIndex</a>
                        </[String](String.md)
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

#### helpWindowText () → {[String](String.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#helpWindowText</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isActive () → {Boolean}


 シーンがアクティブか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#isActive</a>
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

#### isBusy () → {Boolean}


 フェード動作中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#isBusy</a>
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

#### isReady () → {Boolean}


 シーンの準備ができているか。
<dl>
                <dt>Inherited From:</dt>
                [String](String.md)
                    <ul>
                        <li>
                            <a>Scene_Base#isReady</a>
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

#### mode () → {[String](String.md)}


Returns the mode of the save scene.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#mode</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### nextActor ()


Moves to the next actor in the party.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#nextActor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onActorChange ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#onActorChange</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onSaveFailure ()


Handler for when save fails.
<dl>
</dl>

#### onSavefileOk ()


Handler for when a save file is confirmed within the save scene.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#onSavefileOk</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onSaveSuccess ()


Handler for when save is a success.
<dl>
</dl>

#### popScene ()


 シーンを引き出す(pop)。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#popScene</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### previousActor ()


Moves to the previous actor in the party.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#previousActor</a>
                        </li>
                    </ul>
                </dd>
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
            [Number](Number.md)
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
| `index` | [Number](Number.md) |  取り除く位置 |

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

[Number](Number.md)
 取り除かれたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### savefileId ()


Returns the current savefileId.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#savefileId</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBackgroundOpacity (opacity)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#setBackgroundOpacity</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### slowFadeSpeed () → {[Number](Number.md)}


 遅いフェード速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#slowFadeSpeed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)


Return the fade speed
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### start ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_File#start</a>
                        </li>
                    </ul>
                </dd>
            </d[Number](Number.md)

#### startFadeIn (duration opt, white opt)


 フェードインの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | <optional> | 30 |  フェードインにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#startFadeIn</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startFadeOut (duration opt, white opt)


 フェードアウトの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | <optional> | 30 |  フェードアウトにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#startFadeOut</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### stop ()


 シーンの停止。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#stop</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### terminate ()


 遷移前のシーン中断。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#terminate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()


 フレーム毎のアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateActor ()


Updates the current actor.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_MenuBase#updateActor</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateChildren ()


 子オブジェクトのアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#updateChildren</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateFade ()


 フェードのアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#updateFade</a>
                        </li>
                    </ul>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
