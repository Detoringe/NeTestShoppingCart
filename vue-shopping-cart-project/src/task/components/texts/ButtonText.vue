<script lang="ts">
interface ButtonTextProps {
  buttonText?: string | undefined
}

export { type ButtonTextProps }
</script>

<script setup lang="ts">
const { buttonText } = defineProps<ButtonTextProps>()
</script>

<template>
  <div class="font-roboto text-base font-semibold leading-5 text-task-white px-7 py-2.5">
    {{ buttonText }}
  </div>
</template>
