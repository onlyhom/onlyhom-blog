<template>
  <div>

    <transition name="fade" v-on:enter="enter(this)">

      <!-- =====================
         Recruit -> Contact
      =====================-->
      <article id="JsRecruitBlock" class="Box Recruit fullHeight fade-to-right" style="width:310px;">
        <div class="Box__cell is-center">

          <div class="container">
            <div class="Box__inner">
              <h3>CONTACT</h3>
              <h4>联系我</h4>
              <dl class="Recruit__mails">
                <p>Email：olh@onlyhom.com</p>
                <p>WeChat：missonly99</p>
                <div class="links">
                  <a href="http://wpa.qq.com/msgrd?v=3&uin=505729806&site=qq&menu=yes" target="_blank">
                    <img src="../assets/images/qq.png" alt="" />
                  </a>
                  <a href="javascript:;" class="weixin" v-on:click="showPop()" >
                    <img src="../assets/images/wechat.png" alt="" />
                  </a>
                  <a href="https://github.com/onlyhom" target="_blank">
                    <img src="../assets/images/github.png" alt="" />
                  </a>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </article>

    </transition>

    <!-- 二维码窗口 -->
    <div v-bind:class="{'pop':true, 'codeWindow':true, 'popShow':isPopShow}">
      <div class="popBG" v-on:click="hidePop()">
        <div class="popUp">
          <div class="content" v-on:click="stopDefault()">
            <h2>微信扫一扫</h2>
            <img src="../assets/images/code.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 二维码窗口 END-->
  </div>
</template>


<script>
  export default {
    data(){
      return {
        isPopShow:false
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    mounted:function () {
      //console.log(this.isFirstScreen);
      var delayTime = 1200;
      this.$emit('upTagName','recruit'); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      $('.fullHeight').css('height',$(window).height()-52);
      this.isFirstScreen ? delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsRecruitBlock').addClass('on');
      }, delayTime);
    },
    methods:{
      showPop:function () {
        this.isPopShow = true;
      },
      hidePop:function () {
        this.isPopShow = false;
      },
      stopDefault:function () {
        event.stopPropagation();
      }
    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
