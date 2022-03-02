<template>
  <div class="home">
      home_------------------------------------ABCDEF
      <div class="test">{{test}}</div>
  </div>
</template>

<script>
export default {
  name: 'home', 
  data () {
    return {
    }
  },
  mounted() {
    console.log('ccccccccccc',this.$store.state.book.test)
  },
  computed: {
    test () {
      return this.$store.state.book.test
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    font-size: 14px;
    .test {
      color: red;
    }
  }
</style>