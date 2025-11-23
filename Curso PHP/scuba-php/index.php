
<?php
require_once 'boot.php';
require_once 'controller.php';

$page = $_GET['page'] ?? 'home';

switch ($page) {
    case 'register':        do_register(); break;
    case 'login':           do_login();    break;
    case 'home':            render_view('home'); break;
    case 'mail-validation': do_validation(); break;
    default:                do_not_found(); break;
}
