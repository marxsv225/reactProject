<?php


$conn=mysqli_connect('localhost','root','','reactdb');

$rest_json=file_get_contents("php://input");

$fields = json_decode($rest_json, true);


$username=$fields->username;

$email=$fields->emailid;

$send = mysqli_query($conn, "INSERT INTO contacts(username, email) VALUES('$username', '$email')");

// $raw_data=file_get_contents("php://input");

// $data=json_decode($raw_data);

// $username=$data->username;

// $emailid=$data->emailid;

// $sql= "INSERT INTO contacts(username, email) VALUES('$username', '$emailid')";

// $ret_data=mysqli_query($conn,$sql);


// include  "config.php";

// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input");
// $_POST = json_decode($rest_json, true);

// if( empty($_POST['username']) && empty($_POST['emailid']) ) {
//     echo json_encode(
//         [
//            "sent" => false,
//            "message" => $SendMailEmptyerrorMessage
//         ]
//     );
//     exit();
// }

// if ($_POST){
//     //@important: Please change this before using
//     http_response_code(200);
//     $nom = $_POST['username'];
//     $email = $_POST['emailid'];
//     //Actual sending email
//     $send = mysqli_query($con, "INSERT INTO contacts(username, email) VALUES('$nom', '$email')");

//     $result_response = json_encode($send);

//     echo($result_response);
// } else {
//  // tell the user about error
//  echo json_encode(
//      [
//         "sent" => false,
//         "message" => $SendMailFailederrorMessage
//      ]
//  );
// }

?>