# Class: [RPG](RPG.md).[EventPage](RPG.EventPage.md).Image

イベントの [EV ページ] の [画像] を構成する JSON データ。

[RPG.EventPage](RPG.EventPage.md) の image プロパティに含まれる。

### Properties:

| Name             | Type                | Description                                             |
| ---------------- | ------------------- | ------------------------------------------------------- |
| `tileId`         | [Number](Number.md) | タイル ID (0 : タイルでない場合)                        |
| `characterName`  | [String](String.md) | 画像ファイル名(characters フォルダ以下 .png を含まない) |
| `characterIndex` | [Number](Number.md) | ファイル内のキャラ番号(0 〜 7)                          |
| `direction`      | [Number](Number.md) | キャラの向き (2: 下, 4: 左, 6: 右, 8: 上).              |
| `pattern`        | [Number](Number.md) | キャラのアニメパターン(0,1,2)                           |
