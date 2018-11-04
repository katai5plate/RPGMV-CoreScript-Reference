# Class: Game_Screen

## Game_Screen ()

#### new Game_Screen ()

The game object class for screen effect data, such as changes in color tone and flashes. Use as global variable [$gameScreen](global.html#$gameScreen)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_shake` | [Number](Number.html) |  |
| `_shakePower` | [Number](Number.html) |  |
| `_shakeSpeed` | [Number](Number.html) |  |
| `_shakeDuration` | [Number](Number.html) |  |
| `_shakeDirection` | [Number](Number.html) |  |
| `_zoomX` | [Number](Number.html) |  _zoomX property of the game screen. |
| `_zoomY` | [Number](Number.html) |  _zoomY property of the game screen. |
| `_zoomScale` | [Number](Number.html) |  |
| `_zoomScaleTarget` | [Number](Number.html) |  |
| `_zoomDuration` | [Number](Number.html) |  |
| `_weatherType` | [String](String.html) |  |
| `_weatherPower` | [Number](Number.html) |  |
| `_weatherPowerTarget` | [Number](Number.html) |  |
| `_weatherDuration` | [Number](Number.html) |  |
| `_brightness` | [Number](Number.html) | The _brightness property of the game screen; returned when calling the brightness method. |
| `_fadeOutDuration` | [Number](Number.html) |  |
| `_fadeInDuration` | [Number](Number.html) |  |
| `_tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneTarget` | [Array](Array.html).<[Number](Number.html)> |  |
| `_toneDuration` | [Number](Number.html) |  |
| `_flashColor` | [Array](Array.html).<[Number](Number.html)> |  |
| `_flashDuration` | [Number](Number.html) |  |
| `_pictures` | [Array](Array.html).<[Game_Picture](Game_Picture.html)> | The array of Game_Pictures that are attached to the game screen. |

<dl>
</dl>

### Methods

#### brightness () → {[Number](Number.html)}

Returns the brightness of the game screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### changeWeather (type, power, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [String](String.html) |  |
| `power` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### clear ()

<dl>
</dl>

#### clearFade ()

Clears the screen fade.
<dl>
</dl>

#### clearFlash ()

Clears the screen flash.
<dl>
</dl>

#### clearPictures ()

Clears the pictures set on the game screen.
<dl>
</dl>

#### clearShake ()

Clears the screen shake.
<dl>
</dl>

#### clearTone ()

Clears the screen tone.
<dl>
</dl>

#### clearWeather ()

Clears the screen weather.
<dl>
</dl>

#### clearZoom ()

Clears the screen zoom.
<dl>
</dl>

#### eraseBattlePictures ()

Erases the battle pictures.
<dl>
</dl>

#### erasePicture (pictureId)

Erases a picture from the screen given the respected picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

#### flashColor () → {[Array](Array.html).<[Number](Number.html)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### maxPictures () → {[Number](Number.html)}

Returns the maximum number of pictures set on the game screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### movePicture (pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `origin` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scaleX` | [Number](Number.html) |  |
| `scaleY` | [Number](Number.html) |  |
| `opacity` | [Number](Number.html) |  |
| `blendMode` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### onBattleStart ()

Handler for when the battle starts in game; prepares the screen for the battle scene.
<dl>
</dl>

#### picture (pictureId) → {[Game_Picture](Game_Picture.html)}

Returns the specified picture given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Picture</a></span>
                </dd>
            </dl>

#### realPictureId (pictureId) → {[Number](Number.html)}

Returns the real picture id, given the picture id.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### rotatePicture (pictureId, speed)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `speed` | [Number](Number.html) |  |

<dl>
</dl>

#### setZoom (x, y, scale)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scale` | [Number](Number.html) |  |

<dl>
</dl>

#### shake () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### showPicture (pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `name` | [String](String.html) |  |
| `origin` | [Number](Number.html) |  |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scaleX` | [Number](Number.html) |  |
| `scaleY` | [Number](Number.html) |  |
| `opacity` | [Number](Number.html) |  |
| `blendMode` | [Number](Number.html) |  |

<dl>
</dl>

#### startFadeIn (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startFadeOut (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

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

#### startFlashForDamage ()

<dl>
</dl>

#### startShake (power, speed, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `power` | [Number](Number.html) |  |
| `speed` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startTint (tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### startZoom (x, y, scale, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) |  |
| `y` | [Number](Number.html) |  |
| `scale` | [Number](Number.html) |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### tintPicture (pictureId, tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pictureId` | [Number](Number.html) |  |
| `tone` | [Array](Array.html).<[Number](Number.html)> |  |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### tone () → {[Array](Array.html).<[Number](Number.html)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Number</a>&gt;</span>
                </dd>
            </dl>

#### update ()

Updates the game screen.
<dl>
</dl>

#### updateFadeIn ()

Updates the screen fade in.
<dl>
</dl>

#### updateFadeOut ()

Updates the screen fade out.
<dl>
</dl>

#### updateFlash ()

Update the screen flash.
<dl>
</dl>

#### updatePictures ()

Update the screen pictures.
<dl>
</dl>

#### updateShake ()

Update the screen shake.
<dl>
</dl>

#### updateTone ()

Updates the screen tone.
<dl>
</dl>

#### updateWeather ()

Update the screen weather.
<dl>
</dl>

#### updateZoom ()

Update the screen zoom.
<dl>
</dl>

#### weatherPower () → {[Number](Number.html)}

Returns the weather power.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### weatherType () → {[String](String.html)}

Returns the current weather type.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### zoomScale () → {[Number](Number.html)}

Returns the zoom scale of the screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### zoomX () → {[Number](Number.html)}

Returns the zoom x coordinate of the screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### zoomY () → {[Number](Number.html)}

Returns the zoom y coordiante of the screen.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
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
