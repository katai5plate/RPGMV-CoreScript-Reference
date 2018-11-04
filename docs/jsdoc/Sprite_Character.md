# Class: Sprite_Character

## Sprite_Character (character)

#### new Sprite_Character (character)

The sprite for displaying a character.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.html) |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_character` | [Game_Character](Game_Character.html) | The Game_Character object assigned to the sprite. |
| `_balloonDuration` | [Number](Number.html) |  |
| `_tilesetId` | [Number](Number.html) |  |
| `_upperBody` | [Sprite](Sprite.html) |  |
| `_lowerBody` | [Sprite](Sprite.html) |  |
| `_bushDepth` | [Number](Number.html) |  |
| `_balloonSprite` | [Sprite_Balloon](Sprite_Balloon.html) | The current balloon sprite assigned to the sprite. |

<dl>
</dl>

### Extends

* [Sprite_Base](Sprite_Base.html)

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

#### characterBlockX () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterBlockY () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterPatternX () → {[Number](Number.html)}

Returns the character x pattern.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterPatternY () → {[Number](Number.html)}

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

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.html) |  |

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

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### patternHeight () → {[Number](Number.html)}

Returns the pattern height.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### patternWidth () → {[Number](Number.html)}

Returns the pattern width.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### setCharacter (character)

Sets the current Game_Character object attached to the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.html) |  |

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
                    <ul>
                        <li>
                            <a>Sprite_Base#show</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startAnimation (animation, mirror, delay)

Starts a new animation on the current sprite by assigning a new Sprite_Animation object to the sprite's parent.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animation` | [RPG.Animation](RPG.Animation.html) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.html) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#startAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startBalloon ()

Starts the balloon sprite on the Game_Character object.
<dl>
</dl>

#### tilesetBitmap (tileId) → {[Bitmap](Bitmap.html)}

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
