<template>
  <b-row>
    <Hotel :json="hotel" v-for="(hotel, i) in Hotels" :key="i" />
  </b-row>
</template>

<script>
import Hotel from "./Hotel.vue";
import json from "../../json.json";
export default {
  name: "Hotels",
  components: {
    Hotel,
  },
  data() {
    return {
      Hotels: json,
    };
  },
};
</script>

<style>
</style>