<template>
  <h1>Rick and Morty Episode Search</h1>
  <RickMortySearch></RickMortySearch>
</template>

<script>
import { defineComponent } from "vue";
import RickMortySearch from "@/components/RickMortySearch";

export default defineComponent({
  components: { RickMortySearch },
});
</script>

<style scoped></style>
