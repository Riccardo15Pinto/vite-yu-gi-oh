<script>
import { store } from '../data/data';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <h1 v-for="pokemon in store.pokemons">{{ pokemon.name }}</h1>
</template>

<style lang="scss" scoped></style>