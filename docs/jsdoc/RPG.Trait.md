# Class: [RPG](RPG.md).Trait

主に戦闘の際に利用される[特徴]の JSON データ。

別に公式の初心者講座の、アクターの[特徴の設定](https://tkool.jp/mv/guide/004_003c.html)と、他の[敵キャラの能力を設定する\[特徴\]](https://tkool.jp/mv/guide/004_008a.html#03)、[武器の特徴を設定する](https://tkool.jp/mv/guide/004_005b.html#03)、[防具の特徴を設定する](https://tkool.jp/mv/guide/004_005c.html#03)や、本体のヘルプの記述を参照。

関連クラス: [RPG.Actor](RPG.Actor.md), [RPG.Enemy](RPG.Enemy.md), [RPG.EquipItem](RPG.EquipItem.md), [RPG.Armor](RPG.Armor.md), [RPG.Weapon](RPG.Weapon.md)

### Properties:

| Name     | Type                | Description                                   |
| -------- | ------------------- | --------------------------------------------- |
| `code`   | [Number](Number.md) | [特徴]コード([下表](RPG.Trait.md#code)を参照) |
| `dataId` | [Number](Number.md) | code 毎に意味の異なる ID                      |
| `value`  | [Number](Number.md) | code 毎に意味の異なる値                       |

#### code

code の数値は [Game_BattlerBase](Game_BattlerBase.md) の静的クラス定数として定義されている。例えば <code>Game_BattlerBase.TRAIT_ELEMENT_RATE</code> の形で使う。

下表で 変動率・比率・増減値は 1 が 100%に当たる数値。

_0_ や _1_ のようなイタリック部分は、数字が入っているが未使用。

##### [耐性]

| code | 定数                 | 内容           | dataId                                 | value          |
| ---- | -------------------- | -------------- | -------------------------------------- | -------------- |
| 11   | `TRAIT_ELEMENT_RATE` | 属性有効度     | [属性 ID](RPG.Damage.md#属性id)        | 変動率 (0〜10) |
| 12   | `TRAIT_DEBUFF_RATE`  | 弱体有効度     | [能力値 ID](RPG.Enemy.md#能力値id)     | 変動率 (0〜10) |
| 13   | `TRAIT_STATE_RATE`   | ステート有効度 | [ステート ID](RPG.State.md#ステートid) | 変動率 (0〜10) |
| 14   | `TRAIT_STATE_RESIST` | ステート無効化 | [ステート ID](RPG.State.md#ステートid) | _1_            |

##### [能力値]

| code | 定数           | 内容       | dataId                                     | value          |
| ---- | -------------- | ---------- | ------------------------------------------ | -------------- |
| 21   | `TRAIT_PARAM`  | 通常能力値 | [能力値 ID](RPG.Enemy.md#能力値id)         | 変動率 (0〜10) |
| 22   | `TRAIT_XPARAM` | 追加能力値 | [追加能力値 ID](RPG.Trait.md#追加能力値id) | 比率 (-10〜10) |
| 23   | `TRAIT_SPARAM` | 特殊能力値 | [特殊能力値 ID](RPG.Trait.md#特殊能力値id) | 変動率 (0〜10) |

###### 追加能力値 ID

| ID  | 追加能力値 |
| --- | ---------- |
| 0   | 命中率     |
| 1   | 回避率     |
| 2   | 会心率     |
| 3   | 会心回避率 |
| 4   | 魔法回避率 |
| 5   | 魔法反射率 |
| 6   | 反撃率     |
| 7   | HP 再生率  |
| 8   | MP 再生率  |
| 9   | TP 再生率  |

###### 特殊能力値 ID

| ID  | 特殊能力値     |
| --- | -------------- |
| 0   | 狙われ率       |
| 1   | 防御効果率     |
| 2   | 回復効果率     |
| 3   | 薬の知識       |
| 4   | MP 消費率      |
| 5   | TP チャージ率  |
| 6   | 物理ダメージ率 |
| 7   | 魔法ダメージ率 |
| 8   | 床ダメージ率   |
| 9   | 経験獲得率     |

##### [攻撃]

| code | 定数                   | 内容           | dataId                                 | value                   |
| ---- | ---------------------- | -------------- | -------------------------------------- | ----------------------- |
| 31   | `TRAIT_ATTACK_ELEMENT` | 攻撃時属性     | [属性 ID](RPG.Damage.md#属性id)        | _1_                     |
| 32   | `TRAIT_ATTACK_STATE`   | 攻撃時ステート | [ステート ID](RPG.State.md#ステートid) | 変動率 (0〜10)          |
| 33   | `TRAIT_ATTACK_SPEED`   | 攻撃速度補正   | _0_                                    | 増減値 (-10〜10)        |
| 34   | `TRAIT_ATTACK_TIMES`   | 攻撃追加回数   | _0_                                    | 攻撃追加回数(-9.0〜9.0) |

##### [スキル]

| code | 定数               | 内容             | dataId                                         | value |
| ---- | ------------------ | ---------------- | ---------------------------------------------- | ----- |
| 41   | `TRAIT_STYPE_ADD`  | スキルタイプ追加 | [スキルタイプ ID](RPG.Skill.md#スキルタイプid) | _1_   |
| 42   | `TRAIT_STYPE_SEAL` | スキルタイプ封印 | [スキルタイプ ID](RPG.Skill.md#スキルタイプid) | _1_   |
| 43   | `TRAIT_SKILL_ADD`  | スキル追加       | [スキル ID](RPG.Skill.md#スキルid)             | _1_   |
| 44   | `TRAIT_SKILL_SEAL` | スキル封印       | [スキル ID](RPG.Skill.md#スキルid)             | _1_   |

##### [装備]

| code | 定数                | 内容           | dataId                                             | value |
| ---- | ------------------- | -------------- | -------------------------------------------------- | ----- |
| 51   | `TRAIT_EQUIP_WTYPE` | 武器タイプ装備 | [武器タイプ ID](RPG.Trait.md#武器タイプid)         | _1_   |
| 52   | `TRAIT_EQUIP_ATYPE` | 防具タイプ装備 | [防具タイプ ID](RPG.Trait.md#防具タイプid)         | _1_   |
| 53   | `TRAIT_EQUIP_LOCK`  | 装備固定       | [装備タイプ ID](RPG.Trait.md#装備タイプid)         | _1_   |
| 54   | `TRAIT_EQUIP_SEAL`  | 装備封印       | [装備タイプ ID](RPG.Trait.md#装備タイプid)         | _1_   |
| 55   | `TRAIT_SLOT_TYPE`   | スロットタイプ | [スロットタイプ ID](RPG.Trait.md#スロットタイプid) | _1_   |

###### 武器タイプ ID

[データベース]-[タイプ]-[武器タイプ] で設定された ID。

名称は [RPG.System](RPG.System.md) の weaponTypes プロパティに登録されている。

下表は規定値。

| ID  | [武器タイプ] |
| --- | ------------ |
| 0   | なし         |
| 1   | 短剣         |
| 2   | 剣           |
| 3   | フレイル     |
| 4   | 斧           |
| 5   | ムチ         |
| 6   | 杖           |
| 7   | 弓           |
| 8   | クロスボウ   |
| 9   | 銃           |
| 10  | 爪           |
| 11  | グローブ     |
| 11  | 槍           |

###### 防具タイプ ID

[データベース]-[タイプ]-[防具タイプ] で設定された ID。

名称は [RPG.System](RPG.System.md) の armorTypes プロパティに登録されている。

下表は規定値。

| ID  | [防具タイプ] |
| --- | ------------ |
| 1   | 一般防具     |
| 2   | 魔法防具     |
| 3   | 軽装防具     |
| 4   | 重装防具     |
| 5   | 小型盾       |
| 6   | 大型盾       |

###### 装備タイプ ID

[データベース]-[タイプ]-[装備タイプ] で設定された ID。

名称は [RPG.System](RPG.System.md) の equipTypes プロパティに登録されている。

下表は規定値。

| ID  | [装備タイプ] |
| --- | ------------ |
| 0   | なし         |
| 1   | 盾           |
| 2   | 頭           |
| 3   | 身体         |
| 4   | 装飾品       |

###### スロットタイプ ID

| ID  | [スロットタイプ] |
| --- | ---------------- |
| 0   | 通常             |
| 1   | 二刀流           |

##### [その他]

| code | 定数                  | 内容           | dataId                                             | value   |
| ---- | --------------------- | -------------- | -------------------------------------------------- | ------- |
| 61   | `TRAIT_ACTION_PLUS`   | 行動回数追加   | _0_                                                | 確率(%) |
| 62   | `TRAIT_SPECIAL_FLAG`  | 特殊フラグ     | [特殊フラグ ID](RPG.Trait.md#特殊フラグid)         | _1_     |
| 63   | `TRAIT_COLLAPSE_TYPE` | 消滅エフェクト | [消滅エフェクト ID](RPG.Trait.md#消滅エフェクトid) | _1_     |
| 64   | `TRAIT_PARTY_ABILITY` | パーティ能力   | [パーティ能力 ID](RPG.Trait.md#パーティ能力id)     | _1_     |

###### 特殊フラグ ID

| ID  | 定数                  | [特殊フラグ] |
| --- | --------------------- | ------------ |
| 0   | `FLAG_ID_AUTO_BATTLE` | 自動戦闘     |
| 1   | `FLAG_ID_GUARD`       | 防御         |
| 2   | `FLAG_ID_SUBSTITUTE`  | 身代わり     |
| 3   | `FLAG_ID_PRESERVE_TP` | TP 持ち越し  |

###### 消滅エフェクト ID

| ID  | [消滅エフェクト] |
| --- | ---------------- |
| 0   | 通常             |
| 1   | ボス             |
| 2   | 消えない         |

###### パーティ能力 ID

[Game_Party](Game_Party.md) に ID の定数が定義されていて、例えば <code>Game_Party.ABILITY_ENCOUNTER_HALF</code> の形で使う。

| ID  | 定数                       | [パーティ能力]      |
| --- | -------------------------- | ------------------- |
| 0   | `ABILITY_ENCOUNTER_HALF`   | エンカウント半減    |
| 1   | `ABILITY_ENCOUNTER_NONE`   | エンカウント無効    |
| 2   | `ABILITY_CANCEL_SURPRISE`  | 不意打ち無効        |
| 3   | `ABILITY_RAISE_PREEMPTIVE` | 先制攻撃率アップ    |
| 4   | `ABILITY_GOLD_DOUBLE`      | 獲得金額 2 倍       |
| 5   | `ABILITY_DROP_ITEM_DOUBLE` | アイテム入手率 2 倍 |

###### スキルタイプ ID

[データベース]-[タイプ]-[スキルタイプ] で設定された ID。

名称は [RPG.System](RPG.System.md) の skillTypes プロパティに登録されている。

下表は規定値。

| ID  | [スキルタイプ] |
| --- | -------------- |
| 0   | なし           |
| 1   | 魔法           |
| 2   | 必殺技         |
