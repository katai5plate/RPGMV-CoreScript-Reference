# Class: Game_Battler

## Game_Battler ()

#### new Game_Battler ()

The superdeclare class of [Game_Actor](Game_Actor.md) and [Game_Enemy](Game_Enemy.md). It contains methods for sprites

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_actions` | [Array](Array.md).<[Game_Action](Game_Action.md)> |  |
| `_speed` | [Number](Number.md) |  |
| `_result` | [Game_ActionResult](Game_ActionResult.md) |  |
| `_actionState` | [String](String.md) |  |
| `_lastTargetIndex` | [Number](Number.md) |  |
| `_animations` | [Array](Array.md).<[MV.BattlerAnimation](MV.BattlerAnimation.md)> |  |
| `_damagePopup` | Boolean |  |
| `_effectType` | [String](String.md) |  |
| `_motionType` | [String](String.md) |  |
| `_weaponImageId` | [Number](Number.md) |  |
| `_motionRefresh` | Boolean |  |
| `_selected` | Boolean |  |


### Extends

* [Game_BattlerBase](Game_BattlerBase.md)


### Inherited From

#### [Game_BattlerBase](Game_BattlerBase.md)

* [actionPlusSet ()](Game_BattlerBase.md#actionplusset---arraynumber)
* [addedSkills ()](Game_BattlerBase.md#addedskills---arraynumber)
* [addedSkillTypes ()](Game_BattlerBase.md#addedskilltypes---arraynumber)
* [addNewState (stateId)](Game_BattlerBase.md#addnewstate-stateid)
* [addParam (paramId, value)](Game_BattlerBase.md#addparam-paramid-value)
* [allIcons ()](Game_BattlerBase.md#allicons---arraynumber)
* [allTraits ()](Game_BattlerBase.md#alltraits---arrayrpgtrait)
* [appear ()](Game_BattlerBase.md#appear-)
* [attackElements ()](Game_BattlerBase.md#attackelements---arraynumber)
* [attackSkillId ()](Game_BattlerBase.md#attackskillid---number)
* [attackSpeed ()](Game_BattlerBase.md#attackspeed---number)
* [attackStates ()](Game_BattlerBase.md#attackstates---arraynumber)
* [attackStatesRate (stateId)](Game_BattlerBase.md#attackstatesrate-stateid)
* [attackTimesAdd ()](Game_BattlerBase.md#attacktimesadd---number)
* [buff (paramId)](Game_BattlerBase.md#buff-paramid--number)
* [buffIconIndex (buffLevel, paramId)](Game_BattlerBase.md#bufficonindex-bufflevel-paramid--number)
* [buffIcons ()](Game_BattlerBase.md#bufficons---arraynumber)
* [buffLength ()](Game_BattlerBase.md#bufflength---number)
* [canAttack ()](Game_BattlerBase.md#canattack---boolean)
* [canEquip (item)](Game_BattlerBase.md#canequip-item--boolean)
* [canEquipArmor (item)](Game_BattlerBase.md#canequiparmor-item--boolean)
* [canEquipWeapon (item)](Game_BattlerBase.md#canequipweapon-item--boolean)
* [canGuard ()](Game_BattlerBase.md#canguard---boolean)
* [canInput ()](Game_BattlerBase.md#caninput---boolean)
* [canMove ()](Game_BattlerBase.md#canmove---boolean)
* [canPaySkillCost (skill)](Game_BattlerBase.md#canpayskillcost-skill--boolean)
* [canUse (item)](Game_BattlerBase.md#canuse-item--boolean)
* [clearBuffs ()](Game_BattlerBase.md#clearbuffs-)
* [clearParamPlus ()](Game_BattlerBase.md#clearparamplus-)
* [clearStates ()](Game_BattlerBase.md#clearstates-)
* [collapseType ()](Game_BattlerBase.md#collapsetype---number)
* [confusionLevel ()](Game_BattlerBase.md#confusionlevel---number)
* [deathStateId ()](Game_BattlerBase.md#deathstateid---number)
* [debuffRate (paramId)](Game_BattlerBase.md#debuffrate-paramid--number)
* [decreaseBuff (paramId)](Game_BattlerBase.md#decreasebuff-paramid)
* [die ()](Game_BattlerBase.md#die-)
* [elementRate (elementId)](Game_BattlerBase.md#elementrate-elementid--number)
* [eraseBuff (paramId)](Game_BattlerBase.md#erasebuff-paramid)
* [eraseState (stateId)](Game_BattlerBase.md#erasestate-stateid)
* [guardSkillId ()](Game_BattlerBase.md#guardskillid---number)
* [hide ()](Game_BattlerBase.md#hide-)
* [hpRate ()](Game_BattlerBase.md#hprate---number)
* [increaseBuff (paramId)](Game_BattlerBase.md#increasebuff-paramid)
* [isActor ()](Game_BattlerBase.md#isactor---boolean)
* [isAlive ()](Game_BattlerBase.md#isalive---boolean)
* [isAppeared ()](Game_BattlerBase.md#isappeared---boolean)
* [isAutoBattle ()](Game_BattlerBase.md#isautobattle---boolean)
* [isBuffAffected (paramId)](Game_BattlerBase.md#isbuffaffected-paramid--boolean)
* [isBuffExpired (paramId)](Game_BattlerBase.md#isbuffexpired-paramid--boolean)
* [isBuffOrDebuffAffected (paramId)](Game_BattlerBase.md#isbuffordebuffaffected-paramid--boolean)
* [isConfused ()](Game_BattlerBase.md#isconfused---boolean)
* [isDead ()](Game_BattlerBase.md#isdead---boolean)
* [isDeathStateAffected ()](Game_BattlerBase.md#isdeathstateaffected---boolean)
* [isDebuffAffected (paramId)](Game_BattlerBase.md#isdebuffaffected-paramid--boolean)
* [isDualWield ()](Game_BattlerBase.md#isdualwield---boolean)
* [isDying ()](Game_BattlerBase.md#isdying---boolean)
* [isEnemy ()](Game_BattlerBase.md#isenemy---boolean)
* [isEquipAtypeOk (atypeId)](Game_BattlerBase.md#isequipatypeok-atypeid--boolean)
* [isEquipTypeLocked (etypeId)](Game_BattlerBase.md#isequiptypelocked-etypeid--boolean)
* [isEquipTypeSealed (etypeId)](Game_BattlerBase.md#isequiptypesealed-etypeid--boolean)
* [isEquipWtypeOk (wtypeId)](Game_BattlerBase.md#isequipwtypeok-wtypeid--boolean)
* [isGuard ()](Game_BattlerBase.md#isguard---boolean)
* [isHidden ()](Game_BattlerBase.md#ishidden---boolean)
* [isMaxBuffAffected (paramId)](Game_BattlerBase.md#ismaxbuffaffected-paramid--boolean)
* [isMaxDebuffAffected (paramId)](Game_BattlerBase.md#ismaxdebuffaffected-paramid--boolean)
* [isOccasionOk (item)](Game_BattlerBase.md#isoccasionok-item--boolean)
* [isPreserveTp ()](Game_BattlerBase.md#ispreservetp---boolean)
* [isRestricted ()](Game_BattlerBase.md#isrestricted---boolean)
* [isSkillSealed (stypeId)](Game_BattlerBase.md#isskillsealed-stypeid--boolean)
* [isSkillTypeSealed (stypeId)](Game_BattlerBase.md#isskilltypesealed-stypeid--boolean)
* [isSkillWtypeOk (skill)](Game_BattlerBase.md#isskillwtypeok-skill--boolean)
* [isStateAffected (stateId)](Game_BattlerBase.md#isstateaffected-stateid--boolean)
* [isStateExpired (stateId)](Game_BattlerBase.md#isstateexpired-stateid--boolean)
* [isStateResist (stateId)](Game_BattlerBase.md#isstateresist-stateid--boolean)
* [isSubstitute ()](Game_BattlerBase.md#issubstitute---boolean)
* [maxTp ()](Game_BattlerBase.md#maxtp---number)
* [meetsItemConditions (item)](Game_BattlerBase.md#Game_BattlerBase.md#meetsitemconditions-item--boolean)
* [meetsSkillConditions (skill)](Game_BattlerBase.md#meetsskillconditions-skill--boolean)
* [meetsUsableItemConditions (item)](Game_BattlerBase.md#meetsusableitemconditions-item--boolean)
* [mostImportantStateText ()](Game_BattlerBase.md#mostimportantstatetext---string)
* [mpRate ()](Game_BattlerBase.md#mprate---number)
* [onRestrict ()](Game_BattlerBase.md#onrestrict-)
* [overwriteBuffTurns (paramId, turns)](Game_BattlerBase.md#overwritebuffturns-paramid-turns)
* [param (paramId)](Game_BattlerBase.md#param-paramid--number)
* [paramBase (paramId)](Game_BattlerBase.md#parambase-paramid--number)
* [paramBuffRate (paramId)](Game_BattlerBase.md#parambuffrate-paramid--number)
* [paramMax (paramId)](Game_BattlerBase.md#parammax-paramid--number)
* [paramMin (paramId)](Game_BattlerBase.md#parammin-paramid--number)
* [paramPlus (paramId)](Game_BattlerBase.md#paramplus-paramid--number)
* [paramRate (paramId)](Game_BattlerBase.md#paramrate-paramid--number)
* [partyAbility (abilityId)](Game_BattlerBase.md#partyability-abilityid--boolean)
* [paySkillCost (skill)](Game_BattlerBase.md#payskillcost-skill)
* [recoverAll ()](Game_BattlerBase.md#recoverall-)
* [refresh ()](Game_BattlerBase.md#refresh-)
* [resetStateCounts (stateId)](Game_BattlerBase.md#resetstatecounts-stateid)
* [restriction ()](Game_BattlerBase.md#restriction---number)
* [revive ()](Game_BattlerBase.md#revive-)
* [setHp (hp)](Game_BattlerBase.md#sethp-hp)
* [setMp (mp)](Game_BattlerBase.md#setmp-mp)
* [setTp (tp)](Game_BattlerBase.md#settp-tp)
* [skillMpCost (skill)](Game_BattlerBase.md#skillmpcost-skill--number)
* [skillTpCost (skill)](Game_BattlerBase.md#skilltpcost-skill--number)
* [slotType ()](Game_BattlerBase.md#slottype---number)
* [sortStates ()](Game_BattlerBase.md#sortstates-)
* [specialFlag (flagId)](Game_BattlerBase.md#specialflag-flagid--boolean)
* [stateIcons ()](Game_BattlerBase.md#stateicons---arraynumber)
* [stateMotionIndex ()](Game_BattlerBase.md#statemotionindex---number)
* [stateOverlayIndex ()](Game_BattlerBase.md#stateoverlayindex---number)
* [stateRate (stateId)](Game_BattlerBase.md#staterate-stateid--number)
* [stateResistSet ()](Game_BattlerBase.md#stateresistset---arraynumber)
* [states ()](Game_BattlerBase.md#states---arrayrpgstate)
* [tpRate ()](Game_BattlerBase.md#tprate---number)
* [traitObjects ()](Game_BattlerBase.md#traitobjects---array)
* [traits (code)](Game_BattlerBase.md#traits-code--arrayrpgtrait)
* [traitsPi (code, id)](Game_BattlerBase.md#traitspi-code-id--number)
* [traitsSet (code)](Game_BattlerBase.md#traitsset-code--arraynumber)
* [traitsSum (code, id)](Game_BattlerBase.md#traitssum-code-id--number)
* [traitsSumAll (code)](Game_BattlerBase.md#traitssumall-code--number)
* [traitsWithId (code, id)](Game_BattlerBase.md#traitswithid-code-id--arrayrpgtrait)
* [updateBuffTurns ()](Game_BattlerBase.md#updatebuffturns-)
* [updateStateTurns ()](Game_BattlerBase.md#updatestateturns-)
* [xparam (xparamId)](Game_BattlerBase.md#xparam-xparamid--number)


### Methods

#### action (index) → {[Game_Action](Game_Action.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Game_Action</span>
	</dd>
</dl>




#### addBuff (paramId, turns)
Adds a buff to the battler for the specified number of turns on the selected parameter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |


#### addDebuff (paramId, turns)
Adds a debuff to the battler for the specified number of turns on the selected parameter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |



#### addState (stateId)


Adds a state to the battler given the specified state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |



#### chargeTpByDamage (damageRate)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damageRate` | [Number](Number.md) |  |


#### clearActions ()
Clears the battler actions.


#### clearAnimations ()
Clears animations from the battler.


#### clearDamagePopup ()
Clear damage pop up from the battler.


#### clearEffect ()
Clears effect from the battler.


#### clearMotion ()
Clears motion from the battler.


#### clearTp ()
Clears the battler's tp.


#### clearWeaponAnimation ()
Clear weapon animation from the battler.


#### consumeItem (item)
Has the battler consume the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |


#### currentAction () → {[Game_Action](Game_Action.md)}
Returns the current action of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Game_Action</span>
	</dd>
</dl>



#### deselect ()



#### effectType () → {[String](String.md)}
Returns the effect type of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### escape ()
Has the battler escape from battle; plays a sound on escaping.


#### forceAction (skillId, targetIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |
| `targetIndex` | [Number](Number.md) |  |


#### gainHp (value)
Adds the specified amount of hp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |


#### gainMp (value)
Adds the specified amount of mp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |


#### gainSilentTp (value)
Adds a specified amount of tp to the battler silently.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |


#### gainTp (value)
Adds the specified amount of tp to the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |


#### initialize ()
Overrides: [Game_BattlerBase](Game_BattlerBase.md)


#### initMembers ()
Overrides: [Game_BattlerBase](Game_BattlerBase.md)


#### initTp ()
Initializes the battler's tp; tp is random.


#### isActing () → {Boolean}
Returns true if the battler is performing an action in battle.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>





#### isAnimationRequested () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isChanting () → {Boolean}
Returns true if the battler is chanting in combat.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDamagePopupRequested () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEffectRequested () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isGuardWaiting () → {Boolean}
Returns true if the battler is waiting to guard.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isInputting () → {Boolean}
Returns true if the battler is inputting commands in battle.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMotionRefreshRequested () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMotionRequested () → {Boolean}
Returns true if a motion is requested.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isSelected () → {Boolean}


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

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isUndecided () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isWaiting () → {Boolean}
Returns true if the battler is waiting in battle.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isWeaponAnimationRequested () → {Boolean}
Returns true if a weapon animation is requested.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### makeActions ()
Creates the actions for the battler.


#### makeActionTimes () → {[Number](Number.md)}
Creates the number of times for an action.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### makeSpeed ()
Calculates the speed of the battler.


#### maxSlipDamage () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### motionType () → {[String](String.md)}
Returns the motion type of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### numActions () → {[Number](Number.md)}
Returns the number of battler actions.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### onAllActionsEnd ()


#### onBattleEnd ()


#### onBattleStart ()


#### onDamage (value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |


#### onRestrict ()


Handler for when theb attler is restricted.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_BattlerBase#onRestrict</a>
                        </li>
                    </ul>
                </dd>
            </dl>


#### onTurnEnd ()


#### performAction (action)
Perform given action motion.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) |  |


#### performActionEnd ()
Perform action end motion.


#### performActionStart (action)
Perform action start motion, given the specified game action.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) |  |


#### performCollapse ()
Performs the collapse motion.


#### performCounter ()
Perform counter motion.


#### performDamage ()
Perform damage motion.


#### performEvasion ()
Perform evasion motion.


#### performMagicEvasion ()
Perform magic evasion motion.


#### performMiss ()
Perform miss motion.


#### performRecovery ()
Perform recovery motion.


#### performReflection ()
Performs the reflect motion.


#### performSubstitute (target)
Perform substitute motion with the specified game battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |


#### refresh ()
Overrides:[Game_BattlerBase](Game_BattlerBase.md)


#### regenerateAll ()
Handler for when battle has started.


#### regenerateHp ()
Has the battler regenerate hp based on their hp regen.


#### regenerateMp ()
Has the battler regenerate mp based on their mp regen.


#### regenerateTp ()
Has the battler regenerate tp based on their tp regen.


#### removeAllBuffs ()
Removes all buffs from the battler.


#### removeBattleStates ()


#### removeBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


#### removeBuffsAuto ()


#### removeCurrentAction ()
Removes the current battler action.


#### removeState (stateId)
Removes the specified state given the state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |


#### removeStatesAuto (timing)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `timing` | [Number](Number.md) |  |


#### removeStatesByDamage ()


#### requestEffect (effectType)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `effectType` | [String](String.md) |  |


#### requestMotion (motionType)
Request the specified motion on the game battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `motionType` | [String](String.md) |  |


#### requestMotionRefresh ()


#### result () → {[Game_ActionResult](Game_ActionResult.md)}
Returns the battler action result.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_ActionResult</a></span>
                </dd>
            </dl>


#### select ()


#### setAction (index, action)
Sets the action at the specified index for the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |
| `action` | [Game_Action](Game_Action.md) |  |


#### setActionState (actionState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actionState` | [String](String.md) |  |


#### setLastTarget (target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |



#### shiftAnimation () → {[MV.BattlerAnimation](MV.BattlerAnimation.md)}


Shifts the battler animation.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.BattlerAnimation</a></span>
                </dd>
            </dl>


#### speed () → {[Number](Number.md)}
Returns the speed of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### startAnimation (animationId, mirror, delay)
Starts the specified animation, given the animation id on the battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |


#### startDamagePopup ()
Starts a damage pop up on the battler.


#### startWeaponAnimation (weaponImageId)
Starts the weapon animation on te battler given a weapon id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `weaponImageId` | [Number](Number.md) |  |


#### useItem (item)
Has theb attler use the given item.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) |  |


#### weaponImageId () → {[Number](Number.md)}
Returns the weapon image id.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
