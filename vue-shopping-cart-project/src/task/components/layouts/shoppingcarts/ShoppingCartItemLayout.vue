<script setup lang="ts"></script>

<template>
  <div class="pb-3.5">
    <div class="flex items-center justify-between">
      <div class="w-2/5">
        <slot name="productInformation"></slot>
      </div>

      <div class="w-1/5 flex justify-center px-3">
        <slot name="price"></slot>
      </div>

      <div class="w-1/5 flex justify-center px-3">
        <slot name="amount"></slot>
      </div>

      <div class="w-1/5 flex justify-center px-3">
        <slot name="subtotalPrice"></slot>
      </div>
    </div>

    <slot name="default"></slot>
  </div>
</template>
