<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = !showModal">Show modal</button>
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>I'm a modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
          corporis ab molestiae totam. Dolorum voluptatibus, magnam quaerat amet
          blanditiis harum modi corrupti pariatur eveniet, accusamus et,
          corporis voluptatem quibusdam?
        </p>
        <button @click="showModal = false">close modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';

/*
  modals
*/
const showModal = ref(false);
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
