<template>
  <header class="header">
    <div class="container">
      <nav class="navbar header-navbar">
        <div class="logo">
          <a href="#">
            <img src="@/assets/logo.jpeg" alt="image: logo" />
          </a>
        </div>
        <searchBar @searchBarInput="updateTable"></searchBar>
        <button class="button button--secondary">Get More!</button>
      </nav>
    </div>
  </header>
</template>

<script>
import searchBar from "@/components/SearchBar.vue";

export default {
  emits: ["updateTable"],
  methods: {
    updateTable(data) {
      this.$emit("updateTable", data);
    },
  },
  components: {
    searchBar,
  },
};
</script>
