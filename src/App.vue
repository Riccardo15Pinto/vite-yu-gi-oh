<script>
import axios from '../node_modules/axios';
import { store } from './data/data';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import Appmain from './components/AppMain.vue'
export default {
  components: { Appmain },
  data() {
    return {
      store,
    }
  },
  methods: {
    getItemsList(target) {
      axios.get(target).then(res => {
        this.store.pokemons = res.data.docs;
        console.log(this.store.pokemons)
      })
    }
  },
  created() {
    this.getItemsList(endpoint)
  }
}
</script>

<template>
  <Appmain />
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
