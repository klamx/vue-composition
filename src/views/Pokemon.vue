<template>
  <h1>Pokemon View</h1>
</template>

<script>
// useRoute para manejo de la ruta
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    console.log(route.params);
  },
};
</script>
