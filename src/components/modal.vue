<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">close modal</button>
      <div>
        username is: {{userData.username}}
      </div>
    </div>
  </teleport>
</template>

<script setup>
/*
  imports
*/
  import { inject } from 'vue';

/*
  props
*/
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'No title',
    }
  });

/*
  emit
*/
  const emit = defineEmits(['update:modelValue']);

  const userData = inject('userData')
// const handleButtonClick = () => {
//   emit('update:modelValue', false);
// };
</script>

<style scoped>
.modal {
  background: beige;
  color: black;
  padding: 2em;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
