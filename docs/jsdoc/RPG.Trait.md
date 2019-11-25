# Class: Trait

## Namespace [RPG](RPG.md)

[特徴]のJSONデータで、[RPG.Actor](RPG.Actor.md)、[RPG.Enemy](RPG.Enemy.md) および [RPG.EquipItem](RPG.EquipItem.md) JSONデータ traits 属性に記録されている。


別に公式の初心者講座の、アクターの[特徴の設定](https://tkool.jp/mv/guide/004_003c.html)と、他の[敵キャラの能力を設定する\[特徴\]](https://tkool.jp/mv/guide/004_008a.html#03)、[武器の特徴を設定する](https://tkool.jp/mv/guide/004_005b.html#03)、[防具の特徴を設定する](https://tkool.jp/mv/guide/004_005c.html#03)や、本体のヘルプの記述を参照。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴]コード |
| `dataId` | [Number](Number.md) | code 毎に意味の異なるID |
| `value` | [Number](Number.md) | code 毎に意味の異なる値 |


#### codeと対応するデータ形式

code の数値は [Game_BattlerBase](Game_BattlerBase.md) の静的クラス定数として定義されている。例えば 11 ではなんの数値か分からないので <code>Game_BattlerBase.TRAIT_ELEMENT_RATE</code> の形で使う。

下表で 変動率・比率・増減値は 1 が 100%に当たる数値。

*0* や *1* のようなイタリック部分は、数字が入っているが未使用。

##### [耐性]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_ELEMENT_RATE:11` | 属性有効度 | [属性ID](RPG.Trait.md#属性id) | 変動率 (0〜10) |
| `TRAIT_DEBUFF_RATE:12` | 弱体有効度 | [能力値ID](RPG.Trait.md#能力値id) | 変動率 (0〜10) |
| `TRAIT_STATE_RATE:13` | ステート有効度 | [ステートID](RPG.Trait.md#ステートid) | 変動率 (0〜10) |
| `TRAIT_STATE_RESIST:14` | ステート無効化 | [ステートID](RPG.Trait.md#ステートid) | *1* |

##### [能力値]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_PARAM:21` | 通常能力値 | [能力値ID](RPG.Trait.md#能力値id) | 変動率 (0〜10) |
| `TRAIT_XPARAM:22` | 追加能力値 | [追加能力値ID](RPG.Trait.md#22--追加能力値) |  比率 (-10〜10) |
| `TRAIT_SPARAM:23` | 特殊能力値 | [特殊能力値ID](RPG.Trait.md#23--特殊能力値) |  変動率 (0〜10) |

######  22 : 追加能力値

| ID | 追加能力値 |
| --- | --- |
| 0 | 命中率 |
| 1 | 回避率 |
| 2 | 会心率 |
| 3 | 会心回避率|
| 4 | 魔法回避率|
| 5 | 魔法反射率|
| 6 | 反撃率 |
| 7 | HP再生率|
| 8 | MP再生率|
| 9 | TP再生率 |
 
###### 23 : 特殊能力値
 
| ID | 特殊能力値 |
| --- | --- |
| 0 | 狙われ率 |
| 1 | 防御効果率 |
| 2 | 回復効果率 |
| 3 | 薬の知識 |
| 4 | MP消費率 |
| 5 | TPチャージ率|
| 6 | 物理ダメージ率|
| 7 | 魔法ダメージ率|
| 8 | 床ダメージ率 |
| 9 | 経験獲得率 |

##### [攻撃]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_ATTACK_ELEMENT:31` | 攻撃時属性 | [属性ID](RPG.Trait.md#属性id) | *1* |
| `TRAIT_ATTACK_STATE:32` | 攻撃時ステート | [ステートID](RPG.Trait.md#ステートid) | 変動率 (0〜10) |
| `TRAIT_ATTACK_SPEED:33` | 攻撃速度補正 | *0* | 増減値 (-10〜10) |
| `TRAIT_ATTACK_TIMES:34` | 攻撃追加回数 | *0*  | 攻撃追加回数(-9.0〜9.0)|


##### [スキル]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_STYPE_ADD:41` | スキルタイプ追加 | [スキルタイプID](RPG.Trait.md#スキルタイプid) | *1* |
| `TRAIT_STYPE_SEAL:42` | スキルタイプ封印 | [スキルタイプID](RPG.Trait.md#スキルタイプid) | *1* |
| `TRAIT_SKILL_ADD:43` | スキル追加 | [スキルID](RPG.Trait.md#スキルid) | *1* |
| `TRAIT_SKILL_SEAL:44` | スキル封印 | [スキルID](RPG.Trait.md#スキルid) | *1* |


##### [装備]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_EQUIP_WTYPE:51` | 武器タイプ装備 | [武器タイプID](RPG.Trait.md#51--武器タイプid) | *1* |
| `TRAIT_EQUIP_ATYPE:52` | 防具タイプ装備 | [防具タイプID](RPG.Trait.md#52--防具タイプid) | *1* |
| `TRAIT_EQUIP_LOCK:53` | 装備固定 | [装備タイプID](RPG.Trait.md#53-54--装備タイプid) | *1* |
| `TRAIT_EQUIP_SEAL:54` | 装備封印 | [装備タイプID](RPG.Trait.md#53-54--装備タイプid) | *1* |
| `TRAIT_SLOT_TYPE:55` | スロットタイプ | [スロットタイプID](RPG.Trait.md#55--スロットタイプid) | *1* |

###### 51 : 武器タイプID

[データベース]-[タイプ]-[武器タイプ] で設定されたID。

 [System](RPG.System.md) の weaponTypes プロパティに登録されている。
 
 下表は規定値。

| ID | [武器タイプ] |
| --- | --- |
| 0 | なし |
| 1 | 短剣 |
| 2 | 剣 |
| 3 | フレイル |
| 4 | 斧 |
| 5 | ムチ |
| 6 | 杖 |
| 7 | 弓 |
| 8 | クロスボウ |
| 9 | 銃 |
| 10 | 爪 |
| 11 | グローブ |
| 11 | 槍 |


###### 52 : 防具タイプID

[データベース]-[タイプ]-[防具タイプ] で設定されたID。

 [System](RPG.System.md) の armorTypes プロパティに登録されている。
 
下表はデフォルトの値。

| ID | [防具タイプ] |
| --- | --- |
| 1 | 一般防具 |
| 2 | 魔法防具 |
| 3 | 軽装防具 |
| 4 | 重装防具 |
| 5 | 小型盾 |
| 6 | 大型盾 | 


###### 53 ,54 : 装備タイプID

[データベース]-[タイプ]-[装備タイプ] で設定されたID。

 [System](RPG.System.md) の equipTypes プロパティに登録されている。
 
 下表はデフォルトの値。

| ID | [装備タイプ] |
| --- | --- |
| 0 | なし |
| 1 | 盾 |
| 2 | 頭 |
| 3 | 身体 |
| 4 | 装飾品 |

###### 55 : スロットタイプID

| ID | [スロットタイプ] |
| --- | --- |
| 0 | 通常 |
| 1 | 二刀流 |


##### [その他]

| code | 内容 | dataId | value |
| --- | --- | --- | --- |
| `TRAIT_ACTION_PLUS:61` | 行動回数追加 | *0* | 確率(%) |
| `TRAIT_SPECIAL_FLAG:62` | 特殊フラグ | [特殊フラグID](RPG.Trait.md#62--特殊フラグid) | *1* |
| `TRAIT_COLLAPSE_TYPE:63` | 消滅エフェクト | [消滅エフェクトID](RPG.Trait.md#63--消滅エフェクトid) | *1*|
| `TRAIT_PARTY_ABILITY:64` | パーティ能力 | [パーティ能力ID](RPG.Trait.md#64--パーティ能力id) | *1* |

###### 62 : 特殊フラグID

| ID | [特殊フラグ] |
| --- | --- |
| `FLAG_ID_AUTO_BATTLE:0` | 自動戦闘 |
| `FLAG_ID_GUARD:1` | 防御 |
| `FLAG_ID_SUBSTITUTE:2` | 身代わり |
| `FLAG_ID_PRESERVE_TP:3` | TP持ち越し |

###### 63 : 消滅エフェクトID

| ID | [消滅エフェクト] |
| --- | --- |
| 0 | 通常 |
| 1 | ボス |
| 2 | 消えない |

###### 64 : パーティ能力ID

| ID | [パーティ能力] |
| --- | --- |
| 0 | エンカウント半減 |
| 1 | エンカウント無効 |
| 2 | 不意打ち無効 |
| 3 | 先制攻撃率アップ |
| 4 | 獲得金額2倍 |
| 5 | アイテム入手率2倍 |


###### 属性ID

[データベース]-[タイプ]-[属性] で設定されたID。

 [System](RPG.System.md) の elements プロパティに登録されている。
 
 下表の -1 と 0 は固定、 1 以降はデフォルトの値。

| ID | [属性] |
| --- | --- |
| -1 | 通常攻撃 |
| 0 | なし |
| 1 | 物理 |
| 2 | 炎 |
| 3 | 氷 |
| 4 | 雷 |
| 5 | 水 |
| 6 | 土 |
| 7 | 風 |
| 8 | 光 |
| 9 | 闇 |


###### 能力値ID

| ID | [能力値] |
| --- | --- |
| 0 | 最大HP |
| 1 | 最大MP |
| 2 | 攻撃力 |
| 3 | 防御力 |
| 4 | 魔法力 |
| 5 | 魔法防御 |
| 6 | 敏捷性 |
| 7 | 運 |


###### ステートID

[$dataStates](global.md#datastates-arrayrpgstate) ([State](RPG.State.md) の配列)のid。

下表はデフォルトの値。

| ID | [ステート] |
| --- | --- |
| 0 | 通常攻撃(21:ステート付加のみ) |
| 1 | 戦闘不能 |
| 2 | 防御 |
| 3 | 不死身 |
| 4 | 毒 |
| 5 | 暗闇 |
| 6 | 沈黙 |
| 7 | 激昂 |
| 8 | 混乱 |
| 9 | 魅了 |
| 10 | 睡眠 |


###### スキルID

[\$dataSkills](global.md#dataskills-arrayrpgskill) ([RPG.Skill](RPG.Skill.md) の配列)の番号。


###### スキルタイプID

[データベース]-[タイプ]-[スキルタイプ] で設定されたID。

 [System](RPG.System.md) の skillTypes プロパティに登録されている。
 
 下表は規定値。

| ID | [スキルタイプ] |
| --- | --- |
| 0 | なし |
| 1 | 魔法 |
| 2 | 必殺技 |


 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
