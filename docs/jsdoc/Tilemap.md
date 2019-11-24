# Class: Tilemap

## Tilemap ()

#### new Tilemap ()

[RPG.Tileset](RPG.Tileset.md)と[RPG.Map](RPG.Map.md)に従い、2Dベースのタイルマップを表示するためのコンテナクラス。 <br />
静的メソッドを多く持つユーティリティクラスでもある。<br />
描画モードが Canvas Mode の場合に使われる、描画モードはF2キーを押して確かめられる。<br />
なお、Canvas Mode は古いブラウザなどの一部環境でしか使われない。<br />
 [ShaderTilemap](ShaderTilemap.md) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `TILE_ID_A1` | [Number](Number.md) | [static] A1(アニメーション)タイルの開始番号(2048) |
| `TILE_ID_A2` | [Number](Number.md) | [static] A2(地面)タイルの開始番号(2816) |
| `TILE_ID_A3` | [Number](Number.md) | [static] A3(建物)タイルの開始番号(4352) |
| `TILE_ID_A4` | [Number](Number.md) | [static] A4(壁)タイルの開始番号(5888) |
| `TILE_ID_A5` | [Number](Number.md) | [static] A5(通常)タイルの開始番号(1536) |
| `TILE_ID_B` | [Number](Number.md) | [static] Bタイルの開始番号(0) |
| `TILE_ID_C` | [Number](Number.md) | [static] Cタイルの開始番号(256) |
| `TILE_ID_D` | [Number](Number.md) | [static] Dタイルの開始番号(512) |
| `TILE_ID_E` | [Number](Number.md) | [static] Eタイルの開始番号(768) |
| `TILE_ID_MAX` | [Number](Number.md) | [static] タイルの終端番号(8192) |
| `FLOOR_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)\>\>\> | [static] 床オートタイル組み立てテーブル |
| `WALL_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)\>\>\> | [static] 壁オートタイル組み立てテーブル |
| `WATERFALL_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)\>\>\> | [static] 滝オートタイル組み立てテーブル |
| `parent` | Object | [read-only][super] 親オブジェクト(タイルマップを保持している[Spriteset_Map](Spriteset_Map.md)) |
| `children` | [Array](Array.md).\<[Sprite](Sprite.md)> | [read-only][super] 子オブジェクト([Sprite](Sprite.md) 、[Sprite_Character](Sprite_Character.md) 、[Sprite_Destination](Sprite_Destination.md) を含む配列) |
| `animationCount` | [Number](Number.md) |  オートタイルアニメーションのカウント |
| `bitmaps` | [Array](Array.md).<[Bitmap](Bitmap.md)> | タイルセット画像の配列(0〜9)<br />(0:A1, 1:A2, 2:A3, 3:A4, 4:A5, 5:B, 6:C, 7:D, 8:E) |
| `origin` | [Point](Point.md) |  スクロールに対する基準点 |
| `flags` | [Array](Array.md).<[Number](Number.md)> |  フラグ(See:[RPG.Tileset](RPG.Tileset.md)) |
| `tileHeight` | [Number](Number.md) | タイル高さ(規定値:48 ピクセル) |
| `tileWidth` | [Number](Number.md) | タイル幅(規定値:48 ピクセル) |
| `height` | [Number](Number.md) | 画面高さ(ピクセル) |
| `width` | [Number](Number.md) | 画面幅(ピクセル) |
| `horizontalWrap` | Boolean | 横方向にループするか |
| `verticalWrap` | Boolean | 縦方向にループするか |

### Extends

* [PIXI.Container](PIXI.Container.md)

### Methods

#### _compareChildOrder (a, b)
[\_sortChildren](#_sortchildren-)用ソート条件のコールバック関数。<br />
childrenプロパティに含まれる子オブジェクトが、a, b に渡される。<br />
順番は渡されたオブジェクトの z, y, spriteIdプロパティによって評価される。

| z | Object | 内容 |
| --- | --- | --- |
| 0 | [Sprite](Sprite.md) | 低層タイル |
| 1 | [Sprite_Character](Sprite_Character.md) | 低層キャラクタ |
| 2 | | 通常タイル(未使用) |
| 3 | [Sprite_Character](Sprite_Character.md) | 通常キャラクタ |
| 4 | [Sprite](Sprite.md) | 高層タイル |
| 5 | [Sprite_Character](Sprite_Character.md) | 高層キャラクタ |
| 6 | [Sprite](Sprite.md) | 飛行船の影 |
| 7 | [Sprite_Balloon](Sprite_Balloon.md) | 吹き出し |
| 8 | [Sprite_Animation](Sprite_Animation.md) | アニメーション |
| 9 | [Sprite_Destination](Sprite_Destination.md) | タッチ位置表示 |


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | Object | z, y, spriteIdプロパティを持つオブジェクト |
| `b` | Object | z, y, spriteIdプロパティを持つオブジェクト |

#### _createLayers ()
 低層×4 + 高層×4 レイヤー(z: 0 〜 7)を生成。

#### _drawAutotile (bitmap, tileId, dx, dy)
 渡されたBitmapにオートタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |

#### _drawNormalTile (bitmap, tileId, dx, dy)
 渡されたBitmapに(オートタイルでない通常の)タイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |

#### _drawShadow (bitmap, shadowBits, dx, dy)
 渡されたBitmapに影ペンの影を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `shadowBits` | [Number](Number.md) |  タイルを4分割したうちで描く位置を指定するビット（下位から左上/右上/左下/右下） |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |

#### _drawTableEdge (bitmap, tileId, dx, dy)
 渡されたBitmapにテーブル端の画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |

#### _drawTile (bitmap, tileId, dx, dy)
 渡されたBitmapにタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |

#### _isHigherTile (tileId) → {Boolean}
 高層[☆]のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

####  _isOverpassPosition (mx, my) → {Boolean}
立体交差か。
標準では何の動作もしない空メソッドでプラグインによって機能を追加する。OverpassTile.js プラグインで使われている。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mx` | [Number](Number.md) | マップ x座標(タイル数) |
| `my` | [Number](Number.md) | マップ y座標(タイル数) |


##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

####  _isTableTile (tileId) → {Boolean}
 テーブルタイルか。

##### Parameters:


| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### _paintAllTiles (startX, startY)
 全タイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |

#### _paintTiles (startX, startY, x, y)
 指定位置のタイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |
| `x` | [Number](Number.md) | 画面上の x座標(タイル数) |
| `y` | [Number](Number.md) | 画面上の y座標(タイル数) |

#### _readLastTiles (i, x, y) → {[Array](Array.md).\<[Number](Number.md)>}
 指定位置の最新タイル配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Array.html">Array</a>.&lt;<a href="Number.html">Number</a>&gt;</span>
    </dd>
</dl>

#### _readMapData (x, y, z) → {[Number](Number.md)}
 指定位置のタイルIDを返す。<br />
 ただし z が 4 の場合、返り値は [_drawShadow](#static-_drawshadow-bitmap-shadowbits-dx-dy) の引数 shadowBits にあたる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | マップ x座標(タイル数) |
| `y` | [Number](Number.md) | マップ y座標(タイル数) |
| `z` | [Number](Number.md) |  0:Aタイル, 1:A2タイル右, 2〜3:B〜Eタイル, 4:影ペン, 5:リージョン |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### _sortChildren ()
 子オブジェクトのソート。
 ソート条件は[\_compareChildOrder](#_comparechildorder-a-b)に記述。

####  _updateLayerPositions (startX, startY)
 レイヤーの位置をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |

####  _writeLastTiles (i, x, y, tiles)
 指定位置に最新のタイル情報を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | マップ x座標(タイル数) |
| `y` | [Number](Number.md) | マップ y座標(タイル数) |
| `tiles` | [Array](Array.md).\<[Number](Number.md)> | タイルIDの配列 |

#### (static) getAutotileKind (tileId) → {[Number](Number.md)}
 オートタイルの種類を返す。
 返り値から以下の表にしたがって判断が必要だが、各種isXXXメソッドを使えば種類が確定できる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:

| Set | Description |
| --- | --- |
| A1 | 海:0、深海:1、浅瀬障害:2,3、水面:4,6,8,10,12,14、滝:5,7,9,11,13,15 |
| A2 | 地面:16〜19,24〜27,32〜35,40〜43、重ねて配置用:20〜23,28〜31,36〜39,44〜47 |
| A3 | 屋根:48〜55,64〜71、壁:56〜63,72〜79 |
| A4 | 壁上：80〜87,96〜103,112〜119、壁:88〜95,104〜111,120〜127 |

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### (static) getAutotileShape (tileId) → {[Number](Number.md)}
 オートタイルのシェイプを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
地面・床・壁上面:0〜47、屋根・壁:0〜15、滝:0〜3 の値

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### (static) isAutotile (tileId) → {Boolean}
 オートタイル(A1〜A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isFloorTypeAutotile (tileId) → {Boolean}
 (48シェイプを持つ)地表面タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isGroundTile (tileId) → {Boolean}
 地表(A1,A2,A5)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isRoofTile (tileId) → {Boolean}
 屋根(A3奇数行)タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isSameKindTile (tileID1, tileID2) → {Boolean}
 指定したタイルが(オートタイルのシェイプは問わないで)同じ種類か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileID1` | [Number](Number.md) | タイルID |
| `tileID2` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isShadowingTile (tileId) → {Boolean}
 設置した時に影が自動でつけられるタイル(A3 と A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isTileA1 (tileId) → {Boolean}
A1(アニメーション)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isTileA2 (tileId) → {Boolean}
A2(地面)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isTileA3 (tileId) → {Boolean}
A3(建物)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isTileA4 (tileId) → {Boolean}
A4(壁)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isTileA5 (tileId) → {Boolean}
A5(通常)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isVisibleTile (tileId) → {Boolean}
 表示されるタイル(0〜TILE_ID_MAXに含まれる)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWallSideTile (tileId) → {Boolean}
 壁面タイル(A3偶数行 と A4偶数行)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWallTile (tileId) → {Boolean}
 壁タイル(A3偶数行 と A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWallTopTile (tileId) → {Boolean}
 壁上面タイル(A4奇数行)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWallTypeAutotile (tileId) → {Boolean}
 (16シェイプを持つ)壁タイプのタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWaterfallTile (tileId) → {Boolean}
 滝のタイル(A1で偶数列2番目以降)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWaterfallTypeAutotile (tileId) → {Boolean}
 (4シェイプを持つ)滝タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isWaterTile (tileId) → {Boolean}
 水面のタイル(浅瀬障害を除くA1)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) makeAutotileId (kind, shape) → {[Number](Number.md)}
 指定したオートタイルの種類とシェイプからタイルIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `kind` | [Number](Number.md) | 種類(See: [getAutotileKind](#static-getautotilekind-tileid--number)) |
| `shape` | [Number](Number.md) | シェイプ(See: [getAutotileShape](#static-getautotileshape-tileid--number)) |

##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### addChild (child) → {Object}
[super] コンテナに子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |

##### Returns:
 追加されたオブジェクト
<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### addChildAt (child, index) → {Object}
[super] コンテナの指定位置に子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |
| `index` | [Number](Number.md) |  追加位置 |

##### Returns:
 追加されたオブジェクト
<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### initialize ()
 オブジェクト生成時の初期化。

#### isReady () → {Boolean}
 描画準備ができているか。
 
##### Returns:
<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### refresh ()
 タイルマップを更新。

#### refreshTileset ()
 タイルセットを更新。

#### removeChild (child) → {Object}
[super] コンテナから子オブジェクトを取り除く

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  取り除くオブジェクト |

##### Returns:
 取り除かれたオブジェクト
<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### removeChildAt (index) → {Object}
[super] コンテナの指定位置から子オブジェクトを取り除く

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  取り除くオブジェクトの位置 |

##### Returns:
 取り除かれたオブジェクト
<dl>
    <dt> Type </dt>
    <dd>
        <span>Object</span>
    </dd>
</dl>

#### setData (width, height, data)
 タイルマップのデータを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) |  マップの幅(タイル数) |
| `height` | [Number](Number.md) |  マップの高さ(タイル数) |
| `data` | [Array](Array.md) | 一次元配列によるマップのデータ(See: [Game_Map.data](Game_Map.md#data---arraynumber)) |

#### update ()
 フレーム毎のタイルマップのアップデート。

#### updateTransform ()
 描画・変形のアップデート。

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
