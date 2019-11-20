# Class: Game_BattlerBase

## Game_BattlerBase ()

#### new Game_BattlerBase ()

[Game_Battler](Game_Battler.md) のスーパークラス。

[BattleManager](BattleManager.md) に保持され、戦闘シーンでのパラメータの計算につかわれる。

##### Properties:
TRAIT_が頭についている定数は、[特徴]に含まれる値を取り出す際に使われる。ただし本クラスではそれぞれメソッドが用意されているので、直接使用する必要はない。


[特徴]の値は[RPG.Trait](RPG.Trait.md) を参照。この値を直接操作する際には TRAIT_接頭辞の定数を使う。

| Name | Type | Description |
| --- | --- | --- |
| `TRAIT_ELEMENT_RATE` | [Number](Number.md) | [static] [耐性 - 属性有効度] |
| `TRAIT_DEBUFF_RATE` | [Number](Number.md) | [static] [耐性 - 弱体有効度]  |
| `TRAIT_STATE_RATE` | [Number](Number.md) | [static] [耐性 - ステート有効度] |
| `TRAIT_STATE_RESIST` | [Number](Number.md) | [static] [耐性 - ステート無効化] |
| `TRAIT_PARAM` | [Number](Number.md) | [static] [能力値 - 通常能力値] |
| `TRAIT_XPARAM` | [Number](Number.md) | [static] [能力値 - 追加能力値] |
| `TRAIT_SPARAM` | [Number](Number.md) | [static] [能力値 - 特殊能力値] |
| `TRAIT_ATTACK_ELEMENT` | [Number](Number.md) | [static] [攻撃 - 攻撃時属性]|
| `TRAIT_ATTACK_STATE` | [Number](Number.md) | [static] [攻撃 - 攻撃時ステート] |
| `TRAIT_ATTACK_SPEED` | [Number](Number.md) | [static] [攻撃 - 攻撃速度補正] |
| `TRAIT_ATTACK_TIMES` | [Number](Number.md) | [static] [攻撃 - 攻撃追加回数] |
| `TRAIT_STYPE_ADD` | [Number](Number.md) | [static] [スキル - スキルタイプ追加] |
| `TRAIT_STYPE_SEAL` | [Number](Number.md) | [static] [スキル - スキルタイプ封印] |
| `TRAIT_SKILL_ADD` | [Number](Number.md) | [static] [スキル - スキル追加] |
| `TRAIT_SKILL_SEAL` | [Number](Number.md) | [static] [スキル - スキル封印] |
| `TRAIT_EQUIP_WTYPE` | [Number](Number.md) | [static] [装備 - 武器タイプ装備] |
| `TRAIT_EQUIP_ATYPE` | [Number](Number.md) | [static] [装備 - 防具タイプ装備] |
| `TRAIT_EQUIP_LOCK` | [Number](Number.md) | [static] [装備 - 装備固定] |
| `TRAIT_EQUIP_SEAL` | [Number](Number.md) | [static] [装備 - 装備封印 |
| `TRAIT_SLOT_TYPE` | [Number](Number.md) | [static] [装備 - スロットタイプ] |
| `TRAIT_ACTION_PLUS` | [Number](Number.md) | [static] [その他 - 行動回数追加] |
| `TRAIT_SPECIAL_FLAG` | [Number](Number.md) | [static] [その他 - 特殊フラグ] |
| `TRAIT_COLLAPSE_TYPE` | [Number](Number.md) | [static] [その他 - 消滅エフェクト] |
| `TRAIT_PARTY_ABILITY` | [Number](Number.md) | [static] [その他 - バーティ能力] |
| `FLAG_ID_AUTO_BATTLE` | [Number](Number.md) | [static] 特殊フラグIDの[自動戦闘]|
| `FLAG_ID_GUARD` | [Number](Number.md) | [static] 特殊フラグIDの[防御]|
| `FLAG_ID_SUBSTITUTE` | [Number](Number.md) | [static] 特殊フラグIDの[身代わり]|
| `FLAG_ID_PRESERVE_TP` | [Number](Number.md) | [static] 特殊フラグIDの[TP持ち越し]|
| `ICON_BUFF_START` | [Number](Number.md) | [static] 能力強化アイコンの開始位置 |
| `ICON_DEBUFF_START` | [Number](Number.md) | [static] 能力減少アイコンの開始位置  |
| `hp` | [Number](Number.md) | [read-only] HP |
| `mp` | [Number](Number.md) | [read-only] MP |
| `tp` | [Number](Number.md) | [read-only] TP |
| `mhp` | [Number](Number.md) | [read-only] 最大HP |
| `mmp` | [Number](Number.md) | [read-only] 最大MP |
| `atk` | [Number](Number.md) | [read-only] 攻撃力 |
| `def` | [Number](Number.md) | [read-only] 防御力 |
| `mat` | [Number](Number.md) | [read-only] 魔法攻撃力 |
| `mdf` | [Number](Number.md) | [read-only] 魔法防御力 |
| `agi` | [Number](Number.md) | [read-only] 敏捷性 |
| `luk` | [Number](Number.md) | [read-only] 運 |
| `hit` | [Number](Number.md) | [read-only] 命中率 |
| `eva` | [Number](Number.md) | [read-only] 回避率 |
| `cri` | [Number](Number.md) | [read-only] 会心率 |
| `cev` | [Number](Number.md) | [read-only] 会心回避率 |
| `mev` | [Number](Number.md) | [read-only] 魔法会心率 |
| `mrf` | [Number](Number.md) | [read-only] 魔法反射率 |
| `cnt` | [Number](Number.md) | [read-only] 反撃率 |
| `hrg` | [Number](Number.md) | [read-only] HP回復率 |
| `mrg` | [Number](Number.md) | [read-only] MP回復率 |
| `trg` | [Number](Number.md) | [read-only] TP回復率 |
| `tgr` | [Number](Number.md) | [read-only] 狙われ率 |
| `grd` | [Number](Number.md) | [read-only] 防御率 |
| `rec` | [Number](Number.md) | [read-only] 回復率 |
| `pha` | [Number](Number.md) | [read-only] 薬効果率 |
| `mcr` | [Number](Number.md) | [read-only] MP消費率 |
| `tcr` | [Number](Number.md) | [read-only] TPチャージ率 |
| `pdr` | [Number](Number.md) | [read-only] 物理ダメージ率 |
| `mdr` | [Number](Number.md) | [read-only] 魔法ダメージ率 |
| `fdr` | [Number](Number.md) | [read-only] 床ダメージ率 |
| `exr` | [Number](Number.md) | [read-only] 経験値率 |
| `_hp` | [Number](Number.md) | HP |
| `_mp` | [Number](Number.md) | MP |
| `_tp` | [Number](Number.md) | TP |
| `_hidden` | Boolean | 隠れているか |
| `_paramPlus` | [Array](Array.md).<[Number](Number.md)> | 強化能力 |
| `_states` | [Array](Array.md).<[Number](Number.md)> | 状態 |
| `_stateTurns` | Object | {[stateId: number]: number} 状態の残りターン|
| `_buffs` | [Array](Array.md).<[Number](Number.md)> | 能力の強化 |
| `_buffTurns` | [Array](Array.md).<[Number](Number.md)> | 強化の残りターン |


### Methods

#### actionPlusSet () → {[Array](Array.md).<[Number](Number.md)>}
 [その他 - 行動回数追加] の配列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### addedSkills () → {[Array](Array.md).<[Number](Number.md)>}
[スキル - スキル追加]の配列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### addedSkillTypes () → {[Array](Array.md).<[Number](Number.md)>}
 [スキル - スキルタイプ追加] の配列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### addNewState (stateId)
新たな状態を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | 状態ID |


#### addParam (paramId, value)
指定能力に指定した値を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |
| `value` | [Number](Number.md) | 値 |


#### allIcons () → {[Array](Array.md).<[Number](Number.md)>}
全アイコン番号を配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### allTraits () → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
全特徴を配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Trait&gt;</span>
	</dd>
</dl>


#### appear ()
出現する。


#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}
 [攻撃時属性]の配列を得る。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### attackSkillId () → {[Number](Number.md)}
攻撃スキルのIDを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### attackSpeed () → {[Number](Number.md)}
 [攻撃 - 攻撃速度補正] を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### attackStates () → {[Array](Array.md).<[Number](Number.md)>}
攻撃状態を配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### attackStatesRate (stateId)
攻撃状態の付加率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | 状態ID |


#### attackTimesAdd () → {[Number](Number.md)}
[攻撃 - 攻撃追加回数]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### buff (paramId) → {[Number](Number.md)}
指定能力の強化量を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### buffIconIndex (buffLevel, paramId) → {[Number](Number.md)}
強化アイコンの番号を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffLevel` | [Number](Number.md) | 強化レベル |
| `paramId` | [Number](Number.md) | 通常能力ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### buffIcons () → {[Array](Array.md).<[Number](Number.md)>}
付加中の強化アイコン番号を配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### buffLength () → {[Number](Number.md)}
強化能力数を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### canAttack () → {Boolean}
攻撃可能か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canEquip (item) → {Boolean}
指定アイテムを装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canEquipArmor (item) → {Boolean}
指定防具を装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canEquipWeapon (item) → {Boolean}
指定武器を装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canGuard () → {Boolean}
防御可能か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canInput () → {Boolean}
行動の入力可能か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canMove () → {Boolean}
動作可能か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canPaySkillCost (skill) → {Boolean}
指定スキルの動作可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### canUse (item) → {Boolean}
指定アイテムを使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### clearBuffs ()
能力強化を消す。


#### clearParamPlus ()


#### clearStates ()


#### collapseType () → {[Number](Number.md)}
[その他 - 消滅エフェクト]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### confusionLevel () → {[Number](Number.md)}


Returns the confusion level of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### deathStateId () → {[Number](Number.md)}


Returns the death state id.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### debuffRate (paramId) → {[Number](Number.md)}
指定した能力値に対する[耐性 - 弱体有効度] を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### decreaseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


#### die ()


Kills the battler.


#### elementRate (elementId) → {[Number](Number.md)}
 指定の属性に対する[耐性 - 属性有効度]を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementId` | [Number](Number.md) | 属性ID |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>

#### eraseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


#### eraseState (stateId)


Erases the current state from the game battler given the stateId in the editor database.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |


#### guardSkillId () → {[Number](Number.md)}


Returns the guard skill id in the database.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### hide ()


Hides the game battler.

#### hpRate () → {[Number](Number.md)}


Returns the percentage of the battler's hp left as a float.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### increaseBuff (paramId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


#### initialize ()


 オブジェクト生成時の初期化。

#### initMembers ()


#### isActor () → {Boolean}


Returns true if the battler is an actor.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isAlive () → {Boolean}


Returns true if the battler is alive.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isAppeared () → {Boolean}


Returns true if the game battler is not hidden.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isAutoBattle () → {Boolean}


Returns true if the battler is set to battle automatically.

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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isConfused () → {Boolean}


Returns true if the battler is confused.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isDead () → {Boolean}


Returns true if the battler is dead.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isDeathStateAffected () → {Boolean}


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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isDualWield () → {Boolean}


Returns true if the battler dual wields.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isDying () → {Boolean}


Returns true if the battler is dying.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isEnemy () → {Boolean}


Returns true if the battler is an enemy.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEquipAtypeOk (atypeId) → {Boolean}
指定防具タイプが[装備 - 防具タイプ装備]にある(装備可能)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `atypeId` | [Number](Number.md) | 防具タイプID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEquipTypeLocked (etypeId) → {Boolean}
指定装備タイプが [装備 - 装備固定]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | 装備タイプID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEquipTypeSealed (etypeId) → {Boolean}
指定装備タイプが [装備 - 装備封印]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | 装備タイプID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEquipWtypeOk (wtypeId) → {Boolean}
指定武器タイプが[装備 - 武器タイプ装備]にある(装備可能)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) | 武器タイプID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isGuard () → {Boolean}


Returns true if the battler is guarding.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isHidden () → {Boolean}


Returns true if the game battler is hidden.

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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isPreserveTp () → {Boolean}


Returns true if tp is preserved between battles.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isRestricted () → {Boolean}


Returns true if the game battler is restricted.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isSkillSealed (stypeId) → {Boolean}
指定スキルタイプが[スキル - スキル封印]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) | スキルタイプID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isSkillTypeSealed (stypeId) → {Boolean}
指定スキルタイプが [スキル - スキルタイプ封印]されているか。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) | スキルタイプID |


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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### isSubstitute () → {Boolean}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### maxTp () → {[Number](Number.md)}


Returns the maximum tp of the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### meetsItemConditions (item) → {Boolean}


Returns true if the battler meets the item conditions.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.Item](RPG.Item.md) |  |


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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>

#### mostImportantStateText () → {[String](String.md)}


##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### mpRate () → {[Number](Number.md)}


Returns the percentage of the battler's mp left as a float.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### onRestrict ()


Handler for when the battler is restricted.

#### overwriteBuffTurns (paramId, turns)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |
| `turns` | [Number](Number.md) |  |


#### param (paramId) → {[Number](Number.md)}


Returns a standard parameter, given a paramId; standard parameters include: HP, MP, Atk, M.Atk, Def, M.Def, Luck, Agility.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramBase (paramId) → {[Number](Number.md)}


Returns the base parameters of the battler; this is determined by their current level and the paramId given.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramBuffRate (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramMax (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramMin (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramPlus (paramId) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### paramRate (paramId) → {[Number](Number.md)}
指定した[能力値 - 通常能力値]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### partyAbility (abilityId) → {Boolean}
指定パーティ能力が[その他 - バーティ能力]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) | パーティ能力ID |

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


#### recoverAll ()


Recovers the battler from all states and restores the battler to maximum hp and mp.

#### refresh ()


Refreshes the battler.

#### resetStateCounts (stateId)


Resets the state count of the specified state, given the state id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) |  |


#### restriction () → {[Number](Number.md)}


Returns the number of the restriction.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### revive ()


Revives the battler.

#### setHp (hp)


Sets the battler hp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hp` | [Number](Number.md) |  |


#### setMp (mp)


Sets the battler mp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mp` | [Number](Number.md) |  |


#### setTp (tp)


Sets the battler tp.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tp` | [Number](Number.md) |  |


#### skillMpCost (skill) → {[Number](Number.md)}


Returns the mp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### skillTpCost (skill) → {[Number](Number.md)}


Returns the tp cost of the skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### slotType () → {[Number](Number.md)}
 [装備 - スロットタイプ]を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### sortStates ()
Sorts the states attached to the battler.


#### sparam (sparamId) → {[Number](Number.md)}
指定した[能力値 - 特殊能力値]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sparamId` | [Number](Number.md) | 特殊能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### specialFlag (flagId) → {Boolean}
指定フラグが[その他 - 特殊フラグ]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `flagId` | [Number](Number.md) | フラグID |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### stateIcons () → {[Array](Array.md).<[Number](Number.md)>}


Returns the array of state icons attached to the battler; this is determined by the active states on the battler.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>

#### stateMotionIndex () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### stateOverlayIndex () → {[Number](Number.md)}


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### stateRate (stateId) → {[Number](Number.md)}
 指定したステートに対する[耐性 - ステート有効度]を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### stateResistSet () → {[Array](Array.md).<[Number](Number.md)>}
[耐性 - ステート無効化]に対応する、ステートIDの配列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### states () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}


Returns the states applied to the battler.

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.State</a>&gt;</span>
                </dd>
            </dl>

#### tpRate () → {[Number](Number.md)}


Returns the percentage of the battler's tp left as a float.

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitObjects () → {[Array](Array.md).<*>}


Returns an array of the all objects having traits. States only here.

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


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Trait&gt;</span>
	</dd>
</dl>


#### traitsPi (code, id) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsSet (code) → {[Array](Array.md).<[Number](Number.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>

#### traitsSum (code, id) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsSumAll (code) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsWithId (code, id) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) |  |
| `id` | [Number](Number.md) |  |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Trait&gt;</span>
	</dd>
</dl>

#### updateBuffTurns ()


Updates the buff turns on battler.

#### updateStateTurns ()


#### xparam (xparamId) → {[Number](Number.md)}
 指定した[能力値 - 追加能力値] の値を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xparamId` | [Number](Number.md) | 追加能力値ID  |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>



 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
