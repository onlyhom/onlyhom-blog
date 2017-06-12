<template>
  <div>

    <!-- =====================
        Mission -> About
    =====================-->
    <article id="JsMissionBlock" class="Mission Box fullHeight fade-to-right">
      <div class="Box__cell is-left">
        <p class="Box__pagename">ABOUT ME</p>
        <h2 class="Box__headline">关于我</h2>
        <div class="Box__section">
          <p>欧丽红/女/1994</p>
          <p>本科/数字媒体技术</p>
          <p>工作年限：2年</p>
          <p>Github：<a href="http://github.com/onlyhom">http://github.com/onlyhom</a></p>
          <p>兴趣特长：摄影、视频剪辑、平面、瑜伽</p>
        </div>
      </div>
    </article>

  </div>
</template>


<script>
  export default {
    data(){
      return {
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    mounted:function () {
      console.log(this.isFirstScreen);
      var delayTime = 1700;
      this.$emit('upTagName','mission'); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      $('.fullHeight').css('min-height',$(window).height()-52);
      this.isFirstScreen ? delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsMissionBlock').addClass('on');
      },delayTime);
    },
    methods:{

    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
