export default {
    namespaced: true,
    state: () => ({
        news: []
    }),
    actions: {
        async saveNews(ctx) {
            const data = await fetch('/api/news')
            const result = await data.json()
            console.log('test')
            ctx.commit('setNews', await result)
        }
    },
    mutations: {
        setNews: (state, payload) => state.news = payload
    },
    getters: {
        getNews: (state, payload) => state.news
    }
}