# Class: StorageManager

The static class that manages storage for saving game data.
<dl>
</dl>

### Methods

#### (static) backup (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) backupExists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) cleanBackup (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) exists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isLocalMode () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) load (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) loadFromLocalBackupFile (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) loadFromLocalFile (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) loadFromWebStorage (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) loadFromWebStorageBackup (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) localFileBackupExists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) localFileDirectoryPath () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) localFileExists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) localFilePath (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) remove (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) removeLocalFile (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) removeWebStorage (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) restoreBackup (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) save (savefileId, json)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |
| `json` | [String](String.md) |  |

<dl>
</dl>

#### (static) saveToLocalFile (savefileId, json)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |
| `json` | [String](String.md) |  |

<dl>
</dl>

#### (static) saveToWebStorage (savefileId, json)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |
| `json` | [String](String.md) |  |

<dl>
</dl>

#### (static) webStorageBackupExists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) webStorageExists (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) webStorageKey (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
