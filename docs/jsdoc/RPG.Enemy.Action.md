# Class: [RPG](RPG.md).[Enemy](RPG.Enemy.md).Action

[敵キャラ]の[行動パターン]の JSON データ。

関連クラス: [Game_Enemy](Game_Enemy.md)

### Properties:

| Name              | Type                | Description                        |
| ----------------- | ------------------- | ---------------------------------- |
| `skillId`         | [Number](Number.md) | [スキル ID](RPG.Skill.md#スキルid) |
| `conditionType`   | [Number](Number.md) | [[条件](RPG.Enemy.Action.md#条件)] |
| `conditionParam1` | [Number](Number.md) | [条件] パラメータ 1                |
| `conditionParam2` | [Number](Number.md) | [条件] パラメータ 2                |
| `rating`          | [Number](Number.md) | [レーティング] \(1〜10)            |

#### [条件]

_0_ のようなイタリック部分は、数字が入っているが未使用。

| 番号 | [条件]      | conditionParam1                        | conditionParam2 |
| ---- | ----------- | -------------------------------------- | --------------- |
| 0    | 常時        | _0_                                    | _0_             |
| 1    | ターン      | 開始ターン                             | ターン間隔      |
| 2    | HP          | 下限%                                  | 上限%           |
| 3    | MP          | 下限%                                  | 上限%           |
| 4    | ステート    | [ステート ID](RPG.State.md#ステートid) | _0_             |
| 5    | パーティ Lv | 下限 Lv                                | _0_             |
| 6    | スイッチ    | スイッチ ID                            | _0_             |
