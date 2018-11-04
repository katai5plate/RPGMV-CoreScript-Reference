# Class: Game_Interpreter

## Game_Interpreter (depth)

#### new Game_Interpreter (depth)

 イベントコマンドを実行するクラス。 プラグインコマンドを処理する[Game_Interpreter#pluginCommand](Game_Interpreter.html#pluginCommand) などを含む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `depth` | [Number](Number.html) |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_depth` | [Number](Number.html) |  |
| `_branch` | Object |  |
| `_params` | [Array](Array.html).<*> |  |
| `_indent` | [Number](Number.html) |  |
| `_frameCount` | [Number](Number.html) |  |
| `_freezeChecker` | [Number](Number.html) |  |
| `_mapId` | [Number](Number.html) |  |
| `_eventId` | [Number](Number.html) |  |
| `_list` | [Array](Array.html).<[RPG.EventCommand](RPG.EventCommand.html)> |  |
| `_index` | [Number](Number.html) |  |
| `_waitCount` | [Number](Number.html) |  |
| `_waitMode` | [String](String.html) |  |
| `_comments` | [String](String.html) |  |
| `_character` | [Game_Event](Game_Event.html) |  |
| `_childInterpreter` | [Game_Interpreter](Game_Interpreter.html) |  |

<dl>
</dl>

### Methods

#### (static) requestImages (list, commonList)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.html).<[RPG.EventCommand](RPG.EventCommand.html)> |  |
| `commonList` | [Array](Array.html).<*> |  |

<dl>
</dl>

#### changeHp (target, value, allowDeath)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Number](Number.html) |  |
| `value` | [Number](Number.html) |  |
| `allowDeath` | [Number](Number.html) |  |

<dl>
</dl>

#### character (param) → {[Game_Character](Game_Character.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Character</a></span>
                </dd>
            </dl>

#### checkFreeze () → {Boolean}

Checks if the interpreter has frozen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkOverflow ()

<dl>
</dl>

#### clear ()

Clears the interpreter.
<dl>
</dl>

#### command101 () → {Boolean}

Show Text
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command102 () → {Boolean}

Show Choices
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command103 () → {Boolean}

Input Number
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command104 () → {Boolean}

Select Item
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command105 () → {Boolean}

Show Scrolling Text
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command108 () → {Boolean}

Comment
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command111 () → {Boolean}

Conditional Branch
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command112 () → {Boolean}

Loop
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command113 () → {Boolean}

Break Loop
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command115 () → {Boolean}

Exit Event Processing
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command117 () → {Boolean}

Common Event
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command118 () → {Boolean}

Label
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command119 () → {Boolean}

Jump to Label
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command121 () → {Boolean}

Control Switches
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command122 () → {Boolean}

Control Variables
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command123 () → {Boolean}

Control Self Switch
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command124 () → {Boolean}

Control Timer
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command125 () → {Boolean}

Change Gold
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command126 () → {Boolean}

Change Items
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command127 () → {Boolean}

Change Weapons
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command128 () → {Boolean}

Change Armors
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command129 () → {Boolean}

Change Party Member
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command132 () → {Boolean}

Change Battle BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command133 () → {Boolean}

Change Victory ME
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command134 () → {Boolean}

Change Save Access
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command135 () → {Boolean}

Change Menu Access
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command136 () → {Boolean}

Change Encounter Disable
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command137 () → {Boolean}

Change Formation Access
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command138 () → {Boolean}

Change Window Color
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command139 () → {Boolean}

Change Defeat ME
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command140 () → {Boolean}

Change Vehicle BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command201 () → {Boolean}

Transfer Player
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command202 () → {Boolean}

Set Vehicle Location
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command203 () → {Boolean}

Set Event Location
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command204 () → {Boolean}

Set Scroll Map
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command205 () → {Boolean}

Set Movement Route
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command206 () → {Boolean}

Getting On and Off Vehicles
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command211 () → {Boolean}

Change Transparency
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command212 () → {Boolean}

Show Animation
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command213 () → {Boolean}

Show Balloon Icon
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command214 () → {Boolean}

Erase Event
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command216 () → {Boolean}

Change Player Followers
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command217 () → {Boolean}

Gather Followers
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command221 () → {Boolean}

Fadeout Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command222 () → {Boolean}

Fadein Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command223 () → {Boolean}

Tint Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command224 () → {Boolean}

Flash Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command225 () → {Boolean}

Shake Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command230 () → {Boolean}

Wait
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command231 () → {Boolean}

Show Picture
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command232 () → {Boolean}

Move Picture
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command233 () → {Boolean}

Rotate Picture
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command234 () → {Boolean}

Tint Picture
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command235 () → {Boolean}

Erase Picture
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command236 () → {Boolean}

Set Weather Effect
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command241 () → {Boolean}

Play BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command242 () → {Boolean}

Fadeout BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command243 () → {Boolean}

Save BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command244 () → {Boolean}

Resume BGM
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command245 () → {Boolean}

Play BGS
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command246 () → {Boolean}

Fadeout BGS
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command249 () → {Boolean}

Play ME
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command250 () → {Boolean}

Play SE
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command251 () → {Boolean}

Stop SE
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command261 () → {Boolean}

Play Movie
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command281 () → {Boolean}

Change Map Name Display
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command282 () → {Boolean}

Change Tileset
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command283 () → {Boolean}

Change Battle Back
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command284 () → {Boolean}

Change Parallax
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command285 () → {Boolean}

Get Location Info
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command301 () → {Boolean}

Battle Processing
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command302 () → {Boolean}

Shop Processing
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command303 () → {Boolean}

Name Input Processing
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command311 () → {Boolean}

Change HP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command312 () → {Boolean}

Change MP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command313 () → {Boolean}

Change State
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command314 () → {Boolean}

Recover All
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command315 () → {Boolean}

Change EXP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command316 () → {Boolean}

Change Level
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command317 () → {Boolean}

Change Parameter
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command318 () → {Boolean}

Change Skill
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command319 () → {Boolean}

Change Equipment
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command320 () → {Boolean}

Change Name
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command321 () → {Boolean}

Change Class
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command322 () → {Boolean}

Change Actor Images
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command323 () → {Boolean}

Change Vehicle Image
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command324 () → {Boolean}

Change Nickname
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command325 () → {Boolean}

Change Profile
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command326 () → {Boolean}

Change TP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command331 () → {Boolean}

Change Enemy HP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command332 () → {Boolean}

Change Enemy MP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command333 () → {Boolean}

Change Enemy State
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command334 () → {Boolean}

Enemy Recover All
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command335 () → {Boolean}

Enemy Appear
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command336 () → {Boolean}

Enemy Transform
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command337 () → {Boolean}

Show Battle Animation
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command339 () → {Boolean}

Force Action
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command340 () → {Boolean}

Abort Battle
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command342 () → {Boolean}

Change Enemy TP
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command351 () → {Boolean}

Open Menu Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command352 () → {Boolean}

Open Save Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command353 () → {Boolean}

Game Over
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command354 () → {Boolean}

Return to Title Screen
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command355 () → {Boolean}

Script
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command356 () → {Boolean}

Plugin Command
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
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command403 () → {Boolean}

When Cancel
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command411 () → {Boolean}

Else
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command413 () → {Boolean}

Repeat Above
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command601 () → {Boolean}

If Win
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command602 () → {Boolean}

If Escape
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### command603 () → {Boolean}

If Lose
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### currentCommand () → {[RPG.EventCommand](RPG.EventCommand.html)}

Returns the current event command.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.EventCommand</a></span>
                </dd>
            </dl>

#### eventId () → {[Number](Number.html)}

Returns the currrent eventId.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### executeCommand () → {Boolean}

Executes the event command; returns true or false based on execution.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### fadeSpeed () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### gameDataOperand (type, param1, param2) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) |  |
| `param1` | [Number](Number.html) |  |
| `param2` | [Number](Number.html) |  |

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
</dl>

#### isRunning () → {Boolean}

Returns true if the interpreter is running.
<dl>
</dl>

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
| `param1` | [Number](Number.html) |  |
| `param2` | [Number](Number.html) |  |
| `callback` | function |  |

<dl>
</dl>

#### iterateActorId (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.html) |  |
| `callback` | function |  |

<dl>
</dl>

#### iterateActorIndex (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.html) |  |
| `callback` | function |  |

<dl>
</dl>

#### iterateBattler (param1, param2, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.html) |  |
| `param2` | [Number](Number.html) |  |
| `callback` | function |  |

<dl>
</dl>

#### iterateEnemyIndex (param, callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.html) |  |
| `callback` | function |  |

<dl>
</dl>

#### jumpTo (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  |

<dl>
</dl>

#### nextEventCode () → {[Number](Number.html)}

Returns the next event code.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### operateValue (operation, operandType, operand) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `operation` | [Number](Number.html) |  |
| `operandType` | [Number](Number.html) |  |
| `operand` | [Number](Number.html) |  |

<dl>
</dl>

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
| `variableId` | [Number](Number.html) |  |
| `operationType` | [Number](Number.html) |  |
| `value` | [Number](Number.html) |  |

<dl>
</dl>

#### pluginCommand (command, args)

 プラグインコマンドを受け取るメソッド。 このメソッドにプラグイン毎の処理を追加。 次のような書き方が定番。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `command` | [String](String.html) |  コマンド名 |
| `args` | [Array](Array.html).<string> |  引数の配列 |

<dl>
</dl>

##### Example

```
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function ( command, args ){
   _Game_Interpreter_pluginCommand.call( this, command, args );
  // &#x3053;&#x3053;&#x306B;&#x30D7;&#x30E9;&#x30B0;&#x30A4;&#x30F3;&#x3054;&#x3068;&#x306E;&#x30B3;&#x30DE;&#x30F3;&#x30C9;&#x540D;&#x306E;&#x5224;&#x5B9A;&#x3068;&#x5B9F;&#x884C;&#x5185;&#x5BB9;&#x3092;&#x66F8;&#x304F;
};
```

#### setup (list, eventId)

Sets up the interpreter with the list of event commands, and the given event Id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.html).<[RPG.EventCommand](RPG.EventCommand.html)> |  |
| `eventId` | [Number](Number.html) |  |

<dl>
</dl>

#### setupChild (list, eventId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.html).<[RPG.EventCommand](RPG.EventCommand.html)> |  |
| `eventId` | [Number](Number.html) |  |

<dl>
</dl>

#### setupChoices (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.html).<*> |  |

<dl>
</dl>

#### setupItemChoice (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.html).<[Number](Number.html)> |  |

<dl>
</dl>

#### setupNumInput (params)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.html).<[Number](Number.html)> |  |

<dl>
</dl>

#### setupReservedCommonEvent () → {Boolean}

Returns true if the event is on the current map.
<dl>
</dl>

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
| `waitMode` | [String](String.html) |  |

<dl>
</dl>

#### skipBranch ()

Skips a conditional branch on the interpreter.
<dl>
</dl>

#### terminate ()

Terminates the game interpreter.
<dl>
</dl>

#### update ()

<dl>
</dl>

#### updateChild () → {Boolean}

Updates the child game interpreter.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWait () → {Boolean}

Updates the wait of the game interpreter.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWaitCount () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### updateWaitMode () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### videoFileExt () → {[String](String.html)}

<dl>
</dl>

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
| `duration` | [Number](Number.html) |  |

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
