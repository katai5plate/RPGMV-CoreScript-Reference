# Class: Bitmap

## Bitmap (width, height)

#### new Bitmap (width, height)

The basic object that represents an image. Bitmap states(Bitmap._loadingState): none: Empty Bitmap pending: Url requested, but pending to load until startRequest called purged: Url request completed and purged. requesting: Requesting supplied URI now. requestCompleted: Request completed decrypting: requesting encrypted data from supplied URI or decrypting it. decryptCompleted: Decrypt completed loaded: loaded. isReady() === true, so It's usable. error: error occurred

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The width of the bitmap |
| `height` | [Number](Number.html) | The height of the bitmap |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cacheEntry` | [CacheEntry](CacheEntry.html) | Cache entry, for images. In all cases _url is the same as cacheEntry.key |
| `fontFaceThe` | [String](String.html) | face name of the font. |
| `fontSize` | [Number](Number.html) | The size of the font in pixels. |
| `fontItalic` | Boolean | Whether the font is italic. |
| `textColor` | [String](String.html) | The color of the text in CSS format. |
| `outlineColor` | [String](String.html) | The color of the outline of the text in CSS format. |
| `outlineWidth` | [Number](Number.html) | The width of the outline of the text. |
| `url` | [String](String.html) | [read-only] The url of the image file. |
| `baseTexture` | PIXI.BaseTexture | [read-only] The base texture that holds the image. |
| `canvas` | HTMLCanvasElement | [read-only] The bitmap canvas. |
| `context` | CanvasRenderingContext2D | [read-only] The 2d context of the bitmap canvas. |
| `width` | [Number](Number.html) | [read-only] The width of the bitmap. |
| `height` | [Number](Number.html) | [read-only] The height of the bitmap. |
| `rect` | [Rectangle](Rectangle.html) | [read-only] The rectangle of the bitmap. |
| `smooth` | Boolean | Whether the smooth scaling is applied. |
| `paintOpacity` | [Number](Number.html) | The opacity of the drawing object in the range (0, 255). |

<dl>
</dl>

### Methods

#### (static) _callLoadListeners ()

<dl>
</dl>

#### (static) _drawTextBody (text, tx, ty, maxWidth)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `tx` | [Number](Number.html) |  |
| `ty` | [Number](Number.html) |  |
| `maxWidth` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _drawTextOutline (text, tx, ty, maxWidth)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) |  |
| `tx` | [Number](Number.html) |  |
| `ty` | [Number](Number.html) |  |
| `maxWidth` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) _makeFontNameText ()

<dl>
</dl>

#### (static) _onError ()

<dl>
</dl>

#### (static) _onLoad ()

<dl>
</dl>

#### (static) _setDirty ()

<dl>
</dl>

#### (static) _setupCssFontLoading ()

<dl>
</dl>

#### (static) load (url) → {[Bitmap](Bitmap.html)}

Loads a image file and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) | The image url of the texture |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) snap (stage) → {[Bitmap](Bitmap.html)}

Takes a snapshot of the game screen and returns a new bitmap object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.html) | The stage object |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### addLoadListener (listner)

Add a callback function that will be called when the bitmap is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
</dl>

#### adjustTone (r, g, b)

Changes the color tone of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.html) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.html) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.html) | The blue strength in the range (-255, 255) |

<dl>
</dl>

#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
</dl>

#### bltImage (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)

Performs a block transfer, using assumption that original image was not modified (no hue)

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.html) |  |  | The bitmap to draw |
| `sx` | [Number](Number.html) |  |  | The x coordinate in the source |
| `sy` | [Number](Number.html) |  |  | The y coordinate in the source |
| `sw` | [Number](Number.html) |  |  | The width of the source image |
| `sh` | [Number](Number.html) |  |  | The height of the source image |
| `dx` | [Number](Number.html) |  |  | The x coordinate in the destination |
| `dy` | [Number](Number.html) |  |  | The y coordinate in the destination |
| `dw` | [Number](Number.html) | <optional> | sw | The width to draw the image in the destination |
| `dh` | [Number](Number.html) | <optional> | sh | The height to draw the image in the destination |

<dl>
</dl>

#### blur ()

Applies a blur effect to the bitmap.
<dl>
</dl>

#### checkDirty ()

updates texture is bitmap was dirty
<dl>
</dl>

#### clear ()

Clears the entire bitmap.
<dl>
</dl>

#### clearRect (x, y, width, height)

Clears the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to clear |
| `height` | [Number](Number.html) | The height of the rectangle to clear |

<dl>
</dl>

#### decode ()

<dl>
</dl>

#### drawCircle (x, y, radius, color)

Draw a bitmap in the shape of a circle

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate based on the circle center |
| `y` | [Number](Number.html) | The y coordinate based on the circle center |
| `radius` | [Number](Number.html) | The radius of the circle |
| `color` | [String](String.html) | The color of the circle in CSS format |

<dl>
</dl>

#### drawText (text, x, y, maxWidth, lineHeight, align)

Draws the outline text to the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text that will be drawn |
| `x` | [Number](Number.html) | The x coordinate for the left of the text |
| `y` | [Number](Number.html) | The y coordinate for the top of the text |
| `maxWidth` | [Number](Number.html) | The maximum allowed width of the text |
| `lineHeight` | [Number](Number.html) | The height of the text line |
| `align` | [String](String.html) | The alignment of the text |

<dl>
</dl>

#### fillAll (color)

Fills the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
</dl>

#### fillRect (x, y, width, height, color)

Fills the specified rectangle.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color` | [String](String.html) | The color of the rectangle in CSS format |

<dl>
</dl>

#### getAlphaPixel (x, y) → {[String](String.html)}

Returns alpha pixel value at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
</dl>

##### Returns:

The alpha value
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### getPixel (x, y) → {[String](String.html)}

Returns pixel color at the specified point.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate of the pixel in the bitmap |
| `y` | [Number](Number.html) | The y coordinate of the pixel in the bitmap |

<dl>
</dl>

##### Returns:

The pixel color (hex format)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### gradientFillRect (x, y, width, height, color1, color2, vertical)

Draws the rectangle with a gradation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.html) | The x coordinate for the upper-left corner |
| `y` | [Number](Number.html) | The y coordinate for the upper-left corner |
| `width` | [Number](Number.html) | The width of the rectangle to fill |
| `height` | [Number](Number.html) | The height of the rectangle to fill |
| `color1` | [String](String.html) | The gradient starting color |
| `color2` | [String](String.html) | The gradient ending color |
| `vertical` | Boolean | Wether the gradient should be draw as vertical or not |

<dl>
</dl>

#### initialize (width, height)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) |  |
| `height` | [Number](Number.html) |  |

<dl>
</dl>

#### isError () → {Boolean}

Checks whether a loading error has occurred.
<dl>
</dl>

##### Returns:

True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

Checks whether the bitmap is ready to render.
<dl>
</dl>

##### Returns:

True if the bitmap is ready to render
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRequestOnly () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRequestReady () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### measureTextWidth (text) → {[Number](Number.html)}

Returns the width of the specified text.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.html) | The text to be measured |

<dl>
</dl>

##### Returns:

The width of the text in pixels
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### request (url) → {[Bitmap](Bitmap.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### resize (width, height)

Resizes the bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.html) | The new width of the bitmap |
| `height` | [Number](Number.html) | The new height of the bitmap |

<dl>
</dl>

#### rotateHue (offset)

Rotates the hue of the entire bitmap.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `offset` | [Number](Number.html) | The hue offset in 360 degrees |

<dl>
</dl>

#### startRequest ()

<dl>
</dl>

#### touch ()

touch the resource
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
