# Class: [RPG](RPG.md).MetaData
 多くのデータに含まれる[メモ]のデータ。
 
 note から meta への変換は[DataManager.extractMetadata](DataManager.md#static-extractmetadata-data)メソッドで行われる。<br />
 meta プロパティに記録されたデータは、主にプラグイン用のパラメータとして使う。


### Sub Classes

*  [RPG.Actor](RPG.Actor.md)
*  [RPG.Class](RPG.Class.md)
*  [RPG.Enemy](RPG.Enemy.md)
*  [RPG.Event](RPG.Event.md)
*  [RPG.BaseItem](RPG.BaseItem.md)
*  [RPG.Map](RPG.Map.md)
*  [RPG.State](RPG.State.md)
*  [RPG.Tileset](RPG.Tileset.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `note` | [String](String.md) | [メモ]の内容 |
| `meta` | Object | note 内の &lt;名前:値&gt;形式のデータを解析した結果 |


