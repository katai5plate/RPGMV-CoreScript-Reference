# Class: DataManager

[データベース]の管理を行う静的クラス。

$XXX で大域変数に設定されているものや、セーブデータの管理など行う。

大域変数について詳細は [Global](global.md) のページを参照。

関連クラス: [JsonEx](JsonEx.md)

### Properties:

| Name              | Type                                                            | Description                                        |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| `_globalId`       | [String](String.md)                                             | [static] システム ID 'RPGMV'                       |
| `_lastAccessedId` | [Number](Number.md)                                             | [static] 最後にセーブ・ロードを行ったファイルの ID |
| `_errorUrl`       | \*                                                              | [static]                                           |
| `_databaseFiles`  | [Array](Array.md).&lt;[MV.DatabaseFile](MV.DatabaseFile.md)&gt; | [static] 読み込むデータファイル情報                |

### Methods

#### (static) checkError ()

エラーが記録されていれば、エラーを表示。

#### (static) createGameObjects ()

$game から始まる大域変数に、対応したオブジェクトを生成し代入。

#### (static) extractMetadata (data)

data.note に書いてあるデータを分解し data.meta に設定。<br />
渡した data 自体が書き換えられるので、返り値はない。

##### Parameters:

| Name   | Type   | Description                     |
| ------ | ------ | ------------------------------- |
| `data` | Object | [RPG.MetaData](RPG.MetaData.md) |

#### (static) extractSaveContents (contents)

渡したオブジェクトから$game で始まる大域変数に値を設定。

##### Parameters:

| Name       | Type                                  | Description            |
| ---------- | ------------------------------------- | ---------------------- |
| `contents` | [MV.SaveContents](MV.SaveContents.md) | 大域変数用オブジェクト |

#### (static) isAnySavefileExists () → {Boolean}

セーブファイルが(ひとつでも)存在するか。

#### (static) isArmor (item) → {Boolean}

指定した項目が[防具]に含まれるか。

##### Parameters:

| Name   | Type   | Description                   |
| ------ | ------ | ----------------------------- |
| `item` | Object | [RPG.Armor](RPG.Armor.md)など |

#### (static) isBattleTest () → {Boolean}

[戦闘テスト]モードか。

#### (static) isDatabaseLoaded () → {Boolean}

データベースの読み込みが完了しているか。

#### (static) isEventTest () → {Boolean}

[イベントテスト]モードか。

#### (static) isItem (item) → {Boolean}

指定した項目が[アイテム]に含まれるか。

##### Parameters:

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| `item` | Object | [RPG.Item](RPG.Item.md)など |

#### (static) isMapLoaded () → {Boolean}

マップの読み込みが完了しているか。

#### (static) isSkill (item) → {Boolean}

指定した項目が[スキル]に含まれるか。

##### Parameters:

| Name   | Type   | Description                   |
| ------ | ------ | ----------------------------- |
| `item` | Object | [RPG.Skill](RPG.Skill.md)など |

#### (static) isThisGameFile (savefileId) → {Boolean}

指定した ID のセーブファイルが存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) isWeapon (item) → {Boolean}

指定した項目が[武器]に含まれるか。

##### Parameters:

| Name   | Type   | Description                     |
| ------ | ------ | ------------------------------- |
| `item` | Object | [RPG.Weapon](RPG.Weapon.md)など |

#### (static) lastAccessedSavefileId () → {[Number](Number.md)}

最後にセーブ・ロードを行ったファイルの ID を返す。

#### (static) latestSavefileId () → {[Number](Number.md)}

最新のセーブファイル ID を返す。

#### (static) loadAllSavefileImages ()

全てのセーブファイルの画像を読み込む。

#### (static) loadDatabase ()

データベースファイル( $data から始まる大域変数に代入される JSON)を読み込む。 ただし $dataMap は別扱い。

#### (static) loadDataFile (name, src)

指定したデータを読み込む。読み込みが完了したら onLoad が呼ばれる。

##### Parameters:

| Name   | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| `name` | [String](String.md) | データ代入先の大域変数名 $dataXXX |
| `src`  | [String](String.md) | data/以下のファイル名             |

#### (static) loadGame (savefileId)

指定したセーブファイル ID からデータを読み込む。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadGameWithoutRescue (savefileId) → {Boolean}

指定したセーブファイル ID からリソース抜きの情報を読み込み、 読み込みに成功したか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadGlobalInfo () → {[Array](Array.md).<[MV.SaveFileInfo](MV.SaveFileInfo.md)>}

セーブファイル情報の配列を読み込んで返す。

#### (static) loadMapData (mapId)

マップデータを読み込む。完了時は onLoad が呼ばれる。

##### Parameters:

| Name    | Type                | Description         |
| ------- | ------------------- | ------------------- |
| `mapId` | [Number](Number.md) | 1: 空のマップを作る |

#### (static) loadSavefileImages (info)

セーブファイルに必要な画像を読み込む。<br />
読み込まれた画像は[ImageManager](ImageManager.md)に保管される。

##### Parameters:

| Name   | Type                                  | Description        |
| ------ | ------------------------------------- | ------------------ |
| `info` | [MV.SaveFileInfo](MV.SaveFileInfo.md) | セーブファイル情報 |

#### (static) loadSavefileInfo (savefileId) → {Object}

指定したセーブファイル ID の情報を読み込んで返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) makeEmptyMap ()

空のマップを作成。

#### (static) makeSaveContents () → {[MV.SaveContents](MV.SaveContents.md)}

セーブ用のデータ作成。$game で始まる大域変数をまとめたオブジェクトを返す。

#### (static) makeSavefileInfo () → {[MV.SaveFileInfo](MV.SaveFileInfo.md)}

新規のセーブファイル情報を作って返す。

#### (static) maxSavefiles () → {[Number](Number.md)}

セーブ可能なファイルの最大数を返す。

#### (static) onLoad (object)

データ読み込み完了時に呼ばれるハンドラ。

##### Parameters:

| Name     | Type | Description                  |
| -------- | ---- | ---------------------------- |
| `object` | \*   | データを格納したオブジェクト |

#### (static) saveGame (savefileId) → {Boolean}

ゲームデータをセーブファイルに保存し、 保存に成功したか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) saveGameWithoutRescue (savefileId) → {Boolean}

指定したセーブファイル ID にリソース抜きの情報を保存し、 保存に成功したか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) saveGlobalInfo (info)

セーブファイル情報を保存。

##### Parameters:

| Name   | Type                                  | Description        |
| ------ | ------------------------------------- | ------------------ |
| `info` | [MV.SaveFileInfo](MV.SaveFileInfo.md) | セーブファイル情報 |

#### (static) selectSavefileForNewGame ()

新規ゲーム用のセーブファイルを選択。

#### (static) setupBattleTest ()

[戦闘テスト] の準備。

#### (static) setupEventTest ()

[イベントテスト]の準備。

#### (static) setupNewGame ()

新規ゲームの準備。
