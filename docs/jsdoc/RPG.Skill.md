# Class: [RPG](RPG.md).Skill

## Extends: [RPG.UsableItem](RPG.UsableItem.md)

| データベース | JSON ファイル | 大域変数                                                | オブジェクト              |
| ------------ | ------------- | ------------------------------------------------------- | ------------------------- |
| [スキル]     | Skills.json   | [$dataSkills](global.md#dataskills-arrayrpgskill)(配列) | [Game_Item](Game_Item.md) |

[Game_Item](Game_Item.md) の \_dataClass プロパティは 'skill' になる。

### Properties:

| Name               | Type                | Description                                    |
| ------------------ | ------------------- | ---------------------------------------------- |
| `stypeId`          | [Number](Number.md) | [スキルタイプ ID](RPG.Skill.md#スキルタイプid) |
| `mpCost`           | [Number](Number.md) | [消費 MP]                                      |
| `tpCost`           | [Number](Number.md) | [消費 TP]                                      |
| `message1`         | [String](String.md) | 上段[メッセージ]                               |
| `message2`         | [String](String.md) | 下段[メッセージ]                               |
| `requiredWtypeId1` | [Number](Number.md) | [必要武器]の[武器タイプ 1]                     |
| `requiredWtypeId2` | [Number](Number.md) | [必要武器]の[武器タイプ 2]                     |

#### スキル ID

[データベース]-[スキル] で設定された ID。大域変数 [$dataSkills](global.md#dataskills-arrayrpgskill) の配列の番号でもある。<br />
下表 0〜2 は固定、他は規定値で変更可能。

| ID  | [スキル]   |
| --- | ---------- |
| 0   | なし       |
| 1   | 攻撃       |
| 2   | 防御       |
| 3   | 連続攻撃   |
| 4   | 2 回攻撃   |
| 5   | 3 回攻撃   |
| 6   | 逃げる     |
| 7   | 様子を見る |
| 5   | ヒール     |
| 6   | ファイア   |
| 7   | スパーク   |

#### スキルタイプ ID

[データベース]-[タイプ]-[スキルタイプ] で設定された ID。<br />
スキルタイプ名は [System](RPG.System.md) の skillTypes プロパティに登録されている。

下表 0 は固定、他は規定値で変更可能。

| ID  | [スキルタイプ] |
| --- | -------------- |
| 0   | なし           |
| 1   | 魔法           |
| 2   | 必殺技         |
