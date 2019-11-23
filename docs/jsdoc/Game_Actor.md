# Class: Game_Actor

## Game_Actor ()

#### new Game_Actor ()

[アクター]を定義したクラス。

大域変数である $gameActors([Game_Actors](Game_Actors.md))、$gameParty([Game_Party](Game_Party.md)) から参照されるアクターの実体。

アクターのパラメータの取得、画像の設定、戦闘の処理とサイドビュー時の画像処理を行う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) | [read-only] [レベル] |
| `_actorId` | [Number](Number.md) | アクターID |
| `_name` | [String](String.md) | [名前] |
| `_nickname` | [String](String.md) | [二つ名] |
| `_profile` | [String](String.md) | [プロフィール] |
| `_classId` | [Number](Number.md) | クラスID |
| `_level` | [Number](Number.md) | [レベル] |
| `_characterName` | [String](String.md) | [歩行キャラ]画像ファイル名 |
| `_characterIndex` | [Number](Number.md) | [歩行キャラ]画像番号 |
| `_faceName` | [String](String.md) | [顔]画像ファイル名 |
| `_faceIndex` | [Number](Number.md) | [顔]画像番号 |
| `_battlerName` | [String](String.md) | [[SV]戦闘キャラ]画像ファイル名 |
| `_exp` | Object | {[classId: number]: number} |
| `_skills` | [Array](Array.md).<[Number](Number.md)> | [スキル]の配列 |
| `_equips` | [Array](Array.md).<[Game_Item](Game_Item.md)> | [装備]の配列 |
| `_actionInputIndex` | [Number](Number.md) | 行動の番号 |
| `_lastMenuSkill` | [Game_Item](Game_Item.md) | 最後のメニュースキル |
| `_lastBattleSkill` | [Game_Item](Game_Item.md) | 最後の戦闘スキル |
| `_lastCommandSymbol` | [String](String.md) | 最後のコマンド |
| `_stateSteps` | Object | {[stateId: number]: number} |

### Extends

* [Game_Battler](Game_Battler.md)


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


#### [Game_Battler](Game_Battler.md)
* [action (index) ](Game_Battler.md#action-index--game_action)
* [addBuff (paramId, turns)](Game_Battler.md#addbuff-paramid-turns)
* [addDebuff (paramId, turns)](Game_Battler.md#adddebuff-paramid-turns)
* [addState (stateId)](Game_Battler.md#addstate-stateid)
* [chargeTpByDamage (damageRate)](Game_Battler.md#chargetpbydamage-damagerate)
* [clearActions ()](Game_Battler.md#clearactions-)
* [clearAnimations ()](Game_Battler.md#clearanimations-)
* [clearDamagePopup ()](Game_Battler.md#cleardamagepopup-)
* [clearEffect ()](Game_Battler.md#cleareffect-)
* [clearMotion ()](Game_Battler.md#clearmotion-)
* [clearTp ()](Game_Battler.md#cleartp-)
* [clearWeaponAnimation ()](Game_Battler.md#clearweaponanimation-)
* [consumeItem (item)](Game_Battler.md#consumeitem-item)
* [currentAction ()](Game_Battler.md#currentaction---game_action)
* [deselect ()](Game_Battler.md#deselect-)
* [effectType ()](Game_Battler.md#effecttype---string)
* [escape ()](Game_Battler.md#escape-)
* [forceAction (skillId, targetIndex)](Game_Battler.md#forceaction-skillid-targetindex)
* [gainHp (value)](Game_Battler.md#gainhp-value)
* [gainMp (value)](Game_Battler.md#gainmp-value)
* [gainSilentTp (value)](Game_Battler.md#gainsilenttp-value)
* [gainTp (value)](Game_Battler.md#gaintp-value)
* [initTp ()](Game_Battler.md#inittp-)
* [isActing ()](Game_Battler.md#isacting---boolean)
* [isAnimationRequested ()](Game_Battler.md#isanimationrequested---boolean)
* [isChanting ()](Game_Battler.md#ischanting---boolean)
* [isDamagePopupRequested ()](Game_Battler.md#isdamagepopuprequested---boolean)
* [isEffectRequested ()](Game_Battler.md#iseffectrequested---boolean)
* [isGuardWaiting ()](Game_Battler.md#isguardwaiting---boolean)
* [isInputting ()](Game_Battler.md#isinputting---boolean)
* [isMotionRefreshRequested ()](Game_Battler.md#ismotionrefreshrequested---boolean)
* [isMotionRequested ()](Game_Battler.md#ismotionrequested---boolean)
* [isSelected ()](Game_Battler.md#isselected---boolean)
* [isStateAddable (stateId)](Game_Battler.md#isstateaddable-stateid--boolean)
* [isStateRestrict (stateId)](Game_Battler.md#isstaterestrict-stateid--boolean)
* [isUndecided ()](Game_Battler.md#isundecided---boolean)
* [isWaiting ()](Game_Battler.md#iswaiting---boolean)
* [isWeaponAnimationRequested ()](Game_Battler.md#isweaponanimationrequested---boolean)
* [makeActions ()](Game_Battler.md#makeactions-)
* [makeActionTimes ()](Game_Battler.md#makeactiontimes---number)
* [makeSpeed ()](Game_Battler.md#makespeed-)
* [maxSlipDamage ()](Game_Battler.md#maxslipdamage---number)
* [motionType ()](Game_Battler.md#motiontype---string)
* [numActions ()](Game_Battler.md#numactions---number)
* [onAllActionsEnd ()](Game_Battler.md#onallactionsend-)
* [onBattleEnd ()](Game_Battler.md#onbattleend-)
* [onBattleStart ()](Game_Battler.md#onbattlestart-)
* [onDamage (value)](Game_Battler.md#ondamage-value)
* [onRestrict ()](Game_Battler.md#onrestrict-)
* [onTurnEnd ()](Game_Battler.md#onturnend-)
* [performAction (action)](Game_Battler.md#performaction-action)
* [performActionEnd ()](Game_Battler.md#performactionend-)
* [performActionStart (action)](Game_Battler.md#performactionstart-action)
* [performCollapse ()](Game_Battler.md#performcollapse-)
* [performCounter ()](Game_Battler.md#performcounter-)
* [performDamage ()](Game_Battler.md#performdamage-)
* [performEvasion ()](Game_Battler.md#performevasion-)
* [performMagicEvasion ()](Game_Battler.md#performmagicevasion-)
* [performMiss ()](Game_Battler.md#performmiss-)
* [performRecovery ()](Game_Battler.md#performrecovery-)
* [performReflection ()](Game_Battler.md#performreflection-)
* [performSubstitute (target)](Game_Battler.md#performsubstitute-target)
* [regenerateAll ()](Game_Battler.md#regenerateall-)
* [regenerateHp ()](Game_Battler.md#regeneratehp-)
* [regenerateMp ()](Game_Battler.md#regeneratemp-)
* [regenerateTp ()](Game_Battler.md#regeneratetp-)
* [removeAllBuffs ()](Game_Battler.md#removeallbuffs-)
* [removeBattleStates ()](Game_Battler.md#removebattlestates-)
* [removeBuff (paramId)](Game_Battler.md#removebuff-paramid)
* [removeBuffsAuto ()](Game_Battler.md#removebuffsauto-)
* [removeCurrentAction ()](Game_Battler.md#removecurrentaction-)
* [removeState (stateId)](Game_Battler.md#removestate-stateid)
* [removeStatesAuto (timing)](Game_Battler.md#removestatesauto-timing)
* [removeStatesByDamage ()](Game_Battler.md#removestatesbydamage-)
* [requestEffect (effectType)](Game_Battler.md#requesteffect-effecttype)
* [requestMotion (motionType)](Game_Battler.md#requestmotion-motiontype)
* [requestMotionRefresh ()](Game_Battler.md#requestmotionrefresh-)
* [result () ](Game_Battler.md#result---game_actionresult)
* [select ()](Game_Battler.md#select-)
* [setAction (index, action)](Game_Battler.md#setaction-index-action)
* [setActionState (actionState)](Game_Battler.md#setactionstate-actionstate)
* [setLastTarget (target)](Game_Battler.md#setlasttarget-target)
* [shiftAnimation ()](Game_Battler.md#shiftanimation---mvbattleranimation)
* [speed ()](Game_Battler.md#speed---number)
* [startAnimation (animationId, mirror, delay)](Game_Battler.md#startanimation-animationid-mirror-delay)
* [startDamagePopup ()](Game_Battler.md#startdamagepopup-)
* [startWeaponAnimation (weaponImageId)](Game_Battler.md#startweaponanimation-weaponimageid)
* [useItem (item)](Game_Battler.md#useitem-item)
* [weaponImageId ()](Game_Battler.md#weaponimageid---number)



### Methods

#### actor () → {[RPG.Actor](RPG.Actor.md)}
[アクター]のデータベース情報を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>RPG.Actor</span>
	</dd>
</dl>


#### actorId () → {[Number](Number.md)}
アクターIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}
防具を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;RPG.Armor&gt;</span>
    </dd>
</dl>


#### attackAnimationId1 () → {[Number](Number.md)}
1撃目のアニメーションIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### attackAnimationId2 () → {[Number](Number.md)}
2撃目のアニメーションIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#attackelements---arraynumber)


#### bareHandsAnimationId () → {[Number](Number.md)}
素手攻撃のアニメーションIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### bareHandsElementId () → {[Number](Number.md)}
素手攻撃の属性IDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### basicFloorDamage () → {[Number](Number.md)}
基本フロアダメージを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### battlerName () → {[String](String.md)}
バトラーの名前を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### benchMembersExpRate () → {[Number](Number.md)}
戦闘に参加していないメンバーの経験値の取得率を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### bestEquipItem (slotId)
指定スロットのベストの装備アイテムを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |


#### calcEquipItemPerformance (item) → {[Number](Number.md)}
指定アイテムと装備アイテムの能力の差分の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### changeClass (classId, keepExp)
指定クラスに変更する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `classId` | [Number](Number.md) | クラスID |
| `keepExp` | Boolean | 経験値を保持するか |


#### changeEquip (slotId, item)
指定スロットを指定装備に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### changeEquipById (etypeId, itemId)
指定装備タイプを指定装備に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | 装備タイプID |
| `itemId` | [Number](Number.md) | アイテムID |


#### changeExp (exp, show)
Change the actor experience points; leveling up the actor if it's above the required exp for the current level. If show is set to true, actor level up with be displayed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `exp` | [Number](Number.md) |  |
| `show` | Boolean |  |


#### changeLevel (level, show)


Changes the actor level; if show is set to true, the actor level will be displayed.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) |  |
| `show` | Boolean |  |


#### characterIndex () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### characterName () → {[String](String.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>



#### checkFloorEffect ()
Checks the effect of the floor on the actor.


#### clearActions ()
Overrides:Game_Battler#clearActions


#### clearEquipments ()
Clears the actor's equipment; items are returned to the inventory.


#### clearStates ()
Overrides:Game_Battler#clearStates


#### currentClass () → {[RPG.Class](RPG.Class.md)}
Returns the current class of the actor from the database.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Class</a></span>
                </dd>
            </dl>


#### currentExp () → {[Number](Number.md)}
Returns the current experience points of the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### currentLevelExp () → {[Number](Number.md)}
Returns the current level's experience for the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>






#### discardEquip (item)
Discards the given equip item from the actor; item is not return to the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |


#### displayLevelUp (newSkills)
Displays the actor level up in a message window, with the learned skills.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newSkills` | [Array](Array.md).<[RPG.Skill](RPG.Skill.md)> |  |


#### equips () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}
Returns the equipment of the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.EquipItem</a>&gt;</span>
                </dd>
            </dl>


#### equipSlots () → {[Array](Array.md).<[Number](Number.md)>}
Returns the equip slots of the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>


#### eraseState (stateId)
Overrides:>Game_Battler#eraseState


#### executeFloorDamage ()
Executes the floor dmaage on the actor.


#### expForLevel (level) → {[Number](Number.md)}


Returns the exp required to level.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### faceIndex () → {[Number](Number.md)}


Returns the face index of the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### faceName () → {[String](String.md)}


Returns the face name of the actor; this is the image of faces for the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### finalExpRate () → {[Number](Number.md)}


Returns the final exp rate of the actor based on if the actor is a reserved party member or an active battle member.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### findNewSkills (lastSkills) → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `lastSkills` | [Array](Array.md).<[RPG.Skill](RPG.Skill.md)> |  |


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
                </dd>
            </dl>



#### forceChangeEquip (slotId, item)
Forces the actor to change equipment in the given slot with the given equip item without placing the item back into the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) |  |


#### forgetSkill (skillId)
Actor forgets the specified skill given the skill id from the actor's usable skills.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |


#### friendsUnit () → {[Game_Party](Game_Party.md)}


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





#### hasArmor (armor) → {Boolean}
Returns true if the actor has armor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `armor` | [RPG.Armor](RPG.Armor.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### hasNoWeapons () → {Boolean}


Returns true if the actor has no weapon.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### hasSkill (skillId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### hasWeapon (weapon) → {Boolean}
Returns true if the actor has a weapon.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `weapon` | [RPG.Weapon](RPG.Weapon.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>





#### index () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### initEquips (equips)
Initialize actor equipment in the given slots.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `equips` | [Array](Array.md).<[Number](Number.md)> |  |


#### initExp ()
Initialize exp of the actor.


#### initialize (actorId)
Overrides:Game_Battler#initialize


#### initImages ()
Initialize images of the actor.


#### initMembers ()
Overrides:Game_Battler#initMembers


#### initSkills ()
Initialize actor skills.



#### inputtingAction () → {[Game_Action](Game_Action.md)}
Returns action the actor is inputting.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Action</a></span>
                </dd>
            </dl>



#### isActor () → {Boolean}
Overrides:Game_Battler#isActor


#### isBattleMember () → {Boolean}
Returns true if the actor is a member in battle.

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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>





#### isEquipChangeOk (slotId) → {Boolean}
Returns true if the equip change is okay in the given slot.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) |  |


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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>




#### isFormationChangeOk () → {Boolean}


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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMaxLevel () → {Boolean}
Returns true if the actor is max level.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>




#### isSkillWtypeOk (skill) → {Boolean}
Overrides:Game_Battler#isSkillWtypeOk

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isSpriteVisible () → {Boolean}
Returns true if the actor sprite is visible.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>




#### isWtypeEquipped (wtypeId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### lastBattleSkill () → {[RPG.Skill](RPG.Skill.md)}


Returns the last battle skill of the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Skill</a></span>
                </dd>
            </dl>


#### lastCommandSymbol () → {[String](String.md)}


Returns the last command symbol that the actor used.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### lastMenuSkill () → {[RPG.Skill](RPG.Skill.md)}
Returns the last menu skill of the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Skill</a></span>
                </dd>
            </dl>


#### learnSkill (skillId)
Actor learns the specified skill given the skill id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |


#### levelDown ()
Level down the actor.


#### levelUp ()
Level up the actor.


#### makeActionList () → {[Array](Array.md).<[Game_Action](Game_Action.md)>}
Creates the action list for the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Action</a>&gt;</span>
                </dd>
            </dl>


#### makeActions ()
Overrides:Game_Battler#makeActions




#### makeAutoBattleActions ()
Creates the auto battle actions for the game actor.

#### makeConfusionActions ()





#### maxFloorDamage () → {[Number](Number.md)}
Returns the max floor damage.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### maxLevel ()
Returns the maximum level of the actor.


#### meetsUsableItemConditions (item) → {Boolean}
Overrides:Game_Battler#meetsUsableItemConditions


#### name (name)


Sets the actor name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  |


#### nextLevelExp () → {[Number](Number.md)}


Returns the experience points for the next level of the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>

#### nextRequiredExp () → {[Number](Number.md)}


Returns the next required experience points for the actor to level up.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>

#### nickname () → {[String](String.md)}


Returns the nickname of the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### onPlayerWalk ()


Handler for when the player walks on the map scene.


#### opponentsUnit () → {[Game_Troop](Game_Troop.md)}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Troop</a></span>
                </dd>
            </dl>


#### optimizeEquipments ()
Optimize the actor's equipment.


#### paramBase (paramId) → {[Number](Number.md)}
Overrides:Game_Battler#paramBase


#### paramMax (paramId) → {[Number](Number.md)}
Overrides:Game_Battler#paramMax


#### paramPlus (paramId) → {[Number](Number.md)}
Overrides:Game_Battler#paramPlus


#### performAction (action)
Overrides:>Game_Battler#performAction


#### performActionEnd ()
Overrides:Game_Battler#performActionEnd


#### performActionStart (action)
Overrides:Game_Battler#performActionStart


#### performAttack ()
Performs the attack motion for the actor.


#### performCollapse ()
Overrides:Game_Battler#performCollapse


#### performCounter ()
Overrides:Game_Battler#performCounter


#### performDamage ()
Overrides:Game_Battler#performDamage


#### performEscape ()


Performs the escape motion for the actor.

#### performEvasion ()
Overrides:Game_Battler#performEvasion


#### performMagicEvasion ()
Overrides:Game_Battler#performMagicEvasion


#### performMapDamage ()


Perform damage to the actor on the map scene.



#### performVictory ()


Perform the victory motion for the actor.

#### profile () → {[String](String.md)}


Returns the actor profile.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>



#### refresh ()
Overrides:[Game_Battler](Game_Battler.md#refresh-)


#### releaseUnequippableItems (forcing)
Returns items the actor can't normally equip to the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `forcing` | Boolean |  |





#### resetStateCounts (stateId)
Reset state count of the specified state.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Game_Battler#resetStateCounts</a>
                        </li>
                    </ul>
                </dd>
            </dl>


#### selectNextCommand () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### selectPreviousCommand () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### setBattlerImage (battlerName)
Sets the battler image of the actor; this is the sprite displayed in the side view mode.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battlerName` | [String](String.md) |  |


#### setCharacterImage (characterName, characterIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  |
| `characterIndex` | [Number](Number.md) |  |


#### setFaceImage (faceName, faceIndex)
Sets the face image of the actor given the face image (from database) and face index within the iamge.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.md) |  |
| `faceIndex` | [Number](Number.md) |  |


#### setLastBattleSkill (skill)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |


#### setLastCommandSymbol (symbol)
Sets the last command symbol to the given symbol; this is the selected command in the battle menu.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) |  |


#### setLastMenuSkill (skill)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |


#### setName (name)
Sets the actor name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  |


#### setNickname (nickname)
Sets the nickname of the actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `nickname` | [String](String.md) |  |


#### setProfile (profile)
Sets the actor profile.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `profile` | [String](String.md) |  |


#### setup (actorId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) |  |


#### shouldDisplayLevelUp () → {Boolean}
Returns true if the actor should display level up in a message window.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### showAddedStates ()
Shows the added states to the actor.


#### showRemovedStates ()
Shows the removed states from the actor.


#### skills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}
Returns the actor's skills; even if the skills are not usable.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
                </dd>
            </dl>


#### startAnimation (animationId, mirror, delay)
Overrides:Game_Battler#startAnimation



#### stepsForTurn () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### testEscape (item)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) |  |



#### tradeItemWithParty (newItem, oldItem) → {Boolean}


Trades the new item with the old item in the party inventory.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newItem` | [RPG.EquipItem](RPG.EquipItem.md) |  |
| `oldItem` | [RPG.EquipItem](RPG.EquipItem.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### traitObjects () → {[Array](Array.md).<*>}
Overrides:[Game_Battle](Game_Battler.mdr#traitobjects)</a>



#### turnEndOnMap ()


#### updateStateSteps (state)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `state` | [RPG.State](RPG.State.md) |  |


#### usableSkills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}


Returns the usable skills of the actor.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Skill</a>&gt;</span>
                </dd>
            </dl>


#### weapons () → {[Array](Array.md).<[RPG.Weapon](RPG.Weapon.md)>}


Returns the weapon of the actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Weapon&gt;</span>
	</dd>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
