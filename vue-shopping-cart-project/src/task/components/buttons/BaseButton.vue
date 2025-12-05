<script lang="ts">
type ButtonContext = 'Action' | 'Attention' | 'Function' | 'Normal'

interface BaseButtonProps {
  onClickFunction: () => void

  buttonContext?: ButtonContext
  smallRadius?: boolean
  isNoRadius?: boolean
  isDisable?: boolean
}

export { type ButtonContext, type BaseButtonProps }
</script>

<script setup lang="ts">
defineProps<BaseButtonProps>()
</script>

<template>
  <button
    type="button"
    class="hover:cursor-pointer not-disabled:active:brightness-50"
    :class="[
      buttonContext === 'Attention' ? 'bg-task-wildstrawberry' : '',
      buttonContext === 'Action' ? 'bg-task-mountainmeadow' : '',
      buttonContext === 'Function' ? 'bg-task-darkathensgray' : '',
      buttonContext === 'Normal' || !buttonContext ? 'bg-task-black' : '',
      isNoRadius ? '' : smallRadius ? 'rounded-xs' : 'rounded-sm',
    ]"
    :disabled="isDisable"
    @click="onClickFunction"
  >
    <slot name="default"></slot>
  </button>
</template>
