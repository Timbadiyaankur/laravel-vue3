<template>
  <div class="container-fluid">
    <b-overlay variant="white" :show="loading" spinner-variant="primary" blur="0" opacity=".5" rounded="sm">
      <div class="row">
        <div class="col-1">
          <div class="form-group" :style="{ width: '100px' }">
            <select v-model="length" class="form-select">
              <option v-for="(o, i) of lengthOptions" :key="i" :value="o.value">{{ o.text }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <table class="table table-striped table-hover table-bordered">
            <thead class="w-100">
              <tr>
                <th v-for="(column, i) of columns" :key="i">{{ column.label }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) of rows" :key="i">
                <td v-for="(column, c) of columns" :key="c">
                  <slot :name="`cell(${column.key})`" v-bind="{ item: row, rowIndex: i }">
                    {{ row[column.key] || row }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col align-self-start">
          <span class="text-nowrap">{{ pageInfo }}</span>
        </div>
        <div v-if="filtered && filtered > length" class="col align-self-end">
          <pagination v-model="page" :total="filtered" :per-page="length" class="float-right" />
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import Pagination from '@/@core/components/datatable/Pagination.vue'

export default {
  components: { Pagination },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    provider: {
      type: Function,
      default: () => () => {},
    },
    search: {
      type: [String, Array, Object],
      default: () => '',
    },
    filter: {
      type: String,
      default: null,
    },
    extra: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: 'row-clicked',
  data() {
    return {
      total: 0,
      filtered: 0,
      loading: false,
      page: 1,
      length: 10,
      sort: {},
      rows: [],
      lengthOptions: [10, 20, 30, 50].map(e => ({ value: e, text: e })),
    }
  },
  computed: {
    pageInfo() {
      const currentPageCount = this.page * this.length < this.filtered ? this.page * this.length : this.filtered
      return `showing ${(this.page - 1) * this.length + 1} to ${currentPageCount} of ${this.filtered} etries`
    },
  },
  watch: {
    extra() {
      this.refresh()
    },
    page() {
      this.refresh()
    },
    length() {
      this.refresh()
    },
  },
  mounted() {
    this.doDraw()
  },
  methods: {
    // eslint-disable-next-line consistent-return
    async doDraw() {
      // const { filter: search, sortDesc: order, currentPage: page, perPage: length } = ctx
      const { extra, search, page, length } = this
      try {
        this.loading = true
        const { rows, total, filtered } = await this.provider({
          page,
          length,
          search,
          // sort: { order: order ? 'desc' : 'asc', column: 'id' },
          sort: { order: 'asc', column: 'id' },
          extra,
        })
        this.loading = false
        this.total = total
        this.filtered = filtered
        this.rows = rows
      } catch (err) {
        this.loading = false
        if (!err.cancelled) {
          this.total = 0
          this.filtered = 0
          console.error(err)
          this.rows = []
        }
      }
    },
    refresh() {
      this.doDraw()
    },
    rowClicked(...params) {
      this.$emit('row-clicked', ...params)
    },
  },
}
</script>
