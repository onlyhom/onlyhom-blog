
<template>
  <div>
    <!-- =====================
        Company -> Notes
    =====================-->
    <article id="JsCompanyBlock" class="Company Box is-left fade-to-right">
      <div class="Box__cell">
        <div class="Box__inner text-list notes-list">

          <div class="tag-nav">
            <a class="on" href="">全部</a>
            <a href="">js</a>
            <a href="">小技巧</a>
            <a href="">感悟</a>
            <a href="">旅行</a>
            <a href="">代码片段</a>
          </div>

          <div class="cell" v-for="(item, key) in notesList">
            <router-link :to="{path:'/notesDetail',query:{isFrom: isFrom}}">
              <div class="tag-list">
                <i>代码片段</i>
                <i>js</i>
                <i>小技巧</i>
              </div>
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
        notesList:[
          {
            "day":"21",
            "year":"2017-04",
            "title":"notes-标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
            "day":"21",
            "year":"2017-04",
            "title":"标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
            "day":"21",
            "year":"2017-04",
            "title":"标题标题标题标题标题标题标题标题标题标题标题标题",
            "detail":"文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情文字详情"
          },
          {
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
      this.$emit('upTagName','company'); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      console.log(this.isFirstScreen);
      this.isFirstScreen ? _this.delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsCompanyBlock').addClass('on');
      },_this.delayTime);
    },
    methods:{

    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
