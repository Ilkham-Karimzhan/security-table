<template>
  <div class="filter">
    <div
      v-for="group in groups"
      :key="group.id"
      :class="filterGroup(group)"
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
      filter: "",
    };
  },
  methods: {
    filterGroup(str) {
      if (typeof str === "string")
        return str.replace(/\s/g, "").replace(/[&()/]/g, "") + "F";
    },
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
};
</script>
