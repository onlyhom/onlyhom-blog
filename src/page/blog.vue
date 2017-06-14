<template>
  <div>
    <!-- =====================
           Solution -> Blogs
       =====================-->
    <article id="JsSolutionBlock" class="Solution Box fade-to-left">
      <div class="text-list">
        <div class="cell" v-for="(item, key) in blogList">
          <router-link :to="{path:'/blogDetail',query:{isFrom: isFrom, id: item.id}}">
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
        delayTime:1500,
        isFrom:1,
        blogList:[]
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created:function (){
      this.getData();
      if(!this.isFirstScreen && this.$route.query.isReturn){
        this.delayTime = 0;
      }
    },
    mounted:function () {
      var _this = this;
      _this.$emit('upTagName','solution'); //向父组件传递数据
      _this.$emit('upFirstScreen'); //向父组件传递数据
      _this.isFirstScreen ? _this.delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsSolutionBlock').addClass('on');
      }, _this.delayTime);
    },
    methods:{
      getData: function(params) {
        var _this = this;
        if (!params) params = {};
        _this.$api.get('api/blog', params, function(res) {
          console.log(res.data);
          _this.blogList = res.data;
        })
      }
    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
