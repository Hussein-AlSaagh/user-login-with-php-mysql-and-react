<?php
//solve cross origin problems
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: access");
header("Access-Control-Allow-Methods: POST, GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//set your right port settings the user and password from your webserver environment from your server programm (mamp or xampp)
$con = mysqli_connect("localhost","root","root");
//set here your db name for the register form
mysqli_select_db($con, "react-login-register");

$data = json_decode(file_get_contents("php://input"));
//print_r($data);
$email = $data->email;
$password = $data->password;

//echo "SELECT * from register where email='".$email."' AND password='".$password"'";

$result = mysqli_query($con, "SELECT * from register where email='".$email."' AND password='".$password."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if($nums>=1){
  // 200 means success
  http_response_code(200);
  $outp = "";

  $outp .= '{"Email":"'  . $rs["email"] . '",';
  $outp .= '"Vorname":"'  . $rs["first_name"] . '",';
  $outp .= '"Nachname":"'  . $rs["last_name"] . '",';
  $outp .= '"Password":"'  . $rs["password"] . '",';
  $outp .= '"Status":"200"}';

  echo $outp;
}
else{
    //202 means failure
    http_response_code(202);
}
?>
