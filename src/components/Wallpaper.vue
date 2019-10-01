<template>
  <div class="wallpaper" v-if="wallShow">
    <div class="header">
      <span class="narrow" @click="close">一</span>
      <span class="close" @click="close">X</span>
    </div>
    <div class="content">
      <h1>选择壁纸</h1>
      <ul class="list-box">
        <li data-id='1' @click="choice"><img :class="[imgNum == 1 ? 'active' : '']" src="../assets/images/bg.jpg" alt=""></li>
        <li data-id='2' @click="choice"><img :class="[imgNum == 2 ? 'active' : '']" src="../assets/images/bg2.jpg" alt=""></li>
        <li data-id='3' @click="choice"><img :class="[imgNum == 3 ? 'active' : '']" src="../assets/images/bg3.jpg" alt=""></li>
        <li data-id='4' @click="choice"><img :class="[imgNum == 4 ? 'active' : '']" src="../assets/images/bg4.jpg" alt=""></li>
        <li data-id='5' @click="choice"><img :class="[imgNum == 5 ? 'active' : '']" src="../assets/images/bg5.jpg" alt=""></li>
        <li data-id='6' @click="choice"><img :class="[imgNum == 6 ? 'active' : '']" src="../assets/images/bg6.jpg" alt=""></li>
      </ul>
      <div class="btn-confirm" @click="confirm">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallpaper',
  props: {
    wallShow: Boolean,
    bgSrc: String
  },
  data () {
    return {
      imgNum: '',
      imgSrc: ''
    }
  },
  methods: {
    close () {
      this.$emit('update:wallShow', false)
      this.imgNum = ''
    },
    choice (e) {
      // console.log(e.path[1].dataset.id)
      this.imgNum = e.path[1].dataset.id
      this.imgSrc = e.srcElement.currentSrc
      // console.log(e.srcElement.currentSrc)
    },
    confirm () {
      this.$emit('update:wallShow', false)
      if (this.imgSrc != '') {
        localStorage.setItem('bg', this.imgSrc)
        this.$emit('update:bgSrc', localStorage.getItem('bg'))
        this.imgNum = ''
      }
    }

  }
}
</script>

<style scoped>
  .wallpaper {
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

  h1 {
    margin-top: 15px;
  }

  .list-box {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 49px;
  }

  .list-box li {
    width: 300px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .active {
    border: #E84840 2px solid !important;
  }

  .list-box img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: transparent 2px solid;
  }

  .list-box img:hover {
    border: #E84840 2px solid;
  }

  .btn-confirm {
    width: 60px;
    line-height: 40px;
    margin: 20px auto 20px;
    background: #E84840;
    color: #FFFFFF;
    border-radius: 25px;
    cursor: pointer;
    transition: width 0.5s;
  }

  .btn-confirm:active {
    opacity: 0.5;
  }

  .btn-confirm:hover {
    width: 100px;
  }
</style>
