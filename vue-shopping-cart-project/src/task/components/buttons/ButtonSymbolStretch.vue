<script lang="ts">
import { type ButtonFunctionTextProps } from '@/texts/ButtonFunctionText.vue'

import { type BaseButtonProps } from './BaseButton.vue'

interface ButtonSymbolProps
  extends Pick<BaseButtonProps, 'buttonContext' | 'onClickFunction'>,
    ButtonFunctionTextProps {
  buttonText?: '+' | '-'
}
</script>

<script setup lang="ts">
import ButtonFunctionText from '@/texts/ButtonFunctionText.vue'

import BaseButton from './BaseButton.vue'

const { buttonText } = defineProps<ButtonSymbolProps>()
</script>

<template>
  <BaseButton
    class="w-full"
    :button-context="'Function'"
    :is-no-radius="true"
    @click-function="onClickFunction"
  >
    <ButtonFunctionText :button-text="buttonText" />
  </BaseButton>
</template>
