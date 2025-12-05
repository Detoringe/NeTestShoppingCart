<script setup lang="ts"></script>

<template>
  <div
    class="h-4 w-12.5 flex items-center justify-between bg-task-brightathensgray border border-solid border-task-frenchgray"
  >
    <div class="flex items-center justify-center h-3.5 w-3">
      <slot name="leftAction"></slot>
    </div>

    <div class="flex items-center justify-center">
      <slot name="default"></slot>
    </div>

    <div class="flex items-center justify-center h-3.5 w-3">
      <slot name="rightAction"></slot>
    </div>
  </div>
</template>
