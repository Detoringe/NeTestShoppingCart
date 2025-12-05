<script lang="ts">
type ImageCrossRoundBlackAlternativeTextType = string

export { type ImageCrossRoundBlackAlternativeTextType }
</script>

<script setup lang="ts">
interface ImageCrossRoundBlackProps {
  alternativeText?: ImageCrossRoundBlackAlternativeTextType
}

defineProps<ImageCrossRoundBlackProps>()
</script>

<template>
  <img :alt="alternativeText" src="@/assets/imageCrossRoundBlack.svg" width="12" height="12" />
</template>
