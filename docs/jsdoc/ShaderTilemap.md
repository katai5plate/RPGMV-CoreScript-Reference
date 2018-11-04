# Class: ShaderTilemap

## ShaderTilemap ()

#### new ShaderTilemap ()

WebGL を使ったタイルマップ。バージョン1.3.0以降は、こっちが実際に使用されているクラスで、[Tilemap](Tilemap.html) の方は実質的に継承されるために存在する abstract(抽象)クラスになっている。
<dl>
</dl>

### Extends

* [Tilemap](Tilemap.html)

### Methods

#### (static) _createLayers ()

 レイヤーの生成。
<dl>
</dl>

#### (static) _drawAutotile (layers, tileId, dx, dy)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [Array](Array.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawNormalTile (layers, tileId, dx, dy)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [Array](Array.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawShadow (shadowBits, dx, dy)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `shadowBits` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawTableEdge (layers, tileId, dx, dy)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [Array](Array.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawTile (layers, tileId, dx, dy)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [Array](Array.html) |  |
| `tileId` | [Number](Number.html) |  |
| `dx` | [Number](Number.html) |  |
| `dy` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _hackRenderer (renderer) → {PIXI.CanvasRenderer|PIXI.WebGLRenderer}

Uploads animation state in renderer

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | PIXI.CanvasRenderer |PIXI.WebGLRenderer | pixi renderer |

<dl>
</dl>

##### Returns:

pixi renderer
<dl>
                <dt> Type </dt>
                <dd>
                    <span>PIXI.CanvasRenderer</span> | <span>PIXI.WebGLRenderer</span>
                </dd>
            </dl>

#### (static) _paintAllTiles (startX, startY)

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
| `startX` | [Number](Number.html) |  始点のx座標 |
| `startY` | [Number](Number.html) |  始点のy座標 |
| `x` | [Number](Number.html) | x座標 |
| `y` | [Number](Number.html) | y座標 |

<dl>
</dl>

#### (static) _updateLayerPositions (startX, startY)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.html) |  |
| `startY` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) refresh ()

 タイルマップを更新。
<dl>
</dl>

#### (static) refreshTileset ()

 タイルセットを更新。
<dl>
</dl>

#### (static) renderCanvas (renderer)

canvas によって描画する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | PIXI.CanvasRenderer | pixi renderer |

<dl>
</dl>

#### (static) renderWebGL (renderer)

WebGL によって描画する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | PIXI.WebGLRenderer | pixi renderer |

<dl>
</dl>

#### (static) updateTransform ()

 変形のアップデート。
<dl>
</dl>

#### addChild (child) → {Object}

[super] コンテナに子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#addChild</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#addChildAt</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isReady () → {Boolean}

 描画準備ができているか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#isReady</a>
                        </li>
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

#### refresh ()

 タイルマップを更新。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#refresh</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refreshTileset ()

 タイルセットを更新。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#refreshTileset</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### removeChild (child) → {Object}

[super] コンテナから子オブジェクトを取り除く

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  取り除くオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#removeChild</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#removeChildAt</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#setData</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

 フレーム毎のタイルマップのアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateTransform ()

 変形をアップデート。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Tilemap#updateTransform</a>
                        </li>
                    </ul>
                </dd>
            </dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
