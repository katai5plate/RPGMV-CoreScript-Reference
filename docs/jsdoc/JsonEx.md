# Class: JsonEx
JSONファイルを扱うための静的クラス。

Namespace [RPG](RPG.md) に分類しているのがJSONデータ。

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `maxDepth` | [Number](Number.md) | [static] The maximum depth of objects(default:100) |


### Methods

#### (static) _decode (value, circular, registry) → {Object}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object |  |
| `circular` | [Array](Array.md) |  |
| `registry` | Object |  |


#### (static) _encode (value, circular, depth) → {Object}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object |  |
| `circular` | [Array](Array.md) |  |
| `depth` | [Number](Number.md) |  |



#### (static) _getConstructorName (value) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object |  |


#### (static) _resetPrototype (value, prototype) → {Object}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object |  |
| `prototype` | Object |  |


#### (static) makeDeepCopy (object) → {Object}
Makes a deep copy of the specified object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | The object to be copied |


#### (static) parse (json) → {Object}
Parses a JSON string and reconstructs the corresponding object.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `json` | [String](String.md) | The JSON string |


#### (static) stringify (object) → {[String](String.md)}
Converts an object to a JSON string with object information.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | The object to be converted |

