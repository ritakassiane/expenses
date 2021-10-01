<template>
  <div id="app">
    <base-spinner/>
    <button @click="mostrarSpinner">Mostrar Reload</button>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import BaseSpinner from './components/global/BaseSpinner'

export default {
  name:'App',
  components: {
    BaseSpinner
  },
  methods: {
    mostrarSpinner () {
      // Emitindo um evento para ser escutado la no created do BaseSpinner
      this.$root.$emit('Spinner::show')
    }
  }

}
</script>
<style lang="scss">

</style>
