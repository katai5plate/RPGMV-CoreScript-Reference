# Class: Game_Message

### new Game_Message ()

| 大域変数 |
| --- |
| [$gameMessage](global.md#gamemessage-game_message) |

メッセージ文字列や設定をこのクラスに一時保存し、ウィンドウが表示の際に参照するクラス。

関連クラス: [Window_Message](Window_Message.md) , [Window_ChoiceList](Window_ChoiceList.md), [Window_NumberInput](Window_NumberInput.md), [Window_EventItem](Window_EventItem.md), [Window_ScrollText](Window_ScrollText.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_texts` | [Array](Array.md).&lt;[String](String.md)&gt; | 文章 |
| `_choices` | [Array](Array.md).&lt;[String](String.md)&gt; | 選択肢 |
| `_faceName` | [String](String.md) | [顔]ファイル名 |
| `_faceIndex` | [Number](Number.md) | [顔]番号 |
| `_background` | [Number](Number.md) | [[背景]](Game_Message.md#背景) |
| `_positionType` | [Number](Number.md) | [[ウィンドウ位置]](Game_Message.md#ウィンドウ位置) |
| `_choiceDefaultType` | [Number](Number.md) |選択肢の[デフォルト] |
| `_choiceCancelType` | [Number](Number.md) | 選択肢の[キャンセル] |
| `_choiceBackground` | [Number](Number.md) | 選択肢の[背景] |
| `_choicePostionType` | [Number](Number.md) | 選択肢の[ウィンドウ位置] |
| `_numInputVariableId` | [Number](Number.md) | 数値を代入する[変数]ID |
| `_numInputMaxDigits` | [Number](Number.md) | [桁数] |
| `_itemChoiceVariableId` | [Number](Number.md) | 選択を代入する[変数]ID |
| `_itemChoiceItypeId` | [Number](Number.md) | [アイテムタイプ]ID |
| `_scrollMode` | Boolean | スクロールするか |
| `_scrollSpeed` | [Number](Number.md) | スクロール速度 |
| `_scrollNoFast` | Boolean | [早送りなし]か |
| `_choiceCallback` | function | 選択のコールバック関数 |

#### [背景]

| 番号 | [背景] |
| --- | --- |
| 0 | ウィンドウ |
| 1 | 暗くする |
| 2 |透明 |

#### [ウィンドウ位置]

| 番号 | [ウィンドウ位置] |
| --- | --- |
| 0 | 上 |
| 1 | 中 |
| 2 | 下 |


### Methods

#### add (text)
テキストを追加する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 追加するテキスト |


#### allText () → {[String](String.md)}
メッセージに含まれるすべてのテキストを返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>


#### background () → {[Number](Number.md)}
[背景]の番号を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### choiceBackground () → {[Number](Number.md)}
選択肢の[背景]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### choiceCancelType ()
選択肢のキャンセルのタイプを返す。


#### choiceDefaultType ()
選択肢の[デフォルト]のタイプを返す。


#### choicePositionType () → {[Number](Number.md)}
選択肢の[ウィンドウ位置]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### choices () → {[Array](Array.md).&lt;[String](String.md)&gt;}
選択肢を返す。


#### clear ()
消去。


#### faceIndex () → {[Number](Number.md)}
[顔]番号を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### faceName () → {[String](String.md)}
[顔]ファイル名を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>


#### hasText () → {Boolean}
メッセージがテキストを持っているか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### initialize ()
 オブジェクト生成時の初期化。

#### isBusy () → {Boolean}
表示や入力・選択の最中か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isChoice () → {Boolean}
選択肢か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isItemChoice () → {Boolean}
項目の選択か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isNumberInput () → {Boolean}
数値の入力か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### itemChoiceItypeId () → {[Number](Number.md)}
[アイテムタイプ]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### itemChoiceVariableId () → {[Number](Number.md)}
選択項目を代入する[変数]IDを返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### newPage ()
次のページを生成する。


#### numInputMaxDigits () → {[Number](Number.md)}
[桁数]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### numInputVariableId () → {[Number](Number.md)}
数値を代入する[変数]IDを返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### onChoice (n)
選択時に呼ばれるハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) | 選択項目の番号 |


#### positionType () → {[Number](Number.md)}
メッセージウィンドウの[ウィンドウ位置]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### scrollMode () → {Boolean}
スクロールするか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### scrollNoFast () → {Boolean}
[早送りなし]か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### scrollSpeed () → {[Number](Number.md)}
スクロール速度を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### setBackground (background)
メッセージウィンドウの[背景]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.md) | \[背景\](既定値 : 0) |


#### setChoiceBackground (background)
選択肢の[背景]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `background` | [Number](Number.md) | [背景] |


#### setChoiceCallback (callback)
選択肢のコールバック関数を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `callback` | function | コールバック関数 |


#### setChoicePositionType (positionType)
選択肢の[ウィンドウ位置]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.md) |  |


#### setChoices (choices, defaultType, cancelType)
[選択肢]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `choices` | [Array](Array.md).&lt;[String](String.md)&gt; | 選択肢 |
| `defaultType` | [Number](Number.md) | [デフォルト]のタイプ |
| `cancelType` | [Number](Number.md) | [キャンセル]のタイプ |


#### setFaceImage (faceName, faceIndex)
[顔]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.md) | ファイル名 |
| `faceIndex` | [Number](Number.md) | 番号 |


#### setItemChoice (variableId, itemType)
変数と[アイテムタイプ]を同時に設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | [変数]のID |
| `itemType` | [Number](Number.md) | [アイテムタイプ] |


#### setNumberInput (variableId, maxDigits)
変数と[桁数]を同時に設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | [変数]のID |
| `maxDigits` | [Number](Number.md) | [桁数] |


#### setPositionType (positionType)
メッセージウィンドウの[ウィンドウ位置]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `positionType` | [Number](Number.md) | \[ウィンドウ位置\](既定値 : 2) |


#### setScroll (speed, noFast)
スクロールの速度と[早送りなし]を同時に設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `speed` | [Number](Number.md) | スクロール速度 |
| `noFast` | Boolean | [早送りなし]か |


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
