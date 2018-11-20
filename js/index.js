// 点击进入切换到下一页
// var oSpom8 = document.getElementsByClassName(".spom8");
// oSpom8.style.display = "none";


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
