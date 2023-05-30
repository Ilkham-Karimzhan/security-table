<template>
  <div class="modal">
    <h2 class="modal-name">{{ targetElement.name.en }}</h2>
    <p class="madal-group">{{ targetElement.group }}</p>
    <p class="modal-info">{{ targetElement.info }}</p>
    <p class="modal-text">Примеры использования:</p>
    <ul class="modal-list modal-examples">
      <li
        class="modal-list__item modal-examples__item"
        v-for="item in targetElement.examples"
      >
        - {{ item }}
      </li>
    </ul>
    <p class="modal-text">Полезные ссылки:</p>
    <ul class="modal-list modal-links">
      <li
        class="modal-list__item modal-links__link"
        v-for="item in targetElement.links"
      >
        - <a :href="item">{{ item }}</a>
      </li>
    </ul>
    <button @click="close()" class="modal-close">Закрыть</button>
  </div>
  <div class="modal-shadow" @click="close()"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["targetElement"],
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
