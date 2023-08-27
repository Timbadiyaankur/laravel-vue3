<template>
  <component :is="layout" id="app">
    <!-- <vue-page-transition name="fade"> -->
    <router-view />
    <!-- </vue-page-transition> -->
  </component>
</template>

<script>
import LayoutFull from '@/@core/components/layouts/Full.vue'
import LayoutMain from '@/@core/components/layouts/Main.vue'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  components: {
    LayoutFull,
    LayoutMain,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const layout = computed(() => {
      if (!store.getters['auth/isAuthenticated']) return 'layout-full'
      if (route.meta?.layout == 'full') return 'layout-full'
      return 'layout-main'
    })
    return { layout }
  },
}
</script>