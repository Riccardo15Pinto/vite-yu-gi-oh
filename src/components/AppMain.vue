<script>
import { store } from '../data/data';
import MainCard from './MainCard.vue';
export default {
    data() {
        return store

    },
    components: { MainCard },

}
</script>

<template>
    <div class="container">
        <div class="container-card">
            <MainCard v-for="pokemon in pokemons" :name="pokemon.name" :number="pokemon.number" :imageUrl="pokemon.imageUrl"
                :type1="pokemon.type1" />
            <img src="https://icon2.cleanpng.com/20180614/wbe/kisspng-super-smash-bros-melee-computer-icons-pok-ball-5b22fe0bc03821.3365128115290199157873.jpg"
                alt="" class="pokeball">

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

    .pokeball {
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 70px;
        border-radius: 30px;
    }

    .container-card {
        position: relative;
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

