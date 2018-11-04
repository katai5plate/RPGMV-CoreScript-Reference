# Class: Scene_Title

## Scene_Title ()

#### new Scene_Title ()

The scene class of the title screen.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_commandWindow` | [Window_TitleCommand](Window_TitleCommand.html) |  |
| `_backSprite1` | [Sprite](Sprite.html) |  |
| `_backSprite2` | [Sprite](Sprite.html) |  |
| `_gameTitleSprite` | [Sprite](Sprite.html) |  |

<dl>
</dl>

### Extends

* [Scene_Base](Scene_Base.html)

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

#### centerSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.html) |  |

<dl>
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

#### commandContinue ()

Handler for the continue command.
<dl>
</dl>

#### commandNewGame ()

Handler for the new game command.
<dl>
</dl>

#### commandOptions ()

Handler for the options command.
<dl>
</dl>

#### create ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#create</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createBackground ()

Creates the title scene background.
<dl>
</dl>

#### createCommandWindow ()

Creates the command window on the title scene.
<dl>
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

#### createForeground ()

Creates the title screen foreground.
<dl>
</dl>

#### createWindowLayer ()

 ウィンドウレイヤー[WindowLayer](WindowLayer.html) を生成。
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

#### drawGameTitle ()

Draws the game title.
<dl>
</dl>

#### fadeOutAll ()

 全ての映像と音声を、遅い速度でフェードアウト。
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

#### fadeSpeed () → {[Number](Number.html)}

 フェード速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#fadeSpeed</a>
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

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#initialize</a>
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

<dl>
                <dt>Overrides:</dt>
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
                <dd>
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

#### playTitleMusic ()

Plays the title screen music upon enter the title scene.
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#slowFadeSpeed</a>
                        </li>
                    </ul>
                </dd>
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

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#start</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startFadeIn (duration opt, white opt)

 フェードインの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードインにかける時間 |
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
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードアウトにかける時間 |
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

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#terminate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#update</a>
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
