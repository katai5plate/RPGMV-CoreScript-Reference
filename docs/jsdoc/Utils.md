# Class: Utils
便利なメソッドを集めた静的クラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `RPGMAKER_NAME` | [String](String.md) | [static] RPGツクールの名前(規定値: 'MV') |
| `RPGMAKER_VERSION` | [String](String.md) | [static] RPGツクールのバージョン |


### Methods

#### (static) canReadGameFiles () → {Boolean}
ゲームのフォルダにあるファイルが読めるか。

#### (static) generateRuntimeId () → {[Number](Number.md)}
ランタイムIDを生成して返す。


#### (static) isAndroidChrome () → {Boolean}ブラウザが Android Chrome か。

#### (static) isMobileDevice () → {Boolean}モバイルデバイスか。

#### (static) isMobileSafari () → {Boolean}ブラウザが Mobile Safari か。

#### (static) isNwjs () → {Boolean}基盤に NW.js を使っているか。

#### (static) isOptionValid (name) → {Boolean}指定オプションが適正か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | オプション文字列 |


#### (static) isSupportPassiveEvent () → {Boolean}ブラウザがパッシブイベントを採用しているか。

#### (static) rgbToCssColor (r, g, b) → {[MV.CssColor](MV.CssColor.md)}指定したRGBの色数値から CSS色文字列を生成して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (0〜255) |
| `g` | [Number](Number.md) | 緑 (0〜255) |
| `b` | [Number](Number.md) | 青 (0〜255) |



