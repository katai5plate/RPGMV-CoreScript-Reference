# Class: Game_Troop

## Game_Troop ()

#### new Game_Troop ()

The game object declare class for a troop and the battle-related data. Use as global variable [$gameTroop](global.html#$gameTroop)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `LETTER_TABLE_HALF` | [Array](Array.md).<[String](String.md)> | [static] |
| `LETTER_TABLE_FULL` | [Array](Array.md).<[String](String.md)> | [static] |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) |  |
| `_troopId` | [Number](Number.md) |  |
| `_eventFlags` | Object | {[page: number]: boolean} |
| `_enemies` | [Array](Array.md).<[Game_Enemy](Game_Enemy.md)> |  |
| `_turnCount` | [Number](Number.md) |  |
| `_namesCount` | Object | {[name: string]: number} |

<dl>
</dl>

### Extends

* [Game_Unit](Game_Unit.md)

### Methods

#### agility () → {[Number](Number.md)}


Returns the agility of the unit.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#agility</a>
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
[Array](Array.md)[Game_Battler](Game_Battler.md)
#### aliveMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of alive battlers.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#aliveMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### clear ()

<dl>
</dl>

#### clearActions ()


Clears the unit's actions.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#clearActions</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearResults ()


Clears the action results.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#clearResults</a>
                        </li>
                    </u[Array](Array.md)[Game_Battler](Game_Battler.md)
                </dd>
            </dl>

#### deadMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of dead battlers.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#deadMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Array](Array.md)[String](String.md)
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### enemyNames () → {[Array](Array.md).<[String](String.md)>}


Returns the name of enemies within the troop.
<dl>
</dl>

##### Returns:

<dl>
                <dt>[Number](Number.md)
                <dd>
                    <span><a>Array</a>.&lt;<a>String</a>&gt;</span>
                </dd>
            </dl>

#### expTotal () → {[Number](Number.md)}


Returns the total exp of all members of the enemy troop.
<dl>
</dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### goldRate () → {[Number](Number.md)}


Returns the gold rate based on game party gold rate.
<dl>
</dl>

##### Returns:
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### goldTotal () → {[Number](Number.md)}


Return the total gold of all enemies.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### inBattle () → {Boolean}


Returns true if unit is in battle.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#inBattle</a>
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

#### increaseTurn ()


Increases the turn number.
<dl>
</dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isAllDead () → {Boolean}


Returns true if all members of the unit are dead.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#isAllDead</a>
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

#### isEventRunning () → {Boolean}

[Array](Array.md)[String](String.md)
Returns true if event is running.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### letterTable () → {[Array](Array.md).<[String](String.md)>}


Returns the letter table for enemy troops.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>String</a>&gt;</span>
                </dd>
            </dl>
[Array](Array.md)[RPG.BaseItem](RPG.BaseItem.md)
#### makeActions ()


Creates the action's of the game unit.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#makeActions</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeDropItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}


Creates the drop items for all members of the enemy troop, and returns the item information.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
           [RPG.BattleEventPage](RPG.BattleEventPage.md)
                    <span><a>Array</a>.&lt;<a>RPG.BaseItem</a>&gt;</span>
                </dd>
            </dl>

#### makeUniqueNames ()


Creates unique names for each enemy.
<dl>
</dl>

#### meetsConditions (page) → {Boolean}

##### Parameters:[Array](Array.md)[Game_Enemy](Game_Enemy.md)

| Name | Type | Description |
| --- | --- | --- |
| `page` | [RPG.BattleEventPage](RPG.BattleEventPage.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### members () → {[Array](Array.md).<[Game_Enemy](Game_Enemy.md)>}


Returns all enemies in the battle.
<dl>
                <dt>Overri[Array](Array.md)[Game_Battler](Game_Battler.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#members</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Enemy</a>&gt;</span>
                </dd>
            </dl>

#### movableMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of movable members.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#movableMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### onBattleEnd ()


Handler for when battle has ended.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>[Game_Battler](Game_Battler.md)
                            <a>Game_Unit#onBattleEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onBattleStart ()


Handler for when battle is started.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#onBattleStart</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### randomDeadTarget () → {[Game_Battler](Game_Battler.md)}
[Game_Battler](Game_Battler.md)

Returns a random dead target from the game unit.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#randomDeadTarget</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### randomTarget () → {[Game_Battler](Game_Battler.md)}


Returns a random target from the game unit.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                   [Game_Battler](Game_Battler.md)
                            <a>Game_Unit#randomTarget</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### select (activeMember)


Selects a memb[Number](Number.md)a battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `activeMember` | [Game_Battler](Game_Battler.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>[Game_Battler](Game_Battler.md)
                    <ul>
                        <li>
                            <a>Game_Unit#select</a>
                        </li>
                    </ul>
            [Number](Number.md)
            </dl>

#### setup (troopId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopId` | [Number](Number.md) |  |

<dl>
</dl>

#### setupBattleEvent ()

<dl>
</dl>

#### smoothDeadTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:
[Game_Battler](Game_Battler.md)
| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
            [Number](Number.md)m:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#smoothDeadTarget</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### smoothTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:
[Game_Battler](Game_Battler.md)
| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#smoothTarget</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </[Number](Number.md)
            </dl>

#### substituteBattler () → {[Game_Battler](Game_Battler.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#substituteBattler</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                <[RPG.Troop](RPG.Troop.md)
            </dl>

#### tgrSum () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#tgrSum</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### troop () → {[RPG.Troop](RPG.Troop.md)}


Returns troop information from the database.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Troop</a></span>
                </dd>
            </dl>

#### turnCount () → {[Number](Number.md)}


Returns the turn count.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### updateInterpreter ()


Updates the game interpreter.
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
