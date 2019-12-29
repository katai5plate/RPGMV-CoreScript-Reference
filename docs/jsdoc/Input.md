# Class: Input
キーボードとゲームパッド(コントローラ)の入力に関する静的クラス。

JavaScriptの [KeyboardEvent](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent)と[Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) 周りを扱う。

関連クラス: [Window_Selectable](Window_Selectable.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `keyRepeatWait` | [Number](Number.md) | [static] キーリピートまでの待ち時間(フレーム) |
| `keyRepeatInterval` | [Number](Number.md) | [static] キーリピート間隔(フレーム) |
| `keyMapper` | Object | [static] [キーボード入力マップ](Input.md#キーボード入力マップ) |
| `gamepadMapper` | Object | [static] [ゲームパッド入力マップ](Input.md#ゲームパッド入力マップ)  |
| `dir4` | [Number](Number.md) | [static][read-only] 4方向入力の数値(テンキー対応) |
| `dir8` | [Number](Number.md) | [static][read-only]  8方向入力の数値(テンキー対応) |
| `date` | [Number](Number.md) | [static][read-only] 最後に入力された時刻(ミリ秒) |
| `_currentState` | Object | [static] 現在の入力状態 {[key: string]: boolean} |
| `_previousState` | Object | [static] 直前の入力状態 {[key: string]: boolean} |
| `_gamepadStates` | [Array](Array.md).&lt;[Array](Array.md).&lt;Boolean&gt;&gt; | [static] ゲームパッドの状態<br />(ゲームパッドの番号, code, 押されているか) |
| `_latestButton` | [String](String.md) | [static] 最新のボタン |
| `_pressedTime` | [Number](Number.md) | [static] 入力時間 |
| `_dir4` | [Number](Number.md) | [static] 4方向入力の数値 |
| `_dir8` | [Number](Number.md) | [static] 8方向入力の数値 |
| `_preferredAxis` | [String](String.md) | [static] xとyのうち優先軸<br />(4方向入力を自然にするのに使われる)|
| `_date` | [Number](Number.md) | [static] 入力時刻 |

#### キーボード入力マップ
<code>{ code: 'name', ...}</code> の形の、キーコードと名称の変換テーブル。<br />
以下は規定値。

| code | name | キーボード |
| --- | --- | --- |
| 9 | tab | tab |
| 13 | ok | enter |
| 16 | shift | shift |
| 17 | control | control |
| 18 | control | alt |
| 27 | escape | escape |
| 32 | ok | space |
| 33 | pageup | pageup |
| 34 | pagedown | pagedown |
| 37 | left | left arrow |
| 38 | up | up arrow |
| 39 | right | right arrow |
| 40 | down | down arrow |
| 45 | escape | insert |
| 81 | pageup | Q |
| 87 | pagedown | W |
| 88 | escape | X |
| 90 | ok | Z |
| 96 | escape | numpad 0 |
| 98 | down | numpad 2 |
| 100 | left | numpad 4 |
| 102 | right | numpad 6 |
| 104 | up | numpad 8 |
| 120 | debug | F9 |

#### ゲームパッド入力マップ
<code>{ code: 'name', ...}</code> の形の、ゲームパッドのボタンコードと名称の変換テーブル。<br />
バッドによってボタン配置はまちまち。Xboxパッドの対応ボタンは参考まで。以下は規定値。


| code | name | Xboxパッド |
| --- | --- | --- |
| 0 | ok | A |
| 1 | cancel | B |
| 2 | shift | X |
| 3 | menu | Y |
| 4 | pageup | LB(パンパー) |
| 5 | pagedown | RB(パンパー) |
| 6 |  | LT(トリガー) |
| 7 |  | RT(トリガー) |
| 8 |  | back |
| 9 |  | Start |
| 10 |  | L stick push |
| 11 |  | R stick push |
| 12 | up | ↑ |
| 13 | down | ↓ |
| 14 | left | ← |
| 15 | right | → |


### Methods

#### (static) _isEscapeCompatible (keyName) → {Boolean}
ESCキーに当たるキー(cancel, menu)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | キー名称 |


#### (static) _makeNumpadDirection (x, y) → {[Number](Number.md)}
x,y方向の入力からテンキー方向(0 : ニュートラル)を生成。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x方向の入力(-1, 0, 1) |
| `y` | [Number](Number.md) | y方向の入力(-1, 0, 1) |


#### (static) _onKeyDown (event)
キーが押し下げられた時に呼ばれるイベントハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) _onKeyUp (event)
キーが離された時に呼ばれるイベントハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) _onLostFocus ()
フォーカスが外れた時に呼ばれるイベントハンドラ。


#### (static) _pollGamepads ()
ゲームパッドの状態を監視(ポーリング)する関数。


#### (static) _setupEventHandlers ()
イベントハンドラの設定。


#### (static) _shouldPreventDefault (keyCode)
イベントの規定動作を防ぐか。<br/>
keyCode が 33:pageup, 34:pagedown, 37:left, 38:up, 39:right, 40:down のいずれかであった場合 true を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyCode` | [Number](Number.md) | キーコード |


#### (static) _signX ()
x軸の入力(-1, 0, 1)を返す。


#### (static) _signY ()
y軸の入力(-1, 0, 1)を返す。


#### (static) _updateDirection ()
向きをアップデート。


#### (static) _updateGamepadState (gamepad, index)
ゲームパッドの状態をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `gamepad` | Gamepad | ゲームパッドオブジェクト |


#### (static) _wrapNwjsAlert ()
NW.jsの警告のラッパー。

#### (static) clear ()
入力データを初期化。


#### (static) initialize ()
 オブジェクト生成時の初期化。


#### (static) isLongPressed (keyName) → {Boolean}
指定キーが長押し状態か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | キー名称 |


#### (static) isPressed (keyName) → {Boolean}
指定キーが押されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | キー名称 |


#### (static) isRepeated (keyName) → {Boolean}
指定キーがキーリピート状態か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | キー名称 |


#### (static) isTriggered (keyName) → {Boolean}
指定キーが押された直後か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `keyName` | [String](String.md) | キー名称 |


#### (static) update ()
フレーム毎のアップデート。


