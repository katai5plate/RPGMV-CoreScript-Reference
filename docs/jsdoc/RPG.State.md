# Class: [RPG](RPG.md).State

## Extends: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [ステート] | States.json | [$dataStates](global.md#datastates-arrayrpgstate)(配列) |  |

[Game_BattlerBase](Game_BattlerBase.md) の _states プロパティで参照される。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |
| `name` | [String](String.md) | [名前] |
| `restriction` | [Number](Number.md) | [行動制約] \( 0:なし, 1:敵に攻撃, 2:誰かを攻撃, 3:味方を攻撃, 4:行動できない ) |
| `priority` | [Number](Number.md) | [優先度] \(0~100) |
| `removeAtBattleEnd` | Boolean | [戦闘終了時に解除] |
| `removeByRestriction` | Boolean | [行動制約によって解除] |
| `autoRemovalTiming` | [Number](Number.md) | [自動解除のタイミング] \(0:なし, 1:行動終了時, 2:ターン終了時) |
| `minTurns` | [Number](Number.md) | [継続ターン数]の下限 |
| `maxTurns` | [Number](Number.md) | [継続ターン数]の上限 |
| `removeByDamage` | Boolean | [ダメージで解除] |
| `chanceByDamage` | [Number](Number.md) | [ダメージで解除]の%確率 |
| `removeByWalking` | Boolean | [歩数で解除] |
| `stepToRemove` | [Number](Number.md) | [歩数で解除]の歩数 |
| `iconIndex` | [Number](Number.md) | [アイコン]の番号 |
| `message1` | [String](String.md) | [アクターがこの状態になったとき] |
| `message2` | [String](String.md) | [敵キャラがこの状態になったとき] |
| `message3` | [String](String.md) | [この状態が継続しているとき] |
| `message4` | [String](String.md) | [この状態が解除されたとき] |
| `motion` | [Number](Number.md) | [[SV]モーション] |
| `overlay` | [Number](Number.md) |  [[SV]重ね合わせ] |
| `traits` | [Array](Array.md).&lt;[RPG.Trait](RPG.Trait.md)&gt; | [特徴]の配列 |

#### ステートID
以下0は固定、他は規定値。

| ID | [ステート] |
| --- | --- |
| 0 | 通常 |
| 1 | 戦闘不能 |
| 2 | 防御 |
| 3 | 不死身 |
| 4 | 毒 |
| 5 | 暗闇 |
| 6 | 沈黙 |
| 7 | 激昂 |
| 8 | 混乱 |
| 9 | 魅了 |
| 10 | 睡眠 |

