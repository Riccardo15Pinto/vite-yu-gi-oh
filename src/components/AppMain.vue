<script>
import { store } from '../data/data';
import MainCard from './MainCard.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: { MainCard },

}
</script>

<template>
    <div class="container">
        <MainCard v-for="pokemon in store.pokemons" :name="pokemon.name" :number="pokemon.number"
            :imageUrl="pokemon.imageUrl" :type1="pokemon.type1" />

    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;

    .card {
        flex-basis: calc(100% / 4);
    }
}
</style>

