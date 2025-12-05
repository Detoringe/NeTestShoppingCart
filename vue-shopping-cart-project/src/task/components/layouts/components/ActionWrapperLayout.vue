<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="absolute h-3 w-3 -top-1.5 -right-1.5">
      <slot name="action"></slot>
    </div>
    <slot name="default"></slot>
  </div>
</template>
