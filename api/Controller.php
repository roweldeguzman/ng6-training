<?php
    class Controllerbase{   
        private $_connection;    
        private $HOST = "localhost";
        private $USER = "root";
        private $PASS = "admin";
        private $DB = "training";
        
        public function connect(){
            $conn = new mysqli($this->HOST,$this->USER,$this->PASS,$this->DB);
            
            return $conn;
        
        }
        /**
        * @param    string  required
        * @param    bool    oprional
        * 
        * @return   object
        */
        public function getPost($param, $scape = true){
            $connect    =   $this->connect();
            $data = json_decode(file_get_contents('php://input'), true);
            if ($scape) {
                return $this->escapeString(htmlspecialchars($data[$param], ENT_QUOTES));
            } else {
                // this return for array content
                return $data[$param];
            }
        }
        /**
        * @param    string  required
        * @param    bool    oprional
        * 
        * @return   object
        */
        public function get($param, $scape = true){
            $connect    =   $this->connect();
            if ($scape){
                return $this->escapeString(htmlspecialchars($_GET[$param], ENT_QUOTES));
            }
            else{
                // this return for array content
                return $_POST[$param];
            }
        }
        /**
        * @param    post_value  required
        * 
        * @return   scape sting
        */
        public function escapeString($param){
            $connect    =   $this->connect();
            return mysqli_real_escape_string($connect,$param);
        }
        /**
        * @params    array   required
        * 
        * @return    string
        */
        public function validate($params){
            
            if (is_array($params)){
                foreach($params as $param) {
                    if (strlen(trim($param["content"])) == 0){
                        return array(
                            "status" => 500,
                            "error"=> $param["error"]
                        );
                        exit;
                        break;
                    }
                }
                
                return array(
                    "status" => 200,
                    "error"=> ""
                );
                
            } else {
                return array(
                    'status' => 500,
                    'nessage'=> "Value provided is not an array."
                );
                
            }
            
        }
        public function respond($data){
            return json_encode($data);
        }
        
        public function paginateDisplay($rowlimit,$page,$total){
            $mid_range      =   7;
            $itemPerPage    =   $rowlimit;
            $noOfPage       =   ceil($total/$itemPerPage);
            $end_range      =   0;
            $start_range    =   0;
            $current_page   =   (int) $page;
            if($current_page < 1 Or !is_numeric($current_page)) $current_page = 1;
            if($current_page > $noOfPage) $current_page = $noOfPage;
            $prev_page = $current_page-1;
            $next_page = $current_page+1;
            if($noOfPage > 10){
                $start_range = $current_page - floor($mid_range/2);
                $end_range = $current_page + floor($mid_range/2);

                if($start_range <= 0){
                    $end_range += abs($start_range)+1;
                    $start_range = 1;
                }
                if($end_range > $noOfPage){
                    $start_range -= $end_range-$noOfPage;
                    $end_range = $noOfPage;
                }
            }
            $range = array($start_range, $end_range,$mid_range);
            return array(
                'noOfPage'      =>  $noOfPage,
                'currentPage'   =>  $current_page,
                'nextPage'      =>  $next_page,
                'prevPage'      =>  $prev_page,
            );
        }
        
        public function getData($page = 1, $type = 'all'){
            $connect = $this->connect();
            $offset     =   ($page-1) * 10;
            if ($type == "event"){
                $query  =   $connect->query("SELECT * FROM event LIMIT 10 OFFSET $offset");
                if (!$connect->error){
                    if ($query->num_rows > 0){
                        $total  =   $connect->query("SELECT * FROM visitor");
                        
                        $data   =   array();
                        while($row = $query->fetch_object()){
                            $data[] =   array(
                                'key'       =>  $row->id,
                                'company'   =>  $row->company,
                                'name'      =>  $row->name,
                                'email'     =>  $row->email,
                                'hash'      =>  md5($row->id."-leverage")
                            );
                        }
                        
                        return array(
                            "data"  =>  $data,
                            "pageInfo"  =>  $this->paginateDisplay(10, $page, $total->num_rows)
                        );
                    }
                    else{
                        return array(
                            "data"  =>  [],
                            "pageInfo"  =>  0
                        );
                    }
                }
            }
            else if ($type == "exhibit"){
                $query  =   $connect->query("SELECT * FROM exhibit LIMIT 10 OFFSET $offset");
                if (!$connect->error){
                    if ($query->num_rows > 0){
                        $total  =   $connect->query("SELECT * FROM exhibitor");
                        
                        $data   =   array();
                        while($row = $query->fetch_object()){
                            $data[] =   array(
                                'key'               =>  $row->id,
                                'company'           =>  $row->company,
                                'contactPerson'     =>  $row->contact_person,
                                'designation'       =>  $row->designation,
                                'hash'              =>  md5($row->id."-leverage")
                            );
                        }
                        
                        return array(
                            "data"  =>  $data,
                            "pageInfo"  =>  $this->paginateDisplay(10, $page, $total->num_rows)
                        );
                    }
                    else{
                        return array(
                            "data"  =>  [],
                            "pageInfo"  =>  0
                        );
                    }
                }    
            }
            else if ($type == "conference"){
                $query  =   $connect->query("SELECT * FROM conference LIMIT 10 OFFSET $offset");
                if (!$connect->error){
                    if ($query->num_rows > 0){
                        $total  =   $connect->query("SELECT * FROM conference");
                        
                        $data   =   array();
                        while($row = $query->fetch_object()){
                            $data[] =   array(
                                'key'               =>  $row->id,
                                'company'           =>  $row->company,
                                'contactPerson'     =>  $row->contact_person,
                                'designation'       =>  $row->designation,
                                'hash'              =>  md5($row->id."-leverage")
                            );
                        }
                        
                        return array(
                            "data"  =>  $data,
                            "pageInfo"  =>  $this->paginateDisplay(10, $page, $total->num_rows)
                        );
                    }
                    else{
                        return array(
                            "data"  =>  [],
                            "pageInfo"  =>  0
                        );
                    }
                }    
            }
        }
    }
?>