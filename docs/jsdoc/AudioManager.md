# Class: AudioManager

The static class that handles BGM, BGS, ME and SE.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `masterVolume` | [Number](Number.md) | [static] |
| `bgmVolume` | [Number](Number.md) | [static] |
| `bgsVolume` | [Number](Number.md) | [static] |
| `meVolume` | [Number](Number.md) | [static] |
| `seVolume` | [Number](Number.md) | [static] |
| `_bgmVolume` | [Number](Number.md) | [static] |
| `_bgsVolume` | [Number](Number.md) | [static] |
| `_meVolume` | [Number](Number.md) | [static] |
| `_seVolume` | [Number](Number.md) | [static] |
| `_currentBgm` | [MV.AudioParameters](MV.AudioParameters.md) | [static] |
| `_currentBgs` | [MV.AudioParameters](MV.AudioParameters.md) | [static] |
| `_bgmBuffer` | Html5AudioStatic | [WebAudio](WebAudio.md) | [static] |
| `_bgsBuffer` | Html5AudioStatic | [WebAudio](WebAudio.md) | [static] |
| `_meBuffer` | Html5AudioStatic | [WebAudio](WebAudio.md) | [static] |
| `_seBuffers` | [Array](Array.md).<(Html5AudioStatic| [WebAudio](WebAudio.md))> | [static] |
| `_replayFadeTime` | [Array](Array.md).<(Html5AudioStatic| [WebAudio](WebAudio.md))> | [static] |
| `_path` | [String](String.md) | [static] |
| `_blobUrl` | [String](String.md) | [static] |

<dl>
</dl>

### Methods

#### (static) audioFileExt () → {[String](String.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### (static) checkErrors ()

<dl>
</dl>

#### (static) checkWebAudioError (webAudio)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `webAudio` | Html5AudioStatic | [WebAudio](WebAudio.md) |  |

<dl>
</dl>

#### (static) createBuffer () → {Html5AudioStatic|[WebAudio](WebAudio.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Html5AudioStatic</span> | <span><a>WebAudio</a></span>
                </dd>
            </dl>

#### (static) createDecryptBuffer (url, bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `url` | [String](String.md) |  |  |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |  |
| `pos` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

#### (static) fadeInBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) fadeInBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) fadeOutBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) fadeOutBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) fadeOutMe (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) isCurrentBgm (bgm) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isCurrentBgs (bgs) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isStaticSe (se) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadStaticSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) makeEmptyAudioObject () → {[MV.AudioParameters](MV.AudioParameters.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) playBgm (bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |  |
| `pos` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

#### (static) playBgs (bgs, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  |  |
| `pos` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

#### (static) playEncryptedBgm (bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |  |
| `pos` | [Number](Number.md) | <optional> |  |

<dl>
</dl>

#### (static) playMe (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) playSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) playStaticSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) replayBgm (bgm)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) replayBgs (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) saveBgm () → {[MV.AudioParameters](MV.AudioParameters.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) saveBgs () → {[MV.AudioParameters](MV.AudioParameters.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) shouldUseHtml5Audio () → {Boolean}


The only case where we wanted html5audio was android/ no encrypt Atsuma-ru asked to force webaudio there too, so just return false for ALL
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) stopAll ()

<dl>
</dl>

#### (static) stopBgm ()

<dl>
</dl>

#### (static) stopBgs ()

<dl>
</dl>

#### (static) stopMe ()

<dl>
</dl>

#### (static) stopSe ()

<dl>
</dl>

#### (static) updateBgmParameters (bgm)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) updateBgsParameters (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) updateBufferParameters (buffer, configVolume, audio)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.md) |  |
| `configVolume` | [Number](Number.md) |  |
| `audio` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) updateCurrentBgm (bgm, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |
| `pos` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) updateCurrentBgs (bgs, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  |
| `pos` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) updateMeParameters (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>

#### (static) updateSeParameters (buffer, se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.md) |  |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |

<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
