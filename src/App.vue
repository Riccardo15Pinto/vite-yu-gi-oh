<script>
import axios from '../node_modules/axios';
import { store } from './data/data';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
const typeEndpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1';
import Appmain from './components/AppMain.vue'
import mainType from './components/MainSelect.vue';

export default {
  components: { Appmain, mainType },
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
    },


    getfilterPokemons(userchoice) {

      if (userchoice == 0) {
        this.getItemsList(endpoint)
      } else {
        const typePokemon = `${endpoint}?eq[type1]=${userchoice}`;
        this.getItemsList(typePokemon)
      }
    },


    getItemsTypeList(target) {
      axios.get(target).then(res => {
        this.store.mainType = res.data;
      })
    },


  },
  created() {
    this.getItemsList(endpoint)

    this.getItemsTypeList(typeEndpoint)
  }
}
</script>

<template>
  <mainType @select-Option="getfilterPokemons" />
  <Appmain />
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
