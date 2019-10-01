<template>
  <div class="tools" v-if="toolShow">
    <div class="header">
      <span class="narrow" @click="close">一</span>
      <span class="close" @click="close">X</span>
    </div>
    <div class="content">
      <ul class="list-box">
        <li v-for="(item, index) in toolList"><a :href="item.url" target="_blank"><span class="bt">{{item.bt}}</span><span
              class="title">{{item.title}}</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tools',
    props: {
      toolShow: Boolean
    },
    data() {
      return {
        toolList: [{
            bt: '爆',
            url: 'http://liwei.utools.club/mac/tools/bzdm/',
            title: '爆炸代码'
          }, {
            bt: '稽',
            url: 'http://liwei.utools.club/mac/tools/doge/',
            title: '全屏滑稽'
          }, {
            bt: '字',
            url: 'http://liwei.utools.club/mac/tools/3dfont/',
            title: '3D字体生成'
          },
          {
            bt: '维',
            url: 'http://liwei.utools.club/mac/tools/zxewm/',
            title: '二维码生成'
          },
          {
            bt: 'J',
            url: 'http://liwei.utools.club/mac/tools/json/',
            title: 'Json格式化'
          },
          {
            bt: '尖',
            url: 'http://liwei.utools.club/mac/tools/jianjiao/',
            title: '尖叫字体生成'
          },
          {
            bt: '摩',
            url: 'http://liwei.utools.club/mac/tools/fumosi/',
            title: '摩斯密码'
          }
        ]
      }
    },
    methods: {
      close() {
        this.$emit('update:toolShow', false)
      }
    }
  }
</script>

<style scoped>
  .tools {
    position: fixed;
    top: 50px;
    left: calc(50% - 500px);
    height: 600px;
    width: 1000px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 8px #888888;
  }

  .header {
    display: flex;
    height: 30px;
    background: url(../assets/images/h-bg.jpg);
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
    padding: 5px 0;
    box-shadow: 0 1px 8px #888888;
    justify-content: flex-end;
  }

  .header span {
    display: inline-block;
    height: 18px;
    width: 18px;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 1px 8px #888888;
    font-size: 12px;
  }

  .header .narrow {
    margin-right: 10px;
    background: #FEBF30;
  }

  .header .close {
    margin-right: 20px;
    background: #FD5858;
  }

  .content {
    height: calc(100% - 30px);
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
    background-image: linear-gradient(160deg, #00ffd5 20%,#008cff 80%);
    border-radius: 20px;
  }

  .list-box li .bt {
    display: inline-block;
    width: 100px;
    line-height: 60px;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    color: #fff;
  }

  .list-box li .title {
    color: #fff;
  }
</style>
