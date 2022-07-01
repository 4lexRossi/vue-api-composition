<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="handleButtonClick">close modal</button>
    </div>
  </teleport>
</template>

<script setup>
/*
  props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No title',
  },
});

/*
  emit
*/
  const emit = defineEmits(['hideModal'])

  const handleButtonClick = () => {
    emit('hideModal')
  }

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
