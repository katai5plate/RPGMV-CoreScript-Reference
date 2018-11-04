# Class: Game_Party

## Game_Party ()

#### new Game_Party ()

The game object class for the party. Information such as gold and items is included. Use as global variable [$gameParty](global.html#$gameParty)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `ABILITY_ENCOUNTER_HALF` | [Number](Number.md) | [static] |
| `ABILITY_ENCOUNTER_NONE` | [Number](Number.md) | [static] |
| `ABILITY_CANCEL_SURPRISE` | [Number](Number.md) | [static] |
| `ABILITY_RAISE_PREEMPTIVE` | [Number](Number.md) | [static] |
| `ABILITY_GOLD_DOUBLE` | [Number](Number.md) | [static] |
| `ABILITY_DROP_ITEM_DOUBLE` | [Number](Number.md) | [static] |
| `_gold` | [Number](Number.md) |  |
| `_steps` | [Number](Number.md) |  |
| `_lastItem` | [Game_Item](Game_Item.md) |  |
| `_menuActorId` | [Number](Number.md) |  |
| `_targetActorId` | [Number](Number.md) |  |
| `_actors` | [Array](Array.md).<[Game_Actor](Game_Actor.md)> |  |
| `_items` | Object | {[itemId: number]: number} |
| `_weapons` | Object | {[itemId: number]: number} |
| `_armors` | Object | {[itemId: number]: number} |

<dl>
</dl>

### Extends

* [Game_Unit](Game_Unit.md)

### Methods

#### addActor (actorId)

Adds an actor to the party given the actor id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |

<dl>
</dl>

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

#### allItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}

Returns all items within the party's posession. Items can be of equip item, or item type.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.BaseItem</a>&gt;</span>
                </dd>
            </dl>

#### allMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Actor</a>&gt;</span>
                </dd>
            </dl>

#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}

Returns the party's armor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Armor</a>&gt;</span>
                </dd>
            </dl>

#### battleMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}

Returns the battle members in the party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Actor</a>&gt;</span>
                </dd>
            </dl>

#### canInput () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### canUse (item) → {Boolean}

Returns true if the party can use the item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### charactersForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}

Returns the characters that go on the save life.
<dl>
</dl>

##### Returns:

Array of [{String}name, {Number}index]
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Array</a>.&lt;*&gt;&gt;</span>
                </dd>
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
                    </ul>
                </dd>
            </dl>

#### consumeItem (item)

Has the party consume the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
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
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### discardMembersEquip (item, amount)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |
| `amount` | [Number](Number.md) |  |

<dl>
</dl>

#### equipItems () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}

Returns the party's equippable items.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.EquipItem</a>&gt;</span>
                </dd>
            </dl>

#### exists () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### facesForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}

Returns the actor faces for the save file.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Array</a>.&lt;*&gt;&gt;</span>
                </dd>
            </dl>

#### gainGold (amount)

Increases the party gold given a specified amount.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) |  |

<dl>
</dl>

#### gainItem (item, amount, includeEquip)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `amount` | [Number](Number.md) |  |
| `includeEquip` | Boolean |  |

<dl>
</dl>

#### gold () → {[Number](Number.md)}

Returns party gold.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### hasCancelSurprise () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasDropItemDouble () → {Boolean}

Returns true if the party has double drop item in effect.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasEncounterHalf () → {Boolean}

Returns true if the encounter rate is set to half.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasEncounterNone () → {Boolean}

Returns true if the encounter rate is set to none.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasGoldDouble () → {Boolean}

Returns true if the party has double gold in effect.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasItem (item, includeEquip) → {Boolean}

Returns true if the party has the given item; if includeEquip is set to true, this will also check party equipment.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `includeEquip` | Boolean |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasMaxItems (item) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasRaisePreemptive () → {Boolean}

Returns true if the party has an increased chance of preemptive strike.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### highestLevel () → {[Number](Number.md)}

Returns the highest level in the party.
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

#### increaseSteps ()

Increases the number of steps the party has taken.
<dl>
</dl>

#### initAllItems ()

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

<dl>
                <dt>Overrides:</dt>
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

#### isAnyMemberEquipped (item) → {Boolean}

Returns true if any party member has the specified equip item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEmpty () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### itemContainer (item) → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.BaseItem</a>&gt;</span>
                </dd>
            </dl>

#### items () → {[Array](Array.md).<[RPG.Item](RPG.Item.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Item</a>&gt;</span>
                </dd>
            </dl>

#### lastItem () → {[RPG.BaseItem](RPG.BaseItem.md)}

Returns the last item selected by the game party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.BaseItem</a></span>
                </dd>
            </dl>

#### leader () → {[Game_Actor](Game_Actor.md)}

Returns the leader of the party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
            </dl>

#### loseGold (amount)

Decreases the party gold given a specified amount.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) |  |

<dl>
</dl>

#### loseItem (item, amount, includeEquip)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `amount` | [Number](Number.md) |  |
| `includeEquip` | Boolean |  |

<dl>
</dl>

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

#### makeMenuActorNext ()

<dl>
</dl>

#### makeMenuActorPrevious ()

<dl>
</dl>

#### maxBattleMembers () → {[Number](Number.md)}

Returns the maximum battle members in the party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxGold () → {[Number](Number.md)}

Returns maximum gold of the party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxItems (item) → {[Number](Number.md)}

Returns the maximum number of items of the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### members () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}

Returns all party members.
<dl>
                <dt>Overrides:</dt>
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
                    <span><a>Array</a>.&lt;<a>Game_Actor</a>&gt;</span>
                </dd>
            </dl>

#### menuActor () → {[Game_Actor](Game_Actor.md)}

Returns the actor that will be used in the current menu; this is for menu scenes that target one actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
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

#### name () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### numItems (item) → {[Number](Number.md)}

Returns the number of items in the possession of the party of the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### onBattleEnd ()

Handler for when battle has ended.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
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

#### onPlayerWalk ()

Handler for when the player walks.
<dl>
</dl>

#### partyAbility (abilityId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### performEscape ()

Performs escape motion for the entire party.
<dl>
</dl>

#### performVictory ()

Performs victory motion for the entire party.
<dl>
</dl>

#### randomDeadTarget () → {[Game_Battler](Game_Battler.md)}

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
                        <li>
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

#### ratePreemptive (troopAgi) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### rateSurprise (troopAgi) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### removeActor (actorId)

Removes an actor from the party given the actor id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |

<dl>
</dl>

#### removeBattleStates ()

Remove battle states from all actors in the party.
<dl>
</dl>

#### requestMotionRefresh ()

Refreshes the motion on all actors in the party.
<dl>
</dl>

#### reviveBattleMembers ()

Revive the battle members of the party.
<dl>
</dl>

#### select (activeMember)

Selects a member of the unit given a battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `activeMember` | [Game_Battler](Game_Battler.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Unit#select</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setLastItem (item)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

#### setMenuActor (actor)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
</dl>

#### setTargetActor (actor)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |

<dl>
</dl>

#### setupBattleTest ()

Sets up a test battle with the party.
<dl>
</dl>

#### setupBattleTestItems ()

Sets up the battle test items.
<dl>
</dl>

#### setupBattleTestMembers ()

Sets up the battle test members.
<dl>
</dl>

#### setupStartingMembers ()

Sets up the starting party members.
<dl>
</dl>

#### size () → {[Number](Number.md)}

Returns number of party member.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### smoothDeadTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
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
                </dd>
            </dl>

#### steps () → {[Number](Number.md)}

Returns the number of steps the party has taken.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
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
                </dd>
            </dl>

#### swapOrder (index1, index2)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index1` | [Number](Number.md) |  |
| `index2` | [Number](Number.md) |  |

<dl>
</dl>

#### targetActor () → {[Game_Actor](Game_Actor.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
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

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### weapons () → {[Array](Array.md).<[RPG.Weapon](RPG.Weapon.md)>}

Returns the weapons of the party.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Weapon</a>&gt;</span>
                </dd>
            </dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
