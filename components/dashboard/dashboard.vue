<template>
  <div :class="hasError ? 'bad' : 'good'" class="p-4  text-red-50 alert ">
    <h2> {{ message }} </h2>
    <slot />
  </div>
</template>

<style>
</style>

<script>
export default {}
</script>
