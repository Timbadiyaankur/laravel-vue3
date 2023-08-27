<template>
  <!-- <vue-page-transition name="fade"> -->
  <router-view />
  <!-- </vue-page-transition> -->
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('full-page')
  },
  beforeUnmount() {
    document.body.classList.remove('full-page')
  },
}
</script>

<style lang="scss" scoped>
.full-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>