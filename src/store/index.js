import Vue from 'vue'
import Vuex from 'vuex'

import item from './modules/item'
import board from './modules/board'
import list from './modules/list'
import profile from './modules/profile'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        item: {
            namespaced: true,
            ...item
        },
        board: {
            namespaced: true,
            ...board
        },
        list: {
            namespaced: true,
            ...list
        },
        profile: {
            namespaced: true,
            ...profile
        }
    }
})

export default store
