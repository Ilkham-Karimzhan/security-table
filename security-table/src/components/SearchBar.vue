<template>
  <div class="search">
    <input
      v-model="input"
      class="search-input"
      type="text"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  watch: {
    input() {
      this.$emit("searchBarInput", this.input);
    },
  },
};
</script>
