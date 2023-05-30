<script>
import Header from "./components/Header.vue";
import Filter from "./components/Filter.vue";
import Table from "./components/Table.vue";
export default {
  data() {
    return {
      hasOpenedModal: false,
      filter: "",
      search: "",
    };
  },
  methods: {
    update(input) {
      this.search = input;
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
  components: {
    Header,
    Filter,
    Table,
  },
};
</script>

<template>
  <Header @updateTable="update"></Header>
  <main class="main">
    <div class="container">
      <Filter @useFilter="setFilter"></Filter>
      <Table :filter="filter" :search="search"></Table>
    </div>
  </main>
</template>
