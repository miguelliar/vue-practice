<template>
  <h1>Rick and Morty Episode: {{ $data.episodeName }}</h1>
  <div class="character-table">
    <RickMortyCharacter
      v-for="character in characters"
      :key="character"
      :character="character"
    >
    </RickMortyCharacter>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RickMortyCharacter from "@/components/RickMortyCharacter";

export default defineComponent({
  components: { RickMortyCharacter },
  data: function () {
    return { episodeName: "", characters: [] };
  },
  methods: {
    computeEpisodeName(episodeId) {
      fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
        .then((res) => res.json())
        .then((info) => (this.episodeName = info.name));
    },
    computeCharacters(episodeId) {
      fetch("https://rickandmortyapi.com/api/episode/" + episodeId)
        .then((res) => res.json())
        .then((info) => (this.characters = info.characters));
    },
  },
  beforeMount() {
    this.computeEpisodeName(this.$route.params.episode);
    this.computeCharacters(this.$route.params.episode);
  },
});
</script>

<style scoped>
.character-table {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  -ms-grid-column-align: center;
}
</style>
