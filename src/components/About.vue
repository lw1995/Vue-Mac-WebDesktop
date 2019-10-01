<template>
  <div class="about" v-if="aboutShow">
    <div class="header">
      <span class="narrow" @click="close">一</span>
      <span class="close" @click="close">X</span>
    </div>
    <div class="content">
      <div class="iconfont logo">&#xe60b;</div>
      <ul class="list-box">
        <li v-for="(item, index) in list"><a :href="item.url" target="_blank">{{item.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    props: {
      aboutShow: Boolean
    },
    data() {
      return {
        list: [{
            url: 'https://github.com/lw1995/Vue-Mac-WebDesktop',
            title: '这是一个前端小白的开源项目'
          }, {
            url: 'https://cn.vuejs.org/',
            title: '基于vue全家桶'
          }, {
            url: 'https://www.jianshu.com/u/6e1d181f1743',
            title: '我的简书地址'
          },
          {
            url: 'https://weibo.com/kuaileliwei',
            title: '我的微博'
          },
          {
            url: 'https://github.com/lw1995/Vue-Mac-WebDesktop',
            title: 'GitHub地址'
          }
        ]
      }
    },
    methods: {
      close() {
        this.$emit('update:aboutShow', false)
      }
    }
  }
</script>

<style scoped>
  .about {
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

  .logo {
    padding: 20px 0;
    font-size: 150px;
    cursor: pointer;
  }

  .list-box {
    padding-top: 20px;
  }

  .list-box li {
    padding: 10px 0;
    margin: 10px 100px 0 100px;
    text-align: center;
    box-sizing: border-box;
    background-image: linear-gradient(160deg, #00ffd5 20%, #008cff 80%);
    border-radius: 20px;
    cursor: pointer;
  }

  .list-box li a {
    color: #fff;
  }
</style>
