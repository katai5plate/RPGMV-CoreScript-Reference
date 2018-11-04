/*  jsdoc -c conf.json */

/**
 * RPGツクールMV プラグイン設定( js/plugins.js )の配列。
 * @var $plugins
 * @type {Array<MV.PluginSettings>} 
 * @global
 */


 /**
 * 主に dataフォルダ以下の JSONファイル(.json)の構造を表すデータ群。
 * @namespace RPG
 */



/**
 * 多くのデータに含まれる基礎的データ。
 * {@link RPG.Actor}, {@link RPG.Animation}, {@link RPG.Animation.Timing}, {@link RPG.Class}, {@link RPG.Class.Learning}, {@link RPG.Enemy}, {@link RPG.Event}, {@link RPG.BaseItem}, {@link RPG.Map}, {@link RPG.State}, {@link RPG.Tileset} のスーパークラス。
 * @class RPG.MetaData
 * @abstract
 * @prop {String} note [メモ]の内容
 * @prop {Object} meta note に<名前:データ> の形で入っているデータを、data.mata = {名前:データ,…}の形に変換したもの。
 */
 


/**
 * アクター用JSON( data/Actors.json )のデータ構造。
 * 配列として定義された大域変数 {@link $dataActors} を介して扱う。
 * @class  RPG.Actor
 * @extends RPG.MetaData
 * @prop {Number} id ID
 * @prop {String} name [名前]
 * @prop {String} nickname [二つ名]
 * @prop {Number} classId [クラス]ID
 * @prop {Number} initialLevel [初期レベル]
 * @prop {Number} maxLevel [最大レベル]
 * @prop {String} characterName [歩行キャラ]画像ファイル名
 * @prop {Number} characterIndex  8分割された[歩行キャラ]画像のひとつを指定する番号(0 〜 7)
 * @prop {String} faceName [顔]画像のファイル名
 * @prop {Number} faceIndex  8分割された[顔]画像のひとつを指定する番号(0 〜 7)
 * @prop {String} battlerName [[SV]戦闘キャラ]画像ファイル名
 * @prop {Array<Number>} equips [初期装備](装備品 ID の配列)
 * @prop {String} profile [プロフィール]の文
 * @prop {Array<RPG.Trait>} traits [特徴]の配列
 */




/**
 * The JSON data structure of an animation.
 * Define to {@link $dataAnimations} as Array.
 * @class RPG.Animation
 * @extends RPG.MetaData
 * 
 * @prop {Number} id The animation ID.
 * @prop {String} name The animation name.
 * @prop {String} animation1Name The file name of the first animation's graphic.
 * @prop {Number} animation1Hue The adjustment value for the hue of the first animation's graphic (0..360).
 * @prop {String} animation2Name The file name of the second animation's graphic.
 * @prop {Number} animation2Hue The adjustment value for the hue of the second animation's graphic (0..360).
 * @prop {Number} position The base position (0: head, 1: center, 2: feet, 3: screen).
 * @prop {Number} frameMax Number of frames.
 * @prop {Array<Array<Array<Number>>>} frames The three-dimensional array containing the frame contents.
 * @prop {Array<RPG.Animation.Timing>} timings Timing for SE and flash effects. An RPG.Animation.Timing array.

*/


/**
 * The data class for the timing of an animation's SE and flash effects.
 * Define to {@link $dataTiming} as Array.
 * @class RPG.Animation.Timing
 * @extends RPG.MetaData
 * @prop {Number} frame The frame number. 1 less than the number displayed in RPG Maker.
 * @prop {RPG.AudioFile} se The sound effect or SE
 * @prop {Number} flashScope The flash area (0: none, 1: target, 2: screen; 3: hide target).
 * @prop {Array<Number>} flashColor The color of the flash (Color).
 * @prop {Number} flashDuration The duration of the flash.
 */



/**
 * The data class for armor.
 * Define to {@link $dataArmors} as Array.
 * @class RPG.Armor
 * @extends RPG.EquipItem
 * 
 * @prop {Number} atypeId The armor type ID.
 */

 /**
  *  A superclass of {@link RPG.Armor} and {@link RPG.Weapon}.
  * @class RPG.EquipItem
  * @extends RPG.BaseItem
  * 
 * @prop {Number} price The price of the weapon or armor.
 * @prop {Number} etypeId The type of weapon or armor.
         *
         * 0: Weapon
         * 1: Shield
         * 2: Head
         * 3: Body
         * 4: Accessory
 * @prop {Array<Number>} params The amount of parameter change. An array of integers using the following IDs as subscripts:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
 * @prop {Array<RPG.Trait>} traits The array of Trait data.
  */

 /**
 * The data class for audio file.
 * @class RPG.AudioFile
 * 
 * @prop {String} name The sound file name.
 * @prop {Number} pan The pan.
 * @prop {Number} pitch The sound's pitch (50..150). The default value is 100.
 * @prop {Number} volume The sound's volume (0..100). The default values are 100 for BGM and ME and 80 for BGS and SE.
 */

/**
 * The data class for the event page.
 * @class RPG.BattleEventPage
 * @prop {RPG.BattleEventPage.Conditions} conditions The event condition (RPG.EventPage.Condition).
 * @prop {Array<RPG.EventCommand>} list Program contents.
 * @prop {Number} span  Span (0: battle, 1: turn, 2: moment).
 */


/**
 * The data class for the event page conditions.
 * @class RPG.BattleEventPage.Conditions
 * 
 * @prop {Number} actorHp The percentage of actor HP.
 * @prop {Number} actorId The ID of that actor if the [Actor] condition is valid.
 * @prop {Boolean} actorValid The truth value indicating whether the [Actor] condition is valid.
 * @prop {Number} enemyHp The percentage of enemy HP.
 * @prop {Number} enemyIndex The enemy index.
 * @prop {Boolean} enemyValid The truth value indicating whether the [Enemy] condition is valid.
 * @prop {Number} switchId The ID of that switch if the [Switch] condition is valid.
 * @prop {Boolean} switchValid The truth value indicating whether the [Switch] condition is valid.
 * @prop {Number} turnA The turn condition value A.
 * @prop {Number} turnB The turn condition value B.
 * @prop {Boolean} turnEnding The boolean value indicating whether the "turn end" is valid.
 * @prop {Boolean} turnValid The boolean value indicating whether the "turn" is valid.
 */



/**
 * The data class for class.
 * Define to {@link $dataClasses} as Array.
 * @class RPG.Class
 * @extends RPG.MetaData
 * @prop {Number} id The ID.
 * @prop {String} name The name.
 * @prop {Array<Number>} expParams An array of values that decides the experience curve. The subscripts are as follows:
         *
         * 0: Base value
         * 1: Extra value
         * 2: Acceleration A
         * 3: Acceleration B
 * @prop {Array<Array<Number>>} params The parameter development curve. A 2-dimensional array containing ordinary parameters according to level (Table).
         *
         * The format is params[param_id, level], and param_id is assigned as follows:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
 * @prop {Array<RPG.Class.Learning>} learnings The skills to learn. An array of RPG.Class.Learning.
 * @prop {Array<RPG.Trait>} traits The array of Trait data.
 */


/**
 * The data class for a class's [Skills to Learn].
 * @class RPG.Class.Learning
 * @extends RPG.MetaData
 * @prop {Number} level The level.
 * @prop {Number} skillId The ID of the skill to learn.
 */




/**
 * The data class for common events.
 * Define to {@link $dataCommonEvents} as Array.
 * @class RPG.CommonEvent 
 * @prop {Number} id The event ID.
 * @prop {String} name The event name.
 * @prop {Number} trigger The event trigger (0: none, 1: autorun; 2: parallel).
 * @prop {Number} switchId The condition switch ID.
 * @prop {Array<RPG.EventCommand>} list A list of event commands.
 */




/**
 * The data class for damage.
 * @class RPG.Damage
 * @prop {Number} type The type of damage.
         *
         * 0: None
         * 1: HP damage
         * 2: MP damage
         * 3: HP recovery
         * 4: MP recovery
         * 5: HP drain
         * 6: MP drain
 * @prop {Number} elementId The element ID.
 * @prop {String} formula The formula.
 * @prop {Number} variance The degree of variability.
 * @prop {Boolean} critical Critical hit (true/false).
 */




/**
 * The data class for use effects.
 * @class RPG.Effect
 * @prop {Number} code The use effect code.
 * @prop {Number} dataId The ID of data (state, parameter, and so on) according to the type of use effect.
 * @prop {Number} value1 Value 1 set according to the type of use effect.
 * @prop {Number} value2 Value 2 set according to the type of use effect.
 */



 
/**
 * The data class for enemies.
 * Define to {@link $dataEnemys} as Array.
 * @class RPG.Enemy
 * @extends RPG.MetaData
 * @prop {String} battlerName The file name of the enemy's battler graphic.
 * @prop {Number} battlerHue The adjustment value for the battler graphic's hue (0..360).
 * @prop {String} name The name of the enemy in the database.
* @prop {Number} id The ID of the enemy in the database.
* @prop {Array<Number>} params Parameters. An array of integers using the following IDs as subscripts:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
* @prop {Number} exp The enemy's experience.
* @prop {Number} gold The enemy's gold.
* @prop {Array<RPG.Enemy.DropItem>} dropItems The items the enemy drops. An RPG.Enemy.DropItem array.
* @prop {Array<RPG.Enemy.Action>} actions The enemy's action pattern. An array of RPG.Enemy.Action.
*/


/**
 * The JSON data structure of an enemy [Actions].
 * @class RPG.Enemy.Action
 * @prop {Number} skillId The ID of skills to be employed as actions.
 * @prop {Number} conditionType The type of condition.
             *
             * 0: Always
             * 1: Turn No.
             * 2: HP
             * 3: MP
             * 4: State
             * 5: Party Level
             * 6: Switch
 * @prop {Number} conditionParam1 The first parameter of the condition.
 * @prop {Number} conditionParam2 The second parameter of the condition.
 * @prop {Number} rating The action's priority rating (1..10).
 */


/**
 * The data class for enemy [Drop Items].
 * @class RPG.Enemy.DropItem
 * @prop {Number} kind The type of dropped item.
             *
             * 0: None
             * 1: Item
             * 2: Weapon
             * 3: Armor
 * @prop {Number} dataId The ID of the data depending on the type of dropped item (item, weapon, or armor).
 * @prop {Number} denominator N of the probability that the item will be dropped, 1/N.
 */




/**
 * The JSON data structure of a map event.
 * @class RPG.Event
 * @extends RPG.MetaData
 * 
 * @prop {Number} id The event ID.
 * @prop {String} name The event name.
 * @prop {Number} x The event's x-coordinate on the map.
 * @prop {Number} y The event's y-coordinate on the map.
 * @prop {Array<RPG.EventPage>} pages The event pages.
 */




/**
 * The JSON data structure of an event command.
 * @class RPG.EventCommand
 * @prop {Number} code The event code.
 * @prop {Number} indent The indent depth. Usually 0. The [Conditional Branch] command, among others, adds 1 with every step deeper.
 * @prop {Array<*>} parameters An array containing the Event command's arguments. The contents vary for each command.
 */




/**
 * The JSON data structure of an event page.
 * @class RPG.EventPage
 * 
 * @prop {RPG.EventPage.Conditions} conditions The event condition (RPG.EventPage.Condition).
 * @prop {RPG.EventPage.Image} image The event graphic (RPG.EventPage.Image) .
 * @prop {Number} moveType The type of movement (0: fixed, 1: random, 2: approach, 3: custom).
 * @prop {Number} moveSpeed The movement speed (1: x8 slower, 2: x4 slower, 3: x2 slower, 4: normal, 5: x2 faster, 6: x4 faster)
 * @prop {Number} moveFrequency The movement frequency (1: lowest, 2: lower, 3: normal, 4: higher, 5: highest).
 * @prop {Array<RPG.MoveRoute>} moveRoute The movement route (RPG.MoveRoute). Referenced only when the movement type is set to custom.
 * @prop {Boolean} walkAnime* The truth value of the [Walking Animation] option.
 * @prop {Boolean} stepAnime The truth value of the [Stepping Animation] option.
 * @prop {Boolean} directionFix The truth value of the [Direction Fix] option.
 * @prop {Boolean} through The truth value of the [Through] option.
 * @prop {Number} priorityType The priority type (0: below characters, 1: same as characters, 2: above characters).
 * @prop {Number} trigger The event trigger (0: action button, 1: player touch, 2: event touch, 3: autorun, 4: parallel).
 * @prop {Array<RPG.EventCommand>} list A list of event commands. 
 */


/**
 * The JSON data structure of an event page.
 * @class RPG.EventPage.Conditions
 * 
 * @prop {Boolean} switch1Valid The truth value indicating whether the first [Switch] condition is valid.
 * @prop {Boolean} switch2Valid The truth value indicating whether the second [Switch] condition is valid.
 * @prop {Boolean} variableValid The truth value indicating whether the [Variable] condition is valid.
 * @prop {Boolean} selfSwitchValid The truth value indicating whether the [Self Switch] condition is valid.
 * @prop {Boolean} itemValid The truth value indicating whether the [Item] condition is valid.
 * @prop {Boolean} actorValid The truth value indicating whether the [Actor] condition is valid.
 * @prop {Number} switch1Id The ID of that switch if the first [Switch] condition is valid.
 * @prop {Number} variableId The ID of that variable if the [Variable] condition is valid.
 * @prop {Number} variableValue The standard value of that variable (x and greater) if the [Variable] condition is valid.
 * @prop {String} selfSwitchCh The letter of that self switch ("A".."D") if the [Self Switch] condition is valid.
 * @prop {Number} itemId The ID of that item if the [Item] condition is valid.
 * @prop {Number} actorId The ID of that actor if the [Actor] condition is valid.
 */


/**
 * The data class for the Event page [Graphics].
 * @class RPG.EventPage.Image
 * @prop {Number} tileId The tile ID. If the specified graphic is not a tile, this value is 0.
 * @prop {String} characterName The file name of the character's graphic.
 * @prop {Number} characterIndex The index of the character's graphic file (0..7).
 * @prop {Number} direction The direction in which the character is facing (2: down, 4: left, 6: right, 8: up).
 * @prop {Number} pattern The character's pattern (0..2).
 */




/**
     * A superclass of actor, class, {@link RPG.UsableItem}, weapon, armor, enemy, and state.
     *
     * Some items are unnecessary depending on the type of data, but they are included for convenience sake.
 * @class RPG.BaseItem
 * @extends RPG.MetaData
 * 
 * @prop {Number} id The item ID.
 * @prop {String} name The item name.
 * @prop {Number} iconIndex The icon number.
 * @prop {String} description The description text.
 */

/**
     * The Superclass of {@link RPG.Skill} and {@link RPG.Item}
 * @class RPG.UsableItem
 * @extends RPG.BaseItem
 * 
 * @prop {Number} scope The scope of effects.
         *
         * 0: None
         * 1: One Enemy
         * 2: All Enemies
         * 3: One Random Enemy
         * 4: Two Random Enemies
         * 5: Three Random Enemies
         * 6: Four Random Enemies
         * 7: One Ally
         * 8: All Allies
         * 9: One Ally (Dead)
         * 10: All Allies (Dead)
         * 11: The User
 * @prop {Number} occasion When the item/skill may be used.
         *
         * 0: Always
         * 1: Only in battle
         * 2: Only from the menu
         * 3: Never
 * @prop {Number} speed The speed correction.
 * @prop {Number} successRate The success rate.
 * @prop {Number} repeats The number of repeats.
 * @prop {Number} tpGain The number of TP gained.
 * @prop {Number} hitType The type of hit.
         *
         * 0: Certain hit
         * 1: Physical attack
         * 2: Magical attack
 * @prop {Number} animationId The animation ID.
 * @prop {RPG.Damage} damage Damage.
 * @prop {Array<RPG.Effect>} effects A list of use effects. An RPG.Effect array.
 */

/**
 * The JSON data structure of an Item.
 * Define to {@link $dataItems} as Array.
 * @class RPG.Item
 * @extends RPG.UsableItem
 * 
 * @prop {Number} itypeIdThe item type ID.
         *
         * 1: Regular item
         * 2: Key item
 * @prop {Number} price The item's price.
 * @prop {Boolean} consumable The truth value indicating whether the item disappears when used.
 */




/**
 * マップ用JSONのデータ構造。data/MapXXX.json( XXX は3桁の数値)
 * 大域変数の、現在のマップのデータ {@link $dataMap} か Map管理オブジェクト {@link $gameMap} を介して扱う。描画は {@link Tilemap} か {@link ShaderTilemap} で行われる。
 * @class RPG.Map
 * @extends RPG.MetaData
 * 
 * @prop {String} displayName [表示名]
 * @prop {Number} tilesetId [タイルセット]のID
 * @prop {Number} width マップの[幅]
 * @prop {Number} height マップの[高さ]
 * @prop {Number} scrollType [スクロールタイプ] (0: ループしない, 1: 縦方向にループする, 2: 横方向にループする, 3: 縦横共にループする)
 * @prop {Boolean} specifyBattleback [戦闘背景指定]するか
 * @prop {String} battleback1Name レイヤー奥の戦闘背景画像1(地面)のファイル名
 * @prop {String} battleback2Name レイヤー手前の戦闘背景画像2(壁)のファイル名
 * @prop {Boolean} autoplayBgm [BGM自動演奏]するか
 * @prop {RPG.AudioFile} bgm BGMの音声
 * @prop {Boolean} autoplayBgs [BGS自動演奏]するか
 * @prop {RPG.AudioFile} bgs BGSの音声
 * @prop {Boolean} disableDashing [ダッシュ禁止]か
 * @prop {Array<RPG.Map.Encounter>} encounterList [エンカウント]の配列
 * @prop {Number} encounterStep [敵出現歩数]
 * @prop {String} parallaxName [遠景]の画像ファイル名
 * @prop {Boolean} parallaxLoopX [遠景]が[横方向にループする]か
 * @prop {Boolean} parallaxLoopY [遠景]が[縦方向にループする]か
 * @prop {Number} parallaxSx [遠景]が[横方向にループする]場合の[スクロール]量
 * @prop {Number} parallaxSy [遠景]が[縦方向にループする]場合の[スクロール]量
 * @prop {Boolean} parallaxShow [遠景]を[エディターに表示する]か
 * @prop {Array<Number>} data タイルIDの配列によるマップデータ
 * @prop {Array<RPG.Event>} events [イベント]データの配列
 */


/**
 * The JSON data structure of an encounter setting.
 * @class RPG.Map.Encounter
 * 
 * @prop {Number} troopId The enemy troop ID.
 * @prop {Number} weight Weight.
 * @prop {Array<Number>} regionSet An array containing region IDs.
 */





/**
 * The JSON data structure of a map information.
 * Define to {@link $dataMapInfos} as Array.
 * @class RPG.MapInfo
 * 
 * @prop {String} name The map name.
 * @prop {Number} parentId The parent map ID.
 * @prop {Number} order The map tree display order, which is used internally.
 */




/**
 * The JSON data structure of a movement command.
 * @class RPG.MoveCommand
 * 
 * @prop {Number} code Move command code.
 * @prop {Array<*>} parameters An array containing the Move command's arguments. The contents vary for each command.
 */




/**
 * The JSON data structure of a movement route.
 * @class RPG.MoveRoute
 * 
 * @prop {Boolean} repeat The truth value of the [Repeat Action] option.
 * @prop {Boolean} skippable The truth value of the [Skip If Cannot Move] option.
 * @prop {Boolean} wait The truth value of the [Wait for Completion] option.
 * @prop {Array<RPG.MoveCommand>} list Program contents.
 */




/**
 * The JSON data structure of a skill.
 * Define to {@link $dataSkills} as Array.
 * @class RPG.Skill
 * @extends RPG.UsableItem
 * 
 * @prop {Number} stypeId Skill type ID.
 * @prop {Number} mpCost Number of MP consumed.
 * @prop {Number} tpCost Number of TP consumed
 * @prop {String} message1 The use message.
 * @prop {String} message2 The use message.
 * @prop {Number} requiredWtypeId1 Weapon type required.
 * @prop {Number} requiredWtypeId2 Weapon type required.
 */




/**
 * The JSON data structure of a state.
 * Define to {@link $dataStates} as Array.
 * @class RPG.State
 * @extends RPG.MetaData
 * 
 * @prop {Number} id The ID.
 * @prop {String} name The name.
 * @prop {Number} restriction Action restrictions.
         *
         * 0: None
         * 1: Attack enemy
         * 2: Attack enemy or ally
         * 3: Attack ally
         * 4: Cannot act
 * @prop {Number} priority The state priority (0..100).
 * @prop {Boolean} removeAtBattleEnd Removes state at end of battle (true/false).
 * @prop {Boolean} removeByRestriction Removes state by action restriction (true/false).
 * @prop {Number} autoRemovalTiming The timing of automatic state removal.
         *
         * 0: None
         * 1: At end of action
         * 2: At end of turn
 * @prop {Number} minTurns The minimum turns of the duration.
 * @prop {Number} maxTurns The maximum turns of the duration.
 * @prop {Boolean} removeByDamage Removes state by damage (true/false).
 * @prop {Number} chanceByDamage Chance of state being removed by damage (%).
 * @prop {Boolean} removeByWalking Removes state by walking (true/false).
 * @prop {Number} stepToRemove Number of steps until state is removed.
 * @prop {Number} iconIndex The icon number.
 * @prop {String} message1 The message when an actor fell in the state.
 * @prop {String} message2 The message when an enemy fell in the state.
 * @prop {String} message3 The message when the state remains.
 * @prop {String} message4 The message when the state is removed.
 * @prop {Number} motion The side-view motion.
 * @prop {Number} overlay The side-view overlay.
 * @prop {Array<RPG.Trait>} traits The array of Trait data.
 */




/**
 * The JSON data structure of the system.
 * Define to {@link $dataSystem}
 * @class RPG.System
 * 
 * @prop {String} gameTitle The game title.
 * @prop {Number} versionId A random number used for update checks. The number changes every time data is saved in RPG Maker.
 * @prop {String} locale The locale string such as "ja_JP" and "en_US".
 * @prop {Array<Number>} partyMembers The initial party. An array of actor IDs.
 * @prop {String} currencyUnit The unit of currency.
 * @prop {Array<Number>} windowTone The window color.
 * @prop { Array<RPG.System.AttackMotion>} attackMotions The array of System.AttackMotion data.
 * @prop {Array<String>} elements A list of elements. A string array using element IDs as subscripts, with the element in the 0 position being nil.
 * @prop {Array<String>} equipTypes he equipment type. A string array with the following subscripts:
         * 1: Weapon
         * 2: Shield
         * 3: Head
         * 4: Body
         * 5: Accessory
 * @prop {Array<String>}  skillTypes A list of skill types. A string array using skill type IDs as subscripts, with the element in the 0 position being nil.
 * @prop {Array<String>} weaponTypes A list of weapon types. A string array using weapon type IDs as subscripts, with the element in the 0 position being nil.
 * @prop {Array<String>} armorTypes A list of armor types. A string array using armor type IDs as subscripts, with the element in the 0 position being nil.
 * @prop {Array<String>} switches A switch name list. A string array using switch IDs as subscripts, with the element in the 0 position being nil.
 * @prop {Array<String>} variables A variable name list. A string array using variable IDs as subscripts, with the element in the 0 position being nil.
 * @prop {RPG.System.Vehicle} boat Boat settings.
 * @prop {RPG.System.Vehicle} ship Ship settings.
 * @prop {RPG.System.Vehicle} airship Airship settings.
 * @prop {String} title1Name The file name of the title (background) graphic.
 * @prop {String} title2Name The file name of the title (frame) graphic.
 * @prop {Boolean} optDrawTitle The truth value of the [Draw Game Title] option.
 * @prop {Boolean} optTransparent The truth value of the [Start Transparent] option.
 * @prop {Boolean} optFollowers The truth value of the [Show Player Followers] option.
 * @prop {Boolean} optSlipDeath The truth value of the [K.O. by Slip Damage] option.
 * @prop {Boolean} optFloorDeath The truth value of the [K.O. by Floor Damage] option.
 * @prop {Boolean} optDisplayTp The truth value of the [Display TP in Battle] option.
 * @prop {Boolean} optExtraExp The truth value of the [Reserve Members' EXP] option.
 * @prop {Boolean} optSideView The truth value of the [use side-view battle] option.
 * @prop {RPG.AudioFile} titleBgm The title BGM.
 * @prop {RPG.AudioFile} battleBgm The battle BGM.
 * @prop {RPG.AudioFile} battleEndMe The battle end ME.
 * @prop {RPG.AudioFile} gameoverMe The gameover ME.
 * @prop {Array<RPG.AudioFile>} sounds Sound effects. An RPG.SE array.
 * @prop {Number} startMapId The map ID of the player's initial position.
 * @prop {Number} startX The map's x-coordinate of the player's initial position.
 * @prop {Number} startY The map's y-coordinate of the player's initial position.
 * @prop {RPG.System.Terms} terms Terms.
 * @prop {Array<RPG.System.TestBattler>} testBattlers Party settings for battle tests.
 * @prop {Number} testTroopId The enemy troop ID for battle tests.
 * @prop {String} battleback1Name The file name of the battle background (floor) graphic for use in editing enemy troops and battle tests.
 * @prop {String} battleback2Name The file name of the battle background (wall) graphic for use in editing enemy troops and battle tests.
 * @prop {String} battlerName The battler graphic file name for use in editing animations.
 * @prop {Number} battlerHue The adjustment value for the battler graphic's hue (0..360) for use in editing animations.
 * @prop {Number} editMapId The ID of the map currently being edited. For internal use.
 */


/**
 * The JSON data structure of an attack motion.
 * @class RPG.System.AttackMotion
 * 
 * @prop {Number} type The type of the motion.
 * @prop {Number} weaponImageId The ID of the weapon image.
 */

/**
 * The JSON data structure of the terminology.
 * @class RPG.System.Terms
 * 
 * @prop {Array<String>} basic The basic status. A string array with the following subscripts:
             * <table>
             * <tr><td>0</td><td>Level</td></tr>
             * <tr><td>1</td><td>Level (short)</td></tr>
             * <tr><td>2</td><td>HP</td></tr>
             * <tr><td>3</td><td>HP (short)</td></tr>
             * <tr><td>4</td><td>MP</td></tr>
             * <tr><td>5</td><td>MP (short)</td></tr>
             * <tr><td>6</td><td>TP</td></tr>
             * <tr><td>7</td><td>TP (short)</td></tr>
             * <tr><td>8</td><td>EXP</td></tr>
             * <tr><td>9</td><td>EXP (short)</td></tr>
             * </table>
 * @prop {Array<String>} paramsParameters. A string array with the following subscripts:
             * 
             * <table>
             * <tr><td>0</td><td>Maximum hit points</td></tr>
             * <tr><td>1</td><td>Maximum magic points</td></tr>
             * <tr><td>2</td><td>Attack power</td></tr>
             * <tr><td>3</td><td>Defense power</td></tr>
             * <tr><td>4</td><td>Magic attack power</td></tr>
             * <tr><td>5</td><td>Magic defense power</td></tr>
             * <tr><td>6</td><td>Agility</td></tr>
             * <tr><td>7</td><td>Luck</td></tr>
             * <tr><td>8</td><td>Hit</td></tr>
             * <tr><td>9</td><td>Evasion</td></tr>
             * </table>
 * @prop {Array<String>} commands
             * <table>
             * <tr><td>0</td><td>Fight</td></tr>
             * <tr><td>1</td><td>Escape</td></tr>
             * <tr><td>2</td><td>Attack</td></tr>
             * <tr><td>3</td><td>Defend</td></tr>
             * <tr><td>4</td><td>Item</td></tr>
             * <tr><td>5</td><td>Skill</td></tr>
             * <tr><td>6</td><td>Equip</td></tr>
             * <tr><td>7</td><td>Status</td></tr>
             * <tr><td>8</td><td>Sort</td></tr>
             * <tr><td>9</td><td>Save</td></tr>
             * <tr><td>10</td><td>Exit Game</td></tr>
             * <tr><td>11</td><td>Option</td></tr>
             * <tr><td>12</td><td>Weapon</td></tr>
             * <tr><td>13</td><td>Armor</td></tr>
             * <tr><td>14</td><td>Key Item</td></tr>
             * <tr><td>15</td><td>Change Equipment</td></tr>
             * <tr><td>16</td><td>Ultimate Equipment</td></tr>
             * <tr><td>17</td><td>Remove All</td></tr>
             * <tr><td>18</td><td>New Game</td></tr>
             * <tr><td>19</td><td>Continue</td></tr>
             * <tr><td>20</td><td>(not used)</td></tr>
             * <tr><td>21</td><td>Go to Title</td></tr>
             * <tr><td>22</td><td>Cancel</td></tr>
             * <tr><td>23</td><td>(not used)</td></tr>
             * <tr><td>24</td><td>Buy</td></tr>
             * <tr><td>25</td><td>Sell</td></tr>
             * </table>
 * @prop {Object} messages The messages.[key: String]: String
 */

/**
 * The JSON data structure of an actor used in battle tests.
 * @class RPG.System.TestBattler 
 * 
 * @prop {Number} actorId The actor ID.
 * @prop {Number} level The actor's level.
 * @prop {Array<Number>} equips The actor's equipment. An array of weapon IDs or armor IDs with the following subscripts:
             *
             * 0: Weapon
             * 1: Shield
             * 2: Head
             * 3: Body
             * 4: Accessory
 */

/**
 * The JSON data structure of a vehicle.
 * @class RPG.System.Vehicle
 * 
 * @prop {String} characterName The file name of the vehicle's walking graphic.
 * @prop {Number} characterIndex The index of the vehicle's walking graphic (0..7).
 * @prop {RPG.AudioFile} bgm The vehicle's BGM.
 * @prop {Number} startMapId The map ID of the vehicle's initial position.
 * @prop {Number} startX The map's x-coordinate of the vehicle's initial position.
 * @prop {Number} startY The map's y-coordinate of the vehicle's initial position.
 */




/**
 * タイルセット用JSON(data/Tilesets.json)のデータ構造。
 * 大域変数 {@link $dataTilesets} に配列として定義されている。
 * 通常は大域変数  {@link $gameMap} に定義してあるマップ管理オブジェクトを介して扱う。
 * @class RPG.Tileset
 * @extends RPG.MetaData
 * 
 * @prop {Number} id タイルセットのID
 * @prop {String} name [名前]
 * @prop {Number} mode [モード] (0: フィールドタイプ, 1: エリアタイプ, 2: VX 互換タイプ)
 * @prop {Array<String>} tilesetNames タイルセットに使われる画像ファイル名の配列<br />(順に 0: TileA1, 1: TileA2, 2: TileA3, 3: TileA4, 4: TileA5, 5: TileB, 6: TileC, 7: TileD, 8: TileE に対応)
 * @prop {Array<Number>} flags タイルの性質を記録したビットフラグの配列
         *
         * <table>
         * <tr><td>0x0001</td><td>下通行不可</td></tr>
         * <tr><td>0x0002</td><td>左通行不可</td></tr>
         * <tr><td>0x0004</td><td>右通行不可</td></tr>
         * <tr><td>0x0008</td><td>上通行不可</td></tr>
         * <tr><td>0x0010</td><td>キャラクタの上に表示[☆]</td></tr>
         * <tr><td>0x0020</td><td>梯子</td></tr>
         * <tr><td>0x0040</td><td>茂み</td></tr>
         * <tr><td>0x0080</td><td>カウンター</td></tr>
         * <tr><td>0x0100</td><td>ダメージ床</td></tr>
         * <tr><td>0x0200</td><td>小型船通行不可</td></tr>
         * <tr><td>0x0400</td><td>大型船通行不可</td></tr>
         * <tr><td>0x0800</td><td>飛行船着地不可</td></tr>
         * <tr><td>0xF000</td><td>地形タグ</td></tr>
         * </table>
 */




/**
 * The JSON data structure of a trait.
 * @class RPG.Trait
 * 
 * @prop {Number} code The trait code.
 * @prop {Number} dataId The ID of the data (such as elements or states) according to the type of the trait.
 * @prop {Number} value The value set according to the type of the trait.
 * @prop {Boolean} expanded The map tree expansion flag, which is used internally.
 * @prop {Number} scrollX The x-axis scroll position, which is used internally.
 * @prop {Number} scrollY The y-axis scroll position, which is used internally.
 */




/**
 * The JSON data structure of a troop.
 * Define to {@link $dataTroops} as Array.
 * @class RPG.Troop
 * 
 * @prop {Number} id The troop ID.
 * @prop {String} name The troop name.
 * @prop {Array<Troop.Member>} members The troop members. 
 * @prop {Array<RPG.BattleEventPage>} pages The battle events.
 */


/**
 * The JSON data structure of a troop member.
 * @class Troop.Member
 * 
 * @prop {Number} enemyId The enemy ID.
 * @prop {Number} x The troop member's x-coordinate.
 * @prop {Number} y The troop member's y-coordinate.
 * @prop {Boolean} hidden The truth value of the [Appear Halfway] option.
 */




/**
 * The JSON data structure of a weapon.
 * Define to {@link $dataWeapons} as Array.
 * @class RPG.Weapon
 * @extends RPG.EquipItem
 * 
 * @prop {Number} wtypeId The weapon type ID.
 * @prop {Number} animationId The animation ID when using the weapon.
*/






/**
 * RPGツクールMVで使われる構造体的なオブジェクト。
 * @namespace MV
 */

/**
 * @class MV.Matrix
 * 
 * @prop {String} type
 * @prop {Array<Number>} value
 */

/**
 * @class MV.TouchInputEvents
 * 
 * @prop {Boolean} trigger
 * @prop {Boolean} cancelled
 * @prop {Boolean} moved
 * @prop {Boolean} released
 * @prop {Number} wheelX
 * @prop {Number} wheelY
 */

/**
 * @class MV.AudioParameters
 * 
 * @prop {String} name
 * @prop {Number} volume
 * @prop {Number} pitch
 * @prop {Number} pan
 * @prop {Number} pos
 */

/**
 * @class MV.BattleRewards
 * 
 * @prop {Number} gold
 * @prop {Number} exp
 * @prop {Array<RPG.BaseItem>} items
  */

/**
 * @class MV.BattlerAnimation
 * @prop {Number} animationId
 * @prop {Boolean} mirror
 * @prop {Number} delay
 */

/**
 * @class MV.CommandItem
 * 
 * @prop {String} name
 * @prop {String} symbol
 * @prop {Boolean} enabled
 * @prop {*} ext
 */


/**
 * @class MV.TextState
 * 
 * @prop {Number} index
 * @prop {Number} x
 * @prop {Number} y
 * @prop {Number} left
 */

/**
 * @class MV.BattleLogMethod
 * 
 * @prop {String} name
 * @prop {*} params
 * 
 */


/**
 * @class MV.Motion
 * 
 * @prop {Number} index
 * @prop {Boolean} loop
 */


/**
 * @class MV.ConfigData
 * 
 * @prop {Boolean} alwaysDash
 * @prop {Boolean} commandRemember
 * @prop {Number} bgmVolume
 * @prop {Number} bgsVolume
 * @prop {Number} meVolume
 * @prop {Number} seVolume
 */


 /**
  * @class MV.DatabaseFile
  * 
 * @prop {String} name
 * @prop {String} src
  */


/**
 * @class MV.SaveFileInfo
 * 
 * @prop {String} globalId
 * @prop {String} title ゲームのタイトル
 * @prop {Array<Array<*>>} characters キャラクタ
 * @prop {Array<Array<*>>} faces 顔
 * @prop {String} playtime プレイ時間
 * @prop {Date} timestamp 現在時刻
 */

/**
 * @class MV.SaveContents
 * 
 * @prop {Game_System} system
 * @prop {Game_Screen} screen
 * @prop {Game_Timer} timer
 * @prop {Game_Switches} switches
 * @prop {Game_Variables} variables
 * @prop {Game_SelfSwitches} selfSwitches
 * @prop {Game_Actors} actors
 * @prop {Game_Party} party
 * @prop {Game_Map} map
 * @prop {Game_Player} player
 */


/**
 * @class MV.PluginSettings
 * 
 * @prop {String} name
 * @prop {String} status
 * @prop {String} description
 * @prop {Object} parameters {[key: string]: string}
 */
