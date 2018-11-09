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

