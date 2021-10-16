<template>
  <div id="app">
    <base-spinner/>
    <router-view/>
  </div>
</template>
<script>
import BaseSpinner from './components/global/BaseSpinner'

export default {
  name:'App',
  components: {
    BaseSpinner
  },
  mounted () {
    console.log(this.$firebase)
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null // [operação ternária] Se user existir, pegue o valor user.uid dele e coloque em window.uid. Se não diga que window.uid = null
      console.log(window.uid)
      this.$router.push({ name: window.uid ? 'home' : 'login' })
      this.$root.$emit('Spinner::hide')

      

      // if (window.uid) {
      //   this.$router.push({ name: 'home' })
      // }else {
      //   this.$router.push({ name: 'login' })
      // }
    })
  }
}
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  color: var(--light);
  background-color: var(--dark);
}

</style>
