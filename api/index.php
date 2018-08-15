<?php 
    require_once("Controller.php");
    $obj        =   new Controllerbase();
    $connect    =   $obj->connect();
    
    if($connect->connect_errno){
        echo $obj->respond(array(
            "statusCode" => 500,
            "devMessage" => $connect->connect_error
        ));
        exit;
    }
    
    $method     =   $_SERVER['REQUEST_METHOD'];
    
    if ($method == "POST") {

        $firstName  =   $obj->getPost("firstName");
        $lastName   =   $obj->getPost("lastName");
        $email      =   $obj->getPost("email");
        
        $query = $connect->query("
            INSERT INTO users SET 
            firstName = '".$firstName."',
            lastName = '".$lastName."',
            email = '".$lastName."'");
        if (!$connect->error){
            echo $obj->respond(array(
                'statusCode'    =>  200,
                'devMessage'    =>  'ok'
            ));
        }
        else {
            echo $obj->respond(array(
                'statusCode'    =>  500,
                'devMessage'    =>  "MySQL error: $connect->error ",
            ));
        }
    }
    else if ($method == "GET") {
        $query  =   $connect->query("SELECT * FROM users"); 
        
        if (!$connect->error){
            if ($query->num_rows > 0){
                
                $data   =   array();
                while($row = $query->fetch_object()){
                    $data[] =   array(
                        'id'        =>  $row->id,
                        'firstName' =>  $row->firstName,
                        'lastName'  =>  $row->lastName,
                        'email'     =>  $row->email
                    );
                }
                
                echo $obj->respond(array(
                    'statusCode'    =>  200,
                    'devMessage'    =>  array(
                        "data"      =>  $data
                    )
                ));
            }
            else{
                echo $obj->respond(array(
                    'statusCode'    =>  200,
                    'devMessage'    =>  array(
                        "data"  =>  []
                    )
                ));
                
            }
        }
    }