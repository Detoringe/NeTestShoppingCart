<script lang="ts">
import type { HTMLAttributes } from 'vue'

const defaultCaptionTextStyle: HTMLAttributes['class'] =
  'font-roboto text-lg font-bold leading-6 text-task-biscay text-center'

export { defaultCaptionTextStyle }
</script>

<script setup lang="ts">
const localDefaultCaptionTextStyle: HTMLAttributes['class'] = defaultCaptionTextStyle
</script>

<template>
  <div :class="localDefaultCaptionTextStyle">
    <slot name="default"></slot>
  </div>
</template>
