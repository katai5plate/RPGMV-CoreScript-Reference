# Class: [RPG](RPG.md).System

| データベース | JSON ファイル | 大域変数                                      | オブジェクト |
| ------------ | ------------- | --------------------------------------------- | ------------ |
| [システム]   | System.json   | [$dataSystem](global.md#datasystem-rpgsystem) |              |

関連クラス: [Game_System](Game_System.md), [Game_Variables](Game_Variables.md), [Game_Switches](Game_Switches.md)

### Properties:

| Name              | Type                                                                            | Description                                                        |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `gameTitle`       | [String](String.md)                                                             | [ゲームタイトル]                                                   |
| `versionId`       | [Number](Number.md)                                                             | RPG メーカー MV によって自動的に保存されるバージョン ID            |
| `locale`          | [String](String.md)                                                             | 地域設定 ja_JP, en_US, zh_CN, zh_TW, ko_KR, ru_RU                  |
| `partyMembers`    | [Array](Array.md).&lt;[Number](Number.md)&gt;                                   | [初期パーティ] アクター ID の配列                                  |
| `currencyUnit`    | [String](String.md)                                                             | [通貨単位]                                                         |
| `windowTone`      | [Array](Array.md).&lt;[Number](Number.md)&gt;                                   | [ウィンドウカラー]                                                 |
| `attackMotions`   | [Array](Array.md).&lt;[RPG.System.AttackMotion](RPG.System.AttackMotion.md)&gt; | [[SV]攻撃モーション]の配列                                         |
| `elements`        | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [属性 ID](RPG.Damage.md#属性id)に対応する名称の配列                |
| `equipTypes`      | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [装備タイプ ID](RPG.Trait.md#装備タイプid)に対応する名称の配列     |
| `skillTypes`      | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [スキルタイプ ID](RPG.Trait.md#スキルタイプid)に対応する名称の配列 |
| `weaponTypes`     | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [武器タイプ ID](RPG.Trait.md#武器タイプid)に対応する名称の配列     |
| `armorTypes`      | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [防具タイプ ID](RPG.Trait.md#防具タイプid)に対応する名称の配列     |
| `switches`        | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [スイッチ]の名前の配列(0 位置は空文字列)                           |
| `variables`       | [Array](Array.md).&lt;[String](String.md)&gt;                                   | [変数]の名前の配列(0 位置は空文字列)                               |
| `boat`            | [RPG.System.Vehicle](RPG.System.Vehicle.md)                                     | [小型船]の設定                                                     |
| `ship`            | [RPG.System.Vehicle](RPG.System.Vehicle.md)                                     | [大型船]の設定                                                     |
| `airship`         | [RPG.System.Vehicle](RPG.System.Vehicle.md)                                     | [飛行船]の設定                                                     |
| `title1Name`      | [String](String.md)                                                             | タイトル画面の背景画像(拡張子を含まない)                           |
| `title2Name`      | [String](String.md)                                                             | タイトル画面の枠画像(拡張子を含まない)                             |
| `optDrawTitle`    | Boolean                                                                         | [ゲームタイトルの描画]                                             |
| `optTransparent`  | Boolean                                                                         | [透明状態で開始]                                                   |
| `optFollowers`    | Boolean                                                                         | [パーティの隊列歩行]                                               |
| `optSlipDeath`    | Boolean                                                                         | [スリップダメージで戦闘不能]                                       |
| `optFloorDeath`   | Boolean                                                                         | [床ダメージで戦闘不能]                                             |
| `optDisplayTp`    | Boolean                                                                         | [バトル画面で TP を表示]                                           |
| `optExtraExp`     | Boolean                                                                         | [控えメンバーも経験値を獲得]                                       |
| `optSideView`     | Boolean                                                                         | [サイドビュー戦闘を使用]                                           |
| `titleBgm`        | [RPG.AudioFile](RPG.AudioFile.md)                                               | [音楽 - タイプ - タイトル]                                         |
| `battleBgm`       | [RPG.AudioFile](RPG.AudioFile.md)                                               | [音楽 - タイプ - 戦闘]                                             |
| `battleEndMe`     | [RPG.AudioFile](RPG.AudioFile.md)                                               | [音楽 - タイプ - 勝利]                                             |
| `gameoverMe`      | [RPG.AudioFile](RPG.AudioFile.md)                                               | [音楽 - タイプ - ゲームオーバー]                                   |
| `sounds`          | [Array](Array.md).&lt;[RPG.AudioFile](RPG.AudioFile.md)&gt;                     | [効果音]の音声データの配列                                         |
| `startMapId`      | [Number](Number.md)                                                             | プレイヤーの [初期位置] のマップ ID                                |
| `startX`          | [Number](Number.md)                                                             | プレイヤーの [初期位置] の x 座標(タイル数)                        |
| `startY`          | [Number](Number.md)                                                             | プレイヤーの [初期位置] の y 座標(タイル数)                        |
| `terms`           | [RPG.System.Terms](RPG.System.Terms.md)                                         | [用語]                                                             |
| `testBattlers`    | [Array](Array.md).&lt;[RPG.System.TestBattler](RPG.System.TestBattler.md)&gt;   | 戦闘テスト用のパーティ                                             |
| `testTroopId`     | [Number](Number.md)                                                             | 戦闘テスト用の敵グループ ID                                        |
| `battleback1Name` | [String](String.md)                                                             | 戦闘テスト用の背景画像 1(拡張子を含まない)                         |
| `battleback2Name` | [String](String.md)                                                             | 戦闘テスト用の背景画像 2(拡張子を含まない)                         |
| `battlerName`     | [String](String.md)                                                             | アニメーション制作時の背景画像(拡張子を含まない)                   |
| `battlerHue`      | [Number](Number.md)                                                             | アニメーション制作時の[敵キャラ]の色相(0〜360)                     |
| `editMapId`       | [Number](Number.md)                                                             | 最後に編集中だったマップ ID                                        |

### Classes

- [RPG.System.AttackMotion](RPG.System.AttackMotion.md)
- [RPG.System.Terms](RPG.System.Terms.md)
- [RPG.System.TestBattler](RPG.System.TestBattler.md)
- [RPG.System.Vehicle](RPG.System.Vehicle.md)
