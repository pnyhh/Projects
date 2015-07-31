
	function getclass(o,s){//o代表父元素，s代表元素们的定好的class
		var arr1=[];     //设定一个数组；
		var a=o.getElementsByTagName('*');// a代表元素们
		for(var i=0;i<a.length;i++){ 	
			if(a[i].className==s){		//
				arr1.push(a[i]);
			}
		}
		return arr1;
	}

