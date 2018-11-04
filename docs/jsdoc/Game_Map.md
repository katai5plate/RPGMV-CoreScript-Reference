# Class: Game_Map

## Game_Map ()

#### new Game_Map ()

 マップのデータ [$dataMap](global.html#$dataMap) や [$dataTilesets](global.html#$dataTilesets) を扱うためのクラス。 表示を中心にスクロール制御や通行判定なども含む。 大域変数 [$gameMap](global.html#$gameMap) を介して扱う。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.html) | RPGツクールMVのコマンドインタプリタ |
| `_mapId` | [Number](Number.html) | [マップ]のID |
| `_tilesetId` | [Number](Number.html) | [タイルセット]のID |
| `_events` | [Array](Array.html).<[Game_Event](Game_Event.html)> |  |
| `_commonEvents` | [Array](Array.html).<[Game_CommonEvent](Game_CommonEvent.html)> |  |
| `_vehicles` | [Array](Array.html).<[Game_Vehicle](Game_Vehicle.html)> |  |
| `_displayX` | [Number](Number.html) |  マップ表示のX座標[Game_Map#displayX](Game_Map.html#displayX) |
| `_displayY` | [Number](Number.html) |  マップ表示のY座標[Game_Map#displayY](Game_Map.html#displayY) |
| `_nameDisplay` | Boolean |  表示名 |
| `_scrollDirection` | [Number](Number.html) |  スクロール方向 |
| `_scrollRest` | [Number](Number.html) |  |
| `_scrollSpeed` | [Number](Number.html) |  スクロール速度 |
| `_parallaxName` | [String](String.html) | [遠景]のファイル名[Game_Map#parallaxName](Game_Map.html#parallaxName) |
| `_parallaxZero` | Boolean |  |
| `_parallaxLoopX` | Boolean | [横方向にループする] |
| `_parallaxLoopY` | Boolean | [縦方向にループする] |
| `_parallaxSx` | [Number](Number.html) | x [スクロール]量 ピクセル |
| `_parallaxSy` | [Number](Number.html) | y [スクロール]量 ピクセル |
| `_parallaxX` | [Number](Number.html) |  |
| `_parallaxY` | [Number](Number.html) |  |
| `_battleback1Name` | [String](String.html) |  レイヤー奥の戦闘背景画像1(地面)のファイル名[Game_Map#battleback1Name](Game_Map.html#battleback1Name) |
| `_battleback2Name` | [String](String.html) |  レイヤー手前の戦闘背景画像2(壁)のファイル名[Game_Map#battleback2Name](Game_Map.html#battleback2Name) |
| `_needsRefresh` | Boolean |  |

<dl>
</dl>

### Methods

#### adjustX (x) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |

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

#### adjustY (y) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  タイル数 |

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

#### airship () → {[Game_Vehicle](Game_Vehicle.html)}

[飛行船]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### allTiles (x, y) → {[Array](Array.html).<[Number](Number.html)>}

 指定位置に重なった[イベント]も含めた全タイルIDの配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

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

[BGM自動演奏][BGS自動演奏]を開始。
<dl>
</dl>

#### autotileType (x, y, z) → {[Number](Number.html)}

 指定位置のオートタイルのタイプを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `z` | [Number](Number.html) |  重なり(0〜3) |

<dl>
</dl>

##### Returns:

 オートタイルでない場合は-1
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### battleback1Name () → {[String](String.html)}

 レイヤー奥の戦闘背景画像1(地面)のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### battleback2Name () → {[String](String.html)}

 レイヤー手前の戦闘背景画像2(壁)のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### boat () → {[Game_Vehicle](Game_Vehicle.html)}

[小型船]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### canvasToMapX (x) → {[Number](Number.html)}

canvasのx座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | x座標 ピクセル |

<dl>
</dl>

##### Returns:

x座標 タイル数
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canvasToMapY (y) → {[Number](Number.html)}

canvasのy座標をタイル数に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### changeBattleback (battleback1Name, battleback2Name)

[戦闘背景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battleback1Name` | [String](String.html) |  |
| `battleback2Name` | [String](String.html) |  |

<dl>
</dl>

#### changeParallax (name, loopX, loopY, sx, sy)

[遠景の変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | [画像]ファイル名 |
| `loopX` | Boolean | [横方向にループする] |
| `loopY` | Boolean | [縦方向にループする] |
| `sx` | [Number](Number.html) | x [スクロール]量 ピクセル |
| `sy` | [Number](Number.html) | y [スクロール]量 ピクセル |

<dl>
</dl>

#### changeTileset (tilesetId)

[タイルセットの変更]を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tilesetId` | [Number](Number.html) |  |

<dl>
</dl>

#### checkLayeredTilesFlags (x, y, bit) → {Boolean}

 指定位置のタイルのうち指定フラグが立っているものがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `bit` | [Number](Number.html) | [RPG.Tileset](RPG.Tileset.html) の flagsチェック用ビット |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `bit` | [Number](Number.html) | [RPG.Tileset](RPG.Tileset.html) の flagsチェック用ビット |

<dl>
</dl>

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
<dl>
</dl>

#### data () → {[Array](Array.html).<[Number](Number.html)>}

 マップデータの配列を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### deltaX (x1, x2) → {[Number](Number.html)}

x座標2点間のタイル距離を(ループも考慮して)返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.html) |  タイル数 |
| `x2` | [Number](Number.html) |  タイル数 |

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

#### deltaY (y1, y2) → {[Number](Number.html)}

y座標2点間のタイル距離を(ループも考慮して)返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y1` | [Number](Number.html) |  タイル数 |
| `y2` | [Number](Number.html) |  タイル数 |

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

#### disableNameDisplay ()

 マップ[表示名]を非表示に設定。
<dl>
</dl>

#### displayName () → {[String](String.html)}

 マップ[表示名]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### displayX () → {[Number](Number.html)}

 マップ表示のX座標を返す。
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

#### displayY () → {[Number](Number.html)}

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

#### distance (x1, x2, y1, y2) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x1` | [Number](Number.html) |  |
| `x2` | [Number](Number.html) |  |
| `y1` | [Number](Number.html) |  |
| `y2` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### doScroll (direction, distance)

 スクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.html) |  |
| `distance` | [Number](Number.html) |  |

<dl>
</dl>

#### enableNameDisplay ()

 マップ[表示名]を表示に設定。
<dl>
</dl>

#### encounterList () → {[Array](Array.html).<[RPG.Map.Encounter](RPG.Map.Encounter.html)>}

[エンカウント]の配列を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.Map.Encounter</a>&gt;</span>
                </dd>
            </dl>

#### encounterStep () → {[Number](Number.html)}

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

#### eraseEvent (eventId)

 イベントIDに対応する[イベント]を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.html) |  |

<dl>
</dl>

#### event (eventId) → {[Game_Event](Game_Event.html)}

 イベントIDに対応する[イベント]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Event</a></span>
                </dd>
            </dl>

#### eventIdXy (x, y) → {[Number](Number.html)}

 指定位置にある[イベント]のイベントIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

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

#### events () → {[Array](Array.html).<[Game_Event](Game_Event.html)>}

 現在のマップ上に存在する全[イベント]の配列を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### eventsXy (x, y) → {[Array](Array.html).<[Game_Event](Game_Event.html)>}

 指定位置にある[イベント]を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### eventsXyNt (x, y) → {[Array](Array.html).<[Game_Event](Game_Event.html)>}

 指定位置にある、通行不可の[イベント]を配列で返す。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### height () → {[Number](Number.html)}

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

[飛行船]で指定位置に着地できるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isAnyEventStarting () → {Boolean}

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

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

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

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

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
            </dl>

#### isLoopVertical () → {Boolean}

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
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  方向(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isScrolling () → {Boolean}

 スクロール中か。
<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

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
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### layeredTiles (x, y) → {[Array](Array.html).<[Number](Number.html)>}

 指定位置に重なったタイルIDの配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### mapId () → {[Number](Number.html)}

 マップIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallaxName () → {[String](String.html)}

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

#### parallaxOx () → {[Number](Number.html)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallaxOy () → {[Number](Number.html)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### parallelCommonEvents () → {[Array](Array.html).<[RPG.CommonEvent](RPG.CommonEvent.html)>}

[並列処理]の[コモンイベント]の配列を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>RPG.CommonEvent</a>&gt;</span>
                </dd>
            </dl>

#### refereshVehicles ()

[乗り物]を再描画。
<dl>
</dl>

#### refresh ()

[イベント]の更新。
<dl>
</dl>

#### refreshIfNeeded ()

[Game_Map#requestRefresh](Game_Map.html#requestRefresh) で予約されていたら再描画。
<dl>
</dl>

#### refreshTileEvents ()

 タイルが設定されている[イベント]を更新。
<dl>
</dl>

#### regionId (x, y) → {[Number](Number.html)}

 指定位置のタイルのリージョンIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### requestRefresh (mapId)

 マップの再描画を予約。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.html) |  |

<dl>
</dl>

#### roundX (x) → {[Number](Number.html)}

 ループ回数を考慮しない x座標に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |

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

#### roundXWithDirection (x, d) → {[Number](Number.html)}

 指定向きに移動した(ループ回数を考慮しない) x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

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

#### roundY (y) → {[Number](Number.html)}

 ループ回数を考慮しない y座標に変換。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  タイル数 |

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

#### roundYWithDirection (y, d) → {[Number](Number.html)}

 指定向きに移動した(ループ回数を考慮しない) y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

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

#### screenTileX () → {[Number](Number.html)}

 画面の幅を返す。
<dl>
</dl>

##### Returns:

 タイル数(小数点以下有り)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenTileY () → {[Number](Number.html)}

 画面の高さを返す。
<dl>
</dl>

##### Returns:

 タイル数(小数点以下有り)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrollDistance () → {[Number](Number.html)}

 スクロール距離を返す。
<dl>
</dl>

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
| `distance` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

#### scrollLeft (distance)

 指定数だけ左にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.html) |  |

<dl>
</dl>

#### scrollRight (distance)

 指定数だけ右にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.html) |  |

<dl>
</dl>

#### scrollUp (distance)

 指定数だけ上にスクロール。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `distance` | [Number](Number.html) |  |

<dl>
</dl>

#### setDisplayPos (x, y)

 指定位置(画面左上基準)にマップ表示。 マップ端でスクロールが止まるか、ループする処理も行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

#### setup (mapId)

 マップ移動などで新たなマップを表示する場合の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.html) |  マップID |

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

[遠景]の初期化。
<dl>
</dl>

#### setupScroll ()

 スクロールの初期化。
<dl>
</dl>

#### setupStartingEvent () → {Boolean}

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
                    <span>Boolean</span>
                </dd>
            </dl>

#### setupStartingMapEvent () → {Boolean}

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
                    <span>Boolean</span>
                </dd>
            </dl>

#### setupTestEvent () → {Boolean}

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
                    <span>Boolean</span>
                </dd>
            </dl>

#### ship () → {[Game_Vehicle](Game_Vehicle.html)}

[大型船]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### startScroll (direction, distance, speed)

 スクロール開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [Number](Number.html) |  |
| `distance` | [Number](Number.html) |  |
| `speed` | [Number](Number.html) |  |

<dl>
</dl>

#### terrainTag (x, y) → {[Number](Number.html)}

 指定位置のタイルのうち最初の[地形タグ]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileEventsXy (x, y) → {[Array](Array.html).<[Game_Event](Game_Event.html)>}

 指定位置にある、画像にタイルセットを選択した[イベント]を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Event</a>&gt;</span>
                </dd>
            </dl>

#### tileHeight () → {[Number](Number.html)}

 タイルの高さを返す。
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

#### tileId (x, y, z) → {[Number](Number.html)}

 指定位置のタイルIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `y` | [Number](Number.html) |  タイル数 |
| `z` | [Number](Number.html) |  重なり(0 〜 3) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileset () → {[RPG.Tileset](RPG.Tileset.html)}

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

#### tilesetFlags () → {[Array](Array.html).<[Number](Number.html)>}

[タイルセット]に設定された[通行]などの地形フラグを返す。
<dl>
</dl>

##### Returns:

 詳細は[RPG.Tileset](RPG.Tileset.html) を参照
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### tilesetId () → {[Number](Number.html)}

 タイルセットIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileWidth () → {[Number](Number.html)}

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

#### unlockEvent (eventId)

 指定IDの[イベント]をアンロック。 決定ボタンでイベントをプレイヤーの方に向かせた状態の解除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `eventId` | [Number](Number.html) |  |

<dl>
</dl>

#### update (sceneActive)

 マップをアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneActive` | Boolean |  |

<dl>
</dl>

#### updateEvents ()

 現在のマップにある全[イベント]をアップデート。
<dl>
</dl>

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

#### vehicle (type) → {[Game_Vehicle](Game_Vehicle.html)}

 数値( 0:小型船, 1:大型船, 2:飛行船 )か文字列( 'boat', 'ship', 'airship' )による指定で[乗り物]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Vehicle</a></span>
                </dd>
            </dl>

#### vehicles () → {[Array](Array.html).<[Game_Vehicle](Game_Vehicle.html)>}

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

#### width () → {[Number](Number.html)}

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

#### xWithDirection (x, d) → {[Number](Number.html)}

 指定向きに移動した x座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

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

#### yWithDirection (y, d) → {[Number](Number.html)}

 指定向きに移動した y座標を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) |  タイル数 |
| `d` | [Number](Number.html) |  向き(テンキー対応) |

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
