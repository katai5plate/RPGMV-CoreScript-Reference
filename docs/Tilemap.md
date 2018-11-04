# Class: Tilemap

## Tilemap ()

#### new Tilemap ()

2Dベースのタイルマップを表示するためのコンテナクラス。 重ね合わせの階層( z )は以下のようになっている。

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

PIXI.Container ([http://pixijs.download/release/docs/PIXI.Container.html](http://pixijs.download/release/docs/PIXI.Container.html)) の子クラス。 [ShaderTilemap](ShaderTilemap.html) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `TILE_ID_A1` | [Number](Number.html) | [static] A1タイルの開始番号 |
| `TILE_ID_A2` | [Number](Number.html) | [static] A2タイルの開始番号 |
| `TILE_ID_A3` | [Number](Number.html) | [static] A3タイルの開始番号 |
| `TILE_ID_A4` | [Number](Number.html) | [static] A4タイルの開始番号 |
| `TILE_ID_A5` | [Number](Number.html) | [static] A5タイルの開始番号 |
| `TILE_ID_B` | [Number](Number.html) | [static] Bタイルの開始番号 |
| `TILE_ID_C` | [Number](Number.html) | [static] Cタイルの開始番号 |
| `TILE_ID_D` | [Number](Number.html) | [static] Dタイルの開始番号 |
| `TILE_ID_E` | [Number](Number.html) | [static] Eタイルの開始番号 |
| `TILE_ID_MAX` | [Number](Number.html) | [static] タイルの終端番号 |
| `FLOOR_AUTOTILE_TABLE` | [Array](Array.html).<[Array](Array.html).<[Array](Array.html).<[Number](Number.html)>>> | [static] 床オートタイル組み立てテーブル |
| `WALL_AUTOTILE_TABLE` | [Array](Array.html).<[Array](Array.html).<[Array](Array.html).<[Number](Number.html)>>> | [static] 壁オートタイル組み立てテーブル |
| `WATERFALL_AUTOTILE_TABLE` | [Array](Array.html).<[Array](Array.html).<[Array](Array.html).<[Number](Number.html)>>> | [static] 滝オートタイル組み立てテーブル |
| `parent` | Object | [read-only][super] 親オブジェクト(タイルマップを保持している[Spriteset_Map](Spriteset_Map.html)) |
| `children` | [Array](Array.html).<[Sprite](Sprite.html)> | [read-only][super] 子オブジェクト(PIXI.tilemap.ZLayer、[Sprite](Sprite.html) 、[Sprite_Character](Sprite_Character.html) 、[Sprite_Destination](Sprite_Destination.html) を含む配列) |
| `animationCount` | [Number](Number.html) |  オートタイルアニメーションのカウント |
| `bitmaps` | [Array](Array.html) |  タイルセットで使われている画像の配列 |
| `origin` | [Point](Point.html) |  スクロールに対する基準点 |
| `flags` | [Array](Array.html).<[Number](Number.html)> |  フラグ(詳細は[RPG.Tileset](RPG.Tileset.html)) |
| `tileHeight` | [Number](Number.html) |  タイル高さ(ピクセル) |
| `tileWidth` | [Number](Number.html) |  タイル幅(ピクセル) |
| `height` | [Number](Number.html) |  画面高さ(ピクセル) |
| `width` | [Number](Number.html) |  画面幅(ピクセル) |
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
| `bitmap` | [Bitmap](Bitmap.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawNormalTile (bitmap, tileId, dx, dy)

 渡されたBitmapに(オートタイルでない通常の)タイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawShadow (bitmap, shadowBits, dx, dy)

 渡されたBitmapに影ペンの影を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.html) |  画像 |
| `shadowBits` | [Number](Number.html) |  タイルを4分割したうちで描く位置を指定するビット |
| `dx` | [Number](Number.html) |  始点からのx差分(ピクセル) |
| `dy` | [Number](Number.html) |  始点からのy差分(ピクセル) |

<dl>
</dl>

#### (static) _drawTableEdge (bitmap, tileId, dx, dy)

 渡されたBitmapにテーブル端の画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawTile (bitmap, tileId, dx, dy)

 渡されたBitmapにタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _isHigherTile (tileId) → {Boolean}

 高層のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.html) |  |

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
| `mx` | [Number](Number.html) |  |
| `my` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `startX` | [Number](Number.html) |  |
| `startY` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _paintTiles (startX, startY, x, y)

 指定位置のタイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.html) |  |
| `startY` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _readLastTiles (i, x, y) → {[Array](Array.html)}

 指定位置の最新タイル配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.html) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.html) | x座標(タイル数) |
| `y` | [Number](Number.html) | y座標(タイル数) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a></span>
                </dd>
            </dl>

#### (static) _readMapData (x, y, z) → {[Number](Number.html)}

 指定位置のマップIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | x位置(タイル数) |
| `y` | [Number](Number.html) | y位置(タイル数) |
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

#### (static) _sortChildren ()

 子オブジェクトのソート。
<dl>
</dl>

#### (static) _updateLayerPositions (startX, startY)

 レイヤー位置をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.html) |  |
| `startY` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _writeLastTiles (i, x, y, tiles)

 指定位置に最新のタイル情報を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.html) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.html) | x座標(タイル数) |
| `y` | [Number](Number.html) | y座標(タイル数) |
| `tiles` | [Array](Array.html) |  |

<dl>
</dl>

#### (static) getAutotileKind (tileId) → {[Number](Number.html)}

 オートタイルの種類を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) getAutotileShape (tileId) → {[Number](Number.html)}

 オートタイルの形を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileID1` | [Number](Number.html) |  |
| `tileID2` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

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
| `tileId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) makeAutotileId (kind, shape) → {[Number](Number.html)}

 オートタイルのIDを生成。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `kind` | [Number](Number.html) |  種類 |
| `shape` | [Number](Number.html) |  形 |

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
| `index` | [Number](Number.html) |  追加位置 |

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
| `index` | [Number](Number.html) |  取り除くオブジェクトの位置 |

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
| `width` | [Number](Number.html) |  マップの幅(タイル数) |
| `height` | [Number](Number.html) |  マップの高さ(タイル数) |
| `data` | [Array](Array.html) |  一次元配列によるマップのデータ |

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
 <details>

## [Home](index.html)

### Classes

* [Array](Array.html)
* [AudioManager](AudioManager.html)
* [BattleManager](BattleManager.html)
* [Bitmap](Bitmap.html)
* [CacheEntry](CacheEntry.html)
* [CacheMap](CacheMap.html)
* [ConfigManager](ConfigManager.html)
* [DataManager](DataManager.html)
* [Decrypter](Decrypter.html)
* [Game_Action](Game_Action.html)
* [Game_ActionResult](Game_ActionResult.html)
* [Game_Actor](Game_Actor.html)
* [Game_Actors](Game_Actors.html)
* [Game_Battler](Game_Battler.html)
* [Game_BattlerBase](Game_BattlerBase.html)
* [Game_Character](Game_Character.html)
* [Game_CharacterBase](Game_CharacterBase.html)
* [Game_CommonEvent](Game_CommonEvent.html)
* [Game_Enemy](Game_Enemy.html)
* [Game_Event](Game_Event.html)
* [Game_Follower](Game_Follower.html)
* [Game_Followers](Game_Followers.html)
* [Game_Interpreter](Game_Interpreter.html)
* [Game_Item](Game_Item.html)
* [Game_Map](Game_Map.html)
* [Game_Message](Game_Message.html)
* [Game_Party](Game_Party.html)
* [Game_Picture](Game_Picture.html)
* [Game_Player](Game_Player.html)
* [Game_Screen](Game_Screen.html)
* [Game_SelfSwitches](Game_SelfSwitches.html)
* [Game_Switches](Game_Switches.html)
* [Game_System](Game_System.html)
* [Game_Temp](Game_Temp.html)
* [Game_Timer](Game_Timer.html)
* [Game_Troop](Game_Troop.html)
* [Game_Unit](Game_Unit.html)
* [Game_Variables](Game_Variables.html)
* [Game_Vehicle](Game_Vehicle.html)
* [Graphics](Graphics.html)
* [Html5Audio](Html5Audio.html)
* [ImageCache](ImageCache.html)
* [ImageManager](ImageManager.html)
* [Input](Input.html)
* [JsonEx](JsonEx.html)
* [Math](Math.html)
* [AudioParameters](MV.AudioParameters.html)
* [BattleLogMethod](MV.BattleLogMethod.html)
* [BattlerAnimation](MV.BattlerAnimation.html)
* [BattleRewards](MV.BattleRewards.html)
* [CommandItem](MV.CommandItem.html)
* [ConfigData](MV.ConfigData.html)
* [DatabaseFile](MV.DatabaseFile.html)
* [Matrix](MV.Matrix.html)
* [Motion](MV.Motion.html)
* [PluginSettings](MV.PluginSettings.html)
* [SaveContents](MV.SaveContents.html)
* [SaveFileInfo](MV.SaveFileInfo.html)
* [TextState](MV.TextState.html)
* [TouchInputEvents](MV.TouchInputEvents.html)
* [Number](Number.html)
* [PluginManager](PluginManager.html)
* [Point](Point.html)
* [Rectangle](Rectangle.html)
* [RequestQueue](RequestQueue.html)
* [ResourceHandler](ResourceHandler.html)
* [Actor](RPG.Actor.html)
* [Animation](RPG.Animation.html)
* [Timing](RPG.Animation.Timing.html)
* [Armor](RPG.Armor.html)
* [AudioFile](RPG.AudioFile.html)
* [BaseItem](RPG.BaseItem.html)
* [BattleEventPage](RPG.BattleEventPage.html)
* [Conditions](RPG.BattleEventPage.Conditions.html)
* [Class](RPG.Class.html)
* [Learning](RPG.Class.Learning.html)
* [CommonEvent](RPG.CommonEvent.html)
* [Damage](RPG.Damage.html)
* [Effect](RPG.Effect.html)
* [Enemy](RPG.Enemy.html)
* [Action](RPG.Enemy.Action.html)
* [DropItem](RPG.Enemy.DropItem.html)
* [EquipItem](RPG.EquipItem.html)
* [Event](RPG.Event.html)
* [EventCommand](RPG.EventCommand.html)
* [EventPage](RPG.EventPage.html)
* [Conditions](RPG.EventPage.Conditions.html)
* [Image](RPG.EventPage.Image.html)
* [Item](RPG.Item.html)
* [Map](RPG.Map.html)
* [Encounter](RPG.Map.Encounter.html)
* [MapInfo](RPG.MapInfo.html)
* [MetaData](RPG.MetaData.html)
* [MoveCommand](RPG.MoveCommand.html)
* [MoveRoute](RPG.MoveRoute.html)
* [Skill](RPG.Skill.html)
* [State](RPG.State.html)
* [System](RPG.System.html)
* [AttackMotion](RPG.System.AttackMotion.html)
* [Terms](RPG.System.Terms.html)
* [TestBattler](RPG.System.TestBattler.html)
* [Vehicle](RPG.System.Vehicle.html)
* [Tileset](RPG.Tileset.html)
* [Trait](RPG.Trait.html)
* [Troop](RPG.Troop.html)
* [UsableItem](RPG.UsableItem.html)
* [Weapon](RPG.Weapon.html)
* [Scene_Base](Scene_Base.html)
* [Scene_Battle](Scene_Battle.html)
* [Scene_Boot](Scene_Boot.html)
* [Scene_Debug](Scene_Debug.html)
* [Scene_Equip](Scene_Equip.html)
* [Scene_File](Scene_File.html)
* [Scene_GameEnd](Scene_GameEnd.html)
* [Scene_Gameover](Scene_Gameover.html)
* [Scene_Item](Scene_Item.html)
* [Scene_ItemBase](Scene_ItemBase.html)
* [Scene_Load](Scene_Load.html)
* [Scene_Map](Scene_Map.html)
* [Scene_Menu](Scene_Menu.html)
* [Scene_MenuBase](Scene_MenuBase.html)
* [Scene_Name](Scene_Name.html)
* [Scene_Options](Scene_Options.html)
* [Scene_Save](Scene_Save.html)
* [Scene_Shop](Scene_Shop.html)
* [Scene_Skill](Scene_Skill.html)
* [Scene_Status](Scene_Status.html)
* [Scene_Title](Scene_Title.html)
* [SceneManager](SceneManager.html)
* [ScreenSprite](ScreenSprite.html)
* [ShaderTilemap](ShaderTilemap.html)
* [SoundManager](SoundManager.html)
* [Sprite](Sprite.html)
* [Sprite_Actor](Sprite_Actor.html)
* [Sprite_Animation](Sprite_Animation.html)
* [Sprite_Balloon](Sprite_Balloon.html)
* [Sprite_Base](Sprite_Base.html)
* [Sprite_Battler](Sprite_Battler.html)
* [Sprite_Button](Sprite_Button.html)
* [Sprite_Character](Sprite_Character.html)
* [Sprite_Damage](Sprite_Damage.html)
* [Sprite_Destination](Sprite_Destination.html)
* [Sprite_Enemy](Sprite_Enemy.html)
* [Sprite_Picture](Sprite_Picture.html)
* [Sprite_StateIcon](Sprite_StateIcon.html)
* [Sprite_StateOverlay](Sprite_StateOverlay.html)
* [Sprite_Timer](Sprite_Timer.html)
* [Sprite_Weapon](Sprite_Weapon.html)
* [Spriteset_Base](Spriteset_Base.html)
* [Spriteset_Battle](Spriteset_Battle.html)
* [Spriteset_Map](Spriteset_Map.html)
* [Stage](Stage.html)
* [StorageManager](StorageManager.html)
* [String](String.html)
* [TextManager](TextManager.html)
* [Tilemap](Tilemap.html)
* [TilingSprite](TilingSprite.html)
* [ToneFilter](ToneFilter.html)
* [ToneSprite](ToneSprite.html)
* [TouchInput](TouchInput.html)
* [Member](Troop.Member.html)
* [Utils](Utils.html)
* [Weather](Weather.html)
* [WebAudio](WebAudio.html)
* [Window](Window.html)
* [Window_ActorCommand](Window_ActorCommand.html)
* [Window_Base](Window_Base.html)
* [Window_BattleActor](Window_BattleActor.html)
* [Window_BattleEnemy](Window_BattleEnemy.html)
* [Window_BattleItem](Window_BattleItem.html)
* [Window_BattleLog](Window_BattleLog.html)
* [Window_BattleSkill](Window_BattleSkill.html)
* [Window_BattleStatus](Window_BattleStatus.html)
* [Window_ChoiceList](Window_ChoiceList.html)
* [Window_Command](Window_Command.html)
* [Window_DebugEdit](Window_DebugEdit.html)
* [Window_DebugRange](Window_DebugRange.html)
* [Window_EquipCommand](Window_EquipCommand.html)
* [Window_EquipItem](Window_EquipItem.html)
* [Window_EquipSlot](Window_EquipSlot.html)
* [Window_EquipStatus](Window_EquipStatus.html)
* [Window_EventItem](Window_EventItem.html)
* [Window_GameEnd](Window_GameEnd.html)
* [Window_Gold](Window_Gold.html)
* [Window_Help](Window_Help.html)
* [Window_HorzCommand](Window_HorzCommand.html)
* [Window_ItemCategory](Window_ItemCategory.html)
* [Window_ItemList](Window_ItemList.html)
* [Window_MapName](Window_MapName.html)
* [Window_MenuActor](Window_MenuActor.html)
* [Window_MenuCommand](Window_MenuCommand.html)
* [Window_MenuStatus](Window_MenuStatus.html)
* [Window_Message](Window_Message.html)
* [Window_NameEdit](Window_NameEdit.html)
* [Window_NameInput](Window_NameInput.html)
* [Window_NumberInput](Window_NumberInput.html)
* [Window_Options](Window_Options.html)
* [Window_PartyCommand](Window_PartyCommand.html)
* [Window_SavefileList](Window_SavefileList.html)
* [Window_ScrollText](Window_ScrollText.html)
* [Window_Selectable](Window_Selectable.html)
* [Window_ShopBuy](Window_ShopBuy.html)
* [Window_ShopCommand](Window_ShopCommand.html)
* [Window_ShopNumber](Window_ShopNumber.html)
* [Window_ShopSell](Window_ShopSell.html)
* [Window_ShopStatus](Window_ShopStatus.html)
* [Window_SkillList](Window_SkillList.html)
* [Window_SkillStatus](Window_SkillStatus.html)
* [Window_SkillType](Window_SkillType.html)
* [Window_Status](Window_Status.html)
* [Window_TitleCommand](Window_TitleCommand.html)
* [WindowLayer](WindowLayer.html)

### Namespaces

* [MV](MV.html)
* [RPG](RPG.html)

### Global

* [$dataActors](global.html#$dataActors)
* [$dataAnimations](global.html#$dataAnimations)
* [$dataArmors](global.html#$dataArmors)
* [$dataClasses](global.html#$dataClasses)
* [$dataCommonEvents](global.html#$dataCommonEvents)
* [$dataEnemies](global.html#$dataEnemies)
* [$dataItems](global.html#$dataItems)
* [$dataMap](global.html#$dataMap)
* [$dataMapInfos](global.html#$dataMapInfos)
* [$dataSkills](global.html#$dataSkills)
* [$dataStates](global.html#$dataStates)
* [$dataSystem](global.html#$dataSystem)
* [$dataTilesets](global.html#$dataTilesets)
* [$dataTroops](global.html#$dataTroops)
* [$dataWeapons](global.html#$dataWeapons)
* [$gameActors](global.html#$gameActors)
* [$gameMap](global.html#$gameMap)
* [$gameMessage](global.html#$gameMessage)
* [$gameParty](global.html#$gameParty)
* [$gamePlayer](global.html#$gamePlayer)
* [$gameScreen](global.html#$gameScreen)
* [$gameSelfSwitches](global.html#$gameSelfSwitches)
* [$gameSwitches](global.html#$gameSwitches)
* [$gameSystem](global.html#$gameSystem)
* [$gameTemp](global.html#$gameTemp)
* [$gameTimer](global.html#$gameTimer)
* [$gameTroop](global.html#$gameTroop)
* [$gameVariables](global.html#$gameVariables)
* [$plugins](global.html#$plugins)
* [$testEvent](global.html#$testEvent)

</details>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
