<script>
import axios from '../node_modules/axios';
import { store } from './data/data';
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons";
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getItemsList(target) {
      axios.get(target).then(res => {
        this.store.pokemons = res.data.docs;
      })
    }
  },
  computed() {
    this.getItemsList(endpoint)
  }
}
</script>

<template></template>

<style scoped></style>
