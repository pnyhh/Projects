
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
