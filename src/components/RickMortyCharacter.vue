<template>
  <div class="character-item">
    <img
      :src="characterProperties.image"
      :alt="photoDescription"
      data-test="image"
    />
    <p data-test="attribute">Name: {{ characterProperties.name }}</p>
    <p data-test="attribute">Gender: {{ characterProperties.gender }}</p>
    <p data-test="attribute">Species: {{ characterProperties.species }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["character"],
  data: function () {
    return {
      characterProperties: [],
      photoDescription: [],
    };
  },
  methods: {
    initializeProps(url) {
      if (url) {
        fetch(url)
          .then((res) => res.json())
          .then((info) => (this.characterProperties = info));
        this.photoDescription = "Photo of " + this.characterProperties.name;
      } else {
        //Preliminar
        this.characterProperties = {
          image: "",
          name: "Unknown",
          gender: "Unknown",
          species: "Unknown",
        };
        this.photoDescription = "Unkown";
      }
    },
  },
  beforeMount() {
    this.initializeProps(this.character);
  },
});
</script>

<style scoped>
.character-item {
  background: #2c3e50;
}

.character-item > p {
  color: lightgray;
}
</style>
