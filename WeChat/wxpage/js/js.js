window.onload = function(){
	var swis = document.getElementById("wrap");
	var oArr = document.getElementById("arrow");
	var h = document.documentElement.clientHeight;//获取屏幕高度
//	var w = document.documentElement.clientWidth;
			swis.style.height = h + "px";
//		oArr.style.left = h/2 - oArr.offsetWidth/2 + "px";
	var isrc = [
			"img/bai.png",
			"img/H5.png",
			"img/2-2.png",
			"img/2-1.png",
			"img/2-3.png",
			"img/3-1.png",
			"img/3-2.png",
			"img/4-6.png",
			"img/4-8.png",
			"img/4-7.png",
			"img/4-1.png",
			"img/4-2.png",
			"img/4-3.png",
			"img/5-1.png",
			"img/5-2.png",
			"img/5-3.png",
			"img/6-1.png",
			"img/6-2.png",
			"img/6-3.png",
			"img/7-1.png",
			"img/7-2.png",
			"img/7-3.png",
			"img/8-2.png",
			"img/8-3.png",
			"img/9-1.png",
			"img/9-2.png",
			"img/10-1.png",
			"img/10-2.png",
			"img/11-2.png",
			"img/10-3.png",
			"img/er.png",
			"img/12.png",
		];
		var imgs = document.getElementById("wrap").getElementsByTagName("img");
		var tImgs = [];
		var flagg = "no";
		for(var i = 0;i < isrc.length; i++){
			tImgs[i] = new Image();
			tImgs[i].src=isrc[i];
			(function(i){
				tImgs[i].onload = function(){
					flagg = "ok";
				}
				imgs.item(i).src=isrc[i];
				tImgs[i].onerror = function(){flagg = "err"}
			})(i)
		}
	var mySwiper = new Swiper('.swiper-container',{
		updateOnImagesReady : false,
	    loop: false,
		direction : 'vertical',
		effect : 'coverflow',
		freeMode : false,
		onInit: function(swiper){
	      	swiperAnimateCache(swiper); 
	    	swiperAnimate(swiper); 
	    },
	   	onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper); 
		}
	  });
	  var oMusic = document.getElementById("music");
	  var oMusici = document.getElementById("musici");
	  var flag =0;
	  oMusici.onclick = function(){
	  	if(flag == 0){
	  		oMusic.pause();
	  		oMusici.src = "img/musicoff.png"
	  		flag = 1;
	  	}else if(flag == 1){
	  		oMusic.play();
	  		oMusici.src= "img/musicon.png";
	  		flag = 0;
	  	}
	  }
}