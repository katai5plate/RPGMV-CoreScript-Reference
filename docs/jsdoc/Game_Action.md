# Class: Game_Action

## Game_Action ()

#### new Game_Action ()

Game_Action The game object class representing a battle action.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `EFFECT_RECOVER_HP` | [Number](Number.md) | [static] |
| `EFFECT_RECOVER_MP` | [Number](Number.md) | [static] |
| `EFFECT_GAIN_TP` | [Number](Number.md) | [static] |
| `EFFECT_ADD_STATE` | [Number](Number.md) | [static] |
| `EFFECT_REMOVE_STATE` | [Number](Number.md) | [static] |
| `EFFECT_ADD_BUFF` | [Number](Number.md) | [static] |
| `EFFECT_ADD_DEBUFF` | [Number](Number.md) | [static] |
| `EFFECT_REMOVE_BUFF` | [Number](Number.md) | [static] |
| `EFFECT_REMOVE_DEBUFF` | [Number](Number.md) | [static] |
| `EFFECT_SPECIAL` | [Number](Number.md) | [static] |
| `EFFECT_GROW` | [Number](Number.md) | [static] |
| `EFFECT_LEARN_SKILL` | [Number](Number.md) | [static] |
| `EFFECT_COMMON_EVENT` | [Number](Number.md) | [static] |
| `SPECIAL_EFFECT_ESCAPE` | [Number](Number.md) | [static] |
| `HITTYPE_CERTAIN` | [Number](Number.md) | [static] |
| `HITTYPE_PHYSICAL` | [Number](Number.md) | [static] |
| `HITTYPE_MAGICAL` | [Number](Number.md) | [static] |
| `_subjectActorId` | [Number](Number.md) |  |
| `_subjectEnemyIndex` | [Number](Number.md) |  |
| `_targetIndex` | [Number](Number.md) |  |
| `_forcing` | Boolean |  |
| `_item` | [Game_Item](Game_Item.md) |  |

<dl>
</dl>

### Methods

#### (static) initialize (subject, forcing)

 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) |  |
| `forcing` | Boolean |  |

<dl>
</dl>

#### apply (target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### applyCritical (damage) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### applyGlobal ()

<dl>
</dl>

#### applyGuard (damage, target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) |  |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### applyItemEffect (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### applyItemUserEffect (target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### applyVariance (damage, variance) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) |  |
| `variance` | [Number](Number.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### calcElementRate (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### checkDamageType (list) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkItemScope (list) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### clear ()

<dl>
</dl>

#### confusionTarget () → {[Game_Battler](Game_Battler.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### decideRandomTarget ()

<dl>
</dl>

#### elementsMaxRate (target, elements) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `elements` | [Array](Array.md).<[Number](Number.md)> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### evalDamageFormula (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### evaluate () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### evaluateWithTarget (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### executeDamage (target, value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### executeHpDamage (target, value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### executeMpDamage (target, value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### friendsUnit () → {[Game_Unit](Game_Unit.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Unit</a></span>
                </dd>
            </dl>

#### gainDrainedHp (value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### gainDrainedMp (value)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### hasItemAnyValidEffects (target) → {Boolean}

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

#### isAttack () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCertainHit () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDamage () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDrain () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForAll () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForDeadFriend () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForFriend () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForOne () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForOpponent () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForRandom () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isForUser () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isGuard () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isHpEffect () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isHpRecover () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isItem () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMagical () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMagicSkill () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMpEffect () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMpRecover () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isPhysical () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isRecover () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isSkill () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isValid () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### item () → {[RPG.UsableItem](RPG.UsableItem.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>RPG.UsableItem</a></span>
                </dd>
            </dl>

#### itemCnt (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemCri (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemEffectAddAttackState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddBuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddDebuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddNormalState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectCommonEvent (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectGainTp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectGrow (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectLearnSkill (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRecoverHp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRecoverMp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveBuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveDebuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectSpecial (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEva (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemHit (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemMrf (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### itemTargetCandidates () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### lukEffectRate (target) → {[Number](Number.md)}

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
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### makeDamageValue (target, critical) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `critical` | Boolean |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### makeSuccess (target)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### makeTargets () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### needsSelection () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### numRepeats () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### numTargets () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### opponentsUnit () → {[Game_Unit](Game_Unit.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Unit</a></span>
                </dd>
            </dl>

#### prepare ()

<dl>
</dl>

#### repeatTargets (targets) → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `targets` | [Array](Array.md).<[Game_Battler](Game_Battler.md)> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### setAttack ()

<dl>
</dl>

#### setConfusion ()

<dl>
</dl>

#### setEnemyAction (action)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `action` | [RPG.Enemy.Action](RPG.Enemy.Action.md) |  |

<dl>
</dl>

#### setGuard ()

<dl>
</dl>

#### setItem (itemId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `itemId` | [Number](Number.md) |  |

<dl>
</dl>

#### setItemObject (object)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
</dl>

#### setSkill (skillId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

#### setSubject (subject)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### setTarget (targetIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `targetIndex` | [Number](Number.md) |  |

<dl>
</dl>

#### speed () → {[Number](Number.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### subject () → {[Game_Battler](Game_Battler.md)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Game_Battler</a></span>
                </dd>
            </dl>

#### targetsForFriends () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### targetsForOpponents () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;<a>Game_Battler</a>&gt;</span>
                </dd>
            </dl>

#### testApply (target) → {Boolean}

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

#### testItemEffect (target, effect) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>
 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc)
