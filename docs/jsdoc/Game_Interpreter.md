# Class: Game_Interpreter

## Game_Interpreter (depth)

#### new Game_Interpreter (depth)

[実行内容]に書かれたイベントコマンドを実行するクラス。 

[EventCommand](RPG.EventCommand.md) は、[Game_Event](Game_Event.md) や [Game_CommonEvent](Game_CommonEvent.md)、[Game_Troop](Game_Troop.md) の list プロパティに含まれ、Game_Interpreter は、それらのクラスの \_interpreter プロパティに含まれる。

また、このクラスはプラグインコマンドを処理する[pluginCommand](#plugincommand-command-args)を含む。

commandXXX(XXXは数字)というメソッドはイベントコマンドに対応した処理を行う、詳細は 
[RPGツクールMV プラグインコマンド集 リファレンス \[イベントコード一覧\]](https://docs.google.com/spreadsheets/d/1rOIzDuhLC6IqJPEFciYOmXWL_O7X9-hMValMs7DpWCk/edit#gid=1266374350) を参照。

イベントコマンドの[スクリプト]を実行する際は、このオブジェクトのインスタンスが this になるので、少々乱暴だが拡張コマンドをメソッドとして追加すると便利。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `depth` | [Number](Number.md) | 世代(規定値:0)childとして何度よばれたかの深さ |


##### Properties:

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


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Character</span>
    </dd>
</dl>


#### checkFreeze () → {Boolean}
インタプリタが固まっていないか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### checkOverflow ()
オーバーフローを起こしていないか。


#### clear ()
インタプリタの状態をクリア。


#### command101 () → {Boolean}


Show Text

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command102 () → {Boolean}


Show Choices

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command103 () → {Boolean}


Input Number

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command104 () → {Boolean}


Select Item

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command105 () → {Boolean}


Show Scrolling Text

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command108 () → {Boolean}


Comment

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command111 () → {Boolean}


Conditional Branch

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command112 () → {Boolean}


Loop

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command113 () → {Boolean}


Break Loop

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command115 () → {Boolean}


Exit Event Processing

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command117 () → {Boolean}


Common Event

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command118 () → {Boolean}


Label

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command119 () → {Boolean}


Jump to Label

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command121 () → {Boolean}


Control Switches

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command122 () → {Boolean}


Control Variables

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command123 () → {Boolean}


Control Self Switch

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command124 () → {Boolean}


Control Timer

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command125 () → {Boolean}


Change Gold

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command126 () → {Boolean}


Change Items

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command127 () → {Boolean}


Change Weapons

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command128 () → {Boolean}


Change Armors

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command129 () → {Boolean}


Change Party Member

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command132 () → {Boolean}


Change Battle BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command133 () → {Boolean}


Change Victory ME

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command134 () → {Boolean}


Change Save Access

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command135 () → {Boolean}


Change Menu Access

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command136 () → {Boolean}


Change Encounter Disable

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command137 () → {Boolean}


Change Formation Access

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command138 () → {Boolean}


Change Window Color

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command139 () → {Boolean}


Change Defeat ME

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command140 () → {Boolean}


Change Vehicle BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command201 () → {Boolean}


Transfer Player

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command202 () → {Boolean}


Set Vehicle Location

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command203 () → {Boolean}


Set Event Location

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command204 () → {Boolean}


Set Scroll Map

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command205 () → {Boolean}


Set Movement Route

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command206 () → {Boolean}


Getting On and Off Vehicles

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command211 () → {Boolean}


Change Transparency

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command212 () → {Boolean}


Show Animation

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command213 () → {Boolean}


Show Balloon Icon

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command214 () → {Boolean}


Erase Event

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command216 () → {Boolean}


Change Player Followers

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command217 () → {Boolean}


Gather Followers

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command221 () → {Boolean}


Fadeout Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command222 () → {Boolean}


Fadein Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command223 () → {Boolean}


Tint Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command224 () → {Boolean}


Flash Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command225 () → {Boolean}


Shake Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command230 () → {Boolean}


Wait

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command231 () → {Boolean}


Show Picture

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command232 () → {Boolean}


Move Picture

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command233 () → {Boolean}


Rotate Picture

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command234 () → {Boolean}


Tint Picture

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command235 () → {Boolean}


Erase Picture

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command236 () → {Boolean}


Set Weather Effect

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command241 () → {Boolean}


Play BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command242 () → {Boolean}


Fadeout BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command243 () → {Boolean}


Save BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command244 () → {Boolean}


Resume BGM

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command245 () → {Boolean}


Play BGS

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command246 () → {Boolean}


Fadeout BGS

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command249 () → {Boolean}


Play ME

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command250 () → {Boolean}


Play SE

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command251 () → {Boolean}


Stop SE

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command261 () → {Boolean}


Play Movie

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command281 () → {Boolean}


Change Map Name Display

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command282 () → {Boolean}


Change Tileset

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command283 () → {Boolean}


Change Battle Back

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command284 () → {Boolean}


Change Parallax

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command285 () → {Boolean}


Get Location Info

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command301 () → {Boolean}


Battle Processing

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command302 () → {Boolean}


Shop Processing

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command303 () → {Boolean}


Name Input Processing

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command311 () → {Boolean}


Change HP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command312 () → {Boolean}


Change MP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command313 () → {Boolean}


Change State

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command314 () → {Boolean}


Recover All

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command315 () → {Boolean}


Change EXP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command316 () → {Boolean}


Change Level

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command317 () → {Boolean}


Change Parameter

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command318 () → {Boolean}


Change Skill

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command319 () → {Boolean}


Change Equipment

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command320 () → {Boolean}


Change Name

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command321 () → {Boolean}


Change Class

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command322 () → {Boolean}


Change Actor Images

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command323 () → {Boolean}


Change Vehicle Image

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command324 () → {Boolean}


Change Nickname

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command325 () → {Boolean}


Change Profile

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command326 () → {Boolean}


Change TP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command331 () → {Boolean}


Change Enemy HP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command332 () → {Boolean}


Change Enemy MP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command333 () → {Boolean}


Change Enemy State

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command334 () → {Boolean}


Enemy Recover All

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command335 () → {Boolean}


Enemy Appear

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command336 () → {Boolean}


Enemy Transform

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command337 () → {Boolean}


Show Battle Animation

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command339 () → {Boolean}


Force Action

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command340 () → {Boolean}


Abort Battle

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command342 () → {Boolean}


Change Enemy TP

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command351 () → {Boolean}


Open Menu Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command352 () → {Boolean}


Open Save Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command353 () → {Boolean}


Game Over

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command354 () → {Boolean}


Return to Title Screen

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command355 () → {Boolean}


Script

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command356 () → {Boolean}

[プラグインコマンド]の処理。
<dl>

</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command402 () → {Boolean}


When [**]

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command403 () → {Boolean}


When Cancel

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command411 () → {Boolean}


Else

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command413 () → {Boolean}


Repeat Above

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command601 () → {Boolean}


If Win

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command602 () → {Boolean}


If Escape

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### command603 () → {Boolean}


If Lose

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### currentCommand () → {[RPG.EventCommand](RPG.EventCommand.md)}
処理対象となっているコマンドを返す。

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.EventCommand</a></span>
                </dd>
            </dl>


#### eventId () → {[Number](Number.md)}
コマンド呼び出し元 イベントID を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>


#### executeCommand () → {Boolean}
処理対象のコマンドを実行して、結果を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### fadeSpeed () → {[Number](Number.md)}
フェード速度を返す。

See: [command221](Game_Interpreter.md#command221---boolean)、[command222](Game_Interpreter.md#command222---boolean)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>


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

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### initialize ()
 オブジェクト生成時の初期化。


#### isRunning () → {Boolean}
インタプリタが稼働しているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


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

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


#### operateValue (operation, operandType, operand) → {[Number](Number.md)}
符号の計算を行って結果を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `operation` | [Number](Number.md) | 0:プラス, 他はマイナス  |
| `operandType` | [Number](Number.md) | 0:直接の値, それ以外:変数  |
| `operand` | [Number](Number.md) |operandTypeが 0:値, それ以外:変数ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span><a>Number</a></span>
	</dd>
</dl>


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
子インタプリタの準備。

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

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


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

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### updateWait () → {Boolean}
待ち状態をアップデート。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### updateWaitCount () → {Boolean}
待ちカウントをアップデート。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### updateWaitMode () → {Boolean}
待ち対象をアップデート

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### videoFileExt () → {[String](String.md)}
ビデオの拡張子 '.webm' か '.mp4' を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### wait (duration)
指定フレームだけインタプリタの実行を待つ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フレーム数 |



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
