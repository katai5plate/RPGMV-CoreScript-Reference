# Class: Sprite_Battler

## Sprite_Battler (battler opt)

#### new Sprite_Battler (battler opt)

The superclass of [Sprite_Actor](Sprite_Actor.html) and [Sprite_Enemy](Sprite_Enemy.html).

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.html) | <optional> |  |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_battler` | [Game_Battler](Game_Battler.html) |  |
| `_damages` | [Array](Array.html).<[Sprite_Damage](Sprite_Damage.html)> |  |
| `_homeX` | [Number](Number.html) |  |
| `_homeY` | [Number](Number.html) |  |
| `_offsetX` | [Number](Number.html) |  |
| `_offsetY` | [Number](Number.html) |  |
| `_targetOffsetX` | [Number](Number.html) |  |
| `_targetOffsetY` | [Number](Number.html) |  |
| `_movementDuration` | [Number](Number.html) |  |
| `_selectionEffectCount` | [Number](Number.html) |  |

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

#### damageOffsetX () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### damageOffsetY () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
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

#### inHomePosition () → {Boolean}

Returns true if the sprite battler is in the home position.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
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

#### isEffecting () → {Boolean}

Returns false for sprite battler.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMoving () → {boolean}

Returns true if the sprite for the battler is moving.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>boolean</span>
                </dd>
            </dl>

#### onMoveEnd ()

Handler for when movement has ended.
<dl>
</dl>

#### setBattler (battler)

Sets the game battler of the sprite battler.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### setHome (x, y)

Sets the home position of the sprite battler to the given x and y coordinates.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

<dl>
</dl>

#### setupAnimation ()

Sets up animation on the sprite battler.
<dl>
</dl>

#### setupDamagePopup ()

Sets up damage popup on the sprite battler.
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

#### startMove (x, y, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
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

Updates the sprite battler animation.
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

#### updateBitmap ()

Updates the bitmap of the sprite battler.
<dl>
</dl>

#### updateDamagePopup ()

Updates the damage pop up for the sprite battler.
<dl>
</dl>

#### updateFrame ()

Updates the sprite battler's current frame.
<dl>
</dl>

#### updateMain ()

Updates the main loop of the sprite battler.
<dl>
</dl>

#### updateMove ()

Updates movement on the sprite battler.
<dl>
</dl>

#### updatePosition ()

Updates the position of the sprite battler.
<dl>
</dl>

#### updateSelectionEffect ()

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
