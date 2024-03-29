# Class: Game_System

### new Game_System ()

| 大域変数                                        | セーブデータ |
| ----------------------------------------------- | ------------ |
| [$gameSystem](global.md#gamesystem-game_system) | 保存される   |

変化のあるシステムデータを扱うクラス。

関連クラス: [RPG.System](RPG.System.md)

### Properties:

| Name                | Type                                    | Description              |
| ------------------- | --------------------------------------- | ------------------------ |
| `_saveEnabled`      | Boolean                                 | [セーブ]メニューありか   |
| `_menuEnabled`      | Boolean                                 | メニュー表示されるか     |
| `_encounterEnabled` | Boolean                                 | エンカウントありか       |
| `_formationEnabled` | Boolean                                 | [並び替え]メニューありか |
| `_battleCount`      | [Number](Number.md)                     | 戦闘回数                 |
| `_winCount`         | [Number](Number.md)                     | 勝利回数                 |
| `_escapeCount`      | [Number](Number.md)                     | 逃亡回数                 |
| `_saveCount`        | [Number](Number.md)                     | セーブ回数               |
| `_versionId`        | [Number](Number.md)                     | バージョン ID            |
| `_framesOnSave`     | [Number](Number.md)                     | 保存累積フレーム数       |
| `_bgmOnSave`        | [RPG.AudioFile](RPG.AudioFile.md)       | 保存 BGM                 |
| `_bgsOnSave`        | [RPG.AudioFile](RPG.AudioFile.md)       | 保存 BGS                 |
| `_windowTone`       | [Array](Array.md).<[Number](Number.md)> | ウィンドウのトーン       |
| `_battleBgm`        | [RPG.AudioFile](RPG.AudioFile.md)       | [音楽 - タイプ - 戦闘]   |
| `_victoryMe`        | [RPG.AudioFile](RPG.AudioFile.md)       | [音楽 - タイプ - 勝利]   |
| `_defeatMe`         | [RPG.AudioFile](RPG.AudioFile.md)       | [音楽 - タイプ - 敗北]   |
| `_savedBgm`         | [RPG.AudioFile](RPG.AudioFile.md)       | 保存された BGM           |
| `_walkingBgm`       | [RPG.AudioFile](RPG.AudioFile.md)       | 移動の BGM               |

### Methods

#### battleBgm () → {[RPG.AudioFile](RPG.AudioFile.md)}

戦闘 BGM を返す。

#### battleCount () → {[Number](Number.md)}

戦闘回数を返す。

#### defeatMe () → {[RPG.AudioFile](RPG.AudioFile.md)}

敗北 ME を返す。

#### disableEncounter ()

エンカウントなしに変更。

#### disableFormation ()

[並び替え]メニューなしに変更。

#### disableMenu ()

メニュー表示なしに変更。

#### disableSave ()

[セーブ]メニューなしに変更。

#### enableEncounter ()

エンカウントありに変更。

#### enableFormation ()

[並び替え]メニューありに変更。

#### enableMenu ()

メニュー表示ありに変更。

#### enableSave ()

[セーブ]メニューありに変更。

#### escapeCount () → {[Number](Number.md)}

逃亡回数を返す。

#### initialize ()

オブジェクト生成時の初期化。

#### isChinese () → {Boolean}

ロケールが中国か。

#### isCJK () → {Boolean}

ロケールが日本・韓国・中国のいずれかか。

#### isEncounterEnabled () → {Boolean}

エンカウントありか。

#### isFormationEnabled () → {Boolean}

[並び替え]メニューありか。

#### isJapanese () → {Boolean}

ロケールが日本か。

#### isKorean () → {Boolean}

ロケールが韓国か。

#### isMenuEnabled () → {Boolean}

メニュー表示ありか。

#### isRussian () → {Boolean}

ロケールがロシアか。

#### isSaveEnabled () → {Boolean}

[セーブ]メニューありか。

#### isSideView () → {Boolean}

サイドビュー戦闘か。

#### onAfterLoad ()

ロード完了ハンドラ。

#### onBattleEscape ()

戦闘逃亡時ハンドラ。

#### onBattleStart ()

戦闘開始ハンドラ。

#### onBattleWin ()

戦闘勝利ハンドラ。

#### onBeforeSave ()

保存前ハンドラ。

#### playtime () → {[Number](Number.md)}

プレイ時間を返す。

#### playtimeText () → {[String](String.md)}

プレイ時間を文字列で返す。

#### replayBgm ()

保存した BGM の続きから再生。

#### replayWalkingBgm ()

移動 BGM の続きから再生。

#### saveBgm ()

現在の BGM を保存。

#### saveCount () → {[Number](Number.md)}

セーブ回数を返す。

#### saveWalkingBgm ()

移動 BGM を保存。

#### saveWalkingBgm2 ()

移動 BGM2 を保存。

#### setBattleBgm (value)

指定した戦闘 BGM に設定。

##### Parameters:

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) | 戦闘 BGM    |

#### setDefeatMe (value)

敗北 ME の設定。

##### Parameters:

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) | 敗北 ME     |

#### setVictoryMe (value)

勝利 ME の設定。

##### Parameters:

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| `value` | [RPG.AudioFile](RPG.AudioFile.md) | 勝利 ME     |

#### setWindowTone (value)

指定した[ウィンドウカラー]に設定。

##### Parameters:

| Name    | Type                                    | Description                     |
| ------- | --------------------------------------- | ------------------------------- |
| `value` | [Array](Array.md).<[Number](Number.md)> | [ r, g, b ] の配列(各-255〜255) |

#### versionId () → {[Number](Number.md)}

バージョン ID を返す。

#### victoryMe () → {[RPG.AudioFile](RPG.AudioFile.md)}

勝利 ME を返す。

#### winCount () → {[Number](Number.md)}

勝利回数を返す。

#### windowTone () → {[Array](Array.md).<[Number](Number.md)>}

[ウィンドウカラー] を返す。
