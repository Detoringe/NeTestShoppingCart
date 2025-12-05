<script lang="ts">
type BaseSectionTitleComponentType = 'h2' | 'div'

interface BaseSectionProps {
  titleComponentType: BaseSectionTitleComponentType
}

const defaultTitleComponentType: BaseSectionTitleComponentType = 'div'

export { type BaseSectionTitleComponentType, type BaseSectionProps, defaultTitleComponentType }
</script>

<script setup lang="ts">
import { defaultCaptionTextStyle } from '@/texts/DefaultCaptionText.vue'

const { titleComponentType = defaultTitleComponentType } = defineProps<BaseSectionProps>()
</script>

<template>
  <section class="flex flex-col gap-6">
    <component v-if="$slots.title" :is="titleComponentType" :class="defaultCaptionTextStyle">
      <slot name="title"></slot>
    </component>
    <div class="rounded-lg bg-task-white-lilac px-8 py-4 w-full">
      <slot name="default"></slot>
    </div>
  </section>
</template>
