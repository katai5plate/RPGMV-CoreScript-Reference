# Class: Utils
The static class that defines utility methods.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `RPGMAKER_NAME` | [String](String.md) | [static] The name of the RPG Maker. 'MV' in the current version. |
| `RPGMAKER_VERSION` | [String](String.md) | [static] The version of the RPG Maker. |


### Methods

#### (static) canReadGameFiles () → {Boolean}
Checks whether the browser can read files in the game folder.

#### (static) generateRuntimeId () → {[Number](Number.md)}



#### (static) isAndroidChrome () → {Boolean}Checks whether the browser is Android Chrome.

#### (static) isMobileDevice () → {Boolean}Checks whether the platform is a mobile device.

#### (static) isMobileSafari () → {Boolean}Checks whether the browser is Mobile Safari.

#### (static) isNwjs () → {Boolean}Checks whether the platform is NW.js.

#### (static) isOptionValid (name) → {Boolean}Checks whether the option is in the query string.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | The option name |


#### (static) isSupportPassiveEvent () → {Boolean}Test this browser support passive event feature

#### (static) rgbToCssColor (r, g, b) → {[String](String.md)}Makes a CSS color string from RGB values.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | The red value in the range (0, 255) |
| `g` | [Number](Number.md) | The green value in the range (0, 255) |
| `b` | [Number](Number.md) | The blue value in the range (0, 255) |



