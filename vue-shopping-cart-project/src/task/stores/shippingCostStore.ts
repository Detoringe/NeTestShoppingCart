import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useShippingCostStore = defineStore('shippingCostStore', () => {
  const defaultShippingCostValue: number = 0
  const shippingCostValueList = [defaultShippingCostValue, 50, 100, 5.99, 15.99, 35.7]
  const defaultCostIndex: number = 0
  const randomCostIndex = ref(defaultCostIndex)

  const generateRandomCostIndex = () => {
    const newCostIndex = Math.floor(Math.random() * shippingCostValueList.length)

    randomCostIndex.value = newCostIndex
  }

  const shippingCost = computed(() => {
    const shippingCostValue = shippingCostValueList[randomCostIndex.value]

    if (shippingCostValue) {
      return shippingCostValue
    }
    return defaultShippingCostValue
  })

  return { generateRandomCostIndex, shippingCost }
})

export { useShippingCostStore }
