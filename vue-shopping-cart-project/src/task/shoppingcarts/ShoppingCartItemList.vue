<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ButtonBasic from '@/buttons/ButtonBasic.vue'
import ShoppingCartItemListLayout from '@/layoutShoppingCarts/ShoppingCartItemListLayout.vue'
import { useCartStore } from '@/stores/cartStore'
import DefaultCaptionText from '@/texts/DefaultCaptionText.vue'

import ShoppingCartItem from './ShoppingCartItem.vue'

interface ShoppingCartItemListProps {
  test?: string
}

defineProps<ShoppingCartItemListProps>()

const { t } = useI18n()

const cartStore = useCartStore()
</script>

<template>
  <ShoppingCartItemListLayout>
    <template #captionItems="{ firstElementClass, elementClass }">
      <DefaultCaptionText :class="firstElementClass">
        {{ t('shoppingCartCaptions.captionProduct') }}</DefaultCaptionText
      >
      <DefaultCaptionText :class="elementClass">
        {{ t('shoppingCartCaptions.captionPrice') }}</DefaultCaptionText
      >
      <DefaultCaptionText :class="elementClass">
        {{ t('shoppingCartCaptions.captionQuantity') }}</DefaultCaptionText
      >
      <DefaultCaptionText :class="elementClass">
        {{ t('shoppingCartCaptions.captionTotal') }}</DefaultCaptionText
      >
    </template>

    <template #productItems>
      <ShoppingCartItem
        :key="cartItem.id"
        v-for="cartItem in cartStore.cartState"
        :delete-cart-item-function="() => cartStore.cartItemRemove(cartItem.id)"
        :update-amount-function="
          (newAmountValue) => cartStore.cartItemUpdateAmount(cartItem.id, newAmountValue)
        "
        :cart-item-image-url="cartItem.image"
        :cart-item-price="cartItem.price"
        :cart-item-price-amount="cartStore.getCartItemAmountPrice(cartItem.id)"
        :cart-item-title="cartItem.title"
      />
    </template>

    <template #actionItems>
      <div class="flex justify-between">
        <ButtonBasic
          button-context="Action"
          :button-text="t('buttonTexts.addItem')"
          @click-function="
            () => {
              // alternative function to add an item to the cart is used here
              cartStore.testAddCartItem()
              // this function will changed the public product pool, use with caution
              //cartStore.testCartItemResponse()
            }
          "
        />

        <ButtonBasic
          button-context="Attention"
          :button-text="t('buttonTexts.removeAllItems')"
          @click-function="cartStore.clearAllCartItems"
        />
      </div>
    </template>
  </ShoppingCartItemListLayout>
</template>
