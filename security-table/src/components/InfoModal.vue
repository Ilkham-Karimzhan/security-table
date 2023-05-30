<template>
  <div>
    <div class="modal">
      <h2 class="modal-name">
        {{ targetElement.name.en }}
      </h2>

      <p class="madal-group">
        {{ targetElement.group }}
      </p>

      <p class="modal-info">
        {{ targetElement.info }}
      </p>
      s
      <p class="modal-text">Примеры использования:</p>

      <ul class="modal-list modal-examples">
        <li
          v-for="item in targetElement.examples"
          :key="targetElement.examples.indexOf(item)"
          class="modal-list__item modal-examples__item"
        >
          - {{ item }}
        </li>
      </ul>
      <p class="modal-text">Полезные ссылки:</p>
      <ul class="modal-list modal-links">
        <li
          v-for="item in targetElement.links"
          :key="targetElement.links.indexOf(item)"
          class="modal-list__item modal-links__link"
        >
          -
          <a :href="item">{{ item }}</a>
        </li>
      </ul>
      <button class="modal-close" @click="closeModal()">Закрыть</button>
    </div>
    <div class="modal-shadow" @click="closeModal()"></div>
  </div>
</template>

<script>
export default {
  props: {
    targetElement: {
      type: Object,
      requires: true,
    },
  },
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
