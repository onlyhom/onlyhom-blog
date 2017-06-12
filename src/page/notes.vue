
<template>
  <div>
    <!-- =====================
        Company -> Notes
    =====================-->
    <article id="JsCompanyBlock" class="Company Box is-left fade-to-right">
      <div class="Box__cell">
        <div class="Box__inner text-list notes-list">

          <div class="cell" v-for="(item, key) in notesList">
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
    mounted:function () {
      console.log(this.isFirstScreen);
      var delayTime = 1500;
      this.$emit('upTagName','company'); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      console.log(this.isFirstScreen);
      this.isFirstScreen ? delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsCompanyBlock').addClass('on');
      },delayTime);
    },
    methods:{

    }
  }
</script>


<style lang="less">
  @import "../style/base/style";
</style>
