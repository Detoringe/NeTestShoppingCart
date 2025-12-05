<script lang="ts">
import { type ProductImageActionAlternativeTextType } from './ProductImage.vue'

type ProductInformationActionAlternativeTextType = ProductImageActionAlternativeTextType

export { type ProductInformationActionAlternativeTextType }
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import DescriptionText from '@/texts/DescriptionText.vue'
import DescriptionTitle from '@/texts/DescriptionTitle.vue'

import ProductImage from './ProductImage.vue'

interface ProductInformationProps {
  onProductImageAction: () => void

  productColor?: string
  productSize?: string
  productTitle?: string
  productImageUrl?: string
  productInformationActionAlternativeText?: ProductImageActionAlternativeTextType
}

defineProps<ProductInformationProps>()

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-start gap-4 py-3 min-w-0 max-w-80">
    <ProductImage
      @click-action="onProductImageAction"
      :action-alternative-text="productInformationActionAlternativeText"
      :image-url="productImageUrl"
    />

    <div class="flex flex-col min-w-0 w-full">
      <DescriptionTitle class="p-0.5">{{ productTitle }}</DescriptionTitle>

      <div v-if="productColor" class="flex items-baseline p-0.5">
        <DescriptionText class="overflow-visible" :small="true">{{
          t('productInformations.productColor')
        }}</DescriptionText>
        <DescriptionText>{{ productColor }}</DescriptionText>
      </div>

      <div v-if="productSize" class="flex items-baseline p-0.5">
        <DescriptionText class="overflow-visible" :small="true">{{
          t('productInformations.productSize')
        }}</DescriptionText>
        <DescriptionText>{{ productSize }}</DescriptionText>
      </div>
    </div>
  </div>
</template>
