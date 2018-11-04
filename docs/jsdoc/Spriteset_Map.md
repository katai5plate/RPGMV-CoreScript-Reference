# Class: Spriteset_Map

## Spriteset_Map ()

#### new Spriteset_Map ()

 マップスプライト表示用オブジェクト。[Scene_Map](Scene_Map.md) オブジェクトで管理される。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_parallax` | [TilingSprite](TilingSprite.md) | [遠景]スプライト |
| `_tilemap` | [Tilemap](Tilemap.md) | [ShaderTilemap](ShaderTilemap.md) |  マップ画像本体 |
| `_tileset` | [RPG.Tileset](RPG.Tileset.md) | [タイルセット] |
| `_characterSprites` | [Array](Array.md).<[Sprite_Character](Sprite_Character.md)> | [アクター][イベント]のスプライト |
| `_shadowSprite` | [Sprite](Sprite.md) |  影スプライト |
| `_destinationSprite` | [Sprite_Destination](Sprite_Destination.md) |  タッチ位置スプライト |
| `_weather` | [Weather](Weather.md) |  天候 |
| `_parallaxName` | [String](String.md) | [遠景]画像ファイル名 |

<dl>
</dl>

### Extends

* [Spriteset_Base](Spriteset_Base.md)

### Methods

#### _speedUpCustomBlendModes (renderer)


checks if we need to speed up custom blendmodes

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` |  |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite#_speedUpCustomBlendModes</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createBaseSprite ()


 基本スプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createBaseSprite</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createCanvasToneChanger ()


canvas 色調変更を生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createCanvasToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[$1]($2.md)
#### createCharacters ()


 キャラクタスプライト([Sprite_Character](Sprite_Character.md))の生成。
<dl>
[$1]($2.md)</dl>

#### createDestination ()


 タッチ位置表示スプライト([Sprite_Destination](Sprite_Destination.md))の生成。
<dl>
</dl>

#### createLowerLayer ()


 基本スプライトに加え、[遠景]、[タイルマップ]、キャラクタ、影、タッチ位置表示、天候を含む下レイヤを生成。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createLowerLayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createParallax ()


[遠景]スプライトを生成。
<dl>
</dl>

#### createPictures ()


 画像スプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createPictures</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createScreenSprites ()


 画面スプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createScreenSprites</a>
                        </li>
                    </ul>
                </dd>
            </dl>
[$1]($2.md)
#### createShadow ()


 影スプライトの生成。
<dl>
</dl>

#### createTilemap ()


 タイルマップ([Tilemap](Tilemap.md) か [ShaderTilemap](ShaderTilemap.md))を生成。
<dl>
</dl>

#### createTimer ()


 タイマースプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createTimer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createToneChanger ()


 色調補正スプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createUpperLayer ()


[$1]($2.md) 画像, タイマー, スクリーンスプライトを含む上レイヤを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createUpperLayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createWeather ()


 天候スプライト([Weather](Weather.md))の生成。
<dl>
</dl>

#### createWebGLToneChanger ()


WebGL 色調変更を生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#createWebGLToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### hideCharacters ()


 キャラクタスプライトを隠す。
<dl>
</dl>
[$1]($2.md)
#### initialize ()


 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### loadTileset ()


 タイルセット([RPG.Tileset](RPG.Tileset.md))の読み込み。
<dl>
</dl>

#### update ()


 フレーム毎のアップデート。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateCanvasToneChanger ()


canvas 色調変更をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#updateCanvasToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateParallax ()


[遠景]のアップデート。
<dl>
</dl>

#### updatePosition ()


 位置をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#updatePosition</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateScreenSprites ()


 画面スプライトをアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#updateScreenSprites</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateShadow ()


 影のアップデート。
<dl>
</dl>

#### updateTilemap ()


 タイルマップのアップデート。
<dl>
</dl>

#### updateTileset ()


 タイルセットのアップデート。
<dl>
</dl>

#### updateToneChanger ()


 色調変更をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#updateToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateWeather ()


 天候のアップデート。
<dl>
</dl>

#### updateWebGLToneChanger ()


WebGL 色調変更をアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Spriteset_Base#updateWebGLToneChanger</a>
                        </li>
                    </ul>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
