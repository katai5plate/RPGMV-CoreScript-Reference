# Class: Game_Interpreter

### new Game_Interpreter (depth)
[実行内容]に書かれたイベントコマンドを実行するクラス。 

[RPG.EventCommand](RPG.EventCommand.md) は、[Game_Event](Game_Event.md) や [Game_CommonEvent](Game_CommonEvent.md)、[Game_Troop](Game_Troop.md) の list プロパティに含まれ、Game_Interpreter は、それらのクラスの \_interpreter プロパティに含まれる。

また、このクラスはプラグインコマンドを処理する[pluginCommand](Game_Interpreter.md#plugincommand-command-args)を含む。

commandXXX(XXXは数字)というメソッドはイベントコマンドに対応した処理を行う、詳細は 
[RPGツクールMV プラグインコマンド集 リファレンス \[イベントコード一覧\]](https://docs.google.com/spreadsheets/d/1rOIzDuhLC6IqJPEFciYOmXWL_O7X9-hMValMs7DpWCk/edit#gid=1266374350) を参照。

イベントコマンドの[スクリプト]を実行する際は、このオブジェクトのインスタンスが this になるので、少々乱暴だが拡張コマンドをメソッドとして追加すると便利。

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `depth` | [Number](Number.md) | 世代(規定値:0)childとして何度よばれたかの深さ |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_depth` | [Number](Number.md) | 世代 |
| `_branch` | Object | インデントごとの分岐処理状況 |
| `_params` | [Array](Array.md).&lt;*&gt; | コマンドのパラメータ |
| `_indent` | [Number](Number.md) | インデントの深さ |
| `_frameCount` | [Number](Number.md) | フレーム数 |
| `_freezeChecker` | [Number](Number.md) | 停止チェック用カウンタ |
| `_mapId` | [Number](Number.md) | コマンドがあるマップID |
| `_eventId` | [Number](Number.md) | コマンドがあるイベントID |
| `_list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `_index` | [Number](Number.md) | 現在処理中のコマンドのインデックス |
| `_waitCount` | [Number](Number.md) | [ウェイト]用のカウンタ |
| `_waitMode` | [String](String.md) | 待っている処理の種類 |
| `_comments` | [Array](Array.md) | コメント行の一時保存 |
| `_character` | [Game_Event](Game_Event.md) | コマンド対象イベント |
| `_childInterpreter` | [Game_Interpreter](Game_Interpreter.md) | 子インタプリタ |


### Methods

#### (static) requestImages (list, commonList opt)
コマンドに含まれる画像を用意する。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> |  | コマンドの配列 |
| `commonList` | [Array](Array.md).<*> | \<optional> | 既に対象となったコモンイベントのインデックスの配列 |


#### changeHp (target, value, allowDeath)
[HP]を指定値により増減する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象アクターまたは敵 |
| `value` | [Number](Number.md) | 変更するHPの量 |
| `allowDeath` | Boolean | 死亡していても適用するか |


#### character (param) → {[Game_Character](Game_Character.md)}
指定したIDの[Game_Event](Game_Event.md)を返す。
0 だとコマンドを含むイベント自身を返す。
マイナスの値の場合 [Game_Player](Game_Player.md) を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | イベントID |


#### checkFreeze () → {Boolean}
インタプリタが固まっていないか。


#### checkOverflow ()
オーバーフローを起こしていないか。


#### clear ()
インタプリタの状態をクリア。


#### command101 () → {Boolean}
Show Text


#### command102 () → {Boolean}
Show Choices


#### command103 () → {Boolean}
Input Number


#### command104 () → {Boolean}
Select Item


#### command105 () → {Boolean}
Show Scrolling Text


#### command108 () → {Boolean}
Comment


#### command111 () → {Boolean}
Conditional Branch


#### command112 () → {Boolean}
Loop


#### command113 () → {Boolean}
Break Loop


#### command115 () → {Boolean}
Exit Event Processing


#### command117 () → {Boolean}
Common Event


#### command118 () → {Boolean}
Label


#### command119 () → {Boolean}
Jump to Label


#### command121 () → {Boolean}
Control Switches


#### command122 () → {Boolean}
Control Variables


#### command123 () → {Boolean}
Control Self Switch


#### command124 () → {Boolean}
Control Timer


#### command125 () → {Boolean}
Change Gold


#### command126 () → {Boolean}
Change Items


#### command127 () → {Boolean}
Change Weapons


#### command128 () → {Boolean}
Change Armors


#### command129 () → {Boolean}
Change Party Member


#### command132 () → {Boolean}
Change Battle BGM


#### command133 () → {Boolean}
Change Victory ME


#### command134 () → {Boolean}
Change Save Access


#### command135 () → {Boolean}
Change Menu Access


#### command136 () → {Boolean}
Change Encounter Disable


#### command137 () → {Boolean}
Change Formation Access


#### command138 () → {Boolean}
Change Window Color


#### command139 () → {Boolean}
Change Defeat ME


#### command140 () → {Boolean}
Change Vehicle BGM


#### command201 () → {Boolean}
Transfer Player


#### command202 () → {Boolean}
Set Vehicle Location


#### command203 () → {Boolean}
Set Event Location


#### command204 () → {Boolean}
Set Scroll Map


#### command205 () → {Boolean}
Set Movement Route


#### command206 () → {Boolean}
Getting On and Off Vehicles


#### command211 () → {Boolean}
Change Transparency


#### command212 () → {Boolean}
Show Animation


#### command213 () → {Boolean}
Show Balloon Icon


#### command214 () → {Boolean}
Erase Event


#### command216 () → {Boolean}
Change Player Followers


#### command217 () → {Boolean}
Gather Followers


#### command221 () → {Boolean}
Fadeout Screen


#### command222 () → {Boolean}
Fadein Screen


#### command223 () → {Boolean}
Tint Screen


#### command224 () → {Boolean}
Flash Screen


#### command225 () → {Boolean}
Shake Screen


#### command230 () → {Boolean}
Wait


#### command231 () → {Boolean}
Show Picture


#### command232 () → {Boolean}
Move Picture


#### command233 () → {Boolean}
Rotate Picture


#### command234 () → {Boolean}
Tint Picture


#### command235 () → {Boolean}
Erase Picture


#### command236 () → {Boolean}
Set Weather Effect


#### command241 () → {Boolean}
Play BGM


#### command242 () → {Boolean}
Fadeout BGM


#### command243 () → {Boolean}
Save BGM


#### command244 () → {Boolean}
Resume BGM


#### command245 () → {Boolean}
Play BGS


#### command246 () → {Boolean}
Fadeout BGS


#### command249 () → {Boolean}
Play ME


#### command250 () → {Boolean}
Play SE


#### command251 () → {Boolean}
Stop SE


#### command261 () → {Boolean}
Play Movie


#### command281 () → {Boolean}
Change Map Name Display


#### command282 () → {Boolean}
Change Tileset


#### command283 () → {Boolean}
Change Battle Back


#### command284 () → {Boolean}
Change Parallax


#### command285 () → {Boolean}
Get Location Info


#### command301 () → {Boolean}
Battle Processing


#### command302 () → {Boolean}
Shop Processing


#### command303 () → {Boolean}
Name Input Processing


#### command311 () → {Boolean}
Change HP


#### command312 () → {Boolean}
Change MP


#### command313 () → {Boolean}
Change State


#### command314 () → {Boolean}
Recover All


#### command315 () → {Boolean}
Change EXP


#### command316 () → {Boolean}
Change Level


#### command317 () → {Boolean}
Change Parameter


#### command318 () → {Boolean}
Change Skill


#### command319 () → {Boolean}
Change Equipment


#### command320 () → {Boolean}
Change Name


#### command321 () → {Boolean}
Change Class


#### command322 () → {Boolean}
Change Actor Images


#### command323 () → {Boolean}
Change Vehicle Image


#### command324 () → {Boolean}
Change Nickname


#### command325 () → {Boolean}
Change Profile


#### command326 () → {Boolean}
Change TP


#### command331 () → {Boolean}
Change Enemy HP


#### command332 () → {Boolean}
Change Enemy MP


#### command333 () → {Boolean}
Change Enemy State


#### command334 () → {Boolean}
Enemy Recover All


#### command335 () → {Boolean}
Enemy Appear


#### command336 () → {Boolean}
Enemy Transform


#### command337 () → {Boolean}
Show Battle Animation


#### command339 () → {Boolean}
Force Action


#### command340 () → {Boolean}
Abort Battle


#### command342 () → {Boolean}
Change Enemy TP


#### command351 () → {Boolean}
Open Menu Screen


#### command352 () → {Boolean}
Open Save Screen


#### command353 () → {Boolean}
Game Over


#### command354 () → {Boolean}
Return to Title Screen


#### command355 () → {Boolean}
Script


#### command356 () → {Boolean}
[プラグインコマンド]の処理。


#### command402 () → {Boolean}
When [**]


#### command403 () → {Boolean}
When Cancel


#### command411 () → {Boolean}
Else


#### command413 () → {Boolean}
Repeat Above


#### command601 () → {Boolean}
If Win


#### command602 () → {Boolean}
If Escape


#### command603 () → {Boolean}
If Lose


#### currentCommand () → {[RPG.EventCommand](RPG.EventCommand.md)}
処理対象となっているコマンドを返す。


#### eventId () → {[Number](Number.md)}
コマンド呼び出し元 イベントID を返す。


#### executeCommand () → {Boolean}
処理対象のコマンドを実行して、結果を返す。


#### fadeSpeed () → {[Number](Number.md)}
フェード速度を返す。

See: [command221](Game_Interpreter.md#command221---boolean)、[command222](Game_Interpreter.md#command222---boolean)


#### gameDataOperand (type, param1, param2) → {[Number](Number.md)}
指定されたゲームデータを返す。

param1, param2 は type によって意味が変わる引数で、例えば type が 7 の場合 param1 は 0:Map ID, 1:Party Members, 2: Gold, 3: Steps, 4:Play Time, 5:Timer, 6:Save Count, 7:Battle Count, 8:Win Count, 9:Escape Count を意味する。

コマンド実行用のメソッドなので、各データが欲しい場合は例えば this.gameDataOperand( 7, 4 ) と書くより $gameSystem.playtime() と書いた方がいいだろう。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | 0:Item, 1:Weapon, 2:Armor, 3:Actor, 4:Enemy, 5:Character, 6:Party, 7: Other |
| `param1` | [Number](Number.md) | typeによって意味が異なる |
| `param2` | [Number](Number.md) | typeによって意味が異なる |


#### initialize ()
 オブジェクト生成時の初期化。


#### isRunning () → {Boolean}
インタプリタが稼働しているか。


#### iterateActorEx (param1, param2, callback)
アクターに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:直接ID指定、それ以外は変数指定 |
| `param2` | [Number](Number.md) | paramが0だとアクターID、それ以外はIDの入った変数の番号 |
| `callback` | function | コールバック関数 |


#### iterateActorId (param, callback)
アクターに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターのID(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateActorIndex (param, callback)
アクターに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターの隊列番号(0:全体)  |
| `callback` | function | コールバック関数 |


#### iterateBattler (param1, param2, callback)
バトラーに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:エネミー |
| `param2` | [Number](Number.md) | 適用するバトラーの番号(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateEnemyIndex (param, callback)
エネミーに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するエネミーの番号(0:全体 |
| `callback` | function | コールバック関数 |


#### jumpTo (index)
指定インデックスに処理対象を移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | コマンドのインデックス |


#### nextEventCode () → {[Number](Number.md)}
次のイベントコード(commandXXX の XXX部分)を返す。


#### operateValue (operation, operandType, operand) → {[Number](Number.md)}
符号の計算を行って結果を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `operation` | [Number](Number.md) | 0:プラス, 他はマイナス  |
| `operandType` | [Number](Number.md) | 0:直接の値, それ以外:変数  |
| `operand` | [Number](Number.md) |operandTypeが 0:値, それ以外:変数ID |


#### operateVariable (variableId, operationType, value)
値の計算を行って結果を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |
| `operationType` | [Number](Number.md) | 演算子の種類(0:=, 1:+, 2:-, 3:×, 4:÷, 5:%) |
| `value` | [Number](Number.md) | 値 |


#### pluginCommand (command, args)
 プラグインコマンドを受け取るメソッド。
 このメソッドにプラグイン毎の処理を追加。 Example のような書き方が定番。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `command` | [String](String.md) |  コマンド名 |
| `args` | [Array](Array.md).<[String](String.md)> |  引数の配列 |


##### Example

```
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function ( command, args ){
   _Game_Interpreter_pluginCommand.call( this, command, args );
  // ここにプラグインごとのコマンド名の判定と実行内容を書く
```


#### setup (list, eventId)
インタプリタの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChild (list, eventId)
[コモンイベント]用の子インタプリタの準備。

See: [command117](Game_Interpreter.md#command117---boolean)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChoices (params)
選択ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<*> | 選択ウィンドウの設定 |


#### setupItemChoice (params)
アイテム選択ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<[Number](Number.md)> | アイテム選択ウィンドウの設定 |


#### setupNumInput (params)
数値入力ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<[Number](Number.md)> | 数値入力ウィンドウの設定 |


#### setupReservedCommonEvent () → {Boolean}
コモンイベントが保存されていたら準備し、保存されていたかを返す。


#### setWaitMode (waitMode)
待ち対象を設定。

待ち対象には次の種類がある。
message, transfer, scroll, route, animation, balloon, gather, action, video, image

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `waitMode` | [String](String.md) | 待ち対象の種類 |


#### skipBranch ()
条件などの分岐を飛ばす。


#### terminate ()
終端処理を行う。


#### update ()
フレーム毎のアップデート。

#### updateChild () → {Boolean}
子インタプリタをアップデート。


#### updateWait () → {Boolean}
待ち状態をアップデート。


#### updateWaitCount () → {Boolean}
待ちカウントをアップデート。


#### updateWaitMode () → {Boolean}
待ち対象をアップデート


#### videoFileExt () → {[String](String.md)}
ビデオの拡張子 '.webm' か '.mp4' を返す。


#### wait (duration)
指定フレームだけインタプリタの実行を待つ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フレーム数 |



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
