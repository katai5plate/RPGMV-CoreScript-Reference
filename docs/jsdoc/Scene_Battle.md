# Class: Scene_Battle

## Scene_Battle ()

#### new Scene_Battle ()

The scene class of the battle screen.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.html) |  |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.html) |  |
| `_partyCommandWindow` | [Window_PartyCommand](Window_PartyCommand.html) |  |
| `_actorCommandWindow` | [Window_ActorCommand](Window_ActorCommand.html) |  |
| `_skillWindow` | [Window_BattleSkill](Window_BattleSkill.html) |  |
| `_itemWindow` | [Window_BattleItem](Window_BattleItem.html) |  |
| `_actorWindow` | [Window_BattleActor](Window_BattleActor.html) |  |
| `_enemyWindow` | [Window_BattleEnemy](Window_BattleEnemy.html) |  |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.html) |  |
| `_helpWindow` | [Window_Help](Window_Help.html) |  |
| `_messageWindow` | [Window_Message](Window_Message.html) |  |
| `_scrollTextWindow` | [Window_ScrollText](Window_ScrollText.html) |  |

<dl>
</dl>

### Extends

* [Scene_Base](Scene_Base.html)

### Methods

#### addChild (child) → {Object}

[super] 子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#addChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 追加されたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addChildAt (child, index) → {Object}

[super] 指定位置に子オブジェクトを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  追加するオブジェクト |
| `index` | [Number](Number.html) |  追加位置 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#addChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 追加されたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### addWindow (Window)

 ウィンドウレイヤーにウィンドウを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `Window` |  |  追加するウィンドウ |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#addWindow</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### attachReservation ()

 キューに予約を追加。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#attachReservation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### changeInputWindow ()

<dl>
</dl>

#### checkGameover ()

 ゲームオーバー状態か検査。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#checkGameover</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### commandAttack ()

Handler for the attack command.
<dl>
</dl>

#### commandEscape ()

Handler for the escape command on battle start.
<dl>
</dl>

#### commandFight ()

Handler for the fight command on battle start..
<dl>
</dl>

#### commandGuard ()

Handler for the guard command.
<dl>
</dl>

#### commandItem ()

Handler for the item command.
<dl>
</dl>

#### commandSkill ()

Handler for the skill command.
<dl>
</dl>

#### create ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#create</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createActorCommandWindow ()

Creates the actor command window.
<dl>
</dl>

#### createActorWindow ()

Creates the actor window.
<dl>
</dl>

#### createAllWindows ()

Creates all the windows within the battle scene.
<dl>
</dl>

#### createDisplayObjects ()

Creates all the display objects including: the spritesheet, window layer, windows, and more.
<dl>
</dl>

#### createEnemyWindow ()

Creates the enemy window.
<dl>
</dl>

#### createFadeSprite ()

 フェード用のスプライトを生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#createFadeSprite</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### createHelpWindow ()

Creates the help window.
<dl>
</dl>

#### createItemWindow ()

Creates the item window.
<dl>
</dl>

#### createLogWindow ()

Creates the log window.
<dl>
</dl>

#### createMessageWindow ()

Creates the message window on the battle scene.
<dl>
</dl>

#### createPartyCommandWindow ()

<dl>
</dl>

#### createScrollTextWindow ()

Creates the scroll text window.
<dl>
</dl>

#### createSkillWindow ()

Creates the skill window.
<dl>
</dl>

#### createSpriteset ()

Creates the spriteset within the battle scene. This includes sprites for actors, enemies, etc.
<dl>
</dl>

#### createStatusWindow ()

<dl>
</dl>

#### createWindowLayer ()

 ウィンドウレイヤー[WindowLayer](WindowLayer.html) を生成。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#createWindowLayer</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### detachReservation ()

 キューから予約を削除。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#detachReservation</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### endCommandSelection ()

<dl>
</dl>

#### fadeOutAll ()

 全ての映像と音声を、遅い速度でフェードアウト。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#fadeOutAll</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### fadeSpeed () → {[Number](Number.html)}

 フェード速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#fadeSpeed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#initialize</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### isActive () → {Boolean}

 シーンがアクティブか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#isActive</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isAnyInputWindowActive () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBusy () → {Boolean}

 フェード動作中か。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#isBusy</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isReady () → {Boolean}

 シーンの準備ができているか。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#isReady</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### needsSlowFadeOut () → {Boolean}

Returns true if the battle needs a slow fade out.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### onActorCancel ()

<dl>
</dl>

#### onActorOk ()

<dl>
</dl>

#### onEnemyCancel ()

<dl>
</dl>

#### onEnemyOk ()

Handler for when an enemy is selected.
<dl>
</dl>

#### onItemCancel ()

<dl>
</dl>

#### onItemOk ()

<dl>
</dl>

#### onSelectAction ()

<dl>
</dl>

#### onSkillCancel ()

<dl>
</dl>

#### onSkillOk ()

Handler for when a skill is selected.
<dl>
</dl>

#### popScene ()

 シーンを引き出す(pop)。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#popScene</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### refreshStatus ()

<dl>
</dl>

#### removeChild (child) → {Object}

[super] 子オブジェクトを取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `child` | Object |  取り除くオブジェクト |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#removeChild</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 取り除かれたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### removeChildAt (index) → {Object}

[super] 指定位置にある子オブジェクトを取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.html) |  取り除く位置 |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Stage#removeChildAt</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

 取り除かれたオブジェクト
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Object</span>
                </dd>
            </dl>

#### selectActorSelection ()

<dl>
</dl>

#### selectEnemySelection ()

<dl>
</dl>

#### selectNextCommand ()

Selects the next command in the battle scene.
<dl>
</dl>

#### selectPreviousCommand ()

Selects the previous command in the battle scene.
<dl>
</dl>

#### slowFadeSpeed () → {[Number](Number.html)}

 遅いフェード速度を返す。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#slowFadeSpeed</a>
                        </li>
                    </ul>
                </dd>
            </dl>

##### Returns:

Return the fade speed
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### start ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#start</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startActorCommandSelection ()

<dl>
</dl>

#### startFadeIn (duration opt, white opt)

 フェードインの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードインにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#startFadeIn</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startFadeOut (duration opt, white opt)

 フェードアウトの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.html) | <optional> | 30 |  フェードアウトにかける時間 |
| `white` | Boolean | <optional> | false |  白で[フェード]するか(falseだと黒) |

<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#startFadeOut</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### startPartyCommandSelection ()

<dl>
</dl>

#### stop ()

Stops the battle scene.
<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#stop</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### terminate ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#terminate</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### update ()

<dl>
                <dt>Overrides:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#update</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateBattleProcess ()

<dl>
</dl>

#### updateChildren ()

 子オブジェクトのアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#updateChildren</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateFade ()

 フェードのアップデート。
<dl>
                <dt>Inherited From:</dt>
                <dd>
                    <ul>
                        <li>
                            <a>Scene_Base#updateFade</a>
                        </li>
                    </ul>
                </dd>
            </dl>

#### updateStatusWindow ()

Updates the status window on the battle scene.
<dl>
</dl>

#### updateWindowPositions ()

Updates the position of the battle scene windows.
<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
