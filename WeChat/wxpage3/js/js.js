window.onload = function(){
	var html = document.getElementById("htm");
	var fs = 20/375;
	var wrap = document.getElementById("wrap");
	var H = document.documentElement.clientHeight;
		wrap.style.height = H + "px";
	var W = document.documentElement.clientWidth;
		html.style.fontSize = W*fs + "px";
	var isrc = [
		"img/logo.png",
		"img/slider1-1.png",
		"img/slider12.png",
		"img/slider13.png",
		"img/slider14.png",
		"img/slider21.png",
		"img/slider34.png",
		"img/slider32.png",
		"img/slider33.png",
		"img/slider35.png",
		"img/slider51.png",
		"img/qy-logo-1.jpg",
		"img/qy-logo-7.jpg",
		"img/qy-logo-9.jpg",
		"img/qy-logo-4.jpg",
		"img/qy-logo-5.jpg",
		"img/qy-logo-6.jpg",
		"img/qy-logo-2.jpg",
		"img/qy-logo-8.jpg",
		"img/qy-logo-3.jpg",
		"img/qy-logo-10.jpg",
		"img/slider41.png",
		"img/slider42.png",
		"img/slider41.png",
		"img/slider422.png",
		"img/slider41.png",
		"img/slider432.png",
	];
	var imgs = wrap.getElementsByTagName("img");
	var tImgs = [];
	for(var i = 0;i < isrc.length; i++){
		tImgs[i] = new Image();
		tImgs[i].src=isrc[i];
		(function(i){
			tImgs[i].onload = function(){
				imgs[i].src = isrc[i];
			}
			tImgs[i].onerror = function(){console.log("IMG ERROR!");}
		})(i)
	}
	var slider11 = document.getElementById("slider1-1");
	var Ifq = document.getElementById("Ifq");
	var Idyf = document.getElementById("Idyf");
	var Ilt = document.getElementById("Ilt");
	var bl = H/736;
		slider11.style.width = W*0.8+"px";
		slider11.parentNode.style.left = W/2 - slider11.width/2 + "px";
		Ifq.style.height = 245*bl + "px";
		Idyf.style.height = 245*bl + "px";
		Ilt.style.height = 245*bl + "px";
		Ifq.parentNode.style.left = W/2 - Ifq.width/2 + "px";
		Idyf.parentNode.style.left = W/2 - Ifq.width/2 + "px";
		Ilt.parentNode.style.left = W/2 - Ifq.width/2 + "px";
	var line1 = document.getElementById("line1");
	var line2 = document.getElementById("line2");
	line1.childNodes[0].style.width = (550/375) * W + "px";
	line2.childNodes[0].style.width = (550/375) * W + "px";
	line1.style.left = W*0.1 + "px";
	line1.style.top = -(H*0.3) + "px";
	line2.style.top = H*0.35 + "px";
	line2.style.left = -(W*0.55) + "px";
	//初始化swiper.js
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
		}
  	});
}
