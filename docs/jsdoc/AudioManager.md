# Class: AudioManager

BGM, BGS, ME, SE を扱う静的クラス。

### Properties:

| Name              | Type                                                                  | Description                                   |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------------- |
| `masterVolume`    | [Number](Number.md)                                                   | [static] 主音量                               |
| `bgmVolume`       | [Number](Number.md)                                                   | [static] BGM 音量                             |
| `bgsVolume`       | [Number](Number.md)                                                   | [static] BGS 音量                             |
| `meVolume`        | [Number](Number.md)                                                   | [static] ME 音量                              |
| `seVolume`        | [Number](Number.md)                                                   | [static] SE 音量                              |
| `_bgmVolume`      | [Number](Number.md)                                                   | [static] BGM 音量                             |
| `_bgsVolume`      | [Number](Number.md)                                                   | [static] BGS 音量                             |
| `_meVolume`       | [Number](Number.md)                                                   | [static] ME 音量                              |
| `_seVolume`       | [Number](Number.md)                                                   | [static] SE 音量                              |
| `_currentBgm`     | [MV.AudioParameters](MV.AudioParameters.md)                           | [static] 現在の BGM                           |
| `_currentBgs`     | [MV.AudioParameters](MV.AudioParameters.md)                           | [static] 現在の BGS                           |
| `_bgmBuffer`      | Html5AudioStatic \| [WebAudio](WebAudio.md)                           | [static] BGM バッファ                         |
| `_bgsBuffer`      | Html5AudioStatic \| [WebAudio](WebAudio.md)                           | [static] BGS バッファ                         |
| `_meBuffer`       | Html5AudioStatic \| [WebAudio](WebAudio.md)                           | [static] ME バッファ                          |
| `_seBuffers`      | [Array](Array.md).&lt;Html5AudioStatic \| [WebAudio](WebAudio.md)&gt; | [static] SE バッファ                          |
| `_staticBuffers ` | [Array](Array.md).&lt;Html5AudioStatic \| [WebAudio](WebAudio.md)&gt; | [static] 静的バッファ                         |
| `_replayFadeTime` | [Number](Number.md)                                                   | [static] リプレイフェード時間                 |
| `_path`           | [String](String.md)                                                   | [static] 音声フォルダのパス(規定値: 'audio/') |
| `_blobUrl`        | [String](String.md)                                                   | [static] URL                                  |

### Methods

#### (static) audioFileExt () → {[String](String.md)}

音声ファイルの拡張子( '.ogg', '.m4a' )

#### (static) checkErrors ()

エラーチェック。

#### (static) checkWebAudioError (webAudio)

指定 Web オーディオのエラーチェック。

##### Parameters:

| Name       | Type                    | Description    |
| ---------- | ----------------------- | -------------- |
| `webAudio` | [WebAudio](WebAudio.md) | Web オーディオ |

#### (static) createBuffer () → {Html5AudioStatic|[WebAudio](WebAudio.md)}

バッファの生成。

#### (static) createDecryptBuffer (url, bgm, pos opt)

復号されたバッファを生成。

##### Parameters:

| Name  | Type                                        | Attributes       | Description      |
| ----- | ------------------------------------------- | ---------------- | ---------------- |
| `url` | [String](String.md)                         |                  | URL              |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |                  | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | &lt;optional&gt; | 再生位置         |

#### (static) fadeInBgm (duration)

BGM のフェードイン。

##### Parameters:

| Name       | Type                | Description        |
| ---------- | ------------------- | ------------------ |
| `duration` | [Number](Number.md) | フェードの継続時間 |

#### (static) fadeInBgs (duration)

BGS のフェードイン。

##### Parameters:

| Name       | Type                | Description        |
| ---------- | ------------------- | ------------------ |
| `duration` | [Number](Number.md) | フェードの継続時間 |

#### (static) fadeOutBgm (duration)

BGM のフェードアウト。

##### Parameters:

| Name       | Type                | Description        |
| ---------- | ------------------- | ------------------ |
| `duration` | [Number](Number.md) | フェードの継続時間 |

#### (static) fadeOutBgs (duration)

BGS のフェードアウト。

##### Parameters:

| Name       | Type                | Description        |
| ---------- | ------------------- | ------------------ |
| `duration` | [Number](Number.md) | フェードの継続時間 |

#### (static) fadeOutMe (duration)

ME のフェードアウト。

##### Parameters:

| Name       | Type                | Description        |
| ---------- | ------------------- | ------------------ |
| `duration` | [Number](Number.md) | フェードの継続時間 |

#### (static) isCurrentBgm (bgm) → {Boolean}

指定 BGM が現在の BGM か。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) isCurrentBgs (bgs) → {Boolean}

指定 BGS が現在の BGS か。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) isStaticSe (se) → {Boolean}

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) loadStaticSe (se)

SE を読み込む。

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) makeEmptyAudioObject () → {[MV.AudioParameters](MV.AudioParameters.md)}

空の音声オブジェクトを生成して返す。

#### (static) playBgm (bgm, pos opt)

BGM を再生。

##### Parameters:

| Name  | Type                                        | Attributes       | Description      |
| ----- | ------------------------------------------- | ---------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |                  | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | &lt;optional&gt; | 再生位置         |

#### (static) playBgs (bgs, pos opt)

BGS を再生。

##### Parameters:

| Name  | Type                                        | Attributes       | Description      |
| ----- | ------------------------------------------- | ---------------- | ---------------- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |                  | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | &lt;optional&gt; | 再生位置         |

#### (static) playEncryptedBgm (bgm, pos opt)

暗号化された BGM を再生。

##### Parameters:

| Name  | Type                                        | Attributes       | Description      |
| ----- | ------------------------------------------- | ---------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |                  | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | &lt;optional&gt; | 再生位置         |

#### (static) playMe (me)

ME を再生。

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) playSe (se)

SE を再生。

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) playStaticSe (se)

静的な SE を再生。

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) replayBgm (bgm)

BGM をリプレイ。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) replayBgs (bgs)

BGS をリプレイ。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) saveBgm () → {[MV.AudioParameters](MV.AudioParameters.md)}

BGM の状態を保存。

#### (static) saveBgs () → {[MV.AudioParameters](MV.AudioParameters.md)}

BGS の状態を保存。

#### (static) shouldUseHtml5Audio () → {Boolean}

Html5Audio を使用する必要があるか。

#### (static) stopAll ()

全停止。

#### (static) stopBgm ()

BGM を停止。

#### (static) stopBgs ()

BGS を停止。

#### (static) stopMe ()

ME を停止。

#### (static) stopSe ()

SE を停止。

#### (static) updateBgmParameters (bgm)

BGM のパラメータをアップデート。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) updateBgsParameters (bgs)

BGS のパラメータをアップデート。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) updateBufferParameters (buffer, configVolume, audio)

バッファのパラメータをアップデート。

##### Parameters:

| Name           | Type                                        | Description      |
| -------------- | ------------------------------------------- | ---------------- |
| `buffer`       | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `configVolume` | [Number](Number.md)                         |                  |
| `audio`        | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) updateCurrentBgm (bgm, pos)

現在の BGM をアップデート。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | 再生位置         |

#### (static) updateCurrentBgs (bgs, pos)

現在の BGS をアップデート。

##### Parameters:

| Name  | Type                                        | Description      |
| ----- | ------------------------------------------- | ---------------- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `pos` | [Number](Number.md)                         | 再生位置         |

#### (static) updateMeParameters (me)

ME のパラメータをアップデート。

##### Parameters:

| Name | Type                                        | Description      |
| ---- | ------------------------------------------- | ---------------- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |

#### (static) updateSeParameters (buffer, se)

SE のパラメータをアップデート。

##### Parameters:

| Name     | Type                                        | Description      |
| -------- | ------------------------------------------- | ---------------- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `se`     | [MV.AudioParameters](MV.AudioParameters.md) |                  |
