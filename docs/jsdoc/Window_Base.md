# Class: Window_Base

## (abstract) Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

#### (abstract) new Window_Base (x, y, width, height, _iconWidth, _iconHeight, _faceWidth, _faceHeight, _opening, _closing)

メッセージやステータスなどを描くためのメソッドを多く持つ、ウィンドウオブジェクト。<br />
[Window_EquipStatus](Window_EquipStatus.md), [Window_Gold](Window_Gold.md), [Window_Help](Window_Help.md), [Window_MapName](Window_MapName.md), [Window_Message](Window_Message.md), [Window_NameEdit](Window_NameEdit.md), [Window_ScrollText](Window_ScrollText.md), [Window_ShopStatus](Window_ShopStatus.md), [Window_SkillStatus](Window_SkillStatus.md) および [Window_Selectable](Window_Selectable.md) のスーパークラス。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | ウィンドウ高さ(ピクセル) |
| `_iconWidth` | [Number](Number.md) | 基本のアイコン幅 default : 32 |
| `_iconHeight` | [Number](Number.md) | 基本のアイコン高さ default : 32 |
| `_faceWidth` | [Number](Number.md) | 基本の顔画像の幅 default : 144 |
| `_faceHeight` | [Number](Number.md) | 基本の顔画像の高さ default : 144 |
| `_opening` | Boolean | ウィンドウが開いている途中か |
| `_closing` | Boolean | ウィンドウが閉じている途中か |

<dl>
</dl>

### Extends

* [Window](Window.md)

### Methods

#### activate ()

ウィンドウをアクティブにする。
<dl>
</dl>

#### actorName (actorIndex) → {[String](String.md)}

指定された番号の[アクター]の名前を返す。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorIndex` | [Number](Number.md) | アクターの番号(1から始まる) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### addChild (child) → {Object}


[super]  コンテナに子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html) | 追加するオブジェクト |

<dl>
        <dt>Inherited From:</dt>
        <dd>
            <ul>
                <li>
                    <a href="Window.html#addchild-child--object">Window#addChild</a>
                </li>
            </ul>
        </dd>
    </dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### addChildAt (child, index) → {Object}
[super] コンテナの指定位置に子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html)  | 追加するオブジェクト |
| `index` | [Number](Number.md) | 追加位置 |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#addchildat-child-index--object">Window#addChildAt</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### addChildToBack (child) → {Object}
[super] 背景とコンテンツの間に子オブジェクトを追加し、追加されたオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html)  | 追加するオブジェクト |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#addchildtoback-child--object">Window#addChildToBack</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### calcTextHeight (textState, all) → {[Number](Number.md)}
指定したテキストの表示時の高さ(ピクセル)を計算して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 計算するテキストの情報 |
| `all` | Boolean | 複数行を加算するか |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### canvasToLocalX (x) → {[Number](Number.md)}

指定したCanvas の x座標を、ゲーム画面のローカルx座標に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | Canvas の x座標 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### canvasToLocalY (y) → {[Number](Number.md)}

指定したCanvas の y座標を、ゲーム画面のローカルy座標に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | Canvas の y座標 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### changePaintOpacity (enabled)
背景を不透明にするか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `enabled` | Boolean | true: 不透明(255), false: 半透明(160) |

<dl>
</dl>

#### changeTextColor (color)
文字の色を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.md) | 色(CSS形式) |

<dl>
</dl>

#### close ()
ウィンドウを閉じる。
<dl>
</dl>

#### contentsHeight () → {[Number](Number.md)}
ウィンドウに含まれるコンテンツの高さを返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### contentsWidth () → {[Number](Number.md)}
ウィンドウに含まれるコンテンツの幅を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### convertEscapeCharacters (text) → {[String](String.md)}
エスケープ文字を変換して返す。<br />


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 変換元の文字列 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### createContents ()
テキストなどを表示するコンテンツ領域を生成。
<dl>
</dl>

#### crisisColor () → {[String](String.md)}
危険色(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### deactivate ()
非アクティブにする。
<dl>
</dl>

#### deathColor () → {[String](String.md)}
死亡色(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### dimColor1 () → {[String](String.md)}
Dimmer背景の色1(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### dimColor2 () → {[String](String.md)}
Dimmer背景の色2(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### drawActorCharacter (actor, x, y)
指定した[アクター]のキャラクタを指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

<dl>
</dl>

#### drawActorClass (actor, x, y, width)
指定した[アクター]の[クラス]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorFace (actor, x, y, width, height)
指定した[アクター]の顔画像を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |
| `height` | [Number](Number.md) | 描画領域の高さ(ピクセル) |

<dl>
</dl>

#### drawActorHp (actor, x, y, width)

指定した[アクター]の[HP]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorIcons (actor, x, y, width)

指定した[アクター]のアイコンを指定位置に描画。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorLevel (actor, x, y)
指定した[アクター]の[レベル]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

<dl>
</dl>

#### drawActorMp (actor, x, y, width)
指定した[アクター]の[MP]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorName (actor, x, y, width)
指定した[アクター]の[名前]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorNickname (actor, x, y, width)
指定した[アクター]の[二つ名]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorSimpleStatus (actor, x, y, width)
指定した[アクター]の簡易ステータスを指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawActorTp (actor, x, y, width)
指定した[アクター]の[TP]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawCharacter (characterName, characterIndex, x, y)
指定した'img/characters/'フォルダのファイル名とキャラクタ番号で、指定位置にキャラクタを描画。<br />
キャラクタ番号は左上から始まり右へ進み、2段目に移る。$付きの場合は0のみ。表示されるのは下向き中央のパターン。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) |  ファイル名(拡張子.pngを除く) |
| `characterIndex` | [Number](Number.md) | キャラクタ番号(0 〜 7)  |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

<dl>
</dl>

#### drawCurrencyValue (value, unit, x, y, width)
所持金を通貨単位付きで指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | 所持金 |
| `unit` | [String](String.md) | 通貨単位 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawCurrentAndMax (current, max, x, y, width, color1, color2)
現在値と最大値の組み合わせを指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `current` | [Number](Number.md) | 現在値 |
| `max` | [Number](Number.md) | 最大値 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |
| `color1` | [String](String.md) | 現在値色(CSS形式) |
| `color2` | [String](String.md) | 最大値色(CSS形式) |

<dl>
</dl>

#### drawFace (faceName, faceIndex, x, y, width opt, height opt)
指定した'img/faces/'フォルダのファイル名とキャラクタ番号で、指定位置に顔画像を描画。<br />
キャラクタ番号は左上から始まり右へ進み、2段目に移る。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `faceName` | [String](String.md) |  | ファイル名(拡張子.pngを除く) |
| `faceIndex` | [Number](Number.md) |  | キャラクタ番号(0 〜 7) |
| `x` | [Number](Number.md) |  | x座標(ピクセル) |
| `y` | [Number](Number.md) |  | y座標(ピクセル) |
| `width` | [Number](Number.md) | \<optional> | 幅(ピクセル) |
| `height` | [Number](Number.md) | \<optional> | 高さ(ピクセル) |

<dl>
</dl>

#### drawGauge (x, y, width, rate, color1, color2)
指定位置にゲージを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `rate` | [Number](Number.md) | 比率(0 〜 1) |
| `color1` | [String](String.md) | ゲージ色1(CSS形式) |
| `color2` | [String](String.md) | ゲージ色2(CSS形式) |

<dl>
</dl>

#### drawIcon (iconIndex, x, y)
指定した番号のアイコンを指定位置に描画。<br />
'img/system/IconSet.png'のファイルを16×20に分割した画像。
アイコン番号は左上から始まり右へ進み、端まで到達したら下へ進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) | アイコン番号(0 〜 319) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

<dl>
</dl>

#### drawItemName (item, x, y, width)
指定した[アイテム]の[名前]を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | 対象の[アイテム] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, align)
指定した文字列を指定位置に描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` |  [String](String.md) \| [Number](Number.md) | 表示する文字列 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大許容幅(ピクセル) |
| `align` | [String](String.md) | 文字揃え(left, center, right) |

<dl>
</dl>

#### drawTextEx (text, x, y) → {[Number](Number.md)}
指定したエスケープ文字入の文字列を指定位置に描画し、x座標の差分を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 表示する文字列 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### fittingHeight (numLines) → {[Number](Number.md)}
指定された行数に必要な高さを返す。<br />
高さ = 行数 * 行の高さ + パディング幅 * 2。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `numLines` | [Number](Number.md) | 行数 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### gaugeBackColor () → {[String](String.md)}
ゲージの背景色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### hide ()
ウィンドウを非表示(閉じるわけではない)。

<dl>
</dl>

#### hideBackgroundDimmer ()
Dimmer背景を非表示。

<dl>
</dl>

#### hpColor (actor) → {[String](String.md)}
指定した[アクター]の[HP]の色(CSS形式)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### hpGaugeColor1 () → {[String](String.md)}
[HP]ゲージの色1(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### hpGaugeColor2 () → {[String](String.md)}
[HP]ゲージの色2(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### initialize (x, y, width, height)
[supre]オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |
| `height` | [Number](Number.md) | 描画領域の高さ(ピクセル) |

<dl>
    <dt>Overrides:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#initialize-">Window#initialize</a>
            </li>
        </ul>
    </dd>
</dl>

#### isClosed ()
[supre]ウィンドウが完全に閉じているか。<br />
つまり、openness === 0 であるか。

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#isclosed---boolean">Window#isClosed</a>
            </li>
        </ul>
    </dd>
</dl>

#### isClosing () → {Boolean}
ウィンドウが閉じている途中か。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isOpen ()
[super]ウィンドウが完全に開いているか。<br />
つまり、openness === 255 であるか。
<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#isopen---boolean">Window#isOpen</a>
            </li>
        </ul>
    </dd>
</dl>

#### isOpening () → {Boolean}
ウィンドウが開いている途中か。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### lineHeight () → {[Number](Number.md)}
行の高さ(ピクセル)を返す。default: 36
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### loadWindowskin ()
'img/system/Window.png'から、ウィンドウのスキンを読み込む。
<dl>
</dl>

#### makeFontBigger ()
フォントサイズを12大きくする。
<dl>
</dl>

#### makeFontSmaller ()
フォントサイズを12小さくする。
<dl>
</dl>

#### move (x, y, width, height)
[super]指定した位置と大きさにウィンドウを変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | ウィンドウ高さ(ピクセル) |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a herf="Window.html#move-x-y-width-height">Window#move</a>
            </li>
        </ul>
    </dd>
</dl>

#### mpColor (actor) → {[String](String.md)}
指定した[アクター]の[MP]の色(CSS形式)を返す。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### mpCostColor () → {[String](String.md)}
[消費MP]の色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### mpGaugeColor1 () → {[String](String.md)}
[MP]ゲージの色1(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### mpGaugeColor2 () → {[String](String.md)}
[MP]ゲージの色2(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### normalColor () → {[String](String.md)}
通常色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### obtainEscapeCode (textState)
textStateのindex以降に含まれる制御文字本体を大文字で返す。<br />
indexは取り出した文字の数だけ進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### obtainEscapeParam (textState) → {Number|String}
textStateのindex以降に含まれる制御文字の添字を返す。<br />
indexは取り出した文字の数だけ進む。<br />
添字がある場合は数値が返り、ない場合は空文字が返る。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span> | 
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### open ()
ウィンドウを開く。
<dl>
</dl>

#### paramchangeTextColor (change) → {String}

指定した数値に対応する色(CSS形式)を返す。<br />
装備を変える際の能力差分の表示などに使う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `change` | [Number](Number.md) | 負の値: powerDownColor, 0:normalColor, 正の値:powerUpColor |

<dl>
</dl>

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### partyMemberName (partyMemberIndex) → {[String](String.md)}
指定したパーティーメンバー番号に対応した名前を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `partyMemberIndex` | [Number](Number.md) | パーティーメンバー番号(1から開始される) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### pendingColor () → {[String](String.md)}
未決定色(CSS形式)を返す。
<dl>
</dl>

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### powerDownColor () → {[String](String.md)}
パワーダウン色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### powerUpColor () → {[String](String.md)}
パワーアップ色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### processCharacter (textState)
改行・改ページ・エスケープ文字などを含む文字を処理する。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### processDrawIcon (iconIndex, textState)
アイコン表示を処理。<br />
制御文字'\I[n]'の対応。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) | アイコン番号(0 〜 319) |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### processEscapeCharacter (code, textState)
制御文字の処理。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [String](String.md) | 制御文字(C I \{ \}) |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### processNewLine (textState)
改行の処理。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### processNewPage (textState)
改ページの処理。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### processNormalCharacter (textState)
通常文字の処理。<br />
処理した文字列の分だけindexは進む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |

<dl>
</dl>

#### refreshDimmerBitmap ()
Dimmer背景を再描画。
<dl>
</dl>

#### removeChild (child) → {Object}
[super] 指定したオブジェクトをコンテナから取り除いて、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](http://pixijs.download/release/docs/PIXI.DisplayObject.html) | 取り除くオブジェクト |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#removechild-child--object">Window#removeChild</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### removeChildAt (index) → {Object}
[super] 指定位置のオブジェクトをコンテナから取り除いて、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 取り除くオブジェクトの位置 |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#removechildat-index--object">Window#removeChildAt</a>
            </li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### reserveFaceImages ()
全パーティーメンバーの顔画像をキャッシュする。

<dl>
</dl>

#### resetFontSettings ()
フォント設定を規定値に戻す。
<dl>
</dl>

#### resetTextColor ()
文字色を規定値に戻す。
<dl>
</dl>

#### setBackgroundType (type)
背景の種類を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | 0:不透明度255 (標準), 1:薄暗く表示, その他:不透明度0 |

<dl>
</dl>

#### setCursorRect (x, y, width, height)
[super]コマンド用カーソルの位置と大きさを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | カーソル x座標(ピクセル) |
| `y` | [Number](Number.md) | カーソル y座標(ピクセル) |
| `width` | [Number](Number.md) | カーソル幅(ピクセル) |
| `height` | [Number](Number.md) | カーソル高さ(ピクセル) |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a herf="Window.html#setcursorrect-x-y-width-height">Window#setCursorRect</a>
            </li>
        </ul>
    </dd>
</dl>

#### setTone (r, g, b)
[super]背景の色調を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤(-255 〜 255) |
| `g` | [Number](Number.md) | 緑(-255 〜 255) |
| `b` | [Number](Number.md) | 青(-255 〜 255) |

<dl>
    <dt>Inherited From:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#settone-r-g-b">Window#setTone</a>
            </li>
        </ul>
    </dd>
</dl>

#### show ()
ウィンドウを表示。
<dl>
</dl>

#### showBackgroundDimmer ()
Dimmer背景を表示。

<dl>
</dl>

#### standardBackOpacity () → {[Number](Number.md)}
標準の背景の不透明度を返す。default:192

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### standardFontFace () → {[String](String.md)}
標準のフォント名を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### standardFontSize () → {[Number](Number.md)}
標準のフォントサイズを返す。default:28
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### standardPadding () → {[Number](Number.md)}
標準のパディング幅を返す。default:18
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### systemColor () → {[String](String.md)}
システム色(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### textColor (n) → {[String](String.md)}
指定した番号に対応する色(CSS形式)を返す。<br />
'img/system/window.png' の色で設定される。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) | カラー番号(0 〜 31) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### textPadding () → {[Number](Number.md)}
パディング幅を返す。default:6
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### textWidth (text) → {[Number](Number.md)}
指定文字列の幅を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 測定する文字列 |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### tpColor (actor) → {[String](String.md)}
指定した[アクター]の[TP]の色(CSS形式)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### tpCostColor () → {[String](String.md)}
[消費TP]の色(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### tpGaugeColor1 () → {[String](String.md)}
[TP]ゲージの色1(CSS形式)を返す。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### tpGaugeColor2 () → {[String](String.md)}
[TP]ゲージの色2(CSS形式)を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="String.html">String</a></span>
    </dd>
</dl>

#### translucentOpacity () → {[Number](Number.md)}
ウィンドウ背景の不透明度を返す。default:160
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### update ()
[super]フレーム毎のアップデート。

<dl>
    <dt>Overrides:</dt>
    <dd>
        <ul>
            <li>
                <a href="Window.html#update-">Window#update</a>
            </li>
        </ul>
    </dd>
</dl>

#### updateBackgroundDimmer ()
Dimmer背景のアップデート。

<dl>
</dl>

#### updateBackOpacity ()
背景の不透明度をアップデート。
<dl>
</dl>

#### updateClose ()
ウィンドウを閉じている状態をアップデート。
<dl>
</dl>

#### updateOpen ()
ウィンドウを開いている状態をアップデート。
<dl>
</dl>

#### updatePadding ()
パディング幅をアップデート。
<dl>
</dl>

#### updateTone ()
色調をアップデート。
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
