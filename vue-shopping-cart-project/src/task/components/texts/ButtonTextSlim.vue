<script lang="ts">
interface ButtonTextSlimProps {
  buttonText?: string | undefined
}

export { type ButtonTextSlimProps }
</script>

<script setup lang="ts">
const { buttonText } = defineProps<ButtonTextSlimProps>()
</script>

<template>
  <div class="font-lato text-sm font-bold leading-4 text-task-white py-3">
    {{ buttonText }}
  </div>
</template>
