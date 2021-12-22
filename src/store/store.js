import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        tripleCounter(state) {
            return state.counter * 3;
        }
    },
    mutations: {
 /*       updateCounter(state, value) {
            state.counter += value;
        }*/
        increaseCounter(state) {
            state.counter++;
        },
        decreaseCounter(state) {
            state.counter--;
        }
    }
});