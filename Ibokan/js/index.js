$(function(){
	$(".menu").hover(function(){
		$(".menu_list").stop().slideDown("fast");
		$(".menu_list>ul>li").mouseover(function(){
			$(this).css("background","#16a185").children().css("color","#FFFFFF");
			$(this).siblings().css("background","#FFFFFF").children().css("color","#333333");
		})
	},function(){
		$(".menu_list").slideUp("fast");
		$(".menu_list>ul>li").css("background","#FFFFFF").children().css("color","#333333");
	})
})
$(function(){
	$(window).scroll(function(){
		var top= document.body.scrollTop || document.documentElement.scrollTop;
		if(top>=59){
			$("#search-bokan").css({
				"position":"fixed",
				"top":0,
				"z-index":1000
			})
		}else if(top<59){
			$("#search-bokan").css("position","static")
		}
	})
})
$(function() {
	var sWidth = $("#focus").width();
	var len = $("#focus ul li").length;
	var index = 0;
	var picTimer;
	var iWidth = $(window).width();
	$("#focus ul li img,#focus ul li").css("width",iWidth);
	$("#focus ul").css("width",sWidth * (len));
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},3000);
	}).trigger("mouseleave");
	function showPics(index) {
		var nowLeft = -index*sWidth;
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300);
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
});
$(function(){
	$("._ytable ul:not(:first) li:not(:first)").css({
		"height":function(){
			return $(this).prev().height();
		},
		"lineHeight":function(){
			return $(this).prev().height()+"px";
		}

	})
	$("._ytable ul:even").css({
		"background":"#f2f2f2"
	})
	$(".btnGreen, .btnBlue, ._yApply , ._yJoin").click(function(){
		$(".alertBox").show();
	})
	$(".close").click(function(){
		$(".alertBox").hide();
	})

});