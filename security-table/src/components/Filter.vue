<template>
  <div class="filter">
    <div
      v-for="group in groups"
      :key="groups.indexOf(group)"
      :class="filteredGroup[group]"
      class="filter-group"
      @click="useFilter(group)"
    >
      {{ group }}
    </div>
    <button class="refresh" @click="nullFilter()">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      groups: [
        "Access Control & Biometrics",
        "Intruder Alarms",
        "Physical Security",
        "Security Guarding and Support Services",
        "Facilities",
        "IT & Cyber Security",
        "Safe Cities",
        "Video Surveillance (CCTV)",
        "Fire Alarms / Detection / Protection",
        "Peripheral Services & Components / Tools",
        "Safety & Health",
      ],
    };
  },
  emits: ["useFilter"],
  methods: {
    useFilter(group) {
      console.log(group);
      this.filter = group;
      this.$emit("useFilter", this.filter);
    },
    nullFilter() {
      this.filter = "";
      this.$emit("useFilter", this.filter);
    },
  },
  computed: {
    filteredGroup() {
      return this.groups.reduce((result, str) => {
        result[str] = str.replace(/\s/g, "").replace(/[&()/]/g, "") + "F";
        return result;
      }, {});
    },
  },
};
</script>
