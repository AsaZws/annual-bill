// 点击进入切换到下一页
// var oSpom8 = document.getElementsByClassName(".spom8");
// oSpom8.style.display = "none";

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
  var onOff = true;
  first();
  function first() {
    if (onOff) {
      // 圆掉下
      t1.from(".spom1", 1.5, {
        y: -300,
        ease: Bounce.easeOut,
        autoAlpha: 0
      })
        // 手机
        .from(".spom2", 1, {
          autoAlpha: 0,
          height: 0
        })
        .from(
          ".spom3",
          0.8,
          {
            autoAlpha: 0
          },
          0.7
        )
        .to(
          ".spom3",
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
          ".spom4",
          1,
          {
            autoAlpha: 0
          },
          0.8
        )
        .set(".spom4", {
          transformPerspective: 10,
          transformOrigin: "left top"
        })
        .to(
          ".spom4",
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
  var data = document.querySelector(".data");
  var datap = data.querySelectorAll("span");
  var t3 = new TimelineMax();
  var onOff3 = true;
  second();
  function second() {
      if(onOff3) {
        //   文字
        t3.staggerFrom(".data p", 1, {
            x: -300,
        }, 0.3)
        // 小车
        .from(".second-img6", 1, {
            x: 300,
            y: -240,
        }, 0.5)
        // 定位
        .from(".second-img11", 1.1, {
            y: -200,
            alpha: 0,
            ease: Bounce.easeOut,
        }, 1)
        onOff3 = false;
      } else {
        t3.restart();
      }
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
  var mid1 = document.getElementById("midUl");
  var midLi = mid1.getElementsByTagName("li");
  for (var j = 0; j < figure_height.length; j++) {
    midLi[j].style.height = figure_height[j] * 0.003 + "rem";
    midLi[j].firstChild.innerHTML = figure_height[j];
    midLi[j].style.bottom = -(7 - figure_height[j] * 0.003) + "rem";
  }
}
