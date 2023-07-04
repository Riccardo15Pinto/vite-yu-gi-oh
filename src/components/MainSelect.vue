<script>
import { store } from '../data/data'
export default {
    data() {
        return {
            store,
            selectedOption: null,
        }
    },
    emits: ['select-Option']
}
</script>

<template>
    <select v-model="selectedOption">
        <option value="0">Tipo</option>
        <option v-for="type in store.mainType" :value="type" @click="$emit('select-Option')">{{ type }}</option>
    </select>
</template>

<style lang="scss" scoped></style>