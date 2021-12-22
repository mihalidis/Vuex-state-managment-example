<template>
  <div>
    <p>Mutations</p>
    <button class="btn btn-success" @click="increaseCounter">+ Increment</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Decrement</button>
    <br>
    <hr>
    <p>Actions</p>
    <button class="btn btn-success" @click="incAsync({time: 2000})">+ Async Increment</button>
    <button class="btn btn-danger" @click="decAsync({time: 2000})">- Async Decrement</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods : {
    ...mapMutations(['increaseCounter', 'decreaseCounter']),
    ...mapActions(['incAsync','decAsync'])
  }
}
</script>

<style>
</style>
