// /////////// 申请提现
var dHidden=document.getElementById("div_hidden");
var nn=document.getElementById("nn");
nn.onclick=function(){
	dHidden.style.display="block";
}
var nn1=document.getElementById("div_hidden_1_2");
var nn2=document.getElementById("div_hidden_2_2");
var nn3=document.getElementById("div_hidden_2_1");
nn1.onclick=function(){
	dHidden.style.display="none";
}
nn2.onclick=function(){
	dHidden.style.display="none";
}
nn3.onclick=function(){
	dHidden.style.display="none";
}
/////////////////////////////////////////////////////////////////未认证
var no8=document.getElementById("no8");
var mouse1=document.getElementById("mouse1");
no8.onmouseover=function(){
mouse1.style.display="block";
}
no8.onmouseout=function(){
mouse1.style.display="none";
}
////////////////// 道具明细   任务收入

$("#oUltablexia1_center_ul>li").click(function(){
		$("#odiv222odiv222>div").hide().eq($(this).index()).show()
		$("#oUltablexia1_center_ul>li").css("border","0px solid #e6e6e6")
		$("#oUltablexia1_center_ul>li").css("background-color","white")
		$("#oUltablexia1_center_ul>li").eq($(this).index()).css("background-color","#fafafa") 
		$("#oUltablexia1_center_ul>li").eq($(this).index()).css("border-top","1px solid #e6e6e6") 
		$("#oUltablexia1_center_ul>li").eq($(this).index()).css("border-right","1px solid #e6e6e6") 
		$("#oUltablexia1_center_ul>li").eq($(this).index()).css("border-left","1px solid #e6e6e6") 
		$("#oUltablexia1_center_ul>li").eq($(this).index()).css("background","#fafafa;") 

})
////我的道具

$("#prop_content_hidden_head2_2").click(function(){
	$("input[name=browser]").attr("checked",false)
	$("#prop_content_hidden").css("display","none");
})
$("#prop_content_hidden_foot_1_2").click(function(){
	$("input[name=browser]").attr("checked",false)
	$("#prop_content_hidden").css("display","none");
})
$("#prop_content_hidden_foot_1_3_1").click(function(){
	$("input[name=browser]").attr("checked",false)
	$("#prop_content_hidden").css("display","none");
})
$("dd.sy1").click(function(){
	$("#prop_content_hidden").css("display","block");
})
// //已使用的道具

$(".prop_head>li").click(function(){
		$(".oUltablexia2>div").hide().eq($(this).index()).show()
		$(".prop_head>li").css("border","0px solid #e6e6e6")
		$(".prop_head>li").css("background-color","white")
		$(".prop_head>li").eq($(this).index()).css("background-color","#fafafa") 
		$(".prop_head>li").eq($(this).index()).css("border-top","1px solid #e6e6e6") 
		$(".prop_head>li").eq($(this).index()).css("border-right","1px solid #e6e6e6") 
		$(".prop_head>li").eq($(this).index()).css("border-left","1px solid #e6e6e6") 
		$(".prop_head>li").eq($(this).index()).css("background","#fafafa;") 
})

///我的礼物

$(".gift_hidden_2_2").click(function(){
	$(".gift_hidden").css("display","none");
	$(".quanxuan").prop("checked",false)
	$(".duihuan").css("background","");
	$(".duihuan").css("width","60px");
})
$(".gift_hidden_1_2").click(function(){
	$(".gift_hidden").css("display","none");
	$(".quanxuan").prop("checked",false)
	$(".duihuan").css("background","");
	$(".duihuan").css("width","60px");
})
$(".gift_hidden_2_1").click(function(){
	$(".gift_hidden").css("display","none");
	$(".quanxuan").prop("checked",false)
	$(".duihuan").css("background","");
	$(".duihuan").css("width","60px");
})
$(".quanxuan").click(function(){
	if($(".quanxuan").prop("checked")==true){
		$(".duihuan").css("background","#52bfff");
		$(".duihuan").css("width","61px");
	}else{
		$(".duihuan").css("width","60px");
		$(".duihuan").css("background","");
	}
})

$(".duihuan").click(function(){
	if($(this).css("width")=="60px"){
			
		$(this).css("background","#52bfff");
		$(this).css("width","61px");
	}else{
		$(this).css("background","");
		$(this).css("width","60px");
	}
})

$(".dhnjb").click(function(){
	$(".gift_hidden").css("display","block");
})

///礼物管理
$(".gift_head>li").click(function(){
	$(".gift>div").hide().eq($(this).index()).show()
	$(".gift_head>li").css("border","0px solid #e6e6e6")
	$(".gift_head>li").css("background-color","white")
	$(".gift_head>li").eq($(this).index()).css("background-color","#fafafa") 
	$(".gift_head>li").eq($(this).index()).css("border-top","1px solid #e6e6e6") 
	$(".gift_head>li").eq($(this).index()).css("border-right","1px solid #e6e6e6") 
	$(".gift_head>li").eq($(this).index()).css("border-left","1px solid #e6e6e6") 
	$(".gift_head>li").eq($(this).index()).css("background","#fafafa;") 
})
$(".oUltable>li").click(function(){
	$(".oUltablexia>div").hide().eq($(this).index()).show()
	$(".oUltable>li").css("border","0px solid #e6e6e6")
	$(".oUltable>li").eq($(this).index()).css("border-bottom","3px solid #59bff9") 

})

	



