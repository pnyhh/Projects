// 修改个人信息
var ospan1=document.getElementById("span1");
var ospan2=document.getElementById("span2");
var i1=document.getElementById("i1");
var i2=document.getElementById("i2");
ospan1.onclick=function(){
	i1.removeAttribute("readOnly");
}
i1.onmouseout=function(){
	i1.setAttribute("readOnly",true); 
} 
ospan2.onclick=function(){
	i2.removeAttribute("readOnly");
}
i2.onmouseout=function(){
	 i2.setAttribute("readOnly",true); 
} 
