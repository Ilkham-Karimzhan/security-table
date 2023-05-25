<template>
  <header class="header">
    <div class="container">
      <nav class="navbar header-navbar">
        <button class="button">Logo</button>
        <SearchBar></SearchBar>
        <button class="button button--secondary">Get More!</button>
      </nav>
    </div>
  </header>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>
