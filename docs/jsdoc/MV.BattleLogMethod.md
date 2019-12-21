# Class: [MV](MV.md).BattleLogMethod
戦闘ログ( [Window_BattleLog](Window_BattleLog.md) )のメソッドを、後から呼ぶために貯めておくパラメータ。

関連クラス: [TextManager](TextManager.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | メソッド名 |
| `params` | [Array](Array.md) | 引数の配列 |


#### メソッド名

| Method | Description |
| --- | --- |
| [addText](Window_BattleLog#addtext-text) | 行を追加 |
| [clear](Window_BattleLog#clear-) | 表示を消去 |
| [performAction ](Window_BattleLog#performaction-subject-action) | 行動を適用 |
| [performActionEnd](Window_BattleLog#performactionend-subject) | 行動の終了を適用 |
| [performActionStart](Window_BattleLog#performactionstart-subject-action) | 行動の開始を適用 |
| [performCollapse](Window_BattleLog#performcollapse-target) | 倒れたことを適用 |
| [performCounter](Window_BattleLog#performcounter-target) | カウンター攻撃を適用 |
| [performDamage](Window_BattleLog#performdamage-target) | ダメージを適用 |
| [performEvasion](Window_BattleLog#performevasion-target) | 回避を適用 |
| [performMagicEvasion](Window_BattleLog#performmagicevasion-target) | 魔法反射を適用 |
| [performMiss](Window_BattleLog#performmiss-target) | 攻撃失敗を適用 |
| [performRecovery](Window_BattleLog#performrecovery-target) | 回復を適用 |
| [performReflection](Window_BattleLog#performreflection-target) | 反射を適用 |
| [performSubstitute](Window_BattleLog#performsubstitute-target) | [かばう]行動を適用 |
| [popBaseLine](Window_BattleLog#popbaseline-) | 規定線を取り出す |
| [popupDamage](Window_BattleLog#popupdamage-target) | ダメージを表示 |
| [pushBaseLine](Window_BattleLog#pushbaseline-) | 規定線を追加 |
| [showAnimation](Window_BattleLog#showanimation-subject-targets-animationid) | アニメを表示 |
| [wait](Window_BattleLog#wait-) | 待つ |
| [waitForEffect](Window_BattleLog#waitforeffect-) | エフェクトを待つ |
| [waitForMovement ](Window_BattleLog#waitformovement-) | 動作を待つ |
| [waitForNewLine](Window_BattleLog#waitfornewline-) | 新たな行を待つ |



