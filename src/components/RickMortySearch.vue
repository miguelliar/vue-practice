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

export default defineComponent({});
</script>

<style scoped></style>
