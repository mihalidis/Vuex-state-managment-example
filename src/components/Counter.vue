<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Increment</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods : {
    ...mapMutations(['increaseCounter', 'decreaseCounter']),
/*    incrementCounter(){
      // this.$store.state.counter++;
      this.$store.commit("updateCounter", 1);
    },
    decrementCounter(){
      // this.$store.state.counter--;
      this.$store.commit("updateCounter", -1);
    }*/
  }
}
</script>

<style>
</style>
