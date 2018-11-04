# Class: SceneManager

## SceneManager ()

#### new SceneManager ()

 シーン遷移を管理する静的クラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_scene` | [Scene_Base](Scene_Base.html) | [static]現在のシーン |
| `_nextScene` | [Scene_Base](Scene_Base.html) | [static]次のシーン |
| `_stack` | [Array](Array.html).<function()> | [static]シーンなどの履歴 |
| `_stopped` | Boolean | [static] |
| `_sceneStarted` | Boolean | [static] |
| `_exiting` | Boolean | [static] |
| `_previousClass` | function | [static]前のシーンなど |
| `_backgroundBitmap` | [Bitmap](Bitmap.html) | [static] |
| `_screenWidth` | [Number](Number.html) | [static]画面の幅(ピクセル) |
| `_screenHeight` | [Number](Number.html) | [static]画面の高さ(ピクセル) |
| `_boxWidth` | [Number](Number.html) | [static]幅(ピクセル) |
| `_boxHeight` | [Number](Number.html) | [static]高さ(ピクセル) |
| `_deltaTime` | [Number](Number.html) | [static] |
| `_currentTime` | [Number](Number.html) | [static] |
| `_accumulator` | [Number](Number.html) | [static] |

<dl>
</dl>

### Methods

#### (static) _getTimeInMsWithoutMobileSafari ()

Gets the current time in ms without on iOS Safari.
<dl>
</dl>

#### (static) backgroundBitmap () → {[Bitmap](Bitmap.html)}

 生成された背景用に(ぼかした)スナップショットを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) catchException (e)

 例外を受け取るハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event |  |

<dl>
</dl>

#### (static) changeScene ()

 シーンの切り替え。
<dl>
</dl>

#### (static) checkFileAccess ()

 ファイル操作ができない環境ならエラーを発生させる。
<dl>
</dl>

#### (static) checkPluginErrors ()

 プラグインの検査。
<dl>
</dl>

#### (static) checkWebGL ()

WebGL が使えない環境ならエラーを発生させる。
<dl>
</dl>

#### (static) clearStack ()

 履歴を消去。
<dl>
</dl>

#### (static) exit ()

 シーン遷移を終了。
<dl>
</dl>

#### (static) goto (sceneClass)

 指定したシーンに遷移。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | Object |  |

<dl>
</dl>

#### (static) initAudio ()

 音声の初期化。
<dl>
</dl>

#### (static) initGraphics ()

 画像の初期化。
<dl>
</dl>

#### (static) initialize ()

 初期化。
<dl>
</dl>

#### (static) initInput ()

 入力の初期化。
<dl>
</dl>

#### (static) initNwjs ()

NW.js の初期化。
<dl>
</dl>

#### (static) isCurrentSceneBusy () → {Boolean}

 シーンの実行中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isCurrentSceneStarted () → {Boolean}

 現在のシーンが開始されているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isNextScene (sceneClass) → {Boolean}

 指定したシーンが次のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isPreviousScene (sceneClass) → {Boolean}

 指定したシーンが前のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isSceneChanging () → {Boolean}

 シーンの変更中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) onError (e)

 エラーハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event |  エラーイベント |

<dl>
</dl>

#### (static) onKeyDown (event)

 キー押下イベントハンドラ。ここではリロード(F5)とデバッグウィンドウ(F8)の制御を行なっている。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent |  |

<dl>
</dl>

#### (static) onSceneCreate ()

 シーンが生成された時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) onSceneLoading ()

 シーンが読み込まれる時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) onSceneStart ()

 シーンが開始された時に呼ばれるハンドラ。
<dl>
</dl>

#### (static) pop ()

 履歴からシーンを取り出して遷移。
<dl>
</dl>

#### (static) preferableRendererType () → {[String](String.html)}

 環境に適したレンダ方式を返す。
<dl>
</dl>

##### Returns:

 レンダ方式(canvas, webgl, auto のいずれか)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) prepareNextScene ()

 次のシーンの準備。
<dl>
</dl>

#### (static) push (sceneClass)

 指定したシーンに遷移し履歴を残す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.html) |  |

<dl>
</dl>

#### (static) renderScene ()

 シーンの描画。
<dl>
</dl>

#### (static) requestUpdate ()

 アップデートを要求。
<dl>
</dl>

#### (static) resume ()

 停止状態から復帰。
<dl>
</dl>

#### (static) run (sceneClass)

 指定したシーンの実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.html) |  シーンオブジェクト |

<dl>
</dl>

#### (static) setupErrorHandlers ()

 エラーハンドラを準備。
<dl>
</dl>

#### (static) shouldUseCanvasRenderer () → {Boolean}

canvas レンダ方式を使っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) snap () → {[Bitmap](Bitmap.html)}

 スナップショットを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) snapForBackground ()

 背景用に(ぼかした)スナップショットを生成。
<dl>
</dl>

#### (static) stop ()

 シーン遷移を停止。
<dl>
</dl>

#### (static) terminate ()

 終了。
<dl>
</dl>

#### (static) tickEnd ()

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

#### (static) tickStart ()

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

#### (static) update ()

 フレーム毎のアップデート。
<dl>
</dl>

#### (static) updateInputData ()

 入力データのアップデート。
<dl>
</dl>

#### (static) updateMain ()

 主要部分のアップデート。
<dl>
</dl>

#### (static) updateManagers ()

 マネージャのアップデート。
<dl>
</dl>

#### (static) updateScene ()

 シーンのアップデート。
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
