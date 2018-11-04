# Class: Sprite_Balloon

## Sprite_Balloon ()

#### new Sprite_Balloon ()

The sprite for displaying a balloon icon.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_balloonId` | [Number](Number.md) |  |
| `_duration` | [Number](Number.md) |  |

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

#### frameIndex () → {[Number](Number.md)}

Returns the frame index of the balloon animation.
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

#### isPlaying () → {Boolean}

Returns true if the balloon animation is playing.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### loadBitmap ()

<dl>
</dl>

#### setup (balloonId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.md) |  |

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

#### speed () → {[Number](Number.md)}

Returns the speed of the balloon animation.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
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

#### update ()

Updates the balloon sprite.
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

#### updateFrame ()

Updates the balloon sprite frame.
<dl>
</dl>

#### updateVisibility ()

Updadtes the visibility of the sprite based on the _hiding property.
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Sprite_Base#updateVisibility</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### waitTime () → {[Number](Number.md)}

Returns the wait time.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
