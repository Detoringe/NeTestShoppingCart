import { ref, toValue, watchEffect } from 'vue'

interface FakeAPIResponseData {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
}

interface DummyProductRequest {
  title: string
  price: number
}

interface DummyProduct extends DummyProductRequest {
  title: string
  price: number
  id: number
}

const useFakeAPIData = () => {
  const defaultData: FakeAPIResponseData[] = []
  const fallbackData: FakeAPIResponseData[] = []
  const fakeAPIURL: string = 'https://fakestoreapi.com/products'
  const fakeAPIResponseData = ref<FakeAPIResponseData[]>(defaultData)

  /**
   * this is the way, the readme mentioned to add an item to the shopping cart
   * but this way an item would be added to the public product pool,
   * since the shopping cart feature is not used,
   * therefore an alternative function was implemented (see stores/cartStore.ts)
   */
  const testAddDummyData = async () => {
    // example code from readme is used here
    const dummyProduct: DummyProductRequest = { title: 'New Product', price: 29 }
    const dummyProductResponse = await fetch(fakeAPIURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dummyProduct),
    })
      .then(async (response) => await response.json())
      .then((data: DummyProduct) => {
        // when this function is used, here is a log to see that the function worked
        console.info('add item', data)
        return data
      })
      .catch((error: unknown) => {
        console.error(error)
      })

    /**
     * since the public pool of products was changed, this
     * section removes the added item from the product pool
     */
    if (dummyProductResponse) {
      fetch(fakeAPIURL.concat(dummyProductResponse.id.toFixed(0)), {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => console.log('delete item', data))
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }

  const loadData = async () => {
    const currentURL = toValue(fakeAPIURL)

    const newResponseData = await fetch(currentURL)
      .then(async (fetchResponse) => {
        const jsonData: FakeAPIResponseData[] | undefined = await fetchResponse
          .json()
          .then((newData) => {
            //add aditional type and data checking

            return newData
          })
          .catch((possibleJSONError: unknown) => {
            if (possibleJSONError instanceof Error) {
              console.error('json error object')
            } else {
              console.error('unknown json error')
            }

            return undefined
          })

        if (jsonData) {
          return jsonData
        }

        return fallbackData
      })
      // best practice way to handle different error types
      .catch((possibleFetchError: unknown) => {
        if (possibleFetchError instanceof Error) {
          console.error(
            possibleFetchError.name,
            possibleFetchError.message,
            possibleFetchError.stack,
          )
        } else {
          console.error(possibleFetchError)
        }

        return fallbackData
      })

    if (newResponseData) {
      fakeAPIResponseData.value = newResponseData
    }
  }

  watchEffect(loadData)

  return { testAddDummyData, fakeAPIResponseData }
}

export { type FakeAPIResponseData, useFakeAPIData }
