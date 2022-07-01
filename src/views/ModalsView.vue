<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input v-model="showDarkModals" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = !showModal">Show modal</button>
    <component v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal" title="title via props">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde
        corporis ab molestiae totam. Dolorum voluptatibus, magnam quaerat amet
        blanditiis harum modi corrupti pariatur eveniet, accusamus et, corporis
        voluptatem quibusdam?
      </p>
    </component>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';
/*
  modals
*/
const showDarkModals = ref(false);
const showModal = ref(false);
</script>

<style scoped></style>
