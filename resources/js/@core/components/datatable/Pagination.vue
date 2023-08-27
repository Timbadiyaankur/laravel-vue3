<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: pagination.fromStart }">
        <button class="page-link" @click.prevent="$emit('update:modelValue', 1)">{{ '<<' }}</button>
      </li>
      <li class="page-item" :class="{ disabled: pagination.fromStart }">
        <button class="page-link" @click.prevent="$emit('update:modelValue', modelValue - 1)">{{ '<' }}</button>
      </li>
      <li v-for="(num, i) of pagination.list" :key="i" class="page-item" :class="{ active: num == modelValue }">
        <button class="page-link" @click.prevent="$emit('update:modelValue', num)">{{ num }}</button>
      </li>
      <li class="page-item" :class="{ disabled: pagination.fromEnd }">
        <button class="page-link" @click.prevent="$emit('update:modelValue', modelValue + 1)">{{ '>' }}</button>
      </li>
      <li class="page-item" :class="{ disabled: pagination.fromEnd }">
        <button class="page-link" @click.prevent="$emit('update:modelValue', page)">{{ '>>' }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const page = computed(() => {
      const page = props.total / props.perPage
      if (!Number.isInteger(page)) return parseInt(page) + 1
      return page
    })

    const makePage = (start, dir = 1, depth = 5) => {
      if (start > 0 && start <= page.value && depth > 0) {
        return [start, ...makePage(start + 1 * dir, dir, depth - 1)]
      }
      return []
    }

    const pagination = computed(() => {
      const list = []
      let fromStart = false
      let fromEnd = false
      if (props.modelValue == 1) {
        fromStart = true
        list.push(...makePage(1, 1))
      } else if (props.modelValue == page.value) {
        fromEnd = true
        list.push(...makePage(page.value, -1))
      } else {
        list.push(...makePage(props.modelValue - 1, -1, 2), ...makePage(props.modelValue, 1, 3))
      }
      return { list: list.sort((a, b) => a - b), fromStart, fromEnd }
    })
    return {
      page,
      pagination,
    }
  },
}
</script>