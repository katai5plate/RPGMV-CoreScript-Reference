# Class: Game_Actor

## Game_Actor ()

#### new Game_Actor ()

[アクター]を定義したクラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) | [read-only] Level |
| `_actorId` | [Number](Number.md) |  |
| `_name` | [String](String.md) |  |
| `_nickname` | [String](String.md) |  |
| `_profile` | [String](String.md) |  |
| `_classId` | [Number](Number.md) |  |
| `_level` | [Number](Number.md) |  |
| `_characterName` | [String](String.md) |  |
| `_characterIndex` | [Number](Number.md) |  |
| `_faceName` | [String](String.md) |  |
| `_faceIndex` | [Number](Number.md) |  |
| `_battlerName` | [String](String.md) |  |
| `_exp` | Object | {[classId: number]: number} |
| `_skills` | [Array](Array.md).<[Number](Number.md)> |  |
| `_equips` | [Array](Array.md).<[Game_Item](Game_Item.md)> |  |
| `_actionInputIndex` | [Number](Number.md) |  |
| `_lastMenuSkill` | [Game_Item](Game_Item.md) |  |
| `_lastBattleSkill` | [Game_Item](Game_Item.md) |  |
| `_lastCommandSymbol` | [String](String.md) |  |
| `_stateSteps` | Object | {[stateId: number]: number} |

<dl>
</dl>

### Extends

* [Game_Battler](Game_Battler.md)

### Methods

#### action (index) → {[Game_Action](Game_Action.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#action</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Action</a></span>
                </dd>
            </dl>

#### actionPlusSet () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#actionPlusSet</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### actor () → {[RPG.Actor](RPG.Actor.md)}


Returns the database information of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Actor</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### actorId () → {[Number](Number.md)}


Returns the id of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### addBuff (paramId, turns)


Adds a buff to the battler for the specified number of turns on the selected parameter.

##### Parameters:
[Number](Number.md)
| Name | Typ[Number](Number.md)
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#addBuff</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addDebuff (paramId, turns)


Adds a debuff to the battler for the specified number of turns on the selected parameter.

##### Paramete[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#addDebuff</a>
                        </li>
                    </u[Array](Array.md)[Number](Number.md)
                </dd>
            </dl>

#### addedSkills () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#addedSkills</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><[Array](Array.md)Nu[Number](Number.md)
                </dd>
            </dl>

#### addedSkillTypes () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#addedSkillTypes</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### addNewState (stateId)


Adds a new state given a state id to the battler.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#addNewState</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addParam (paramId, value)
[Number](Number.md)
##### Parame[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#addParam</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### addState (stateId)


Adds a state t[Number](Number.md)he specified state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                    [Array](Array.md)tl[Number](Number.md)
                        </li>
                    </ul>
                </dd>
            </dl>

#### allIcons () → {[Array](Array.md).<[Number](Number.md)>}


Returns all of the icons attached to the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#allIcons</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Array](Array.md)[RPG.Trait](RPG.Trait.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### allTraits () → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}


Returns all the traits of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#allTraits</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Trait</a>&gt;</span>
                </dd>
            </dl>

#### appear ()


Shows the game battler.
<dl>
                <dt>Inherited From:</dt>
                <d[Array](Array.md)[RPG.Armor](RPG.Armor.md)
                    <ul>
                        <li>
                            <a>Game_BattlerBase#appear</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}


Returns the armor of the actor.
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Armor</a>&gt;</span>
                </dd>
            </dl>

#### attackAnimationId1 () → {[Number](Number.md)}


Returns the first attack animation id.
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### attackAnimationId2 () → {[Number](Number.md)}


Returns the second attack animation id.
<dl>[Array](Array.md)[Number](Number.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}


Returns the attack element ids.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#attackElements</a>
                        </li>
                    </ul>[Number](Number.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### attackSkillId () → {[Number](Number.md)}


Returns the attack skill id in the database.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#attackSkillId</a>
                       [Number](Number.md)
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

#### attackSpeed () → {[Number](Number.md)}


Returns the attack speed of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                        [Array](Array.md)Ba[Number](Number.md)
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

#### attackStates () → {[Array](Array.md).<[Number](Number.md)>}


Returns the attack states of the battler as a list of numbers.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#attackStates</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### attackStatesRate (stateId)

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#attackStatesRate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### attackTimesAdd () → {[Number](Number.md)}


Returns the number of attacks available to the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Number](Number.md)
                        <li>
                            <a>Game_BattlerBase#attackTimesAdd</a>
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
            </dl>[Number](Number.md)

#### bareHandsAnimationId () → {[Number](Number.md)}


Returns the animation id for a barehanded attack.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[Number](Number.md)
            </dl>

#### bareHandsElementId () → {[Number](Number.md)}


Returns the element id of barehanded attacks.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <sp[String](String.md)n>
                </dd>
            </dl>

#### basicFloorDamage () → {[Number](Number.md)}


Returns the basic floor damage.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>[Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### battlerName () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### benchMembersExpRate () → {[Number](Number.md)}


Returns the e[Number](Number.md) in battle; this is set in the database.
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

#### bestEquip[Number](Number.md)


Equips the best item in the given slot.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |

<dl>
</dl>

#### buff (paramId) → {[Number](Number.md)}


Buffs the current parameter id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                [Number](Number.md)
              [Number](Number.md)
                            <a>Game_BattlerBase#buff</a>
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

#### buffIconIndex (buffLevel, paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffLevel` | [Numb[Array](Array.md) |[Number](Number.md)
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#buffIconIndex</a>
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

#### buffIcons () → {[[Number](Number.md)Number](Number.md)>}


Returns the array of buff icons attached to the battler; this is determined by the active buffs on the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#buffIcons</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>
[Number](Number.md)
#### buffLength () → {[Number](Number.md)}


Returns the length of the buff.
<dl>
                <dt>Inherited From:</dt>
                <dd>
           [RPG.EquipItem](RPG.EquipItem.md)
                        <li>
                            <a>Game_BattlerBase#buffLength</a>
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

#### calcEquipItemPerformance (item) → {[Number](Number.md)}


Calculates the equip item performance and returns the sum/difference.

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canAttack () → {Boolean}


Returns true if the battler can attack.
<dl>
           [RPG.EquipItem](RPG.EquipItem.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canAttack</a>
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

#### canEquip (item) → {Boolean}


Returns true if the battler can equip the item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>[RPG.EquipItem](RPG.EquipItem.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canEquip</a>
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

#### canEquipArmor (item) → {Boolean}


Returns true if the battler can equip armor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |
[RPG.EquipItem](RPG.EquipItem.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canEquipArmor</a>
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

#### canEquipWeapon (item) → {Boolean}


Returns true if the battler can equip a weapon.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canEquipWeapon</a>
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

#### canGuard () → {Boolean}


Returns true if the battler can guard.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canGuard</a>
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

#### canInput () → {Boolean}


Returns true if the battler can input actions.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canInput</a>
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
            [RPG.Skill](RPG.Skill.md)

#### canMove () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canMove</a>
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

#### canPaySkillCost (skill) → {Boolean}


Returns true if the battler can pay the cost of the specified skill.

##### Parameters:
[RPG.UsableItem](RPG.UsableItem.md)
| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canPaySkillCost</a>
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

#### canUse (item) → {Boolean}


Returns true if the battler can use the item.

##### Paramete[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#canUse</a>
                        </li>
                    </ul>
             [Number](Number.md)
           [RPG.EquipItem](RPG.EquipItem.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### changeClass (classId, keepExp)

[Number](Number.md)
Changes the a[Number](Number.md)s true, the actor will retain their experience points.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `classId` | [Number](Number.md) |  |
| `keepExp` | Boolean |  |

<dl>
</dl>

#### changeEquip (slotId, item)
[Number](Number.md)

Changes the actor equipment in the given slot with the given equip item. Places the original item into the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>
</dl>

#### changeE[Number](Number.md)emId)


Changes the actor equip with an item based on the equip id.

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) |  |
| `itemId` | [Number](Number.md) |  |

<dl>
</dl>

#### changeExp (exp, show)


Change the actor experience points; leveling up the actor if it's above the required exp for the current level. If show is set to true, actor level up with be displayed.

##### Parameters:[String](String.md)

| Name | Type | Description |
| --- | --- | --- |
| `exp` | [Number](Number.md) |  |
| `show` | Boolean |  |

<dl>
</dl>

#### changeLevel (level, show)


Changes the actor level; if show is set to true, the actor level will be displayed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) |  |
| `show` | Boolea[Number](Number.md)

<dl>
</dl>

#### characterIndex () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterName () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### chargeTpByDamage (damageRate)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damageRate` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#chargeTpByDamage</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### checkFloorEffect ()


Checks the effect of the floor on the actor.
<dl>
</dl>

#### clearActions ()


Clears all of the actor's animations.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearActions</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearAnimations ()


Clears animations from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearAnimations</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearBuffs ()


Clears buffs from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#clearBuffs</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearDamagePopup ()


Clear damage pop up from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearDamagePopup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearEffect ()


Clears effect from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearEffect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearEquipments ()


Clears the actor's equipment; items are returned to the inventory.
<dl>
</dl>

#### clearMotion ()


Clears motion from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearMotion</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearParamPlus ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#clearParamPlus</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearResult ()


Clears the battler action result.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                        [Number](Number.md)learResult</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearStates ()


Clears all states from the actor.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearStates</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearTp ()

[Number](Number.md)
Clears the battler's tp.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### clearWeaponAnimation ()


Clear weapon animation from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#clearWeaponAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### collapseType () → {[Number](Number.md)}


Returns the[RPG.UsableItem](RPG.UsableItem.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#collapseType</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[Game_Action](Game_Action.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### confusionLevel () → {[Number](Number.md)}


Returns the confusion level of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#confusionLevel</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[RPG.Class](RPG.Class.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### consumeItem (item)


Has the battler consume the given item.

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#consumeItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### currentAction () → {[Game_Action](Game_Action.md)}


Returns the current action of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#currentAction</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Action</a></span>
                </dd>
            </dl>

#### currentClass () → {[RPG.Class](RPG.Class.md)}


Returns the current class of the actor from the database.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Class</a></span>
                </dd>[Number](Number.md)
            </dl>

#### currentExp () → {[Number](Number.md)}


Returns the cu[Number](Number.md)ts of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### currentLevelExp () → {[Number](Number.md)}


Returns the current level's experience for the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### deathStateId () → {[Number](Number.md)}


Returns the death state id.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#deathStateId</a>
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

#### debuffRate (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#debuffRate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
           [RPG.EquipItem](RPG.EquipItem.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### decreaseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>[Array](Array.md)[RPG.Skill](RPG.Skill.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                      [String](String.md)Base#decreaseBuff</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### deselect ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#deselect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### die ()


Kills the battler.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#die</a>
                [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### discardEquip (item)


Discards the given equip item from the actor; item is not return to the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>
</dl>

#### displayLevelUp (newSkills)


Displays the actor[Array](Array.md)ag[RPG.EquipItem](RPG.EquipItem.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newSkills` | [Array](Array.md).<[RPG.Skill](RPG.Skill.md)> |  |

<dl>
</dl>

#### effectType () → {[String](String.md)}


Returns the effect type of the battler.
<dl>[Array](Array.md)[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#effectType</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### elementRate (elementId) → {[Number](Number.md)}
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#elementRate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
              [Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### equips () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}


Returns the equipment of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.EquipItem</a>&gt;</span>
                </dd>
            </dl>

#### equipSlots () → {[Array](Array.md).<[Number](Number.md)>}


Returns the equip slots of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### eraseBuff (paramId)

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#eraseBuff</a>
                        </li>
                    </ul>
                </dd>
            </dl>[Number](Number.md)

#### eraseState (stateId)


Erase the specified state from the actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Game_Battler#eraseState</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### escape ()


Has the battler escape from battle; plays a sound on escaping.
<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_Battler#escape</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### executeFloorDamage ()


Executes the floor dmaage on the actor.
<dl>
</dl>
[Array](Array.md)[RPG.Skill](RPG.Skill.md)
#### expForLevel (level) → {[Number](Number.md)}


Returns the exp required to level.

##### Parameters:[Array](Array.md)[RPG.Skill](RPG.Skill.md)

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### faceIndex () → {[Number](Number.md)}

[Number](Number.md)
Returns the face i[Number](Number.md)
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### faceName () → {[String](String.md)}


Returns the face name of the actor; this is the image of faces for the actor.
<dl>
</dl>

##### Returns:
[Number](Number.md)
<dl>[RPG.EquipItem](RPG.EquipItem.md)
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### finalExpRate () → {[Number](Number.md)}


Returns the final exp rate of the actor based on if the actor is a reserved party member or an active battle member.
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Game_Party](Game_Party.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### findNewSkills (lastSkills) → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `lastSkills` | [Array](Array.md).<[RPG.Skill](RPG.Skill.md)> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
          [Number](Number.md)
            </dl>

#### forceAction (skillId, targetIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |
| `targetIndex` | [Number](Number.md) |  |

<dl>
            [Number](Number.md)m:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#forceAction</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### forceChangeEquip (slotId, item)


Forces the actor to change equipment in the given slot with the given equip item without placing the item back into the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |
[Number](Number.md)
<dl>
</dl>

#### forgetSkill (skillId)


Actor forgets the specified skill given the skill id from the actor's usable skills.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

#### friendsUnit () → {[Game_Party](Game_Party.md)}

<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Party</a></span>
                </dd>
            </dl>

#### gainExp (exp)


Gives the specified exp to the actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `exp` | [Number](Number.md) |  |
[Number](Number.md)
<dl>
</dl>

#### gainHp (value)


Adds the specified amount of hp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Num[Number](Number.md)

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#gainHp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### gainMp (value)


Adds the specified amount of mp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#gainMp</a>
                        </li>
            [RPG.Armor](RPG.Armor.md)
                </dd>
            </dl>

#### gainSilentTp (value)


Adds a specified amount of tp to the battler silently.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#gainSilentTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### gainTp (value)


Adds the specified amount of tp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [N[Number](Number.md)  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#gainTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### guardSkillId () → {[Number](Number.md)}


Returns the guard skill id in the database.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
             [RPG.Weapon](RPG.Weapon.md)rBase#guardSkillId</a>
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

#### hasArmor (armor) → {Boolean}


Returns true if the actor has armor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `armor` | [RPG.Armor](RPG.Armor.md) |  |

<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasNoWeapons () → {Boolean}


Returns true if the actor has no weapon.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasSkill (skillId) → {Boolean}

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                 [Number](Number.md)n>
                </dd>
            </dl>

#### hasWeapon (weapon) → {Boolean}


Returns true if the actor has a weapon.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `weapon` | [RPG.Weapon](RPG.Weapon.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
             [Array](Array.md)[Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### hide ()


Hides the game battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#hide</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
#### hpRate () → {[Number](Number.md)}


Returns the percentage of the battler's hp left as a float.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#hpRate</a>
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

#### increaseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#increaseBuff</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### index () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type <[Game_Action](Game_Action.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### initEquips (equips)


Initialize actor equipment in the given slots.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `equips` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

#### initExp ()


Initialize exp of the actor.
<dl>
</dl>

#### initialize (actorId)


 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initImages ()


Initialize images of the actor.
<dl>
</dl>

#### initMembers ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#initMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initSkills ()


Initialize actor skills.
<dl>
</dl>

#### initTp ()


Initializes the battler's tp; tp is random.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#initTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### inputtingAction () → {[Game_Action](Game_Action.md)}


Returns action the actor is inputting.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Action</a></span>
                </dd>
            </dl>

#### isActing () → {Boolean}


Returns true if the battler is performing an action in battle.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isActing</a>
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

#### isActor () → {Boolean}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isActor</a>
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

#### isAlive () → {Boolean}


Returns true if the battler is alive.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isAlive</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
              [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isAnimationRequested () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isAnimationRequested</a>
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

#### isAppeared () → {Boolean}
[Number](Number.md)

Returns true if the game battler is not hidden.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isAppeared</a>
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

#### isAutoBattle () → {Boolean}


Returns true if the battler is set to battle automatically.
<dl>
              [Number](Number.md)</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isAutoBattle</a>
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

#### isBattleMember () → {Boolean}


Returns true if the actor is a member in battle.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBuffAffected (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isBuffAffected</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[RPG.Class](RPG.Class.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBuffExpired (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isBuffExpired</a>
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

#### isBuffOrDebuffAffected (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isBuffOrDebuffAffected</a>
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

#### isChanting () → {Boolean}


Returns true if the battler is chanting in combat.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isChanting</a>
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

#### isClass (gameClass) → {Boolean}


Returns true if the actor is the specified class from the database.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `gameClass` | [RPG.Class](RPG.Class.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
              [Number](Number.md)
            </dl>

#### isConfused () → {Boolean}


Returns true if the battler is confused.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isConfused</a>
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

#### isDamagePopupRequested () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isDamagePopupRequested</a>
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

#### isDead () → {Boolean}


Returns true if the battler is dead.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isDead</a>
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

#### isDeathStateAffected () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isDeathStateAffected</a>
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

#### isDebuffAffected (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isDebuffAffected</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
              [Number](Number.md)span>
                </dd>
            </dl>

#### isDualWield () → {Boolean}


Returns true if the battler dual wields.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isDualWield</a>
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

#### isDying () → {Boolean}

[Number](Number.md)
Returns true if the battler is dying.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isDying</a>
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

#### isEffe[RPG.EquipItem](RPG.EquipItem.md)

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isEffectRequested</a>
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
            </[Number](Number.md)

#### isEnemy () → {Boolean}


Returns true if the battler is an enemy.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isEnemy</a>
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

#### isEquipAtypeOk (atypeId) → {Boolean}

##### Paramete[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `atypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isEquipAtypeOk</a>
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

#### isEquipChangeOk (slotId) → {Boolean}

[Number](Number.md)
Returns true if the equip change is okay in the given slot.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEquipped (item) → {Boolean}


Returns true if the actor is equipped with the specific item.

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

#### isEquipTypeLocked (etypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isEquipTypeLocked</a>
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

#### isEquipTypeSealed (etypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isEquipTypeSealed</a>
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

#### isEquipWtypeOk (wtypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isEquipWtypeOk</a>
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

#### isFormationChangeOk () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
              [Number](Number.md)
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isGuard () → {Boolean}


Returns true if the battler is guarding.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isGuard</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isGuardWaiting () → {Boolean}


Returns true if the battler is waiting to guard.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isGuardWaiting</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
              [Number](Number.md)
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isHidden () → {Boolean}


Returns true if the game battler is hidden.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isHidden</a>
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

#### isInputting () → {Boolean}


Returns true if the battler is inputting commands in battle.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isInputting</a>
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

#### isLearnedSkill (skillId) → {Boolean}


Returns true if the actor has learned the specified skill given the specified skill id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMaxBuffAffected (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
           [RPG.UsableItem](RPG.UsableItem.md)isMaxBuffAffected</a>
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

#### isMaxDebuffAffected (paramId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isMaxDebuffAffected</a>
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

#### isMaxLevel () → {Boolean}


Returns true if the actor is max level.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMotionRefreshRequested () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isMotionRefreshRequested</a>
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

#### isMotionRequested () → {Boolean}


Returns true if a motion is requested.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isMotionRequested</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOccasionOk (item) → {Boolean}


Returns true if the item occasion is okay.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isOccasionOk</a>
                        </li>
                    </ul>
              [Number](Number.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPreserveTp () → {Boolean}


Returns true if tp is preserved between battles.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isPreserveTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[RPG.Skill](RPG.Skill.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRestricted () → {Boolean}


Returns true if the game battler is restricted.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isRestricted</a>
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

#### isSelected () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isSelected</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSkillSealed (stypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isSkillSealed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSkillTypeSealed (stypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isSkillTypeSealed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
              [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSkillWtypeOk (skill) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isSkillWtypeOk</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
              [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSpriteVisible () → {Boolean}


Returns true if the actor sprite is visible.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isStateAddable (stateId) → {Boolean}


Returns true if the specified state given the state id is addable.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isStateAddable</a>
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

#### isStateAffected (stateId) → {Boolean}


Returns true if the battler is affected by the specified state given the state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isStateAffected</a>
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

#### isStateExpired (stateId) → {Boolean}


Returns true if the state, given the state id is expired.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isStateExpired</a>
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

#### isStateResist (stateId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isStateResist</a>
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

#### isStateRestrict (stateId) → {Boolean}


Returns true if the specified state given the state id restricts.

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isStateRestrict</a>
                        </li>
                    </ul>
                </dd>
            </dl>[RPG.Skill](RPG.Skill.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSubstitute () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>[String](String.md)
                    <ul>
                        <li>
                            <a>Game_BattlerBase#isSubstitute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>[RPG.Skill](RPG.Skill.md)
            </dl>

#### isUndecided () → {Boolean}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isUndecided</a>
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
            </[Number](Number.md)

#### isWaiting () → {Boolean}


Returns true if the battler is waiting in battle.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isWaiting</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Array](Array.md)[Game_Action](Game_Action.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isWeaponAnimationRequested () → {Boolean}


Returns true if a weapon animation is requested.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#isWeaponAnimationRequested</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isWtypeEquipped (wtypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### lastBattleSkill () → {[RPG.Skill](RPG.Skill.md)}


Returns the last battle skill of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Skill</a></span>
                </dd>
            </dl>

#### lastCommandSymbol () → {[String](String.md)}


Returns the last command symbol that the actor used.
<dl>
</dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### lastMenuSkill () → {[RPG.Skill](RPG.Skill.md)}


Returns the last menu skill of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span[Number](Number.md)an>
                </dd>
            </dl>

#### learnSkill (skillId)


Actor learns the specified skill given the skill id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

#### levelDown ()


Level down the actor.
<dl>[Number](Number.md)
</dl>

#### levelUp ()


Level up the actor.
<dl>
</dl>

#### makeActionList () → {[Array](Array.md).<[Game_Action](Game_Action.md)>}


Creates the action list for the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Action</a>&gt;</span>
                </dd>
            </dl>

#### makeActions ()

<dl>
                <dt>Overrides:</dt>
                <dd>
           [RPG.Item](RPG.Item.md)
                        <li>
                            <a>Game_Battler#makeActions</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### makeActionTimes () → {[Number](Number.md)}


Creates the number of times for an action.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#makeActionTimes</a>
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
            [RPG.Skill](RPG.Skill.md)

#### makeAutoBattleActions ()


Creates the auto battle actions for the game actor.
<dl>
</dl>

#### makeConfusionActions ()

<dl>
</dl>

#### makeSpeed ()


Calculates the speed of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#makeSpeed</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[RPG.UsableItem](RPG.UsableItem.md)
#### maxFloorDamage () → {[Number](Number.md)}


Returns the max floor damage.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### maxLevel ()


Returns the maximum level of the actor.
<dl>
</dl>[String](String.md)

#### maxSlipDamage () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#maxSlipDamage</a>
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
            </dl>[String](String.md)

#### maxTp () → {[Number](Number.md)}


Returns the maximum tp of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#maxTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </[Number](Number.md)
            </dl>

#### meetsItemConditions (item) → {Boolean}


Returns true if the battler meets the item conditions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.Item](RPG.Item.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#meetsItemConditions</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
           [String](String.md)
            </dl>

#### meetsSkillConditions (skill) → {Boolean}

[Number](Number.md)
Returns true if the battler meets the skill conditions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#meetsSkillConditions</a>
                        </l[Number](Number.md)
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

#### meetsUsableItemConditions (item) → {Boolean}
[String](String.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#meetsUsableItemConditions</a>
                        </li>
                    </ul>
                </dd>[Number](Number.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### mostImportantStateText () → {[String](String.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#mostImportantStateText</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### motionType () → {[String](String.md)}


Returns the motion type of the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#motionType</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpRate () → {[Number](Number.md)}


Returns the percentage of the battler's mp left as a float.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#mpRate</a>
            [Number](Number.md)
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

#### name (name)


Sets the actor name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  |

<dl>
</dl>

#### nextLevelExp () → {[Number](Number.md)}


Returns the experience points for the next level of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### nextRequiredExp () → {[Number](Number.md)}

[Game_Troop](Game_Troop.md)
Returns the next required experience points for the actor to level up.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### nickname () → {[String](String.md)}


Returns the nickname of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
              [Number](Number.md)</a></span>
            [Number](Number.md)
            </dl>

#### numActions () → {[Number](Number.md)}


Returns the number of battler actions.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#numActions</a>
                        [Number](Number.md)
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
              [Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### onAllActionsEnd ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#onAllActionsEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onBattleEnd ()

<dl>
                <dt>Inherite[Number](Number.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#onBattleEnd</a>
                        </li>
              [Number](Number.md)
                </dd>
            </dl>

#### onBattleStart ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#onBattleStart</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onDamage (value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `value` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
              [Number](Number.md)
                        <li>
                            <a>Game_Battler#onDamage</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### onPlayerWalk ()


Handler for when the player walks on the map scene.
<dl>
</dl>

#### onRestrict ()


Handler for when theb attler is restricted.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Number](Number.md)
                        <li>
                            <a>Game_Battler#onRestrict</a>
                        </li>
                    </ul>
                </dd>
            </[Number](Number.md)

#### onTurnEnd ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#onTurnEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### opponentsUnit () → {[Game_Troop](Game_Troop.md)}

<dl>
</dl>

##### Returns:

<dl>[Number](Number.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Troop</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### optimizeEquipments ()


Optimize the actor's equipment.
<dl>
</dl>

#### overwriteBuffTurns (paramId, turns)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            [Number](Number.md)verwriteBuffTurns</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### param (pa[Number](Number.md)mber.md)}


Returns a standard parameter, given a paramId; standard parameters include: HP, MP, Atk, M.Atk, Def, M.Def, Luck, Agility.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#param</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
              [Number](Number.md)
            </dl>

#### paramBase (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#paramBase</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                [Number](Number.md)
            </dl>

#### paramBuffRate (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#paramBuffRate</a>
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
[RPG.Skill](RPG.Skill.md)
#### paramMax (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#paramMax</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Game_Action](Game_Action.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramMin (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#paramMin</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
             [Game_Action](Game_Action.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramPlus (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#paramPlus</a>
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

#### paramRate (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#paramRate</a>
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

#### partyAbility (abilityId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#partyAbility</a>
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

#### paySkillCost (skill)


Pays the cost of the skill when activating the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#paySkillCost</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performAction (action)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performAction</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performActionEnd ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performActionEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performActionStart (action)

##### Paramet[Game_Battler](Game_Battler.md)

| Name | Type | Description |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performActionStart</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performAttack ()

[String](String.md)
Performs the attack motion for the actor.
<dl>
</dl>

#### performCollapse ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performCollapse</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performCounter ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performCounter</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performDamage ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performDamage</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performEscape ()


Performs the escape motion for the actor.
<dl>
</dl>

#### performEvasion ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performEvasion</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performMagicEvasion ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performMagicEvasion</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performMapDamage ()


Perform damage to the actor on the map scene.
<dl>
</dl>

#### performMiss ()


Perform miss motion.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performMiss</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performRecovery ()


Perform recovery motion.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performRecovery</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performReflection ()


Performs the reflect motion.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#performReflection</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performSubstitute (target)


Perform substitute motion with the specified game battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
              [Number](Number.md)_Battler#performSubstitute</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### performVictory ()


Perform the victory motion for the actor.
<dl>
</dl>

#### profile () → {[String](String.md)}


Returns the actor profile.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### recoverAll ()


Recovers the battler from all states and restores the battler to maximum hp and mp.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#recoverAll</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refresh ()


Refreshes the actor.
<dl>[Number](Number.md)
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#refresh</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### regenerateAll ()


Handler for when battle has started.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
             [Number](Number.md)
                            <a>Game_Battler#regenerateAll</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### regenerateHp ()


Has the battler regenerate hp based on their hp regen.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#regenerateHp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### regenerateMp ()


Has the battler regenerate mp based on their mp regen.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#regenerateMp</a>
                 [String](String.md)
                    </ul>
                </dd>
            </dl>

#### regenerateTp ()


Has the battler regenerate tp based on their tp regen.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#regenerateTp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### releaseUnequippableItems (forcing)
[String](String.md)

Returns items the actor can't normally equip to the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `forcing` | Boolean |  |

<dl>
</dl>

#### removeAllBuffs ()


Removes all buffs from the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeAllBuffs</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeBattleStates ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
              [Number](Number.md)
                            <a>Game_Battler#removeBattleStates</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number]([Number](Number.md)

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeBuff</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeBuffsAuto ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeBuffsAuto</a>
                        </li>
                    </ul>
                </[Game_ActionResult](Game_ActionResult.md)
            </dl>

#### removeCurrentAction ()


Removes the current battler action.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeCurrentAction</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeState (stateId)


Removes the specified state given the state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeState</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeStatesAuto (timing)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `timing` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeStatesAuto</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeStatesByDamage ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#removeStatesByDamage</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### requestEffect (effectType)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `effectType` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#requestEffect</a>
            [Number](Number.md)
             [Game_Action](Game_Action.md)
                </dd>
            </dl>

#### requestMotion (motionType)


Request the specified motion on the game battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `motionType` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                  [String](String.md)
                            <a>Game_Battler#requestMotion</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### requestMotionRefresh ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#requestMotionRefresh</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### resetStateCounts (stateId)
[String](String.md)

Reset state count of the specified state.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>[String](String.md)
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_Battler#resetStateCounts</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### restriction () → {[Number](Number.md)}


Returns the number of the restriction.
<dl>[String](String.md)
                [Number](Number.md)dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#restriction</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
         [Number](Number.md)>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### result () → {[Game_ActionResult](Game_ActionResult.md)}


Returns the battler action result.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#result</a>
                        </li>
                    </ul>
                </dd>
            [RPG.Skill](RPG.Skill.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_ActionResult</a></span>
                </dd>
            </dl>

#### revive ()

[String](String.md)
Revives the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#revive</a>
                        </li>
                    </ul>
                </dd>
            [RPG.Skill](RPG.Skill.md)

#### select ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#select</a>
                        </li>
             [Game_Battler](Game_Battler.md)
                </dd>
            </dl>

#### selectNextCommand () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### selectPreviousCommand () → {Boolean}

<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### setAction (index, action)


Sets the action at the specified index for the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |
| `action` [String](String.md)Action.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#setAction</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setActionS[String](String.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actionState` | [String](String.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
              [String](String.md)_Battler#setActionState</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setBattlerImage (battlerName)


Sets the battler image of the actor; this is the sprite displayed in the side view mode.

##### Parameters:

| Name | [Number](Number.md)
| --- | --- | --- |
| `battlerName` | [String](String.md) |  |

<dl>
</dl>

#### setCharacterImage (characterName, characterIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  |
| `characterIndex` | [Number](Number.md) |  |

<dl>
</dl>

#### setFaceIm[Number](Number.md)dex)


Sets the face image of the actor given the face image (from database) and face index within the iamge.

##### Parameters:[MV.BattlerAnimation](MV.BattlerAnimation.md)

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.md) |  |
| `faceIndex` | [Number](Number.md) |  |

<dl>
</dl>

#### setHp (hp)


Sets the battler hp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hp` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#setHp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setLastBattleSkill (skill)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
</dl>

#### setLastCommandSymbol (symbol)


Sets the last command symbol to the given symbol; this is the selected command in the battle menu.

##### Parameters:

| Name | Type | Description [Number](Number.md)
| --- | --- | --- |
| `symbol` | [String](String.md) |  |

<dl>
</dl>

#### setLastMenuSkill (skill)
[RPG.Skill](RPG.Skill.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
</dl>

#### setLastTarget (target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                  [Array](Array.md)[RPG.Skill](RPG.Skill.md)
                            <a>Game_Battler#setLastTarget</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setMp (mp)


Sets the battler mp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Number](Number.md)
| `mp` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
            [RPG.Skill](RPG.Skill.md)tlerBase#setMp</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setName (name)


Sets the actor name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  |

<dl>
</dl>

#### setNickname (nickname)

[Number](Number.md)
Sets the nickname of the actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `nickname` | [String](String.md) |  |

<dl>
</dl>

#### setProfile (profile)


Sets the actor profile.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `profile` | [String](String.md) |  |

<dl>
</dl>

#### setTp (tp)


Sets the battler tp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tp` | [Number](Number.md) |  |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#setTp</a>
               [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### setup (actorId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |

<dl>
</dl>

#### shiftAnimation () → {[MV.BattlerAnimation](MV.BattlerAnimation.md)}


Shifts the battler animation.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#shiftAnimation</a>
                        </li>
                    </ul>
             [Number](Number.md)
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.BattlerAnimation</a></span>
                </dd>
            </dl>

#### shouldDisplayLevelUp () → {Boolean}


Returns true if the actor should display level up in a message window.
<dl>
</dl>

##### Returns:

<dl>
                <[Number](Number.md)
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### showAddedStates ()


Shows the added states to the actor.
<dl>
</dl>

#### showRemovedStates ()


Shows the removed states from the actor.
<dl>
</dl>

#### skillMpCost (skill) → {[Number](Number.md)}


Returns the mp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
            [Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_BattlerBase#skillMpCost</a>
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

#### skills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}


Returns the actor's skills; even if the skills are not usable.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
                </dd>
            </dl>

#### skillTpCost (skill) → {[Number](Number.md)}
[Number](Number.md)

Returns the tp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <u[Array](Array.md)[Number](Number.md)
                        <li>
                            <a>Game_BattlerBase#skillTpCost</a>
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

#### slotType () → {[Number](Number.md)}


Returns the battler slot type of a trait.
<dl>
                <dt>Inherited From:</dt>
                <dd>[Number](Number.md)
                    <ul>
                        <li>
                            <a>Game_BattlerBase#slotType</a>
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

#### sortStates ()


Sorts the states attached to the battler.
<dl>[Number](Number.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#sortStates</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### sparam (sparamId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sparamId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Number](Number.md)
                        <li>
                            <a>Game_BattlerBase#sparam</a>
                        </li>
                    </ul>
                </dd>
            </[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### specialFlag (flagId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `flagId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>[Array](Array.md)[Number](Number.md)
                        <li>
                            <a>Game_BattlerBase#specialFlag</a>
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

#### speed () → {[Number](Number.md)}


Returns the speed of the battler.
<dl>
                <d[Array](Array.md)dt[RPG.State](RPG.State.md)
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#speed</a>
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

#### startAnimation (animationId, mirror, delay)


Starts the animation on the actor given the specified animation id; if mirror is set to true, the animation will be mirrored. If a delay is enter, the animation will be delayed.
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#startAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startD[RPG.BaseItem](RPG.BaseItem.md)


Starts a damage pop up on the battler.
<dl>
                <d[Number](Number.md)>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#startDamagePopup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startWeaponAnimation (weaponImageId)


Starts the weapon animation on te battler given a weapon id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `weaponImageId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#startWeaponAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[RPG.EquipItem](RPG.EquipItem.md)
#### stateIcon[RPG.EquipItem](RPG.EquipItem.md)r](Number.md)>}


Returns the array of state icons attached to the battler; this is determined by the active states on the battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#stateIcons</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Array](Array.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### stateMotionIndex () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#stateMotionIndex</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[Array](Array.md)[RPG.Trait](RPG.Trait.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
           [Number](Number.md)ber</a></span>
                </dd>
            </dl>

#### stateOverlayIndex () → {[Number](Number.md)}

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#stateOverlayIndex</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a[Number](Number.md)
                </dd>
            </dl>

#### stateRate (stateId) → {[Number](Number.md)}

##### Param[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#stateRate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[Array](Array.md)[Number](Number.md)
            </dl>

#### stateResistSet () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
           [Number](Number.md)om:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#stateResistSet</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### states () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}


Returns the states applied to[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
           [Number](Number.md)ame_BattlerBase#states</a>
         [Number](Number.md)
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.State</a>&gt;</span>
                </dd>
            </dl>

#### stepsForTurn () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </[Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### testEs[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |

<dl>
</dl>

#### tpRate () → {[Number](Number.md)}


Returns the percentage of the battler's tp left as a float.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#tpRate</a>
                        </li>
                    </ul>[Array](Array.md)[RPG.Trait](RPG.Trait.md)
                </dd>
            </dl>

##### Returns:

<dl>[Number](Number.md)
         [Number](Number.md)>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tradeItemWithParty (newItem, oldItem) → {Boolean}


Trades the new item with the old item in the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newItem` | [RPG.EquipItem](RPG.EquipItem.md) |  |
| `oldItem` | [RPG.EquipItem](RPG.EquipItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### traitObjects () → {[Array](Array.md).<*>}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#traitObjects</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
            [RPG.State](RPG.State.md)
                    <span><a>Array</a>.&lt;*&gt;</span>
                </dd>
            </dl>

#### traits (code) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                        [Array](Array.md)Ba[RPG.Skill](RPG.Skill.md)
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Trait</a>&gt;</span>
                </dd>
            </dl>

#### traitsPi (code, id) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |
[RPG.UsableItem](RPG.UsableItem.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#traitsPi</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### traitsSet (code) → {[Array](Array.md).<[Number](Number.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#traitsSet</a>
                        </li>
                   [Array](Array.md)[RPG.Weapon](RPG.Weapon.md)
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### traitsSum (code, id) → {[Number](Number.md)}

##### Parameters:[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |
[Number](Number.md)
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#traitsSum</a>
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

#### traitsSumAll (code) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#traitsSumAll</a>
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

#### traitsWithId (code, id) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#traitsWithId</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Trait</a>&gt;</span>
                </dd>
            </dl>

#### turnEndOnMap ()

<dl>
</dl>

#### updateBuffTurns ()


Updates the buff turns on battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#updateBuffTurns</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateStateSteps (state)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `state` | [RPG.State](RPG.State.md) |  |

<dl>
</dl>

#### updateStateTurns ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#updateStateTurns</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### usableSkills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}


Returns the usable skills of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
                </dd>
            </dl>

#### useItem (item)


Has theb attler use the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#useItem</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### weaponImageId () → {[Number](Number.md)}


Returns the weapon image id.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#weaponImageId</a>
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


Returns the weapon of the actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Weapon</a>&gt;</span>
                </dd>
            </dl>

#### xparam (xparamId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xparamId` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#xparam</a>
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


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
