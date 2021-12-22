<template>
  <div>
    <p class="counter-container"> Counter : {{ double }}</p>
    <p class="counter-container"> Counter : {{ triple }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        double: 'doubleCounter',
        triple: 'tripleCounter'
      })
    }
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
