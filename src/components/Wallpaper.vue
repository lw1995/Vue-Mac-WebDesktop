<template>
  <div class="wallpaper">
    <div class="content">
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
      layerid: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        imgNum: '',
        imgSrc: ''
      }
    },
    methods: {
      choice(e) {
        this.imgNum = e.path[1].dataset.id
        this.imgSrc = e.srcElement.currentSrc
      },
      confirm() {
        if (this.imgSrc != '') {
          localStorage.setItem('bg', this.imgSrc)
          this.imgNum = ''
          this.$parent.setBg()
          this.cancel()
        }
      },
      cancel() {
        this.$layer.close(this.layerid);
      }

    }
  }
</script>

<style scoped>
  .wallpaper {
    width: 100%;
    min-height: 100%;
    background: #fff;
  }

  .content {
    height: 100%;
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
    text-align: center;
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
