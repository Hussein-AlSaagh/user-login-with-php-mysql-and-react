<?php
//solve cross origin problems
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
//print_r($data);
$first_name = $data->first_name;
$last_name = $data->last_name;
$age = $data->age;
$gender = $data->gender;
$email = $data->Email;
$password = $data->password;

//set your right port settings the user and password from your webserver environment from your server programm (mamp or xampp)
$con = mysqli_connect("localhost:8888","root","root");
//set here your db name for the register form
mysqli_select_db($con, "react-login-register");

$sql = "insert into register(
    first_name,
    last_name,
    age,
    gender,
    email,
    password
  )
  values(
    '$first_name',
    '$last_name',
    '$age',
    '$gender',
    '$email',
    '$password'
)";

$result = mysqli_query($con,$sql);

if($result){
  $response['data']=array(
    'status' => 'valid'
  );
  echo json_encode($response);
}
else{
  $response['data']=array(
    'status'=>'invalid'
  );
  echo json_encode($response);
}
?>
