<?php
session_start();
require_once 'boot.php';
require_once 'auth.php';
require_once 'routes.php'; 

// Parse route from ?page= or from path
$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$route = $_GET['page'] ?? ($uri ?: 'home');

if (auth_user()) {
    auth_routes($route);
} else {
    guest_routes($route);
}
