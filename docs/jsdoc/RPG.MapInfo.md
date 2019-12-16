# Class: [RPG](RPG.md).MapInfo

| データベース| JSONファイル | 大域変数 |
| --- | --- | --- |
| マップ一覧 | MapInfos.json | [$dataMapInfos](global.md#datamapInfos-arrayrpgmapInfo)(配列) |

含まれる情報はエディタ用の性格が強い。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | [RPG.Map](RPG.Map.md) のJSONファイル名 |
| `parentId` | [Number](Number.md) | 親のマップID. |
| `order` | [Number](Number.md) | エディタへの表示順 |
| `expanded` | Boolean | エディタでリストが開いているか |
| `scrollX` | [Number](Number.md) | エディタで開くx位置 |
| `scrollY` | [Number](Number.md) | エディタで開くy位置 |

