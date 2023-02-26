# Class: [RPG](RPG.md).[BattleEventPage](RPG.BattleEventPage.md).Conditions

[敵グループ]の [EV ページ] の [条件] を構成する JSON データ。

関連クラス: [RPG.BattleEventPage](RPG.BattleEventPage.md), [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md)、[RPG.CommonEvent](RPG.CommonEvent.md)

### Properties:

| Name          | Type                | Description                  |
| ------------- | ------------------- | ---------------------------- |
| `turnEnding`  | Boolean             | [ターン終了] を使うか        |
| `turnValid`   | Boolean             | [ターン] を使うか            |
| `turnA`       | [Number](Number.md) | [ターン] + の前の数値        |
| `turnB`       | [Number](Number.md) | [ターン] + の後の数値        |
| `enemyValid`  | Boolean             | [敵キャラ HP] を使うか       |
| `enemyIndex`  | [Number](Number.md) | [敵キャラ HP] の敵キャラ番号 |
| `enemyHp`     | [Number](Number.md) | [敵キャラ HP] \(%)           |
| `actorValid`  | Boolean             | [アクター HP] を使うか       |
| `actorId`     | [Number](Number.md) | [アクター HP] のアクター ID  |
| `actorHp`     | [Number](Number.md) | [アクター HP] \(%)           |
| `switchValid` | Boolean             | [スイッチ] を使うか          |
| `switchId`    | [Number](Number.md) | [スイッチ] の ID             |
