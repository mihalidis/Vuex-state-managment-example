<template>
  <div>
    <p class="counter-container"> Counter : {{ counter }}</p>
    <hr>
    <p class="counter-container"> Counter x 2 : {{ double }}</p>
    <hr>
    <p class="counter-container"> Counter x 3 : {{ triple }}</p>
    <hr>
    <input type="text" v-model="value">
    <br>
    Value: {{ value }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        double: 'doubleCounter',
        triple: 'tripleCounter',
        counter: 'counter'
      }),
      value: {
        get() {
          return this.$store.getters.getValue;
        },
        set(value) {
          this.$store.dispatch("valueData", value);
        }

      }
    },
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
