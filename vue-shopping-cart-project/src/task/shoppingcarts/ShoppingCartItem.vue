<script lang="ts">
import { type CounterAmountChangeAmountEmitFunctionType } from '@/counters/CounterAmount.vue'
import ShoppingCartItemLayout from '@/layoutShoppingCarts/ShoppingCartItemLayout.vue'

type CartItemDeleteFunctionType = () => void
type CartItemUpdateAmountFunctionType = CounterAmountChangeAmountEmitFunctionType

const cartItemDefaultPrice: number = 0

export {
  type CartItemDeleteFunctionType,
  type CartItemUpdateAmountFunctionType,
  cartItemDefaultPrice,
}
</script>

<script setup lang="ts">
import { useI18n, type NumberOptions } from 'vue-i18n'

import CounterAmount from '@/counters/CounterAmount.vue'
import ProductInformation from '@/products/ProductInformation.vue'
import DefaultText from '@/texts/DefaultText.vue'

interface ShoppingCartItemProps {
  deleteCartItemFunction: CartItemDeleteFunctionType
  updateAmountFunction: CartItemUpdateAmountFunctionType

  cartItemImageUrl?: string
  cartItemPrice?: number
  cartItemPriceAmount?: number
  cartItemTitle?: string
}

const currencyFormatOptionsPound: NumberOptions<'currency', 'en-GB'> = {
  currency: 'GBP',
  locale: 'en-GB',
  minimumFractionDigits: 2,
  style: 'currency',
}
const currencyFormatOptionsDollar: NumberOptions<'currency', 'en-US'> = {
  currency: 'USD',
  locale: 'en-US',
  minimumFractionDigits: 2,
  style: 'currency',
}

const { cartItemPrice = cartItemDefaultPrice, cartItemPriceAmount = cartItemDefaultPrice } =
  defineProps<ShoppingCartItemProps>()

const { n, t } = useI18n()

const dummyProductColor: string = 'blue'
const dummyProductSize: string = 'XL'
</script>

<template>
  <ShoppingCartItemLayout>
    <template #productInformation>
      <ProductInformation
        @product-image-action="deleteCartItemFunction"
        :product-color="dummyProductColor"
        :product-size="dummyProductSize"
        :product-title="cartItemTitle"
        :product-image-url="cartItemImageUrl"
        :product-information-action-alternative-text="
          t('imageAlternativeTexts.altTextCartItemDeleteAction')
        "
      />
    </template>

    <template #price>
      <DefaultText>
        {{ n(cartItemPrice, currencyFormatOptionsDollar) }}
      </DefaultText>
    </template>

    <template #amount>
      <CounterAmount @amount-changed="(newAmountValue) => updateAmountFunction(newAmountValue)" />
    </template>

    <template #subtotalPrice>
      <DefaultText>
        {{ n(cartItemPriceAmount, currencyFormatOptionsPound) }}
      </DefaultText>
    </template>

    <template #default>
      <hr class="border-t border-b-0 border-solid border-task-iron" />
    </template>
  </ShoppingCartItemLayout>
</template>
