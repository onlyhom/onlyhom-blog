<template>
  <div>

    <!-- =====================
        FirstBlock
    =====================-->
    <article id="JsFirstBlock" class="FirstBlock fullHeight">
      <div class="FirstBlock__inner">
        <div class="pc-end">
          <h2 class="FirstBlock__logo">
            <span>
              <img src="../assets/images/logo.png" alt="">
            </span>
          </h2>
          <ul class="FirstBlock__items">
            <li class="FirstBlock__item">
              <div class="FirstBlock__item-inner">
                <h3><img src="../assets/images/mission.png" alt="MISSION" width="123" height="20"></h3>
                <p>关于我<br>欧丽红<br>技能树</p>
                <router-link class="smoothing js-page-transition" data-page-slug="mission" to="/about">DETAIL</router-link>
              </div>
            </li>
            <li class="FirstBlock__item">
              <div class="FirstBlock__item-inner">
                <h3><img src="../assets/images/action.png" alt="IDENTITIY" width="140" height="20"></h3>
                <p>PC/移动端<br>响应式<br>其他作品</p>
                <router-link class="smoothing js-page-transition" data-page-slug="action" to="/work">DETAIL</router-link>
              </div>
            </li>
            <li class="FirstBlock__item">
              <div class="FirstBlock__item-inner">
                <h3><img src="../assets/images/solution.png" alt="SOLUTION" width="153" height="20"></h3>
                <p>技能博客<br>旅游见闻<br>生活感悟</p>
                <router-link class="smoothing js-page-transition" data-page-slug="solution" to="/blog">DETAIL</router-link>
              </div>
            </li>
          </ul>
        </div>

        <div class="mobile-end">
          <div class="firstBlock-mobile-logo">
            <img src="../assets/images/logo-color.png" alt="">
          </div>
          <div class="firstBlock-mobile-text">
            When eight o'clock in the morning, <br>one-third of the day is past.
          </div>
        </div>

      </div>
    </article>


    <!--<ul class="list">-->
      <!--<li v-for="item in lists" v-text="item.title"></li>-->
    <!--</ul>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
//        lists:[]
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created () {
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
//      this.get_data()
    },
    mounted:function () {
      console.log(this.isFirstScreen);
      var delayTime = 0;
      this.$emit('upTagName',''); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      $('.fullHeight').css('min-height',$(window).height()-52);
      this.isFirstScreen ? delayTime += 9300 : void 0;
      setTimeout(function () {
        setTimeout(function () {
          $('.FirstBlock__logo').addClass('on');
          $('.firstBlock-mobile-logo').addClass('on');
        },1);
        setTimeout(function () {
          $('.FirstBlock__items .FirstBlock__item-inner').addClass('on');
          $('.firstBlock-mobile-text').addClass('on');
        },900);
      },delayTime);
    },
    methods: {
//      get_data: function(params) {
//        var v = this
//        if (!params) params = {}
//        // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
//        v.$api.get('topics', params, function(r) {
//          v.lists = r.data
//        })
//      }
    }
  }
</script>
