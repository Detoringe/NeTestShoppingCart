<script setup lang="ts">
interface DescriptionTextProps {
  small?: boolean
}

defineProps<DescriptionTextProps>()
</script>

<template>
  <div
    class="font-roboto font-normal text-task-cadetblue text-left truncate"
    :class="small ? 'text-xs leading-3.5' : 'text-sm leading-4'"
  >
    <slot name="default"></slot>
  </div>
</template>
