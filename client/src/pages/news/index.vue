<template>
    <div class="container">
        <h2>News Page</h2>

        <div class="news__wrapper">
            <CardNews v-for="(item, i) of news" :key="i" :card="item"/>
        </div>
    </div>
</template>

<script>
    import CardNews from "@/components/Card/CardNews"
    export default {
        computed: {
            news() {return this.$store.getters['news/getNews']}
        },
        created() {
            this.$store.dispatch('news/saveNews').then(() => console.log(this.news))
        },
        components: {CardNews}
    }
</script>

<style scoped lang="scss">
    .news__wrapper {
        display: flex;
        flex-wrap: wrap;
    }
</style>