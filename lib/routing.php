<?php
  // Grabs the URI and breaks it apart in case we have querystring stuff
  $request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);

  // Route it up!
  switch ($request_uri[0]) {
    // Home page
    case '/':
        require 'controllers/home/index.php';
        break;
    // Memberships page
    case '/memberships':
        require 'controllers/memberships/index.php';
        break;
    case '/memberships/signup':
        require 'controllers/memberships/signup.php';
        break;
    case '/memberships/login':
        require 'controllers/memberships/login.php';
        break;
    case '/memberships/admin':
        require 'controllers/memberships/admin.php';
        break;
    case '/memberships/add':
        require 'controllers/memberships/add.php';
        break;
    // Everything else
    default:
        header('HTTP/1.0 404 Not Found');
        require 'controllers/404/index.php';
        break;
  }

?>