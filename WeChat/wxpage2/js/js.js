window.onload = function(){
	var h = document.documentElement.clientHeight;
	var w = document.documentElement.clientWidth;
	var oWrap = document.getElementById("wrap");
		oWrap.style.height = h + "px";
	var imgs = document.getElementById("wrap").getElementsByTagName("img");
	var tImgs = [];
	var flagg = "no";
	var isrc = [
		"img/1-2.png",
		"img/1-1.png",
		"img/1-3.png",
		"img/arrow.png",
		"img/2-1.png",
		"img/2-2.png",
		"img/arrow.png",
		"img/arrow.png",
		"img/page4i.png",
		"img/arrow.png",
		"img/page5i.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/page6i.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/page7i.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/page8i.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/8-1.png",
		"img/81.png",
		"img/82.png",
		"img/83.png",
		"img/84.png",
		"img/85.png",
		"img/86.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/qyhz.png",
		"img/arrow.png",
		"img/1-3.png",
		"img/10-1.png",
		"img/101.jpg",
		"img/102.jpg",
		"img/103.jpg",
		"img/104.jpg",
		"img/105.jpg",
		"img/106.jpg",
		"img/107.jpg",
		"img/108.jpg",
		"img/arrow.png",
		"img/11_02.png",
		"img/11_03.png",
		"img/11_04.png",
		"img/11_05.png",
		"img/11_06.png",
		"img/11_07.png",
		"img/11_08.png",
		"img/11_09.png",
		"img/11_10.png",
		"img/arrow.png",
		"img/p12t.png",
		"img/p12s.png",
		"img/p12e.jpg"
	]
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
	var oBee = document.getElementById("bee");
	var oBees = document.getElementsByClassName("be");
	var	oBeeW = oBee.clientWidth;
		oBee.style.left = (w - oBeeW)/2 + "px";
	setTimeout(function(){
		var mySwiper = new Swiper('.swiper-container',{
			updateOnImagesReady : false,
		    loop: false,
			direction : 'vertical',
			freeMode : false,
			onInit: function(swiper){
		      	swiperAnimateCache(swiper); 
		    	swiperAnimate(swiper); 
		    },
		   	onSlideChangeEnd: function(swiper){
				swiperAnimate(swiper);
				if(mySwiper.activeIndex == 1){
					for(var i = 0;i<oBees.length;i++){
						oBees[i].style.WebkitAnimationPlayState = "running";
					}
				}else{
					for(var i = 0;i<oBees.length;i++){
						oBees[i].style.WebkitAnimationPlayState = "paused";
					}
				}
			}
		  });
	},500)
}
