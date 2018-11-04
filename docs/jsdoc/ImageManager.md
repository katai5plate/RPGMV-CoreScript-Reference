# Class: ImageManager

## ImageManager ()

#### new ImageManager ()

The static class that loads images, creates bitmap objects and retains them.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | [static] |
| `cache` | [CacheMap](CacheMap.md) | [static] |
| `_imageCache` | [ImageCache](ImageCache.md) | [static] |
| `_requestQueue` | [RequestQueue](RequestQueue.md) | [static] |
| `_systemReservationId` | [Number](Number.md) | [static] |

<dl>
</dl>

### Methods

#### (static) clear ()

Clears the image cache in RPGMakerMV.
<dl>
</dl>

#### (static) clearRequest ()

<dl>
</dl>

#### (static) isBigCharacter (filename) → {Boolean}

Returns true if the given filename is a large character. Must contain a '$' in the file name to be a large character.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isObjectCharacter (filename) → {Boolean}

Returns true if the given filename is an object character. Must contain a '!' in the file name to be an object character.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isReady () → {Boolean}

Returns true if the image cache is ready.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isZeroParallax (filename) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadAnimation (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/animations/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadBattleback1 (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/battlebacks1/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadBattleback2 (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/battlebacks2/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadBitmap (folder, filename, hue, smooth) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from any folder and returns it.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) |  |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `smooth` | Boolean |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadCharacter (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/characters/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadEmptyBitmap (path, hue) → {[Bitmap](Bitmap.md)}

Loads an empty Bitmap object and returns it.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/enemies/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadFace (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/faces/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object given a path and returns it.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadParallax (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/parallaxes/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadPicture (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/pictures/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadSvActor (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/sv_actors/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadSvEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/sv_enemies/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadSystem (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from 'img/system/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadTileset (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/tilesets/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadTitle1 (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/titles1/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) loadTitle2 (filename, hue opt) → {[Bitmap](Bitmap.md)}

Loads a Bitmap object from the 'img/titles2/' folder and returns it.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  |  |
| `hue` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) releaseReservation (reservationId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) requestAnimation (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestBattleback1 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestBattleback2 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestBitmap (folder, filename, hue, smooth) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) |  |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `smooth` | Boolean |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestCharacter (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestEnemy (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestFace (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestParallax (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestPicture (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestSvActor (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestSvEnemy (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestSystem (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestTileset (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestTitle1 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) requestTitle2 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveAnimation (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveBattleback1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveBattleback2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveBitmap (folder, filename, hue, smooth, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) |  |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `smooth` | Boolean |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveCharacter (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveFace (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveNormalBitmap (path, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveParallax (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reservePicture (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveSvActor (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveSvEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveSystem (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveTileset (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveTitle1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) reserveTitle2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) |  |
| `hue` | [Number](Number.md) |  |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Bitmap</a></span>
                </dd>
            </dl>

#### (static) setDefaultReservationId (reservationId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) update ()

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
