import { reactive } from 'vue'

export const store = reactive({
  pokemons : [],
  mainType : [],
  page:'' ,
  totalDocs : '',
  hasPrevPage: '',
  hasNextPage: '',
})