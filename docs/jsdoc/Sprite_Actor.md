# Class: Sprite_Actor

## Sprite_Actor (battler opt)

#### new Sprite_Actor (battler opt)

The sprite for displaying an actor.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | <optional> |  |

##### Properties:

<table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>MOTIONS</code></td>
                            <td>
                                <span>Object</span>
                            </td>
                            <td>[static] <h6>Properties</h6>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>walk</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>wait</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>chant</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>guard</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>damage</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>evade</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>thrust</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>swing</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>missile</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>skill</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>spell</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>item</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>escape</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>victory</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>dying</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>abnormal</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>sleep</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><code>dead</code></td>
                                            <td>
                                                <span><a>MV.Motion</a></span>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td><code>_battlerName</code></td>
                            <td>
                                <span><a>String</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_motion</code></td>
                            <td>
                                <span><a>MV.Motion</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_motionCount</code></td>
                            <td>
                                <span><a>Number</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_pattern</code></td>
                            <td>
                                <span><a>Number</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_mainSprite</code></td>
                            <td>
                                <span><a>Sprite_Base</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_shadowSprite</code></td>
                            <td>
                                <span><a>Sprite</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_weaponSprite</code></td>
                            <td>
                                <span><a>Sprite_Weapon</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_stateSprite</code></td>
                            <td>
                                <span><a>Sprite_StateOverlay</a></span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><code>_actor</code></td>
                            <td>
                                <span><a>Game_Actor</a></span>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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

#### createMainSprite ()

Creates the main sprite of the sprite actor.
<dl>
</dl>

#### createShadowSprite ()

Creates the shadow sprite of the sprite actor.
<dl>
</dl>

#### createStateSprite ()

Creates the state sprite of the sprite actor.
<dl>
</dl>

#### createWeaponSprite ()

Sets the weapon sprite of the sprite actor.
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

#### initialize (battler opt)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Actor](Game_Actor.md) | <optional> |  |

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
                <dt>Inherited From:</dt>
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

#### motionSpeed () → {[Number](Number.md)}

Returns the speed of the motion for the sprite actor.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveToStartPosition ()

Moves the sprite actor to the start position.
<dl>
</dl>

#### onMoveEnd ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#onMoveEnd</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refreshMotion ()

Refreshes the motion of the sprite actor.
<dl>
</dl>

#### retreat ()

Has the sprite actor retreat.
<dl>
</dl>

#### setActorHome (index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

#### setBattler (battler)

Sets the battler of the sprite actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Actor](Game_Actor.md) |  |

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

#### setupMotion ()

Sets up motion on the sprite actor.
<dl>
</dl>

#### setupWeaponAnimation ()

Sets up weapon animation on the sprite actor.
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

#### startEntryMotion ()

Starts the entry motion of the sprite actor.
<dl>
</dl>

#### startMotion (motionType)

Starts the motion given the specified motion type.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `motionType` | [String](String.md) |  |

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

#### stepBack ()

Has the sprite actor step back.
<dl>
</dl>

#### stepForward ()

Has the sprite actor step forward.
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

#### updateBitmap ()

Updates the sprite actor's movement.
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

#### updateMain ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateMain</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateMotion ()

Updates the sprite actor's motion.
<dl>
</dl>

#### updateMotionCount ()

<dl>
</dl>

#### updateMove ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Battler#updateMove</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updatePosition ()

Updates the position of the sprite battler.
<dl>
                <dt>Inherited From:</dt>
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

#### updateShadow ()

<dl>
</dl>

#### updateTargetPosition ()

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
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
