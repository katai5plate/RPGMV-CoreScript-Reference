# Class: System

## [RPG](RPG.md).  System ()

#### new System ()

The JSON data structure of the system. Define to [$dataSystem](global.html#$dataSystem)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `gameTitle` | [String](String.md) | The game title. |
| `versionId` | [Number](Number.md) | A random number used for update checks. The number changes every time data is saved in RPG Maker. |
| `locale` | [String](String.md) | The locale string such as "ja_JP" and "en_US". |
| `partyMembers` | [Array](Array.md).<[Number](Number.md)> | The initial party. An array of actor IDs. |
| `currencyUnit` | [String](String.md) | The unit of currency. |
| `windowTone` | [Array](Array.md).<[Number](Number.md)> | The window color. |
| `attackMotions` | [Array](Array.md).<[RPG.System.AttackMotion](RPG.System.AttackMotion.md)> | The array of System.AttackMotion data. |
| `elements` | [Array](Array.md).<[String](String.md)> | A list of elements. A string array using element IDs as subscripts, with the element in the 0 position being nil. |
| `equipTypes` | [Array](Array.md).<[String](String.md)> | he equipment type. A string array with the following subscripts: 1: Weapon 2: Shield 3: Head 4: Body 5: Accessory |
| `skillTypes` | [Array](Array.md).<[String](String.md)> | A list of skill types. A string array using skill type IDs as subscripts, with the element in the 0 position being nil. |
| `weaponTypes` | [Array](Array.md).<[String](String.md)> | A list of weapon types. A string array using weapon type IDs as subscripts, with the element in the 0 position being nil. |
| `armorTypes` | [Array](Array.md).<[String](String.md)> | A list of armor types. A string array using armor type IDs as subscripts, with the element in the 0 position being nil. |
| `switches` | [Array](Array.md).<[String](String.md)> | A switch name list. A string array using switch IDs as subscripts, with the element in the 0 position being nil. |
| `variables` | [Array](Array.md).<[String](String.md)> | A variable name list. A string array using variable IDs as subscripts, with the element in the 0 position being nil. |
| `boat` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | Boat settings. |
| `ship` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | Ship settings. |
| `airship` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | Airship settings. |
| `title1Name` | [String](String.md) | The file name of the title (background) graphic. |
| `title2Name` | [String](String.md) | The file name of the title (frame) graphic. |
| `optDrawTitle` | Boolean | The truth value of the [Draw Game Title] option. |
| `optTransparent` | Boolean | The truth value of the [Start Transparent] option. |
| `optFollowers` | Boolean | The truth value of the [Show Player Followers] option. |
| `optSlipDeath` | Boolean | The truth value of the [K.O. by Slip Damage] option. |
| `optFloorDeath` | Boolean | The truth value of the [K.O. by Floor Damage] option. |
| `optDisplayTp` | Boolean | The truth value of the [Display TP in Battle] option. |
| `optExtraExp` | Boolean | The truth value of the [Reserve Members' EXP] option. |
| `optSideView` | Boolean | The truth value of the [use side-view battle] option. |
| `titleBgm` | [RPG.AudioFile](RPG.AudioFile.md) | The title BGM. |
| `battleBgm` | [RPG.AudioFile](RPG.AudioFile.md) | The battle BGM. |
| `battleEndMe` | [RPG.AudioFile](RPG.AudioFile.md) | The battle end ME. |
| `gameoverMe` | [RPG.AudioFile](RPG.AudioFile.md) | The gameover ME. |
| `sounds` | [Array](Array.md).<[RPG.AudioFile](RPG.AudioFile.md)> | Sound effects. An RPG.SE array. |
| `startMapId` | [Number](Number.md) | The map ID of the player's initial position. |
| `startX` | [Number](Number.md) | The map's x-coordinate of the player's initial position. |
| `startY` | [Number](Number.md) | The map's y-coordinate of the player's initial position. |
| `terms` | [RPG.System.Terms](RPG.System.Terms.md) | Terms. |
| `testBattlers` | [Array](Array.md).<[RPG.System.TestBattler](RPG.System.TestBattler.md)> | Party settings for battle tests. |
| `testTroopId` | [Number](Number.md) | The enemy troop ID for battle tests. |
| `battleback1Name` | [String](String.md) | The file name of the battle background (floor) graphic for use in editing enemy troops and battle tests. |
| `battleback2Name` | [String](String.md) | The file name of the battle background (wall) graphic for use in editing enemy troops and battle tests. |
| `battlerName` | [String](String.md) | The battler graphic file name for use in editing animations. |
| `battlerHue` | [Number](Number.md) | The adjustment value for the battler graphic's hue (0..360) for use in editing animations. |
| `editMapId` | [Number](Number.md) | The ID of the map currently being edited. For internal use. |

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
