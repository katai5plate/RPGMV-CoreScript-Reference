# Class: BattleManager

## BattleManager ()

#### new BattleManager ()

The static class that manages battle progress.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_phase` | [String](String.html) | [static] |
| `_canEscape` | Boolean | [static] [static] |
| `_canLose` | Boolean | [static] |
| `_battleTest` | Boolean | [static] |
| `_eventCallback` | function | [static] |
| `_preemptive` | Boolean | [static] |
| `_surprise` | Boolean | [static] |
| `_actorIndex` | [Number](Number.html) | [static] |
| `_actionForcedBattler` | [Game_Battler](Game_Battler.html) | [static] |
| `_mapBgm` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_mapBgs` | [MV.AudioParameters](MV.AudioParameters.html) | [static] |
| `_actionBattlers` | [Array](Array.html).<[Game_Battler](Game_Battler.html)> | [static] |
| `_subject` | [Game_Battler](Game_Battler.html) | [static] |
| `_action` | [Game_Action](Game_Action.html) | [static] |
| `_targets` | [Array](Array.html).<[Game_Battler](Game_Battler.html)> | [static] |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.html) | [static] |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.html) | [static] |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.html) | [static] |
| `_escapeRatio` | [Number](Number.html) | [static] |
| `_escaped` | Boolean | [static] |
| `_rewards` | [MV.BattleRewards](MV.BattleRewards.html) | [static] |

<dl>
</dl>

### Methods

#### (static) abort ()

<dl>
</dl>

#### (static) actor () → {[Game_Actor](Game_Actor.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
            </dl>

#### (static) allBattleMembers () → {[Array](Array.html).<[Game_Battler](Game_Battler.html)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### (static) applySubstitute (target) → {[Game_Battler](Game_Battler.html)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### (static) canEscape () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) canLose () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) changeActor (newActorIndex, lastActorActionState)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newActorIndex` | [Number](Number.html) |  |
| `lastActorActionState` | [String](String.html) |  |

<dl>
</dl>

#### (static) checkAbort () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) checkBattleEnd () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) checkSubstitute (target) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) clearActor ()

<dl>
</dl>

#### (static) displayDefeatMessage ()

<dl>
</dl>

#### (static) displayDropItems ()

<dl>
</dl>

#### (static) displayEscapeFailureMessage ()

<dl>
</dl>

#### (static) displayEscapeSuccessMessage ()

<dl>
</dl>

#### (static) displayExp ()

<dl>
</dl>

#### (static) displayGold ()

<dl>
</dl>

#### (static) displayRewards ()

<dl>
</dl>

#### (static) displayStartMessages ()

<dl>
</dl>

#### (static) displayVictoryMessage ()

<dl>
</dl>

#### (static) endAction ()

<dl>
</dl>

#### (static) endBattle (result)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `result` | [Number](Number.html) |  |

<dl>
</dl>

#### (static) endTurn ()

<dl>
</dl>

#### (static) forceAction (battler)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### (static) gainDropItems ()

<dl>
</dl>

#### (static) gainExp ()

<dl>
</dl>

#### (static) gainGold ()

<dl>
</dl>

#### (static) gainRewards ()

<dl>
</dl>

#### (static) getNextSubject () → {[Game_Battler](Game_Battler.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### (static) initMembers ()

<dl>
</dl>

#### (static) inputtingAction ()

<dl>
</dl>

##### Returns:

Game_Action

#### (static) invokeAction (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.html) |  |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### (static) invokeCounterAttack (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.html) |  |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### (static) invokeMagicReflection (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.html) |  |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### (static) invokeNormalAction (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.html) |  |
| `target` | [Game_Battler](Game_Battler.html) |  |

<dl>
</dl>

#### (static) isAborting () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isActionForced () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isBattleEnd () → {Boolean}

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

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isBusy () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isEscaped () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isForcedTurn () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isInputting () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isInTurn () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isTurnEnd () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) makeActionOrders ()

<dl>
</dl>

#### (static) makeEscapeRatio ()

<dl>
</dl>

#### (static) makeRewards ()

<dl>
</dl>

#### (static) onEncounter ()

<dl>
</dl>

#### (static) playBattleBgm ()

<dl>
</dl>

#### (static) playDefeatMe ()

<dl>
</dl>

#### (static) playVictoryMe ()

<dl>
</dl>

#### (static) processAbort ()

<dl>
</dl>

#### (static) processDefeat ()

<dl>
</dl>

#### (static) processEscape () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) processForcedAction ()

<dl>
</dl>

#### (static) processTurn ()

<dl>
</dl>

#### (static) processVictory ()

<dl>
</dl>

#### (static) rateSurprise () → {[Number](Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) refreshStatus ()

<dl>
</dl>

#### (static) replayBgmAndBgs ()

<dl>
</dl>

#### (static) saveBgmAndBgs ()

<dl>
</dl>

#### (static) selectNextCommand ()

<dl>
</dl>

#### (static) selectPreviousCommand ()

<dl>
</dl>

#### (static) setBattleTest (battleTest)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battleTest` | Boolean |  |

<dl>
</dl>

#### (static) setEventCallback (callback)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `callback` | function |  |

<dl>
</dl>

#### (static) setLogWindow (logWindow)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `logWindow` | [Window_BattleLog](Window_BattleLog.html) |  |

<dl>
</dl>

#### (static) setSpriteset (spriteset)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `spriteset` | [Spriteset_Battle](Spriteset_Battle.html) |  |

<dl>
</dl>

#### (static) setStatusWindow (statusWindow)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `statusWindow` | [Window_BattleStatus](Window_BattleStatus.html) |  |

<dl>
</dl>

#### (static) setup (troopId, canEscape, canLose)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopId` | [Number](Number.html) |  |
| `canEscape` | Boolean |  |
| `canLose` | Boolean |  |

<dl>
</dl>

#### (static) startAction ()

<dl>
</dl>

#### (static) startBattle ()

<dl>
</dl>

#### (static) startInput ()

<dl>
</dl>

#### (static) startTurn ()

<dl>
</dl>

#### (static) update ()

<dl>
</dl>

#### (static) updateAction ()

<dl>
</dl>

#### (static) updateBattleEnd ()

<dl>
</dl>

#### (static) updateEvent () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) updateEventMain () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) updateTurn ()

<dl>
</dl>

#### (static) updateTurnEnd ()

<dl>
</dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
