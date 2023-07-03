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
    <div class="card" :class="type1">
        <img :src="imageUrl" alt="">
        <h4>{{ number }}</h4>
        <h3>{{ name }}</h3>
        <h4>{{ type1 }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.card {
    text-align: center;
    padding: 20px;
    margin: 10px;
    border-radius: 30px;
    box-shadow: 0 0 10px black;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;

    }

}

.Fire {
    background-color: red;
}

.Water {
    background-color: lightskyblue;
}

.Grass {
    background-color: lightgreen;
}
</style>