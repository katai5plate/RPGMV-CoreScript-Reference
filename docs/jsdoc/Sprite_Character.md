# Class: Sprite_Character

## Sprite_Character (character)

#### new Sprite_Character (character)

The sprite for displaying a character.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_character` | [Game_Character](Game_Character.md) | The Game_Character object assigned to the sprite. |
| `_balloonDuration` | [Number](Number.md) |  |
| `_tilesetId` | [Number](Number.md) |  |
| `_upperBody` | [Sprite](Sprite.md) |  |
| `_lowerBody` | [Sprite](Sprite.md) |  |
| `_bushDepth` | [Number](Number.md) |  |
| `_balloonSprite` | [Sprite_Balloon](Sprite_Balloon.md) | The current balloon sprite assigned to the sprite. |

<dl>
</dl>

### Extends

* [Sprite_Base](Sprite_Base.md)

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
[Number](Number.md)
#### characterBlockX () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### characterBlockY () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
[Number](Number.md)
#### characterPatternX () → {[Number](Number.md)}


Returns the character x pattern.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>[Number](Number.md)

#### characterPatternY () → {[Number](Number.md)}


Returns the character y pattern.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### createHalfBodySprites ()

<dl>
</dl>

#### endBalloon ()


Ends the balloon sprite, removing it from the Game_Character object sprite.
<dl>
</dl>

#### hide ()


Hides the sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#hide</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initialize (character)


 オブジェクト生成時の初期化。[Game_Character](Game_Character.md)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initMembers ()

<dl>
</dl>

#### isAnimationPlaying () → {boolean}


Returns true if an animation is currently playing.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#isAnimationPlaying</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### isBalloonPlaying () → {boolean}


Returns true if a balloon animation is playing on the character.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### isImageChanged () → {Boolean}


Returns true if the sprite character image has changed.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTile () → {boolean}


Returns true if the Game_Character object tileId is greater than 0.
<dl>
</dl>
[Number](Number.md)
##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### patternHeight () → {[Number](Number.md)}


Returns the pattern height.
<dl>
</dl>[Number](Number.md)

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### patternWidth () → {[Number](Number.md)}


Returns the pattern width.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                [Game_Character](Game_Character.md)
                </dd>
            </dl>

#### setCharacter (character)


Sets the current Game_Character object attached to the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |

<dl>
</dl>

#### setCharacterBitmap ()


Sets the sprite character bitmap.
<dl>
</dl>

#### setTileBitmap ()

<dl>
</dl>

#### setupAnimation ()

<dl>
</dl>

#### setupBalloon ()


Sets up the Game_Character object balloon sprite, and calls the startBalloon method.
<dl>
</dl>

#### show ()


Shows the sprite.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                [RPG.Animation](RPG.Animation.md)
                        <li>
            [Number](Number.md)rite_Base#show</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startAnimation (animation, mirror, delay)


Starts a new animation on the current sprite by assigning a new Sprite_Animation object to the sprite's parent.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animation` | [RPG.Animation](RPG.Animation.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |

<dl>[Bitmap](Bitmap.md)
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#startAnimation</a>
             [Number](Number.md)
                    </ul>
                </dd>
            </dl>

#### startBalloon ()


Starts the balloon sprite on the Game_Character object.
<dl>
</dl>

#### tilesetBitmap (tileId) → {[Bitmap](Bitmap.md)}

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
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### update ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateAnimation ()

<dl>
</dl>

#### updateAnimationSprites ()


Updates the animation sprites, cloning them; if the sprite is playing, pushes the sprites into animation sprites, otherwise the sprite is removed.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#updateAnimationSprites</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBalloon ()


Processes the balloon sprite, calls the endBaloon method if the balloon sprite is done playing.
<dl>
</dl>

#### updateBitmap ()


Updates the bitmap of the sprite character.
<dl>
</dl>

#### updateCharacterFrame ()


Updates the sprite character -- character frame.
<dl>
</dl>

#### updateFrame ()


Updates the sprite character frame.
<dl>
</dl>

#### updateHalfBodySprites ()

<dl>
</dl>

#### updateOther ()

<dl>
</dl>

#### updatePosition ()


Updates the position of the sprite character.
<dl>
</dl>

#### updateTileFrame ()


Updates the sprite character tile frame.
<dl>
</dl>

#### updateVisibility ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#updateVisibility</a>
                        </li>
                    </ul>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
