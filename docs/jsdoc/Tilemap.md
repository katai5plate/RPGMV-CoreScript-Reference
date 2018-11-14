# Class: Tilemap

## Tilemap ()

#### new Tilemap ()

2Dベースのタイルマップを表示するためのコンテナクラス。 重ね合わせの階層( z )は以下のようになっている。

| 階層 | 内容 |
| --- | --- |
| 0 |  低層タイル |
| 1 |  低層キャラクタ |
| 2 |  通常タイル(未使用) |
| 3 |  通常キャラクタ |
| 4 |  高層タイル |
| 5 |  高層キャラクタ |
| 6 |  飛行船の影 |
| 7 |  吹き出し |
| 8 |  アニメーション |
| 9 |  タッチ位置表示 |

[PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html) の子クラス。 [ShaderTilemap](ShaderTilemap.md) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `TILE_ID_A1` | [Number](Number.md) | [static] A1タイルの開始番号 |
| `TILE_ID_A2` | [Number](Number.md) | [static] A2タイルの開始番号 |
| `TILE_ID_A3` | [Number](Number.md) | [static] A3タイルの開始番号 |
| `TILE_ID_A4` | [Number](Number.md) | [static] A4タイルの開始番号 |
| `TILE_ID_A5` | [Number](Number.md) | [static] A5タイルの開始番号 |
| `TILE_ID_B` | [Number](Number.md) | [static] Bタイルの開始番号 |
| `TILE_ID_C` | [Number](Number.md) | [static] Cタイルの開始番号 |
| `TILE_ID_D` | [Number](Number.md) | [static] Dタイルの開始番号 |
| `TILE_ID_E` | [Number](Number.md) | [static] Eタイルの開始番号 |
| `TILE_ID_MAX` | [Number](Number.md) | [static] タイルの終端番号 |
| `FLOOR_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)>>> | [static] 床オートタイル組み立てテーブル |
| `WALL_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)>>> | [static] 壁オートタイル組み立てテーブル |
| `WATERFALL_AUTOTILE_TABLE` | [Array](Array.md).<[Array](Array.md).<[Array](Array.md).<[Number](Number.md)>>> | [static] 滝オートタイル組み立てテーブル |
| `parent` | Object | [read-only][super] 親オブジェクト(タイルマップを保持している[Spriteset_Map](Spriteset_Map.md)) |
| `children` | [Array](Array.md).<[Sprite](Sprite.md)> | [read-only][super] 子オブジェクト(PIXI.tilemap.ZLayer、[Sprite](Sprite.md) 、[Sprite_Character](Sprite_Character.md) 、[Sprite_Destination](Sprite_Destination.md) を含む配列) |
| `animationCount` | [Number](Number.md) |  オートタイルアニメーションのカウント |
| `bitmaps` | [Array](Array.md) |  タイルセットで使われている画像の配列 |
| `origin` | [Point](Point.md) |  スクロールに対する基準点 |
| `flags` | [Array](Array.md).<[Number](Number.md)> |  フラグ(詳細は[RPG.Tileset](RPG.Tileset.md)) |
| `tileHeight` | [Number](Number.md) |  タイル高さ(ピクセル) |
| `tileWidth` | [Number](Number.md) |  タイル幅(ピクセル) |
| `height` | [Number](Number.md) |  画面高さ(ピクセル) |
| `width` | [Number](Number.md) |  画面幅(ピクセル) |
| `horizontalWrap` | Boolean |  横方向にループするか |
| `verticalWrap` | Boolean |  縦方向にループするか |

<dl>
</dl>

### Extends

* PIXI.Container

### Methods

#### (static) _compareChildOrder (a, b)


Tilemap#_sortChildrenソート条件のコールバック関数。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | Object |  |
| `b` | Object |  |

<dl>
</dl>

#### (static) _createLayers ()


 低層×4 + 高層×4 レイヤー(z: 0 〜 7)のを生成。
<dl>
</dl>

#### (static) _drawAutotile (bitmap, tileId, dx, dy)


 渡されたBitmapにオートタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |
| `tileId` | [Number](Number.md) |  |
| `dx` | [Number](Number.md) |  |
| `dy` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _drawNormalTile (bitmap, tileId, dx, dy)


 渡されたBitmapに(オートタイルでない通常の)タイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |
| `tileId` | [Number](Number.md) |  |
| `dx` | [Number](Number.md) |  |
| `dy` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _drawShadow (bitmap, shadowBits, dx, dy)


 渡されたBitmapに影ペンの影を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  画像 |
| `shadowBits` | [Number](Number.md) |  タイルを4分割したうちで描く位置を指定するビット |
| `dx` | [Number](Number.md) |  始点からのx差分(ピクセル) |
| `dy` | [Number](Number.md) |  始点からのy差分(ピクセル) |

<dl>
</dl>

#### (static) _drawTableEdge (bitmap, tileId, dx, dy)


 渡されたBitmapにテーブル端の画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |
| `tileId` | [Number](Number.md) |  |
| `dx` | [Number](Number.md) |  |
| `dy` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _drawTile (bitmap, tileId, dx, dy)


 渡されたBitmapにタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |
| `tileId` | [Number](Number.md) |  |
| `dx` | [Number](Number.md) |  |
| `dy` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _isHigherTile (tileId) → {Boolean}


 高層のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _isOverpassPosition (mx, my) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mx` | [Number](Number.md) |  |
| `my` | [Number](Number.md) |  |

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

#### (static) _isTableTile (tileId) → {Boolean}


 テーブルタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _paintAllTiles (startX, startY)


 全タイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) |  |
| `startY` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _paintTiles (startX, startY, x, y)


 指定位置のタイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) |  |
| `startY` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _readLastTiles (i, x, y) → {[Array](Array.md)}


 指定位置の最新タイル配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### (static) _readMapData (x, y, z) → {[Number](Number.md)}


 指定位置のマップIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
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

#### (static) _sortChildren ()


 子オブジェクトのソート。
<dl>
</dl>

#### (static) _updateLayerPositions (startX, startY)


 レイヤー位置をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) |  |
| `startY` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _writeLastTiles (i, x, y, tiles)


 指定位置に最新のタイル情報を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |
| `tiles` | [Array](Array.md) |  |

<dl>
</dl>

#### (static) getAutotileKind (tileId) → {[Number](Number.md)}


 オートタイルの種類を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) getAutotileShape (tileId) → {[Number](Number.md)}


 オートタイルの形を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

0 〜 47 のオートタイルの形を表す番号。

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### (static) isAutotile (tileId) → {Boolean}


 オートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isFloorTypeAutotile (tileId) → {Boolean}


 地表面のオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isGroundTile (tileId) → {Boolean}


 地表のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isRoofTile (tileId) → {Boolean}


 屋根タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isSameKindTile (tileID1, tileID2) → {Boolean}


 指定したタイルが同じ種類か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileID1` | [Number](Number.md) |  |
| `tileID2` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isShadowingTile (tileId) → {Boolean}


 設置した時に影が自動でつけられるタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTileA1 (tileId) → {Boolean}


A1のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTileA2 (tileId) → {Boolean}


A2のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTileA3 (tileId) → {Boolean}


A3のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTileA4 (tileId) → {Boolean}


A4のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTileA5 (tileId) → {Boolean}


A5のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isVisibleTile (tileId) → {Boolean}


 表示されるタイル番号か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWallSideTile (tileId) → {Boolean}


 壁面タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWallTile (tileId) → {Boolean}


 壁タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWallTopTile (tileId) → {Boolean}


 壁上面タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWallTypeAutotile (tileId) → {Boolean}


 壁タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWaterfallTile (tileId) → {Boolean}


 滝のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWaterfallTypeAutotile (tileId) → {Boolean}


 滝タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWaterTile (tileId) → {Boolean}


 水面のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) makeAutotileId (kind, shape) → {[Number](Number.md)}


 オートタイルのIDを生成。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `kind` | [Number](Number.md) |  種類 |
| `shape` | [Number](Number.md) |  形 |

<dl>
</dl>

##### Returns:


 タイルID
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### addChild (child) → {Object}


[super] コンテナに子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |

<dl>
</dl>

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

<dl>
</dl>

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
<dl>
</dl>

#### isReady () → {Boolean}


 描画準備ができているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### refresh ()


 タイルマップを更新。
<dl>
</dl>

#### refreshTileset ()


 タイルセットを更新。
<dl>
</dl>

#### removeChild (child) → {Object}


[super] コンテナから子オブジェクトを取り除く

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  取り除くオブジェクト |

<dl>
</dl>

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

<dl>
</dl>

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
| `data` | [Array](Array.md) |  一次元配列によるマップのデータ |

<dl>
</dl>

#### update ()


 フレーム毎のタイルマップのアップデート。
<dl>
</dl>

#### updateTransform ()


 変形をアップデート。
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
