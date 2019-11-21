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
