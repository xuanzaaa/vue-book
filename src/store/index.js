import Vue from 'vue'
import Vuex from 'vuex'
import book from './module/book'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        book
    }
})
export default store