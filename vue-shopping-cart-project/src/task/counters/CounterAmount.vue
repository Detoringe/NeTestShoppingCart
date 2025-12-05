<script lang="ts">
type CounterAmountChangeAmountEmitFunctionType = (newAmountValue: number) => void

interface CounterAmountProps {
  amountValue?: number
}

const counterAmountChangeAmountEmitKey = 'amountChanged'

interface CounterAmountEmits {
  amountChanged: [newAmountValue: number]
}

export {
  type CounterAmountChangeAmountEmitFunctionType,
  type CounterAmountEmits,
  type CounterAmountProps,
  counterAmountChangeAmountEmitKey,
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

import ButtonSymbol from '@/buttons/ButtonSymbolStretch.vue'
import CounterAmountLayout from '@/layoutComponents/CounterAmountLayout.vue'
import FunctionText from '@/texts/FunctionText.vue'

const { amountValue } = defineProps<CounterAmountProps>()
const emits = defineEmits<CounterAmountEmits>()

const amountDefaultValue: number = 1
const amountMaxValue: number = 50
const amountMinValue: number = 1
const currentInitialAmountValue = amountValue ? amountValue : amountDefaultValue
const amountValueRef = ref(currentInitialAmountValue)

const amountDecrement = (decrementValue?: number) => {
  const defaultDecrementValue: number = 1
  const currentDecrementValue = decrementValue ? decrementValue : defaultDecrementValue
  const currentAmountValue = amountValueRef.value

  if (currentAmountValue > amountMinValue) {
    const newAmountValue = currentAmountValue - currentDecrementValue
    amountValueRef.value = newAmountValue
    emits(counterAmountChangeAmountEmitKey, newAmountValue)
  }
}

const amountIncrement = (incrementValue?: number) => {
  const defaultIncrementValue: number = 1
  const currentIncrementValue = incrementValue ? incrementValue : defaultIncrementValue
  const currentAmountValue = amountValueRef.value

  if (currentAmountValue < amountMaxValue) {
    const newAmountValue = currentAmountValue + currentIncrementValue
    amountValueRef.value = newAmountValue
    emits(counterAmountChangeAmountEmitKey, newAmountValue)
  }
}
</script>

<template>
  <CounterAmountLayout>
    <template #leftAction>
      <ButtonSymbol
        button-text="-"
        @click-function="
          () => {
            amountDecrement()
          }
        "
        data-test="counter-amount-button-decrement-id"
      />
    </template>

    <template #rightAction>
      <ButtonSymbol
        button-text="+"
        @click-function="
          () => {
            amountIncrement()
          }
        "
        data-test="counter-amount-button-increment-id"
      />
    </template>

    <template #default>
      <FunctionText data-test="counter-amount-test-id">{{ amountValueRef }}</FunctionText>
    </template>
  </CounterAmountLayout>
</template>
