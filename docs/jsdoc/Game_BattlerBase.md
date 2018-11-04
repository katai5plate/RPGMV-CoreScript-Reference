# Class: Game_BattlerBase

## (abstract) Game_BattlerBase ()

#### (abstract) new Game_BattlerBase ()

The superdeclare class of [Game_Battler](Game_Battler.md). It mainly contains parameters calculation.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `TRAIT_ELEMENT_RATE` | [Number](Number.md) | [static] |
| `TRAIT_DEBUFF_RATE` | [Number](Number.md) | [static] |
| `TRAIT_STATE_RATE` | [Number](Number.md) | [static] |
| `TRAIT_STATE_RESIST` | [Number](Number.md) | [static] |
| `TRAIT_PARAM` | [Number](Number.md) | [static] |
| `TRAIT_XPARAM` | [Number](Number.md) | [static] |
| `TRAIT_SPARAM` | [Number](Number.md) | [static] |
| `TRAIT_ATTACK_ELEMENT` | [Number](Number.md) | [static] |
| `TRAIT_ATTACK_STATE` | [Number](Number.md) | [static] |
| `TRAIT_ATTACK_SPEED` | [Number](Number.md) | [static] |
| `TRAIT_ATTACK_TIMES` | [Number](Number.md) | [static] |
| `TRAIT_STYPE_ADD` | [Number](Number.md) | [static] |
| `TRAIT_STYPE_SEAL` | [Number](Number.md) | [static] |
| `TRAIT_SKILL_ADD` | [Number](Number.md) | [static] |
| `TRAIT_SKILL_SEAL` | [Number](Number.md) | [static] |
| `TRAIT_EQUIP_WTYPE` | [Number](Number.md) | [static] |
| `TRAIT_EQUIP_ATYPE` | [Number](Number.md) | [static] |
| `TRAIT_EQUIP_LOCK` | [Number](Number.md) | [static] |
| `TRAIT_EQUIP_SEAL` | [Number](Number.md) | [static] |
| `TRAIT_SLOT_TYPE` | [Number](Number.md) | [static] |
| `TRAIT_ACTION_PLUS` | [Number](Number.md) | [static] |
| `TRAIT_SPECIAL_FLAG` | [Number](Number.md) | [static] |
| `TRAIT_COLLAPSE_TYPE` | [Number](Number.md) | [static] |
| `TRAIT_PARTY_ABILITY` | [Number](Number.md) | [static] |
| `FLAG_ID_AUTO_BATTLE` | [Number](Number.md) | [static] |
| `FLAG_ID_GUARD` | [Number](Number.md) | [static] |
| `FLAG_ID_SUBSTITUTE` | [Number](Number.md) | [static] |
| `FLAG_ID_PRESERVE_TP` | [Number](Number.md) | [static] |
| `ICON_BUFF_START` | [Number](Number.md) | [static] |
| `ICON_DEBUFF_START` | [Number](Number.md) | [static] |
| `hp` | [Number](Number.md) | [read-only] Hit Points |
| `mp` | [Number](Number.md) | [read-only] Magic Points |
| `tp` | [Number](Number.md) | [read-only] Tactical Points |
| `mhp` | [Number](Number.md) | [read-only] Maximum Hit Points |
| `mmp` | [Number](Number.md) | [read-only] Maximum Magic Points |
| `atk` | [Number](Number.md) | [read-only] ATtacK power |
| `def` | [Number](Number.md) | [read-only] DEFense power |
| `mat` | [Number](Number.md) | [read-only] Magic ATtack power |
| `mdf` | [Number](Number.md) | [read-only] Magic DeFense power |
| `agi` | [Number](Number.md) | [read-only] AGIlity |
| `luk` | [Number](Number.md) | [read-only] LUcK |
| `hit` | [Number](Number.md) | [read-only] HIT rate |
| `eva` | [Number](Number.md) | [read-only] EVAsion rate |
| `cri` | [Number](Number.md) | [read-only] CRItical rate |
| `cev` | [Number](Number.md) | [read-only] Critical EVasion rate |
| `mev` | [Number](Number.md) | [read-only] Magic EVasion rate |
| `mrf` | [Number](Number.md) | [read-only] Magic ReFlection rate |
| `cnt` | [Number](Number.md) | [read-only] CouNTer attack rate |
| `hrg` | [Number](Number.md) | [read-only] Hp ReGeneration rate |
| `mrg` | [Number](Number.md) | [read-only] Mp ReGeneration rate |
| `trg` | [Number](Number.md) | [read-only] Tp ReGeneration rate |
| `tgr` | [Number](Number.md) | [read-only] TarGet Rate |
| `grd` | [Number](Number.md) | [read-only] GuaRD effect rate |
| `rec` | [Number](Number.md) | [read-only] RECovery effect rate |
| `pha` | [Number](Number.md) | [read-only] PHArmacology |
| `mcr` | [Number](Number.md) | [read-only] Mp Cost Rate |
| `tcr` | [Number](Number.md) | [read-only] Tp Charge Rate |
| `pdr` | [Number](Number.md) | [read-only] Physical Damage Rate |
| `mdr` | [Number](Number.md) | [read-only] Magical Damage Rate |
| `fdr` | [Number](Number.md) | [read-only] Floor Damage Rate |
| `exr` | [Number](Number.md) | [read-only] EXperience Rate |
| `_hp` | [Number](Number.md) |  |
| `_mp` | [Number](Number.md) |  |
| `_tp` | [Number](Number.md) |  |
| `_hidden` | Boolean |  |
| `_paramPlus` | [Array](Array.md).<[Number](Number.md)> |  |
| `_states` | [Array](Array.md).<[Number](Number.md)> |  |
| `_stateTurns` | Object | {[stateId: number]: number} |
| `_buffs` | [Array](Array.md).<[Number](Number.md)> |  |
| `_buffTurns` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

### Methods

#### actionPlusSet () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### addedSkills () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### addedSkillTypes () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
</dl>

#### addParam (paramId, value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### allIcons () → {[Array](Array.md).<[Number](Number.md)>}

Returns all of the icons attached to the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### allTraits () → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}

Returns all the traits of the battler.
<dl>
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
</dl>

#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}

Returns the attack elements of the battler as a list of numbers.
<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### attackStatesRate (stateId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
</dl>

#### attackTimesAdd () → {[Number](Number.md)}

Returns the number of attacks available to the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### buff (paramId) → {[Number](Number.md)}

Buffs the current parameter id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
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
| `buffLevel` | [Number](Number.md) |  |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### buffIcons () → {[Array](Array.md).<[Number](Number.md)>}

Returns the array of buff icons attached to the battler; this is determined by the active buffs on the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### buffLength () → {[Number](Number.md)}

Returns the length of the buff.
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

<dl>
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

<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### canMove () → {Boolean}

<dl>
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

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

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

Returns true if the battler can use the item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### clearBuffs ()

Clears buffs from the battler.
<dl>
</dl>

#### clearParamPlus ()

<dl>
</dl>

#### clearStates ()

<dl>
</dl>

#### collapseType () → {[Number](Number.md)}

Returns the collapse type of the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### confusionLevel () → {[Number](Number.md)}

Returns the confusion level of the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### deathStateId () → {[Number](Number.md)}

Returns the death state id.
<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### decreaseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

#### die ()

Kills the battler.
<dl>
</dl>

#### elementRate (elementId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### eraseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

#### eraseState (stateId)

Erases the current state from the game battler given the stateId in the editor database.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
</dl>

#### guardSkillId () → {[Number](Number.md)}

Returns the guard skill id in the database.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### hide ()

Hides the game battler.
<dl>
</dl>

#### hpRate () → {[Number](Number.md)}

Returns the percentage of the battler's hp left as a float.
<dl>
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
</dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### initMembers ()

<dl>
</dl>

#### isActor () → {Boolean}

Returns true if the battler is an actor.
<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isAppeared () → {Boolean}

Returns true if the game battler is not hidden.
<dl>
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
</dl>

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isConfused () → {Boolean}

Returns true if the battler is confused.
<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDualWield () → {Boolean}

Returns true if the battler dual wields.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDying () → {Boolean}

Returns true if the battler is dying.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEnemy () → {Boolean}

Returns true if the battler is an enemy.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEquipAtypeOk (atypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `atypeId` | [Number](Number.md) |  |

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isGuard () → {Boolean}

Returns true if the battler is guarding.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isHidden () → {Boolean}

Returns true if the game battler is hidden.
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
</dl>

##### Returns:

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRestricted () → {Boolean}

Returns true if the game battler is restricted.
<dl>
</dl>

##### Returns:

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
</dl>

##### Returns:

<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSkillWtypeOk (skill) → {Boolean}

Returns true if the skill is a weapon type oriented skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSubstitute () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### maxTp () → {[Number](Number.md)}

Returns the maximum tp of the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### meetsItemConditions (item) → {Boolean}

Returns true if the battler meets the item conditions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.Item](RPG.Item.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### meetsSkillConditions (skill) → {Boolean}

Returns true if the battler meets the skill conditions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### meetsUsableItemConditions (item) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### onRestrict ()

Handler for when the battler is restricted.
<dl>
</dl>

#### overwriteBuffTurns (paramId, turns)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |

<dl>
</dl>

#### param (paramId) → {[Number](Number.md)}

Returns a standard parameter, given a paramId; standard parameters include: HP, MP, Atk, M.Atk, Def, M.Def, Luck, Agility.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramBase (paramId) → {[Number](Number.md)}

Returns the base parameters of the battler; this is determined by their current level and the paramId given.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramBuffRate (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### paramMax (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |

<dl>
</dl>

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
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
</dl>

#### recoverAll ()

Recovers the battler from all states and restores the battler to maximum hp and mp.
<dl>
</dl>

#### refresh ()

Refreshes the battler.
<dl>
</dl>

#### resetStateCounts (stateId)

Resets the state count of the specified state, given the state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
</dl>

#### restriction () → {[Number](Number.md)}

Returns the number of the restriction.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### revive ()

Revives the battler.
<dl>
</dl>

#### setHp (hp)

Sets the battler hp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hp` | [Number](Number.md) |  |

<dl>
</dl>

#### setMp (mp)

Sets the battler mp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mp` | [Number](Number.md) |  |

<dl>
</dl>

#### setTp (tp)

Sets the battler tp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tp` | [Number](Number.md) |  |

<dl>
</dl>

#### skillMpCost (skill) → {[Number](Number.md)}

Returns the mp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### skillTpCost (skill) → {[Number](Number.md)}

Returns the tp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |

<dl>
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
<dl>
</dl>

#### sparam (sparamId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sparamId` | [Number](Number.md) |  |

<dl>
</dl>

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### stateIcons () → {[Array](Array.md).<[Number](Number.md)>}

Returns the array of state icons attached to the battler; this is determined by the active states on the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### stateMotionIndex () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### stateOverlayIndex () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### stateRate (stateId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### stateResistSet () → {[Array](Array.md).<[Number](Number.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### states () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}

Returns the states applied to the battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.State</a>&gt;</span>
                </dd>
            </dl>

#### tpRate () → {[Number](Number.md)}

Returns the percentage of the battler's tp left as a float.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### traitObjects () → {[Array](Array.md).<*>}

Returns an array of the all objects having traits. States only here.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;*&gt;</span>
                </dd>
            </dl>

#### traits (code) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |

<dl>
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

<dl>
</dl>

##### Returns:

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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### traitsSum (code, id) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |

<dl>
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
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Trait</a>&gt;</span>
                </dd>
            </dl>

#### updateBuffTurns ()

Updates the buff turns on battler.
<dl>
</dl>

#### updateStateTurns ()

<dl>
</dl>

#### xparam (xparamId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xparamId` | [Number](Number.md) |  |

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
