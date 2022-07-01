<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = !showModal">Show modal</button>
    <Modal
      v-model="showModal"
      @hideModal="showModal = false"
      title="title via props"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
        corporis ab molestiae totam. Dolorum voluptatibus, magnam quaerat amet
        blanditiis harum modi corrupti pariatur eveniet, accusamus et, corporis
        voluptatem quibusdam?
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
/*
  modals
*/
const showModal = ref(false);
</script>

<style scoped></style>
