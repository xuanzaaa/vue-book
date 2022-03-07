<template>
  <div class="book">
    <book-reader></book-reader>
  </div>
</template>

<script>
import bookReader from '@/components/book/bookReader'
export default {
  name: 'book', 
  data () {
    return {
    }
  },
  components: {
    bookReader
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
    .book {
        height: 100%;
    }
</style>