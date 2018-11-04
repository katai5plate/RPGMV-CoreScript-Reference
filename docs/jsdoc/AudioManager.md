# Class: AudioManager

## AudioManager ()

#### new AudioManager ()

The static class that handles BGM, BGS, ME and SE.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `masterVolume` | [Number](Number.html) | [static] |
| `bgmVolume` | [Number](Number.html) | [static] |
| `bgsVolume` | [Number](Number.html) | [static] |
| `meVolume` | [Number](Number.html) | [static] |
| `seVolume` | [Number](Number.html) | [static] |
| `_bgmVolume` | [Number](Number.html) | [static] |
| `_bgsVolume` | [Number](Number.html) | [static] |
| `_meVolume` | [Number](Number.html) | [static] |
| `_seVolume` | [Number](Number.html) | [static] |
| `_currentBgm` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_currentBgs` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_bgmBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_bgsBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_meBuffer` | Html5AudioStatic | [WebAudio](WebAudio.html) | [static] |
| `_seBuffers` | [Array](Array.html).<(Html5AudioStatic| [WebAudio](WebAudio.html))> | [static] |
| `_replayFadeTime` | [Array](Array.html).<(Html5AudioStatic| [WebAudio](WebAudio.html))> | [static] |
| `_path` | [String](String.html) | [static] |
| `_blobUrl` | [String](String.html) | [static] |

<dl>
</dl>

### Methods

#### (static) audioFileExt () → {[String](String.html)}

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
| `webAudio` | Html5AudioStatic | [WebAudio](WebAudio.html) |  |

<dl>
</dl>

#### (static) createBuffer () → {Html5AudioStatic|[WebAudio](WebAudio.html)}

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
| `url` | [String](String.html) |  |  |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) fadeInBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeInBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutBgm (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutBgs (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) fadeOutMe (duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) isCurrentBgm (bgm) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

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
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

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
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

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
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) makeEmptyAudioObject () → {[MV.AudioParameters](MV.AudioParameters.html)}

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
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playBgs (bgs, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playEncryptedBgm (bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |  |
| `pos` | [Number](Number.html) | <optional> |  |

<dl>
</dl>

#### (static) playMe (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) playSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) playStaticSe (se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) replayBgm (bgm)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) replayBgs (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) saveBgm () → {[MV.AudioParameters](MV.AudioParameters.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.AudioParameters</a></span>
                </dd>
            </dl>

#### (static) saveBgs () → {[MV.AudioParameters](MV.AudioParameters.html)}

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
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateBgsParameters (bgs)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateBufferParameters (buffer, configVolume, audio)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `configVolume` | [Number](Number.html) |  |
| `audio` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateCurrentBgm (bgm, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `pos` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) updateCurrentBgs (bgs, pos)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `pos` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) updateMeParameters (me)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>

#### (static) updateSeParameters (buffer, se)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.html) |  |
| `se` | [MV.AudioParameters](MV.AudioParameters.html) |  |

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
