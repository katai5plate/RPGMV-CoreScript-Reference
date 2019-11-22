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
| `_states` | [Array](Array.md).<[Number](Number.md)> | ステート |
| `_stateTurns` | Object | {[stateId: number]: number} ステートの残りターン|
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
新たなステートを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |


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
バトラーを出現させる。


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
攻撃ステートを配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### attackStatesRate (stateId)
攻撃ステートの付加率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |


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
能力強化を戻す。


#### clearParamPlus ()
能力強化量を戻す。


#### clearStates ()
ステート変化を戻す。


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
混乱レベルを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### deathStateId () → {[Number](Number.md)}
死亡ステートのID(規定値:1)を返す。

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
指定通常能力の能力強化を減少させる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |


#### die ()
バトラーを死亡ステートにする。


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
指定通常能力の強化を消す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |


#### eraseState (stateId)
指定ステートを消す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |


#### guardSkillId () → {[Number](Number.md)}
防御スキルのID(規定値:2)を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### hide ()
バトラーを隠す。


#### hpRate () → {[Number](Number.md)}
HPのパーセント量を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### increaseBuff (paramId)
指定通常能力を強化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |


#### initialize ()
 オブジェクト生成時の初期化。


#### initMembers ()
メンバ変数を初期化。


#### isActor () → {Boolean}
アクターか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isAlive () → {Boolean}
生きているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isAppeared () → {Boolean}
現れているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isAutoBattle () → {Boolean}
オートバトルか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isBuffAffected (paramId) → {Boolean}
指定通常能力値に強化がかかっているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isBuffExpired (paramId) → {Boolean}
指定通常能力値の強化が切れているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isBuffOrDebuffAffected (paramId) → {Boolean}
指定通常能力値が強化・弱化されているか。

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
混乱しているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDead () → {Boolean}
表示されて死亡ステートか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDeathStateAffected () → {Boolean}
死亡ステートか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDebuffAffected (paramId) → {Boolean}
指定通常能力値が弱化されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDualWield () → {Boolean}
二刀流か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isDying () → {Boolean}
瀕死(規定値:最大HPの1/4以下)か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isEnemy () → {Boolean}
敵か。

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
防御中か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isHidden () → {Boolean}
隠れているか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMaxBuffAffected (paramId) → {Boolean}
指定通常能力値が最強化されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isMaxDebuffAffected (paramId) → {Boolean}
指定通常能力値が最弱化されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力値ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isOccasionOk (item) → {Boolean}
指定アイテムが使用可能か。

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


#### isPreserveTp () → {Boolean}
[TP持ち越し]か。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isRestricted () → {Boolean}
何かの行動制約ステートか。

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
指定スキルの発動条件に合う装備をしているか。

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


#### isStateAffected (stateId) → {Boolean}
指定したステートか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isStateExpired (stateId) → {Boolean}
指定ステートが切れているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isStateResist (stateId) → {Boolean}
指定ステートが無効化されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### isSubstitute () → {Boolean}
[身代わり]ステートか。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### maxTp () → {[Number](Number.md)}
最大TPを返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### meetsItemConditions (item) → {Boolean}
指定アイテムを持っていて使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.Item](RPG.Item.md) | アイテム |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Boolean</span>
	</dd>
</dl>


#### meetsSkillConditions (skill) → {Boolean}
指定スキルを使用可能か。

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


#### meetsUsableItemConditions (item) → {Boolean}
指定アイテムが使用可能か。

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


#### mostImportantStateText () → {[String](String.md)}
現在のステートを表すメッセージ文字列を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>String</span>
	</dd>
</dl>


#### mpRate () → {[Number](Number.md)}
MPのパーセント量を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### onRestrict ()
行動制約された時に呼ばれるハンドラ。


#### overwriteBuffTurns (paramId, turns)
通常能力強化の有効ターンを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 通常能力ID |
| `turns` | [Number](Number.md) | 追加ターン |


#### param (paramId) → {[Number](Number.md)}
指定通常能力値の様々な強化などの計算後の値を返す。

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


#### paramBase (paramId) → {[Number](Number.md)}
指定通常能力値の基本値を返す。

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


#### paramBuffRate (paramId) → {[Number](Number.md)}
指定通常能力値の強化率を返す。

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


#### paramMax (paramId) → {[Number](Number.md)}
指定通常能力値の最大値を返す。

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


#### paramMin (paramId) → {[Number](Number.md)}
指定通常能力値の最小値を返す。

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


#### paramPlus (paramId) → {[Number](Number.md)}
指定通常能力値に加算される値を返す。

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
スキルに必要なコスト(MP・TP)を消費。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### recoverAll ()
HP・MP全回復しステートを解除。


#### refresh ()
能力値やステートを規定値内に収める処理。


#### resetStateCounts (stateId)
指定ステートの有効ターン数を初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | ステートID |


#### restriction () → {[Number](Number.md)}
行動制約の状態を示す値を返す。

0:なし, 1:敵を攻撃, 2:無作為攻撃, 3:味方を攻撃, 4:行動不可

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### revive ()
復活。


#### setHp (hp)
HPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hp` | [Number](Number.md) | HP |


#### setMp (mp)
MPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mp` | [Number](Number.md) | MP |


#### setTp (tp)
TPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tp` | [Number](Number.md) | TP |


#### skillMpCost (skill) → {[Number](Number.md)}
指定スキルに必要なMPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### skillTpCost (skill) → {[Number](Number.md)}
指定スキルに必要なTPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |

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
優先度でステートの並び替え。


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
ステートのアイコン番号を配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>


#### stateMotionIndex () → {[Number](Number.md)}
SVでのステートの動作番号を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### stateOverlayIndex () → {[Number](Number.md)}
SVでのステートの重ね合わせ番号を返す。

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
適用中のステートを配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.State&gt;</span>
	</dd>
</dl>


#### tpRate () → {[Number](Number.md)}
TPのパーセント量を返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitObjects () → {[Array](Array.md).<*>}
特徴オブジェクトを配列で返す。

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;*&gt;</span>
	</dd>
</dl>


#### traits (code) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
指定番号(TRAIT_定数)の特徴を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |


##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Trait&gt;</span>
	</dd>
</dl>


#### traitsPi (code, id) → {[Number](Number.md)}
指定番号(TRAIT_定数)・IDの特徴を掛け合わせて返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |
| `id` | [Number](Number.md) | 特徴ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsSet (code) → {[Array](Array.md).<[Number](Number.md)>}
指定番号(TRAIT_定数)の特徴を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;Number&gt;</span>
	</dd>
</dl>

#### traitsSum (code, id) → {[Number](Number.md)}
指定番号(TRAIT_定数)・IDの特徴を足し合わせて返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |
| `id` | [Number](Number.md) | 特徴ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsSumAll (code) → {[Number](Number.md)}
指定番号(TRAIT_定数)の特徴を積算して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Number</span>
	</dd>
</dl>


#### traitsWithId (code, id) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
指定番号(TRAIT_定数)・IDの特徴を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | 特徴番号 |
| `id` | [Number](Number.md) | 特徴ID |

##### Returns:

<dl>
	<dt> Type </dt>
	<dd>
		<span>Array.&lt;RPG.Trait&gt;</span>
	</dd>
</dl>


#### updateBuffTurns ()
通常能力値強化のアップデート。


#### updateStateTurns ()
ステート変化のアップデート。


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
