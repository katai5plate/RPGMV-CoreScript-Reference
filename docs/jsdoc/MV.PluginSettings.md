# Class: [MV](MV.md).PluginSettings

| データベース| JSファイル | 大域変数 |
| --- | --- | --- |
| プラグイン | plugins.js | [$plugins](global.md#plugins-plugins) (配列) |

プラグイン管理用のパラメータ。plugins.js は dataフォルダではなく jsフォルダにある。


関連クラス: [PluginManager](PluginManager.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | プラグインの[名前]\(拡張子を含まない) |
| `status` | [String](String.md) | ON/OFF の[状態] |
| `description` | [String](String.md) | [説明] |
| `parameters` | [Parameters](MV.PluginSettings.md#parameters) |  [パラメータ] |

#### Parameters

<code>{ "名前": "値", … }</code>のようにプラグインパラメータの[名前]と[値]を組み合わせ、パラメータの数だけ並べたオブジェクト。


