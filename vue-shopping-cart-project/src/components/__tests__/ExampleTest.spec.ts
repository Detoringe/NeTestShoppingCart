// example file for testing
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import CounterAmount, { type CounterAmountProps } from '../../task/counters/CounterAmount.vue'
import { useShippingCostStore } from '../../task/stores/shippingCostStore'

describe('Example Component Tests', () => {
  it('counter function test', () => {
    const counterAmountTestID: string = '[data-test="counter-amount-test-id"]'
    const counterAmountButtonDecrementTestID: string =
      '[data-test="counter-amount-button-decrement-id"]'
    const counterAmountButtonIncrementTestID: string =
      '[data-test="counter-amount-button-increment-id"]'

    const testAmountInitialValue: number = 20
    const testDecrementAmountValue: number = 19
    const testIncrementAmountValue: number = 21
    const counterAmountProps: CounterAmountProps = {
      amountValue: testAmountInitialValue,
    }

    const wrapper = mount(CounterAmount, { props: counterAmountProps })
    const couterAmountTextComponent = wrapper.findComponent(counterAmountTestID)
    const couterAmountButtonDecrementComponent = wrapper.findComponent(
      counterAmountButtonDecrementTestID,
    )
    const couterAmountButtonIncrementComponent = wrapper.findComponent(
      counterAmountButtonIncrementTestID,
    )

    expect(couterAmountTextComponent).toBeDefined()
    expect(couterAmountTextComponent.text()).toContain(testAmountInitialValue)

    expect(couterAmountButtonDecrementComponent).toBeDefined()

    couterAmountButtonDecrementComponent.trigger('click')
    expect(wrapper.emitted('amountChanged')?.[0]).toContain(testDecrementAmountValue)

    expect(couterAmountButtonIncrementComponent).toBeDefined()
    couterAmountButtonIncrementComponent.trigger('click')
    couterAmountButtonIncrementComponent.trigger('click')
    expect(wrapper.emitted('amountChanged')?.[2]).toContain(testIncrementAmountValue)
  })
})

describe('Example Store Tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('random shipping cost', () => {
    const testInitialCostValue: number = 0
    const testPossibleRandomValues: number[] = [0, 50, 100, 5.99, 15.99, 35.7]

    const shippingCostStore = useShippingCostStore()

    expect(shippingCostStore.shippingCost).toBe(testInitialCostValue)

    shippingCostStore.generateRandomCostIndex()

    expect(shippingCostStore.shippingCost).oneOf(testPossibleRandomValues)
  })
})
