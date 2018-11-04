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
| `_battleCount` | [Number](Number.html) |  |
| `_winCount` | [Number](Number.html) |  |
| `_escapeCount` | [Number](Number.html) |  |
| `_saveCount` | [Number](Number.html) |  |
| `_versionId` | [Number](Number.html) |  |
| `_framesOnSave` | [Number](Number.html) |  |
| `_bgmOnSave` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_bgsOnSave` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_windowTone` | [Array](Array.html).<[Number](Number.html)> |  |
| `_battleBgm` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_victoryMe` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_defeatMe` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_savedBgm` | [RPG.AudioFile](RPG.AudioFile.html) |  |
| `_walkingBgm` | [RPG.AudioFile](RPG.AudioFile.html) |  |

<dl>
</dl>

### Methods

#### battleBgm () → {[RPG.AudioFile](RPG.AudioFile.html)}

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

#### battleCount () → {[Number](Number.html)}

Returns the number of battles the player has participated in.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### defeatMe () → {[RPG.AudioFile](RPG.AudioFile.html)}

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
<dl>
</dl>

#### enableSave ()

Enables the ability to save the game.
<dl>
</dl>

#### escapeCount () → {[Number](Number.html)}

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

<dl>
</dl>

#### onBattleWin ()

<dl>
</dl>

#### onBeforeSave ()

<dl>
</dl>

#### playtime () → {[Number](Number.html)}

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

#### playtimeText () → {[String](String.html)}

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
<dl>
</dl>

#### replayWalkingBgm ()

Replays the saved walking background music.
<dl>
</dl>

#### saveBgm ()

Saves background music to the game system object.
<dl>
</dl>

#### saveCount () → {[Number](Number.html)}

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

Saves the walking background music.
<dl>
</dl>

#### saveWalkingBgm2 ()

Saves the second walking bgm from the map data.
<dl>
</dl>

#### setBattleBgm (value)

Sets the battle background music.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.html) |  |

<dl>
</dl>

#### setDefeatMe (value)

Sets the defeat musical effect.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.html) |  |

<dl>
</dl>

#### setVictoryMe (value)

Sets the victory musical effect.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [RPG.AudioFile](RPG.AudioFile.html) |  |

<dl>
</dl>

#### setWindowTone (value)

Sets the window tone, given an array of rgb. Example: [0, 255, 255].

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Array](Array.html).<[Number](Number.html)> |  |

<dl>
</dl>

#### versionId () → {[Number](Number.html)}

Returns the version id represented in the database.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### victoryMe () → {[RPG.AudioFile](RPG.AudioFile.html)}

Returns the victory musical effect.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.AudioFile</a></span>
                </dd>
            </dl>

#### winCount () → {[Number](Number.html)}

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

#### windowTone () → {[Array](Array.html).<[Number](Number.html)>}

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
