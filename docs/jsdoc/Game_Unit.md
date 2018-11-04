# Class: Game_Unit

## Game_Unit ()

#### new Game_Unit ()

The superclass of [Game_Party](Game_Party.md) and [Game_Troop](Game_Troop.md).

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_inBattle` | Boolean |  |

<dl>
</dl>

### Methods

#### agility () → {[Number](Number.md)}


Returns the agility of the unit.
<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### clearActions ()


Clears the unit's actions.
<dl>
</dl>

#### clearResults ()


Clears the action resul[Array](Array.md)[Game_Battler](Game_Battler.md)
<dl>
</dl>

#### deadMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of dead battlers.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### inBattle () → {Boolean}


Returns true if unit is in battle.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
</dl>

#### isAllDead () → {Boolean}


Returns true if all members of the unit are dead.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>[Array](Array.md)[Game_Battler](Game_Battler.md)

#### makeActions ()


Creates the action's of the game unit.
<dl>
</dl>

#### members () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of battlers.
<dl>
</dl>
[Array](Array.md)[Game_Battler](Game_Battler.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### movableMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}


Returns the list of movable members.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### onBattleEnd ()
[Game_Battler](Game_Battler.md)

Handler for when battle has ended.
<dl>
</dl>

#### onBattleStart ()


Handler for when battle is started.
<dl>
</dl>

#### randomDeadTarget () → {[Game_Battler](Game_Battler.md)}

[Game_Battler](Game_Battler.md)
Returns a random dead target from the game unit.
<dl>
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
</dl>

##### Returns:

<dl>[Game_Battler](Game_Battler.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>[Game_Battler](Game_Battler.md)

#### select (activeMember)


Selects a member of the unit given a battler.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `activeMember` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### smoothDeadTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:

| Name | Type | Description |[Game_Battler](Game_Battler.md)
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### smoothTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:

| Name | Type | Description |[Game_Battler](Game_Battler.md)
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>[Number](Number.md)

#### substituteBattler () → {[Game_Battler](Game_Battler.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### tgrSum () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
