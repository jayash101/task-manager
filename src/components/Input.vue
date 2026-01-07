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

/* Tablets (≤ 1024px) */
@media (max-width: 1024px) {
  .label-section input {
    font-size: 0.9rem;
    padding: 1.2vh 1.5vw;
  }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  .label-section {
    gap: 1.5vh;
  }

  .label-section label {
    font-size: 0.95rem;
  }

  .label-section input {
    font-size: 1rem;
    padding: 1.4vh 3vw;
  }
}

/* Small Mobile (≤ 480px) */
@media (max-width: 480px) {
  .label-section label {
    font-size: 0.9rem;
  }

  .label-section input {
    font-size: 0.95rem;
    padding: 1.6vh 4vw;
  }
}
</style>
