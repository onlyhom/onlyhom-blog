<template>
  <div>
    <!-- mobile menu -->
    <div class="mobile-menu" v-on:click="mobileMenuClick()">
      <div class="cell">
        <router-link to="/home" class="js-page-transition" data-page-slug="home">Home</router-link>
        <div class="line"></div>
      </div>
      <div class="cell">
        <router-link to="/about" class="js-page-transition" data-page-slug="mission">About</router-link>
        <div class="line"></div>
      </div>
      <div class="cell">
        <router-link to="/work" class="js-page-transition" data-page-slug="action">Work</router-link>
        <div class="line"></div>
      </div>
      <div class="cell">
        <router-link to="/blog" class="js-page-transition" data-page-slug="solution">Blog</router-link>
        <div class="line"></div>
      </div>
      <div class="cell">
        <router-link to="/notes" class="js-page-transition" data-page-slug="company">Notes</router-link>
        <div class="line"></div>
      </div>
      <div class="cell">
        <router-link to="/contact" class="js-page-transition" data-page-slug="recruit">Contact</router-link>
        <div class="line"></div>
      </div>
    </div>

    <!-- pc menu -->
    <header v-bind:class="{'Header':true, 'clear':true, 'on':isMenuOpen}">
      <h1 class="Logo">
        <a href="/">
          <img src="../src/assets/images/logo-header.png" alt="JAZY GROUP" width="168" height="44">
        </a>
      </h1>
      <nav class="Nav">
        <ul>
          <li>
            <router-link to="/" class="js-page-transition" data-page-slug="home">
              <span>Home</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="js-page-transition" data-page-slug="mission">
              <span>About</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/work" class="js-page-transition" data-page-slug="action">
              <span>Work</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/blog" class="js-page-transition" data-page-slug="solution">
              <span>Blog</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/notes" class="js-page-transition" data-page-slug="company">
              <span>Notes</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="js-page-transition" data-page-slug="recruit">
              <span>Contact</span>
              <div class="Nav__line"></div>
            </router-link>
          </li>
        </ul>
        <div class="menu-trigger" v-on:click="menuTrigger()"></div>
      </nav>
    </header>

    <transition name="router-fade" mode="out-in">
      <router-view
        v-bind:class="{'view':true, 'wrap':true, 'on':isMenuOpen}"
        keep-alive
        @upTagName="setTagName" :msg="tagName"
        @upFirstScreen="setFirstScreen"
        :is-first-screen ="isFirstScreen">
      </router-view>
    </transition>

<footer class="Footer clear">
      <p class="Footer__copy">
        <small>
          <img src="../src/assets/images/copyright.png" height="10" width="111" alt="©ONLYHOM">
        </small>
      </p>
    </footer>
  </div>
</template>



<script>
  import jquery from '../src/assets/js/jquery.min.js';
  import velocity from '../src/assets/js/velocity.min.js';
  import velocityUI from '../src/assets/js/velocity.ui.min.js';
  import easeljs from '../src/assets/js/easeljs-0.7.1.min.js';
  import tweenjs from '../src/assets/js/tweenjs-0.6.0.min.js';

  export default {
    components: {},
    data(){
        return {
          isMenuOpen:false,
          tagName:'暂无',
          isFirstScreen:true
        }
    },
    mounted:function () {

      var _that = this;
      console.log(this.msg);
      (function() {
        var t = {}.hasOwnProperty, i = function(i, e) {
            function o() {
              this.constructor = i
            }

            for (var n in e) t.call(e, n) && (i[n] = e[n]);
            return o.prototype = e.prototype,
              i.prototype = new o,
              i.__super__ = e.prototype,
              i
          }; !
        function (t, e) {
            "use strict";
            var o, n, r, a, s, l, h, u, p, c, d, g, y, v, f, w, m, T, P, b, X, Z, C, M, Y, x;
            c = window.createjs,
            b = "",
            M = "",
            x = t.innerWidth, //window.innerWidth
            Y = t.innerHeight, //window.innerHeight
            o = 600,
            X = 1200,
            u = 0,
            p = 0,
            n = Math.PI,
            a = 2 * n,
            C = !1,
            l = function(t) {
              function e(t, i) {
                this.initialize(),
                  this.drawPoint(t, i)
              }

              var o;
              return i(e, t),
                o = new c.Point,
                e.prototype.drawPoint = function(t, i) {
                  return this.graphics.beginFill(t).drawCircle(0, 0, i).endFill()
                },
                e.prototype.setPerspective = function(t) {
                  var i;
                  return i = t / (t + this.realZ),
                    this.x = g(this.realX * i),
                    this.y = g(this.realY * i),
                    this.scaleX = this.scaleY = i
                },
                e.prototype.setMatrix = function(t, i, e) {
                  return "y" === i ? (t.transformPoint(this.realX, this.realZ, o), this.realX = o.x, this.realZ = o.y) : "x" === i && (t.transformPoint(this.realZ, this.realY, o), this.realZ = o.x, this.realY = o.y),
                    this.setPerspective(e)
                },
                e
            } (c.Shape),
            s = function(t) {
              function e() {
                this.initialize(),
                  this.realZ = 0,
                  this.angleX = 0,
                  this.angleY = 0,
                  this.targetValueX = 0,
                  this.targetValueY = 0,
                  this.velocityX = 0,
                  this.velocityY = 0,
                  this.init()
              }

              var r, s, h, u, p, v, f, w, m, T, P;
              return i(e, t),
                r = 32,
                s = 800,
                h = a / r,
                T = new c.Matrix2D,
                P = new c.Matrix2D,
                m = new c.Shape,
                p = [],
                v = [],
                f = [],
                w = [],
                u = [],
                e.prototype.init = function() {
                  var t, i, e, o, n, a, s, l, c;
                  for (t = 0, this.addChild(m), o = l = 0; r >= 0 ? r > l: l > r; o = r >= 0 ? ++l: --l) a = this.getSpiralPoint(450, t, -300),
                    s = this.getSpiralPoint(450, t, 300),
                    p[o] = a,
                    v[o] = s,
                    u.push(a),
                    u.push(s),
                    t += h,
                    this.addChild(a),
                    this.addChild(s);
                  for (n = c = 0; r >= 0 ? r > c: c > r; n = r >= 0 ? ++c: --c) i = this.getSpiralCtrPoint(450, -300, p, n),
                    e = this.getSpiralCtrPoint(450, 300, v, n),
                    f[n] = i,
                    w[n] = e,
                    u.push(i),
                    u.push(e),
                    this.addChild(i),
                    this.addChild(e);
                  return this.addEventListener("tick", this.drawSpiral.bind(this))
                },
                e.prototype.getSpiralPoint = function(t, i, e) {
                  var o;
                  return o = new l("#000", 2),
                    o.x = o.realX = g(t * Math.cos(i)),
                    o.y = o.realY = g(t * Math.sin(i)),
                    o.realZ = e,
                    o.angle = i,
                    o.setPerspective(s),
                    o
                },
                e.prototype.getSpiralCtrPoint = function(t, i, e, o) {
                  var n, a, u, p;
                  return n = new l,
                    u = e[d(o - 1, r)],
                    a = e[o],
                    p = this.getControlPoint(t, h, u.angle + h, a.realX, a.realY),
                    n.x = n.realX = p.x,
                    n.y = n.realY = p.y,
                    n.realZ = i,
                    n.alpha = 0,
                    n.setPerspective(s),
                    n
                },
                e.prototype.getControlPoint = function(t, i, e, o, r) {
                  var a, s;
                  return a = g(o + t * Math.tan(i / 2) * Math.cos(e - n / 2)),
                    s = g(r + t * Math.tan(i / 2) * Math.sin(e - n / 2)),
                    {
                      x: a,
                      y: s
                    }
                },
                e.prototype.drawSpiral = function() {
                  var t, i, e, o, n, a, l, h, u, c;
                  for (m.graphics.clear(), this.velocityX = this.targetValueX - this.angleX, this.angleX += this.velocityX, this.velocityY = this.targetValueY - this.angleY, this.angleY += this.velocityY, T.identity().rotate(this.velocityX), P.identity().rotate(this.velocityY), a = u = 0; r >= 0 ? r > u: u > r; a = r >= 0 ? ++u: --u) t = p[a],
                    i = v[a],
                    e = f[a],
                    o = w[a],
                    t.setMatrix(T, "x", s),
                    i.setMatrix(T, "x", s),
                    e.setMatrix(T, "x", s),
                    o.setMatrix(T, "x", s),
                    t.setMatrix(P, "y", s),
                    i.setMatrix(P, "y", s),
                    e.setMatrix(P, "y", s),
                    o.setMatrix(P, "y", s);
                  for (l = c = 0; r >= 0 ? r > c: c > r; l = r >= 0 ? ++c: --c) h = l + 10,
                  h >= r && (n = h - r, h = n),
                    this.drawStraight(p[l].x, p[l].y, v[h].x, v[h].y, "#cfcfcf"),
                    h = l - 10,
                  0 > h && (n = r + h, h = n),
                    this.drawStraight(p[l].x, p[l].y, v[h].x, v[h].y, "#cfcfcf"),
                    this.drawCurve(p[d(l - 1, r)].x, p[d(l - 1, r)].y, f[l].x, f[l].y, p[l].x, p[l].y, "#cfcfcf"),
                    this.drawCurve(v[d(l - 1, r)].x, v[d(l - 1, r)].y, w[l].x, w[l].y, v[l].x, v[l].y, "#cfcfcf")
                },
                e.prototype.drawStraight = function(t, i, e, o, n) {
                  return m.graphics.setStrokeStyle(1).beginStroke(n).moveTo(t, i).lineTo(e, o).endStroke()
                },
                e.prototype.drawCurve = function(t, i, e, o, n, r, a) {
                  return m.graphics.setStrokeStyle(1).beginStroke(a).moveTo(t, i).quadraticCurveTo(e, o, n, r).endStroke()
                },
                e.prototype.show = function(t) {
                  return c.Tween.get(this, {
                    override: !0
                  }).wait(2e3).to({
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      targetValueX: y(90)
                    },
                    1800, c.Ease.getPowOut(1.5)).call(t)
                },
                e.prototype.goToHome = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: 0,
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      alpha: 1,
                      targetValueX: y(90)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e.prototype.goToMission = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: o + 100,
                      y: 0,
                      scaleX: .5,
                      scaleY: .5,
                      alpha: 1,
                      targetValueX: y(180)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e.prototype.goToAction = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: 0,
                      y: 0,
                      scaleX: 0,
                      scaleY: 0,
                      alpha: 0,
                      targetValueX: y(360)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e.prototype.goToSolution = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: -o - 200,
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      alpha: 1,
                      targetValueX: y( - 90)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e.prototype.goToCompany = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: o + 200,
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      alpha: 1,
                      targetValueX: y(90)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e.prototype.goToRecruit = function() {
                  return c.Tween.get(this, {
                    override: !0
                  }).to({
                      x: 0,
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      alpha: .3,
                      targetValueX: y(0)
                    },
                    2e3, c.Ease.getPowInOut(2.4))
                },
                e
            } (c.Container),
            r = function(t) {
              function e(t) {
                this.initialize(),
                  this.angle = this.angleZ = y(v(360, 0)),
                  this.theta = this.thetaZ = v(.004, .002),
                  this.radiusX = 0,
                  this.radiusY = v(20, -20),
                  this.radiusZ = 0,
                  this.realX = 0,
                  this.realY = 0,
                  this.realZ = 0,
                  this.vrX = 0,
                  this.vrY = 0,
                  this.vrZ = 0,
                  this.vaX = 0,
                  this.vaZ = 0,
                  this.vaY = 0,
                  this.drawCircle(t)
              }

              var n;
              return i(e, t),
                n = 400,
                e.prototype.drawCircle = function(t) {
                  return this.graphics.beginFill(t).drawCircle(0, 0, 2).endFill()
                },
                e.prototype.setProjetedPoint = function() {
                  var t;
                  return t = n / (n + this.realZ),
                    this.x = this.realX * t,
                    this.y = this.realY * t,
                    this.scaleX = this.scaleY = t
                },
                e.prototype.reversPosition = function() {
                  return this.y < -u ? this.vrY = u: void 0
                },
                e.prototype.move = function() {
                  return this.angleZ > a && (this.angleZ = 0),
                  this.angle > a && (this.angle = 0),
                  this.moving || (this.angle += this.theta, this.angleZ += this.thetaZ),
                    this.realX = this.radiusX * Math.cos(this.angle - this.vaX),
                    this.realY = this.radiusY * Math.sin(this.angle - this.vaY),
                    this.realZ = this.radiusZ * Math.sin(this.angleZ - this.vaZ),
                    this.setProjetedPoint(),
                    this.x += this.vrX,
                    this.y += this.vrY
                },
                e.prototype.show = function() {
                  var t, i, e, o, n, r;
                  return t = v(.7 * u, .5 * u),
                    i = v(80, -80),
                    e = v(370, 280),
                    n = v(10, 2),
                    r = v(10, 2),
                    o = v(.01, .005),
                    c.Tween.get(this, {
                      override: !0
                    }).set({
                      radiusX: 0,
                      radiusZ: 0,
                      theta: o,
                      thetaZ: o
                    }).to({
                        radiusX: .4 * t,
                        radiusZ: .4 * e,
                        vaX: n,
                        vaZ: r
                      },
                      2e3).to({
                        radiusX: t,
                        radiusY: i,
                        radiusZ: e,
                        theta: this.theta,
                        thetaZ: this.thetaZ,
                        vaX: 0,
                        vaZ: 0
                      },
                      3e3, c.Ease.circOut)
                },
                e.prototype.goToHome = function(_funtion,num) {

                  return c.Tween.get(this, {
                        override: !0
                    }).wait(2).set({
                        angleZ: this.angleZ
                  }).to({
                        radiusX: v(.7 * u, .5 * u),
                        radiusY: v(80, -80),
                        radiusZ: v(370, 280),
                        thetaZ: this.theta,
                        alpha : 1,
                        vaX: 0,
                        vaZ: 0,
                        vaY: 0,
                        vrX: 0,
                        vrY: 0
                      },
                      3e3, c.Ease.circOut).call(_funtion)
                },
                e.prototype.goToMission = function(t, i) {
                  var e;
                  return e = v(180, 140),
                    c.Tween.get(this, {
                      override: !0
                    }).wait(4 * i).set({
                      thetaZ: 0
                    }).to({
                        radiusX: e,
                        radiusY: e,
                        radiusZ: 260,
                        angleZ: y(270),
                        vrX: o + 100,
                        vrY: 0,
                        alpha: 1
                      },
                      2e3, c.Ease.getPowInOut(2.4)).call(t)
                },
                e.prototype.goToAction = function(t, i, e, o) {
                  return c.Tween.get(this, {
                    override: !0
                  }).wait(4 * o).set({
                    thetaZ: 0
                  }).to({
                      radiusX: 0,
                      radiusY: 0,
                      radiusZ: 0,
                      angleZ: 0,
                      vrX: t,
                      vrY: -p + 80
                    },
                    1400, c.Ease.getPowInOut(2.4)).wait(4 * o).to({
                      radiusX: 0,
                      radiusY: 0,
                      radiusZ: 0,
                      angleZ: 0,
                      vrX: t,
                      vrY: i,
                      alpha: 0
                    },
                    1400, c.Ease.getPowInOut(2.4)).set({
                    vrY: p + 10,
                    alpha: 1
                  }).call(e)
                },
                e.prototype.goToSolution = function(t, i) {
                  var e, n;
                  return e = v(400, 340),
                    n = v(80, -80),
                    c.Tween.get(this).wait(4 * i).to({
                        radiusX: e,
                        radiusY: n,
                        radiusZ: -100,
                        thetaZ: this.theta,
                        angleZ: this.angle,
                        vrX: -o - 200,
                        vrY: 0,
                        alpha: 1
                      },
                      2e3, c.Ease.getPowInOut(2.4)).call(t)
                },
                e.prototype.goToCompany = function(t, i) {
                  var e, n;
                  return e = v(300, 260),
                    n = v(80, -80),
                    c.Tween.get(this, {
                      override: !0
                    }).wait(4 * i).to({
                        radiusX: e,
                        radiusY: n,
                        radiusZ: 260,
                        thetaZ: this.theta,
                        angleZ: this.angle,
                        vrX: o + 200,
                        vrY: 0,
                        alpha: 1
                      },
                      1600, c.Ease.getPowInOut(2.4)).call(t)
                },
                e.prototype.goToRecruit = function(t, i) {
                  var e;
                  return e = 180,
                    c.Tween.get(this, {
                      override: !0
                    }).wait(4 * i).set({
                      thetaZ: 0
                    }).to({
                        radiusX: e,
                        radiusY: e,
                        radiusZ: 60,
                        angleZ: y(90),
                        vrX: 0,
                        vrY: p + 500,
                        alpha: 1
                      },
                      1600, c.Ease.getPowInOut(2.4)).call(t)
                },
                e
            } (c.Shape),
            h = function(t) {
              function a() {
                this.initialize(),
                  this.x = u,
                  this.y = p,
                  this.z = 3,
                  this.bitmaps = [],
                  this.init()
              }

              var d, b, X, Z, M, x, S;
              return i(a, t),
                b = 210,
                Z = 0,
                x = !0,
                S = !0,
                d = $("#JsFirstBlock"),
                X = ["#da1f3e", "#f58345", "#fdee21", "#8cc63e", "#15a2c0", "#006181", "#662e91"],
                M = function(t, i, e, o) {
                  var r, a, s, l, h, u, p, c, d, g;
                  return u = e,
                    p = o,
                    d = t,
                    g = i,
                    s = u - d,
                    l = p - g,
                    h = Math.sqrt(s * s + l * l),
                    c = Math.atan2(l, s),
                    r = d + h * Math.cos(c + n * (Math.random() - .5)),
                    a = g + h * Math.sin(c + n * (Math.random() - .5)),
                    [d, g, r, a, u, p]
                },
                a.prototype.init = function() {
                  var imgUrl = require('./assets/images/txt-rainbow.png');
                  this.Spiral = new s;
                  this.Particles = this.getParticles();
                  this.loadRainbow(imgUrl);
                  $(".js-page-transition").on("click", this.currentPageClose.bind(this));
                },
                a.prototype.getParticles = function() {
                  var t, i, e, o, n, a, s;
                  for (o = 0, i = X.length, a = {},
                         a.all = [], a.red = [], a.orange = [], a.yellow = [], a.green = [], a.blue = [], a.azure = [], a.purple = [], e = s = 0; b >= 0 ? b > s: s > b; e = b >= 0 ? ++s: --s) t = X[o],
                    n = new r(t),
                    a.all[e] = n,
                    "#da1f3e" === t ? a.red.push(n) : "#f58345" === t ? a.orange.push(n) : "#fdee21" === t ? a.yellow.push(n) : "#8cc63e" === t ? a.green.push(n) : "#15a2c0" === t ? a.blue.push(n) : "#006181" === t ? a.azure.push(n) : "#662e91" === t && a.purple.push(n),
                    o = i - 1 > o ? o + 1 : 0;
                  return a
                },
                a.prototype.loadRainbow = function(imgUrl) {
                  var i;
                  return i = e.createElement("img"),
                    i.src = imgUrl,
                    i.addEventListener("load", this.loadRainbowHandler.bind(this), !1)
                },
                a.prototype.loadRainbowHandler = function(t) {
                  var i, o, n, r, a, s, l, h, u, p, d, y, v, f, w;
                  for (n = e.createElement("canvas"), o = n.getContext("2d"), s = 0, p = 0, d = 10, l = t.target, n.width = l.width, n.height = l.height, h = l.width, u = l.height, r = h / 2, a = u / 2, y = f = 0; d > 0 ? h > f: f > h; y = f += d) for (v = w = 0; d > 0 ? u > w: w > u; v = w += d) o.drawImage(l, y, v, d, d, 0, 0, d, d),
                    i = new c.Bitmap(n.toDataURL("image/png")),
                    i.x = g(y - r),
                    i.y = g(v - a),
                    i.crossOrigin="anonymous",
                    this.bitmaps[s] = i,
                    this.addChild(i),
                    s++;
                  return this.intro()
                },
                a.prototype.intro = function() {
                  return this.outRainbow(),
                    this.on("tick", this.sortChildren.bind(this, f))
//                    this.on("tick", this.pageOpenRecruit.bind(this)),
//                    //setTimeout(this.pageOpenRecruit.bind(this),1)
                },
                a.prototype.outRainbow = function() {
                  var t, i, e, o, n, r, a, s;
                  for (Z = this.bitmaps.length, this.bitmaps.sort(P), o = a = 0, s = this.bitmaps.length; s >= 0 ? s > a: a > s; o = s >= 0 ? ++a: --a) t = this.bitmaps[o],
                    n = t.x,
                    r = t.y,
                    i = v(100, -100),
                    e = r - v(100, 50),
                    c.Tween.get(t, {
                      override: !0
                    }).wait(2e3).wait(4 * o).to({
                        guide: {
                          path: M(n, r, i, e)
                        }
                      },
                      1100, c.Ease.getPowIn(2.1)).to({
                        guide: {
                          path: M(i, e, 0, 0)
                        }
                      },
                      1100, c.Ease.getPowOut(2.1)).call(this.showSpiralAndParticles.bind(this))
                },
                a.prototype.showSpiralAndParticles = function(t) {
                  var i, e, o, n, _this, effectFuntion;
                  _this = this;
                  effectFuntion = this.getCallback(_that.msg);
                  console.log(_that.msg);

                  if (this.removeChild(t.target), Z--, 1 > Z) {
                    for (o = this.Spiral, o.scaleX = 0, o.scaleY = 0, this.addChild(o), o.show(effectFuntion.bind(_this)), i = n = 0; b >= 0 ? b > n: n > b; i = b >= 0 ? ++n: --n) e = this.Particles.all[i],
                      this.addChild(e),
                      e.show();
                    return this.addEventListener("tick", this.moveParticles.bind(this))
                  }
                },
                a.prototype.currentPageClose = function(event) {
                  //当前页面关闭
                  // C:first
                  var effectFuntion, e, tagName ,_this;
                  event.preventDefault();
                  e = event.currentTarget;
                  _this = this;
                  tagName = $(e).data("page-slug");
                  effectFuntion = this.getCallback(tagName);
                  setTimeout(effectFuntion.bind(_this),1);
                  //setTimeout(this.pageOpenRecruit.bind(_this),1);
                },
                a.prototype.getCallback = function(tagName) {
                  //回调函数
                  var effectFuntion;
                  switch(tagName){
                    case '':
                      effectFuntion = this.inFirstBlock;
                      break;
                    case 'home':
                      effectFuntion = this.pageOpenHome;
                      break;
                    case 'mission':
                      effectFuntion = this.pageOpenMission;
                      break;
                    case 'solution':
                      effectFuntion = this.pageOpenSolution;
                      break;
                    case 'action':
                      effectFuntion = this.pageOpenAction;
                      break;
                    case 'company':
                      effectFuntion = this.pageOpenCompany;
                      break;
                    case 'recruit':
                      effectFuntion = this.pageOpenRecruit;
                      break;

                  }
                  return effectFuntion;
                },
                a.prototype.moveParticles = function() {
                  var t, i, e;
                  for (t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                  S && i.reversPosition(),
                    i.move()
                },
                a.prototype.inFirstBlock = function() {
                  return x = !1;
                },
                a.prototype.showElmHome = function() {
                  return Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.showElmPhilosopy = function() {
                  return Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.showElmAction = function(t) {
                  return t.target.moving = !1,
                    Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.showElmSolution = function(t) {
                  return t.target.moving = !1,
                    Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.showElmCompany = function(t) {
                  return t.target.moving = !1,
                    Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.showElmRecruit = function() {
                  return Z--,
                    1 > Z ?  x = !1 : void 0
                },
                a.prototype.pageOpenHome = function() {
                  //粒子效果-home
                  var t, i, e;
                  for (S = !1, Z = b, this.Spiral.goToHome(), t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                    this.Particles.all[t].goToHome(this.showElmHome.bind(this), t)
                },
                a.prototype.pageOpenMission = function() {
                  //粒子效果-about
                  var t, i, e;
                  for (S = !1, Z = b, this.Spiral.goToMission(), t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                    this.Particles.all[t].goToMission(this.showElmPhilosopy.bind(this), t)
                },
                a.prototype.pageOpenAction = function() {
                  //粒子效果-work
                  var t, i, e;
                  for (S = !1, Z = b, i = this.Particles, this.Spiral.goToAction(), t = e = 0; 30 > e; t = ++e) i.red[t].goToAction( - o + 84, 100, this.showElmAction.bind(this), t),
                    i.orange[t].goToAction( - o + 250, 100, this.showElmAction.bind(this), t),
                    i.yellow[t].goToAction( - o + 430, 100, this.showElmAction.bind(this), t),
                    i.green[t].goToAction( - o + 600, 100, this.showElmAction.bind(this), t),
                    i.blue[t].goToAction( - o + 760, 100, this.showElmAction.bind(this), t),
                    i.azure[t].goToAction( - o + 930, 100, this.showElmAction.bind(this), t),
                    i.purple[t].goToAction( - o + 1110, 100, this.showElmAction.bind(this), t)
                },
                a.prototype.pageOpenSolution = function() {
                  //粒子效果-blog
                  var t, i, e;
                  for (S = !1, Z = b, this.Spiral.goToSolution(), t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                    i.moving = !0,
                    i.goToSolution(this.showElmSolution.bind(this), t)
                },
                a.prototype.pageOpenCompany = function() {
                  //粒子效果-notes
                  var t, i, e;
                  for (S = !1, Z = b, this.Spiral.goToCompany(), t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                    i.moving = !0,
                    i.goToCompany(this.showElmCompany.bind(this), t)
                },
                a.prototype.pageOpenRecruit = function() {
                  //粒子效果-contact
                  var t, i, e;
                  for (S = !1, Z = b, this.Spiral.goToRecruit(), t = e = 0; b >= 0 ? b > e: e > b; t = b >= 0 ? ++e: --e) i = this.Particles.all[t],
                    i.goToRecruit(this.showElmRecruit.bind(this), t)
                },
                a
            } (c.Container),
            Z = function() {
              return b.update()
            },
            g = function(t) {
              return 0 | t
            },
            y = function(t) {
              return t * n / 180
            },
            d = function(t, i) {
              return (t % i + i) % i
            },
            v = function(t, i) {
              return Math.random() * (t - i) + i
            },
            f = function(t, i) {
              return i.realZ - t.realZ
            },
            P = function() {
              return Math.random() - .5
            },
            T = function() {
              return C !== !1 && clearTimeout(C),
                C = setTimeout(function() {
                    var temp_h, temp_w, isMobile;
                    if(t.innerWidth >= 768){
                      isMobile = false;
                      temp_w = t.innerWidth;
                      temp_h = t.innerHeight;
                    }else{
                      isMobile = true;
                      temp_w = 1300;
                      temp_h = 2313;
                    }
                    console.log('resize时调用 isMobile:'+isMobile);
                    b.canvas.width = temp_w;
                    b.canvas.height = temp_h;
                    if(isMobile){
                      var scale_value = (t.innerWidth/1300).toFixed(4);
                      var fix_offset = -((2313*scale_value - $(window).height()) * 0.5).toFixed(2);
                      b.canvas.style.transform ='translate3d(0px, '+fix_offset+'px, 0px) ' + 'scale('+scale_value+')';
                    }else{
                      b.canvas.style.transform = 'scale(1)';
                    }
                    u = g(temp_w / 2);  //g是一个判断非0函数  u是圆心x
                    p = g(temp_h / 2); //p 是圆心y
                    // console.log(temp_w);
                    // console.log(temp_h);
                    M.x = u;
                    M.y = p;
                  },
                  200);
            },
            w = function() {
              var isMobile;
              c.MotionGuidePlugin.install(c.Tween);
              isMobile = x < 768 ? true : false;
              console.log('初始化调用 isMobile:'+isMobile);
              if(isMobile){
                x = 1300;
                Y = 2313;
              }
              u = g(x / 2);
              p = g(Y / 2);

              var canvas_dom = $('<canvas id="jsCanvas" class="canvas" width="1200" height="500"></canvas>');
              $('body').append(canvas_dom);

              //i = document.getElementById("jsCanvas");
              b = new c.Stage(canvas_dom[0]);
              b.canvas.width = x;
              b.canvas.height = Y;
              if(isMobile){
                var scale_value = (t.innerWidth/1300).toFixed(4);
                var fix_offset = -((2313*scale_value - $(window).height()) * 0.5).toFixed(2);
                //2313*scale_value 比例高度
                //$(window).height() 实际高度
                b.canvas.style.transform ='translate3d(0px, '+fix_offset+'px, 0px) ' + 'scale('+scale_value+')';
              }
              M = new h;
              b.addChild(M);
              c.Ticker.timingMode = c.Ticker.RAF;
              c.Ticker.addEventListener("tick", Z);
              t.addEventListener("resize", T, !1);
            },
            function() {
              return w()
            } (jQuery)

          }(window, document);

      }).call(window);

    },
    methods:{
      addCellAnimate:function(){
        var i=0;
        var cellArr = $('.mobile-menu .cell');
        var timer = setInterval(function(){
          cellArr.eq(i).addClass('cell-animate');
          if (i>= cellArr.length-1) {
            clearInterval(timer);
          }else{
            i++;
          }
        },90);
      },
      removeCellAnimate:function(){
        setTimeout(function(){
          $('.mobile-menu .cell').removeClass('cell-animate');
        },300);
      },
      menuTrigger:function(){
        var canvasBG = document.getElementById('jsCanvas');
        var fix_offset = parseFloat(canvasBG.style.transform.split(' ')[1]);
        var transfrom_scale = canvasBG.style.transform.split(' ')[3];

        if(this.isMenuOpen){
          this.isMenuOpen = false;
          this.removeCellAnimate();
          canvasBG.style.transform = 'translate3d(0px, '+fix_offset+'px, 0px) ' + transfrom_scale;
        }else{
          this.isMenuOpen = true;
          this.addCellAnimate();
          canvasBG.style.transform = 'translate3d(-256px, '+fix_offset+'px, 0px) ' + transfrom_scale;
        }
      },
      mobileMenuClick:function(){
        var canvasBG = document.getElementById('jsCanvas');
        var fix_offset = parseFloat(canvasBG.style.transform.split(' ')[1]);
        var transfrom_scale = canvasBG.style.transform.split(' ')[3];

        this.isMenuOpen = false;
        this.removeCellAnimate();
        canvasBG.style.transform = 'translate3d(0px, '+fix_offset+'px, 0px) ' + transfrom_scale;
      },
      setTagName:function(tagName) {
        this.msg = tagName;
      },
      setFirstScreen:function () {
        this.isFirstScreen = false;
      }
    }
  }

</script>


<style lang="less">
  @import "./style/base/style";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
