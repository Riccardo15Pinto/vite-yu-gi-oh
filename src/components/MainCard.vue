<script>
export default {
    props: { imageUrl: 'string', number: 'string', name: 'string', type1: 'string' },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="imageUrl" alt="">
        <h4>{{ number }}</h4>
        <h3>{{ name }}</h3>
        <h4>{{ type1 }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.card {
    text-align: center;

    img {
        display: block;
        max-width: 100%;
    }
}
</style>