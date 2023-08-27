<template>
  <section class="content-header">
    <div class="container-fluid0">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>{{ meta.title }}</h1>
        </div>
        <!-- <b-col v-if="breadcrumbs.length" col sm="6">
          <b-breadcrumb class="float-sm-right">
            <component
              :is="'b-breadcrumb-item'"
              v-for="(br, i) of breadcrumbs"
              :key="i"
              :to="br.to"
              :active="br.active"
              active-class="active"
              >{{ br.title }}</component
            >
          </b-breadcrumb>
        </b-col> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$route.meta?.breadcrumbs || []
    },
    meta() {
      return this.$route.meta || {}
    },
  },
}
</script>