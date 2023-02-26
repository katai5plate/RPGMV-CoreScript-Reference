# Class: StorageManager

ゲームのセーブデータを管理する静的クラス。

ローカルファイル機能は、node.js の fs モジュールを使っている。<br />
Web ストレージは JavaScript の localStorage を使っている。

### Methods

#### (static) backup (savefileId)

指定セーブファイルのバックアップを取る。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) backupExists (savefileId) → {Boolean}

指定セーブファイルのバックアップがあるか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) cleanBackup (savefileId)

指定セーブファイルのバックアップを削除。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) exists (savefileId) → {Boolean}

指定セーブファイルが存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) isLocalMode () → {Boolean}

ローカルモードか。

#### (static) load (savefileId) → {[String](String.md)}

指定セーブファイルを読み込んで返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadFromLocalBackupFile (savefileId) → {[String](String.md)}

指定セーブファイルをローカルバックアップから読み込んで返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadFromLocalFile (savefileId) → {[String](String.md)}

指定セーブファイルをローカルから読み込んで返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadFromWebStorage (savefileId) → {[String](String.md)}

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) loadFromWebStorageBackup (savefileId) → {[String](String.md)}

指定セーブファイルを Web ストレージバックアップから読み込んで返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) localFileBackupExists (savefileId) → {Boolean}

指定セーブファイルが Web ストレージに存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) localFileDirectoryPath () → {[String](String.md)}

ローカルのセーブファイルディレクトリのバス(規定値: ゲームフォルダ + 'save/')
を返す。

#### (static) localFileExists (savefileId) → {Boolean}

指定セーブファイルがローカルに存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) localFilePath (savefileId) → {[String](String.md)}

指定セーブファイルのローカルファイルパスを返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) remove (savefileId)

指定セーブファイルを削除。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) removeLocalFile (savefileId)

指定セーブファイルをローカルから削除。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) removeWebStorage (savefileId)

指定セーブファイルを Web ストレージから削除。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) restoreBackup (savefileId)

指定セーブファイルをバックアップから復元。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) save (savefileId, json)

JSON 文字列を記録した指定セーブファイルを保存。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |
| `json`       | [String](String.md) | JSON 文字列       |

#### (static) saveToLocalFile (savefileId, json)

JSON 文字列を記録した指定セーブファイルをローカルに保存。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |
| `json`       | [String](String.md) | JSON 文字列       |

#### (static) saveToWebStorage (savefileId, json)

JSON 文字列を記録した指定セーブファイルを Web ストレージに保存。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |
| `json`       | [String](String.md) | JSON 文字列       |

#### (static) webStorageBackupExists (savefileId) → {Boolean}

指定セーブファイルが Web ストレージのバックアップに存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) webStorageExists (savefileId) → {Boolean}

指定セーブファイルが Web ストレージに存在するか。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |

#### (static) webStorageKey (savefileId) → {[String](String.md)}

指定セーブファイルの Web ストレージキーを返す。

##### Parameters:

| Name         | Type                | Description       |
| ------------ | ------------------- | ----------------- |
| `savefileId` | [Number](Number.md) | セーブファイル ID |
