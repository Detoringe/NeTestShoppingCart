<script lang="ts">
import { type ButtonTextProps } from '@/texts/ButtonText.vue'

import { type BaseButtonProps } from './BaseButton.vue'

interface ButtonBasicProps
  extends Pick<BaseButtonProps, 'buttonContext' | 'onClickFunction'>,
    ButtonTextProps {
  test?: string
}
</script>

<script setup lang="ts">
import ButtonText from '@/texts/ButtonText.vue'

import BaseButton from './BaseButton.vue'

const { buttonContext, buttonText } = defineProps<ButtonBasicProps>()
</script>

<template>
  <BaseButton
    :button-context="buttonContext"
    :small-radius="true"
    @click-function="onClickFunction"
  >
    <ButtonText :button-text="buttonText" />
  </BaseButton>
</template>
