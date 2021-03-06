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
          // 4页和5页互换
          fifth();
        } else if (myswiper.activeIndex === 4) {
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
    speed: 800,
    // 每一页不滑动完，禁止滑动下一页
    preventInteractionOnTransition: true,
    // 禁止鼠标模拟
    simulateTouch: false,
    // 禁止短距离切换
    // threshold : 26,
    // 无法脱离边缘
    resistanceRatio: 0,
    // 从边缘开始滑动也触发
    iOSEdgeSwipeDetection: true,
    iOSEdgeSwipeThreshold: 50,
    touchRatio: 0.1,
    followFinger: false,
    initialSlide: 0,
    // 禁止滑动，那个滑块需要禁止就在哪个滑块上加swiper-no-swiping
    noSwiping: true
  });

  // 向下箭头上下浮动
  new TweenMax(".arrow", 1, {
    y: 16,
    repeat: -1,
    yoyo: true
  });

  // --------------------第一屏-----------------------
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
        // 横线
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
          },
          0.5
        )
        // 停车更简单
        .from(".first p", 1, {
          autoAlpha: 0
        });
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
      // 文字
      t2.staggerFrom(
        ".data1 p",
        1,
        {
          x: -400
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
        // 斜着的箭头
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
          x: 300
        },
        0.3
      )
        // 星球
        .from(
          ".third-img1",
          1,
          {
            x: -200
          },
          "-=1"
        )
        // 流星
        .from(
          ".third-img2",
          1,
          {
            x: 200,
            y: -200
          },
          "-=1"
        )
        // 底部
        .from(
          ".third-img4",
          1,
          {
            alpha: 0,
            y: 200
          },
          "-=1"
        )
        // 钱包
        .from(
          ".third-img6",
          1,
          {
            alpha: 0,
            y: -400
          },
          "-=1"
        )
        // 外星人
        .from(
          ".third-img3",
          1,
          {
            alpha: 0,
            y: 200
          },
          "-=1"
        )
        // 上面金币
        .from(
          ".third-img7",
          1,
          {
            alpha: 0
          },
          "-=1.2"
        )
        // 后面星星
        .from(
          ".third-img5",
          1,
          {
            alpha: 0,
            x: -180
          },
          "-=1.6"
        )
        // 大金币
        .from(
          ".third-img12",
          1,
          {
            alpha: 0
          },
          "-=1.6"
        )
        // 绿植
        .from(
          [".third-img9", ".third-img10", ".third-img11"],
          1,
          {
            alpha: 0,
            y: 200
          },
          "-=1.6"
        )
        // 小金币
        .staggerFrom(
          ".gold",
          1,
          {
            alpha: 0,
            rotation: 360,
            y: -200
          },
          "-=1"
        );
      offOn3 = false;
    } else {
      t3.restart();
    }
  }
  // -----------------------第五屏-----------------------
  var t4 = new TimelineMax();
  var offOn4 = true;

  fourth();
  function fourth() {
    if (offOn4) {
      // 恭喜你获得
      t4.from(
        ".fourth-img1",
        1,
        {
          alpha: 0
        },
        1.6
      )
        .set(".fourth-img1", {
          transformPerspective: 10,
          transformOrigin: "right top"
        })
        .to(
          ".fourth-img1",
          1,
          {
            rotationX: 360,
            transformOrigin: "right top"
          },
          1.4
        )
        // 底座
        .from(
          ".fourth-img17",
          0.2,
          {
            alpha: 0,
            y: 100
          },
          0.3
        )
        // 右边小车
        .fromTo(
          ".fourth-img3",
          1,
          {
            alpha: 0,
            x: -100,
            y: 56
          },
          {
            alpha: 1,
            x: 0,
            y: 0
          },
          0.5
        )
        // 左边小车
        .fromTo(
          ".fourth-img4",
          1,
          {
            alpha: 0,
            x: 100,
            y: 56
          },
          {
            alpha: 1,
            x: 0,
            y: 0
          },
          0.5
        )
        // 中间金币
        .from(
          ".fourth-img5",
          1.1,
          {
            y: -200,
            alpha: 0,
            ease: Bounce.easeOut
          },
          1
        )
        // 左边金币
        .fromTo(
          ".fourth-img6",
          1,
          {
            alpha: 0,
            x: -20,
            y: 10
          },
          {
            alpha: 1,
            x: 0,
            y: 0
          },
          0.5
        )
        // 右边云
        .from(
          ".fourth-img7",
          1,
          {
            alpha: 0,
            x: 100,
            y: 100
          },
          0.5
        )
        // 左侧云
        .from(
          ".fourth-img8",
          1,
          {
            alpha: 0,
            x: -100,
            y: 100
          },
          0.5
        )
        // 黄色云
        .from(
          ".fourth-img12",
          1,
          {
            alpha: 0,
            x: 100,
            y: 100
          },
          0.5
        )
        // 树
        .from(
          ".fourth-img9",
          1,
          {
            alpha: 0,
            width: 0,
            height: 0,
            y: -100
          },
          0.8
        )
        // 左边竖线
        .from(
          ".fourth-img10",
          1.4,
          {
            alpha: 0
          },
          0.5
        )
        // 左边竖线
        .from(
          ".fourth-img11",
          1.4,
          {
            alpha: 0
          },
          0.5
        )
        // 奖杯
        .from(
          ".fourth-img18",
          1,
          {
            y: 200
          },
          1
        )
        // logo
        .from(
          ".fourth-img13",
          1,
          {
            alpha: 0,
            y: -200
          },
          2
        )
        // 光
        .from(
          ".fourth-img14",
          1,
          {
            alpha: 0,
            y: 100
          },
          2.2
        )
        // 称号
        .staggerFrom(
          ".fourth-img2",
          1,
          {
            alpha: 0,
            rotation: 1440,
            y: -100
          },
          0.6
        )
        // 称号上下浮动
        .to(".fourth-img2", 1, {
          y: -10,
          repeat: -1,
          yoyo: true
        })
        // 分数
        .from(
          ".fraction",
          1,
          {
            alpha: 0
          },
          3
        )
        // 烟花
        .from(
          ".canvas-keleyi",
          1,
          {
            alpha: 0
          },
          3
        );
      offOn4 = false;
    } else {
      t4.restart();
    }
  }

  // 定义数组方法，删除数组固定数
  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == val) return i;
    }
    return -1;
  };
  Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
      this.splice(index, 1);
    }
  };

  // -----------------------第四屏-----------------------
  var t5 = new TimelineMax();
  // 进入页面先隐藏往上滑查看账单
  (function hide() {
    new TweenMax(".arrow2", 0.1, {
      alpha: 0
    });
  })();
  // 显示往上滑查看账单
  function emerge() {
    var t7 = new TweenMax(".arrow2", 1, {
      alpha: 200,
      y: -16,
      repeat: -1,
      yoyo: true
    });
  }
  var offOn5 = true;
  fifth();
  function fifth() {
    // 获取按钮
    var oBtn = document.getElementsByClassName("btn")[0];
    // 点击按钮
    (function() {
      oBtn.onclick = function() {
        // 隐藏按钮
        this.style.display = "none";
        // 显示往上滑
        emerge();
        // 删除类名可以滑动
        document.getElementById("swiper").classList.remove("swiper-no-swiping");
      };
    })();
    if (offOn5) {
      // 文字
      t5.from(".score p", 1.4, {
        alpha: 0,
        x: -200
      })
        // 评分星星
        .from(".star", 0.8, {
          alpha: 0,
          height: 0
        })
        // 评价建议
        .from(".suggest p", 0.5, {
          alpha: 0,
          x: -200
        })
        // 评价建议
        .staggerFrom(
          ".suggest strong",
          1,
          {
            alpha: 0,
            rotation: 360,
            y: 100
          },
          0.15
        )
        // 提交按钮
        .from(
          ".btn",
          0.3,
          {
            x: 400
          },
          4
        );
      offOn5 = false;
    } else {
      t5.restart();
    }
    var oStar = document.getElementsByClassName("star")[0];
    // 获取li
    var oLi0 = oStar.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var oLi1 = oStar.getElementsByTagName("ul")[1].getElementsByTagName("li");
    var oLi2 = oStar.getElementsByTagName("ul")[2].getElementsByTagName("li");
    // 获取span
    var oSpan0 = oStar
      .getElementsByTagName("ul")[0]
      .getElementsByTagName("span")[0];
    var oSpan1 = oStar
      .getElementsByTagName("ul")[1]
      .getElementsByTagName("span")[0];
    var oSpan2 = oStar
      .getElementsByTagName("ul")[2]
      .getElementsByTagName("span")[0];
    // 修改建议
    var oStrong = document
      .getElementsByClassName("suggest")[0]
      .getElementsByTagName("strong");
    var arr = [];
    for (var i = 0; i < oStrong.length; i++) {
      oStrong[i].index = i;
      // 第4个和第6个默认选择
      oStrong[3].style.backgroundColor = "#f6b617";
      oStrong[5].style.backgroundColor = "#f6b617";
      oStrong[i].onOff = true;
      // 给没条建议添加点击事件
      oStrong[i].onclick = function() {
        var arr_strong = this.innerHTML;
        if (this.onOff) {
          this.style.backgroundColor = "#f6b617";
          this.onOff = false;
          // 评价建议添入数组
          arr.push(arr_strong);
        } else {
          this.style.backgroundColor = "#212a60";
          this.onOff = true;
          var arr_strong_f = this.innerHTML;
          // 点击从数组中删除
          arr.remove(arr_strong_f);
        }
        console.log(arr);
      };
    }
    // 星星评分
    function star(li, span) {
      // 评分返回的结果
      var num = 0;
      for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        // 给每个星星添加点击事件
        li[i].onclick = function() {
          for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundImage = "url('./images/fo-star2.png')";
          }
          // 当点击当前星星，之前的都点亮包含自己，星星高亮个数
          num = this.index + 1;
          for (var i = 0; i <= this.index; i++) {
            li[i].style.backgroundImage = "url('./images/fo-star1.png')";
          }
          // 获取点击的那个文字
          var oSpan_s = span.innerHTML;
          console.log(oSpan_s);
          console.log(num);
        };
      }
    }
    // 三个星星评价分别执行
    star(oLi0, oSpan0);
    star(oLi1, oSpan1);
    star(oLi2, oSpan2);
  }
}

// 音乐播放
function play_music() {
  if ($("#mc_play").hasClass("on")) {
    $("#mc_play audio")
      .get(0)
      .pause();
    $("#mc_play").attr("class", "stop");
  } else {
    $("#mc_play audio")
      .get(0)
      .play();
    $("#mc_play").attr("class", "on");
  }
  $("#music_play_filter").hide();
   //阻止冒泡
  event.stopPropagation();
}
// 自动播放
function audioAutoPlay() {
  $("#mc_play audio")
    .get(0)
    .play();
  document.addEventListener(
    "WeixinJSBridgeReady",
    function() {
      $("#mc_play audio")
        .get(0)
        .play();
    },
    false
  );
}
// 打开自动加载自动播放函数
$(document).ready(function() {
  audioAutoPlay();
});
// 点击按钮播放
$("#mc_play").click(function() {
  play_music();
});
