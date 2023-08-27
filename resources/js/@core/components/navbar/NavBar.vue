<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn nav-link" size="sm" variant="flat-secondary">
          <!-- <font-awesome-icon icon="bars" /> -->
        </button>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <button class="btn btn-primary" @click.prevent="terminateSession">{{ user.name }} | Log out</button>
    </ul>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => store.getters['auth/currentUser'])
    const terminateSession = async () => {
      await store.dispatch('auth/logout')
      router.push({
        name: 'sign-in',
      })
    }
    return { user, terminateSession }
  },
}
</script>