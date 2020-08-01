<template>
  <div class="music">
    <iframe id="iframe" src="http://www.kuwo.cn/"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Music',
    props: {},
    created() {

    },
    methods: {}
  }
</script>

<style scoped>
  .music {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  iframe {
    display: block;
    width: 100%;
    min-height: 100%;
    outline: none;
    border: none;
  }
</style>
