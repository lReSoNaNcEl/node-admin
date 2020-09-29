<template>
    <router-link to="#" class="card">
        <img class="card__img" :src="card.imgUrl"/>
        <div class="card__wrapper">
            <div class="card__title">{{title}}</div>
            <div class="card__text">{{preview}}</div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            card: Object
        },
        computed: {
            title() {return this.card.title.length > 50 ? `${this.card.title.substr(0, 50)}...` : this.card.title},
            preview() {return this.card.preview.length > 50 ? `${this.card.preview.substr(0, 155)}...` : this.card.preview}
        }
    }
</script>

<style lang="scss">
    .card {
        width: 20.83333rem;
        height: 20.83333rem;
        background-color: #F4F4F4;
        margin: 0 2.60416rem 2.60416rem 0;
        &:nth-of-type(3n + 3) {margin-right: 0;}
        border-radius: .5rem;
        &:hover .card__img {
            transform: scale(1.1) rotate(1deg);
            filter: grayscale(50%);
        }
        &:hover .card__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:hover .card__title {
            font-size: 1.4583rem;
            transform: rotate(-1deg);
            transition: .2s all .1s;
        }
        &:hover .card__text {display: none;}
        &:hover {background-color: gainsboro;}
        overflow: hidden;
        transition: background-color 1s;
    }
    .card__img {
        width: 100%;
        max-height: 50%;
        object-fit: cover;
        border-radius: .5rem .5rem 0 0;
        transition: .4s all;
    }
    .card__wrapper {
        height: 50%;
        padding: .5rem 1rem;
        transition: 4s all 1s;
    }
    .card__title {
        min-height: 35%;
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0 0 .5rem 0;
    }
    .card__text {
        font-size: .9375rem;
        line-height: 140%;
    }
</style>