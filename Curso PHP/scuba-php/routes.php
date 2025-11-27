<?php
require_once 'controller.php';

function guest_routes($route) {
    switch ($route) {
        case 'register': 
            do_register(); 
            break;
        case 'login': 
            do_login(); 
            break;
        case 'mail-validation': 
            do_validation(); 
            break;
        default: 
            do_not_found(); 
            break;
    }
}

function auth_routes($route) {
    switch ($route) {
        case 'home':
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
