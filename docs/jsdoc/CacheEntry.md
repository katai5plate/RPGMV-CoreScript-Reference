# Class: CacheEntry

### new CacheEntry (cache, key, item)
The resource class. Allows to be collected as a garbage if not use for some time or ticks

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | resource manager |
| `key` | [String](String.md) | url of the resource |
| `item` | [String](String.md) | Bitmap, HTML5Audio, WebAudio - whatever you want to store in the cache |


### Methods

#### allocate () → {[CacheEntry](CacheEntry.md)}
Allocates the resource

#### free (byTTL opt)
frees the resource

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `byTTL` | Boolean | <optional> |  |


#### isStillAlive () → {Boolean}



#### setTimeToLive (ticks opt, seconds opt) → {[CacheEntry](CacheEntry.md)}
Sets the time to live

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `ticks` | [Number](Number.md) | <optional> | TTL in ticks, 0 if not set |
| `seconds` | [Number](Number.md) | <optional> | TTL in seconds, 0 if not set |


#### touch ()
makes sure that resource wont freed by Time To Live if resource was already freed by TTL, put it in cache again