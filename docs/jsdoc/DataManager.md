# Class: DataManager

 データベースの管理を行う静的クラス。 セーブデータの管理など行う。だいたい、$XXXで大域変数に設定されているものの管理。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_globalId` | [String](String.md) | [static]システムID 'RPGMV' |
| `_lastAccessedId` | [Number](Number.md) | [static]最後にセーブ・ロードを行ったファイルのID |
| `_errorUrl` | * | [static] |
| `_databaseFiles` | [Array](Array.md).\<Object> | [static]読み込むデータファイル情報(Object例:{ name: '$dataXxx', src: 'Xxx.json'}) |

<dl>
</dl>

### Methods

#### (static) checkError ()


 エラーが記録されていれば、エラーを表示。
<dl>
</dl>

#### (static) createGameObjects ()


$game から始まる大域変数に、対応したオブジェクトを生成し代入。
<dl>
</dl>

#### (static) extractMetadata (data)

data.noteに書いてあるデータを分解しメタデータ化。<br />
仮引数にdata.metaプロパティを追加するので、渡したdata自体が書き換えられ、返り値はない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `data` | Object | JSONデータ({note:''}が含まれている) |

<dl>
</dl>

#### (static) extractSaveContents (contents)


 渡したオブジェクトから$gameで始まる大域変数に値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `contents` | Object |  |

<dl>
</dl>

#### (static) isAnySavefileExists () → {Boolean}


 セーブファイルが(ひとつでも)存在するか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isArmor (item) → {Boolean}


 指定した項目が[防具]に含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isBattleTest () → {Boolean}


[戦闘テスト]モードか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isDatabaseLoaded () → {Boolean}


 データベースの読み込みが完了しているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isEventTest () → {Boolean}


[イベントテスト]モードか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isItem (item) → {Boolean}


 指定した項目が[アイテム]に含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | Object |  |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isMapLoaded () → {Boolean}


 マップの読み込みが完了しているか。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isSkill (item) → {Boolean}


 指定した項目が[スキル]に含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | Object |  |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) isThisGameFile (savefileId) → {Boolean}


 指定した ID のセーブファイルが存在するか。

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

#### (static) isWeapon (item) → {Boolean}


 指定した項目が[武器]に含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### (static) lastAccessedSavefileId () → {[Number](Number.md)}


 最後にセーブ・ロードを行ったファイルのIDを返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### (static) latestSavefileId () → {[Number](Number.md)}


 最新のセーブファイルID を返す。
<dl>
</dl>

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### (static) loadAllSavefileImages ()


 全てのセーブファイルの画像を読み込む。
<dl>
</dl>

#### (static) loadDatabase ()


 データベースファイル( $data から始まる大域変数に代入される JSON)を読み込む。 ただし $dataMap は別扱い。
<dl>
</dl>

#### (static) loadDataFile (name, src)


 指定したデータを読み込む。読み込みが完了したら onLoad が呼ばれる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) |  データ代入先の大域変数名 $dataXXX |
| `src` | [String](String.md) | data/以下のファイル名 |

<dl>
</dl>

#### (static) loadGame (savefileId)


 指定したセーブファイルID からデータを読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) loadGameWithoutRescue (savefileId) → {Boolean}


 指定したセーブファイルID からリソース抜きの情報を読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:


 読み込みに成功したか
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadGlobalInfo () → {[Array](Array.md).<[MV.SaveFileInfo](MV.SaveFileInfo.md)>}


GlobalInfo を読み込んで返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>MV.SaveFileInfo</a>&gt;</span>
                </dd>
            </dl>

#### (static) loadMapData (mapId)


 マップデータを読み込む。完了時は onLoad が呼ばれる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) | 1: 空のマップを作る |

<dl>
</dl>

#### (static) loadSavefileImages (info)


 セーブファイルに必要な画像を読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `info` | Object |  |

<dl>
</dl>

#### (static) loadSavefileInfo (savefileId) → {Object}


 指定したセーブファイルID の情報を読み込んで返す。

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
                    <span>Object</span>
                </dd>
            </dl>

#### (static) makeEmptyMap ()


 空のマップを作成。
<dl>
</dl>

#### (static) makeSaveContents () → {Object}


 セーブ用のデータ作成。$gameで始まる大域変数をまとめたオブジェクトを返す。 ただし$gameTemp, $gameMessage, $gameTroop を含まない。
<dl>
</dl>

##### Returns:


 大域変数をまとめたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### (static) makeSavefileInfo () → {[MV.SaveFileInfo](MV.SaveFileInfo.md)}


 新規のセーブファイル情報を作って返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>MV.SaveFileInfo</a></span>
                </dd>
            </dl>

#### (static) maxSavefiles () → {[Number](Number.md)}


 セーブ可能なファイルの最大数を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) onLoad (object)


 データ読み込み完了時に呼ばれるハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | * |  データを格納したオブジェクト |

<dl>
</dl>

#### (static) saveGame (savefileId) → {Boolean}


 ゲームデータをセーブファイルに保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:


 保存に成功したか
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) saveGameWithoutRescue (savefileId) → {Boolean}


 指定したセーブファイルID にリソース抜きの情報を保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:


 保存に成功したか
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) saveGlobalInfo (info)


GlobalInfo を保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `info` | [MV.SaveFileInfo](MV.SaveFileInfo.md) |  |

<dl>
</dl>

#### (static) selectSavefileForNewGame ()


[ニューゲーム]用のセーブファイルを選択。
<dl>
</dl>

#### (static) setupBattleTest ()


[戦闘テスト] の準備。
<dl>
</dl>

#### (static) setupEventTest ()


[イベントテスト]の準備。
<dl>
</dl>

#### (static) setupNewGame ()


 新規ゲームの準備。
<dl>
</dl>


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
