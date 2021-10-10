<template>
  <div class="calcula">
    <h1>Cálcula presupuesto</h1>
    <p>{{getVivienda.id}}</p>
  </div>
</template>



<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters({
      getVivienda: 'getVivienda'
      })
  }
  
}
</script>
