<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('initDarkMode')
  // Sistem temasını dinle
  if (process.client) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.$store.commit('setDarkMode', e.matches)
    })
  }
},

}
</script>

<style>
</style>