<template>
  <div>

    <!-- =====================
        Action -> Work
    =====================-->
    <article id="JsActionBlock" class="Action Box fade-to-bottom">
      <div class="Box__cell is-left">
        <div class="Box__inner work__inner">

          <div class="container">
            <div class="work" v-for="(part, key) in projectLists">
              <div class="workTitle">
                <img v-bind:src="part.titleUrl" alt="">
              </div>
              <div class="activeProject row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 cover">
                  <div class="viewOuter">
                    <div class="goArrow goPrev"><span v-on:click="preScroll(key)"></span></div>
                    <div class="viewShow">
                      <div class="viewContent">
                        <ul>
                          <li v-for="(item,index) in part.ProjectsData" v-bind:data-id="index">
                            <div class="zoomImage" v-bind:style="{backgroundImage:'url('+ item.imageUrl +')'}"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="goArrow goNext"><span v-on:click="nextScroll(key)"></span></div>
                  </div><!-- viewOuter -->
                </div>

                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 infoDetail">
                  <div class="cell">
                    <div class="row">
                      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 text">
                        <h1>{{ part.currentData.name }}</h1>
                        <h2>
                          <a v-bind:href="part.currentData.demoUrl" v-show="part.currentData.demoUrl!=''">[ 演示地址 ]</a>
                          <a v-bind:href="part.currentData.onlineUrl" v-show="part.currentData.onlineUrl!=''">[ 线上地址 ]</a>
                        </h2>
                        <p>介绍：{{ part.currentData.description }}</p>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 urlCode" v-show="part.currentData.codeUrl!=''">
                        <div class="tips">[ 手机扫一扫预览 ]</div>
                        <div class="zoomImage" v-bind:style="{backgroundImage:'url('+part.currentData.codeUrl+')'}"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="projectList row">
                <div  v-for="(item, index) in part.ProjectsData" v-bind:class="{'col-lg-2':true,'col-md-3':true,'col-sm-4':true,'cell':true,'on':index==part.nowId }" >
                  <div class="zoomImage" v-bind:style="{backgroundImage:'url('+ item.imageUrl +')'}" v-on:click="clickShow(key, index)"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>

  </div>
</template>


<script>

  // 数据
  var testProjectList = [
    {
      "name":"巨点传媒",
      "description": "传媒官网",
      "imageUrl":require('../assets/my_works/judian/cover.jpg'),
      "demoUrl":"#",
      "onlineUrl":"#",
      "codeUrl": require('../assets/images/code.jpg')
    },
    {
      "name":"科钛机器人",
      "description": "科钛机器人官网 多特效",
      "imageUrl":require('../assets/my_works/ketai/cover.jpg'),
      "demoUrl":"#",
      "onlineUrl":"",
      "codeUrl": ""
    },
    {
      "name":"风步豪车",
      "description": "移动端/微信公众号 豪车租赁平台",
      "imageUrl":require('../assets/my_works/phonebuCar/cover.jpg'),
      "demoUrl":"#",
      "onlineUrl":"#",
      "codeUrl": require('../assets/images/code.jpg')
    },
    {
      "name":"wingfone手机官网",
      "description": "wingfone手机官网 根据vivo仿制",
      "imageUrl":require('../assets/my_works/wingfone/cover.jpg'),
      "demoUrl":"#",
      "onlineUrl":"#",
      "codeUrl": require('../assets/images/code.jpg')
    },
    {
      "name":"舟山微电影节官网",
      "description": "舟山微电影节大赛的官网",
      "imageUrl":require('../assets/my_works/zhoushan/cover.jpg'),
      "demoUrl":"#",
      "onlineUrl":"#",
      "codeUrl": ""
    }
  ];

  var projectLists = [
    {
      "titleUrl":require('../assets/images/work_title1.png'),
      "nowId":"0",
      "ProjectsData": testProjectList,
      "currentData" : {}
    },
    {
      "titleUrl":require('../assets/images/work_title2.png'),
      "nowId":"0",
      "ProjectsData": testProjectList,
      "currentData" : {}
    },
    {
      "titleUrl":require('../assets/images/work_title3.png'),
      "nowId":"0",
      "ProjectsData": testProjectList,
      "currentData" : {}
    },
    {
      "titleUrl":require('../assets/images/work_title4.png'),
      "nowId":"0",
      "ProjectsData": testProjectList,
      "currentData" : {}
    }
  ];


  for(var i=0; i<projectLists.length; i++){
    projectLists[i].currentData = projectLists[i].ProjectsData[0];
  }

  export default {
    data(){
      return {
        projectLists : projectLists
      }
    },
    props: ['isFirstScreen'], //是否为首次打开的页面
    created:function (){
      this.getData();
    },
    mounted:function () {
      console.log(this.isFirstScreen);
      var delayTime = 2500;
      this.$emit('upTagName','action'); //向父组件传递数据
      this.$emit('upFirstScreen'); //向父组件传递数据
      $('.fullHeight').css('min-height',$(window).height()-52);
      this.isFirstScreen ? delayTime += 9500 : void 0;
      setTimeout(function () {
        $('#JsActionBlock').addClass('on');
      },delayTime);
    },
    methods:{
      updateId:function(partIndex){
        var _this = this;
        var liArr = $('.activeProject').eq(partIndex).find('li');
        var currentId = liArr.eq(0).attr('data-id');
        _this.projectLists[partIndex].nowId = currentId;
        _this.projectLists[partIndex].currentData = _this.projectLists[partIndex].ProjectsData[parseInt(currentId)];
      },
      clickShow:function(partIndex, nowIndex){
        var _this = this,
          me = $('.viewOuter').eq(partIndex),
          vcon = me.find('.viewContent'),
          offset = (vcon.find('li').outerHeight(true)) * -1,
          preIndex = $('.projectList').eq(partIndex).find('.on').index(),
          indexOffset = Math.abs(nowIndex - preIndex);

        if(preIndex > nowIndex){
          for(var i=0; i<indexOffset; i++){
            var lastItem = vcon.find('ul').find('li').last();
            vcon.find("ul").prepend(lastItem);
          }
          vcon.css("top", offset);
          vcon.stop().animate({
            top: "0px"
          }, "normal", function() {
            _this.updateId(partIndex);
          });
        }else if(preIndex < nowIndex){
          vcon.stop().animate({
            top: offset*indexOffset
          }, "normal", function() {
            for(var i=0; i<indexOffset; i++){
              var firstItem = vcon.find('ul').find('li').first();
              vcon.find("ul").append(firstItem);
            }
            vcon.css("top", "0px");
            _this.updateId(partIndex);
          });
        }

      },
      preScroll:function(partIndex){
        console.log('pre');
        var _this = this,
          me = $('.viewOuter').eq(partIndex),
          vcon = me.find('.viewContent'),
          offset = (vcon.find('li').outerHeight(true)) * -1;

        var lastItem = vcon.find('ul').find('li').last();
        vcon.find("ul").prepend(lastItem);
        vcon.css("top", offset);
        vcon.stop().animate({
          top: "0px"
        }, "normal", function() {
          _this.updateId(partIndex);
        });
      },
      nextScroll:function(partIndex){
        console.log('next');
        var _this = this,
          me = $('.viewOuter').eq(partIndex),
          vcon = me.find('.viewContent'),
          offset = (vcon.find('li').outerHeight(true)) * -1;

        vcon.stop().animate({
          top: offset
        }, "normal", function() {
          var firstItem = vcon.find('ul').find('li').first();
          vcon.find("ul").append(firstItem);
          vcon.css("top", "0px");
          _this.updateId(partIndex);
        });
      },
      getData: function(params) {
        var _this = this;
        if (!params) params = {};
        _this.$api.get('api/work', params, function(res) {
          console.log(res.data);
          //_this.blogList = res.data;
        })
      }
    }
  }
</script>


<style lang="less">
  @import "../style/other/bootstrap.css";
  @import "../style/other/bootstrap.reset.less";
  @import "../style/base/style";
  @import "../style/other/work.less";
  @import "../style/other/jquery.scrollSection.less";
</style>
