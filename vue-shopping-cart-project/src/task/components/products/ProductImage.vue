<script lang="ts">
import ButtonImageRound from '@/buttons/ButtonImageRound.vue'
import { type ImageCrossRoundBlackAlternativeTextType } from '@/images/ImageCrossRoundBlack.vue'

type ProductImageActionAlternativeTextType = ImageCrossRoundBlackAlternativeTextType

const productImageAlternativeText: string = 'product image'

export { type ProductImageActionAlternativeTextType, productImageAlternativeText }
</script>

<script setup lang="ts">
import ImageCrossRoundBlack from '@/images/ImageCrossRoundBlack.vue'
import ActionWrapperLayout from '@/layoutComponents/ActionWrapperLayout.vue'

interface ProductImageProps {
  onClickAction: () => void

  actionAlternativeText?: ProductImageActionAlternativeTextType
  imageUrl?: string
}

defineProps<ProductImageProps>()
</script>

<template>
  <ActionWrapperLayout>
    <template #action>
      <ButtonImageRound @click-function="onClickAction">
        <ImageCrossRoundBlack :alternative-text="actionAlternativeText" />
      </ButtonImageRound>
    </template>

    <template #default>
      <div class="rounded-sm bg-task-silver h-20 w-20">
        <img
          v-if="imageUrl"
          :alt="productImageAlternativeText"
          class="h-full w-full object-contain"
          :src="imageUrl"
          width="80"
          height="80"
        />
      </div>
    </template>
  </ActionWrapperLayout>
</template>
