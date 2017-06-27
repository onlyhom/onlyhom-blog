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

    <article id="JsActionBlock" class="Action Box fade-to-bottom fullHeight">
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
                          <a v-bind:href="part.currentData.demoUrl" v-show="part.currentData.demoUrl!=''" target="_blank">[ 演示地址 ]</a>
                          <a v-bind:href="part.currentData.onlineUrl" v-show="part.currentData.onlineUrl!=''" target="_blank">[ 线上地址 ]</a>
                        </h2>
                        <p>介绍：{{ part.currentData.description }}</p>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 urlCode" v-show="part.currentData.codeUrl!=''">
                        <div class="tips">[ 手机扫一扫预览 ]</div>
                        <!--<img v-bind:src="part.currentData.codeUrl" alt="">-->
                        <div class="zoomImage" v-bind:style="{backgroundImage:'url(http://localhost:8082'+part.currentData.codeUrl+')'}"></div>
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


  export default {
    data(){
      return {
        delayTime:2500,
        projectLists : [],
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
      _this.$emit('upTagName','action'); //向父组件传递数据
      _this.$emit('upFirstScreen'); //向父组件传递数据
      $('.fullHeight').css('min-height',$(window).height()-52);
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
      getData: function(params){
        var _this = this;
        _this.isloading = true;
        if (!params) params = {};
        _this.$api.get('api/work', params, function(res) {
          var works = res.data.works.reverse();

          for(var i=0; i<works.length; i++){
            _this.projectLists.push(
              {
                "titleUrl":require('../assets/images/work_title'+(i+1)+'.png'),
                "nowId":"0",
                "ProjectsData": works[i].data,
                "currentData" : works[i].data[0]
              }
            );
          }

          setTimeout(function () {
            $('#JsActionBlock').addClass('on');
            _this.isloading = false;
          }, 50);

        });
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
