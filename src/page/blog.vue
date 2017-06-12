<template>
  <div>
    <!-- =====================
           Solution -> Blogs
       =====================-->
    <article id="JsSolutionBlock" class="Solution Box fade-to-left">
      <div class="Box__cell">
        <div class="Box__inner text-list">

          <div class="cell" v-for="(item, key) in blogList">
            <router-link :to="{path:'/blogDetail',query:{isFrom: isFrom}}">
              <div class="date">
                <div class="day">{{ item.day }}</div>
                <div class="year">{{ item.year }}</div>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="detail">{{ item.detail }}</div>
            </router-link>
          </div>
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
        blogList:[
          {
            "linkURL":"{path:'/blogDetail',query:{isFrom: isFrom}}",
            "day":"21",
            "year":"2017-04",
            "title":"blog-标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
            "linkURL":"/blogDetail",
            "day":"21",
            "year":"2017-04",
            "title":"标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
            "linkURL":"/blogDetail",
            "day":"21",
            "year":"2017-04",
            "title":"标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
            "linkURL":"/blogDetail",
            "day":"21",
            "year":"2017-04",
            "title":"标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          }
        ]
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created:function (){
      if(this.$route.query.isReturn){
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

    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
