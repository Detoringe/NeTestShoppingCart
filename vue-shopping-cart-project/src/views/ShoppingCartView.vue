<script setup lang="ts">
import SideContentPageLayout from '@/layoutPages/SideContentPageLayout.vue'
import SectionShipping from '@/sections/SectionShipping.vue'
import SectionTotal from '@/sections/SectionTotal.vue'
import ShoppingCartItemList from '@/shoppingcarts/ShoppingCartItemList.vue'
</script>

<template>
  <!-- you can change the orientation here (example for layout changes in design) -->
  <SideContentPageLayout orientation="right">
    <template #sidecontent>
      <SectionTotal title-component-type="h2" />
      <SectionShipping />
    </template>

    <ShoppingCartItemList />
  </SideContentPageLayout>
</template>
