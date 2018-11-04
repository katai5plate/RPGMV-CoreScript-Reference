# Class: Graphics

## Graphics ()

#### new Graphics ()

The static class that carries out graphics processing.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `BLEND_ADD` | [Number](Number.html) | [static] The alias of PIXI.blendModes.ADD. |
| `BLEND_NORMAL` | [Number](Number.html) | [static] The alias of PIXI.blendModes.NORMAL. |
| `BLEND_MULTIPLY` | [Number](Number.html) | [static] The alias of PIXI.blendModes.MULTIPLY. |
| `BLEND_SCREEN` | [Number](Number.html) | [static] The alias of PIXI.blendModes.SCREEN. |
| `frameCount` | [Number](Number.html) | [static] The total frame count of the game screen. |
| `width` | [Number](Number.html) | [static] The width of the game screen. |
| `height` | [Number](Number.html) | [static] The height of the game screen. |
| `boxWidth` | [Number](Number.html) | [static] The width of the window display area. |
| `boxHeight` | [Number](Number.html) | [static] The height of the window display area. |
| `scale` | [Number](Number.html) | [static] The zoom scale of the game screen. |
| `_width` | [Number](Number.html) | [static] |
| `_height` | [Number](Number.html) | [static] |
| `_rendererType` | [String](String.html) | [static] |
| `_boxWidth` | [Number](Number.html) | [static] |
| `_boxHeight` | [Number](Number.html) | [static] |
| `_scale` | [Number](Number.html) | [static] |
| `_realScale` | [Number](Number.html) | [static] |
| `_errorPrinter` | Boolean | [static] |
| `_canvas` | HTMLCanvasElement | [static] |
| `_video` | HTMLVideoElement | [static] |
| `_upperCanvas` | HTMLCanvasElement | [static] |
| `_renderer` | PIXI.SystemRenderer | [static] |
| `_fpsMeter` | FPSMeter | [static] |
| `_modeBox` | HTMLDivElement | [static] |
| `_skipCount` | [Number](Number.html) | [static] |
| `_maxSkip` | [Number](Number.html) | [static] |
| `_rendered` | Boolean | [static] |
| `_loadingImage` | HTMLImageElement | [static] |
| `_loadingCount` | [Number](Number.html) | [static] |
| `_fpsMeterToggled` | Boolean | [static] |
| `_stretchEnabled` | Boolean | [static] |
| `_canUseDifferenceBlend` | Boolean | [static] |
| `_canUseSaturationBlend` | Boolean | [static] |
| `_hiddenCanvas` | [Number](Number.html) | [static] |

<dl>
</dl>

### Methods

#### (static) _applyCanvasFilter ()

<dl>
</dl>

#### (static) _cancelFullScreen ()

<dl>
</dl>

#### (static) _centerElement (element)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `element` | HTMLElement |  |

<dl>
</dl>

#### (static) _clearUpperCanvas ()

<dl>
</dl>

#### (static) _createAllElements ()

<dl>
</dl>

#### (static) _createCanvas ()

<dl>
</dl>

#### (static) _createErrorPrinter ()

<dl>
</dl>

#### (static) _createFontLoader (name)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) |  |

<dl>
</dl>

#### (static) _createFPSMeter ()

<dl>
</dl>

#### (static) _createGameFontLoader ()

<dl>
</dl>

#### (static) _createModeBox ()

<dl>
</dl>

#### (static) _createRenderer ()

<dl>
</dl>

#### (static) _createUpperCanvas ()

<dl>
</dl>

#### (static) _createVideo ()

<dl>
</dl>

#### (static) _defaultStretchMode ()

<dl>
</dl>

#### (static) _disableContextMenu ()

<dl>
</dl>

#### (static) _disableTextSelection ()

<dl>
</dl>

#### (static) _isFullScreen () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _isVideoVisible () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _makeErrorHtml (name, message) → {[String](String.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) |  |
| `message` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) _modifyExistingElements ()

<dl>
</dl>

#### (static) _onKeyDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) _onTouchEnd (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |

<dl>
</dl>

#### (static) _onVideoEnd ()

<dl>
</dl>

#### (static) _onVideoError ()

<dl>
</dl>

#### (static) _onVideoLoad ()

<dl>
</dl>

#### (static) _onWindowResize ()

<dl>
</dl>

#### (static) _paintUpperCanvas ()

<dl>
</dl>

#### (static) _playVideo (src)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.html) |  |

<dl>
</dl>

#### (static) _requestFullScreen ()

<dl>
</dl>

#### (static) _setupEventHandlers ()

<dl>
</dl>

#### (static) _switchFPSMeter ()

<dl>
</dl>

#### (static) _switchFullScreen ()

<dl>
</dl>

#### (static) _switchStretchMode () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) _testCanvasBlendModes ()

<dl>
</dl>

#### (static) _updateAllElements ()

<dl>
</dl>

#### (static) _updateCanvas ()

<dl>
</dl>

#### (static) _updateErrorPrinter ()

<dl>
</dl>

#### (static) _updateRealScale ()

<dl>
</dl>

#### (static) _updateRenderer ()

<dl>
</dl>

#### (static) _updateUpperCanvas ()

<dl>
</dl>

#### (static) _updateVideo ()

<dl>
</dl>

#### (static) _updateVisibility (videoVisible)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `videoVisible` | Boolean |  |

<dl>
</dl>

#### (static) callGC ()

Calls pixi.js garbage collector
<dl>
</dl>

#### (static) canPlayVideoType (type) → {Boolean}

Checks whether the browser can play the specified video type.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [String](String.html) | The video type to test support for |

<dl>
</dl>

##### Returns:

True if the browser can play the specified video type
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseCssFontLoading ()

<dl>
</dl>

#### (static) canUseDifferenceBlend () → {Boolean}

Checks whether the canvas blend mode 'difference' is supported.
<dl>
</dl>

##### Returns:

True if the canvas blend mode 'difference' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canUseSaturationBlend () → {Boolean}

Checks whether the canvas blend mode 'saturation' is supported.
<dl>
</dl>

##### Returns:

True if the canvas blend mode 'saturation' is supported
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) endLoading ()

Erases the "Now Loading" image.
<dl>
</dl>

#### (static) eraseLoadingError ()

Erases the loading error text.
<dl>
</dl>

#### (static) hasWebGL () → {Boolean}

Checks whether the current browser supports WebGL.
<dl>
</dl>

##### Returns:

True if the current browser supports WebGL.
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) hideFps ()

Hides the FPSMeter element.
<dl>
</dl>

#### (static) initialize (width, height, type)

Initializes the graphics system.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the game screen |
| `height` | [Number](Number.html) | The height of the game screen |
| `type` | [String](String.html) | The type of the renderer. 'canvas', 'webgl', or 'auto'. |

<dl>
</dl>

#### (static) isFontLoaded (name) → {Boolean}

Checks whether the font file is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |

<dl>
</dl>

##### Returns:

True if the font file is loaded
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isInsideCanvas (x, y) → {Boolean}

Checks whether the specified point is inside the game canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the canvas area |
| `y` | [Number](Number.html) | The y coordinate on the canvas area |

<dl>
</dl>

##### Returns:

True if the specified point is inside the game canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isVideoPlaying () → {Boolean}

Checks whether the video is playing.
<dl>
</dl>

##### Returns:

True if the video is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWebGL () → {Boolean}

Checks whether the renderer type is WebGL.
<dl>
</dl>

##### Returns:

True if the renderer type is WebGL
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadFont (name, url)

Loads a font file.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The face name of the font |
| `url` | [String](String.html) | The url of the font file |

<dl>
</dl>

#### (static) pageToCanvasX (x) → {[Number](Number.html)}

Converts an x coordinate on the page to the corresponding x coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate on the page to be converted |

<dl>
</dl>

##### Returns:

The x coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) pageToCanvasY (y) → {[Number](Number.html)}

Converts a y coordinate on the page to the corresponding y coordinate on the canvas area.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.html) | The y coordinate on the page to be converted |

<dl>
</dl>

##### Returns:

The y coordinate on the canvas area
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) playVideo (src)

Starts playback of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.html) |  |

<dl>
</dl>

#### (static) printError (name, message)

Displays the error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.html) | The name of the error |
| `message` | [String](String.html) | The message of the error |

<dl>
</dl>

#### (static) printLoadingError (url)

Displays the loading error text to the screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The url of the resource failed to load |

<dl>
</dl>

#### (static) render (stage)

Renders the stage to the game screen.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object to be rendered |

<dl>
</dl>

#### (static) setLoadingImage ()

Sets the source of the "Now Loading" image.
<dl>
</dl>

#### (static) setVideoVolume (value)

Sets volume of a video.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) showFps ()

Shows the FPSMeter element.
<dl>
</dl>

#### (static) startLoading ()

Initializes the counter for displaying the "Now Loading" image.
<dl>
</dl>

#### (static) tickEnd ()

Marks the end of each frame for FPSMeter.
<dl>
</dl>

#### (static) tickStart ()

Marks the beginning of each frame for FPSMeter.
<dl>
</dl>

#### (static) updateLoading ()

Increments the loading counter and displays the "Now Loading" image if necessary.
<dl>
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
