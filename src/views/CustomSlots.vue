<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
    <template v-slot:header>
      <h2>Titulo del header</h2>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,

      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style scoped>
</style>