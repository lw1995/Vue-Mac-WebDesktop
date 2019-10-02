<template>
  <div class="home">
    <div class="header">
      <ul class="header-left">
        <li class="iconfont"><a href="https://www.apple.com/cn/" target="_blank" title="苹果官网">&#xe60b;</a></li>
        <li><a href="https://github.com/lw1995/Vue-Mac-WebDesktop" target="_blank">GitHub</a></li>
        <li @click="computer">文件</li>
        <li @click="wallpaper">壁纸</li>
        <li @click="about">关于</li>
      </ul>
      <ul class="header-right">
        <li class="iconfont">&#xe6c0;</li>
        <li class="iconfont">&#xe688;</li>
        <li class="iconfont" @click="openMusic">&#xe6ca;</li>
        <li class="iconfont">&#xe6a7;</li>
        <li class="iconfont">&#xe6cb;</li>
        <li class="iconfont">&#xe6b8;</li>
        <li class="iconfont" @click="weather">{{time}}</li>
      </ul>
    </div>
    <div class="content" :style="{backgroundImage: 'url(' + bgSrc + ')' }" @click="weatherHide">
      <ul class="app-list">
        <li class="list-item" @click="computer"><img src="../assets/images/computer.png" alt=""><span>我的电脑</span></li>
        <li class="list-item"><img src="../assets/images/TrashIcon.png" alt=""><span>回收站</span></li>
        <li class="list-item" @click="tools"><img src="../assets/images/tool.png" alt=""><span>工具箱</span></li>
      </ul>
    </div>
    <div id="container" @click="weatherHide">
      <div id="dock">
        <ul>
          <li>
            <span>Finder</span>
            <a href="javascript:void(0)"><img src="../assets/images/1.png"></a>
          </li>
          <li @click="openBrowser">
            <span>Chrome</span>
            <a href="javascript:void(0)"><img src="../assets/images/2.png"></a>
          </li>
          <li>
            <span>App Store</span>
            <a href="javascript:void(0)"><img src="../assets/images/4.png"></a>
          </li>
          <li>
            <span>Codepen</span>
            <a href="javascript:void(0)"><img src="../assets/images/5.png"></a>
          </li>
          <li>
            <span>Launchpad</span>
            <a href="javascript:void(0)"><img src="../assets/images/6.png"></a>
          </li>
          <li>
            <span>System setup</span>
            <a href="javascript:void(0)"><img src="../assets/images/7.png"></a>
          </li>
          <li>
            <span>Siri</span>
            <a href="javascript:void(0)"><img src="../assets/images/8.png"></a>
          </li>
          <li @click="openMusic">
            <span>酷我音乐</span>
            <a href="javascript:void(0)"><img src="../assets/images/9.png"></a>
          </li>
        </ul>
      </div>
    </div>


    <transition name="slide-fade">
      <div class="weather" v-show="weatherShow">
        <iframe src="https://widget-page.heweather.net/h5/index.html?bg=3&md=036&lc=accu&key=09ce9044126b48f5b79c6d8f198e832a"></iframe>
      </div>
    </transition>
    <Music :musicShow.sync='musicShow' :musicNarrow.sync='musicNarrow'></Music>
    <Browser :browserShow.sync='browserShow' :browserNarrow.sync='browserNarrow'></Browser>
    <Wallpaper :wallShow.sync='wallShow' :bgSrc.sync='bgSrc'></Wallpaper>
    <Tools :toolShow.sync='toolShow'></Tools>
    <Computer :computerShow.sync='computerShow'></Computer>
    <About :aboutShow.sync='aboutShow'></About>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Music from '@/components/Music.vue'
  import Browser from '@/components/Browser.vue'
  import Wallpaper from '@/components/Wallpaper.vue'
  import Tools from '@/components/Tools.vue'
  import Computer from '@/components/Computer.vue'
  import About from '@/components/About.vue'
  export default {
    name: 'home',
    components: {
      Music,
      Wallpaper,
      Browser,
      Tools,
      Computer,
      About
    },
    data() {
      return {
        time: '',
        setInter: null,
        musicShow: false,
        musicNarrow: false,
        wallShow: false,
        browserShow: false,
        browserNarrow: false,
        toolShow: false,
        computerShow: false,
        aboutShow: false,
        weatherShow: false,
        bgSrc: ''
      }
    },

    created() {
      clearInterval(this.setInter)
      this.setInter = setInterval(() => {
        this.newDate()
      }, 1000)

      this.setBg()
    },

    methods: {
      /* 打开音乐 */
      openMusic() {
        this.musicShow = true
        this.musicNarrow = true
      },

      /* 打开浏览器 */
      openBrowser() {
        this.browserShow = true
        this.browserNarrow = true
      },

      /* 打开壁纸 */
      wallpaper() {
        this.wallShow = true
      },

      /* 打开工具箱 */
      tools() {
        this.toolShow = true
      },

      /* 打开我的电脑 */
      computer() {
        this.computerShow = true
      },

      about() {
        this.aboutShow = true
      },

      weather() {
        if (this.weatherShow) {
          this.weatherShow = false
        } else {
          this.weatherShow = true
        }
      },

      weatherHide() {
        this.weatherShow = false
      },

      newDate() {
        let now = new Date()
        let year = now.getFullYear() // 得到年份
        let month = now.getMonth() // 得到月份
        let date = now.getDate() // 得到日期
        let day = now.getDay() // 得到周几
        let hour = now.getHours() // 得到小时
        let minu = now.getMinutes() // 得到分钟
        let sec = now.getSeconds() // 得到秒
        let MS = now.getMilliseconds() // 获取毫秒
        let week
        month = month + 1
        if (month < 10) month = '0' + month
        if (date < 10) date = '0' + date
        if (hour < 10) hour = '0' + hour
        if (minu < 10) minu = '0' + minu
        if (sec < 10) sec = '0' + sec
        if (MS < 100) MS = '0' + MS
        const arrweek = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
        week = arrweek[day]
        /* this.time = year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minu + ':' + sec + ' ' + week */
        this.time = hour + ':' + minu + ':' + sec + ' ' + week
      },
      setBg() {
        if (localStorage.getItem('bg') != null) {
          // console.log(localStorage.getItem("bg"))
          this.bgSrc = localStorage.getItem('bg')
        } else {
          this.bgSrc = '/mac/img/bg.0e445a5d.jpg'
        }
      }
    },
    mounted() {}
  }
</script>

<style scoped>
  @import url("../assets/css/common.css");

  .header {
    position: relative;
    display: flex;
    height: 30px;
    line-height: 30px;
    background: #FBFCFB;
    box-shadow: 0 1px 8px #888888;
    color: #333;
    z-index: 5;
  }

  .header-left,
  .header-right {
    flex: 1;
  }

  .header-left {
    text-align: left;
  }

  .header-right {
    text-align: right;
  }

  .header .header-left li {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  }

  .header .header-left li:first-child {
    margin-left: 20px;
  }

  .header .header-right li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }

  .header .header-right li:last-child {
    margin-right: 10px;
  }

  .content {
    height: calc(100vh - 30px);
    background: url(../assets/images/bg.jpg) no-repeat no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .app-list {
    display: flex;
    height: 80vh;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-left: 20px;
  }

  .app-list .list-item {
    width: 60px;
    margin-top: 20px;
    margin-left: 25px;
    cursor: pointer;
  }

  .app-list .list-item img {
    width: 100%;
  }

  .app-list .list-item span {
    display: block;
    line-height: 21px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    margin-top: 8px;
    font-size: 12px;
    color: #FFFFFF;
  }

  #container {
    position: fixed;
    bottom: 0;
    left: calc(50% - 400px);
    width: 800px;
    padding: 16px 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px 10px 0 0;
    text-align: center;
  }

  #container #dock {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  #container li {
    list-style-type: none;
    display: inline-block;
    position: relative;
    margin-left: 10px;
  }

  #container li img {
    width: 50px;
    height: 50px;
    -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, .5)));
    -webkit-transition: all 0.3s;
    -webkit-transform-origin: 40% 70%;
  }

  #container li:hover img {
    -webkit-transform: scale(2);
    margin: 0 2em;
  }

  #container li:hover+li img,
  #container li.prev img {
    -webkit-transform: scale(1.5);
    margin: 0 1.5em;
  }

  #container li span {
    display: none;
    position: absolute;
    bottom: 100px;
    left: 0;
    width: calc(100% - 10px);
    margin-left: 10px;
    background-color: #222;
    padding: 4px 0;
    border-radius: 7px;
  }

  #container li:hover span {
    display: block;
    color: #fff;
  }

  .weather {
    position: fixed;
    top: 30px;
    right: 0;
  }

  .weather iframe {
    height: calc(100vh - 30px);
    border: none;
  }
</style>
