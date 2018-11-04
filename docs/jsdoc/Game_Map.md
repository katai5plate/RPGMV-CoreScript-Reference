# Class: Game_Map

## Game_Map ()

#### new Game_Map ()

 マップのデータ [$dataMap](global.html#$dataMap) や [$dataTilesets](global.html#$dataTilesets) を扱うためのクラス。 表示を中心にスクロール制御や通行判定なども含む。 大域変数 [$gameMap](global.html#$gameMap) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) | RPGツクールMVのコマンドインタプリタ |
| `_mapId` | [Number](Number.md) | [マップ]のID |
| `_tilesetId` | [Number](Number.md) | [タイルセット]のID |
| `_events` | [Array](Array.md).<[Game_Event](Game_Event.md)> |  |
| `_commonEvents` | [Array](Array.md).<[Game_CommonEvent](Game_CommonEvent.md)> |  |
| `_vehicles` | [Array](Array.md).<[Game_Vehicle](Game_Vehicle.md)> |  |
| `_displayX` | [Number](Number.md) |  マップ表示のX座標[Game_Map#displayX](Game_Map.html#displayX) |
| `_displayY` | [Number](Number.md) |  マップ表示のY座標[Game_Map#displayY](Game_Map.html#displayY) |
| `_nameDisplay` | Boolean |  表示名 |
| `_scrollDirection` | [Number](Number.md) |  スクロール方向 |
| `_scrollRest` | [Number](Number.md) |  |
| `_scrollSpeed` | [Number](Number.md) |  スクロール速度 |
| `_parallaxName` | [String](String.md) | [遠景]のファイル名[Game_Map#parallaxName](Game_Map.html#parallaxName) |
| `_parallaxZero` | Boolean |  |
| `_parallaxLoopX` | Boolean | [横方向にループする] |
| `_parallaxLoopY` | Boolean | [縦方向にループする] |
| `_parallaxSx` | [Number](Number.md) | x [スクロール]量 ピクセル |
| `_parallaxSy` | [Number](Number.md) | y [スクロール]量 ピクセル |
| `_parallaxX` | [Number](Number.md) |  |
| `_parallaxY` | [Number](Number.md) |  |
| `_battleback1Name` | [String](String.md) |  レイヤー奥の戦闘背景画像1(地面)のファイル名[Game_Map#battleback1Name](Game_Map.html#battleback1Name) |
| `_battleback2Name` | [String](String.md) |  レイヤー手前の戦闘背景画像2(壁)のファイル名[Game_Map#battleback2Name](Game_Map.html#battleback2Name) |
| `_needsRefresh` | Boolean |  |

<dl>
</dl>

### Methods

#### adjustX (x) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### adjustY (y) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `y` | [Number](Number.md) |  タイル数 |

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>[Game_Vehicle](Game_Vehicle.md)

#### airship () → {[Game_Vehicle](Game_Vehicle.md)}


[飛行船]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>[Array](Array.md)[Number](Number.md)
            </dl>

#### allTiles (x, y) → {[Array](Array.md).<[Number](Number.md)>}


 指定位置に重なった[イベント]も含めた全タイルIDの配列を返す。

##### Pa[Number](Number.md)
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### autoplay ()

[Number](Number.md)
[BGM自動演奏][BGS自動演奏]を開始。
<dl>
</dl>

#### autotileType (x, y, z) → {[Number](Number.md)}


 指定位置のオー[Number](Number.md)
[Number](Number.md)
##### Pa[Number](Number.md)

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `z` | [Number](Number.md) |  重なり(0〜3) |

<dl>
</dl>

##### Returns:


 オートタイルでない場合は-1
<dl>[String](String.md)
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### battleback1Name () → {[String](String.md)}


 レイヤー奥の戦闘背景画像1(地面)のファイル名を返す。
<dl>
</dl>

##### Returns:
[String](String.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### battleback2Name () → {[String](String.md)}


 レイヤー手前の戦闘背景画像2(壁)のファイル名を返す。
<dl>
</dl>

##### Returns:[Game_Vehicle](Game_Vehicle.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### boat () → {[Game_Vehicle](Game_Vehicle.md)}


[小型船]を返す。
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
        [Number](Number.md)

#### canvasToMapX (x) → {[Number](Number.md)}


canvasのx座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標 ピクセル |

<dl>
</dl>
[Number](Number.md)
##### Returns:


x座標 タイル数
<dl>
                <dt> Type </dt>
                <dd>
        [Number](Number.md)Number</a></span>
                </dd>
            </dl>

#### canvasToMapY (y) → {[Number](Number.md)}


canvasのy座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[String](String.md)
                    <s[String](String.md)an>
                </dd>
            </dl>

#### changeBattleback (battleback1Name, battleback2Name)


[戦闘背景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battleba[String](String.md)tring.md) |  |
| `battleback2Name` | [String](String.md) |  |

<dl>[Number](Number.md)
</dl>[Number](Number.md)

#### changeParallax (name, loopX, loopY, sx, sy)


[遠景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | [画像]ファイル名 |
| `loopX` | Boolean | [横方向にループする] |
| `loopY` | Bool[Number](Number.md)
| `sx` | [Number](Number.md) | x [スクロール]量 ピクセル |
| `sy` | [Number](Number.md) | y [スクロール]量 ピクセル |

<dl>
</dl>

#### changeTileset (tilesetId)


[タイルセットの変更]を行う。

##### Parameters:
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --[Number](Number.md)[RPG.Tileset](RPG.Tileset.md)
| `tilesetId` | [Number](Number.md) |  |

<dl>
</dl>

#### checkLayeredTilesFlags (x, y, bit) → {Boolean}


 指定位置のタイルのうち指定フラグが立っているものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |

<dl>
</dl>

##### Re[Number](Number.md)
[Number](Number.md)
<dl>[Number](Number.md)[RPG.Tileset](RPG.Tileset.md)
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkPassage (x, y, bit) → {Boolean}


 指定位置の指定フラグビットが通行可か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |

<dl>
</dl>[Array](Array.md)[Number](Number.md)

##### Returns:


[☆]でない最初のタイルのうち、指定したビットが立っていれば false
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### createVehicles ()

[Number](Number.md)
 マップ上に[乗り物]( boat, ship, airship )を生成。
<dl>
</dl>

#### data () → {[Array](Array.md).<[Number](Number.md)>}


 マップデータの配[Number](Number.md)
<dl>[Number](Number.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### deltaX (x1, x2) → {[Number](Number.md)}


x座標2点間のタイル距離を(ループも考慮して)返[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.md) |  タイル数 |
| `x2` | [Number](Number.md) |  タイル数 |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### deltaY (y1, y2) → {[Number](Number.md)}


y座標2点間のタイル距離を(ループも考慮して)返す。

##### Parameters:

| Name | Type | Descrip[String](String.md)
| --- | --- | --- |
| `y1` | [Number](Number.md) |  タイル数 |
| `y2` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    [Number](Number.md)span>
                </dd>
            </dl>

#### disableNameDisplay ()


 マップ[表示名]を非表示に設定。
<dl>
</dl>

#### displayName () → {[String](String.md)}


 マップ[表示名]を返す。
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### displayX () → {[Number](Number.md)}


 マップ表示のX座標を返す。
<dl>
</dl>[Number](Number.md)

##### Returns:


 タイル数
<dl>[Number](Number.md)
         [Number](Number.md)>
         [Number](Number.md)
         [Number](Number.md)umber</a></span>
                </dd>
            </dl>

#### displayY () → {[Number](Number.md)}


 マップ表示のY座標を返す。
<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### distance (x[Number](Number.md)mber](Number.md)}
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.md) |  |
| `x2` | [Number](Number.md) |  |
| `y1` | [Number](Number.md) |  |
| `y2` | [Number](Number.md) |  |

<dl>
</dl>[Array](Array.md)[RPG.Map.Encounter](RPG.Map.Encounter.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### doScroll (direction, distance)


 スクロール。
[Number](Number.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.md) |  |
| `distance` | [Number](Number.md) |  |

<dl>
</dl>

#### enableNameDisplay ()


 マップ[表示名]を表示に設定。
<dl>
</dl>

#### encounterList () → {[Array](Array.md).<[RPG.Map.Encounter](RPG.Map.Encounter.md)>}


[エンカウント]の配列を返す。
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Typ[Game_Event](Game_Event.md)
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Map.Encounter</a>&gt;</span>
                </dd>
            </dl>

#### encounterStep () → {[Number](Number.md)}

[Number](Number.md)
[敵出現歩数]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### eraseEvent (eventId)[Number](Number.md)


 イベントIDに対応する[イベント]を削除。

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `event[Number](Number.md).md) |  |

<dl>
</dl>

#### event (eventId) → {[Game_Event](Game_Event.md)}


 イベントIDに対応する[イベント]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.md) |  |
[Array](Array.md)[Game_Event](Game_Event.md)
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Event</a></span>
                </dd>
            </dl>

#### eventIdXy (x, y) → {[Number](Number.md)}

[Array](Array.md)[Game_Event](Game_Event.md)
 指定位置にある[イベント]のイベントIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
[Number](Number.md)
<dl>
</dl>

##### Returns:


 イベントがない場合は0、複数ある場合は最初のイベントID
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Array](Array.md)[Game_Event](Game_Event.md)
#### events () → {[Array](Array.md).<[Game_Event](Game_Event.md)>}


 現在のマップ上に存在する全[イベント]の配列を返す。
<dl>
</dl>

##### Re[Number](Number.md)
[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### eventsXy (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}


 指定位置にある[イベント]を配列で返す。

##### Parameters:
[Number](Number.md)
| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### eventsXyNt (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}


 指定位置にある、通行不可の[イベント]を配列で返す。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>[Number](Number.md)
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### height () → {[Number](Number.md)}


 マップの[高さ]を返す。
<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
</dl>

#### isAirshipLandOk (x, y) → {Boolean}
[Number](Number.md)
[Number](Number.md)
[飛行船]で指定位置に着地できるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isA[Number](Number.md){Boolean}
[Number](Number.md)

 なんらかの[イベント]が実行されたか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBoatPassable (x, y) → {Boolean}


[小型船]で指定位置が通れるか。

##### Parameters:

| Name |[Number](Number.md)
| --- | [Number](Number.md)
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBush (x, y) → {Boolean}


 指定位置のタイルに[茂み]属性を持つものがあるか。

##### Parameters:
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCounter (x, y) → {Boolean}


 指定位置のタイルに[カウンター]属性を持つものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDamageFloor (x, y) → {Boolean}


 指定位置のタイルに[ダメージ床]属性を持つものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDashDisabled () → {Boolean}


[ダッシュ禁止]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEventRunning () → {Boolean}


 イベント実行中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isLadder (x, y) → {Boolean}


 指定位置のタイルに[梯](はしご)属性を持つものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isLoopHorizontal () → {Boolean}


[横方向にループする]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
        [Number](Number.md)
[Number](Number.md)
#### isL[Number](Number.md)lean}


[縦方向にループする]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNameDisplayEnabled () → {Boolean}


 マップ[表示名]が表示されるか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOverworld () → {Boolean}


[タイルセット]の[モード]が[フィールドタイプ]か。
<dl>
</dl>[Number](Number.md)
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPassable (x, y, d) → {Boolean}


 指定位置から指定方向に進めるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  方向(テンキー対応) |
[Number](Number.md)
<dl>[Number](Number.md)
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isScrolling () → {Boolean}

[Array](Array.md)[Number](Number.md)
 スクロール中か。
<dl>
</dl>

##### Returns:

<dl>
        [Number](Number.md)t>
        [Number](Number.md)
                    <span>Boolean</span>
                </dd>
            </dl>

#### isShipPassable (x, y) → {Boolean}


[大型船]で指定位置が通れるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number]([Number](Number.md)|
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isValid (x, y) → {B[String](String.md)


 指定位置がマップ範囲に含まれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:[Number](Number.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### layeredTiles (x, y) → {[Array](Array.md).<[Number](Number.md)>}


 指定位置に重なったタイルIDの配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
[Number](Number.md)
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### mapId () → {[Number](Number.md)}


 マップIDを返す。
<dl>
</dl>

##### Returns:[Array](Array.md)[RPG.CommonEvent](RPG.CommonEvent.md)

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallaxName () → {[String](String.md)}


[遠景]画像のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### parallaxOx () → {[Number](Number.md)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Typ[Number](Number.md)
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallaxOy () → {[Number](Number.md)}

<dl>[Number](Number.md)
        [Number](Number.md)t>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallelCommonEvents () → {[Array](Array.md).<[RPG.CommonEvent](RPG.CommonEvent.md)>}


[並列処理]の[コモンイベント]の配列を返す。
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt[Number](Number.md)
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.CommonEvent</a>&gt;</span>
                </dd>
            </dl>

#### refereshVehicles ()

[Number](Number.md)
[乗り物]を再描画。
<dl>
</dl>

#### refresh ()


[イベント]の更新。
<dl>
</dl>

#### refreshIfNeeded ()


[Game_Map#requestRefresh](Game_Map.[Number](Number.md)で予約されていたら再描画。
<dl>
</dl>

#### refreshTileEvents ()


 タイルが設定されている[イベント]を更新。
<dl>[Number](Number.md)
</dl>[Number](Number.md)

#### regionId (x, y) → {[Number](Number.md)}


 指定位置のタイルのリージョンIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
        [Number](Number.md)
            </dl>

#### requestRefresh (mapId)


 マップの再描画を予約。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) |  |

<dl>
</dl>[Number](Number.md)

#### roundX (x) → {[Number](Number.md)}


 ループ回数を考慮しない x座標に変換。

##### Parameters:
[Number](Number.md)
| Name |[Number](Number.md)
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>[Number](Number.md)
            </dl>

#### roundXWithDirection (x, d) → {[Number](Number.md)}


 指定向きに移動した(ループ回数を考慮しない) x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>[Number](Number.md)

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### roundY (y) → {[Number](Number.md)}


 ループ回数を考慮しない y座標に変換。[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### roundYWithDirection (y, d) → {[Number](Number.md)}
[Number](Number.md)

 指定向きに移動した(ループ回数を考慮しない) y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>
[Number](Number.md)
##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenTileX () → {[Number](Number.md)}
[Number](Number.md)

 画面の幅を返す。
<dl>
</dl>

##### Returns:


 タイル数(小数点以下有り)
<dl>
                <dt> Type </dt>
                <dd>
               [Number](Number.md)/a></span>
                </dd>
            </dl>

#### screenTileY () → {[Number](Number.md)}


 画面の高さを返す。
<dl>
</dl>

##### Returns:

[Number](Number.md)
 タイル数(小数[Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrollDistance () → {[Number](Number.md)}


 スクロール距離を返す。
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrollDown (distance)


 指定数だけ下にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

#### scrollLeft (distance)


 指定数だけ左にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) |  |

<dl>
</dl>

#### scrollRight (distance)


 指定数だけ右にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) |  |

<dl>
</dl>

#### scrollUp (distance)


 指定数だけ上にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) |  |

<dl>
</dl>

#### setDisplayPos (x, y)


 指定位置(画面左上基準)にマップ表示。 マップ端でスクロールが止まるか、ループする処理も行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |

<dl>
</dl>

#### setup (mapId)


 マップ移動などで新たなマップを表示する場合の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) |  マップID |

<dl>
</dl>

#### setupAutorunCommonEvent () → {Boolean}


Sets up an auto run common event.
<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:
[Game_Vehicle](Game_Vehicle.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### setupBattleback ()


 戦闘背景の初期化。
<dl>
</dl>

#### setupEvents ()


[イベント]の初期化。
<dl>
</dl>

#### setupParallax ()
[Number](Number.md)
[Number](Number.md)
[遠景]の初期化。[Number](Number.md)
<dl>
</dl>

#### setupScroll ()
[Number](Number.md)

 スクロールの初期化。
<dl>
</dl>

#### setupStartingEvent () → {Boolean}

<dl>[Number](Number.md)
        [Number](Number.md)t>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>[Array](Array.md)[Game_Event](Game_Event.md)
            </dl>

#### setupStartingMapEvent () → {Boolean}

<dl>
                <dt>To Do:</dt>
                <dd>
        [Number](Number.md)
        [Number](Number.md)#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### setupTestEvent ()[Number](Number.md)

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span[Number](Number.md)
                </dd>
            </dl>

#### ship () → {[Game_Vehicle](Game_Vehicle.md)}


[大型船]を返す。
<dl>[Number](Number.md)
</dl>[Number](Number.md)
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### startScroll (direction, distance, speed)


 スクロール開始。
[RPG.Tileset](RPG.Tileset.md)
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.md) |  |
| `distance` | [Number](Number.md) |  |
| `speed` | [Number](Number.md) |  |

<dl>
</dl>

#### terrainTag (x, y) → {[Number](Number.md)}


 指定位置のタイルのうち最初の[地形タグ]を返す[Array](Array.md)[Number](Number.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
[$1]($2.md)
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>[Number](Number.md)
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileEventsXy (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}


 指定位置にある、画像にタイルセットを選択した[イベント]を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Numb[Number](Number.md)

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### tileHeight () → {[Number](Number.md)}


 タイルの高さを返す。
<dl>
</dl>

##### Returns:


 ピクセル(デフォルト : [Number](Number.md)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileId (x, y, z) → {[Number](Number.md)}


 指定位置のタイルIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `z` | [Number](Number.md) |  重なり(0 〜 3) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileset () → {[RPG.Tileset](RPG.Tileset.md)}


[タイルセット]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.Tileset</a></span>
                </dd>
            </dl>
[Game_Vehicle](Game_Vehicle.md)
#### tilesetFlags () → {[Array](Array.md).<[Number](Number.md)>}


[タイルセット]に設定された[通行]などの地形フラグを返す。
<dl>
</dl>

##### Retur[Number](Number.md)[String](String.md)


 詳細は[RPG.Tileset](RPG.Tileset.md) を参照
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### tilesetId () → {[Number](Number.md)}


 タイルセットIDを返す。[Array](Array.md)[Game_Vehicle](Game_Vehicle.md)
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileWidth () → {[Number](Number.md)}

[Number](Number.md)
 タイルの幅を返す。
<dl>
</dl>

##### Returns:


 ピクセル(デフォルト : 48)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### unlockEvent (eventId)[Number](Number.md)


 指定IDの[イベント]をアンロック。 決定ボタンでイベントをプレイヤーの方に向かせた状態の解除。

##### Parameters:

| Name | Type | Description |
| --- | [Number](Number.md)
| `event[Number](Number.md).md) |  |

<dl>
</dl>

#### update (sceneActive)


 マップをアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneActive` | Boolean |  |
[Number](Number.md)
<dl>
</dl>

#### updateEvents ()


 現在のマップにある全[イベント]をアップデート。
<dl>[Number](Number.md)
</dl>[Number](Number.md)

#### updateInterpreter ()


 インタプリタをアップデート。
<dl>
</dl>

#### updateParallax ()


[遠景]をアップデート。
<dl>
</dl>

#### updateScroll ()


 スクロールをアップデート。
<dl>
</dl>

#### updateVehicles ()


 現在のマップにある全乗り物をアップデート。
<dl>
</dl>

#### vehicle (type) → {[Game_Vehicle](Game_Vehicle.md)}


 数値( 0:小型船, 1:大型船, 2:飛行船 )か文字列( 'boat', 'ship', 'airship' )による指定で[乗り物]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### vehicles () → {[Array](Array.md).<[Game_Vehicle](Game_Vehicle.md)>}


 生成されている[乗り物]の配列を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Vehicle</a>&gt;</span>
                </dd>
            </dl>

#### width () → {[Number](Number.md)}


 マップの[幅]を返す。
<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### xWithDirection (x, d) → {[Number](Number.md)}


 指定向きに移動した x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### yWithDirection (y, d) → {[Number](Number.md)}


 指定向きに移動した y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:


 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
