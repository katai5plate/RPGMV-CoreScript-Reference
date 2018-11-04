# Class: Game_System

## Game_System ()

#### new Game_System ()

 システムデータを扱うクラス。 大域変数 [$gameSystem](global.html#$gameSystem) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_saveEnabled` | Boolean |  |
| `_menuEnabled` | Boolean |  |
| `_encounterEnabled` | Boolean |  |
| `_formationEnabled` | Boolean |  |
| `_battleCount` | [Number](Number.md) |  |
| `_winCount` | [Number](Number.md) |  |
| `_escapeCount` | [Number](Number.md) |  |
| `_saveCount` | [Number](Number.md) |  |
| `_versionId` | [Number](Number.md) |  |
| `_framesOnSave` | [Number](Number.md) |  |
| `_bgmOnSave` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_bgsOnSave` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_windowTone` | [Array](Array.md).<[Number](Number.md)> |  |
| `_battleBgm` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_victoryMe` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_defeatMe` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_savedBgm` | [RPG.AudioFile](RPG.AudioFile.md) |  |
| `_walkingBgm` | [RPG.AudioFile](RPG.AudioFile.md) |  |

<dl>
</dl>

### Methods

#### battleBgm () → {[RPG.AudioFile](RPG.AudioFile.md)}


Returns the current battle background music.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.AudioFile</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### battleCount () → {[Number](Number.md)}


Returns the number of battles the player has participated in.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>[RPG.AudioFile](RPG.AudioFile.md)

#### defeatMe () → {[RPG.AudioFile](RPG.AudioFile.md)}


Returns the defeat musical effect.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.AudioFile</a></span>
                </dd>
            </dl>

#### disableEncounter ()


Returns true if the player can encounter enemies.
<dl>
</dl>

#### disableFormation ()


Disables the use of the formation command in the menu.
<dl>
</dl>

#### disableMenu ()


Disables the menu from being accessed.
<dl>
</dl>

#### disableSave ()


Disables the ability to save the game.
<dl>
</dl>

#### enableEncounter ()

<dl>
</dl>

#### enableFormation ()


Enables the use of the formation command in the menu.
<dl>
</dl>

#### enableMenu ()


Enables the menu to be accessed.
<dl>[Number](Number.md)
</dl>

#### enableSave ()


Enables the ability to save the game.
<dl>
</dl>

#### escapeCount () → {[Number](Number.md)}


Returns the number of battles the player has escaped from in battle.
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

#### isChinese () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCJK () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEncounterEnabled () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isFormationEnabled () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isJapanese () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isKorean () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMenuEnabled () → {Boolean}


Returns true if the menu is enabled.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRussian () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSaveEnabled () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSideView () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### onAfterLoad ()

<dl>
</dl>

#### onBattleEscape ()

<dl>
</dl>

#### onBattleStart ()

<dl>[Number](Number.md)
</dl>

#### onBattleWin ()

<dl>
</dl>

#### onBeforeSave ()

<dl>
</dl>

#### playtime () → {[Number](Number.md)}

[String](String.md)
Returns the total play time.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### playtimeText () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### replayBgm ()


Replays the saved background music.
<dl>[Number](Number.md)
</dl>

#### replayWalkingBgm ()


Replays the saved walking background music.
<dl>
</dl>

#### saveBgm ()


Saves background music to the game system object.
<dl>
</dl>

#### saveCount () → {[Number](Number.md)}


Returns the number of saves the player has made in game.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### saveWalkingBgm ()

[RPG.AudioFile](RPG.AudioFile.md)
Saves the walking background music.
<dl>
</dl>

#### saveWalkingBgm2 ()


Saves the second walking bgm from the map data.
<dl>
</dl>

#### setBattleBgm (value)
[RPG.AudioFile](RPG.AudioFile.md)

Sets the battle background music.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) |  |

<dl>
</dl>

#### setDefe[RPG.AudioFile](RPG.AudioFile.md)


Sets the defeat musical effect.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) |  |

<dl>
</dl>
[Array](Array.md)[Number](Number.md)
#### setVictoryMe (value)


Sets the victory musical effect.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) |  |

<dl>
</dl>

#### setWindowTone (value)


Sets the window tone, given an array of rgb. Example: [0, 255, 255].

##### Parameters:[RPG.AudioFile](RPG.AudioFile.md)

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

#### versionId () → {[Number](Number.md)}


Returns the version id represented in the database.
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### victoryMe () → {[RPG.AudioFile](RPG.AudioFile.md)}


Returns the victory musical effect.
<dl>
</dl>[Array](Array.md)[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.AudioFile</a></span>
                </dd>
            </dl>

#### winCount () → {[Number](Number.md)}


Returns the number of the wins the player has gained in battle.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### windowTone () → {[Array](Array.md).<[Number](Number.md)>}


Returns the tone of the window in the database.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
