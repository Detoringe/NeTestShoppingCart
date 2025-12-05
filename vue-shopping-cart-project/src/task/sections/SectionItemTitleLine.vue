<script setup lang="ts">
interface SectionItemTitleLineProps {
  isDestinction?: boolean
  lineTitle?: string
  lineValue?: string
}

defineProps<SectionItemTitleLineProps>()
</script>

<template>
  <div class="w-full">
    <div
      class="flex items-center justify-between font-lato"
      :class="isDestinction ? 'pt-8 pb-3' : 'py-3'"
    >
      <div class="text-lg leading-6 font-semibold text-task-biscay">{{ lineTitle }}</div>
      <div class="text-base leading-5 font-normal text-task-bluezodiac">
        {{ lineValue }}
      </div>
    </div>
    <hr
      class="border-t-2 border-b-0 border-solid border-task-whisper"
      :class="isDestinction ? 'mr-1' : 'mx-0.5'"
    />
  </div>
</template>
