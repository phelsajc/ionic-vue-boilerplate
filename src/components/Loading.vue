<template>
  <div>
    <ion-spinner
      v-if="loading"
      class="d-block mx-auto"
      :name="name"
      color="primary"
    ></ion-spinner>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "crescent",
  },
});
</script>
