<?php
/**
 * Created by PhpStorm.
 * User: leon
 * Date: 15/11/3
 * Time: 下午4:02
 */
function accessToken() {

     $appid = "wxf31739c56da3e4d1";
     $appsecret = "b3de00681f2b220ed21d6eec086740b9";
        $result = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
        $myContent=file_get_contents($result);

         $res = json_decode($myContent);
        $access_token = $res->access_token;
     
 

//    $tokenFile = "access_token.txt";//缓存文件名
//    $data = json_decode(file_get_contents($tokenFile));
//    if ($data->expires_in< time() or !$data->expires_in) {
//        $appid = "wxf31739c56da3e4d1";
//        $appsecret = "b3de00681f2b220ed21d6eec086740b9";
//        $result = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
//        $myContent=file_get_contents($result);
//        $res = json_decode($myContent);
////        $res = getJson($url);
//        $access_token = $res->access_token;
//        if($access_token) {
//            $data['expires_in'] = time() + 7000;
//            $data['access_token'] = $access_token;
//            $fp = fopen($tokenFile, "w")or die("Unable to open file!");
//            fwrite($fp, json_encode($data));
//            fclose($fp);
//        }
//    } else {
//        $access_token = $data->access_token;
//    }
    return $access_token;
}
$new1 = accessToken();
$result_second = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=$new1&type=jsapi";
$ticket=file_get_contents($result_second);
$arr2 = json_decode($ticket);
$new2 =$arr2->ticket;
echo json_encode(array("ticket"=>$new2));
