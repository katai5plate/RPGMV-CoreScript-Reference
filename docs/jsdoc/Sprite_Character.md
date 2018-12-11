# Class: Sprite_Character

## Sprite_Character (character)

#### new Sprite_Character (character)

[イベント][アクター][フォロワー][乗り物]といった、キャラクタを表示するスプライト。<br />
[Spriteset_Map.createCharacters](Spriteset_Map.md#createcharacters-)で生成される。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタデータ |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_character` | [Game_Character](Game_Character.md) | キャラクタデータ |
| `_balloonDuration` | [Number](Number.md) |  |
| `_tilesetId` | [Number](Number.md) |  |
| `_upperBody` | [Sprite](Sprite.md) |  |
| `_lowerBody` | [Sprite](Sprite.md) |  |
| `_bushDepth` | [Number](Number.md) |  |
| `_balloonSprite` | [Sprite_Balloon](Sprite_Balloon.md) | 付随するフキダシスプライト |


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

#### characterBlockX () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### characterBlockY () → {[Number](Number.md)}


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### characterPatternX () → {[Number](Number.md)}


Returns the character x pattern.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### characterPatternY () → {[Number](Number.md)}


Returns the character y pattern.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### createHalfBodySprites ()


#### endBalloon ()


Ends the balloon sprite, removing it from the Game_Character object sprite.

#### hide ()
スプライトを非表示。

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
        <span>Boolean</span>
    </dd>
</dl>

#### isBalloonPlaying () → {boolean}


Returns true if a balloon animation is playing on the character.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isImageChanged () → {Boolean}


Returns true if the sprite character image has changed.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isTile () → {boolean}


Returns true if the Game_Character object tileId is greater than 0.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### patternHeight () → {[Number](Number.md)}


Returns the pattern height.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### patternWidth () → {[Number](Number.md)}


Returns the pattern width.

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Number.html">Number</a></span>
    </dd>
</dl>

#### setCharacter (character)


Sets the current Game_Character object attached to the sprite.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) |  |


#### setCharacterBitmap ()


Sets the sprite character bitmap.

#### setTileBitmap ()


#### setupAnimation ()


#### setupBalloon ()


Sets up the Game_Character object balloon sprite, and calls the startBalloon method.

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

#### startBalloon ()


Starts the balloon sprite on the Game_Character object.

#### tilesetBitmap (tileId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  |


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

#### updateBitmap ()


Updates the bitmap of the sprite character.

#### updateCharacterFrame ()


Updates the sprite character -- character frame.

#### updateFrame ()


Updates the sprite character frame.

#### updateHalfBodySprites ()


#### updateOther ()


#### updatePosition ()


Updates the position of the sprite character.

#### updateTileFrame ()


Updates the sprite character tile frame.

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
