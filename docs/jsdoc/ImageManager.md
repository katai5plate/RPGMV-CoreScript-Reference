# Class: ImageManager

画像ファイルの読み込み、[Bitmap](Bitmap.md)オブジェクトの生成、およびそれらの保持(キャッシュ)・管理を行う静的オブジェクト。<br />
基本としてはloadXxxxを使って画像を読み込むが、遅延を避けるためにrequestXxxxを使って画像の先読みを行うこともできる。<br />
また、reserveXxxxは[releaseReservation](ImageManager.md#static-releasereservation-reservationid)によって解放するまでデータがキャッシュに保持されるので、頻出するデータを読み込んでおくのに向いている。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | [static] |
| `_imageCache` | [ImageCache](ImageCache.md) | [static] |
| `_requestQueue` | [RequestQueue](RequestQueue.md) | [static] |
| `_systemReservationId` | [Number](Number.md) | [static] |

<dl>
</dl>

### Methods

#### (static) clear ()

RPGツクールMVの画像キャッシュをクリア。<br />
ブラウザなどが持っているキャッシュがクリアされるわけではない。

<dl>
</dl>

#### (static) clearRequest ()

<dl>
</dl>

#### (static) isBigCharacter (filename) → {Boolean}
指定したファイル名に'$'がついているか。<br />
'$'がついている場合は3×4のひとキャラ分の画像とみなすのであって、実際大きい(big)かどうかはわからない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |

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
指定したファイル名に'!'がついているか。<br />
'!'がついている場合は表示際に上にずらさない画像とみなすのであって、実際が物体(object)の画像かどうかはわからない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |

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

画像のキャッシュが完了しているか。

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
指定したファイル名に'!'がついているか。<br />
'!'がついている場合はずらさない遠景画像とみなす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |

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
指定したファイル名の画像を'img/animations/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadBattleback1 (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/battlebacks1/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadBattleback2 (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/battlebacks2/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadBitmap (folder, filename, hue, smooth) → {[Bitmap](Bitmap.md)}

指定したフォルダ・ファイル名の画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらし、指定したスムージングの状態で返す。<br />
色相の変更が必要ない場合 loadBitmap( folder, filename, null, true )　のように、色相に null を渡せば良い。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `smooth` | Boolean | スムージングを行うか |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>


#### (static) loadCharacter (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/characters/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadEmptyBitmap () → {[Bitmap](Bitmap.md)}

カラの画像を返す。loadとあるが、特にどこからか読み込むわけではない。

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/enemies/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>>

#### (static) loadFace (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/faces/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |


<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}

指定したパスの画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述) |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadParallax (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/parallaxes/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |


<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadPicture (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/pictures/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadSvActor (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/sv_actors/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadSvEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/sv_enemies/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadSystem (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/system/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadTileset (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/tilesets/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadTitle1 (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/titles1/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) loadTitle2 (filename, hue opt) → {[Bitmap](Bitmap.md)}

指定したファイル名の画像を'img/titles2/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | \<optional> | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) releaseReservation (reservationId)

指定IDの予約を開放。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

#### (static) requestAnimation (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestBattleback1 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestBattleback2 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestBitmap (folder, filename, hue, smooth) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `smooth` | Boolean | スムージングを行うか |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestCharacter (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestEnemy (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestFace (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述) |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestParallax (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestPicture (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestSvActor (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestSvEnemy (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestSystem (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestTileset (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestTitle1 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) requestTitle2 (filename, hue) → {[Bitmap](Bitmap.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveAnimation (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/animations/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveBattleback1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks1/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveBattleback2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks2/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveBitmap (folder, filename, hue, smooth, reservationId) → {[Bitmap](Bitmap.md)}
指定したフォルダ・ファイル名の画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらし、指定したスムージングの状態で、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `smooth` | Boolean | スムージングを行うか |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveCharacter (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/characters/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/enemies/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveFace (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/faces/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveNormalBitmap (path, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したパスの画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらして、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述)  |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveParallax (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/parallaxes/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reservePicture (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/pictures/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveSvActor (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_actors/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveSvEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_enemies/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveSystem (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/system/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveTileset (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/tilesets/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveTitle1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles1/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) reserveTitle2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles2/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a href="Bitmap.html">Bitmap</a></span>
    </dd>
</dl>

#### (static) setDefaultReservationId (reservationId)
デフォルトのキャッシュIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) | キャッシュID |

<dl>
</dl>

#### (static) update ()

<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
