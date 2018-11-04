# Class: WebAudio

## WebAudio (url)

#### new WebAudio (url)

The audio object of Web Audio API.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | The url of the audio file |

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | [read-only] The url of the audio file. |
| `volume` | [Number](Number.md) | The volume of the audio. |
| `pitch` | [Number](Number.md) | The pitch of the audio. |
| `pan` | [Number](Number.md) | The pan of the audio. |
| `_context` | AudioContext |  |
| `_masterGainNode` | GainNode |  |
| `_initialized` | Boolean |  |
| `_unlocked` | Boolean |  |

<dl>
</dl>

### Members

#### (static) _standAlone

<dl>
</dl>

### Methods

#### (static) _connectNodes ()

<dl>
</dl>

#### (static) _createContext ()

<dl>
</dl>

#### (static) _createEndTimer ()

<dl>
</dl>

#### (static) _createMasterGainNode ()

<dl>
</dl>

#### (static) _createNodes ()

<dl>
</dl>

#### (static) _detectCodecs ()

<dl>
</dl>

#### (static) _fadeIn (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _fadeOut (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _load (url)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |

<dl>
</dl>

#### (static) _onHide ()

<dl>
</dl>

#### (static) _onLoad ()

<dl>
</dl>

#### (static) _onShow ()

<dl>
</dl>

#### (static) _onTouchStart ()

<dl>
</dl>

#### (static) _onVisibilityChange ()

<dl>
</dl>

#### (static) _onXhrLoad (xhr)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xhr` | XMLHttpRequest |  |

<dl>
</dl>

#### (static) _readBigEndian (array, index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _readFourCharacters (array, index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _readLittleEndian (array, index)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _readLoopComments (array)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |

<dl>
</dl>

#### (static) _readMetaData (array, index, size)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |
| `size` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _readMp4 (array)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |

<dl>
</dl>

#### (static) _readOgg (array)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | Uint8Array |  |

<dl>
</dl>

#### (static) _removeEndTimer ()

<dl>
</dl>

#### (static) _removeNodes ()

<dl>
</dl>

#### (static) _setupEventHandlers ()

<dl>
</dl>

#### (static) _shouldMuteOnHide ()

<dl>
</dl>

#### (static) _startPlaying (loop, offset)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean |  |
| `offset` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) _updatePanner ()

<dl>
</dl>

#### (static) canPlayM4a () → {Boolean}


Checks whether the browser can play m4a files.
<dl>
</dl>

##### Returns:


True if the browser can play m4a files
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canPlayOgg () → {Boolean}


Checks whether the browser can play ogg files.
<dl>
</dl>

##### Returns:


True if the browser can play ogg files
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) initialize (noAudio) → {Boolean}


Initializes the audio system.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `noAudio` | Boolean | Flag for the no-audio mode |

<dl>
</dl>

##### Returns:


True if the audio system is available
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) setMasterVolume (value)

[Number](Number.md)
Sets the master volume of the all audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | Master volume (min: 0, max: 1) |

<dl>
</dl>

#### addLoadListener (listner)


Add a callback function that will be called when the audio data is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
</dl>

#### addStopListener (listner)


Add a callback function that will be called when the playback is stopped.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |

<dl>
</dl>

#### clear ()


Clears the audio data.
<dl>
</dl>[Number](Number.md)

#### fadeIn (duration)


Performs the audio fade-in.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-in time in seconds |

<dl>[Number](Number.md)
</dl>

#### fadeOut (duration)


Performs the audio fade-out.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-out time in seconds |

<dl>
</dl>

#### initialize ()


 オブジェクト生成時の初期化。
<dl>
</dl>

#### isError () → {Boolean}


Checks whether a loading error has occurred.
<dl>
</dl>

##### Returns:


True if a loading error has occurred
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPlaying () → {Boolean}


Checks whether the audio is playing.
<dl>
</dl>

##### Returns:


True if the audio is playing
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}


Checks whether the audio data is ready to play.
<dl>
</dl>

##### Returns:
[Number](Number.md)

True if the audio data is ready to play
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### play (loop, offset)


Plays the audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean | Whether the audio data play in a loop |
| `offset` | [Number](Number.md) | The start position to play in seconds |

<dl>
</dl>

#### seek ()


Gets the seek position of the audio.
<dl>
</dl>

#### stop ()


Stops the audio.
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
