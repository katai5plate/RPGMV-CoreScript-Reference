# Class: PluginManager
 プラグインを管理する静的クラス。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_path` | [String](String.md) | [static] プラグインフォルダのパス |
| `_scripts` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] スクリプト名の配列 |
| `_errorUrls` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] 読み込みエラーを記録した配列 |
| `_parameters` | Object | [static] パラメータのオブジェクト { スクリプト名: [Parameters](MV.PluginSettings.md#parameters), … } |


### Methods

#### (static) checkErrors ()
 エラーを検査。


#### (static) loadScript (name)
プラグインファイルを読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | ファイル名(拡張子.jsを含む) |


#### (static) onError (e)
エラーハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) parameters (name) → {Object}
指定プラグイン名に対応するパラメータをオブジェクトで返す。 本体ヘルプの「プラグイン仕様」の項目も参照のこと。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |


#### (static) setParameters (name, parameters)
 パラメータを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |
| `parameters` | [Parameters](MV.PluginSettings.md#parameters) |  パラメータの[名前]と[値]の組み合わせ |


#### (static) setup (plugins)
 プラグインの初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `plugins` | [Array](Array.md).&lt;[MV.PluginSettings](MV.PluginSettings.md)&gt; | プラグイン設定の配列 |




