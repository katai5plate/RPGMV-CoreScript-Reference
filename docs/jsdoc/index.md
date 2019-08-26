# クラスツリー

## 目次

* [JavaScript拡張](index.md#JavaScript拡張)
* [マネージャ](index.md#マネージャ)
* [ユーティリティ](index.md#ユーティリティ)
* オブジェクト
	* [システム](index.md#システム)
	* [スイッチ・変数](index.md#スイッチ変数)
	* [マップキャラクタ](index.md#マップキャラクタ)
	* [バトルキャラクタ](index.md#バトルキャラクタ)
	* [その他オブジェクト](index.md#その他オブジェクト)
* [データベース(JSON)](index.md#データベースjson)
* [入力](index.md#入力)
* [音声](index.md#音声)
* [画像](index.md#画像)
	* [レンダラ](index.md#レンダラ)
	* [シェーダ](index.md#シェーダ)
	* [コンテナ(PIXI.Container)](index.md#コンテナpixicontainer)
		* [スプライト(Sprite)](index.md#スプライトsprite)
	* [シーン(Scene_Base)](index.md#シーンscene_base)
	* [ウィンドウ(Window_Base)](index.md#ウィンドウwindow_base)
		* [選択ウィンドウ(Window_Selectable)](index.md#選択ウィンドウwindow_selectable)
			* [コマンドウィンドウ(Window_Command)](index.md#コマンドウィンドウwindow_command)


### JavaScript拡張

* [Array](Array.md)
* [Number](Number.md)
* [String](String.md)
* [Math](Math.md)

### マネージャ

* [AudioManager](AudioManager.md)
* [BattleManager](BattleManager.md)
* [ConfigManager](ConfigManager.md)
* [DataManager](DataManager.md)
* [ImageManager](ImageManager.md)
* [PluginManager](PluginManager.md)
* [SceneManager](SceneManager.md)
* [SoundManager](SoundManager.md)
* [StorageManager](StorageManager.md)
* [TextManager](TextManager.md)

### ユーティリティ

* [JsonEx](JsonEx.md)
* [Utils](Utils.md)
* [CacheEntry](CacheEntry.md)
* [CacheMap](CacheMap.md)
* [Decrypter](Decrypter.md)
* [RequestQueue](RequestQueue.md)
* [ResourceHandler](ResourceHandler.md)
* [ImageCache](ImageCache.md)

### オブジェクト

#### システム

* [Game_CommonEvent](Game_CommonEvent.md)
* [Game_Interpreter](Game_Interpreter.md)
* [Game_System](Game_System.md)([$gameSystem](global.md#gamesystem-game_system))
* [Game_Temp](Game_Temp.md)([$gameTemp](global.md#gametemp-game_temp))
* [Game_Timer](Game_Timer.md)([$gameTimer](global.md#gametimer-game_timer))

#### スイッチ・変数

* [Game_Switches](Game_Switches.md)([$gameSwitches](global.md#gameswitches-game_switches))
* [Game_SelfSwitches](Game_SelfSwitches.md)([$gameSelfSwitches](global.md#gameselfswitches-game_selfswitches))
* [Game_Variables](Game_Variables.md)([$gameVariables](global.md#gamevariables-game_variables))

#### マップキャラクタ

* [Game_Followers](Game_Followers.md)
* [Game_CharacterBase](Game_CharacterBase.md)
    * [Game_Character](Game_Character.md)
        * [Game_Player](Game_Player.md)([$gamePlayer](global.md#gameplayer-game_player))
        * [Game_Follower](Game_Follower.md)
        * [Game_Event](Game_Event.md)
        * [Game_Vehicle](Game_Vehicle.md)

#### バトルキャラクタ

* [Game_Action](Game_Action.md)
* [Game_ActionResult](Game_ActionResult.md)
* [Game_Unit](Game_Unit.md)
    * [Game_Party](Game_Party.md)([$gameParty](global.md#gameparty-game_party))
    * [Game_Troop](Game_Troop.md)([$gameTroop](global.md#gametroop-game_troop))
* [Game_Actors](Game_Actors.md)([$gameActors](global.md#dataactors-arrayrpgactor))
* [Game_BattlerBase](Game_BattlerBase.md)
    * [Game_Battler](Game_Battler.md)
        * [Game_Actor](Game_Actor.md)
        * [Game_Enemy](Game_Enemy.md)

#### その他オブジェクト

* [Game_Item](Game_Item.md)
* [Game_Picture](Game_Picture.md)
* [Game_Map](Game_Map.md)([$gameMap](global.md#gamemap-game_map))
* [Game_Message](Game_Message.md)([$gameMessage](global.md#gamemessage-game_message))
* [Game_Screen](Game_Screen.md)([$gameScreen](global.md#gamescreen-game_screen))

### データベース(JSON)

* [CommonEvent](RPG.CommonEvent.md)([$dataCommonEvents](global.md#datacommonevents-arrayrpgcommonevent))
* [MapInfo](RPG.MapInfo.md)([$dataMapInfos](global.md#datamapinfos-arrayrpgmapinfo))
* [System](RPG.System.md)([$dataSystem](global.md#datasystem-rpgsystem))-[AttackMotion](RPG.System.AttackMotion.md)・[Terms](RPG.System.Terms.md)・[TestBattler](RPG.System.TestBattler.md)
* [Troop](RPG.Troop.md)([$dataTroops](global.md#datatroops-arrayrpgtroop))
* [EventCommand](RPG.EventCommand.md)([$testEvent](global.md#testevent-arrayrpgeventcommand))
* [AudioFile](RPG.AudioFile.md)
* [BattleEventPage](RPG.BattleEventPage.md) - [Conditions](RPG.BattleEventPage.Conditions.md)
* [Damage](RPG.Damage.md)
* [Effect](RPG.Effect.md)
* [EventPage](RPG.EventPage.md)-[Conditions](RPG.EventPage.Conditions.md)・[Image](RPG.EventPage.Image.md)
* [MoveCommand](RPG.MoveCommand.md)
* [MoveRoute](RPG.MoveRoute.md)
* [Trait](RPG.Trait.md)
* [MetaData](RPG.MetaData.md)
    * [Actor](RPG.Actor.md)([$dataActors](global.md#dataactors-arrayrpgactor))
    * [Animation](RPG.Animation.md)([$dataAnimations](global.md#dataanimations-arrayrpganimation))
    * [Class](RPG.Class.md)([$dataClasses](global.md#dataclasses-arrayrpgclass))-[Learning](RPG.Class.Learning.md)
    * [Enemy](RPG.Enemy.md)([$dataEnemies](global.md#dataenemies-arrayrpgenemy))-[Action](RPG.Enemy.Action.md)・[DropItem](RPG.Enemy.DropItem.md)
    * [Event](RPG.Event.md)
    * [Map](RPG.Map.md)([$dataMap](global.md#datamap-rpgmap))-[Encounter](RPG.Map.Encounter.md)
    * [State](RPG.State.md)([$dataStates](global.md#datastates-arrayrpgstate))
    * [Tileset](RPG.Tileset.md)([$dataTilesets](global.md#datatilesets-arrayrpgtileset))
    * [BaseItem](RPG.BaseItem.md)
        * [UsableItem](RPG.UsableItem.md)
            * [Item](RPG.Item.md)([$dataItems](global.md#dataitems-arrayrpgitem))
            * [Skill](RPG.Skill.md)([$dataSkills](global.md#dataskills-arrayrpgskill))
        * [EquipItem](RPG.EquipItem.md)
            * [Armor](RPG.Armor.md)([$dataArmors](global.md#dataarmors-arrayrpgarmor))
            * [Weapon](RPG.Weapon.md)([$dataWeapons](global.md#dataweapons-arrayrpgweapon))

### 入力

* [Input](Input.md)
* [TouchInput](TouchInput.md)

### 音声

* [WebAudio](WebAudio.md)
* [Html5Audio](Html5Audio.md)

### 画像

* [Bitmap](Bitmap.md)
* [Graphics](Graphics.md)
* [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html)
    * [Point](Point.md)
* [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html)
    * [Rectangle](Rectangle.md)
* PIXI.extras.PictureTilingSprite
    * [TilingSprite](TilingSprite.md)
* EventEmitter
    * [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html)
    * [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html)
    * [PIXI.DisplayObject](PIXI.DisplayObject.md)
        * [PIXI.Container](PIXI.Container.md) → [Extends](index.md#コンテナpixicontainer)
            * [PIXI.Graphics](PIXI.Graphics.md)
                * [PIXI.tilemap.GraphicsLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/GraphicsLayer.ts)
            * [PIXI.Sprite](PIXI.Sprite.md)
                * [Sprite](Sprite.md) → [Extends](index.md#スプライトsprite)


#### レンダラ

* [PIXI.WebGLManager](https://pixijs.download/release/docs/PIXI.WebGLManager.html)
    * [PIXI.ObjectRenderer](https://pixijs.download/release/docs/PIXI.ObjectRenderer.html)
        * [PIXI.tilemap.TileRenderer](https://github.com/pixijs/pixi-tilemap/blob/master/src/TileRenderer.ts)
            * [PIXI.tilemap.SimpleTileRenderer](https://github.com/pixijs/pixi-tilemap/blob/master/src/SimpleTileRenderer.ts)
* EventEmitter
    * [PIXI.SystemRenderer](http://pixijs.download/release/docs/PIXI.SystemRenderer.html)
        * [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html)
        * [PIXI.WebGLRenderer](https://pixijs.download/release/docs/PIXI.WebGLRenderer.html)
* [PIXI.tilemap.CanvasTileRenderer](https://github.com/pixijs/pixi-tilemap/blob/master/src/CanvasTileRenderer.ts)


#### シェーダ

* GLShader
    * [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html)
        * [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html)
            * [ToneFilter](ToneFilter.md)
        * PIXI.tilemap.TilemapShader
            * [PIXI.tilemap.RectTileShader](https://github.com/pixijs/pixi-tilemap/blob/master/src/RectTileShader.ts)


#### スプライト(Sprite)

* [Sprite_Animation](Sprite_Animation.md)
* [Sprite_Button](Sprite_Button.md)
* [Sprite_Damage](Sprite_Damage.md)
* [Sprite_Destination](Sprite_Destination.md)
* [Sprite_Picture](Sprite_Picture.md)
* [Sprite_StateIcon](Sprite_StateIcon.md)
* [Sprite_Timer](Sprite_Timer.md)
* [Spriteset_Base](Spriteset_Base.md)
    * [Spriteset_Battle](Spriteset_Battle.md)
    * [Spriteset_Map](Spriteset_Map.md)
* [Sprite_Base](Sprite_Base.md)
    * [Sprite_Balloon](Sprite_Balloon.md)
    * [Sprite_Character](Sprite_Character.md)
    * [Sprite_StateOverlay](Sprite_StateOverlay.md)
    * [Sprite_Weapon](Sprite_Weapon.md)
    * [Sprite_Battler](Sprite_Battler.md)
        * [Sprite_Actor](Sprite_Actor.md)
        * [Sprite_Enemy](Sprite_Enemy.md)


#### コンテナ(PIXI.Container)

* [ScreenSprite](ScreenSprite.md)
* [ToneSprite](ToneSprite.md)
* [Weather](Weather.md)
* [WindowLayer](WindowLayer.md)
* [PIXI.tilemap.CompositeRectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/CompositeRectTileLayer.ts)
* [PIXI.tilemap.RectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/RectTileLayer.ts)
* [PIXI.tilemap.ZLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/ZLayer.ts)
* [Tilemap](Tilemap.md)
    * [ShaderTilemap](ShaderTilemap.md)
* [Stage](Stage.md)
    * [Scene_Base](Scene_Base.md) → [Extends](index.md#シーンscene_base)
* [Window](Window.md)
    * [Window_Base](Window_Base.md) → [Extends](index.md#ウィンドウwindow_base)


#### シーン(Scene_Base)

* [Scene_Battle](Scene_Battle.md)
* [Scene_Boot](Scene_Boot.md)
* [Scene_Gameover](Scene_Gameover.md)
* [Scene_Map](Scene_Map.md)
* [Scene_Title](Scene_Title.md)
* [Scene_MenuBase](Scene_MenuBase.md)
    * [Scene_Debug](Scene_Debug.md)
    * [Scene_Equip](Scene_Equip.md)
    * [Scene_GameEnd](Scene_GameEnd.md)
    * [Scene_Menu](Scene_Menu.md)
    * [Scene_Name](Scene_Name.md)
    * [Scene_Options](Scene_Options.md)
    * [Scene_Shop](Scene_Shop.md)
    * [Scene_Status](Scene_Status.md)
    * [Scene_File](Scene_File.md)
        * [Scene_Load](Scene_Load.md)
        * [Scene_Save](Scene_Save.md)
    * [Scene_ItemBase](Scene_ItemBase.md)
        * [Scene_Item](Scene_Item.md)
        * [Scene_Skill](Scene_Skill.md)


#### ウィンドウ(Window_Base)

* [Window_EquipStatus](Window_EquipStatus.md)
* [Window_Gold](Window_Gold.md)
* [Window_Help](Window_Help.md)
* [Window_MapName](Window_MapName.md)
* [Window_Message](Window_Message.md)
* [Window_NameEdit](Window_NameEdit.md)
* [Window_ScrollText](Window_ScrollText.md)
* [Window_ShopStatus](Window_ShopStatus.md)
* [Window_SkillStatus](Window_SkillStatus.md)
* [Window_Selectable](Window_Selectable.md) → [Extends](index.md#選択ウィンドウwindow_selectable)


#### 選択ウィンドウ(Window_Selectable)

* [Window_BattleEnemy](Window_BattleEnemy.md)
* [Window_BattleLog](Window_BattleLog.md)
* [Window_DebugEdit](Window_DebugEdit.md)
* [Window_DebugRange](Window_DebugRange.md)
* [Window_EquipSlot](Window_EquipSlot.md)
* [Window_NameInput](Window_NameInput.md)
* [Window_NumberInput](Window_NumberInput.md)
* [Window_SavefileList](Window_SavefileList.md)
* [Window_ShopBuy](Window_ShopBuy.md)
* [Window_ShopNumber](Window_ShopNumber.md)
* [Window_Status](Window_Status.md)
* [Window_BattleStatus](Window_BattleStatus.md)
    * [Window_BattleActor](Window_BattleActor.md)
* [Window_MenuStatus](Window_MenuStatus.md)
    * [Window_MenuActor](Window_MenuActor.md)
* [Window_SkillList](Window_SkillList.md)
    * [Window_BattleSkill](Window_BattleSkill.md)
* [Window_ItemList](Window_ItemList.md)
    * [Window_BattleItem](Window_BattleItem.md)
    * [Window_EquipItem](Window_EquipItem.md)
    * [Window_EventItem](Window_EventItem.md)
    * [Window_ShopSell](Window_ShopSell.md)
* [Window_Command](Window_Command.md) → [Extends](index.md#コマンドウィンドウwindow_command)


#### コマンドウィンドウ(Window_Command)

* [Window_ActorCommand](Window_ActorCommand.md)
* [Window_ChoiceList](Window_ChoiceList.md)
* [Window_GameEnd](Window_GameEnd.md)
* [Window_MenuCommand](Window_MenuCommand.md)
* [Window_Options](Window_Options.md)
* [Window_PartyCommand](Window_PartyCommand.md)
* [Window_SkillType](Window_SkillType.md)
* [Window_TitleCommand](Window_TitleCommand.md)
* [Window_HorzCommand](Window_HorzCommand.md)
    * [Window_EquipCommand](Window_EquipCommand.md)
    * [Window_ItemCategory](Window_ItemCategory.md)
    * [Window_ShopCommand](Window_ShopCommand.md)
