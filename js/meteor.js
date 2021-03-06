var context;
var arr = new Array();
var starCount = 400;
var rains = new Array();
var rainCount = 2;
//初始化画布及context
function init() {
  //获取canvas
  var stars = document.getElementById("stars");
  windowWidth = window.innerWidth; //当前的窗口的高度
  stars.width = windowWidth;
  stars.height = window.innerHeight;
  //获取context
  context = stars.getContext("2d");
  // 背景图
  // var Back = new Image();
  // Back.src = "./images/background1.png";
  // Back.onload = function () {
  //   context.drawImage(this, 0, 0)
  // }
}

//创建一个星星对象
var Star = function() {
  this.x = windowWidth * Math.random(); //横坐标
  this.y = 8000 * Math.random(); //纵坐标
  this.text = "."; //文本
  this.color = "white"; //颜色
  //产生随机颜色
  this.getColor = function() {
    var _r = Math.random();
    if (_r < 0.5) {
      this.color = "#f6b617";
    } else {
      this.color = "white";
    }
  };
  //初始化
  this.init = function() {
    this.getColor();
  };
  //绘制
  this.draw = function() {
    context.fillStyle = this.color;
    context.fillText(this.text, this.x, this.y);
  };
};

//页面加载的时候
window.onload = function() {
  init();
  //画星星
  for (var i = 0; i < starCount; i++) {
    var star = new Star();
    star.init();
    star.draw();
    arr.push(star);
  }
  //画流星
  for (var i = 0; i < rainCount; i++) {
    var rain = new MeteorRain();
    rain.init();
    rain.draw();
    rains.push(rain);
  }
  playStars(); //绘制闪动的星星
  playRains(); //绘制流星
};
//星星闪起来
function playStars() {
  for (var n = 0; n < starCount; n++) {
    arr[n].getColor();
    arr[n].draw();
  }
  setTimeout("playStars()", 100);
}

/*流星雨开始*/
var MeteorRain = function() {
  this.x = -1;
  this.y = -1;
  this.length = -1; //长度
  this.angle = 30; //倾斜角度
  this.width = -1; //宽度
  this.height = -1; //高度
  this.speed = 5; //速度
  this.offset_x = -1; //横轴移动偏移量
  this.offset_y = -1; //纵轴移动偏移量
  this.alpha = 1; //透明度
  this.color1 = ""; //流星的色彩
  this.color2 = ""; //流星的色彩
  /****************初始化函数********************/
  this.init = function() //初始化
  {
    this.getPos();
    this.alpha = 1; //透明度
    this.getRandomColor();
    //最小长度，最大长度
    var x = Math.random() * 80 + 120;
    this.length = Math.ceil(x);
    // x = Math.random()*10+30;
    this.angle = 30; //流星倾斜角
    x = Math.random() + 0.5;
    this.speed = Math.ceil(x); //流星的速度
    var cos = Math.cos((this.angle * 3.14) / 180);
    var sin = Math.sin((this.angle * 3.14) / 180);
    this.width = this.length * cos; //流星所占宽度
    this.height = this.length * sin; //流星所占高度
    this.offset_x = this.speed * cos;
    this.offset_y = this.speed * sin;
  };
  /**************获取随机颜色函数*****************/
  this.getRandomColor = function() {
    var a = Math.ceil(255 - 240 * Math.random());
    //中段颜色
    this.color1 = "rgba(" + 244 + "," + 207 + "," + 166 + ",1)";
    //结束颜色
    this.color2 = "#00073a";
  };
  /***************重新计算流星坐标的函数******************/
  this.countPos = function() //
  {
    //往左下移动,x减少，y增加
    this.x = this.x - this.offset_x;
    this.y = this.y + this.offset_y;
  };
  /*****************获取随机坐标的函数*****************/
  this.getPos = function() //
  {
    //横坐标200--1200
    this.x = Math.random() * window.innerWidth; //窗口高度
    //纵坐标小于600
    this.y = Math.random() * window.innerHeight; //窗口宽度
  };
  /****绘制流星***************************/
  this.draw = function() //绘制一个流星的函数
  {
    context.save();
    context.beginPath();
    context.lineWidth = 1; //宽度
    context.globalAlpha = this.alpha; //设置透明度
    //创建横向渐变颜色,起点坐标至终点坐标
    var line = context.createLinearGradient(
      this.x,
      this.y,
      this.x + this.width,
      this.y - this.height
    );
    //分段设置颜色
    line.addColorStop(0, "white");
    line.addColorStop(0.3, this.color1);
    line.addColorStop(0.6, this.color2);
    context.strokeStyle = line;
    //起点
    context.moveTo(this.x, this.y);
    //终点
    context.lineTo(this.x + this.width, this.y - this.height);
    context.closePath();
    context.stroke();
    context.restore();
  };
  this.move = function() {
    //清空流星像素
    var x = this.x + this.width - this.offset_x;
    var y = this.y - this.height;
    context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5);
    // context.strokeStyle="red";
    // context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
    //重新计算位置，往左下移动
    this.countPos();
    //透明度增加
    this.alpha -= 0.002;
    //重绘
    this.draw();
  };
};
//绘制流星
function playRains() {
  for (var n = 0; n < rainCount; n++) {
    var rain = rains[n];
    rain.move(); //移动
    if (rain.y > window.innerHeight) {
      //超出界限后重来
      context.clearRect(rain.x, rain.y - rain.height, rain.width, rain.height);
      rains[n] = new MeteorRain();
      rains[n].init();
    }
  }
  setTimeout("playRains()", 2);
}

// 烟花
var c = document.getElementById("canvas-ke" + "leyi-com");
if (!c.getContext) alert("请使用支持HTML5的浏览器，例如Chrome，IE9以上。");
else
  (function(c, cvs) {
    //随着窗口调整画布大小
    var W, H;
    var up = 0;
    (onresize = function() {
      c.width = W = window.innerWidth;
      c.height = H = window.innerHeight;
    })();
    // c.width=W=200;
    // c.height=H=400;
    //生成一个烟花
    function createPT(x, y, r, g, b) {
      return {
        r: r,
        g: g,
        b: b,
        x: x,
        y: y,
        //轨迹序列
        pl: [],
        dx: rnd(20) - 10,
        dy: rnd(10) - 7,
        life: 30 + rnd(30),
        //移动函数，修改加速度和坐标
        move: function() {
          this.dx *= 0.98;
          this.dy *= 0.98;
          this.dy += 0.22;
          this.x += this.dx;
          this.y += this.dy;
          this.pl.push([this.x, this.y]);
          //保持轨迹长度
          if (this.pl.length > 10) this.pl.shift();
          this.life--;
        }
      };
    }
    //总烟火数组
    var B = [];
    //在x,y位置创建一个烟火
    function createBoom(x, y) {
      var q = [],
        r = rnd(255) | 0,
        g = rnd(255) | 0,
        b = rnd(255) | 0;
      for (var i = 0; i < rnd(16) + 15; i++) q.push(createPT(x, y, r, g, b));
      B.push(q);
    }
    setInterval(function() {
      cvs.clearRect(0, 0, W, H);
      //依次绘制烟火
      for (var n = 0; n < B.length; n++) {
        var q = B[n];
        for (var i = 0; i < q.length; i++) {
          var pt = q[i];
          pt.move();
          dq(pt.pl, pt.life / 30, pt.r, pt.g, pt.b);
          //超过生存周期就消失
          if (pt.life <= 0) q.splice(i, 1);
        }
        //当一个烟火包含的烟花个数为零，则消灭这个烟火
        if (!B[n].length) B.splice(n, 1);
      }
      //每隔一段时间添加一个新烟火
      if (new Date() - up < 600 + rnd(2000)) return;
      up = new Date();
      createBoom(rnd(W / 2) + W / 4, rnd(50) + 50);
    }, 20);
    function rnd(n) {
      return (n || 1) * Math.random();
    }
    function dq(ar, z, r, g, b) {
      cvs.save();
      //绘制轨迹。思路是每次都绘制一条透明的轨迹，叠加起来形成一条渐变的样子
      for (var i = 0; i < ar.length; i++) {
        cvs.strokeStyle =
          "rgba(" + r + "," + g + "," + b + "," + Math.abs(0.2 * z) + ")";
        cvs.lineWidth = Math.min(i + 1, 4) * 2;
        cvs.beginPath();
        cvs.moveTo(ar[i][0], ar[i][1]);
        for (var j = i + 1; j < ar.length; j++) cvs.lineTo(ar[j][0], ar[j][1]);
        cvs.stroke();
      }
      cvs.restore();
    }
  })(c, c.getContext("2d"));
