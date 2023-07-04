<script>
import { store } from '../data/data'
export default {
    data() {
        return {
            store,
            selectedOption: '',
        }
    },
    props: {
        isNextDisabled: 'Boolean',
        isPrevDisabled: 'Boolean',
    }
}
</script>

<template>
    <header>
        <div class="prev" v-if="isPrevDisabled" @click="$emit('prev-click')">indietro</div>
        <select v-model="selectedOption" @change="$emit('select-Option', selectedOption)">
            <option value="0">Rimuovi filtro/i</option>
            <option v-for="type in store.mainType" :value="type">{{ type }}
            </option>
        </select>
        <div class="next" v-if="isNextDisabled" @click="$emit('next-click')">avanti</div>
    </header>
</template>

<style lang="scss" scoped>
header {

    select {
        width: 200px;
    }
}
</style>