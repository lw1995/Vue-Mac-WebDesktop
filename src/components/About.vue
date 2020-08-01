<template>
  <div class="about">
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
    methods: {}
  }
</script>

<style scoped>
  .about {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }


  .content {
    height: 100%;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  .logo {
    padding: 20px 0;
    font-size: 150px;
    text-align: center;
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
