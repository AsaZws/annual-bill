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
        } else if (myswiper.activeIndex === 4) {
          fifth();
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
      // 关掉开关
      onOff = false;
    } else {
      t1.restart();
    }
  }

  //   ------------------第二屏--------------------------
  var t2 = new TimelineMax();
  // 时间数据下的span
  var oData1_span = document.getElementsByClassName("data1")[0].getElementsByTagName("span");
  // 时间数据数组
  var oarr_time = ["120", "1280", "9", "23", "06", "23"];
  var onOff2 = true;
  second();
  function second() {
    if (onOff2) {
      // 时间数组数据渲染到页面当中
      for (var i = 0; i < oarr_time.length; i++) {
        oData1_span[i].innerHTML = oarr_time[i];
      }
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
  // 金额数据下的span
  var oData2_span = document.getElementsByClassName("data2")[0].getElementsByTagName("span");
  // 金额下的数组
  var oarr_money = ["2313", "电子钱包", "电子钱包", "1860"];
  var onOff3 = true;
  third();
  function third() {
    if (onOff3) {
      // 把金额数组的数据渲染到页面当中
      for (var i = 0; i < oarr_money.length; i++) {
        oData2_span[i].innerHTML = oarr_money[i];
      }
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
  var t4 = new TimelineMax();
  var offOn4 = true;
  // 车牌称号
  var img2 = ["./images/fi-title1.png", "./images/fi-title2.png", "./images/fi-title3.png", "./images/fi-title4.png", "./images/fi-title5.png"];
  // 车牌称号ID
  var oImg2 = document.getElementsByClassName("fourth-img2")[0];

  fourth();
  function fourth() {
    if (offOn4) {
      // 按车牌
      oImg2.setAttribute("src", img2[0]);
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
        .from(
          ".fourth-img17",
          0.2,
          {
            alpha: 0,
            y: 100
          },
          0.3
        )
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
          0.8
        )
        // 称号上下浮动
        .to(".fourth-img2", 1, {
          y: -10,
          repeat: -1,
          yoyo: true
        });
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
  // -----------------------第五屏-----------------------
  var t5 = new TimelineMax();
  var offOn5 = true;
  fifth();
  function fifth() {
    if (offOn5) {
      t5.from(".score p", 1, {
        alpha: 0,
        x: -200
      })
        .from(".star", 1, {
          alpha: 0,
          height: 0
        })
        .from(".suggest p", 1, {
          alpha: 0,
          x: -200
        })
        .staggerFrom(
          ".suggest strong",
          1,
          {
            alpha: 0,
            rotation: 360,
            y: 100
          },
          0.1
        )
        .from(
          ".btn",
          0.3,
          {
            x: 400
          }
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
    var oSpan0 = oStar.getElementsByTagName("ul")[0].getElementsByTagName("span")[0];
    var oSpan1 = oStar.getElementsByTagName("ul")[1].getElementsByTagName("span")[0];
    var oSpan2 = oStar.getElementsByTagName("ul")[2].getElementsByTagName("span")[0];
    // 修改建议
    var oStrong = document
      .getElementsByClassName("suggest")[0]
      .getElementsByTagName("strong");
    var arr = [];
    for (var i = 0; i < oStrong.length; i++) {
      oStrong[i].index = i;
      oStrong[i].onOff = true;
      // 给没条建议添加点击事件
      oStrong[i].onclick = function() {
        var arr_strong = this.innerHTML;
        if (this.onOff) {
          this.style.color = "#fff";
          this.style.backgroundColor = "#f6b617";
          this.onOff = false;
          // 选择添入数组
          arr.push(arr_strong);
        } else {
          this.style.color = "#e4f0fe";
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
          num = this.index + 1;
          for (var i = 0; i <= this.index; i++) {
            li[i].style.backgroundImage = "url('./images/fo-star1.png')";
          }
          var oSpan_s = span.innerHTML;
          // 先清空
          // oscore.push(oSpan_s);
          console.log(oSpan_s);
          console.log(num);
        };
      }
    }
    star(oLi0, oSpan0);
    star(oLi1, oSpan1);
    star(oLi2, oSpan2);
  }
}
