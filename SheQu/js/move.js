function getStyle(ele,prop){
	var value;
	if(prop in document.body.style){//获取样式
		if(window.getComputedStyle){
			value = getComputedStyle(ele,null)[prop];
		}else{
			value = ele.currentStyle[prop];
		}
		value = parseFloat(value);
	}else{
		value = oBox[prop];//获取类似scrollLeft
	}
	return value;
}
function startMove(obj,attr,iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur=0;
		if(attr=='opacity'){
			cur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur=parseInt(getStyle(obj,attr));
		}
		var speed=(iTarget-cur)/60;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==iTarget){
			clearInterval(obj.timer);
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opcity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px'
			}
		}
	},30)
}

