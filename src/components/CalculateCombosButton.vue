<template>
  <button class="calculate-button" @click.prevent="submit" for="form-button">
    <slot>Default Value</slot>
  </button>
</template>

<script setup>
const emits = defineEmits(['click'])

const submit = () => {
  emits('click')
}
</script>

<style scoped>
button {
  border: 5px solid black;
  border-radius: 1em;
  padding: 20px;
  font-size: 18px;
  max-width: 300px;
  align-self: center;
  background-color: #ebe9ec;
}

button:hover {
  cursor: pointer;
  background-color: #f5f4f6;
  text-decoration: 2px darkred underline;
}
</style>
