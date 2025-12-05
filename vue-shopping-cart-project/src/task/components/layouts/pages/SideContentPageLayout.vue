<script lang="ts">
type ContentOrientation = 'left' | 'right'
const defaultOrientation = 'right'

interface SideContentPageLayoutProps {
  orientation?: ContentOrientation
}

export { type ContentOrientation, type SideContentPageLayoutProps, defaultOrientation }
</script>

<script setup lang="ts">
const { orientation = defaultOrientation } = defineProps<SideContentPageLayoutProps>()
</script>

<template>
  <div
    class="p-4 md:p-8 lg:p-16 flex flex-col gap-16 lg:flex-row"
    :class="orientation === defaultOrientation ? '' : 'lg:flex-row-reverse'"
  >
    <div class="w-full order-1">
      <slot name="default"></slot>
    </div>

    <div class="w-full max-w-96 self-center lg:self-auto order-2 flex flex-col gap-6">
      <slot name="sidecontent"></slot>
    </div>
  </div>
</template>
