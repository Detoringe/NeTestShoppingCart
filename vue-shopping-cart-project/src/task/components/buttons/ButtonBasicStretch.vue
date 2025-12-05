<script lang="ts">
import { type ButtonTextSlimProps } from '@/texts/ButtonTextSlim.vue'

import { type BaseButtonProps } from './BaseButton.vue'

interface ButtonBasicProps
  extends Pick<BaseButtonProps, 'buttonContext' | 'isDisable' | 'onClickFunction'>,
    ButtonTextSlimProps {
  test?: string
}
</script>

<script setup lang="ts">
import ButtonTextSlim from '@/texts/ButtonTextSlim.vue'

import BaseButton from './BaseButton.vue'

const { buttonText } = defineProps<ButtonBasicProps>()
</script>

<template>
  <BaseButton
    class="w-full"
    :button-context="'Action'"
    :is-disable="isDisable"
    @click-function="onClickFunction"
  >
    <ButtonTextSlim :button-text="buttonText" />
  </BaseButton>
</template>
