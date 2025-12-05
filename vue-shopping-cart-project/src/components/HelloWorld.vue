<!-- adjusted example created from the vue project creation, to show the way of property handling in the test project -->
<!-- define type interface or variables in a script tag to export for using outside of the component -->
<!-- not confuse this with exposing variables to use them with template refs -->
<script lang="ts">
interface HelloWorldProps {
  msg?: string
}

export { type HelloWorldProps }
</script>

<script setup lang="ts">
// also possible without destructuring
// defineProps<HelloWorldProps>()
const { msg } = defineProps<HelloWorldProps>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
