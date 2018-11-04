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
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` | [Game_Battler](Game_Battler.md) |  |
| `forcing` | Boolean |  |

<dl>
</dl>

#### apply (target)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>
[Number](Number.md)
#### applyCritical (damage) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Number](Number.md)
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
[Number](Number.md)
#### applyGuard (damage, target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Number](Number.md)
| `damage` | [Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### applyItemUserEffect (target)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>
[Number](Number.md)
#### applyVariance (damage, variance) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Number](Number.md)
| `damage` | [N[Number](Number.md)  |
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
[Number](Number.md)
#### calcElementRate (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
| --- | ---[Array](Array.md)[Number](Number.md)
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
| --- | ---[Array](Array.md)[Number](Number.md)
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
[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### elementsMaxRate (target, elements) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [G[Array](Array.md)at[Number](Number.md)
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
[Number](Number.md)
#### evalDamageFormula (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
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
[Number](Number.md)
#### evaluateWithTarget (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` |[Number](Number.md)Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### executeHpDamage (target, value)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` |[Number](Number.md)Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### executeMpDamage (target, value)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` |[Number](Number.md)Battler.md) |  |
| `value` | [Number](Number.md) |  |

<dl>
</dl>
[Game_Unit](Game_Unit.md)
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
| --- | --- [Number](Number.md)
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### gainDrainedMp (value)

##### Parameters:

| Name | Type | Description |
| --- | --- [Number](Number.md)
| `value` | [Number](Number.md) |  |

<dl>
</dl>

#### hasItemAnyValidEffects (target) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[RPG.UsableItem](RPG.UsableItem.md)
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
[Number](Number.md)
#### itemCnt (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### itemCri (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddBuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddDebuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddNormalState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectAddState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectCommonEvent (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectGainTp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectGrow (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectLearnSkill (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRecoverHp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRecoverMp (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveBuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveDebuff (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectRemoveState (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>

#### itemEffectSpecial (target, effect)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
| `effect` | [RPG.Effect](RPG.Effect.md) |  |

<dl>
</dl>
[Number](Number.md)
#### itemEva (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### itemHit (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### itemMrf (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Array](Array.md)[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### lukEffectRate (target) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
#### makeDamageValue (target, critical) → {[Number](Number.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- |[Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>
[Array](Array.md)[Game_Battler](Game_Battler.md)
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
[Number](Number.md)
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
[Number](Number.md)
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
[Game_Unit](Game_Unit.md)
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
[Array](Array.md)[Game_Battler](Game_Battler.md)
#### repeatTargets (targets) → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}

##### Parameters:

| Name | Type | Description |
| --- | --- | [Array](Array.md)[Game_Battler](Game_Battler.md)
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
| --- | --- |[RPG.Enemy.Action](RPG.Enemy.Action.md)
| `action` | [RPG.Enemy.Action](RPG.Enemy.Action.md) |  |

<dl>
</dl>

#### setGuard ()

<dl>
</dl>

#### setItem (itemId)

##### Parameters:

| Name | Type | Description |
| --- | --- |[Number](Number.md)
| `itemId` | [Number](Number.md) |  |

<dl>
</dl>

#### setItemObject (object)

##### Parameters:

| Name | Type | Description |
| --- | --- |[RPG.UsableItem](RPG.UsableItem.md)
| `object` | [RPG.UsableItem](RPG.UsableItem.md) |  |

<dl>
</dl>

#### setSkill (skillId)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Number](Number.md)
| `skillId` | [Number](Number.md) |  |

<dl>
</dl>

#### setSubject (subject)

##### Parameters:

| Name | Type | Description |
| --- | --- | [Game_Battler](Game_Battler.md)
| `subject` | [Game_Battler](Game_Battler.md) |  |

<dl>
</dl>

#### setTarget (targetIndex)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- [Number](Number.md)
| `targetIndex` | [Number](Number.md) |  |

<dl>
</dl>
[Number](Number.md)
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
[Game_Battler](Game_Battler.md)
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
[Array](Array.md)[Game_Battler](Game_Battler.md)
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
[Array](Array.md)[Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
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
| --- | --- |[Game_Battler](Game_Battler.md)
| `target` | [RPG.Effect](RPG.Effect.md)tml) |  |
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
