import { type FakeAPIResponseData, useFakeAPIData } from '@/composables/useFakeApiData'
import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

type CartItem = FakeAPIResponseData
type CartItemUpdateAmountFunctionType = (itemID: number, amountValue: number) => void
type ClearAllCartItemsFunctionType = () => void
type GetCartItemAmountPriceFunctionType = (itemID: number) => number
type GetCartSubtotalPriceFunctionType = () => number

interface AdditionalCartItemData {
  amount: number
  amountPrice: number
}

type AdditionalDataMap = Map<number, AdditionalCartItemData>

const useCartStore = defineStore('cartStore', () => {
  const defaultAmountValue: number = 1
  const defaultAdditionalDataMap: AdditionalDataMap = new Map()

  /**
   * the api object do not have additional attributes
   * some apis do not accept object with additional attributes
   * so they kept seperate from the original api objects
   */
  const cartAdditionalDataMap = ref<AdditionalDataMap>(defaultAdditionalDataMap)
  const defaultCartData: CartItem[] = []
  const cartState = ref<CartItem[]>(defaultCartData)
  const isCartItemClear = ref<boolean>(false)

  const { testAddDummyData, fakeAPIResponseData } = useFakeAPIData()

  /**
   * note: functions sorted alphabetically
   */

  const calculateAmountPrice = (itemID: number, amountValue: number) => {
    const cartList = cartState.value
    const cartItem = cartList.find((cartItem) => cartItem.id === itemID)

    if (cartItem) {
      return cartItem.price * amountValue
    }

    return 0
  }

  const cartItemRemove = (itemID: number) => {
    const cartList = cartState.value
    cartAdditionalDataMap.value.delete(itemID)

    const cartItemIndex = cartList.findIndex((cartItem) => cartItem.id === itemID)
    if (cartItemIndex !== -1) {
      cartList.splice(cartItemIndex, 1)
    }
  }

  const cartItemUpdateAmount: CartItemUpdateAmountFunctionType = (itemID, amountValue) => {
    const newAmountPrice = calculateAmountPrice(itemID, amountValue)
    const newAdditionalData: AdditionalCartItemData = {
      amount: amountValue,
      amountPrice: newAmountPrice,
    }

    cartAdditionalDataMap.value.set(itemID, newAdditionalData)
  }

  const clearAllCartItems: ClearAllCartItemsFunctionType = () => {
    cartAdditionalDataMap.value.clear()
    cartState.value = defaultCartData
    isCartItemClear.value = true
  }

  const getCartItemAmountPrice: GetCartItemAmountPriceFunctionType = (itemID) => {
    const defaultAmountPrice: number = 0

    const cartItem = cartAdditionalDataMap.value.get(itemID)
    if (cartItem) {
      return cartItem.amountPrice
    }

    return defaultAmountPrice
  }

  const getCartSubtotalPrice: GetCartSubtotalPriceFunctionType = () => {
    let subtotalPrice: number = 0
    const additioncalDataMap = cartAdditionalDataMap.value

    for (const dataItemKey of additioncalDataMap.keys()) {
      const currentDataItem = additioncalDataMap.get(dataItemKey)

      if (currentDataItem) {
        subtotalPrice += currentDataItem.amountPrice
      }
    }

    return subtotalPrice
  }

  // alternative functio to add an item to the cart
  const testAddCartItem = () => {
    const testProduct: CartItem = {
      id: 99,
      price: 29,
      title: 'New Product',
      category: '',
      description: '',
      image: '',
    }
    const testProductAdditionalData: AdditionalCartItemData = {
      amount: 1,
      amountPrice: testProduct.price,
    }

    const cartList = cartState.value
    const cartItemIndex = cartList.findIndex((cartItem) => cartItem.id === testProduct.id)
    if (cartItemIndex === -1) {
      cartState.value = cartList.concat(testProduct)
      cartAdditionalDataMap.value.set(testProduct.id, testProductAdditionalData)
    }
  }

  // this function will changed the public product pool, so it is not recommended to use this
  const testCartItemResponse = () => {
    testAddDummyData()
  }

  watchEffect(() => {
    // fetch data when cart was not cleared, only (intended in this example)
    if (!isCartItemClear.value) {
      const fakeAPIResponseList = fakeAPIResponseData.value
      const additioncalDataMap = cartAdditionalDataMap.value

      fakeAPIResponseList.forEach((fakeAPIResponseItem) => {
        const itemID = fakeAPIResponseItem.id
        const itemPrice = fakeAPIResponseItem.price

        if (!additioncalDataMap.has(itemID)) {
          const newAdditionalData: AdditionalCartItemData = {
            amount: defaultAmountValue,
            amountPrice: itemPrice,
          }
          additioncalDataMap.set(itemID, newAdditionalData)
        }
      })

      cartState.value = fakeAPIResponseList
    }
  })

  return {
    cartItemRemove,
    cartItemUpdateAmount,
    cartState,
    clearAllCartItems,
    getCartItemAmountPrice,
    getCartSubtotalPrice,
    testAddCartItem,
    testCartItemResponse,
  }
})

export { useCartStore }
