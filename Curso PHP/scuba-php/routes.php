<?php
require_once 'controller.php';

function guest_routes($route) {
    switch ($route) {
        case 'home':
            // For guests, show the login page when they hit /
            do_login();
            break;
        case 'register': 
            do_register(); 
            break;
        case 'login': 
            do_login(); 
            break;
        case 'mail-validation': 
            do_validation(); 
            break;
        case 'forget-password':
            do_forget_password();
            break;
        case 'change-password':
            do_change_password();
            break;
        default: 
            do_not_found(); 
            break;
    }
}

function auth_routes($route) {
    switch ($route) {
        case 'home':
            // For authenticated users, show the home page
            do_home();
            break;
        case 'logout':
            do_logout();
            break;
        case 'delete-account':
            do_delete_account();
            break;
        default:
            do_not_found();
            break;
    }
}
