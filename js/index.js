active();
function active() {
  // swiper
  var myswiper = new Swiper(".swiper-container", {
    //   翻到哪一页，哪一页触发动画
    on: {
      slideChange: function() {
        if (myswiper.activeIndex === 0) {
          first();
        } else if (myswiper.activeIndex === 1) {
          second();
        } else if (myswiper.activeIndex === 2) {
          third();
        } else if (myswiper.activeIndex === 3) {
          fourth();
        }
      }
    },
    // 默认纵向滑动
    direction: "",
    // 点击向下箭头，跳转到下一页
    navigation: {
      nextEl: ".arrow"
    },
    // 每一页的滑动时间
    speed: 500,
    // 每一页不滑动完，禁止滑动下一页
    preventInteractionOnTransition: true
  });

  // 向下箭头上下浮动
  new TweenMax(".arrow", 1, {
    y: 16,
    repeat: -1,
    yoyo: true
  });

  // --------------------第一屏-----------------------
  var html = document.documentElement;
  var width = html.getBoundingClientRect().width;
  t1 = new TimelineMax();
  // 开关
  var onOff = true;
  first();
  function first() {
    if (onOff) {
      // 圆掉下
      t1.from(".first-spom1", 1.5, {
        y: -300,
        ease: Bounce.easeOut,
        autoAlpha: 0
      })
        // 手机
        .from(".first-spom2", 1, {
          autoAlpha: 0,
          height: 0
        })
        .from(
          ".first-spom3",
          0.8,
          {
            autoAlpha: 0
          },
          0.7
        )
        .to(
          ".first-spom3",
          0.8,
          {
            y: 8,
            repeat: -1,
            yoyo: true
          },
          0.5
        )
        // 账单
        .from(
          ".first-spom4",
          1,
          {
            autoAlpha: 0
          },
          0.8
        )
        .set(".first-spom4", {
          transformPerspective: 10,
          transformOrigin: "left top"
        })
        .to(
          ".first-spom4",
          1.5,
          {
            rotationY: 1800
            // transformOrigin: "top",
          },
          0.5
        )
        .from(".first p", 1, {
          autoAlpha: 0
        })
        .from(
          ".btn",
          0.3,
          {
            x: 400
          },
          2.2
        );
      // 关掉开关
      onOff = false;
    } else {
      t1.restart();
    }
  }

  //   ------------------第二屏--------------------------
  var t2 = new TimelineMax();
  var onOff2 = true;
  second();
  function second() {
    if (onOff2) {
      //   文字
      t2.staggerFrom(
        ".data1 p",
        1,
        {
          x: -300
        },
        0.3
      )
        // 城市
        .from(
          ".second-img1",
          1.5,
          {
            alpha: 0
          },
          1
        )
        // 小车
        .from(
          ".second-img8",
          1,
          {
            x: 300,
            y: -240
          },
          1
        )
        .from(
          ".second-img3",
          1.5,
          {
            alpha: 0,
            x: -50,
            y: 25
          },
          1
        )
        // 定位
        .from(
          ".second-img2",
          1.1,
          {
            y: -200,
            alpha: 0,
            ease: Bounce.easeOut
          },
          1
        );
      onOff2 = false;
    } else {
      t2.restart();
    }
  }
  // --------------------------第三屏--------------------------
  var t3 = new TimelineMax();
  var onOff3 = true;
  third();
  function third() {
    if (onOff3) {
      // 文字
      t3.staggerFrom(
        ".data2 p",
        1,
        {
          alpha: 0,
          x: 300,
        },
        0.3
      )
        .from(
          ".third-img1",
          1,
          {
            x: -200
          },
          "-=1"
        )
        .from(
          ".third-img2",
          1,
          {
            x: 200,
            y: -200
          },
          "-=1"
        )
        .from(
          ".third-img3",
          1,
          {
            alpha: 0,
            y: 200
          },
          "-=1"
        )
        .from(
          ".figure",
          2,
          {
            alpha: 0
          },
          "-=1"
        );
      offOn3 = false;
    } else {
      t3.restart();
    }
    // ------------------第三屏底部数据加载-----------------------
    var oUl1 = document.getElementById("bottomUl");
    var figure_bottom = ["微信缴费", "无感支付", "电子钱包", "支付宝付"];
    figure_bottom.sort(function(i, l) {
      return i - l;
    });
    var oLi1 = oUl1.getElementsByTagName("li");
    for (var k = 0; k < figure_bottom.length; k++) {
      oLi1[k].firstChild.innerHTML = figure_bottom[k];
    }
    // 柱状图列表高度加载和顶部数据加载
    var figure_height = ["333", "0", "1860", "120"];
    var midLi = document.getElementById("midUl").getElementsByTagName("li");
    for (var j = 0; j < figure_height.length; j++) {
      midLi[j].style.height = figure_height[j] * 0.003 + "rem";
      midLi[j].firstChild.innerHTML = figure_height[j];
      midLi[j].style.bottom = -(7 - figure_height[j] * 0.003) + "rem";
    }
  }
  // -----------------------第五屏-----------------------
  
  // -----------------------第五屏-----------------------
  fourth();
  function fourth() {
    var oStar = document.getElementsByClassName("star")[0];
    var oLi0 = oStar.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var oLi1 = oStar.getElementsByTagName("ul")[1].getElementsByTagName("li");
    var oLi2 = oStar.getElementsByTagName("ul")[2].getElementsByTagName("li");
    // 修改建议
    var oStrong = document.getElementsByClassName("suggest")[0].getElementsByTagName("strong");
    // var onOff4 = false;
    for (var i = 0; i < oStrong.length; i++) {
      oStrong[i].index = i;
      oStrong[i].onOff4 = true;
      oStrong[i].onclick = function () {
        if (this.onOff4) {
          this.style.color = "#fff";
          this.style.backgroundColor = "#f6b617";
          this.onOff4 = false;
        } else {
          this.style.color = "#e4f0fe";
          this.style.backgroundColor = "#212a60";
          this.onOff4 = true;
        }
        console.log(this.onOff4)
      }
    }
    function star(li) {
      // 评分返回的结果
      // var oscore = [];
      var num = 0;
      for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        // 点击
        li[i].onclick = function() {
          for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundImage = "url('./images/fo-star2.png')";
          }
          // 当点击当前星星，之前的都点亮包含自己
          num = this.index;
          for (var i = 0; i <= this.index; i++) {
            li[i].style.backgroundImage = "url('./images/fo-star1.png')";
          }
          // 先清空
          // oscore = [""];
          console.log(num);
        };
      }
    }
    star(oLi0);
    star(oLi1);
    star(oLi2);
  }
}
