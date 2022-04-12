<template>
  <h1>Rick and Morty Episode Search</h1>
  <div class="table-items">
    <RickMortyItem
      data-test="episode-item"
      v-for="episode in filteredEpisodes"
      :key="episode"
      :episode="episode"
    ></RickMortyItem>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RickMortyItem from "@/components/RickMortyEpisode";

export default defineComponent({
  components: { RickMortyItem },
  data: function () {
    return {
      filteredEpisodes: [],
    };
  },
  methods: {
    search(api) {
      fetch(api)
        .then((res) => res.json())
        .then((info) => (this.filteredEpisodes = info.results));
    },
  },
  beforeMount() {
    this.search("https://rickandmortyapi.com/api/episode");
  },
});
</script>

<style scoped>
.row-item {
  background: lightgray;
}
</style>
