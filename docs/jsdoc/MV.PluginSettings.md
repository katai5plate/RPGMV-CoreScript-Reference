# Class: [MV](MV.md).PluginSettings

## Type: Object

| データベース| JSファイル | 大域変数 |
| --- | --- | --- |
| プラグイン | plugins.js | [$plugins](global.md#plugins-arraymvpluginsettings) (配列) |

プラグイン管理用のパラメータ。plugins.js は dataフォルダではなく jsフォルダにある。


関連クラス: [PluginManager](PluginManager.md),  [JsonEx](JsonEx.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | プラグインの[名前]\(拡張子を含まない) |
| `status` | [String](String.md) | ON/OFF の[状態] |
| `description` | [String](String.md) | [説明] |
| `parameters` | Object |  [[パラメータ]](MV.PluginSettings.md#パラメータ) |

####  [パラメータ]

<code>{ "名前": "値", … }</code>のようにプラグインパラメータの[名前]と[値]を組み合わせ、パラメータの数だけ並べたオブジェクト。

値は常に <code>String</code> なので、パラメータの値として文字列以外を指定していた場合、プラグイン個々で構文解析(パース)や型変換(キャスト)をする必要がある。<br />
その際に便利な [JsonEx.parse()](JsonEx.md#static-parse-json--object) が用意されている。

