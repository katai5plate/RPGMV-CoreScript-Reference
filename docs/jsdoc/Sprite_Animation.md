# Class: Sprite_Animation

## Sprite_Animation ()

#### new Sprite_Animation ()

The sprite for displaying an animation.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_checker1` | Object | [static]{key: [RPG.Animation](RPG.Animation.md)} |
| `_checker2` | Object | [static]{key: [RPG.Animation](RPG.Animation.md)} |
| `z` | [Number](Number.md) |  |
| `_target` | [Sprite_Base](Sprite_Base.md) |  |
| `_animation` | [RPG.Animation](RPG.Animation.md) |  |
| `_mirror` | Boolean |  |
| `_delay` | [Number](Number.md) |  |
| `_rate` | [Number](Number.md) |  |
| `_duration` | [Number](Number.md) |  |
| `_flashColor` | [Array](Array.md).<[Number](Number.md)> |  |
| `_flashDuration` | [Number](Number.md) |  |
| `_screenFlashDuration` | [Number](Number.md) |  |
| `_hidingDuration` | [Number](Number.md) |  |
| `_bitmap1` | [Bitmap](Bitmap.md) |  |
| `_bitmap2` | [Bitmap](Bitmap.md) |  |
| `_cellSprites` | [Array](Array.md).<[Sprite](Sprite.md)> |  |
| `_screenFlashSprite` | [ScreenSprite](ScreenSprite.md) |  |
| `_duplicated` | Boolean |  |
| `_reduceArtifacts` | Boolean |  |

<dl>
</dl>

### Extends

* [Sprite](Sprite.md)

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

#### absoluteX () → {[Number](Number.md)}

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

#### absoluteY () → {[Number](Number.md)}

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

#### currentFrameIndex () → {[Number](Number.md)}

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
| `timing` | [RPG.Animation.Timing](RPG.Animation.Timing.md) |  |

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
| `target` | [Sprite_Base](Sprite_Base.md) |  |
| `animation` | [RPG.Animation](RPG.Animation.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |

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
| `color` | [Array](Array.md).<[Number](Number.md)> |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### startHiding (duration)

Starts hiding the sprite animation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | The duration of the hide. |

<dl>
</dl>

#### startScreenFlash (color, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).<[Number](Number.md)> |  |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### update ()

<dl>
</dl>

#### updateAllCellSprites (frame)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Array](Array.md).<[Array](Array.md).<[Number](Number.md)>> |  |

<dl>
</dl>

#### updateCellSprite (sprite, cell)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |
| `cell` | [Array](Array.md).<[Number](Number.md)> |  |

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
