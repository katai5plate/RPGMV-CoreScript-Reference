# Class: Game_Interpreter

## Game_Interpreter (depth)

#### new Game_Interpreter (depth)

イベントコマンドを実行するクラス。 プラグインコマンドを処理する[pluginCommand](#plugincommand-command-args)などを含む。

イベントコマンドの[スクリプト]を実行する際は、このオブジェクトのインスタンスが this になるので、少々乱暴だが拡張コマンドをメソッドとして追加すると便利。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `depth` | [Number](Number.md) |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_depth` | [Number](Number.md) |  |
| `_branch` | Object |  |
| `_params` | [Array](Array.md).<*> |  |
| `_indent` | [Number](Number.md) |  |
| `_frameCount` | [Number](Number.md) |  |
| `_freezeChecker` | [Number](Number.md) |  |
| `_mapId` | [Number](Number.md) |  |
| `_eventId` | [Number](Number.md) |  |
| `_list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> |  |
| `_index` | [Number](Number.md) |  |
| `_waitCount` | [Number](Number.md) |  |
| `_waitMode` | [String](String.md) |  |
| `_comments` | [String](String.md) |  |
| `_character` | [Game_Event](Game_Event.md) |  |
| `_childInterpreter` | [Game_Interpreter](Game_Interpreter.md) |  |


### Methods

#### (static) requestImages (list, commonList opt)
コマンドに含まれる画像を用意する。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> |  | コマンドの配列 |
| `commonList` | [Array](Array.md).<*> | \<optional> |  |


#### changeHp (target, value, allowDeath)
[HP]を指定値により増減する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象アクターまたは敵 |
| `value` | [Number](Number.md) | 変更するHPの量 |
| `allowDeath` | Boolean | 死亡していても適用するか |


#### character (param) → {[Game_Character](Game_Character.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) |  |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Game_Character.html">Game_Character</a></span>
    </dd>
</dl>

#### checkFreeze () → {Boolean}


Checks if the interpreter has frozen.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### checkOverflow ()


#### clear ()


Clears the interpreter.

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


Returns the current event command.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.EventCommand</a></span>
                </dd>
            </dl>

#### eventId () → {[Number](Number.md)}


Returns the currrent eventId.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### executeCommand () → {Boolean}


Executes the event command; returns true or false based on execution.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### fadeSpeed () → {[Number](Number.md)}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### gameDataOperand (type, param1, param2) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) |  |
| `param1` | [Number](Number.md) |  |
| `param2` | [Number](Number.md) |  |


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


Returns true if the interpreter is running.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### iterateActorEx (param1, param2, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) |  |
| `param2` | [Number](Number.md) |  |
| `callback` | function |  |


#### iterateActorId (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) |  |
| `callback` | function |  |


#### iterateActorIndex (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) |  |
| `callback` | function |  |


#### iterateBattler (param1, param2, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) |  |
| `param2` | [Number](Number.md) |  |
| `callback` | function |  |


#### iterateEnemyIndex (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) |  |
| `callback` | function |  |


#### jumpTo (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |


#### nextEventCode () → {[Number](Number.md)}


Returns the next event code.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### operateValue (operation, operandType, operand) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `operation` | [Number](Number.md) |  |
| `operandType` | [Number](Number.md) |  |
| `operand` | [Number](Number.md) |  |


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### operateVariable (variableId, operationType, value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) |  |
| `operationType` | [Number](Number.md) |  |
| `value` | [Number](Number.md) |  |


#### pluginCommand (command, args)


 プラグインコマンドを受け取るメソッド。 このメソッドにプラグイン毎の処理を追加。 Example のような書き方が定番。

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


Sets up the interpreter with the list of event commands, and the given event Id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> |  |
| `eventId` | [Number](Number.md) |  |


#### setupChild (list, eventId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)> |  |
| `eventId` | [Number](Number.md) |  |


#### setupChoices (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<*> |  |


#### setupItemChoice (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<[Number](Number.md)> |  |


#### setupNumInput (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).<[Number](Number.md)> |  |


#### setupReservedCommonEvent () → {Boolean}


Returns true if the event is on the current map.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### setWaitMode (waitMode)


Sets the wait mode of the interpreter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `waitMode` | [String](String.md) |  |


#### skipBranch ()


Skips a conditional branch on the interpreter.

#### terminate ()


Terminates the game interpreter.

#### update ()


#### updateChild () → {Boolean}


Updates the child game interpreter.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWait () → {Boolean}


Updates the wait of the game interpreter.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWaitCount () → {Boolean}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWaitMode () → {Boolean}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### videoFileExt () → {[String](String.md)}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### wait (duration)


sets a specified wait duration for the interpreter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
