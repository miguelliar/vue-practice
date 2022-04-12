<template>
  <div class="row-item">
    <p data-test="attribute">Episode {{ episode.episode }}</p>
    <p data-test="attribute">Name of the episode: {{ episode.name }}</p>
    <p data-test="attribute">Air time: {{ episode.air_date }}</p>
    <router-link
      data-test="attribute"
      :to="{ name: 'episode', params: { episode: this.episode.id } }"
      >See characters in this episode</router-link
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["episode"],
});
</script>

<style scoped></style>
