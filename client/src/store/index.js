import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import news from "@/store/news"

export default new Vuex.Store({
  modules: {news}
})
