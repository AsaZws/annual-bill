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

// 高坐标
var oUl = document.getElementById('leftUl');
var figure_left = [0,1,2,3,4,5,6];
figure_left.sort(function(i,l){
  return l-i;
});

var oLi = oUl.getElementsByTagName('li');
for(var i = 0; i < figure_left.length; i++){
  oLi[i].innerHTML = figure_left[i];
}

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
var figure_height = [4,2,6,2];
var mid1 = document.getElementById('midUl');
var midLi = mid1.getElementsByTagName('li');
for(var j = 0; j < figure_height.length; j++) {
  midLi[j].style.height = figure_height[j] * 1 + "rem";
  midLi[j].firstChild.innerHTML = figure_height[j];
  midLi[j].style.bottom = -(7 - figure_height[j] * 1) + 'rem';
}
