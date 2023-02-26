# Class: [RPG](RPG.md).Effect

アイテムやスキルの[使用効果]のデータ。

関連クラス: [Game_Action](Game_Action.md), [RPG.UsableItem](RPG.UsableItem.md)

### Properties:

| Name     | Type                | Description                                          |
| -------- | ------------------- | ---------------------------------------------------- |
| `code`   | [Number](Number.md) | [使用効果]コード \([下表](RPG.Effect.md#code)を参照) |
| `dataId` | [Number](Number.md) | code 毎に意味の異なる ID                             |
| `value1` | [Number](Number.md) | code 毎に意味の異なる値 1                            |
| `value2` | [Number](Number.md) | code 毎に意味の異なる値 2                            |

### code

code は [Game_Action](Game_Action.md) の定数として定義されている。例えば、<code>Game_Action.EFFECT_RECOVER_HP</code>のような形で使う。<br />
下表で、_0_ や _1_ のようなイタリック部分は、数字が入っているが未使用。

#### [回復]

| code | 定数                | 使用効果 | dataId | value1            | value2          |
| ---- | ------------------- | -------- | ------ | ----------------- | --------------- |
| 11   | `EFFECT_RECOVER_HP` | HP 回復  | _0_    | 回復量 % (0〜100) | 回復量 (固定値) |
| 12   | `EFFECT_RECOVER_MP` | MP 回復  | _0_    | 回復量 % (0〜100) | 回復量 (固定値) |
| 13   | `EFFECT_GAIN_TP`    | TP 増加  | _0_    | 増加量(固定値)    | _0_             |

#### [ステート]

| code | 定数                  | 使用効果     | dataId                                 | value1          | value2 |
| ---- | --------------------- | ------------ | -------------------------------------- | --------------- | ------ |
| 21   | `EFFECT_ADD_STATE`    | ステート付加 | [ステート ID](RPG.State.md#ステートID) | 確率 % (0〜100) | _0_    |
| 22   | `EFFECT_REMOVE_STATE` | ステート解除 | [ステート ID](RPG.State.md#ステートID) | 確率 % (0〜100) | _0_    |

#### [能力値]

| code | 定数                   | 使用効果   | dataId                             | value1              | value2 |
| ---- | ---------------------- | ---------- | ---------------------------------- | ------------------- | ------ |
| 31   | `EFFECT_ADD_BUFF`      | 強化       | [能力値 ID](RPG.Enemy.md#能力値id) | ターン数(1 ～ 1000) | _0_    |
| 32   | `EFFECT_ADD_DEBUFF`    | 弱体       | [能力値 ID](RPG.Enemy.md#能力値id) | ターン数(1 ～ 1000) | _0_    |
| 33   | `EFFECT_REMOVE_BUFF`   | 強化の解除 | [能力値 ID](RPG.Enemy.md#能力値id) | _1_                 | _0_    |
| 34   | `EFFECT_REMOVE_DEBUFF` | 弱体の解除 | [能力値 ID](RPG.Enemy.md#能力値id) | _1_                 | _0_    |

#### [その他]

| code | 定数                  | 使用効果       | dataId                                  | value1 | value2 |
| ---- | --------------------- | -------------- | --------------------------------------- | ------ | ------ |
| 41   | `EFFECT_SPECIAL`      | [特殊効果]     | [特殊効果 ID](RPG.Effect.md#特殊効果id) | _1_    | _0_    |
| 42   | `EFFECT_GROW`         | 成長           | [能力値 ID](RPG.Enemy.md#能力値id)      | 上昇値 | _0_    |
| 43   | `EFFECT_LEARN_SKILL`  | スキル習得     | [スキル ID](RPG.Skill.md#スキルid)      | _1_    | _0_    |
| 44   | `EFFECT_COMMON_EVENT` | コモンイベント | コモンイベント ID                       | _1_    | _0_    |

##### 特殊効果 ID

| dataId | 定数                    | 使用効果 |
| ------ | ----------------------- | -------- |
| 0      | `SPECIAL_EFFECT_ESCAPE` | 逃げる   |

##### dataId:コモンイベント ID

[$dataCommonEvents](global.md#datacommonevents-arrayrpgcommonevent) ([CommonEvent](RPG.CommonEvent.md) の配列)の番号。
