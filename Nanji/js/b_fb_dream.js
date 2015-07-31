 var s=document.getElementById("i1");
 s.onclick=function(){
 	s.value=""
 }

  /* 第四个JS -->select选择城市*/
 var arr=[];
	arr[1]=["海淀区","朝阳区","东城区","石景山区","通州区","西城区"];
	arr[2]=["浦东新区","虹口区","静安区","宝山区","普陀区","徐汇区"];
	arr[3]=["济南市","济宁市","枣庄市","德州市","东营市","淄博市"];
	arr[4]=["大同市","晋城市","晋中市","常治市","临汾市","运城市"];
	arr[5]=["西安市","宝鸡市","汉中市","咸阳市","渭南市","商洛市"];
	arr[6]=["哈尔滨市","牡丹江市","佳木斯市","鸡西市","鹤岗市","大庆市"];
	var oSheng=document.getElementById('selt1');
	var oCity=document.getElementById('selt2');
	oSheng.onchange=function(){
		oCity.options.length=1;
		for(var i=0;i<arr[oSheng.value].length;i++){
			var opt=document.createElement("option");
			opt.innerHTML=arr[oSheng.value][i];
			oCity.appendChild(opt);
		}
	}



  
			
         
		
		