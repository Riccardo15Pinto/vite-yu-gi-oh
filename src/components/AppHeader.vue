<script>
import { store } from '../data/data'
export default {
    data() {
        return {
            store,
            selectedOption: '',
        }
    },
    emits: ['select-Option']
}
</script>

<template>
    <select v-model="selectedOption" @change="$emit('select-Option', selectedOption)">
        <option value="0">Rimuovi filtro/i</option>
        <option v-for="type in store.mainType" :value="type">{{ type }}
        </option>
    </select>
</template>

<style lang="scss" scoped></style>