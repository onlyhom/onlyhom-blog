<template>
  <div>

    <article class="Box article-detail notes-detail fade-to-right fullHeight">
        <div class="top">
          <div class="return-btn">
            <div class="return-btn-fixed">
              <router-link :to="{path:'/notes',query:{isReturn: isReturn}}"> < 返回Notes </router-link>
            </div>
          </div>
          <div class="title">文章标题文章标题文章标题文章标题标题</div>
          <div class="info">
            <i>2017-01-01 12:30:00</i>
          </div>
        </div>
        <div class="detail">
          内容详情文章详情页内容详情文章详情页内容详情文章详情页内容详情文章详情页内容详情文章详情页内容详情文章详情页内容详情文章详情页
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
          <pre>132423</pre>
        </div>
    </article>

  </div>
</template>


<script>
  export default {
    data(){
      return {
        delayTime:1500,
        isReturn : 1
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created:function (){
      if(this.$route.query.isFrom){
        this.delayTime = 0;
      }
    },
    mounted:function () {
      var _this = this;
      console.log(_this.isFirstScreen);
      $('.fullHeight').css('min-height',$(window).height()-52);
      _this.$emit('upTagName','company'); //向父组件传递数据
      _this.$emit('upFirstScreen'); //向父组件传递数据
      _this.isFirstScreen ? _this.delayTime += 9500 : void 0;
      setTimeout(function () {
        $('.fade-to-right').addClass('on');
      }, _this.delayTime);
    },
    methods:{

    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
