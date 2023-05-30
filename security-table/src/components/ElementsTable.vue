<template>
  <div>
    <div class="table">
      <div
        v-for="element in this.filteredElements()"
        :key="element.id"
        class="element table-element"
        :class="[filterGroup(element.group), element.name.short]"
        @click="openModal(element)"
      >
        <p class="element-sh">{{ element.name.short }}</p>
        <p class="element-name">{{ element.name.en }}</p>
      </div>
    </div>
    <infoModal
      v-if="hasOpened"
      :targetElement="targetElement"
      @close="hasOpened = false"
    ></infoModal>
  </div>
</template>

<script>
import infoModal from "./Modal.vue";

export default {
  data() {
    return {
      elements: [],
      targetElement: {},

      hasOpened: false,
    };
  },
  props: ["filter", "search"],
  async created() {
    fetch("http://localhost:3000/elements")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.elements = data;
      });
  },
  methods: {
    filterGroup(str) {
      if (typeof str === "string")
        return str.replace(/\s/g, "").replace(/[&()/]/g, "");
    },
    filteredElements() {
      if (this.filter === "" && this.search === "") return this.elements;
      if (this.filter === "") {
        return this.elements.filter((item) =>
          item.name.en.toUpperCase().includes(this.search.toUpperCase())
        );
      } else {
        return this.elements.filter((item) => item.group.includes(this.filter));
      }
    },
    openModal(element) {
      this.hasOpened = true;
      this.targetElement = element;
    },
  },
  computed: {},
  components: {
    infoModal,
  },
};
</script>
