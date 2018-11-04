# Class: Spriteset_Battle

## Spriteset_Battle ()

#### new Spriteset_Battle ()

The set of sprites on the battle screen.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_battlebackLocated` | Boolean |  |
| `_backgroundSprite` | [Sprite](Sprite.html) |  |
| `_battleField` | [Sprite](Sprite.html) |  |
| `_back1Sprite` | [TilingSprite](TilingSprite.html) |  |
| `_back2Sprite` | [TilingSprite](TilingSprite.html) |  |
| `_enemySprites` | [Array](Array.html).<[Sprite_Enemy](Sprite_Enemy.html)> |  |
| `_actorSprites` | [Array](Array.html).<[Sprite_Actor](Sprite_Actor.html)> |  |

<dl>
</dl>

### Extends

* [Spriteset_Base](Spriteset_Base.html)

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

#### autotileType (z) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `z` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### battleback1Bitmap () → {[Bitmap](Bitmap.html)}

Returns battleb ack 2 of the battle spriteset.
<dl>
</dl>

##### Returns:

Instance of the Bitmap class.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### battleback1Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of battleback 1 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### battleback2Bitmap () → {[Bitmap](Bitmap.html)}

Returns battleback 2 of the battle spriteset.
<dl>
</dl>

##### Returns:

Instance of the Bitmap class.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### battleback2Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of battleback 2 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### battlerSprites () → {[Array](Array.html).<[Sprite_Battler](Sprite_Battler.html)>}

Returns all battler sprites on the battle spriteset.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Sprite_Battler</a>&gt;</span>
                </dd>
            </dl>

#### compareEnemySprite (a, b) → {[Number](Number.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | [Sprite_Enemy](Sprite_Enemy.html) |  |
| `b` | [Sprite_Enemy](Sprite_Enemy.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### createActors ()

Creates sprite actors for the battle spriteset.
<dl>
</dl>

#### createBackground ()

Creates the background of the battle spriteset.
<dl>
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

#### createBattleback ()

Creates the battleback of the battle spriteset.
<dl>
</dl>

#### createBattleField ()

Creates the battlefield of the battle spriteset.
<dl>
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

#### createEnemies ()

Creates sprite enemies for the battle spriteset.
<dl>
</dl>

#### createLowerLayer ()

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

 画像, タイマー, スクリーンスプライトを含む上レイヤを生成。
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

#### defaultBattleback1Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the default battleback 1 name.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### defaultBattleback2Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the default battleback 2 name.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

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

#### isAnimationPlaying () → {Boolean}

Returns true if animation is playing on the battle spriteset.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isAnyoneMoving () → {Boolean}

Returns true if any sprite actor or enemy is moving.
<dl>
</dl>

##### Returns:

Representing whether any battle participants are moving.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBusy () → {Boolean}

Returns true if the battle spriteset is busy.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isEffecting () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### locateBattleback ()

Locates the battleback and adjusts the coordinates of the battleback.
<dl>
</dl>

#### normalBattleback1Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the normal battleback 1 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### normalBattleback2Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the normal battleback 2 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### overworldBattleback1Name () → {[String](String.html)}

Returns the battleback 1 name as a string.
<dl>
</dl>

##### Returns:

Name of overworld battleback 1 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### overworldBattleback2Name () → {[String](String.html)}

Returns the battleback 2 name as a string.
<dl>
</dl>

##### Returns:

Name of overworld battleback 2 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### shipBattleback1Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the ship battleback 1 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### shipBattleback2Name () → {[String](String.html)}

<dl>
</dl>

##### Returns:

Name of the ship battleback 2 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### terrainBattleback1Name (type) → {[String](String.html)}

Given the specified terrtain type, return the battleback 1 name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) | Terrain type. |

<dl>
</dl>

##### Returns:

Name of the terrtain battleback 1 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### terrainBattleback2Name (type) → {[String](String.html)}

Given the specified terrain type, return the battleback 2 name.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.html) | Terrain type. |

<dl>
</dl>

##### Returns:

Name of the terrain battleback 2 bitmap.
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### update ()

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

#### updateActors ()

Updates the actor sprites on the battle spriteset.
<dl>
</dl>

#### updateBattleback ()

Updates the battleback of the battle spriteset.
<dl>
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
