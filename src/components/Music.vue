<template>
  <div class="music" v-if="musicShow" v-show="musicNarrow">
    <div class="header">
      <span class="narrow" style="background: #00AEEF;"><a href="http://www.kuwo.cn/" target="_blank" style="color: #fff;">K</a></span>
      <span class="narrow" @click="narrow">一</span>
      <span class="close" @click="close">X</span>
    </div>
    <div class="content">
      <iframe id="iframe" src="http://www.kuwo.cn/"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Music',
    props: {
      musicShow: Boolean,
      musicNarrow: Boolean
    },
    created() {
      this.skill()
    },
    methods: {
      close() {
        this.$emit('update:musicShow', false)
      },
      narrow() {
        this.$emit('update:musicNarrow', false)
      },
      skill() {

      }
    }
  }
</script>

<style scoped>
  .music {
    position: fixed;
    top: 50px;
    left: calc(50% - 620px);
    height: 600px;
    width: 1240px;
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
    height: 100%;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
  }

  iframe {
    width: 100%;
    height: calc(100% - 30px);
    outline: none;
    border: none;
  }
</style>
