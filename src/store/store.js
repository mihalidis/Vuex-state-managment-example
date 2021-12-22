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
        },
        counter(state) {
            return state.counter;
        }
    },
    mutations: {
        increaseCounter(state) {
            state.counter++;
        },
        decreaseCounter(state) {
            state.counter--;
        }
    },
    actions: {
        incAsync({commit}, payload) {
            // use setTimeout for simulating async request
            setTimeout(() => {
                commit("increaseCounter");
            }, payload.time);
        },
        decAsync({commit}, payload) {
            setTimeout(() => {
                commit("decreaseCounter");
            }, payload.time);
        },
    }
});