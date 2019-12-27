# Class: CacheMap

### new CacheMap (manager)

Cache for images, audio, or any other kind of resource

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `manager` | [ImageManager](ImageManager.md) |  |


### Methods

#### (static) clear ()
clear

#### checkTTL ()
checks ttl of all elements and removes dead ones

#### getItem (key) → {*|null}
cache item

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` |  | url of cache element |


#### setItem (key, item) → {[CacheEntry](CacheEntry.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) |  |
| `item` | [String](String.md) |  |


#### update (ticks, delta)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `ticks` | [Number](Number.md) |  |
| `delta` | [Number](Number.md) |  |
