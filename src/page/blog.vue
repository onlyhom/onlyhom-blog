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

    <article id="JsSolutionBlock" class="Solution Box fade-to-left">
      <div class="text-list">
        <div class="cell" v-for="(item, key) in blogList">
          <router-link :to="{path:'/blogDetail',query:{id: item.id}}">
          <!--<router-link :to="{path:'/blogDetail',query:{isFrom: isFrom, id: item.id}}">-->
            <div class="date">
              <div class="day">{{ item.day }}</div>
              <div class="year">{{ item.year }}</div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="detail">{{ item.description }}</div>
          </router-link>
        </div>
      </div>
    </article>


  </div>
</template>



<script>
  export default {
    data(){
      return {
        delayTime:1,
//        isFrom:1,
        blogList:[],
        isloading:false
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created:function (){
      var _this = this;
      _this.isFirstScreen ? _this.delayTime += 9500 : void 0;
      setTimeout(function () {
        _this.getData();
      },_this.delayTime);
    },
    mounted:function () {
      var _this = this;
      _this.$emit('upTagName','solution'); //向父组件传递数据
      _this.$emit('upFirstScreen'); //向父组件传递数据
    },
    methods:{
      getData: function(params) {
        var _this = this;
        _this.isloading = true;
        if (!params) params = {};
        _this.$api.get('api/blog', params, function(res) {
          _this.blogList = res.data;
          setTimeout(function () {
            $('.fade-to-left').addClass('on');
            _this.isloading = false;
          }, 50);
        })
      }
    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
