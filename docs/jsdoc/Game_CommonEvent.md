# Class: Game_CommonEvent

### new Game_CommonEvent ()

| データベース     | JSON データ                           |
| ---------------- | ------------------------------------- |
| [コモンイベント] | [RPG.CommonEvent](RPG.CommonEvent.md) |

関連クラス: [Game_Map](Game_Map.md)

### Properties:

| Name             | Type                                    | Description          |
| ---------------- | --------------------------------------- | -------------------- |
| `_commonEventId` | [Number](Number.md)                     | コモンイベント ID    |
| `_interpreter`   | [Game_Interpreter](Game_Interpreter.md) | コマンドインタプリタ |

### Methods

#### event () → {[RPG.CommonEvent](RPG.CommonEvent.md)}

JSON の定義データを返す。

#### initialize ()

オブジェクト生成時の初期化。

#### isActive () → {Boolean}

この[コモンイベント]がアクティブか。

#### list () → {[Array](Array.md).<[RPG.EventCommand](RPG.EventCommand.md)>}

[イベントコマンド]を配列で返す。

#### refresh ()

[コモンイベント]を更新。

#### update ()

フレーム毎のアップデート。
