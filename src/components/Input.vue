<template>
  <section class="label-section">
    <label for="input">{{ label }}</label>

    <input
      type="text"
      id="input"
      :placeholder="placeholder"
      v-model="model"
      :disabled="disabled"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  placeholder?: string;
  disabled?: boolean;
}>();

const model = defineModel<string>();
</script>

<style scoped>
.label-section {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.label-section label {
  font-weight: 500;
  color: darkcyan;
}

.label-section input {
  border: none;
  border-radius: 0.2rem;
  padding: 1vh 0.5vw;
  font-size: 0.8rem;
  color: #0069a5;
}

.label-section input:focus {
  outline: 0.1rem solid #03045e;
}

.label-section input:disabled {
  background-color: #fff;
}
</style>
