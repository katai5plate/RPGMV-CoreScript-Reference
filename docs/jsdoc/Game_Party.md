# Class: Game_Party

## Game_Party ()

#### new Game_Party ()

The game object class for the party. Information such as gold and items is included. Use as global variable [$gameParty](global.md#gameparty-game_party)


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `ABILITY_ENCOUNTER_HALF` | [Number](Number.md) | [static] エンカウント半減 |
| `ABILITY_ENCOUNTER_NONE` | [Number](Number.md) | [static] エンカウント無効 |
| `ABILITY_CANCEL_SURPRISE` | [Number](Number.md) | [static] 不意打ち無効 |
| `ABILITY_RAISE_PREEMPTIVE` | [Number](Number.md) | [static] 先制攻撃率アップ |
| `ABILITY_GOLD_DOUBLE` | [Number](Number.md) | [static] 獲得金額2倍 |
| `ABILITY_DROP_ITEM_DOUBLE` | [Number](Number.md) | [static] アイテム入手率2倍 |
| `_gold` | [Number](Number.md) |  |
| `_steps` | [Number](Number.md) |  |
| `_lastItem` | [Game_Item](Game_Item.md) |  |
| `_menuActorId` | [Number](Number.md) |  |
| `_targetActorId` | [Number](Number.md) |  |
| `_actors` | [Array](Array.md).<[Game_Actor](Game_Actor.md)> |  |
| `_items` | Object | {[itemId: number]: number} |
| `_weapons` | Object | {[itemId: number]: number} |
| `_armors` | Object | {[itemId: number]: number} |

### Extends

* [Game_Unit](Game_Unit.md)

### Inherited From

#### [Game_Unit](Game_Unit.md)

* [agility ()](Game_Unit.md#)* [aliveMembers ()](Game_Unit.md#)* [clearActions ()](Game_Unit.md#)* [clearResults ()](Game_Unit.md#)* [deadMembers ()](Game_Unit.md#)* [inBattle ()](Game_Unit.md#)* [makeActions ()](Game_Unit.md#)* [members ()](Game_Unit.md#)* [movableMembers ()](Game_Unit.md#)* [onBattleEnd ()](Game_Unit.md#)* [onBattleStart ()](Game_Unit.md#)* [randomDeadTarget ()](Game_Unit.md#)* [randomTarget ()](Game_Unit.md#)* [select (activeMember)](Game_Unit.md#)* [smoothDeadTarget (index)](Game_Unit.md#)* [smoothTarget (index)](Game_Unit.md#)* [substituteBattler ()](Game_Unit.md#)* [tgrSum ()](Game_Unit.md#)


### Methods

#### addActor (actorId)
Adds an actor to the party given the actor id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |


#### allItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}
Returns all items within the party's posession. Items can be of equip item, or item type.

#### allMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}


#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}
Returns the party's armor.

#### battleMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}
Returns the battle members in the party.

#### canInput () → {Boolean}


#### canUse (item) → {Boolean}
Returns true if the party can use the item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### charactersForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}
Returns the characters that go on the save life.Array of [{String}name, {Number}index]

#### consumeItem (item)
Has the party consume the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### discardMembersEquip (item, amount)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |
| `amount` | [Number](Number.md) |  |


#### equipItems () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}
Returns the party's equippable items.

#### exists () → {Boolean}


#### facesForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}
Returns the actor faces for the save file.

#### gainGold (amount)
Increases the party gold given a specified amount.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) |  |


#### gainItem (item, amount, includeEquip)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `amount` | [Number](Number.md) |  |
| `includeEquip` | Boolean |  |


#### gold () → {[Number](Number.md)}
Returns party gold.

#### hasCancelSurprise () → {Boolean}


#### hasDropItemDouble () → {Boolean}
Returns true if the party has double drop item in effect.

#### hasEncounterHalf () → {Boolean}
Returns true if the encounter rate is set to half.

#### hasEncounterNone () → {Boolean}
Returns true if the encounter rate is set to none.


#### hasGoldDouble () → {Boolean}
Returns true if the party has double gold in effect.

#### hasItem (item, includeEquip) → {Boolean}
Returns true if the party has the given item; if includeEquip is set to true, this will also check party equipment.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `includeEquip` | Boolean |  |


#### hasMaxItems (item) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### hasRaisePreemptive () → {Boolean}
Returns true if the party has an increased chance of preemptive strike.


#### highestLevel () → {[Number](Number.md)}
Returns the highest level in the party.

#### increaseSteps ()
Increases the number of steps the party has taken.

#### initAllItems ()


#### initialize ()Overrides:[Game_Unit](Game_Unit.md#initialize-)


#### isAllDead () → {Boolean}Overrides:[Game_Unit](Game_Unit.md#isalldead---boolean)


#### isAnyMemberEquipped (item) → {Boolean}
Returns true if any party member has the specified equip item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |


#### isEmpty () → {Boolean}


#### itemContainer (item) → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### items () → {[Array](Array.md).<[RPG.Item](RPG.Item.md)>}


#### lastItem () → {[RPG.BaseItem](RPG.BaseItem.md)}
Returns the last item selected by the game party.

#### leader () → {[Game_Actor](Game_Actor.md)}
Returns the leader of the party.


#### loseGold (amount)
Decreases the party gold given a specified amount.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) |  |


#### loseItem (item, amount, includeEquip)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |
| `amount` | [Number](Number.md) |  |
| `includeEquip` | Boolean |  |


#### makeMenuActorNext ()


#### makeMenuActorPrevious ()


#### maxBattleMembers () → {[Number](Number.md)}
Returns the maximum battle members in the party.

#### maxGold () → {[Number](Number.md)}
Returns maximum gold of the party.

#### maxItems (item) → {[Number](Number.md)}
Returns the maximum number of items of the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### members () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}
Overrides:[Game_Unit](Game_Unit.md#members---arraygame_battler)


#### menuActor () → {[Game_Actor](Game_Actor.md)}Returns the actor that will be used in the current menu; this is for menu scenes that target one actor.

#### name () → {[String](String.md)}


#### numItems (item) → {[Number](Number.md)
Returns the number of items in the possession of the party of the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### onPlayerWalk ()
Handler for when the player walks.

#### partyAbility (abilityId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) |  |


#### performEscape ()
Performs escape motion for the entire party.

#### performVictory ()
Performs victory motion for the entire party.

#### ratePreemptive (troopAgi) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) |  |



#### rateSurprise (troopAgi) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) |  |


#### removeActor (actorId)
Removes an actor from the party given the actor id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |


#### removeBattleStates ()
Remove battle states from all actors in the party.

#### requestMotionRefresh ()
Refreshes the motion on all actors in the party.

#### reviveBattleMembers ()
Revive the battle members of the party.

#### setLastItem (item)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |


#### setMenuActor (actor)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |


#### setTargetActor (actor)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) |  |


#### setupBattleTest ()
Sets up a test battle with the party.

#### setupBattleTestItems ()
Sets up the battle test items.

#### setupBattleTestMembers ()
Sets up the battle test members.

#### setupStartingMembers ()
Sets up the starting party members.

#### size () → {[Number](Number.md)}
Returns number of party member.

#### steps () → {[Number](Number.md)}
Returns the number of steps the party has taken.

#### swapOrder (index1, index2)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index1` | [Number](Number.md) |  |
| `index2` | [Number](Number.md) |  |


#### targetActor () → {[Game_Actor](Game_Actor.md)}



#### weapons () → {[Array](Array.md).<[RPG.Weapon](RPG.Weapon.md)>}
Returns the weapons of the party.

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
