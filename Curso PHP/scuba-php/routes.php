<?php

require_once 'controller.php';

$page = $_GET['page'] ?? 'home'; // define 'home' como padrão

switch ($page) {
    case 'register':
        do_register();
        break;
    case 'login':
        do_login();
        break;
    case 'home':
        render_view('home');
        break;
    default:
        do_not_found();
        break;
}
