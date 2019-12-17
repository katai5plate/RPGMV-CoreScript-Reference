# Class: [RPG](RPG.md).UsableItem

## Extends: [RPG.BaseItem](RPG.BaseItem.md)

### Sub Classes

* [RPG.Skill](RPG.Skill.md)
* [RPG.Item](RPG.Item.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `scope` | [Number](Number.md) | [範囲](RPG.UsableItem.md#範囲) |
| `occasion` | [Number](Number.md) | [使用可能時](RPG.UsableItem.md#使用可能時)  |
| `speed` | [Number](Number.md) | [速度補正] |
| `successRate` | [Number](Number.md) | [成功率] % (0〜100) |
| `repeats` | [Number](Number.md) | [連続回数] \(1〜9) |
| `tpGain` | [Number](Number.md) | [得TP] \(0〜100) |
| `hitType` | [Number](Number.md) | [命中タイプ](RPG.UsableItem.md#命中タイプ) |
| `animationId` | [Number](Number.md) | [アニメーション]のID |
| `damage` | [RPG.Damage](RPG.Damage.md) | [ダメージ] |
| `effects` | [Array](Array.md).&lt;[RPG.Effect](RPG.Effect.md)&gt; | [使用効果]の配列 |


#### 範囲

| 番号 | [範囲] |
| --- | --- |
|  0 | なし ||  1 | 敵単体 ||  2 | 敵全体 ||  3 | 敵 1 体ランダム ||  4 | 敵 2 体ランダム ||  5 | 敵 3 体ランダム ||  6 | 敵 4 体ランダム ||  7 | 味方単体 ||  8 | 味方全体 ||  9 | 味方単体(戦闘不能) ||  10 | 味方全体(戦闘不能) ||  11 | 使用者 |

#### 使用可能時

| 番号 | [使用可能時] |
| --- | --- |
| 0 | 常時 |
| 1 | バトル画面 |
| 2 | メニュー画面 |
| 3 | 使用不可 |

#### 命中タイプ
hitType は [Game\_Action](Game_Action.md) の定数として定義されている。例えば、<code>Game\_Action.HITTYPE\_CERTAIN</code> のような形で使う。

| 番号 | [命中タイプ] |
| --- | --- |
| `HITTYPE_CERTAIN:0` | 必中 |
| `HITTYPE_PHYSICAL:1` | 物理攻撃 |
| `HITTYPE_MAGICAL:2` | 魔法攻撃 |



