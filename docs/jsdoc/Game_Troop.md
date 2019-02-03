# Class: Game_Troop

## Game_Troop ()

#### new Game_Troop ()

[敵グループ]を定義したクラス。<br />
JSONの定義データは [RPG.Troop](RPG.Troop.md)。

大域変数 [$gameTroop](global.md#gametroop-game_troop) に定義されている。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `LETTER_TABLE_HALF` | [Array](Array.md).<[String](String.md)> | [static] 敵の名前に付くA〜Zの記号(半角) |
| `LETTER_TABLE_FULL` | [Array](Array.md).<[String](String.md)> | [static] 敵の名前に付くA〜Zの記号(全角) |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) | コマンドインタプリタ |
| `_troopId` | [Number](Number.md) | 敵グループID |
| `_eventFlags` | Object | {[page: Number]: Boolean} |
| `_enemies` | [Array](Array.md).<[Game_Enemy](Game_Enemy.md)> | 敵の配列 |
| `_turnCount` | [Number](Number.md) | ターンカウンタ |
| `_namesCount` | Object | {[name: String]: Number} |


### Extends

* [Game_Unit](Game_Unit.md)

### Methods

#### agility () → {[Number](Number.md)}

ユニットの素早さを返す。
##### Inherited From:

 * [Game_Unit#agility](Game_Unit.md#agility---number)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### aliveMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

生存しているバトラーを配列で返す。##### Inherited From:

 * [Game_Unit#aliveMembers](Game_Unit.md#alivemembers---arraygame_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
    </dd>
</dl>


#### clear ()


#### clearActions ()

アクションを取り消す。
##### Inherited From:

 * [Game_Unit#clearActions](Game_Unit.md#clearactions-)


#### clearResults ()

アクションの結果を取り消す。

##### Inherited From:

 * [Game_Unit#clearResults](Game_Unit.md#clearResults-)


#### deadMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

死亡しているバトラーを配列で返す。

##### Inherited From:

 * [Game_Unit#deadMembers](Game_Unit.md#deadmembers---arraygame_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
    </dd>
</dl>

#### enemyNames () → {[Array](Array.md).<[String](String.md)>}

敵の名前を配列で返す。
##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>String</a>&gt;</span>
    </dd>
</dl>

#### expTotal () → {[Number](Number.md)}

敵の合計EXPを返す。
##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### goldRate () → {[Number](Number.md)}

プレイヤーパーティが持つ金額の取得倍率を返す。スキルやアイテムの効果で上下する。
##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### goldTotal () → {[Number](Number.md)}
敵からの合計取得金額を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>

#### inBattle () → {Boolean}
戦闘中か返す。

##### Inherited From:

 * [Game_Unit#inBattle](Game_Unit.md#inbattle---boolean)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### increaseTurn ()
ターンを進める。
#### initialize ()
 オブジェクト生成時の初期化。
 
##### Overrides:

 * [Game_Unit#initialize](Game_Unit.md#initialize-)


#### isAllDead () → {Boolean}

全バトラーが死亡したか。

##### Inherited From:

 * [Game_Unit#isAllDead](Game_Unit.md#isAllDead---boolean)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>

#### isEventRunning () → {Boolean}

イベントが実行中か。
##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### letterTable () → {[Array](Array.md).<[String](String.md)>}

敵の名前に付く記号(A〜Z)を配列で返す。
##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>String</a>&gt;</span>
    </dd>
</dl>

#### makeActions ()

戦闘行動を作成する。##### Inherited From:

 * [Game_Unit#makeActions](Game_Unit.md#makeActions-)


#### makeDropItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}

ドロップアイテムを作成して配列で返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>RPG.BaseItem</a>&gt;</span>
    </dd>
</dl>

#### makeUniqueNames ()

全敵に(A〜Zを割り振って)固有名をつける。
#### meetsConditions (page) → {Boolean}

条件に合っているか返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `page` | [RPG.BattleEventPage](RPG.BattleEventPage.md) | バトルEVページ |

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span>Boolean</span>
    </dd>
</dl>


#### members () → {[Array](Array.md).<[Game_Enemy](Game_Enemy.md)>}

戦闘中のバトラー生死問わず全て配列で返す。
##### Overrides:

 * [Game_Unit#members](Game_Unit.md#members---arraygame_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>Game_Enemy</a>&gt;</span>
    </dd>
</dl>

#### movableMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

動ける(死亡や麻痺などでない)バトラーを配列で返す。
##### Inherited From:

 * [Game_Unit#movableMembers](Game_Unit.md#movablemembers---arraygame_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
    </dd>
</dl>

#### onBattleEnd ()

戦闘終了時に呼ばれるハンドラ。##### Inherited From:

 * [Game_Unit#onBattleEnd](Game_Unit.md#onBattleEnd-)


#### onBattleStart ()

戦闘開始時に呼ばれるハンドラ。##### Inherited From:

 * [Game_Unit#onBattleStart](Game_Unit.md#onBattleStart-)


#### randomDeadTarget () → {[Game_Battler](Game_Battler.md)}

死亡したバトラーからランダムに1体を返す。##### Inherited From:

 * [Game_Unit#randomDeadTarget](Game_Unit.md#randomdeadtarget---game_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Game_Battler</a></span>
    </dd>
</dl>


#### randomTarget () → {[Game_Battler](Game_Battler.md)}

含まれるバトラーからランダムに1体を返す。##### Inherited From:

 * [Game_Unit#randomTarget](Game_Unit.md#randomTarget---game_battler)


##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Game_Battler</a></span>
    </dd>
</dl>


#### select (activeMember)

指定されたバトラーを選択する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `activeMember` | [Game_Battler](Game_Battler.md) | バトラー |
##### Inherited From:

 * [Game_Unit#select](Game_Unit.md#select-activemember)


#### setup (troopId)

指定したIDの[敵グループ]を準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopId` | [Number](Number.md) | 敵グループID |


#### setupBattleEvent ()

バトルイベントの準備。


#### smoothDeadTarget (index) → {[Game_Battler](Game_Battler.md)}


##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |
##### Inherited From:

 * [Game_Unit#smoothDeadTarget](Game_Unit.md#smoothdeadtarget-index--game_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Game_Battler</a></span>
    </dd>
</dl>


#### smoothTarget (index) → {[Game_Battler](Game_Battler.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) |  |
##### Inherited From:

 * [Game_Unit#smoothTarget](Game_Unit.md#smoothTarget-index--game_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Game_Battler</a></span>
    </dd>
</dl>


#### substituteBattler () → {[Game_Battler](Game_Battler.md)}
##### Inherited From:

 * [Game_Unit#substituteBattler](Game_Unit.md#substituteBattler---game_battler)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Game_Battler</a></span>
    </dd>
</dl>


#### tgrSum () → {[Number](Number.md)}
##### Inherited From:

 * [Game_Unit#tgrSum](Game_Unit.md#tgrsum---number)

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>


#### troop () → {[RPG.Troop](RPG.Troop.md)}

敵の定義情報を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>RPG.Troop</a></span>
    </dd>
</dl>


#### turnCount () → {[Number](Number.md)}

ターン数を返す。

##### Returns:

<dl>
    <dt> Type </dt>
    <dd>
        <span><a>Number</a></span>
    </dd>
</dl>


#### updateInterpreter ()

コマンドインタプリタを更新する。
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
