<script>
import headerBase from "./components/HeaderBase.vue";
import groupFilter from "./components/GroupFilter.vue";
import elementsTable from "./components/ElementsTable.vue";
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
    headerBase,
    groupFilter,
    elementsTable,
  },
};
</script>

<template>
  <div>
    <headerBase @updateTable="update"></headerBase>
    <main class="main">
      <div class="container">
        <groupFilter @useFilter="setFilter"></groupFilter>
        <elementsTable :filter="filter" :search="search"></elementsTable>
      </div>
    </main>
  </div>
</template>
