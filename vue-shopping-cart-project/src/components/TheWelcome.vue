<script setup lang="ts">
import { RouterLink } from 'vue-router'

import HelloWorld, { type HelloWorldProps } from '@/components/HelloWorld.vue'

// added example for using interfaces from other files to extend from (e.g. nested components)
interface TestProps extends HelloWorldProps {
  test?: string
}

const testVariable: TestProps = {
  msg: 'You did it!',
  test: 'b',
}

defineProps<TestProps>()
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />

  <div>
    <HelloWorld :msg="testVariable.msg" />

    <nav class>
      <RouterLink class="text-blue-600 cursor-pointer" to="/">Home</RouterLink>
      <!-- added link for shopping cart page -->
      <br />
      <RouterLink class="text-blue-600 cursor-pointer" to="/shoppingcart">ShoppingCart</RouterLink>
    </nav>
  </div>
</template>

<!-- removed "style" section since the project is using tailwindcss -->
