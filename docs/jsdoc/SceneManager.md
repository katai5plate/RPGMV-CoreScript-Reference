# Class: SceneManager

## SceneManager ()

#### new SceneManager ()

 シーン遷移を管理する静的クラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_scene` | [Scene_Base](Scene_Base.md) | [static]現在のシーン |
| `_nextScene` | [Scene_Base](Scene_Base.md) | [static]次のシーン |
| `_stack` | [Array](Array.md).<function()> | [static]シーンなどの履歴 |
| `_stopped` | Boolean | [static] |
| `_sceneStarted` | Boolean | [static] |
| `_exiting` | Boolean | [static] |
| `_previousClass` | function | [static]前のシーンなど |
| `_backgroundBitmap` | [Bitmap](Bitmap.md) | [static] |
| `_screenWidth` | [Number](Number.md) | [static]画面の幅(ピクセル) |
| `_screenHeight` | [Number](Number.md) | [static]画面の高さ(ピクセル) |
| `_boxWidth` | [Number](Number.md) | [static]幅(ピクセル) |
| `_boxHeight` | [Number](Number.md) | [static]高さ(ピクセル) |
| `_deltaTime` | [Number](Number.md) | [static] |
| `_currentTime` | [Number](Number.md) | [static] |
| `_accumulator` | [Number](Number.md) | [static] |

<dl>
</dl>

### Methods

#### (static) _getTimeInMsWithoutMobileSafari ()

Gets the current time in ms without on iOS Safari.
<dl>
</dl>

#### (static) backgroundBitmap () → {[Bitmap](Bitmap.md)}

 生成された背景用に(ぼかした)スナップショットを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) catchException (e)

 例外を受け取るハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event |  |

<dl>
</dl>

#### (static) changeScene ()

 シーンの切り替え。
<dl>
</dl>

#### (static) checkFileAccess ()

 ファイル操作ができない環境ならエラーを発生させる。
<dl>
</dl>

#### (static) checkPluginErrors ()

 プラグインの検査。
<dl>
</dl>

#### (static) checkWebGL ()

WebGL が使えない環境ならエラーを発生させる。
<dl>
</dl>

#### (static) clearStack ()

 履歴を消去。
<dl>
</dl>

#### (static) exit ()

 シーン遷移を終了。
<dl>
</dl>

#### (static) goto (sceneClass)

 指定したシーンに遷移。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | Object |  |

<dl>
</dl>

#### (static) initAudio ()

 音声の初期化。
<dl>
</dl>

#### (static) initGraphics ()

 画像の初期化。
<dl>
</dl>

#### (static) initialize ()

 初期化。
<dl>
</dl>

#### (static) initInput ()

 入力の初期化。
<dl>
</dl>

#### (static) initNwjs ()

NW.js の初期化。
<dl>
</dl>

#### (static) isCurrentSceneBusy () → {Boolean}

 シーンの実行中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isCurrentSceneStarted () → {Boolean}

 現在のシーンが開始されているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isNextScene (sceneClass) → {Boolean}

 指定したシーンが次のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPreviousScene (sceneClass) → {Boolean}

 指定したシーンが前のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isSceneChanging () → {Boolean}

 シーンの変更中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) onError (e)

 エラーハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event |  エラーイベント |

<dl>
</dl>

#### (static) onKeyDown (event)

 キー押下イベントハンドラ。ここではリロード(F5)とデバッグウィンドウ(F8)の制御を行なっている。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) onSceneCreate ()

 シーンが生成された時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) onSceneLoading ()

 シーンが読み込まれる時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) onSceneStart ()

 シーンが開始された時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) pop ()

 履歴からシーンを取り出して遷移。
<dl>
</dl>

#### (static) preferableRendererType () → {[String](String.md)}

 環境に適したレンダ方式を返す。
<dl>
</dl>

##### Returns:

 レンダ方式(canvas, webgl, auto のいずれか)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) prepareNextScene ()

 次のシーンの準備。
<dl>
</dl>

#### (static) push (sceneClass)

 指定したシーンに遷移し履歴を残す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  |

<dl>
</dl>

#### (static) renderScene ()

 シーンの描画。
<dl>
</dl>

#### (static) requestUpdate ()

 アップデートを要求。
<dl>
</dl>

#### (static) resume ()

 停止状態から復帰。
<dl>
</dl>

#### (static) run (sceneClass)

 指定したシーンの実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  シーンオブジェクト |

<dl>
</dl>

#### (static) setupErrorHandlers ()

 エラーハンドラを準備。
<dl>
</dl>

#### (static) shouldUseCanvasRenderer () → {Boolean}

canvas レンダ方式を使っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) snap () → {[Bitmap](Bitmap.md)}

 スナップショットを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) snapForBackground ()

 背景用に(ぼかした)スナップショットを生成。
<dl>
</dl>

#### (static) stop ()

 シーン遷移を停止。
<dl>
</dl>

#### (static) terminate ()

 終了。
<dl>
</dl>

#### (static) tickEnd ()

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

#### (static) tickStart ()

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

#### (static) update ()

 フレーム毎のアップデート。
<dl>
</dl>

#### (static) updateInputData ()

 入力データのアップデート。
<dl>
</dl>

#### (static) updateMain ()

 主要部分のアップデート。
<dl>
</dl>

#### (static) updateManagers ()

 マネージャのアップデート。
<dl>
</dl>

#### (static) updateScene ()

 シーンのアップデート。
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
