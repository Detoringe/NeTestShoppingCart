<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ButtonBasic from '@/buttons/ButtonBasic.vue'
import { useShippingCostStore } from '@/stores/shippingCostStore'

import BaseSection from './BaseSection.vue'
import SectionItemLine from './SectionItemLine.vue'

interface SectionShippingProps {
  test?: string
}

const {} = defineProps<SectionShippingProps>()

const { t } = useI18n()

const shippingCostStore = useShippingCostStore()

const dummyAddressTown: string = 'Atown'
const dummyAddressStreet: string = 'Mainstreet 1'
const dummyAddressZipcode: string = '13325'
</script>

<template>
  <BaseSection title-component-type="h2">
    <template #title>{{ t('sectionTitles.sectionShipping') }}</template>
    <SectionItemLine :is-highlight="true" :line-value="dummyAddressTown" />
    <SectionItemLine :line-value="dummyAddressStreet" />
    <SectionItemLine :line-value="dummyAddressZipcode" />

    <ButtonBasic
      button-context="Attention"
      class="mt-10"
      :button-text="t('buttonTexts.shippingCalculation')"
      @click-function="() => shippingCostStore.generateRandomCostIndex()"
    />
  </BaseSection>
</template>
