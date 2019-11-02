# Class: Game_Map

## Game_Map ()

#### new Game_Map ()

マップのデータ [$dataMap](global.md#datamap-rpgmap) や [$dataTilesets](global.md#datatilesets-arrayrpgtileset) を扱うためのクラス。 表示を中心にスクロール制御や通行判定なども含む。 大域変数 [$gameMap](global.md#gamemap-game_map) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) | RPGツクールMVのコマンドインタプリタ |
| `_mapId` | [Number](Number.md) | [マップ]のID |
| `_tilesetId` | [Number](Number.md) | [タイルセット]のID |
| `_events` | [Array](Array.md).<[Game_Event](Game_Event.md)> | [イベント]の配列 |
| `_commonEvents` | [Array](Array.md).<[Game_CommonEvent](Game_CommonEvent.md)> | [コモンイベント]の配列 |
| `_vehicles` | [Array](Array.md).<[Game_Vehicle](Game_Vehicle.md)> | [乗り物]の配列 |
| `_displayX` | [Number](Number.md) | マップ表示のX座標 [displayX](Game_Map.md#displayx---number) |
| `_displayY` | [Number](Number.md) | マップ表示のY座標 [displayY](Game_Map.md#displayy---number) |
| `_nameDisplay` | Boolean | マップの[名前]を表示するか |
| `_scrollDirection` | [Number](Number.md) | スクロール方向(テンキー対応) |
| `_scrollRest` | [Number](Number.md) | スクロールの残り距離 |
| `_scrollSpeed` | [Number](Number.md) | スクロール速度 |
| `_parallaxName` | [String](String.md) | [遠景]のファイル名 [parallaxName](Game_Map.md#parallaxname---string) |
| `_parallaxZero` | Boolean | 視差を0にするか |
| `_parallaxLoopX` | Boolean | [横方向にループする] |
| `_parallaxLoopY` | Boolean | [縦方向にループする] |
| `_parallaxSx` | [Number](Number.md) | 遠景 x[スクロール]量(ピクセル) |
| `_parallaxSy` | [Number](Number.md) | 遠景 y[スクロール]量(ピクセル) |
| `_parallaxX` | [Number](Number.md) | 遠景 x位置(ピクセル) |
| `_parallaxY` | [Number](Number.md) | 遠景 y位置(ピクセル) |
| `_battleback1Name` | [String](String.md) | レイヤー奥の戦闘背景画像1(地面)のファイル名 [battleback1Name](Game_Map.md#battleback1name---string) |
| `_battleback2Name` | [String](String.md) | レイヤー手前の戦闘背景画像2(壁)のファイル名 [battleback2Name](Game_Map.md#battleback2name---string) |
| `_needsRefresh` | Boolean | [Game_Map#requestRefresh](Game_Map.html#requestrefresh-mapid)などで更新予約がされているか |


### Methods

#### adjustX (x) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
        </ul>
    </dd>
</dl>

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### adjustY (y) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
        </ul>
    </dd>
</dl>

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### airship () → {[Game_Vehicle](Game_Vehicle.md)}
[飛行船]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Vehicle</span>
    </dd>
</dl>


#### allTiles (x, y) → {[Array](Array.md).<[Number](Number.md)>}

 指定位置に重なった[イベント]も含めた全タイルIDの配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Number&gt;</span>
    </dd>
</dl>


#### autoplay ()
[BGM自動演奏][BGS自動演奏]を開始。


#### autotileType (x, y, z) → {[Number](Number.md)}
 指定位置のオートタイルのタイプを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `z` | [Number](Number.md) |  重なり(0〜3) |

##### Returns:
 オートタイルでない場合は-1

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### battleback1Name () → {[String](String.md)}
 レイヤー奥の戦闘背景画像1(地面)のファイル名を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>


#### battleback2Name () → {[String](String.md)}
 レイヤー手前の戦闘背景画像2(壁)のファイル名を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>


#### boat () → {[Game_Vehicle](Game_Vehicle.md)}
[小型船]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Vehicle</span>
    </dd>
</dl>


#### canvasToMapX (x) → {[Number](Number.md)}
canvasのx座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |

##### Returns:
x座標(タイル数)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### canvasToMapY (y) → {[Number](Number.md)}
canvasのy座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y座標(ピクセル) |

##### Returns:
y座標(タイル数)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### changeBattleback (battleback1Name, battleback2Name)
[戦闘背景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battleback1Name` | [String](String.md) | レイヤー奥の戦闘背景画像1(地面)のファイル名 |
| `battleback2Name` | [String](String.md) | レイヤー手前の戦闘背景画像2(壁)のファイル名 |


#### changeParallax (name, loopX, loopY, sx, sy)
[遠景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | [画像]ファイル名 |
| `loopX` | Boolean | [横方向にループする] |
| `loopY` | Boolean | [縦方向にループする] |
| `sx` | [Number](Number.md) | x [スクロール]量(ピクセル) |
| `sy` | [Number](Number.md) | y [スクロール]量(ピクセル) |


#### changeTileset (tilesetId)
[タイルセットの変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tilesetId` | [Number](Number.md) | [タイルセット]のID |


#### checkLayeredTilesFlags (x, y, bit) → {Boolean}
 指定位置のタイルのうち指定フラグが立っているものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |

##### Returns:

<dl>
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
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |

##### Returns:
[☆]でない最初のタイルのうち、指定したビットが立っていれば false

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### createVehicles ()
 マップ上に[乗り物]( boat, ship, airship )を生成。


#### data () → {[Array](Array.md).<[Number](Number.md)>}
 マップデータの配列を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Number&gt;</span>
    </dd>
</dl>


#### deltaX (x1, x2) → {[Number](Number.md)}
x座標2点間のタイル距離を(ループも考慮して)返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.md) | x位置(タイル数) |
| `x2` | [Number](Number.md) | x位置(タイル数) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### deltaY (y1, y2) → {[Number](Number.md)}
y座標2点間のタイル距離を(ループも考慮して)返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y1` | [Number](Number.md) | y位置(タイル数) |
| `y2` | [Number](Number.md) | y位置(タイル数) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### disableNameDisplay ()
 マップ[表示名]を非表示に設定。


#### displayName () → {[String](String.md)}
 マップ[表示名]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>


#### displayX () → {[Number](Number.md)}
 マップ表示のX座標を返す。

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### displayY () → {[Number](Number.md)}
 マップ表示のY座標を返す。

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### distance (x1, x2, y1, y2) → {[Number](Number.md)}
2点間の距離を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.md) | x位置(タイル数) |
| `x2` | [Number](Number.md) | x位置(タイル数) |
| `y1` | [Number](Number.md) | y位置(タイル数) |
| `y2` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### doScroll (direction, distance)
指定方向と距離の分だけスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.md) | 方向(テンキー対応) |
| `distance` | [Number](Number.md) | 距離(タイル数) |


#### enableNameDisplay ()
 マップ[表示名]を表示に設定。


#### encounterList () → {[Array](Array.md).<[RPG.Map.Encounter](RPG.Map.Encounter.md)>}
[エンカウント]の配列を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;RPG.Map.Encounter&gt;</span>
    </dd>
</dl>


#### encounterStep () → {[Number](Number.md)}
[敵出現歩数]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### eraseEvent (eventId)
 イベントIDに対応する[イベント]を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.md) | イベントID |


#### event (eventId) → {[Game_Event](Game_Event.md)}
 イベントIDに対応する[イベント]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.md) | イベントID |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Event</span>
    </dd>
</dl>


#### eventIdXy (x, y) → {[Number](Number.md)}
 指定位置にある[イベント]のイベントIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:
 イベントがない場合は0、複数ある場合は最初のイベントID

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### events () → {[Array](Array.md).<[Game_Event](Game_Event.md)>}
 現在のマップ上に存在する全[イベント]の配列を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Game_Event&gt;</span>
    </dd>
</dl>


#### eventsXy (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}
 指定位置にある[イベント]を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Game_Event&gt;</span>
    </dd>
</dl>


#### eventsXyNt (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}
 指定位置にある、通行不可の[イベント]を配列で返す。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Game_Event&gt;</span>
    </dd>
</dl>


#### height () → {[Number](Number.md)}
 マップの[高さ]を返す。

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### initialize ()
 オブジェクト生成時の初期化。


#### isAirshipLandOk (x, y) → {Boolean}
[飛行船]で指定位置に着地できるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isAnyEventStarting () → {Boolean}
 なんらかの[イベント]が実行されたか。

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

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


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

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

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
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

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
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isDashDisabled () → {Boolean}
[ダッシュ禁止]か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isEventRunning () → {Boolean}
 イベント実行中か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isLadder (x, y) → {Boolean}
 指定位置のタイルに[梯]\(はしご)属性を持つものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isLoopHorizontal () → {Boolean}
[横方向にループする]か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isLoopVertical () → {Boolean}
[縦方向にループする]か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isNameDisplayEnabled () → {Boolean}
 マップ[表示名]が表示されるか。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isOverworld () → {Boolean}
[タイルセット]の[モード]が[フィールドタイプ]か。

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
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isScrolling () → {Boolean}
 スクロール中か。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isShipPassable (x, y) → {Boolean}
[大型船]で指定位置が通れるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### isValid (x, y) → {Boolean}
 指定位置がマップ範囲に含まれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

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
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Number&gt;</span>
    </dd>
</dl>


#### mapId () → {[Number](Number.md)}
 マップIDを返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### parallaxName () → {[String](String.md)}
[遠景]画像のファイル名を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>String</span>
    </dd>
</dl>

#### parallaxOx () → {[Number](Number.md)}

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### parallaxOy () → {[Number](Number.md)}

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
        </ul>
    </dd>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### parallelCommonEvents () → {[Array](Array.md).<[RPG.CommonEvent](RPG.CommonEvent.md)>}
[並列処理]の[コモンイベント]の配列を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;RPG.CommonEvent&gt;</span>
    </dd>
</dl>


#### refereshVehicles ()
[乗り物]を再描画。


#### refresh ()
[イベント]の更新。


#### refreshIfNeeded ()
[Game_Map#requestRefresh](Game_Map.html#requestrefresh-mapid) で予約されていたら再描画。


#### refreshTileEvents ()
 タイルが設定されている[イベント]を更新。


#### regionId (x, y) → {[Number](Number.md)}
 指定位置のタイルのリージョンIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### requestRefresh (mapId)
 マップの再描画を予約。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) |  |


#### roundX (x) → {[Number](Number.md)}
 ループ回数を考慮しない x座標に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### roundXWithDirection (x, d) → {[Number](Number.md)}
 指定方向に移動した(ループ回数を考慮しない) x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### roundY (y) → {[Number](Number.md)}
 ループ回数を考慮しない y座標に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:
 タイル数
 
<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### roundYWithDirection (y, d) → {[Number](Number.md)}
 指定方向に移動した(ループ回数を考慮しない) y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |

##### Returns:
タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### screenTileX () → {[Number](Number.md)}
 画面の幅を返す。

##### Returns:
 タイル数(小数点以下有り)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### screenTileY () → {[Number](Number.md)}
 画面の高さを返す。

##### Returns:
 タイル数(小数点以下有り)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### scrollDistance () → {[Number](Number.md)}
 スクロール距離を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### scrollDown (distance)
 指定数だけ下にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 下への移動距離(タイル数) |


#### scrollLeft (distance)
 指定数だけ左にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 左への移動距離(タイル数) |


#### scrollRight (distance)
 指定数だけ右にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 右への移動距離(タイル数) |


#### scrollUp (distance)
 指定数だけ上にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 上への移動距離(タイル数) |


#### setDisplayPos (x, y)
 指定位置(画面左上基準)にマップ表示。 マップ端でスクロールが止まるか、ループする処理も行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### setup (mapId)
 マップ移動などで新たなマップを表示する場合の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) | マップID |


#### setupAutorunCommonEvent () → {Boolean}
Sets up an auto run common event.
<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>この用語の意味が分かったら教えてください</li>
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


#### setupBattleback ()
 戦闘背景の初期化。


#### setupEvents ()
[イベント]の初期化。


#### setupParallax ()
[遠景]の初期化。


#### setupScroll ()
 スクロールの初期化。


#### setupStartingEvent () → {Boolean}

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
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


#### setupStartingMapEvent () → {Boolean}

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
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


#### setupTestEvent () → {Boolean}

<dl>
    <dt>To Do:</dt>
    <dd>
        <ul>
            <li>この用語の意味が分かったら教えてください</li>
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


#### ship () → {[Game_Vehicle](Game_Vehicle.md)}
[大型船]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Vehicle</span>
    </dd>
</dl>


#### startScroll (direction, distance, speed)
 スクロール開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.md) |  |
| `distance` | [Number](Number.md) |  |
| `speed` | [Number](Number.md) |  |


#### terrainTag (x, y) → {[Number](Number.md)}
 指定位置のタイルのうち最初の[地形タグ]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### tileEventsXy (x, y) → {[Array](Array.md).<[Game_Event](Game_Event.md)>}
 指定位置にある、画像にタイルセットを選択した[イベント]を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Game_Event&gt;</span>
    </dd>
</dl>


#### tileHeight () → {[Number](Number.md)}
 タイルの高さを返す。

##### Returns:
 ピクセル(デフォルト : 48)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### tileId (x, y, z) → {[Number](Number.md)}
 指定位置のタイルIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `z` | [Number](Number.md) |  重なり(0 〜 3) |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### tileset () → {[RPG.Tileset](RPG.Tileset.md)}
[タイルセット]を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>RPG.Tileset</span>
    </dd>
</dl>


#### tilesetFlags () → {[Array](Array.md).<[Number](Number.md)>}
[タイルセット]に設定された[通行]などの地形フラグを返す。

##### Returns:
 詳細は[RPG.Tileset](RPG.Tileset.md) を参照

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Number&gt;</span>
    </dd>
</dl>


#### tilesetId () → {[Number](Number.md)}
 タイルセットIDを返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### tileWidth () → {[Number](Number.md)}
 タイルの幅を返す。

##### Returns:
 ピクセル(デフォルト : 48)

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>

#### unlockEvent (eventId)
 指定IDの[イベント]をアンロック。 決定ボタンでイベントをプレイヤーの方に向かせた状態の解除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.md) |  |


#### update (sceneActive)
 マップをアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneActive` | Boolean |  |


#### updateEvents ()
 現在のマップにある全[イベント]をアップデート。


#### updateInterpreter ()
 インタプリタをアップデート。


#### updateParallax ()
[遠景]をアップデート。


#### updateScroll ()
 スクロールをアップデート。


#### updateVehicles ()
 現在のマップにある全乗り物をアップデート。


#### vehicle (type) → {[Game_Vehicle](Game_Vehicle.md)}
 数値( 0:小型船, 1:大型船, 2:飛行船 )か文字列( 'boat', 'ship', 'airship' )による指定で[乗り物]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | [String](String.md) |  |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Game_Vehicle</span>
    </dd>
</dl>


#### vehicles () → {[Array](Array.md).<[Game_Vehicle](Game_Vehicle.md)>}
 生成されている[乗り物]の配列を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Array.&lt;Game_Vehicle&gt;</span>
    </dd>
</dl>


#### width () → {[Number](Number.md)}
 マップの[幅]を返す。

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### xWithDirection (x, d) → {[Number](Number.md)}
 指定方向に移動した x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


#### yWithDirection (y, d) → {[Number](Number.md)}
 指定方向に移動した y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |

##### Returns:
 タイル数

<dl>
    <dt> Type </dt>
    <dd>
        <span>Number</span>
    </dd>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
