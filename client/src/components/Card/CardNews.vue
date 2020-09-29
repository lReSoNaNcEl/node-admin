<template>
    <div class="news">
        <img class="news__img" :src="card.imgUrl"/>
        <div class="news__wrapper">
            <div class="news__title">{{card.title}}</div>
            <div class="news__text">{{card.preview}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<style lang="scss">
    .news {
        width: 20.83333rem;
        height: 20.83333rem;
        background-color: lavenderblush;
    }

    .news__img {
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
</style>