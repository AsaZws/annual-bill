// 点击进入切换到下一页
// var oSpom8 = document.getElementsByClassName(".spom8");
// oSpom8.style.display = "none";

// swiper
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

new TweenMax('.arrow', 1, {
  y: 16,
  repeat: -1,
  yoyo: true,
});

// tweenMax
var t = new TimelineMax();
  // 圆
  t.from(".spom1", 1.5, {
    y: -300,
    ease: Bounce.easeOut,
    autoAlpha: 0,
  })
  // 手机
  .from(".spom2", 1.5, {
    autoAlpha: 0,
    height: 0,
  })
  .from(".spom3", 0.8, {
    autoAlpha: 0,
  }, 0.7)
  .to(".spom3", 0.8, {
    y: 8,
    repeat: -1,
    yoyo: true,
  }, 0.5)
  // 账单
  .from(".spom4", 1, {
    autoAlpha: 0,
  }, 0.8)
  .set(".spom4",{
    transformPerspective: 10,
    transformOrigin: "left top",
  })
  .to(".spom4", 1.5, {
    rotationY: 1800,
    // transformOrigin: "top",
  }, 0.5)
  .from(".first p", 1, {
    autoAlpha: 0,
  })
  .from(".btn",0.3, {
    x: 400,
  },2.2)



// 底部数据加载
var oUl1 = document.getElementById('bottomUl');
var figure_bottom = ["微信缴费","无感支付","电子钱包","支付宝付"];
figure_bottom.sort(function(i,l) {
  return i-l;
});
var oLi1 = oUl1.getElementsByTagName('li');
for(var k = 0; k < figure_bottom.length; k++) {
  oLi1[k].firstChild.innerHTML = figure_bottom[k];
}
// 柱状图列表高度加载和顶部数据加载
var figure_height = ["333","0","1860","120"];
var mid1 = document.getElementById('midUl');
var midLi = mid1.getElementsByTagName('li');
for(var j = 0; j < figure_height.length; j++) {
  midLi[j].style.height = figure_height[j] * 0.003 + "rem";
  midLi[j].firstChild.innerHTML = figure_height[j];
  midLi[j].style.bottom = -(7 - figure_height[j] * 0.003) + 'rem';
}
