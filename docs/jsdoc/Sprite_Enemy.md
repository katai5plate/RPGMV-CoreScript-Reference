# Class: Sprite_Enemy

## Sprite_Enemy ()

#### new Sprite_Enemy ()

The sprite for displaying an enemy.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Enemy](Game_Enemy.md) |  |
| `_enemy` | [Game_Enemy](Game_Enemy.md) |  |
| `_appeared` | Boolean |  |
| `_battlerName` | [String](String.md) |  |
| `_battlerHue` | [Number](Number.md) |  |
| `_effectType` | [String](String.md) |  |
| `_effectDuration` | [Number](Number.md) |  |
| `_shake` | [Number](Number.md) |  |
| `_stateIconSprite` | [Sprite_StateIcon](Sprite_StateIcon.md) |  |

<dl>
</dl>

### Extends

* [Sprite_Battler](Sprite_Battler.md)

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

#### createStateIconSprite ()

<dl>
</dl>

#### damageOffsetX () → {[Number](Number.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#damageOffsetX</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### damageOffsetY () → {[Number](Number.md)}

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#damageOffsetY</a>
                        </li>
                    </ul>
                </dd>
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
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#inHomePosition</a>
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

#### initialize (battler)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Enemy](Game_Enemy.md) |  |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initMembers ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#initMembers</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### initVisibility ()

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

Returns true if the effect type on the sprite enemy is not null.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#isEffecting</a>
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

#### isMoving () → {boolean}

Returns true if the sprite for the battler is moving.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#isMoving</a>
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

#### loadBitmap (name, hue)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

#### onMoveEnd ()

Handler for when movement has ended.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#onMoveEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### revertToNormal ()

Revers the sprite enemy to a normal state.
<dl>
</dl>

#### setBattler (battler)

Sets the battler to an instance of game enemy.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Enemy](Game_Enemy.md) | Instance of game enemy. |

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#setBattler</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setHome (x, y)

Sets the home position of the sprite battler to the given x and y coordinates.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#setHome</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setupAnimation ()

Sets up animation on the sprite battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#setupAnimation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setupDamagePopup ()

Sets up damage popup on the sprite battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#setupDamagePopup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### setupEffect ()

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
| `animation` | [RPG.Animation](RPG.Animation.md) |  |
| `mirror` | Boolean |  |
| `delay` | [Number](Number.md) |  |

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

#### startAppear ()

Starts the appearinig effect on the sprite enemy.
<dl>
</dl>

#### startBlink ()

Starts the blink effect on the sprite enemy.
<dl>
</dl>

#### startBossCollapse ()

Starts the boss collapse effect of the sprite enemy.
<dl>
</dl>

#### startCollapse ()

Starts the collapse effect of the sprite enemy.
<dl>
</dl>

#### startDisappear ()

Starts the disappearing effect on the sprite enemy.
<dl>
</dl>

#### startEffect (effectType)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `effectType` | [String](String.md) |  |

<dl>
</dl>

#### startInstantCollapse ()

Starts the instant collapse effect of the sprite enemy.
<dl>
</dl>

#### startMove (x, y, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |
| `duration` | [Number](Number.md) |  |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#startMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startWhiten ()

Starts the whiten effect on the sprite enemy.
<dl>
</dl>

#### update ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateAnimation ()

Updates the sprite battler animation.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateAnimation</a>
                        </li>
                    </ul>
                </dd>
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

#### updateAppear ()

Updates the appear effect on the sprite enemy.
<dl>
</dl>

#### updateBitmap ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateBitmap</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBlink ()

Updates the blink effect on the sprite enemy.
<dl>
</dl>

#### updateBossCollapse ()

Updates the boss collapse effect.
<dl>
</dl>

#### updateCollapse ()

Updates the collapse effect.
<dl>
</dl>

#### updateDamagePopup ()

Updates the damage pop up for the sprite battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateDamagePopup</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateDisappear ()

<dl>
</dl>

#### updateEffect ()

<dl>
</dl>

#### updateFrame ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateFrame</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateInstantCollapse ()

Updates the instant collapse effect.
<dl>
</dl>

#### updateMain ()

Updates the main loop of the sprite battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateMain</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateMove ()

Updates movement on the sprite battler.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updatePosition ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updatePosition</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateSelectionEffect ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateSelectionEffect</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateStateSprite ()

Updates the state sprite on the sprite enemy.
<dl>
</dl>

#### updateVisibility ()

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateVisibility</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateWhiten ()

Updates the whiten effect on the sprite enemy.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
