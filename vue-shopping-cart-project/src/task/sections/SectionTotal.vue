<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n, type NumberOptions } from 'vue-i18n'

import ButtonBasicStretch from '@/buttons/ButtonBasicStretch.vue'
import { useCartStore } from '@/stores/cartStore'
import { useShippingCostStore } from '@/stores/shippingCostStore'

import BaseSection, {
  type BaseSectionProps,
  type BaseSectionTitleComponentType,
} from './BaseSection.vue'
import SectionItemTitleLine from './SectionItemTitleLine.vue'

interface SectionTotalProps extends BaseSectionProps {
  test?: string
}

const defaultTotalTitleComponentType: BaseSectionTitleComponentType = 'h2'
const { titleComponentType = defaultTotalTitleComponentType } = defineProps<SectionTotalProps>()

const currencyFormatOptions: NumberOptions<'currency', 'en-GB'> = {
  currency: 'GBP',
  locale: 'en-GB',
  minimumFractionDigits: 2,
  style: 'currency',
}

const { n, t } = useI18n()

const cartStore = useCartStore()
const shippingCostStore = useShippingCostStore()
const taxValue = computed(() => {
  const defaultTaxPercentage: number = 20

  const subtotalPrice = cartStore.getCartSubtotalPrice()
  const shippingCost = shippingCostStore.shippingCost

  const shippingCostTotalValue = subtotalPrice + shippingCost
  const totalTaxValue = (shippingCostTotalValue / 100) * defaultTaxPercentage

  return totalTaxValue
})
const totalPriceValue = computed(() => {
  const subtotalPrice = cartStore.getCartSubtotalPrice()
  const shippingCost = shippingCostStore.shippingCost
  const currentTaxValue = taxValue.value
  const newTotalPriceValue = subtotalPrice + shippingCost + currentTaxValue

  return newTotalPriceValue
})

const isShowProceedInformation = ref<boolean>(false)
</script>

<template>
  <BaseSection :title-component-type="titleComponentType">
    <template #title>{{ t('sectionTitles.sectionTotal') }}</template>

    <SectionItemTitleLine
      :line-title="t('sectionItemLineTitles.lineTitleSubtotals')"
      :line-value="n(cartStore.getCartSubtotalPrice(), currencyFormatOptions)"
    />
    <SectionItemTitleLine
      :line-title="t('sectionItemLineTitles.lineTitleShipping')"
      :line-value="n(shippingCostStore.shippingCost, currencyFormatOptions)"
    />
    <SectionItemTitleLine
      :line-title="t('sectionItemLineTitles.lineTitleTax')"
      :line-value="n(taxValue, currencyFormatOptions)"
    />
    <SectionItemTitleLine
      :line-title="t('sectionItemLineTitles.lineTitleTotals')"
      :line-value="n(totalPriceValue, currencyFormatOptions)"
      :is-destinction="true"
    />

    <div class="relative">
      <div
        v-if="isShowProceedInformation"
        class="absolute p-2 text-[0.5rem] text-task-wildstrawberry"
      >
        {{ t('informationsTexts.checkoutInformation') }}
      </div>

      <ButtonBasicStretch
        button-context="Action"
        class="mt-5 hover:disabled:cursor-not-allowed"
        :button-text="t('buttonTexts.checkout')"
        :is-disable="isShowProceedInformation"
        @click-function="
          () => {
            isShowProceedInformation = true
          }
        "
      />
    </div>
  </BaseSection>
</template>
