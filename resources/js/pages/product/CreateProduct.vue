<template>
  <div class="card">
    <div class="card-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <form @submit.prevent="onSubmit">
              <div class="form-group mb-3">
                <label for="form-label">SKU</label>
                <input v-model="form.sku" placeholder="Sku" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Name</label>
                <input v-model="form.name" placeholder="Name" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Description</label>
                <input v-model="form.description" placeholder="Description" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Style</label>
                <input v-model="form.style" placeholder="Style" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Color</label>
                <input v-model="form.color" placeholder="Color" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Size</label>
                <input v-model="form.size" placeholder="Size" class="form-control" />
              </div>
              <div class="form-group mb-3">
                <label for="form-label">Price</label>
                <input v-model="form.price" type="number" step="0.01" placeholder="Price" class="form-control" />
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-primary">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('product', { form: 'product' }),
  },
  beforeUnmount() {
    this.resetForm()
  },
  methods: {
    ...mapActions('product', { createProduct: 'create' }),
    ...mapMutations('product', { resetForm: 'emptyProduct' }),
    async onSubmit() {
      await this.createProduct(this.form)
      this.resetForm()
      this.$router.push({
        name: 'product-list',
      })
    },
  },
}
</script>