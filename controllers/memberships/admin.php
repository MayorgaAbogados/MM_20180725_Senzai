<?php
    session_start();
    if(isset($_SESSION["mm-login-session-token"])){
        require 'views/memberships/admin.php';
    }else{
        require 'views/memberships/noallow.php';
    }

?>