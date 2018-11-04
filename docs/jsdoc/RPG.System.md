# Class: System

## [RPG](RPG.html).  System ()

#### new System ()

The JSON data structure of the system. Define to [$dataSystem](global.html#$dataSystem)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `gameTitle` | [String](String.html) | The game title. |
| `versionId` | [Number](Number.html) | A random number used for update checks. The number changes every time data is saved in RPG Maker. |
| `locale` | [String](String.html) | The locale string such as "ja_JP" and "en_US". |
| `partyMembers` | [Array](Array.html).<[Number](Number.html)> | The initial party. An array of actor IDs. |
| `currencyUnit` | [String](String.html) | The unit of currency. |
| `windowTone` | [Array](Array.html).<[Number](Number.html)> | The window color. |
| `attackMotions` | [Array](Array.html).<[RPG.System.AttackMotion](RPG.System.AttackMotion.html)> | The array of System.AttackMotion data. |
| `elements` | [Array](Array.html).<[String](String.html)> | A list of elements. A string array using element IDs as subscripts, with the element in the 0 position being nil. |
| `equipTypes` | [Array](Array.html).<[String](String.html)> | he equipment type. A string array with the following subscripts: 1: Weapon 2: Shield 3: Head 4: Body 5: Accessory |
| `skillTypes` | [Array](Array.html).<[String](String.html)> | A list of skill types. A string array using skill type IDs as subscripts, with the element in the 0 position being nil. |
| `weaponTypes` | [Array](Array.html).<[String](String.html)> | A list of weapon types. A string array using weapon type IDs as subscripts, with the element in the 0 position being nil. |
| `armorTypes` | [Array](Array.html).<[String](String.html)> | A list of armor types. A string array using armor type IDs as subscripts, with the element in the 0 position being nil. |
| `switches` | [Array](Array.html).<[String](String.html)> | A switch name list. A string array using switch IDs as subscripts, with the element in the 0 position being nil. |
| `variables` | [Array](Array.html).<[String](String.html)> | A variable name list. A string array using variable IDs as subscripts, with the element in the 0 position being nil. |
| `boat` | [RPG.System.Vehicle](RPG.System.Vehicle.html) | Boat settings. |
| `ship` | [RPG.System.Vehicle](RPG.System.Vehicle.html) | Ship settings. |
| `airship` | [RPG.System.Vehicle](RPG.System.Vehicle.html) | Airship settings. |
| `title1Name` | [String](String.html) | The file name of the title (background) graphic. |
| `title2Name` | [String](String.html) | The file name of the title (frame) graphic. |
| `optDrawTitle` | Boolean | The truth value of the [Draw Game Title] option. |
| `optTransparent` | Boolean | The truth value of the [Start Transparent] option. |
| `optFollowers` | Boolean | The truth value of the [Show Player Followers] option. |
| `optSlipDeath` | Boolean | The truth value of the [K.O. by Slip Damage] option. |
| `optFloorDeath` | Boolean | The truth value of the [K.O. by Floor Damage] option. |
| `optDisplayTp` | Boolean | The truth value of the [Display TP in Battle] option. |
| `optExtraExp` | Boolean | The truth value of the [Reserve Members' EXP] option. |
| `optSideView` | Boolean | The truth value of the [use side-view battle] option. |
| `titleBgm` | [RPG.AudioFile](RPG.AudioFile.html) | The title BGM. |
| `battleBgm` | [RPG.AudioFile](RPG.AudioFile.html) | The battle BGM. |
| `battleEndMe` | [RPG.AudioFile](RPG.AudioFile.html) | The battle end ME. |
| `gameoverMe` | [RPG.AudioFile](RPG.AudioFile.html) | The gameover ME. |
| `sounds` | [Array](Array.html).<[RPG.AudioFile](RPG.AudioFile.html)> | Sound effects. An RPG.SE array. |
| `startMapId` | [Number](Number.html) | The map ID of the player's initial position. |
| `startX` | [Number](Number.html) | The map's x-coordinate of the player's initial position. |
| `startY` | [Number](Number.html) | The map's y-coordinate of the player's initial position. |
| `terms` | [RPG.System.Terms](RPG.System.Terms.html) | Terms. |
| `testBattlers` | [Array](Array.html).<[RPG.System.TestBattler](RPG.System.TestBattler.html)> | Party settings for battle tests. |
| `testTroopId` | [Number](Number.html) | The enemy troop ID for battle tests. |
| `battleback1Name` | [String](String.html) | The file name of the battle background (floor) graphic for use in editing enemy troops and battle tests. |
| `battleback2Name` | [String](String.html) | The file name of the battle background (wall) graphic for use in editing enemy troops and battle tests. |
| `battlerName` | [String](String.html) | The battler graphic file name for use in editing animations. |
| `battlerHue` | [Number](Number.html) | The adjustment value for the battler graphic's hue (0..360) for use in editing animations. |
| `editMapId` | [Number](Number.html) | The ID of the map currently being edited. For internal use. |

<dl>
</dl>

### Classes

<dl>
                    <dt><a>AttackMotion</a></dt>
                    <dd></dd>
                    <dt><a>Terms</a></dt>
                    <dd></dd>
                    <dt><a>TestBattler</a></dt>
                    <dd></dd>
                    <dt><a>Vehicle</a></dt>
                    <dd></dd>
                </dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
