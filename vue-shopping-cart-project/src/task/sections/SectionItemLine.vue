<script setup lang="ts">
interface SectionItemTitleLineProps {
  isHighlight?: boolean
  lineValue?: string
}

defineProps<SectionItemTitleLineProps>()
</script>

<template>
  <div class="w-full">
    <div
      class="flex items-center justify-between font-lato pt-6"
      :class="isHighlight ? '' : 'pb-1'"
    >
      <div
        class="font-semibold"
        :class="
          isHighlight
            ? 'text-lg leading-5.5 text-task-bluezodiac'
            : 'text-sm leading-4 text-task-periwinklegray'
        "
      >
        {{ lineValue }}
      </div>
    </div>
    <hr class="border-t border-b-0 border-solid border-task-blueribbon" />
  </div>
</template>
