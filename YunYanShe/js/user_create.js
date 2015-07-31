$(".clear>li").click(function(){
	$(".clear>li").css({"color":"rgb(160,160,160)","background":"white"})
	$(this).css({"color":"rgb(53,76,104)","background":"rgb(130,193,234)"})
})
$(".content_nav>ul>li").click(function(){
	$(".content_nav>ul>li").css({"color":"rgb(160,160,160)","background":"white"})
	$(this).css({"color":"rgb(53,76,104)","background":"rgb(130,193,234)"})
})
$(function() {
	$('input, textarea').placeholder();
});
$(".Lmenu_main>ul>li").click(function(){
	$(".yonghu,.huodong,.shoucang,.xinxi").hide();
	$(".yonghu,.huodong,.shoucang,.xinxi").eq($(this).index()).show();
})
function tab(olis,odivs){
	for(var i=0;i<odivs.length;i++){
		olis[i].index = i;
		olis[i].onclick = function(){
				for(var i=0;i<odivs.length;i++){
					olis[i].style.background = "rgb(239,239,239)"
					odivs[i].style.display = "none";
				}
			olis[this.index].style.background = "rgb(130,193,234)"
			odivs[this.index].style.display = "block";
			}
		}
}
tab($(".yonghu>.side_R_nav>ul>li"),$(".yonghu_jichu,.yonghu_chuangye,.yonghu_touzi,.yonghu_mima,.yonghu_shezhi"))
tab($(".huodong>.side_R_nav>ul>li"),$(".huodong_tiaozhan,.huodong_jishu,.huodong_touzi"))
tab($(".shoucang>.side_R_nav>ul>li"),$(".shoucang_tiaozhan,.shoucang_jishu,.shoucang_xiangmu,.shoucang_rencai"))
tab($(".xinxi>.side_R_nav>ul>li"),$(".xinxi_new,.xinxi_old,.xinxi_shoucang"))
