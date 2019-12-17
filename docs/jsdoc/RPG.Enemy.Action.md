# Class: [RPG](RPG.md).[Enemy](RPG.Enemy.md).Action
[敵キャラ]\([Game_Enemy](Game_Enemy.md))の[行動パターン]のJSONデータ。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |
| `conditionType` | [Number](Number.md) | [条件] \( 0:常時, 1:ターン, 2:HP, 3:MP, 4:ステート, 5:パーティLv, 6:スイッチ ) |
| `conditionParam1` | [Number](Number.md) | [条件] パラメータ1 |
| `conditionParam2` | [Number](Number.md) | [条件] パラメータ2 |
| `rating` | [Number](Number.md) | [レーティング] \(1〜10) |

