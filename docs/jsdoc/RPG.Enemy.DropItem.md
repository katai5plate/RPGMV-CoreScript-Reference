# Class: [RPG](RPG.md).[Enemy](RPG.Enemy.md).DropItem

[ドロップアイテム]の JSON データ。

### Properties:

| Name          | Type                | Description                        |
| ------------- | ------------------- | ---------------------------------- |
| `kind`        | [Number](Number.md) | [種類](RPG.Enemy.DropItem.md#種類) |
| `dataId`      | [Number](Number.md) | 種類毎の ID                        |
| `denominator` | [Number](Number.md) | 1/N で表される[出現率]の N の部分  |

#### 種類

| 番号 | 種類     | dataId      |
| ---- | -------- | ----------- |
| 0    | なし     |             |
| 1    | アイテム | アイテム ID |
| 2    | 武器     | 武器 ID     |
| 3    | 防具     | 防具 ID     |
