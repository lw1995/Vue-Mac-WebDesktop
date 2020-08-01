<template>
  <div class="tools">
    <div class="content">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tools',
    props: {

    },
    data() {
      return {
        
      }
    },

    created() {

    },

    methods: {}
  }
</script>

<style scoped>
  .tools {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  .content {
    height: 100%;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  .list-box {
    display: flex;
    padding-top: 20px;
    flex-wrap: wrap;
  }

  .list-box li {
    width: 100px;
    padding: 10px 0;
    margin-left: 38px;
    margin-top: 10px;
    text-align: center;
    box-sizing: border-box;
  }

  .list-box li .bt {
    display: inline-block;
    width: 80px;
    line-height: 80px;
    line-height: 80px;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    background-image: linear-gradient(160deg, #166FEF 20%, #14B1F8 80%);
    border-radius: 50%;
    border: 5px solid #E9E9E9;
  }

  .list-box li .bt:hover {
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  }

  .list-box li .title {
    line-height: 40px;
    color: #333;
  }
</style>
