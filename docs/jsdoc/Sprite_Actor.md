# Class: Sprite_Actor

## Sprite_Actor (battler opt)

#### new Sprite_Actor (battler opt)

The sprite for displaying an actor.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.html) | <optional> |  |

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

* [Sprite_Battler](Sprite_Battler.html)

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

#### damageOffsetX () → {[Number](Number.html)}

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

#### damageOffsetY () → {[Number](Number.html)}

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
| `battler` | [Game_Actor](Game_Actor.html) | <optional> |  |

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

#### motionSpeed () → {[Number](Number.html)}

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
| `index` | [Number](Number.html) |  |

<dl>
</dl>

#### setBattler (battler)

Sets the battler of the sprite actor.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Actor](Game_Actor.html) |  |

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
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |

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

#### startEntryMotion ()

Starts the entry motion of the sprite actor.
<dl>
</dl>

#### startMotion (motionType)

Starts the motion given the specified motion type.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `motionType` | [String](String.html) |  |

<dl>
</dl>

#### startMove (x, y, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

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
 <details>

## [Home](index.html)

### Classes

* [Array](Array.html)
* [AudioManager](AudioManager.html)
* [BattleManager](BattleManager.html)
* [Bitmap](Bitmap.html)
* [CacheEntry](CacheEntry.html)
* [CacheMap](CacheMap.html)
* [ConfigManager](ConfigManager.html)
* [DataManager](DataManager.html)
* [Decrypter](Decrypter.html)
* [Game_Action](Game_Action.html)
* [Game_ActionResult](Game_ActionResult.html)
* [Game_Actor](Game_Actor.html)
* [Game_Actors](Game_Actors.html)
* [Game_Battler](Game_Battler.html)
* [Game_BattlerBase](Game_BattlerBase.html)
* [Game_Character](Game_Character.html)
* [Game_CharacterBase](Game_CharacterBase.html)
* [Game_CommonEvent](Game_CommonEvent.html)
* [Game_Enemy](Game_Enemy.html)
* [Game_Event](Game_Event.html)
* [Game_Follower](Game_Follower.html)
* [Game_Followers](Game_Followers.html)
* [Game_Interpreter](Game_Interpreter.html)
* [Game_Item](Game_Item.html)
* [Game_Map](Game_Map.html)
* [Game_Message](Game_Message.html)
* [Game_Party](Game_Party.html)
* [Game_Picture](Game_Picture.html)
* [Game_Player](Game_Player.html)
* [Game_Screen](Game_Screen.html)
* [Game_SelfSwitches](Game_SelfSwitches.html)
* [Game_Switches](Game_Switches.html)
* [Game_System](Game_System.html)
* [Game_Temp](Game_Temp.html)
* [Game_Timer](Game_Timer.html)
* [Game_Troop](Game_Troop.html)
* [Game_Unit](Game_Unit.html)
* [Game_Variables](Game_Variables.html)
* [Game_Vehicle](Game_Vehicle.html)
* [Graphics](Graphics.html)
* [Html5Audio](Html5Audio.html)
* [ImageCache](ImageCache.html)
* [ImageManager](ImageManager.html)
* [Input](Input.html)
* [JsonEx](JsonEx.html)
* [Math](Math.html)
* [AudioParameters](MV.AudioParameters.html)
* [BattleLogMethod](MV.BattleLogMethod.html)
* [BattlerAnimation](MV.BattlerAnimation.html)
* [BattleRewards](MV.BattleRewards.html)
* [CommandItem](MV.CommandItem.html)
* [ConfigData](MV.ConfigData.html)
* [DatabaseFile](MV.DatabaseFile.html)
* [Matrix](MV.Matrix.html)
* [Motion](MV.Motion.html)
* [PluginSettings](MV.PluginSettings.html)
* [SaveContents](MV.SaveContents.html)
* [SaveFileInfo](MV.SaveFileInfo.html)
* [TextState](MV.TextState.html)
* [TouchInputEvents](MV.TouchInputEvents.html)
* [Number](Number.html)
* [PluginManager](PluginManager.html)
* [Point](Point.html)
* [Rectangle](Rectangle.html)
* [RequestQueue](RequestQueue.html)
* [ResourceHandler](ResourceHandler.html)
* [Actor](RPG.Actor.html)
* [Animation](RPG.Animation.html)
* [Timing](RPG.Animation.Timing.html)
* [Armor](RPG.Armor.html)
* [AudioFile](RPG.AudioFile.html)
* [BaseItem](RPG.BaseItem.html)
* [BattleEventPage](RPG.BattleEventPage.html)
* [Conditions](RPG.BattleEventPage.Conditions.html)
* [Class](RPG.Class.html)
* [Learning](RPG.Class.Learning.html)
* [CommonEvent](RPG.CommonEvent.html)
* [Damage](RPG.Damage.html)
* [Effect](RPG.Effect.html)
* [Enemy](RPG.Enemy.html)
* [Action](RPG.Enemy.Action.html)
* [DropItem](RPG.Enemy.DropItem.html)
* [EquipItem](RPG.EquipItem.html)
* [Event](RPG.Event.html)
* [EventCommand](RPG.EventCommand.html)
* [EventPage](RPG.EventPage.html)
* [Conditions](RPG.EventPage.Conditions.html)
* [Image](RPG.EventPage.Image.html)
* [Item](RPG.Item.html)
* [Map](RPG.Map.html)
* [Encounter](RPG.Map.Encounter.html)
* [MapInfo](RPG.MapInfo.html)
* [MetaData](RPG.MetaData.html)
* [MoveCommand](RPG.MoveCommand.html)
* [MoveRoute](RPG.MoveRoute.html)
* [Skill](RPG.Skill.html)
* [State](RPG.State.html)
* [System](RPG.System.html)
* [AttackMotion](RPG.System.AttackMotion.html)
* [Terms](RPG.System.Terms.html)
* [TestBattler](RPG.System.TestBattler.html)
* [Vehicle](RPG.System.Vehicle.html)
* [Tileset](RPG.Tileset.html)
* [Trait](RPG.Trait.html)
* [Troop](RPG.Troop.html)
* [UsableItem](RPG.UsableItem.html)
* [Weapon](RPG.Weapon.html)
* [Scene_Base](Scene_Base.html)
* [Scene_Battle](Scene_Battle.html)
* [Scene_Boot](Scene_Boot.html)
* [Scene_Debug](Scene_Debug.html)
* [Scene_Equip](Scene_Equip.html)
* [Scene_File](Scene_File.html)
* [Scene_GameEnd](Scene_GameEnd.html)
* [Scene_Gameover](Scene_Gameover.html)
* [Scene_Item](Scene_Item.html)
* [Scene_ItemBase](Scene_ItemBase.html)
* [Scene_Load](Scene_Load.html)
* [Scene_Map](Scene_Map.html)
* [Scene_Menu](Scene_Menu.html)
* [Scene_MenuBase](Scene_MenuBase.html)
* [Scene_Name](Scene_Name.html)
* [Scene_Options](Scene_Options.html)
* [Scene_Save](Scene_Save.html)
* [Scene_Shop](Scene_Shop.html)
* [Scene_Skill](Scene_Skill.html)
* [Scene_Status](Scene_Status.html)
* [Scene_Title](Scene_Title.html)
* [SceneManager](SceneManager.html)
* [ScreenSprite](ScreenSprite.html)
* [ShaderTilemap](ShaderTilemap.html)
* [SoundManager](SoundManager.html)
* [Sprite](Sprite.html)
* [Sprite_Actor](Sprite_Actor.html)
* [Sprite_Animation](Sprite_Animation.html)
* [Sprite_Balloon](Sprite_Balloon.html)
* [Sprite_Base](Sprite_Base.html)
* [Sprite_Battler](Sprite_Battler.html)
* [Sprite_Button](Sprite_Button.html)
* [Sprite_Character](Sprite_Character.html)
* [Sprite_Damage](Sprite_Damage.html)
* [Sprite_Destination](Sprite_Destination.html)
* [Sprite_Enemy](Sprite_Enemy.html)
* [Sprite_Picture](Sprite_Picture.html)
* [Sprite_StateIcon](Sprite_StateIcon.html)
* [Sprite_StateOverlay](Sprite_StateOverlay.html)
* [Sprite_Timer](Sprite_Timer.html)
* [Sprite_Weapon](Sprite_Weapon.html)
* [Spriteset_Base](Spriteset_Base.html)
* [Spriteset_Battle](Spriteset_Battle.html)
* [Spriteset_Map](Spriteset_Map.html)
* [Stage](Stage.html)
* [StorageManager](StorageManager.html)
* [String](String.html)
* [TextManager](TextManager.html)
* [Tilemap](Tilemap.html)
* [TilingSprite](TilingSprite.html)
* [ToneFilter](ToneFilter.html)
* [ToneSprite](ToneSprite.html)
* [TouchInput](TouchInput.html)
* [Member](Troop.Member.html)
* [Utils](Utils.html)
* [Weather](Weather.html)
* [WebAudio](WebAudio.html)
* [Window](Window.html)
* [Window_ActorCommand](Window_ActorCommand.html)
* [Window_Base](Window_Base.html)
* [Window_BattleActor](Window_BattleActor.html)
* [Window_BattleEnemy](Window_BattleEnemy.html)
* [Window_BattleItem](Window_BattleItem.html)
* [Window_BattleLog](Window_BattleLog.html)
* [Window_BattleSkill](Window_BattleSkill.html)
* [Window_BattleStatus](Window_BattleStatus.html)
* [Window_ChoiceList](Window_ChoiceList.html)
* [Window_Command](Window_Command.html)
* [Window_DebugEdit](Window_DebugEdit.html)
* [Window_DebugRange](Window_DebugRange.html)
* [Window_EquipCommand](Window_EquipCommand.html)
* [Window_EquipItem](Window_EquipItem.html)
* [Window_EquipSlot](Window_EquipSlot.html)
* [Window_EquipStatus](Window_EquipStatus.html)
* [Window_EventItem](Window_EventItem.html)
* [Window_GameEnd](Window_GameEnd.html)
* [Window_Gold](Window_Gold.html)
* [Window_Help](Window_Help.html)
* [Window_HorzCommand](Window_HorzCommand.html)
* [Window_ItemCategory](Window_ItemCategory.html)
* [Window_ItemList](Window_ItemList.html)
* [Window_MapName](Window_MapName.html)
* [Window_MenuActor](Window_MenuActor.html)
* [Window_MenuCommand](Window_MenuCommand.html)
* [Window_MenuStatus](Window_MenuStatus.html)
* [Window_Message](Window_Message.html)
* [Window_NameEdit](Window_NameEdit.html)
* [Window_NameInput](Window_NameInput.html)
* [Window_NumberInput](Window_NumberInput.html)
* [Window_Options](Window_Options.html)
* [Window_PartyCommand](Window_PartyCommand.html)
* [Window_SavefileList](Window_SavefileList.html)
* [Window_ScrollText](Window_ScrollText.html)
* [Window_Selectable](Window_Selectable.html)
* [Window_ShopBuy](Window_ShopBuy.html)
* [Window_ShopCommand](Window_ShopCommand.html)
* [Window_ShopNumber](Window_ShopNumber.html)
* [Window_ShopSell](Window_ShopSell.html)
* [Window_ShopStatus](Window_ShopStatus.html)
* [Window_SkillList](Window_SkillList.html)
* [Window_SkillStatus](Window_SkillStatus.html)
* [Window_SkillType](Window_SkillType.html)
* [Window_Status](Window_Status.html)
* [Window_TitleCommand](Window_TitleCommand.html)
* [WindowLayer](WindowLayer.html)

### Namespaces

* [MV](MV.html)
* [RPG](RPG.html)

### Global

* [$dataActors](global.html#$dataActors)
* [$dataAnimations](global.html#$dataAnimations)
* [$dataArmors](global.html#$dataArmors)
* [$dataClasses](global.html#$dataClasses)
* [$dataCommonEvents](global.html#$dataCommonEvents)
* [$dataEnemies](global.html#$dataEnemies)
* [$dataItems](global.html#$dataItems)
* [$dataMap](global.html#$dataMap)
* [$dataMapInfos](global.html#$dataMapInfos)
* [$dataSkills](global.html#$dataSkills)
* [$dataStates](global.html#$dataStates)
* [$dataSystem](global.html#$dataSystem)
* [$dataTilesets](global.html#$dataTilesets)
* [$dataTroops](global.html#$dataTroops)
* [$dataWeapons](global.html#$dataWeapons)
* [$gameActors](global.html#$gameActors)
* [$gameMap](global.html#$gameMap)
* [$gameMessage](global.html#$gameMessage)
* [$gameParty](global.html#$gameParty)
* [$gamePlayer](global.html#$gamePlayer)
* [$gameScreen](global.html#$gameScreen)
* [$gameSelfSwitches](global.html#$gameSelfSwitches)
* [$gameSwitches](global.html#$gameSwitches)
* [$gameSystem](global.html#$gameSystem)
* [$gameTemp](global.html#$gameTemp)
* [$gameTimer](global.html#$gameTimer)
* [$gameTroop](global.html#$gameTroop)
* [$gameVariables](global.html#$gameVariables)
* [$plugins](global.html#$plugins)
* [$testEvent](global.html#$testEvent)

</details>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
