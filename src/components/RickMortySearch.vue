<template>
  <div class="search-container">
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search episode by name"
        required
      />
      <input type="button" name="submit" value="Search" @click="search" />
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  methods: {
    search() {
      fetch("https://rickandmortyapi.com/api/episode")
        .then((res) => res.json())
        .then((info) => console.log(info));
    },
  },
});
</script>

<style scoped></style>
