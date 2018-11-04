# Class: BattleManager

## BattleManager ()

#### new BattleManager ()

The static class that manages battle progress.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_phase` | [String](String.md) | [static] |
| `_canEscape` | Boolean | [static] [static] |
| `_canLose` | Boolean | [static] |
| `_battleTest` | Boolean | [static] |
| `_eventCallback` | function | [static] |
| `_preemptive` | Boolean | [static] |
| `_surprise` | Boolean | [static] |
| `_actorIndex` | [Number](Number.md) | [static] |
| `_actionForcedBattler` | [Game_Battler](Game_Battler.md) | [static] |
| `_mapBgm` | [MV.AudioParameters](MV.AudioParameters.md) | [static] |
| `_mapBgs` | [MV.AudioParameters](MV.AudioParameters.md) | [static] |
| `_actionBattlers` | [Array](Array.md).<[Game_Battler](Game_Battler.md)> | [static] |
| `_subject` | [Game_Battler](Game_Battler.md) | [static] |
| `_action` | [Game_Action](Game_Action.md) | [static] |
| `_targets` | [Array](Array.md).<[Game_Battler](Game_Battler.md)> | [static] |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.md) | [static] |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) | [static] |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | [static] |
| `_escapeRatio` | [Number](Number.md) | [static] |
| `_escaped` | Boolean | [static] |
| `_rewards` | [MV.BattleRewards](MV.BattleRewards.md) | [static] |

<dl>
</dl>

### Methods

#### (static) abort ()

<dl>
</dl>

#### (static) actor () → {[Game_Actor](Game_Actor.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Actor</a></span>
                </dd>
            </dl>

#### (static) allBattleMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### (static) applySubstitute (target) → {[Game_Battler](Game_Battler.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

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
| `newActorIndex` | [Number](Number.md) |  |
| `lastActorActionState` | [String](String.md) |  |

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
| `target` | [Game_Battler](Game_Battler.md) |  |

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
| `result` | [Number](Number.md) |  |

<dl>
</dl>

#### (static) endTurn ()

<dl>
</dl>

#### (static) forceAction (battler)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) |  |

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

#### (static) getNextSubject () → {[Game_Battler](Game_Battler.md)}

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
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` |[Game_Battler](Game_Battler.md)) |  |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### (static) invokeCounterAttack (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` |[Game_Battler](Game_Battler.md)) |  |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### (static) invokeMagicReflection (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` |[Game_Battler](Game_Battler.md)) |  |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### (static) invokeNormalAction (subject, target)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` |[Game_Battler](Game_Battler.md)) |  |
| `target` | [Game_Battler](Game_Battler.md) |  |

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
[Number](Number.md)
#### (static) rateSurprise () → {[Number](Number.md)}

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
| --- | --- | --[Window_BattleLog](Window_BattleLog.md)
| `logWindow` | [Window_BattleLog](Window_BattleLog.md) |  |

<dl>
</dl>

#### (static) setSpriteset (spriteset)

##### Parameters:

| Name | Type | Description |
| --- | --- | --[Spriteset_Battle](Spriteset_Battle.md)
| `spriteset` | [Spriteset_Battle](Spriteset_Battle.md) |  |

<dl>
</dl>

#### (static) setStatusWindow (statusWindow)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |[Window_BattleStatus](Window_BattleStatus.md)
| `statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) |  |

<dl>
</dl>

#### (static) setup (troopId, canEscape, canLose)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Number](Number.md)
| `troopId` | [Number](Number.md) |  |
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
