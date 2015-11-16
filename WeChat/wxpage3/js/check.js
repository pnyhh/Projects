var createNonceStr = function () {
    return Math.random().toString(36).substr(2, 15);
};
var createTimestamp = function () {
    return parseInt(new Date().getTime() / 1000) + '';
};
var raw = function (args) {
    var keys = Object.keys(args);
    keys = keys.sort()
    var newArgs = {};
    keys.forEach(function (key) {
        newArgs[key.toLowerCase()] = args[key];
    });
    var string = '';
    for (var k in newArgs) {
        string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    return string;
};
var sign = function (jsapi_ticket, url) {
    var ret = {
        jsapi_ticket: jsapi_ticket,
        nonceStr: createNonceStr(),
        timestamp: createTimestamp(),
        url: url
    };
    var string = raw(ret);
    shaObj = new jsSHA(string, 'TEXT');
    ret.signature = shaObj.getHash('SHA-1', 'HEX');
    return ret;
};
function runfun(fun){
	setTimeout(fun, 2000);
}
function runajax (){
    $.ajax({
		type:"get",
		url:"weixin.php", //本地服务器接口
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data.ticket);
			set_ticket(data.ticket);
		}
	});
}
function set_ticket (data) {
    localStorage.setItem("ticket", data);
    window.location.reload();
}