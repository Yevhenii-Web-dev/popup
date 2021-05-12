<?php
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['rezultCounter']) && isset($_POST['rezultSelect'])){
    $i1 = $_POST['i1'];
    $i2 = $_POST['i2'];
    $i3 = $_POST['i3'];
    $rezultSelect = $_POST['rezultSelect'];
    $rezultCounter = $_POST['rezultCounter'];
    $body = $_POST['body'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //smtp settings
    

    //email settings
    

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    }
    else
    {
        $status = "failed";
        $response = "Something is wrong: <br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}

?>