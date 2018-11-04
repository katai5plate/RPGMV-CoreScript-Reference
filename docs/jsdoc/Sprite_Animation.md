# Class: Sprite_Animation

## Sprite_Animation ()

#### new Sprite_Animation ()

The sprite for displaying an animation.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_checker1` | Object | [static]{key: RPG.Animation} |
| `_checker2` | Object | [static]{key: RPG.Animation} |
| `z` | [Number](Number.html) |  |
| `_target` | [Sprite_Base](Sprite_Base.html) |  |
| `_animation` | [RPG.Animation](RPG.Animation.html) |  |
| `_mirror` | Boolean |  |
| `_delay` | [Number](Number.html) |  |
| `_rate` | [Number](Number.html) |  |
| `_duration` | [Number](Number.html) |  |
| `_flashColor` | [Array](Array.html).<[Number](Number.html)> |  |
| `_flashDuration` | [Number](Number.html) |  |
| `_screenFlashDuration` | [Number](Number.html) |  |
| `_hidingDuration` | [Number](Number.html) |  |
| `_bitmap1` | [Bitmap](Bitmap.html) |  |
| `_bitmap2` | [Bitmap](Bitmap.html) |  |
| `_cellSprites` | [Array](Array.html).<[Sprite](Sprite.html)> |  |
| `_screenFlashSprite` | [ScreenSprite](ScreenSprite.html) |  |
| `_duplicated` | Boolean |  |
| `_reduceArtifacts` | Boolean |  |

<dl>
</dl>

### Extends

* [Sprite](Sprite.html)

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

#### absoluteX () → {[Number](Number.html)}

Returns the absolute x position of the sprite animation.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### absoluteY () → {[Number](Number.html)}

Returns the absolute y position of the sprite aniamtion.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### createCellSprites ()

Create the cell sprites of the sprite animation.
<dl>
</dl>

#### createScreenFlashSprite ()

Create the screen flash sprite of the sprite animation.
<dl>
</dl>

#### createSprites ()

Create the sprites of the sprite animation.
<dl>
</dl>

#### currentFrameIndex () → {[Number](Number.html)}

Returns the current frame index of the sprite aniamtion.
<dl>
</dl>

##### Returns:

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

#### initMembers ()

<dl>
</dl>

#### isPlaying () → {Boolean}

Returns true if the sprite animation is playing.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

Returns true if the sprite animation is ready.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### loadBitmaps ()

Loads the bitmaps of the sprite animation.
<dl>
</dl>

#### processTimingData (timing)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `timing` | [RPG.Animation.Timing](RPG.Animation.Timing.html) |  |

<dl>
</dl>

#### remove ()

Removes the sprite animation.
<dl>
</dl>

#### setup (target, animation, mirror, delay)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Sprite_Base](Sprite_Base.html) |  |
| `animation` | [RPG.Animation](RPG.Animation.html) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.html) |  |

<dl>
</dl>

#### setupDuration ()

<dl>
</dl>

#### setupRate ()

<dl>
</dl>

#### startFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startHiding (duration)

Starts hiding the sprite animation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) | The duration of the hide. |

<dl>
</dl>

#### startScreenFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### update ()

<dl>
</dl>

#### updateAllCellSprites (frame)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Array](Array.html).<[Array](Array.html).<[Number](Number.html)>> |  |

<dl>
</dl>

#### updateCellSprite (sprite, cell)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.html) |  |
| `cell` | [Array](Array.html).<[Number](Number.html)> |  |

<dl>
</dl>

#### updateFlash ()

Updates the flash animation of the sprite animation.
<dl>
</dl>

#### updateFrame ()

Updates the frame of the sprite aniamtion.
<dl>
</dl>

#### updateHiding ()

Updates the hiding of the sprite animation.
<dl>
</dl>

#### updateMain ()

Updates the main loop of the sprite animation.
<dl>
</dl>

#### updatePosition ()

Updates the position of the sprite animation.
<dl>
</dl>

#### updateScreenFlash ()

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
