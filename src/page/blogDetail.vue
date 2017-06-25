<template>
  <div>


    <!-- loading -->
    <div class="loading-container" id="loading" v-show="isloading">
      <div class="loading" >
        <div class="line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <!-- loading END -->


    <article class="Box article-detail fade-to-left fullHeight">
      <div class="top">
        <div class="return-btn">
          <div class="return-btn-fixed">
            <router-link :to="{path:'/blog',query:{isReturn: isReturn}}"> < 返回Blog </router-link>
          </div>
        </div>

        <div class="title"> {{ blogDetail.title }}</div>
        <div class="info">
          <i>{{ time }}</i>
        </div>
      </div>

      <!--<div class="detail">{{ blogDetail.content }}</div>-->
      <div class="ql-container ql-snow">
        <div class="ql-editor">
          <div class="detail"></div>
        </div>
      </div>
    </article>






  </div>
</template>


<script>
  export default {
    data(){
      return {
        delayTime:1500,
        isReturn : 1,
        blogDetail:{},
        isloading:false
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    computed: {
      time: function () {
        return new Date(this.blogDetail.addTime).Format("yyyy-MM-dd hh:mm:ss");
      }
    },
    beforeRouteLeave(to,from,next){
      this.$destroy();
      //返回之前清除缓存
      next();
    },
    created:function (){
      if(this.$route.query.id){
        this.isloading = true;
        this.getData({id:this.$route.query.id});
      }
      if(!this.isFirstScreen && this.$route.query.isFrom){
        this.delayTime = 0;
      }
    },
    mounted:function () {
      var _this = this;
      console.log(_this.isFirstScreen);
      $('.fullHeight').css('min-height',$(window).height()-52);
      _this.$emit('upTagName','solution'); //向父组件传递数据
      _this.isFirstScreen ? _this.delayTime += 9500 : void 0;

      if(!_this.isloading){
        setTimeout(function () {
          $('.fade-to-left').addClass('on');
        }, _this.delayTime);
      }
    },
    methods:{
      getData: function(params) {
        var _this = this;
        if (!params) params = {};
        $('#loading').show();
        _this.$api.get('api/blog_detail', params, function(res) {
          //console.log(res.data);
          _this.blogDetail = res.data;
          $('.detail').html(_this.blogDetail.content);
          //console.log(_this.isFirstScreen);
          setTimeout(function () {
            $('.fade-to-left').addClass('on');
            _this.isloading = false;
          }, 50);
          _this.$emit('upFirstScreen'); //向父组件传递数据
        })
      }
    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
  @import "../style/other/highlight.css";
  @import "../style/other/quill.css";
</style>
