# Class: AudioManager

## AudioManager ()

#### new AudioManager ()

The static class that handles BGM, BGS, ME and SE.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `masterVolume` | [Number](Number.html) | [static] |
| `bgmVolume` | [Number](Number.html) | [static] |
| `bgsVolume` | [Number](Number.html) | [static] |
| `meVolume` | [Number](Number.html) | [static] |
| `seVolume` | [Number](Number.html) | [static] |
| `_bgmVolume` | [Number](Number.html) | [static] |
| `_bgsVolume` | [Number](Number.html) | [static] |
| `_meVolume` | [Number](Number.html) | [static] |
| `_seVolume` | [Number](Number.html) | [static] |
| `_currentBgm` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_currentBgs` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_bgmBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_bgsBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_meBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_seBuffers` | [Array](Array.html).<(Html5AudioStatic| [WebAudio](WebAudio.html))> | [static] |
| `_replayFadeTime` | [Array](Array.html).<(Html5AudioStatic| [WebAudio](WebAudio.html))> | [static] |
| `_path` | [String](String.html) | [static] |
| `_blobUrl` | [String](String.html) | [static] |

<dl>
</dl>

### Methods

#### (static) audioFileExt () → {[String](String.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) checkErrors ()

<dl>
</dl>

#### (static) checkWebAudioError (webAudio)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `webAudio` | Html5AudioStatic | [WebAudio](WebAudio.html) |  |

<dl>
</dl>

#### (static) createBuffer () → {Html5AudioStatic|[WebAudio](WebAudio.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Html5AudioStatic</span> | <span><a>WebAudio</a></span>
                </dd>
            </dl>

#### (static) createDecryptBuffer (url, bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `url` | [String](String.html) |  |  |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) fadeInBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeInBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutMe (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) isCurrentBgm (bgm) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isCurrentBgs (bgs) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isStaticSe (se) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadStaticSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) makeEmptyAudioObject () → {[MV.AudioParameters](MV.AudioParameters.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) playBgm (bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playBgs (bgs, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playEncryptedBgm (bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playMe (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) playSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) playStaticSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) replayBgm (bgm)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) replayBgs (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) saveBgm () → {[MV.AudioParameters](MV.AudioParameters.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) saveBgs () → {[MV.AudioParameters](MV.AudioParameters.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) shouldUseHtml5Audio () → {Boolean}

The only case where we wanted html5audio was android/ no encrypt Atsuma-ru asked to force webaudio there too, so just return false for ALL
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) stopAll ()

<dl>
</dl>

#### (static) stopBgm ()

<dl>
</dl>

#### (static) stopBgs ()

<dl>
</dl>

#### (static) stopMe ()

<dl>
</dl>

#### (static) stopSe ()

<dl>
</dl>

#### (static) updateBgmParameters (bgm)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateBgsParameters (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateBufferParameters (buffer, configVolume, audio)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `configVolume` | [Number](Number.html) |  |
| `audio` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateCurrentBgm (bgm, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `pos` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) updateCurrentBgs (bgs, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `pos` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) updateMeParameters (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateSeParameters (buffer, se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

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
