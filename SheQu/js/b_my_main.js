
// ajax转换
// 物业
	$(".f_div3").click(function(){
		$(".huanzi").html("物业信息");
				$(".b_ajax").load("1.html?date="+Math.random());
				$(".v_footer").show();
	});

	// 消息1
	$(".oA1").click(function(){
		$(".huanzi").html("我的消息");
				$(".b_ajax").load("2.html?date="+Math.random());
				$(".v_footer").show();
	});
	//我的收藏
	$(".oA3").click(function(){
		$(".huanzi").html("我的收藏");
				$(".con_ajax").load("4.html?date="+Math.random());
	$(".v_footer").show();
	});

	// 邀请加入   table切换
	$(".f_div1").click(function(){
		if($(".invite_2").css("display")=="none"){
			$(".huanzi").html("邀请加入");
			$(".invite_1").hide();
			$(".invite_2").show();
		}else{
			$(".huanzi").html("个人中心");
			$(".invite_1").show();
			$(".invite_2").hide();
		}
		
	});