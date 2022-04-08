<template>
  <div class="row-item">
    <p>Episode {{ episode.episode }}</p>
    <p>Name of the episode: {{ episode.name }}</p>
    <p>Air time: {{ episode.air_date }}</p>
    <router-link :to="{ name: 'episode', params: { episode: this.episode.id } }"
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
