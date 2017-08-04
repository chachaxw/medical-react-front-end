<?php
$code = $_GET['code'];//前端传来的code值
$appid = "wxf6b67372932818fe";
$appsecret = "d4624c36b6795d1d99dcf0547af5443d";//获取openid
$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
$result = https_request($url);
$jsoninfo = json_decode($result, true);
$openid = $jsoninfo["openid"];//从返回json结果中读出openid
$access_token = $jsoninfo["access_token"];//从返回json结果中读出openid
$callback=$_GET['callback'];  // echo $callback."({result:'".$openid."'})";

$url1 = "https://api.weixin.qq.com/sns/userinfo?access_token=$access_token&openid=$openid&lang=zh_CN";
$result1 = https_request($url1);
$jsoninfo1 = json_decode($result1, true);
$nickname=$jsoninfo1["nickname"];
echo $openid.":".$access_token.":".$nickname; //把openid 送回前端

 function https_request($url,$data = null){
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
  if (!empty($data)){
  curl_setopt($curl, CURLOPT_POST, 1);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
  }
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $output = curl_exec($curl);
  curl_close($curl);
  //这里添加插入数据库数据即可
  /*
   * //todo
   */
  return $output;
 }
 ?>