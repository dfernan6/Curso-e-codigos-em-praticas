<?php
session_start();
require_once 'boot.php';
require_once 'auth.php';
require_once 'routes.php'; 

$route = $_GET['page'] ?? 'login';

if (auth_user()) {
    auth_routes($route);
} else {
    guest_routes($route);
}
