# Class: [RPG](RPG.md).[Animation](RPG.Animation.md).Timing
アニメーションの効果音とエフェクトのタイミングを記述したデータ。

関連クラス: [RPG.Animation](RPG.Animation.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Number](Number.md) | フレーム番号(エディタで表示されるより1少ない) |
| `se` | [RPG.AudioFile](RPG.AudioFile.md) | 効果音 |
| `flashScope` | [Number](Number.md) | [フラッシュ範囲](RPG.Animation.Timing.md#フラッシュ範囲) |
| `flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; | フラッシュの色の配列 |
| `flashDuration` | [Number](Number.md) | フラッシュの継続時間 |

#### フラッシュ範囲
| 番号 | フラッシュ範囲 |
| --- | --- |
| 0 | なし |
| 1 | ターゲット |
| 2 | スクリーン |
| 3 | 隠れたターゲット |

