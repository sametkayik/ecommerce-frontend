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
    // For Loading 
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
    
  }

}
</script>