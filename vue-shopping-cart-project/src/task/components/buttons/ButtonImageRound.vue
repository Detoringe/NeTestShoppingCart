<script lang="ts">
import { type BaseButtonProps } from './BaseButton.vue'

interface ButtonImageRoundProps extends Pick<BaseButtonProps, 'onClickFunction'> {
  test?: string
}

export { type ButtonImageRoundProps }
</script>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

defineProps<ButtonImageRoundProps>()
</script>

<template>
  <BaseButton
    class="rounded-full keepPosition"
    :is-no-radius="true"
    @click-function="onClickFunction"
  >
    <slot name="default"></slot>
  </BaseButton>
</template>

<style>
.keepPosition {
  position: inherit;
}
</style>
