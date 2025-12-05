<script lang="ts">
interface ButtonFunctionTextProps {
  buttonText?: string | undefined
}

export { type ButtonFunctionTextProps }
</script>

<script setup lang="ts">
const { buttonText } = defineProps<ButtonFunctionTextProps>()
</script>

<template>
  <div class="font-roboto font-normal text-xs leading-3.5 text-task-frenchgray">
    {{ buttonText }}
  </div>
</template>
