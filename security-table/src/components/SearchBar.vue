<template>
  <div class="search">
    <input
      v-model="input"
      @input="updateTable"
      type="text"
      class="search-input"
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
  methods: {
    updateTable() {
      this.$emit("updateTable", this.input);
    },
  },
};
</script>
