<script setup lang="ts"></script>

<template>
  <div class="w-full">
    <div class="flex justify-between">
      <slot
        name="captionItems"
        :firstElementClass="'text-left w-2/5'"
        :elementClass="'w-1/5'"
      ></slot>
    </div>

    <div class="mt-1 max-h-96 overflow-y-auto">
      <slot name="productItems"></slot>
    </div>

    <div class="mt-6">
      <slot name="actionItems"> </slot>
    </div>
  </div>
</template>
