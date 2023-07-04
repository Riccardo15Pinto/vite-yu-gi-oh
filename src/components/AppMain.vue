<script>
import { store } from '../data/data';
import MainCard from './MainCard.vue';
import mainType from './MainSelect.vue';
export default {
    data() {
        return store

    },
    components: { MainCard, mainType },

}
</script>

<template>
    <div class="container">
        <mainType />
        <div class="container-card">
            <MainCard v-for="pokemon in pokemons" :name="pokemon.name" :number="pokemon.number" :imageUrl="pokemon.imageUrl"
                :type1="pokemon.type1" />


        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(129, 8, 8);



    .container-card {
        max-width: 1400px;
        display: flex;
        flex-wrap: wrap;
        background-color: lightgray;
        padding: 30px;
        border-radius: 30px;

        .card {
            flex-basis: calc(100% / 4 - 20px);
        }
    }
}
</style>

